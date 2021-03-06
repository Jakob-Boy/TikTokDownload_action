/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		30: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://sf3-scmcdn2-tos.pstatp.com/ies/fe_app_new/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([29,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "113c86d39c3ccfcccc8a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("46107d86b7941adbc814");

module.exports = {
  show: function show() {
    $('#pagelet-loading').show();
  },
  hide: function hide() {
    $('#pagelet-loading').hide();
  }
};

/***/ }),

/***/ "12a5c4dc26e1824fdd8b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagelet-banner":"pagelet-banner","hide":"hide","move-hide":"move-hide","app-download":"app-download","banner-show":"banner-show","up-down":"up-down","banner-show1":"banner-show1","download-btn":"download-btn","txt":"txt"};

/***/ }),

/***/ "166003ecd7694b2377b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var OpenBrowser = __webpack_require__("adf14ea98b2960ef189a");

var isVoice = false;
var modal = new OpenBrowser(); // jump2app??????

var schemas = {
  home: 'snssdk1128://feed?refer=web&gd_label={{gd_label}}',
  // ??????feed
  detail: 'snssdk1128://aweme/detail/{{id}}?refer=web&gd_label={{gd_label}}&appParam={{appParam}}&needlaunchlog=1',
  // ???????????????
  user: 'snssdk1128://user/profile/{{uid}}?refer=web&gd_label={{gd_label}}&type={{type}}&needlaunchlog=1',
  // ????????????
  challenge: 'snssdk1128://challenge/detail/{{id}}?refer=web&is_commerce=0',
  // ????????????
  music: 'snssdk1128://music/detail/{{id}}?refer=web',
  // ????????????
  live: 'snssdk1128://live?room_id={{room_id}}&user_id={{user_id}}&u_code={{u_code}}&from=webview&refer=web',
  // ?????????
  webview: 'snssdk1128://webview?url={{url}}&from=webview&refer=web',
  // webview
  webview_fullscreen: 'snssdk1128://webview?url={{url}}&from=webview&hide_nav_bar=1&refer=web',
  // webview ?????????
  poidetail: 'snssdk1128://poi/detail?id={{id}}&from=webview&refer=web',
  // poi?????????
  forward: 'snssdk1128://forward/detail/{{id}}',
  // ???????????????
  billboard_word: 'snssdk1128://search/trending',
  // ????????????
  billboard_video: 'snssdk1128://search/trending?type=1',
  // ???????????????
  billboard_music: 'snssdk1128://search/trending?type=2',
  // ???????????????
  billboard_positive: 'snssdk1128://search/trending?type=3',
  // ????????????
  billboard_star: 'snssdk1128://search/trending?type=4' // ?????????

}; // universal link url

var UNIVERSAL_LINK = 'https://www.amemv.com/redirect/?redirect_url='; // ??????????????????nano????????????JSON??????

function nano(template, data) {
  return template.replace(/\{\{([\w\.]*)\}\}/g, function (str, key) {
    var keys = key.split('.');
    var v = data[keys.shift()];

    for (var i = 0, l = keys.length; i < l; i++) {
      v = v[keys[i]];
    }

    return typeof v !== 'undefined' && v !== null ? v : '';
  });
} // ??????????????????
// ??????schema


function _schemaFactory(type, params) {
  var schema = schemas[type] || null;

  if (getQueryString('app') == 'douyin_lite') {
    // ?????????????????????appid
    schema = schema.replace(/^snssdk1128/, 'snssdk2329');
  }

  if (schema) {
    schema = nano(schema, params || {});
  }

  return schema;
}

function _nativeLinkFactory(type, params) {
  var link_tmpl = {};
  var link = link_tmpl[type] || null;

  if (link) {
    link = nano(link, params);
  }

  return link;
}

function _openAppInIframe(schema) {
  var a = document.createElement('a');
  a.setAttribute('href', schema);
  a.click();
  $('body').append("<iframe id='app_iframe' src='".concat(schema, "' style='display:none'></iframe>"));
}

function _getDeepLink(schema, downloadLink) {
  var deepLink = ''; // ??????universal link???ios??????schema???aweme?????????????????????????????????schema??? aweme ??????

  if (getQueryString('app') == 'douyin_lite') {
    // ?????????????????????appid
    schema = schema.replace(/^snssdk1128/, 'snssdk2329');
    return schema;
  }

  schema = schema.replace(/^snssdk1128/, 'aweme');
  deepLink = UNIVERSAL_LINK + encodeURIComponent(schema);

  if (downloadLink) {
    if (downloadLink.startsWith('//')) {
      downloadLink = 'https:' + downloadLink;
    }

    deepLink += "&next_url=".concat(encodeURIComponent(downloadLink));
  }

  return deepLink;
}
/**
 * @params {String} type ????????????
 * @params {Object} params ????????????
 * @params {String} downloadLink ????????????
 */


function jumpToNativeApp(type, params, downloadLink) {
  var schema = _schemaFactory(type || 'home', params);

  if (!schema) {
    return;
  } // alert(schema);


  if ($.os.ios) {
    var currentUrl = location.href;
    var version = parseFloat($.os.version);
    var ios9 = parseInt(version, 10) >= 9; // ios9 ??????????????????iframe?????????

    if (!ios9) {
      _openAppInIframe(schema);

      return;
    }
    /**
         * ?????????ios9?????????,???????????????deeplink????????????
         * ??????,????????????????????????????????????
         * IOS??????qqbrowser,?????????????????????,?????????universal link??????
        */


    if (ios9 && !$.browser.qqbrowser) {
      var deepLink = _getDeepLink(schema, downloadLink);

      if (schema.indexOf('detail') >= 0) {
        copyHandle();
      }

      if (isVoice) {
        top.location.href = deepLink;
      } else {
        location.href = deepLink;
      } // safari???????????????????????????schema??????????????????app?????????????????????????????????????????????
      // if (!$.browser.weixin && $.browser.safari) {
      // setTimeout(function() {
      //     alert('his' + location.href)
      //     location.href = deepLink;
      // }, 100);
      // }


      return;
    }
    /**
         * ios9 qq?????????
         * ios9 ????????????schema???????????????????????????????????????????????????app??????????????????????????????????????????url
         */


    setTimeout(function () {
      location.href = schema;
      setTimeout(function () {
        if (document.hidden || document.webkitHidden) {
          location.href = currentUrl;
        }
      }, 1300);
    }, 10);
  } else {
    if (!$.browser.weixin) {
      _openAppInIframe(schema);
    }
  }
}

