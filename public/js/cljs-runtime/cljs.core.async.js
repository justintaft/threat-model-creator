goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31217 = arguments.length;
switch (G__31217) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31218 = (function (f,blockable,meta31219){
this.f = f;
this.blockable = blockable;
this.meta31219 = meta31219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31220,meta31219__$1){
var self__ = this;
var _31220__$1 = this;
return (new cljs.core.async.t_cljs$core$async31218(self__.f,self__.blockable,meta31219__$1));
}));

(cljs.core.async.t_cljs$core$async31218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31220){
var self__ = this;
var _31220__$1 = this;
return self__.meta31219;
}));

(cljs.core.async.t_cljs$core$async31218.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31218.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31219","meta31219",1989407213,null)], null);
}));

(cljs.core.async.t_cljs$core$async31218.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31218");

(cljs.core.async.t_cljs$core$async31218.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31218");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31218.
 */
cljs.core.async.__GT_t_cljs$core$async31218 = (function cljs$core$async$__GT_t_cljs$core$async31218(f__$1,blockable__$1,meta31219){
return (new cljs.core.async.t_cljs$core$async31218(f__$1,blockable__$1,meta31219));
});

}

return (new cljs.core.async.t_cljs$core$async31218(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31223 = arguments.length;
switch (G__31223) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31225 = arguments.length;
switch (G__31225) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31227 = arguments.length;
switch (G__31227) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32685 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32685) : fn1.call(null,val_32685));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32685) : fn1.call(null,val_32685));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31229 = arguments.length;
switch (G__31229) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___32687 = n;
var x_32688 = (0);
while(true){
if((x_32688 < n__4666__auto___32687)){
(a[x_32688] = x_32688);

var G__32689 = (x_32688 + (1));
x_32688 = G__32689;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31230 = (function (flag,meta31231){
this.flag = flag;
this.meta31231 = meta31231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31232,meta31231__$1){
var self__ = this;
var _31232__$1 = this;
return (new cljs.core.async.t_cljs$core$async31230(self__.flag,meta31231__$1));
}));

(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31232){
var self__ = this;
var _31232__$1 = this;
return self__.meta31231;
}));

(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31231","meta31231",2091065960,null)], null);
}));

(cljs.core.async.t_cljs$core$async31230.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31230");

(cljs.core.async.t_cljs$core$async31230.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31230");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31230.
 */
cljs.core.async.__GT_t_cljs$core$async31230 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31230(flag__$1,meta31231){
return (new cljs.core.async.t_cljs$core$async31230(flag__$1,meta31231));
});

}

return (new cljs.core.async.t_cljs$core$async31230(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31233 = (function (flag,cb,meta31234){
this.flag = flag;
this.cb = cb;
this.meta31234 = meta31234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31235,meta31234__$1){
var self__ = this;
var _31235__$1 = this;
return (new cljs.core.async.t_cljs$core$async31233(self__.flag,self__.cb,meta31234__$1));
}));

(cljs.core.async.t_cljs$core$async31233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31235){
var self__ = this;
var _31235__$1 = this;
return self__.meta31234;
}));

(cljs.core.async.t_cljs$core$async31233.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31233.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31233.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31233.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31234","meta31234",1157127298,null)], null);
}));

(cljs.core.async.t_cljs$core$async31233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31233");

(cljs.core.async.t_cljs$core$async31233.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31233.
 */
cljs.core.async.__GT_t_cljs$core$async31233 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31233(flag__$1,cb__$1,meta31234){
return (new cljs.core.async.t_cljs$core$async31233(flag__$1,cb__$1,meta31234));
});

}

