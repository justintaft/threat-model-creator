goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36432){
var map__36433 = p__36432;
var map__36433__$1 = (((((!((map__36433 == null))))?(((((map__36433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36433):map__36433);
var m = map__36433__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36433__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36433__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36436_36650 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36437_36651 = null;
var count__36438_36652 = (0);
var i__36439_36653 = (0);
while(true){
if((i__36439_36653 < count__36438_36652)){
var f_36654 = chunk__36437_36651.cljs$core$IIndexed$_nth$arity$2(null,i__36439_36653);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36654], 0));


var G__36655 = seq__36436_36650;
var G__36656 = chunk__36437_36651;
var G__36657 = count__36438_36652;
var G__36658 = (i__36439_36653 + (1));
seq__36436_36650 = G__36655;
chunk__36437_36651 = G__36656;
count__36438_36652 = G__36657;
i__36439_36653 = G__36658;
continue;
} else {
var temp__5735__auto___36659 = cljs.core.seq(seq__36436_36650);
if(temp__5735__auto___36659){
var seq__36436_36660__$1 = temp__5735__auto___36659;
if(cljs.core.chunked_seq_QMARK_(seq__36436_36660__$1)){
var c__4609__auto___36661 = cljs.core.chunk_first(seq__36436_36660__$1);
var G__36662 = cljs.core.chunk_rest(seq__36436_36660__$1);
var G__36663 = c__4609__auto___36661;
var G__36664 = cljs.core.count(c__4609__auto___36661);
var G__36665 = (0);
seq__36436_36650 = G__36662;
chunk__36437_36651 = G__36663;
count__36438_36652 = G__36664;
i__36439_36653 = G__36665;
continue;
} else {
var f_36666 = cljs.core.first(seq__36436_36660__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36666], 0));


var G__36667 = cljs.core.next(seq__36436_36660__$1);
var G__36668 = null;
var G__36669 = (0);
var G__36670 = (0);
seq__36436_36650 = G__36667;
chunk__36437_36651 = G__36668;
count__36438_36652 = G__36669;
i__36439_36653 = G__36670;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36671 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36671], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36671)))?cljs.core.second(arglists_36671):arglists_36671)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36442_36672 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36443_36673 = null;
var count__36444_36674 = (0);
var i__36445_36675 = (0);
while(true){
if((i__36445_36675 < count__36444_36674)){
var vec__36494_36676 = chunk__36443_36673.cljs$core$IIndexed$_nth$arity$2(null,i__36445_36675);
var name_36677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36494_36676,(0),null);
var map__36497_36678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36494_36676,(1),null);
var map__36497_36679__$1 = (((((!((map__36497_36678 == null))))?(((((map__36497_36678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36497_36678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36497_36678):map__36497_36678);
var doc_36680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36497_36679__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36497_36679__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36677], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36681], 0));

if(cljs.core.truth_(doc_36680)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36680], 0));
} else {
}


var G__36682 = seq__36442_36672;
var G__36683 = chunk__36443_36673;
var G__36684 = count__36444_36674;
var G__36685 = (i__36445_36675 + (1));
seq__36442_36672 = G__36682;
chunk__36443_36673 = G__36683;
count__36444_36674 = G__36684;
i__36445_36675 = G__36685;
continue;
} else {
var temp__5735__auto___36686 = cljs.core.seq(seq__36442_36672);
if(temp__5735__auto___36686){
var seq__36442_36687__$1 = temp__5735__auto___36686;
if(cljs.core.chunked_seq_QMARK_(seq__36442_36687__$1)){
var c__4609__auto___36688 = cljs.core.chunk_first(seq__36442_36687__$1);
var G__36689 = cljs.core.chunk_rest(seq__36442_36687__$1);
var G__36690 = c__4609__auto___36688;
var G__36691 = cljs.core.count(c__4609__auto___36688);
var G__36692 = (0);
seq__36442_36672 = G__36689;
chunk__36443_36673 = G__36690;
count__36444_36674 = G__36691;
i__36445_36675 = G__36692;
continue;
} else {
var vec__36527_36693 = cljs.core.first(seq__36442_36687__$1);
var name_36694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36527_36693,(0),null);
var map__36530_36695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36527_36693,(1),null);
var map__36530_36696__$1 = (((((!((map__36530_36695 == null))))?(((((map__36530_36695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36530_36695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36530_36695):map__36530_36695);
var doc_36697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36530_36696__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36530_36696__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36694], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36698], 0));

if(cljs.core.truth_(doc_36697)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36697], 0));
} else {
}


var G__36700 = cljs.core.next(seq__36442_36687__$1);
var G__36701 = null;
var G__36702 = (0);
var G__36703 = (0);
seq__36442_36672 = G__36700;
chunk__36443_36673 = G__36701;
count__36444_36674 = G__36702;
i__36445_36675 = G__36703;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36557 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36558 = null;
var count__36559 = (0);
var i__36560 = (0);
while(true){
if((i__36560 < count__36559)){
var role = chunk__36558.cljs$core$IIndexed$_nth$arity$2(null,i__36560);
var temp__5735__auto___36704__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36704__$1)){
var spec_36705 = temp__5735__auto___36704__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36705)], 0));
} else {
}


