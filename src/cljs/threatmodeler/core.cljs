(ns threatmodeler.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [goog.string.format]
            [react-moveable :as Moveable]
            [cljs.test :refer-macros [deftest is testing]]
            [reagent-keybindings.keyboard :as kb]))

(defn html-element->element-id [element]
  (-> element .-dataset .-elementId))

(def app-state (r/atom {:ui-state {:active-moveable-id nil
                                   :currently-dragged-element-id nil
                                   :last-element-dragged nil
                                   :last-item-shift-clicked nil}
                        :threat-model {:elements {} :threats []}}))

(def ui-state (r/cursor app-state [:ui-state]))
(def threat-model (r/cursor app-state [:threat-model]))


;TODO add validation to ensure only valid properties are provided
(defmulti create-element :type)
(defmethod create-element :actor          [d] (merge {:id (str (random-uuid)) :name "TODO" :width 100 :height 50 :x 100 :y 100} d))
(defmethod create-element :process        [d] (merge {:id (str (random-uuid)) :name "TODO" :width 100 :height 100 :x 100 :y 100} d))
(defmethod create-element :datastore      [d] (merge {:id (str (random-uuid)) :name "TODO" :width 100 :height 50 :x 100 :y 100} d))
(defmethod create-element :boundary       [d] (merge {:id (str (random-uuid)) :width 100 :height 20 :x 100 :y 100} d))
(defmethod create-element :communication  [d] (merge {:id (str (random-uuid))} d))


(defn add-element [app-state data]
  "Add an element to the given app state."
  (let [element (create-element data)]
    (assoc-in app-state [:threat-model :elements (:id element)] element)))

(defn add-element! 
  "Adds element to threat model, and udpates corresponding atom."
  [data]
  (let [element (create-element data)]
    (swap! app-state add-element data)))


(defn filter-elements-referencing-element-id [element-id element]
  "Return elements which directly references element."
  (contains? (set (vals (select-keys element [:to :from :id]))) element-id ))

(defn delete-element-and-communications
  "Deletes element from threat model, and any communications referencing it"
  [app-state element]
  (let [referencing-elements (filter (partial filter-elements-referencing-element-id (:id element)) (-> app-state :threat-model :elements (vals)))
        referencing-element-ids (map :id referencing-elements)]
    (update-in app-state [:threat-model :elements] (fn [x] (apply dissoc x app-state referencing-element-ids)))))
(defmulti delete-element (fn [app-state element] (:type element)))
(defmethod delete-element :communication [app-state element] (update-in app-state [:threat-model :elements] dissoc (:id element)))
(defmethod delete-element :default [app-state element] (delete-element-and-communications app-state element))
             

;Populate threat model with example data
(add-element! (create-element {:type :actor         :name "hackerman" :x 50  :y 150 :id "hackerman1"}))
(add-element! (create-element {:type :process       :name "webapp"    :x 400 :y 125 :id "webapp1"}))
(add-element! (create-element {:type :datastore     :name "database"  :x 50  :y 300 :id "datastore1"}))
(add-element! (create-element {:type :communication :from "hackerman1" :to "webapp1"}))
(add-element! (create-element {:type :communication :from "hackerman1" :to "datastore1"}))
(add-element! (create-element {:type :boundary}))


(defn set-active-moveable-element!
  "Sets the active element which can be moved and dragged around.
   If an item is currently being transformed, the active element is not updated."

  [id e]
  (when-not (:currently-dragged-element-id @ui-state)
    (swap! ui-state assoc :active-moveable-id id)))

  

(def moveable (r/adapt-react-class Moveable))

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








(defn render-line [ {:keys [x1 y1 x2 y2 style id] :as line}]
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
  

  [:div.line.diagram-threat-model-element {:style {:height "2px"
                                                   :width (goog.string.format "%dpx" lineLength)
                                                   :border-top (goog.string.format "2px %s black" style)
                                                   :transform (goog.string.format "translate(%dpx,%dpx) rotate(%frad)" x1 y1 rotationDegree)
                                                   :transform-origin "center left"
                                                   :padding (if (:draggable line) "5px" "0")}
                                           :class (str "moveable-element-" id)
                                           :on-mouse-over (partial set-active-moveable-element! id)}]))