function apploadHandler(opts) {
  var schema = _schemaFactory(opts.type || 'home', opts.params);

  var self = this;

  if ($.browser.weixin) {
    var schemaName = function (sys) {
      var suffix = '_scheme';
      var name = sys.ios ? 'ios' : 'android';
      return name + suffix;
    }($.os); // var schema = _schemaFactory(opts.type, opts.params);


    if (schema) {
      var url = [opts.downloadLink, opts.downloadLink.indexOf('?') > -1 ? '&' : '?', schemaName, "=".concat(encodeURIComponent(schema))].join(''); // ios?????????????????????location???????????????????????????

      setTimeout(function () {
        location.href = url;
      });
      return;
    }
  }

  if ($.os.ios) {
    var osVersion = parseFloat($.os.version);
    var ios9 = $.os.ios && osVersion >= 9;
    /*
        safari???????????????????????????apple store, wap2app???????????????????????????????????????alert????????????????????????????????????????????????
        ???????????????????????????
        */

    if (!$.browser.weixin && $.browser.safari && ios9) {
      // _gotoAppDownload(opts);
      // ?????????????????????????????????????????????????????? :(
      // setTimeout(function () {
      //   _wap2app(opts);
      // }, 1000);
      jumpToNativeApp(opts.type, opts.params, opts.downloadLink);

      if ($.browser.qq) {
        modal.open();
      }
    } else {
      /* ios
            ????????????????????????302?????????????????????universal link???302??? snssdk143://xx?????????????????????snssdk143://?????????http?????????
            ????????????????????????????????????????????????????????????302???????????????????????????????????????????????????????????????????????????????????????
            ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
            */
      _wap2app(opts);

      setTimeout(function () {
        _checkOpen(function (isOpen) {
          !isOpen && _gotoAppDownload(opts);
        });
      }, 1000);
    }

    return;
  } else {
    // android ??????
    _openAppInIframe(schema);

    _checkOpen(function (isOpen) {
      !isOpen && _gotoAppDownload(opts);
    }); // qq??????????????????????????????app??? qq?????????????????????????????????????????????qq?????????????????????????????????
    // ?????????qq??????????????????????????????????????????????????????????????????


    if ($.browser.qq) {
      modal.open();
    }
  }
}

function _wap2app(opts) {
  jumpToNativeApp(opts.type, opts.params);
}

function _gotoAppDownload(opts) {
  if (opts.downloadLink) {
    if (isVoice) {
      top.location.href = opts.downloadLink;
    } else {
      location.href = opts.downloadLink;
    }

    location.href = opts.downloadLink;
  }
} // ??????app????????????


function _checkOpen(cb) {
  var _count = 0;

  var _clickTime = Number(new Date());

  var intHandle;

  function check(elsTime) {
    if (isVoice) {
      if (elsTime > 1000 || top.document.hidden || top.document.webkitHidden) {
        cb(true);
      } else {
        cb(false);
      }
    } else {
      if (elsTime > 1000 || document.hidden || document.webkitHidden) {
        cb(true);
      } else {
        cb(false);
      }
    }
  } // ????????????20ms????????????????????????????????????????????????????????????1000ms??????????????????


  intHandle = setInterval(function () {
    _count++;

    var elsTime = Number(new Date()) - _clickTime;

    if (_count >= 15 || elsTime > 1000) {
      clearInterval(intHandle);
      check(elsTime);
    }
  }, 40);
} // gd_label?????????????????????????????????????????????????????????
// gd_label????????? https://wiki.bytedance.net/pages/viewpage.action?pageId=179404954
// gd_label?????????????????? https://docs.google.com/spreadsheets/d/1EWzh4gIbE861d9Rbk-M7QNYCPnltkNt9r2ETVSV2wf4/edit#gid=2126697475


function setGdLabel(val) {
  // click_schema_ugdsp_aweme: DSP?????????https://bytedance.feishu.cn/docs/doccnZNSYA9Zc3FMeGQ490l6dZf#???
  var scene = getQueryString('scene');

  if (scene == 'dsp') {
    return 'click_schema_ugdsp_aweme';
  }

  if (/^click_(wexin|wap)_/.test(val)) {
    return val;
  } else {
    var type = function (weixin) {
      return weixin ? 'weixin' : 'wap';
    }($.browser.weixin);

    return "click_".concat(type, "_").concat(val);
  }
}

function getQueryString(name) {
  var reg = new RegExp("(^|&)".concat(name, "=([^&]*)(&|$)"), 'i');
  var r = window.location.search.substr(1).match(reg);

  if (r != null) {
    return unescape(r[2]);
  }

  return null;
}

function getUrlFromDl(dl, opts) {
  var url = '';

  try {
    var dlFromQuery = getQueryString('dl');
    url = dlFromQuery && opts.useDl && "//d.douyin.com/".concat(dlFromQuery, "/") || '';
    var query = (dl || '').split('?')[1] || '';

    if (url && query) {
      url = "".concat(url, "?").concat(query);
    }
  } catch (e) {
    console.log(e);
  }

  return url;
}

function copyHandle() {
  var input = document.createElement('input');
  document.body.appendChild(input);
  input.setAttribute('readonly', 'readonly');
  input.setAttribute('value', window.location.href.replace('aweme.snssdk.com', 'www.iesdouyin.com'));
  input.select();
  input.setSelectionRange(0, 9999);

  if (document.execCommand('copy')) {
    document.execCommand('copy');
  }

  document.body.removeChild(input);
  console.log('copy');
} // download_sdk??????

/**
 * @?????????????????????app??????????????????app
 * @dependance???window.jumpToNativeApp
 */


module.exports = {
  downloadApp: function downloadApp(dl, opts, voice) {
    isVoice = voice;
    /**
        /*   downloadLink: '' // ????????????
        *    type: '',        // app?????????????????????schemas??????key
        *    params: {},      // ??????app????????????????????????schema???
        */

    if (opts.params && opts.params.gd_label) {
      var gd_label = setGdLabel(opts.params.gd_label);
      var params = $.extend({}, opts.params, {
        gd_label: gd_label
      });
      opts.params = params;
    }

    apploadHandler($.extend({
      downloadLink: getUrlFromDl(dl, opts) || dl
    }, opts));
  }
};

/***/ }),