var G__36706 = seq__36557;
var G__36707 = chunk__36558;
var G__36708 = count__36559;
var G__36709 = (i__36560 + (1));
seq__36557 = G__36706;
chunk__36558 = G__36707;
count__36559 = G__36708;
i__36560 = G__36709;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36557);
if(temp__5735__auto____$1){
var seq__36557__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36557__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36557__$1);
var G__36710 = cljs.core.chunk_rest(seq__36557__$1);
var G__36711 = c__4609__auto__;
var G__36712 = cljs.core.count(c__4609__auto__);
var G__36713 = (0);
seq__36557 = G__36710;
chunk__36558 = G__36711;
count__36559 = G__36712;
i__36560 = G__36713;
continue;
} else {
var role = cljs.core.first(seq__36557__$1);
var temp__5735__auto___36714__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36714__$2)){
var spec_36717 = temp__5735__auto___36714__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36717)], 0));
} else {
}


var G__36718 = cljs.core.next(seq__36557__$1);
var G__36719 = null;
var G__36720 = (0);
var G__36721 = (0);
seq__36557 = G__36718;
chunk__36558 = G__36719;
count__36559 = G__36720;
i__36560 = G__36721;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36724 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36725 = cljs.core.ex_cause(t);
via = G__36724;
t = G__36725;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36572 = datafied_throwable;
var map__36572__$1 = (((((!((map__36572 == null))))?(((((map__36572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36572):map__36572);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36572__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36572__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36572__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36573 = cljs.core.last(via);
var map__36573__$1 = (((((!((map__36573 == null))))?(((((map__36573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36573):map__36573);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36573__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36573__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36573__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36574 = data;
var map__36574__$1 = (((((!((map__36574 == null))))?(((((map__36574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36574):map__36574);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36574__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36574__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36574__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36575 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36575__$1 = (((((!((map__36575 == null))))?(((((map__36575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36575):map__36575);
var top_data = map__36575__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36575__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36581 = phase;
var G__36581__$1 = (((G__36581 instanceof cljs.core.Keyword))?G__36581.fqn:null);
switch (G__36581__$1) {
case "read-source":
var map__36582 = data;
var map__36582__$1 = (((((!((map__36582 == null))))?(((((map__36582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36582):map__36582);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36582__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36582__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36584 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36584__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36584,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36584);
var G__36584__$2 = (cljs.core.truth_((function (){var fexpr__36585 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36585.cljs$core$IFn$_invoke$arity$1 ? fexpr__36585.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36585.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36584__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36584__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36584__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36584__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36586 = top_data;
var G__36586__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36586,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36586);
var G__36586__$2 = (cljs.core.truth_((function (){var fexpr__36587 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36587.cljs$core$IFn$_invoke$arity$1 ? fexpr__36587.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36587.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36586__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36586__$1);
var G__36586__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36586__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36586__$2);
var G__36586__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36586__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36586__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36586__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36586__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36590 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36590,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36590,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36590,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36590,(3),null);
var G__36595 = top_data;
var G__36595__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36595,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36595);
var G__36595__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36595__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36595__$1);
var G__36595__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36595__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36595__$2);
var G__36595__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36595__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36595__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36595__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36595__$4;
}

break;
case "execution":
var vec__36600 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36600,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36600,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36600,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36600,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36571_SHARP_){
var or__4185__auto__ = (p1__36571_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__36604 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36604.cljs$core$IFn$_invoke$arity$1 ? fexpr__36604.cljs$core$IFn$_invoke$arity$1(p1__36571_SHARP_) : fexpr__36604.call(null,p1__36571_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__36605 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36605__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36605,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36605);
var G__36605__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36605__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36605__$1);
var G__36605__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36605__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36605__$2);
var G__36605__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36605__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36605__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36605__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36605__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36581__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36608){
var map__36609 = p__36608;
var map__36609__$1 = (((((!((map__36609 == null))))?(((((map__36609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36609):map__36609);
var triage_data = map__36609__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36609__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36609__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36609__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36609__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36609__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36609__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36609__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36609__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36611 = phase;
var G__36611__$1 = (((G__36611 instanceof cljs.core.Keyword))?G__36611.fqn:null);
switch (G__36611__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36612 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36613 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36614 = loc;
var G__36615 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36617_36739 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36618_36740 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36619_36741 = true;
var _STAR_print_fn_STAR__temp_val__36620_36742 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36619_36741);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36620_36742);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36606_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36606_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36618_36740);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36617_36739);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36612,G__36613,G__36614,G__36615) : format.call(null,G__36612,G__36613,G__36614,G__36615));

break;
case "macroexpansion":
var G__36621 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36622 = cause_type;
var G__36623 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36624 = loc;
var G__36625 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36621,G__36622,G__36623,G__36624,G__36625) : format.call(null,G__36621,G__36622,G__36623,G__36624,G__36625));

break;
case "compile-syntax-check":
var G__36626 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36627 = cause_type;
var G__36628 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36629 = loc;
var G__36630 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36626,G__36627,G__36628,G__36629,G__36630) : format.call(null,G__36626,G__36627,G__36628,G__36629,G__36630));

break;
case "compilation":
var G__36631 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36632 = cause_type;
var G__36633 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36634 = loc;
var G__36635 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36631,G__36632,G__36633,G__36634,G__36635) : format.call(null,G__36631,G__36632,G__36633,G__36634,G__36635));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36636 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36637 = symbol;
var G__36638 = loc;
var G__36639 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36640_36743 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36641_36744 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36642_36745 = true;
var _STAR_print_fn_STAR__temp_val__36643_36746 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36642_36745);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36643_36746);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36607_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36607_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36641_36744);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36640_36743);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36636,G__36637,G__36638,G__36639) : format.call(null,G__36636,G__36637,G__36638,G__36639));
} else {
var G__36644 = "Execution error%s at %s(%s).\n%s\n";
var G__36645 = cause_type;
var G__36646 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36647 = loc;
var G__36648 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36644,G__36645,G__36646,G__36647,G__36648) : format.call(null,G__36644,G__36645,G__36646,G__36647,G__36648));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36611__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
