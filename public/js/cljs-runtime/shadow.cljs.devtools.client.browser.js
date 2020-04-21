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
var len__4789__auto___34824 = arguments.length;
var i__4790__auto___34825 = (0);
while(true){
if((i__4790__auto___34825 < len__4789__auto___34824)){
args__4795__auto__.push((arguments[i__4790__auto___34825]));

var G__34826 = (i__4790__auto___34825 + (1));
i__4790__auto___34825 = G__34826;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34698){
var G__34699 = cljs.core.first(seq34698);
var seq34698__$1 = cljs.core.next(seq34698);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34699,seq34698__$1);
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
var seq__34700 = cljs.core.seq(sources);
var chunk__34701 = null;
var count__34702 = (0);
var i__34703 = (0);
while(true){
if((i__34703 < count__34702)){
var map__34710 = chunk__34701.cljs$core$IIndexed$_nth$arity$2(null,i__34703);
var map__34710__$1 = (((((!((map__34710 == null))))?(((((map__34710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34710):map__34710);
var src = map__34710__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34710__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34710__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34710__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34710__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34712){var e_34827 = e34712;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34827);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34827.message)].join('')));
}

var G__34828 = seq__34700;
var G__34829 = chunk__34701;
var G__34830 = count__34702;
var G__34831 = (i__34703 + (1));
seq__34700 = G__34828;
chunk__34701 = G__34829;
count__34702 = G__34830;
i__34703 = G__34831;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34700);
if(temp__5735__auto__){
var seq__34700__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34700__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34700__$1);
var G__34832 = cljs.core.chunk_rest(seq__34700__$1);
var G__34833 = c__4609__auto__;
var G__34834 = cljs.core.count(c__4609__auto__);
var G__34835 = (0);
seq__34700 = G__34832;
chunk__34701 = G__34833;
count__34702 = G__34834;
i__34703 = G__34835;
continue;
} else {
var map__34713 = cljs.core.first(seq__34700__$1);
var map__34713__$1 = (((((!((map__34713 == null))))?(((((map__34713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34713):map__34713);
var src = map__34713__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34713__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34713__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34713__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34713__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34715){var e_34836 = e34715;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34836);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34836.message)].join('')));
}

var G__34837 = cljs.core.next(seq__34700__$1);
var G__34838 = null;
var G__34839 = (0);
var G__34840 = (0);
seq__34700 = G__34837;
chunk__34701 = G__34838;
count__34702 = G__34839;
i__34703 = G__34840;
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
var seq__34716 = cljs.core.seq(js_requires);
var chunk__34717 = null;
var count__34718 = (0);
var i__34719 = (0);
while(true){
if((i__34719 < count__34718)){
var js_ns = chunk__34717.cljs$core$IIndexed$_nth$arity$2(null,i__34719);
var require_str_34841 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34841);


var G__34842 = seq__34716;
var G__34843 = chunk__34717;
var G__34844 = count__34718;
var G__34845 = (i__34719 + (1));
seq__34716 = G__34842;
chunk__34717 = G__34843;
count__34718 = G__34844;
i__34719 = G__34845;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34716);
if(temp__5735__auto__){
var seq__34716__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34716__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34716__$1);
var G__34846 = cljs.core.chunk_rest(seq__34716__$1);
var G__34847 = c__4609__auto__;
var G__34848 = cljs.core.count(c__4609__auto__);
var G__34849 = (0);
seq__34716 = G__34846;
chunk__34717 = G__34847;
count__34718 = G__34848;
i__34719 = G__34849;
continue;
} else {
var js_ns = cljs.core.first(seq__34716__$1);
var require_str_34850 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34850);


var G__34851 = cljs.core.next(seq__34716__$1);
var G__34852 = null;
var G__34853 = (0);
var G__34854 = (0);
seq__34716 = G__34851;
chunk__34717 = G__34852;
count__34718 = G__34853;
i__34719 = G__34854;
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
var G__34720 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34720) : callback.call(null,G__34720));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34722){
var map__34723 = p__34722;
var map__34723__$1 = (((((!((map__34723 == null))))?(((((map__34723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34723):map__34723);
var msg = map__34723__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34723__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34723__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34725(s__34726){
return (new cljs.core.LazySeq(null,(function (){
var s__34726__$1 = s__34726;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34726__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34731 = cljs.core.first(xs__6292__auto__);
var map__34731__$1 = (((((!((map__34731 == null))))?(((((map__34731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34731):map__34731);
var src = map__34731__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34731__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34731__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34726__$1,map__34731,map__34731__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34723,map__34723__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34725_$_iter__34727(s__34728){
return (new cljs.core.LazySeq(null,((function (s__34726__$1,map__34731,map__34731__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34723,map__34723__$1,msg,info,reload_info){
return (function (){
var s__34728__$1 = s__34728;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34728__$1);
if(temp__5735__auto____$1){
var s__34728__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34728__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34728__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34730 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34729 = (0);
while(true){
if((i__34729 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__34729);
cljs.core.chunk_append(b__34730,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34855 = (i__34729 + (1));
i__34729 = G__34855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34730),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34725_$_iter__34727(cljs.core.chunk_rest(s__34728__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34730),null);
}
} else {
var warning = cljs.core.first(s__34728__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34725_$_iter__34727(cljs.core.rest(s__34728__$2)));
}
} else {
return null;
}
break;
}
});})(s__34726__$1,map__34731,map__34731__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34723,map__34723__$1,msg,info,reload_info))
,null,null));
});})(s__34726__$1,map__34731,map__34731__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34723,map__34723__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34725(cljs.core.rest(s__34726__$1)));
} else {
var G__34856 = cljs.core.rest(s__34726__$1);
s__34726__$1 = G__34856;
continue;
}
} else {
var G__34857 = cljs.core.rest(s__34726__$1);
s__34726__$1 = G__34857;
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
var seq__34733_34858 = cljs.core.seq(warnings);
var chunk__34734_34859 = null;
var count__34735_34860 = (0);
var i__34736_34861 = (0);
while(true){
if((i__34736_34861 < count__34735_34860)){
var map__34741_34862 = chunk__34734_34859.cljs$core$IIndexed$_nth$arity$2(null,i__34736_34861);
var map__34741_34863__$1 = (((((!((map__34741_34862 == null))))?(((((map__34741_34862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34741_34862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34741_34862):map__34741_34862);
var w_34864 = map__34741_34863__$1;
var msg_34865__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34741_34863__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34741_34863__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34741_34863__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34741_34863__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34868)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34866),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34867),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34865__$1)].join(''));


var G__34869 = seq__34733_34858;
var G__34870 = chunk__34734_34859;
var G__34871 = count__34735_34860;
var G__34872 = (i__34736_34861 + (1));
seq__34733_34858 = G__34869;
chunk__34734_34859 = G__34870;
count__34735_34860 = G__34871;
i__34736_34861 = G__34872;
continue;
} else {
var temp__5735__auto___34873 = cljs.core.seq(seq__34733_34858);
if(temp__5735__auto___34873){
var seq__34733_34874__$1 = temp__5735__auto___34873;
if(cljs.core.chunked_seq_QMARK_(seq__34733_34874__$1)){
var c__4609__auto___34875 = cljs.core.chunk_first(seq__34733_34874__$1);
var G__34876 = cljs.core.chunk_rest(seq__34733_34874__$1);
var G__34877 = c__4609__auto___34875;
var G__34878 = cljs.core.count(c__4609__auto___34875);
var G__34879 = (0);
seq__34733_34858 = G__34876;
chunk__34734_34859 = G__34877;
count__34735_34860 = G__34878;
i__34736_34861 = G__34879;
continue;
} else {
var map__34743_34880 = cljs.core.first(seq__34733_34874__$1);
var map__34743_34881__$1 = (((((!((map__34743_34880 == null))))?(((((map__34743_34880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34743_34880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34743_34880):map__34743_34880);
var w_34882 = map__34743_34881__$1;
var msg_34883__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34743_34881__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34743_34881__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34743_34881__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34743_34881__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34886)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34884),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34885),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34883__$1)].join(''));


var G__34887 = cljs.core.next(seq__34733_34874__$1);
var G__34888 = null;
var G__34889 = (0);
var G__34890 = (0);
seq__34733_34858 = G__34887;
chunk__34734_34859 = G__34888;
count__34735_34860 = G__34889;
i__34736_34861 = G__34890;
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

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34721_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34721_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34745){
var map__34746 = p__34745;
var map__34746__$1 = (((((!((map__34746 == null))))?(((((map__34746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34746):map__34746);
var msg = map__34746__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34746__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34748 = cljs.core.seq(updates);
var chunk__34750 = null;
var count__34751 = (0);
var i__34752 = (0);
while(true){
if((i__34752 < count__34751)){
var path = chunk__34750.cljs$core$IIndexed$_nth$arity$2(null,i__34752);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34778_34891 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34781_34892 = null;
var count__34782_34893 = (0);
var i__34783_34894 = (0);
while(true){
if((i__34783_34894 < count__34782_34893)){
var node_34895 = chunk__34781_34892.cljs$core$IIndexed$_nth$arity$2(null,i__34783_34894);
var path_match_34896 = shadow.cljs.devtools.client.browser.match_paths(node_34895.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34896)){
var new_link_34897 = (function (){var G__34788 = node_34895.cloneNode(true);
G__34788.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34896),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34788;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34896], 0));

goog.dom.insertSiblingAfter(new_link_34897,node_34895);

goog.dom.removeNode(node_34895);


var G__34898 = seq__34778_34891;
var G__34899 = chunk__34781_34892;
var G__34900 = count__34782_34893;
var G__34901 = (i__34783_34894 + (1));
seq__34778_34891 = G__34898;
chunk__34781_34892 = G__34899;
count__34782_34893 = G__34900;
i__34783_34894 = G__34901;
continue;
} else {
var G__34902 = seq__34778_34891;
var G__34903 = chunk__34781_34892;
var G__34904 = count__34782_34893;
var G__34905 = (i__34783_34894 + (1));
seq__34778_34891 = G__34902;
chunk__34781_34892 = G__34903;
count__34782_34893 = G__34904;
i__34783_34894 = G__34905;
continue;
}
} else {
var temp__5735__auto___34906 = cljs.core.seq(seq__34778_34891);
if(temp__5735__auto___34906){
var seq__34778_34907__$1 = temp__5735__auto___34906;
if(cljs.core.chunked_seq_QMARK_(seq__34778_34907__$1)){
var c__4609__auto___34908 = cljs.core.chunk_first(seq__34778_34907__$1);
var G__34909 = cljs.core.chunk_rest(seq__34778_34907__$1);
var G__34910 = c__4609__auto___34908;
var G__34911 = cljs.core.count(c__4609__auto___34908);
var G__34912 = (0);
seq__34778_34891 = G__34909;
chunk__34781_34892 = G__34910;
count__34782_34893 = G__34911;
i__34783_34894 = G__34912;
continue;
} else {
var node_34913 = cljs.core.first(seq__34778_34907__$1);
var path_match_34914 = shadow.cljs.devtools.client.browser.match_paths(node_34913.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34914)){
var new_link_34915 = (function (){var G__34789 = node_34913.cloneNode(true);
G__34789.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34914),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34789;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34914], 0));

goog.dom.insertSiblingAfter(new_link_34915,node_34913);

goog.dom.removeNode(node_34913);


var G__34916 = cljs.core.next(seq__34778_34907__$1);
var G__34917 = null;
var G__34918 = (0);
var G__34919 = (0);
seq__34778_34891 = G__34916;
chunk__34781_34892 = G__34917;
count__34782_34893 = G__34918;
i__34783_34894 = G__34919;
continue;
} else {
var G__34920 = cljs.core.next(seq__34778_34907__$1);
var G__34921 = null;
var G__34922 = (0);
var G__34923 = (0);
seq__34778_34891 = G__34920;
chunk__34781_34892 = G__34921;
count__34782_34893 = G__34922;
i__34783_34894 = G__34923;
continue;
}
}
} else {
}
}
break;
}


var G__34924 = seq__34748;
var G__34925 = chunk__34750;
var G__34926 = count__34751;
var G__34927 = (i__34752 + (1));
seq__34748 = G__34924;
chunk__34750 = G__34925;
count__34751 = G__34926;
i__34752 = G__34927;
continue;
} else {
var G__34928 = seq__34748;
var G__34929 = chunk__34750;
var G__34930 = count__34751;
var G__34931 = (i__34752 + (1));
seq__34748 = G__34928;
chunk__34750 = G__34929;
count__34751 = G__34930;
i__34752 = G__34931;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34748);
if(temp__5735__auto__){
var seq__34748__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34748__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34748__$1);
var G__34932 = cljs.core.chunk_rest(seq__34748__$1);
var G__34933 = c__4609__auto__;
var G__34934 = cljs.core.count(c__4609__auto__);
var G__34935 = (0);
seq__34748 = G__34932;
chunk__34750 = G__34933;
count__34751 = G__34934;
i__34752 = G__34935;
continue;
} else {
var path = cljs.core.first(seq__34748__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34790_34936 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34793_34937 = null;
var count__34794_34938 = (0);
var i__34795_34939 = (0);
while(true){
if((i__34795_34939 < count__34794_34938)){
var node_34940 = chunk__34793_34937.cljs$core$IIndexed$_nth$arity$2(null,i__34795_34939);
var path_match_34941 = shadow.cljs.devtools.client.browser.match_paths(node_34940.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34941)){
var new_link_34942 = (function (){var G__34800 = node_34940.cloneNode(true);
G__34800.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34941),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34800;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34941], 0));

goog.dom.insertSiblingAfter(new_link_34942,node_34940);

goog.dom.removeNode(node_34940);


var G__34943 = seq__34790_34936;
var G__34944 = chunk__34793_34937;
var G__34945 = count__34794_34938;
var G__34946 = (i__34795_34939 + (1));
seq__34790_34936 = G__34943;
chunk__34793_34937 = G__34944;
count__34794_34938 = G__34945;
i__34795_34939 = G__34946;
continue;
} else {
var G__34947 = seq__34790_34936;
var G__34948 = chunk__34793_34937;
var G__34949 = count__34794_34938;
var G__34950 = (i__34795_34939 + (1));
seq__34790_34936 = G__34947;
chunk__34793_34937 = G__34948;
count__34794_34938 = G__34949;
i__34795_34939 = G__34950;
continue;
}
} else {
var temp__5735__auto___34951__$1 = cljs.core.seq(seq__34790_34936);
if(temp__5735__auto___34951__$1){
var seq__34790_34952__$1 = temp__5735__auto___34951__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34790_34952__$1)){
var c__4609__auto___34953 = cljs.core.chunk_first(seq__34790_34952__$1);
var G__34954 = cljs.core.chunk_rest(seq__34790_34952__$1);
var G__34955 = c__4609__auto___34953;
var G__34956 = cljs.core.count(c__4609__auto___34953);
var G__34957 = (0);
seq__34790_34936 = G__34954;
chunk__34793_34937 = G__34955;
count__34794_34938 = G__34956;
i__34795_34939 = G__34957;
continue;
} else {
var node_34958 = cljs.core.first(seq__34790_34952__$1);
var path_match_34959 = shadow.cljs.devtools.client.browser.match_paths(node_34958.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34959)){
var new_link_34960 = (function (){var G__34801 = node_34958.cloneNode(true);
G__34801.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34959),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34801;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34959], 0));

goog.dom.insertSiblingAfter(new_link_34960,node_34958);

goog.dom.removeNode(node_34958);


var G__34961 = cljs.core.next(seq__34790_34952__$1);
var G__34962 = null;
var G__34963 = (0);
var G__34964 = (0);
seq__34790_34936 = G__34961;
chunk__34793_34937 = G__34962;
count__34794_34938 = G__34963;
i__34795_34939 = G__34964;
continue;
} else {
var G__34965 = cljs.core.next(seq__34790_34952__$1);
var G__34966 = null;
var G__34967 = (0);
var G__34968 = (0);
seq__34790_34936 = G__34965;
chunk__34793_34937 = G__34966;
count__34794_34938 = G__34967;
i__34795_34939 = G__34968;
continue;
}
}
} else {
}
}
break;
}


var G__34969 = cljs.core.next(seq__34748__$1);
var G__34970 = null;
var G__34971 = (0);
var G__34972 = (0);
seq__34748 = G__34969;
chunk__34750 = G__34970;
count__34751 = G__34971;
i__34752 = G__34972;
continue;
} else {
var G__34973 = cljs.core.next(seq__34748__$1);
var G__34974 = null;
var G__34975 = (0);
var G__34976 = (0);
seq__34748 = G__34973;
chunk__34750 = G__34974;
count__34751 = G__34975;
i__34752 = G__34976;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34802){
var map__34803 = p__34802;
var map__34803__$1 = (((((!((map__34803 == null))))?(((((map__34803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34803):map__34803);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34803__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34803__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34805,done){
var map__34806 = p__34805;
var map__34806__$1 = (((((!((map__34806 == null))))?(((((map__34806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34806):map__34806);
var msg = map__34806__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34806__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34806__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34806__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34806__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34808){
var map__34809 = p__34808;
var map__34809__$1 = (((((!((map__34809 == null))))?(((((map__34809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34809):map__34809);
var src = map__34809__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34809__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e34811){var e = e34811;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34812,done){
var map__34813 = p__34812;
var map__34813__$1 = (((((!((map__34813 == null))))?(((((map__34813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34813):map__34813);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34813__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34813__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34815){
var map__34816 = p__34815;
var map__34816__$1 = (((((!((map__34816 == null))))?(((((map__34816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34816):map__34816);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34816__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34816__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34818,done){
var map__34819 = p__34818;
var map__34819__$1 = (((((!((map__34819 == null))))?(((((map__34819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34819):map__34819);
var msg = map__34819__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34819__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__34821_34977 = type;
var G__34821_34978__$1 = (((G__34821_34977 instanceof cljs.core.Keyword))?G__34821_34977.fqn:null);
switch (G__34821_34978__$1) {
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__34822 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__34822.cljs$core$IFn$_invoke$arity$1 ? fexpr__34822.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__34822.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
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
}catch (e34823){var e = e34823;
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
