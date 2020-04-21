goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36384){
var map__36385 = p__36384;
var map__36385__$1 = (((((!((map__36385 == null))))?(((((map__36385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36385):map__36385);
var m = map__36385__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36385__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36385__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36388_36601 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36389_36602 = null;
var count__36390_36603 = (0);
var i__36391_36604 = (0);
while(true){
if((i__36391_36604 < count__36390_36603)){
var f_36605 = chunk__36389_36602.cljs$core$IIndexed$_nth$arity$2(null,i__36391_36604);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36605], 0));


var G__36606 = seq__36388_36601;
var G__36607 = chunk__36389_36602;
var G__36608 = count__36390_36603;
var G__36609 = (i__36391_36604 + (1));
seq__36388_36601 = G__36606;
chunk__36389_36602 = G__36607;
count__36390_36603 = G__36608;
i__36391_36604 = G__36609;
continue;
} else {
var temp__5735__auto___36610 = cljs.core.seq(seq__36388_36601);
if(temp__5735__auto___36610){
var seq__36388_36611__$1 = temp__5735__auto___36610;
if(cljs.core.chunked_seq_QMARK_(seq__36388_36611__$1)){
var c__4609__auto___36612 = cljs.core.chunk_first(seq__36388_36611__$1);
var G__36613 = cljs.core.chunk_rest(seq__36388_36611__$1);
var G__36614 = c__4609__auto___36612;
var G__36615 = cljs.core.count(c__4609__auto___36612);
var G__36616 = (0);
seq__36388_36601 = G__36613;
chunk__36389_36602 = G__36614;
count__36390_36603 = G__36615;
i__36391_36604 = G__36616;
continue;
} else {
var f_36617 = cljs.core.first(seq__36388_36611__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36617], 0));


var G__36618 = cljs.core.next(seq__36388_36611__$1);
var G__36619 = null;
var G__36620 = (0);
var G__36621 = (0);
seq__36388_36601 = G__36618;
chunk__36389_36602 = G__36619;
count__36390_36603 = G__36620;
i__36391_36604 = G__36621;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36622 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36622], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36622)))?cljs.core.second(arglists_36622):arglists_36622)], 0));
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
var seq__36392_36624 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36393_36625 = null;
var count__36394_36626 = (0);
var i__36395_36627 = (0);
while(true){
if((i__36395_36627 < count__36394_36626)){
var vec__36407_36628 = chunk__36393_36625.cljs$core$IIndexed$_nth$arity$2(null,i__36395_36627);
var name_36629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36407_36628,(0),null);
var map__36410_36630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36407_36628,(1),null);
var map__36410_36631__$1 = (((((!((map__36410_36630 == null))))?(((((map__36410_36630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36410_36630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36410_36630):map__36410_36630);
var doc_36632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410_36631__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410_36631__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36629], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36633], 0));

if(cljs.core.truth_(doc_36632)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36632], 0));
} else {
}


var G__36634 = seq__36392_36624;
var G__36635 = chunk__36393_36625;
var G__36636 = count__36394_36626;
var G__36637 = (i__36395_36627 + (1));
seq__36392_36624 = G__36634;
chunk__36393_36625 = G__36635;
count__36394_36626 = G__36636;
i__36395_36627 = G__36637;
continue;
} else {
var temp__5735__auto___36638 = cljs.core.seq(seq__36392_36624);
if(temp__5735__auto___36638){
var seq__36392_36639__$1 = temp__5735__auto___36638;
if(cljs.core.chunked_seq_QMARK_(seq__36392_36639__$1)){
var c__4609__auto___36640 = cljs.core.chunk_first(seq__36392_36639__$1);
var G__36641 = cljs.core.chunk_rest(seq__36392_36639__$1);
var G__36642 = c__4609__auto___36640;
var G__36643 = cljs.core.count(c__4609__auto___36640);
var G__36644 = (0);
seq__36392_36624 = G__36641;
chunk__36393_36625 = G__36642;
count__36394_36626 = G__36643;
i__36395_36627 = G__36644;
continue;
} else {
var vec__36414_36645 = cljs.core.first(seq__36392_36639__$1);
var name_36646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36414_36645,(0),null);
var map__36417_36647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36414_36645,(1),null);
var map__36417_36648__$1 = (((((!((map__36417_36647 == null))))?(((((map__36417_36647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36417_36647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36417_36647):map__36417_36647);
var doc_36649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36417_36648__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36417_36648__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36646], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36650], 0));

if(cljs.core.truth_(doc_36649)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36649], 0));
} else {
}


var G__36651 = cljs.core.next(seq__36392_36639__$1);
var G__36652 = null;
var G__36653 = (0);
var G__36654 = (0);
seq__36392_36624 = G__36651;
chunk__36393_36625 = G__36652;
count__36394_36626 = G__36653;
i__36395_36627 = G__36654;
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

var seq__36419 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36420 = null;
var count__36421 = (0);
var i__36422 = (0);
while(true){
if((i__36422 < count__36421)){
var role = chunk__36420.cljs$core$IIndexed$_nth$arity$2(null,i__36422);
var temp__5735__auto___36655__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36655__$1)){
var spec_36656 = temp__5735__auto___36655__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36656)], 0));
} else {
}


