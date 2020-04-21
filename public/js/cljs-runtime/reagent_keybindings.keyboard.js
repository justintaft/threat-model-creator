goog.provide('reagent_keybindings.keyboard');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('goog.events.EventType');
reagent_keybindings.keyboard.modifiers = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__6284){
var vec__6285 = p__6284;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6285,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6285,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}),new cljs.core.PersistentArrayMap(null, 7, ["shift",(16),"alt",(18),"option",(18),"ctrl",(17),"control",(17),"cmd",(91),"command",(91)], null),(function (){var iter__4582__auto__ = (function reagent_keybindings$keyboard$iter__6288(s__6289){
return (new cljs.core.LazySeq(null,(function (){
var s__6289__$1 = s__6289;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__6289__$1);
if(temp__5735__auto__){
var s__6289__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6289__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__6289__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__6291 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__6290 = (0);
while(true){
if((i__6290 < size__4581__auto__)){
var k = cljs.core._nth(c__4580__auto__,i__6290);
cljs.core.chunk_append(b__6291,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),((111) + k)], null));

var G__6312 = (i__6290 + (1));
i__6290 = G__6312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6291),reagent_keybindings$keyboard$iter__6288(cljs.core.chunk_rest(s__6289__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6291),null);
}
} else {
var k = cljs.core.first(s__6289__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),((111) + k)], null),reagent_keybindings$keyboard$iter__6288(cljs.core.rest(s__6289__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(20)));
})());
reagent_keybindings.keyboard.mouse_buttons = new cljs.core.PersistentArrayMap(null, 6, ["mouse0",new cljs.core.Keyword(null,"m0","m0",-1497854839),"mouseleft",new cljs.core.Keyword(null,"m0","m0",-1497854839),"mouse2",new cljs.core.Keyword(null,"m2","m2",-587003306),"mouseright",new cljs.core.Keyword(null,"m2","m2",-587003306),"mouse1",new cljs.core.Keyword(null,"m1","m1",-108094626),"mousemiddle",new cljs.core.Keyword(null,"m1","m1",-108094626)], null);
reagent_keybindings.keyboard.special_ks = cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","up","delete","/","return","-","backspace","escape","del","pageup","down","home",".",";",",","pagedown","[","clear","\\","enter","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(38),(46),(191),(13),(189),(8),(27),(46),(33),(40),(36),(190),(186),(188),(34),(219),(12),(220),(13),(35),(27),(37)]);
/**
 * Return the keycode (number) of the key given as a string.
 */
reagent_keybindings.keyboard.get_keycode = (function reagent_keybindings$keyboard$get_keycode(key){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reagent_keybindings.keyboard.special_ks,key);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reagent_keybindings.keyboard.modifiers,key);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reagent_keybindings.keyboard.mouse_buttons,key);
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return key.toUpperCase().charCodeAt((0));
}
}
}
});
/**
 * Convert string representation of shortcuts to their map equilavent.
 * 
 *   Modifiers are separated from the main key by a space or a dash.
 *   For example : 
 *   "ctrl-a" or "ctrl a"
 */
reagent_keybindings.keyboard.string_to_keys_STAR_ = (function reagent_keybindings$keyboard$string_to_keys_STAR_(kb_string){
var keys = (function (string){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6292_SHARP_){
return clojure.string.replace(p1__6292_SHARP_,"dash","-");
}),string);
})(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(clojure.string.lower_case(kb_string),/--| -/,"-dash"),/ |-/));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reagent_keybindings$keyboard$string_to_keys_STAR__$_iter__6293(s__6294){
return (new cljs.core.LazySeq(null,(function (){
var s__6294__$1 = s__6294;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__6294__$1);
if(temp__5735__auto__){
var s__6294__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6294__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__6294__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__6296 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__6295 = (0);
while(true){
if((i__6295 < size__4581__auto__)){
var k = cljs.core._nth(c__4580__auto__,i__6295);
cljs.core.chunk_append(b__6296,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift","shift",997140064),true], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl","ctrl",361402094),true], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alt","alt",-3214426),true], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),k], null)
))));

var G__6314 = (i__6295 + (1));
i__6295 = G__6314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6296),reagent_keybindings$keyboard$string_to_keys_STAR__$_iter__6293(cljs.core.chunk_rest(s__6294__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6296),null);
}
} else {
var k = cljs.core.first(s__6294__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift","shift",997140064),true], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl","ctrl",361402094),true], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alt","alt",-3214426),true], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),k], null)
))),reagent_keybindings$keyboard$string_to_keys_STAR__$_iter__6293(cljs.core.rest(s__6294__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_keybindings.keyboard.get_keycode,keys));
})());
});
reagent_keybindings.keyboard.string_to_keys = cljs.core.memoize(reagent_keybindings.keyboard.string_to_keys_STAR_);
/**
 * Prevent the default action for these keys.
 */
