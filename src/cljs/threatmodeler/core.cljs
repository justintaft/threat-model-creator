(ns threatmodeler.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [cljsjs.react-draggable]
            [goog.string.format]))

(defonce timer (r/atom (js/Date.)))

(defonce time-color (r/atom "#f34"))

(defonce time-updater (js/setInterval
                       #(reset! timer (js/Date.)) 1000))


(defn greeting [message]
  [:h1 message])

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


(defn render-line [ {:keys [x1 y1 x2 y2] } ]
  (let [lineLength (js/Math.sqrt (+ (js/Math.pow (- x2 x1) 2)
                                    (js/Math.pow (- y2 y1) 2)))
        slope (/ (- y2 y1) (- x2 x1))
        rotationDegree (js/Math.atan slope)]

    [:div.line.diagram-threat-model-element {:style {:display :inline-block
                                                     :left "0px"
                                                     :top "0px"
                                                     :height "2px"
                                                     :width (goog.string.format "%dpx" lineLength)
                                                     :color "black"
                                                     :background-color "black"
                                                     :transform (goog.string.format "translate(%dpx,%dpx) rotate(%frad)" x1 y1 rotationDegree )
                                                     :transform-origin "center left"}}]))

(defn calculate-line-points [element1 element2]
  (let [ele1WidthDiv2 (/ (:width element1) 2)
        ele1HeightDiv2 (/ (:height element1) 2)
        ele2WidthDiv2 (/ (:width element2) 2)
        ele2HeightDiv2 (/ (:height element2) 2)]
    {:x1 (+ (:x element1) (:width element1) )
     :y1 (+ (:y element1) ele1WidthDiv2)
     :x2 (:x element2)
     :y2 (+ (:y element2) ele2HeightDiv2)}))


(defn render-threat-model-element-common [{:keys [x y type]}]
  [draggable {:grid [25 25] :defaultPosition {:x x :y y}}
   [:span {:class (str "diagram-" (name type))
           :style {:transform (goog.string.format "translate(%dpx,%dpx)" x y)}}]])


(defn render-threat-model-element-communication [element elements]
  [render-line (calculate-line-points ((:from element) elements) ((:to element) elements))])

(defmulti render-threat-model-element (fn [element _] (:type element)))
(defmethod render-threat-model-element :actor [element] (render-threat-model-element-common element))
(defmethod render-threat-model-element :process [element] (render-threat-model-element-common element))
(defmethod render-threat-model-element :communication [element elements] (render-threat-model-element-communication element elements))

(defn simple-example [threat-model]
[:div
(for [element (vals (:elements threat-model))]
  (render-threat-model-element element (:elements threat-model)))
[greeting "Hello world, it is now"]
[clock]
[color-input]])

(def threat-model { :elements { :1 {:type :actor :name "hackerman" :x 30 :y 30 :width 100 :height 100}
                               :2 {:type :process :name "webapp" :id "2" :x 400 :y 80 :width 100 :height 50}
                               :3 {:type :communication :from :1 :to :2 }}
                   :threats []})



(defn ^:export init! [])
(rdom/render [simple-example threat-model] (js/document.getElementById "app"))