(defn get-closest-html-element 
  "Given a HTML element and selector, find the closest node to it.
   If the selector matches the given node, return the curret node."
  [element selector]
  (.closest element selector))

(defn diagram-element-event-on-mouse-up! 
  "Handles on mouse up event for diagram elements.
   Used to connect diagram elements together when shift key is 
   held while clicking elements."

  [element-id e]
  (when e.shiftKey
    (swap! app-state
           (fn [state]
             (let [last-item-shift-clicked (-> state :ui-state :last-item-shift-clicked)]

               ;When we have a item we previously shift-clicked, connect the elements together
               ;and forger the last element clicked
               (if last-item-shift-clicked
                 (-> (add-element state {:type :communication :from last-item-shift-clicked :to element-id})
                     (assoc-in [:ui-state :last-item-shift-clicked] nil))

                                        ;If we haven't previously shift-clicked an item, just remember it
                 (assoc-in state [:ui-state :last-item-shift-clicked] element-id)))))))


(defn render-threat-model-element-common [{:keys [x y type name id rotate]}]
  [:span.diagram-threat-model-element {:class (str "diagram-" (cljs.core/name type)
                                                   " moveable-element-" id)
                                       :style {:transform (goog.string.format "translate(%dpx,%dpx) rotate(%ddeg)" x y (or rotate 0))}
                                       :data-element-id id
                                       :on-mouse-up (partial diagram-element-event-on-mouse-up! id)
                                       :on-mouse-over (partial set-active-moveable-element! id)}
   [:p name]])


(defn handle-backspace-pressed! []
  "Handles backspace key event. Causes element to be deleted."
  (when-let [current-element-id (get-in @app-state [:ui-state :active-moveable-id])]
    (when-let [current-element (get-in @app-state [:threat-model :elements current-element-id])]
      (swap! app-state delete-element current-element))))

(defn handle-enter-pressed! []
  "Handles pressing over enter key for diagram elements. Used to re-name element."
  (when-let [current-element-id (get-in @app-state [:ui-state :active-moveable-id])]
    (when-let [current-element (get-in @app-state [:threat-model :elements current-element-id])]
      (swap! app-state assoc-in [:threat-model :elements current-element-id :name] (js/prompt "Element name:" (:name current-element))))))

(defn render-threat-model-element-communication [element elements]
  [render-line (merge (select-keys element [:id]) (calculate-line-points (get elements (:from element)) (get elements (:to element))))])

(defn render-threat-model-element-boundary [element elements]
  [render-line (merge element {:style "dashed" :draggable true})])

(defmulti render-threat-model-element (fn [element _] (:type element)))
(defmethod render-threat-model-element :actor [element] (render-threat-model-element-common element))
(defmethod render-threat-model-element :process [element] (render-threat-model-element-common element))
(defmethod render-threat-model-element :datastore [element] (render-threat-model-element-common element))
(defmethod render-threat-model-element :communication [element elements] (render-threat-model-element-communication element elements))
(defmethod render-threat-model-element :boundary [element ] (render-threat-model-element-common element))


