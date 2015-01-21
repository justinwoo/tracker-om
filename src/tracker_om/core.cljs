(ns tracker-om.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(defn tracker-header-row [columns]
  "my tracker header row"
  (reify om/IRender
    (render [_]
      (apply
        dom/tr
        #js {:key "header-row"}
        (map
          #(let [{id :id title :title} %]
            (dom/th #js {:key id} title))
          columns)))))

(defn tracker-row [props]
  "my tracker row"
  (let [{columns :columns row :row} props]
    (reify om/IRender
      (render [_]
        (apply
          dom/tr
          #js {:key (:id row)}
          (map
            #(let [{id :id} %]
              (dom/td #js {:key id} (id row)))
            columns))))))

(defn tracker-header [columns]
  "my tracker header"
  (reify om/IRender
    (render [_]
      (dom/thead
        nil
        (om/build tracker-header-row columns)))))

(defn tracker-body [props]
  "my tracker body"
  (let [{columns :columns rows :rows} props]
    (reify om/IRender
      (render [_]
        (apply
          dom/tbody
          nil
          (map
            #(om/build tracker-row {:columns columns :row %})
            rows))))))

(defn tracker-table [props]
  "my tracker table"
  (reify om/IRender
    (render [_]
      (dom/table
        #js {}
        (om/build tracker-header (:columns props))
        (om/build tracker-body props)))))

(def app-state
  (atom
    {:columns [{:id :name :title "Name"}
               {:id :episode :title "Episode"}
               {:id :last-viewed :title "Last Viewed"}]
     :rows [{:id 1 :name "dfsds" :episode 1 :last-viewed "20-Jan-14"}
            {:id 2 :name "sdfsdfsd" :episode 2 :last-viewed "21-Jan-14"}
            {:id 3 :name "vcxvcsd" :episode 5 :last-viewed "14-Jan-14"}]}))

(om/root
  (fn [app owner]
    (reify om/IRender
      (render [_]
        (om/build tracker-table app))))
  app-state
  {:target (. js/document (getElementById "app"))})

(swap!
  app-state assoc :rows
  (conj (:rows @app-state)
        {:id 4 :name "hello" :episode 4 :last-viewed "22-Jan-14"}))
