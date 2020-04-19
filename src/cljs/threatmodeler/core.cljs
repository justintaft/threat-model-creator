(ns threatmodeler.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [cljsjs.react-draggable]
            [goog.string.format]
            [cljs.test :refer-macros [deftest is testing]]))

(def threat-model (r/atom { :elements { 1 {:type :actor :name "hackerman" :x 50 :y 50 :width 100 :height 50 :id 1}
                                       2 {:type :process :name "webapp" :id 2 :x 400 :y 100 :width 100 :height 100}
                                       3 {:type :datastore :name "datastore" :id 3 :x 100 :y 400 :width 100 :height 50}
                                       4 {:type :communication :from 1 :to 2}
                                       5 {:type :communication :from 1 :to 3}
                                       6 {:type :boundary :x1 100 :y1 200 :x2 100 :y2 300}}
                           :threats []}))


(defonce timer (r/atom (js/Date.)))

(defonce time-color (r/atom "#f34"))

(defonce time-updater (js/setInterval
                       #(reset! timer (js/Date.)) 1000))


(defn clock []
  (let [time-str (-> @timer .toTimeString (str/split " ") first)]
    [:div.example-clock
     {:style {:color @time-color}}
     time-str]))

(defn color-input []
  [:div.color-input
   "Time color: "
   [:input {:type "text"
            :value @time-color
            :on-change #(reset! time-color (-> % .-target .-value))}]])

(def draggable (r/adapt-react-class js/ReactDraggable))

(defn calculate-line-points [element1 element2]
  "Find best line between two elements, and return points."

  (cond
    ;left of second element
    (< (+ (:x element1) (:width element1)) (:x element2))
    {:x1 (+ (:x element1) (:width element1))
     :y1 (+ (:y element1) (/ (:height element1) 2))
     :x2 (:x element2)
     :y2 (+ (:y element2) (/ (:height element2) 2))}

    ;to right of second element
    (> (:x element1) (+ (:x element2) (:width element2)))
    {:x1 (+ (:x element2) (:width element2))
     :y1 (+ (:y element2) (/ (:height element2) 2))
     :x2 (:x element1)
     :y2 (+ (:y element1) (/ (:height element1) 2))}


    ;above second element
    (< (:y element1) (:y element2))
    {:x1 (+ (:x element1) (/ (:width element1) 2))
     :y1 (+ (:y element1) (:height element1))
     :x2 (+ (:x element2) (/ (:width element2) 2))
     :y2 (:y element2)}


    ;below second elements
    true
    {:x1 (+ (:x element2) (/ (:width element2) 2))
     :y1 (+ (:y element2) (:height element2))
     :x2 (+ (:x element1) (/ (:width element1) 2))
     :y2 (:y element1)}))

    


                                            



(defn render-line [ {:keys [x1 y1 x2 y2 style] :as line}]
  (let [lineLength (js/Math.sqrt (+ (js/Math.pow (- x2 x1) 2)
                                    (js/Math.pow (- y2 y1) 2)))

        slope (/ (- y1 y2) (- x1 x2))


        ;We have to do some funky math to rotations, as Y is inverted on screen
        ;(higher Y cord is lowe ron screen...)
        rotationDegree (if (and (>= x1 x2)
                                (< y1 y2))
                         (- js/Math.PI   (* -1 (js/Math.atan slope)))
                         (js/Math.atan slope))
        style (or style "solid")]
        

    
    (js/console.log rotationDegree)

    [(if (:draggable line) draggable :span) [:div.line.diagram-threat-model-element {:style {:height "2px"
                                                                                             :width (goog.string.format "%dpx" lineLength)
                                                                                             :border-top (goog.string.format "2px %s black" style)
                                                                                             :transform (goog.string.format "translate(%dpx,%dpx) rotate(%frad)" x1 y1 rotationDegree)
                                                                                             :transform-origin "center left"
                                                                                             :padding (if (:draggable line) "5px" "0")}}]]))

                                                                                     
     

(defn diagram-event-element-drag-stop [id event data]
  "Persist position of dragged threat model diagram element to local state."
  (swap! threat-model update-in [:elements id] merge {:x (-> data .-lastX) :y (-> data .-lastY)}))


(defn render-threat-model-element-common [{:keys [x y type name id]}]
  [draggable {:grid [25 25]
              :defaultPosition {:x x :y y}
              :onStop (partial diagram-event-element-drag-stop id)}
   [:span.diagram-threat-model-element {:class (str "diagram-" (cljs.core/name type))
                                        :style {:transform (goog.string.format "translate(%dpx,%dpx)" x y)}}
    [:p name]]])


(defn render-threat-model-element-communication [element elements]
  [render-line (calculate-line-points (get elements (:from element)) (get elements (:to element) ))])

(defn render-threat-model-element-boundary [element elements]
  [render-line (merge element {:style "dashed" :draggable true})])

(defmulti render-threat-model-element (fn [element _] (:type element)))
(defmethod render-threat-model-element :actor [element] (render-threat-model-element-common element))
(defmethod render-threat-model-element :process [element] (render-threat-model-element-common element))
(defmethod render-threat-model-element :datastore [element] (render-threat-model-element-common element))
(defmethod render-threat-model-element :communication [element elements] (render-threat-model-element-communication element elements))
(defmethod render-threat-model-element :boundary [element elements] (render-threat-model-element-boundary element elements))

(defn simple-example [threat-model]
  [:div
   (for [element (vals (:elements @threat-model))]
     (render-threat-model-element element (:elements @threat-model)))
   [clock]
   [color-input]])


(defn ^:export init! [])
(rdom/render [simple-example threat-model] (js/document.getElementById "app"))

