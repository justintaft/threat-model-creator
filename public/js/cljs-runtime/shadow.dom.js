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
return cljs.core.cons((coll[idx]),(function (){var G__32751 = coll;
var G__32752 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32751,G__32752) : shadow.dom.lazy_native_coll_seq.call(null,G__32751,G__32752));
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
var G__32782 = arguments.length;
switch (G__32782) {
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
var G__32788 = arguments.length;
switch (G__32788) {
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
var G__32792 = arguments.length;
switch (G__32792) {
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
var G__32796 = arguments.length;
switch (G__32796) {
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
var G__32802 = arguments.length;
switch (G__32802) {
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
var G__32813 = arguments.length;
switch (G__32813) {
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
}catch (e32822){if((e32822 instanceof Object)){
var e = e32822;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32822;

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
var seq__32827 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32828 = null;
var count__32829 = (0);
var i__32830 = (0);
while(true){
if((i__32830 < count__32829)){
var el = chunk__32828.cljs$core$IIndexed$_nth$arity$2(null,i__32830);
var handler_33265__$1 = ((function (seq__32827,chunk__32828,count__32829,i__32830,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32827,chunk__32828,count__32829,i__32830,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33265__$1);


var G__33266 = seq__32827;
var G__33267 = chunk__32828;
var G__33268 = count__32829;
var G__33269 = (i__32830 + (1));
seq__32827 = G__33266;
chunk__32828 = G__33267;
count__32829 = G__33268;
i__32830 = G__33269;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32827);
if(temp__5735__auto__){
var seq__32827__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32827__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32827__$1);
var G__33270 = cljs.core.chunk_rest(seq__32827__$1);
var G__33271 = c__4609__auto__;
var G__33272 = cljs.core.count(c__4609__auto__);
var G__33273 = (0);
seq__32827 = G__33270;
chunk__32828 = G__33271;
count__32829 = G__33272;
i__32830 = G__33273;
continue;
} else {
var el = cljs.core.first(seq__32827__$1);
var handler_33274__$1 = ((function (seq__32827,chunk__32828,count__32829,i__32830,el,seq__32827__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32827,chunk__32828,count__32829,i__32830,el,seq__32827__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33274__$1);


var G__33275 = cljs.core.next(seq__32827__$1);
var G__33276 = null;
var G__33277 = (0);
var G__33278 = (0);
seq__32827 = G__33275;
chunk__32828 = G__33276;
count__32829 = G__33277;
i__32830 = G__33278;
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
var G__32835 = arguments.length;
switch (G__32835) {
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
var seq__32844 = cljs.core.seq(events);
var chunk__32845 = null;
var count__32846 = (0);
var i__32847 = (0);
while(true){
if((i__32847 < count__32846)){
var vec__32858 = chunk__32845.cljs$core$IIndexed$_nth$arity$2(null,i__32847);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32858,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32858,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33284 = seq__32844;
var G__33285 = chunk__32845;
var G__33286 = count__32846;
var G__33287 = (i__32847 + (1));
seq__32844 = G__33284;
chunk__32845 = G__33285;
count__32846 = G__33286;
i__32847 = G__33287;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32844);
if(temp__5735__auto__){
var seq__32844__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32844__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32844__$1);
var G__33288 = cljs.core.chunk_rest(seq__32844__$1);
var G__33289 = c__4609__auto__;
var G__33290 = cljs.core.count(c__4609__auto__);
var G__33291 = (0);
seq__32844 = G__33288;
chunk__32845 = G__33289;
count__32846 = G__33290;
i__32847 = G__33291;
continue;
} else {
var vec__32863 = cljs.core.first(seq__32844__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32863,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32863,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33292 = cljs.core.next(seq__32844__$1);
var G__33293 = null;
var G__33294 = (0);
var G__33295 = (0);
seq__32844 = G__33292;
chunk__32845 = G__33293;
count__32846 = G__33294;
i__32847 = G__33295;
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
var seq__32869 = cljs.core.seq(styles);
var chunk__32870 = null;
var count__32871 = (0);
var i__32872 = (0);
while(true){
if((i__32872 < count__32871)){
var vec__32881 = chunk__32870.cljs$core$IIndexed$_nth$arity$2(null,i__32872);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32881,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32881,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33296 = seq__32869;
var G__33297 = chunk__32870;
var G__33298 = count__32871;
var G__33299 = (i__32872 + (1));
seq__32869 = G__33296;
chunk__32870 = G__33297;
count__32871 = G__33298;
i__32872 = G__33299;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32869);
if(temp__5735__auto__){
var seq__32869__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32869__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32869__$1);
var G__33301 = cljs.core.chunk_rest(seq__32869__$1);
var G__33302 = c__4609__auto__;
var G__33303 = cljs.core.count(c__4609__auto__);
var G__33304 = (0);
seq__32869 = G__33301;
chunk__32870 = G__33302;
count__32871 = G__33303;
i__32872 = G__33304;
continue;
} else {
var vec__32887 = cljs.core.first(seq__32869__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32887,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32887,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33306 = cljs.core.next(seq__32869__$1);
var G__33307 = null;
var G__33308 = (0);
var G__33309 = (0);
seq__32869 = G__33306;
chunk__32870 = G__33307;
count__32871 = G__33308;
i__32872 = G__33309;
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
var G__32892_33310 = key;
var G__32892_33311__$1 = (((G__32892_33310 instanceof cljs.core.Keyword))?G__32892_33310.fqn:null);
switch (G__32892_33311__$1) {
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
var ks_33314 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33314,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33314,"aria-");
}
})())){
el.setAttribute(ks_33314,value);
} else {
(el[ks_33314] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32905){
var map__32907 = p__32905;
var map__32907__$1 = (((((!((map__32907 == null))))?(((((map__32907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32907):map__32907);
var props = map__32907__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32907__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32911 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32911,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32911,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32911,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32915 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32915,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32915;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32922 = arguments.length;
switch (G__32922) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32929){
var vec__32930 = p__32929;
var seq__32931 = cljs.core.seq(vec__32930);
var first__32932 = cljs.core.first(seq__32931);
var seq__32931__$1 = cljs.core.next(seq__32931);
var nn = first__32932;
var first__32932__$1 = cljs.core.first(seq__32931__$1);
var seq__32931__$2 = cljs.core.next(seq__32931__$1);
var np = first__32932__$1;
var nc = seq__32931__$2;
var node = vec__32930;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32933 = nn;
var G__32934 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32933,G__32934) : create_fn.call(null,G__32933,G__32934));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32935 = nn;
var G__32936 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32935,G__32936) : create_fn.call(null,G__32935,G__32936));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32937 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32937,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32937,(1),null);
var seq__32940_33320 = cljs.core.seq(node_children);
var chunk__32941_33321 = null;
var count__32942_33322 = (0);
var i__32943_33323 = (0);
while(true){
if((i__32943_33323 < count__32942_33322)){
var child_struct_33324 = chunk__32941_33321.cljs$core$IIndexed$_nth$arity$2(null,i__32943_33323);
var children_33325 = shadow.dom.dom_node(child_struct_33324);
if(cljs.core.seq_QMARK_(children_33325)){
var seq__32964_33326 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33325));
var chunk__32966_33327 = null;
var count__32967_33328 = (0);
var i__32968_33329 = (0);
while(true){
if((i__32968_33329 < count__32967_33328)){
var child_33331 = chunk__32966_33327.cljs$core$IIndexed$_nth$arity$2(null,i__32968_33329);
if(cljs.core.truth_(child_33331)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33331);


var G__33332 = seq__32964_33326;
var G__33333 = chunk__32966_33327;
var G__33334 = count__32967_33328;
var G__33335 = (i__32968_33329 + (1));
seq__32964_33326 = G__33332;
chunk__32966_33327 = G__33333;
count__32967_33328 = G__33334;
i__32968_33329 = G__33335;
continue;
} else {
var G__33336 = seq__32964_33326;
var G__33337 = chunk__32966_33327;
var G__33338 = count__32967_33328;
var G__33339 = (i__32968_33329 + (1));
seq__32964_33326 = G__33336;
chunk__32966_33327 = G__33337;
count__32967_33328 = G__33338;
i__32968_33329 = G__33339;
continue;
}
} else {
var temp__5735__auto___33340 = cljs.core.seq(seq__32964_33326);
if(temp__5735__auto___33340){
var seq__32964_33341__$1 = temp__5735__auto___33340;
if(cljs.core.chunked_seq_QMARK_(seq__32964_33341__$1)){
var c__4609__auto___33342 = cljs.core.chunk_first(seq__32964_33341__$1);
var G__33344 = cljs.core.chunk_rest(seq__32964_33341__$1);
var G__33345 = c__4609__auto___33342;
var G__33346 = cljs.core.count(c__4609__auto___33342);
var G__33347 = (0);
seq__32964_33326 = G__33344;
chunk__32966_33327 = G__33345;
count__32967_33328 = G__33346;
i__32968_33329 = G__33347;
continue;
} else {
var child_33348 = cljs.core.first(seq__32964_33341__$1);
if(cljs.core.truth_(child_33348)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33348);


var G__33349 = cljs.core.next(seq__32964_33341__$1);
var G__33350 = null;
var G__33351 = (0);
var G__33352 = (0);
seq__32964_33326 = G__33349;
chunk__32966_33327 = G__33350;
count__32967_33328 = G__33351;
i__32968_33329 = G__33352;
continue;
} else {
var G__33353 = cljs.core.next(seq__32964_33341__$1);
var G__33354 = null;
var G__33355 = (0);
var G__33356 = (0);
seq__32964_33326 = G__33353;
chunk__32966_33327 = G__33354;
count__32967_33328 = G__33355;
i__32968_33329 = G__33356;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33325);
}


var G__33357 = seq__32940_33320;
var G__33358 = chunk__32941_33321;
var G__33359 = count__32942_33322;
var G__33360 = (i__32943_33323 + (1));
seq__32940_33320 = G__33357;
chunk__32941_33321 = G__33358;
count__32942_33322 = G__33359;
i__32943_33323 = G__33360;
continue;
} else {
var temp__5735__auto___33361 = cljs.core.seq(seq__32940_33320);
if(temp__5735__auto___33361){
var seq__32940_33362__$1 = temp__5735__auto___33361;
if(cljs.core.chunked_seq_QMARK_(seq__32940_33362__$1)){
var c__4609__auto___33364 = cljs.core.chunk_first(seq__32940_33362__$1);
var G__33365 = cljs.core.chunk_rest(seq__32940_33362__$1);
var G__33366 = c__4609__auto___33364;
var G__33367 = cljs.core.count(c__4609__auto___33364);
var G__33368 = (0);
seq__32940_33320 = G__33365;
chunk__32941_33321 = G__33366;
count__32942_33322 = G__33367;
i__32943_33323 = G__33368;
continue;
} else {
var child_struct_33370 = cljs.core.first(seq__32940_33362__$1);
var children_33371 = shadow.dom.dom_node(child_struct_33370);
if(cljs.core.seq_QMARK_(children_33371)){
var seq__32975_33372 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33371));
var chunk__32977_33373 = null;
var count__32978_33374 = (0);
var i__32979_33375 = (0);
while(true){
if((i__32979_33375 < count__32978_33374)){
var child_33376 = chunk__32977_33373.cljs$core$IIndexed$_nth$arity$2(null,i__32979_33375);
if(cljs.core.truth_(child_33376)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33376);


var G__33377 = seq__32975_33372;
var G__33378 = chunk__32977_33373;
var G__33379 = count__32978_33374;
var G__33380 = (i__32979_33375 + (1));
seq__32975_33372 = G__33377;
chunk__32977_33373 = G__33378;
count__32978_33374 = G__33379;
i__32979_33375 = G__33380;
continue;
} else {
var G__33381 = seq__32975_33372;
var G__33382 = chunk__32977_33373;
var G__33383 = count__32978_33374;
var G__33384 = (i__32979_33375 + (1));
seq__32975_33372 = G__33381;
chunk__32977_33373 = G__33382;
count__32978_33374 = G__33383;
i__32979_33375 = G__33384;
continue;
}
} else {
var temp__5735__auto___33385__$1 = cljs.core.seq(seq__32975_33372);
if(temp__5735__auto___33385__$1){
var seq__32975_33386__$1 = temp__5735__auto___33385__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32975_33386__$1)){
var c__4609__auto___33387 = cljs.core.chunk_first(seq__32975_33386__$1);
var G__33388 = cljs.core.chunk_rest(seq__32975_33386__$1);
var G__33389 = c__4609__auto___33387;
var G__33390 = cljs.core.count(c__4609__auto___33387);
var G__33391 = (0);
seq__32975_33372 = G__33388;
chunk__32977_33373 = G__33389;
count__32978_33374 = G__33390;
i__32979_33375 = G__33391;
continue;
} else {
var child_33392 = cljs.core.first(seq__32975_33386__$1);
if(cljs.core.truth_(child_33392)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33392);


var G__33393 = cljs.core.next(seq__32975_33386__$1);
var G__33394 = null;
var G__33395 = (0);
var G__33396 = (0);
seq__32975_33372 = G__33393;
chunk__32977_33373 = G__33394;
count__32978_33374 = G__33395;
i__32979_33375 = G__33396;
continue;
} else {
var G__33397 = cljs.core.next(seq__32975_33386__$1);
var G__33398 = null;
var G__33399 = (0);
var G__33400 = (0);
seq__32975_33372 = G__33397;
chunk__32977_33373 = G__33398;
count__32978_33374 = G__33399;
i__32979_33375 = G__33400;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33371);
}


var G__33401 = cljs.core.next(seq__32940_33362__$1);
var G__33402 = null;
var G__33403 = (0);
var G__33404 = (0);
seq__32940_33320 = G__33401;
chunk__32941_33321 = G__33402;
count__32942_33322 = G__33403;
i__32943_33323 = G__33404;
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
var seq__32993 = cljs.core.seq(node);
var chunk__32994 = null;
var count__32995 = (0);
var i__32996 = (0);
while(true){
if((i__32996 < count__32995)){
var n = chunk__32994.cljs$core$IIndexed$_nth$arity$2(null,i__32996);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33409 = seq__32993;
var G__33410 = chunk__32994;
var G__33411 = count__32995;
var G__33412 = (i__32996 + (1));
seq__32993 = G__33409;
chunk__32994 = G__33410;
count__32995 = G__33411;
i__32996 = G__33412;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32993);
if(temp__5735__auto__){
var seq__32993__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32993__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32993__$1);
var G__33413 = cljs.core.chunk_rest(seq__32993__$1);
var G__33414 = c__4609__auto__;
var G__33415 = cljs.core.count(c__4609__auto__);
var G__33416 = (0);
seq__32993 = G__33413;
chunk__32994 = G__33414;
count__32995 = G__33415;
i__32996 = G__33416;
continue;
} else {
var n = cljs.core.first(seq__32993__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33417 = cljs.core.next(seq__32993__$1);
var G__33418 = null;
var G__33419 = (0);
var G__33420 = (0);
seq__32993 = G__33417;
chunk__32994 = G__33418;
count__32995 = G__33419;
i__32996 = G__33420;
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
var G__32999 = arguments.length;
switch (G__32999) {
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
var G__33001 = arguments.length;
switch (G__33001) {
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
var G__33007 = arguments.length;
switch (G__33007) {
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
var len__4789__auto___33428 = arguments.length;
var i__4790__auto___33429 = (0);
while(true){
if((i__4790__auto___33429 < len__4789__auto___33428)){
args__4795__auto__.push((arguments[i__4790__auto___33429]));

var G__33430 = (i__4790__auto___33429 + (1));
i__4790__auto___33429 = G__33430;
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
var seq__33014_33431 = cljs.core.seq(nodes);
var chunk__33015_33432 = null;
var count__33016_33433 = (0);
var i__33017_33434 = (0);
while(true){
if((i__33017_33434 < count__33016_33433)){
var node_33435 = chunk__33015_33432.cljs$core$IIndexed$_nth$arity$2(null,i__33017_33434);
fragment.appendChild(shadow.dom._to_dom(node_33435));


var G__33436 = seq__33014_33431;
var G__33437 = chunk__33015_33432;
var G__33438 = count__33016_33433;
var G__33439 = (i__33017_33434 + (1));
seq__33014_33431 = G__33436;
chunk__33015_33432 = G__33437;
count__33016_33433 = G__33438;
i__33017_33434 = G__33439;
continue;
} else {
var temp__5735__auto___33440 = cljs.core.seq(seq__33014_33431);
if(temp__5735__auto___33440){
var seq__33014_33441__$1 = temp__5735__auto___33440;
if(cljs.core.chunked_seq_QMARK_(seq__33014_33441__$1)){
var c__4609__auto___33442 = cljs.core.chunk_first(seq__33014_33441__$1);
var G__33443 = cljs.core.chunk_rest(seq__33014_33441__$1);
var G__33444 = c__4609__auto___33442;
var G__33445 = cljs.core.count(c__4609__auto___33442);
var G__33446 = (0);
seq__33014_33431 = G__33443;
chunk__33015_33432 = G__33444;
count__33016_33433 = G__33445;
i__33017_33434 = G__33446;
continue;
} else {
var node_33447 = cljs.core.first(seq__33014_33441__$1);
fragment.appendChild(shadow.dom._to_dom(node_33447));


var G__33448 = cljs.core.next(seq__33014_33441__$1);
var G__33449 = null;
var G__33450 = (0);
var G__33451 = (0);
seq__33014_33431 = G__33448;
chunk__33015_33432 = G__33449;
count__33016_33433 = G__33450;
i__33017_33434 = G__33451;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33012){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33012));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33019_33453 = cljs.core.seq(scripts);
var chunk__33020_33454 = null;
var count__33021_33455 = (0);
var i__33022_33456 = (0);
while(true){
if((i__33022_33456 < count__33021_33455)){
var vec__33033_33457 = chunk__33020_33454.cljs$core$IIndexed$_nth$arity$2(null,i__33022_33456);
var script_tag_33458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33033_33457,(0),null);
var script_body_33459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33033_33457,(1),null);
eval(script_body_33459);


var G__33460 = seq__33019_33453;
var G__33461 = chunk__33020_33454;
var G__33462 = count__33021_33455;
var G__33463 = (i__33022_33456 + (1));
seq__33019_33453 = G__33460;
chunk__33020_33454 = G__33461;
count__33021_33455 = G__33462;
i__33022_33456 = G__33463;
continue;
} else {
var temp__5735__auto___33464 = cljs.core.seq(seq__33019_33453);
if(temp__5735__auto___33464){
var seq__33019_33465__$1 = temp__5735__auto___33464;
if(cljs.core.chunked_seq_QMARK_(seq__33019_33465__$1)){
var c__4609__auto___33466 = cljs.core.chunk_first(seq__33019_33465__$1);
var G__33467 = cljs.core.chunk_rest(seq__33019_33465__$1);
var G__33468 = c__4609__auto___33466;
var G__33469 = cljs.core.count(c__4609__auto___33466);
var G__33470 = (0);
seq__33019_33453 = G__33467;
chunk__33020_33454 = G__33468;
count__33021_33455 = G__33469;
i__33022_33456 = G__33470;
continue;
} else {
var vec__33039_33471 = cljs.core.first(seq__33019_33465__$1);
var script_tag_33472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33039_33471,(0),null);
var script_body_33473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33039_33471,(1),null);
eval(script_body_33473);


var G__33475 = cljs.core.next(seq__33019_33465__$1);
var G__33476 = null;
var G__33477 = (0);
var G__33478 = (0);
seq__33019_33453 = G__33475;
chunk__33020_33454 = G__33476;
count__33021_33455 = G__33477;
i__33022_33456 = G__33478;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33044){
var vec__33045 = p__33044;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33045,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33045,(1),null);
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
var G__33055 = arguments.length;
switch (G__33055) {
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
var seq__33065 = cljs.core.seq(style_keys);
var chunk__33066 = null;
var count__33067 = (0);
var i__33068 = (0);
while(true){
if((i__33068 < count__33067)){
var it = chunk__33066.cljs$core$IIndexed$_nth$arity$2(null,i__33068);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33483 = seq__33065;
var G__33484 = chunk__33066;
var G__33485 = count__33067;
var G__33486 = (i__33068 + (1));
seq__33065 = G__33483;
chunk__33066 = G__33484;
count__33067 = G__33485;
i__33068 = G__33486;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33065);
if(temp__5735__auto__){
var seq__33065__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33065__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33065__$1);
var G__33487 = cljs.core.chunk_rest(seq__33065__$1);
var G__33488 = c__4609__auto__;
var G__33489 = cljs.core.count(c__4609__auto__);
var G__33490 = (0);
seq__33065 = G__33487;
chunk__33066 = G__33488;
count__33067 = G__33489;
i__33068 = G__33490;
continue;
} else {
var it = cljs.core.first(seq__33065__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33491 = cljs.core.next(seq__33065__$1);
var G__33492 = null;
var G__33493 = (0);
var G__33494 = (0);
seq__33065 = G__33491;
chunk__33066 = G__33492;
count__33067 = G__33493;
i__33068 = G__33494;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33070,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33074 = k33070;
var G__33074__$1 = (((G__33074 instanceof cljs.core.Keyword))?G__33074.fqn:null);
switch (G__33074__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33070,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33075){
var vec__33076 = p__33075;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33076,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33076,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33069){
var self__ = this;
var G__33069__$1 = this;
return (new cljs.core.RecordIter((0),G__33069__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33071,other33072){
var self__ = this;
var this33071__$1 = this;
return (((!((other33072 == null)))) && ((this33071__$1.constructor === other33072.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33071__$1.x,other33072.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33071__$1.y,other33072.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33071__$1.__extmap,other33072.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33069){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33085 = cljs.core.keyword_identical_QMARK_;
var expr__33086 = k__4447__auto__;
if(cljs.core.truth_((pred__33085.cljs$core$IFn$_invoke$arity$2 ? pred__33085.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33086) : pred__33085.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33086)))){
return (new shadow.dom.Coordinate(G__33069,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33085.cljs$core$IFn$_invoke$arity$2 ? pred__33085.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33086) : pred__33085.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33086)))){
return (new shadow.dom.Coordinate(self__.x,G__33069,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33069),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33069){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33069,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33073){
var extmap__4478__auto__ = (function (){var G__33088 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33073,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33073)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33088);
} else {
return G__33088;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33073),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33073),null,cljs.core.not_empty(extmap__4478__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33090,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33094 = k33090;
var G__33094__$1 = (((G__33094 instanceof cljs.core.Keyword))?G__33094.fqn:null);
switch (G__33094__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33090,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33095){
var vec__33097 = p__33095;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33089){
var self__ = this;
var G__33089__$1 = this;
return (new cljs.core.RecordIter((0),G__33089__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33091,other33092){
var self__ = this;
var this33091__$1 = this;
return (((!((other33092 == null)))) && ((this33091__$1.constructor === other33092.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33091__$1.w,other33092.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33091__$1.h,other33092.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33091__$1.__extmap,other33092.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33089){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33113 = cljs.core.keyword_identical_QMARK_;
var expr__33114 = k__4447__auto__;
if(cljs.core.truth_((pred__33113.cljs$core$IFn$_invoke$arity$2 ? pred__33113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33114) : pred__33113.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33114)))){
return (new shadow.dom.Size(G__33089,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33113.cljs$core$IFn$_invoke$arity$2 ? pred__33113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33114) : pred__33113.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33114)))){
return (new shadow.dom.Size(self__.w,G__33089,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33089),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33089){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33089,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33093){
var extmap__4478__auto__ = (function (){var G__33124 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33093,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33093)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33124);
} else {
return G__33124;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33093),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33093),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
var G__33521 = (i + (1));
var G__33522 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33521;
ret = G__33522;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33144){
var vec__33146 = p__33144;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33146,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33146,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33153 = arguments.length;
switch (G__33153) {
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
var G__33530 = ps;
var G__33531 = (i + (1));
el__$1 = G__33530;
i = G__33531;
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
var vec__33163 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33163,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33163,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33163,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33167_33535 = cljs.core.seq(props);
var chunk__33168_33536 = null;
var count__33169_33537 = (0);
var i__33170_33538 = (0);
while(true){
if((i__33170_33538 < count__33169_33537)){
var vec__33178_33539 = chunk__33168_33536.cljs$core$IIndexed$_nth$arity$2(null,i__33170_33538);
var k_33540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33178_33539,(0),null);
var v_33541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33178_33539,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33540);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33540),v_33541);


var G__33542 = seq__33167_33535;
var G__33543 = chunk__33168_33536;
var G__33544 = count__33169_33537;
var G__33545 = (i__33170_33538 + (1));
seq__33167_33535 = G__33542;
chunk__33168_33536 = G__33543;
count__33169_33537 = G__33544;
i__33170_33538 = G__33545;
continue;
} else {
var temp__5735__auto___33546 = cljs.core.seq(seq__33167_33535);
if(temp__5735__auto___33546){
var seq__33167_33547__$1 = temp__5735__auto___33546;
if(cljs.core.chunked_seq_QMARK_(seq__33167_33547__$1)){
var c__4609__auto___33548 = cljs.core.chunk_first(seq__33167_33547__$1);
var G__33549 = cljs.core.chunk_rest(seq__33167_33547__$1);
var G__33550 = c__4609__auto___33548;
var G__33551 = cljs.core.count(c__4609__auto___33548);
var G__33552 = (0);
seq__33167_33535 = G__33549;
chunk__33168_33536 = G__33550;
count__33169_33537 = G__33551;
i__33170_33538 = G__33552;
continue;
} else {
var vec__33181_33553 = cljs.core.first(seq__33167_33547__$1);
var k_33554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33181_33553,(0),null);
var v_33555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33181_33553,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33554);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33554),v_33555);


var G__33556 = cljs.core.next(seq__33167_33547__$1);
var G__33557 = null;
var G__33558 = (0);
var G__33559 = (0);
seq__33167_33535 = G__33556;
chunk__33168_33536 = G__33557;
count__33169_33537 = G__33558;
i__33170_33538 = G__33559;
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
var vec__33185 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33185,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33185,(1),null);
var seq__33188_33560 = cljs.core.seq(node_children);
var chunk__33190_33561 = null;
var count__33191_33562 = (0);
var i__33192_33563 = (0);
while(true){
if((i__33192_33563 < count__33191_33562)){
var child_struct_33564 = chunk__33190_33561.cljs$core$IIndexed$_nth$arity$2(null,i__33192_33563);
if((!((child_struct_33564 == null)))){
if(typeof child_struct_33564 === 'string'){
var text_33565 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33565),child_struct_33564].join(''));
} else {
var children_33566 = shadow.dom.svg_node(child_struct_33564);
if(cljs.core.seq_QMARK_(children_33566)){
var seq__33211_33567 = cljs.core.seq(children_33566);
var chunk__33213_33568 = null;
var count__33214_33569 = (0);
var i__33215_33570 = (0);
while(true){
if((i__33215_33570 < count__33214_33569)){
var child_33571 = chunk__33213_33568.cljs$core$IIndexed$_nth$arity$2(null,i__33215_33570);
if(cljs.core.truth_(child_33571)){
node.appendChild(child_33571);


var G__33572 = seq__33211_33567;
var G__33573 = chunk__33213_33568;
var G__33574 = count__33214_33569;
var G__33575 = (i__33215_33570 + (1));
seq__33211_33567 = G__33572;
chunk__33213_33568 = G__33573;
count__33214_33569 = G__33574;
i__33215_33570 = G__33575;
continue;
} else {
var G__33576 = seq__33211_33567;
var G__33577 = chunk__33213_33568;
var G__33578 = count__33214_33569;
var G__33579 = (i__33215_33570 + (1));
seq__33211_33567 = G__33576;
chunk__33213_33568 = G__33577;
count__33214_33569 = G__33578;
i__33215_33570 = G__33579;
continue;
}
} else {
var temp__5735__auto___33580 = cljs.core.seq(seq__33211_33567);
if(temp__5735__auto___33580){
var seq__33211_33581__$1 = temp__5735__auto___33580;
if(cljs.core.chunked_seq_QMARK_(seq__33211_33581__$1)){
var c__4609__auto___33582 = cljs.core.chunk_first(seq__33211_33581__$1);
var G__33583 = cljs.core.chunk_rest(seq__33211_33581__$1);
var G__33584 = c__4609__auto___33582;
var G__33585 = cljs.core.count(c__4609__auto___33582);
var G__33586 = (0);
seq__33211_33567 = G__33583;
chunk__33213_33568 = G__33584;
count__33214_33569 = G__33585;
i__33215_33570 = G__33586;
continue;
} else {
var child_33587 = cljs.core.first(seq__33211_33581__$1);
if(cljs.core.truth_(child_33587)){
node.appendChild(child_33587);


var G__33588 = cljs.core.next(seq__33211_33581__$1);
var G__33589 = null;
var G__33590 = (0);
var G__33591 = (0);
seq__33211_33567 = G__33588;
chunk__33213_33568 = G__33589;
count__33214_33569 = G__33590;
i__33215_33570 = G__33591;
continue;
} else {
var G__33592 = cljs.core.next(seq__33211_33581__$1);
var G__33593 = null;
var G__33594 = (0);
var G__33595 = (0);
seq__33211_33567 = G__33592;
chunk__33213_33568 = G__33593;
count__33214_33569 = G__33594;
i__33215_33570 = G__33595;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33566);
}
}


var G__33596 = seq__33188_33560;
var G__33597 = chunk__33190_33561;
var G__33598 = count__33191_33562;
var G__33599 = (i__33192_33563 + (1));
seq__33188_33560 = G__33596;
chunk__33190_33561 = G__33597;
count__33191_33562 = G__33598;
i__33192_33563 = G__33599;
continue;
} else {
var G__33600 = seq__33188_33560;
var G__33601 = chunk__33190_33561;
var G__33602 = count__33191_33562;
var G__33603 = (i__33192_33563 + (1));
seq__33188_33560 = G__33600;
chunk__33190_33561 = G__33601;
count__33191_33562 = G__33602;
i__33192_33563 = G__33603;
continue;
}
} else {
var temp__5735__auto___33604 = cljs.core.seq(seq__33188_33560);
if(temp__5735__auto___33604){
var seq__33188_33605__$1 = temp__5735__auto___33604;
if(cljs.core.chunked_seq_QMARK_(seq__33188_33605__$1)){
var c__4609__auto___33606 = cljs.core.chunk_first(seq__33188_33605__$1);
var G__33607 = cljs.core.chunk_rest(seq__33188_33605__$1);
var G__33608 = c__4609__auto___33606;
var G__33609 = cljs.core.count(c__4609__auto___33606);
var G__33610 = (0);
seq__33188_33560 = G__33607;
chunk__33190_33561 = G__33608;
count__33191_33562 = G__33609;
i__33192_33563 = G__33610;
continue;
} else {
var child_struct_33611 = cljs.core.first(seq__33188_33605__$1);
if((!((child_struct_33611 == null)))){
if(typeof child_struct_33611 === 'string'){
var text_33612 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33612),child_struct_33611].join(''));
} else {
var children_33613 = shadow.dom.svg_node(child_struct_33611);
if(cljs.core.seq_QMARK_(children_33613)){
var seq__33219_33614 = cljs.core.seq(children_33613);
var chunk__33221_33615 = null;
var count__33222_33616 = (0);
var i__33223_33617 = (0);
while(true){
if((i__33223_33617 < count__33222_33616)){
var child_33618 = chunk__33221_33615.cljs$core$IIndexed$_nth$arity$2(null,i__33223_33617);
if(cljs.core.truth_(child_33618)){
node.appendChild(child_33618);


var G__33619 = seq__33219_33614;
var G__33620 = chunk__33221_33615;
var G__33621 = count__33222_33616;
var G__33622 = (i__33223_33617 + (1));
seq__33219_33614 = G__33619;
chunk__33221_33615 = G__33620;
count__33222_33616 = G__33621;
i__33223_33617 = G__33622;
continue;
} else {
var G__33623 = seq__33219_33614;
var G__33624 = chunk__33221_33615;
var G__33625 = count__33222_33616;
var G__33626 = (i__33223_33617 + (1));
seq__33219_33614 = G__33623;
chunk__33221_33615 = G__33624;
count__33222_33616 = G__33625;
i__33223_33617 = G__33626;
continue;
}
} else {
var temp__5735__auto___33627__$1 = cljs.core.seq(seq__33219_33614);
if(temp__5735__auto___33627__$1){
var seq__33219_33628__$1 = temp__5735__auto___33627__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33219_33628__$1)){
var c__4609__auto___33629 = cljs.core.chunk_first(seq__33219_33628__$1);
var G__33630 = cljs.core.chunk_rest(seq__33219_33628__$1);
var G__33631 = c__4609__auto___33629;
var G__33632 = cljs.core.count(c__4609__auto___33629);
var G__33633 = (0);
seq__33219_33614 = G__33630;
chunk__33221_33615 = G__33631;
count__33222_33616 = G__33632;
i__33223_33617 = G__33633;
continue;
} else {
var child_33634 = cljs.core.first(seq__33219_33628__$1);
if(cljs.core.truth_(child_33634)){
node.appendChild(child_33634);


var G__33635 = cljs.core.next(seq__33219_33628__$1);
var G__33636 = null;
var G__33637 = (0);
var G__33638 = (0);
seq__33219_33614 = G__33635;
chunk__33221_33615 = G__33636;
count__33222_33616 = G__33637;
i__33223_33617 = G__33638;
continue;
} else {
var G__33639 = cljs.core.next(seq__33219_33628__$1);
var G__33640 = null;
var G__33641 = (0);
var G__33642 = (0);
seq__33219_33614 = G__33639;
chunk__33221_33615 = G__33640;
count__33222_33616 = G__33641;
i__33223_33617 = G__33642;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33613);
}
}


var G__33643 = cljs.core.next(seq__33188_33605__$1);
var G__33644 = null;
var G__33645 = (0);
var G__33646 = (0);
seq__33188_33560 = G__33643;
chunk__33190_33561 = G__33644;
count__33191_33562 = G__33645;
i__33192_33563 = G__33646;
continue;
} else {
var G__33647 = cljs.core.next(seq__33188_33605__$1);
var G__33648 = null;
var G__33649 = (0);
var G__33650 = (0);
seq__33188_33560 = G__33647;
chunk__33190_33561 = G__33648;
count__33191_33562 = G__33649;
i__33192_33563 = G__33650;
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
var len__4789__auto___33651 = arguments.length;
var i__4790__auto___33652 = (0);
while(true){
if((i__4790__auto___33652 < len__4789__auto___33651)){
args__4795__auto__.push((arguments[i__4790__auto___33652]));

var G__33653 = (i__4790__auto___33652 + (1));
i__4790__auto___33652 = G__33653;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33227){
var G__33228 = cljs.core.first(seq33227);
var seq33227__$1 = cljs.core.next(seq33227);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33228,seq33227__$1);
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
var G__33234 = arguments.length;
switch (G__33234) {
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
var c__31174__auto___33656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_33242){
var state_val_33243 = (state_33242[(1)]);
if((state_val_33243 === (1))){
var state_33242__$1 = state_33242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33242__$1,(2),once_or_cleanup);
} else {
if((state_val_33243 === (2))){
var inst_33239 = (state_33242[(2)]);
var inst_33240 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33242__$1 = (function (){var statearr_33244 = state_33242;
(statearr_33244[(7)] = inst_33239);

return statearr_33244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33242__$1,inst_33240);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31139__auto__ = null;
var shadow$dom$state_machine__31139__auto____0 = (function (){
var statearr_33245 = [null,null,null,null,null,null,null,null];
(statearr_33245[(0)] = shadow$dom$state_machine__31139__auto__);

(statearr_33245[(1)] = (1));

return statearr_33245;
});
var shadow$dom$state_machine__31139__auto____1 = (function (state_33242){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_33242);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e33246){var ex__31142__auto__ = e33246;
var statearr_33247_33662 = state_33242;
(statearr_33247_33662[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_33242[(4)]))){
var statearr_33248_33663 = state_33242;
(statearr_33248_33663[(1)] = cljs.core.first((state_33242[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33665 = state_33242;
state_33242 = G__33665;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
shadow$dom$state_machine__31139__auto__ = function(state_33242){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31139__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31139__auto____1.call(this,state_33242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31139__auto____0;
shadow$dom$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31139__auto____1;
return shadow$dom$state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_33250 = f__31175__auto__();
(statearr_33250[(6)] = c__31174__auto___33656);

return statearr_33250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