return (new cljs.core.async.t_cljs$core$async31233(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31236_SHARP_){
var G__31238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31236_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31238) : fret.call(null,G__31238));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31237_SHARP_){
var G__31239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31237_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31239) : fret.call(null,G__31239));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32690 = (i + (1));
i = G__32690;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32691 = arguments.length;
var i__4790__auto___32692 = (0);
while(true){
if((i__4790__auto___32692 < len__4789__auto___32691)){
args__4795__auto__.push((arguments[i__4790__auto___32692]));

var G__32693 = (i__4790__auto___32692 + (1));
i__4790__auto___32692 = G__32693;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31242){
var map__31243 = p__31242;
var map__31243__$1 = (((((!((map__31243 == null))))?(((((map__31243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31243):map__31243);
var opts = map__31243__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31240){
var G__31241 = cljs.core.first(seq31240);
var seq31240__$1 = cljs.core.next(seq31240);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31241,seq31240__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31246 = arguments.length;
switch (G__31246) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31159__auto___32697 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_31270){
var state_val_31271 = (state_31270[(1)]);
if((state_val_31271 === (7))){
var inst_31266 = (state_31270[(2)]);
var state_31270__$1 = state_31270;
var statearr_31272_32699 = state_31270__$1;
(statearr_31272_32699[(2)] = inst_31266);

(statearr_31272_32699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31271 === (1))){
var state_31270__$1 = state_31270;
var statearr_31273_32701 = state_31270__$1;
(statearr_31273_32701[(2)] = null);

(statearr_31273_32701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31271 === (4))){
var inst_31249 = (state_31270[(7)]);
var inst_31249__$1 = (state_31270[(2)]);
var inst_31250 = (inst_31249__$1 == null);
var state_31270__$1 = (function (){var statearr_31274 = state_31270;
(statearr_31274[(7)] = inst_31249__$1);

return statearr_31274;
})();
if(cljs.core.truth_(inst_31250)){
var statearr_31275_32703 = state_31270__$1;
(statearr_31275_32703[(1)] = (5));

} else {
var statearr_31276_32704 = state_31270__$1;
(statearr_31276_32704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31271 === (13))){
var state_31270__$1 = state_31270;
var statearr_31277_32706 = state_31270__$1;
(statearr_31277_32706[(2)] = null);

(statearr_31277_32706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31271 === (6))){
var inst_31249 = (state_31270[(7)]);
var state_31270__$1 = state_31270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31270__$1,(11),to,inst_31249);
} else {
if((state_val_31271 === (3))){
var inst_31268 = (state_31270[(2)]);
var state_31270__$1 = state_31270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31270__$1,inst_31268);
} else {
if((state_val_31271 === (12))){
var state_31270__$1 = state_31270;
var statearr_31278_32707 = state_31270__$1;
(statearr_31278_32707[(2)] = null);

(statearr_31278_32707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31271 === (2))){
var state_31270__$1 = state_31270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31270__$1,(4),from);
} else {
if((state_val_31271 === (11))){
var inst_31259 = (state_31270[(2)]);
var state_31270__$1 = state_31270;
if(cljs.core.truth_(inst_31259)){
var statearr_31279_32708 = state_31270__$1;
(statearr_31279_32708[(1)] = (12));

} else {
var statearr_31280_32709 = state_31270__$1;
(statearr_31280_32709[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31271 === (9))){
var state_31270__$1 = state_31270;
var statearr_31281_32710 = state_31270__$1;
(statearr_31281_32710[(2)] = null);

(statearr_31281_32710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31271 === (5))){
var state_31270__$1 = state_31270;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31282_32711 = state_31270__$1;
(statearr_31282_32711[(1)] = (8));

} else {
var statearr_31283_32712 = state_31270__$1;
(statearr_31283_32712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31271 === (14))){
var inst_31264 = (state_31270[(2)]);
var state_31270__$1 = state_31270;
var statearr_31284_32713 = state_31270__$1;
(statearr_31284_32713[(2)] = inst_31264);

(statearr_31284_32713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31271 === (10))){
var inst_31256 = (state_31270[(2)]);
var state_31270__$1 = state_31270;
var statearr_31285_32715 = state_31270__$1;
(statearr_31285_32715[(2)] = inst_31256);

(statearr_31285_32715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31271 === (8))){
var inst_31253 = cljs.core.async.close_BANG_(to);
var state_31270__$1 = state_31270;
var statearr_31286_32716 = state_31270__$1;
(statearr_31286_32716[(2)] = inst_31253);

(statearr_31286_32716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31124__auto__ = null;
var cljs$core$async$state_machine__31124__auto____0 = (function (){
var statearr_31287 = [null,null,null,null,null,null,null,null];
(statearr_31287[(0)] = cljs$core$async$state_machine__31124__auto__);

(statearr_31287[(1)] = (1));

return statearr_31287;
});
var cljs$core$async$state_machine__31124__auto____1 = (function (state_31270){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_31270);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e31288){var ex__31127__auto__ = e31288;
var statearr_31289_32720 = state_31270;
(statearr_31289_32720[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_31270[(4)]))){
var statearr_31290_32721 = state_31270;
(statearr_31290_32721[(1)] = cljs.core.first((state_31270[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32722 = state_31270;
state_31270 = G__32722;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$state_machine__31124__auto__ = function(state_31270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31124__auto____1.call(this,state_31270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31124__auto____0;
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31124__auto____1;
return cljs$core$async$state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_31291 = f__31160__auto__();
(statearr_31291[(6)] = c__31159__auto___32697);

return statearr_31291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__31292){
var vec__31293 = p__31292;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31293,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31293,(1),null);
var job = vec__31293;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31159__auto___32723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_31300){
var state_val_31301 = (state_31300[(1)]);
if((state_val_31301 === (1))){
var state_31300__$1 = state_31300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31300__$1,(2),res,v);
} else {
if((state_val_31301 === (2))){
var inst_31297 = (state_31300[(2)]);
var inst_31298 = cljs.core.async.close_BANG_(res);
var state_31300__$1 = (function (){var statearr_31302 = state_31300;
(statearr_31302[(7)] = inst_31297);

return statearr_31302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31300__$1,inst_31298);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0 = (function (){
var statearr_31303 = [null,null,null,null,null,null,null,null];
(statearr_31303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__);

(statearr_31303[(1)] = (1));

return statearr_31303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1 = (function (state_31300){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_31300);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e31304){var ex__31127__auto__ = e31304;
var statearr_31305_32725 = state_31300;
(statearr_31305_32725[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_31300[(4)]))){
var statearr_31306_32727 = state_31300;
(statearr_31306_32727[(1)] = cljs.core.first((state_31300[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32728 = state_31300;
state_31300 = G__32728;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__ = function(state_31300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1.call(this,state_31300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_31307 = f__31160__auto__();
(statearr_31307[(6)] = c__31159__auto___32723);

return statearr_31307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31308){
var vec__31309 = p__31308;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31309,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31309,(1),null);
var job = vec__31309;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___32730 = n;
var __32731 = (0);
while(true){
if((__32731 < n__4666__auto___32730)){
var G__31312_32732 = type;
var G__31312_32733__$1 = (((G__31312_32732 instanceof cljs.core.Keyword))?G__31312_32732.fqn:null);
switch (G__31312_32733__$1) {
case "compute":
var c__31159__auto___32735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32731,c__31159__auto___32735,G__31312_32732,G__31312_32733__$1,n__4666__auto___32730,jobs,results,process,async){
return (function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = ((function (__32731,c__31159__auto___32735,G__31312_32732,G__31312_32733__$1,n__4666__auto___32730,jobs,results,process,async){
return (function (state_31325){
var state_val_31326 = (state_31325[(1)]);
if((state_val_31326 === (1))){
var state_31325__$1 = state_31325;
var statearr_31327_32738 = state_31325__$1;
(statearr_31327_32738[(2)] = null);

(statearr_31327_32738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (2))){
var state_31325__$1 = state_31325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31325__$1,(4),jobs);
} else {
if((state_val_31326 === (3))){
var inst_31323 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31325__$1,inst_31323);
} else {
if((state_val_31326 === (4))){
var inst_31315 = (state_31325[(2)]);
var inst_31316 = process(inst_31315);
var state_31325__$1 = state_31325;
if(cljs.core.truth_(inst_31316)){
var statearr_31328_32739 = state_31325__$1;
(statearr_31328_32739[(1)] = (5));

} else {
var statearr_31329_32740 = state_31325__$1;
(statearr_31329_32740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (5))){
var state_31325__$1 = state_31325;
var statearr_31330_32741 = state_31325__$1;
(statearr_31330_32741[(2)] = null);

(statearr_31330_32741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (6))){
var state_31325__$1 = state_31325;
var statearr_31331_32742 = state_31325__$1;
(statearr_31331_32742[(2)] = null);

(statearr_31331_32742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (7))){
var inst_31321 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
var statearr_31332_32743 = state_31325__$1;
(statearr_31332_32743[(2)] = inst_31321);

(statearr_31332_32743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32731,c__31159__auto___32735,G__31312_32732,G__31312_32733__$1,n__4666__auto___32730,jobs,results,process,async))
;
return ((function (__32731,switch__31123__auto__,c__31159__auto___32735,G__31312_32732,G__31312_32733__$1,n__4666__auto___32730,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0 = (function (){
var statearr_31333 = [null,null,null,null,null,null,null];
(statearr_31333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__);

(statearr_31333[(1)] = (1));

return statearr_31333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1 = (function (state_31325){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_31325);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e31334){var ex__31127__auto__ = e31334;
var statearr_31335_32746 = state_31325;
(statearr_31335_32746[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_31325[(4)]))){
var statearr_31336_32747 = state_31325;
(statearr_31336_32747[(1)] = cljs.core.first((state_31325[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32748 = state_31325;
state_31325 = G__32748;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__ = function(state_31325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1.call(this,state_31325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__;
})()
;})(__32731,switch__31123__auto__,c__31159__auto___32735,G__31312_32732,G__31312_32733__$1,n__4666__auto___32730,jobs,results,process,async))
})();
var state__31161__auto__ = (function (){var statearr_31337 = f__31160__auto__();
(statearr_31337[(6)] = c__31159__auto___32735);

return statearr_31337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
});})(__32731,c__31159__auto___32735,G__31312_32732,G__31312_32733__$1,n__4666__auto___32730,jobs,results,process,async))
);


break;
case "async":
var c__31159__auto___32749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32731,c__31159__auto___32749,G__31312_32732,G__31312_32733__$1,n__4666__auto___32730,jobs,results,process,async){
return (function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = ((function (__32731,c__31159__auto___32749,G__31312_32732,G__31312_32733__$1,n__4666__auto___32730,jobs,results,process,async){
return (function (state_31350){
var state_val_31351 = (state_31350[(1)]);
if((state_val_31351 === (1))){
var state_31350__$1 = state_31350;
var statearr_31352_32752 = state_31350__$1;
(statearr_31352_32752[(2)] = null);

(statearr_31352_32752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31351 === (2))){
var state_31350__$1 = state_31350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31350__$1,(4),jobs);
} else {
if((state_val_31351 === (3))){
var inst_31348 = (state_31350[(2)]);
var state_31350__$1 = state_31350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31350__$1,inst_31348);
} else {
if((state_val_31351 === (4))){
var inst_31340 = (state_31350[(2)]);
var inst_31341 = async(inst_31340);
var state_31350__$1 = state_31350;
if(cljs.core.truth_(inst_31341)){
var statearr_31353_32753 = state_31350__$1;
(statearr_31353_32753[(1)] = (5));

} else {
var statearr_31354_32754 = state_31350__$1;
(statearr_31354_32754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31351 === (5))){
var state_31350__$1 = state_31350;
var statearr_31355_32755 = state_31350__$1;
(statearr_31355_32755[(2)] = null);

(statearr_31355_32755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31351 === (6))){
var state_31350__$1 = state_31350;
var statearr_31356_32756 = state_31350__$1;
(statearr_31356_32756[(2)] = null);

(statearr_31356_32756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31351 === (7))){
var inst_31346 = (state_31350[(2)]);
var state_31350__$1 = state_31350;
var statearr_31357_32757 = state_31350__$1;
(statearr_31357_32757[(2)] = inst_31346);

(statearr_31357_32757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32731,c__31159__auto___32749,G__31312_32732,G__31312_32733__$1,n__4666__auto___32730,jobs,results,process,async))
;
return ((function (__32731,switch__31123__auto__,c__31159__auto___32749,G__31312_32732,G__31312_32733__$1,n__4666__auto___32730,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0 = (function (){
var statearr_31358 = [null,null,null,null,null,null,null];
(statearr_31358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__);

(statearr_31358[(1)] = (1));

return statearr_31358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1 = (function (state_31350){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_31350);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e31359){var ex__31127__auto__ = e31359;
var statearr_31360_32758 = state_31350;
(statearr_31360_32758[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_31350[(4)]))){
var statearr_31361_32759 = state_31350;
(statearr_31361_32759[(1)] = cljs.core.first((state_31350[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32760 = state_31350;
state_31350 = G__32760;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__ = function(state_31350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1.call(this,state_31350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__;
})()
;})(__32731,switch__31123__auto__,c__31159__auto___32749,G__31312_32732,G__31312_32733__$1,n__4666__auto___32730,jobs,results,process,async))
})();
var state__31161__auto__ = (function (){var statearr_31362 = f__31160__auto__();
(statearr_31362[(6)] = c__31159__auto___32749);

return statearr_31362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
});})(__32731,c__31159__auto___32749,G__31312_32732,G__31312_32733__$1,n__4666__auto___32730,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31312_32733__$1)].join('')));

}

var G__32761 = (__32731 + (1));
__32731 = G__32761;
continue;
} else {
}
break;
}

var c__31159__auto___32762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_31384){
var state_val_31385 = (state_31384[(1)]);
if((state_val_31385 === (7))){
var inst_31380 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
var statearr_31386_32763 = state_31384__$1;
(statearr_31386_32763[(2)] = inst_31380);

(statearr_31386_32763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (1))){
var state_31384__$1 = state_31384;
var statearr_31387_32764 = state_31384__$1;
(statearr_31387_32764[(2)] = null);

(statearr_31387_32764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (4))){
var inst_31365 = (state_31384[(7)]);
var inst_31365__$1 = (state_31384[(2)]);
var inst_31366 = (inst_31365__$1 == null);
var state_31384__$1 = (function (){var statearr_31388 = state_31384;
(statearr_31388[(7)] = inst_31365__$1);

return statearr_31388;
})();
if(cljs.core.truth_(inst_31366)){
var statearr_31389_32765 = state_31384__$1;
(statearr_31389_32765[(1)] = (5));

} else {
var statearr_31390_32766 = state_31384__$1;
(statearr_31390_32766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (6))){
var inst_31370 = (state_31384[(8)]);
var inst_31365 = (state_31384[(7)]);
var inst_31370__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31371 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31372 = [inst_31365,inst_31370__$1];
var inst_31373 = (new cljs.core.PersistentVector(null,2,(5),inst_31371,inst_31372,null));
var state_31384__$1 = (function (){var statearr_31391 = state_31384;
(statearr_31391[(8)] = inst_31370__$1);

return statearr_31391;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31384__$1,(8),jobs,inst_31373);
} else {
if((state_val_31385 === (3))){
var inst_31382 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31384__$1,inst_31382);
} else {
if((state_val_31385 === (2))){
var state_31384__$1 = state_31384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31384__$1,(4),from);
} else {
if((state_val_31385 === (9))){
var inst_31377 = (state_31384[(2)]);
var state_31384__$1 = (function (){var statearr_31392 = state_31384;
(statearr_31392[(9)] = inst_31377);

return statearr_31392;
})();
var statearr_31393_32767 = state_31384__$1;
(statearr_31393_32767[(2)] = null);

(statearr_31393_32767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (5))){
var inst_31368 = cljs.core.async.close_BANG_(jobs);
var state_31384__$1 = state_31384;
var statearr_31394_32768 = state_31384__$1;
(statearr_31394_32768[(2)] = inst_31368);

(statearr_31394_32768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (8))){
var inst_31370 = (state_31384[(8)]);
var inst_31375 = (state_31384[(2)]);
var state_31384__$1 = (function (){var statearr_31395 = state_31384;
(statearr_31395[(10)] = inst_31375);

return statearr_31395;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31384__$1,(9),results,inst_31370);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0 = (function (){
var statearr_31396 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__);

(statearr_31396[(1)] = (1));

return statearr_31396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1 = (function (state_31384){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_31384);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e31397){var ex__31127__auto__ = e31397;
var statearr_31398_32769 = state_31384;
(statearr_31398_32769[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_31384[(4)]))){
var statearr_31399_32770 = state_31384;
(statearr_31399_32770[(1)] = cljs.core.first((state_31384[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32771 = state_31384;
state_31384 = G__32771;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__ = function(state_31384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1.call(this,state_31384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_31400 = f__31160__auto__();
(statearr_31400[(6)] = c__31159__auto___32762);

return statearr_31400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));


var c__31159__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_31438){
var state_val_31439 = (state_31438[(1)]);
if((state_val_31439 === (7))){
var inst_31434 = (state_31438[(2)]);
var state_31438__$1 = state_31438;
var statearr_31440_32774 = state_31438__$1;
(statearr_31440_32774[(2)] = inst_31434);

(statearr_31440_32774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (20))){
var state_31438__$1 = state_31438;
var statearr_31441_32775 = state_31438__$1;
(statearr_31441_32775[(2)] = null);

(statearr_31441_32775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (1))){
var state_31438__$1 = state_31438;
var statearr_31442_32776 = state_31438__$1;
(statearr_31442_32776[(2)] = null);

(statearr_31442_32776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (4))){
var inst_31403 = (state_31438[(7)]);
var inst_31403__$1 = (state_31438[(2)]);
var inst_31404 = (inst_31403__$1 == null);
var state_31438__$1 = (function (){var statearr_31443 = state_31438;
(statearr_31443[(7)] = inst_31403__$1);

return statearr_31443;
})();
if(cljs.core.truth_(inst_31404)){
var statearr_31444_32777 = state_31438__$1;
(statearr_31444_32777[(1)] = (5));

} else {
var statearr_31445_32778 = state_31438__$1;
(statearr_31445_32778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (15))){
var inst_31416 = (state_31438[(8)]);
var state_31438__$1 = state_31438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31438__$1,(18),to,inst_31416);
} else {
if((state_val_31439 === (21))){
var inst_31429 = (state_31438[(2)]);
var state_31438__$1 = state_31438;
var statearr_31446_32779 = state_31438__$1;
(statearr_31446_32779[(2)] = inst_31429);

(statearr_31446_32779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (13))){
var inst_31431 = (state_31438[(2)]);
var state_31438__$1 = (function (){var statearr_31447 = state_31438;
(statearr_31447[(9)] = inst_31431);

return statearr_31447;
})();
var statearr_31448_32780 = state_31438__$1;
(statearr_31448_32780[(2)] = null);

(statearr_31448_32780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (6))){
var inst_31403 = (state_31438[(7)]);
var state_31438__$1 = state_31438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31438__$1,(11),inst_31403);
} else {
if((state_val_31439 === (17))){
var inst_31424 = (state_31438[(2)]);
var state_31438__$1 = state_31438;
if(cljs.core.truth_(inst_31424)){
var statearr_31449_32781 = state_31438__$1;
(statearr_31449_32781[(1)] = (19));

} else {
var statearr_31450_32782 = state_31438__$1;
(statearr_31450_32782[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (3))){
var inst_31436 = (state_31438[(2)]);
var state_31438__$1 = state_31438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31438__$1,inst_31436);
} else {
if((state_val_31439 === (12))){
var inst_31413 = (state_31438[(10)]);
var state_31438__$1 = state_31438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31438__$1,(14),inst_31413);
} else {
if((state_val_31439 === (2))){
var state_31438__$1 = state_31438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31438__$1,(4),results);
} else {
if((state_val_31439 === (19))){
var state_31438__$1 = state_31438;
var statearr_31451_32783 = state_31438__$1;
(statearr_31451_32783[(2)] = null);

(statearr_31451_32783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (11))){
var inst_31413 = (state_31438[(2)]);
var state_31438__$1 = (function (){var statearr_31452 = state_31438;
(statearr_31452[(10)] = inst_31413);

return statearr_31452;
})();
var statearr_31453_32784 = state_31438__$1;
(statearr_31453_32784[(2)] = null);

(statearr_31453_32784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (9))){
var state_31438__$1 = state_31438;
var statearr_31454_32785 = state_31438__$1;
(statearr_31454_32785[(2)] = null);

(statearr_31454_32785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (5))){
var state_31438__$1 = state_31438;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31455_32786 = state_31438__$1;
(statearr_31455_32786[(1)] = (8));

} else {
var statearr_31456_32787 = state_31438__$1;
(statearr_31456_32787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (14))){
var inst_31416 = (state_31438[(8)]);
var inst_31416__$1 = (state_31438[(2)]);
var inst_31417 = (inst_31416__$1 == null);
var inst_31418 = cljs.core.not(inst_31417);
var state_31438__$1 = (function (){var statearr_31457 = state_31438;
(statearr_31457[(8)] = inst_31416__$1);

return statearr_31457;
})();
if(inst_31418){
var statearr_31458_32788 = state_31438__$1;
(statearr_31458_32788[(1)] = (15));

} else {
var statearr_31459_32789 = state_31438__$1;
(statearr_31459_32789[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (16))){
var state_31438__$1 = state_31438;
var statearr_31460_32790 = state_31438__$1;
(statearr_31460_32790[(2)] = false);

(statearr_31460_32790[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (10))){
var inst_31410 = (state_31438[(2)]);
var state_31438__$1 = state_31438;
var statearr_31461_32791 = state_31438__$1;
(statearr_31461_32791[(2)] = inst_31410);

(statearr_31461_32791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (18))){
var inst_31421 = (state_31438[(2)]);
var state_31438__$1 = state_31438;
var statearr_31462_32792 = state_31438__$1;
(statearr_31462_32792[(2)] = inst_31421);

(statearr_31462_32792[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (8))){
var inst_31407 = cljs.core.async.close_BANG_(to);
var state_31438__$1 = state_31438;
var statearr_31463_32793 = state_31438__$1;
(statearr_31463_32793[(2)] = inst_31407);

(statearr_31463_32793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0 = (function (){
var statearr_31464 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31464[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__);

(statearr_31464[(1)] = (1));

return statearr_31464;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1 = (function (state_31438){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_31438);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e31465){var ex__31127__auto__ = e31465;
var statearr_31466_32794 = state_31438;
(statearr_31466_32794[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_31438[(4)]))){
var statearr_31467_32796 = state_31438;
(statearr_31467_32796[(1)] = cljs.core.first((state_31438[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32797 = state_31438;
state_31438 = G__32797;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__ = function(state_31438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1.call(this,state_31438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_31468 = f__31160__auto__();
(statearr_31468[(6)] = c__31159__auto__);

return statearr_31468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));

return c__31159__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31470 = arguments.length;
switch (G__31470) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31472 = arguments.length;
switch (G__31472) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31474 = arguments.length;
switch (G__31474) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31159__auto___32805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_31500){
var state_val_31501 = (state_31500[(1)]);
if((state_val_31501 === (7))){
var inst_31496 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
var statearr_31502_32806 = state_31500__$1;
(statearr_31502_32806[(2)] = inst_31496);

(statearr_31502_32806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (1))){
var state_31500__$1 = state_31500;
var statearr_31503_32807 = state_31500__$1;
(statearr_31503_32807[(2)] = null);

(statearr_31503_32807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (4))){
var inst_31477 = (state_31500[(7)]);
var inst_31477__$1 = (state_31500[(2)]);
var inst_31478 = (inst_31477__$1 == null);
var state_31500__$1 = (function (){var statearr_31504 = state_31500;
(statearr_31504[(7)] = inst_31477__$1);

return statearr_31504;
})();
if(cljs.core.truth_(inst_31478)){
var statearr_31505_32809 = state_31500__$1;
(statearr_31505_32809[(1)] = (5));

} else {
var statearr_31506_32810 = state_31500__$1;
(statearr_31506_32810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (13))){
var state_31500__$1 = state_31500;
var statearr_31507_32812 = state_31500__$1;
(statearr_31507_32812[(2)] = null);

(statearr_31507_32812[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (6))){
var inst_31477 = (state_31500[(7)]);
var inst_31483 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31477) : p.call(null,inst_31477));
var state_31500__$1 = state_31500;
if(cljs.core.truth_(inst_31483)){
var statearr_31508_32813 = state_31500__$1;
(statearr_31508_32813[(1)] = (9));

} else {
var statearr_31509_32814 = state_31500__$1;
(statearr_31509_32814[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (3))){
var inst_31498 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31500__$1,inst_31498);
} else {
if((state_val_31501 === (12))){
var state_31500__$1 = state_31500;
var statearr_31510_32815 = state_31500__$1;
(statearr_31510_32815[(2)] = null);

(statearr_31510_32815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (2))){
var state_31500__$1 = state_31500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31500__$1,(4),ch);
} else {
if((state_val_31501 === (11))){
var inst_31477 = (state_31500[(7)]);
var inst_31487 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31500__$1,(8),inst_31487,inst_31477);
} else {
if((state_val_31501 === (9))){
var state_31500__$1 = state_31500;
var statearr_31511_32816 = state_31500__$1;
(statearr_31511_32816[(2)] = tc);

(statearr_31511_32816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (5))){
var inst_31480 = cljs.core.async.close_BANG_(tc);
var inst_31481 = cljs.core.async.close_BANG_(fc);
var state_31500__$1 = (function (){var statearr_31512 = state_31500;
(statearr_31512[(8)] = inst_31480);

return statearr_31512;
})();
var statearr_31513_32818 = state_31500__$1;
(statearr_31513_32818[(2)] = inst_31481);

(statearr_31513_32818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (14))){
var inst_31494 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
var statearr_31514_32820 = state_31500__$1;
(statearr_31514_32820[(2)] = inst_31494);

(statearr_31514_32820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (10))){
var state_31500__$1 = state_31500;
var statearr_31515_32821 = state_31500__$1;
(statearr_31515_32821[(2)] = fc);

(statearr_31515_32821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (8))){
var inst_31489 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
if(cljs.core.truth_(inst_31489)){
var statearr_31516_32822 = state_31500__$1;
(statearr_31516_32822[(1)] = (12));

} else {
var statearr_31517_32823 = state_31500__$1;
(statearr_31517_32823[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31124__auto__ = null;
var cljs$core$async$state_machine__31124__auto____0 = (function (){
var statearr_31518 = [null,null,null,null,null,null,null,null,null];
(statearr_31518[(0)] = cljs$core$async$state_machine__31124__auto__);

(statearr_31518[(1)] = (1));

return statearr_31518;
});
var cljs$core$async$state_machine__31124__auto____1 = (function (state_31500){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_31500);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e31519){var ex__31127__auto__ = e31519;
var statearr_31520_32824 = state_31500;
(statearr_31520_32824[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_31500[(4)]))){
var statearr_31521_32825 = state_31500;
(statearr_31521_32825[(1)] = cljs.core.first((state_31500[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32826 = state_31500;
state_31500 = G__32826;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$state_machine__31124__auto__ = function(state_31500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31124__auto____1.call(this,state_31500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31124__auto____0;
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31124__auto____1;
return cljs$core$async$state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_31522 = f__31160__auto__();
(statearr_31522[(6)] = c__31159__auto___32805);

return statearr_31522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31159__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_31544){
var state_val_31545 = (state_31544[(1)]);
if((state_val_31545 === (7))){
var inst_31540 = (state_31544[(2)]);
var state_31544__$1 = state_31544;
var statearr_31546_32827 = state_31544__$1;
(statearr_31546_32827[(2)] = inst_31540);

(statearr_31546_32827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31545 === (1))){
var inst_31523 = init;
var inst_31524 = inst_31523;
var state_31544__$1 = (function (){var statearr_31547 = state_31544;
(statearr_31547[(7)] = inst_31524);

return statearr_31547;
})();
var statearr_31548_32830 = state_31544__$1;
(statearr_31548_32830[(2)] = null);

(statearr_31548_32830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31545 === (4))){
var inst_31527 = (state_31544[(8)]);
var inst_31527__$1 = (state_31544[(2)]);
var inst_31528 = (inst_31527__$1 == null);
var state_31544__$1 = (function (){var statearr_31549 = state_31544;
(statearr_31549[(8)] = inst_31527__$1);

return statearr_31549;
})();
if(cljs.core.truth_(inst_31528)){
var statearr_31550_32831 = state_31544__$1;
(statearr_31550_32831[(1)] = (5));

} else {
var statearr_31551_32832 = state_31544__$1;
(statearr_31551_32832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31545 === (6))){
var inst_31524 = (state_31544[(7)]);
var inst_31527 = (state_31544[(8)]);
var inst_31531 = (state_31544[(9)]);
var inst_31531__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31524,inst_31527) : f.call(null,inst_31524,inst_31527));
var inst_31532 = cljs.core.reduced_QMARK_(inst_31531__$1);
var state_31544__$1 = (function (){var statearr_31552 = state_31544;
(statearr_31552[(9)] = inst_31531__$1);

return statearr_31552;
})();
if(inst_31532){
var statearr_31553_32833 = state_31544__$1;
(statearr_31553_32833[(1)] = (8));

} else {
var statearr_31554_32834 = state_31544__$1;
(statearr_31554_32834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31545 === (3))){
var inst_31542 = (state_31544[(2)]);
var state_31544__$1 = state_31544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31544__$1,inst_31542);
} else {
if((state_val_31545 === (2))){
var state_31544__$1 = state_31544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31544__$1,(4),ch);
} else {
if((state_val_31545 === (9))){
var inst_31531 = (state_31544[(9)]);
var inst_31524 = inst_31531;
var state_31544__$1 = (function (){var statearr_31555 = state_31544;
(statearr_31555[(7)] = inst_31524);

return statearr_31555;
})();
var statearr_31556_32835 = state_31544__$1;
(statearr_31556_32835[(2)] = null);

(statearr_31556_32835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31545 === (5))){
var inst_31524 = (state_31544[(7)]);
var state_31544__$1 = state_31544;
var statearr_31557_32836 = state_31544__$1;
(statearr_31557_32836[(2)] = inst_31524);

(statearr_31557_32836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31545 === (10))){
var inst_31538 = (state_31544[(2)]);
var state_31544__$1 = state_31544;
var statearr_31558_32837 = state_31544__$1;
(statearr_31558_32837[(2)] = inst_31538);

(statearr_31558_32837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31545 === (8))){
var inst_31531 = (state_31544[(9)]);
var inst_31534 = cljs.core.deref(inst_31531);
var state_31544__$1 = state_31544;
var statearr_31559_32838 = state_31544__$1;
(statearr_31559_32838[(2)] = inst_31534);

(statearr_31559_32838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__31124__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31124__auto____0 = (function (){
var statearr_31560 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31560[(0)] = cljs$core$async$reduce_$_state_machine__31124__auto__);

(statearr_31560[(1)] = (1));

return statearr_31560;
});
var cljs$core$async$reduce_$_state_machine__31124__auto____1 = (function (state_31544){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_31544);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e31561){var ex__31127__auto__ = e31561;
var statearr_31562_32841 = state_31544;
(statearr_31562_32841[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_31544[(4)]))){
var statearr_31563_32842 = state_31544;
(statearr_31563_32842[(1)] = cljs.core.first((state_31544[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32843 = state_31544;
state_31544 = G__32843;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31124__auto__ = function(state_31544){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31124__auto____1.call(this,state_31544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31124__auto____0;
cljs$core$async$reduce_$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31124__auto____1;
return cljs$core$async$reduce_$_state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_31564 = f__31160__auto__();
(statearr_31564[(6)] = c__31159__auto__);

return statearr_31564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));

return c__31159__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31159__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_31570){
var state_val_31571 = (state_31570[(1)]);
if((state_val_31571 === (1))){
var inst_31565 = cljs.core.async.reduce(f__$1,init,ch);
var state_31570__$1 = state_31570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31570__$1,(2),inst_31565);
} else {
if((state_val_31571 === (2))){
var inst_31567 = (state_31570[(2)]);
var inst_31568 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31567) : f__$1.call(null,inst_31567));
var state_31570__$1 = state_31570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31570__$1,inst_31568);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31124__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31124__auto____0 = (function (){
var statearr_31572 = [null,null,null,null,null,null,null];
(statearr_31572[(0)] = cljs$core$async$transduce_$_state_machine__31124__auto__);

(statearr_31572[(1)] = (1));

return statearr_31572;
});
var cljs$core$async$transduce_$_state_machine__31124__auto____1 = (function (state_31570){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_31570);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e31573){var ex__31127__auto__ = e31573;
var statearr_31574_32844 = state_31570;
(statearr_31574_32844[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_31570[(4)]))){
var statearr_31575_32845 = state_31570;
(statearr_31575_32845[(1)] = cljs.core.first((state_31570[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32846 = state_31570;
state_31570 = G__32846;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31124__auto__ = function(state_31570){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31124__auto____1.call(this,state_31570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31124__auto____0;
cljs$core$async$transduce_$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31124__auto____1;
return cljs$core$async$transduce_$_state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_31576 = f__31160__auto__();
(statearr_31576[(6)] = c__31159__auto__);

return statearr_31576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));

return c__31159__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31578 = arguments.length;
switch (G__31578) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31159__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_31603){
var state_val_31604 = (state_31603[(1)]);
if((state_val_31604 === (7))){
var inst_31585 = (state_31603[(2)]);
var state_31603__$1 = state_31603;
var statearr_31605_32849 = state_31603__$1;
(statearr_31605_32849[(2)] = inst_31585);

(statearr_31605_32849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (1))){
var inst_31579 = cljs.core.seq(coll);
var inst_31580 = inst_31579;
var state_31603__$1 = (function (){var statearr_31606 = state_31603;
(statearr_31606[(7)] = inst_31580);

return statearr_31606;
})();
var statearr_31607_32850 = state_31603__$1;
(statearr_31607_32850[(2)] = null);

(statearr_31607_32850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (4))){
var inst_31580 = (state_31603[(7)]);
var inst_31583 = cljs.core.first(inst_31580);
var state_31603__$1 = state_31603;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31603__$1,(7),ch,inst_31583);
} else {
if((state_val_31604 === (13))){
var inst_31597 = (state_31603[(2)]);
var state_31603__$1 = state_31603;
var statearr_31608_32851 = state_31603__$1;
(statearr_31608_32851[(2)] = inst_31597);

(statearr_31608_32851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (6))){
var inst_31588 = (state_31603[(2)]);
var state_31603__$1 = state_31603;
if(cljs.core.truth_(inst_31588)){
var statearr_31609_32852 = state_31603__$1;
(statearr_31609_32852[(1)] = (8));

} else {
var statearr_31610_32853 = state_31603__$1;
(statearr_31610_32853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (3))){
var inst_31601 = (state_31603[(2)]);
var state_31603__$1 = state_31603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31603__$1,inst_31601);
} else {
if((state_val_31604 === (12))){
var state_31603__$1 = state_31603;
var statearr_31611_32854 = state_31603__$1;
(statearr_31611_32854[(2)] = null);

(statearr_31611_32854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (2))){
var inst_31580 = (state_31603[(7)]);
var state_31603__$1 = state_31603;
if(cljs.core.truth_(inst_31580)){
var statearr_31612_32855 = state_31603__$1;
(statearr_31612_32855[(1)] = (4));

} else {
var statearr_31613_32856 = state_31603__$1;
(statearr_31613_32856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (11))){
var inst_31594 = cljs.core.async.close_BANG_(ch);
var state_31603__$1 = state_31603;
var statearr_31614_32857 = state_31603__$1;
(statearr_31614_32857[(2)] = inst_31594);

(statearr_31614_32857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (9))){
var state_31603__$1 = state_31603;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31615_32858 = state_31603__$1;
(statearr_31615_32858[(1)] = (11));

} else {
var statearr_31616_32859 = state_31603__$1;
(statearr_31616_32859[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (5))){
var inst_31580 = (state_31603[(7)]);
var state_31603__$1 = state_31603;
var statearr_31617_32860 = state_31603__$1;
(statearr_31617_32860[(2)] = inst_31580);

(statearr_31617_32860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (10))){
var inst_31599 = (state_31603[(2)]);
var state_31603__$1 = state_31603;
var statearr_31618_32861 = state_31603__$1;
(statearr_31618_32861[(2)] = inst_31599);

(statearr_31618_32861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (8))){
var inst_31580 = (state_31603[(7)]);
var inst_31590 = cljs.core.next(inst_31580);
var inst_31580__$1 = inst_31590;
var state_31603__$1 = (function (){var statearr_31619 = state_31603;
(statearr_31619[(7)] = inst_31580__$1);

return statearr_31619;
})();
var statearr_31620_32862 = state_31603__$1;
(statearr_31620_32862[(2)] = null);

(statearr_31620_32862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31124__auto__ = null;
var cljs$core$async$state_machine__31124__auto____0 = (function (){
var statearr_31621 = [null,null,null,null,null,null,null,null];
(statearr_31621[(0)] = cljs$core$async$state_machine__31124__auto__);

(statearr_31621[(1)] = (1));

return statearr_31621;
});
var cljs$core$async$state_machine__31124__auto____1 = (function (state_31603){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_31603);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e31622){var ex__31127__auto__ = e31622;
var statearr_31623_32867 = state_31603;
(statearr_31623_32867[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_31603[(4)]))){
var statearr_31624_32868 = state_31603;
(statearr_31624_32868[(1)] = cljs.core.first((state_31603[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32869 = state_31603;
state_31603 = G__32869;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$state_machine__31124__auto__ = function(state_31603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31124__auto____1.call(this,state_31603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31124__auto____0;
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31124__auto____1;
return cljs$core$async$state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_31625 = f__31160__auto__();
(statearr_31625[(6)] = c__31159__auto__);

return statearr_31625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));

return c__31159__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31626 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31626 = (function (ch,cs,meta31627){
this.ch = ch;
this.cs = cs;
this.meta31627 = meta31627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31628,meta31627__$1){
var self__ = this;
var _31628__$1 = this;
return (new cljs.core.async.t_cljs$core$async31626(self__.ch,self__.cs,meta31627__$1));
}));

(cljs.core.async.t_cljs$core$async31626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31628){
var self__ = this;
var _31628__$1 = this;
return self__.meta31627;
}));

(cljs.core.async.t_cljs$core$async31626.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31626.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31626.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31626.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31626.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31626.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31627","meta31627",-1677181448,null)], null);
}));

(cljs.core.async.t_cljs$core$async31626.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31626");

(cljs.core.async.t_cljs$core$async31626.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31626");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31626.
 */
cljs.core.async.__GT_t_cljs$core$async31626 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31626(ch__$1,cs__$1,meta31627){
return (new cljs.core.async.t_cljs$core$async31626(ch__$1,cs__$1,meta31627));
});

}

return (new cljs.core.async.t_cljs$core$async31626(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31159__auto___32871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_31761){
var state_val_31762 = (state_31761[(1)]);
if((state_val_31762 === (7))){
var inst_31757 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31763_32872 = state_31761__$1;
(statearr_31763_32872[(2)] = inst_31757);

(statearr_31763_32872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (20))){
var inst_31662 = (state_31761[(7)]);
var inst_31674 = cljs.core.first(inst_31662);
var inst_31675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31674,(0),null);
var inst_31676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31674,(1),null);
var state_31761__$1 = (function (){var statearr_31764 = state_31761;
(statearr_31764[(8)] = inst_31675);

return statearr_31764;
})();
if(cljs.core.truth_(inst_31676)){
var statearr_31765_32874 = state_31761__$1;
(statearr_31765_32874[(1)] = (22));

} else {
var statearr_31766_32875 = state_31761__$1;
(statearr_31766_32875[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (27))){
var inst_31631 = (state_31761[(9)]);
var inst_31704 = (state_31761[(10)]);
var inst_31711 = (state_31761[(11)]);
var inst_31706 = (state_31761[(12)]);
var inst_31711__$1 = cljs.core._nth(inst_31704,inst_31706);
var inst_31712 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31711__$1,inst_31631,done);
var state_31761__$1 = (function (){var statearr_31767 = state_31761;
(statearr_31767[(11)] = inst_31711__$1);

return statearr_31767;
})();
if(cljs.core.truth_(inst_31712)){
var statearr_31768_32876 = state_31761__$1;
(statearr_31768_32876[(1)] = (30));

} else {
var statearr_31769_32877 = state_31761__$1;
(statearr_31769_32877[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (1))){
var state_31761__$1 = state_31761;
var statearr_31770_32878 = state_31761__$1;
(statearr_31770_32878[(2)] = null);

(statearr_31770_32878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (24))){
var inst_31662 = (state_31761[(7)]);
var inst_31681 = (state_31761[(2)]);
var inst_31682 = cljs.core.next(inst_31662);
var inst_31640 = inst_31682;
var inst_31641 = null;
var inst_31642 = (0);
var inst_31643 = (0);
var state_31761__$1 = (function (){var statearr_31771 = state_31761;
(statearr_31771[(13)] = inst_31681);

(statearr_31771[(14)] = inst_31641);

(statearr_31771[(15)] = inst_31642);

(statearr_31771[(16)] = inst_31640);

(statearr_31771[(17)] = inst_31643);

return statearr_31771;
})();
var statearr_31772_32879 = state_31761__$1;
(statearr_31772_32879[(2)] = null);

(statearr_31772_32879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (39))){
var state_31761__$1 = state_31761;
var statearr_31776_32880 = state_31761__$1;
(statearr_31776_32880[(2)] = null);

(statearr_31776_32880[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (4))){
var inst_31631 = (state_31761[(9)]);
var inst_31631__$1 = (state_31761[(2)]);
var inst_31632 = (inst_31631__$1 == null);
var state_31761__$1 = (function (){var statearr_31777 = state_31761;
(statearr_31777[(9)] = inst_31631__$1);

return statearr_31777;
})();
if(cljs.core.truth_(inst_31632)){
var statearr_31778_32881 = state_31761__$1;
(statearr_31778_32881[(1)] = (5));

} else {
var statearr_31779_32882 = state_31761__$1;
(statearr_31779_32882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (15))){
var inst_31641 = (state_31761[(14)]);
var inst_31642 = (state_31761[(15)]);
var inst_31640 = (state_31761[(16)]);
var inst_31643 = (state_31761[(17)]);
var inst_31658 = (state_31761[(2)]);
var inst_31659 = (inst_31643 + (1));
var tmp31773 = inst_31641;
var tmp31774 = inst_31642;
var tmp31775 = inst_31640;
var inst_31640__$1 = tmp31775;
var inst_31641__$1 = tmp31773;
var inst_31642__$1 = tmp31774;
var inst_31643__$1 = inst_31659;
var state_31761__$1 = (function (){var statearr_31780 = state_31761;
(statearr_31780[(18)] = inst_31658);

(statearr_31780[(14)] = inst_31641__$1);

(statearr_31780[(15)] = inst_31642__$1);

(statearr_31780[(16)] = inst_31640__$1);

(statearr_31780[(17)] = inst_31643__$1);

return statearr_31780;
})();
var statearr_31781_32887 = state_31761__$1;
(statearr_31781_32887[(2)] = null);

(statearr_31781_32887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (21))){
var inst_31685 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31785_32888 = state_31761__$1;
(statearr_31785_32888[(2)] = inst_31685);

(statearr_31785_32888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (31))){
var inst_31711 = (state_31761[(11)]);
var inst_31715 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31711);
var state_31761__$1 = state_31761;
var statearr_31786_32892 = state_31761__$1;
(statearr_31786_32892[(2)] = inst_31715);

(statearr_31786_32892[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (32))){
var inst_31704 = (state_31761[(10)]);
var inst_31705 = (state_31761[(19)]);
var inst_31703 = (state_31761[(20)]);
var inst_31706 = (state_31761[(12)]);
var inst_31717 = (state_31761[(2)]);
var inst_31718 = (inst_31706 + (1));
var tmp31782 = inst_31704;
var tmp31783 = inst_31705;
var tmp31784 = inst_31703;
var inst_31703__$1 = tmp31784;
var inst_31704__$1 = tmp31782;
var inst_31705__$1 = tmp31783;
var inst_31706__$1 = inst_31718;
var state_31761__$1 = (function (){var statearr_31787 = state_31761;
(statearr_31787[(10)] = inst_31704__$1);

(statearr_31787[(19)] = inst_31705__$1);

(statearr_31787[(21)] = inst_31717);

(statearr_31787[(20)] = inst_31703__$1);

(statearr_31787[(12)] = inst_31706__$1);

return statearr_31787;
})();
var statearr_31788_32896 = state_31761__$1;
(statearr_31788_32896[(2)] = null);

(statearr_31788_32896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (40))){
var inst_31730 = (state_31761[(22)]);
var inst_31734 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31730);
var state_31761__$1 = state_31761;
var statearr_31789_32897 = state_31761__$1;
(statearr_31789_32897[(2)] = inst_31734);

(statearr_31789_32897[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (33))){
var inst_31721 = (state_31761[(23)]);
var inst_31723 = cljs.core.chunked_seq_QMARK_(inst_31721);
var state_31761__$1 = state_31761;
if(inst_31723){
var statearr_31790_32901 = state_31761__$1;
(statearr_31790_32901[(1)] = (36));

} else {
var statearr_31791_32902 = state_31761__$1;
(statearr_31791_32902[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (13))){
var inst_31652 = (state_31761[(24)]);
var inst_31655 = cljs.core.async.close_BANG_(inst_31652);
var state_31761__$1 = state_31761;
var statearr_31792_32903 = state_31761__$1;
(statearr_31792_32903[(2)] = inst_31655);

(statearr_31792_32903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (22))){
var inst_31675 = (state_31761[(8)]);
var inst_31678 = cljs.core.async.close_BANG_(inst_31675);
var state_31761__$1 = state_31761;
var statearr_31793_32904 = state_31761__$1;
(statearr_31793_32904[(2)] = inst_31678);

(statearr_31793_32904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (36))){
var inst_31721 = (state_31761[(23)]);
var inst_31725 = cljs.core.chunk_first(inst_31721);
var inst_31726 = cljs.core.chunk_rest(inst_31721);
var inst_31727 = cljs.core.count(inst_31725);
var inst_31703 = inst_31726;
var inst_31704 = inst_31725;
var inst_31705 = inst_31727;
var inst_31706 = (0);
var state_31761__$1 = (function (){var statearr_31794 = state_31761;
(statearr_31794[(10)] = inst_31704);

(statearr_31794[(19)] = inst_31705);

(statearr_31794[(20)] = inst_31703);

(statearr_31794[(12)] = inst_31706);

return statearr_31794;
})();
var statearr_31795_32908 = state_31761__$1;
(statearr_31795_32908[(2)] = null);

(statearr_31795_32908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (41))){
var inst_31721 = (state_31761[(23)]);
var inst_31736 = (state_31761[(2)]);
var inst_31737 = cljs.core.next(inst_31721);
var inst_31703 = inst_31737;
var inst_31704 = null;
var inst_31705 = (0);
var inst_31706 = (0);
var state_31761__$1 = (function (){var statearr_31796 = state_31761;
(statearr_31796[(10)] = inst_31704);

(statearr_31796[(19)] = inst_31705);

(statearr_31796[(25)] = inst_31736);

(statearr_31796[(20)] = inst_31703);

(statearr_31796[(12)] = inst_31706);

return statearr_31796;
})();
var statearr_31797_32909 = state_31761__$1;
(statearr_31797_32909[(2)] = null);

(statearr_31797_32909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (43))){
var state_31761__$1 = state_31761;
var statearr_31798_32914 = state_31761__$1;
(statearr_31798_32914[(2)] = null);

(statearr_31798_32914[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (29))){
var inst_31745 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31799_32915 = state_31761__$1;
(statearr_31799_32915[(2)] = inst_31745);

(statearr_31799_32915[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (44))){
var inst_31754 = (state_31761[(2)]);
var state_31761__$1 = (function (){var statearr_31800 = state_31761;
(statearr_31800[(26)] = inst_31754);

return statearr_31800;
})();
var statearr_31801_32919 = state_31761__$1;
(statearr_31801_32919[(2)] = null);

(statearr_31801_32919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (6))){
var inst_31695 = (state_31761[(27)]);
var inst_31694 = cljs.core.deref(cs);
var inst_31695__$1 = cljs.core.keys(inst_31694);
var inst_31696 = cljs.core.count(inst_31695__$1);
var inst_31697 = cljs.core.reset_BANG_(dctr,inst_31696);
var inst_31702 = cljs.core.seq(inst_31695__$1);
var inst_31703 = inst_31702;
var inst_31704 = null;
var inst_31705 = (0);
var inst_31706 = (0);
var state_31761__$1 = (function (){var statearr_31802 = state_31761;
(statearr_31802[(10)] = inst_31704);

(statearr_31802[(19)] = inst_31705);

(statearr_31802[(28)] = inst_31697);

(statearr_31802[(20)] = inst_31703);

(statearr_31802[(27)] = inst_31695__$1);

(statearr_31802[(12)] = inst_31706);

return statearr_31802;
})();
var statearr_31803_32923 = state_31761__$1;
(statearr_31803_32923[(2)] = null);

(statearr_31803_32923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (28))){
var inst_31721 = (state_31761[(23)]);
var inst_31703 = (state_31761[(20)]);
var inst_31721__$1 = cljs.core.seq(inst_31703);
var state_31761__$1 = (function (){var statearr_31804 = state_31761;
(statearr_31804[(23)] = inst_31721__$1);

return statearr_31804;
})();
if(inst_31721__$1){
var statearr_31805_32927 = state_31761__$1;
(statearr_31805_32927[(1)] = (33));

} else {
var statearr_31806_32928 = state_31761__$1;
(statearr_31806_32928[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (25))){
var inst_31705 = (state_31761[(19)]);
var inst_31706 = (state_31761[(12)]);
var inst_31708 = (inst_31706 < inst_31705);
var inst_31709 = inst_31708;
var state_31761__$1 = state_31761;
if(cljs.core.truth_(inst_31709)){
var statearr_31807_32929 = state_31761__$1;
(statearr_31807_32929[(1)] = (27));

} else {
var statearr_31808_32930 = state_31761__$1;
(statearr_31808_32930[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (34))){
var state_31761__$1 = state_31761;
var statearr_31809_32931 = state_31761__$1;
(statearr_31809_32931[(2)] = null);

(statearr_31809_32931[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (17))){
var state_31761__$1 = state_31761;
var statearr_31810_32935 = state_31761__$1;
(statearr_31810_32935[(2)] = null);

(statearr_31810_32935[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (3))){
var inst_31759 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31761__$1,inst_31759);
} else {
if((state_val_31762 === (12))){
var inst_31690 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31811_32936 = state_31761__$1;
(statearr_31811_32936[(2)] = inst_31690);

(statearr_31811_32936[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (2))){
var state_31761__$1 = state_31761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31761__$1,(4),ch);
} else {
if((state_val_31762 === (23))){
var state_31761__$1 = state_31761;
var statearr_31812_32937 = state_31761__$1;
(statearr_31812_32937[(2)] = null);

(statearr_31812_32937[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (35))){
var inst_31743 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31813_32938 = state_31761__$1;
(statearr_31813_32938[(2)] = inst_31743);

(statearr_31813_32938[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (19))){
var inst_31662 = (state_31761[(7)]);
var inst_31666 = cljs.core.chunk_first(inst_31662);
var inst_31667 = cljs.core.chunk_rest(inst_31662);
var inst_31668 = cljs.core.count(inst_31666);
var inst_31640 = inst_31667;
var inst_31641 = inst_31666;
var inst_31642 = inst_31668;
var inst_31643 = (0);
var state_31761__$1 = (function (){var statearr_31814 = state_31761;
(statearr_31814[(14)] = inst_31641);

(statearr_31814[(15)] = inst_31642);

(statearr_31814[(16)] = inst_31640);

(statearr_31814[(17)] = inst_31643);

return statearr_31814;
})();
var statearr_31815_32940 = state_31761__$1;
(statearr_31815_32940[(2)] = null);

(statearr_31815_32940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (11))){
var inst_31662 = (state_31761[(7)]);
var inst_31640 = (state_31761[(16)]);
var inst_31662__$1 = cljs.core.seq(inst_31640);
var state_31761__$1 = (function (){var statearr_31816 = state_31761;
(statearr_31816[(7)] = inst_31662__$1);

return statearr_31816;
})();
if(inst_31662__$1){
var statearr_31817_32941 = state_31761__$1;
(statearr_31817_32941[(1)] = (16));

} else {
var statearr_31818_32942 = state_31761__$1;
(statearr_31818_32942[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (9))){
var inst_31692 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31819_32943 = state_31761__$1;
(statearr_31819_32943[(2)] = inst_31692);

(statearr_31819_32943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (5))){
var inst_31638 = cljs.core.deref(cs);
var inst_31639 = cljs.core.seq(inst_31638);
var inst_31640 = inst_31639;
var inst_31641 = null;
var inst_31642 = (0);
var inst_31643 = (0);
var state_31761__$1 = (function (){var statearr_31820 = state_31761;
(statearr_31820[(14)] = inst_31641);

(statearr_31820[(15)] = inst_31642);

(statearr_31820[(16)] = inst_31640);

(statearr_31820[(17)] = inst_31643);

return statearr_31820;
})();
var statearr_31821_32944 = state_31761__$1;
(statearr_31821_32944[(2)] = null);

(statearr_31821_32944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (14))){
var state_31761__$1 = state_31761;
var statearr_31822_32945 = state_31761__$1;
(statearr_31822_32945[(2)] = null);

(statearr_31822_32945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (45))){
var inst_31751 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31823_32946 = state_31761__$1;
(statearr_31823_32946[(2)] = inst_31751);

(statearr_31823_32946[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (26))){
var inst_31695 = (state_31761[(27)]);
var inst_31747 = (state_31761[(2)]);
var inst_31748 = cljs.core.seq(inst_31695);
var state_31761__$1 = (function (){var statearr_31824 = state_31761;
(statearr_31824[(29)] = inst_31747);

return statearr_31824;
})();
if(inst_31748){
var statearr_31825_32947 = state_31761__$1;
(statearr_31825_32947[(1)] = (42));

} else {
var statearr_31826_32948 = state_31761__$1;
(statearr_31826_32948[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (16))){
var inst_31662 = (state_31761[(7)]);
var inst_31664 = cljs.core.chunked_seq_QMARK_(inst_31662);
var state_31761__$1 = state_31761;
if(inst_31664){
var statearr_31827_32949 = state_31761__$1;
(statearr_31827_32949[(1)] = (19));

} else {
var statearr_31828_32950 = state_31761__$1;
(statearr_31828_32950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (38))){
var inst_31740 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31829_32951 = state_31761__$1;
(statearr_31829_32951[(2)] = inst_31740);

(statearr_31829_32951[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (30))){
var state_31761__$1 = state_31761;
var statearr_31830_32952 = state_31761__$1;
(statearr_31830_32952[(2)] = null);

(statearr_31830_32952[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (10))){
var inst_31641 = (state_31761[(14)]);
var inst_31643 = (state_31761[(17)]);
var inst_31651 = cljs.core._nth(inst_31641,inst_31643);
var inst_31652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31651,(0),null);
var inst_31653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31651,(1),null);
var state_31761__$1 = (function (){var statearr_31831 = state_31761;
(statearr_31831[(24)] = inst_31652);

return statearr_31831;
})();
if(cljs.core.truth_(inst_31653)){
var statearr_31832_32953 = state_31761__$1;
(statearr_31832_32953[(1)] = (13));

} else {
var statearr_31833_32954 = state_31761__$1;
(statearr_31833_32954[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (18))){
var inst_31688 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31834_32955 = state_31761__$1;
(statearr_31834_32955[(2)] = inst_31688);

(statearr_31834_32955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (42))){
var state_31761__$1 = state_31761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31761__$1,(45),dchan);
} else {
if((state_val_31762 === (37))){
var inst_31631 = (state_31761[(9)]);
var inst_31721 = (state_31761[(23)]);
var inst_31730 = (state_31761[(22)]);
var inst_31730__$1 = cljs.core.first(inst_31721);
var inst_31731 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31730__$1,inst_31631,done);
var state_31761__$1 = (function (){var statearr_31835 = state_31761;
(statearr_31835[(22)] = inst_31730__$1);

return statearr_31835;
})();
if(cljs.core.truth_(inst_31731)){
var statearr_31836_32956 = state_31761__$1;
(statearr_31836_32956[(1)] = (39));

} else {
var statearr_31837_32957 = state_31761__$1;
(statearr_31837_32957[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (8))){
var inst_31642 = (state_31761[(15)]);
var inst_31643 = (state_31761[(17)]);
var inst_31645 = (inst_31643 < inst_31642);
var inst_31646 = inst_31645;
var state_31761__$1 = state_31761;
if(cljs.core.truth_(inst_31646)){
var statearr_31838_32958 = state_31761__$1;
(statearr_31838_32958[(1)] = (10));

} else {
var statearr_31839_32959 = state_31761__$1;
(statearr_31839_32959[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__31124__auto__ = null;
var cljs$core$async$mult_$_state_machine__31124__auto____0 = (function (){
var statearr_31840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31840[(0)] = cljs$core$async$mult_$_state_machine__31124__auto__);

(statearr_31840[(1)] = (1));

return statearr_31840;
});
var cljs$core$async$mult_$_state_machine__31124__auto____1 = (function (state_31761){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_31761);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e31841){var ex__31127__auto__ = e31841;
var statearr_31842_32960 = state_31761;
(statearr_31842_32960[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_31761[(4)]))){
var statearr_31843_32962 = state_31761;
(statearr_31843_32962[(1)] = cljs.core.first((state_31761[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32965 = state_31761;
state_31761 = G__32965;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31124__auto__ = function(state_31761){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31124__auto____1.call(this,state_31761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31124__auto____0;
cljs$core$async$mult_$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31124__auto____1;
return cljs$core$async$mult_$_state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_31844 = f__31160__auto__();
(statearr_31844[(6)] = c__31159__auto___32871);

return statearr_31844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31846 = arguments.length;
switch (G__31846) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32979 = arguments.length;
var i__4790__auto___32980 = (0);
while(true){
if((i__4790__auto___32980 < len__4789__auto___32979)){
args__4795__auto__.push((arguments[i__4790__auto___32980]));

var G__32983 = (i__4790__auto___32980 + (1));
i__4790__auto___32980 = G__32983;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31851){
var map__31852 = p__31851;
var map__31852__$1 = (((((!((map__31852 == null))))?(((((map__31852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31852):map__31852);
var opts = map__31852__$1;
var statearr_31854_32984 = state;
(statearr_31854_32984[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31855_32988 = state;
(statearr_31855_32988[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31856_32993 = state;
(statearr_31856_32993[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31847){
var G__31848 = cljs.core.first(seq31847);
var seq31847__$1 = cljs.core.next(seq31847);
var G__31849 = cljs.core.first(seq31847__$1);
var seq31847__$2 = cljs.core.next(seq31847__$1);
var G__31850 = cljs.core.first(seq31847__$2);
var seq31847__$3 = cljs.core.next(seq31847__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31848,G__31849,G__31850,seq31847__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31857 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31858){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31858 = meta31858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31859,meta31858__$1){
var self__ = this;
var _31859__$1 = this;
return (new cljs.core.async.t_cljs$core$async31857(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31858__$1));
}));

(cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31859){
var self__ = this;
var _31859__$1 = this;
return self__.meta31858;
}));

(cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31858","meta31858",805916421,null)], null);
}));

(cljs.core.async.t_cljs$core$async31857.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31857");

(cljs.core.async.t_cljs$core$async31857.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31857");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31857.
 */
cljs.core.async.__GT_t_cljs$core$async31857 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31857(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31858){
return (new cljs.core.async.t_cljs$core$async31857(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31858));
});

}

return (new cljs.core.async.t_cljs$core$async31857(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31159__auto___33006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_31961){
var state_val_31962 = (state_31961[(1)]);
if((state_val_31962 === (7))){
var inst_31876 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31963_33007 = state_31961__$1;
(statearr_31963_33007[(2)] = inst_31876);

(statearr_31963_33007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (20))){
var inst_31888 = (state_31961[(7)]);
var state_31961__$1 = state_31961;
var statearr_31964_33008 = state_31961__$1;
(statearr_31964_33008[(2)] = inst_31888);

(statearr_31964_33008[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (27))){
var state_31961__$1 = state_31961;
var statearr_31965_33009 = state_31961__$1;
(statearr_31965_33009[(2)] = null);

(statearr_31965_33009[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (1))){
var inst_31863 = (state_31961[(8)]);
var inst_31863__$1 = calc_state();
var inst_31865 = (inst_31863__$1 == null);
var inst_31866 = cljs.core.not(inst_31865);
var state_31961__$1 = (function (){var statearr_31966 = state_31961;
(statearr_31966[(8)] = inst_31863__$1);

return statearr_31966;
})();
if(inst_31866){
var statearr_31967_33010 = state_31961__$1;
(statearr_31967_33010[(1)] = (2));

} else {
var statearr_31968_33011 = state_31961__$1;
(statearr_31968_33011[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (24))){
var inst_31921 = (state_31961[(9)]);
var inst_31912 = (state_31961[(10)]);
var inst_31935 = (state_31961[(11)]);
var inst_31935__$1 = (inst_31912.cljs$core$IFn$_invoke$arity$1 ? inst_31912.cljs$core$IFn$_invoke$arity$1(inst_31921) : inst_31912.call(null,inst_31921));
var state_31961__$1 = (function (){var statearr_31969 = state_31961;
(statearr_31969[(11)] = inst_31935__$1);

return statearr_31969;
})();
if(cljs.core.truth_(inst_31935__$1)){
var statearr_31970_33012 = state_31961__$1;
(statearr_31970_33012[(1)] = (29));

} else {
var statearr_31971_33013 = state_31961__$1;
(statearr_31971_33013[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (4))){
var inst_31879 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
if(cljs.core.truth_(inst_31879)){
var statearr_31972_33020 = state_31961__$1;
(statearr_31972_33020[(1)] = (8));

} else {
var statearr_31973_33021 = state_31961__$1;
(statearr_31973_33021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (15))){
var inst_31906 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
if(cljs.core.truth_(inst_31906)){
var statearr_31974_33022 = state_31961__$1;
(statearr_31974_33022[(1)] = (19));

} else {
var statearr_31975_33023 = state_31961__$1;
(statearr_31975_33023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (21))){
var inst_31911 = (state_31961[(12)]);
var inst_31911__$1 = (state_31961[(2)]);
var inst_31912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31911__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31911__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31911__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31961__$1 = (function (){var statearr_31976 = state_31961;
(statearr_31976[(10)] = inst_31912);

(statearr_31976[(12)] = inst_31911__$1);

(statearr_31976[(13)] = inst_31913);

return statearr_31976;
})();
return cljs.core.async.ioc_alts_BANG_(state_31961__$1,(22),inst_31914);
} else {
if((state_val_31962 === (31))){
var inst_31943 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
if(cljs.core.truth_(inst_31943)){
var statearr_31977_33024 = state_31961__$1;
(statearr_31977_33024[(1)] = (32));

} else {
var statearr_31978_33025 = state_31961__$1;
(statearr_31978_33025[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (32))){
var inst_31920 = (state_31961[(14)]);
var state_31961__$1 = state_31961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31961__$1,(35),out,inst_31920);
} else {
if((state_val_31962 === (33))){
var inst_31911 = (state_31961[(12)]);
var inst_31888 = inst_31911;
var state_31961__$1 = (function (){var statearr_31979 = state_31961;
(statearr_31979[(7)] = inst_31888);

return statearr_31979;
})();
var statearr_31980_33026 = state_31961__$1;
(statearr_31980_33026[(2)] = null);

(statearr_31980_33026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (13))){
var inst_31888 = (state_31961[(7)]);
var inst_31895 = inst_31888.cljs$lang$protocol_mask$partition0$;
var inst_31896 = (inst_31895 & (64));
var inst_31897 = inst_31888.cljs$core$ISeq$;
var inst_31898 = (cljs.core.PROTOCOL_SENTINEL === inst_31897);
var inst_31899 = ((inst_31896) || (inst_31898));
var state_31961__$1 = state_31961;
if(cljs.core.truth_(inst_31899)){
var statearr_31981_33027 = state_31961__$1;
(statearr_31981_33027[(1)] = (16));

} else {
var statearr_31982_33028 = state_31961__$1;
(statearr_31982_33028[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (22))){
var inst_31921 = (state_31961[(9)]);
var inst_31920 = (state_31961[(14)]);
var inst_31919 = (state_31961[(2)]);
var inst_31920__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31919,(0),null);
var inst_31921__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31919,(1),null);
var inst_31922 = (inst_31920__$1 == null);
var inst_31923 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31921__$1,change);
var inst_31924 = ((inst_31922) || (inst_31923));
var state_31961__$1 = (function (){var statearr_31983 = state_31961;
(statearr_31983[(9)] = inst_31921__$1);

(statearr_31983[(14)] = inst_31920__$1);

return statearr_31983;
})();
if(cljs.core.truth_(inst_31924)){
var statearr_31984_33029 = state_31961__$1;
(statearr_31984_33029[(1)] = (23));

} else {
var statearr_31985_33030 = state_31961__$1;
(statearr_31985_33030[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (36))){
var inst_31911 = (state_31961[(12)]);
var inst_31888 = inst_31911;
var state_31961__$1 = (function (){var statearr_31986 = state_31961;
(statearr_31986[(7)] = inst_31888);

return statearr_31986;
})();
var statearr_31987_33037 = state_31961__$1;
(statearr_31987_33037[(2)] = null);

(statearr_31987_33037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (29))){
var inst_31935 = (state_31961[(11)]);
var state_31961__$1 = state_31961;
var statearr_31988_33038 = state_31961__$1;
(statearr_31988_33038[(2)] = inst_31935);

(statearr_31988_33038[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (6))){
var state_31961__$1 = state_31961;
var statearr_31989_33039 = state_31961__$1;
(statearr_31989_33039[(2)] = false);

(statearr_31989_33039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (28))){
var inst_31931 = (state_31961[(2)]);
var inst_31932 = calc_state();
var inst_31888 = inst_31932;
var state_31961__$1 = (function (){var statearr_31990 = state_31961;
(statearr_31990[(7)] = inst_31888);

(statearr_31990[(15)] = inst_31931);

return statearr_31990;
})();
var statearr_31991_33040 = state_31961__$1;
(statearr_31991_33040[(2)] = null);

(statearr_31991_33040[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (25))){
var inst_31957 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31992_33041 = state_31961__$1;
(statearr_31992_33041[(2)] = inst_31957);

(statearr_31992_33041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (34))){
var inst_31955 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31993_33042 = state_31961__$1;
(statearr_31993_33042[(2)] = inst_31955);

(statearr_31993_33042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (17))){
var state_31961__$1 = state_31961;
var statearr_31994_33043 = state_31961__$1;
(statearr_31994_33043[(2)] = false);

(statearr_31994_33043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (3))){
var state_31961__$1 = state_31961;
var statearr_31995_33044 = state_31961__$1;
(statearr_31995_33044[(2)] = false);

(statearr_31995_33044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (12))){
var inst_31959 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31961__$1,inst_31959);
} else {
if((state_val_31962 === (2))){
var inst_31863 = (state_31961[(8)]);
var inst_31868 = inst_31863.cljs$lang$protocol_mask$partition0$;
var inst_31869 = (inst_31868 & (64));
var inst_31870 = inst_31863.cljs$core$ISeq$;
var inst_31871 = (cljs.core.PROTOCOL_SENTINEL === inst_31870);
var inst_31872 = ((inst_31869) || (inst_31871));
var state_31961__$1 = state_31961;
if(cljs.core.truth_(inst_31872)){
var statearr_31996_33045 = state_31961__$1;
(statearr_31996_33045[(1)] = (5));

} else {
var statearr_31997_33046 = state_31961__$1;
(statearr_31997_33046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (23))){
var inst_31920 = (state_31961[(14)]);
var inst_31926 = (inst_31920 == null);
var state_31961__$1 = state_31961;
if(cljs.core.truth_(inst_31926)){
var statearr_31998_33047 = state_31961__$1;
(statearr_31998_33047[(1)] = (26));

} else {
var statearr_31999_33048 = state_31961__$1;
(statearr_31999_33048[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (35))){
var inst_31946 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
if(cljs.core.truth_(inst_31946)){
var statearr_32000_33049 = state_31961__$1;
(statearr_32000_33049[(1)] = (36));

} else {
var statearr_32001_33050 = state_31961__$1;
(statearr_32001_33050[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (19))){
var inst_31888 = (state_31961[(7)]);
var inst_31908 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31888);
var state_31961__$1 = state_31961;
var statearr_32002_33051 = state_31961__$1;
(statearr_32002_33051[(2)] = inst_31908);

(statearr_32002_33051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (11))){
var inst_31888 = (state_31961[(7)]);
var inst_31892 = (inst_31888 == null);
var inst_31893 = cljs.core.not(inst_31892);
var state_31961__$1 = state_31961;
if(inst_31893){
var statearr_32003_33052 = state_31961__$1;
(statearr_32003_33052[(1)] = (13));

} else {
var statearr_32004_33053 = state_31961__$1;
(statearr_32004_33053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (9))){
var inst_31863 = (state_31961[(8)]);
var state_31961__$1 = state_31961;
var statearr_32005_33054 = state_31961__$1;
(statearr_32005_33054[(2)] = inst_31863);

(statearr_32005_33054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (5))){
var state_31961__$1 = state_31961;
var statearr_32006_33055 = state_31961__$1;
(statearr_32006_33055[(2)] = true);

(statearr_32006_33055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (14))){
var state_31961__$1 = state_31961;
var statearr_32007_33056 = state_31961__$1;
(statearr_32007_33056[(2)] = false);

(statearr_32007_33056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (26))){
var inst_31921 = (state_31961[(9)]);
var inst_31928 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31921);
var state_31961__$1 = state_31961;
var statearr_32008_33057 = state_31961__$1;
(statearr_32008_33057[(2)] = inst_31928);

(statearr_32008_33057[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (16))){
var state_31961__$1 = state_31961;
var statearr_32009_33058 = state_31961__$1;
(statearr_32009_33058[(2)] = true);

(statearr_32009_33058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (38))){
var inst_31951 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_32010_33059 = state_31961__$1;
(statearr_32010_33059[(2)] = inst_31951);

(statearr_32010_33059[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (30))){
var inst_31921 = (state_31961[(9)]);
var inst_31912 = (state_31961[(10)]);
var inst_31913 = (state_31961[(13)]);
var inst_31938 = cljs.core.empty_QMARK_(inst_31912);
var inst_31939 = (inst_31913.cljs$core$IFn$_invoke$arity$1 ? inst_31913.cljs$core$IFn$_invoke$arity$1(inst_31921) : inst_31913.call(null,inst_31921));
var inst_31940 = cljs.core.not(inst_31939);
var inst_31941 = ((inst_31938) && (inst_31940));
var state_31961__$1 = state_31961;
var statearr_32011_33060 = state_31961__$1;
(statearr_32011_33060[(2)] = inst_31941);

(statearr_32011_33060[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (10))){
var inst_31863 = (state_31961[(8)]);
var inst_31884 = (state_31961[(2)]);
var inst_31885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31884,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31884,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31884,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31888 = inst_31863;
var state_31961__$1 = (function (){var statearr_32012 = state_31961;
(statearr_32012[(16)] = inst_31886);

(statearr_32012[(7)] = inst_31888);

(statearr_32012[(17)] = inst_31885);

(statearr_32012[(18)] = inst_31887);

return statearr_32012;
})();
var statearr_32013_33061 = state_31961__$1;
(statearr_32013_33061[(2)] = null);

(statearr_32013_33061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (18))){
var inst_31903 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_32014_33063 = state_31961__$1;
(statearr_32014_33063[(2)] = inst_31903);

(statearr_32014_33063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (37))){
var state_31961__$1 = state_31961;
var statearr_32015_33064 = state_31961__$1;
(statearr_32015_33064[(2)] = null);

(statearr_32015_33064[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (8))){
var inst_31863 = (state_31961[(8)]);
var inst_31881 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31863);
var state_31961__$1 = state_31961;
var statearr_32016_33069 = state_31961__$1;
(statearr_32016_33069[(2)] = inst_31881);

(statearr_32016_33069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__31124__auto__ = null;
var cljs$core$async$mix_$_state_machine__31124__auto____0 = (function (){
var statearr_32017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32017[(0)] = cljs$core$async$mix_$_state_machine__31124__auto__);

(statearr_32017[(1)] = (1));

return statearr_32017;
});
var cljs$core$async$mix_$_state_machine__31124__auto____1 = (function (state_31961){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_31961);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e32018){var ex__31127__auto__ = e32018;
var statearr_32019_33070 = state_31961;
(statearr_32019_33070[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_31961[(4)]))){
var statearr_32020_33071 = state_31961;
(statearr_32020_33071[(1)] = cljs.core.first((state_31961[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33072 = state_31961;
state_31961 = G__33072;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31124__auto__ = function(state_31961){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31124__auto____1.call(this,state_31961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31124__auto____0;
cljs$core$async$mix_$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31124__auto____1;
return cljs$core$async$mix_$_state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_32021 = f__31160__auto__();
(statearr_32021[(6)] = c__31159__auto___33006);

return statearr_32021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32023 = arguments.length;
switch (G__32023) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32026 = arguments.length;
switch (G__32026) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32024_SHARP_){
if(cljs.core.truth_((p1__32024_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32024_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32024_SHARP_.call(null,topic)))){
return p1__32024_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32024_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32027 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32027 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32028){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32028 = meta32028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32029,meta32028__$1){
var self__ = this;
var _32029__$1 = this;
return (new cljs.core.async.t_cljs$core$async32027(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32028__$1));
}));

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32029){
var self__ = this;
var _32029__$1 = this;
return self__.meta32028;
}));

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32028","meta32028",-542964257,null)], null);
}));

(cljs.core.async.t_cljs$core$async32027.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32027");

(cljs.core.async.t_cljs$core$async32027.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32027");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32027.
 */
cljs.core.async.__GT_t_cljs$core$async32027 = (function cljs$core$async$__GT_t_cljs$core$async32027(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32028){
return (new cljs.core.async.t_cljs$core$async32027(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32028));
});

}

return (new cljs.core.async.t_cljs$core$async32027(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31159__auto___33081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_32101){
var state_val_32102 = (state_32101[(1)]);
if((state_val_32102 === (7))){
var inst_32097 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32103_33082 = state_32101__$1;
(statearr_32103_33082[(2)] = inst_32097);

(statearr_32103_33082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (20))){
var state_32101__$1 = state_32101;
var statearr_32104_33083 = state_32101__$1;
(statearr_32104_33083[(2)] = null);

(statearr_32104_33083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (1))){
var state_32101__$1 = state_32101;
var statearr_32105_33084 = state_32101__$1;
(statearr_32105_33084[(2)] = null);

(statearr_32105_33084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (24))){
var inst_32080 = (state_32101[(7)]);
var inst_32089 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32080);
var state_32101__$1 = state_32101;
var statearr_32106_33085 = state_32101__$1;
(statearr_32106_33085[(2)] = inst_32089);

(statearr_32106_33085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (4))){
var inst_32032 = (state_32101[(8)]);
var inst_32032__$1 = (state_32101[(2)]);
var inst_32033 = (inst_32032__$1 == null);
var state_32101__$1 = (function (){var statearr_32107 = state_32101;
(statearr_32107[(8)] = inst_32032__$1);

return statearr_32107;
})();
if(cljs.core.truth_(inst_32033)){
var statearr_32108_33086 = state_32101__$1;
(statearr_32108_33086[(1)] = (5));

} else {
var statearr_32109_33087 = state_32101__$1;
(statearr_32109_33087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (15))){
var inst_32074 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32110_33088 = state_32101__$1;
(statearr_32110_33088[(2)] = inst_32074);

(statearr_32110_33088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (21))){
var inst_32094 = (state_32101[(2)]);
var state_32101__$1 = (function (){var statearr_32111 = state_32101;
(statearr_32111[(9)] = inst_32094);

return statearr_32111;
})();
var statearr_32112_33089 = state_32101__$1;
(statearr_32112_33089[(2)] = null);

(statearr_32112_33089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (13))){
var inst_32056 = (state_32101[(10)]);
var inst_32058 = cljs.core.chunked_seq_QMARK_(inst_32056);
var state_32101__$1 = state_32101;
if(inst_32058){
var statearr_32113_33090 = state_32101__$1;
(statearr_32113_33090[(1)] = (16));

} else {
var statearr_32114_33091 = state_32101__$1;
(statearr_32114_33091[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (22))){
var inst_32086 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32086)){
var statearr_32115_33092 = state_32101__$1;
(statearr_32115_33092[(1)] = (23));

} else {
var statearr_32116_33093 = state_32101__$1;
(statearr_32116_33093[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (6))){
var inst_32032 = (state_32101[(8)]);
var inst_32082 = (state_32101[(11)]);
var inst_32080 = (state_32101[(7)]);
var inst_32080__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32032) : topic_fn.call(null,inst_32032));
var inst_32081 = cljs.core.deref(mults);
var inst_32082__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32081,inst_32080__$1);
var state_32101__$1 = (function (){var statearr_32117 = state_32101;
(statearr_32117[(11)] = inst_32082__$1);

(statearr_32117[(7)] = inst_32080__$1);

return statearr_32117;
})();
if(cljs.core.truth_(inst_32082__$1)){
var statearr_32118_33094 = state_32101__$1;
(statearr_32118_33094[(1)] = (19));

} else {
var statearr_32119_33096 = state_32101__$1;
(statearr_32119_33096[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (25))){
var inst_32091 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32120_33097 = state_32101__$1;
(statearr_32120_33097[(2)] = inst_32091);

(statearr_32120_33097[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (17))){
var inst_32056 = (state_32101[(10)]);
var inst_32065 = cljs.core.first(inst_32056);
var inst_32066 = cljs.core.async.muxch_STAR_(inst_32065);
var inst_32067 = cljs.core.async.close_BANG_(inst_32066);
var inst_32068 = cljs.core.next(inst_32056);
var inst_32042 = inst_32068;
var inst_32043 = null;
var inst_32044 = (0);
var inst_32045 = (0);
var state_32101__$1 = (function (){var statearr_32121 = state_32101;
(statearr_32121[(12)] = inst_32043);

(statearr_32121[(13)] = inst_32067);

(statearr_32121[(14)] = inst_32044);

(statearr_32121[(15)] = inst_32042);

(statearr_32121[(16)] = inst_32045);

return statearr_32121;
})();
var statearr_32122_33098 = state_32101__$1;
(statearr_32122_33098[(2)] = null);

(statearr_32122_33098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (3))){
var inst_32099 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32101__$1,inst_32099);
} else {
if((state_val_32102 === (12))){
var inst_32076 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32123_33103 = state_32101__$1;
(statearr_32123_33103[(2)] = inst_32076);

(statearr_32123_33103[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (2))){
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32101__$1,(4),ch);
} else {
if((state_val_32102 === (23))){
var state_32101__$1 = state_32101;
var statearr_32124_33104 = state_32101__$1;
(statearr_32124_33104[(2)] = null);

(statearr_32124_33104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (19))){
var inst_32032 = (state_32101[(8)]);
var inst_32082 = (state_32101[(11)]);
var inst_32084 = cljs.core.async.muxch_STAR_(inst_32082);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32101__$1,(22),inst_32084,inst_32032);
} else {
if((state_val_32102 === (11))){
var inst_32056 = (state_32101[(10)]);
var inst_32042 = (state_32101[(15)]);
var inst_32056__$1 = cljs.core.seq(inst_32042);
var state_32101__$1 = (function (){var statearr_32125 = state_32101;
(statearr_32125[(10)] = inst_32056__$1);

return statearr_32125;
})();
if(inst_32056__$1){
var statearr_32126_33105 = state_32101__$1;
(statearr_32126_33105[(1)] = (13));

} else {
var statearr_32127_33106 = state_32101__$1;
(statearr_32127_33106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (9))){
var inst_32078 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32128_33107 = state_32101__$1;
(statearr_32128_33107[(2)] = inst_32078);

(statearr_32128_33107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (5))){
var inst_32039 = cljs.core.deref(mults);
var inst_32040 = cljs.core.vals(inst_32039);
var inst_32041 = cljs.core.seq(inst_32040);
var inst_32042 = inst_32041;
var inst_32043 = null;
var inst_32044 = (0);
var inst_32045 = (0);
var state_32101__$1 = (function (){var statearr_32129 = state_32101;
(statearr_32129[(12)] = inst_32043);

(statearr_32129[(14)] = inst_32044);

(statearr_32129[(15)] = inst_32042);

(statearr_32129[(16)] = inst_32045);

return statearr_32129;
})();
var statearr_32130_33108 = state_32101__$1;
(statearr_32130_33108[(2)] = null);

(statearr_32130_33108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (14))){
var state_32101__$1 = state_32101;
var statearr_32134_33109 = state_32101__$1;
(statearr_32134_33109[(2)] = null);

(statearr_32134_33109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (16))){
var inst_32056 = (state_32101[(10)]);
var inst_32060 = cljs.core.chunk_first(inst_32056);
var inst_32061 = cljs.core.chunk_rest(inst_32056);
var inst_32062 = cljs.core.count(inst_32060);
var inst_32042 = inst_32061;
var inst_32043 = inst_32060;
var inst_32044 = inst_32062;
var inst_32045 = (0);
var state_32101__$1 = (function (){var statearr_32135 = state_32101;
(statearr_32135[(12)] = inst_32043);

(statearr_32135[(14)] = inst_32044);

(statearr_32135[(15)] = inst_32042);

(statearr_32135[(16)] = inst_32045);

return statearr_32135;
})();
var statearr_32136_33110 = state_32101__$1;
(statearr_32136_33110[(2)] = null);

(statearr_32136_33110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (10))){
var inst_32043 = (state_32101[(12)]);
var inst_32044 = (state_32101[(14)]);
var inst_32042 = (state_32101[(15)]);
var inst_32045 = (state_32101[(16)]);
var inst_32050 = cljs.core._nth(inst_32043,inst_32045);
var inst_32051 = cljs.core.async.muxch_STAR_(inst_32050);
var inst_32052 = cljs.core.async.close_BANG_(inst_32051);
var inst_32053 = (inst_32045 + (1));
var tmp32131 = inst_32043;
var tmp32132 = inst_32044;
var tmp32133 = inst_32042;
var inst_32042__$1 = tmp32133;
var inst_32043__$1 = tmp32131;
var inst_32044__$1 = tmp32132;
var inst_32045__$1 = inst_32053;
var state_32101__$1 = (function (){var statearr_32137 = state_32101;
(statearr_32137[(12)] = inst_32043__$1);

(statearr_32137[(17)] = inst_32052);

(statearr_32137[(14)] = inst_32044__$1);

(statearr_32137[(15)] = inst_32042__$1);

(statearr_32137[(16)] = inst_32045__$1);

return statearr_32137;
})();
var statearr_32138_33118 = state_32101__$1;
(statearr_32138_33118[(2)] = null);

(statearr_32138_33118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (18))){
var inst_32071 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32139_33119 = state_32101__$1;
(statearr_32139_33119[(2)] = inst_32071);

(statearr_32139_33119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (8))){
var inst_32044 = (state_32101[(14)]);
var inst_32045 = (state_32101[(16)]);
var inst_32047 = (inst_32045 < inst_32044);
var inst_32048 = inst_32047;
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32048)){
var statearr_32140_33120 = state_32101__$1;
(statearr_32140_33120[(1)] = (10));

} else {
var statearr_32141_33121 = state_32101__$1;
(statearr_32141_33121[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31124__auto__ = null;
var cljs$core$async$state_machine__31124__auto____0 = (function (){
var statearr_32142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32142[(0)] = cljs$core$async$state_machine__31124__auto__);

(statearr_32142[(1)] = (1));

return statearr_32142;
});
var cljs$core$async$state_machine__31124__auto____1 = (function (state_32101){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_32101);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e32143){var ex__31127__auto__ = e32143;
var statearr_32144_33125 = state_32101;
(statearr_32144_33125[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_32101[(4)]))){
var statearr_32145_33126 = state_32101;
(statearr_32145_33126[(1)] = cljs.core.first((state_32101[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33130 = state_32101;
state_32101 = G__33130;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$state_machine__31124__auto__ = function(state_32101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31124__auto____1.call(this,state_32101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31124__auto____0;
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31124__auto____1;
return cljs$core$async$state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_32146 = f__31160__auto__();
(statearr_32146[(6)] = c__31159__auto___33081);

return statearr_32146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32148 = arguments.length;
switch (G__32148) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32150 = arguments.length;
switch (G__32150) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32152 = arguments.length;
switch (G__32152) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__31159__auto___33141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_32195){
var state_val_32196 = (state_32195[(1)]);
if((state_val_32196 === (7))){
var state_32195__$1 = state_32195;
var statearr_32197_33142 = state_32195__$1;
(statearr_32197_33142[(2)] = null);

(statearr_32197_33142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (1))){
var state_32195__$1 = state_32195;
var statearr_32198_33143 = state_32195__$1;
(statearr_32198_33143[(2)] = null);

(statearr_32198_33143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (4))){
var inst_32156 = (state_32195[(7)]);
var inst_32155 = (state_32195[(8)]);
var inst_32158 = (inst_32156 < inst_32155);
var state_32195__$1 = state_32195;
if(cljs.core.truth_(inst_32158)){
var statearr_32199_33145 = state_32195__$1;
(statearr_32199_33145[(1)] = (6));

} else {
var statearr_32200_33146 = state_32195__$1;
(statearr_32200_33146[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (15))){
var inst_32181 = (state_32195[(9)]);
var inst_32186 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32181);
var state_32195__$1 = state_32195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32195__$1,(17),out,inst_32186);
} else {
if((state_val_32196 === (13))){
var inst_32181 = (state_32195[(9)]);
var inst_32181__$1 = (state_32195[(2)]);
var inst_32182 = cljs.core.some(cljs.core.nil_QMARK_,inst_32181__$1);
var state_32195__$1 = (function (){var statearr_32201 = state_32195;
(statearr_32201[(9)] = inst_32181__$1);

return statearr_32201;
})();
if(cljs.core.truth_(inst_32182)){
var statearr_32202_33148 = state_32195__$1;
(statearr_32202_33148[(1)] = (14));

} else {
var statearr_32203_33149 = state_32195__$1;
(statearr_32203_33149[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (6))){
var state_32195__$1 = state_32195;
var statearr_32204_33150 = state_32195__$1;
(statearr_32204_33150[(2)] = null);

(statearr_32204_33150[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (17))){
var inst_32188 = (state_32195[(2)]);
var state_32195__$1 = (function (){var statearr_32206 = state_32195;
(statearr_32206[(10)] = inst_32188);

return statearr_32206;
})();
var statearr_32207_33151 = state_32195__$1;
(statearr_32207_33151[(2)] = null);

(statearr_32207_33151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (3))){
var inst_32193 = (state_32195[(2)]);
var state_32195__$1 = state_32195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32195__$1,inst_32193);
} else {
if((state_val_32196 === (12))){
var _ = (function (){var statearr_32208 = state_32195;
(statearr_32208[(4)] = cljs.core.rest((state_32195[(4)])));

return statearr_32208;
})();
var state_32195__$1 = state_32195;
var ex32205 = (state_32195__$1[(2)]);
var statearr_32209_33152 = state_32195__$1;
(statearr_32209_33152[(5)] = ex32205);


if((ex32205 instanceof Object)){
var statearr_32210_33153 = state_32195__$1;
(statearr_32210_33153[(1)] = (11));

(statearr_32210_33153[(5)] = null);

} else {
throw ex32205;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (2))){
var inst_32154 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32155 = cnt;
var inst_32156 = (0);
var state_32195__$1 = (function (){var statearr_32211 = state_32195;
(statearr_32211[(7)] = inst_32156);

(statearr_32211[(8)] = inst_32155);

(statearr_32211[(11)] = inst_32154);

return statearr_32211;
})();
var statearr_32212_33154 = state_32195__$1;
(statearr_32212_33154[(2)] = null);

(statearr_32212_33154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (11))){
var inst_32160 = (state_32195[(2)]);
var inst_32161 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32195__$1 = (function (){var statearr_32213 = state_32195;
(statearr_32213[(12)] = inst_32160);

return statearr_32213;
})();
var statearr_32214_33155 = state_32195__$1;
(statearr_32214_33155[(2)] = inst_32161);

(statearr_32214_33155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (9))){
var inst_32156 = (state_32195[(7)]);
var _ = (function (){var statearr_32215 = state_32195;
(statearr_32215[(4)] = cljs.core.cons((12),(state_32195[(4)])));

return statearr_32215;
})();
var inst_32167 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32156) : chs__$1.call(null,inst_32156));
var inst_32168 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32156) : done.call(null,inst_32156));
var inst_32169 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32167,inst_32168);
var ___$1 = (function (){var statearr_32216 = state_32195;
(statearr_32216[(4)] = cljs.core.rest((state_32195[(4)])));

return statearr_32216;
})();
var state_32195__$1 = state_32195;
var statearr_32217_33156 = state_32195__$1;
(statearr_32217_33156[(2)] = inst_32169);

(statearr_32217_33156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (5))){
var inst_32179 = (state_32195[(2)]);
var state_32195__$1 = (function (){var statearr_32218 = state_32195;
(statearr_32218[(13)] = inst_32179);

return statearr_32218;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32195__$1,(13),dchan);
} else {
if((state_val_32196 === (14))){
var inst_32184 = cljs.core.async.close_BANG_(out);
var state_32195__$1 = state_32195;
var statearr_32219_33157 = state_32195__$1;
(statearr_32219_33157[(2)] = inst_32184);

(statearr_32219_33157[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (16))){
var inst_32191 = (state_32195[(2)]);
var state_32195__$1 = state_32195;
var statearr_32220_33158 = state_32195__$1;
(statearr_32220_33158[(2)] = inst_32191);

(statearr_32220_33158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (10))){
var inst_32156 = (state_32195[(7)]);
var inst_32172 = (state_32195[(2)]);
var inst_32173 = (inst_32156 + (1));
var inst_32156__$1 = inst_32173;
var state_32195__$1 = (function (){var statearr_32221 = state_32195;
(statearr_32221[(7)] = inst_32156__$1);

(statearr_32221[(14)] = inst_32172);

return statearr_32221;
})();
var statearr_32222_33159 = state_32195__$1;
(statearr_32222_33159[(2)] = null);

(statearr_32222_33159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (8))){
var inst_32177 = (state_32195[(2)]);
var state_32195__$1 = state_32195;
var statearr_32223_33160 = state_32195__$1;
(statearr_32223_33160[(2)] = inst_32177);

(statearr_32223_33160[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31124__auto__ = null;
var cljs$core$async$state_machine__31124__auto____0 = (function (){
var statearr_32224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32224[(0)] = cljs$core$async$state_machine__31124__auto__);

(statearr_32224[(1)] = (1));

return statearr_32224;
});
var cljs$core$async$state_machine__31124__auto____1 = (function (state_32195){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_32195);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e32225){var ex__31127__auto__ = e32225;
var statearr_32226_33165 = state_32195;
(statearr_32226_33165[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_32195[(4)]))){
var statearr_32227_33166 = state_32195;
(statearr_32227_33166[(1)] = cljs.core.first((state_32195[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33167 = state_32195;
state_32195 = G__33167;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$state_machine__31124__auto__ = function(state_32195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31124__auto____1.call(this,state_32195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31124__auto____0;
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31124__auto____1;
return cljs$core$async$state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_32228 = f__31160__auto__();
(statearr_32228[(6)] = c__31159__auto___33141);

return statearr_32228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32231 = arguments.length;
switch (G__32231) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31159__auto___33169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_32263){
var state_val_32264 = (state_32263[(1)]);
if((state_val_32264 === (7))){
var inst_32242 = (state_32263[(7)]);
var inst_32243 = (state_32263[(8)]);
var inst_32242__$1 = (state_32263[(2)]);
var inst_32243__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32242__$1,(0),null);
var inst_32244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32242__$1,(1),null);
var inst_32245 = (inst_32243__$1 == null);
var state_32263__$1 = (function (){var statearr_32265 = state_32263;
(statearr_32265[(7)] = inst_32242__$1);

(statearr_32265[(9)] = inst_32244);

(statearr_32265[(8)] = inst_32243__$1);

return statearr_32265;
})();
if(cljs.core.truth_(inst_32245)){
var statearr_32266_33170 = state_32263__$1;
(statearr_32266_33170[(1)] = (8));

} else {
var statearr_32267_33171 = state_32263__$1;
(statearr_32267_33171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (1))){
var inst_32232 = cljs.core.vec(chs);
var inst_32233 = inst_32232;
var state_32263__$1 = (function (){var statearr_32268 = state_32263;
(statearr_32268[(10)] = inst_32233);

return statearr_32268;
})();
var statearr_32269_33172 = state_32263__$1;
(statearr_32269_33172[(2)] = null);

(statearr_32269_33172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (4))){
var inst_32233 = (state_32263[(10)]);
var state_32263__$1 = state_32263;
return cljs.core.async.ioc_alts_BANG_(state_32263__$1,(7),inst_32233);
} else {
if((state_val_32264 === (6))){
var inst_32259 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
var statearr_32270_33173 = state_32263__$1;
(statearr_32270_33173[(2)] = inst_32259);

(statearr_32270_33173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (3))){
var inst_32261 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32263__$1,inst_32261);
} else {
if((state_val_32264 === (2))){
var inst_32233 = (state_32263[(10)]);
var inst_32235 = cljs.core.count(inst_32233);
var inst_32236 = (inst_32235 > (0));
var state_32263__$1 = state_32263;
if(cljs.core.truth_(inst_32236)){
var statearr_32272_33178 = state_32263__$1;
(statearr_32272_33178[(1)] = (4));

} else {
var statearr_32273_33179 = state_32263__$1;
(statearr_32273_33179[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (11))){
var inst_32233 = (state_32263[(10)]);
var inst_32252 = (state_32263[(2)]);
var tmp32271 = inst_32233;
var inst_32233__$1 = tmp32271;
var state_32263__$1 = (function (){var statearr_32274 = state_32263;
(statearr_32274[(10)] = inst_32233__$1);

(statearr_32274[(11)] = inst_32252);

return statearr_32274;
})();
var statearr_32275_33181 = state_32263__$1;
(statearr_32275_33181[(2)] = null);

(statearr_32275_33181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (9))){
var inst_32243 = (state_32263[(8)]);
var state_32263__$1 = state_32263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32263__$1,(11),out,inst_32243);
} else {
if((state_val_32264 === (5))){
var inst_32257 = cljs.core.async.close_BANG_(out);
var state_32263__$1 = state_32263;
var statearr_32276_33182 = state_32263__$1;
(statearr_32276_33182[(2)] = inst_32257);

(statearr_32276_33182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (10))){
var inst_32255 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
var statearr_32277_33183 = state_32263__$1;
(statearr_32277_33183[(2)] = inst_32255);

(statearr_32277_33183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (8))){
var inst_32233 = (state_32263[(10)]);
var inst_32242 = (state_32263[(7)]);
var inst_32244 = (state_32263[(9)]);
var inst_32243 = (state_32263[(8)]);
var inst_32247 = (function (){var cs = inst_32233;
var vec__32238 = inst_32242;
var v = inst_32243;
var c = inst_32244;
return (function (p1__32229_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32229_SHARP_);
});
})();
var inst_32248 = cljs.core.filterv(inst_32247,inst_32233);
var inst_32233__$1 = inst_32248;
var state_32263__$1 = (function (){var statearr_32278 = state_32263;
(statearr_32278[(10)] = inst_32233__$1);

return statearr_32278;
})();
var statearr_32279_33184 = state_32263__$1;
(statearr_32279_33184[(2)] = null);

(statearr_32279_33184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31124__auto__ = null;
var cljs$core$async$state_machine__31124__auto____0 = (function (){
var statearr_32280 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32280[(0)] = cljs$core$async$state_machine__31124__auto__);

(statearr_32280[(1)] = (1));

return statearr_32280;
});
var cljs$core$async$state_machine__31124__auto____1 = (function (state_32263){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_32263);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e32281){var ex__31127__auto__ = e32281;
var statearr_32282_33186 = state_32263;
(statearr_32282_33186[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_32263[(4)]))){
var statearr_32283_33187 = state_32263;
(statearr_32283_33187[(1)] = cljs.core.first((state_32263[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33188 = state_32263;
state_32263 = G__33188;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$state_machine__31124__auto__ = function(state_32263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31124__auto____1.call(this,state_32263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31124__auto____0;
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31124__auto____1;
return cljs$core$async$state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_32284 = f__31160__auto__();
(statearr_32284[(6)] = c__31159__auto___33169);

return statearr_32284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32286 = arguments.length;
switch (G__32286) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31159__auto___33194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_32310){
var state_val_32311 = (state_32310[(1)]);
if((state_val_32311 === (7))){
var inst_32292 = (state_32310[(7)]);
var inst_32292__$1 = (state_32310[(2)]);
var inst_32293 = (inst_32292__$1 == null);
var inst_32294 = cljs.core.not(inst_32293);
var state_32310__$1 = (function (){var statearr_32312 = state_32310;
(statearr_32312[(7)] = inst_32292__$1);

return statearr_32312;
})();
if(inst_32294){
var statearr_32313_33195 = state_32310__$1;
(statearr_32313_33195[(1)] = (8));

} else {
var statearr_32314_33196 = state_32310__$1;
(statearr_32314_33196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (1))){
var inst_32287 = (0);
var state_32310__$1 = (function (){var statearr_32315 = state_32310;
(statearr_32315[(8)] = inst_32287);

return statearr_32315;
})();
var statearr_32316_33197 = state_32310__$1;
(statearr_32316_33197[(2)] = null);

(statearr_32316_33197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (4))){
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32310__$1,(7),ch);
} else {
if((state_val_32311 === (6))){
var inst_32305 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
var statearr_32317_33198 = state_32310__$1;
(statearr_32317_33198[(2)] = inst_32305);

(statearr_32317_33198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (3))){
var inst_32307 = (state_32310[(2)]);
var inst_32308 = cljs.core.async.close_BANG_(out);
var state_32310__$1 = (function (){var statearr_32318 = state_32310;
(statearr_32318[(9)] = inst_32307);

return statearr_32318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32310__$1,inst_32308);
} else {
if((state_val_32311 === (2))){
var inst_32287 = (state_32310[(8)]);
var inst_32289 = (inst_32287 < n);
var state_32310__$1 = state_32310;
if(cljs.core.truth_(inst_32289)){
var statearr_32319_33199 = state_32310__$1;
(statearr_32319_33199[(1)] = (4));

} else {
var statearr_32320_33200 = state_32310__$1;
(statearr_32320_33200[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (11))){
var inst_32287 = (state_32310[(8)]);
var inst_32297 = (state_32310[(2)]);
var inst_32298 = (inst_32287 + (1));
var inst_32287__$1 = inst_32298;
var state_32310__$1 = (function (){var statearr_32321 = state_32310;
(statearr_32321[(10)] = inst_32297);

(statearr_32321[(8)] = inst_32287__$1);

return statearr_32321;
})();
var statearr_32322_33201 = state_32310__$1;
(statearr_32322_33201[(2)] = null);

(statearr_32322_33201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (9))){
var state_32310__$1 = state_32310;
var statearr_32323_33202 = state_32310__$1;
(statearr_32323_33202[(2)] = null);

(statearr_32323_33202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (5))){
var state_32310__$1 = state_32310;
var statearr_32324_33203 = state_32310__$1;
(statearr_32324_33203[(2)] = null);

(statearr_32324_33203[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (10))){
var inst_32302 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
var statearr_32325_33204 = state_32310__$1;
(statearr_32325_33204[(2)] = inst_32302);

(statearr_32325_33204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (8))){
var inst_32292 = (state_32310[(7)]);
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32310__$1,(11),out,inst_32292);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31124__auto__ = null;
var cljs$core$async$state_machine__31124__auto____0 = (function (){
var statearr_32326 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32326[(0)] = cljs$core$async$state_machine__31124__auto__);

(statearr_32326[(1)] = (1));

return statearr_32326;
});
var cljs$core$async$state_machine__31124__auto____1 = (function (state_32310){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_32310);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e32327){var ex__31127__auto__ = e32327;
var statearr_32328_33205 = state_32310;
(statearr_32328_33205[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_32310[(4)]))){
var statearr_32329_33206 = state_32310;
(statearr_32329_33206[(1)] = cljs.core.first((state_32310[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33207 = state_32310;
state_32310 = G__33207;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$state_machine__31124__auto__ = function(state_32310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31124__auto____1.call(this,state_32310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31124__auto____0;
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31124__auto____1;
return cljs$core$async$state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_32330 = f__31160__auto__();
(statearr_32330[(6)] = c__31159__auto___33194);

return statearr_32330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32332 = (function (f,ch,meta32333){
this.f = f;
this.ch = ch;
this.meta32333 = meta32333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32334,meta32333__$1){
var self__ = this;
var _32334__$1 = this;
return (new cljs.core.async.t_cljs$core$async32332(self__.f,self__.ch,meta32333__$1));
}));

(cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32334){
var self__ = this;
var _32334__$1 = this;
return self__.meta32333;
}));

(cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32335 = (function (f,ch,meta32333,_,fn1,meta32336){
this.f = f;
this.ch = ch;
this.meta32333 = meta32333;
this._ = _;
this.fn1 = fn1;
this.meta32336 = meta32336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32337,meta32336__$1){
var self__ = this;
var _32337__$1 = this;
return (new cljs.core.async.t_cljs$core$async32335(self__.f,self__.ch,self__.meta32333,self__._,self__.fn1,meta32336__$1));
}));

(cljs.core.async.t_cljs$core$async32335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32337){
var self__ = this;
var _32337__$1 = this;
return self__.meta32336;
}));

(cljs.core.async.t_cljs$core$async32335.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32331_SHARP_){
var G__32338 = (((p1__32331_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32331_SHARP_) : self__.f.call(null,p1__32331_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32338) : f1.call(null,G__32338));
});
}));

(cljs.core.async.t_cljs$core$async32335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32333","meta32333",131171170,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32332","cljs.core.async/t_cljs$core$async32332",1899095843,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32336","meta32336",-1741368757,null)], null);
}));

(cljs.core.async.t_cljs$core$async32335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32335");

(cljs.core.async.t_cljs$core$async32335.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32335.
 */
cljs.core.async.__GT_t_cljs$core$async32335 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32335(f__$1,ch__$1,meta32333__$1,___$2,fn1__$1,meta32336){
return (new cljs.core.async.t_cljs$core$async32335(f__$1,ch__$1,meta32333__$1,___$2,fn1__$1,meta32336));
});

}

return (new cljs.core.async.t_cljs$core$async32335(self__.f,self__.ch,self__.meta32333,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32339 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32339) : self__.f.call(null,G__32339));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32333","meta32333",131171170,null)], null);
}));

(cljs.core.async.t_cljs$core$async32332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32332");

(cljs.core.async.t_cljs$core$async32332.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32332.
 */
cljs.core.async.__GT_t_cljs$core$async32332 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32332(f__$1,ch__$1,meta32333){
return (new cljs.core.async.t_cljs$core$async32332(f__$1,ch__$1,meta32333));
});

}

return (new cljs.core.async.t_cljs$core$async32332(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32340 = (function (f,ch,meta32341){
this.f = f;
this.ch = ch;
this.meta32341 = meta32341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32342,meta32341__$1){
var self__ = this;
var _32342__$1 = this;
return (new cljs.core.async.t_cljs$core$async32340(self__.f,self__.ch,meta32341__$1));
}));

(cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32342){
var self__ = this;
var _32342__$1 = this;
return self__.meta32341;
}));

(cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32341","meta32341",-1304921508,null)], null);
}));

(cljs.core.async.t_cljs$core$async32340.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32340");

(cljs.core.async.t_cljs$core$async32340.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32340");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32340.
 */
cljs.core.async.__GT_t_cljs$core$async32340 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32340(f__$1,ch__$1,meta32341){
return (new cljs.core.async.t_cljs$core$async32340(f__$1,ch__$1,meta32341));
});

}

return (new cljs.core.async.t_cljs$core$async32340(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32343 = (function (p,ch,meta32344){
this.p = p;
this.ch = ch;
this.meta32344 = meta32344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32345,meta32344__$1){
var self__ = this;
var _32345__$1 = this;
return (new cljs.core.async.t_cljs$core$async32343(self__.p,self__.ch,meta32344__$1));
}));

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32345){
var self__ = this;
var _32345__$1 = this;
return self__.meta32344;
}));

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32344","meta32344",1587303047,null)], null);
}));

(cljs.core.async.t_cljs$core$async32343.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32343");

(cljs.core.async.t_cljs$core$async32343.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32343");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32343.
 */
cljs.core.async.__GT_t_cljs$core$async32343 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32343(p__$1,ch__$1,meta32344){
return (new cljs.core.async.t_cljs$core$async32343(p__$1,ch__$1,meta32344));
});

}

return (new cljs.core.async.t_cljs$core$async32343(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32347 = arguments.length;
switch (G__32347) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31159__auto___33213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_32368){
var state_val_32369 = (state_32368[(1)]);
if((state_val_32369 === (7))){
var inst_32364 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32370_33214 = state_32368__$1;
(statearr_32370_33214[(2)] = inst_32364);

(statearr_32370_33214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (1))){
var state_32368__$1 = state_32368;
var statearr_32371_33219 = state_32368__$1;
(statearr_32371_33219[(2)] = null);

(statearr_32371_33219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (4))){
var inst_32350 = (state_32368[(7)]);
var inst_32350__$1 = (state_32368[(2)]);
var inst_32351 = (inst_32350__$1 == null);
var state_32368__$1 = (function (){var statearr_32372 = state_32368;
(statearr_32372[(7)] = inst_32350__$1);

return statearr_32372;
})();
if(cljs.core.truth_(inst_32351)){
var statearr_32373_33221 = state_32368__$1;
(statearr_32373_33221[(1)] = (5));

} else {
var statearr_32374_33222 = state_32368__$1;
(statearr_32374_33222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (6))){
var inst_32350 = (state_32368[(7)]);
var inst_32355 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32350) : p.call(null,inst_32350));
var state_32368__$1 = state_32368;
if(cljs.core.truth_(inst_32355)){
var statearr_32375_33223 = state_32368__$1;
(statearr_32375_33223[(1)] = (8));

} else {
var statearr_32376_33224 = state_32368__$1;
(statearr_32376_33224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (3))){
var inst_32366 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32368__$1,inst_32366);
} else {
if((state_val_32369 === (2))){
var state_32368__$1 = state_32368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32368__$1,(4),ch);
} else {
if((state_val_32369 === (11))){
var inst_32358 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32377_33225 = state_32368__$1;
(statearr_32377_33225[(2)] = inst_32358);

(statearr_32377_33225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (9))){
var state_32368__$1 = state_32368;
var statearr_32378_33226 = state_32368__$1;
(statearr_32378_33226[(2)] = null);

(statearr_32378_33226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (5))){
var inst_32353 = cljs.core.async.close_BANG_(out);
var state_32368__$1 = state_32368;
var statearr_32379_33227 = state_32368__$1;
(statearr_32379_33227[(2)] = inst_32353);

(statearr_32379_33227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (10))){
var inst_32361 = (state_32368[(2)]);
var state_32368__$1 = (function (){var statearr_32380 = state_32368;
(statearr_32380[(8)] = inst_32361);

return statearr_32380;
})();
var statearr_32381_33228 = state_32368__$1;
(statearr_32381_33228[(2)] = null);

(statearr_32381_33228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (8))){
var inst_32350 = (state_32368[(7)]);
var state_32368__$1 = state_32368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32368__$1,(11),out,inst_32350);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31124__auto__ = null;
var cljs$core$async$state_machine__31124__auto____0 = (function (){
var statearr_32382 = [null,null,null,null,null,null,null,null,null];
(statearr_32382[(0)] = cljs$core$async$state_machine__31124__auto__);

(statearr_32382[(1)] = (1));

return statearr_32382;
});
var cljs$core$async$state_machine__31124__auto____1 = (function (state_32368){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_32368);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e32383){var ex__31127__auto__ = e32383;
var statearr_32384_33230 = state_32368;
(statearr_32384_33230[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_32368[(4)]))){
var statearr_32385_33231 = state_32368;
(statearr_32385_33231[(1)] = cljs.core.first((state_32368[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33232 = state_32368;
state_32368 = G__33232;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$state_machine__31124__auto__ = function(state_32368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31124__auto____1.call(this,state_32368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31124__auto____0;
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31124__auto____1;
return cljs$core$async$state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_32386 = f__31160__auto__();
(statearr_32386[(6)] = c__31159__auto___33213);

return statearr_32386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32388 = arguments.length;
switch (G__32388) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31159__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_32450){
var state_val_32451 = (state_32450[(1)]);
if((state_val_32451 === (7))){
var inst_32446 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32452_33238 = state_32450__$1;
(statearr_32452_33238[(2)] = inst_32446);

(statearr_32452_33238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (20))){
var inst_32416 = (state_32450[(7)]);
var inst_32427 = (state_32450[(2)]);
var inst_32428 = cljs.core.next(inst_32416);
var inst_32402 = inst_32428;
var inst_32403 = null;
var inst_32404 = (0);
var inst_32405 = (0);
var state_32450__$1 = (function (){var statearr_32453 = state_32450;
(statearr_32453[(8)] = inst_32404);

(statearr_32453[(9)] = inst_32402);

(statearr_32453[(10)] = inst_32405);

(statearr_32453[(11)] = inst_32427);

(statearr_32453[(12)] = inst_32403);

return statearr_32453;
})();
var statearr_32454_33239 = state_32450__$1;
(statearr_32454_33239[(2)] = null);

(statearr_32454_33239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (1))){
var state_32450__$1 = state_32450;
var statearr_32455_33240 = state_32450__$1;
(statearr_32455_33240[(2)] = null);

(statearr_32455_33240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (4))){
var inst_32391 = (state_32450[(13)]);
var inst_32391__$1 = (state_32450[(2)]);
var inst_32392 = (inst_32391__$1 == null);
var state_32450__$1 = (function (){var statearr_32456 = state_32450;
(statearr_32456[(13)] = inst_32391__$1);

return statearr_32456;
})();
if(cljs.core.truth_(inst_32392)){
var statearr_32457_33241 = state_32450__$1;
(statearr_32457_33241[(1)] = (5));

} else {
var statearr_32458_33242 = state_32450__$1;
(statearr_32458_33242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (15))){
var state_32450__$1 = state_32450;
var statearr_32462_33243 = state_32450__$1;
(statearr_32462_33243[(2)] = null);

(statearr_32462_33243[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (21))){
var state_32450__$1 = state_32450;
var statearr_32463_33244 = state_32450__$1;
(statearr_32463_33244[(2)] = null);

(statearr_32463_33244[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (13))){
var inst_32404 = (state_32450[(8)]);
var inst_32402 = (state_32450[(9)]);
var inst_32405 = (state_32450[(10)]);
var inst_32403 = (state_32450[(12)]);
var inst_32412 = (state_32450[(2)]);
var inst_32413 = (inst_32405 + (1));
var tmp32459 = inst_32404;
var tmp32460 = inst_32402;
var tmp32461 = inst_32403;
var inst_32402__$1 = tmp32460;
var inst_32403__$1 = tmp32461;
var inst_32404__$1 = tmp32459;
var inst_32405__$1 = inst_32413;
var state_32450__$1 = (function (){var statearr_32464 = state_32450;
(statearr_32464[(14)] = inst_32412);

(statearr_32464[(8)] = inst_32404__$1);

(statearr_32464[(9)] = inst_32402__$1);

(statearr_32464[(10)] = inst_32405__$1);

(statearr_32464[(12)] = inst_32403__$1);

return statearr_32464;
})();
var statearr_32465_33245 = state_32450__$1;
(statearr_32465_33245[(2)] = null);

(statearr_32465_33245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (22))){
var state_32450__$1 = state_32450;
var statearr_32466_33246 = state_32450__$1;
(statearr_32466_33246[(2)] = null);

(statearr_32466_33246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (6))){
var inst_32391 = (state_32450[(13)]);
var inst_32400 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32391) : f.call(null,inst_32391));
var inst_32401 = cljs.core.seq(inst_32400);
var inst_32402 = inst_32401;
var inst_32403 = null;
var inst_32404 = (0);
var inst_32405 = (0);
var state_32450__$1 = (function (){var statearr_32467 = state_32450;
(statearr_32467[(8)] = inst_32404);

(statearr_32467[(9)] = inst_32402);

(statearr_32467[(10)] = inst_32405);

(statearr_32467[(12)] = inst_32403);

return statearr_32467;
})();
var statearr_32468_33247 = state_32450__$1;
(statearr_32468_33247[(2)] = null);

(statearr_32468_33247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (17))){
var inst_32416 = (state_32450[(7)]);
var inst_32420 = cljs.core.chunk_first(inst_32416);
var inst_32421 = cljs.core.chunk_rest(inst_32416);
var inst_32422 = cljs.core.count(inst_32420);
var inst_32402 = inst_32421;
var inst_32403 = inst_32420;
var inst_32404 = inst_32422;
var inst_32405 = (0);
var state_32450__$1 = (function (){var statearr_32469 = state_32450;
(statearr_32469[(8)] = inst_32404);

(statearr_32469[(9)] = inst_32402);

(statearr_32469[(10)] = inst_32405);

(statearr_32469[(12)] = inst_32403);

return statearr_32469;
})();
var statearr_32470_33248 = state_32450__$1;
(statearr_32470_33248[(2)] = null);

(statearr_32470_33248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (3))){
var inst_32448 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32450__$1,inst_32448);
} else {
if((state_val_32451 === (12))){
var inst_32436 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32471_33249 = state_32450__$1;
(statearr_32471_33249[(2)] = inst_32436);

(statearr_32471_33249[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (2))){
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32450__$1,(4),in$);
} else {
if((state_val_32451 === (23))){
var inst_32444 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32472_33250 = state_32450__$1;
(statearr_32472_33250[(2)] = inst_32444);

(statearr_32472_33250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (19))){
var inst_32431 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32473_33251 = state_32450__$1;
(statearr_32473_33251[(2)] = inst_32431);

(statearr_32473_33251[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (11))){
var inst_32416 = (state_32450[(7)]);
var inst_32402 = (state_32450[(9)]);
var inst_32416__$1 = cljs.core.seq(inst_32402);
var state_32450__$1 = (function (){var statearr_32474 = state_32450;
(statearr_32474[(7)] = inst_32416__$1);

return statearr_32474;
})();
if(inst_32416__$1){
var statearr_32475_33252 = state_32450__$1;
(statearr_32475_33252[(1)] = (14));

} else {
var statearr_32476_33253 = state_32450__$1;
(statearr_32476_33253[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (9))){
var inst_32438 = (state_32450[(2)]);
var inst_32439 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32450__$1 = (function (){var statearr_32477 = state_32450;
(statearr_32477[(15)] = inst_32438);

return statearr_32477;
})();
if(cljs.core.truth_(inst_32439)){
var statearr_32478_33257 = state_32450__$1;
(statearr_32478_33257[(1)] = (21));

} else {
var statearr_32479_33258 = state_32450__$1;
(statearr_32479_33258[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (5))){
var inst_32394 = cljs.core.async.close_BANG_(out);
var state_32450__$1 = state_32450;
var statearr_32480_33259 = state_32450__$1;
(statearr_32480_33259[(2)] = inst_32394);

(statearr_32480_33259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (14))){
var inst_32416 = (state_32450[(7)]);
var inst_32418 = cljs.core.chunked_seq_QMARK_(inst_32416);
var state_32450__$1 = state_32450;
if(inst_32418){
var statearr_32481_33260 = state_32450__$1;
(statearr_32481_33260[(1)] = (17));

} else {
var statearr_32482_33261 = state_32450__$1;
(statearr_32482_33261[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (16))){
var inst_32434 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32483_33262 = state_32450__$1;
(statearr_32483_33262[(2)] = inst_32434);

(statearr_32483_33262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (10))){
var inst_32405 = (state_32450[(10)]);
var inst_32403 = (state_32450[(12)]);
var inst_32410 = cljs.core._nth(inst_32403,inst_32405);
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32450__$1,(13),out,inst_32410);
} else {
if((state_val_32451 === (18))){
var inst_32416 = (state_32450[(7)]);
var inst_32425 = cljs.core.first(inst_32416);
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32450__$1,(20),out,inst_32425);
} else {
if((state_val_32451 === (8))){
var inst_32404 = (state_32450[(8)]);
var inst_32405 = (state_32450[(10)]);
var inst_32407 = (inst_32405 < inst_32404);
var inst_32408 = inst_32407;
var state_32450__$1 = state_32450;
if(cljs.core.truth_(inst_32408)){
var statearr_32484_33263 = state_32450__$1;
(statearr_32484_33263[(1)] = (10));

} else {
var statearr_32485_33264 = state_32450__$1;
(statearr_32485_33264[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31124__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31124__auto____0 = (function (){
var statearr_32486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32486[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31124__auto__);

(statearr_32486[(1)] = (1));

return statearr_32486;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31124__auto____1 = (function (state_32450){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_32450);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e32487){var ex__31127__auto__ = e32487;
var statearr_32488_33265 = state_32450;
(statearr_32488_33265[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_32450[(4)]))){
var statearr_32489_33266 = state_32450;
(statearr_32489_33266[(1)] = cljs.core.first((state_32450[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33267 = state_32450;
state_32450 = G__33267;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31124__auto__ = function(state_32450){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31124__auto____1.call(this,state_32450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31124__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31124__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_32490 = f__31160__auto__();
(statearr_32490[(6)] = c__31159__auto__);

return statearr_32490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));

return c__31159__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32492 = arguments.length;
switch (G__32492) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32494 = arguments.length;
switch (G__32494) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32496 = arguments.length;
switch (G__32496) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31159__auto___33272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_32520){
var state_val_32521 = (state_32520[(1)]);
if((state_val_32521 === (7))){
var inst_32515 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32522_33273 = state_32520__$1;
(statearr_32522_33273[(2)] = inst_32515);

(statearr_32522_33273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (1))){
var inst_32497 = null;
var state_32520__$1 = (function (){var statearr_32523 = state_32520;
(statearr_32523[(7)] = inst_32497);

return statearr_32523;
})();
var statearr_32524_33274 = state_32520__$1;
(statearr_32524_33274[(2)] = null);

(statearr_32524_33274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (4))){
var inst_32500 = (state_32520[(8)]);
var inst_32500__$1 = (state_32520[(2)]);
var inst_32501 = (inst_32500__$1 == null);
var inst_32502 = cljs.core.not(inst_32501);
var state_32520__$1 = (function (){var statearr_32525 = state_32520;
(statearr_32525[(8)] = inst_32500__$1);

return statearr_32525;
})();
if(inst_32502){
var statearr_32526_33275 = state_32520__$1;
(statearr_32526_33275[(1)] = (5));

} else {
var statearr_32527_33276 = state_32520__$1;
(statearr_32527_33276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (6))){
var state_32520__$1 = state_32520;
var statearr_32528_33277 = state_32520__$1;
(statearr_32528_33277[(2)] = null);

(statearr_32528_33277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (3))){
var inst_32517 = (state_32520[(2)]);
var inst_32518 = cljs.core.async.close_BANG_(out);
var state_32520__$1 = (function (){var statearr_32529 = state_32520;
(statearr_32529[(9)] = inst_32517);

return statearr_32529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32520__$1,inst_32518);
} else {
if((state_val_32521 === (2))){
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32520__$1,(4),ch);
} else {
if((state_val_32521 === (11))){
var inst_32500 = (state_32520[(8)]);
var inst_32509 = (state_32520[(2)]);
var inst_32497 = inst_32500;
var state_32520__$1 = (function (){var statearr_32530 = state_32520;
(statearr_32530[(10)] = inst_32509);

(statearr_32530[(7)] = inst_32497);

return statearr_32530;
})();
var statearr_32531_33278 = state_32520__$1;
(statearr_32531_33278[(2)] = null);

(statearr_32531_33278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (9))){
var inst_32500 = (state_32520[(8)]);
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32520__$1,(11),out,inst_32500);
} else {
if((state_val_32521 === (5))){
var inst_32500 = (state_32520[(8)]);
var inst_32497 = (state_32520[(7)]);
var inst_32504 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32500,inst_32497);
var state_32520__$1 = state_32520;
if(inst_32504){
var statearr_32533_33279 = state_32520__$1;
(statearr_32533_33279[(1)] = (8));

} else {
var statearr_32534_33280 = state_32520__$1;
(statearr_32534_33280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (10))){
var inst_32512 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32535_33281 = state_32520__$1;
(statearr_32535_33281[(2)] = inst_32512);

(statearr_32535_33281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (8))){
var inst_32497 = (state_32520[(7)]);
var tmp32532 = inst_32497;
var inst_32497__$1 = tmp32532;
var state_32520__$1 = (function (){var statearr_32536 = state_32520;
(statearr_32536[(7)] = inst_32497__$1);

return statearr_32536;
})();
var statearr_32537_33282 = state_32520__$1;
(statearr_32537_33282[(2)] = null);

(statearr_32537_33282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31124__auto__ = null;
var cljs$core$async$state_machine__31124__auto____0 = (function (){
var statearr_32538 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32538[(0)] = cljs$core$async$state_machine__31124__auto__);

(statearr_32538[(1)] = (1));

return statearr_32538;
});
var cljs$core$async$state_machine__31124__auto____1 = (function (state_32520){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_32520);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e32539){var ex__31127__auto__ = e32539;
var statearr_32540_33283 = state_32520;
(statearr_32540_33283[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_32520[(4)]))){
var statearr_32541_33284 = state_32520;
(statearr_32541_33284[(1)] = cljs.core.first((state_32520[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33285 = state_32520;
state_32520 = G__33285;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$state_machine__31124__auto__ = function(state_32520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31124__auto____1.call(this,state_32520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31124__auto____0;
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31124__auto____1;
return cljs$core$async$state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_32542 = f__31160__auto__();
(statearr_32542[(6)] = c__31159__auto___33272);

return statearr_32542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32544 = arguments.length;
switch (G__32544) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31159__auto___33291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_32582){
var state_val_32583 = (state_32582[(1)]);
if((state_val_32583 === (7))){
var inst_32578 = (state_32582[(2)]);
var state_32582__$1 = state_32582;
var statearr_32584_33293 = state_32582__$1;
(statearr_32584_33293[(2)] = inst_32578);

(statearr_32584_33293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (1))){
var inst_32545 = (new Array(n));
var inst_32546 = inst_32545;
var inst_32547 = (0);
var state_32582__$1 = (function (){var statearr_32585 = state_32582;
(statearr_32585[(7)] = inst_32546);

(statearr_32585[(8)] = inst_32547);

return statearr_32585;
})();
var statearr_32586_33297 = state_32582__$1;
(statearr_32586_33297[(2)] = null);

(statearr_32586_33297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (4))){
var inst_32550 = (state_32582[(9)]);
var inst_32550__$1 = (state_32582[(2)]);
var inst_32551 = (inst_32550__$1 == null);
var inst_32552 = cljs.core.not(inst_32551);
var state_32582__$1 = (function (){var statearr_32587 = state_32582;
(statearr_32587[(9)] = inst_32550__$1);

return statearr_32587;
})();
if(inst_32552){
var statearr_32588_33298 = state_32582__$1;
(statearr_32588_33298[(1)] = (5));

} else {
var statearr_32589_33299 = state_32582__$1;
(statearr_32589_33299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (15))){
var inst_32572 = (state_32582[(2)]);
var state_32582__$1 = state_32582;
var statearr_32590_33301 = state_32582__$1;
(statearr_32590_33301[(2)] = inst_32572);

(statearr_32590_33301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (13))){
var state_32582__$1 = state_32582;
var statearr_32591_33303 = state_32582__$1;
(statearr_32591_33303[(2)] = null);

(statearr_32591_33303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (6))){
var inst_32547 = (state_32582[(8)]);
var inst_32568 = (inst_32547 > (0));
var state_32582__$1 = state_32582;
if(cljs.core.truth_(inst_32568)){
var statearr_32592_33304 = state_32582__$1;
(statearr_32592_33304[(1)] = (12));

} else {
var statearr_32593_33305 = state_32582__$1;
(statearr_32593_33305[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (3))){
var inst_32580 = (state_32582[(2)]);
var state_32582__$1 = state_32582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32582__$1,inst_32580);
} else {
if((state_val_32583 === (12))){
var inst_32546 = (state_32582[(7)]);
var inst_32570 = cljs.core.vec(inst_32546);
var state_32582__$1 = state_32582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32582__$1,(15),out,inst_32570);
} else {
if((state_val_32583 === (2))){
var state_32582__$1 = state_32582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32582__$1,(4),ch);
} else {
if((state_val_32583 === (11))){
var inst_32562 = (state_32582[(2)]);
var inst_32563 = (new Array(n));
var inst_32546 = inst_32563;
var inst_32547 = (0);
var state_32582__$1 = (function (){var statearr_32594 = state_32582;
(statearr_32594[(10)] = inst_32562);

(statearr_32594[(7)] = inst_32546);

(statearr_32594[(8)] = inst_32547);

return statearr_32594;
})();
var statearr_32595_33306 = state_32582__$1;
(statearr_32595_33306[(2)] = null);

(statearr_32595_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (9))){
var inst_32546 = (state_32582[(7)]);
var inst_32560 = cljs.core.vec(inst_32546);
var state_32582__$1 = state_32582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32582__$1,(11),out,inst_32560);
} else {
if((state_val_32583 === (5))){
var inst_32555 = (state_32582[(11)]);
var inst_32550 = (state_32582[(9)]);
var inst_32546 = (state_32582[(7)]);
var inst_32547 = (state_32582[(8)]);
var inst_32554 = (inst_32546[inst_32547] = inst_32550);
var inst_32555__$1 = (inst_32547 + (1));
var inst_32556 = (inst_32555__$1 < n);
var state_32582__$1 = (function (){var statearr_32596 = state_32582;
(statearr_32596[(11)] = inst_32555__$1);

(statearr_32596[(12)] = inst_32554);

return statearr_32596;
})();
if(cljs.core.truth_(inst_32556)){
var statearr_32597_33307 = state_32582__$1;
(statearr_32597_33307[(1)] = (8));

} else {
var statearr_32598_33308 = state_32582__$1;
(statearr_32598_33308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (14))){
var inst_32575 = (state_32582[(2)]);
var inst_32576 = cljs.core.async.close_BANG_(out);
var state_32582__$1 = (function (){var statearr_32600 = state_32582;
(statearr_32600[(13)] = inst_32575);

return statearr_32600;
})();
var statearr_32601_33309 = state_32582__$1;
(statearr_32601_33309[(2)] = inst_32576);

(statearr_32601_33309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (10))){
var inst_32566 = (state_32582[(2)]);
var state_32582__$1 = state_32582;
var statearr_32602_33310 = state_32582__$1;
(statearr_32602_33310[(2)] = inst_32566);

(statearr_32602_33310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (8))){
var inst_32555 = (state_32582[(11)]);
var inst_32546 = (state_32582[(7)]);
var tmp32599 = inst_32546;
var inst_32546__$1 = tmp32599;
var inst_32547 = inst_32555;
var state_32582__$1 = (function (){var statearr_32603 = state_32582;
(statearr_32603[(7)] = inst_32546__$1);

(statearr_32603[(8)] = inst_32547);

return statearr_32603;
})();
var statearr_32604_33311 = state_32582__$1;
(statearr_32604_33311[(2)] = null);

(statearr_32604_33311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31124__auto__ = null;
var cljs$core$async$state_machine__31124__auto____0 = (function (){
var statearr_32605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32605[(0)] = cljs$core$async$state_machine__31124__auto__);

(statearr_32605[(1)] = (1));

return statearr_32605;
});
var cljs$core$async$state_machine__31124__auto____1 = (function (state_32582){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_32582);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e32606){var ex__31127__auto__ = e32606;
var statearr_32607_33312 = state_32582;
(statearr_32607_33312[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_32582[(4)]))){
var statearr_32608_33313 = state_32582;
(statearr_32608_33313[(1)] = cljs.core.first((state_32582[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33314 = state_32582;
state_32582 = G__33314;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$state_machine__31124__auto__ = function(state_32582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31124__auto____1.call(this,state_32582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31124__auto____0;
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31124__auto____1;
return cljs$core$async$state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_32609 = f__31160__auto__();
(statearr_32609[(6)] = c__31159__auto___33291);

return statearr_32609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32611 = arguments.length;
switch (G__32611) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31159__auto___33316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_32653){
var state_val_32654 = (state_32653[(1)]);
if((state_val_32654 === (7))){
var inst_32649 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
var statearr_32655_33317 = state_32653__$1;
(statearr_32655_33317[(2)] = inst_32649);

(statearr_32655_33317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (1))){
var inst_32612 = [];
var inst_32613 = inst_32612;
var inst_32614 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32653__$1 = (function (){var statearr_32656 = state_32653;
(statearr_32656[(7)] = inst_32613);

(statearr_32656[(8)] = inst_32614);

return statearr_32656;
})();
var statearr_32657_33318 = state_32653__$1;
(statearr_32657_33318[(2)] = null);

(statearr_32657_33318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (4))){
var inst_32617 = (state_32653[(9)]);
var inst_32617__$1 = (state_32653[(2)]);
var inst_32618 = (inst_32617__$1 == null);
var inst_32619 = cljs.core.not(inst_32618);
var state_32653__$1 = (function (){var statearr_32658 = state_32653;
(statearr_32658[(9)] = inst_32617__$1);

return statearr_32658;
})();
if(inst_32619){
var statearr_32659_33319 = state_32653__$1;
(statearr_32659_33319[(1)] = (5));

} else {
var statearr_32660_33320 = state_32653__$1;
(statearr_32660_33320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (15))){
var inst_32643 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
var statearr_32661_33321 = state_32653__$1;
(statearr_32661_33321[(2)] = inst_32643);

(statearr_32661_33321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (13))){
var state_32653__$1 = state_32653;
var statearr_32662_33322 = state_32653__$1;
(statearr_32662_33322[(2)] = null);

(statearr_32662_33322[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (6))){
var inst_32613 = (state_32653[(7)]);
var inst_32638 = inst_32613.length;
var inst_32639 = (inst_32638 > (0));
var state_32653__$1 = state_32653;
if(cljs.core.truth_(inst_32639)){
var statearr_32663_33323 = state_32653__$1;
(statearr_32663_33323[(1)] = (12));

} else {
var statearr_32664_33324 = state_32653__$1;
(statearr_32664_33324[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (3))){
var inst_32651 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32653__$1,inst_32651);
} else {
if((state_val_32654 === (12))){
var inst_32613 = (state_32653[(7)]);
var inst_32641 = cljs.core.vec(inst_32613);
var state_32653__$1 = state_32653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32653__$1,(15),out,inst_32641);
} else {
if((state_val_32654 === (2))){
var state_32653__$1 = state_32653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32653__$1,(4),ch);
} else {
if((state_val_32654 === (11))){
var inst_32621 = (state_32653[(10)]);
var inst_32617 = (state_32653[(9)]);
var inst_32631 = (state_32653[(2)]);
var inst_32632 = [];
var inst_32633 = inst_32632.push(inst_32617);
var inst_32613 = inst_32632;
var inst_32614 = inst_32621;
var state_32653__$1 = (function (){var statearr_32665 = state_32653;
(statearr_32665[(7)] = inst_32613);

(statearr_32665[(11)] = inst_32631);

(statearr_32665[(8)] = inst_32614);

(statearr_32665[(12)] = inst_32633);

return statearr_32665;
})();
var statearr_32666_33325 = state_32653__$1;
(statearr_32666_33325[(2)] = null);

(statearr_32666_33325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (9))){
var inst_32613 = (state_32653[(7)]);
var inst_32629 = cljs.core.vec(inst_32613);
var state_32653__$1 = state_32653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32653__$1,(11),out,inst_32629);
} else {
if((state_val_32654 === (5))){
var inst_32621 = (state_32653[(10)]);
var inst_32614 = (state_32653[(8)]);
var inst_32617 = (state_32653[(9)]);
var inst_32621__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32617) : f.call(null,inst_32617));
var inst_32622 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32621__$1,inst_32614);
var inst_32623 = cljs.core.keyword_identical_QMARK_(inst_32614,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32624 = ((inst_32622) || (inst_32623));
var state_32653__$1 = (function (){var statearr_32667 = state_32653;
(statearr_32667[(10)] = inst_32621__$1);

return statearr_32667;
})();
if(cljs.core.truth_(inst_32624)){
var statearr_32668_33326 = state_32653__$1;
(statearr_32668_33326[(1)] = (8));

} else {
var statearr_32669_33327 = state_32653__$1;
(statearr_32669_33327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (14))){
var inst_32646 = (state_32653[(2)]);
var inst_32647 = cljs.core.async.close_BANG_(out);
var state_32653__$1 = (function (){var statearr_32671 = state_32653;
(statearr_32671[(13)] = inst_32646);

return statearr_32671;
})();
var statearr_32672_33328 = state_32653__$1;
(statearr_32672_33328[(2)] = inst_32647);

(statearr_32672_33328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (10))){
var inst_32636 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
var statearr_32673_33329 = state_32653__$1;
(statearr_32673_33329[(2)] = inst_32636);

(statearr_32673_33329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (8))){
var inst_32613 = (state_32653[(7)]);
var inst_32621 = (state_32653[(10)]);
var inst_32617 = (state_32653[(9)]);
var inst_32626 = inst_32613.push(inst_32617);
var tmp32670 = inst_32613;
var inst_32613__$1 = tmp32670;
var inst_32614 = inst_32621;
var state_32653__$1 = (function (){var statearr_32674 = state_32653;
(statearr_32674[(7)] = inst_32613__$1);

(statearr_32674[(14)] = inst_32626);

(statearr_32674[(8)] = inst_32614);

return statearr_32674;
})();
var statearr_32675_33330 = state_32653__$1;
(statearr_32675_33330[(2)] = null);

(statearr_32675_33330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31124__auto__ = null;
var cljs$core$async$state_machine__31124__auto____0 = (function (){
var statearr_32676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32676[(0)] = cljs$core$async$state_machine__31124__auto__);

(statearr_32676[(1)] = (1));

return statearr_32676;
});
var cljs$core$async$state_machine__31124__auto____1 = (function (state_32653){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_32653);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e32677){var ex__31127__auto__ = e32677;
var statearr_32678_33334 = state_32653;
(statearr_32678_33334[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_32653[(4)]))){
var statearr_32679_33335 = state_32653;
(statearr_32679_33335[(1)] = cljs.core.first((state_32653[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33336 = state_32653;
state_32653 = G__33336;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
cljs$core$async$state_machine__31124__auto__ = function(state_32653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31124__auto____1.call(this,state_32653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31124__auto____0;
cljs$core$async$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31124__auto____1;
return cljs$core$async$state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_32680 = f__31160__auto__();
(statearr_32680[(6)] = c__31159__auto___33316);

return statearr_32680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
