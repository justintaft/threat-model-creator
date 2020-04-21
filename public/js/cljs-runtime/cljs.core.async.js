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
var G__31232 = arguments.length;
switch (G__31232) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31233 = (function (f,blockable,meta31234){
this.f = f;
this.blockable = blockable;
this.meta31234 = meta31234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31235,meta31234__$1){
var self__ = this;
var _31235__$1 = this;
return (new cljs.core.async.t_cljs$core$async31233(self__.f,self__.blockable,meta31234__$1));
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
return true;
}));

(cljs.core.async.t_cljs$core$async31233.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31233.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31234","meta31234",1157127298,null)], null);
}));

(cljs.core.async.t_cljs$core$async31233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31233");

(cljs.core.async.t_cljs$core$async31233.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31233.
 */
cljs.core.async.__GT_t_cljs$core$async31233 = (function cljs$core$async$__GT_t_cljs$core$async31233(f__$1,blockable__$1,meta31234){
return (new cljs.core.async.t_cljs$core$async31233(f__$1,blockable__$1,meta31234));
});

}

return (new cljs.core.async.t_cljs$core$async31233(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31238 = arguments.length;
switch (G__31238) {
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
var G__31240 = arguments.length;
switch (G__31240) {
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
var G__31242 = arguments.length;
switch (G__31242) {
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
var val_32700 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32700) : fn1.call(null,val_32700));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32700) : fn1.call(null,val_32700));
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
var G__31244 = arguments.length;
switch (G__31244) {
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
var n__4666__auto___32702 = n;
var x_32703 = (0);
while(true){
if((x_32703 < n__4666__auto___32702)){
(a[x_32703] = x_32703);

var G__32704 = (x_32703 + (1));
x_32703 = G__32704;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31245 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31245 = (function (flag,meta31246){
this.flag = flag;
this.meta31246 = meta31246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31247,meta31246__$1){
var self__ = this;
var _31247__$1 = this;
return (new cljs.core.async.t_cljs$core$async31245(self__.flag,meta31246__$1));
}));

(cljs.core.async.t_cljs$core$async31245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31247){
var self__ = this;
var _31247__$1 = this;
return self__.meta31246;
}));

(cljs.core.async.t_cljs$core$async31245.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31245.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31245.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31245.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31246","meta31246",1180961022,null)], null);
}));

(cljs.core.async.t_cljs$core$async31245.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31245");

(cljs.core.async.t_cljs$core$async31245.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31245");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31245.
 */
cljs.core.async.__GT_t_cljs$core$async31245 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31245(flag__$1,meta31246){
return (new cljs.core.async.t_cljs$core$async31245(flag__$1,meta31246));
});

}

return (new cljs.core.async.t_cljs$core$async31245(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31248 = (function (flag,cb,meta31249){
this.flag = flag;
this.cb = cb;
this.meta31249 = meta31249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31250,meta31249__$1){
var self__ = this;
var _31250__$1 = this;
return (new cljs.core.async.t_cljs$core$async31248(self__.flag,self__.cb,meta31249__$1));
}));

(cljs.core.async.t_cljs$core$async31248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31250){
var self__ = this;
var _31250__$1 = this;
return self__.meta31249;
}));

(cljs.core.async.t_cljs$core$async31248.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31248.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31249","meta31249",706159742,null)], null);
}));

(cljs.core.async.t_cljs$core$async31248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31248");

(cljs.core.async.t_cljs$core$async31248.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31248.
 */
cljs.core.async.__GT_t_cljs$core$async31248 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31248(flag__$1,cb__$1,meta31249){
return (new cljs.core.async.t_cljs$core$async31248(flag__$1,cb__$1,meta31249));
});

}