/***/ "1d2f6dd2d416eba8db8a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  getQueryStr: function getQueryStr(params) {
    return Object.keys(params).map(function (key) {
      return [key, encodeURIComponent(params[key])].join('=');
    }).join('&');
  },
  getQueryObj: function getQueryObj() {
    var queryStr = location.search.slice(1);

    if (!queryStr) {
      return {};
    }

    var aTemp = queryStr.split('&');
    var obj = {};
    aTemp.forEach(function (param) {
      var arr = param.split('=');
      obj[arr[0]] = arr[1];
    });
    return obj;
  },
  getLastPathId: function getLastPathId() {
    return location.pathname.match(/\d+/g)[0];
  }
};

/***/ }),

/***/ "206d7d768e507237f87a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var appTrack = {
  getParams: function getParams(params, url) {
    return {
      extra: JSON.stringify(params),
      // ??????????????????
      append: JSON.stringify({
        // ??????????????????
        openurl: url || '',
        postdata: [params]
      })
    };
  }
};
module.exports = appTrack;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("78a3850f5800635eb493");


/***/ }),

/***/ "3e4859239cf0f183ef63":
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="empty">' +
((__t = ( text )) == null ? '' : __t) +
'</div>\n';

}
return __p
}

/***/ }),

/***/ "46107d86b7941adbc814":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagelet-loading":"pagelet-loading","icon":"icon","loading":"loading","txt":"txt"};

/***/ }),

/***/ "492a4f83e13722f2250e":
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(list, function (item, index) { ;
__p += '\n    <li class="music-item" data-id="' +
((__t = ( item.mid )) == null ? '' : __t) +
'" >\n        <div class="item-pic">\n            <div class="pic-cover"></div>\n            <img src="' +
((__t = ( item.imgUrl )) == null ? '' : __t) +
'" />\n            <i class="icon-music-play"></i>\n        </div>\n        <div class="item-content">\n            <h4 class="item-content-name">' +
((__t = ( item.name )) == null ? '' : __t) +
'</h4>\n            <p class="item-content-used">' +
((__t = ( item.count )) == null ? '' : __t) +
' ?????????</p>\n            <p class="item-content-duration">' +
((__t = ( item.duration )) == null ? '' : __t) +
'</p>\n        </div>\n        <div class="item-opt"></div>\n    </li>\n';
 }) ;


}
return __p
}

/***/ }),

/***/ "52100986343de6f77ea3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5eac54fb4462091116c6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @desc ??????????????????????????? digit ???
 */
function round(number, digit) {
  digit = digit || 1;
  return Math.round(number * Math.pow(10, digit)) / Math.pow(10, digit);
}
/**
 * @desc ??????10000????????????????????????W??????????????????????????????1???
 */


function getShowNum(number) {
  if (number < 9999) {
    return number;
  }

  var showNum = round(number / 10000, 1);
  return "".concat(showNum, "w");
}
/**
 * @desc ?????????0
 */


function pad(num, size) {
  return "000000000".concat(num).substr(-size);
}
/**
 * @desc ???????????? ?????????
 * @example 70 => 01:10
 */


function formatSecond(second) {
  var m = pad(~~(second / 60), 2);
  var s = pad(second % 60, 2);
  return [m, s].join(':');
}
/**
 * @desc ?????? [m, n] ????????????
 */


function random(min, max) {
  return min + Math.floor((max - min + 1) * Math.random());
}

module.exports = {
  round: round,
  formatSecond: formatSecond,
  getShowNum: getShowNum,
  random: random
};

/***/ }),

/***/ "5f2f9bfeb1d577266d34":
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(list, function (item) { ;
__p += '\n\n    <li class="item goWork" data-id="' +
((__t = ( item.id )) == null ? '' : __t) +
'" data-type="' +
((__t = ( item.isImage ? 'image' : 'video' )) == null ? '' : __t) +
'" data-url="' +
((__t = ( item.imageUrl || '' )) == null ? '' : __t) +
'">\n\n        ';
 if(item.isImage) { ;
__p += '\n            <div class="cover lazy" data-src="' +
((__t = ( item.imageUrl || '')) == null ? '' : __t) +
'" >\n                <img src="" alt="" class="image-icon">\n\n                ';
 if (item.good_choice === 1) { ;
__p += '\n                    <div class="label" style="background-image: url(' +
((__t = ( item.label_url )) == null ? '' : __t) +
') "></div>\n                ';
 } ;
__p += '\n                <div class="digg">\n                    <span class="digg-icon"></span>\n                    <span class="digg-num">' +
((__t = ( item.digg_num )) == null ? '' : __t) +
'</span>\n                </div>\n            </div>\n        ';
 } else { ;
__p += '\n            <div class="cover lazy" data-src="' +
((__t = ( item.cover )) == null ? '' : __t) +
'" >\n                ';
 if (item.good_choice === 1) { ;
__p += '\n                <div class="label" style="background-image: url(' +
((__t = ( item.label_url )) == null ? '' : __t) +
') "></div>\n                ';
 } ;
__p += '\n                <div class="digg">\n                    <span class="digg-icon"></span>\n                    <span class="digg-num">' +
((__t = ( item.digg_num )) == null ? '' : __t) +
'</span>\n                </div>\n            </div>\n        ';
 } ;
__p += '\n\n    </li>\n\n';
 }) ;


}
return __p
}

/***/ }),

/***/ "68b15f4b6164c718c4af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ????????????
module.exports = {
  getLocal: function getLocal(key) {
    return window.localStorage ? window.localStorage.getItem(key) : null;
  },
  setLocal: function setLocal(key, value, callback) {
    try {
      window.localStorage && window.localStorage.setItem(key, value);
    } catch (e) {
      callback && callback();
    }
  },
  length: function length() {
    return window.localStorage && window.localStorage.length;
  },
  clearLocal: function clearLocal() {
    return window.localStorage ? window.localStorage.clear() : null;
  },
  removeLocal: function removeLocal(key) {
    window.localStorage && window.localStorage.removeItem(key);
  },
  getSession: function getSession(key) {
    return window.sessionStorage ? window.sessionStorage.getItem(key) : null;
  },
  setSession: function setSession(key, value, callback) {
    try {
      window.sessionStorage && window.sessionStorage.setItem(key, value);
    } catch (e) {
      callback && callback();
    }
  },
  removeSession: function removeSession(key) {
    window.sessionStorage && window.sessionStorage.removeItem(key);
  }
};

/***/ }),

/***/ "6c84fa149b373f4029bb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bytedDpEventCollector = __webpack_require__("682c223c8090c9c699fb");