reagent_keybindings.keyboard.preventing_default_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),(82),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),(83),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),true], null)], null));
if((typeof reagent_keybindings !== 'undefined') && (typeof reagent_keybindings.keyboard !== 'undefined') && (typeof reagent_keybindings.keyboard.keyboard_state !== 'undefined')){
} else {
reagent_keybindings.keyboard.keyboard_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),null,new cljs.core.Keyword(null,"shift","shift",997140064),null,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),null,new cljs.core.Keyword(null,"alt","alt",-3214426),null], null));
}
if((typeof reagent_keybindings !== 'undefined') && (typeof reagent_keybindings.keyboard !== 'undefined') && (typeof reagent_keybindings.keyboard.deactivate_shortcuts_comps !== 'undefined')){
} else {
reagent_keybindings.keyboard.deactivate_shortcuts_comps = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
/**
 * Return true if keyboard and mouse shortcuts are active.
 */
reagent_keybindings.keyboard.shortcuts_active_QMARK_ = (function reagent_keybindings$keyboard$shortcuts_active_QMARK_(){
return cljs.core.not(cljs.core.seq(cljs.core.deref(reagent_keybindings.keyboard.deactivate_shortcuts_comps)));
});
if((typeof reagent_keybindings !== 'undefined') && (typeof reagent_keybindings.keyboard !== 'undefined') && (typeof reagent_keybindings.keyboard.registered_keys !== 'undefined')){
} else {
reagent_keybindings.keyboard.registered_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Register a shortcut. If multiple shortcuts have the same keys,
 *   only the most recently added will be active. Re-registering the same
 *   keys and ID combination will update the action function without
 *   changing the order.
 */
reagent_keybindings.keyboard.register_keys_BANG_ = (function reagent_keybindings$keyboard$register_keys_BANG_(shortcut_string,id,action_fn){
var keys_map = reagent_keybindings.keyboard.string_to_keys(shortcut_string);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_keybindings.keyboard.registered_keys,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys_map], null),(function (action_coll){
if(cljs.core.truth_(cljs.core.some((function (p1__6297_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6297_SHARP_),id);
}),action_coll))){
return cljs.core.vec((function (){var iter__4582__auto__ = (function reagent_keybindings$keyboard$register_keys_BANG__$_iter__6298(s__6299){
return (new cljs.core.LazySeq(null,(function (){
var s__6299__$1 = s__6299;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__6299__$1);
if(temp__5735__auto__){
var s__6299__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6299__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__6299__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__6301 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__6300 = (0);
while(true){
if((i__6300 < size__4581__auto__)){
var entry = cljs.core._nth(c__4580__auto__,i__6300);
cljs.core.chunk_append(b__6301,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"action-fn","action-fn",1914929011),action_fn):entry));

var G__6315 = (i__6300 + (1));
i__6300 = G__6315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6301),reagent_keybindings$keyboard$register_keys_BANG__$_iter__6298(cljs.core.chunk_rest(s__6299__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6301),null);
}
} else {
var entry = cljs.core.first(s__6299__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"action-fn","action-fn",1914929011),action_fn):entry),reagent_keybindings$keyboard$register_keys_BANG__$_iter__6298(cljs.core.rest(s__6299__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(action_coll);
})());
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4185__auto__ = action_coll;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"action-fn","action-fn",1914929011),action_fn], null));
}
}));
});
reagent_keybindings.keyboard.deregister_keys_BANG_ = (function reagent_keybindings$keyboard$deregister_keys_BANG_(shortcut_string,id){
var keys_map = reagent_keybindings.keyboard.string_to_keys(shortcut_string);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_keybindings.keyboard.registered_keys,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys_map], null),(function (action_coll){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6302_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6302_SHARP_),id);
}),action_coll));
}));
});
/**
 * Return the keys action, if any.
 */
