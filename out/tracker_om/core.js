// Compiled by ClojureScript 0.0-2657 {}
if(!goog.isProvided_('tracker_om.core')) {
goog.provide('tracker_om.core');
}
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
tracker_om.core.tracker_header_row = (function tracker_header_row(columns){

if(typeof tracker_om.core.t11480 !== 'undefined'){
} else {

/**
* @constructor
*/
tracker_om.core.t11480 = (function (columns,tracker_header_row,meta11481){
this.columns = columns;
this.tracker_header_row = tracker_header_row;
this.meta11481 = meta11481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tracker_om.core.t11480.prototype.om$core$IRender$ = true;

tracker_om.core.t11480.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.tr,{"key": "header-row"},cljs.core.map.call(null,((function (___$1){
return (function (p1__11475_SHARP_){
var map__11483 = p1__11475_SHARP_;
var map__11483__$1 = ((cljs.core.seq_QMARK_.call(null,map__11483))?cljs.core.apply.call(null,cljs.core.hash_map,map__11483):map__11483);
var id = cljs.core.get.call(null,map__11483__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__11483__$1,new cljs.core.Keyword(null,"title","title",636505583));
return React.DOM.th({"key": id},title);
});})(___$1))
,self__.columns));
});

tracker_om.core.t11480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11482){
var self__ = this;
var _11482__$1 = this;
return self__.meta11481;
});

tracker_om.core.t11480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11482,meta11481__$1){
var self__ = this;
var _11482__$1 = this;
return (new tracker_om.core.t11480(self__.columns,self__.tracker_header_row,meta11481__$1));
});

tracker_om.core.t11480.cljs$lang$type = true;

tracker_om.core.t11480.cljs$lang$ctorStr = "tracker-om.core/t11480";

tracker_om.core.t11480.cljs$lang$ctorPrWriter = (function (this__4324__auto__,writer__4325__auto__,opt__4326__auto__){
return cljs.core._write.call(null,writer__4325__auto__,"tracker-om.core/t11480");
});

tracker_om.core.__GT_t11480 = (function __GT_t11480(columns__$1,tracker_header_row__$1,meta11481){
return (new tracker_om.core.t11480(columns__$1,tracker_header_row__$1,meta11481));
});

}

return (new tracker_om.core.t11480(columns,tracker_header_row,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),22,new cljs.core.Keyword(null,"end-line","end-line",1837326455),17,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jwoo/github/tracker-om/src/tracker_om/core.cljs"], null)));
});
tracker_om.core.tracker_row = (function tracker_row(props){

var map__11490 = props;
var map__11490__$1 = ((cljs.core.seq_QMARK_.call(null,map__11490))?cljs.core.apply.call(null,cljs.core.hash_map,map__11490):map__11490);
var columns = cljs.core.get.call(null,map__11490__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var row = cljs.core.get.call(null,map__11490__$1,new cljs.core.Keyword(null,"row","row",-570139521));
if(typeof tracker_om.core.t11491 !== 'undefined'){
} else {

/**
* @constructor
*/
tracker_om.core.t11491 = (function (row,columns,map__11490,props,tracker_row,meta11492){
this.row = row;
this.columns = columns;
this.map__11490 = map__11490;
this.props = props;
this.tracker_row = tracker_row;
this.meta11492 = meta11492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tracker_om.core.t11491.prototype.om$core$IRender$ = true;

tracker_om.core.t11491.prototype.om$core$IRender$render$arity$1 = ((function (map__11490,map__11490__$1,columns,row){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.tr,{"key": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.row)},cljs.core.map.call(null,((function (___$1,map__11490,map__11490__$1,columns,row){
return (function (p1__11484_SHARP_){
var map__11494 = p1__11484_SHARP_;
var map__11494__$1 = ((cljs.core.seq_QMARK_.call(null,map__11494))?cljs.core.apply.call(null,cljs.core.hash_map,map__11494):map__11494);
var id = cljs.core.get.call(null,map__11494__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return React.DOM.td({"key": id},id.call(null,self__.row));
});})(___$1,map__11490,map__11490__$1,columns,row))
,self__.columns));
});})(map__11490,map__11490__$1,columns,row))
;

tracker_om.core.t11491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__11490,map__11490__$1,columns,row){
return (function (_11493){
var self__ = this;
var _11493__$1 = this;
return self__.meta11492;
});})(map__11490,map__11490__$1,columns,row))
;

