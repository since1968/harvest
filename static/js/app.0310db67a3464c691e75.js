webpackJsonp([1],{371:function(t,e,n){function a(t){n(84)}var r=n(21)(n(77),n(375),a,"data-v-143d925f",null);t.exports=r.exports},372:function(t,e,n){function a(t){n(88)}var r=n(21)(n(78),n(379),a,null,null);t.exports=r.exports},373:function(t,e,n){function a(t){n(85)}var r=n(21)(n(79),n(376),a,"data-v-555a642c",null);t.exports=r.exports},374:function(t,e,n){function a(t){n(86)}var r=n(21)(n(80),n(377),a,"data-v-59089986",null);t.exports=r.exports},375:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gauge"},[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("svg",{attrs:{width:t.width,height:t.height}},[n("g",{attrs:{transform:t.transform}},[n("path",{staticClass:"backgroundArc",attrs:{d:t.backgroundArc}}),t._v(" "),n("path",{staticClass:"arc",attrs:{d:t.arc}}),t._v(" "),n("text",[t._v(t._s(t.hashrate)+" "+t._s(t.unit))])])])])},staticRenderFns:[]}},376:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("div",[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("h4",[t._v(t._s(t.value)+" "+t._s(t.unit))])])])},staticRenderFns:[]}},377:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["graph"===t.view?n("div",[t.history?n("linechart",{attrs:{title:"Hashrate History",width:"1750",height:"900",data:t.history,margin:{top:20,right:80,bottom:30,left:10}}}):t._e()],1):t._e(),t._v(" "),"dashboard"===t.view?n("div",[t.user?n("gauge",{attrs:{title:"Hashrate",width:"200",height:"200",unit:"sol/s",value:t.user.hashrate,max:t.user.avgHashrate.h3}}):t._e(),t._v(" "),n("gauge",{attrs:{title:"windspeed",height:"200",width:"200",unit:"m/s",value:9}}),t._v(" "),t.user?n("panel",{attrs:{title:"address",unit:"",value:t.user.account}}):t._e(),t._v(" "),t.user?n("panel",{attrs:{title:"Unconfirmed Balance",unit:"zec",value:t.user.unconfirmed_balance}}):t._e(),t._v(" "),t.user?n("panel",{attrs:{title:"Balance",unit:"zec",value:t.user.balance}}):t._e(),t._v(" "),n("panel",{attrs:{title:"outside temperature",unit:"°C",value:19}}),t._v(" "),n("panel",{attrs:{title:"GPU load",unit:"W",value:242}}),t._v(" "),n("panel",{attrs:{title:"GPU temp",unit:"°C",value:67}}),t._v(" "),t.payments?n("panel",{attrs:{title:"payouts",unit:"",value:t.payments.length}}):t._e(),t._v(" "),t.lastblocknumber?n("panel",{attrs:{title:"last block number",unit:"",value:t.lastblocknumber}}):t._e(),t._v(" "),t.avgblocktime?n("panel",{attrs:{title:"avg blocktime",unit:"sec",value:t.avgblocktime}}):t._e(),t._v(" "),t.prices?n("panel",{attrs:{title:"zec Price",unit:"btc",value:t.prices.price_btc}}):t._e(),t._v(" "),t.prices?n("panel",{attrs:{title:"zec Price",unit:"€",value:t.prices.price_eur}}):t._e(),t._v(" "),t.prices?n("panel",{attrs:{title:"zec Price",unit:"$",value:t.prices.price_usd}}):t._e(),t._v(" "),t.totalpayout?n("panel",{attrs:{title:"total mined",unit:"zec",value:t.totalpayout}}):t._e(),t._v(" "),t.totalpayout?n("panel",{attrs:{title:"total mined",unit:"$",value:t.totalpayout}}):t._e()],1):t._e()])},staticRenderFns:[]}},378:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},379:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chart"},[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("svg",{attrs:{width:t.width,height:t.height}},[n("g",[n("axisright",{staticClass:"axis",attrs:{scale:t.scaleY,width:t.width,height:t.height,margin:t.margin}}),t._v(" "),n("axisbottom",{staticClass:"axis axisx",attrs:{scale:t.scaleX,width:t.width,height:t.height,margin:t.margin}}),t._v(" "),n("path",{attrs:{d:t.linePath}})],1)])])},staticRenderFns:[]}},73:function(t,e,n){"use strict";var a=n(41),r=n(380),i=n(374),s=n.n(i);a.a.use(r.a),e.a=new r.a({routes:[{path:"/vis/:addr/:view",name:"Vis",component:s.a},{path:"/",name:"Vis",component:s.a}]})},74:function(t,e,n){function a(t){n(87)}var r=n(21)(n(76),n(378),a,null,null);t.exports=r.exports},76:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",mounted:function(){},beforeDestroy:function(){}}},77:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(15);n.n(a);e.default={name:"gauge",props:["value","width","height","title","unit"],data:function(){return{margin:10,border:20}},computed:{hashrate:function(){return Math.round(1e4*this.value)/1e4},transform:function(){return"translate("+this.width/2+", "+(this.height/2+this.margin)+")"},angle:function(){return Math.random()},arc:function(){return n.i(a.arc)().innerRadius(this.width/2-this.margin-this.border).outerRadius(this.width/2-this.margin).startAngle(.8*-Math.PI).endAngle(.8*Math.PI-this.angle)()},backgroundArc:function(){return n.i(a.arc)().innerRadius(this.width/2-this.margin-this.border).outerRadius(this.width/2-this.margin).startAngle(.8*-Math.PI).endAngle(.8*Math.PI)()}}}},78:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(15),r=(n.n(a),n(82)),i=n(81);e.default={name:"linechart",props:["data","width","height","margin","title"],components:{Axisright:r.a,Axisbottom:i.a},computed:{extentX:function(){return n.i(a.extent)(this.data,function(t){return t.date})},scaleX:function(){return n.i(a.scaleTime)().range([0,this.width-this.margin.left-this.margin.right]).domain(this.extentX)},extentY:function(){return n.i(a.extent)(this.data,function(t){return t.value})},scaleY:function(){return n.i(a.scaleLinear)().range([0,this.height-this.margin.top-this.margin.bottom]).domain([this.extentY[1],0])},linePath:function(){var t=this;return n.i(a.line)().x(function(e){return t.scaleX(e.date)}).y(function(e){return t.scaleY(e.value)})(this.data)},transform:function(){return"translate("+this.margin.left+", "+this.margin.top+")"}}}},79:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"panel",props:["value","width","height","title","unit"],computed:{}}},80:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(15),r=(n.n(a),n(372)),i=n.n(r),s=n(371),u=n.n(s),o=n(373),c=n.n(o),l=n(40),h=n.n(l),d=function(t){return new Date(1e3*t)};e.default={name:"vis",components:{Linechart:i.a,Gauge:u.a,Panel:c.a},data:function(){return{url:"https://api.nanopool.org/v1/zec",polling:!0,pollingTime:3e4,csvUrl:"https://julianoliver.com/harvest/nodes/node1.csv"}},subscriptions:function(){var t=this;return{timepoll:h.a.Observable.timer(0,this.pollingTime).takeWhile(function(e){return!!t.polling||0===e}).map(function(t){return+new Date}),lastblocknumber:this.reactivelyFetchData(function(){return t.url+"/network/lastblocknumber/?"+t.timepoll}),lastblocks:this.reactivelyFetchData(function(){return t.url+"/blocks/"+t.lastblocknumber+"/10"}),history:this.reactivelyFetchData(function(){return t.url+"/history/"+t.addr+"?"+t.timepoll}).map(function(t){return t.sort(function(t,e){return t.date-e.date}),t.map(function(t){return{date:d(t.date),value:t.hashrate}})}),user:this.reactivelyFetchData(function(){return t.url+"/user/"+t.addr+"?"+t.timepoll}),payments:this.reactivelyFetchData(function(){return t.url+"/payments/"+t.addr+"?"+t.timepoll}),avgblocktime:this.reactivelyFetchData(function(){return t.url+"/network/avgblocktime?"+t.timepoll}),prices:this.reactivelyFetchData(function(){return t.url+"/prices?"+t.timepoll}),totalpayout:this.$watchAsObservable(function(){return t.payments}).pluck("newValue").map(function(t){return t.reduce(function(t,e){return t+e.amount},0)}).map(function(e){return e*t.prices.price_eur})}},computed:{addr:function(){return this.$route.params.addr||"31o2tiFd3anrB7KWLhNvCFyx9WnxAWkZUr"},view:function(){return this.$route.params.view||"dashboard"}},methods:{reactivelyFetchData:function(t){return this.$watchAsObservable(t).pluck("newValue").switchMap(function(t){return h.a.Observable.fromPromise(fetch(t).then(function(t){return t.json()})).catch(function(t){return console.log("api fetch error",t),h.a.Observable.of({status:!1})})}).filter(function(t){return t.status}).map(function(t){return t.data})},reactivelyFetchCsv:function(t){return this.$watchAsObservable(t).pluck("newValue").switchMap(function(t){return h.a.Observable.fromPromise(fetch(t).then(function(t){return t.text()})).catch(function(t){return console.log("api fetch error",t),h.a.Observable.of({status:!1})})}).do(function(t){console.log(t)})}},beforeDestroy:function(){}}},81:function(t,e,n){"use strict";var a=n(15);n.n(a);e.a={name:"axisbottom",props:["scale","width","height","margin"],computed:{axis:function(){return n.i(a.axisBottom)(this.scale).tickSize(this.height-this.margin.top-this.margin.bottom)}},render:function(t){return this.$el&&this.draw(),t("g","")},methods:{draw:function(){var t=n.i(a.select)(this.$el).attr("transform","translate(0,"+this.margin.top+")").call(this.axis);t.select(".domain").remove(),t.selectAll("text").attr("dy","1em")}},mounted:function(){this.$forceUpdate()}}},82:function(t,e,n){"use strict";var a=n(15),r=(n.n(a),n.i(a.format)(",.2r"));e.a={name:"axisright",props:["scale","width","height","margin"],computed:{axis:function(){return n.i(a.axisRight)(this.scale).tickSize(this.width-this.margin.left-this.margin.right).tickFormat(function(t,e){return 0==t?"0 sol/s":r(t)})}},render:function(t){return this.$el&&this.draw(),t("g","")},methods:{draw:function(){var t=n.i(a.select)(this.$el).call(this.axis);t.select(".domain").remove(),t.selectAll("text").attr("dx","1em")}},mounted:function(){this.$forceUpdate()}}},83:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(41),r=n(74),i=n.n(r),s=n(73),u=n(40),o=n.n(u),c=n(75),l=n.n(c);a.a.use(l.a,o.a),a.a.config.productionTip=!1;a.a.prototype.$reactivelyFetchData=function(t){return this.$watchAsObservable(t).pluck("newValue").switchMap(function(t){return o.a.Observable.fromPromise(fetch(t).then(function(t){return t.json()})).catch(function(t){return console.log("api fetch error",t),o.a.Observable.of({status:!1})})}).filter(function(t){return t.status}).map(function(t){return t.data})},new a.a({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})},84:function(t,e){},85:function(t,e){},86:function(t,e){},87:function(t,e){},88:function(t,e){}},[83]);
//# sourceMappingURL=app.0310db67a3464c691e75.js.map