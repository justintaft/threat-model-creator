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

    [:div {:style {:display :inline-block
                   :height "1px"
                   :width (goog.string.format "%dpx" lineLength)
                   :color "black"
                   :background-color "black"
                   :transform (goog.string.format "rotate(%frad)" rotationDegree )
                   :transform-origin "center left"}}]))
  
                          
(defn render-threat-model-element [element]
  [draggable {:grid [25 25]}
   [:span {:class (str "diagram-" (name (:type element)))
           :style {:left (:x element) :top (:y element)}} "hmm"]])


(defn simple-example [threat-model]
  [:div
   [render-line {:x1 0 :y1 0 :x2 200 :y2 200}]
   (for [element (:elements threat-model)]
     (render-threat-model-element element))
   [greeting "Hello world, it is now"]
   [clock]
   [color-input]])

(def threat-model { :elements [ {:type :actor :name "hackerman" :id "1" :x 30 :y 30}
                                {:type :process :name "webapp" :id "2" :x 30 :y 80}]
                     :threats []})



(defn ^:export init! [])
(rdom/render [simple-example threat-model] (js/document.getElementById "app"))