var _bytedDpEventCollector2 = _interopRequireDefault(_bytedDpEventCollector);

var _utils = __webpack_require__("e844fe34c02b3cce5ed3");

var _utils2 = _interopRequireDefault(_utils);

var _qs = __webpack_require__("a63b0d047588ea783f61");

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TeaLogger = window.collectEvent || _bytedDpEventCollector2.default;
var appId = 1243;
var appName = 'douyin_reflow'; // ???????????????debug?????????debug????????????????????????????????????????????????http?????????https?????????debug????????????????????????????????????
// collectEvent.setDebug(true);
// ??????appId??????????????????

TeaLogger.setAppId(appId); // ??????????????????????????????sdk???????????????????????????????????????????????????????????????????????????
// ?????????user_unique_id???app_id??????????????????????????????????????????????????????????????????
// ?????????????????????????????????????????????????????????????????????????????????????????????

TeaLogger.setRequiredKeys({
  user: ['user_unique_id'],
  header: ['app_id'] // eventCommonParams: ['paramCommon'],
  // customHeaders: ['flow']

}); // ??????header????????????
// headers???????????????headers??????key??????????????????????????????????????????app_id???headers?????????

TeaLogger.setHeader({
  app_id: appId,
  app_name: appName,
  os_name: $.os.android ? 'android' : $.os.ios ? 'ios' : 'unknown',
  os_version: "".concat($.os.version),
  traffic_type: $.browser.weixin ? 'weixin' : 'wap'
}); // ???????????????????????????????????????

TeaLogger.setHeaderHeaders({
  // url??????
  href: location.href,
  host: location.host,
  pathname: location.pathname,
  protocol: location.protocol,
  // ????????????
  user_agent: navigator.userAgent,
  screen_resolution: "".concat(window.screen.width, "*").concat(window.screen.height)
});

function pick(obj, keys) {
  return keys.map(function (k) {
    return k in obj ? _defineProperty({}, k, obj[k]) : {};
  }).reduce(function (res, o) {
    return $.extend(res, o);
  }, {});
} // ???url??????tea???????????????????????????pv???tap???????????????


var list = ['utm_source', 'utm_medium', 'utm_campaign'];

var queryObj = _qs2.default.parse(location.href);

var taeCommonParams = pick(queryObj, list); // ????????????????????????????????????????????????params???

TeaLogger.setEventCommonParams($.extend({
  page_url: window.location.href
}, taeCommonParams)); // ?????????????????????

TeaLogger.setUser({
  user_unique_id: _utils2.default.getTTWebId()
});
TeaLogger.setIntranetMode(false);
exports.default = TeaLogger;

/***/ }),

/***/ "78a3850f5800635eb493":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__("e844fe34c02b3cce5ed3");

var _utils2 = _interopRequireDefault(_utils);

var _tea = __webpack_require__("6c84fa149b373f4029bb");

var _tea2 = _interopRequireDefault(_tea);

var _bytedAcrawler = __webpack_require__("9bd2804c7e68ac461d65");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @desc ?????????????????????
 */
__webpack_require__("52100986343de6f77ea3");

__webpack_require__("a62155a7eb13f352b7e3");

var LIST_TMPL = __webpack_require__("5f2f9bfeb1d577266d34");

var MUSIC_TMPL = __webpack_require__("492a4f83e13722f2250e");

var MAIN_TMPL = __webpack_require__("f1e83373459b7c5ed036");

var EMPTY_TMPL = __webpack_require__("3e4859239cf0f183ef63");

var number = __webpack_require__("5eac54fb4462091116c6");

var urlUtil = __webpack_require__("1d2f6dd2d416eba8db8a");

var storage = __webpack_require__("68b15f4b6164c718c4af");

var appTrack = __webpack_require__("206d7d768e507237f87a");

var downloadAction = __webpack_require__("166003ecd7694b2377b6");

var banner = __webpack_require__("d712b069d922fb6d94e3");

var loading = __webpack_require__("113c86d39c3ccfcccc8a");

var tips = __webpack_require__("9740e2f820a158083b3c");

var isTypeSMS = false;
var COUNT = 21; // ??????21???

var DOWNLOAD_CLICK_LIMIT = 0; // ?????????n????????? ?????????????????????

var nonce = ''; // nonce?????? ????????????readme@??????1

var signature = ''; // signature?????? ????????????readme@??????1

var isLoading = false,
    loadEnd = false,
    hasListData = {
  'post': false,
  'favorite': false
},
    params = {
  user_id: '',
  sec_uid: '',
  count: COUNT,
  max_cursor: 0,
  aid: 1128
};
var DOWNLOAD_URL_SETTING = {
  'reflow-user': '//d.douyin.com/PxRW/',
  'sms-invite': '//d.douyin.com/fMcS/'
};
var EMPTY_TEXT = {
  'post': 'TA????????????????????????',
  'favorite': 'TA????????????????????????'
};
var pageletWorklist = $('#pagelet-worklist');
var dytk = ''; // ??????????????????????????????????????????????????????profile?????????????????????????????????

var rectObject = null;
$(function () {
  window.Raven && window.Raven.config('//key@m.toutiao.com/log/sentry/v2/174', {
    whitelistUrls: [/bytecdn\.cn/],
    shouldSendCallback: function shouldSendCallback(data) {
      return true;
    },
    tags: {
      bid: 'douyin_wap',
      pid: 'reflow_video'
    }
  }).install();
  var userId = urlUtil.getLastPathId();
  init({
    uid: userId
  });
}); // ??????app

function downloadApp(downloadLink, opts) {
  var schema = 'aweme://user/profile/' + opts.params.uid;
  var appTrackParams = appTrack.getParams({
    reflow_page_uid: opts.params.uid,
    __type__: "app_track"
  }, schema);
  var url = downloadLink + '?' + urlUtil.getQueryStr(appTrackParams);
  opts.useDl = true;
  downloadAction.downloadApp(url, opts);
}

function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);

  if (r != null) {
    return unescape(r[2]);
  }

  return null;
}

