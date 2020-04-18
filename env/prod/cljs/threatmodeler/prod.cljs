(ns threatmodeler.prod
  (:require [threatmodeler.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