return (new cljs.core.async.t_cljs$core$async31248(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31251_SHARP_){
var G__31253 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31251_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31253) : fret.call(null,G__31253));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31252_SHARP_){
var G__31254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31252_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31254) : fret.call(null,G__31254));
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
var G__32705 = (i + (1));
i = G__32705;
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
var len__4789__auto___32708 = arguments.length;
var i__4790__auto___32709 = (0);
while(true){
if((i__4790__auto___32709 < len__4789__auto___32708)){
args__4795__auto__.push((arguments[i__4790__auto___32709]));

var G__32711 = (i__4790__auto___32709 + (1));
i__4790__auto___32709 = G__32711;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31257){
var map__31258 = p__31257;
var map__31258__$1 = (((((!((map__31258 == null))))?(((((map__31258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31258):map__31258);
var opts = map__31258__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31255){
var G__31256 = cljs.core.first(seq31255);
var seq31255__$1 = cljs.core.next(seq31255);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31256,seq31255__$1);
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
var G__31261 = arguments.length;
switch (G__31261) {
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
var c__31174__auto___32717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_31285){
var state_val_31286 = (state_31285[(1)]);
if((state_val_31286 === (7))){
var inst_31281 = (state_31285[(2)]);
var state_31285__$1 = state_31285;
var statearr_31287_32721 = state_31285__$1;
(statearr_31287_32721[(2)] = inst_31281);

(statearr_31287_32721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31286 === (1))){
var state_31285__$1 = state_31285;
var statearr_31288_32722 = state_31285__$1;
(statearr_31288_32722[(2)] = null);

(statearr_31288_32722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31286 === (4))){
var inst_31264 = (state_31285[(7)]);
var inst_31264__$1 = (state_31285[(2)]);
var inst_31265 = (inst_31264__$1 == null);
var state_31285__$1 = (function (){var statearr_31289 = state_31285;
(statearr_31289[(7)] = inst_31264__$1);

return statearr_31289;
})();
if(cljs.core.truth_(inst_31265)){
var statearr_31290_32723 = state_31285__$1;
(statearr_31290_32723[(1)] = (5));

} else {
var statearr_31291_32724 = state_31285__$1;
(statearr_31291_32724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31286 === (13))){
var state_31285__$1 = state_31285;
var statearr_31292_32728 = state_31285__$1;
(statearr_31292_32728[(2)] = null);

(statearr_31292_32728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31286 === (6))){
var inst_31264 = (state_31285[(7)]);
var state_31285__$1 = state_31285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31285__$1,(11),to,inst_31264);
} else {
if((state_val_31286 === (3))){
var inst_31283 = (state_31285[(2)]);
var state_31285__$1 = state_31285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31285__$1,inst_31283);
} else {
if((state_val_31286 === (12))){
var state_31285__$1 = state_31285;
var statearr_31293_32731 = state_31285__$1;
(statearr_31293_32731[(2)] = null);

(statearr_31293_32731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31286 === (2))){
var state_31285__$1 = state_31285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31285__$1,(4),from);
} else {
if((state_val_31286 === (11))){
var inst_31274 = (state_31285[(2)]);
var state_31285__$1 = state_31285;
if(cljs.core.truth_(inst_31274)){
var statearr_31294_32732 = state_31285__$1;
(statearr_31294_32732[(1)] = (12));

} else {
var statearr_31295_32733 = state_31285__$1;
(statearr_31295_32733[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31286 === (9))){
var state_31285__$1 = state_31285;
var statearr_31296_32734 = state_31285__$1;
(statearr_31296_32734[(2)] = null);

(statearr_31296_32734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31286 === (5))){
var state_31285__$1 = state_31285;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31297_32737 = state_31285__$1;
(statearr_31297_32737[(1)] = (8));

} else {
var statearr_31298_32738 = state_31285__$1;
(statearr_31298_32738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31286 === (14))){
var inst_31279 = (state_31285[(2)]);
var state_31285__$1 = state_31285;
var statearr_31299_32739 = state_31285__$1;
(statearr_31299_32739[(2)] = inst_31279);

(statearr_31299_32739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31286 === (10))){
var inst_31271 = (state_31285[(2)]);
var state_31285__$1 = state_31285;
var statearr_31300_32740 = state_31285__$1;
(statearr_31300_32740[(2)] = inst_31271);

(statearr_31300_32740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31286 === (8))){
var inst_31268 = cljs.core.async.close_BANG_(to);
var state_31285__$1 = state_31285;
var statearr_31301_32741 = state_31285__$1;
(statearr_31301_32741[(2)] = inst_31268);

(statearr_31301_32741[(1)] = (10));


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
var cljs$core$async$state_machine__31139__auto__ = null;
var cljs$core$async$state_machine__31139__auto____0 = (function (){
var statearr_31302 = [null,null,null,null,null,null,null,null];
(statearr_31302[(0)] = cljs$core$async$state_machine__31139__auto__);

(statearr_31302[(1)] = (1));

return statearr_31302;
});
var cljs$core$async$state_machine__31139__auto____1 = (function (state_31285){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_31285);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e31303){var ex__31142__auto__ = e31303;
var statearr_31304_32744 = state_31285;
(statearr_31304_32744[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_31285[(4)]))){
var statearr_31305_32745 = state_31285;
(statearr_31305_32745[(1)] = cljs.core.first((state_31285[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32746 = state_31285;
state_31285 = G__32746;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$state_machine__31139__auto__ = function(state_31285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31139__auto____1.call(this,state_31285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31139__auto____0;
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31139__auto____1;
return cljs$core$async$state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_31306 = f__31175__auto__();
(statearr_31306[(6)] = c__31174__auto___32717);

return statearr_31306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
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
var process = (function (p__31307){
var vec__31308 = p__31307;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31308,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31308,(1),null);
var job = vec__31308;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31174__auto___32747 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_31315){
var state_val_31316 = (state_31315[(1)]);
if((state_val_31316 === (1))){
var state_31315__$1 = state_31315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31315__$1,(2),res,v);
} else {
if((state_val_31316 === (2))){
var inst_31312 = (state_31315[(2)]);
var inst_31313 = cljs.core.async.close_BANG_(res);
var state_31315__$1 = (function (){var statearr_31317 = state_31315;
(statearr_31317[(7)] = inst_31312);

return statearr_31317;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31315__$1,inst_31313);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0 = (function (){
var statearr_31318 = [null,null,null,null,null,null,null,null];
(statearr_31318[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__);

(statearr_31318[(1)] = (1));

return statearr_31318;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1 = (function (state_31315){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_31315);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e31319){var ex__31142__auto__ = e31319;
var statearr_31320_32748 = state_31315;
(statearr_31320_32748[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_31315[(4)]))){
var statearr_31321_32749 = state_31315;
(statearr_31321_32749[(1)] = cljs.core.first((state_31315[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32750 = state_31315;
state_31315 = G__32750;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__ = function(state_31315){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1.call(this,state_31315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_31322 = f__31175__auto__();
(statearr_31322[(6)] = c__31174__auto___32747);

return statearr_31322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31323){
var vec__31324 = p__31323;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31324,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31324,(1),null);
var job = vec__31324;
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
var n__4666__auto___32753 = n;
var __32754 = (0);
while(true){
if((__32754 < n__4666__auto___32753)){
var G__31327_32755 = type;
var G__31327_32756__$1 = (((G__31327_32755 instanceof cljs.core.Keyword))?G__31327_32755.fqn:null);
switch (G__31327_32756__$1) {
case "compute":
var c__31174__auto___32758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32754,c__31174__auto___32758,G__31327_32755,G__31327_32756__$1,n__4666__auto___32753,jobs,results,process,async){
return (function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = ((function (__32754,c__31174__auto___32758,G__31327_32755,G__31327_32756__$1,n__4666__auto___32753,jobs,results,process,async){
return (function (state_31340){
var state_val_31341 = (state_31340[(1)]);
if((state_val_31341 === (1))){
var state_31340__$1 = state_31340;
var statearr_31342_32759 = state_31340__$1;
(statearr_31342_32759[(2)] = null);

(statearr_31342_32759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (2))){
var state_31340__$1 = state_31340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31340__$1,(4),jobs);
} else {
if((state_val_31341 === (3))){
var inst_31338 = (state_31340[(2)]);
var state_31340__$1 = state_31340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31340__$1,inst_31338);
} else {
if((state_val_31341 === (4))){
var inst_31330 = (state_31340[(2)]);
var inst_31331 = process(inst_31330);
var state_31340__$1 = state_31340;
if(cljs.core.truth_(inst_31331)){
var statearr_31343_32760 = state_31340__$1;
(statearr_31343_32760[(1)] = (5));

} else {
var statearr_31344_32761 = state_31340__$1;
(statearr_31344_32761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (5))){
var state_31340__$1 = state_31340;
var statearr_31345_32762 = state_31340__$1;
(statearr_31345_32762[(2)] = null);

(statearr_31345_32762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (6))){
var state_31340__$1 = state_31340;
var statearr_31346_32763 = state_31340__$1;
(statearr_31346_32763[(2)] = null);

(statearr_31346_32763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (7))){
var inst_31336 = (state_31340[(2)]);
var state_31340__$1 = state_31340;
var statearr_31347_32764 = state_31340__$1;
(statearr_31347_32764[(2)] = inst_31336);

(statearr_31347_32764[(1)] = (3));


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
});})(__32754,c__31174__auto___32758,G__31327_32755,G__31327_32756__$1,n__4666__auto___32753,jobs,results,process,async))
;
return ((function (__32754,switch__31138__auto__,c__31174__auto___32758,G__31327_32755,G__31327_32756__$1,n__4666__auto___32753,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0 = (function (){
var statearr_31348 = [null,null,null,null,null,null,null];
(statearr_31348[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__);

(statearr_31348[(1)] = (1));

return statearr_31348;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1 = (function (state_31340){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_31340);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e31349){var ex__31142__auto__ = e31349;
var statearr_31350_32765 = state_31340;
(statearr_31350_32765[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_31340[(4)]))){
var statearr_31351_32766 = state_31340;
(statearr_31351_32766[(1)] = cljs.core.first((state_31340[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32767 = state_31340;
state_31340 = G__32767;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__ = function(state_31340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1.call(this,state_31340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__;
})()
;})(__32754,switch__31138__auto__,c__31174__auto___32758,G__31327_32755,G__31327_32756__$1,n__4666__auto___32753,jobs,results,process,async))
})();
var state__31176__auto__ = (function (){var statearr_31352 = f__31175__auto__();
(statearr_31352[(6)] = c__31174__auto___32758);

return statearr_31352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
});})(__32754,c__31174__auto___32758,G__31327_32755,G__31327_32756__$1,n__4666__auto___32753,jobs,results,process,async))
);


break;
case "async":
var c__31174__auto___32768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32754,c__31174__auto___32768,G__31327_32755,G__31327_32756__$1,n__4666__auto___32753,jobs,results,process,async){
return (function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = ((function (__32754,c__31174__auto___32768,G__31327_32755,G__31327_32756__$1,n__4666__auto___32753,jobs,results,process,async){
return (function (state_31365){
var state_val_31366 = (state_31365[(1)]);
if((state_val_31366 === (1))){
var state_31365__$1 = state_31365;
var statearr_31367_32769 = state_31365__$1;
(statearr_31367_32769[(2)] = null);

(statearr_31367_32769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (2))){
var state_31365__$1 = state_31365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31365__$1,(4),jobs);
} else {
if((state_val_31366 === (3))){
var inst_31363 = (state_31365[(2)]);
var state_31365__$1 = state_31365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31365__$1,inst_31363);
} else {
if((state_val_31366 === (4))){
var inst_31355 = (state_31365[(2)]);
var inst_31356 = async(inst_31355);
var state_31365__$1 = state_31365;
if(cljs.core.truth_(inst_31356)){
var statearr_31368_32770 = state_31365__$1;
(statearr_31368_32770[(1)] = (5));

} else {
var statearr_31369_32771 = state_31365__$1;
(statearr_31369_32771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (5))){
var state_31365__$1 = state_31365;
var statearr_31370_32772 = state_31365__$1;
(statearr_31370_32772[(2)] = null);

(statearr_31370_32772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (6))){
var state_31365__$1 = state_31365;
var statearr_31371_32773 = state_31365__$1;
(statearr_31371_32773[(2)] = null);

(statearr_31371_32773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (7))){
var inst_31361 = (state_31365[(2)]);
var state_31365__$1 = state_31365;
var statearr_31372_32774 = state_31365__$1;
(statearr_31372_32774[(2)] = inst_31361);

(statearr_31372_32774[(1)] = (3));


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
});})(__32754,c__31174__auto___32768,G__31327_32755,G__31327_32756__$1,n__4666__auto___32753,jobs,results,process,async))
;
return ((function (__32754,switch__31138__auto__,c__31174__auto___32768,G__31327_32755,G__31327_32756__$1,n__4666__auto___32753,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0 = (function (){
var statearr_31373 = [null,null,null,null,null,null,null];
(statearr_31373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__);

(statearr_31373[(1)] = (1));

return statearr_31373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1 = (function (state_31365){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_31365);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e31374){var ex__31142__auto__ = e31374;
var statearr_31375_32775 = state_31365;
(statearr_31375_32775[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_31365[(4)]))){
var statearr_31376_32776 = state_31365;
(statearr_31376_32776[(1)] = cljs.core.first((state_31365[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32778 = state_31365;
state_31365 = G__32778;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__ = function(state_31365){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1.call(this,state_31365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__;
})()
;})(__32754,switch__31138__auto__,c__31174__auto___32768,G__31327_32755,G__31327_32756__$1,n__4666__auto___32753,jobs,results,process,async))
})();
var state__31176__auto__ = (function (){var statearr_31377 = f__31175__auto__();
(statearr_31377[(6)] = c__31174__auto___32768);

return statearr_31377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
});})(__32754,c__31174__auto___32768,G__31327_32755,G__31327_32756__$1,n__4666__auto___32753,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31327_32756__$1)].join('')));

}

var G__32779 = (__32754 + (1));
__32754 = G__32779;
continue;
} else {
}
break;
}

var c__31174__auto___32780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_31399){
var state_val_31400 = (state_31399[(1)]);
if((state_val_31400 === (7))){
var inst_31395 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
var statearr_31401_32783 = state_31399__$1;
(statearr_31401_32783[(2)] = inst_31395);

(statearr_31401_32783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (1))){
var state_31399__$1 = state_31399;
var statearr_31402_32784 = state_31399__$1;
(statearr_31402_32784[(2)] = null);

(statearr_31402_32784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (4))){
var inst_31380 = (state_31399[(7)]);
var inst_31380__$1 = (state_31399[(2)]);
var inst_31381 = (inst_31380__$1 == null);
var state_31399__$1 = (function (){var statearr_31403 = state_31399;
(statearr_31403[(7)] = inst_31380__$1);

return statearr_31403;
})();
if(cljs.core.truth_(inst_31381)){
var statearr_31404_32785 = state_31399__$1;
(statearr_31404_32785[(1)] = (5));

} else {
var statearr_31405_32786 = state_31399__$1;
(statearr_31405_32786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (6))){
var inst_31380 = (state_31399[(7)]);
var inst_31385 = (state_31399[(8)]);
var inst_31385__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31386 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31387 = [inst_31380,inst_31385__$1];
var inst_31388 = (new cljs.core.PersistentVector(null,2,(5),inst_31386,inst_31387,null));
var state_31399__$1 = (function (){var statearr_31406 = state_31399;
(statearr_31406[(8)] = inst_31385__$1);

return statearr_31406;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31399__$1,(8),jobs,inst_31388);
} else {
if((state_val_31400 === (3))){
var inst_31397 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31399__$1,inst_31397);
} else {
if((state_val_31400 === (2))){
var state_31399__$1 = state_31399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31399__$1,(4),from);
} else {
if((state_val_31400 === (9))){
var inst_31392 = (state_31399[(2)]);
var state_31399__$1 = (function (){var statearr_31407 = state_31399;
(statearr_31407[(9)] = inst_31392);

return statearr_31407;
})();
var statearr_31408_32789 = state_31399__$1;
(statearr_31408_32789[(2)] = null);

(statearr_31408_32789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (5))){
var inst_31383 = cljs.core.async.close_BANG_(jobs);
var state_31399__$1 = state_31399;
var statearr_31409_32791 = state_31399__$1;
(statearr_31409_32791[(2)] = inst_31383);

(statearr_31409_32791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (8))){
var inst_31385 = (state_31399[(8)]);
var inst_31390 = (state_31399[(2)]);
var state_31399__$1 = (function (){var statearr_31410 = state_31399;
(statearr_31410[(10)] = inst_31390);

return statearr_31410;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31399__$1,(9),results,inst_31385);
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
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0 = (function (){
var statearr_31411 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__);

(statearr_31411[(1)] = (1));

return statearr_31411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1 = (function (state_31399){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_31399);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e31412){var ex__31142__auto__ = e31412;
var statearr_31413_32793 = state_31399;
(statearr_31413_32793[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_31399[(4)]))){
var statearr_31414_32795 = state_31399;
(statearr_31414_32795[(1)] = cljs.core.first((state_31399[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32797 = state_31399;
state_31399 = G__32797;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__ = function(state_31399){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1.call(this,state_31399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_31415 = f__31175__auto__();
(statearr_31415[(6)] = c__31174__auto___32780);

return statearr_31415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
}));


var c__31174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_31453){
var state_val_31454 = (state_31453[(1)]);
if((state_val_31454 === (7))){
var inst_31449 = (state_31453[(2)]);
var state_31453__$1 = state_31453;
var statearr_31455_32798 = state_31453__$1;
(statearr_31455_32798[(2)] = inst_31449);

(statearr_31455_32798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (20))){
var state_31453__$1 = state_31453;
var statearr_31456_32799 = state_31453__$1;
(statearr_31456_32799[(2)] = null);

(statearr_31456_32799[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (1))){
var state_31453__$1 = state_31453;
var statearr_31457_32801 = state_31453__$1;
(statearr_31457_32801[(2)] = null);

(statearr_31457_32801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (4))){
var inst_31418 = (state_31453[(7)]);
var inst_31418__$1 = (state_31453[(2)]);
var inst_31419 = (inst_31418__$1 == null);
var state_31453__$1 = (function (){var statearr_31458 = state_31453;
(statearr_31458[(7)] = inst_31418__$1);

return statearr_31458;
})();
if(cljs.core.truth_(inst_31419)){
var statearr_31459_32803 = state_31453__$1;
(statearr_31459_32803[(1)] = (5));

} else {
var statearr_31460_32804 = state_31453__$1;
(statearr_31460_32804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (15))){
var inst_31431 = (state_31453[(8)]);
var state_31453__$1 = state_31453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31453__$1,(18),to,inst_31431);
} else {
if((state_val_31454 === (21))){
var inst_31444 = (state_31453[(2)]);
var state_31453__$1 = state_31453;
var statearr_31461_32805 = state_31453__$1;
(statearr_31461_32805[(2)] = inst_31444);

(statearr_31461_32805[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (13))){
var inst_31446 = (state_31453[(2)]);
var state_31453__$1 = (function (){var statearr_31462 = state_31453;
(statearr_31462[(9)] = inst_31446);

return statearr_31462;
})();
var statearr_31463_32806 = state_31453__$1;
(statearr_31463_32806[(2)] = null);

(statearr_31463_32806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (6))){
var inst_31418 = (state_31453[(7)]);
var state_31453__$1 = state_31453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31453__$1,(11),inst_31418);
} else {
if((state_val_31454 === (17))){
var inst_31439 = (state_31453[(2)]);
var state_31453__$1 = state_31453;
if(cljs.core.truth_(inst_31439)){
var statearr_31464_32807 = state_31453__$1;
(statearr_31464_32807[(1)] = (19));

} else {
var statearr_31465_32808 = state_31453__$1;
(statearr_31465_32808[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (3))){
var inst_31451 = (state_31453[(2)]);
var state_31453__$1 = state_31453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31453__$1,inst_31451);
} else {
if((state_val_31454 === (12))){
var inst_31428 = (state_31453[(10)]);
var state_31453__$1 = state_31453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31453__$1,(14),inst_31428);
} else {
if((state_val_31454 === (2))){
var state_31453__$1 = state_31453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31453__$1,(4),results);
} else {
if((state_val_31454 === (19))){
var state_31453__$1 = state_31453;
var statearr_31466_32810 = state_31453__$1;
(statearr_31466_32810[(2)] = null);

(statearr_31466_32810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (11))){
var inst_31428 = (state_31453[(2)]);
var state_31453__$1 = (function (){var statearr_31467 = state_31453;
(statearr_31467[(10)] = inst_31428);

return statearr_31467;
})();
var statearr_31468_32811 = state_31453__$1;
(statearr_31468_32811[(2)] = null);

(statearr_31468_32811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (9))){
var state_31453__$1 = state_31453;
var statearr_31469_32812 = state_31453__$1;
(statearr_31469_32812[(2)] = null);

(statearr_31469_32812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (5))){
var state_31453__$1 = state_31453;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31470_32814 = state_31453__$1;
(statearr_31470_32814[(1)] = (8));

} else {
var statearr_31471_32815 = state_31453__$1;
(statearr_31471_32815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (14))){
var inst_31431 = (state_31453[(8)]);
var inst_31431__$1 = (state_31453[(2)]);
var inst_31432 = (inst_31431__$1 == null);
var inst_31433 = cljs.core.not(inst_31432);
var state_31453__$1 = (function (){var statearr_31472 = state_31453;
(statearr_31472[(8)] = inst_31431__$1);

return statearr_31472;
})();
if(inst_31433){
var statearr_31473_32816 = state_31453__$1;
(statearr_31473_32816[(1)] = (15));

} else {
var statearr_31474_32817 = state_31453__$1;
(statearr_31474_32817[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (16))){
var state_31453__$1 = state_31453;
var statearr_31475_32818 = state_31453__$1;
(statearr_31475_32818[(2)] = false);

(statearr_31475_32818[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (10))){
var inst_31425 = (state_31453[(2)]);
var state_31453__$1 = state_31453;
var statearr_31476_32819 = state_31453__$1;
(statearr_31476_32819[(2)] = inst_31425);

(statearr_31476_32819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (18))){
var inst_31436 = (state_31453[(2)]);
var state_31453__$1 = state_31453;
var statearr_31477_32820 = state_31453__$1;
(statearr_31477_32820[(2)] = inst_31436);

(statearr_31477_32820[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (8))){
var inst_31422 = cljs.core.async.close_BANG_(to);
var state_31453__$1 = state_31453;
var statearr_31478_32821 = state_31453__$1;
(statearr_31478_32821[(2)] = inst_31422);

(statearr_31478_32821[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0 = (function (){
var statearr_31479 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__);

(statearr_31479[(1)] = (1));

return statearr_31479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1 = (function (state_31453){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_31453);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e31480){var ex__31142__auto__ = e31480;
var statearr_31481_32823 = state_31453;
(statearr_31481_32823[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_31453[(4)]))){
var statearr_31482_32824 = state_31453;
(statearr_31482_32824[(1)] = cljs.core.first((state_31453[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32825 = state_31453;
state_31453 = G__32825;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__ = function(state_31453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1.call(this,state_31453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_31483 = f__31175__auto__();
(statearr_31483[(6)] = c__31174__auto__);

return statearr_31483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
}));

return c__31174__auto__;
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
var G__31485 = arguments.length;
switch (G__31485) {
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
var G__31487 = arguments.length;
switch (G__31487) {
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
var G__31489 = arguments.length;
switch (G__31489) {
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
var c__31174__auto___32833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_31515){
var state_val_31516 = (state_31515[(1)]);
if((state_val_31516 === (7))){
var inst_31511 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
var statearr_31517_32836 = state_31515__$1;
(statearr_31517_32836[(2)] = inst_31511);

(statearr_31517_32836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (1))){
var state_31515__$1 = state_31515;
var statearr_31518_32837 = state_31515__$1;
(statearr_31518_32837[(2)] = null);

(statearr_31518_32837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (4))){
var inst_31492 = (state_31515[(7)]);
var inst_31492__$1 = (state_31515[(2)]);
var inst_31493 = (inst_31492__$1 == null);
var state_31515__$1 = (function (){var statearr_31519 = state_31515;
(statearr_31519[(7)] = inst_31492__$1);

return statearr_31519;
})();
if(cljs.core.truth_(inst_31493)){
var statearr_31520_32838 = state_31515__$1;
(statearr_31520_32838[(1)] = (5));

} else {
var statearr_31521_32839 = state_31515__$1;
(statearr_31521_32839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (13))){
var state_31515__$1 = state_31515;
var statearr_31522_32840 = state_31515__$1;
(statearr_31522_32840[(2)] = null);

(statearr_31522_32840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (6))){
var inst_31492 = (state_31515[(7)]);
var inst_31498 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31492) : p.call(null,inst_31492));
var state_31515__$1 = state_31515;
if(cljs.core.truth_(inst_31498)){
var statearr_31523_32841 = state_31515__$1;
(statearr_31523_32841[(1)] = (9));

} else {
var statearr_31524_32842 = state_31515__$1;
(statearr_31524_32842[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (3))){
var inst_31513 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31515__$1,inst_31513);
} else {
if((state_val_31516 === (12))){
var state_31515__$1 = state_31515;
var statearr_31525_32843 = state_31515__$1;
(statearr_31525_32843[(2)] = null);

(statearr_31525_32843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (2))){
var state_31515__$1 = state_31515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31515__$1,(4),ch);
} else {
if((state_val_31516 === (11))){
var inst_31492 = (state_31515[(7)]);
var inst_31502 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31515__$1,(8),inst_31502,inst_31492);
} else {
if((state_val_31516 === (9))){
var state_31515__$1 = state_31515;
var statearr_31526_32848 = state_31515__$1;
(statearr_31526_32848[(2)] = tc);

(statearr_31526_32848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (5))){
var inst_31495 = cljs.core.async.close_BANG_(tc);
var inst_31496 = cljs.core.async.close_BANG_(fc);
var state_31515__$1 = (function (){var statearr_31527 = state_31515;
(statearr_31527[(8)] = inst_31495);

return statearr_31527;
})();
var statearr_31528_32852 = state_31515__$1;
(statearr_31528_32852[(2)] = inst_31496);

(statearr_31528_32852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (14))){
var inst_31509 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
var statearr_31529_32853 = state_31515__$1;
(statearr_31529_32853[(2)] = inst_31509);

(statearr_31529_32853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (10))){
var state_31515__$1 = state_31515;
var statearr_31530_32857 = state_31515__$1;
(statearr_31530_32857[(2)] = fc);

(statearr_31530_32857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (8))){
var inst_31504 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
if(cljs.core.truth_(inst_31504)){
var statearr_31531_32861 = state_31515__$1;
(statearr_31531_32861[(1)] = (12));

} else {
var statearr_31532_32862 = state_31515__$1;
(statearr_31532_32862[(1)] = (13));

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
var cljs$core$async$state_machine__31139__auto__ = null;
var cljs$core$async$state_machine__31139__auto____0 = (function (){
var statearr_31533 = [null,null,null,null,null,null,null,null,null];
(statearr_31533[(0)] = cljs$core$async$state_machine__31139__auto__);

(statearr_31533[(1)] = (1));

return statearr_31533;
});
var cljs$core$async$state_machine__31139__auto____1 = (function (state_31515){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_31515);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e31534){var ex__31142__auto__ = e31534;
var statearr_31535_32866 = state_31515;
(statearr_31535_32866[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_31515[(4)]))){
var statearr_31536_32867 = state_31515;
(statearr_31536_32867[(1)] = cljs.core.first((state_31515[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32868 = state_31515;
state_31515 = G__32868;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$state_machine__31139__auto__ = function(state_31515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31139__auto____1.call(this,state_31515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31139__auto____0;
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31139__auto____1;
return cljs$core$async$state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_31537 = f__31175__auto__();
(statearr_31537[(6)] = c__31174__auto___32833);

return statearr_31537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
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
var c__31174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_31559){
var state_val_31560 = (state_31559[(1)]);
if((state_val_31560 === (7))){
var inst_31555 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31561_32876 = state_31559__$1;
(statearr_31561_32876[(2)] = inst_31555);

(statearr_31561_32876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (1))){
var inst_31538 = init;
var inst_31539 = inst_31538;
var state_31559__$1 = (function (){var statearr_31562 = state_31559;
(statearr_31562[(7)] = inst_31539);

return statearr_31562;
})();
var statearr_31563_32880 = state_31559__$1;
(statearr_31563_32880[(2)] = null);

(statearr_31563_32880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (4))){
var inst_31542 = (state_31559[(8)]);
var inst_31542__$1 = (state_31559[(2)]);
var inst_31543 = (inst_31542__$1 == null);
var state_31559__$1 = (function (){var statearr_31564 = state_31559;
(statearr_31564[(8)] = inst_31542__$1);

return statearr_31564;
})();
if(cljs.core.truth_(inst_31543)){
var statearr_31565_32884 = state_31559__$1;
(statearr_31565_32884[(1)] = (5));

} else {
var statearr_31566_32885 = state_31559__$1;
(statearr_31566_32885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (6))){
var inst_31546 = (state_31559[(9)]);
var inst_31539 = (state_31559[(7)]);
var inst_31542 = (state_31559[(8)]);
var inst_31546__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31539,inst_31542) : f.call(null,inst_31539,inst_31542));
var inst_31547 = cljs.core.reduced_QMARK_(inst_31546__$1);
var state_31559__$1 = (function (){var statearr_31567 = state_31559;
(statearr_31567[(9)] = inst_31546__$1);

return statearr_31567;
})();
if(inst_31547){
var statearr_31568_32886 = state_31559__$1;
(statearr_31568_32886[(1)] = (8));

} else {
var statearr_31569_32890 = state_31559__$1;
(statearr_31569_32890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (3))){
var inst_31557 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31559__$1,inst_31557);
} else {
if((state_val_31560 === (2))){
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31559__$1,(4),ch);
} else {
if((state_val_31560 === (9))){
var inst_31546 = (state_31559[(9)]);
var inst_31539 = inst_31546;
var state_31559__$1 = (function (){var statearr_31570 = state_31559;
(statearr_31570[(7)] = inst_31539);

return statearr_31570;
})();
var statearr_31571_32891 = state_31559__$1;
(statearr_31571_32891[(2)] = null);

(statearr_31571_32891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (5))){
var inst_31539 = (state_31559[(7)]);
var state_31559__$1 = state_31559;
var statearr_31572_32893 = state_31559__$1;
(statearr_31572_32893[(2)] = inst_31539);

(statearr_31572_32893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (10))){
var inst_31553 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31573_32894 = state_31559__$1;
(statearr_31573_32894[(2)] = inst_31553);

(statearr_31573_32894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (8))){
var inst_31546 = (state_31559[(9)]);
var inst_31549 = cljs.core.deref(inst_31546);
var state_31559__$1 = state_31559;
var statearr_31574_32895 = state_31559__$1;
(statearr_31574_32895[(2)] = inst_31549);

(statearr_31574_32895[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__31139__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31139__auto____0 = (function (){
var statearr_31575 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31575[(0)] = cljs$core$async$reduce_$_state_machine__31139__auto__);

(statearr_31575[(1)] = (1));

return statearr_31575;
});
var cljs$core$async$reduce_$_state_machine__31139__auto____1 = (function (state_31559){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_31559);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e31576){var ex__31142__auto__ = e31576;
var statearr_31577_32896 = state_31559;
(statearr_31577_32896[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_31559[(4)]))){
var statearr_31578_32897 = state_31559;
(statearr_31578_32897[(1)] = cljs.core.first((state_31559[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32898 = state_31559;
state_31559 = G__32898;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31139__auto__ = function(state_31559){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31139__auto____1.call(this,state_31559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31139__auto____0;
cljs$core$async$reduce_$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31139__auto____1;
return cljs$core$async$reduce_$_state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_31579 = f__31175__auto__();
(statearr_31579[(6)] = c__31174__auto__);

return statearr_31579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
}));

return c__31174__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_31585){
var state_val_31586 = (state_31585[(1)]);
if((state_val_31586 === (1))){
var inst_31580 = cljs.core.async.reduce(f__$1,init,ch);
var state_31585__$1 = state_31585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31585__$1,(2),inst_31580);
} else {
if((state_val_31586 === (2))){
var inst_31582 = (state_31585[(2)]);
var inst_31583 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31582) : f__$1.call(null,inst_31582));
var state_31585__$1 = state_31585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31585__$1,inst_31583);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31139__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31139__auto____0 = (function (){
var statearr_31587 = [null,null,null,null,null,null,null];
(statearr_31587[(0)] = cljs$core$async$transduce_$_state_machine__31139__auto__);

(statearr_31587[(1)] = (1));

return statearr_31587;
});
var cljs$core$async$transduce_$_state_machine__31139__auto____1 = (function (state_31585){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_31585);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e31588){var ex__31142__auto__ = e31588;
var statearr_31589_32899 = state_31585;
(statearr_31589_32899[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_31585[(4)]))){
var statearr_31590_32900 = state_31585;
(statearr_31590_32900[(1)] = cljs.core.first((state_31585[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32901 = state_31585;
state_31585 = G__32901;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31139__auto__ = function(state_31585){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31139__auto____1.call(this,state_31585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31139__auto____0;
cljs$core$async$transduce_$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31139__auto____1;
return cljs$core$async$transduce_$_state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_31591 = f__31175__auto__();
(statearr_31591[(6)] = c__31174__auto__);

return statearr_31591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
}));

return c__31174__auto__;
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
var G__31593 = arguments.length;
switch (G__31593) {
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
var c__31174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_31618){
var state_val_31619 = (state_31618[(1)]);
if((state_val_31619 === (7))){
var inst_31600 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
var statearr_31620_32903 = state_31618__$1;
(statearr_31620_32903[(2)] = inst_31600);

(statearr_31620_32903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (1))){
var inst_31594 = cljs.core.seq(coll);
var inst_31595 = inst_31594;
var state_31618__$1 = (function (){var statearr_31621 = state_31618;
(statearr_31621[(7)] = inst_31595);

return statearr_31621;
})();
var statearr_31622_32904 = state_31618__$1;
(statearr_31622_32904[(2)] = null);

(statearr_31622_32904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (4))){
var inst_31595 = (state_31618[(7)]);
var inst_31598 = cljs.core.first(inst_31595);
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31618__$1,(7),ch,inst_31598);
} else {
if((state_val_31619 === (13))){
var inst_31612 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
var statearr_31623_32906 = state_31618__$1;
(statearr_31623_32906[(2)] = inst_31612);

(statearr_31623_32906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (6))){
var inst_31603 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
if(cljs.core.truth_(inst_31603)){
var statearr_31624_32909 = state_31618__$1;
(statearr_31624_32909[(1)] = (8));

} else {
var statearr_31625_32910 = state_31618__$1;
(statearr_31625_32910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (3))){
var inst_31616 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31618__$1,inst_31616);
} else {
if((state_val_31619 === (12))){
var state_31618__$1 = state_31618;
var statearr_31626_32914 = state_31618__$1;
(statearr_31626_32914[(2)] = null);

(statearr_31626_32914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (2))){
var inst_31595 = (state_31618[(7)]);
var state_31618__$1 = state_31618;
if(cljs.core.truth_(inst_31595)){
var statearr_31627_32916 = state_31618__$1;
(statearr_31627_32916[(1)] = (4));

} else {
var statearr_31628_32917 = state_31618__$1;
(statearr_31628_32917[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (11))){
var inst_31609 = cljs.core.async.close_BANG_(ch);
var state_31618__$1 = state_31618;
var statearr_31629_32918 = state_31618__$1;
(statearr_31629_32918[(2)] = inst_31609);

(statearr_31629_32918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (9))){
var state_31618__$1 = state_31618;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31630_32919 = state_31618__$1;
(statearr_31630_32919[(1)] = (11));

} else {
var statearr_31631_32920 = state_31618__$1;
(statearr_31631_32920[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (5))){
var inst_31595 = (state_31618[(7)]);
var state_31618__$1 = state_31618;
var statearr_31632_32923 = state_31618__$1;
(statearr_31632_32923[(2)] = inst_31595);

(statearr_31632_32923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (10))){
var inst_31614 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
var statearr_31633_32924 = state_31618__$1;
(statearr_31633_32924[(2)] = inst_31614);

(statearr_31633_32924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (8))){
var inst_31595 = (state_31618[(7)]);
var inst_31605 = cljs.core.next(inst_31595);
var inst_31595__$1 = inst_31605;
var state_31618__$1 = (function (){var statearr_31634 = state_31618;
(statearr_31634[(7)] = inst_31595__$1);

return statearr_31634;
})();
var statearr_31635_32925 = state_31618__$1;
(statearr_31635_32925[(2)] = null);

(statearr_31635_32925[(1)] = (2));


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
var cljs$core$async$state_machine__31139__auto__ = null;
var cljs$core$async$state_machine__31139__auto____0 = (function (){
var statearr_31636 = [null,null,null,null,null,null,null,null];
(statearr_31636[(0)] = cljs$core$async$state_machine__31139__auto__);

(statearr_31636[(1)] = (1));

return statearr_31636;
});
var cljs$core$async$state_machine__31139__auto____1 = (function (state_31618){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_31618);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e31637){var ex__31142__auto__ = e31637;
var statearr_31638_32926 = state_31618;
(statearr_31638_32926[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_31618[(4)]))){
var statearr_31639_32927 = state_31618;
(statearr_31639_32927[(1)] = cljs.core.first((state_31618[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32928 = state_31618;
state_31618 = G__32928;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$state_machine__31139__auto__ = function(state_31618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31139__auto____1.call(this,state_31618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31139__auto____0;
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31139__auto____1;
return cljs$core$async$state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_31640 = f__31175__auto__();
(statearr_31640[(6)] = c__31174__auto__);

return statearr_31640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
}));

return c__31174__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31641 = (function (ch,cs,meta31642){
this.ch = ch;
this.cs = cs;
this.meta31642 = meta31642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31643,meta31642__$1){
var self__ = this;
var _31643__$1 = this;
return (new cljs.core.async.t_cljs$core$async31641(self__.ch,self__.cs,meta31642__$1));
}));

(cljs.core.async.t_cljs$core$async31641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31643){
var self__ = this;
var _31643__$1 = this;
return self__.meta31642;
}));

(cljs.core.async.t_cljs$core$async31641.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31641.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31641.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31641.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31641.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31642","meta31642",1825992014,null)], null);
}));

(cljs.core.async.t_cljs$core$async31641.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31641");

(cljs.core.async.t_cljs$core$async31641.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31641");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31641.
 */
cljs.core.async.__GT_t_cljs$core$async31641 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31641(ch__$1,cs__$1,meta31642){
return (new cljs.core.async.t_cljs$core$async31641(ch__$1,cs__$1,meta31642));
});

}

return (new cljs.core.async.t_cljs$core$async31641(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31174__auto___32950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_31776){
var state_val_31777 = (state_31776[(1)]);
if((state_val_31777 === (7))){
var inst_31772 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
var statearr_31778_32957 = state_31776__$1;
(statearr_31778_32957[(2)] = inst_31772);

(statearr_31778_32957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (20))){
var inst_31677 = (state_31776[(7)]);
var inst_31689 = cljs.core.first(inst_31677);
var inst_31690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31689,(0),null);
var inst_31691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31689,(1),null);
var state_31776__$1 = (function (){var statearr_31779 = state_31776;
(statearr_31779[(8)] = inst_31690);

return statearr_31779;
})();
if(cljs.core.truth_(inst_31691)){
var statearr_31780_32958 = state_31776__$1;
(statearr_31780_32958[(1)] = (22));

} else {
var statearr_31781_32959 = state_31776__$1;
(statearr_31781_32959[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (27))){
var inst_31721 = (state_31776[(9)]);
var inst_31646 = (state_31776[(10)]);
var inst_31719 = (state_31776[(11)]);
var inst_31726 = (state_31776[(12)]);
var inst_31726__$1 = cljs.core._nth(inst_31719,inst_31721);
var inst_31727 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31726__$1,inst_31646,done);
var state_31776__$1 = (function (){var statearr_31782 = state_31776;
(statearr_31782[(12)] = inst_31726__$1);

return statearr_31782;
})();
if(cljs.core.truth_(inst_31727)){
var statearr_31783_32960 = state_31776__$1;
(statearr_31783_32960[(1)] = (30));

} else {
var statearr_31784_32961 = state_31776__$1;
(statearr_31784_32961[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (1))){
var state_31776__$1 = state_31776;
var statearr_31785_32962 = state_31776__$1;
(statearr_31785_32962[(2)] = null);

(statearr_31785_32962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (24))){
var inst_31677 = (state_31776[(7)]);
var inst_31696 = (state_31776[(2)]);
var inst_31697 = cljs.core.next(inst_31677);
var inst_31655 = inst_31697;
var inst_31656 = null;
var inst_31657 = (0);
var inst_31658 = (0);
var state_31776__$1 = (function (){var statearr_31786 = state_31776;
(statearr_31786[(13)] = inst_31696);

(statearr_31786[(14)] = inst_31657);

(statearr_31786[(15)] = inst_31656);

(statearr_31786[(16)] = inst_31658);

(statearr_31786[(17)] = inst_31655);

return statearr_31786;
})();
var statearr_31787_32963 = state_31776__$1;
(statearr_31787_32963[(2)] = null);

(statearr_31787_32963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (39))){
var state_31776__$1 = state_31776;
var statearr_31791_32970 = state_31776__$1;
(statearr_31791_32970[(2)] = null);

(statearr_31791_32970[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (4))){
var inst_31646 = (state_31776[(10)]);
var inst_31646__$1 = (state_31776[(2)]);
var inst_31647 = (inst_31646__$1 == null);
var state_31776__$1 = (function (){var statearr_31792 = state_31776;
(statearr_31792[(10)] = inst_31646__$1);

return statearr_31792;
})();
if(cljs.core.truth_(inst_31647)){
var statearr_31793_32971 = state_31776__$1;
(statearr_31793_32971[(1)] = (5));

} else {
var statearr_31794_32972 = state_31776__$1;
(statearr_31794_32972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (15))){
var inst_31657 = (state_31776[(14)]);
var inst_31656 = (state_31776[(15)]);
var inst_31658 = (state_31776[(16)]);
var inst_31655 = (state_31776[(17)]);
var inst_31673 = (state_31776[(2)]);
var inst_31674 = (inst_31658 + (1));
var tmp31788 = inst_31657;
var tmp31789 = inst_31656;
var tmp31790 = inst_31655;
var inst_31655__$1 = tmp31790;
var inst_31656__$1 = tmp31789;
var inst_31657__$1 = tmp31788;
var inst_31658__$1 = inst_31674;
var state_31776__$1 = (function (){var statearr_31795 = state_31776;
(statearr_31795[(14)] = inst_31657__$1);

(statearr_31795[(15)] = inst_31656__$1);

(statearr_31795[(16)] = inst_31658__$1);

(statearr_31795[(17)] = inst_31655__$1);

(statearr_31795[(18)] = inst_31673);

return statearr_31795;
})();
var statearr_31796_32973 = state_31776__$1;
(statearr_31796_32973[(2)] = null);

(statearr_31796_32973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (21))){
var inst_31700 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
var statearr_31800_32974 = state_31776__$1;
(statearr_31800_32974[(2)] = inst_31700);

(statearr_31800_32974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (31))){
var inst_31726 = (state_31776[(12)]);
var inst_31730 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31726);
var state_31776__$1 = state_31776;
var statearr_31801_32981 = state_31776__$1;
(statearr_31801_32981[(2)] = inst_31730);

(statearr_31801_32981[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (32))){
var inst_31720 = (state_31776[(19)]);
var inst_31721 = (state_31776[(9)]);
var inst_31718 = (state_31776[(20)]);
var inst_31719 = (state_31776[(11)]);
var inst_31732 = (state_31776[(2)]);
var inst_31733 = (inst_31721 + (1));
var tmp31797 = inst_31720;
var tmp31798 = inst_31718;
var tmp31799 = inst_31719;
var inst_31718__$1 = tmp31798;
var inst_31719__$1 = tmp31799;
var inst_31720__$1 = tmp31797;
var inst_31721__$1 = inst_31733;
var state_31776__$1 = (function (){var statearr_31802 = state_31776;
(statearr_31802[(19)] = inst_31720__$1);

(statearr_31802[(21)] = inst_31732);

(statearr_31802[(9)] = inst_31721__$1);

(statearr_31802[(20)] = inst_31718__$1);

(statearr_31802[(11)] = inst_31719__$1);

return statearr_31802;
})();
var statearr_31803_32982 = state_31776__$1;
(statearr_31803_32982[(2)] = null);

(statearr_31803_32982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (40))){
var inst_31745 = (state_31776[(22)]);
var inst_31749 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31745);
var state_31776__$1 = state_31776;
var statearr_31804_32983 = state_31776__$1;
(statearr_31804_32983[(2)] = inst_31749);

(statearr_31804_32983[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (33))){
var inst_31736 = (state_31776[(23)]);
var inst_31738 = cljs.core.chunked_seq_QMARK_(inst_31736);
var state_31776__$1 = state_31776;
if(inst_31738){
var statearr_31805_32984 = state_31776__$1;
(statearr_31805_32984[(1)] = (36));

} else {
var statearr_31806_32985 = state_31776__$1;
(statearr_31806_32985[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (13))){
var inst_31667 = (state_31776[(24)]);
var inst_31670 = cljs.core.async.close_BANG_(inst_31667);
var state_31776__$1 = state_31776;
var statearr_31807_32986 = state_31776__$1;
(statearr_31807_32986[(2)] = inst_31670);

(statearr_31807_32986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (22))){
var inst_31690 = (state_31776[(8)]);
var inst_31693 = cljs.core.async.close_BANG_(inst_31690);
var state_31776__$1 = state_31776;
var statearr_31808_32987 = state_31776__$1;
(statearr_31808_32987[(2)] = inst_31693);

(statearr_31808_32987[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (36))){
var inst_31736 = (state_31776[(23)]);
var inst_31740 = cljs.core.chunk_first(inst_31736);
var inst_31741 = cljs.core.chunk_rest(inst_31736);
var inst_31742 = cljs.core.count(inst_31740);
var inst_31718 = inst_31741;
var inst_31719 = inst_31740;
var inst_31720 = inst_31742;
var inst_31721 = (0);
var state_31776__$1 = (function (){var statearr_31809 = state_31776;
(statearr_31809[(19)] = inst_31720);

(statearr_31809[(9)] = inst_31721);

(statearr_31809[(20)] = inst_31718);

(statearr_31809[(11)] = inst_31719);

return statearr_31809;
})();
var statearr_31810_32988 = state_31776__$1;
(statearr_31810_32988[(2)] = null);

(statearr_31810_32988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (41))){
var inst_31736 = (state_31776[(23)]);
var inst_31751 = (state_31776[(2)]);
var inst_31752 = cljs.core.next(inst_31736);
var inst_31718 = inst_31752;
var inst_31719 = null;
var inst_31720 = (0);
var inst_31721 = (0);
var state_31776__$1 = (function (){var statearr_31811 = state_31776;
(statearr_31811[(19)] = inst_31720);

(statearr_31811[(9)] = inst_31721);

(statearr_31811[(25)] = inst_31751);

(statearr_31811[(20)] = inst_31718);

(statearr_31811[(11)] = inst_31719);

return statearr_31811;
})();
var statearr_31812_32989 = state_31776__$1;
(statearr_31812_32989[(2)] = null);

(statearr_31812_32989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (43))){
var state_31776__$1 = state_31776;
var statearr_31813_32990 = state_31776__$1;
(statearr_31813_32990[(2)] = null);

(statearr_31813_32990[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (29))){
var inst_31760 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
var statearr_31814_32991 = state_31776__$1;
(statearr_31814_32991[(2)] = inst_31760);

(statearr_31814_32991[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (44))){
var inst_31769 = (state_31776[(2)]);
var state_31776__$1 = (function (){var statearr_31815 = state_31776;
(statearr_31815[(26)] = inst_31769);

return statearr_31815;
})();
var statearr_31816_32997 = state_31776__$1;
(statearr_31816_32997[(2)] = null);

(statearr_31816_32997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (6))){
var inst_31710 = (state_31776[(27)]);
var inst_31709 = cljs.core.deref(cs);
var inst_31710__$1 = cljs.core.keys(inst_31709);
var inst_31711 = cljs.core.count(inst_31710__$1);
var inst_31712 = cljs.core.reset_BANG_(dctr,inst_31711);
var inst_31717 = cljs.core.seq(inst_31710__$1);
var inst_31718 = inst_31717;
var inst_31719 = null;
var inst_31720 = (0);
var inst_31721 = (0);
var state_31776__$1 = (function (){var statearr_31817 = state_31776;
(statearr_31817[(19)] = inst_31720);

(statearr_31817[(27)] = inst_31710__$1);

(statearr_31817[(9)] = inst_31721);

(statearr_31817[(28)] = inst_31712);

(statearr_31817[(20)] = inst_31718);

(statearr_31817[(11)] = inst_31719);

return statearr_31817;
})();
var statearr_31818_33002 = state_31776__$1;
(statearr_31818_33002[(2)] = null);

(statearr_31818_33002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (28))){
var inst_31736 = (state_31776[(23)]);
var inst_31718 = (state_31776[(20)]);
var inst_31736__$1 = cljs.core.seq(inst_31718);
var state_31776__$1 = (function (){var statearr_31819 = state_31776;
(statearr_31819[(23)] = inst_31736__$1);

return statearr_31819;
})();
if(inst_31736__$1){
var statearr_31820_33003 = state_31776__$1;
(statearr_31820_33003[(1)] = (33));

} else {
var statearr_31821_33004 = state_31776__$1;
(statearr_31821_33004[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (25))){
var inst_31720 = (state_31776[(19)]);
var inst_31721 = (state_31776[(9)]);
var inst_31723 = (inst_31721 < inst_31720);
var inst_31724 = inst_31723;
var state_31776__$1 = state_31776;
if(cljs.core.truth_(inst_31724)){
var statearr_31822_33006 = state_31776__$1;
(statearr_31822_33006[(1)] = (27));

} else {
var statearr_31823_33008 = state_31776__$1;
(statearr_31823_33008[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (34))){
var state_31776__$1 = state_31776;
var statearr_31824_33009 = state_31776__$1;
(statearr_31824_33009[(2)] = null);

(statearr_31824_33009[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (17))){
var state_31776__$1 = state_31776;
var statearr_31825_33010 = state_31776__$1;
(statearr_31825_33010[(2)] = null);

(statearr_31825_33010[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (3))){
var inst_31774 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31776__$1,inst_31774);
} else {
if((state_val_31777 === (12))){
var inst_31705 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
var statearr_31826_33011 = state_31776__$1;
(statearr_31826_33011[(2)] = inst_31705);

(statearr_31826_33011[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (2))){
var state_31776__$1 = state_31776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31776__$1,(4),ch);
} else {
if((state_val_31777 === (23))){
var state_31776__$1 = state_31776;
var statearr_31827_33013 = state_31776__$1;
(statearr_31827_33013[(2)] = null);

(statearr_31827_33013[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (35))){
var inst_31758 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
var statearr_31828_33018 = state_31776__$1;
(statearr_31828_33018[(2)] = inst_31758);

(statearr_31828_33018[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (19))){
var inst_31677 = (state_31776[(7)]);
var inst_31681 = cljs.core.chunk_first(inst_31677);
var inst_31682 = cljs.core.chunk_rest(inst_31677);
var inst_31683 = cljs.core.count(inst_31681);
var inst_31655 = inst_31682;
var inst_31656 = inst_31681;
var inst_31657 = inst_31683;
var inst_31658 = (0);
var state_31776__$1 = (function (){var statearr_31829 = state_31776;
(statearr_31829[(14)] = inst_31657);

(statearr_31829[(15)] = inst_31656);

(statearr_31829[(16)] = inst_31658);

(statearr_31829[(17)] = inst_31655);

return statearr_31829;
})();
var statearr_31830_33023 = state_31776__$1;
(statearr_31830_33023[(2)] = null);

(statearr_31830_33023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (11))){
var inst_31655 = (state_31776[(17)]);
var inst_31677 = (state_31776[(7)]);
var inst_31677__$1 = cljs.core.seq(inst_31655);
var state_31776__$1 = (function (){var statearr_31831 = state_31776;
(statearr_31831[(7)] = inst_31677__$1);

return statearr_31831;
})();
if(inst_31677__$1){
var statearr_31832_33027 = state_31776__$1;
(statearr_31832_33027[(1)] = (16));

} else {
var statearr_31833_33028 = state_31776__$1;
(statearr_31833_33028[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (9))){
var inst_31707 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
var statearr_31834_33032 = state_31776__$1;
(statearr_31834_33032[(2)] = inst_31707);

(statearr_31834_33032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (5))){
var inst_31653 = cljs.core.deref(cs);
var inst_31654 = cljs.core.seq(inst_31653);
var inst_31655 = inst_31654;
var inst_31656 = null;
var inst_31657 = (0);
var inst_31658 = (0);
var state_31776__$1 = (function (){var statearr_31835 = state_31776;
(statearr_31835[(14)] = inst_31657);

(statearr_31835[(15)] = inst_31656);

(statearr_31835[(16)] = inst_31658);

(statearr_31835[(17)] = inst_31655);

return statearr_31835;
})();
var statearr_31836_33036 = state_31776__$1;
(statearr_31836_33036[(2)] = null);

(statearr_31836_33036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (14))){
var state_31776__$1 = state_31776;
var statearr_31837_33037 = state_31776__$1;
(statearr_31837_33037[(2)] = null);

(statearr_31837_33037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (45))){
var inst_31766 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
var statearr_31838_33038 = state_31776__$1;
(statearr_31838_33038[(2)] = inst_31766);

(statearr_31838_33038[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (26))){
var inst_31710 = (state_31776[(27)]);
var inst_31762 = (state_31776[(2)]);
var inst_31763 = cljs.core.seq(inst_31710);
var state_31776__$1 = (function (){var statearr_31839 = state_31776;
(statearr_31839[(29)] = inst_31762);

return statearr_31839;
})();
if(inst_31763){
var statearr_31840_33042 = state_31776__$1;
(statearr_31840_33042[(1)] = (42));

} else {
var statearr_31841_33043 = state_31776__$1;
(statearr_31841_33043[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (16))){
var inst_31677 = (state_31776[(7)]);
var inst_31679 = cljs.core.chunked_seq_QMARK_(inst_31677);
var state_31776__$1 = state_31776;
if(inst_31679){
var statearr_31842_33048 = state_31776__$1;
(statearr_31842_33048[(1)] = (19));

} else {
var statearr_31843_33049 = state_31776__$1;
(statearr_31843_33049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (38))){
var inst_31755 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
var statearr_31844_33050 = state_31776__$1;
(statearr_31844_33050[(2)] = inst_31755);

(statearr_31844_33050[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (30))){
var state_31776__$1 = state_31776;
var statearr_31845_33051 = state_31776__$1;
(statearr_31845_33051[(2)] = null);

(statearr_31845_33051[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (10))){
var inst_31656 = (state_31776[(15)]);
var inst_31658 = (state_31776[(16)]);
var inst_31666 = cljs.core._nth(inst_31656,inst_31658);
var inst_31667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31666,(0),null);
var inst_31668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31666,(1),null);
var state_31776__$1 = (function (){var statearr_31846 = state_31776;
(statearr_31846[(24)] = inst_31667);

return statearr_31846;
})();
if(cljs.core.truth_(inst_31668)){
var statearr_31847_33052 = state_31776__$1;
(statearr_31847_33052[(1)] = (13));

} else {
var statearr_31848_33053 = state_31776__$1;
(statearr_31848_33053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (18))){
var inst_31703 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
var statearr_31849_33056 = state_31776__$1;
(statearr_31849_33056[(2)] = inst_31703);

(statearr_31849_33056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (42))){
var state_31776__$1 = state_31776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31776__$1,(45),dchan);
} else {
if((state_val_31777 === (37))){
var inst_31736 = (state_31776[(23)]);
var inst_31745 = (state_31776[(22)]);
var inst_31646 = (state_31776[(10)]);
var inst_31745__$1 = cljs.core.first(inst_31736);
var inst_31746 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31745__$1,inst_31646,done);
var state_31776__$1 = (function (){var statearr_31850 = state_31776;
(statearr_31850[(22)] = inst_31745__$1);

return statearr_31850;
})();
if(cljs.core.truth_(inst_31746)){
var statearr_31851_33057 = state_31776__$1;
(statearr_31851_33057[(1)] = (39));

} else {
var statearr_31852_33058 = state_31776__$1;
(statearr_31852_33058[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (8))){
var inst_31657 = (state_31776[(14)]);
var inst_31658 = (state_31776[(16)]);
var inst_31660 = (inst_31658 < inst_31657);
var inst_31661 = inst_31660;
var state_31776__$1 = state_31776;
if(cljs.core.truth_(inst_31661)){
var statearr_31853_33059 = state_31776__$1;
(statearr_31853_33059[(1)] = (10));

} else {
var statearr_31854_33060 = state_31776__$1;
(statearr_31854_33060[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__31139__auto__ = null;
var cljs$core$async$mult_$_state_machine__31139__auto____0 = (function (){
var statearr_31855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31855[(0)] = cljs$core$async$mult_$_state_machine__31139__auto__);

(statearr_31855[(1)] = (1));

return statearr_31855;
});
var cljs$core$async$mult_$_state_machine__31139__auto____1 = (function (state_31776){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_31776);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e31856){var ex__31142__auto__ = e31856;
var statearr_31857_33061 = state_31776;
(statearr_31857_33061[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_31776[(4)]))){
var statearr_31858_33062 = state_31776;
(statearr_31858_33062[(1)] = cljs.core.first((state_31776[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33063 = state_31776;
state_31776 = G__33063;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31139__auto__ = function(state_31776){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31139__auto____1.call(this,state_31776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31139__auto____0;
cljs$core$async$mult_$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31139__auto____1;
return cljs$core$async$mult_$_state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_31859 = f__31175__auto__();
(statearr_31859[(6)] = c__31174__auto___32950);

return statearr_31859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
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
var G__31861 = arguments.length;
switch (G__31861) {
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
var len__4789__auto___33079 = arguments.length;
var i__4790__auto___33080 = (0);
while(true){
if((i__4790__auto___33080 < len__4789__auto___33079)){
args__4795__auto__.push((arguments[i__4790__auto___33080]));

var G__33081 = (i__4790__auto___33080 + (1));
i__4790__auto___33080 = G__33081;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31866){
var map__31867 = p__31866;
var map__31867__$1 = (((((!((map__31867 == null))))?(((((map__31867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31867):map__31867);
var opts = map__31867__$1;
var statearr_31869_33082 = state;
(statearr_31869_33082[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31870_33083 = state;
(statearr_31870_33083[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31871_33084 = state;
(statearr_31871_33084[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31862){
var G__31863 = cljs.core.first(seq31862);
var seq31862__$1 = cljs.core.next(seq31862);
var G__31864 = cljs.core.first(seq31862__$1);
var seq31862__$2 = cljs.core.next(seq31862__$1);
var G__31865 = cljs.core.first(seq31862__$2);
var seq31862__$3 = cljs.core.next(seq31862__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31863,G__31864,G__31865,seq31862__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31872 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31873){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31873 = meta31873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31874,meta31873__$1){
var self__ = this;
var _31874__$1 = this;
return (new cljs.core.async.t_cljs$core$async31872(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31873__$1));
}));

(cljs.core.async.t_cljs$core$async31872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31874){
var self__ = this;
var _31874__$1 = this;
return self__.meta31873;
}));

(cljs.core.async.t_cljs$core$async31872.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31872.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31872.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31872.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31872.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31872.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31872.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31872.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31873","meta31873",366788685,null)], null);
}));

(cljs.core.async.t_cljs$core$async31872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31872");

(cljs.core.async.t_cljs$core$async31872.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31872.
 */
cljs.core.async.__GT_t_cljs$core$async31872 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31872(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31873){
return (new cljs.core.async.t_cljs$core$async31872(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31873));
});

}

return (new cljs.core.async.t_cljs$core$async31872(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31174__auto___33096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_31976){
var state_val_31977 = (state_31976[(1)]);
if((state_val_31977 === (7))){
var inst_31891 = (state_31976[(2)]);
var state_31976__$1 = state_31976;
var statearr_31978_33100 = state_31976__$1;
(statearr_31978_33100[(2)] = inst_31891);

(statearr_31978_33100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (20))){
var inst_31903 = (state_31976[(7)]);
var state_31976__$1 = state_31976;
var statearr_31979_33101 = state_31976__$1;
(statearr_31979_33101[(2)] = inst_31903);

(statearr_31979_33101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (27))){
var state_31976__$1 = state_31976;
var statearr_31980_33102 = state_31976__$1;
(statearr_31980_33102[(2)] = null);

(statearr_31980_33102[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (1))){
var inst_31878 = (state_31976[(8)]);
var inst_31878__$1 = calc_state();
var inst_31880 = (inst_31878__$1 == null);
var inst_31881 = cljs.core.not(inst_31880);
var state_31976__$1 = (function (){var statearr_31981 = state_31976;
(statearr_31981[(8)] = inst_31878__$1);

return statearr_31981;
})();
if(inst_31881){
var statearr_31982_33103 = state_31976__$1;
(statearr_31982_33103[(1)] = (2));

} else {
var statearr_31983_33104 = state_31976__$1;
(statearr_31983_33104[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (24))){
var inst_31936 = (state_31976[(9)]);
var inst_31927 = (state_31976[(10)]);
var inst_31950 = (state_31976[(11)]);
var inst_31950__$1 = (inst_31927.cljs$core$IFn$_invoke$arity$1 ? inst_31927.cljs$core$IFn$_invoke$arity$1(inst_31936) : inst_31927.call(null,inst_31936));
var state_31976__$1 = (function (){var statearr_31984 = state_31976;
(statearr_31984[(11)] = inst_31950__$1);

return statearr_31984;
})();
if(cljs.core.truth_(inst_31950__$1)){
var statearr_31985_33105 = state_31976__$1;
(statearr_31985_33105[(1)] = (29));

} else {
var statearr_31986_33106 = state_31976__$1;
(statearr_31986_33106[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (4))){
var inst_31894 = (state_31976[(2)]);
var state_31976__$1 = state_31976;
if(cljs.core.truth_(inst_31894)){
var statearr_31987_33107 = state_31976__$1;
(statearr_31987_33107[(1)] = (8));

} else {
var statearr_31988_33108 = state_31976__$1;
(statearr_31988_33108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (15))){
var inst_31921 = (state_31976[(2)]);
var state_31976__$1 = state_31976;
if(cljs.core.truth_(inst_31921)){
var statearr_31989_33109 = state_31976__$1;
(statearr_31989_33109[(1)] = (19));

} else {
var statearr_31990_33110 = state_31976__$1;
(statearr_31990_33110[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (21))){
var inst_31926 = (state_31976[(12)]);
var inst_31926__$1 = (state_31976[(2)]);
var inst_31927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31926__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31926__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31926__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31976__$1 = (function (){var statearr_31991 = state_31976;
(statearr_31991[(10)] = inst_31927);

(statearr_31991[(12)] = inst_31926__$1);

(statearr_31991[(13)] = inst_31928);

return statearr_31991;
})();
return cljs.core.async.ioc_alts_BANG_(state_31976__$1,(22),inst_31929);
} else {
if((state_val_31977 === (31))){
var inst_31958 = (state_31976[(2)]);
var state_31976__$1 = state_31976;
if(cljs.core.truth_(inst_31958)){
var statearr_31992_33111 = state_31976__$1;
(statearr_31992_33111[(1)] = (32));

} else {
var statearr_31993_33112 = state_31976__$1;
(statearr_31993_33112[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (32))){
var inst_31935 = (state_31976[(14)]);
var state_31976__$1 = state_31976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31976__$1,(35),out,inst_31935);
} else {
if((state_val_31977 === (33))){
var inst_31926 = (state_31976[(12)]);
var inst_31903 = inst_31926;
var state_31976__$1 = (function (){var statearr_31994 = state_31976;
(statearr_31994[(7)] = inst_31903);

return statearr_31994;
})();
var statearr_31995_33116 = state_31976__$1;
(statearr_31995_33116[(2)] = null);

(statearr_31995_33116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (13))){
var inst_31903 = (state_31976[(7)]);
var inst_31910 = inst_31903.cljs$lang$protocol_mask$partition0$;
var inst_31911 = (inst_31910 & (64));
var inst_31912 = inst_31903.cljs$core$ISeq$;
var inst_31913 = (cljs.core.PROTOCOL_SENTINEL === inst_31912);
var inst_31914 = ((inst_31911) || (inst_31913));
var state_31976__$1 = state_31976;
if(cljs.core.truth_(inst_31914)){
var statearr_31996_33117 = state_31976__$1;
(statearr_31996_33117[(1)] = (16));

} else {
var statearr_31997_33118 = state_31976__$1;
(statearr_31997_33118[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (22))){
var inst_31936 = (state_31976[(9)]);
var inst_31935 = (state_31976[(14)]);
var inst_31934 = (state_31976[(2)]);
var inst_31935__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31934,(0),null);
var inst_31936__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31934,(1),null);
var inst_31937 = (inst_31935__$1 == null);
var inst_31938 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31936__$1,change);
var inst_31939 = ((inst_31937) || (inst_31938));
var state_31976__$1 = (function (){var statearr_31998 = state_31976;
(statearr_31998[(9)] = inst_31936__$1);

(statearr_31998[(14)] = inst_31935__$1);

return statearr_31998;
})();
if(cljs.core.truth_(inst_31939)){
var statearr_31999_33119 = state_31976__$1;
(statearr_31999_33119[(1)] = (23));

} else {
var statearr_32000_33120 = state_31976__$1;
(statearr_32000_33120[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (36))){
var inst_31926 = (state_31976[(12)]);
var inst_31903 = inst_31926;
var state_31976__$1 = (function (){var statearr_32001 = state_31976;
(statearr_32001[(7)] = inst_31903);

return statearr_32001;
})();
var statearr_32002_33121 = state_31976__$1;
(statearr_32002_33121[(2)] = null);

(statearr_32002_33121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (29))){
var inst_31950 = (state_31976[(11)]);
var state_31976__$1 = state_31976;
var statearr_32003_33122 = state_31976__$1;
(statearr_32003_33122[(2)] = inst_31950);

(statearr_32003_33122[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (6))){
var state_31976__$1 = state_31976;
var statearr_32004_33123 = state_31976__$1;
(statearr_32004_33123[(2)] = false);

(statearr_32004_33123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (28))){
var inst_31946 = (state_31976[(2)]);
var inst_31947 = calc_state();
var inst_31903 = inst_31947;
var state_31976__$1 = (function (){var statearr_32005 = state_31976;
(statearr_32005[(7)] = inst_31903);

(statearr_32005[(15)] = inst_31946);

return statearr_32005;
})();
var statearr_32006_33125 = state_31976__$1;
(statearr_32006_33125[(2)] = null);

(statearr_32006_33125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (25))){
var inst_31972 = (state_31976[(2)]);
var state_31976__$1 = state_31976;
var statearr_32007_33126 = state_31976__$1;
(statearr_32007_33126[(2)] = inst_31972);

(statearr_32007_33126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (34))){
var inst_31970 = (state_31976[(2)]);
var state_31976__$1 = state_31976;
var statearr_32008_33127 = state_31976__$1;
(statearr_32008_33127[(2)] = inst_31970);

(statearr_32008_33127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (17))){
var state_31976__$1 = state_31976;
var statearr_32009_33128 = state_31976__$1;
(statearr_32009_33128[(2)] = false);

(statearr_32009_33128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (3))){
var state_31976__$1 = state_31976;
var statearr_32010_33129 = state_31976__$1;
(statearr_32010_33129[(2)] = false);

(statearr_32010_33129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (12))){
var inst_31974 = (state_31976[(2)]);
var state_31976__$1 = state_31976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31976__$1,inst_31974);
} else {
if((state_val_31977 === (2))){
var inst_31878 = (state_31976[(8)]);
var inst_31883 = inst_31878.cljs$lang$protocol_mask$partition0$;
var inst_31884 = (inst_31883 & (64));
var inst_31885 = inst_31878.cljs$core$ISeq$;
var inst_31886 = (cljs.core.PROTOCOL_SENTINEL === inst_31885);
var inst_31887 = ((inst_31884) || (inst_31886));
var state_31976__$1 = state_31976;
if(cljs.core.truth_(inst_31887)){
var statearr_32011_33130 = state_31976__$1;
(statearr_32011_33130[(1)] = (5));

} else {
var statearr_32012_33131 = state_31976__$1;
(statearr_32012_33131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (23))){
var inst_31935 = (state_31976[(14)]);
var inst_31941 = (inst_31935 == null);
var state_31976__$1 = state_31976;
if(cljs.core.truth_(inst_31941)){
var statearr_32013_33132 = state_31976__$1;
(statearr_32013_33132[(1)] = (26));

} else {
var statearr_32014_33133 = state_31976__$1;
(statearr_32014_33133[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (35))){
var inst_31961 = (state_31976[(2)]);
var state_31976__$1 = state_31976;
if(cljs.core.truth_(inst_31961)){
var statearr_32015_33134 = state_31976__$1;
(statearr_32015_33134[(1)] = (36));

} else {
var statearr_32016_33135 = state_31976__$1;
(statearr_32016_33135[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (19))){
var inst_31903 = (state_31976[(7)]);
var inst_31923 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31903);
var state_31976__$1 = state_31976;
var statearr_32017_33136 = state_31976__$1;
(statearr_32017_33136[(2)] = inst_31923);

(statearr_32017_33136[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (11))){
var inst_31903 = (state_31976[(7)]);
var inst_31907 = (inst_31903 == null);
var inst_31908 = cljs.core.not(inst_31907);
var state_31976__$1 = state_31976;
if(inst_31908){
var statearr_32018_33141 = state_31976__$1;
(statearr_32018_33141[(1)] = (13));

} else {
var statearr_32019_33142 = state_31976__$1;
(statearr_32019_33142[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (9))){
var inst_31878 = (state_31976[(8)]);
var state_31976__$1 = state_31976;
var statearr_32020_33143 = state_31976__$1;
(statearr_32020_33143[(2)] = inst_31878);

(statearr_32020_33143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (5))){
var state_31976__$1 = state_31976;
var statearr_32021_33145 = state_31976__$1;
(statearr_32021_33145[(2)] = true);

(statearr_32021_33145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (14))){
var state_31976__$1 = state_31976;
var statearr_32022_33149 = state_31976__$1;
(statearr_32022_33149[(2)] = false);

(statearr_32022_33149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (26))){
var inst_31936 = (state_31976[(9)]);
var inst_31943 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31936);
var state_31976__$1 = state_31976;
var statearr_32023_33150 = state_31976__$1;
(statearr_32023_33150[(2)] = inst_31943);

(statearr_32023_33150[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (16))){
var state_31976__$1 = state_31976;
var statearr_32024_33151 = state_31976__$1;
(statearr_32024_33151[(2)] = true);

(statearr_32024_33151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (38))){
var inst_31966 = (state_31976[(2)]);
var state_31976__$1 = state_31976;
var statearr_32025_33154 = state_31976__$1;
(statearr_32025_33154[(2)] = inst_31966);

(statearr_32025_33154[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (30))){
var inst_31936 = (state_31976[(9)]);
var inst_31927 = (state_31976[(10)]);
var inst_31928 = (state_31976[(13)]);
var inst_31953 = cljs.core.empty_QMARK_(inst_31927);
var inst_31954 = (inst_31928.cljs$core$IFn$_invoke$arity$1 ? inst_31928.cljs$core$IFn$_invoke$arity$1(inst_31936) : inst_31928.call(null,inst_31936));
var inst_31955 = cljs.core.not(inst_31954);
var inst_31956 = ((inst_31953) && (inst_31955));
var state_31976__$1 = state_31976;
var statearr_32026_33155 = state_31976__$1;
(statearr_32026_33155[(2)] = inst_31956);

(statearr_32026_33155[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (10))){
var inst_31878 = (state_31976[(8)]);
var inst_31899 = (state_31976[(2)]);
var inst_31900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31899,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31899,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31899,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31903 = inst_31878;
var state_31976__$1 = (function (){var statearr_32027 = state_31976;
(statearr_32027[(16)] = inst_31900);

(statearr_32027[(7)] = inst_31903);

(statearr_32027[(17)] = inst_31902);

(statearr_32027[(18)] = inst_31901);

return statearr_32027;
})();
var statearr_32028_33156 = state_31976__$1;
(statearr_32028_33156[(2)] = null);

(statearr_32028_33156[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (18))){
var inst_31918 = (state_31976[(2)]);
var state_31976__$1 = state_31976;
var statearr_32029_33157 = state_31976__$1;
(statearr_32029_33157[(2)] = inst_31918);

(statearr_32029_33157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (37))){
var state_31976__$1 = state_31976;
var statearr_32030_33158 = state_31976__$1;
(statearr_32030_33158[(2)] = null);

(statearr_32030_33158[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31977 === (8))){
var inst_31878 = (state_31976[(8)]);
var inst_31896 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31878);
var state_31976__$1 = state_31976;
var statearr_32031_33159 = state_31976__$1;
(statearr_32031_33159[(2)] = inst_31896);

(statearr_32031_33159[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__31139__auto__ = null;
var cljs$core$async$mix_$_state_machine__31139__auto____0 = (function (){
var statearr_32032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32032[(0)] = cljs$core$async$mix_$_state_machine__31139__auto__);

(statearr_32032[(1)] = (1));

return statearr_32032;
});
var cljs$core$async$mix_$_state_machine__31139__auto____1 = (function (state_31976){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_31976);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e32033){var ex__31142__auto__ = e32033;
var statearr_32034_33160 = state_31976;
(statearr_32034_33160[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_31976[(4)]))){
var statearr_32035_33161 = state_31976;
(statearr_32035_33161[(1)] = cljs.core.first((state_31976[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33162 = state_31976;
state_31976 = G__33162;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31139__auto__ = function(state_31976){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31139__auto____1.call(this,state_31976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31139__auto____0;
cljs$core$async$mix_$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31139__auto____1;
return cljs$core$async$mix_$_state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_32036 = f__31175__auto__();
(statearr_32036[(6)] = c__31174__auto___33096);

return statearr_32036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
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
var G__32038 = arguments.length;
switch (G__32038) {
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
var G__32041 = arguments.length;
switch (G__32041) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32039_SHARP_){
if(cljs.core.truth_((p1__32039_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32039_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32039_SHARP_.call(null,topic)))){
return p1__32039_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32039_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32042 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32042 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32043){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32043 = meta32043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32044,meta32043__$1){
var self__ = this;
var _32044__$1 = this;
return (new cljs.core.async.t_cljs$core$async32042(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32043__$1));
}));

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32044){
var self__ = this;
var _32044__$1 = this;
return self__.meta32043;
}));

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32043","meta32043",-613682429,null)], null);
}));

(cljs.core.async.t_cljs$core$async32042.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32042");

(cljs.core.async.t_cljs$core$async32042.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32042");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32042.
 */
cljs.core.async.__GT_t_cljs$core$async32042 = (function cljs$core$async$__GT_t_cljs$core$async32042(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32043){
return (new cljs.core.async.t_cljs$core$async32042(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32043));
});

}

return (new cljs.core.async.t_cljs$core$async32042(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31174__auto___33200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_32116){
var state_val_32117 = (state_32116[(1)]);
if((state_val_32117 === (7))){
var inst_32112 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32118_33207 = state_32116__$1;
(statearr_32118_33207[(2)] = inst_32112);

(statearr_32118_33207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (20))){
var state_32116__$1 = state_32116;
var statearr_32119_33208 = state_32116__$1;
(statearr_32119_33208[(2)] = null);

(statearr_32119_33208[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (1))){
var state_32116__$1 = state_32116;
var statearr_32120_33209 = state_32116__$1;
(statearr_32120_33209[(2)] = null);

(statearr_32120_33209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (24))){
var inst_32095 = (state_32116[(7)]);
var inst_32104 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32095);
var state_32116__$1 = state_32116;
var statearr_32121_33210 = state_32116__$1;
(statearr_32121_33210[(2)] = inst_32104);

(statearr_32121_33210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (4))){
var inst_32047 = (state_32116[(8)]);
var inst_32047__$1 = (state_32116[(2)]);
var inst_32048 = (inst_32047__$1 == null);
var state_32116__$1 = (function (){var statearr_32122 = state_32116;
(statearr_32122[(8)] = inst_32047__$1);

return statearr_32122;
})();
if(cljs.core.truth_(inst_32048)){
var statearr_32123_33217 = state_32116__$1;
(statearr_32123_33217[(1)] = (5));

} else {
var statearr_32124_33218 = state_32116__$1;
(statearr_32124_33218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (15))){
var inst_32089 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32125_33225 = state_32116__$1;
(statearr_32125_33225[(2)] = inst_32089);

(statearr_32125_33225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (21))){
var inst_32109 = (state_32116[(2)]);
var state_32116__$1 = (function (){var statearr_32126 = state_32116;
(statearr_32126[(9)] = inst_32109);

return statearr_32126;
})();
var statearr_32127_33226 = state_32116__$1;
(statearr_32127_33226[(2)] = null);

(statearr_32127_33226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (13))){
var inst_32071 = (state_32116[(10)]);
var inst_32073 = cljs.core.chunked_seq_QMARK_(inst_32071);
var state_32116__$1 = state_32116;
if(inst_32073){
var statearr_32128_33229 = state_32116__$1;
(statearr_32128_33229[(1)] = (16));

} else {
var statearr_32129_33230 = state_32116__$1;
(statearr_32129_33230[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (22))){
var inst_32101 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
if(cljs.core.truth_(inst_32101)){
var statearr_32130_33231 = state_32116__$1;
(statearr_32130_33231[(1)] = (23));

} else {
var statearr_32131_33232 = state_32116__$1;
(statearr_32131_33232[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (6))){
var inst_32097 = (state_32116[(11)]);
var inst_32047 = (state_32116[(8)]);
var inst_32095 = (state_32116[(7)]);
var inst_32095__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32047) : topic_fn.call(null,inst_32047));
var inst_32096 = cljs.core.deref(mults);
var inst_32097__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32096,inst_32095__$1);
var state_32116__$1 = (function (){var statearr_32132 = state_32116;
(statearr_32132[(11)] = inst_32097__$1);

(statearr_32132[(7)] = inst_32095__$1);

return statearr_32132;
})();
if(cljs.core.truth_(inst_32097__$1)){
var statearr_32133_33235 = state_32116__$1;
(statearr_32133_33235[(1)] = (19));

} else {
var statearr_32134_33236 = state_32116__$1;
(statearr_32134_33236[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (25))){
var inst_32106 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32135_33237 = state_32116__$1;
(statearr_32135_33237[(2)] = inst_32106);

(statearr_32135_33237[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (17))){
var inst_32071 = (state_32116[(10)]);
var inst_32080 = cljs.core.first(inst_32071);
var inst_32081 = cljs.core.async.muxch_STAR_(inst_32080);
var inst_32082 = cljs.core.async.close_BANG_(inst_32081);
var inst_32083 = cljs.core.next(inst_32071);
var inst_32057 = inst_32083;
var inst_32058 = null;
var inst_32059 = (0);
var inst_32060 = (0);
var state_32116__$1 = (function (){var statearr_32136 = state_32116;
(statearr_32136[(12)] = inst_32082);

(statearr_32136[(13)] = inst_32057);

(statearr_32136[(14)] = inst_32058);

(statearr_32136[(15)] = inst_32059);

(statearr_32136[(16)] = inst_32060);

return statearr_32136;
})();
var statearr_32137_33249 = state_32116__$1;
(statearr_32137_33249[(2)] = null);

(statearr_32137_33249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (3))){
var inst_32114 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32116__$1,inst_32114);
} else {
if((state_val_32117 === (12))){
var inst_32091 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32138_33251 = state_32116__$1;
(statearr_32138_33251[(2)] = inst_32091);

(statearr_32138_33251[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (2))){
var state_32116__$1 = state_32116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32116__$1,(4),ch);
} else {
if((state_val_32117 === (23))){
var state_32116__$1 = state_32116;
var statearr_32139_33252 = state_32116__$1;
(statearr_32139_33252[(2)] = null);

(statearr_32139_33252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (19))){
var inst_32097 = (state_32116[(11)]);
var inst_32047 = (state_32116[(8)]);
var inst_32099 = cljs.core.async.muxch_STAR_(inst_32097);
var state_32116__$1 = state_32116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32116__$1,(22),inst_32099,inst_32047);
} else {
if((state_val_32117 === (11))){
var inst_32057 = (state_32116[(13)]);
var inst_32071 = (state_32116[(10)]);
var inst_32071__$1 = cljs.core.seq(inst_32057);
var state_32116__$1 = (function (){var statearr_32140 = state_32116;
(statearr_32140[(10)] = inst_32071__$1);

return statearr_32140;
})();
if(inst_32071__$1){
var statearr_32141_33253 = state_32116__$1;
(statearr_32141_33253[(1)] = (13));

} else {
var statearr_32142_33254 = state_32116__$1;
(statearr_32142_33254[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (9))){
var inst_32093 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32143_33255 = state_32116__$1;
(statearr_32143_33255[(2)] = inst_32093);

(statearr_32143_33255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (5))){
var inst_32054 = cljs.core.deref(mults);
var inst_32055 = cljs.core.vals(inst_32054);
var inst_32056 = cljs.core.seq(inst_32055);
var inst_32057 = inst_32056;
var inst_32058 = null;
var inst_32059 = (0);
var inst_32060 = (0);
var state_32116__$1 = (function (){var statearr_32144 = state_32116;
(statearr_32144[(13)] = inst_32057);

(statearr_32144[(14)] = inst_32058);

(statearr_32144[(15)] = inst_32059);

(statearr_32144[(16)] = inst_32060);

return statearr_32144;
})();
var statearr_32145_33257 = state_32116__$1;
(statearr_32145_33257[(2)] = null);

(statearr_32145_33257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (14))){
var state_32116__$1 = state_32116;
var statearr_32149_33259 = state_32116__$1;
(statearr_32149_33259[(2)] = null);

(statearr_32149_33259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (16))){
var inst_32071 = (state_32116[(10)]);
var inst_32075 = cljs.core.chunk_first(inst_32071);
var inst_32076 = cljs.core.chunk_rest(inst_32071);
var inst_32077 = cljs.core.count(inst_32075);
var inst_32057 = inst_32076;
var inst_32058 = inst_32075;
var inst_32059 = inst_32077;
var inst_32060 = (0);
var state_32116__$1 = (function (){var statearr_32150 = state_32116;
(statearr_32150[(13)] = inst_32057);

(statearr_32150[(14)] = inst_32058);

(statearr_32150[(15)] = inst_32059);

(statearr_32150[(16)] = inst_32060);

return statearr_32150;
})();
var statearr_32151_33264 = state_32116__$1;
(statearr_32151_33264[(2)] = null);

(statearr_32151_33264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (10))){
var inst_32057 = (state_32116[(13)]);
var inst_32058 = (state_32116[(14)]);
var inst_32059 = (state_32116[(15)]);
var inst_32060 = (state_32116[(16)]);
var inst_32065 = cljs.core._nth(inst_32058,inst_32060);
var inst_32066 = cljs.core.async.muxch_STAR_(inst_32065);
var inst_32067 = cljs.core.async.close_BANG_(inst_32066);
var inst_32068 = (inst_32060 + (1));
var tmp32146 = inst_32057;
var tmp32147 = inst_32058;
var tmp32148 = inst_32059;
var inst_32057__$1 = tmp32146;
var inst_32058__$1 = tmp32147;
var inst_32059__$1 = tmp32148;
var inst_32060__$1 = inst_32068;
var state_32116__$1 = (function (){var statearr_32152 = state_32116;
(statearr_32152[(13)] = inst_32057__$1);

(statearr_32152[(14)] = inst_32058__$1);

(statearr_32152[(17)] = inst_32067);

(statearr_32152[(15)] = inst_32059__$1);

(statearr_32152[(16)] = inst_32060__$1);

return statearr_32152;
})();
var statearr_32153_33279 = state_32116__$1;
(statearr_32153_33279[(2)] = null);

(statearr_32153_33279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (18))){
var inst_32086 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32154_33281 = state_32116__$1;
(statearr_32154_33281[(2)] = inst_32086);

(statearr_32154_33281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (8))){
var inst_32059 = (state_32116[(15)]);
var inst_32060 = (state_32116[(16)]);
var inst_32062 = (inst_32060 < inst_32059);
var inst_32063 = inst_32062;
var state_32116__$1 = state_32116;
if(cljs.core.truth_(inst_32063)){
var statearr_32155_33282 = state_32116__$1;
(statearr_32155_33282[(1)] = (10));

} else {
var statearr_32156_33283 = state_32116__$1;
(statearr_32156_33283[(1)] = (11));

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
var cljs$core$async$state_machine__31139__auto__ = null;
var cljs$core$async$state_machine__31139__auto____0 = (function (){
var statearr_32157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32157[(0)] = cljs$core$async$state_machine__31139__auto__);

(statearr_32157[(1)] = (1));

return statearr_32157;
});
var cljs$core$async$state_machine__31139__auto____1 = (function (state_32116){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_32116);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e32158){var ex__31142__auto__ = e32158;
var statearr_32159_33300 = state_32116;
(statearr_32159_33300[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_32116[(4)]))){
var statearr_32160_33305 = state_32116;
(statearr_32160_33305[(1)] = cljs.core.first((state_32116[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33313 = state_32116;
state_32116 = G__33313;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$state_machine__31139__auto__ = function(state_32116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31139__auto____1.call(this,state_32116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31139__auto____0;
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31139__auto____1;
return cljs$core$async$state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_32161 = f__31175__auto__();
(statearr_32161[(6)] = c__31174__auto___33200);

return statearr_32161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
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
var G__32163 = arguments.length;
switch (G__32163) {
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
var G__32165 = arguments.length;
switch (G__32165) {
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
var G__32167 = arguments.length;
switch (G__32167) {
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
var c__31174__auto___33319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_32210){
var state_val_32211 = (state_32210[(1)]);
if((state_val_32211 === (7))){
var state_32210__$1 = state_32210;
var statearr_32212_33330 = state_32210__$1;
(statearr_32212_33330[(2)] = null);

(statearr_32212_33330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (1))){
var state_32210__$1 = state_32210;
var statearr_32213_33343 = state_32210__$1;
(statearr_32213_33343[(2)] = null);

(statearr_32213_33343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (4))){
var inst_32170 = (state_32210[(7)]);
var inst_32171 = (state_32210[(8)]);
var inst_32173 = (inst_32171 < inst_32170);
var state_32210__$1 = state_32210;
if(cljs.core.truth_(inst_32173)){
var statearr_32214_33363 = state_32210__$1;
(statearr_32214_33363[(1)] = (6));

} else {
var statearr_32215_33369 = state_32210__$1;
(statearr_32215_33369[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (15))){
var inst_32196 = (state_32210[(9)]);
var inst_32201 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32196);
var state_32210__$1 = state_32210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32210__$1,(17),out,inst_32201);
} else {
if((state_val_32211 === (13))){
var inst_32196 = (state_32210[(9)]);
var inst_32196__$1 = (state_32210[(2)]);
var inst_32197 = cljs.core.some(cljs.core.nil_QMARK_,inst_32196__$1);
var state_32210__$1 = (function (){var statearr_32216 = state_32210;
(statearr_32216[(9)] = inst_32196__$1);

return statearr_32216;
})();
if(cljs.core.truth_(inst_32197)){
var statearr_32217_33405 = state_32210__$1;
(statearr_32217_33405[(1)] = (14));

} else {
var statearr_32218_33406 = state_32210__$1;
(statearr_32218_33406[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (6))){
var state_32210__$1 = state_32210;
var statearr_32219_33407 = state_32210__$1;
(statearr_32219_33407[(2)] = null);

(statearr_32219_33407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (17))){
var inst_32203 = (state_32210[(2)]);
var state_32210__$1 = (function (){var statearr_32221 = state_32210;
(statearr_32221[(10)] = inst_32203);

return statearr_32221;
})();
var statearr_32222_33408 = state_32210__$1;
(statearr_32222_33408[(2)] = null);

(statearr_32222_33408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (3))){
var inst_32208 = (state_32210[(2)]);
var state_32210__$1 = state_32210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32210__$1,inst_32208);
} else {
if((state_val_32211 === (12))){
var _ = (function (){var statearr_32223 = state_32210;
(statearr_32223[(4)] = cljs.core.rest((state_32210[(4)])));

return statearr_32223;
})();
var state_32210__$1 = state_32210;
var ex32220 = (state_32210__$1[(2)]);
var statearr_32224_33422 = state_32210__$1;
(statearr_32224_33422[(5)] = ex32220);


if((ex32220 instanceof Object)){
var statearr_32225_33423 = state_32210__$1;
(statearr_32225_33423[(1)] = (11));

(statearr_32225_33423[(5)] = null);

} else {
throw ex32220;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (2))){
var inst_32169 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32170 = cnt;
var inst_32171 = (0);
var state_32210__$1 = (function (){var statearr_32226 = state_32210;
(statearr_32226[(7)] = inst_32170);

(statearr_32226[(11)] = inst_32169);

(statearr_32226[(8)] = inst_32171);

return statearr_32226;
})();
var statearr_32227_33425 = state_32210__$1;
(statearr_32227_33425[(2)] = null);

(statearr_32227_33425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (11))){
var inst_32175 = (state_32210[(2)]);
var inst_32176 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32210__$1 = (function (){var statearr_32228 = state_32210;
(statearr_32228[(12)] = inst_32175);

return statearr_32228;
})();
var statearr_32229_33427 = state_32210__$1;
(statearr_32229_33427[(2)] = inst_32176);

(statearr_32229_33427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (9))){
var inst_32171 = (state_32210[(8)]);
var _ = (function (){var statearr_32230 = state_32210;
(statearr_32230[(4)] = cljs.core.cons((12),(state_32210[(4)])));

return statearr_32230;
})();
var inst_32182 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32171) : chs__$1.call(null,inst_32171));
var inst_32183 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32171) : done.call(null,inst_32171));
var inst_32184 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32182,inst_32183);
var ___$1 = (function (){var statearr_32231 = state_32210;
(statearr_32231[(4)] = cljs.core.rest((state_32210[(4)])));

return statearr_32231;
})();
var state_32210__$1 = state_32210;
var statearr_32232_33452 = state_32210__$1;
(statearr_32232_33452[(2)] = inst_32184);

(statearr_32232_33452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (5))){
var inst_32194 = (state_32210[(2)]);
var state_32210__$1 = (function (){var statearr_32233 = state_32210;
(statearr_32233[(13)] = inst_32194);

return statearr_32233;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32210__$1,(13),dchan);
} else {
if((state_val_32211 === (14))){
var inst_32199 = cljs.core.async.close_BANG_(out);
var state_32210__$1 = state_32210;
var statearr_32234_33474 = state_32210__$1;
(statearr_32234_33474[(2)] = inst_32199);

(statearr_32234_33474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (16))){
var inst_32206 = (state_32210[(2)]);
var state_32210__$1 = state_32210;
var statearr_32235_33479 = state_32210__$1;
(statearr_32235_33479[(2)] = inst_32206);

(statearr_32235_33479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (10))){
var inst_32171 = (state_32210[(8)]);
var inst_32187 = (state_32210[(2)]);
var inst_32188 = (inst_32171 + (1));
var inst_32171__$1 = inst_32188;
var state_32210__$1 = (function (){var statearr_32236 = state_32210;
(statearr_32236[(14)] = inst_32187);

(statearr_32236[(8)] = inst_32171__$1);

return statearr_32236;
})();
var statearr_32237_33481 = state_32210__$1;
(statearr_32237_33481[(2)] = null);

(statearr_32237_33481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (8))){
var inst_32192 = (state_32210[(2)]);
var state_32210__$1 = state_32210;
var statearr_32238_33482 = state_32210__$1;
(statearr_32238_33482[(2)] = inst_32192);

(statearr_32238_33482[(1)] = (5));


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
var cljs$core$async$state_machine__31139__auto__ = null;
var cljs$core$async$state_machine__31139__auto____0 = (function (){
var statearr_32239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32239[(0)] = cljs$core$async$state_machine__31139__auto__);

(statearr_32239[(1)] = (1));

return statearr_32239;
});
var cljs$core$async$state_machine__31139__auto____1 = (function (state_32210){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_32210);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e32240){var ex__31142__auto__ = e32240;
var statearr_32241_33495 = state_32210;
(statearr_32241_33495[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_32210[(4)]))){
var statearr_32242_33497 = state_32210;
(statearr_32242_33497[(1)] = cljs.core.first((state_32210[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33498 = state_32210;
state_32210 = G__33498;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$state_machine__31139__auto__ = function(state_32210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31139__auto____1.call(this,state_32210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31139__auto____0;
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31139__auto____1;
return cljs$core$async$state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_32243 = f__31175__auto__();
(statearr_32243[(6)] = c__31174__auto___33319);

return statearr_32243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
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
var G__32246 = arguments.length;
switch (G__32246) {
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
var c__31174__auto___33500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_32278){
var state_val_32279 = (state_32278[(1)]);
if((state_val_32279 === (7))){
var inst_32258 = (state_32278[(7)]);
var inst_32257 = (state_32278[(8)]);
var inst_32257__$1 = (state_32278[(2)]);
var inst_32258__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32257__$1,(0),null);
var inst_32259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32257__$1,(1),null);
var inst_32260 = (inst_32258__$1 == null);
var state_32278__$1 = (function (){var statearr_32280 = state_32278;
(statearr_32280[(7)] = inst_32258__$1);

(statearr_32280[(9)] = inst_32259);

(statearr_32280[(8)] = inst_32257__$1);

return statearr_32280;
})();
if(cljs.core.truth_(inst_32260)){
var statearr_32281_33501 = state_32278__$1;
(statearr_32281_33501[(1)] = (8));

} else {
var statearr_32282_33502 = state_32278__$1;
(statearr_32282_33502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (1))){
var inst_32247 = cljs.core.vec(chs);
var inst_32248 = inst_32247;
var state_32278__$1 = (function (){var statearr_32283 = state_32278;
(statearr_32283[(10)] = inst_32248);

return statearr_32283;
})();
var statearr_32284_33503 = state_32278__$1;
(statearr_32284_33503[(2)] = null);

(statearr_32284_33503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (4))){
var inst_32248 = (state_32278[(10)]);
var state_32278__$1 = state_32278;
return cljs.core.async.ioc_alts_BANG_(state_32278__$1,(7),inst_32248);
} else {
if((state_val_32279 === (6))){
var inst_32274 = (state_32278[(2)]);
var state_32278__$1 = state_32278;
var statearr_32285_33504 = state_32278__$1;
(statearr_32285_33504[(2)] = inst_32274);

(statearr_32285_33504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (3))){
var inst_32276 = (state_32278[(2)]);
var state_32278__$1 = state_32278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32278__$1,inst_32276);
} else {
if((state_val_32279 === (2))){
var inst_32248 = (state_32278[(10)]);
var inst_32250 = cljs.core.count(inst_32248);
var inst_32251 = (inst_32250 > (0));
var state_32278__$1 = state_32278;
if(cljs.core.truth_(inst_32251)){
var statearr_32287_33505 = state_32278__$1;
(statearr_32287_33505[(1)] = (4));

} else {
var statearr_32288_33506 = state_32278__$1;
(statearr_32288_33506[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (11))){
var inst_32248 = (state_32278[(10)]);
var inst_32267 = (state_32278[(2)]);
var tmp32286 = inst_32248;
var inst_32248__$1 = tmp32286;
var state_32278__$1 = (function (){var statearr_32289 = state_32278;
(statearr_32289[(10)] = inst_32248__$1);

(statearr_32289[(11)] = inst_32267);

return statearr_32289;
})();
var statearr_32290_33507 = state_32278__$1;
(statearr_32290_33507[(2)] = null);

(statearr_32290_33507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (9))){
var inst_32258 = (state_32278[(7)]);
var state_32278__$1 = state_32278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32278__$1,(11),out,inst_32258);
} else {
if((state_val_32279 === (5))){
var inst_32272 = cljs.core.async.close_BANG_(out);
var state_32278__$1 = state_32278;
var statearr_32291_33509 = state_32278__$1;
(statearr_32291_33509[(2)] = inst_32272);

(statearr_32291_33509[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (10))){
var inst_32270 = (state_32278[(2)]);
var state_32278__$1 = state_32278;
var statearr_32292_33510 = state_32278__$1;
(statearr_32292_33510[(2)] = inst_32270);

(statearr_32292_33510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (8))){
var inst_32258 = (state_32278[(7)]);
var inst_32248 = (state_32278[(10)]);
var inst_32259 = (state_32278[(9)]);
var inst_32257 = (state_32278[(8)]);
var inst_32262 = (function (){var cs = inst_32248;
var vec__32253 = inst_32257;
var v = inst_32258;
var c = inst_32259;
return (function (p1__32244_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32244_SHARP_);
});
})();
var inst_32263 = cljs.core.filterv(inst_32262,inst_32248);
var inst_32248__$1 = inst_32263;
var state_32278__$1 = (function (){var statearr_32293 = state_32278;
(statearr_32293[(10)] = inst_32248__$1);

return statearr_32293;
})();
var statearr_32294_33511 = state_32278__$1;
(statearr_32294_33511[(2)] = null);

(statearr_32294_33511[(1)] = (2));


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
var cljs$core$async$state_machine__31139__auto__ = null;
var cljs$core$async$state_machine__31139__auto____0 = (function (){
var statearr_32295 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32295[(0)] = cljs$core$async$state_machine__31139__auto__);

(statearr_32295[(1)] = (1));

return statearr_32295;
});
var cljs$core$async$state_machine__31139__auto____1 = (function (state_32278){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_32278);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e32296){var ex__31142__auto__ = e32296;
var statearr_32297_33512 = state_32278;
(statearr_32297_33512[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_32278[(4)]))){
var statearr_32298_33513 = state_32278;
(statearr_32298_33513[(1)] = cljs.core.first((state_32278[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33514 = state_32278;
state_32278 = G__33514;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$state_machine__31139__auto__ = function(state_32278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31139__auto____1.call(this,state_32278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31139__auto____0;
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31139__auto____1;
return cljs$core$async$state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_32299 = f__31175__auto__();
(statearr_32299[(6)] = c__31174__auto___33500);

return statearr_32299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
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
var G__32301 = arguments.length;
switch (G__32301) {
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
var c__31174__auto___33516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_32325){
var state_val_32326 = (state_32325[(1)]);
if((state_val_32326 === (7))){
var inst_32307 = (state_32325[(7)]);
var inst_32307__$1 = (state_32325[(2)]);
var inst_32308 = (inst_32307__$1 == null);
var inst_32309 = cljs.core.not(inst_32308);
var state_32325__$1 = (function (){var statearr_32327 = state_32325;
(statearr_32327[(7)] = inst_32307__$1);

return statearr_32327;
})();
if(inst_32309){
var statearr_32328_33517 = state_32325__$1;
(statearr_32328_33517[(1)] = (8));

} else {
var statearr_32329_33518 = state_32325__$1;
(statearr_32329_33518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (1))){
var inst_32302 = (0);
var state_32325__$1 = (function (){var statearr_32330 = state_32325;
(statearr_32330[(8)] = inst_32302);

return statearr_32330;
})();
var statearr_32331_33519 = state_32325__$1;
(statearr_32331_33519[(2)] = null);

(statearr_32331_33519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (4))){
var state_32325__$1 = state_32325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32325__$1,(7),ch);
} else {
if((state_val_32326 === (6))){
var inst_32320 = (state_32325[(2)]);
var state_32325__$1 = state_32325;
var statearr_32332_33520 = state_32325__$1;
(statearr_32332_33520[(2)] = inst_32320);

(statearr_32332_33520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (3))){
var inst_32322 = (state_32325[(2)]);
var inst_32323 = cljs.core.async.close_BANG_(out);
var state_32325__$1 = (function (){var statearr_32333 = state_32325;
(statearr_32333[(9)] = inst_32322);

return statearr_32333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32325__$1,inst_32323);
} else {
if((state_val_32326 === (2))){
var inst_32302 = (state_32325[(8)]);
var inst_32304 = (inst_32302 < n);
var state_32325__$1 = state_32325;
if(cljs.core.truth_(inst_32304)){
var statearr_32334_33523 = state_32325__$1;
(statearr_32334_33523[(1)] = (4));

} else {
var statearr_32335_33524 = state_32325__$1;
(statearr_32335_33524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (11))){
var inst_32302 = (state_32325[(8)]);
var inst_32312 = (state_32325[(2)]);
var inst_32313 = (inst_32302 + (1));
var inst_32302__$1 = inst_32313;
var state_32325__$1 = (function (){var statearr_32336 = state_32325;
(statearr_32336[(8)] = inst_32302__$1);

(statearr_32336[(10)] = inst_32312);

return statearr_32336;
})();
var statearr_32337_33526 = state_32325__$1;
(statearr_32337_33526[(2)] = null);

(statearr_32337_33526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (9))){
var state_32325__$1 = state_32325;
var statearr_32338_33527 = state_32325__$1;
(statearr_32338_33527[(2)] = null);

(statearr_32338_33527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (5))){
var state_32325__$1 = state_32325;
var statearr_32339_33528 = state_32325__$1;
(statearr_32339_33528[(2)] = null);

(statearr_32339_33528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (10))){
var inst_32317 = (state_32325[(2)]);
var state_32325__$1 = state_32325;
var statearr_32340_33529 = state_32325__$1;
(statearr_32340_33529[(2)] = inst_32317);

(statearr_32340_33529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (8))){
var inst_32307 = (state_32325[(7)]);
var state_32325__$1 = state_32325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32325__$1,(11),out,inst_32307);
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
var cljs$core$async$state_machine__31139__auto__ = null;
var cljs$core$async$state_machine__31139__auto____0 = (function (){
var statearr_32341 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32341[(0)] = cljs$core$async$state_machine__31139__auto__);

(statearr_32341[(1)] = (1));

return statearr_32341;
});
var cljs$core$async$state_machine__31139__auto____1 = (function (state_32325){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_32325);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e32342){var ex__31142__auto__ = e32342;
var statearr_32343_33532 = state_32325;
(statearr_32343_33532[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_32325[(4)]))){
var statearr_32344_33533 = state_32325;
(statearr_32344_33533[(1)] = cljs.core.first((state_32325[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33534 = state_32325;
state_32325 = G__33534;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$state_machine__31139__auto__ = function(state_32325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31139__auto____1.call(this,state_32325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31139__auto____0;
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31139__auto____1;
return cljs$core$async$state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_32345 = f__31175__auto__();
(statearr_32345[(6)] = c__31174__auto___33516);

return statearr_32345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32347 = (function (f,ch,meta32348){
this.f = f;
this.ch = ch;
this.meta32348 = meta32348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32349,meta32348__$1){
var self__ = this;
var _32349__$1 = this;
return (new cljs.core.async.t_cljs$core$async32347(self__.f,self__.ch,meta32348__$1));
}));

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32349){
var self__ = this;
var _32349__$1 = this;
return self__.meta32348;
}));

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32350 = (function (f,ch,meta32348,_,fn1,meta32351){
this.f = f;
this.ch = ch;
this.meta32348 = meta32348;
this._ = _;
this.fn1 = fn1;
this.meta32351 = meta32351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32352,meta32351__$1){
var self__ = this;
var _32352__$1 = this;
return (new cljs.core.async.t_cljs$core$async32350(self__.f,self__.ch,self__.meta32348,self__._,self__.fn1,meta32351__$1));
}));

(cljs.core.async.t_cljs$core$async32350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32352){
var self__ = this;
var _32352__$1 = this;
return self__.meta32351;
}));

(cljs.core.async.t_cljs$core$async32350.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32346_SHARP_){
var G__32353 = (((p1__32346_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32346_SHARP_) : self__.f.call(null,p1__32346_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32353) : f1.call(null,G__32353));
});
}));

(cljs.core.async.t_cljs$core$async32350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32348","meta32348",-1281457794,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32347","cljs.core.async/t_cljs$core$async32347",-2063096929,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32351","meta32351",-1776046549,null)], null);
}));

(cljs.core.async.t_cljs$core$async32350.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32350");

(cljs.core.async.t_cljs$core$async32350.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32350");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32350.
 */
cljs.core.async.__GT_t_cljs$core$async32350 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32350(f__$1,ch__$1,meta32348__$1,___$2,fn1__$1,meta32351){
return (new cljs.core.async.t_cljs$core$async32350(f__$1,ch__$1,meta32348__$1,___$2,fn1__$1,meta32351));
});

}

return (new cljs.core.async.t_cljs$core$async32350(self__.f,self__.ch,self__.meta32348,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32354 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32354) : self__.f.call(null,G__32354));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32348","meta32348",-1281457794,null)], null);
}));

(cljs.core.async.t_cljs$core$async32347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32347");

(cljs.core.async.t_cljs$core$async32347.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32347.
 */
cljs.core.async.__GT_t_cljs$core$async32347 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32347(f__$1,ch__$1,meta32348){
return (new cljs.core.async.t_cljs$core$async32347(f__$1,ch__$1,meta32348));
});

}

return (new cljs.core.async.t_cljs$core$async32347(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32355 = (function (f,ch,meta32356){
this.f = f;
this.ch = ch;
this.meta32356 = meta32356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32357,meta32356__$1){
var self__ = this;
var _32357__$1 = this;
return (new cljs.core.async.t_cljs$core$async32355(self__.f,self__.ch,meta32356__$1));
}));

(cljs.core.async.t_cljs$core$async32355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32357){
var self__ = this;
var _32357__$1 = this;
return self__.meta32356;
}));

(cljs.core.async.t_cljs$core$async32355.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32355.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32355.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32355.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32355.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32355.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32356","meta32356",-161291984,null)], null);
}));

(cljs.core.async.t_cljs$core$async32355.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32355");

(cljs.core.async.t_cljs$core$async32355.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32355");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32355.
 */
cljs.core.async.__GT_t_cljs$core$async32355 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32355(f__$1,ch__$1,meta32356){
return (new cljs.core.async.t_cljs$core$async32355(f__$1,ch__$1,meta32356));
});

}

return (new cljs.core.async.t_cljs$core$async32355(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32358 = (function (p,ch,meta32359){
this.p = p;
this.ch = ch;
this.meta32359 = meta32359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32360,meta32359__$1){
var self__ = this;
var _32360__$1 = this;
return (new cljs.core.async.t_cljs$core$async32358(self__.p,self__.ch,meta32359__$1));
}));

(cljs.core.async.t_cljs$core$async32358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32360){
var self__ = this;
var _32360__$1 = this;
return self__.meta32359;
}));

(cljs.core.async.t_cljs$core$async32358.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32358.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32358.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32358.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32358.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32358.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32358.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32359","meta32359",-318739506,null)], null);
}));

(cljs.core.async.t_cljs$core$async32358.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32358");

(cljs.core.async.t_cljs$core$async32358.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32358");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32358.
 */
cljs.core.async.__GT_t_cljs$core$async32358 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32358(p__$1,ch__$1,meta32359){
return (new cljs.core.async.t_cljs$core$async32358(p__$1,ch__$1,meta32359));
});

}

return (new cljs.core.async.t_cljs$core$async32358(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32362 = arguments.length;
switch (G__32362) {
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
var c__31174__auto___33657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_32383){
var state_val_32384 = (state_32383[(1)]);
if((state_val_32384 === (7))){
var inst_32379 = (state_32383[(2)]);
var state_32383__$1 = state_32383;
var statearr_32385_33658 = state_32383__$1;
(statearr_32385_33658[(2)] = inst_32379);

(statearr_32385_33658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (1))){
var state_32383__$1 = state_32383;
var statearr_32386_33659 = state_32383__$1;
(statearr_32386_33659[(2)] = null);

(statearr_32386_33659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (4))){
var inst_32365 = (state_32383[(7)]);
var inst_32365__$1 = (state_32383[(2)]);
var inst_32366 = (inst_32365__$1 == null);
var state_32383__$1 = (function (){var statearr_32387 = state_32383;
(statearr_32387[(7)] = inst_32365__$1);

return statearr_32387;
})();
if(cljs.core.truth_(inst_32366)){
var statearr_32388_33660 = state_32383__$1;
(statearr_32388_33660[(1)] = (5));

} else {
var statearr_32389_33661 = state_32383__$1;
(statearr_32389_33661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (6))){
var inst_32365 = (state_32383[(7)]);
var inst_32370 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32365) : p.call(null,inst_32365));
var state_32383__$1 = state_32383;
if(cljs.core.truth_(inst_32370)){
var statearr_32390_33664 = state_32383__$1;
(statearr_32390_33664[(1)] = (8));

} else {
var statearr_32391_33666 = state_32383__$1;
(statearr_32391_33666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (3))){
var inst_32381 = (state_32383[(2)]);
var state_32383__$1 = state_32383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32383__$1,inst_32381);
} else {
if((state_val_32384 === (2))){
var state_32383__$1 = state_32383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32383__$1,(4),ch);
} else {
if((state_val_32384 === (11))){
var inst_32373 = (state_32383[(2)]);
var state_32383__$1 = state_32383;
var statearr_32392_33667 = state_32383__$1;
(statearr_32392_33667[(2)] = inst_32373);

(statearr_32392_33667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (9))){
var state_32383__$1 = state_32383;
var statearr_32393_33668 = state_32383__$1;
(statearr_32393_33668[(2)] = null);

(statearr_32393_33668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (5))){
var inst_32368 = cljs.core.async.close_BANG_(out);
var state_32383__$1 = state_32383;
var statearr_32394_33669 = state_32383__$1;
(statearr_32394_33669[(2)] = inst_32368);

(statearr_32394_33669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (10))){
var inst_32376 = (state_32383[(2)]);
var state_32383__$1 = (function (){var statearr_32395 = state_32383;
(statearr_32395[(8)] = inst_32376);

return statearr_32395;
})();
var statearr_32396_33670 = state_32383__$1;
(statearr_32396_33670[(2)] = null);

(statearr_32396_33670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (8))){
var inst_32365 = (state_32383[(7)]);
var state_32383__$1 = state_32383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32383__$1,(11),out,inst_32365);
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
var cljs$core$async$state_machine__31139__auto__ = null;
var cljs$core$async$state_machine__31139__auto____0 = (function (){
var statearr_32397 = [null,null,null,null,null,null,null,null,null];
(statearr_32397[(0)] = cljs$core$async$state_machine__31139__auto__);

(statearr_32397[(1)] = (1));

return statearr_32397;
});
var cljs$core$async$state_machine__31139__auto____1 = (function (state_32383){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_32383);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e32398){var ex__31142__auto__ = e32398;
var statearr_32399_33671 = state_32383;
(statearr_32399_33671[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_32383[(4)]))){
var statearr_32400_33672 = state_32383;
(statearr_32400_33672[(1)] = cljs.core.first((state_32383[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33673 = state_32383;
state_32383 = G__33673;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$state_machine__31139__auto__ = function(state_32383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31139__auto____1.call(this,state_32383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31139__auto____0;
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31139__auto____1;
return cljs$core$async$state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_32401 = f__31175__auto__();
(statearr_32401[(6)] = c__31174__auto___33657);

return statearr_32401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32403 = arguments.length;
switch (G__32403) {
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
var c__31174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_32465){
var state_val_32466 = (state_32465[(1)]);
if((state_val_32466 === (7))){
var inst_32461 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
var statearr_32467_33675 = state_32465__$1;
(statearr_32467_33675[(2)] = inst_32461);

(statearr_32467_33675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (20))){
var inst_32431 = (state_32465[(7)]);
var inst_32442 = (state_32465[(2)]);
var inst_32443 = cljs.core.next(inst_32431);
var inst_32417 = inst_32443;
var inst_32418 = null;
var inst_32419 = (0);
var inst_32420 = (0);
var state_32465__$1 = (function (){var statearr_32468 = state_32465;
(statearr_32468[(8)] = inst_32442);

(statearr_32468[(9)] = inst_32420);

(statearr_32468[(10)] = inst_32417);

(statearr_32468[(11)] = inst_32418);

(statearr_32468[(12)] = inst_32419);

return statearr_32468;
})();
var statearr_32469_33676 = state_32465__$1;
(statearr_32469_33676[(2)] = null);

(statearr_32469_33676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (1))){
var state_32465__$1 = state_32465;
var statearr_32470_33677 = state_32465__$1;
(statearr_32470_33677[(2)] = null);

(statearr_32470_33677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (4))){
var inst_32406 = (state_32465[(13)]);
var inst_32406__$1 = (state_32465[(2)]);
var inst_32407 = (inst_32406__$1 == null);
var state_32465__$1 = (function (){var statearr_32471 = state_32465;
(statearr_32471[(13)] = inst_32406__$1);

return statearr_32471;
})();
if(cljs.core.truth_(inst_32407)){
var statearr_32472_33678 = state_32465__$1;
(statearr_32472_33678[(1)] = (5));

} else {
var statearr_32473_33679 = state_32465__$1;
(statearr_32473_33679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (15))){
var state_32465__$1 = state_32465;
var statearr_32477_33680 = state_32465__$1;
(statearr_32477_33680[(2)] = null);

(statearr_32477_33680[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (21))){
var state_32465__$1 = state_32465;
var statearr_32478_33681 = state_32465__$1;
(statearr_32478_33681[(2)] = null);

(statearr_32478_33681[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (13))){
var inst_32420 = (state_32465[(9)]);
var inst_32417 = (state_32465[(10)]);
var inst_32418 = (state_32465[(11)]);
var inst_32419 = (state_32465[(12)]);
var inst_32427 = (state_32465[(2)]);
var inst_32428 = (inst_32420 + (1));
var tmp32474 = inst_32417;
var tmp32475 = inst_32418;
var tmp32476 = inst_32419;
var inst_32417__$1 = tmp32474;
var inst_32418__$1 = tmp32475;
var inst_32419__$1 = tmp32476;
var inst_32420__$1 = inst_32428;
var state_32465__$1 = (function (){var statearr_32479 = state_32465;
(statearr_32479[(9)] = inst_32420__$1);

(statearr_32479[(10)] = inst_32417__$1);

(statearr_32479[(11)] = inst_32418__$1);

(statearr_32479[(14)] = inst_32427);

(statearr_32479[(12)] = inst_32419__$1);

return statearr_32479;
})();
var statearr_32480_33682 = state_32465__$1;
(statearr_32480_33682[(2)] = null);

(statearr_32480_33682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (22))){
var state_32465__$1 = state_32465;
var statearr_32481_33683 = state_32465__$1;
(statearr_32481_33683[(2)] = null);

(statearr_32481_33683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (6))){
var inst_32406 = (state_32465[(13)]);
var inst_32415 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32406) : f.call(null,inst_32406));
var inst_32416 = cljs.core.seq(inst_32415);
var inst_32417 = inst_32416;
var inst_32418 = null;
var inst_32419 = (0);
var inst_32420 = (0);
var state_32465__$1 = (function (){var statearr_32482 = state_32465;
(statearr_32482[(9)] = inst_32420);

(statearr_32482[(10)] = inst_32417);

(statearr_32482[(11)] = inst_32418);

(statearr_32482[(12)] = inst_32419);

return statearr_32482;
})();
var statearr_32483_33684 = state_32465__$1;
(statearr_32483_33684[(2)] = null);

(statearr_32483_33684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (17))){
var inst_32431 = (state_32465[(7)]);
var inst_32435 = cljs.core.chunk_first(inst_32431);
var inst_32436 = cljs.core.chunk_rest(inst_32431);
var inst_32437 = cljs.core.count(inst_32435);
var inst_32417 = inst_32436;
var inst_32418 = inst_32435;
var inst_32419 = inst_32437;
var inst_32420 = (0);
var state_32465__$1 = (function (){var statearr_32484 = state_32465;
(statearr_32484[(9)] = inst_32420);

(statearr_32484[(10)] = inst_32417);

(statearr_32484[(11)] = inst_32418);

(statearr_32484[(12)] = inst_32419);

return statearr_32484;
})();
var statearr_32485_33685 = state_32465__$1;
(statearr_32485_33685[(2)] = null);

(statearr_32485_33685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (3))){
var inst_32463 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32465__$1,inst_32463);
} else {
if((state_val_32466 === (12))){
var inst_32451 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
var statearr_32486_33686 = state_32465__$1;
(statearr_32486_33686[(2)] = inst_32451);

(statearr_32486_33686[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (2))){
var state_32465__$1 = state_32465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32465__$1,(4),in$);
} else {
if((state_val_32466 === (23))){
var inst_32459 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
var statearr_32487_33687 = state_32465__$1;
(statearr_32487_33687[(2)] = inst_32459);

(statearr_32487_33687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (19))){
var inst_32446 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
var statearr_32488_33688 = state_32465__$1;
(statearr_32488_33688[(2)] = inst_32446);

(statearr_32488_33688[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (11))){
var inst_32417 = (state_32465[(10)]);
var inst_32431 = (state_32465[(7)]);
var inst_32431__$1 = cljs.core.seq(inst_32417);
var state_32465__$1 = (function (){var statearr_32489 = state_32465;
(statearr_32489[(7)] = inst_32431__$1);

return statearr_32489;
})();
if(inst_32431__$1){
var statearr_32490_33689 = state_32465__$1;
(statearr_32490_33689[(1)] = (14));

} else {
var statearr_32491_33690 = state_32465__$1;
(statearr_32491_33690[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (9))){
var inst_32453 = (state_32465[(2)]);
var inst_32454 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32465__$1 = (function (){var statearr_32492 = state_32465;
(statearr_32492[(15)] = inst_32453);

return statearr_32492;
})();
if(cljs.core.truth_(inst_32454)){
var statearr_32493_33691 = state_32465__$1;
(statearr_32493_33691[(1)] = (21));

} else {
var statearr_32494_33692 = state_32465__$1;
(statearr_32494_33692[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (5))){
var inst_32409 = cljs.core.async.close_BANG_(out);
var state_32465__$1 = state_32465;
var statearr_32495_33693 = state_32465__$1;
(statearr_32495_33693[(2)] = inst_32409);

(statearr_32495_33693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (14))){
var inst_32431 = (state_32465[(7)]);
var inst_32433 = cljs.core.chunked_seq_QMARK_(inst_32431);
var state_32465__$1 = state_32465;
if(inst_32433){
var statearr_32496_33694 = state_32465__$1;
(statearr_32496_33694[(1)] = (17));

} else {
var statearr_32497_33695 = state_32465__$1;
(statearr_32497_33695[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (16))){
var inst_32449 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
var statearr_32498_33696 = state_32465__$1;
(statearr_32498_33696[(2)] = inst_32449);

(statearr_32498_33696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (10))){
var inst_32420 = (state_32465[(9)]);
var inst_32418 = (state_32465[(11)]);
var inst_32425 = cljs.core._nth(inst_32418,inst_32420);
var state_32465__$1 = state_32465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32465__$1,(13),out,inst_32425);
} else {
if((state_val_32466 === (18))){
var inst_32431 = (state_32465[(7)]);
var inst_32440 = cljs.core.first(inst_32431);
var state_32465__$1 = state_32465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32465__$1,(20),out,inst_32440);
} else {
if((state_val_32466 === (8))){
var inst_32420 = (state_32465[(9)]);
var inst_32419 = (state_32465[(12)]);
var inst_32422 = (inst_32420 < inst_32419);
var inst_32423 = inst_32422;
var state_32465__$1 = state_32465;
if(cljs.core.truth_(inst_32423)){
var statearr_32499_33697 = state_32465__$1;
(statearr_32499_33697[(1)] = (10));

} else {
var statearr_32500_33698 = state_32465__$1;
(statearr_32500_33698[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__31139__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31139__auto____0 = (function (){
var statearr_32501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32501[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31139__auto__);

(statearr_32501[(1)] = (1));

return statearr_32501;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31139__auto____1 = (function (state_32465){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_32465);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e32502){var ex__31142__auto__ = e32502;
var statearr_32503_33699 = state_32465;
(statearr_32503_33699[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_32465[(4)]))){
var statearr_32504_33700 = state_32465;
(statearr_32504_33700[(1)] = cljs.core.first((state_32465[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33701 = state_32465;
state_32465 = G__33701;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31139__auto__ = function(state_32465){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31139__auto____1.call(this,state_32465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31139__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31139__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_32505 = f__31175__auto__();
(statearr_32505[(6)] = c__31174__auto__);

return statearr_32505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
}));

return c__31174__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32507 = arguments.length;
switch (G__32507) {
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
var G__32509 = arguments.length;
switch (G__32509) {
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
var G__32511 = arguments.length;
switch (G__32511) {
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
var c__31174__auto___33705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_32535){
var state_val_32536 = (state_32535[(1)]);
if((state_val_32536 === (7))){
var inst_32530 = (state_32535[(2)]);
var state_32535__$1 = state_32535;
var statearr_32537_33706 = state_32535__$1;
(statearr_32537_33706[(2)] = inst_32530);

(statearr_32537_33706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32536 === (1))){
var inst_32512 = null;
var state_32535__$1 = (function (){var statearr_32538 = state_32535;
(statearr_32538[(7)] = inst_32512);

return statearr_32538;
})();
var statearr_32539_33707 = state_32535__$1;
(statearr_32539_33707[(2)] = null);

(statearr_32539_33707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32536 === (4))){
var inst_32515 = (state_32535[(8)]);
var inst_32515__$1 = (state_32535[(2)]);
var inst_32516 = (inst_32515__$1 == null);
var inst_32517 = cljs.core.not(inst_32516);
var state_32535__$1 = (function (){var statearr_32540 = state_32535;
(statearr_32540[(8)] = inst_32515__$1);

return statearr_32540;
})();
if(inst_32517){
var statearr_32541_33708 = state_32535__$1;
(statearr_32541_33708[(1)] = (5));

} else {
var statearr_32542_33709 = state_32535__$1;
(statearr_32542_33709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32536 === (6))){
var state_32535__$1 = state_32535;
var statearr_32543_33710 = state_32535__$1;
(statearr_32543_33710[(2)] = null);

(statearr_32543_33710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32536 === (3))){
var inst_32532 = (state_32535[(2)]);
var inst_32533 = cljs.core.async.close_BANG_(out);
var state_32535__$1 = (function (){var statearr_32544 = state_32535;
(statearr_32544[(9)] = inst_32532);

return statearr_32544;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32535__$1,inst_32533);
} else {
if((state_val_32536 === (2))){
var state_32535__$1 = state_32535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32535__$1,(4),ch);
} else {
if((state_val_32536 === (11))){
var inst_32515 = (state_32535[(8)]);
var inst_32524 = (state_32535[(2)]);
var inst_32512 = inst_32515;
var state_32535__$1 = (function (){var statearr_32545 = state_32535;
(statearr_32545[(10)] = inst_32524);

(statearr_32545[(7)] = inst_32512);

return statearr_32545;
})();
var statearr_32546_33711 = state_32535__$1;
(statearr_32546_33711[(2)] = null);

(statearr_32546_33711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32536 === (9))){
var inst_32515 = (state_32535[(8)]);
var state_32535__$1 = state_32535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32535__$1,(11),out,inst_32515);
} else {
if((state_val_32536 === (5))){
var inst_32515 = (state_32535[(8)]);
var inst_32512 = (state_32535[(7)]);
var inst_32519 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32515,inst_32512);
var state_32535__$1 = state_32535;
if(inst_32519){
var statearr_32548_33712 = state_32535__$1;
(statearr_32548_33712[(1)] = (8));

} else {
var statearr_32549_33713 = state_32535__$1;
(statearr_32549_33713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32536 === (10))){
var inst_32527 = (state_32535[(2)]);
var state_32535__$1 = state_32535;
var statearr_32550_33714 = state_32535__$1;
(statearr_32550_33714[(2)] = inst_32527);

(statearr_32550_33714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32536 === (8))){
var inst_32512 = (state_32535[(7)]);
var tmp32547 = inst_32512;
var inst_32512__$1 = tmp32547;
var state_32535__$1 = (function (){var statearr_32551 = state_32535;
(statearr_32551[(7)] = inst_32512__$1);

return statearr_32551;
})();
var statearr_32552_33715 = state_32535__$1;
(statearr_32552_33715[(2)] = null);

(statearr_32552_33715[(1)] = (2));


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
var cljs$core$async$state_machine__31139__auto__ = null;
var cljs$core$async$state_machine__31139__auto____0 = (function (){
var statearr_32553 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32553[(0)] = cljs$core$async$state_machine__31139__auto__);

(statearr_32553[(1)] = (1));

return statearr_32553;
});
var cljs$core$async$state_machine__31139__auto____1 = (function (state_32535){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_32535);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e32554){var ex__31142__auto__ = e32554;
var statearr_32555_33716 = state_32535;
(statearr_32555_33716[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_32535[(4)]))){
var statearr_32556_33717 = state_32535;
(statearr_32556_33717[(1)] = cljs.core.first((state_32535[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33718 = state_32535;
state_32535 = G__33718;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$state_machine__31139__auto__ = function(state_32535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31139__auto____1.call(this,state_32535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31139__auto____0;
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31139__auto____1;
return cljs$core$async$state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_32557 = f__31175__auto__();
(statearr_32557[(6)] = c__31174__auto___33705);

return statearr_32557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32559 = arguments.length;
switch (G__32559) {
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
var c__31174__auto___33720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_32597){
var state_val_32598 = (state_32597[(1)]);
if((state_val_32598 === (7))){
var inst_32593 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
var statearr_32599_33721 = state_32597__$1;
(statearr_32599_33721[(2)] = inst_32593);

(statearr_32599_33721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (1))){
var inst_32560 = (new Array(n));
var inst_32561 = inst_32560;
var inst_32562 = (0);
var state_32597__$1 = (function (){var statearr_32600 = state_32597;
(statearr_32600[(7)] = inst_32562);

(statearr_32600[(8)] = inst_32561);

return statearr_32600;
})();
var statearr_32601_33722 = state_32597__$1;
(statearr_32601_33722[(2)] = null);

(statearr_32601_33722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (4))){
var inst_32565 = (state_32597[(9)]);
var inst_32565__$1 = (state_32597[(2)]);
var inst_32566 = (inst_32565__$1 == null);
var inst_32567 = cljs.core.not(inst_32566);
var state_32597__$1 = (function (){var statearr_32602 = state_32597;
(statearr_32602[(9)] = inst_32565__$1);

return statearr_32602;
})();
if(inst_32567){
var statearr_32603_33723 = state_32597__$1;
(statearr_32603_33723[(1)] = (5));

} else {
var statearr_32604_33724 = state_32597__$1;
(statearr_32604_33724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (15))){
var inst_32587 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
var statearr_32605_33725 = state_32597__$1;
(statearr_32605_33725[(2)] = inst_32587);

(statearr_32605_33725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (13))){
var state_32597__$1 = state_32597;
var statearr_32606_33726 = state_32597__$1;
(statearr_32606_33726[(2)] = null);

(statearr_32606_33726[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (6))){
var inst_32562 = (state_32597[(7)]);
var inst_32583 = (inst_32562 > (0));
var state_32597__$1 = state_32597;
if(cljs.core.truth_(inst_32583)){
var statearr_32607_33727 = state_32597__$1;
(statearr_32607_33727[(1)] = (12));

} else {
var statearr_32608_33728 = state_32597__$1;
(statearr_32608_33728[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (3))){
var inst_32595 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32597__$1,inst_32595);
} else {
if((state_val_32598 === (12))){
var inst_32561 = (state_32597[(8)]);
var inst_32585 = cljs.core.vec(inst_32561);
var state_32597__$1 = state_32597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32597__$1,(15),out,inst_32585);
} else {
if((state_val_32598 === (2))){
var state_32597__$1 = state_32597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32597__$1,(4),ch);
} else {
if((state_val_32598 === (11))){
var inst_32577 = (state_32597[(2)]);
var inst_32578 = (new Array(n));
var inst_32561 = inst_32578;
var inst_32562 = (0);
var state_32597__$1 = (function (){var statearr_32609 = state_32597;
(statearr_32609[(7)] = inst_32562);

(statearr_32609[(10)] = inst_32577);

(statearr_32609[(8)] = inst_32561);

return statearr_32609;
})();
var statearr_32610_33729 = state_32597__$1;
(statearr_32610_33729[(2)] = null);

(statearr_32610_33729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (9))){
var inst_32561 = (state_32597[(8)]);
var inst_32575 = cljs.core.vec(inst_32561);
var state_32597__$1 = state_32597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32597__$1,(11),out,inst_32575);
} else {
if((state_val_32598 === (5))){
var inst_32562 = (state_32597[(7)]);
var inst_32565 = (state_32597[(9)]);
var inst_32561 = (state_32597[(8)]);
var inst_32570 = (state_32597[(11)]);
var inst_32569 = (inst_32561[inst_32562] = inst_32565);
var inst_32570__$1 = (inst_32562 + (1));
var inst_32571 = (inst_32570__$1 < n);
var state_32597__$1 = (function (){var statearr_32611 = state_32597;
(statearr_32611[(12)] = inst_32569);

(statearr_32611[(11)] = inst_32570__$1);

return statearr_32611;
})();
if(cljs.core.truth_(inst_32571)){
var statearr_32612_33730 = state_32597__$1;
(statearr_32612_33730[(1)] = (8));

} else {
var statearr_32613_33731 = state_32597__$1;
(statearr_32613_33731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (14))){
var inst_32590 = (state_32597[(2)]);
var inst_32591 = cljs.core.async.close_BANG_(out);
var state_32597__$1 = (function (){var statearr_32615 = state_32597;
(statearr_32615[(13)] = inst_32590);

return statearr_32615;
})();
var statearr_32616_33732 = state_32597__$1;
(statearr_32616_33732[(2)] = inst_32591);

(statearr_32616_33732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (10))){
var inst_32581 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
var statearr_32617_33733 = state_32597__$1;
(statearr_32617_33733[(2)] = inst_32581);

(statearr_32617_33733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (8))){
var inst_32561 = (state_32597[(8)]);
var inst_32570 = (state_32597[(11)]);
var tmp32614 = inst_32561;
var inst_32561__$1 = tmp32614;
var inst_32562 = inst_32570;
var state_32597__$1 = (function (){var statearr_32618 = state_32597;
(statearr_32618[(7)] = inst_32562);

(statearr_32618[(8)] = inst_32561__$1);

return statearr_32618;
})();
var statearr_32619_33734 = state_32597__$1;
(statearr_32619_33734[(2)] = null);

(statearr_32619_33734[(1)] = (2));


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
var cljs$core$async$state_machine__31139__auto__ = null;
var cljs$core$async$state_machine__31139__auto____0 = (function (){
var statearr_32620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32620[(0)] = cljs$core$async$state_machine__31139__auto__);

(statearr_32620[(1)] = (1));

return statearr_32620;
});
var cljs$core$async$state_machine__31139__auto____1 = (function (state_32597){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_32597);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e32621){var ex__31142__auto__ = e32621;
var statearr_32622_33735 = state_32597;
(statearr_32622_33735[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_32597[(4)]))){
var statearr_32623_33736 = state_32597;
(statearr_32623_33736[(1)] = cljs.core.first((state_32597[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33737 = state_32597;
state_32597 = G__33737;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$state_machine__31139__auto__ = function(state_32597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31139__auto____1.call(this,state_32597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31139__auto____0;
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31139__auto____1;
return cljs$core$async$state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_32624 = f__31175__auto__();
(statearr_32624[(6)] = c__31174__auto___33720);

return statearr_32624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32626 = arguments.length;
switch (G__32626) {
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
var c__31174__auto___33739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31175__auto__ = (function (){var switch__31138__auto__ = (function (state_32668){
var state_val_32669 = (state_32668[(1)]);
if((state_val_32669 === (7))){
var inst_32664 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
var statearr_32670_33740 = state_32668__$1;
(statearr_32670_33740[(2)] = inst_32664);

(statearr_32670_33740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (1))){
var inst_32627 = [];
var inst_32628 = inst_32627;
var inst_32629 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32668__$1 = (function (){var statearr_32671 = state_32668;
(statearr_32671[(7)] = inst_32629);

(statearr_32671[(8)] = inst_32628);

return statearr_32671;
})();
var statearr_32672_33741 = state_32668__$1;
(statearr_32672_33741[(2)] = null);

(statearr_32672_33741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (4))){
var inst_32632 = (state_32668[(9)]);
var inst_32632__$1 = (state_32668[(2)]);
var inst_32633 = (inst_32632__$1 == null);
var inst_32634 = cljs.core.not(inst_32633);
var state_32668__$1 = (function (){var statearr_32673 = state_32668;
(statearr_32673[(9)] = inst_32632__$1);

return statearr_32673;
})();
if(inst_32634){
var statearr_32674_33742 = state_32668__$1;
(statearr_32674_33742[(1)] = (5));

} else {
var statearr_32675_33743 = state_32668__$1;
(statearr_32675_33743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (15))){
var inst_32658 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
var statearr_32676_33744 = state_32668__$1;
(statearr_32676_33744[(2)] = inst_32658);

(statearr_32676_33744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (13))){
var state_32668__$1 = state_32668;
var statearr_32677_33745 = state_32668__$1;
(statearr_32677_33745[(2)] = null);

(statearr_32677_33745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (6))){
var inst_32628 = (state_32668[(8)]);
var inst_32653 = inst_32628.length;
var inst_32654 = (inst_32653 > (0));
var state_32668__$1 = state_32668;
if(cljs.core.truth_(inst_32654)){
var statearr_32678_33746 = state_32668__$1;
(statearr_32678_33746[(1)] = (12));

} else {
var statearr_32679_33747 = state_32668__$1;
(statearr_32679_33747[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (3))){
var inst_32666 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32668__$1,inst_32666);
} else {
if((state_val_32669 === (12))){
var inst_32628 = (state_32668[(8)]);
var inst_32656 = cljs.core.vec(inst_32628);
var state_32668__$1 = state_32668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32668__$1,(15),out,inst_32656);
} else {
if((state_val_32669 === (2))){
var state_32668__$1 = state_32668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32668__$1,(4),ch);
} else {
if((state_val_32669 === (11))){
var inst_32632 = (state_32668[(9)]);
var inst_32636 = (state_32668[(10)]);
var inst_32646 = (state_32668[(2)]);
var inst_32647 = [];
var inst_32648 = inst_32647.push(inst_32632);
var inst_32628 = inst_32647;
var inst_32629 = inst_32636;
var state_32668__$1 = (function (){var statearr_32680 = state_32668;
(statearr_32680[(7)] = inst_32629);

(statearr_32680[(11)] = inst_32648);

(statearr_32680[(12)] = inst_32646);

(statearr_32680[(8)] = inst_32628);

return statearr_32680;
})();
var statearr_32681_33748 = state_32668__$1;
(statearr_32681_33748[(2)] = null);

(statearr_32681_33748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (9))){
var inst_32628 = (state_32668[(8)]);
var inst_32644 = cljs.core.vec(inst_32628);
var state_32668__$1 = state_32668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32668__$1,(11),out,inst_32644);
} else {
if((state_val_32669 === (5))){
var inst_32632 = (state_32668[(9)]);
var inst_32629 = (state_32668[(7)]);
var inst_32636 = (state_32668[(10)]);
var inst_32636__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32632) : f.call(null,inst_32632));
var inst_32637 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32636__$1,inst_32629);
var inst_32638 = cljs.core.keyword_identical_QMARK_(inst_32629,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32639 = ((inst_32637) || (inst_32638));
var state_32668__$1 = (function (){var statearr_32682 = state_32668;
(statearr_32682[(10)] = inst_32636__$1);

return statearr_32682;
})();
if(cljs.core.truth_(inst_32639)){
var statearr_32683_33749 = state_32668__$1;
(statearr_32683_33749[(1)] = (8));

} else {
var statearr_32684_33750 = state_32668__$1;
(statearr_32684_33750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (14))){
var inst_32661 = (state_32668[(2)]);
var inst_32662 = cljs.core.async.close_BANG_(out);
var state_32668__$1 = (function (){var statearr_32686 = state_32668;
(statearr_32686[(13)] = inst_32661);

return statearr_32686;
})();
var statearr_32687_33751 = state_32668__$1;
(statearr_32687_33751[(2)] = inst_32662);

(statearr_32687_33751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (10))){
var inst_32651 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
var statearr_32688_33752 = state_32668__$1;
(statearr_32688_33752[(2)] = inst_32651);

(statearr_32688_33752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (8))){
var inst_32632 = (state_32668[(9)]);
var inst_32636 = (state_32668[(10)]);
var inst_32628 = (state_32668[(8)]);
var inst_32641 = inst_32628.push(inst_32632);
var tmp32685 = inst_32628;
var inst_32628__$1 = tmp32685;
var inst_32629 = inst_32636;
var state_32668__$1 = (function (){var statearr_32689 = state_32668;
(statearr_32689[(14)] = inst_32641);

(statearr_32689[(7)] = inst_32629);

(statearr_32689[(8)] = inst_32628__$1);

return statearr_32689;
})();
var statearr_32690_33753 = state_32668__$1;
(statearr_32690_33753[(2)] = null);

(statearr_32690_33753[(1)] = (2));


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
var cljs$core$async$state_machine__31139__auto__ = null;
var cljs$core$async$state_machine__31139__auto____0 = (function (){
var statearr_32691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32691[(0)] = cljs$core$async$state_machine__31139__auto__);

(statearr_32691[(1)] = (1));

return statearr_32691;
});
var cljs$core$async$state_machine__31139__auto____1 = (function (state_32668){
while(true){
var ret_value__31140__auto__ = (function (){try{while(true){
var result__31141__auto__ = switch__31138__auto__(state_32668);
if(cljs.core.keyword_identical_QMARK_(result__31141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31141__auto__;
}
break;
}
}catch (e32692){var ex__31142__auto__ = e32692;
var statearr_32693_33754 = state_32668;
(statearr_32693_33754[(2)] = ex__31142__auto__);


if(cljs.core.seq((state_32668[(4)]))){
var statearr_32694_33755 = state_32668;
(statearr_32694_33755[(1)] = cljs.core.first((state_32668[(4)])));

} else {
throw ex__31142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33756 = state_32668;
state_32668 = G__33756;
continue;
} else {
return ret_value__31140__auto__;
}
break;
}
});
cljs$core$async$state_machine__31139__auto__ = function(state_32668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31139__auto____1.call(this,state_32668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31139__auto____0;
cljs$core$async$state_machine__31139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31139__auto____1;
return cljs$core$async$state_machine__31139__auto__;
})()
})();
var state__31176__auto__ = (function (){var statearr_32695 = f__31175__auto__();
(statearr_32695[(6)] = c__31174__auto___33739);

return statearr_32695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31176__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