function bind(config) {
  var _config = config;

  _utils2.default.initScrollEvents(50, 100);

  $(window).on("scrollEnd", function () {
    getWorkList(listType);
  });
  $(".get-list").on("click", function (e) {
    var listType = $(e.currentTarget).data('type');

    if ($(e.currentTarget).hasClass('active') === true) {
      return;
    } else {
      $(e.currentTarget).addClass('active').siblings('.tab').removeClass('active');
    }

    reload();
    isLoading = false;
    loadEnd = false;
    params.max_cursor = 0;
    getWorkList(listType);
  });
  $(".go-author").on("click", function () {
    if (isTypeSMS) {
      goUser(config.uid);
      return;
    }

    downloadApp(DOWNLOAD_URL_SETTING['reflow-user'], {
      type: 'user',
      params: {
        uid: config.uid,
        type: 'need_follow',
        gd_label: 'profile_follow'
      }
    });
  });
  pageletWorklist.on('click', '.music-item', function (e) {
    var mid = $(e.currentTarget).attr('data-id'); // ????????????

    _tea2.default.send('tap', {
      type: 'feature',
      target: "work_list"
    }); // ??????????????????????????????????????????????????????


    var count = storage.getSession('com.aweme.reflow-music-count') || 1;

    if (+count >= 3) {
      //?????????n???????????????
      _tea2.default.send('tap', {
        type: 'download_feature',
        target: "work_list"
      });

      downloadApp(DOWNLOAD_URL_SETTING['reflow-user'], {
        type: 'music',
        params: {
          id: mid,
          gd_label: 'profile_feature'
        }
      });
      return;
    }

    storage.setSession('com.aweme.reflow-music-count', ++count); // ????????????????????????

    location.href = '/share/music/' + mid;
  });
  pageletWorklist.on('click', '.goWork', function (e) {
    var config = this.config;
    var id = $(e.currentTarget).attr('data-id');
    var mediaType = $(e.currentTarget).attr('data-type');
    var imgSrc = $(e.currentTarget).attr('data-url');

    _tea2.default.send('tap', {
      type: 'feature',
      target: "work_list"
    }); // ???????????????


    if (isTypeSMS) {
      goUser(_config.uid);
      return;
    } // ?????????????????????????????????


    if (mediaType === 'image') {
      scaleImage(e.currentTarget, imgSrc);
      return;
    } // ??????????????????????????????????????????????????????


    var count = storage.getSession('com.aweme.reflow-user-count') || 1;

    if (+count >= DOWNLOAD_CLICK_LIMIT) {
      //?????????n???????????????
      _tea2.default.send('tap', {
        type: 'download_feature',
        target: "work_list"
      });

      downloadApp(DOWNLOAD_URL_SETTING['reflow-user'], {
        type: 'detail',
        params: {
          id: id,
          gd_label: 'profile_feature'
        }
      });
      return;
    }

    storage.setSession('com.aweme.reflow-user-count', ++count); // ??????????????????

    location.href = '/share/video/' + id;
  }); // ?????????profile??????????????????????????????????????????

  $('.close').click(function (e) {
    $('#scaleImageWrapper').removeClass('full-screen');
    $('#scaleImageWrapper .enlarge-wrapper').css({
      top: rectObject.top,
      left: rectObject.left
    });
    setTimeout(function () {
      $('#scaleImageWrapper').hide();
    }, 300);
  }); // ?????????profile????????????????????????????????????????????????????????????????????????

  $('#scaleImageWrapper').on('touchmove', function (e) {
    e.preventDefault();
  });
} // ?????????profile??????????????????????????????????????????


function scaleImage(ele, imgSrc) {
  rectObject = ele.getBoundingClientRect();
  var scaleImageWrapper = $('#scaleImageWrapper')[0];
  $('#scaleImageWrapper .enlarge-wrapper').css({
    "background-image": "url(" + imgSrc + ")",
    top: rectObject.top,
    left: rectObject.left
  });
  $(scaleImageWrapper).show();
  setTimeout(function () {
    $(scaleImageWrapper).addClass('full-screen');
    $('#scaleImageWrapper .enlarge-wrapper').css({
      top: 0,
      left: 0
    });
  }, 0);
}

function format(count) {
  try {
    count = Number(count);

    if (count < 10000) {
      return count;
    }

    return count / 10000 + 'w';
  } catch (e) {
    return count;
  }
}

function getWorkList(type) {
  var listType = type;

  if (isLoading || loadEnd) {
    return;
  }

  isLoading = true;
  loading.show();
  var data = $.extend({}, params);
  var url = '/web/api/v2/aweme/' + type + '/';

  if (type === 'music') {
    url = '/web/api/v2/music/list/original/';
    var musicParams = {
      user_id: params.user_id,
      sec_uid: params.sec_uid,
      count: params.count,
      cursor: params.max_cursor
    };
    data = musicParams;
  }

  data['_signature'] = signature; // ????????????readme@??????1

  data['dytk'] = dytk;
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json',
    data: data,
    success: function success(res) {
      if (res.status_code !== 0) {
        loading.hide();
        tips.show('????????????????????????????????????');
        return;
      }

      params.max_cursor = res.max_cursor || res.cursor; // tips: ?????????????????? loadEnd ????????????????????????

      if (!res.has_more) {
        loadEnd = true;
        loading.hide();
      }

      if (res.music_list && res.music_list.length) {
        hasListData[type] = true;
        var musicData = res.music_list.map(function (item) {
          return {
            mid: item.mid,
            count: item.use_count_desc,
            imgUrl: _utils2.default.getDeepValue(item, 'cover_thumb.url_list[0]') || '',
            name: item.title,
            duration: number.formatSecond(item.duration)
          };
        });
        renderWorkList(MUSIC_TMPL, musicData); // params.max_cursor === res.cursor;
      } else if (res.aweme_list && res.aweme_list.length) {
        hasListData[type] = true;
        var awemeList = res.aweme_list.map(function (item) {
          return {
            id: item.aweme_id,
            cover: _utils2.default.getDeepValue(item, 'video.cover.url_list[0]') || '',
            good_choice: item.good_choice || 0,
            label_url: _utils2.default.getDeepValue(item, 'label_large.url_list[0]') || '',
            digg_num: format(_utils2.default.getDeepValue(item, 'statistics.digg_count') || 0),
            isImage: item.aweme_type === 2 ? true : false,
            imageUrl: _utils2.default.getDeepValue(item, 'image_infos[0].label_large.url_list[0]')
          };
        });
        renderWorkList(LIST_TMPL, awemeList);
        params.max_cursor === res.max_cursor;
      } else {
        if (hasListData[type] == false) {
          showEmpty({
            type: listType
          });
        }
      }
    },
    error: function error(e) {
      console.log('error>', e);
    },
    complete: function complete() {
      isLoading = false;
    }
  });
}

