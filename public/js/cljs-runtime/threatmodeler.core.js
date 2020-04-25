goog.provide('threatmodeler.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
goog.require('goog.string.format');
var module$node_modules$react_moveable$dist$moveable_cjs=shadow.js.require("module$node_modules$react_moveable$dist$moveable_cjs", {});
goog.require('cljs.test');
goog.require('reagent_keybindings.keyboard');
threatmodeler.core.html_element__GT_element_id = (function threatmodeler$core$html_element__GT_element_id(element){
return element.dataset.elementId;
});
threatmodeler.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382),null,new cljs.core.Keyword(null,"element-transformation-in-progress","element-transformation-in-progress",1733961414),null,new cljs.core.Keyword(null,"last-element-dragged","last-element-dragged",47361738),null,new cljs.core.Keyword(null,"last-item-shift-clicked","last-item-shift-clicked",-1840126509),null], null),new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"threats","threats",-7323746),cljs.core.PersistentVector.EMPTY], null)], null));
threatmodeler.core.ui_state = reagent.core.cursor(threatmodeler.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351)], null));
threatmodeler.core.threat_model = reagent.core.cursor(threatmodeler.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298)], null));
if((typeof threatmodeler !== 'undefined') && (typeof threatmodeler.core !== 'undefined') && (typeof threatmodeler.core.create_element !== 'undefined')){
} else {
threatmodeler.core.create_element = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__36975 = cljs.core.get_global_hierarchy;
return (fexpr__36975.cljs$core$IFn$_invoke$arity$0 ? fexpr__36975.cljs$core$IFn$_invoke$arity$0() : fexpr__36975.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("threatmodeler.core","create-element"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
threatmodeler.core.create_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"actor","actor",-1830560481),(function (d){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"name","name",1843675177),"TODO",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),d], 0));
}));
threatmodeler.core.create_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"process","process",1643192938),(function (d){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"name","name",1843675177),"TODO",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),d], 0));
}));
threatmodeler.core.create_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datastore","datastore",-762786373),(function (d){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"name","name",1843675177),"TODO",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),d], 0));
}));
threatmodeler.core.create_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boundary","boundary",-2000996754),(function (d){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),d], 0));
}));
threatmodeler.core.create_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"communication","communication",1734879700),(function (d){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())], null),d], 0));
}));
threatmodeler.core.add_element = (function threatmodeler$core$add_element(app_state,data){

var element = threatmodeler.core.create_element.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element)], null),element);
});
/**
 * Adds element to threat model, and udpates corresponding atom.
 */
threatmodeler.core.add_element_BANG_ = (function threatmodeler$core$add_element_BANG_(data){
var element = threatmodeler.core.create_element.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(threatmodeler.core.app_state,threatmodeler.core.add_element,data);
});
threatmodeler.core.filter_elements_referencing_element_id = (function threatmodeler$core$filter_elements_referencing_element_id(element_id,element){

return cljs.core.contains_QMARK_(cljs.core.set(cljs.core.vals(cljs.core.select_keys(element,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"id","id",-1388402092)], null)))),element_id);
});
/**
 * Deletes element from threat model, and any communications referencing it
 */
threatmodeler.core.delete_element_and_communications = (function threatmodeler$core$delete_element_and_communications(app_state,element){
var referencing_elements = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.filter_elements_referencing_element_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element)),cljs.core.vals(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"threat-model","threat-model",662425298).cljs$core$IFn$_invoke$arity$1(app_state))));
var referencing_element_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),referencing_elements);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735)], null),(function (x){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,x,app_state,referencing_element_ids);
}));
});
if((typeof threatmodeler !== 'undefined') && (typeof threatmodeler.core !== 'undefined') && (typeof threatmodeler.core.delete_element !== 'undefined')){
} else {
threatmodeler.core.delete_element = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__36976 = cljs.core.get_global_hierarchy;
return (fexpr__36976.cljs$core$IFn$_invoke$arity$0 ? fexpr__36976.cljs$core$IFn$_invoke$arity$0() : fexpr__36976.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("threatmodeler.core","delete-element"),(function (app_state,element){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
threatmodeler.core.delete_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"communication","communication",1734879700),(function (app_state,element){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element));
}));
threatmodeler.core.delete_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (app_state,element){
return threatmodeler.core.delete_element_and_communications(app_state,element);
}));
threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actor","actor",-1830560481),new cljs.core.Keyword(null,"name","name",1843675177),"hackerman",new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(150),new cljs.core.Keyword(null,"id","id",-1388402092),"hackerman1"], null)));
threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"process","process",1643192938),new cljs.core.Keyword(null,"name","name",1843675177),"webapp",new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(125),new cljs.core.Keyword(null,"id","id",-1388402092),"webapp1"], null)));
threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"datastore","datastore",-762786373),new cljs.core.Keyword(null,"name","name",1843675177),"database",new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(300),new cljs.core.Keyword(null,"id","id",-1388402092),"datastore1"], null)));
threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"communication","communication",1734879700),new cljs.core.Keyword(null,"from","from",1815293044),"hackerman1",new cljs.core.Keyword(null,"to","to",192099007),"webapp1"], null)));
threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"communication","communication",1734879700),new cljs.core.Keyword(null,"from","from",1815293044),"hackerman1",new cljs.core.Keyword(null,"to","to",192099007),"datastore1"], null)));
threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boundary","boundary",-2000996754)], null)));
/**
 * Sets the active element which can be moved and dragged around.
 * If an item is currently being transformed, the active element is not updated.
 */
