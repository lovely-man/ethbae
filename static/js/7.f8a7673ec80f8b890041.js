webpackJsonp([7],{239:function(t,n,a){a(492);var i=a(277)(a(487),a(497),"data-v-04601d8d",null);t.exports=i.exports},277:function(t,n){t.exports=function(t,n,a,i){var e,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(e=t,s=t.default);var r="function"==typeof s?s.options:s;if(n&&(r.render=n.render,r.staticRenderFns=n.staticRenderFns),a&&(r._scopeId=a),i){var d=Object.create(r.computed||null);Object.keys(i).forEach(function(t){var n=i[t];d[t]=function(){return n}}),r.computed=d}return{esModule:e,exports:s,options:r}}},487:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"history",data:function(){return{balance:100,address:"0xfffff",num:"",activeNav:0,activeTab:0}},props:{title:{type:String,default:"头部"}},methods:{navClick:function(t){this.activeNav=t},tabClick:function(t){this.activeTab=t}},created:function(){}}},489:function(t,n,a){n=t.exports=a(236)(!1),n.push([t.i,'.history[data-v-04601d8d]{color:#fff}.history>h3[data-v-04601d8d]{text-align:center;font-weight:700}.history-nav[data-v-04601d8d]{margin:0 auto;padding:30px 0 28px;width:60%;display:flex;justify-content:space-around;font-size:20px;color:#207f8f;font-weight:600;text-align:center;line-height:20px}.history-nav>li[data-v-04601d8d]{position:relative;cursor:pointer}.history-nav .active[data-v-04601d8d]{color:#1fffdd}.history-nav .active[data-v-04601d8d]:after{content:" ";position:absolute;left:50%;bottom:-3px;width:50%;height:2px;background:#1fffdd;transform:translateX(-50%)}.history-tab[data-v-04601d8d]{display:flex;justify-content:space-between;margin:0 -15px;font-size:18px;line-height:46px;text-align:center}.history-tab>li[data-v-04601d8d]{margin:0 1px 0 0;width:49.999%;height:46px;background:#0a2b64;cursor:pointer;border-top-left-radius:2px;border-top-right-radius:2px;font-weight:600}.history-tab .active[data-v-04601d8d]{background:#153976}.history-content[data-v-04601d8d]{margin:1px -15px;padding:0 15px 25px;background-image:linear-gradient(0deg,#2a307c,#143976 98%);font-size:12px}.history-content>li[data-v-04601d8d]{margin:0 0 4px;padding:0 10px;height:46px;display:flex;justify-content:space-between;line-height:46px;border-radius:4px}.history-content>li[data-v-04601d8d]:nth-child(2n+2){background-image:linear-gradient(90deg,rgba(53,102,161,.02),#3566a1 100%)}.history-content>li[data-v-04601d8d]:nth-child(2n+3){background-image:linear-gradient(84deg,rgba(53,102,161,.02),rgba(53,102,161,.57) 100%)}.history-content>li span[data-v-04601d8d]{flex:1}.history-content>li .last-item[data-v-04601d8d]{text-align:center}@media (min-width:768px){.history-tab[data-v-04601d8d]{width:601px}.history-tab>li[data-v-04601d8d]{width:300px;border-top-left-radius:4px;border-top-right-radius:4px}.history-content[data-v-04601d8d]{padding:0 19px 25px;font-size:14px}}',""])},492:function(t,n,a){var i=a(489);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(237)("27a6d015",i,!0)},497:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("b-container",{staticClass:"history"},[a("ul",{staticClass:"history-tab"},[a("li",{class:{active:0==t.activeTab},on:{click:function(n){return t.tabClick(0)}}},[t._v("History")]),t._v(" "),a("li",{class:{active:1==t.activeTab},on:{click:function(n){return t.tabClick(1)}}},[t._v("My Bets")])]),t._v(" "),a("ul",{staticClass:"history-content"},[a("li",[a("span",[t._v("\n                    Round\n                ")]),t._v(" "),a("span",[t._v("\n                    Winners\n                ")]),t._v(" "),a("span",[t._v("\n                    Your payout\n                ")]),t._v(" "),a("span",{staticClass:"last-item"},[t._v("\n                    Result\n                ")])]),t._v(" "),a("li",[a("span",[t._v("\n                    #3224\n                ")]),t._v(" "),a("span",[t._v("\n                    3224\n                ")]),t._v(" "),a("span",[t._v("\n                    15 ETH\n                ")]),t._v(" "),a("span",{staticClass:"last-item"},[t._v("\n                    No result\n                ")])]),t._v(" "),a("li",[a("span",[t._v("\n                    #3224\n                ")]),t._v(" "),a("span",[t._v("\n                    3224\n                ")]),t._v(" "),a("span",[t._v("\n                    15 ETH\n                ")]),t._v(" "),a("span",{staticClass:"last-item"},[t._v("\n                    No result\n                ")])]),t._v(" "),a("li",[a("span",[t._v("\n                    #3224\n                ")]),t._v(" "),a("span",[t._v("\n                    3224\n                ")]),t._v(" "),a("span",[t._v("\n                    15 ETH\n                ")]),t._v(" "),a("span",{staticClass:"last-item"},[t._v("\n                    No result\n                ")])])])])},staticRenderFns:[]}}});