tracker_om.core.t11491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__11490,map__11490__$1,columns,row){
return (function (_11493,meta11492__$1){
var self__ = this;
var _11493__$1 = this;
return (new tracker_om.core.t11491(self__.row,self__.columns,self__.map__11490,self__.props,self__.tracker_row,meta11492__$1));
});})(map__11490,map__11490__$1,columns,row))
;

tracker_om.core.t11491.cljs$lang$type = true;

tracker_om.core.t11491.cljs$lang$ctorStr = "tracker-om.core/t11491";

tracker_om.core.t11491.cljs$lang$ctorPrWriter = ((function (map__11490,map__11490__$1,columns,row){
return (function (this__4324__auto__,writer__4325__auto__,opt__4326__auto__){
return cljs.core._write.call(null,writer__4325__auto__,"tracker-om.core/t11491");
});})(map__11490,map__11490__$1,columns,row))
;

tracker_om.core.__GT_t11491 = ((function (map__11490,map__11490__$1,columns,row){
return (function __GT_t11491(row__$1,columns__$1,map__11490__$2,props__$1,tracker_row__$1,meta11492){
return (new tracker_om.core.t11491(row__$1,columns__$1,map__11490__$2,props__$1,tracker_row__$1,meta11492));
});})(map__11490,map__11490__$1,columns,row))
;

}

return (new tracker_om.core.t11491(row,columns,map__11490__$1,props,tracker_row,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),24,new cljs.core.Keyword(null,"end-line","end-line",1837326455),30,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),22,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jwoo/github/tracker-om/src/tracker_om/core.cljs"], null)));
});
tracker_om.core.tracker_header = (function tracker_header(columns){

if(typeof tracker_om.core.t11498 !== 'undefined'){
} else {

/**
* @constructor
*/
tracker_om.core.t11498 = (function (columns,tracker_header,meta11499){
this.columns = columns;
this.tracker_header = tracker_header;
this.meta11499 = meta11499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tracker_om.core.t11498.prototype.om$core$IRender$ = true;

tracker_om.core.t11498.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.thead(null,om.core.build.call(null,tracker_om.core.tracker_header_row,self__.columns));
});

tracker_om.core.t11498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11500){
var self__ = this;
var _11500__$1 = this;
return self__.meta11499;
});

tracker_om.core.t11498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11500,meta11499__$1){
var self__ = this;
var _11500__$1 = this;
return (new tracker_om.core.t11498(self__.columns,self__.tracker_header,meta11499__$1));
});

tracker_om.core.t11498.cljs$lang$type = true;

tracker_om.core.t11498.cljs$lang$ctorStr = "tracker-om.core/t11498";

tracker_om.core.t11498.cljs$lang$ctorPrWriter = (function (this__4324__auto__,writer__4325__auto__,opt__4326__auto__){
return cljs.core._write.call(null,writer__4325__auto__,"tracker-om.core/t11498");
});

tracker_om.core.__GT_t11498 = (function __GT_t11498(columns__$1,tracker_header__$1,meta11499){
return (new tracker_om.core.t11498(columns__$1,tracker_header__$1,meta11499));
});

}