threatmodeler.core.set_active_moveable_element_BANG_ = (function threatmodeler$core$set_active_moveable_element_BANG_(id,e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"element-transformation-in-progress","element-transformation-in-progress",1733961414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threatmodeler.core.ui_state)))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382),id);
}
});
threatmodeler.core.moveable = reagent.core.adapt_react_class(module$node_modules$react_moveable$dist$moveable_cjs);
threatmodeler.core.calculate_line_points = (function threatmodeler$core$calculate_line_points(element1,element2){

if(((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element1) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element1)) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element2))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element1) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element1)),new cljs.core.Keyword(null,"y1","y1",589123466),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element1) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(element1) / (2))),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element2),new cljs.core.Keyword(null,"y2","y2",-718691301),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element2) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(element2) / (2)))], null);
} else {
if((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element1) > (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element2) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element2)))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element2) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element2)),new cljs.core.Keyword(null,"y1","y1",589123466),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element2) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(element2) / (2))),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element1),new cljs.core.Keyword(null,"y2","y2",-718691301),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element1) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(element1) / (2)))], null);
} else {
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element1) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element2))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element1) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element1) / (2))),new cljs.core.Keyword(null,"y1","y1",589123466),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element1) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(element1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element2) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element2) / (2))),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element2)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element2) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element2) / (2))),new cljs.core.Keyword(null,"y1","y1",589123466),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element2) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(element2)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element1) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(element1) / (2))),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element1)], null);

}
}
}
});
threatmodeler.core.render_line = (function threatmodeler$core$render_line(p__36977){
var map__36978 = p__36977;
var map__36978__$1 = (((((!((map__36978 == null))))?(((((map__36978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36978):map__36978);
var line = map__36978__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36978__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36978__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36978__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36978__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36978__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36978__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lineLength = Math.sqrt((Math.pow((x2 - x1),(2)) + Math.pow((y2 - y1),(2))));
var slope = ((y1 - y2) / (x1 - x2));
var rotationDegree = (((((x1 >= x2)) && ((y1 < y2))))?(Math.PI - ((-1) * Math.atan(slope))):Math.atan(slope));
var style__$1 = (function (){var or__4185__auto__ = style;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "solid";
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line.diagram-threat-model-element","div.line.diagram-threat-model-element",-1685853637),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"2px",new cljs.core.Keyword(null,"width","width",-384071477),goog.string.format("%dpx",lineLength),new cljs.core.Keyword(null,"border-top","border-top",-158897573),goog.string.format("2px %s black",style__$1),new cljs.core.Keyword(null,"transform","transform",1381301764),goog.string.format("translate(%dpx,%dpx) rotate(%frad)",x1,y1,rotationDegree),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"center left",new cljs.core.Keyword(null,"padding","padding",1660304693),(cljs.core.truth_(new cljs.core.Keyword(null,"draggable","draggable",1676206163).cljs$core$IFn$_invoke$arity$1(line))?"5px":"0")], null),new cljs.core.Keyword(null,"class","class",-2030961996),["moveable-element-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.set_active_moveable_element_BANG_,id)], null)], null);
});
/**
 * Given a HTML element and selector, find the closest node to it.
 * If the selector matches the given node, return the curret node.
 */
threatmodeler.core.get_closest_html_element = (function threatmodeler$core$get_closest_html_element(element,selector){
return element.closest(selector);
});
/**
 * Handles on mouse up event for diagram elements.
 * Used to connect diagram elements together when shift key is 
 * held while clicking elements.
 */
threatmodeler.core.diagram_element_event_on_mouse_up_BANG_ = (function threatmodeler$core$diagram_element_event_on_mouse_up_BANG_(element_id,e){
if(cljs.core.truth_(e.shiftKey)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.app_state,(function (state){
var last_item_shift_clicked = new cljs.core.Keyword(null,"last-item-shift-clicked","last-item-shift-clicked",-1840126509).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui-state","ui-state",646932351).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(last_item_shift_clicked)){
return cljs.core.assoc_in(threatmodeler.core.add_element(state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"communication","communication",1734879700),new cljs.core.Keyword(null,"from","from",1815293044),last_item_shift_clicked,new cljs.core.Keyword(null,"to","to",192099007),element_id], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351),new cljs.core.Keyword(null,"last-item-shift-clicked","last-item-shift-clicked",-1840126509)], null),null);
} else {
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351),new cljs.core.Keyword(null,"last-item-shift-clicked","last-item-shift-clicked",-1840126509)], null),element_id);
}
}));
} else {
return null;
}
});
threatmodeler.core.render_threat_model_element_common = (function threatmodeler$core$render_threat_model_element_common(p__36980){
var map__36981 = p__36980;
var map__36981__$1 = (((((!((map__36981 == null))))?(((((map__36981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36981):map__36981);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36981__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36981__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36981__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36981__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36981__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rotate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36981__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.diagram-threat-model-element","span.diagram-threat-model-element",-160914358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["diagram-",cljs.core.name(type)," moveable-element-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),goog.string.format("translate(%dpx,%dpx) rotate(%ddeg)",x,y,(function (){var or__4185__auto__ = rotate;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})())], null),new cljs.core.Keyword(null,"data-element-id","data-element-id",-1177142464),id,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.diagram_element_event_on_mouse_up_BANG_,id),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.set_active_moveable_element_BANG_,id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),name], null)], null);
});
threatmodeler.core.handle_backspace_pressed_BANG_ = (function threatmodeler$core$handle_backspace_pressed_BANG_(){

var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351),new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var current_element_id = temp__5735__auto__;
var temp__5735__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),current_element_id], null));
if(cljs.core.truth_(temp__5735__auto____$1)){
var current_element = temp__5735__auto____$1;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(threatmodeler.core.app_state,threatmodeler.core.delete_element,current_element);
} else {
return null;
}
} else {
return null;
}
});
threatmodeler.core.handle_enter_pressed_BANG_ = (function threatmodeler$core$handle_enter_pressed_BANG_(){

var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351),new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var current_element_id = temp__5735__auto__;
var temp__5735__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),current_element_id], null));
if(cljs.core.truth_(temp__5735__auto____$1)){
var current_element = temp__5735__auto____$1;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),current_element_id,new cljs.core.Keyword(null,"name","name",1843675177)], null),prompt("Element name:",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(current_element)));
} else {
return null;
}
} else {
return null;
}
});
threatmodeler.core.render_threat_model_element_communication = (function threatmodeler$core$render_threat_model_element_communication(element,elements){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.render_line,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(element,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)),threatmodeler.core.calculate_line_points(cljs.core.get.cljs$core$IFn$_invoke$arity$2(elements,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(element)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(elements,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(element)))], 0))], null);
});
threatmodeler.core.render_threat_model_element_boundary = (function threatmodeler$core$render_threat_model_element_boundary(element,elements){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.render_line,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([element,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),"dashed",new cljs.core.Keyword(null,"draggable","draggable",1676206163),true], null)], 0))], null);
});
if((typeof threatmodeler !== 'undefined') && (typeof threatmodeler.core !== 'undefined') && (typeof threatmodeler.core.render_threat_model_element !== 'undefined')){
} else {
threatmodeler.core.render_threat_model_element = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__36983 = cljs.core.get_global_hierarchy;
return (fexpr__36983.cljs$core$IFn$_invoke$arity$0 ? fexpr__36983.cljs$core$IFn$_invoke$arity$0() : fexpr__36983.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("threatmodeler.core","render-threat-model-element"),(function (element,_){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
threatmodeler.core.render_threat_model_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"actor","actor",-1830560481),(function (element){
return threatmodeler.core.render_threat_model_element_common(element);
}));
threatmodeler.core.render_threat_model_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"process","process",1643192938),(function (element){
return threatmodeler.core.render_threat_model_element_common(element);
}));
threatmodeler.core.render_threat_model_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datastore","datastore",-762786373),(function (element){
return threatmodeler.core.render_threat_model_element_common(element);
}));
threatmodeler.core.render_threat_model_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"communication","communication",1734879700),(function (element,elements){
return threatmodeler.core.render_threat_model_element_communication(element,elements);
}));
threatmodeler.core.render_threat_model_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boundary","boundary",-2000996754),(function (element){
return threatmodeler.core.render_threat_model_element_common(element);
}));
threatmodeler.core.toolbar = (function threatmodeler$core$toolbar(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actor","actor",-1830560481),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)));
})], null),"Add Actor"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"process","process",1643192938),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null)));
})], null),"Add Process"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"datastore","datastore",-762786373),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)));
})], null),"Add Datastore"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return threatmodeler.core.add_element_BANG_(threatmodeler.core.create_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)));
})], null),"Add Trust Boundary"], null)], null);
});
threatmodeler.core.diagram_event_element_drag_stop = (function threatmodeler$core$diagram_event_element_drag_stop(id,event,data){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(threatmodeler.core.threat_model,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),id], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),data.lastX,new cljs.core.Keyword(null,"y","y",-1757859776),data.lastY], null)], 0));
});
threatmodeler.core.moveable_on_rotate_start_BANG_ = (function threatmodeler$core$moveable_on_rotate_start_BANG_(event){

var active_element_id = threatmodeler.core.html_element__GT_element_id(event.target);
var cur_element_rotation = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.app_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),active_element_id,new cljs.core.Keyword(null,"rotate","rotate",152705015)], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(threatmodeler.core.ui_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382),active_element_id,new cljs.core.Keyword(null,"element-transformation-in-progress","element-transformation-in-progress",1733961414),true,new cljs.core.Keyword(null,"orig-rotate","orig-rotate",295073275),cur_element_rotation], null));
});
threatmodeler.core.moveable_on_rotate_BANG_ = (function threatmodeler$core$moveable_on_rotate_BANG_(event){
var active_element_id = new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui-state","ui-state",646932351).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threatmodeler.core.app_state)));
var element_info = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),active_element_id], null));
var rotate_amount = (new cljs.core.Keyword(null,"orig-rotate","orig-rotate",295073275).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui-state","ui-state",646932351).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threatmodeler.core.app_state))) + (event.beforeRotate | (0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351),new cljs.core.Keyword(null,"rotate-amount","rotate-amount",639596080)], null),rotate_amount);

return (event.target.style.transform = goog.string.format("translate(%dpx,%dpx) rotate(%ddeg)",new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(element_info),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(element_info),rotate_amount));
});
threatmodeler.core.moveable_rotate_end_BANG_ = (function threatmodeler$core$moveable_rotate_end_BANG_(event){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.app_state,(function (state){
var element_id = threatmodeler.core.html_element__GT_element_id(event.target);
var rotate_amount = new cljs.core.Keyword(null,"rotate-amount","rotate-amount",639596080).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui-state","ui-state",646932351).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threat-model","threat-model",662425298),new cljs.core.Keyword(null,"elements","elements",657646735),element_id,new cljs.core.Keyword(null,"rotate","rotate",152705015)], null),rotate_amount),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-state","ui-state",646932351),new cljs.core.Keyword(null,"element-transformation-in-progress","element-transformation-in-progress",1733961414)], null),null);
}));
});
threatmodeler.core.moveable_drag_start_BANG_ = (function threatmodeler$core$moveable_drag_start_BANG_(event){
var element_id = threatmodeler.core.html_element__GT_element_id(event.target);
var cur_element_info = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.threat_model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),element_id], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(threatmodeler.core.ui_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element-transformation-in-progress","element-transformation-in-progress",1733961414),true,new cljs.core.Keyword(null,"rotate","rotate",152705015),(0)], null),cljs.core.select_keys(cur_element_info,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rotate","rotate",152705015)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"newX","newX",-90483607),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cur_element_info),new cljs.core.Keyword(null,"newY","newY",-1472730860),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cur_element_info)], null)], 0));
});
threatmodeler.core.moveable_drag_on_BANG_ = (function threatmodeler$core$moveable_drag_on_BANG_(event){
var last_element_dragged_deref = cljs.core.deref(threatmodeler.core.ui_state);
var newX = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(last_element_dragged_deref) + event.left);
var newY = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(last_element_dragged_deref) + event.top);
var rotate = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(last_element_dragged_deref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var element_id = new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382).cljs$core$IFn$_invoke$arity$1(last_element_dragged_deref);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(threatmodeler.core.ui_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"newX","newX",-90483607),newX,new cljs.core.Keyword(null,"newY","newY",-1472730860),newY], null));

