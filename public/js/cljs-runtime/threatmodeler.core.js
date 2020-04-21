goog.provide('threatmodeler.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
goog.require('goog.string.format');
var module$node_modules$react_moveable$dist$moveable_cjs=shadow.js.require("module$node_modules$react_moveable$dist$moveable_cjs", {});
goog.require('cljs.test');
threatmodeler.core.threat_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentArrayMap(null, 6, ["1",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actor","actor",-1830560481),new cljs.core.Keyword(null,"name","name",1843675177),"hackerman",new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(50),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"id","id",-1388402092),"1"], null),"2",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"process","process",1643192938),new cljs.core.Keyword(null,"name","name",1843675177),"webapp",new cljs.core.Keyword(null,"id","id",-1388402092),"2",new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100)], null),"3",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"datastore","datastore",-762786373),new cljs.core.Keyword(null,"name","name",1843675177),"datastore",new cljs.core.Keyword(null,"id","id",-1388402092),"3",new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(400),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(50)], null),"4",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"communication","communication",1734879700),new cljs.core.Keyword(null,"from","from",1815293044),"1",new cljs.core.Keyword(null,"to","to",192099007),"2",new cljs.core.Keyword(null,"id","id",-1388402092),"4"], null),"5",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"communication","communication",1734879700),new cljs.core.Keyword(null,"from","from",1815293044),"1",new cljs.core.Keyword(null,"to","to",192099007),"3",new cljs.core.Keyword(null,"id","id",-1388402092),"5"], null),"6",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"id","id",-1388402092),"6"], null)], null),new cljs.core.Keyword(null,"threats","threats",-7323746),cljs.core.PersistentVector.EMPTY], null));
threatmodeler.core.html_element__GT_element_id = (function threatmodeler$core$html_element__GT_element_id(element){
return element.dataset.elementId;
});
threatmodeler.core.ui_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"active-moveable-id","active-moveable-id",265410232),null,new cljs.core.Keyword(null,"currently-dragged-element-id","currently-dragged-element-id",383390933),null,new cljs.core.Keyword(null,"last-element-dragged","last-element-dragged",47361738),null,new cljs.core.Keyword(null,"last-item-shift-clicked","last-item-shift-clicked",-1840126509),null], null));
threatmodeler.core.set_active_moveable_element_BANG_ = (function threatmodeler$core$set_active_moveable_element_BANG_(id,e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"currently-dragged-element-id","currently-dragged-element-id",383390933).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threatmodeler.core.ui_state)))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"active-moveable-id","active-moveable-id",265410232),id);
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
threatmodeler.core.render_line = (function threatmodeler$core$render_line(p__41611){
var map__41612 = p__41611;
var map__41612__$1 = (((((!((map__41612 == null))))?(((((map__41612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41612):map__41612);
var line = map__41612__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41612__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41612__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41612__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41612__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41612__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41612__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
console.log(rotationDegree);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line.diagram-threat-model-element","div.line.diagram-threat-model-element",-1685853637),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"2px",new cljs.core.Keyword(null,"width","width",-384071477),goog.string.format("%dpx",lineLength),new cljs.core.Keyword(null,"border-top","border-top",-158897573),goog.string.format("2px %s black",style__$1),new cljs.core.Keyword(null,"transform","transform",1381301764),goog.string.format("translate(%dpx,%dpx) rotate(%frad)",x1,y1,rotationDegree),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"center left",new cljs.core.Keyword(null,"padding","padding",1660304693),(cljs.core.truth_(new cljs.core.Keyword(null,"draggable","draggable",1676206163).cljs$core$IFn$_invoke$arity$1(line))?"5px":"0")], null),new cljs.core.Keyword(null,"class","class",-2030961996),["moveable-element-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.set_active_moveable_element_BANG_,id)], null),"hm"], null);
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
 * held while click is released.
 */
threatmodeler.core.diagram_element_event_on_mouse_up_BANG_ = (function threatmodeler$core$diagram_element_event_on_mouse_up_BANG_(e){
console.log(threatmodeler.core.html_element__GT_element_id(threatmodeler.core.get_closest_html_element(e.target,".diagram-threat-model-element")));

if(cljs.core.truth_(e.shiftKey)){
var map__41614 = cljs.core.deref(threatmodeler.core.ui_state);
var map__41614__$1 = (((((!((map__41614 == null))))?(((((map__41614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41614):map__41614);
var last_item_shift_clicked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41614__$1,new cljs.core.Keyword(null,"last-item-shift-clicked","last-item-shift-clicked",-1840126509));
if(cljs.core.truth_(last_item_shift_clicked)){
return alert("got a click!");
} else {
return alert("new click!");
}
} else {
return null;
}
});
threatmodeler.core.render_threat_model_element_common = (function threatmodeler$core$render_threat_model_element_common(p__41616){
var map__41617 = p__41616;
var map__41617__$1 = (((((!((map__41617 == null))))?(((((map__41617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41617):map__41617);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41617__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41617__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41617__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41617__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41617__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.diagram-threat-model-element","span.diagram-threat-model-element",-160914358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["diagram-",cljs.core.name(type)," moveable-element-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),goog.string.format("translate(%dpx,%dpx)",x,y)], null),new cljs.core.Keyword(null,"data-element-id","data-element-id",-1177142464),id,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),threatmodeler.core.diagram_element_event_on_mouse_up_BANG_,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.set_active_moveable_element_BANG_,id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),name], null)], null);
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
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__41619 = cljs.core.get_global_hierarchy;
return (fexpr__41619.cljs$core$IFn$_invoke$arity$0 ? fexpr__41619.cljs$core$IFn$_invoke$arity$0() : fexpr__41619.call(null));
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
threatmodeler.core.add_element_BANG_ = (function threatmodeler$core$add_element_BANG_(data){

var id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var element_data = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"name","name",1843675177),"TODO"], null),data], 0));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.threat_model,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),id], null),element_data);
});
threatmodeler.core.toolbar = (function threatmodeler$core$toolbar(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.add_element_BANG_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actor","actor",-1830560481),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null))], null),"Add Actor"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.add_element_BANG_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"process","process",1643192938),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null))], null),"Add Process"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.add_element_BANG_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"datastore","datastore",-762786373),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null))], null),"Add Datastore"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.add_element_BANG_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null))], null),"Add Trust Boundary"], null)], null);
});
threatmodeler.core.diagram_event_element_drag_stop = (function threatmodeler$core$diagram_event_element_drag_stop(id,event,data){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(threatmodeler.core.threat_model,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),id], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),data.lastX,new cljs.core.Keyword(null,"y","y",-1757859776),data.lastY], null)], 0));
});
threatmodeler.core.last_element_dragged = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
threatmodeler.core.moveable_drag_end_BANG_ = (function threatmodeler$core$moveable_drag_end_BANG_(){
var dragged_values_41624 = cljs.core.deref(threatmodeler.core.ui_state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.threat_model,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"currently-dragged-element-id","currently-dragged-element-id",383390933).cljs$core$IFn$_invoke$arity$1(dragged_values_41624)], null),(function (cur_val){
console.log("vals",cur_val);

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cur_val,dragged_values_41624], 0));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"currently-dragged-element-id","currently-dragged-element-id",383390933),null);
});
threatmodeler.core.moveable_drag_start_BANG_ = (function threatmodeler$core$moveable_drag_start_BANG_(event){
var element_id = threatmodeler.core.html_element__GT_element_id(event.target);
var cur_element_info = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.threat_model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),element_id], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.ui_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"currently-dragged-element-id","currently-dragged-element-id",383390933),element_id], null),cljs.core.select_keys(cur_element_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null)));
});
threatmodeler.core.moveable_drag_on_BANG_ = (function threatmodeler$core$moveable_drag_on_BANG_(event){
console.log(event);

var last_element_dragged_deref = cljs.core.deref(threatmodeler.core.ui_state);
var newX = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(last_element_dragged_deref) + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event.delta,(0)));
var newY = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(last_element_dragged_deref) + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event.delta,(1)));
var element_id = new cljs.core.Keyword(null,"currently-dragged-element-id","currently-dragged-element-id",383390933).cljs$core$IFn$_invoke$arity$1(last_element_dragged_deref);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(threatmodeler.core.ui_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),newX,new cljs.core.Keyword(null,"y","y",-1757859776),newY], null));