reagent_keybindings.keyboard.get_keys_action = (function reagent_keybindings$keyboard$get_keys_action(keys_map){
if(reagent_keybindings.keyboard.shortcuts_active_QMARK_()){
return new cljs.core.Keyword(null,"action-fn","action-fn",1914929011).cljs$core$IFn$_invoke$arity$1(cljs.core.peek(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_keybindings.keyboard.registered_keys),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys_map], null))));
} else {
return null;
}
});
/**
 * Return the keyboard modifiers associated with this event.
 */
reagent_keybindings.keyboard.evt_modifiers = (function reagent_keybindings$keyboard$evt_modifiers(evt){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shift","shift",997140064),evt.shiftKey,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),evt.ctrlKey,new cljs.core.Keyword(null,"alt","alt",-3214426),evt.altKey], null);
});
reagent_keybindings.keyboard.key_up_BANG_ = (function reagent_keybindings$keyboard$key_up_BANG_(evt){
var keycode = evt.keyCode;
var mods = reagent_keybindings.keyboard.evt_modifiers(evt);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_keybindings.keyboard.keyboard_state,cljs.core.merge,mods,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keycode,new cljs.core.Keyword(null,"keycode","keycode",-47989070).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reagent_keybindings.keyboard.keyboard_state))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),null], null):null));
});
reagent_keybindings.keyboard.key_down_BANG_ = (function reagent_keybindings$keyboard$key_down_BANG_(evt){
var keycode = evt.keyCode;
var mods = reagent_keybindings.keyboard.evt_modifiers(evt);
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mods,new cljs.core.Keyword(null,"keycode","keycode",-47989070),keycode);
var pressed_keys = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,new_state));
cljs.core.reset_BANG_(reagent_keybindings.keyboard.keyboard_state,new_state);

var temp__5735__auto___6319 = reagent_keybindings.keyboard.get_keys_action(pressed_keys);
if(cljs.core.truth_(temp__5735__auto___6319)){
var action_6320 = temp__5735__auto___6319;
(action_6320.cljs$core$IFn$_invoke$arity$1 ? action_6320.cljs$core$IFn$_invoke$arity$1(evt) : action_6320.call(null,evt));

evt.preventDefault();
} else {
}

if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([pressed_keys]),cljs.core.deref(reagent_keybindings.keyboard.preventing_default_keys)))){
return evt.preventDefault();
} else {
return null;
}
});
reagent_keybindings.keyboard.mouse_up_BANG_ = (function reagent_keybindings$keyboard$mouse_up_BANG_(evt){
var button = evt.button;
var keycode = (function (){var pred__6303 = cljs.core._EQ_;
var expr__6304 = button;
if(cljs.core.truth_((pred__6303.cljs$core$IFn$_invoke$arity$2 ? pred__6303.cljs$core$IFn$_invoke$arity$2((0),expr__6304) : pred__6303.call(null,(0),expr__6304)))){
return new cljs.core.Keyword(null,"m0","m0",-1497854839);
} else {
if(cljs.core.truth_((pred__6303.cljs$core$IFn$_invoke$arity$2 ? pred__6303.cljs$core$IFn$_invoke$arity$2((1),expr__6304) : pred__6303.call(null,(1),expr__6304)))){
return new cljs.core.Keyword(null,"m1","m1",-108094626);
} else {
if(cljs.core.truth_((pred__6303.cljs$core$IFn$_invoke$arity$2 ? pred__6303.cljs$core$IFn$_invoke$arity$2((2),expr__6304) : pred__6303.call(null,(2),expr__6304)))){
return new cljs.core.Keyword(null,"m2","m2",-587003306);
} else {
return null;
}
}
}
})();
var mods = reagent_keybindings.keyboard.evt_modifiers(evt);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_keybindings.keyboard.keyboard_state,cljs.core.merge,mods,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keycode,new cljs.core.Keyword(null,"keycode","keycode",-47989070).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reagent_keybindings.keyboard.keyboard_state))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),null], null):null));
});
reagent_keybindings.keyboard.mouse_down_BANG_ = (function reagent_keybindings$keyboard$mouse_down_BANG_(evt){
var button = evt.button;
var keycode = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(button)].join(''));
var mods = reagent_keybindings.keyboard.evt_modifiers(evt);
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mods,new cljs.core.Keyword(null,"keycode","keycode",-47989070),keycode);
var pressed_keys = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,new_state));
cljs.core.reset_BANG_(reagent_keybindings.keyboard.keyboard_state,new_state);

