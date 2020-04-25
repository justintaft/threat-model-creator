goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32757 = coll;
var G__32758 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32757,G__32758) : shadow.dom.lazy_native_coll_seq.call(null,G__32757,G__32758));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32771 = arguments.length;
switch (G__32771) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32774 = arguments.length;
switch (G__32774) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32777 = arguments.length;
switch (G__32777) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32782 = arguments.length;
switch (G__32782) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32787 = arguments.length;
switch (G__32787) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32791 = arguments.length;
switch (G__32791) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32793){if((e32793 instanceof Object)){
var e = e32793;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32793;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32797 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32798 = null;
var count__32799 = (0);
var i__32800 = (0);
while(true){
if((i__32800 < count__32799)){
var el = chunk__32798.cljs$core$IIndexed$_nth$arity$2(null,i__32800);
var handler_33250__$1 = ((function (seq__32797,chunk__32798,count__32799,i__32800,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32797,chunk__32798,count__32799,i__32800,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33250__$1);


var G__33251 = seq__32797;
var G__33252 = chunk__32798;
var G__33253 = count__32799;
var G__33254 = (i__32800 + (1));
seq__32797 = G__33251;
chunk__32798 = G__33252;
count__32799 = G__33253;
i__32800 = G__33254;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32797);
if(temp__5735__auto__){
var seq__32797__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32797__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32797__$1);
var G__33255 = cljs.core.chunk_rest(seq__32797__$1);
var G__33256 = c__4609__auto__;
var G__33257 = cljs.core.count(c__4609__auto__);
var G__33258 = (0);
seq__32797 = G__33255;
chunk__32798 = G__33256;
count__32799 = G__33257;
i__32800 = G__33258;
continue;
} else {
var el = cljs.core.first(seq__32797__$1);
var handler_33259__$1 = ((function (seq__32797,chunk__32798,count__32799,i__32800,el,seq__32797__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32797,chunk__32798,count__32799,i__32800,el,seq__32797__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33259__$1);


var G__33260 = cljs.core.next(seq__32797__$1);
var G__33261 = null;
var G__33262 = (0);
var G__33263 = (0);
seq__32797 = G__33260;
chunk__32798 = G__33261;
count__32799 = G__33262;
i__32800 = G__33263;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32807 = arguments.length;
switch (G__32807) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32812 = cljs.core.seq(events);
var chunk__32813 = null;
var count__32814 = (0);
var i__32815 = (0);
while(true){
if((i__32815 < count__32814)){
var vec__32824 = chunk__32813.cljs$core$IIndexed$_nth$arity$2(null,i__32815);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32824,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32824,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33271 = seq__32812;
var G__33272 = chunk__32813;
var G__33273 = count__32814;
var G__33274 = (i__32815 + (1));
seq__32812 = G__33271;
chunk__32813 = G__33272;
count__32814 = G__33273;
i__32815 = G__33274;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32812);
if(temp__5735__auto__){
var seq__32812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32812__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32812__$1);
var G__33275 = cljs.core.chunk_rest(seq__32812__$1);
var G__33276 = c__4609__auto__;
var G__33277 = cljs.core.count(c__4609__auto__);
var G__33278 = (0);
seq__32812 = G__33275;
chunk__32813 = G__33276;
count__32814 = G__33277;
i__32815 = G__33278;
continue;
} else {
var vec__32827 = cljs.core.first(seq__32812__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32827,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32827,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33280 = cljs.core.next(seq__32812__$1);
var G__33281 = null;
var G__33282 = (0);
var G__33283 = (0);
seq__32812 = G__33280;
chunk__32813 = G__33281;
count__32814 = G__33282;
i__32815 = G__33283;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32832 = cljs.core.seq(styles);
var chunk__32833 = null;
var count__32834 = (0);
var i__32835 = (0);
while(true){
if((i__32835 < count__32834)){
var vec__32844 = chunk__32833.cljs$core$IIndexed$_nth$arity$2(null,i__32835);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32844,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33285 = seq__32832;
var G__33286 = chunk__32833;
var G__33287 = count__32834;
var G__33288 = (i__32835 + (1));
seq__32832 = G__33285;
chunk__32833 = G__33286;
count__32834 = G__33287;
i__32835 = G__33288;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32832);
if(temp__5735__auto__){
var seq__32832__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32832__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32832__$1);
var G__33290 = cljs.core.chunk_rest(seq__32832__$1);
var G__33291 = c__4609__auto__;
var G__33292 = cljs.core.count(c__4609__auto__);
var G__33293 = (0);
seq__32832 = G__33290;
chunk__32833 = G__33291;
count__32834 = G__33292;
i__32835 = G__33293;
continue;
} else {
var vec__32847 = cljs.core.first(seq__32832__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32847,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32847,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33294 = cljs.core.next(seq__32832__$1);
var G__33295 = null;
var G__33296 = (0);
var G__33297 = (0);
seq__32832 = G__33294;
chunk__32833 = G__33295;
count__32834 = G__33296;
i__32835 = G__33297;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32851_33298 = key;
var G__32851_33300__$1 = (((G__32851_33298 instanceof cljs.core.Keyword))?G__32851_33298.fqn:null);
switch (G__32851_33300__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33303 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33303,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33303,"aria-");
}
})())){
el.setAttribute(ks_33303,value);
} else {
(el[ks_33303] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32856){
var map__32857 = p__32856;
var map__32857__$1 = (((((!((map__32857 == null))))?(((((map__32857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32857):map__32857);
var props = map__32857__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32857__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32861 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32861,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32861,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32861,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32865 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32865,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32865;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32867 = arguments.length;
switch (G__32867) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32870){
var vec__32872 = p__32870;
var seq__32873 = cljs.core.seq(vec__32872);
var first__32874 = cljs.core.first(seq__32873);
var seq__32873__$1 = cljs.core.next(seq__32873);
var nn = first__32874;
var first__32874__$1 = cljs.core.first(seq__32873__$1);
var seq__32873__$2 = cljs.core.next(seq__32873__$1);
var np = first__32874__$1;
var nc = seq__32873__$2;
var node = vec__32872;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32875 = nn;
var G__32876 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32875,G__32876) : create_fn.call(null,G__32875,G__32876));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32877 = nn;
var G__32878 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32877,G__32878) : create_fn.call(null,G__32877,G__32878));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32880 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32880,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32880,(1),null);
var seq__32883_33322 = cljs.core.seq(node_children);
var chunk__32884_33323 = null;
var count__32885_33324 = (0);
var i__32886_33325 = (0);
while(true){
if((i__32886_33325 < count__32885_33324)){
var child_struct_33326 = chunk__32884_33323.cljs$core$IIndexed$_nth$arity$2(null,i__32886_33325);
var children_33327 = shadow.dom.dom_node(child_struct_33326);
if(cljs.core.seq_QMARK_(children_33327)){
var seq__32911_33329 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33327));
var chunk__32913_33330 = null;
var count__32914_33331 = (0);
var i__32915_33332 = (0);
while(true){
if((i__32915_33332 < count__32914_33331)){
var child_33334 = chunk__32913_33330.cljs$core$IIndexed$_nth$arity$2(null,i__32915_33332);
if(cljs.core.truth_(child_33334)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33334);


var G__33336 = seq__32911_33329;
var G__33337 = chunk__32913_33330;
var G__33338 = count__32914_33331;
var G__33339 = (i__32915_33332 + (1));
seq__32911_33329 = G__33336;
chunk__32913_33330 = G__33337;
count__32914_33331 = G__33338;
i__32915_33332 = G__33339;
continue;
} else {
var G__33340 = seq__32911_33329;
var G__33341 = chunk__32913_33330;
var G__33342 = count__32914_33331;
var G__33343 = (i__32915_33332 + (1));
seq__32911_33329 = G__33340;
chunk__32913_33330 = G__33341;
count__32914_33331 = G__33342;
i__32915_33332 = G__33343;
continue;
}
} else {
var temp__5735__auto___33344 = cljs.core.seq(seq__32911_33329);
if(temp__5735__auto___33344){
var seq__32911_33345__$1 = temp__5735__auto___33344;
if(cljs.core.chunked_seq_QMARK_(seq__32911_33345__$1)){
var c__4609__auto___33346 = cljs.core.chunk_first(seq__32911_33345__$1);
var G__33347 = cljs.core.chunk_rest(seq__32911_33345__$1);
var G__33348 = c__4609__auto___33346;
var G__33349 = cljs.core.count(c__4609__auto___33346);
var G__33350 = (0);
seq__32911_33329 = G__33347;
chunk__32913_33330 = G__33348;
count__32914_33331 = G__33349;
i__32915_33332 = G__33350;
continue;
} else {
var child_33352 = cljs.core.first(seq__32911_33345__$1);
if(cljs.core.truth_(child_33352)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33352);


var G__33353 = cljs.core.next(seq__32911_33345__$1);
var G__33354 = null;
var G__33355 = (0);
var G__33356 = (0);
seq__32911_33329 = G__33353;
chunk__32913_33330 = G__33354;
count__32914_33331 = G__33355;
i__32915_33332 = G__33356;
continue;
} else {
var G__33358 = cljs.core.next(seq__32911_33345__$1);
var G__33359 = null;
var G__33360 = (0);
var G__33361 = (0);
seq__32911_33329 = G__33358;
chunk__32913_33330 = G__33359;
count__32914_33331 = G__33360;
i__32915_33332 = G__33361;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33327);
}


var G__33362 = seq__32883_33322;
var G__33363 = chunk__32884_33323;
var G__33364 = count__32885_33324;
var G__33365 = (i__32886_33325 + (1));
seq__32883_33322 = G__33362;
chunk__32884_33323 = G__33363;
count__32885_33324 = G__33364;
i__32886_33325 = G__33365;
continue;
} else {
var temp__5735__auto___33366 = cljs.core.seq(seq__32883_33322);
if(temp__5735__auto___33366){
var seq__32883_33367__$1 = temp__5735__auto___33366;
if(cljs.core.chunked_seq_QMARK_(seq__32883_33367__$1)){
var c__4609__auto___33368 = cljs.core.chunk_first(seq__32883_33367__$1);
var G__33369 = cljs.core.chunk_rest(seq__32883_33367__$1);
var G__33370 = c__4609__auto___33368;
var G__33371 = cljs.core.count(c__4609__auto___33368);
var G__33372 = (0);
seq__32883_33322 = G__33369;
chunk__32884_33323 = G__33370;
count__32885_33324 = G__33371;
i__32886_33325 = G__33372;
continue;
} else {
var child_struct_33374 = cljs.core.first(seq__32883_33367__$1);
var children_33376 = shadow.dom.dom_node(child_struct_33374);
if(cljs.core.seq_QMARK_(children_33376)){
var seq__32923_33377 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33376));
var chunk__32925_33378 = null;
var count__32926_33379 = (0);
var i__32927_33380 = (0);
while(true){
if((i__32927_33380 < count__32926_33379)){
var child_33382 = chunk__32925_33378.cljs$core$IIndexed$_nth$arity$2(null,i__32927_33380);
if(cljs.core.truth_(child_33382)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33382);


var G__33383 = seq__32923_33377;
var G__33384 = chunk__32925_33378;
var G__33385 = count__32926_33379;
var G__33386 = (i__32927_33380 + (1));
seq__32923_33377 = G__33383;
chunk__32925_33378 = G__33384;
count__32926_33379 = G__33385;
i__32927_33380 = G__33386;
continue;
} else {
var G__33387 = seq__32923_33377;
var G__33388 = chunk__32925_33378;
var G__33389 = count__32926_33379;
var G__33390 = (i__32927_33380 + (1));
seq__32923_33377 = G__33387;
chunk__32925_33378 = G__33388;
count__32926_33379 = G__33389;
i__32927_33380 = G__33390;
continue;
}
} else {
var temp__5735__auto___33392__$1 = cljs.core.seq(seq__32923_33377);
if(temp__5735__auto___33392__$1){
var seq__32923_33393__$1 = temp__5735__auto___33392__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32923_33393__$1)){
var c__4609__auto___33394 = cljs.core.chunk_first(seq__32923_33393__$1);
var G__33395 = cljs.core.chunk_rest(seq__32923_33393__$1);
var G__33396 = c__4609__auto___33394;
var G__33397 = cljs.core.count(c__4609__auto___33394);
var G__33398 = (0);
seq__32923_33377 = G__33395;
chunk__32925_33378 = G__33396;
count__32926_33379 = G__33397;
i__32927_33380 = G__33398;
continue;
} else {
var child_33399 = cljs.core.first(seq__32923_33393__$1);
if(cljs.core.truth_(child_33399)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33399);


var G__33401 = cljs.core.next(seq__32923_33393__$1);
var G__33402 = null;
var G__33403 = (0);
var G__33404 = (0);
seq__32923_33377 = G__33401;
chunk__32925_33378 = G__33402;
count__32926_33379 = G__33403;
i__32927_33380 = G__33404;
continue;
} else {
var G__33406 = cljs.core.next(seq__32923_33393__$1);
var G__33407 = null;
var G__33408 = (0);
var G__33409 = (0);
seq__32923_33377 = G__33406;
chunk__32925_33378 = G__33407;
count__32926_33379 = G__33408;
i__32927_33380 = G__33409;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33376);
}


var G__33410 = cljs.core.next(seq__32883_33367__$1);
var G__33411 = null;
var G__33412 = (0);
var G__33413 = (0);
seq__32883_33322 = G__33410;
chunk__32884_33323 = G__33411;
count__32885_33324 = G__33412;
i__32886_33325 = G__33413;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32935 = cljs.core.seq(node);
var chunk__32936 = null;
var count__32937 = (0);
var i__32938 = (0);
while(true){
if((i__32938 < count__32937)){
var n = chunk__32936.cljs$core$IIndexed$_nth$arity$2(null,i__32938);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33418 = seq__32935;
var G__33419 = chunk__32936;
var G__33420 = count__32937;
var G__33421 = (i__32938 + (1));
seq__32935 = G__33418;
chunk__32936 = G__33419;
count__32937 = G__33420;
i__32938 = G__33421;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32935);
if(temp__5735__auto__){
var seq__32935__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32935__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32935__$1);
var G__33423 = cljs.core.chunk_rest(seq__32935__$1);
var G__33424 = c__4609__auto__;
var G__33425 = cljs.core.count(c__4609__auto__);
var G__33426 = (0);
seq__32935 = G__33423;
chunk__32936 = G__33424;
count__32937 = G__33425;
i__32938 = G__33426;
continue;
} else {
var n = cljs.core.first(seq__32935__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33429 = cljs.core.next(seq__32935__$1);
var G__33430 = null;
var G__33431 = (0);
var G__33432 = (0);
seq__32935 = G__33429;
chunk__32936 = G__33430;
count__32937 = G__33431;
i__32938 = G__33432;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32943 = arguments.length;
switch (G__32943) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32947 = arguments.length;
switch (G__32947) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32958 = arguments.length;
switch (G__32958) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33448 = arguments.length;
var i__4790__auto___33449 = (0);
while(true){
if((i__4790__auto___33449 < len__4789__auto___33448)){
args__4795__auto__.push((arguments[i__4790__auto___33449]));

var G__33450 = (i__4790__auto___33449 + (1));
i__4790__auto___33449 = G__33450;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32965_33452 = cljs.core.seq(nodes);
var chunk__32966_33453 = null;
var count__32967_33454 = (0);
var i__32968_33455 = (0);
while(true){
if((i__32968_33455 < count__32967_33454)){
var node_33457 = chunk__32966_33453.cljs$core$IIndexed$_nth$arity$2(null,i__32968_33455);
fragment.appendChild(shadow.dom._to_dom(node_33457));


var G__33459 = seq__32965_33452;
var G__33460 = chunk__32966_33453;
var G__33461 = count__32967_33454;
var G__33462 = (i__32968_33455 + (1));
seq__32965_33452 = G__33459;
chunk__32966_33453 = G__33460;
count__32967_33454 = G__33461;
i__32968_33455 = G__33462;
continue;
} else {
var temp__5735__auto___33463 = cljs.core.seq(seq__32965_33452);
if(temp__5735__auto___33463){
var seq__32965_33464__$1 = temp__5735__auto___33463;
if(cljs.core.chunked_seq_QMARK_(seq__32965_33464__$1)){
var c__4609__auto___33465 = cljs.core.chunk_first(seq__32965_33464__$1);
var G__33466 = cljs.core.chunk_rest(seq__32965_33464__$1);
var G__33467 = c__4609__auto___33465;
var G__33468 = cljs.core.count(c__4609__auto___33465);
var G__33469 = (0);
seq__32965_33452 = G__33466;
chunk__32966_33453 = G__33467;
count__32967_33454 = G__33468;
i__32968_33455 = G__33469;
continue;
} else {
var node_33470 = cljs.core.first(seq__32965_33464__$1);
fragment.appendChild(shadow.dom._to_dom(node_33470));


var G__33471 = cljs.core.next(seq__32965_33464__$1);
var G__33472 = null;
var G__33473 = (0);
var G__33474 = (0);
seq__32965_33452 = G__33471;
chunk__32966_33453 = G__33472;
count__32967_33454 = G__33473;
i__32968_33455 = G__33474;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32964){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32964));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32969_33475 = cljs.core.seq(scripts);
var chunk__32970_33476 = null;
var count__32971_33477 = (0);
var i__32972_33478 = (0);
while(true){
if((i__32972_33478 < count__32971_33477)){
var vec__32979_33479 = chunk__32970_33476.cljs$core$IIndexed$_nth$arity$2(null,i__32972_33478);
var script_tag_33480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32979_33479,(0),null);
var script_body_33481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32979_33479,(1),null);
eval(script_body_33481);


var G__33482 = seq__32969_33475;
var G__33483 = chunk__32970_33476;
var G__33484 = count__32971_33477;
var G__33485 = (i__32972_33478 + (1));
seq__32969_33475 = G__33482;
chunk__32970_33476 = G__33483;
count__32971_33477 = G__33484;
i__32972_33478 = G__33485;
continue;
} else {
var temp__5735__auto___33486 = cljs.core.seq(seq__32969_33475);
if(temp__5735__auto___33486){
var seq__32969_33487__$1 = temp__5735__auto___33486;
if(cljs.core.chunked_seq_QMARK_(seq__32969_33487__$1)){
var c__4609__auto___33488 = cljs.core.chunk_first(seq__32969_33487__$1);
var G__33489 = cljs.core.chunk_rest(seq__32969_33487__$1);
var G__33490 = c__4609__auto___33488;
var G__33491 = cljs.core.count(c__4609__auto___33488);
var G__33492 = (0);
seq__32969_33475 = G__33489;
chunk__32970_33476 = G__33490;
count__32971_33477 = G__33491;
i__32972_33478 = G__33492;
continue;
} else {
var vec__32982_33493 = cljs.core.first(seq__32969_33487__$1);
var script_tag_33494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32982_33493,(0),null);
var script_body_33495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32982_33493,(1),null);
eval(script_body_33495);


var G__33496 = cljs.core.next(seq__32969_33487__$1);
var G__33497 = null;
var G__33498 = (0);
var G__33499 = (0);
seq__32969_33475 = G__33496;
chunk__32970_33476 = G__33497;
count__32971_33477 = G__33498;
i__32972_33478 = G__33499;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32985){
var vec__32986 = p__32985;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32986,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32986,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32990 = arguments.length;
switch (G__32990) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32993 = cljs.core.seq(style_keys);
var chunk__32994 = null;
var count__32995 = (0);
var i__32996 = (0);
while(true){
if((i__32996 < count__32995)){
var it = chunk__32994.cljs$core$IIndexed$_nth$arity$2(null,i__32996);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33501 = seq__32993;
var G__33502 = chunk__32994;
var G__33503 = count__32995;
var G__33504 = (i__32996 + (1));
seq__32993 = G__33501;
chunk__32994 = G__33502;
count__32995 = G__33503;
i__32996 = G__33504;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32993);
if(temp__5735__auto__){
var seq__32993__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32993__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32993__$1);
var G__33505 = cljs.core.chunk_rest(seq__32993__$1);
var G__33506 = c__4609__auto__;
var G__33507 = cljs.core.count(c__4609__auto__);
var G__33508 = (0);
seq__32993 = G__33505;
chunk__32994 = G__33506;
count__32995 = G__33507;
i__32996 = G__33508;
continue;
} else {
var it = cljs.core.first(seq__32993__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33509 = cljs.core.next(seq__32993__$1);
var G__33510 = null;
var G__33511 = (0);
var G__33512 = (0);
seq__32993 = G__33509;
chunk__32994 = G__33510;
count__32995 = G__33511;
i__32996 = G__33512;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33004,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33012 = k33004;
var G__33012__$1 = (((G__33012 instanceof cljs.core.Keyword))?G__33012.fqn:null);
switch (G__33012__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33004,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33015){
var vec__33016 = p__33015;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33016,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33016,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33003){
var self__ = this;
var G__33003__$1 = this;
return (new cljs.core.RecordIter((0),G__33003__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33005,other33006){
var self__ = this;
var this33005__$1 = this;
return (((!((other33006 == null)))) && ((this33005__$1.constructor === other33006.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33005__$1.x,other33006.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33005__$1.y,other33006.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33005__$1.__extmap,other33006.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33003){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33026 = cljs.core.keyword_identical_QMARK_;
var expr__33027 = k__4447__auto__;
if(cljs.core.truth_((pred__33026.cljs$core$IFn$_invoke$arity$2 ? pred__33026.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33027) : pred__33026.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33027)))){
return (new shadow.dom.Coordinate(G__33003,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33026.cljs$core$IFn$_invoke$arity$2 ? pred__33026.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33027) : pred__33026.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33027)))){
return (new shadow.dom.Coordinate(self__.x,G__33003,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33003),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33003){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33003,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33008){
var extmap__4478__auto__ = (function (){var G__33035 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33008,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33008)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33035);
} else {
return G__33035;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33008),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33008),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33045,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33053 = k33045;
var G__33053__$1 = (((G__33053 instanceof cljs.core.Keyword))?G__33053.fqn:null);
switch (G__33053__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33045,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33055){
var vec__33056 = p__33055;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33056,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33056,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33044){
var self__ = this;
var G__33044__$1 = this;
return (new cljs.core.RecordIter((0),G__33044__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33046,other33047){
var self__ = this;
var this33046__$1 = this;
return (((!((other33047 == null)))) && ((this33046__$1.constructor === other33047.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33046__$1.w,other33047.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33046__$1.h,other33047.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33046__$1.__extmap,other33047.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33044){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33074 = cljs.core.keyword_identical_QMARK_;
var expr__33075 = k__4447__auto__;
if(cljs.core.truth_((pred__33074.cljs$core$IFn$_invoke$arity$2 ? pred__33074.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33075) : pred__33074.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33075)))){
return (new shadow.dom.Size(G__33044,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33074.cljs$core$IFn$_invoke$arity$2 ? pred__33074.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33075) : pred__33074.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33075)))){
return (new shadow.dom.Size(self__.w,G__33044,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33044),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33044){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33044,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33048){
var extmap__4478__auto__ = (function (){var G__33081 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33048,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33048)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33081);
} else {
return G__33081;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33048),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33048),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__33553 = (i + (1));
var G__33554 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33553;
ret = G__33554;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33086){
var vec__33087 = p__33086;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33087,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33087,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33091 = arguments.length;
switch (G__33091) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33562 = ps;
var G__33563 = (i + (1));
el__$1 = G__33562;
i = G__33563;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33098 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33098,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33098,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33098,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33101_33567 = cljs.core.seq(props);
var chunk__33102_33568 = null;
var count__33103_33569 = (0);
var i__33104_33570 = (0);
while(true){
if((i__33104_33570 < count__33103_33569)){
var vec__33111_33572 = chunk__33102_33568.cljs$core$IIndexed$_nth$arity$2(null,i__33104_33570);
var k_33573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33111_33572,(0),null);
var v_33574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33111_33572,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33573);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33573),v_33574);


var G__33576 = seq__33101_33567;
var G__33577 = chunk__33102_33568;
var G__33578 = count__33103_33569;
var G__33579 = (i__33104_33570 + (1));
seq__33101_33567 = G__33576;
chunk__33102_33568 = G__33577;
count__33103_33569 = G__33578;
i__33104_33570 = G__33579;
continue;
} else {
var temp__5735__auto___33580 = cljs.core.seq(seq__33101_33567);
if(temp__5735__auto___33580){
var seq__33101_33582__$1 = temp__5735__auto___33580;
if(cljs.core.chunked_seq_QMARK_(seq__33101_33582__$1)){
var c__4609__auto___33584 = cljs.core.chunk_first(seq__33101_33582__$1);
var G__33585 = cljs.core.chunk_rest(seq__33101_33582__$1);
var G__33586 = c__4609__auto___33584;
var G__33587 = cljs.core.count(c__4609__auto___33584);
var G__33588 = (0);
seq__33101_33567 = G__33585;
chunk__33102_33568 = G__33586;
count__33103_33569 = G__33587;
i__33104_33570 = G__33588;
continue;
} else {
var vec__33114_33590 = cljs.core.first(seq__33101_33582__$1);
var k_33591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33114_33590,(0),null);
var v_33592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33114_33590,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33591);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33591),v_33592);


var G__33593 = cljs.core.next(seq__33101_33582__$1);
var G__33594 = null;
var G__33595 = (0);
var G__33596 = (0);
seq__33101_33567 = G__33593;
chunk__33102_33568 = G__33594;
count__33103_33569 = G__33595;
i__33104_33570 = G__33596;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33120 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33120,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33120,(1),null);
var seq__33124_33598 = cljs.core.seq(node_children);
var chunk__33126_33599 = null;
var count__33127_33600 = (0);
var i__33128_33601 = (0);
while(true){
if((i__33128_33601 < count__33127_33600)){
var child_struct_33604 = chunk__33126_33599.cljs$core$IIndexed$_nth$arity$2(null,i__33128_33601);
if((!((child_struct_33604 == null)))){
if(typeof child_struct_33604 === 'string'){
var text_33605 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33605),child_struct_33604].join(''));
} else {
var children_33607 = shadow.dom.svg_node(child_struct_33604);
if(cljs.core.seq_QMARK_(children_33607)){
var seq__33164_33608 = cljs.core.seq(children_33607);
var chunk__33166_33609 = null;
var count__33167_33610 = (0);
var i__33168_33611 = (0);
while(true){
if((i__33168_33611 < count__33167_33610)){
var child_33612 = chunk__33166_33609.cljs$core$IIndexed$_nth$arity$2(null,i__33168_33611);
if(cljs.core.truth_(child_33612)){
node.appendChild(child_33612);


var G__33614 = seq__33164_33608;
var G__33615 = chunk__33166_33609;
var G__33616 = count__33167_33610;
var G__33617 = (i__33168_33611 + (1));
seq__33164_33608 = G__33614;
chunk__33166_33609 = G__33615;
count__33167_33610 = G__33616;
i__33168_33611 = G__33617;
continue;
} else {
var G__33618 = seq__33164_33608;
var G__33619 = chunk__33166_33609;
var G__33620 = count__33167_33610;
var G__33621 = (i__33168_33611 + (1));
seq__33164_33608 = G__33618;
chunk__33166_33609 = G__33619;
count__33167_33610 = G__33620;
i__33168_33611 = G__33621;
continue;
}
} else {
var temp__5735__auto___33622 = cljs.core.seq(seq__33164_33608);
if(temp__5735__auto___33622){
var seq__33164_33623__$1 = temp__5735__auto___33622;
if(cljs.core.chunked_seq_QMARK_(seq__33164_33623__$1)){
var c__4609__auto___33624 = cljs.core.chunk_first(seq__33164_33623__$1);
var G__33625 = cljs.core.chunk_rest(seq__33164_33623__$1);
var G__33626 = c__4609__auto___33624;
var G__33627 = cljs.core.count(c__4609__auto___33624);
var G__33628 = (0);
seq__33164_33608 = G__33625;
chunk__33166_33609 = G__33626;
count__33167_33610 = G__33627;
i__33168_33611 = G__33628;
continue;
} else {
var child_33630 = cljs.core.first(seq__33164_33623__$1);
if(cljs.core.truth_(child_33630)){
node.appendChild(child_33630);


var G__33632 = cljs.core.next(seq__33164_33623__$1);
var G__33633 = null;
var G__33634 = (0);
var G__33635 = (0);
seq__33164_33608 = G__33632;
chunk__33166_33609 = G__33633;
count__33167_33610 = G__33634;
i__33168_33611 = G__33635;
continue;
} else {
var G__33637 = cljs.core.next(seq__33164_33623__$1);
var G__33638 = null;
var G__33639 = (0);
var G__33640 = (0);
seq__33164_33608 = G__33637;
chunk__33166_33609 = G__33638;
count__33167_33610 = G__33639;
i__33168_33611 = G__33640;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33607);
}
}


var G__33641 = seq__33124_33598;
var G__33642 = chunk__33126_33599;
var G__33643 = count__33127_33600;
var G__33644 = (i__33128_33601 + (1));
seq__33124_33598 = G__33641;
chunk__33126_33599 = G__33642;
count__33127_33600 = G__33643;
i__33128_33601 = G__33644;
continue;
} else {
var G__33645 = seq__33124_33598;
var G__33646 = chunk__33126_33599;
var G__33647 = count__33127_33600;
var G__33648 = (i__33128_33601 + (1));
seq__33124_33598 = G__33645;
chunk__33126_33599 = G__33646;
count__33127_33600 = G__33647;
i__33128_33601 = G__33648;
continue;
}
} else {
var temp__5735__auto___33650 = cljs.core.seq(seq__33124_33598);
if(temp__5735__auto___33650){
var seq__33124_33651__$1 = temp__5735__auto___33650;
if(cljs.core.chunked_seq_QMARK_(seq__33124_33651__$1)){
var c__4609__auto___33652 = cljs.core.chunk_first(seq__33124_33651__$1);
var G__33653 = cljs.core.chunk_rest(seq__33124_33651__$1);
var G__33654 = c__4609__auto___33652;
var G__33655 = cljs.core.count(c__4609__auto___33652);
var G__33656 = (0);
seq__33124_33598 = G__33653;
chunk__33126_33599 = G__33654;
count__33127_33600 = G__33655;
i__33128_33601 = G__33656;
continue;
} else {
var child_struct_33657 = cljs.core.first(seq__33124_33651__$1);
if((!((child_struct_33657 == null)))){
if(typeof child_struct_33657 === 'string'){
var text_33659 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33659),child_struct_33657].join(''));
} else {
var children_33660 = shadow.dom.svg_node(child_struct_33657);
if(cljs.core.seq_QMARK_(children_33660)){
var seq__33181_33662 = cljs.core.seq(children_33660);
var chunk__33183_33663 = null;
var count__33184_33664 = (0);
var i__33185_33665 = (0);
while(true){
if((i__33185_33665 < count__33184_33664)){
var child_33666 = chunk__33183_33663.cljs$core$IIndexed$_nth$arity$2(null,i__33185_33665);
if(cljs.core.truth_(child_33666)){
node.appendChild(child_33666);


var G__33668 = seq__33181_33662;
var G__33669 = chunk__33183_33663;
var G__33670 = count__33184_33664;
var G__33671 = (i__33185_33665 + (1));
seq__33181_33662 = G__33668;
chunk__33183_33663 = G__33669;
count__33184_33664 = G__33670;
i__33185_33665 = G__33671;
continue;
} else {
var G__33672 = seq__33181_33662;
var G__33673 = chunk__33183_33663;
var G__33674 = count__33184_33664;
var G__33675 = (i__33185_33665 + (1));
seq__33181_33662 = G__33672;
chunk__33183_33663 = G__33673;
count__33184_33664 = G__33674;
i__33185_33665 = G__33675;
continue;
}
} else {
var temp__5735__auto___33676__$1 = cljs.core.seq(seq__33181_33662);
if(temp__5735__auto___33676__$1){
var seq__33181_33677__$1 = temp__5735__auto___33676__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33181_33677__$1)){
var c__4609__auto___33678 = cljs.core.chunk_first(seq__33181_33677__$1);
var G__33680 = cljs.core.chunk_rest(seq__33181_33677__$1);
var G__33681 = c__4609__auto___33678;
var G__33682 = cljs.core.count(c__4609__auto___33678);
var G__33683 = (0);
seq__33181_33662 = G__33680;
chunk__33183_33663 = G__33681;
count__33184_33664 = G__33682;
i__33185_33665 = G__33683;
continue;
} else {
var child_33685 = cljs.core.first(seq__33181_33677__$1);
if(cljs.core.truth_(child_33685)){
node.appendChild(child_33685);


var G__33687 = cljs.core.next(seq__33181_33677__$1);
var G__33688 = null;
var G__33689 = (0);
var G__33690 = (0);
seq__33181_33662 = G__33687;
chunk__33183_33663 = G__33688;
count__33184_33664 = G__33689;
i__33185_33665 = G__33690;
continue;
} else {
var G__33691 = cljs.core.next(seq__33181_33677__$1);
var G__33692 = null;
var G__33693 = (0);
var G__33694 = (0);
seq__33181_33662 = G__33691;
chunk__33183_33663 = G__33692;
count__33184_33664 = G__33693;
i__33185_33665 = G__33694;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33660);
}
}


var G__33696 = cljs.core.next(seq__33124_33651__$1);
var G__33697 = null;
var G__33698 = (0);
var G__33699 = (0);
seq__33124_33598 = G__33696;
chunk__33126_33599 = G__33697;
count__33127_33600 = G__33698;
i__33128_33601 = G__33699;
continue;
} else {
var G__33700 = cljs.core.next(seq__33124_33651__$1);
var G__33701 = null;
var G__33702 = (0);
var G__33703 = (0);
seq__33124_33598 = G__33700;
chunk__33126_33599 = G__33701;
count__33127_33600 = G__33702;
i__33128_33601 = G__33703;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33707 = arguments.length;
var i__4790__auto___33708 = (0);
while(true){
if((i__4790__auto___33708 < len__4789__auto___33707)){
args__4795__auto__.push((arguments[i__4790__auto___33708]));

var G__33709 = (i__4790__auto___33708 + (1));
i__4790__auto___33708 = G__33709;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33198){
var G__33199 = cljs.core.first(seq33198);
var seq33198__$1 = cljs.core.next(seq33198);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33199,seq33198__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33204 = arguments.length;
switch (G__33204) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__31159__auto___33716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_33210){
var state_val_33211 = (state_33210[(1)]);
if((state_val_33211 === (1))){
var state_33210__$1 = state_33210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33210__$1,(2),once_or_cleanup);
} else {
if((state_val_33211 === (2))){
var inst_33207 = (state_33210[(2)]);
var inst_33208 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33210__$1 = (function (){var statearr_33213 = state_33210;
(statearr_33213[(7)] = inst_33207);

return statearr_33213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33210__$1,inst_33208);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31124__auto__ = null;
var shadow$dom$state_machine__31124__auto____0 = (function (){
var statearr_33214 = [null,null,null,null,null,null,null,null];
(statearr_33214[(0)] = shadow$dom$state_machine__31124__auto__);

(statearr_33214[(1)] = (1));

return statearr_33214;
});
var shadow$dom$state_machine__31124__auto____1 = (function (state_33210){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_33210);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e33215){var ex__31127__auto__ = e33215;
var statearr_33216_33720 = state_33210;
(statearr_33216_33720[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_33210[(4)]))){
var statearr_33217_33721 = state_33210;
(statearr_33217_33721[(1)] = cljs.core.first((state_33210[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33723 = state_33210;
state_33210 = G__33723;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
shadow$dom$state_machine__31124__auto__ = function(state_33210){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31124__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31124__auto____1.call(this,state_33210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31124__auto____0;
shadow$dom$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31124__auto____1;
return shadow$dom$state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_33218 = f__31160__auto__();
(statearr_33218[(6)] = c__31159__auto___33716);

return statearr_33218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
