goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34809 = arguments.length;
var i__4790__auto___34810 = (0);
while(true){
if((i__4790__auto___34810 < len__4789__auto___34809)){
args__4795__auto__.push((arguments[i__4790__auto___34810]));

var G__34811 = (i__4790__auto___34810 + (1));
i__4790__auto___34810 = G__34811;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34683){
var G__34684 = cljs.core.first(seq34683);
var seq34683__$1 = cljs.core.next(seq34683);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34684,seq34683__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34685 = cljs.core.seq(sources);
var chunk__34686 = null;
var count__34687 = (0);
var i__34688 = (0);
while(true){
if((i__34688 < count__34687)){
var map__34695 = chunk__34686.cljs$core$IIndexed$_nth$arity$2(null,i__34688);
var map__34695__$1 = (((((!((map__34695 == null))))?(((((map__34695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34695):map__34695);
var src = map__34695__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34695__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34695__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34695__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34695__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34697){var e_34812 = e34697;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34812);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34812.message)].join('')));
}

var G__34813 = seq__34685;
var G__34814 = chunk__34686;
var G__34815 = count__34687;
var G__34816 = (i__34688 + (1));
seq__34685 = G__34813;
chunk__34686 = G__34814;
count__34687 = G__34815;
i__34688 = G__34816;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34685);
if(temp__5735__auto__){
var seq__34685__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34685__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34685__$1);
var G__34817 = cljs.core.chunk_rest(seq__34685__$1);
var G__34818 = c__4609__auto__;
var G__34819 = cljs.core.count(c__4609__auto__);
var G__34820 = (0);
seq__34685 = G__34817;
chunk__34686 = G__34818;
count__34687 = G__34819;
i__34688 = G__34820;
continue;
} else {
var map__34698 = cljs.core.first(seq__34685__$1);
var map__34698__$1 = (((((!((map__34698 == null))))?(((((map__34698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34698):map__34698);
var src = map__34698__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34698__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34698__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34698__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34698__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34700){var e_34821 = e34700;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34821);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34821.message)].join('')));
}

var G__34822 = cljs.core.next(seq__34685__$1);
var G__34823 = null;
var G__34824 = (0);
var G__34825 = (0);
seq__34685 = G__34822;
chunk__34686 = G__34823;
count__34687 = G__34824;
i__34688 = G__34825;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__34701 = cljs.core.seq(js_requires);
var chunk__34702 = null;
var count__34703 = (0);
var i__34704 = (0);
while(true){
if((i__34704 < count__34703)){
var js_ns = chunk__34702.cljs$core$IIndexed$_nth$arity$2(null,i__34704);
var require_str_34826 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34826);


var G__34827 = seq__34701;
var G__34828 = chunk__34702;
var G__34829 = count__34703;
var G__34830 = (i__34704 + (1));
seq__34701 = G__34827;
chunk__34702 = G__34828;
count__34703 = G__34829;
i__34704 = G__34830;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34701);
if(temp__5735__auto__){
var seq__34701__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34701__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34701__$1);
var G__34831 = cljs.core.chunk_rest(seq__34701__$1);
var G__34832 = c__4609__auto__;
var G__34833 = cljs.core.count(c__4609__auto__);
var G__34834 = (0);
seq__34701 = G__34831;
chunk__34702 = G__34832;
count__34703 = G__34833;
i__34704 = G__34834;
continue;
} else {
var js_ns = cljs.core.first(seq__34701__$1);
var require_str_34835 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34835);


var G__34836 = cljs.core.next(seq__34701__$1);
var G__34837 = null;
var G__34838 = (0);
var G__34839 = (0);
seq__34701 = G__34836;
chunk__34702 = G__34837;
count__34703 = G__34838;
i__34704 = G__34839;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__34705 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34705) : callback.call(null,G__34705));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34707){
var map__34708 = p__34707;
var map__34708__$1 = (((((!((map__34708 == null))))?(((((map__34708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34708):map__34708);
var msg = map__34708__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34708__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34708__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34710(s__34711){
return (new cljs.core.LazySeq(null,(function (){
var s__34711__$1 = s__34711;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34711__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34716 = cljs.core.first(xs__6292__auto__);
var map__34716__$1 = (((((!((map__34716 == null))))?(((((map__34716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34716):map__34716);
var src = map__34716__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34716__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34716__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34711__$1,map__34716,map__34716__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34708,map__34708__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34710_$_iter__34712(s__34713){
return (new cljs.core.LazySeq(null,((function (s__34711__$1,map__34716,map__34716__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34708,map__34708__$1,msg,info,reload_info){
return (function (){
var s__34713__$1 = s__34713;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34713__$1);
if(temp__5735__auto____$1){
var s__34713__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34713__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34713__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34715 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34714 = (0);
while(true){
if((i__34714 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__34714);
cljs.core.chunk_append(b__34715,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34840 = (i__34714 + (1));
i__34714 = G__34840;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34715),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34710_$_iter__34712(cljs.core.chunk_rest(s__34713__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34715),null);
}
} else {
var warning = cljs.core.first(s__34713__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34710_$_iter__34712(cljs.core.rest(s__34713__$2)));
}
} else {
return null;
}
break;
}
});})(s__34711__$1,map__34716,map__34716__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34708,map__34708__$1,msg,info,reload_info))
,null,null));
});})(s__34711__$1,map__34716,map__34716__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34708,map__34708__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34710(cljs.core.rest(s__34711__$1)));
} else {
var G__34841 = cljs.core.rest(s__34711__$1);
s__34711__$1 = G__34841;
continue;
}
} else {
var G__34842 = cljs.core.rest(s__34711__$1);
s__34711__$1 = G__34842;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__34718_34843 = cljs.core.seq(warnings);
var chunk__34719_34844 = null;
var count__34720_34845 = (0);
var i__34721_34846 = (0);
while(true){
if((i__34721_34846 < count__34720_34845)){
var map__34726_34847 = chunk__34719_34844.cljs$core$IIndexed$_nth$arity$2(null,i__34721_34846);
var map__34726_34848__$1 = (((((!((map__34726_34847 == null))))?(((((map__34726_34847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34726_34847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34726_34847):map__34726_34847);
var w_34849 = map__34726_34848__$1;
var msg_34850__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34726_34848__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34726_34848__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34726_34848__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34726_34848__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34853)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34851),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34852),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34850__$1)].join(''));


var G__34854 = seq__34718_34843;
var G__34855 = chunk__34719_34844;
var G__34856 = count__34720_34845;
var G__34857 = (i__34721_34846 + (1));
seq__34718_34843 = G__34854;
chunk__34719_34844 = G__34855;
count__34720_34845 = G__34856;
i__34721_34846 = G__34857;
continue;
} else {
var temp__5735__auto___34858 = cljs.core.seq(seq__34718_34843);
if(temp__5735__auto___34858){
var seq__34718_34859__$1 = temp__5735__auto___34858;
if(cljs.core.chunked_seq_QMARK_(seq__34718_34859__$1)){
var c__4609__auto___34860 = cljs.core.chunk_first(seq__34718_34859__$1);
var G__34861 = cljs.core.chunk_rest(seq__34718_34859__$1);
var G__34862 = c__4609__auto___34860;
var G__34863 = cljs.core.count(c__4609__auto___34860);
var G__34864 = (0);
seq__34718_34843 = G__34861;
chunk__34719_34844 = G__34862;
count__34720_34845 = G__34863;
i__34721_34846 = G__34864;
continue;
} else {
var map__34728_34865 = cljs.core.first(seq__34718_34859__$1);
var map__34728_34866__$1 = (((((!((map__34728_34865 == null))))?(((((map__34728_34865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34728_34865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34728_34865):map__34728_34865);
var w_34867 = map__34728_34866__$1;
var msg_34868__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728_34866__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728_34866__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728_34866__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728_34866__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34871)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34869),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34870),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34868__$1)].join(''));


var G__34872 = cljs.core.next(seq__34718_34859__$1);
var G__34873 = null;
var G__34874 = (0);
var G__34875 = (0);
seq__34718_34843 = G__34872;
chunk__34719_34844 = G__34873;
count__34720_34845 = G__34874;
i__34721_34846 = G__34875;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34706_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34706_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34730){
var map__34731 = p__34730;
var map__34731__$1 = (((((!((map__34731 == null))))?(((((map__34731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34731):map__34731);
var msg = map__34731__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34731__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34733 = cljs.core.seq(updates);
var chunk__34735 = null;
var count__34736 = (0);
var i__34737 = (0);
while(true){
if((i__34737 < count__34736)){
var path = chunk__34735.cljs$core$IIndexed$_nth$arity$2(null,i__34737);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34763_34876 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34766_34877 = null;
var count__34767_34878 = (0);
var i__34768_34879 = (0);
while(true){
if((i__34768_34879 < count__34767_34878)){
var node_34880 = chunk__34766_34877.cljs$core$IIndexed$_nth$arity$2(null,i__34768_34879);
var path_match_34881 = shadow.cljs.devtools.client.browser.match_paths(node_34880.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34881)){
var new_link_34882 = (function (){var G__34773 = node_34880.cloneNode(true);
G__34773.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34881),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34773;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34881], 0));

goog.dom.insertSiblingAfter(new_link_34882,node_34880);

goog.dom.removeNode(node_34880);


var G__34883 = seq__34763_34876;
var G__34884 = chunk__34766_34877;
var G__34885 = count__34767_34878;
var G__34886 = (i__34768_34879 + (1));
seq__34763_34876 = G__34883;
chunk__34766_34877 = G__34884;
count__34767_34878 = G__34885;
i__34768_34879 = G__34886;
continue;
} else {
var G__34887 = seq__34763_34876;
var G__34888 = chunk__34766_34877;
var G__34889 = count__34767_34878;
var G__34890 = (i__34768_34879 + (1));
seq__34763_34876 = G__34887;
chunk__34766_34877 = G__34888;
count__34767_34878 = G__34889;
i__34768_34879 = G__34890;
continue;
}
} else {
var temp__5735__auto___34891 = cljs.core.seq(seq__34763_34876);
if(temp__5735__auto___34891){
var seq__34763_34892__$1 = temp__5735__auto___34891;
if(cljs.core.chunked_seq_QMARK_(seq__34763_34892__$1)){
var c__4609__auto___34893 = cljs.core.chunk_first(seq__34763_34892__$1);
var G__34894 = cljs.core.chunk_rest(seq__34763_34892__$1);
var G__34895 = c__4609__auto___34893;
var G__34896 = cljs.core.count(c__4609__auto___34893);
var G__34897 = (0);
seq__34763_34876 = G__34894;
chunk__34766_34877 = G__34895;
count__34767_34878 = G__34896;
i__34768_34879 = G__34897;
continue;
} else {
var node_34898 = cljs.core.first(seq__34763_34892__$1);
var path_match_34899 = shadow.cljs.devtools.client.browser.match_paths(node_34898.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34899)){
var new_link_34900 = (function (){var G__34774 = node_34898.cloneNode(true);
G__34774.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34899),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34774;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34899], 0));

goog.dom.insertSiblingAfter(new_link_34900,node_34898);

goog.dom.removeNode(node_34898);


var G__34901 = cljs.core.next(seq__34763_34892__$1);
var G__34902 = null;
var G__34903 = (0);
var G__34904 = (0);
seq__34763_34876 = G__34901;
chunk__34766_34877 = G__34902;
count__34767_34878 = G__34903;
i__34768_34879 = G__34904;
continue;
} else {
var G__34905 = cljs.core.next(seq__34763_34892__$1);
var G__34906 = null;
var G__34907 = (0);
var G__34908 = (0);
seq__34763_34876 = G__34905;
chunk__34766_34877 = G__34906;
count__34767_34878 = G__34907;
i__34768_34879 = G__34908;
continue;
}
}
} else {
}
}
break;
}


var G__34909 = seq__34733;
var G__34910 = chunk__34735;
var G__34911 = count__34736;
var G__34912 = (i__34737 + (1));
seq__34733 = G__34909;
chunk__34735 = G__34910;
count__34736 = G__34911;
i__34737 = G__34912;
continue;
} else {
var G__34913 = seq__34733;
var G__34914 = chunk__34735;
var G__34915 = count__34736;
var G__34916 = (i__34737 + (1));
seq__34733 = G__34913;
chunk__34735 = G__34914;
count__34736 = G__34915;
i__34737 = G__34916;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34733);
if(temp__5735__auto__){
var seq__34733__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34733__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34733__$1);
var G__34917 = cljs.core.chunk_rest(seq__34733__$1);
var G__34918 = c__4609__auto__;
var G__34919 = cljs.core.count(c__4609__auto__);
var G__34920 = (0);
seq__34733 = G__34917;
chunk__34735 = G__34918;
count__34736 = G__34919;
i__34737 = G__34920;
continue;
} else {
var path = cljs.core.first(seq__34733__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34775_34921 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34778_34922 = null;
var count__34779_34923 = (0);
var i__34780_34924 = (0);
while(true){
if((i__34780_34924 < count__34779_34923)){
var node_34925 = chunk__34778_34922.cljs$core$IIndexed$_nth$arity$2(null,i__34780_34924);
var path_match_34926 = shadow.cljs.devtools.client.browser.match_paths(node_34925.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34926)){
var new_link_34927 = (function (){var G__34785 = node_34925.cloneNode(true);
G__34785.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34926),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34785;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34926], 0));

goog.dom.insertSiblingAfter(new_link_34927,node_34925);

goog.dom.removeNode(node_34925);


var G__34928 = seq__34775_34921;
var G__34929 = chunk__34778_34922;
var G__34930 = count__34779_34923;
var G__34931 = (i__34780_34924 + (1));
seq__34775_34921 = G__34928;
chunk__34778_34922 = G__34929;
count__34779_34923 = G__34930;
i__34780_34924 = G__34931;
continue;
} else {
var G__34932 = seq__34775_34921;
var G__34933 = chunk__34778_34922;
var G__34934 = count__34779_34923;
var G__34935 = (i__34780_34924 + (1));
seq__34775_34921 = G__34932;
chunk__34778_34922 = G__34933;
count__34779_34923 = G__34934;
i__34780_34924 = G__34935;
continue;
}
} else {
var temp__5735__auto___34936__$1 = cljs.core.seq(seq__34775_34921);
if(temp__5735__auto___34936__$1){
var seq__34775_34937__$1 = temp__5735__auto___34936__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34775_34937__$1)){
var c__4609__auto___34938 = cljs.core.chunk_first(seq__34775_34937__$1);
var G__34939 = cljs.core.chunk_rest(seq__34775_34937__$1);
var G__34940 = c__4609__auto___34938;
var G__34941 = cljs.core.count(c__4609__auto___34938);
var G__34942 = (0);
seq__34775_34921 = G__34939;
chunk__34778_34922 = G__34940;
count__34779_34923 = G__34941;
i__34780_34924 = G__34942;
continue;
} else {
var node_34943 = cljs.core.first(seq__34775_34937__$1);
var path_match_34944 = shadow.cljs.devtools.client.browser.match_paths(node_34943.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34944)){
var new_link_34945 = (function (){var G__34786 = node_34943.cloneNode(true);
G__34786.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34944),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34786;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34944], 0));

goog.dom.insertSiblingAfter(new_link_34945,node_34943);

goog.dom.removeNode(node_34943);


var G__34946 = cljs.core.next(seq__34775_34937__$1);
var G__34947 = null;
var G__34948 = (0);
var G__34949 = (0);
seq__34775_34921 = G__34946;
chunk__34778_34922 = G__34947;
count__34779_34923 = G__34948;
i__34780_34924 = G__34949;
continue;
} else {
var G__34950 = cljs.core.next(seq__34775_34937__$1);
var G__34951 = null;
var G__34952 = (0);
var G__34953 = (0);
seq__34775_34921 = G__34950;
chunk__34778_34922 = G__34951;
count__34779_34923 = G__34952;
i__34780_34924 = G__34953;
continue;
}
}
} else {
}
}
break;
}


var G__34954 = cljs.core.next(seq__34733__$1);
var G__34955 = null;
var G__34956 = (0);
var G__34957 = (0);
seq__34733 = G__34954;
chunk__34735 = G__34955;
count__34736 = G__34956;
i__34737 = G__34957;
continue;
} else {
var G__34958 = cljs.core.next(seq__34733__$1);
var G__34959 = null;
var G__34960 = (0);
var G__34961 = (0);
seq__34733 = G__34958;
chunk__34735 = G__34959;
count__34736 = G__34960;
i__34737 = G__34961;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34787){
var map__34788 = p__34787;
var map__34788__$1 = (((((!((map__34788 == null))))?(((((map__34788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34788):map__34788);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34788__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34788__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34790,done){
var map__34791 = p__34790;
var map__34791__$1 = (((((!((map__34791 == null))))?(((((map__34791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34791):map__34791);
var msg = map__34791__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34791__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34791__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34791__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34791__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34793){
var map__34794 = p__34793;
var map__34794__$1 = (((((!((map__34794 == null))))?(((((map__34794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34794):map__34794);
var src = map__34794__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34794__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e34796){var e = e34796;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34797,done){
var map__34798 = p__34797;
var map__34798__$1 = (((((!((map__34798 == null))))?(((((map__34798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34798):map__34798);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34798__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34798__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34800){
var map__34801 = p__34800;
var map__34801__$1 = (((((!((map__34801 == null))))?(((((map__34801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34801):map__34801);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34801__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34801__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34803,done){
var map__34804 = p__34803;
var map__34804__$1 = (((((!((map__34804 == null))))?(((((map__34804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34804):map__34804);
var msg = map__34804__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34804__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__34806_34969 = type;
var G__34806_34970__$1 = (((G__34806_34969 instanceof cljs.core.Keyword))?G__34806_34969.fqn:null);
switch (G__34806_34970__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__34807 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__34807.cljs$core$IFn$_invoke$arity$1 ? fexpr__34807.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__34807.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e34808){var e = e34808;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___34980 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___34980)){
var s_34981 = temp__5735__auto___34980;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_34981.onclose = (function (e){
return null;
}));

s_34981.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4174__auto__ = goog.global.document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
