(ns threatmodeler.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [goog.string.format]
            [react-moveable :as Moveable]
            [cljs.test :refer-macros [deftest is testing]]
            [reagent-keybindings.keyboard :as kb]
            [clojure.set]))

(defn html-element->element-id [element]
  (-> element .-dataset .-elementId))

(def threat-examples
  {

   :encrypt-or-sign-data {:description "Weak cryptography is used, allowing communications to be forged or decrypted." :mitigation "Use a vetted cryptographic library, such as libsodium, which handles cryptographic operations. Avoid implementing own cryptographic routines, as a wide range of attacks against."}
   :docker {:description "Root file system is mounted within docker container, allowing host to be compromised." :mitigation "Limit file system exposed to docker."}
   :command-launching {:description "Attacker can influence applications/command arguments." :mitigation "Whenever possible, don't allow the attacker to specify the actual application to run. Validate and sanitize user input. Do not use string concatenation/formatting to build command strings."}
   :race-condition {:description "Attacker performs multiple operations simultaneously, causing the application to perform unwanted behavior." :mitigation "If possible, perform action synchronously to prevent unwanted side-effects. For example, database/memory transactions and locks can be used to prevent sumptuously updating of sensitive data."}
   :memory-corruption {:description "Memory corruption/disclosure vulnerability exists, allowing attacker to influence application or access sensitive data." :mitigation "Use static analysis, such as by leveraging compiler flags, to detect vulnerable code patterns. If possible, avoid or minimize using languages where memory safety is hard to achieve. Whenever possible, use memory-corruption mitigation's such as ASLR, DEP, and Stack Cookies. Perform fuzzing on applications to discover vulnerabilities."}
   :weak-reset-password-flow {:description "Attacker compromise password reset flows through weak processes (reset codes send via SMS, insufficient amount of entropy in reset links, etc.)" :mitigation "Generate password reset links which contain a large amount of entropy, such as 128 bits."}
   :connected-to-network {:description "Host is connected to a network, exposing network devices to internet."  :mitigation "Add firewall rules to restrict inbound and output traffic."}
   :machine-learning-taint-data {:description "Attacker can influence training data." :mitigation "Review and assign trust-worthiness to data to avoid malicious tainting of data."}
   :machine-learning-train-against-model {:description "Attacker uses application to train their own models." :mitigation "Add rate limiting. Returning fuzzy data may be performed."} 
   :session-generation {:description "Ensure sessions are generated from a cryptographically secure random number generator, which contain a sufficient amount of entropy, such as 128 bits."}
   :session-fixation {:description "Attacker forces target user to authentication under an attacker-controlled account. Attackers may modify URLs which accept authentication id/tokens to force authenticate users. Attacker may force users submit login forms to authentication as the attacker too." :mitigation  "Verify authenticator with requests, such as with anti Cross-Site Request Forgery tokens."}
   :third-party-components {:description "Attacker breaks in to system due to vulnerabilites in third party components." :mitigation "Keep third-party components up to date with latest security patches. Ensure trusted components are used. If untrusted components ar required, consider sandboxing the components from accessing sensitive data."} 
   :backup {:description "Data is deleted or corrupted." :mitigation "Perform backups of data."}
   :db-injection {:description "Queries are constructed from user data." :mitigation "User  queries. Avoid using string concatenation with database queries and user input. Note data may be possible to  be coerced into arrays or hashmaps by the web server. For NoSQL queries, this can lead to injection of inequality statements."}
   :cookies {:description "User authentications with cookies." :mitigation "Use cookie security flags to protect information (SameSite,HTTPOnly,Secure)"}
   :content-over-http {:description "User Connects Over HTTP" :mitigation "Configure HSTS Reloading. Return Strict Transport Security header, and include sub domains. Redirect HTTP to HTTPS."}
   :xxs {:description "Application displays user supplied data" :mitigation "Encode user input for the appropriate context it appears in (HTML, JavaScript, etc.). Configure CORS policies"}
   :sensitive-data {:description "Sensitive Information is stored (PII, Password Hashes etc.)" :mitigation "Encrypt sensitive data. Use a vetted cryptography library/service when possible, such as libsodium. Ensure the chosen library makes use of strong cryptography (uses non-broken cryptographic algorithm,  generates keys using a CSRPNG, does not re-use IVs, facilities key rotations, etc.)"}
   :cleartext-password-storage  {:description "Database contains credentials."  :mitigation "Use a cryptographically secure hashing algorithm to hash passwords, such as scrypt."} 
   :xxe {:description "XML is processed." :mitigation "Disable Document Type Definition (DTD) parsing and external entity resolving when possible."}
   :file-uploads {:description "Users can upload files." :mitigation "If files are saved to disk, perform path canonicalization on files and ensure target file is under expected directory and path. Restrict what type of data can be uploaded. If users can download files, set the appropriate mime-type presenting the data. Avoid allowing executable to be uploaded."}
   :serialization {:description "User supplied data is deserialized" :mitigation "Use a secure serialization framework/library which can not be leveraged to deserialize arbitrary types (Ex, Avoid BinaryFormatter in .NET). Validate user supplied data to avoid mass assignment and injection vulnerabilites."} 
   :tls {:description "Sensitive data transferred over the network." :mitigation "Use Transport Layer Security to secure communications. Ensure strong cipher-suites and parameters are used."}
   :password-complexity {:description "Users can specify their own password." :mitigation "Define a set a password complexity policy."}
   :jwt {:description "User authentications with JWT" :mitigation "Ensure algorithm \"none\" is not supported. Ensure users can't mix key material with algorithms (ie, use a public key as HMAC secret.)"}
   :deauthentication {:description "User can't sign out." :mitigation "Determine appropriate amount of time for sessions to time out. When a user clicks sign out, contact the remote service terminate the user's session. Ensure that the session id/token can't be used supplied to authentication with the remote service."} 
   :authentication {:description "Session identifiers are used to identify users." :mitigation "Generation Session IDs form a cryptographically secure source, such as a CSRPNG. Ensure the length of session IDs are not brute-forceable, such as 128 bits of entropy in length."}})