function showEmpty(params) {
  pageletWorklist.show().find('.js-list').html(EMPTY_TMPL({
    text: EMPTY_TEXT[params.type]
  }));
}

function reload() {
  pageletWorklist.show().find('.js-list').empty();
}

function renderWorkList(template, data) {
  pageletWorklist.show().find('.js-list').append(template({
    list: data || []
  }));
}

function createDOM() {
  var code = getQueryString('code');

  if (code) {
    var eleSpan = document.createElement('span');
    eleSpan.className = 'sms-code';
    eleSpan.innerText = code;
    eleSpan.id = 'js-copy-text';
    document.body.appendChild(eleSpan);
  }
}

function smsInvite() {
  if (window.location.href.indexOf('sms_invite') !== -1) {
    isTypeSMS = true;
    setTimeout(createDOM, 500);
  }
}

function goUser(uid) {
  // ??????????????????????????????????????????????????????
  copyText('js-copy-text');
  downloadApp(DOWNLOAD_URL_SETTING['sms-invite'], {
    type: 'user',
    params: {
      uid: uid,
      // ?????????????????????
      gd_label: 'profile_follow'
    }
  });
}

function copyText(id) {
  var eleTarget = document.getElementById(id);

  if (window.getSelection && eleTarget) {
    var range = document.createRange();
    range.selectNode(eleTarget);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    return document.execCommand('copy');
  } else if (document.selection) {
    var _range = document.body.createTextRange();

    _range.moveToElementText(eleTarget);

    _range.select().createTextRange();

    return document.execCommand('copy');
  }
}

function renderMain(config) {
  $.ajax({
    url: '/web/api/v2/user/info/?sec_uid=' + config.sec_uid,
    type: 'get',
    dataType: 'json',
    success: function success(res) {
      if (res.status_code !== 0) {
        tips.show('??????????????????????????????');
        return;
      }

      res.user_info.favoriting_count = format(res.user_info.favoriting_count);
      res.user_info.follower_count = format(res.user_info.follower_count);
      res.user_info.following_count = format(res.user_info.following_count);
      res.user_info.total_favorited = format(res.user_info.total_favorited);
      $('#pagelet-user-info').html(MAIN_TMPL({
        data: res.user_info
      }));
      var stickyEl = $('.tab-wrap'); // ?????????tab??????

      var listType = stickyEl.find('.tab').eq(0).attr('data-type');
      var stickyHolder = $('.video-tab');
      var rect = stickyEl.get(0).getBoundingClientRect();
      stickyHolder.attr('height', rect.height + 'px');
      var stickyT = stickyEl.get(0).offsetTop;

      window.onscroll = function (e) {
        var scrollT = document.body.scrollTop;

        if (scrollT > stickyT) {
          stickyEl.addClass('tab-box-fixed');
        } else {
          stickyEl.removeClass('tab-box-fixed');
        }
      };

      getWorkList(listType);
      bind(config);
    },
    error: function error(e) {
      console.log('error>', e);
    },
    complete: function complete() {
      isLoading = false;
    }
  });
}

function init(config) {
  dytk = config.dytk;
  params.user_id = config.uid;
  params.sec_uid = _utils2.default.getUrlParam(window.location.href, "sec_uid");

  if (params.sec_uid != "") {
    delete params.user_id;
  }

  config.sec_uid = params.sec_uid;
  nonce = config.uid;
  signature = (0, _bytedAcrawler.sign)(nonce);

  _tea2.default.setEventCommonParams({
    page_name: 'reflow_user'
  });

  _tea2.default.send('page_view', {});

  smsInvite(config.uid);

  var callback = function callback() {
    goUser(config.uid);
  };

  renderMain(config);
  banner.init({
    dl: DOWNLOAD_URL_SETTING['reflow-user'],
    callback: isTypeSMS ? callback : null,
    opts: {
      type: 'user',
      useDl: true,
      params: {
        uid: config.uid,
        type: 'need_follow',
        gd_label: 'profile_bottom'
      }
    },
    teaLogger: _tea2.default,
    pageTag: 'reflow-user'
  });
}

;

/***/ }),

/***/ "9740e2f820a158083b3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("c3dd550a9e17a9891063");

var tpl = __webpack_require__("f018444c1271e8d2d96d");

module.exports.show = function (msg, stayTime, el) {
  var SHOW_TIME = stayTime || 2000; // ?????????????????? 2s

  var ANI_TIME = 500; // ?????????????????? .5s

  el = el || $('body');
  var ihtml = tpl({
    tips: msg
  });
  var $ihtml = $(ihtml);
  $ihtml.appendTo($(el));
  /* ?????? */

  setTimeout(function () {
    $ihtml.addClass('show');
  }, 20);
  setTimeout(function () {
    $ihtml.addClass('removing');
    setTimeout(function () {
      $ihtml.remove();
    }, ANI_TIME);
  }, SHOW_TIME);
};

/***/ }),

/***/ "a62155a7eb13f352b7e3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"sms-code":"sms-code","pagelet-worklist":"pagelet-worklist","list":"list","music-item":"music-item","item-pic":"item-pic","pic-cover":"pic-cover","icon-music-play":"icon-music-play","item-content":"item-content","item-content-name":"item-content-name","item-content-used":"item-content-used","item-content-duration":"item-content-duration","item-opt":"item-opt","item":"item","cover":"cover","label":"label","digg":"digg","digg-icon":"digg-icon","digg-num":"digg-num","image-icon":"image-icon","empty":"empty","follow-num":"follow-num","tab-num":"tab-num","pagelet-user-info":"pagelet-user-info","bg":"bg","personal-card":"personal-card","info1":"info1","avatar":"avatar","focus-btn":"focus-btn","nickname":"nickname","shortid":"shortid","info2":"info2","verify-info":"verify-info","signature":"signature","extra-info":"extra-info","location":"location","constellation":"constellation","unknown":"unknown","follow-info":"follow-info","num":"num","text":"text","block":"block","video-tab":"video-tab","tab-wrap":"tab-wrap","tab":"tab","tab-box-fixed":"tab-box-fixed","active":"active","scaleImageWrapper":"scaleImageWrapper","close":"close","enlarge-wrapper":"enlarge-wrapper","full-screen":"full-screen","hidden":"hidden"};

/***/ }),

/***/ "adf14ea98b2960ef189a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("b0dbbc9fa6326f3e234c");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var tmpRenderer = __webpack_require__("fd19f810c56546fb697a");