return (event.target.style.transform = goog.string.format("translate(%dpx,%dpx)",newX,newY));
});
threatmodeler.core.simple_example = (function threatmodeler$core$simple_example(threat_model){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.toolbar], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function threatmodeler$core$simple_example_$_iter__41620(s__41621){
return (new cljs.core.LazySeq(null,(function (){
var s__41621__$1 = s__41621;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41621__$1);
if(temp__5735__auto__){
var s__41621__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41621__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41621__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41623 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41622 = (0);
while(true){
if((i__41622 < size__4581__auto__)){
var element = cljs.core._nth(c__4580__auto__,i__41622);
cljs.core.chunk_append(b__41623,threatmodeler.core.render_threat_model_element.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threat_model))));

var G__41625 = (i__41622 + (1));
i__41622 = G__41625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41623),threatmodeler$core$simple_example_$_iter__41620(cljs.core.chunk_rest(s__41621__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41623),null);
}
} else {
var element = cljs.core.first(s__41621__$2);
return cljs.core.cons(threatmodeler.core.render_threat_model_element.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threat_model))),threatmodeler$core$simple_example_$_iter__41620(cljs.core.rest(s__41621__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.vals(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threat_model))));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.moveable,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"target","target",253001721),document.querySelector([".moveable-element-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-moveable-id","active-moveable-id",265410232).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threatmodeler.core.ui_state)))].join('')),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"throttleDrag","throttleDrag",-195020244),(25),new cljs.core.Keyword(null,"throttleDragRotate","throttleDragRotate",-2100604979),(0),new cljs.core.Keyword(null,"onDragStart","onDragStart",-2108300997),threatmodeler.core.moveable_drag_start_BANG_,new cljs.core.Keyword(null,"onDrag","onDrag",779956324),threatmodeler.core.moveable_drag_on_BANG_,new cljs.core.Keyword(null,"snappable","snappable",-90530806),true,new cljs.core.Keyword(null,"onDragEnd","onDragEnd",1520191895),threatmodeler.core.moveable_drag_end_BANG_], null)], null)], null);
});
threatmodeler.core.main_BANG_ = (function threatmodeler$core$main_BANG_(){
return null;
});
goog.exportSymbol('threatmodeler.core.main_BANG_', threatmodeler.core.main_BANG_);
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.simple_example,threatmodeler.core.threat_model], null),document.getElementById("app"));

//# sourceMappingURL=threatmodeler.core.js.map