var temp__5735__auto__ = reagent_keybindings.keyboard.get_keys_action(pressed_keys);
if(cljs.core.truth_(temp__5735__auto__)){
var action = temp__5735__auto__;
(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(evt) : action.call(null,evt));

evt.preventDefault();

return evt.stopPropagation();
} else {
return null;
}
});
/**
 * Component that will add the necessary events listeners to the
 *   window.
 */
reagent_keybindings.keyboard.keyboard_listener = (function reagent_keybindings$keyboard$keyboard_listener(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
window.addEventListener(goog.events.EventType.KEYUP,reagent_keybindings.keyboard.key_up_BANG_);

window.addEventListener(goog.events.EventType.KEYDOWN,reagent_keybindings.keyboard.key_down_BANG_);

window.addEventListener(goog.events.EventType.MOUSEUP,reagent_keybindings.keyboard.mouse_up_BANG_);

return window.addEventListener(goog.events.EventType.MOUSEDOWN,reagent_keybindings.keyboard.mouse_down_BANG_);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_){
window.removeEventListener(goog.events.EventType.KEYUP,reagent_keybindings.keyboard.key_up_BANG_);

window.removeEventListener(goog.events.EventType.KEYDOWN,reagent_keybindings.keyboard.key_down_BANG_);

window.removeEventListener(goog.events.EventType.MOUSEUP,reagent_keybindings.keyboard.mouse_up_BANG_);

return window.removeEventListener(goog.events.EventType.MOUSEDOWN,reagent_keybindings.keyboard.mouse_down_BANG_);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
})], null));
});
/**
 * Component to register a shortcut. If multiple shortcuts have the same keys,
 *   only the most recently added will be active. Re-registering the same
 *   keys and ID combination will update the action function without
 *   changing the order.
 * 
 *   Modifiers in `shortcut-string` are separated from the main key by a space or a dash.
 *   For example : 
 *   "ctrl-a" or "ctrl a"
 * 
 *   The `keyboard-listener` component must be mounted somewhere in order
 *   for the shortcuts to be activated.
 */
reagent_keybindings.keyboard.kb_action = (function reagent_keybindings$keyboard$kb_action(shortcut_string,kb_fn){
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("kb-");
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
return reagent_keybindings.keyboard.register_keys_BANG_(shortcut_string,id,kb_fn);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (_,p__6306){
var vec__6307 = p__6306;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6307,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6307,(1),null);
var new_kb_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6307,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kb_fn,new_kb_fn)){
return null;
} else {
return reagent_keybindings.keyboard.register_keys_BANG_(shortcut_string,id,kb_fn);
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_){
return reagent_keybindings.keyboard.deregister_keys_BANG_(shortcut_string,id);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
})], null));
});
/**
 * While mounted, kb shortcuts are completely deactivated.
 *   Useful when showing a form in a modal. (We wouldn't want the user to
 *   activate shortcuts while typing in some text field.)
 */
reagent_keybindings.keyboard.deactivate_kb_shortcuts = (function reagent_keybindings$keyboard$deactivate_kb_shortcuts(){
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("deactivate-shortcuts-");
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent_keybindings.keyboard.deactivate_shortcuts_comps,cljs.core.conj,id);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent_keybindings.keyboard.deactivate_shortcuts_comps,(function (p1__6310_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),p1__6310_SHARP_);
}));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
})], null));
});

//# sourceMappingURL=reagent_keybindings.keyboard.js.map