(defn toolbar []
  [:div
   [:button {:on-click #(add-element! (create-element {:type :actor :x 100 :y 100}))} "Add Actor"]
   [:button {:on-click #(add-element! (create-element {:type :process :x 100 :y 300 }))} "Add Process"]
   [:button {:on-click #(add-element! (create-element {:type :datastore :x 100 :y 100}))} "Add Datastore"]
   [:button {:on-click #(add-element! (create-element {:type :boundary :x 100 :y 100 }))} "Add Trust Boundary"]])

(defn diagram-event-element-drag-stop [id event data]
  "Persist position of dragged threat model diagram element to local state."
  (swap! threat-model update-in [:elements id] merge {:x (-> data .-lastX) :y (-> data .-lastY)}))



(def last-element-dragged (atom {}))


(defn moveable-on-rotate-start! [event]
  "Callback handler for starting of rotation. Sets rotation degree to current element rotation."
  (let [active-element-id (html-element->element-id (-> event .-target))
        cur-element-rotation (get-in @app-state [:threat-model :elements active-element-id :rotate])]
    (swap! ui-state
           merge
           {:currently-dragged-element-id active-element-id
            :orig-rotate cur-element-rotation})))

(defn moveable-on-rotate! [event]
  (let [active-element-id (-> @app-state :ui-state :active-moveable-id)
        element-info (get-in @app-state [:threat-model :elements active-element-id])
        rotate-amount (+ (-> @app-state :ui-state :orig-rotate) (int (-> event .-beforeRotate)))]
    (swap! app-state assoc-in [:ui-state :rotate-amount] rotate-amount)
    (set! (-> event .-target .-style .-transform) (goog.string.format "translate(%dpx,%dpx) rotate(%ddeg)" (:x element-info) (:y element-info) rotate-amount))))


(defn moveable-rotate-end! [event]
  "Callback handler for finishing rotating element. Persists rotated degree to element."
  (swap! app-state
         (fn [state]
           (let [element-id (html-element->element-id (-> event .-target))
                 rotate-amount (-> state :ui-state :rotate-amount)]
             (-> (assoc-in state [:threat-model :elements element-id :rotate] rotate-amount)
                 (assoc-in [:ui-state :currently-dragged-element-id] nil))))))


(defn moveable-drag-start! [event]
  (let [element-id (html-element->element-id (-> event .-target))
        cur-element-info (get-in @threat-model [:elements element-id])]
    (swap! ui-state
           merge
           {:currently-dragged-element-id element-id}
           {:rotate 0}
           (select-keys cur-element-info [:x :y :rotate])
           {:newX (:x cur-element-info) :newY (:y cur-element-info)})))

(defn moveable-drag-on! [event]
  (let [last-element-dragged-deref @ui-state
        newX (+ (:x last-element-dragged-deref) (-> event .-left))
        newY (+ (:y last-element-dragged-deref) (-> event .-top))
        rotate (or (:rotate last-element-dragged-deref) 0)
        element-id (:currently-dragged-element-id last-element-dragged-deref)]
    (swap! ui-state merge {:newX newX :newY newY})
    (set! (-> event .-target .-style .-transform) (goog.string.format "translate(%dpx,%dpx) rotate(%ddeg)" newX newY rotate))))

(defn moveable-drag-end! []
  (let [dragged-values @ui-state]
    (swap! threat-model
           update-in
           [:elements (:currently-dragged-element-id dragged-values)]
           (fn [cur-val]
             (merge cur-val
                    {:x (:newX dragged-values)
                     :y (:newY dragged-values)}))))
  (swap! ui-state assoc :currently-dragged-element-id nil))

(defn instructions []
  [:div
   [:p "Controls"
    [:br]
    "Connect element: Shift-click two elements to connect elements"
    [:br]
    "Delete element: Move mouse over element and press backspace key"
    [:br]
    "Rename-element: Move mouse over element and press enter key"]])


(defn simple-example [threat-model]
  [:div
   [instructions]
   [toolbar]
   [:div#diagram 
                                        ;Doall is required here, as for generates lazy sequence, and 
                                        ;derefs in child components won't trigget updates. known reagent issue.
    (doall (for [element (vals (:elements @threat-model))]
             (render-threat-model-element element (:elements @threat-model))))
    [moveable {:target (js/document.querySelector (str ".moveable-element-" (-> @ui-state :active-moveable-id)))
               :draggable true
                                        ;Drag x and y in steps of 25 points
               :throttleDrag 25 
               :throttleRotate 15 
               :onDragStart moveable-drag-start!
               :onDrag moveable-drag-on! 
               :snappable true
               :rotatable true
               :onDragEnd moveable-drag-end!
               :onRotateStart moveable-on-rotate-start!
               :onRotate moveable-on-rotate!
               :onRotateEnd moveable-rotate-end!}]
    [kb/keyboard-listener]
    [kb/kb-action "backspace" handle-backspace-pressed!]
    [kb/kb-action "enter" handle-enter-pressed!]]])

(defn ^:export main! [])

(rdom/render [simple-example threat-model] (js/document.getElementById "app"))