return (new tracker_om.core.t11498(columns,tracker_header,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),49,new cljs.core.Keyword(null,"end-line","end-line",1837326455),38,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),34,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jwoo/github/tracker-om/src/tracker_om/core.cljs"], null)));
});
tracker_om.core.tracker_body = (function tracker_body(props){

var map__11506 = props;
var map__11506__$1 = ((cljs.core.seq_QMARK_.call(null,map__11506))?cljs.core.apply.call(null,cljs.core.hash_map,map__11506):map__11506);
var columns = cljs.core.get.call(null,map__11506__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var rows = cljs.core.get.call(null,map__11506__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
if(typeof tracker_om.core.t11507 !== 'undefined'){
} else {

/**
* @constructor
*/
tracker_om.core.t11507 = (function (rows,columns,map__11506,props,tracker_body,meta11508){
this.rows = rows;
this.columns = columns;
this.map__11506 = map__11506;
this.props = props;
this.tracker_body = tracker_body;
this.meta11508 = meta11508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tracker_om.core.t11507.prototype.om$core$IRender$ = true;

tracker_om.core.t11507.prototype.om$core$IRender$render$arity$1 = ((function (map__11506,map__11506__$1,columns,rows){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (___$1,map__11506,map__11506__$1,columns,rows){
return (function (p1__11501_SHARP_){
return om.core.build.call(null,tracker_om.core.tracker_row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columns","columns",1998437288),self__.columns,new cljs.core.Keyword(null,"row","row",-570139521),p1__11501_SHARP_], null));
});})(___$1,map__11506,map__11506__$1,columns,rows))
,self__.rows));
});})(map__11506,map__11506__$1,columns,rows))
;

tracker_om.core.t11507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__11506,map__11506__$1,columns,rows){
return (function (_11509){
var self__ = this;
var _11509__$1 = this;
return self__.meta11508;
});})(map__11506,map__11506__$1,columns,rows))
;

tracker_om.core.t11507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__11506,map__11506__$1,columns,rows){
return (function (_11509,meta11508__$1){
var self__ = this;
var _11509__$1 = this;
return (new tracker_om.core.t11507(self__.rows,self__.columns,self__.map__11506,self__.props,self__.tracker_body,meta11508__$1));
});})(map__11506,map__11506__$1,columns,rows))
;

tracker_om.core.t11507.cljs$lang$type = true;

tracker_om.core.t11507.cljs$lang$ctorStr = "tracker-om.core/t11507";

tracker_om.core.t11507.cljs$lang$ctorPrWriter = ((function (map__11506,map__11506__$1,columns,rows){
return (function (this__4324__auto__,writer__4325__auto__,opt__4326__auto__){
return cljs.core._write.call(null,writer__4325__auto__,"tracker-om.core/t11507");
});})(map__11506,map__11506__$1,columns,rows))
;

tracker_om.core.__GT_t11507 = ((function (map__11506,map__11506__$1,columns,rows){
return (function __GT_t11507(rows__$1,columns__$1,map__11506__$2,props__$1,tracker_body__$1,meta11508){
return (new tracker_om.core.t11507(rows__$1,columns__$1,map__11506__$2,props__$1,tracker_body__$1,meta11508));
});})(map__11506,map__11506__$1,columns,rows))
;

}

return (new tracker_om.core.t11507(rows,columns,map__11506__$1,props,tracker_body,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),21,new cljs.core.Keyword(null,"end-line","end-line",1837326455),50,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),43,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jwoo/github/tracker-om/src/tracker_om/core.cljs"], null)));
});
tracker_om.core.tracker_table = (function tracker_table(props){

if(typeof tracker_om.core.t11513 !== 'undefined'){
} else {

/**
* @constructor
*/
tracker_om.core.t11513 = (function (props,tracker_table,meta11514){
this.props = props;
this.tracker_table = tracker_table;
this.meta11514 = meta11514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tracker_om.core.t11513.prototype.om$core$IRender$ = true;

tracker_om.core.t11513.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.table({},om.core.build.call(null,tracker_om.core.tracker_header,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(self__.props)),om.core.build.call(null,tracker_om.core.tracker_body,self__.props));
});

tracker_om.core.t11513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11515){
var self__ = this;
var _11515__$1 = this;
return self__.meta11514;
});

tracker_om.core.t11513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11515,meta11514__$1){
var self__ = this;
var _11515__$1 = this;
return (new tracker_om.core.t11513(self__.props,self__.tracker_table,meta11514__$1));
});

