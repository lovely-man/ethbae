webpackJsonp([8],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(23);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].filter('number', function (oldValue) {
    var f = parseFloat(oldValue);
    if (isNaN(f)) {
        return;
    }
    var f = Math.round(oldValue * 100) / 100;
    var newValue = f.toString();
    var rs = newValue.indexOf('.');
    if (rs < 0) {
        rs = newValue.length;
        newValue += '.';
    }
    while (newValue.length <= rs + 2) {
        newValue += '0';
    }
    return newValue;
}));

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	msg: 'template'
});

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    msg: '模版'
});

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    msg: '模版'
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_js_cookie_js__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filters_index_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_index_js__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_i18n__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lang_index__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vconsole__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vconsole___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vconsole__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bootstrap_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bootstrap_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_bootstrap_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_css_reset_css__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_css_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__static_css_reset_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_bootstrap_vue_dist_bootstrap_vue_css__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_bootstrap_vue_dist_bootstrap_vue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_bootstrap_vue_dist_bootstrap_vue_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__less_index_less__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__less_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__less_index_less__);


















__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5_vue_i18n__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_8_bootstrap_vue___default.a);

var browserLanguage = (navigator.language || navigator.browserLanguage).toLowerCase(),
    i18n = new __WEBPACK_IMPORTED_MODULE_5_vue_i18n__["a" /* default */]({
    locale: browserLanguage,
    messages: __WEBPACK_IMPORTED_MODULE_6__lang_index__["a" /* default */]
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

window.vueVm = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    data: function data() {
        return {};
    },

    router: __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */],

    i18n: i18n,

    components: {}
});

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
    path: '*',
    redirect: {
        path: '/'
    },
    hidden: true
});

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Assets; });

var AssetsCom = function AssetsCom(resolve) {
    return __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(237)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};


var Assets = {
    path: '/mobile/assets',
    component: AssetsCom,
    name: 'assets'
};

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gamerooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GameroomsMobile; });

var GameroomsCom = function GameroomsCom(resolve) {
    return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(240)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};
var GameroomsMobileCom = function GameroomsMobileCom(resolve) {
    return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(241)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

var Gamerooms = {
    path: '/',
    component: GameroomsCom,
    name: 'gamerooms',
    icon: ''
};

var GameroomsMobile = {
    path: '/mobile',
    component: GameroomsMobileCom,
    name: 'gamerooms',
    icon: ''
};

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var Index = function Index(resolve) {
    return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(242)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

/* harmony default export */ __webpack_exports__["a"] = ({
    path: '/test',
    component: Index,
    name: '主页',
    icon: ''
});

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Leaderboard; });

var LeaderboardCom = function LeaderboardCom(resolve) {
    return __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(238)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};


var Leaderboard = {
    path: '/mobile/leaderboard',
    component: LeaderboardCom,
    name: 'leaderboard'
};

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var My = function My(resolve) {
    return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(243)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

/* harmony default export */ __webpack_exports__["a"] = ({
    path: '/my',
    component: My,
    name: 'my',
    icon: ''
});

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* unused harmony default export */ var _unused_webpack_default_export = ([]);

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_number_js__ = __webpack_require__(100);



/* unused harmony default export */ var _unused_webpack_default_export = ([__WEBPACK_IMPORTED_MODULE_0__modules_number_js__["a" /* default */]]);

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_zh_cn__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_zh__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_en__ = __webpack_require__(101);




/* harmony default export */ __webpack_exports__["a"] = ({
    zh: __WEBPACK_IMPORTED_MODULE_1__modules_zh__["a" /* default */],
    'zh-cn': __WEBPACK_IMPORTED_MODULE_0__modules_zh_cn__["a" /* default */],
    'zh-hk': '',
    'zh-tw': '',
    en: __WEBPACK_IMPORTED_MODULE_2__modules_en__["a" /* default */],
    'en-us': ''
});

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_index__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_gamerooms__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_assets__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_leaderboard__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_my__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_Redirect__ = __webpack_require__(105);



var Home = function Home(resolve) {
    return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(239)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};








__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home,
        name: 'Home',
        children: [__WEBPACK_IMPORTED_MODULE_2__map_index__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__map_gamerooms__["a" /* Gamerooms */], __WEBPACK_IMPORTED_MODULE_3__map_gamerooms__["b" /* GameroomsMobile */], __WEBPACK_IMPORTED_MODULE_4__map_assets__["a" /* Assets */], __WEBPACK_IMPORTED_MODULE_5__map_leaderboard__["a" /* Leaderboard */], __WEBPACK_IMPORTED_MODULE_6__map_my__["a" /* default */]]
    }, __WEBPACK_IMPORTED_MODULE_7__map_Redirect__["a" /* default */]]
}));

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * 作者：梁燕翔
 * 时间：2017/04/11
 * 功能：对cookie的操作
 */

/* unused harmony default export */ var _unused_webpack_default_export = ({
  get(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if(c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
  set(cname, cvalue, ms) {
    let d = new Date();
    d.setTime(d.getTime() + ms);
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }
});

/***/ })

},[104]);