return (event.target.style.transform = goog.string.format("translate(%dpx,%dpx) rotate(%ddeg)",newX,newY,rotate));
});
threatmodeler.core.moveable_drag_end_BANG_ = (function threatmodeler$core$moveable_drag_end_BANG_(){
var ui_state_derefed_36988 = cljs.core.deref(threatmodeler.core.ui_state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.threat_model,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382).cljs$core$IFn$_invoke$arity$1(ui_state_derefed_36988)], null),(function (cur_val){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cur_val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"newX","newX",-90483607).cljs$core$IFn$_invoke$arity$1(ui_state_derefed_36988),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"newY","newY",-1472730860).cljs$core$IFn$_invoke$arity$1(ui_state_derefed_36988)], null)], 0));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"element-transformation-in-progress","element-transformation-in-progress",1733961414),null);
});
threatmodeler.core.instructions = (function threatmodeler$core$instructions(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Controls",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Connect element: Shift-click two elements to connect elements",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Delete element: Move mouse over element and press backspace key",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Rename-element: Move mouse over element and press enter key"], null)], null);
});
threatmodeler.core.simple_example = (function threatmodeler$core$simple_example(threat_model){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.instructions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.toolbar], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#diagram","div#diagram",-550840655),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function threatmodeler$core$simple_example_$_iter__36984(s__36985){
return (new cljs.core.LazySeq(null,(function (){
var s__36985__$1 = s__36985;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36985__$1);
if(temp__5735__auto__){
var s__36985__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36985__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__36985__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__36987 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__36986 = (0);
while(true){
if((i__36986 < size__4581__auto__)){
var element = cljs.core._nth(c__4580__auto__,i__36986);
cljs.core.chunk_append(b__36987,threatmodeler.core.render_threat_model_element.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threat_model))));

var G__36989 = (i__36986 + (1));
i__36986 = G__36989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36987),threatmodeler$core$simple_example_$_iter__36984(cljs.core.chunk_rest(s__36985__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36987),null);
}
} else {
var element = cljs.core.first(s__36985__$2);
return cljs.core.cons(threatmodeler.core.render_threat_model_element.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threat_model))),threatmodeler$core$simple_example_$_iter__36984(cljs.core.rest(s__36985__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.vals(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threat_model))));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.moveable,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onRotateEnd","onRotateEnd",-1477012704),new cljs.core.Keyword(null,"onDrag","onDrag",779956324),new cljs.core.Keyword(null,"snappable","snappable",-90530806),new cljs.core.Keyword(null,"onRotateStart","onRotateStart",-448043670),new cljs.core.Keyword(null,"throttleDrag","throttleDrag",-195020244),new cljs.core.Keyword(null,"throttleRotate","throttleRotate",1927183151),new cljs.core.Keyword(null,"draggable","draggable",1676206163),new cljs.core.Keyword(null,"rotatable","rotatable",1507933205),new cljs.core.Keyword(null,"onRotate","onRotate",-1222972361),new cljs.core.Keyword(null,"onDragEnd","onDragEnd",1520191895),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"onDragStart","onDragStart",-2108300997)],[threatmodeler.core.moveable_rotate_end_BANG_,threatmodeler.core.moveable_drag_on_BANG_,true,threatmodeler.core.moveable_on_rotate_start_BANG_,(25),(15),true,true,threatmodeler.core.moveable_on_rotate_BANG_,threatmodeler.core.moveable_drag_end_BANG_,document.querySelector([".moveable-element-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-diagram-element-id","active-diagram-element-id",580407382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threatmodeler.core.ui_state)))].join('')),threatmodeler.core.moveable_drag_start_BANG_])], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_keybindings.keyboard.keyboard_listener], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_keybindings.keyboard.kb_action,"backspace",threatmodeler.core.handle_backspace_pressed_BANG_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_keybindings.keyboard.kb_action,"enter",threatmodeler.core.handle_enter_pressed_BANG_], null)], null)], null);
});
threatmodeler.core.main_BANG_ = (function threatmodeler$core$main_BANG_(){
return null;
});
goog.exportSymbol('threatmodeler.core.main_BANG_', threatmodeler.core.main_BANG_);
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.simple_example,threatmodeler.core.threat_model], null),document.getElementById("app"));

//# sourceMappingURL=threatmodeler.core.js.map