var BrowserOpen = /*#__PURE__*/function () {
  function BrowserOpen() {
    _classCallCheck(this, BrowserOpen);

    this.el = null;
  }

  _createClass(BrowserOpen, [{
    key: "open",
    value: function open() {
      var _this = this;

      if (this.el) {
        this.el.show(200);
        return;
      }

      var div = document.createElement('div');
      div.innerHTML = tmpRenderer();
      document.body.appendChild(div);
      this.el = $('.open-browser');
      this.el.show(200);
      var s;
      this.el.click(function (ev) {
        if (ev.target == _this.el[0]) {
          _this.close();
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.el.hide(200);
    }
  }]);

  return BrowserOpen;
}();

module.exports = BrowserOpen;

/***/ }),

/***/ "b0dbbc9fa6326f3e234c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c3dd550a9e17a9891063":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagelet-tips":"pagelet-tips","show":"show","removing":"removing"};

/***/ }),

/***/ "d712b069d922fb6d94e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("12a5c4dc26e1824fdd8b");

/**
* config.dl   ??????
* config.opts ????????????
* teaLogger   tea??????
* pageTag     ????????????
*/
// var ga = require('common/ga');
var downloadAction = __webpack_require__("166003ecd7694b2377b6");

function bind(config) {
  $('#download').on('click', function (e) {
    e.preventDefault(); // if(config.pageTag)
    //     ga.gaevent(config.pageTag,'download_bottom','');

    if (config.teaLogger) {
      config.teaLogger.send('tap', {
        type: 'download_bottom'
      });
    }

    if (typeof config.callback === 'function') {
      config.callback();
    } else {
      downloadAction.downloadApp(config.dl, config.opts);
    }
  });
}

module.exports = {
  init: function init(config) {
    bind(config);
  }
};

/***/ }),

/***/ "e844fe34c02b3cce5ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  dateFormat: function dateFormat(timestamp, format) {
    if (!timestamp) {
      return;
    }

    if (typeof timestamp !== 'number') {
      try {
        timestamp = Number(timestamp);
      } catch (error) {
        throw Error('Expected to be a number.', error);
      }
    }

    function zeroize(num) {
      if (num && typeof num !== 'number') {
        return;
      }

      return num < 10 ? "0".concat(num) : num;
    }

    var date = new Date(timestamp);
    var format = format || 'YYYY???MM???DD???';
    var now = Number(new Date());
    var diff = now - timestamp;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var _seconds = 1000;

    var _minute = 60 * _seconds;

    var _hours = 60 * _minute;

    var _day = 24 * _hours;

    var formatArray = ['YYYY', 'MM', 'DD', 'H', 'M', 'S'];
    var dateArray = [year, month, day, hours, minute];

    if (diff > _day * 3) {
      if (diff < _day * 366) {
        format = 'MM???DD???';
      }

      for (var i = 0; i < formatArray.length - 1; i++) {
        format = format.replace(formatArray[i], dateArray[i]);
      }

      return format;
    } else {
      if (parseInt(diff / _day, 10) >= 1 && parseInt(diff / _day, 10) < 3) {
        return "".concat(parseInt(diff / _day, 10), "\u5929\u524D");
      } else if (parseInt(diff / _hours, 10) >= 1) {
        return "".concat(parseInt(diff / _hours, 10), "\u5C0F\u65F6\u524D");
      } else if (parseInt(diff / _minute, 10) >= 1) {
        return "".concat(parseInt(diff / _minute, 10), "\u5206\u949F\u524D");
      } else {
        return '??????';
      }
    }
  },
  getUrlParameter: function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    var sURLVariables = sPageURL.split('&');
    var sParameterName, i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  },
  htmlEntities: function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },

  /*
     * ??????url??????
     */
  getUrlParam: function getUrlParam(location, name) {
    var url = location;
    var splitIndex = url.indexOf('?') + 1;
    var paramStr = url.substr(splitIndex, url.length);
    var arr = paramStr.split('&');

    for (var i = 0; i < arr.length; i++) {
      var kv = arr[i].split('=');

      if (kv[0] == name) {
        return kv[1];
      }
    }

    return '';
  },

  /*
     * ??????url??????
     */
  setUrlParam: function setUrlParam(location, name, value) {
    var url = location;
    var splitIndex = url.indexOf('?') + 1;
    var paramStr = url.substr(splitIndex, url.length);
    var newUrl = url.substr(0, splitIndex); // - if exist , replace

    var arr = paramStr.split('&');

    for (var i = 0; i < arr.length; i++) {
      var kv = arr[i].split('=');

      if (kv[0] == name) {
        newUrl += "".concat(kv[0], "=").concat(value);
      } else {
        if (kv[1] != undefined) {
          newUrl += "".concat(kv[0], "=").concat(kv[1]);
        }
      }

      if (i != arr.length - 1) {
        newUrl += '&';
      }
    } // - if new, add


    if (newUrl.indexOf(name) < 0) {
      newUrl += splitIndex == 0 ? "?".concat(name, "=").concat(value) : "&".concat(name, "=").concat(value);
    }

    return newUrl;
  },
  stopEvent: function stopEvent(event, prevent) {
    event.stopPropagation();
    event.stopImmediatePropagation();

    if (prevent !== false) {
      event.preventDefault();
    }
  },
  setScroll: function setScroll(scrollable, el) {
    el = el || document;

    if (scrollable) {
      $(el).off('touchmove');
    } else {
      $(el).off('touchmove').on('touchmove', function (e) {
        this.stopEvent(e);
      });
    }
  },
  initScrollEvents: function initScrollEvents(offset, debounce) {
    var scrollEndTimer;
    offset = offset || 100;

    function globalScroll(e) {
      var theDocumentHeight = document.body.scrollHeight;
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollY >= theDocumentHeight - window.innerHeight - offset) {
        $(window).trigger('scrollBottom', e.type);

        if (e.type == 'scroll') {
          if (scrollEndTimer) {
            clearTimeout(scrollEndTimer);
          }

          scrollEndTimer = setTimeout(function () {
            $(window).trigger('scrollEnd');
          }, debounce || 50);
        }
      }
    }

    $(window).on('scroll load afterflow', globalScroll);
  },

  /**
     * ????????????????????????
     * @params {Object} obj
     * @params {String} path
     * eg. getDeepValue(obj, 'a.b.c[0].name')
     */
  getDeepValue: function getDeepValue(obj, path) {
    var current = obj || {};
    var temp = path.split('.');
    var paths = [];
    var match = [];
    temp.forEach(function (key) {
      if (match = key.match(/(\w+)\[(\d+)\]/)) {
        paths.push(match[1]);
        paths.push(match[2]);
      } else {
        paths.push(key);
      }
    });

    for (var i = 0, len = paths.length; i < len; i++) {
      var key = paths[i];

      if (current[key] === null || current[key] === undefined) {
        return undefined;
      }

      current = current[key];
    }

    return current;
  },
  getTTWebId: function () {
    var ttwebid = $.cookie('tt_webid') || String(parseInt(Math.random() * 10000));
    return function () {
      return ttwebid;
    };
  }(),
  throttle: function throttle(fn) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var throttleLastTime = null;
    return function () {
      var ctx = this;
      var args = arguments;
      var nowTime = Number(new Date());

      if (nowTime - throttleLastTime > interval || !throttleLastTime) {
        fn.apply(ctx, args);
        throttleLastTime = nowTime;
      }
    };
  },
  debounce: function debounce(fn) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var debounceTimeout = null;
    return function () {
      var ctx = this;
      var args = arguments;

      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
        debounceTimeout = null;
      }

      debounceTimeout = setTimeout(function () {
        fn.apply(ctx, args);
      }, interval);
    };
  },
  getBrowserType: function getBrowserType() {
    var _navigator = navigator,
        userAgent = _navigator.userAgent; // ??????????????????userAgent?????????

    var isOpera = userAgent.indexOf('Opera') > -1; // ????????????Opera?????????

    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera; // ????????????IE?????????

    var isEdge = userAgent.indexOf('Edge') > -1; // ????????????IE???Edge?????????

    var isFF = userAgent.indexOf('Firefox') > -1; // ????????????Firefox?????????

    var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1; // ????????????Safari?????????

    var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1; // ??????Chrome?????????

    if (isIE) {
      return 'IE';
    }

    if (isOpera) {
      return 'Opera';
    }

    if (isEdge) {
      return 'Edge';
    }

    if (isFF) {
      return 'FF';
    }

    if (isSafari) {
      return 'Safari';
    }

    if (isChrome) {
      return 'Chrome';
    }

    return 'other';
  }
};

