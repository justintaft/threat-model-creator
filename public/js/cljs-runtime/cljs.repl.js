goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36397){
var map__36398 = p__36397;
var map__36398__$1 = (((((!((map__36398 == null))))?(((((map__36398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36398):map__36398);
var m = map__36398__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36398__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36398__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36400_36615 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36401_36616 = null;
var count__36402_36617 = (0);
var i__36403_36618 = (0);
while(true){
if((i__36403_36618 < count__36402_36617)){
var f_36619 = chunk__36401_36616.cljs$core$IIndexed$_nth$arity$2(null,i__36403_36618);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36619], 0));


var G__36620 = seq__36400_36615;
var G__36621 = chunk__36401_36616;
var G__36622 = count__36402_36617;
var G__36623 = (i__36403_36618 + (1));
seq__36400_36615 = G__36620;
chunk__36401_36616 = G__36621;
count__36402_36617 = G__36622;
i__36403_36618 = G__36623;
continue;
} else {
var temp__5735__auto___36624 = cljs.core.seq(seq__36400_36615);
if(temp__5735__auto___36624){
var seq__36400_36625__$1 = temp__5735__auto___36624;
if(cljs.core.chunked_seq_QMARK_(seq__36400_36625__$1)){
var c__4609__auto___36626 = cljs.core.chunk_first(seq__36400_36625__$1);
var G__36627 = cljs.core.chunk_rest(seq__36400_36625__$1);
var G__36628 = c__4609__auto___36626;
var G__36629 = cljs.core.count(c__4609__auto___36626);
var G__36630 = (0);
seq__36400_36615 = G__36627;
chunk__36401_36616 = G__36628;
count__36402_36617 = G__36629;
i__36403_36618 = G__36630;
continue;
} else {
var f_36631 = cljs.core.first(seq__36400_36625__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36631], 0));


var G__36632 = cljs.core.next(seq__36400_36625__$1);
var G__36633 = null;
var G__36634 = (0);
var G__36635 = (0);
seq__36400_36615 = G__36632;
chunk__36401_36616 = G__36633;
count__36402_36617 = G__36634;
i__36403_36618 = G__36635;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36636 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36636], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36636)))?cljs.core.second(arglists_36636):arglists_36636)], 0));
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
var seq__36405_36637 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36406_36638 = null;
var count__36407_36639 = (0);
var i__36408_36640 = (0);
while(true){
if((i__36408_36640 < count__36407_36639)){
var vec__36420_36641 = chunk__36406_36638.cljs$core$IIndexed$_nth$arity$2(null,i__36408_36640);
var name_36642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36420_36641,(0),null);
var map__36423_36643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36420_36641,(1),null);
var map__36423_36644__$1 = (((((!((map__36423_36643 == null))))?(((((map__36423_36643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36423_36643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36423_36643):map__36423_36643);
var doc_36645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36423_36644__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36423_36644__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36642], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36646], 0));

if(cljs.core.truth_(doc_36645)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36645], 0));
} else {
}


var G__36647 = seq__36405_36637;
var G__36648 = chunk__36406_36638;
var G__36649 = count__36407_36639;
var G__36650 = (i__36408_36640 + (1));
seq__36405_36637 = G__36647;
chunk__36406_36638 = G__36648;
count__36407_36639 = G__36649;
i__36408_36640 = G__36650;
continue;
} else {
var temp__5735__auto___36651 = cljs.core.seq(seq__36405_36637);
if(temp__5735__auto___36651){
var seq__36405_36652__$1 = temp__5735__auto___36651;
if(cljs.core.chunked_seq_QMARK_(seq__36405_36652__$1)){
var c__4609__auto___36653 = cljs.core.chunk_first(seq__36405_36652__$1);
var G__36654 = cljs.core.chunk_rest(seq__36405_36652__$1);
var G__36655 = c__4609__auto___36653;
var G__36656 = cljs.core.count(c__4609__auto___36653);
var G__36657 = (0);
seq__36405_36637 = G__36654;
chunk__36406_36638 = G__36655;
count__36407_36639 = G__36656;
i__36408_36640 = G__36657;
continue;
} else {
var vec__36426_36658 = cljs.core.first(seq__36405_36652__$1);
var name_36659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36426_36658,(0),null);
var map__36429_36660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36426_36658,(1),null);
var map__36429_36661__$1 = (((((!((map__36429_36660 == null))))?(((((map__36429_36660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36429_36660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36429_36660):map__36429_36660);
var doc_36662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36429_36661__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36429_36661__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36659], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36663], 0));

if(cljs.core.truth_(doc_36662)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36662], 0));
} else {
}


var G__36664 = cljs.core.next(seq__36405_36652__$1);
var G__36665 = null;
var G__36666 = (0);
var G__36667 = (0);
seq__36405_36637 = G__36664;
chunk__36406_36638 = G__36665;
count__36407_36639 = G__36666;
i__36408_36640 = G__36667;
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

var seq__36432 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36433 = null;
var count__36434 = (0);
var i__36435 = (0);
while(true){
if((i__36435 < count__36434)){
var role = chunk__36433.cljs$core$IIndexed$_nth$arity$2(null,i__36435);
var temp__5735__auto___36668__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36668__$1)){
var spec_36669 = temp__5735__auto___36668__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36669)], 0));
} else {
}


