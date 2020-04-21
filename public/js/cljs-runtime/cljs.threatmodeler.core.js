goog.provide('threatmodeler.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
var module$node_modules$react_draggable$build$web$react_draggable_min=shadow.js.require("module$node_modules$react_draggable$build$web$react_draggable_min", {});
goog.require('goog.string.format');
var module$node_modules$react_moveable$dist$moveable_cjs=shadow.js.require("module$node_modules$react_moveable$dist$moveable_cjs", {});
goog.require('cljs.test');
threatmodeler.core.threat_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentArrayMap(null, 6, [(1),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actor","actor",-1830560481),new cljs.core.Keyword(null,"name","name",1843675177),"hackerman",new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(50),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),(2),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"process","process",1643192938),new cljs.core.Keyword(null,"name","name",1843675177),"webapp",new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100)], null),(3),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"datastore","datastore",-762786373),new cljs.core.Keyword(null,"name","name",1843675177),"datastore",new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(400),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(50)], null),(4),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"communication","communication",1734879700),new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"to","to",192099007),(2)], null),(5),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"communication","communication",1734879700),new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"to","to",192099007),(3)], null),(6),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),new cljs.core.Keyword(null,"x1","x1",-1863922247),(100),new cljs.core.Keyword(null,"y1","y1",589123466),(200),new cljs.core.Keyword(null,"x2","x2",-1362513475),(100),new cljs.core.Keyword(null,"y2","y2",-718691301),(300)], null)], null),new cljs.core.Keyword(null,"threats","threats",-7323746),cljs.core.PersistentVector.EMPTY], null));
if((typeof threatmodeler !== 'undefined') && (typeof threatmodeler.core !== 'undefined') && (typeof threatmodeler.core.timer !== 'undefined')){
} else {
threatmodeler.core.timer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new Date()));
}
if((typeof threatmodeler !== 'undefined') && (typeof threatmodeler.core !== 'undefined') && (typeof threatmodeler.core.time_color !== 'undefined')){
} else {
threatmodeler.core.time_color = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("#f34");
}
if((typeof threatmodeler !== 'undefined') && (typeof threatmodeler.core !== 'undefined') && (typeof threatmodeler.core.time_updater !== 'undefined')){
} else {
threatmodeler.core.time_updater = setInterval((function (){
return cljs.core.reset_BANG_(threatmodeler.core.timer,(new Date()));
}),(1000));
}
threatmodeler.core.clock = (function threatmodeler$core$clock(){
var time_str = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(threatmodeler.core.timer).toTimeString()," "));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref(threatmodeler.core.time_color)], null)], null),time_str], null);
});
threatmodeler.core.color_input = (function threatmodeler$core$color_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Time color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(threatmodeler.core.time_color),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10422_SHARP_){
return cljs.core.reset_BANG_(threatmodeler.core.time_color,p1__10422_SHARP_.target.value);
})], null)], null)], null);
});
threatmodeler.core.draggable = reagent.core.adapt_react_class(ReactDraggable);
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
threatmodeler.core.render_line = (function threatmodeler$core$render_line(p__10481){
var map__10482 = p__10481;
var map__10482__$1 = (((((!((map__10482 == null))))?(((((map__10482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10482):map__10482);
var line = map__10482__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10482__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10482__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10482__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10482__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10482__$1,new cljs.core.Keyword(null,"style","style",-496642736));
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

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"draggable","draggable",1676206163).cljs$core$IFn$_invoke$arity$1(line))?threatmodeler.core.draggable:new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line.diagram-threat-model-element","div.line.diagram-threat-model-element",-1685853637),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"2px",new cljs.core.Keyword(null,"width","width",-384071477),goog.string.format("%dpx",lineLength),new cljs.core.Keyword(null,"border-top","border-top",-158897573),goog.string.format("2px %s black",style__$1),new cljs.core.Keyword(null,"transform","transform",1381301764),goog.string.format("translate(%dpx,%dpx) rotate(%frad)",x1,y1,rotationDegree),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"center left",new cljs.core.Keyword(null,"padding","padding",1660304693),(cljs.core.truth_(new cljs.core.Keyword(null,"draggable","draggable",1676206163).cljs$core$IFn$_invoke$arity$1(line))?"5px":"0")], null)], null),"hm"], null)], null);
});
threatmodeler.core.diagram_event_element_drag_stop = (function threatmodeler$core$diagram_event_element_drag_stop(id,event,data){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(threatmodeler.core.threat_model,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),id], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),data.lastX,new cljs.core.Keyword(null,"y","y",-1757859776),data.lastY], null)], 0));
});
threatmodeler.core.render_threat_model_element_common = (function threatmodeler$core$render_threat_model_element_common(p__10490){
var map__10491 = p__10490;
var map__10491__$1 = (((((!((map__10491 == null))))?(((((map__10491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10491):map__10491);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10491__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10491__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10491__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10491__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10491__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.draggable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(25)], null),new cljs.core.Keyword(null,"defaultPosition","defaultPosition",-2093677076),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"onStop","onStop",-1433402652),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.diagram_event_element_drag_stop,id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.diagram-threat-model-element","span.diagram-threat-model-element",-160914358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["diagram-",cljs.core.name(type)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),goog.string.format("translate(%dpx,%dpx)",x,y)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),name], null)], null)], null);
});
threatmodeler.core.render_threat_model_element_communication = (function threatmodeler$core$render_threat_model_element_communication(element,elements){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.render_line,threatmodeler.core.calculate_line_points(cljs.core.get.cljs$core$IFn$_invoke$arity$2(elements,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(element)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(elements,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(element)))], null);
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
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__10496 = cljs.core.get_global_hierarchy;
return (fexpr__10496.cljs$core$IFn$_invoke$arity$0 ? fexpr__10496.cljs$core$IFn$_invoke$arity$0() : fexpr__10496.call(null));
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
threatmodeler.core.render_threat_model_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boundary","boundary",-2000996754),(function (element,elements){
return threatmodeler.core.render_threat_model_element_boundary(element,elements);
}));
threatmodeler.core.add_element_BANG_ = (function threatmodeler$core$add_element_BANG_(data){

var id = cljs.core.random_uuid();
var element_data = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"name","name",1843675177),"TODO"], null),data], 0));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(threatmodeler.core.threat_model,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),id], null),element_data);
});
threatmodeler.core.toolbar = (function threatmodeler$core$toolbar(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.add_element_BANG_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actor","actor",-1830560481),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null))], null),"Add Actor"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.add_element_BANG_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"process","process",1643192938),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null))], null),"Add Process"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.add_element_BANG_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"datastore","datastore",-762786373),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null))], null),"Add Datastore"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threatmodeler.core.add_element_BANG_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),new cljs.core.Keyword(null,"x1","x1",-1863922247),(100),new cljs.core.Keyword(null,"y1","y1",589123466),(100),new cljs.core.Keyword(null,"x2","x2",-1362513475),(200),new cljs.core.Keyword(null,"y2","y2",-718691301),(200)], null))], null),"Add Trust Boundary"], null)], null);
});
threatmodeler.core.simple_example = (function threatmodeler$core$simple_example(threat_model){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.toolbar], null),(function (){var iter__4582__auto__ = (function threatmodeler$core$simple_example_$_iter__10510(s__10511){
return (new cljs.core.LazySeq(null,(function (){
var s__10511__$1 = s__10511;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10511__$1);
if(temp__5735__auto__){
var s__10511__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10511__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__10511__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__10513 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__10512 = (0);
while(true){
if((i__10512 < size__4581__auto__)){
var element = cljs.core._nth(c__4580__auto__,i__10512);
cljs.core.chunk_append(b__10513,threatmodeler.core.render_threat_model_element.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threat_model))));

var G__10515 = (i__10512 + (1));
i__10512 = G__10515;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10513),threatmodeler$core$simple_example_$_iter__10510(cljs.core.chunk_rest(s__10511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10513),null);
}
} else {
var element = cljs.core.first(s__10511__$2);
return cljs.core.cons(threatmodeler.core.render_threat_model_element.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threat_model))),threatmodeler$core$simple_example_$_iter__10510(cljs.core.rest(s__10511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.vals(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(threat_model))));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.clock], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.color_input], null)], null);
});
threatmodeler.core.init_BANG_ = (function threatmodeler$core$init_BANG_(){
return null;
});
goog.exportSymbol('threatmodeler.core.init_BANG_', threatmodeler.core.init_BANG_);
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threatmodeler.core.simple_example,threatmodeler.core.threat_model], null),document.getElementById("app"));

//# sourceMappingURL=cljs.threatmodeler.core.js.map