(defn create-lookup-from-vector-of-hashmaps [id-function hashmap]
  (into {} (map (juxt id-function identity) hashmap)))

(def threat-element-property-groups (atom {:groups [] :scenarios {}}))
(defn add-threat-element-property-group!
  "Creates lookup of groups and scenarios"
  [group-name scenarios]
  (swap! threat-element-property-groups
         (fn [x]
           (let [scenario-ids (map :id scenarios)]
             (-> (update-in x [:groups] conj [group-name scenario-ids])
                 (update-in [:scenarios] merge (create-lookup-from-vector-of-hashmaps :id scenarios)))))))

(add-threat-element-property-group!
 "Application Type, Language, OS"
 [{:id :web-application          :name "Web Application" :threats #{:content-over-http :xxs}}
  {:id :unsafe-memory-components :name "Unsafe Memory Components (C,C++,Unsafe Rust, Java JNI" :threats #{:memory-corruption}}
  {:id :desktop-application      :name "Desktop Application" :threats #{:todo}}
  {:id :mobile-application       :name "Mobile Application" :threats #{:todo}}
  {:id :windows                  :name "Windows" :threats #{:todo}}
  {:id :linux                    :name "Linux" :threats #{:todo}}])

(add-threat-element-property-group!
 "Data Processing"
 [{:id :file-upload :name "File Upload" :threats #{:file-uploads}}
  {:id :deserialize :name "Deserialize Data" :threats #{:serialization}}
  {:id :parses-xml  :name "Parses XML" :threats #{:xxe}}
  {:id :display-user-input-as-html :name "Display User Input as HTML/Scripts" :threats #{:xxs}}
  {:id :run-system-commands :name "Run System Commands" :threats #{:command-launching}}
  {:id :db-injection :name "Database Queries" :threats #{:db-injection}}
  {:id :machine-learning :name "Machine Learning" :threats #{:machine-learning-taint-data :machine-learning-train-against-model}}
  {:id :race-condition :name "Operations Order Sensitivity" :threats #{:race-condition}}])

(add-threat-element-property-group!
 "Authentication"
 [{:id :oauth :name "OAuth" :threats #{:session-fixation}}
  {:id :jwt :name "JWT" :threats #{:jwt :deauthentication :session-fixation}}
  {:id :cookies :name "Cookies" :threats #{:cookies :deauthentication :session-fixation}}
  {:id :session-ids :name "Session Ids" :threats #{:session-generation :deauthentication :session-fixation}}
  {:id :username-and-passwords :name "Username and Passwords" :threats #{:password-complexity :weak-reset-password-flow}}])

(add-threat-element-property-group!
 "Cryptography"
 [{:id :encrypts :name "Encrypts or Signs Data" :threats #{:encrypt-or-sign-data}}])

(add-threat-element-property-group!
 "Misc"
 [{:id :third-party-components :name "Third Party Components" :threats #{:third-party-components}}
  {:id :docker :name "Docker" :threats #{:docker}}
  {:id :processes-network-traffic :name "Connected To Network" :threats #{:connected-to-network}}
  {:id :important-data :name "Stores Important Data" :threats #{:backup}}
  {:id :sensitive-data :name "Stores Sensitive Data" :threats #{:sensitive-data}}
  {:id :stores-credentials :name "Stores credentials" :threats #{:cleartext-password-storage}}
  ])

(def app-state (r/atom {:ui-state {:active-diagram-element-id nil
                                   :element-transformation-in-progress nil
                                   :last-element-dragged nil
                                   :last-item-shift-clicked nil}
                        :threat-model {:elements {} :threats []}}))

(def ui-state (r/cursor app-state [:ui-state]))
(def threat-model (r/cursor app-state [:threat-model]))



(defn toggle-value-in-set [input-set value]
  ((if (contains? input-set value) disj conj) input-set value))

(defn property-id->property [property-id]
  (get-in @threat-element-property-groups [:scenarios property-id]))

(defn property-ids-to-threat-ids [property-ids]
  (->> (map property-id->property property-ids)
       (map :threats)  
       (flatten)
       (apply clojure.set/union)))

(defn update-element-threat-ids-from-property-ids [element]
  (let [threat-ids (property-ids-to-threat-ids (:properties element))]
    (assoc-in element [:threats] threat-ids)))


;TODO add validation to ensure only valid properties are provided
(defmulti create-base-element :type)
(defmethod create-base-element :actor          [d] (merge {:id (str (random-uuid)) :name "TODO" :width 100 :height 50 :x 100 :y 100 :properties #{}} d))
(defmethod create-base-element :process        [d] (merge {:id (str (random-uuid)) :name "TODO" :width 100 :height 100 :x 100 :y 100 :properties #{}} d))
(defmethod create-base-element :datastore      [d] (merge {:id (str (random-uuid)) :name "TODO" :width 100 :height 50 :x 100 :y 100 :properties #{}} d))
(defmethod create-base-element :boundary       [d] (merge {:id (str (random-uuid)) :width 100 :height 20 :x 100 :y 100 :properties #{}} d))
(defmethod create-base-element :communication  [d] (merge {:id (str (random-uuid)) :properties #{}} d))

(defn create-element  [data]
  (update-element-threat-ids-from-property-ids (create-base-element data)))






(defn add-element [app-state data]
  "Add an element to the given app state."
  (let [element (create-element data)]
    (assoc-in app-state [:threat-model :elements (:id element)] element)))

(defn toggle-element-property-for-element [app-state element-id property-id]
  (let [updated-property-ids (toggle-value-in-set (get-in app-state [:threat-model :elements element-id :properties]) property-id)
        updated-threat-ids (property-ids-to-threat-ids updated-property-ids)]
    (-> (assoc-in app-state [:threat-model :elements element-id :properties] updated-property-ids)
        (assoc-in [:threat-model :elements element-id :threats] updated-threat-ids))))



(defn toggle-element-property-for-element!
  "Adds threats to a given element"
  [element-id property]
  (swap! app-state toggle-element-property-for-element element-id (:id property)))

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
(add-element! (create-element {:type :actor         :name "Web User" :x 50  :y 150 :id "webuser" :properties #{:username-and-passwords}}))
(add-element! (create-element {:type :process       :name "webapp"    :x 300 :y 125 :id "webapp1" :properties #{:file-upload}}))
(add-element! (create-element {:type :process       :name "third party"  :x 500 :y 125 :id "webapp2" :properties #{:third-party-components}}))
(add-element! (create-element {:type :datastore     :name "database"  :x 300  :y 300 :id "datastore1" :properties #{:sensitive-data :important-data } }))
(add-element! (create-element {:type :communication :from "webuser" :to "webapp1" :name "communication1" :threats #{:tls}}))
(add-element! (create-element {:type :communication :from "webapp1" :to "datastore1" :name "communication2" :threats #{:tls}}))
(add-element! (create-element {:type :communication :from "webapp1" :to "webapp2" :name "communication3" :threats #{:tls}}))
(add-element! (create-element {:type :boundary :name "boundary1"}))

(defn set-active-moveable-element!
"Sets the active element which can be moved and dragged around.
If an item is currently being transformed, the active element is not updated."

  [id e]
  (when-not (:element-transformation-in-progress @ui-state)
  (swap! ui-state assoc :active-diagram-element-id id)))



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
  (when-let [current-element-id (get-in @app-state [:ui-state :active-diagram-element-id])]
    (when-let [current-element (get-in @app-state [:threat-model :elements current-element-id])]
      (swap! app-state delete-element current-element))))

(defn handle-enter-pressed! []
  "Handles pressing over enter key for diagram elements. Used to re-name element."
  (when-let [current-element-id (get-in @app-state [:ui-state :active-diagram-element-id])]
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


(defn moveable-on-rotate-start! [event]
  "Callback handler for starting of rotation. Sets rotation degree to current element rotation."
  (let [active-element-id (html-element->element-id (-> event .-target))
        cur-element-rotation (get-in @app-state [:threat-model :elements active-element-id :rotate])]
    (swap! ui-state
           merge
           {:active-diagram-element-id active-element-id
            :element-transformation-in-progress true
            :orig-rotate cur-element-rotation})))

(defn moveable-on-rotate! [event]
  (let [active-element-id (-> @app-state :ui-state :active-diagram-element-id)
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
                 (assoc-in [:ui-state :element-transformation-in-progress] nil))))))


(defn moveable-drag-start! [event]
  (let [element-id (html-element->element-id (-> event .-target))
        cur-element-info (get-in @threat-model [:elements element-id])]
    (swap! ui-state
           merge
           {:element-transformation-in-progress true
            :rotate 0}
           (select-keys cur-element-info [:x :y :rotate])
           {:newX (:x cur-element-info) :newY (:y cur-element-info)})))

(defn moveable-drag-on! [event]
  (let [last-element-dragged-deref @ui-state
        newX (+ (:x last-element-dragged-deref) (-> event .-left))
        newY (+ (:y last-element-dragged-deref) (-> event .-top))
        rotate (or (:rotate last-element-dragged-deref) 0)
        element-id (:active-diagram-element-id  last-element-dragged-deref)]
    (swap! ui-state merge {:newX newX :newY newY})
    (set! (-> event .-target .-style .-transform) (goog.string.format "translate(%dpx,%dpx) rotate(%ddeg)" newX newY rotate))))

(defn moveable-drag-end! []
  (let [ui-state-derefed @ui-state]
    (swap! threat-model
           update-in
           [:elements (:active-diagram-element-id ui-state-derefed)]
           (fn [cur-val]
             (merge cur-val
                    {:x (:newX ui-state-derefed)
                     :y (:newY ui-state-derefed)}))))
  (swap! ui-state assoc :element-transformation-in-progress nil))

(defn instructions []
  [:div
   [:p "Controls"
    [:br]
    "Connect element: Shift-click two elements to connect elements"
    [:br]
    "Delete element: Move mouse over element and press backspace key"
    [:br]
    "Rename-element: Move mouse over element and press enter key"]])

(defn render-threat-element-property-groups [element-id property-groups]
  (let [active-element (get-in @threat-model [:elements element-id])]
    [:div.threat-element-property-groups 
     (doall
      (for [[group-name scenario-ids] (:groups property-groups)]
        [:div.checklist-with-header
         [:h5 group-name]
         [:ul
                                        ;Get scenarios structures from scenario ids
          (doall
           (for [property (map #(get-in property-groups [:scenarios %1]) scenario-ids)] 
             [:li
              [:input {:type "checkbox"
                       :name (:name property)
                       :id (:id property)
                       :checked (contains? (-> active-element :properties) (:id property))
                       :on-change #(toggle-element-property-for-element! element-id property )}]
              [:label {:for (:id property)} (:name property)]]))]]))]))
  

(defn threat-search []
  [:div
   [:input {:placeholder "What"}]])

(defn threat-table [active-threat-id]
(let [active-element (get-in @threat-model [:elements active-threat-id])]
  [:table#threat-table
   [:tr
    [:th "Description"]
    [:th "Mitigation"]]
   (doall
    (for [threat-id (:threats active-element)]
      (let [threat-info (threat-examples threat-id)]
        [:tr 
         [:td (-> threat-info :description)]
         [:td (-> threat-info :mitigation)]])))]))

(defn active-element-name [active-threat-id]
  (let [active-element (get-in @threat-model [:elements active-threat-id])]
    [:div#threats-for
     [:h5.section-label "Threats for:"]
     [:h3.threat-name (:name active-element)]]))

(defn simple-example [threat-model]
  [:div#main
   [:div#graph-area
    [instructions]
    [toolbar]
    [:div#diagram 
                                        ;Doall is required here, as for generates lazy sequence, and 
                                        ;derefs in child components won't trigget updates. known reagent issue.
     (doall (for [element (vals (:elements @threat-model))]
              (render-threat-model-element element (:elements @threat-model))))
     [moveable {:target (js/document.querySelector (str ".moveable-element-" (-> @ui-state :active-diagram-element-id)))
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
     [kb/kb-action "enter" handle-enter-pressed!]]]
   [:div#threat-input-area
    (if (-> @ui-state :active-diagram-element-id)
      [:div
       [active-element-name (-> @ui-state :active-diagram-element-id)]
       [render-threat-element-property-groups (-> @ui-state :active-diagram-element-id) @threat-element-property-groups]
       [threat-table (-> @ui-state :active-diagram-element-id)]]
      [:h1 "Select an element."])]])
    
(defn ^:export main! [])

(rdom/render [simple-example threat-model] (js/document.getElementById "app"))