tracker_om.core.t11513.cljs$lang$type = true;

tracker_om.core.t11513.cljs$lang$ctorStr = "tracker-om.core/t11513";

tracker_om.core.t11513.cljs$lang$ctorPrWriter = (function (this__4324__auto__,writer__4325__auto__,opt__4326__auto__){
return cljs.core._write.call(null,writer__4325__auto__,"tracker-om.core/t11513");
});

tracker_om.core.__GT_t11513 = (function __GT_t11513(props__$1,tracker_table__$1,meta11514){
return (new tracker_om.core.t11513(props__$1,tracker_table__$1,meta11514));
});

}

return (new tracker_om.core.t11513(props,tracker_table,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),41,new cljs.core.Keyword(null,"end-line","end-line",1837326455),59,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),54,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jwoo/github/tracker-om/src/tracker_om/core.cljs"], null)));
});
tracker_om.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),"Name"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"episode","episode",-2141083910),new cljs.core.Keyword(null,"title","title",636505583),"Episode"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"last-viewed","last-viewed",2938867),new cljs.core.Keyword(null,"title","title",636505583),"Last Viewed"], null)], null),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"dfsds",new cljs.core.Keyword(null,"episode","episode",-2141083910),(1),new cljs.core.Keyword(null,"last-viewed","last-viewed",2938867),"20-Jan-14"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"sdfsdfsd",new cljs.core.Keyword(null,"episode","episode",-2141083910),(2),new cljs.core.Keyword(null,"last-viewed","last-viewed",2938867),"21-Jan-14"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"vcxvcsd",new cljs.core.Keyword(null,"episode","episode",-2141083910),(5),new cljs.core.Keyword(null,"last-viewed","last-viewed",2938867),"14-Jan-14"], null)], null)], null));
om.core.root.call(null,(function (app,owner){
if(typeof tracker_om.core.t11516 !== 'undefined'){
} else {

/**
* @constructor
*/
tracker_om.core.t11516 = (function (owner,app,meta11517){
this.owner = owner;
this.app = app;
this.meta11517 = meta11517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tracker_om.core.t11516.prototype.om$core$IRender$ = true;

tracker_om.core.t11516.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,tracker_om.core.tracker_table,self__.app);
});

tracker_om.core.t11516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11518){
var self__ = this;
var _11518__$1 = this;
return self__.meta11517;
});

tracker_om.core.t11516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11518,meta11517__$1){
var self__ = this;
var _11518__$1 = this;
return (new tracker_om.core.t11516(self__.owner,self__.app,meta11517__$1));
});

tracker_om.core.t11516.cljs$lang$type = true;

tracker_om.core.t11516.cljs$lang$ctorStr = "tracker-om.core/t11516";

tracker_om.core.t11516.cljs$lang$ctorPrWriter = (function (this__4324__auto__,writer__4325__auto__,opt__4326__auto__){
return cljs.core._write.call(null,writer__4325__auto__,"tracker-om.core/t11516");
});

tracker_om.core.__GT_t11516 = (function __GT_t11516(owner__$1,app__$1,meta11517){
return (new tracker_om.core.t11516(owner__$1,app__$1,meta11517));
});

}

return (new tracker_om.core.t11516(owner,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),39,new cljs.core.Keyword(null,"end-line","end-line",1837326455),74,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),72,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jwoo/github/tracker-om/src/tracker_om/core.cljs"], null)));
}),tracker_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
cljs.core.swap_BANG_.call(null,tracker_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.conj.call(null,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tracker_om.core.app_state)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"hello",new cljs.core.Keyword(null,"episode","episode",-2141083910),(4),new cljs.core.Keyword(null,"last-viewed","last-viewed",2938867),"22-Jan-14"], null)));

//# sourceMappingURL=core.js.map