var G__36657 = seq__36419;
var G__36658 = chunk__36420;
var G__36659 = count__36421;
var G__36660 = (i__36422 + (1));
seq__36419 = G__36657;
chunk__36420 = G__36658;
count__36421 = G__36659;
i__36422 = G__36660;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36419);
if(temp__5735__auto____$1){
var seq__36419__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36419__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36419__$1);
var G__36662 = cljs.core.chunk_rest(seq__36419__$1);
var G__36663 = c__4609__auto__;
var G__36664 = cljs.core.count(c__4609__auto__);
var G__36665 = (0);
seq__36419 = G__36662;
chunk__36420 = G__36663;
count__36421 = G__36664;
i__36422 = G__36665;
continue;
} else {
var role = cljs.core.first(seq__36419__$1);
var temp__5735__auto___36666__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36666__$2)){
var spec_36667 = temp__5735__auto___36666__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36667)], 0));
} else {
}


var G__36668 = cljs.core.next(seq__36419__$1);
var G__36669 = null;
var G__36670 = (0);
var G__36671 = (0);
seq__36419 = G__36668;
chunk__36420 = G__36669;
count__36421 = G__36670;
i__36422 = G__36671;
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
var G__36672 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36673 = cljs.core.ex_cause(t);
via = G__36672;
t = G__36673;
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
var map__36521 = datafied_throwable;
var map__36521__$1 = (((((!((map__36521 == null))))?(((((map__36521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36521):map__36521);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36521__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36521__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36521__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36522 = cljs.core.last(via);
var map__36522__$1 = (((((!((map__36522 == null))))?(((((map__36522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36522):map__36522);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36522__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36522__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36522__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36523 = data;
var map__36523__$1 = (((((!((map__36523 == null))))?(((((map__36523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36523):map__36523);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36523__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36523__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36523__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36524 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36524__$1 = (((((!((map__36524 == null))))?(((((map__36524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36524):map__36524);
var top_data = map__36524__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36524__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36530 = phase;
var G__36530__$1 = (((G__36530 instanceof cljs.core.Keyword))?G__36530.fqn:null);
switch (G__36530__$1) {
case "read-source":
var map__36531 = data;
var map__36531__$1 = (((((!((map__36531 == null))))?(((((map__36531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36531):map__36531);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36531__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36531__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36534 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36534__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36534,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36534);
var G__36534__$2 = (cljs.core.truth_((function (){var fexpr__36535 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36535.cljs$core$IFn$_invoke$arity$1 ? fexpr__36535.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36535.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36534__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36534__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36534__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36534__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36536 = top_data;
var G__36536__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36536,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36536);
var G__36536__$2 = (cljs.core.truth_((function (){var fexpr__36537 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36537.cljs$core$IFn$_invoke$arity$1 ? fexpr__36537.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36537.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36536__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36536__$1);
var G__36536__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36536__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36536__$2);
var G__36536__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36536__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36536__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36536__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36536__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36539 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36539,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36539,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36539,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36539,(3),null);
var G__36542 = top_data;
var G__36542__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36542,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36542);
var G__36542__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36542__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36542__$1);
var G__36542__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36542__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36542__$2);
var G__36542__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36542__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36542__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36542__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36542__$4;
}

break;
case "execution":
var vec__36544 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36544,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36544,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36544,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36544,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36519_SHARP_){
var or__4185__auto__ = (p1__36519_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__36548 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36548.cljs$core$IFn$_invoke$arity$1 ? fexpr__36548.cljs$core$IFn$_invoke$arity$1(p1__36519_SHARP_) : fexpr__36548.call(null,p1__36519_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__36549 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36549__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36549,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36549);
var G__36549__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36549__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36549__$1);
var G__36549__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36549__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36549__$2);
var G__36549__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36549__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36549__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36549__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36549__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36530__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36553){
var map__36554 = p__36553;
var map__36554__$1 = (((((!((map__36554 == null))))?(((((map__36554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36554):map__36554);
var triage_data = map__36554__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36554__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36554__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36554__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36554__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36554__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36554__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36554__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36554__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36556 = phase;
var G__36556__$1 = (((G__36556 instanceof cljs.core.Keyword))?G__36556.fqn:null);
switch (G__36556__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36557 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36558 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36559 = loc;
var G__36560 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36561_36681 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36562_36682 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36563_36683 = true;
var _STAR_print_fn_STAR__temp_val__36564_36684 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36563_36683);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36564_36684);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36551_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36551_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36562_36682);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36561_36681);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36557,G__36558,G__36559,G__36560) : format.call(null,G__36557,G__36558,G__36559,G__36560));

break;
case "macroexpansion":
var G__36565 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36566 = cause_type;
var G__36567 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36568 = loc;
var G__36569 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36565,G__36566,G__36567,G__36568,G__36569) : format.call(null,G__36565,G__36566,G__36567,G__36568,G__36569));

break;
case "compile-syntax-check":
var G__36570 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36571 = cause_type;
var G__36572 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36573 = loc;
var G__36574 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36570,G__36571,G__36572,G__36573,G__36574) : format.call(null,G__36570,G__36571,G__36572,G__36573,G__36574));

break;
case "compilation":
var G__36577 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36578 = cause_type;
var G__36579 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36580 = loc;
var G__36581 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36577,G__36578,G__36579,G__36580,G__36581) : format.call(null,G__36577,G__36578,G__36579,G__36580,G__36581));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36584 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36585 = symbol;
var G__36586 = loc;
var G__36587 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36588_36685 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36589_36686 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36590_36687 = true;
var _STAR_print_fn_STAR__temp_val__36591_36688 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36590_36687);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36591_36688);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36552_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36552_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36589_36686);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36588_36685);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36584,G__36585,G__36586,G__36587) : format.call(null,G__36584,G__36585,G__36586,G__36587));
} else {
var G__36592 = "Execution error%s at %s(%s).\n%s\n";
var G__36593 = cause_type;
var G__36594 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36595 = loc;
var G__36596 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36592,G__36593,G__36594,G__36595,G__36596) : format.call(null,G__36592,G__36593,G__36594,G__36595,G__36596));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36556__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