/***/ }),

/***/ "f018444c1271e8d2d96d":
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="pagelet-tips">' +
((__t = ( tips )) == null ? '' : __t) +
'</div>\n';

}
return __p
}

/***/ }),

/***/ "f1e83373459b7c5ed036":
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="bg" \n    ';
 if(data.avatar_medium.url_list && data.avatar_medium.url_list[0]){  ;
__p += '\n    style="background-image: url(' +
((__t = ( data.avatar_medium.url_list && data.avatar_medium.url_list[0] )) == null ? '' : __t) +
')"\n    ';
 };
__p += ' \n    ></div>\n<div class="personal-card">\n        <div class="info1">\n            <span class="author">\n                <img class="avatar" src="' +
((__t = ( data.avatar_medium.url_list && data.avatar_medium.url_list[0] )) == null ? '' : __t) +
'" />\n            </span>\n            <span class="focus-btn go-author" data-id="' +
((__t = ( data.uid )) == null ? '' : __t) +
'"><span>??????</span></span>\n            <p class="nickname">' +
((__t = ( data.nickname )) == null ? '' : __t) +
'</p>\n            <p class="shortid">??????ID???\n                ';
 if (data.unique_id) {;
__p += '\n                    ' +
((__t = ( data.unique_id )) == null ? '' : __t) +
'\n                ';
 }else{ ;
__p += '\n                    ' +
((__t = ( data.short_id )) == null ? '' : __t) +
'\n                ';
 } ;
__p += '\n            </p>\n        </div>\n        <div class="info2">\n            ';
 if (data.custom_verify){ ;
__p += '\n            <div class="verify-info">\n                <span class="info">\n                            ';
 if (data.verification_type == 2) { ;
__p += '\n                                ???????????????\n                            ';
 } else if (data.custom_verify) {  ;
__p += '\n                                ' +
((__t = ( data.custom_verify )) == null ? '' : __t) +
'\n                            ';
 } ;
__p += '\n                </span>\n            </div>\n            ';
 } ;
__p += '\n            <p class="signature">' +
((__t = ( data.signature || '?????????????????????????????????????????????????????????' )) == null ? '' : __t) +
'</p>\n            <p class="follow-info">\n                <span class="focus block">\n                    <span class="num">' +
((__t = ( data.following_count )) == null ? '' : __t) +
'</span>\n                    <span class="text">??????</span>\n                </span>\n                <span class="follower block">\n                    <span class="num">' +
((__t = ( data.follower_count )) == null ? '' : __t) +
'</span>\n                    <span class="text">??????</span>\n                </span>\n                <span class="liked-num block">\n                    <span class="num">' +
((__t = ( data.total_favorited )) == null ? '' : __t) +
'</span>\n                    <span class="text">???</span>\n                </span>\n            </p>\n        </div>\n</div>\n<div class="video-tab">\n    ';
 if (data.verification_type == 2){ ;
__p += '\n        <div class="tab-wrap" data-music>\n        <div class="music-tab tab active get-list" data-type="music">??????<span class="num">' +
((__t = ( data.original_musician.music_count )) == null ? '' : __t) +
'</span></div>\n        <div class="user-tab tab get-list" data-type="post">??????<span class="num">' +
((__t = ( data.aweme_count )) == null ? '' : __t) +
'</span></div>\n    ';
 }else { ;
__p += '\n        <div class="tab-wrap">\n        <div class="user-tab active tab get-list" data-type="post">??????<span class="num">' +
((__t = ( data.aweme_count )) == null ? '' : __t) +
'</span></div>\n        ';
 } ;
__p += '\n        <div class="like-tab tab get-list" data-type="like">??????<span class="num">' +
((__t = ( data.favoriting_count )) == null ? '' : __t) +
'</span></div>\n    </div>\n</div>';

}
return __p
}

/***/ }),

/***/ "fd19f810c56546fb697a":
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="open-browser">\n    <div class="open-browser-content">\n        <h5>??????????????????</h5>\n        <p>??????????????????</p>\n        <p>????????????<span>?????????</span>????????????</p>\n        <div class="guider"></div>\n    </div>\n</div>';

}
return __p
}

/***/ })

/******/ });
//# sourceMappingURL=index.f2516941.js.map