var G__36670 = seq__36432;
var G__36671 = chunk__36433;
var G__36672 = count__36434;
var G__36673 = (i__36435 + (1));
seq__36432 = G__36670;
chunk__36433 = G__36671;
count__36434 = G__36672;
i__36435 = G__36673;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36432);
if(temp__5735__auto____$1){
var seq__36432__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36432__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36432__$1);
var G__36674 = cljs.core.chunk_rest(seq__36432__$1);
var G__36675 = c__4609__auto__;
var G__36676 = cljs.core.count(c__4609__auto__);
var G__36677 = (0);
seq__36432 = G__36674;
chunk__36433 = G__36675;
count__36434 = G__36676;
i__36435 = G__36677;
continue;
} else {
var role = cljs.core.first(seq__36432__$1);
var temp__5735__auto___36678__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36678__$2)){
var spec_36679 = temp__5735__auto___36678__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36679)], 0));
} else {
}


var G__36680 = cljs.core.next(seq__36432__$1);
var G__36681 = null;
var G__36682 = (0);
var G__36683 = (0);
seq__36432 = G__36680;
chunk__36433 = G__36681;
count__36434 = G__36682;
i__36435 = G__36683;
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
var G__36684 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36685 = cljs.core.ex_cause(t);
via = G__36684;
t = G__36685;
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
var map__36535 = datafied_throwable;
var map__36535__$1 = (((((!((map__36535 == null))))?(((((map__36535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36535):map__36535);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36535__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36535__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36535__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36536 = cljs.core.last(via);
var map__36536__$1 = (((((!((map__36536 == null))))?(((((map__36536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36536):map__36536);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36536__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36536__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36536__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36537 = data;
var map__36537__$1 = (((((!((map__36537 == null))))?(((((map__36537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36537):map__36537);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36537__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36537__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36537__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36538 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36538__$1 = (((((!((map__36538 == null))))?(((((map__36538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36538):map__36538);
var top_data = map__36538__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36538__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36546 = phase;
var G__36546__$1 = (((G__36546 instanceof cljs.core.Keyword))?G__36546.fqn:null);
switch (G__36546__$1) {
case "read-source":
var map__36547 = data;
var map__36547__$1 = (((((!((map__36547 == null))))?(((((map__36547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36547):map__36547);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36547__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36547__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36550 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36550__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36550,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36550);
var G__36550__$2 = (cljs.core.truth_((function (){var fexpr__36551 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36551.cljs$core$IFn$_invoke$arity$1 ? fexpr__36551.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36551.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36550__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36550__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36550__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36550__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36552 = top_data;
var G__36552__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36552,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36552);
var G__36552__$2 = (cljs.core.truth_((function (){var fexpr__36553 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36553.cljs$core$IFn$_invoke$arity$1 ? fexpr__36553.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36553.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36552__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36552__$1);
var G__36552__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36552__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36552__$2);
var G__36552__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36552__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36552__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36552__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36552__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36554 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36554,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36554,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36554,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36554,(3),null);
var G__36557 = top_data;
var G__36557__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36557,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36557);
var G__36557__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36557__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36557__$1);
var G__36557__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36557__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36557__$2);
var G__36557__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36557__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36557__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36557__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36557__$4;
}

break;
case "execution":
var vec__36558 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36558,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36558,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36558,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36558,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36534_SHARP_){
var or__4185__auto__ = (p1__36534_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__36562 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36562.cljs$core$IFn$_invoke$arity$1 ? fexpr__36562.cljs$core$IFn$_invoke$arity$1(p1__36534_SHARP_) : fexpr__36562.call(null,p1__36534_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__36567 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36567__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36567,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36567);
var G__36567__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36567__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36567__$1);
var G__36567__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36567__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36567__$2);
var G__36567__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36567__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36567__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36567__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36567__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36546__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36574){
var map__36575 = p__36574;
var map__36575__$1 = (((((!((map__36575 == null))))?(((((map__36575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36575):map__36575);
var triage_data = map__36575__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36575__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36575__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36575__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36575__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36575__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36575__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36575__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36575__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36578 = phase;
var G__36578__$1 = (((G__36578 instanceof cljs.core.Keyword))?G__36578.fqn:null);
switch (G__36578__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36579 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36580 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36581 = loc;
var G__36582 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36583_36689 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36584_36690 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36585_36691 = true;
var _STAR_print_fn_STAR__temp_val__36586_36692 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36585_36691);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36586_36692);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36572_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36572_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36584_36690);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36583_36689);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36579,G__36580,G__36581,G__36582) : format.call(null,G__36579,G__36580,G__36581,G__36582));

break;
case "macroexpansion":
var G__36587 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36588 = cause_type;
var G__36589 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36590 = loc;
var G__36591 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36587,G__36588,G__36589,G__36590,G__36591) : format.call(null,G__36587,G__36588,G__36589,G__36590,G__36591));

break;
case "compile-syntax-check":
var G__36592 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36593 = cause_type;
var G__36594 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36595 = loc;
var G__36596 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36592,G__36593,G__36594,G__36595,G__36596) : format.call(null,G__36592,G__36593,G__36594,G__36595,G__36596));

break;
case "compilation":
var G__36597 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36598 = cause_type;
var G__36599 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36600 = loc;
var G__36601 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36597,G__36598,G__36599,G__36600,G__36601) : format.call(null,G__36597,G__36598,G__36599,G__36600,G__36601));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36602 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36603 = symbol;
var G__36604 = loc;
var G__36605 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36606_36693 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36607_36694 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36608_36695 = true;
var _STAR_print_fn_STAR__temp_val__36609_36696 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36608_36695);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36609_36696);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36573_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36573_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36607_36694);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36606_36693);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36602,G__36603,G__36604,G__36605) : format.call(null,G__36602,G__36603,G__36604,G__36605));
} else {
var G__36610 = "Execution error%s at %s(%s).\n%s\n";
var G__36611 = cause_type;
var G__36612 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36613 = loc;
var G__36614 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36610,G__36611,G__36612,G__36613,G__36614) : format.call(null,G__36610,G__36611,G__36612,G__36613,G__36614));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36578__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
