/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 184:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 640:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(742);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 123:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".masteriyo-device-selector{padding:6px 0 !important;display:flex}.masteriyo-device-selector .masteriyo-device{all:unset;cursor:pointer;padding:4px}.masteriyo-device-selector .masteriyo-device svg{height:13px;width:13px}.masteriyo-device-selector .masteriyo-device.active{background:#e1eaff;border-radius:2px;width:16px;height:16px;text-align:center}.masteriyo-device-selector .masteriyo-device.active svg{fill:#2563eb}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 810:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".masteriyo-dimensions.masteriyo-responsive{margin-bottom:25px}.masteriyo-dimensions.masteriyo-responsive:last-child{margin-bottom:0}.masteriyo-dimensions-head{display:flex;gap:8px;align-items:center}.masteriyo-dimensions-head .masteriyo-units{margin-left:auto}.masteriyo-dimensions-head .masteriyo-units .masteriyo-units-menu{position:absolute;margin:4px 0}.masteriyo-dimensions-container{display:flex;text-align:center;gap:6px;padding-top:16px}.masteriyo-dimensions-container .masteriyo-dimension{display:block}.masteriyo-dimensions-container .masteriyo-dimension label{color:#64748b}.masteriyo-dimensions-container input[type=number]{width:50px;height:40px;border-color:#e2e8f0}.masteriyo-dimensions-label{width:auto}.masteriyo-dimensions-lock{border-color:transparent;background:none;padding-bottom:10px;cursor:pointer}.masteriyo-dimensions-lock svg{fill:#2563eb}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 129:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".masteriyo-control ul,.masteriyo-control li{margin:0}.masteriyo-control-label{display:inline-block;font-size:14px;font-weight:400;color:#64748b;line-height:17px}.masteriyo-icon{fill:#64748b;height:18px;width:18px}input[type=text]{border:1px solid #e2e8f0;font-weight:600;width:100%;color:#64748b;font-size:12px;padding:10px 16px}.masteriyo-units-btn{border:1px solid #7ea6ff;background:#e1eaff;text-transform:uppercase;font-weight:600;font-size:10px;color:#2563eb;border-radius:2px;width:30px;height:21px;cursor:pointer}.masteriyo-units-menu button{background:#fff;color:#64748b;margin-bottom:4px;text-transform:uppercase;font-weight:600;font-size:10px;border:2px solid #e2e8f0;border-radius:2px;width:30px;height:21px;padding:0;cursor:pointer}input[type=number]::-webkit-outer-spin-button,input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;background:#e2e8f0 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 20'%3E%3Ctitle%3Enumber-bar%3C/title%3E%3Crect width='2' height='20' rx='1' style='fill:%23e2e8f0'/%3E%3Cpolyline points='0.1 2.2 1 1.3 1.9 2.2' style='fill:%2364748b'/%3E%3Cpolyline points='1.9 17.8 1 18.7 0.1 17.8' style='fill:%2364748b'/%3E%3C/svg%3E\") no-repeat center center;position:absolute;top:2px;right:2px;bottom:2px;width:4px;height:30px;border:1px solid #e2e8f0;border-radius:4px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".masteriyo-panel{border-bottom:1px solid #dbdbdb;border-radius:2px}.masteriyo-panel-title{color:#64748b;font-size:15px}.masteriyo-panel .masteriyo-panel-toggle-button{position:relative;padding:14px 17px;outline:none;width:100%;font-weight:600;border:0;box-shadow:0 1px 0 #dbdbdb;border-radius:2px;height:auto;background:none;text-align:left;cursor:pointer;line-height:21px}.masteriyo-panel .masteriyo-panel-toggle-button .masteriyo-icon{position:absolute;right:17px;top:50%;transform:translateY(-50%)}.masteriyo-panel .masteriyo-panel-toggle-button:hover{background-color:#fafbff}.masteriyo-panel.is-open{background-color:#fafbff}.masteriyo-panel.is-open .masteriyo-panel-head{border-bottom:1px solid #e2e8f0;margin-bottom:25px}.masteriyo-panel.is-open .masteriyo-panel-toggle-button{color:#2563eb}.masteriyo-panel.is-open .masteriyo-panel-icon>svg path{fill:#2563eb}.masteriyo-panel.is-open .masteriyo-panel-body{margin:0 17px 25px}.masteriyo-panel.is-open .masteriyo-panel-body .masteriyo-control{margin-bottom:25px}.masteriyo-panel.is-open .masteriyo-panel-body .masteriyo-control:last-child{margin-bottom:0}.masteriyo-panel.is-open .masteriyo-panel-body p{color:#64748b}.components-panel__body-toggle.components-button{color:#64748b;font-size:14px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 297:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".masteriyo-select.masteriyo-responsive{margin-bottom:25px}.masteriyo-select.masteriyo-inline{display:flex;justify-content:space-between;align-items:center;margin-bottom:25px}.masteriyo-select.masteriyo-inline:last-child{margin-bottom:0}.masteriyo-select.masteriyo-inline .masteriyo-select-button{width:auto;margin-top:0}.masteriyo-select.masteriyo-responsive .masteriyo-select-head{display:flex;align-items:center;gap:8px}.masteriyo-select .masteriyo-select-body{position:relative}.masteriyo-select .masteriyo-select-button{background-color:#fcfcfc;border:1px solid #e2e8f0;border-radius:2px;outline:none;min-width:130px;line-height:18px;font-weight:600;font-size:12px;text-align:left;padding:10px 30px 10px 16px;color:#64748b;position:relative;cursor:pointer;width:100%;margin:8px 0 0 0}.masteriyo-select .masteriyo-select-button .masteriyo-icon{position:absolute;right:16px;top:50%;transform:translateY(-50%);width:14px;height:14px}.masteriyo-select .masteriyo-select-menu[aria-hidden=false]{position:absolute;background-color:#fff;z-index:999;padding:8px 10px;top:calc(100% + 8px);box-shadow:0 8px 17px rgba(100,116,139,.1),0 4px 8px rgba(100,116,139,.1);width:100%;max-height:350px;overflow-y:scroll;overflow-x:hidden}.masteriyo-select .masteriyo-select-menu[aria-hidden=false]::-webkit-scrollbar{width:4px}.masteriyo-select .masteriyo-select-menu[aria-hidden=false]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #64748b;border-radius:10px}.masteriyo-select .masteriyo-select-menu[aria-hidden=false]::-webkit-scrollbar-thumb{background:#2563eb;border-radius:10px}.masteriyo-select .masteriyo-select-menu[aria-hidden=false]::-webkit-scrollbar-thumb:hover{background:#64748b}.masteriyo-select .masteriyo-select-menu[aria-hidden=false] .masteriyo-select-menu-item{font-size:12px;line-height:15px;font-weight:600;padding:8px 12px;margin-bottom:8px;border-radius:2px;cursor:pointer;color:#64748b;width:100%}.masteriyo-select .masteriyo-select-menu[aria-hidden=false] .masteriyo-select-menu-item input{width:100%;border:1px solid #e2e8f0;background:#fafbff;font-size:10px;font-weight:normal}.masteriyo-select .masteriyo-select-menu[aria-hidden=false] .masteriyo-select-menu-item.has-search{padding:0}.masteriyo-select .masteriyo-select-menu[aria-hidden=false] .masteriyo-select-menu-item.is-active,.masteriyo-select .masteriyo-select-menu[aria-hidden=false] .masteriyo-select-menu-item:hover,.masteriyo-select .masteriyo-select-menu[aria-hidden=false] .masteriyo-select-menu-item.is-focus{background-color:#e2e8f0}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 608:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".masteriyo-slider-head{display:flex;gap:8px;align-items:center;margin-bottom:8px}.masteriyo-slider-head .masteriyo-units{margin-left:auto}.masteriyo-slider-head .masteriyo-units .masteriyo-units-menu{position:absolute;margin:4px 0}.masteriyo-slider-container{display:flex;justify-content:space-between;gap:30px;align-items:center;margin-bottom:25px}.masteriyo-slider-container input[type=number]{width:50px;height:40px;border-color:#e2e8f0}.masteriyo-slider-container input[type=range]{width:100%;height:4px;cursor:pointer}.masteriyo-slider-label{width:auto}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".masteriyo-tab-panel .masteriyo-tab-panel-menu{display:grid;grid-template-columns:repeat(2, 1fr);grid-gap:13px;text-align:center}.masteriyo-tab-panel .masteriyo-tab-panel-menu .masteriyo-tab-panel-menu-item{all:unset;padding:8px 16px;background-color:rgba(37,99,235,.03);border-radius:2px;color:#2563eb;font-size:14px;font-weight:600;cursor:pointer;line-height:19px}.masteriyo-tab-panel .masteriyo-tab-panel-menu .masteriyo-tab-panel-menu-item.is-active{background-color:#2563eb;color:#fff;position:relative}.masteriyo-tab-panel .masteriyo-tab-panel-menu .masteriyo-tab-panel-menu-item.is-active::after{content:\"\";width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:7px solid #2563eb;position:absolute;top:100%;left:50%;transform:translateX(-50%)}.masteriyo-tab-panel .masteriyo-tab-panel-body{margin-top:25px}.masteriyo-tab-panel .masteriyo-multi-select>div{border:1px solid #e2e8f0;margin-top:8px}.block-editor-block-inspector .components-panel__body{border:none;border-top:0}.components-panel[data-masteriyo-inspector-controls] .components-panel__body.block-editor-block-inspector__advanced{display:none}.masteriyo-design-card{margin:0 17px}.masteriyo-design-card__items{border-radius:2px;overflow:hidden;border:1px solid rgba(37,99,235,.1);transition:all 300ms}.masteriyo-design-card__items:not(:last-child){margin-bottom:24px}.masteriyo-design-card__items:hover,.masteriyo-design-card__items:after{box-shadow:0 8px 16px rgba(100,116,139,.1),0 4px 4px rgba(100,116,139,.1)}.masteriyo-design-card__items--active{box-shadow:0 8px 16px rgba(100,116,139,.1),0 4px 4px rgba(100,116,139,.1);border:1px solid rgba(37,99,235,.5)}.masteriyo-design-card .preview-image img{display:block}.masteriyo-design-card .status{padding:15px;display:flex;flex-direction:row;justify-content:space-between;font-size:13px;font-weight:500;background-color:rgba(37,99,235,.03)}.masteriyo-design-card .active-label{color:#2563eb}.coming-soon-notice{margin-top:80px;margin-bottom:80px;text-align:center}.coming-soon-notice>span{display:block}.coming-soon-notice>span:nth-child(2){color:#2563eb;font-size:20px;font-weight:600;margin-top:8px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 493:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".masteriyo-toggle.masteriyo-inline{display:flex;justify-content:space-between;margin-bottom:16px;align-items:center}.masteriyo-toggle .masteriyo-toggle-body{position:relative;display:inline-block}.masteriyo-toggle .masteriyo-toggle-track{content:\"\";display:inline-block;box-sizing:border-box;vertical-align:top;background-color:#fff;border:3px solid #64748b;width:30px;height:18px;border-radius:9px;transition:.2s background ease}@media(prefers-reduced-motion: reduce){.masteriyo-toggle .masteriyo-toggle-track{transition-duration:0s;transition-delay:0s}}.masteriyo-toggle.is-checked .masteriyo-toggle-track{background-color:#2563eb;border:1px solid #2563eb}.masteriyo-toggle.is-checked .masteriyo-toggle-thumb{background-color:#fff;border-width:0;transform:translateX(10px)}.masteriyo-toggle .masteriyo-toggle-thumb{display:block;position:absolute;box-sizing:border-box;top:4px;left:5px;width:9px;height:9px;border-radius:50%;transition:.1s transform ease;background-color:#64748b}@media(prefers-reduced-motion: reduce){.masteriyo-toggle .masteriyo-toggle-thumb{transition-duration:0s;transition-delay:0s}}.masteriyo-toggle .masteriyo-toggle-checkbox{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;margin:0;padding:0;z-index:1;border:none}.masteriyo-toggle .masteriyo-toggle-checkbox:focus+.masteriyo-toggle-track{box-shadow:0 0 0 2px #fff,0 0 0 4px #007cba;outline:2px solid transparent;outline-offset:2px}.masteriyo-toggle .masteriyo-toggle-checkbox::before{content:\"\"}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 114:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 554:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = mergeWith;


/***/ }),

/***/ 703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(414);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(703)();
}


/***/ }),

/***/ 414:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 590:
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ 639:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(196);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(697);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'UNSAFE_componentWillReceiveProps',
		value: function UNSAFE_componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.Z = AutosizeInput;

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 742:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 196:
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: external ["wp","i18n"]
const external_wp_i18n_namespaceObject = window["wp"]["i18n"];
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(196);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function slicedToArray_slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: external ["wp","components"]
const external_wp_components_namespaceObject = window["wp"]["components"];
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var node_modules_classnames = __webpack_require__(184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(node_modules_classnames);
;// CONCATENATED MODULE: external ["wp","data"]
const external_wp_data_namespaceObject = window["wp"]["data"];
;// CONCATENATED MODULE: external ["wp","element"]
const external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: ./assets/js/blocks/hooks/useDeviceType.ts


var useDeviceType_useDeviceType = function useDeviceType() {
  var deviceType = (0,external_wp_data_namespaceObject.useSelect)(function (select) {
    return select('masteriyo/device-type').getPreviewDeviceType();
  }, []);
  var setDeviceType = (0,external_wp_element_namespaceObject.useCallback)(function (state) {
    (0,external_wp_data_namespaceObject.dispatch)('masteriyo/device-type').setPreviewDeviceType(state);
  }, []);
  return [deviceType, setDeviceType];
};
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  extends_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return extends_extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
;// CONCATENATED MODULE: ./assets/js/blocks/components/icon/icons.tsx

/* harmony default export */ const icons = ({
  controlIcon: {
    'chevron-down': /*#__PURE__*/external_React_default().createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      d: "M20.5 6.2L12 14.7 3.5 6.2 2 7.8l10 10 9.9-10-1.4-1.6z"
    })),
    'chevron-up': /*#__PURE__*/external_React_default().createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      d: "M2 16.1l1.4 1.4L12 8.9l8.6 8.6 1.4-1.4-10-10-10 10z"
    })),
    'chevron-up-circle': /*#__PURE__*/external_React_default().createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      d: "M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zM2.5 12c0 5.3 4.3 9.5 9.5 9.5s9.5-4.3 9.5-9.5-4.2-9.5-9.5-9.5c-5.2 0-9.5 4.3-9.5 9.5z",
      fill: "#e2e8f0"
    }), /*#__PURE__*/external_React_default().createElement("path", {
      d: "M7.7 14.9l4.3-4.3 4.3 4.3.8-.8-5-5-5 5 .6.8z",
      fill: "#64748b"
    })),
    'chevron-down-circle': /*#__PURE__*/external_React_default().createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      d: "M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22ZM12,2.49A9.51,9.51,0,1,0,21.51,12,9.53,9.53,0,0,0,12,2.49Z",
      fill: "#e2e8f0"
    }), /*#__PURE__*/external_React_default().createElement("path", {
      d: "M16.28,9.1,12,13.35,7.78,9.1,7,9.9l5,5L17,9.9Z",
      fill: "#64748b"
    })),
    cog: /*#__PURE__*/external_React_default().createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      d: "M12 16c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
    }), /*#__PURE__*/external_React_default().createElement("path", {
      d: "M2.8 16.1l1 1.7c.5.9 1.8 1.3 2.7.7l.5-.3c.6.5 1.2.8 1.9 1.1v.7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-.6c.7-.3 1.3-.7 1.9-1.1l.5.3c.9.5 2.2.2 2.7-.7l1-1.7c.6-1 .2-2.2-.7-2.7l-.5-.3c.1-.7.1-1.5 0-2.2l.5-.3c1-.6 1.3-1.8.7-2.7l-1-1.7c-.5-.9-1.8-1.3-2.7-.7l-.5.3c-.6-.5-1.2-.8-1.9-1.1V4c0-1.1-.9-2-2-2h-2C9.9 2 9 2.9 9 4v.6c-.7.3-1.3.7-1.9 1.1l-.5-.3c-.9-.5-2.2-.2-2.8.7l-1 1.7c-.6 1-.2 2.2.7 2.7l.5.3c-.1.7-.1 1.5 0 2.2l-.5.3c-.9.7-1.2 1.9-.7 2.8zm3.4-2.7c-.1-.5-.2-.9-.2-1.4 0-.5.1-.9.2-1.4.1-.4-.1-.9-.5-1.1l-1.1-.6 1-1.7 1.1.7c.4.1.9.1 1.2-.2.7-.7 1.5-1.2 2.4-1.4.4-.1.7-.5.7-1V4h2v1.3c0 .4.3.8.7 1 .9.3 1.7.8 2.4 1.4.3.3.8.3 1.2.1l1.1-.7 1 1.7-1.1.6c-.4.2-.6.7-.5 1.1.1.5.2.9.2 1.4 0 .5-.1.9-.2 1.4-.1.4.1.9.5 1.1l1.1.6-1 1.7-1.1-.7c-.4-.2-.9-.2-1.2.1-.7.6-1.5 1.1-2.4 1.4-.4.1-.7.5-.7 1v1.3h-2v-1.3c0-.4-.3-.8-.7-1-.9-.3-1.7-.8-2.4-1.4-.3-.1-.8-.1-1.2.1l-1.1.7-1-1.7 1.1-.7c.4-.2.6-.7.5-1.1z"
    })),
    lock: /*#__PURE__*/external_React_default().createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, ' ', /*#__PURE__*/external_React_default().createElement("path", {
      d: "M12,22.14a4.67,4.67,0,0,0,3.27-1.33,4.57,4.57,0,0,0,1.21-3.27l-.06-3.69H14.59l.06,3.69A2.63,2.63,0,0,1,12,20.33a2.54,2.54,0,0,1-2.53-2.79l.06-3.69-2-.06-.06,3.69A4.6,4.6,0,0,0,12,22.14ZM16.54,6.46a4.48,4.48,0,1,0-9,0l.06,3.69H9.53L9.47,6.46a2.59,2.59,0,1,1,5.17,0l-.06,3.69h1.9C16.54,10.09,16.54,6.46,16.54,6.46Z"
    }), /*#__PURE__*/external_React_default().createElement("path", {
      d: "M13,17.15H11V6.85h2Z"
    })),
    'un-link': /*#__PURE__*/external_React_default().createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      d: "M12,22.14a4.67,4.67,0,0,0,3.27-1.33,4.57,4.57,0,0,0,1.21-3.27l-.06-3.69H14.59l.06,3.69A2.63,2.63,0,0,1,12,20.33a2.54,2.54,0,0,1-2.53-2.79l.06-3.69-2-.06-.06,3.69A4.6,4.6,0,0,0,12,22.14ZM16.54,6.46a4.48,4.48,0,1,0-9,0l.06,3.69H9.53L9.47,6.46a2.59,2.59,0,1,1,5.17,0l-.06,3.69h1.9C16.54,10.09,16.54,6.46,16.54,6.46Z"
    })),
    desktop: /*#__PURE__*/external_React_default().createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      d: "M20 2.6H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2zm-16 11v-9h16v9H4z"
    })),
    tablet: /*#__PURE__*/external_React_default().createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      d: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.8 2 1.9 2h16c1.1 0 2-.9 2-2V4c.1-1.1-.8-2-1.9-2zM4 20V4h15.8v16H4z"
    }), /*#__PURE__*/external_React_default().createElement("circle", {
      cx: "12",
      cy: "18",
      r: "1"
    })),
    mobile: /*#__PURE__*/external_React_default().createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      d: "M16.9 2h-10c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-10 18V4h10v16h-10z"
    }), /*#__PURE__*/external_React_default().createElement("circle", {
      cx: "11.9",
      cy: "18",
      r: "1"
    }))
  },
  blockIcon: {
    courses: /*#__PURE__*/external_React_default().createElement("svg", {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 24 24",
      enableBackground: "new 0 0 24 24",
      xmlSpace: "preserve"
    }, /*#__PURE__*/external_React_default().createElement("g", {
      fill: "#787DFF"
    }, /*#__PURE__*/external_React_default().createElement("rect", {
      x: "2.5",
      y: "2",
      width: "5",
      height: "9"
    }), /*#__PURE__*/external_React_default().createElement("rect", {
      x: "9.5",
      y: "2",
      width: "5",
      height: "9"
    }), /*#__PURE__*/external_React_default().createElement("rect", {
      x: "16.5",
      y: "2",
      width: "5",
      height: "9"
    }), /*#__PURE__*/external_React_default().createElement("rect", {
      x: "2.5",
      y: "13",
      width: "5",
      height: "9"
    }), /*#__PURE__*/external_React_default().createElement("rect", {
      x: "9.5",
      y: "13",
      width: "5",
      height: "9"
    }), /*#__PURE__*/external_React_default().createElement("rect", {
      x: "16.5",
      y: "13",
      width: "5",
      height: "9"
    }))),
    'course-categories': /*#__PURE__*/external_React_default().createElement("svg", {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 24 24",
      enableBackground: "new 0 0 24 24",
      xmlSpace: "preserve"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      fill: "#787DFF",
      d: "M10.9,2H2v8.9h8.9V2z M9,9H4V4h5V9z M22,2h-8.9v8.9H22V2z M20,9h-5V4h5V9z M10.9,13.1H2V22h8.9L10.9,13.1z M9,20H4v-5h5V20z M19.9,13.7c-2.1-1.3-4.9-0.6-6.2,1.5c-0.9,1.4-0.9,3.3,0,4.7c0.3,0.6,0.8,1.1,1.4,1.4c2.1,1.3,4.9,0.6,6.2-1.5 c0.9-1.4,0.9-3.3,0-4.7C21,14.5,20.5,14,19.9,13.7L19.9,13.7z M18.9,19.3c-1,0.8-2.4,0.6-3.2-0.4c-0.6-0.8-0.6-1.9,0-2.7 c0.1-0.2,0.2-0.3,0.4-0.4c1-0.8,2.4-0.6,3.2,0.4c0.6,0.8,0.6,1.9,0,2.7C19.2,19.1,19.1,19.2,18.9,19.3L18.9,19.3z"
    }))
  }
});
;// CONCATENATED MODULE: ./assets/js/blocks/components/icon/index.tsx


var _excluded = ["type", "name", "className", "size"];





var icon_Icon = function Icon(props) {
  var type = props.type,
      name = props.name,
      className = props.className,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      otherProps = _objectWithoutProperties(props, _excluded);

  var iconsNames = []; // TODO flat the object by using icon name with syntax [namespace.name]

  for (var _i = 0, _Object$keys = Object.keys(icons); _i < _Object$keys.length; _i++) {
    var typeKey = _Object$keys[_i];

    for (var _i2 = 0, _Object$keys2 = Object.keys(icons[typeKey]); _i2 < _Object$keys2.length; _i2++) {
      var nameKey = _Object$keys2[_i2];
      iconsNames.push(nameKey);
    }
  }

  if (!['controlIcon', 'blockIcon', 'frontendIcon'].includes(type) || !iconsNames.includes(name)) {
    return null;
  }

  return /*#__PURE__*/external_React_default().createElement(external_wp_components_namespaceObject.Icon, extends_extends({
    className: classnames_default()('masteriyo-icon', className),
    icon: icons[type][name] || '',
    size: size,
    type: type,
    name: name
  }, otherProps));
};

/* harmony default export */ const icon = (icon_Icon);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/js/blocks/components/device-selector/editor.scss
var editor = __webpack_require__(123);
;// CONCATENATED MODULE: ./assets/js/blocks/components/device-selector/editor.scss

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editor/* default */.Z, options);



/* harmony default export */ const device_selector_editor = (editor/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./assets/js/blocks/components/device-selector/index.tsx









var device_selector_DeviceSelector = function DeviceSelector() {
  var _useDeviceType = useDeviceType_useDeviceType(),
      _useDeviceType2 = slicedToArray_slicedToArray(_useDeviceType, 2),
      deviceType = _useDeviceType2[0],
      setDeviceType = _useDeviceType2[1];

  return /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-device-selector"
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-devices",
    role: "group"
  }, /*#__PURE__*/external_React_default().createElement(external_wp_components_namespaceObject.Tooltip, {
    text: (0,external_wp_i18n_namespaceObject.__)('Desktop', 'masteriyo')
  }, /*#__PURE__*/external_React_default().createElement("button", {
    className: classnames_default()('masteriyo-device', {
      active: 'desktop' === deviceType
    }),
    onClick: function onClick() {
      setDeviceType('desktop');
    }
  }, /*#__PURE__*/external_React_default().createElement(icon, {
    type: "controlIcon",
    name: "desktop",
    size: 20
  }))), /*#__PURE__*/external_React_default().createElement(external_wp_components_namespaceObject.Tooltip, {
    text: (0,external_wp_i18n_namespaceObject.__)('Tablet', 'masteriyo')
  }, /*#__PURE__*/external_React_default().createElement("button", {
    className: classnames_default()('masteriyo-device', {
      active: 'tablet' === deviceType
    }),
    onClick: function onClick() {
      setDeviceType('tablet');
    }
  }, /*#__PURE__*/external_React_default().createElement(icon, {
    type: "controlIcon",
    name: "tablet",
    size: 20
  }))), /*#__PURE__*/external_React_default().createElement(external_wp_components_namespaceObject.Tooltip, {
    text: (0,external_wp_i18n_namespaceObject.__)('Mobile', 'masteriyo')
  }, /*#__PURE__*/external_React_default().createElement("button", {
    className: classnames_default()('masteriyo-device', {
      active: 'mobile' === deviceType
    }),
    onClick: function onClick() {
      setDeviceType('mobile');
    }
  }, /*#__PURE__*/external_React_default().createElement(icon, {
    type: "controlIcon",
    name: "mobile",
    size: 20
  })))));
};

/* harmony default export */ const device_selector = (device_selector_DeviceSelector);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function defineProperty_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: external ["wp","compose"]
const external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: ./assets/js/blocks/hooks/useClickOutside.ts


var useClickOutside_useClickOutside = function useClickOutside(elRef, callback) {
  var extraElRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var callbackRef = (0,external_wp_element_namespaceObject.useRef)();
  callbackRef.current = callback;
  (0,external_wp_element_namespaceObject.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(e) {
      if (!document.body.contains(elRef.current) || !elRef.current || elRef.current.contains(e.target) || !callbackRef.current || null !== extraElRef && extraElRef.current.contains(e.target)) {
        return;
      }

      callbackRef.current(e);
    };

    document.addEventListener('click', handleClickOutside, true);
    return function () {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [callbackRef, elRef, extraElRef]);
};

/* harmony default export */ const hooks_useClickOutside = (useClickOutside_useClickOutside);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/js/blocks/components/dimensions/editor.scss
var dimensions_editor = __webpack_require__(810);
;// CONCATENATED MODULE: ./assets/js/blocks/components/dimensions/editor.scss

            

var editor_options = {};

editor_options.insert = "head";
editor_options.singleton = false;

var editor_update = injectStylesIntoStyleTag_default()(dimensions_editor/* default */.Z, editor_options);



/* harmony default export */ const components_dimensions_editor = (dimensions_editor/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./assets/js/blocks/components/dimensions/index.tsx














var Dimensions = function Dimensions(props) {
  var _useState = (0,external_wp_element_namespaceObject.useState)(false),
      _useState2 = slicedToArray_slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var unitSelectRef = (0,external_wp_element_namespaceObject.useRef)();
  var total = props.value,
      onChange = props.onChange,
      _props$responsive = props.responsive,
      responsive = _props$responsive === void 0 ? false : _props$responsive,
      label = props.label,
      units = props.units,
      _props$min = props.min,
      min = _props$min === void 0 ? -Infinity : _props$min,
      _props$max = props.max,
      max = _props$max === void 0 ? Infinity : _props$max,
      _props$step = props.step,
      step = _props$step === void 0 ? 0.01 : _props$step,
      _props$defaultUnit = props.defaultUnit,
      defaultUnit = _props$defaultUnit === void 0 ? 'px' : _props$defaultUnit,
      _props$type = props.type,
      type = _props$type === void 0 ? '' : _props$type,
      _props$dimensionLabel = props.dimensionLabels,
      dimensionLabels = _props$dimensionLabel === void 0 ? {
    top: (0,external_wp_i18n_namespaceObject.__)('Top', 'masteriyo'),
    right: (0,external_wp_i18n_namespaceObject.__)('Right', 'masteriyo'),
    bottom: (0,external_wp_i18n_namespaceObject.__)('Bottom', 'masteriyo'),
    left: (0,external_wp_i18n_namespaceObject.__)('Left', 'masteriyo')
  } : _props$dimensionLabel;
  var devices = {
    desktop: 'Desktop',
    tablet: 'Tablet',
    mobile: 'Mobile'
  };
  var dimensionProps = dimensionLabels;
  var instanceId = (0,external_wp_compose_namespaceObject.useInstanceId)(Dimensions);

  var _useDeviceType = useDeviceType_useDeviceType(),
      _useDeviceType2 = slicedToArray_slicedToArray(_useDeviceType, 1),
      deviceType = _useDeviceType2[0];

  hooks_useClickOutside(unitSelectRef, function () {
    return setIsOpen(false);
  });

  var getUnit = function getUnit() {
    if (total) {
      if (responsive) {
        return total[deviceType] ? total[deviceType].unit ? total[deviceType].unit : defaultUnit : defaultUnit;
      }

      return total.unit || defaultUnit;
    }

    return defaultUnit;
  };

  var getValue = function getValue(key) {
    if (Object.keys(total).length > 0) {
      if (responsive) {
        return total[deviceType] ? total[deviceType][key] || 0 === total[deviceType][key] ? total[deviceType][key] : '' : '';
      }

      return total[key] || 0 === total[key] ? total[key] : '';
    }

    return '';
  };

  var inputAttrs = function inputAttrs() {
    var inputMin = min,
        inputMax = max,
        inputStep = step;

    if ('%' === getUnit() || 'vh' === getUnit() || 'vw' === getUnit()) {
      inputMin = 'margin' === type ? -100 : 0;
      inputMax = 100;
    }

    if ('em' === getUnit() || 'rem' === getUnit()) {
      inputMin = 'margin' === type ? -20 : 0;
      inputMax = 20;
    }

    if ('px' === getUnit()) {
      inputMin = 'margin' === type ? -inputMax : 0;
      inputStep = 1;
    }

    return {
      min: inputMin,
      max: inputMax,
      step: inputStep
    };
  };

  var setSettings = function setSettings(val) {
    var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    val = Number.isNaN(val) ? Boolean(getValue('lock')) ? undefined : 0 : val;
    val = val < inputAttrs().min ? inputAttrs().min : val;
    val = val > inputAttrs().max ? inputAttrs().max : val;
    var data = Boolean(getValue('lock')) && 'unit' !== prop && 'lock' !== prop ? {
      top: val,
      right: val,
      bottom: val,
      left: val
    } : defineProperty_defineProperty({}, prop, val);

    if ('unit' === prop) {
      data.top = undefined;
      data.right = undefined;
      data.bottom = undefined;
      data.left = undefined;
    }

    data = Object.assign({}, responsive ? total[deviceType] || {} : total, data);

    if (!data.unit || !total[deviceType] || !total[deviceType].unit) {
      data.unit = data.unit || defaultUnit;
    }

    if (!data.lock || !total[deviceType] || !total[deviceType].lock) {
      data.lock = data.lock || false;
    }

    onChange(Object.assign({}, total, responsive ? defineProperty_defineProperty({}, deviceType, data) : data));
    setIsOpen(false);
  };

  var lockValue = getValue('lock');
  (0,external_wp_element_namespaceObject.useEffect)(function () {
    if (!lockValue) {
      return;
    }

    if (!responsive) {
      var allProp = [];
      var maxProp;

      for (var _i = 0, _Object$keys = Object.keys(dimensionProps); _i < _Object$keys.length; _i++) {
        var prop = _Object$keys[_i];
        allProp = [].concat(_toConsumableArray(allProp), [total[prop] || '']);

        if (allProp.length === 4) {
          maxProp = allProp.every(function (v) {
            return '' === v;
          }) ? undefined : Math.max.apply(Math, _toConsumableArray(allProp));
          total.top = maxProp;
          total.right = maxProp;
          total.bottom = maxProp;
          total.left = maxProp;
        }
      }

      onChange(Object.assign({}, total));
    } else {
      var _allProp = [];

      var _maxProp;

      if (total[deviceType]) {
        for (var _i2 = 0, _Object$keys2 = Object.keys(dimensionProps); _i2 < _Object$keys2.length; _i2++) {
          var _prop = _Object$keys2[_i2];
          _allProp = [].concat(_toConsumableArray(_allProp), [total[deviceType][_prop] || '']);

          if (_allProp.length === 4) {
            _maxProp = _allProp.every(function (v) {
              return '' === v;
            }) ? undefined : Math.max.apply(Math, _toConsumableArray(_allProp));
            total[deviceType].top = _maxProp;
            total[deviceType].right = _maxProp;
            total[deviceType].bottom = _maxProp;
            total[deviceType].left = _maxProp;
          }
        }
      }

      onChange(Object.assign({}, total));
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [lockValue, deviceType, responsive, dimensionProps, total, onChange]);
  return /*#__PURE__*/external_React_default().createElement("div", {
    className: classnames_default()('masteriyo-control', 'masteriyo-dimensions', {
      'masteriyo-responsive': responsive
    })
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-control-head masteriyo-dimensions-head"
  }, label && /*#__PURE__*/external_React_default().createElement("label", {
    htmlFor: "masteriyo-dimension-top-".concat(instanceId),
    className: "masteriyo-control-label masteriyo-dimensions-label"
  }, label), responsive && /*#__PURE__*/external_React_default().createElement(device_selector, null), units && /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-units",
    ref: unitSelectRef
  }, /*#__PURE__*/external_React_default().createElement("button", {
    className: "masteriyo-units-btn",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    "aria-expanded": isOpen
  }, getUnit()), units && units.length > 1 && isOpen && /*#__PURE__*/external_React_default().createElement("ul", {
    className: "masteriyo-units-menu",
    "aria-hidden": !isOpen
  }, units.filter(function (unit) {
    return unit !== getUnit();
  }).map(function (unit) {
    return /*#__PURE__*/external_React_default().createElement("li", {
      className: "masteriyo-unit",
      key: unit
    }, /*#__PURE__*/external_React_default().createElement("button", {
      onClick: function onClick() {
        return setSettings(unit, 'unit');
      }
    }, unit));
  })))), /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-control-body masteriyo-dimension-body"
  }, responsive ? Object.keys(devices).map(function (deviceKey) {
    return deviceKey === deviceType && /*#__PURE__*/external_React_default().createElement("div", {
      key: deviceKey,
      className: "masteriyo-dimensions-container"
    }, Object.keys(dimensionProps).map(function (dimensionProp) {
      return /*#__PURE__*/external_React_default().createElement("span", {
        key: dimensionProp,
        className: "masteriyo-dimension"
      }, /*#__PURE__*/external_React_default().createElement("input", {
        id: "masteriyo-dimension-".concat(dimensionProp, "-").concat(instanceId),
        value: getValue(dimensionProp),
        type: "number",
        onChange: function onChange(e) {
          return setSettings(parseFloat(e.target.value), dimensionProp);
        }
      }), /*#__PURE__*/external_React_default().createElement("label", {
        htmlFor: "masteriyo-dimension-".concat(dimensionProp, "-").concat(instanceId)
      }, dimensionProps[dimensionProp]));
    }), /*#__PURE__*/external_React_default().createElement("button", {
      className: classnames_default()('masteriyo-dimensions-lock', {
        'is-lock': Boolean(getValue('lock'))
      }),
      onClick: function onClick() {
        return setSettings(!Boolean(getValue('lock')), 'lock');
      }
    }, /*#__PURE__*/external_React_default().createElement(icon, {
      type: "controlIcon",
      name: Boolean(getValue('lock')) ? 'lock' : 'un-link',
      size: 16
    })));
  }) : /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-dimensions-container"
  }, Object.keys(dimensionProps).map(function (dimensionProp) {
    return /*#__PURE__*/external_React_default().createElement("span", {
      key: dimensionProp,
      className: "masteriyo-dimension"
    }, /*#__PURE__*/external_React_default().createElement("input", {
      id: "masteriyo-dimension-".concat(dimensionProp, "-").concat(instanceId),
      value: getValue(dimensionProp),
      type: "number",
      onChange: function onChange(e) {
        return setSettings(parseFloat(e.target.value), dimensionProp);
      }
    }), /*#__PURE__*/external_React_default().createElement("label", {
      htmlFor: "masteriyo-dimension-".concat(dimensionProp, "-").concat(instanceId)
    }, dimensionProps[dimensionProp]));
  }), /*#__PURE__*/external_React_default().createElement("button", {
    className: classnames_default()('masteriyo-dimensions-lock', {
      'is-lock': Boolean(getValue('lock'))
    }),
    onClick: function onClick() {
      return setSettings(!Boolean(getValue('lock')), 'lock');
    }
  }, /*#__PURE__*/external_React_default().createElement(icon, {
    type: "controlIcon",
    name: Boolean(getValue('lock')) ? 'lock' : 'un-link',
    size: 16
  })))));
};

/* harmony default export */ const dimensions = (Dimensions);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/js/blocks/components/editor.scss
var components_editor = __webpack_require__(129);
;// CONCATENATED MODULE: ./assets/js/blocks/components/editor.scss

            

var components_editor_options = {};

components_editor_options.insert = "head";
components_editor_options.singleton = false;

var components_editor_update = injectStylesIntoStyleTag_default()(components_editor/* default */.Z, components_editor_options);



/* harmony default export */ const blocks_components_editor = (components_editor/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/js/blocks/components/panel/editor.scss
var panel_editor = __webpack_require__(558);
;// CONCATENATED MODULE: ./assets/js/blocks/components/panel/editor.scss

            

var panel_editor_options = {};

panel_editor_options.insert = "head";
panel_editor_options.singleton = false;

var panel_editor_update = injectStylesIntoStyleTag_default()(panel_editor/* default */.Z, panel_editor_options);



/* harmony default export */ const components_panel_editor = (panel_editor/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./assets/js/blocks/components/panel/index.tsx







var Panel = function Panel(props) {
  var children = props.children,
      title = props.title,
      _props$initialOpen = props.initialOpen,
      initialOpen = _props$initialOpen === void 0 ? false : _props$initialOpen;

  var _useState = (0,external_wp_element_namespaceObject.useState)(initialOpen),
      _useState2 = slicedToArray_slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  return /*#__PURE__*/external_React_default().createElement("div", {
    className: classnames_default()('masteriyo-panel', {
      'is-open': isOpen
    })
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-panel-head"
  }, /*#__PURE__*/external_React_default().createElement("button", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "masteriyo-panel-toggle-button"
  }, /*#__PURE__*/external_React_default().createElement("span", {
    className: "masteriyo-panel-title"
  }, title || ''), /*#__PURE__*/external_React_default().createElement("span", {
    className: "masteriyo-panel-icon"
  }, isOpen ? /*#__PURE__*/external_React_default().createElement(icon, {
    type: "controlIcon",
    name: "chevron-up-circle"
  }) : /*#__PURE__*/external_React_default().createElement(icon, {
    type: "controlIcon",
    name: "chevron-down-circle"
  })))), isOpen && /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-panel-body"
  }, children));
};

/* harmony default export */ const panel = (Panel);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/js/blocks/components/select/editor.scss
var select_editor = __webpack_require__(297);
;// CONCATENATED MODULE: ./assets/js/blocks/components/select/editor.scss

            

var select_editor_options = {};

select_editor_options.insert = "head";
select_editor_options.singleton = false;

var select_editor_update = injectStylesIntoStyleTag_default()(select_editor/* default */.Z, select_editor_options);



/* harmony default export */ const components_select_editor = (select_editor/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./assets/js/blocks/components/select/index.tsx













var Select = function Select(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      focus = _useState4[0],
      setFocus = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      searchTerm = _useState6[0],
      setSearchTerm = _useState6[1];

  var value = props.value,
      onChange = props.onChange,
      label = props.label,
      options = props.options,
      _props$inline = props.inline,
      inline = _props$inline === void 0 ? true : _props$inline,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? __('Select', 'masteriyo') : _props$placeholder,
      _props$responsive = props.responsive,
      responsive = _props$responsive === void 0 ? false : _props$responsive,
      _props$search = props.search,
      search = _props$search === void 0 ? false : _props$search;
  var selectRef = useRef();
  var inputRef = useRef();
  var id = useInstanceId(Select);
  var devices = {
    desktop: 'Desktop',
    tablet: 'Tablet',
    mobile: 'Mobile'
  };

  var _useDeviceType = useDeviceType(),
      _useDeviceType2 = _slicedToArray(_useDeviceType, 1),
      deviceType = _useDeviceType2[0];

  useEffect(function () {
    var ref = inputRef.current;

    if (isOpen && ref) {
      ref.focus();
    }

    return function () {
      if (ref) {
        ref.blur();
      }
    };
  }, [isOpen]);
  useClickOutside(selectRef, function () {
    return setIsOpen(false);
  });

  var getValue = function getValue() {
    if (responsive) {
      return value && value[deviceType] ? options.filter(function (option) {
        return option.value === value[deviceType];
      })[0].label : placeholder;
    } // eslint-disable-next-line no-nested-ternary


    return value ? options.some(function (option) {
      return value === option.value;
    }) ? options.filter(function (option) {
      return option.value === value;
    })[0].label : options[0].label : placeholder;
  };

  var setSettings = function setSettings(type, val) {
    var data = _defineProperty({}, type, val);

    onChange(Object.assign({}, value, data));
    setIsOpen(false);
    setSearchTerm('');
  };

  var finalOptions = function finalOptions() {
    var selected = options.filter(function (option) {
      return getValue() === option.label;
    }) || [];

    if (selected.length > 0) {
      options.forEach(function (option, index) {
        if (option.value === selected[0].value) {
          options.splice(index, 1);
          options.unshift(option);
        }
      });
    }

    if (search) {
      var temp = options.filter(function (option) {
        return getValue().toLowerCase() !== option.label.toLowerCase();
      }).filter(function (option) {
        return option.label.toLowerCase().includes(searchTerm);
      });

      if (selected.length > 0) {
        temp.unshift(selected[0]);
      }

      return temp;
    }

    return options;
  };

  var onKeydownHandler = function onKeydownHandler(e) {
    var device = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    switch (e.keyCode) {
      case 13:
        if (device) {
          setSettings(device, finalOptions()[focus].value);
        } else {
          onChange(finalOptions()[focus].value);
        }

        setIsOpen(false);
        break;

      case 38:
        if (focus === 0) {
          setFocus(finalOptions().length - 1);
          return;
        }

        setFocus(focus - 1);
        break;

      case 40:
        if (focus === finalOptions().length - 1) {
          setFocus(0);
          return;
        }

        setFocus(focus + 1);
        break;

      case 27:
        setIsOpen(false);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classnames('masteriyo-control', 'masteriyo-select', {
      'masteriyo-responsive': responsive
    }, {
      'masteriyo-inline': inline && !responsive
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "masteriyo-control-head masteriyo-select-head"
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: "masteriyo-select-button-".concat(id),
    className: "masteriyo-control-label masteriyo-select-label"
  }, label), responsive && /*#__PURE__*/React.createElement(DeviceSelector, null)), /*#__PURE__*/React.createElement("div", {
    className: "masteriyo-control-body masteriyo-select-body",
    ref: selectRef
  }, responsive ? Object.keys(devices).map(function (deviceKey) {
    return deviceKey === deviceType && /*#__PURE__*/React.createElement(Fragment, {
      key: deviceKey
    }, /*#__PURE__*/React.createElement("button", {
      id: "masteriyo-select-button-".concat(id),
      className: "masteriyo-select-button",
      onClick: function onClick() {
        return setIsOpen(!isOpen);
      },
      "aria-expanded": isOpen,
      "aria-haspopup": "listbox",
      onKeyDown: function onKeyDown(e) {
        return onKeydownHandler(e, deviceKey);
      }
    }, getValue(), /*#__PURE__*/React.createElement(Icon, {
      type: "controlIcon",
      name: isOpen ? 'chevron-up' : 'chevron-down',
      size: 12
    })), /*#__PURE__*/React.createElement("ul", {
      className: "masteriyo-select-menu",
      role: "listbox",
      "aria-hidden": !isOpen,
      tabIndex: -1
    }, isOpen && /*#__PURE__*/React.createElement(Fragment, null, search && /*#__PURE__*/React.createElement("li", {
      className: "masteriyo-select-menu-item has-search",
      role: "option",
      tabIndex: -1
    }, /*#__PURE__*/React.createElement("input", {
      ref: inputRef,
      placeholder: __('Search', 'masteriyo'),
      type: "text",
      value: searchTerm,
      onKeyDown: function onKeyDown(e) {
        return onKeydownHandler(e, deviceKey);
      },
      onChange: function onChange(e) {
        return setSearchTerm(e.target.value);
      }
    })), finalOptions().map(function (option, idx) {
      return /*#__PURE__*/React.createElement("li", {
        key: option.value,
        value: option.value,
        className: classnames('masteriyo-select-menu-item', {
          'is-active': option.label === getValue()
        }, {
          'is-focus': idx === focus
        }),
        onClick: function onClick() {
          return setSettings(deviceKey, option.value);
        },
        role: "option",
        onMouseOver: function onMouseOver() {
          return setFocus(idx);
        },
        onFocus: function onFocus() {
          return setFocus(idx);
        },
        "aria-selected": idx === focus,
        tabIndex: -1,
        onKeyDown: function onKeyDown() {
          return null;
        }
      }, option.label);
    }))));
  }) : /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("button", {
    id: "masteriyo-select-button-".concat(id),
    className: "masteriyo-select-button",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    "aria-expanded": isOpen,
    "aria-haspopup": "listbox",
    onKeyDown: function onKeyDown(e) {
      return onKeydownHandler(e);
    }
  }, getValue(), /*#__PURE__*/React.createElement(Icon, {
    type: "controlIcon",
    name: isOpen ? 'chevron-up' : 'chevron-down',
    size: 12
  })), /*#__PURE__*/React.createElement("ul", {
    className: "masteriyo-select-menu",
    "aria-hidden": !isOpen
  }, isOpen && /*#__PURE__*/React.createElement(Fragment, null, search && /*#__PURE__*/React.createElement("li", {
    className: "masteriyo-select-menu-item has-search",
    role: "option",
    tabIndex: -1
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    placeholder: __('Search', 'masteriyo'),
    type: "text",
    value: searchTerm,
    onKeyDown: function onKeyDown(e) {
      return onKeydownHandler(e);
    },
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    }
  })), finalOptions().map(function (option, idx) {
    return /*#__PURE__*/React.createElement("li", {
      key: option.value,
      value: option.value,
      className: classnames('masteriyo-select-menu-item', {
        'is-active': option.label === getValue()
      }, {
        'is-focus': idx === focus
      }),
      onClick: function onClick() {
        onChange(option.value);
        setIsOpen(false);
      },
      role: "option",
      onKeyDown: function onKeyDown() {
        return null;
      },
      onMouseOver: function onMouseOver() {
        return setFocus(idx);
      },
      onFocus: function onFocus() {
        return setFocus(idx);
      },
      "aria-selected": idx === focus,
      tabIndex: -1
    }, option.label);
  }))))));
};

/* harmony default export */ const components_select = ((/* unused pure expression or super */ null && (Select)));
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/js/blocks/components/slider/editor.scss
var slider_editor = __webpack_require__(608);
;// CONCATENATED MODULE: ./assets/js/blocks/components/slider/editor.scss

            

var slider_editor_options = {};

slider_editor_options.insert = "head";
slider_editor_options.singleton = false;

var slider_editor_update = injectStylesIntoStyleTag_default()(slider_editor/* default */.Z, slider_editor_options);



/* harmony default export */ const components_slider_editor = (slider_editor/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./assets/js/blocks/components/slider/index.tsx












var Slider = function Slider(props) {
  var _useState = (0,external_wp_element_namespaceObject.useState)(false),
      _useState2 = slicedToArray_slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var unitSelectRef = (0,external_wp_element_namespaceObject.useRef)();
  var _props$value = props.value,
      total = _props$value === void 0 ? {} : _props$value,
      onChange = props.onChange,
      _props$responsive = props.responsive,
      responsive = _props$responsive === void 0 ? false : _props$responsive,
      label = props.label,
      _props$units = props.units,
      units = _props$units === void 0 ? [] : _props$units,
      _props$min = props.min,
      min = _props$min === void 0 ? -Infinity : _props$min,
      _props$max = props.max,
      max = _props$max === void 0 ? Infinity : _props$max,
      _props$step = props.step,
      step = _props$step === void 0 ? 0.01 : _props$step,
      _props$inline = props.inline,
      inline = _props$inline === void 0 ? false : _props$inline,
      _props$defaultUnit = props.defaultUnit,
      defaultUnit = _props$defaultUnit === void 0 ? 'px' : _props$defaultUnit,
      _props$showUnit = props.showUnit,
      showUnit = _props$showUnit === void 0 ? false : _props$showUnit;
  var devices = {
    desktop: 'Desktop',
    tablet: 'Tablet',
    mobile: 'Mobile'
  };
  var id = (0,external_wp_compose_namespaceObject.useInstanceId)(Slider);

  var _useDeviceType = useDeviceType_useDeviceType(),
      _useDeviceType2 = slicedToArray_slicedToArray(_useDeviceType, 1),
      deviceType = _useDeviceType2[0];

  hooks_useClickOutside(unitSelectRef, function () {
    return setIsOpen(false);
  });

  var getUnit = function getUnit() {
    if (total) {
      if (responsive) {
        return total[deviceType] ? total[deviceType].unit ? total[deviceType].unit : defaultUnit : defaultUnit;
      }

      return total.unit || defaultUnit;
    }

    return defaultUnit;
  };

  var getValue = function getValue() {
    if (total && Object.keys(total).length > 0) {
      if (responsive) {
        if (units.length > 0) {
          return total[deviceType] ? total[deviceType].value || 0 === total[deviceType].value ? total[deviceType].value : '' : '';
        }

        return total[deviceType] || 0 === total[deviceType] ? total[deviceType] : '';
      }

      return total.value || 0 === total.value ? total.value : '';
    }

    return total || 0 === total ? total : '';
  };

  var inputAttrs = function inputAttrs() {
    var inputMin = min,
        inputMax = max,
        inputStep = step;

    if ('%' === getUnit() || 'vh' === getUnit() || 'vw' === getUnit()) {
      inputMin = 0;
      inputMax = 100;
    }

    if ('em' === getUnit() || 'rem' === getUnit()) {
      inputMin = 0;
      inputMax = 20;
    }

    if (units.length > 0 && 'px' === getUnit()) {
      inputStep = 1;
    }

    return {
      min: inputMin,
      max: inputMax,
      step: inputStep
    };
  };

  var setSettings = function setSettings(val, prop) {
    val = Number.isNaN(val) ? undefined : val;
    val = val < inputAttrs().min ? inputAttrs().min : val;
    val = val > inputAttrs().max ? inputAttrs().max : val;
    var data = units.length > 0 ? defineProperty_defineProperty({}, prop, val) : val;

    if (units.length > 0 && 'unit' === prop) {
      data.value = '';
    }

    data = units.length > 0 ? Object.assign({}, responsive ? total[deviceType] || {} : total, data) : val;

    if (units.length > 0 && (!data.unit || !total[deviceType] || !total[deviceType].unit)) {
      data.unit = data.unit || defaultUnit;
    }

    onChange(data.unit || responsive ? Object.assign({}, total, responsive ? defineProperty_defineProperty({}, deviceType, data) : data) : data);
    setIsOpen(false);
  };

  return /*#__PURE__*/external_React_default().createElement("div", {
    className: classnames_default()('masteriyo-control', 'masteriyo-slider', {
      'masteriyo-responsive': responsive,
      'masteriyo-inline': !responsive && !units && inline
    })
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-control-head masteriyo-slider-head"
  }, label && /*#__PURE__*/external_React_default().createElement("label", {
    htmlFor: "masteriyo-range-".concat(id),
    className: "masteriyo-control-label masteriyo-slider-label"
  }, label), responsive && /*#__PURE__*/external_React_default().createElement(device_selector, null), units.length > 0 && /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-units",
    ref: unitSelectRef
  }, /*#__PURE__*/external_React_default().createElement("button", {
    className: "masteriyo-units-btn",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    "aria-expanded": isOpen
  }, getUnit()), units && units.length > 1 && isOpen && /*#__PURE__*/external_React_default().createElement("ul", {
    className: "masteriyo-units-menu",
    "aria-hidden": !isOpen
  }, units.filter(function (unit) {
    return unit !== getUnit();
  }).map(function (unit) {
    return /*#__PURE__*/external_React_default().createElement("li", {
      className: "masteriyo-unit",
      key: unit
    }, /*#__PURE__*/external_React_default().createElement("button", {
      onClick: function onClick() {
        return setSettings(unit, 'unit');
      }
    }, unit));
  }))), units.length === 0 && showUnit && /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-units",
    ref: unitSelectRef
  }, /*#__PURE__*/external_React_default().createElement("button", {
    className: "masteriyo-units-btn",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    "aria-expanded": isOpen
  }, getUnit()))), /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-control-body masteriyo-slider-body"
  }, responsive ? Object.keys(devices).map(function (deviceKey) {
    return deviceKey === deviceType && /*#__PURE__*/external_React_default().createElement("div", {
      key: deviceKey,
      className: "masteriyo-slider-container"
    }, /*#__PURE__*/external_React_default().createElement("input", extends_extends({
      type: "range",
      value: getValue(),
      onChange: function onChange(e) {
        return setSettings(parseFloat(e.currentTarget.value), 'value');
      }
    }, inputAttrs())), /*#__PURE__*/external_React_default().createElement("input", {
      id: "masteriyo-range-".concat(id),
      type: "number",
      value: getValue(),
      onChange: function onChange(e) {
        return setSettings(parseFloat(e.currentTarget.value), 'value');
      }
    }));
  }) : /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-slider-container"
  }, /*#__PURE__*/external_React_default().createElement("input", extends_extends({
    type: "range",
    value: getValue(),
    onChange: function onChange(e) {
      return setSettings(parseFloat(e.currentTarget.value), 'value');
    }
  }, inputAttrs())), /*#__PURE__*/external_React_default().createElement("input", {
    id: "masteriyo-range-".concat(id),
    type: "number",
    value: getValue(),
    onChange: function onChange(e) {
      return setSettings(parseFloat(e.currentTarget.value), 'value');
    }
  }))));
};

/* harmony default export */ const slider = (Slider);
;// CONCATENATED MODULE: ./assets/js/blocks/components/tab/index.tsx


var Tab = function Tab(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-tab"
  }, Array.isArray(children) ? children.map(function (child) {
    return child;
  }) : children);
};

/* harmony default export */ const tab = (Tab);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/js/blocks/components/tab-panel/editor.scss
var tab_panel_editor = __webpack_require__(117);
;// CONCATENATED MODULE: ./assets/js/blocks/components/tab-panel/editor.scss

            

var tab_panel_editor_options = {};

tab_panel_editor_options.insert = "head";
tab_panel_editor_options.singleton = false;

var tab_panel_editor_update = injectStylesIntoStyleTag_default()(tab_panel_editor/* default */.Z, tab_panel_editor_options);



/* harmony default export */ const components_tab_panel_editor = (tab_panel_editor/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./assets/js/blocks/components/tab-panel/index.tsx






var TabPanel = function TabPanel(props) {
  var _firstTab$props;

  var tabs = props.children,
      _props$hasIcon = props.hasIcon,
      hasIcon = _props$hasIcon === void 0 ? false : _props$hasIcon,
      className = props.className,
      label = props.label;
  var firstTab = tabs && (tabs === null || tabs === void 0 ? void 0 : tabs.length) > 0 ? tabs[0] : null;

  var _useState = (0,external_wp_element_namespaceObject.useState)(firstTab === null || firstTab === void 0 ? void 0 : (_firstTab$props = firstTab.props) === null || _firstTab$props === void 0 ? void 0 : _firstTab$props.tabTitle),
      _useState2 = slicedToArray_slicedToArray(_useState, 2),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var tabPanelRef = (0,external_wp_element_namespaceObject.useRef)();
  (0,external_wp_element_namespaceObject.useEffect)(function () {
    if (!tabs) {
      return;
    }

    if (!tabs.some(function (_ref) {
      var props = _ref.props;
      return ['Layout', 'Settings', 'Advanced'].includes((props === null || props === void 0 ? void 0 : props.tabTitle) + '');
    })) {
      return;
    }

    var sidebarPanel = tabPanelRef.current.closest('.components-panel');
    sidebarPanel === null || sidebarPanel === void 0 ? void 0 : sidebarPanel.setAttribute('data-masteriyo-inspector-controls', true);
    return function () {
      sidebarPanel === null || sidebarPanel === void 0 ? void 0 : sidebarPanel.removeAttribute('data-masteriyo-inspector-controls');
    };
  }, [isActive, tabs]);

  if (!tabs) {
    return null;
  }

  return /*#__PURE__*/external_React_default().createElement("div", {
    className: classnames_default()('masteriyo-tab-panel', {
      'has-icon': hasIcon
    }, className),
    ref: tabPanelRef
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-tab-panel-head"
  }, label && /*#__PURE__*/external_React_default().createElement("label", {
    htmlFor: "masteriyo-tab-panel"
  }, label), /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-tab-panel-menu",
    role: "group"
  }, tabs.map(function (tab) {
    var tabTitle = tab.props ? tab.props.tabTitle : '';
    return /*#__PURE__*/external_React_default().createElement("button", {
      key: tabTitle,
      className: classnames_default()('masteriyo-tab-panel-menu-item', {
        'is-active': tabTitle === isActive
      }),
      onClick: function onClick() {
        setIsActive(tabTitle);
      }
    }, /*#__PURE__*/external_React_default().createElement("span", {
      className: "masteriyo-tab-panel-menu-item-title"
    }, tabTitle));
  }))), /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-tab-panel-body"
  }, tabs.map(function (tab) {
    var _tab$props;

    return ((_tab$props = tab.props) === null || _tab$props === void 0 ? void 0 : _tab$props.tabTitle) === isActive ? tab : '';
  })));
};

/* harmony default export */ const tab_panel = (TabPanel);
;// CONCATENATED MODULE: ./assets/js/blocks/components/index.ts










;// CONCATENATED MODULE: ./assets/js/blocks/course-categories/attributes.ts
var attributes = {
  clientId: {
    type: String
  },
  count: {
    type: Number,
    "default": 12
  },
  columns: {
    type: Number,
    "default": 3
  },
  categoryIds: {
    type: Array,
    "default": []
  },
  hide_courses_count: {
    type: String,
    "default": 'no'
  },
  include_sub_categories: {
    type: Boolean,
    "default": false
  }
};
/* harmony default export */ const course_categories_attributes = (attributes);
;// CONCATENATED MODULE: ./assets/js/blocks/hooks/useClientId.ts


var useClientId = function useClientId(id, callback, attributes) {
  (0,external_wp_element_namespaceObject.useEffect)(function () {
    var ID = id.substr(0, 8);

    if (!attributes.clientId) {
      callback({
        clientId: ID
      });
    } else if (attributes.clientId && attributes.clientId !== ID) {
      callback({
        clientId: ID
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
};

/* harmony default export */ const hooks_useClientId = (useClientId);
// EXTERNAL MODULE: ./node_modules/lodash.mergewith/index.js
var lodash_mergewith = __webpack_require__(554);
var lodash_mergewith_default = /*#__PURE__*/__webpack_require__.n(lodash_mergewith);
;// CONCATENATED MODULE: ./node_modules/framesync/dist/es/on-next-frame.js
var defaultTimestep = (1 / 60) * 1000;
var getCurrentTime = typeof performance !== "undefined"
    ? function () { return performance.now(); }
    : function () { return Date.now(); };
var onNextFrame = typeof window !== "undefined"
    ? function (callback) {
        return window.requestAnimationFrame(callback);
    }
    : function (callback) {
        return setTimeout(function () { return callback(getCurrentTime()); }, defaultTimestep);
    };



;// CONCATENATED MODULE: ./node_modules/framesync/dist/es/create-render-step.js
function createRenderStep(runNextFrame) {
    var toRun = [];
    var toRunNextFrame = [];
    var numToRun = 0;
    var isProcessing = false;
    var toKeepAlive = new WeakSet();
    var step = {
        schedule: function (callback, keepAlive, immediate) {
            if (keepAlive === void 0) { keepAlive = false; }
            if (immediate === void 0) { immediate = false; }
            var addToCurrentFrame = immediate && isProcessing;
            var buffer = addToCurrentFrame ? toRun : toRunNextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            if (buffer.indexOf(callback) === -1) {
                buffer.push(callback);
                if (addToCurrentFrame && isProcessing)
                    numToRun = toRun.length;
            }
            return callback;
        },
        cancel: function (callback) {
            var index = toRunNextFrame.indexOf(callback);
            if (index !== -1)
                toRunNextFrame.splice(index, 1);
            toKeepAlive.delete(callback);
        },
        process: function (frameData) {
            var _a;
            isProcessing = true;
            _a = [toRunNextFrame, toRun], toRun = _a[0], toRunNextFrame = _a[1];
            toRunNextFrame.length = 0;
            numToRun = toRun.length;
            if (numToRun) {
                for (var i = 0; i < numToRun; i++) {
                    var callback = toRun[i];
                    callback(frameData);
                    if (toKeepAlive.has(callback)) {
                        step.schedule(callback);
                        runNextFrame();
                    }
                }
            }
            isProcessing = false;
        },
    };
    return step;
}



;// CONCATENATED MODULE: ./node_modules/framesync/dist/es/index.js



var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var es_frame = {
    delta: 0,
    timestamp: 0
};
var stepsOrder = ["read", "update", "preRender", "render", "postRender"];
var steps = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = createRenderStep(function () {
        return runNextFrame = true;
    });
    return acc;
}, {});
var es_sync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    var step = steps[key];
    acc[key] = function (process, keepAlive, immediate) {
        if (keepAlive === void 0) {
            keepAlive = false;
        }
        if (immediate === void 0) {
            immediate = false;
        }
        if (!runNextFrame) startLoop();
        return step.schedule(process, keepAlive, immediate);
    };
    return acc;
}, {});
var es_cancelSync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = steps[key].cancel;
    return acc;
}, {});
var flushSync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = function () {
        return steps[key].process(es_frame);
    };
    return acc;
}, {});
var processStep = function (stepId) {
    return steps[stepId].process(es_frame);
};
var processFrame = function (timestamp) {
    runNextFrame = false;
    es_frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - es_frame.timestamp, maxElapsed), 1);
    es_frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (runNextFrame) {
        useDefaultElapsed = false;
        onNextFrame(processFrame);
    }
};
var startLoop = function () {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing) onNextFrame(processFrame);
};
var es_getFrameData = function () {
    return es_frame;
};

/* harmony default export */ const es = ((/* unused pure expression or super */ null && (es_sync)));


;// CONCATENATED MODULE: ./node_modules/@chakra-ui/utils/dist/chakra-ui-utils.esm.js




function getFirstItem(array) {
  return array != null && array.length ? array[0] : undefined;
}
function getLastItem(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}
function getPrevItem(index, array, loop) {
  if (loop === void 0) {
    loop = true;
  }

  var prevIndex = getPrevIndex(index, array.length, loop);
  return array[prevIndex];
}
function getNextItem(index, array, loop) {
  if (loop === void 0) {
    loop = true;
  }

  var nextIndex = getNextIndex(index, array.length, 1, loop);
  return array[nextIndex];
}
function removeIndex(array, index) {
  return array.filter(function (_, idx) {
    return idx !== index;
  });
}
function addItem(array, item) {
  return [].concat(array, [item]);
}
function removeItem(array, item) {
  return array.filter(function (eachItem) {
    return eachItem !== item;
  });
}
/**
 * Get the next index based on the current index and step.
 *
 * @param currentIndex the current index
 * @param length the total length or count of items
 * @param step the number of steps
 * @param loop whether to circle back once `currentIndex` is at the start/end
 */

function getNextIndex(currentIndex, length, step, loop) {
  if (step === void 0) {
    step = 1;
  }

  if (loop === void 0) {
    loop = true;
  }

  var lastIndex = length - 1;

  if (currentIndex === -1) {
    return step > 0 ? 0 : lastIndex;
  }

  var nextIndex = currentIndex + step;

  if (nextIndex < 0) {
    return loop ? lastIndex : 0;
  }

  if (nextIndex >= length) {
    if (loop) return 0;
    return currentIndex > length ? length : currentIndex;
  }

  return nextIndex;
}
/**
 * Get's the previous index based on the current index.
 * Mostly used for keyboard navigation.
 *
 * @param index - the current index
 * @param count - the length or total count of items in the array
 * @param loop - whether we should circle back to the
 * first/last once `currentIndex` is at the start/end
 */

function getPrevIndex(index, count, loop) {
  if (loop === void 0) {
    loop = true;
  }

  return getNextIndex(index, count, -1, loop);
}
/**
 * Converts an array into smaller chunks or groups.
 *
 * @param array the array to chunk into group
 * @param size the length of each chunk
 */

function chunk(array, size) {
  return array.reduce(function (rows, currentValue, index) {
    if (index % size === 0) {
      rows.push([currentValue]);
    } else {
      rows[rows.length - 1].push(currentValue);
    }

    return rows;
  }, []);
}
/**
 * Gets the next item based on a search string
 *
 * @param items array of items
 * @param searchString the search string
 * @param itemToString resolves an item to string
 * @param currentItem the current selected item
 */

function getNextItemFromSearch(items, searchString, itemToString, currentItem) {
  if (searchString == null) {
    return currentItem;
  } // If current item doesn't exist, find the item that matches the search string


  if (!currentItem) {
    var foundItem = items.find(function (item) {
      return itemToString(item).toLowerCase().startsWith(searchString.toLowerCase());
    });
    return foundItem;
  } // Filter items for ones that match the search string (case insensitive)


  var matchingItems = items.filter(function (item) {
    return itemToString(item).toLowerCase().startsWith(searchString.toLowerCase());
  }); // If there's a match, let's get the next item to select

  if (matchingItems.length > 0) {
    var nextIndex; // If the currentItem is in the available items, we move to the next available option

    if (matchingItems.includes(currentItem)) {
      var currentIndex = matchingItems.indexOf(currentItem);
      nextIndex = currentIndex + 1;

      if (nextIndex === matchingItems.length) {
        nextIndex = 0;
      }

      return matchingItems[nextIndex];
    } // Else, we pick the first item in the available items


    nextIndex = items.indexOf(matchingItems[0]);
    return items[nextIndex];
  } // a decent fallback to the currentItem


  return currentItem;
}

// Number assertions
function isNumber(value) {
  return typeof value === "number";
}
function isNotNumber(value) {
  return typeof value !== "number" || Number.isNaN(value) || !Number.isFinite(value);
}
function isNumeric(value) {
  return value != null && value - parseFloat(value) + 1 >= 0;
} // Array assertions

function isArray(value) {
  return Array.isArray(value);
}
function isEmptyArray(value) {
  return isArray(value) && value.length === 0;
} // Function assertions

function chakra_ui_utils_esm_isFunction(value) {
  return typeof value === "function";
} // Generic assertions

function isDefined(value) {
  return typeof value !== "undefined" && value !== undefined;
}
function isUndefined(value) {
  return typeof value === "undefined" || value === undefined;
} // Object assertions

function isObject(value) {
  var type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}
function isEmptyObject(value) {
  return isObject(value) && Object.keys(value).length === 0;
}
function isNotEmptyObject(value) {
  return value && !isEmptyObject(value);
}
function isNull(value) {
  return value == null;
} // String assertions

function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}
function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
} // Empty assertions

function isEmpty(value) {
  if (isArray(value)) return isEmptyArray(value);
  if (isObject(value)) return isEmptyObject(value);
  if (value == null || value === "") return true;
  return false;
}
var __DEV__ = "production" !== "production";
var __TEST__ = (/* unused pure expression or super */ null && ("production" === "test"));
function chakra_ui_utils_esm_isRefObject(val) {
  return "current" in val;
}
function isInputEvent(value) {
  return value && isObject(value) && isObject(value.target);
}

function chakra_ui_utils_esm_omit(object, keys) {
  var result = {};
  Object.keys(object).forEach(function (key) {
    if (keys.includes(key)) return;
    result[key] = object[key];
  });
  return result;
}
function chakra_ui_utils_esm_pick(object, keys) {
  var result = {};
  keys.forEach(function (key) {
    if (key in object) {
      result[key] = object[key];
    }
  });
  return result;
}
function split(object, keys) {
  var picked = {};
  var omitted = {};
  Object.keys(object).forEach(function (key) {
    if (keys.includes(key)) {
      picked[key] = object[key];
    } else {
      omitted[key] = object[key];
    }
  });
  return [picked, omitted];
}
/**
 * Get value from a deeply nested object using a string path.
 * Memoizes the value.
 * @param obj - the object
 * @param path - the string path
 * @param def  - the fallback value
 */

function get(obj, path, fallback, index) {
  var key = typeof path === "string" ? path.split(".") : [path];

  for (index = 0; index < key.length; index += 1) {
    if (!obj) break;
    obj = obj[key[index]];
  }

  return obj === undefined ? fallback : obj;
}
var memoize = function memoize(fn) {
  var cache = new WeakMap();

  var memoizedFn = function memoizedFn(obj, path, fallback, index) {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }

    if (!cache.has(obj)) {
      cache.set(obj, new Map());
    }

    var map = cache.get(obj);

    if (map.has(path)) {
      return map.get(path);
    }

    var value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };

  return memoizedFn;
};
var chakra_ui_utils_esm_memoizedGet = memoize(get);
/**
 * Get value from deeply nested object, based on path
 * It returns the path value if not found in object
 *
 * @param path - the string path or value
 * @param scale - the string path or value
 */

function getWithDefault(path, scale) {
  return chakra_ui_utils_esm_memoizedGet(scale, path, path);
}

/**
 * Returns the items of an object that meet the condition specified in a callback function.
 *
 * @param object the object to loop through
 * @param fn The filter function
 */
function objectFilter(object, fn) {
  var result = {};
  Object.keys(object).forEach(function (key) {
    var value = object[key];
    var shouldPass = fn(value, key, object);

    if (shouldPass) {
      result[key] = value;
    }
  });
  return result;
}
var chakra_ui_utils_esm_filterUndefined = function filterUndefined(object) {
  return objectFilter(object, function (val) {
    return val !== null && val !== undefined;
  });
};
var objectKeys = function objectKeys(obj) {
  return Object.keys(obj);
};
/**
 * Object.entries polyfill for Nodev10 compatibility
 */

var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (carry, _ref) {
    var key = _ref[0],
        value = _ref[1];
    carry[key] = value;
    return carry;
  }, {});
};
/**
 * Get the CSS variable ref stored in the theme
 */

var getCSSVar = function getCSSVar(theme, scale, value) {
  var _theme$__cssMap$$varR, _theme$__cssMap$;

  return (_theme$__cssMap$$varR = (_theme$__cssMap$ = theme.__cssMap[scale + "." + value]) == null ? void 0 : _theme$__cssMap$.varRef) != null ? _theme$__cssMap$$varR : value;
};

function analyzeCSSValue(value) {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit: unit
  };
}

function px(value) {
  if (value == null) return value;

  var _analyzeCSSValue = analyzeCSSValue(value),
      unitless = _analyzeCSSValue.unitless;

  return unitless || isNumber(value) ? value + "px" : value;
}

var sortByBreakpointValue = function sortByBreakpointValue(a, b) {
  return parseInt(a[1], 10) > parseInt(b[1], 10) ? 1 : -1;
};

var sortBps = function sortBps(breakpoints) {
  return fromEntries(Object.entries(breakpoints).sort(sortByBreakpointValue));
};

function normalize(breakpoints) {
  var sorted = sortBps(breakpoints);
  return Object.assign(Object.values(sorted), sorted);
}

function keys(breakpoints) {
  var value = Object.keys(sortBps(breakpoints));
  return new Set(value);
}

function subtract(value) {
  var _px;

  if (!value) return value;
  value = (_px = px(value)) != null ? _px : value;
  var factor = value.endsWith("px") ? -1 : // the equivalent of 1px in em using a 16px base
  -0.0635;
  return isNumber(value) ? "" + (value + factor) : value.replace(/([0-9]+\.?[0-9]*)/, function (m) {
    return "" + (parseFloat(m) + factor);
  });
}

function queryString(min, max) {
  var query = [];
  if (min) query.push("@media screen and (min-width: " + px(min) + ")");
  if (query.length > 0 && max) query.push("and");
  if (max) query.push("@media screen and (max-width: " + px(max) + ")");
  return query.join(" ");
}

function chakra_ui_utils_esm_analyzeBreakpoints(breakpoints) {
  var _breakpoints$base;

  if (!breakpoints) return null;
  breakpoints.base = (_breakpoints$base = breakpoints.base) != null ? _breakpoints$base : "0px";
  var normalized = normalize(breakpoints);
  var queries = Object.entries(breakpoints).sort(sortByBreakpointValue).map(function (_ref, index, entry) {
    var _entry;

    var breakpoint = _ref[0],
        minW = _ref[1];

    var _ref2 = (_entry = entry[index + 1]) != null ? _entry : [],
        maxW = _ref2[1];

    maxW = parseFloat(maxW) > 0 ? subtract(maxW) : undefined;
    return {
      breakpoint: breakpoint,
      minW: minW,
      maxW: maxW,
      maxWQuery: queryString(null, maxW),
      minWQuery: queryString(minW),
      minMaxQuery: queryString(minW, maxW)
    };
  });

  var _keys = keys(breakpoints);

  var _keysArr = Array.from(_keys.values());

  return {
    keys: _keys,
    normalized: normalized,
    isResponsive: function isResponsive(test) {
      var keys = Object.keys(test);
      return keys.length > 0 && keys.every(function (key) {
        return _keys.has(key);
      });
    },
    asObject: sortBps(breakpoints),
    asArray: normalize(breakpoints),
    details: queries,
    media: [null].concat(normalized.map(function (minW) {
      return queryString(minW);
    }).slice(1)),
    toArrayValue: function toArrayValue(test) {
      if (!isObject(test)) {
        throw new Error("toArrayValue: value must be an object");
      }

      var result = _keysArr.map(function (bp) {
        var _test$bp;

        return (_test$bp = test[bp]) != null ? _test$bp : null;
      });

      while (getLastItem(result) === null) {
        result.pop();
      }

      return result;
    },
    toObjectValue: function toObjectValue(test) {
      if (!Array.isArray(test)) {
        throw new Error("toObjectValue: value must be an array");
      }

      return test.reduce(function (acc, value, index) {
        var key = _keysArr[index];
        if (key != null && value != null) acc[key] = value;
        return acc;
      }, {});
    }
  };
}

function isElement(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
function isHTMLElement(el) {
  var _el$ownerDocument$def;

  if (!isElement(el)) {
    return false;
  }

  var win = (_el$ownerDocument$def = el.ownerDocument.defaultView) != null ? _el$ownerDocument$def : window;
  return el instanceof win.HTMLElement;
}
function getOwnerWindow(node) {
  var _getOwnerDocument$def, _getOwnerDocument;

  return isElement(node) ? (_getOwnerDocument$def = (_getOwnerDocument = chakra_ui_utils_esm_getOwnerDocument(node)) == null ? void 0 : _getOwnerDocument.defaultView) != null ? _getOwnerDocument$def : window : window;
}
function chakra_ui_utils_esm_getOwnerDocument(node) {
  var _node$ownerDocument;

  return isElement(node) ? (_node$ownerDocument = node.ownerDocument) != null ? _node$ownerDocument : document : document;
}
function getEventWindow(event) {
  var _view;

  return (_view = event.view) != null ? _view : window;
}
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var isBrowser = canUseDOM();
var dataAttr = function dataAttr(condition) {
  return condition ? "" : undefined;
};
var ariaAttr = function ariaAttr(condition) {
  return condition ? true : undefined;
};
var cx = function cx() {
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  return classNames.filter(Boolean).join(" ");
};
function chakra_ui_utils_esm_getActiveElement(node) {
  var doc = chakra_ui_utils_esm_getOwnerDocument(node);
  return doc == null ? void 0 : doc.activeElement;
}
function chakra_ui_utils_esm_contains(parent, child) {
  if (!parent) return false;
  return parent === child || parent.contains(child);
}
function addDomEvent(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
  return function () {
    target.removeEventListener(eventName, handler, options);
  };
}
/**
 * Get the normalized event key across all browsers
 * @param event keyboard event
 */

function normalizeEventKey(event) {
  var key = event.key,
      keyCode = event.keyCode;
  var isArrowKey = keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0;
  var eventKey = isArrowKey ? "Arrow" + key : key;
  return eventKey;
}
function getRelatedTarget(event) {
  var _event$target, _event$relatedTarget;

  var target = (_event$target = event.target) != null ? _event$target : event.currentTarget;
  var activeElement = chakra_ui_utils_esm_getActiveElement(target);
  return (_event$relatedTarget = event.relatedTarget) != null ? _event$relatedTarget : activeElement;
}
function isRightClick(event) {
  return event.button !== 0;
}

// Really great work done by Diego Haz on this one
var hasDisplayNone = function hasDisplayNone(element) {
  return window.getComputedStyle(element).display === "none";
};
var hasTabIndex = function hasTabIndex(element) {
  return element.hasAttribute("tabindex");
};
var hasNegativeTabIndex = function hasNegativeTabIndex(element) {
  return hasTabIndex(element) && element.tabIndex === -1;
};
function isDisabled(element) {
  return Boolean(element.getAttribute("disabled")) === true || Boolean(element.getAttribute("aria-disabled")) === true;
}
function isInputElement(element) {
  return isHTMLElement(element) && element.tagName.toLowerCase() === "input" && "select" in element;
}
function chakra_ui_utils_esm_isActiveElement(element) {
  var doc = isHTMLElement(element) ? chakra_ui_utils_esm_getOwnerDocument(element) : document;
  return doc.activeElement === element;
}
function chakra_ui_utils_esm_hasFocusWithin(element) {
  if (!document.activeElement) return false;
  return element.contains(document.activeElement);
}
function isHidden(element) {
  if (element.parentElement && isHidden(element.parentElement)) return true;
  return element.hidden;
}
function isContentEditable(element) {
  var value = element.getAttribute("contenteditable");
  return value !== "false" && value != null;
}
function isFocusable(element) {
  if (!isHTMLElement(element) || isHidden(element) || isDisabled(element)) {
    return false;
  }

  var localName = element.localName;
  var focusableTags = ["input", "select", "textarea", "button"];
  if (focusableTags.indexOf(localName) >= 0) return true;
  var others = {
    a: function a() {
      return element.hasAttribute("href");
    },
    audio: function audio() {
      return element.hasAttribute("controls");
    },
    video: function video() {
      return element.hasAttribute("controls");
    }
  };

  if (localName in others) {
    return others[localName]();
  }

  if (isContentEditable(element)) return true;
  return hasTabIndex(element);
}
function chakra_ui_utils_esm_isTabbable(element) {
  if (!element) return false;
  return isHTMLElement(element) && isFocusable(element) && !hasNegativeTabIndex(element);
}

var focusableElList = ["input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "embed", "iframe", "object", "a[href]", "area[href]", "button:not([disabled])", "[tabindex]", "audio[controls]", "video[controls]", "*[tabindex]:not([aria-disabled])", "*[contenteditable]"];
var focusableElSelector = focusableElList.join();
function chakra_ui_utils_esm_getAllFocusable(container) {
  var focusableEls = Array.from(container.querySelectorAll(focusableElSelector));
  focusableEls.unshift(container);
  return focusableEls.filter(isFocusable).filter(function (el) {
    return window.getComputedStyle(el).display !== "none";
  });
}
function getFirstFocusable(container) {
  var allFocusable = chakra_ui_utils_esm_getAllFocusable(container);
  return allFocusable.length ? allFocusable[0] : null;
}
function getAllTabbable(container, fallbackToFocusable) {
  var allFocusable = Array.from(container.querySelectorAll(focusableElSelector));
  var allTabbable = allFocusable.filter(chakra_ui_utils_esm_isTabbable);

  if (chakra_ui_utils_esm_isTabbable(container)) {
    allTabbable.unshift(container);
  }

  if (!allTabbable.length && fallbackToFocusable) {
    return allFocusable;
  }

  return allTabbable;
}
function getFirstTabbableIn(container, fallbackToFocusable) {
  var _getAllTabbable = getAllTabbable(container, fallbackToFocusable),
      first = _getAllTabbable[0];

  return first || null;
}
function getLastTabbableIn(container, fallbackToFocusable) {
  var allTabbable = getAllTabbable(container, fallbackToFocusable);
  return allTabbable[allTabbable.length - 1] || null;
}
function getNextTabbable(container, fallbackToFocusable) {
  var allFocusable = chakra_ui_utils_esm_getAllFocusable(container);
  var index = allFocusable.indexOf(document.activeElement);
  var slice = allFocusable.slice(index + 1);
  return slice.find(chakra_ui_utils_esm_isTabbable) || allFocusable.find(chakra_ui_utils_esm_isTabbable) || (fallbackToFocusable ? slice[0] : null);
}
function getPreviousTabbable(container, fallbackToFocusable) {
  var allFocusable = chakra_ui_utils_esm_getAllFocusable(container).reverse();
  var index = allFocusable.indexOf(document.activeElement);
  var slice = allFocusable.slice(index + 1);
  return slice.find(chakra_ui_utils_esm_isTabbable) || allFocusable.find(chakra_ui_utils_esm_isTabbable) || (fallbackToFocusable ? slice[0] : null);
}
function focusNextTabbable(container, fallbackToFocusable) {
  var nextTabbable = getNextTabbable(container, fallbackToFocusable);

  if (nextTabbable && isHTMLElement(nextTabbable)) {
    nextTabbable.focus();
  }
}
function focusPreviousTabbable(container, fallbackToFocusable) {
  var previousTabbable = getPreviousTabbable(container, fallbackToFocusable);

  if (previousTabbable && isHTMLElement(previousTabbable)) {
    previousTabbable.focus();
  }
}

function matches(element, selectors) {
  if ("matches" in element) return element.matches(selectors);
  if ("msMatchesSelector" in element) return element.msMatchesSelector(selectors);
  return element.webkitMatchesSelector(selectors);
}

function closest(element, selectors) {
  if ("closest" in element) return element.closest(selectors);

  do {
    if (matches(element, selectors)) return element;
    element = element.parentElement || element.parentNode;
  } while (element !== null && element.nodeType === 1);

  return null;
}

function chakra_ui_utils_esm_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function chakra_ui_utils_esm_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return chakra_ui_utils_esm_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return chakra_ui_utils_esm_arrayLikeToArray(o, minLen);
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = chakra_ui_utils_esm_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/* eslint-disable no-nested-ternary */
function chakra_ui_utils_esm_runIfFn(valueOrFn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return chakra_ui_utils_esm_isFunction(valueOrFn) ? valueOrFn.apply(void 0, args) : valueOrFn;
}
function chakra_ui_utils_esm_callAllHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function func(event) {
    fns.some(function (fn) {
      fn == null ? void 0 : fn(event);
      return event == null ? void 0 : event.defaultPrevented;
    });
  };
}
function callAll() {
  for (var _len3 = arguments.length, fns = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    fns[_key3] = arguments[_key3];
  }

  return function mergedFn(arg) {
    fns.forEach(function (fn) {
      fn == null ? void 0 : fn(arg);
    });
  };
}
var compose = function compose(fn1) {
  for (var _len4 = arguments.length, fns = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    fns[_key4 - 1] = arguments[_key4];
  }

  return fns.reduce(function (f1, f2) {
    return function () {
      return f1(f2.apply(void 0, arguments));
    };
  }, fn1);
};
function once(fn) {
  var result;
  return function func() {
    if (fn) {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      result = fn.apply(this, args);
      fn = null;
    }

    return result;
  };
}
var chakra_ui_utils_esm_noop = function noop() {};
var warn = once(function (options) {
  return function () {
    var condition = options.condition,
        message = options.message;

    if (condition && __DEV__) {
      console.warn(message);
    }
  };
});
var error = once(function (options) {
  return function () {
    var condition = options.condition,
        message = options.message;

    if (condition && __DEV__) {
      console.error(message);
    }
  };
});
var pipe = function pipe() {
  for (var _len6 = arguments.length, fns = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    fns[_key6] = arguments[_key6];
  }

  return function (v) {
    return fns.reduce(function (a, b) {
      return b(a);
    }, v);
  };
};

var distance1D = function distance1D(a, b) {
  return Math.abs(a - b);
};

var isPoint = function isPoint(point) {
  return "x" in point && "y" in point;
};

function distance(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return distance1D(a, b);
  }

  if (isPoint(a) && isPoint(b)) {
    var xDelta = distance1D(a.x, b.x);
    var yDelta = distance1D(a.y, b.y);
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2));
  }

  return 0;
}

function chakra_ui_utils_esm_focus(element, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$isActive = _options.isActive,
      isActive = _options$isActive === void 0 ? chakra_ui_utils_esm_isActiveElement : _options$isActive,
      nextTick = _options.nextTick,
      _options$preventScrol = _options.preventScroll,
      preventScroll = _options$preventScrol === void 0 ? true : _options$preventScrol,
      _options$selectTextIf = _options.selectTextIfInput,
      selectTextIfInput = _options$selectTextIf === void 0 ? true : _options$selectTextIf;
  if (!element || isActive(element)) return -1;

  function triggerFocus() {
    if (!element) {
      warn({
        condition: true,
        message: "[chakra-ui]: can't call focus() on `null` or `undefined` element"
      });
      return;
    }

    if (supportsPreventScroll()) {
      element.focus({
        preventScroll: preventScroll
      });
    } else {
      element.focus();

      if (preventScroll) {
        var scrollableElements = getScrollableElements(element);
        restoreScrollPosition(scrollableElements);
      }
    }

    if (isInputElement(element) && selectTextIfInput) {
      element.select();
    }
  }

  if (nextTick) {
    return requestAnimationFrame(triggerFocus);
  }

  triggerFocus();
  return -1;
}
var supportsPreventScrollCached = null;

function supportsPreventScroll() {
  if (supportsPreventScrollCached == null) {
    supportsPreventScrollCached = false;

    try {
      var div = document.createElement("div");
      div.focus({
        get preventScroll() {
          supportsPreventScrollCached = true;
          return true;
        }

      });
    } catch (e) {// Ignore
    }
  }

  return supportsPreventScrollCached;
}

function getScrollableElements(element) {
  var _doc$defaultView;

  var doc = chakra_ui_utils_esm_getOwnerDocument(element);
  var win = (_doc$defaultView = doc.defaultView) != null ? _doc$defaultView : window;
  var parent = element.parentNode;
  var scrollableElements = [];
  var rootScrollingElement = doc.scrollingElement || doc.documentElement;

  while (parent instanceof win.HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    }

    parent = parent.parentNode;
  }

  if (rootScrollingElement instanceof win.HTMLElement) {
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  }

  return scrollableElements;
}

function restoreScrollPosition(scrollableElements) {
  for (var _iterator = _createForOfIteratorHelperLoose(scrollableElements), _step; !(_step = _iterator()).done;) {
    var _step$value = _step.value,
        element = _step$value.element,
        scrollTop = _step$value.scrollTop,
        scrollLeft = _step$value.scrollLeft;
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

/**
 * Determines whether the children of a disclosure widget
 * should be rendered or not, depending on the lazy behavior.
 *
 * Used in accordion, tabs, popover, menu and other disclosure
 * widgets.
 */
function determineLazyBehavior(options) {
  var hasBeenSelected = options.hasBeenSelected,
      isLazy = options.isLazy,
      isSelected = options.isSelected,
      _options$lazyBehavior = options.lazyBehavior,
      lazyBehavior = _options$lazyBehavior === void 0 ? "unmount" : _options$lazyBehavior; // if not lazy, always render the disclosure's content

  if (!isLazy) return true; // if the diclosure is selected, render the disclosure's content

  if (isSelected) return true; // if the disclosure was selected but not active, keep its content active

  if (lazyBehavior === "keepMounted" && hasBeenSelected) return true;
  return false;
}

var minSafeInteger = Number.MIN_SAFE_INTEGER || -9007199254740991;
var maxSafeInteger = Number.MAX_SAFE_INTEGER || 9007199254740991;

function toNumber(value) {
  var num = parseFloat(value);
  return isNotNumber(num) ? 0 : num;
}
/**
 * Converts a value to a specific precision (or decimal points).
 *
 * Returns a string representing a number in fixed-point notation.
 *
 * @param value the value to convert
 * @param precision the precision or decimal points
 */


function toPrecision(value, precision) {
  var nextValue = toNumber(value);
  var scaleFactor = Math.pow(10, precision != null ? precision : 10);
  nextValue = Math.round(nextValue * scaleFactor) / scaleFactor;
  return precision ? nextValue.toFixed(precision) : nextValue.toString();
}
/**
 * Counts the number of decimal places a number has
 *
 * @param value the decimal value to count
 */

function countDecimalPlaces(value) {
  if (!Number.isFinite(value)) return 0;
  var e = 1;
  var p = 0;

  while (Math.round(value * e) / e !== value) {
    e *= 10;
    p += 1;
  }

  return p;
}
/**
 * Convert a value to percentage based on lower and upper bound values
 *
 * @param value the value in number
 * @param min the minimum value
 * @param max the maximum value
 */

function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
/**
 * Calculate the value based on percentage, lower and upper bound values
 *
 * @param percent the percent value in decimals (e.g 0.6, 0.3)
 * @param min the minimum value
 * @param max the maximum value
 */

function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
/**
 * Rounds a specific value to the next or previous step
 *
 * @param value the value to round
 * @param from the number that stepping started from
 * @param step the specified step
 */

function roundValueToStep(value, from, step) {
  var nextValue = Math.round((value - from) / step) * step + from;
  var precision = countDecimalPlaces(step);
  return toPrecision(nextValue, precision);
}
/**
 * Clamps a value to ensure it stays within the min and max range.
 *
 * @param value the value to clamp
 * @param min the minimum value
 * @param max the maximum value
 */

function clampValue(value, min, max) {
  if (value == null) return value;
  warn({
    condition: max < min,
    message: "clamp: max cannot be less than min"
  });
  return Math.min(Math.max(value, min), max);
}

function chakra_ui_utils_esm_extends() {
  chakra_ui_utils_esm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return chakra_ui_utils_esm_extends.apply(this, arguments);
}

/**
 * Credit goes to `framer-motion` of this useful utilities.
 * License can be found here: https://github.com/framer/motion
 */
function isMouseEvent(event) {
  var win = getEventWindow(event); // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.

  if (typeof win.PointerEvent !== "undefined" && event instanceof win.PointerEvent) {
    return !!(event.pointerType === "mouse");
  }

  return event instanceof win.MouseEvent;
}
function isTouchEvent(event) {
  var hasTouches = !!event.touches;
  return hasTouches;
}

/**
 * Filters out events not attached to the primary pointer (currently left mouse button)
 * @param eventHandler
 */
function filterPrimaryPointer(eventHandler) {
  return function (event) {
    var win = getEventWindow(event);
    var isMouseEvent = event instanceof win.MouseEvent;
    var isPrimaryPointer = !isMouseEvent || isMouseEvent && event.button === 0;

    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}

var defaultPagePoint = {
  pageX: 0,
  pageY: 0
};

function pointFromTouch(e, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }

  var primaryTouch = e.touches[0] || e.changedTouches[0];
  var point = primaryTouch || defaultPagePoint;
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}

function pointFromMouse(point, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }

  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}

function extractEventInfo(event, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }

  return {
    point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
  };
}
function getViewportPointFromEvent(event) {
  return extractEventInfo(event, "client");
}
var chakra_ui_utils_esm_wrapPointerEventHandler = function wrapPointerEventHandler(handler, shouldFilterPrimaryPointer) {
  if (shouldFilterPrimaryPointer === void 0) {
    shouldFilterPrimaryPointer = false;
  }

  var listener = function listener(event) {
    return handler(event, extractEventInfo(event));
  };

  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
}; // We check for event support via functions in case they've been mocked by a testing suite.

var supportsPointerEvents = function supportsPointerEvents() {
  return isBrowser && window.onpointerdown === null;
};

var supportsTouchEvents = function supportsTouchEvents() {
  return isBrowser && window.ontouchstart === null;
};

var supportsMouseEvents = function supportsMouseEvents() {
  return isBrowser && window.onmousedown === null;
};

var mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
var touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function chakra_ui_utils_esm_getPointerEventName(name) {
  if (supportsPointerEvents()) {
    return name;
  }

  if (supportsTouchEvents()) {
    return touchEventNames[name];
  }

  if (supportsMouseEvents()) {
    return mouseEventNames[name];
  }

  return name;
}
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, chakra_ui_utils_esm_getPointerEventName(eventName), chakra_ui_utils_esm_wrapPointerEventHandler(handler, eventName === "pointerdown"), options);
}
function isMultiTouchEvent(event) {
  return isTouchEvent(event) && event.touches.length > 1;
}

/**
 * The event information passed to pan event handlers like `onPan`, `onPanStart`.
 *
 * It contains information about the current state of the tap gesture such as its
 * `point`, `delta`, and `offset`
 */

/**
 * @internal
 *
 * A Pan Session is recognized when the pointer is down
 * and moved in the allowed direction.
 */
var chakra_ui_utils_esm_PanSession = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  /**
   * We use this to keep track of the `x` and `y` pan session history
   * as the pan event happens. It helps to calculate the `offset` and `delta`
   */
  // The pointer event that started the pan session
  // The current pointer event for the pan session
  // The current pointer event info for the pan session

  /**
   * Minimal pan distance required before recognizing the pan.
   * @default "3px"
   */
  function PanSession(_event, handlers, threshold) {
    var _this = this;

    this.history = [];
    this.startEvent = null;
    this.lastEvent = null;
    this.lastEventInfo = null;
    this.handlers = {};
    this.removeListeners = chakra_ui_utils_esm_noop;
    this.threshold = 3;
    this.win = void 0;

    this.updatePoint = function () {
      if (!(_this.lastEvent && _this.lastEventInfo)) return;
      var info = getPanInfo(_this.lastEventInfo, _this.history);
      var isPanStarted = _this.startEvent !== null;

      var isDistancePastThreshold = distance(info.offset, {
        x: 0,
        y: 0
      }) >= _this.threshold;

      if (!isPanStarted && !isDistancePastThreshold) return;

      var _getFrameData = getFrameData(),
          timestamp = _getFrameData.timestamp;

      _this.history.push(chakra_ui_utils_esm_extends({}, info.point, {
        timestamp: timestamp
      }));

      var _this$handlers = _this.handlers,
          onStart = _this$handlers.onStart,
          onMove = _this$handlers.onMove;

      if (!isPanStarted) {
        onStart == null ? void 0 : onStart(_this.lastEvent, info);
        _this.startEvent = _this.lastEvent;
      }

      onMove == null ? void 0 : onMove(_this.lastEvent, info);
    };

    this.onPointerMove = function (event, info) {
      _this.lastEvent = event;
      _this.lastEventInfo = info; // Because Safari doesn't trigger mouseup events when it's above a `<select>`

      if (isMouseEvent(event) && event.buttons === 0) {
        _this.onPointerUp(event, info);

        return;
      } // Throttle mouse move event to once per frame


      sync.update(_this.updatePoint, true);
    };

    this.onPointerUp = function (event, info) {
      // notify pan session ended
      var panInfo = getPanInfo(info, _this.history);
      var _this$handlers2 = _this.handlers,
          onEnd = _this$handlers2.onEnd,
          onSessionEnd = _this$handlers2.onSessionEnd;
      onSessionEnd == null ? void 0 : onSessionEnd(event, panInfo);

      _this.end(); // if panning never started, no need to call `onEnd`
      // panning requires a pointermove of at least 3px


      if (!onEnd || !_this.startEvent) return;
      onEnd == null ? void 0 : onEnd(event, panInfo);
    };

    this.win = getEventWindow(_event); // If we have more than one touch, don't start detecting this gesture

    if (isMultiTouchEvent(_event)) return;
    this.handlers = handlers;

    if (threshold) {
      this.threshold = threshold;
    } // stop default browser behavior


    _event.stopPropagation();

    _event.preventDefault(); // get and save the `pointerdown` event info in history
    // we'll use it to compute the `offset`


    var _info = extractEventInfo(_event);

    var _getFrameData2 = getFrameData(),
        _timestamp = _getFrameData2.timestamp;

    this.history = [chakra_ui_utils_esm_extends({}, _info.point, {
      timestamp: _timestamp
    })]; // notify pan session start

    var onSessionStart = handlers.onSessionStart;
    onSessionStart == null ? void 0 : onSessionStart(_event, getPanInfo(_info, this.history)); // attach event listeners and return a single function to remove them all

    this.removeListeners = pipe(addPointerEvent(this.win, "pointermove", this.onPointerMove), addPointerEvent(this.win, "pointerup", this.onPointerUp), addPointerEvent(this.win, "pointercancel", this.onPointerUp));
  }

  var _proto = PanSession.prototype;

  _proto.updateHandlers = function updateHandlers(handlers) {
    this.handlers = handlers;
  };

  _proto.end = function end() {
    var _this$removeListeners;

    (_this$removeListeners = this.removeListeners) == null ? void 0 : _this$removeListeners.call(this);
    cancelSync.update(this.updatePoint);
  };

  return PanSession;
}()));

function subtractPoint(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}

function startPanPoint(history) {
  return history[0];
}

function lastPanPoint(history) {
  return history[history.length - 1];
}

function getPanInfo(info, history) {
  return {
    point: info.point,
    delta: subtractPoint(info.point, lastPanPoint(history)),
    offset: subtractPoint(info.point, startPanPoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}

function lastDevicePoint(history) {
  return history[history.length - 1];
}

var toMilliseconds = function toMilliseconds(seconds) {
  return seconds * 1000;
};

function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return {
      x: 0,
      y: 0
    };
  }

  var i = history.length - 1;
  var timestampedPoint = null;
  var lastPoint = lastDevicePoint(history);

  while (i >= 0) {
    timestampedPoint = history[i];

    if (lastPoint.timestamp - timestampedPoint.timestamp > toMilliseconds(timeDelta)) {
      break;
    }

    i--;
  }

  if (!timestampedPoint) {
    return {
      x: 0,
      y: 0
    };
  }

  var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;

  if (time === 0) {
    return {
      x: 0,
      y: 0
    };
  }

  var currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };

  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }

  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }

  return currentVelocity;
}

var breakpoints = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
function mapResponsive(prop, mapper) {
  if (isArray(prop)) {
    return prop.map(function (item) {
      if (item === null) {
        return null;
      }

      return mapper(item);
    });
  }

  if (isObject(prop)) {
    return objectKeys(prop).reduce(function (result, key) {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }

  if (prop != null) {
    return mapper(prop);
  }

  return null;
}
function objectToArrayNotation(obj, bps) {
  if (bps === void 0) {
    bps = breakpoints;
  }

  var result = bps.map(function (br) {
    var _obj$br;

    return (_obj$br = obj[br]) != null ? _obj$br : null;
  });

  while (getLastItem(result) === null) {
    result.pop();
  }

  return result;
}
function arrayToObjectNotation(values, bps) {
  if (bps === void 0) {
    bps = breakpoints;
  }

  var result = {};
  values.forEach(function (value, index) {
    var key = bps[index];
    if (value == null) return;
    result[key] = value;
  });
  return result;
}
function isResponsiveObjectLike(obj, bps) {
  if (bps === void 0) {
    bps = breakpoints;
  }

  var keys = Object.keys(obj);
  return keys.length > 0 && keys.every(function (key) {
    return bps.includes(key);
  });
}
/**
 * since breakpoints are defined as custom properties on an array, you may
 * `Object.keys(theme.breakpoints)` to retrieve both regular numeric indices
 * and custom breakpoints as string.
 *
 * This function returns true given a custom array property.
 */

var isCustomBreakpoint = function isCustomBreakpoint(maybeBreakpoint) {
  return Number.isNaN(Number(maybeBreakpoint));
};

function getUserAgentBrowser(navigator) {
  var ua = navigator.userAgent,
      vendor = navigator.vendor;
  var android = /(android)/i.test(ua);

  switch (true) {
    case /CriOS/.test(ua):
      return "Chrome for iOS";

    case /Edg\//.test(ua):
      return "Edge";

    case android && /Silk\//.test(ua):
      return "Silk";

    case /Chrome/.test(ua) && /Google Inc/.test(vendor):
      return "Chrome";

    case /Firefox\/\d+\.\d+$/.test(ua):
      return "Firefox";

    case android:
      return "AOSP";

    case /MSIE|Trident/.test(ua):
      return "IE";

    case /Safari/.test(navigator.userAgent) && /Apple Computer/.test(ua):
      return "Safari";

    case /AppleWebKit/.test(ua):
      return "WebKit";

    default:
      return null;
  }
}

function getUserAgentOS(navigator) {
  var ua = navigator.userAgent,
      platform = navigator.platform;

  switch (true) {
    case /Android/.test(ua):
      return "Android";

    case /iPhone|iPad|iPod/.test(platform):
      return "iOS";

    case /Win/.test(platform):
      return "Windows";

    case /Mac/.test(platform):
      return "Mac";

    case /CrOS/.test(ua):
      return "Chrome OS";

    case /Firefox/.test(ua):
      return "Firefox OS";

    default:
      return null;
  }
}

function detectDeviceType(navigator) {
  var ua = navigator.userAgent;
  if (/(tablet)|(iPad)|(Nexus 9)/i.test(ua)) return "tablet";
  if (/(mobi)/i.test(ua)) return "phone";
  return "desktop";
}
function detectOS(os) {
  if (!isBrowser) return false;
  return getUserAgentOS(window.navigator) === os;
}
function chakra_ui_utils_esm_detectBrowser(browser) {
  if (!isBrowser) return false;
  return getUserAgentBrowser(window.navigator) === browser;
}
function detectTouch() {
  if (!isBrowser) return false;
  return window.ontouchstart === null && window.ontouchmove === null && window.ontouchend === null;
}

function chakra_ui_utils_esm_walkObject(target, predicate) {
  function inner(value, path) {
    if (path === void 0) {
      path = [];
    }

    if (isArray(value)) {
      return value.map(function (item, index) {
        return inner(item, [].concat(path, [String(index)]));
      });
    }

    if (isObject(value)) {
      return fromEntries(Object.entries(value).map(function (_ref) {
        var key = _ref[0],
            child = _ref[1];
        return [key, inner(child, [].concat(path, [key]))];
      }));
    }

    return predicate(value, path);
  }

  return inner(target);
}



;// CONCATENATED MODULE: ./node_modules/@chakra-ui/styled-system/dist/chakra-ui-styled-system.esm.js


function chakra_ui_styled_system_esm_extends() {
  chakra_ui_styled_system_esm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return chakra_ui_styled_system_esm_extends.apply(this, arguments);
}

var tokenToCSSVar = function tokenToCSSVar(scale, value) {
  return function (theme) {
    var valueStr = String(value);
    var key = scale ? scale + "." + valueStr : valueStr;
    return isObject(theme.__cssMap) && key in theme.__cssMap ? theme.__cssMap[key].varRef : value;
  };
};
function createTransform(options) {
  var scale = options.scale,
      transform = options.transform,
      compose = options.compose;

  var fn = function fn(value, theme) {
    var _transform;

    var _value = tokenToCSSVar(scale, value)(theme);

    var result = (_transform = transform == null ? void 0 : transform(_value, theme)) != null ? _transform : _value;

    if (compose) {
      result = compose(result, theme);
    }

    return result;
  };

  return fn;
}

function toConfig(scale, transform) {
  return function (property) {
    var result = {
      property: property,
      scale: scale
    };
    result.transform = createTransform({
      scale: scale,
      transform: transform
    });
    return result;
  };
}

var getRtl = function getRtl(_ref) {
  var rtl = _ref.rtl,
      ltr = _ref.ltr;
  return function (theme) {
    return theme.direction === "rtl" ? rtl : ltr;
  };
};

function logical(options) {
  var property = options.property,
      scale = options.scale,
      transform = options.transform;
  return {
    scale: scale,
    property: getRtl(property),
    transform: scale ? createTransform({
      scale: scale,
      compose: transform
    }) : transform
  };
}

var _spaceXTemplate, _spaceYTemplate;

/**
 * The CSS transform order following the upcoming spec from CSSWG
 * translate => rotate => scale => skew
 * @see https://drafts.csswg.org/css-transforms-2/#ctm
 * @see https://www.stefanjudis.com/blog/order-in-css-transformation-transform-functions-vs-individual-transforms/
 */
var transformTemplate = ["rotate(var(--chakra-rotate, 0))", "scaleX(var(--chakra-scale-x, 1))", "scaleY(var(--chakra-scale-y, 1))", "skewX(var(--chakra-skew-x, 0))", "skewY(var(--chakra-skew-y, 0))"];
function getTransformTemplate() {
  return ["translateX(var(--chakra-translate-x, 0))", "translateY(var(--chakra-translate-y, 0))"].concat(transformTemplate).join(" ");
}
function getTransformGpuTemplate() {
  return ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)"].concat(transformTemplate).join(" ");
}
var filterTemplate = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: ["var(--chakra-blur)", "var(--chakra-brightness)", "var(--chakra-contrast)", "var(--chakra-grayscale)", "var(--chakra-hue-rotate)", "var(--chakra-invert)", "var(--chakra-saturate)", "var(--chakra-sepia)", "var(--chakra-drop-shadow)"].join(" ")
};
var backdropFilterTemplate = {
  backdropFilter: ["var(--chakra-backdrop-blur)", "var(--chakra-backdrop-brightness)", "var(--chakra-backdrop-contrast)", "var(--chakra-backdrop-grayscale)", "var(--chakra-backdrop-hue-rotate)", "var(--chakra-backdrop-invert)", "var(--chakra-backdrop-opacity)", "var(--chakra-backdrop-saturate)", "var(--chakra-backdrop-sepia)"].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function getRingTemplate(value) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": value,
    boxShadow: ["var(--chakra-ring-offset-shadow)", "var(--chakra-ring-shadow)", "var(--chakra-shadow, 0 0 #0000)"].join(", ")
  };
}
var flexDirectionTemplate = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
};
var owlSelector = "& > :not(style) ~ :not(style)";
var spaceXTemplate = (_spaceXTemplate = {}, _spaceXTemplate[owlSelector] = {
  marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
  marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
}, _spaceXTemplate);
var spaceYTemplate = (_spaceYTemplate = {}, _spaceYTemplate[owlSelector] = {
  marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
  marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
}, _spaceYTemplate);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _wrapRegExp() {
  _wrapRegExp = function (re, groups) {
    return new BabelRegExp(re, undefined, groups);
  };

  var _super = RegExp.prototype;

  var _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);

    _groups.set(_this, groups || _groups.get(re));

    return _setPrototypeOf(_this, BabelRegExp.prototype);
  }

  _inherits(BabelRegExp, RegExp);

  BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    if (result) result.groups = buildGroups(result, this);
    return result;
  };

  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if (typeof substitution === "string") {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    } else if (typeof substitution === "function") {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;

        if (typeof args[args.length - 1] !== "object") {
          args = [].slice.call(args);
          args.push(buildGroups(args, _this));
        }

        return substitution.apply(this, args);
      });
    } else {
      return _super[Symbol.replace].call(this, str, substitution);
    }
  };

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      groups[name] = result[g[name]];
      return groups;
    }, Object.create(null));
  }

  return _wrapRegExp.apply(this, arguments);
}

var directionMap = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
};
var valueSet = new Set(Object.values(directionMap));
var globalSet = new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"]);

var trimSpace = function trimSpace(str) {
  return str.trim();
};

function parseGradient(value, theme) {
  var _regex$exec$groups, _regex$exec;

  if (value == null || globalSet.has(value)) return value;

  var regex = /*#__PURE__*/_wrapRegExp(/(^[\x2DA-Za-z]+)\(((.*))\)/g, {
    type: 1,
    values: 2
  });

  var _ref = (_regex$exec$groups = (_regex$exec = regex.exec(value)) == null ? void 0 : _regex$exec.groups) != null ? _regex$exec$groups : {},
      type = _ref.type,
      values = _ref.values;

  if (!type || !values) return value;

  var _type = type.includes("-gradient") ? type : type + "-gradient";

  var _values$split$map$fil = values.split(",").map(trimSpace).filter(Boolean),
      maybeDirection = _values$split$map$fil[0],
      stops = _values$split$map$fil.slice(1);

  if ((stops == null ? void 0 : stops.length) === 0) return value;
  var direction = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
  stops.unshift(direction);

  var _values = stops.map(function (stop) {
    // if stop is valid shorthand direction, return it
    if (valueSet.has(stop)) return stop;
    var firstStop = stop.indexOf(" "); // color stop could be `red.200 20%` based on css gradient spec

    var _ref2 = firstStop !== -1 ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)] : [stop],
        _color = _ref2[0],
        _stop = _ref2[1];

    var _stopOrFunc = isCSSFunction(_stop) ? _stop : _stop && _stop.split(" "); // else, get and transform the color token or css value


    var key = "colors." + _color;
    var color = key in theme.__cssMap ? theme.__cssMap[key].varRef : _color;
    return _stopOrFunc ? [color].concat(Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]).join(" ") : color;
  });

  return _type + "(" + _values.join(", ") + ")";
}
var isCSSFunction = function isCSSFunction(value) {
  return isString(value) && value.includes("(") && value.includes(")");
};
var gradientTransform = function gradientTransform(value, theme) {
  return parseGradient(value, theme != null ? theme : {});
};

var chakra_ui_styled_system_esm_analyzeCSSValue = function analyzeCSSValue(value) {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit: unit
  };
};

var wrap = function wrap(str) {
  return function (value) {
    return str + "(" + value + ")";
  };
};

var transformFunctions = {
  filter: function filter(value) {
    return value !== "auto" ? value : filterTemplate;
  },
  backdropFilter: function backdropFilter(value) {
    return value !== "auto" ? value : backdropFilterTemplate;
  },
  ring: function ring(value) {
    return getRingTemplate(transformFunctions.px(value));
  },
  bgClip: function bgClip(value) {
    return value === "text" ? {
      color: "transparent",
      backgroundClip: "text"
    } : {
      backgroundClip: value
    };
  },
  transform: function transform(value) {
    if (value === "auto") return getTransformTemplate();
    if (value === "auto-gpu") return getTransformGpuTemplate();
    return value;
  },
  px: function px(value) {
    if (value == null) return value;

    var _analyzeCSSValue = chakra_ui_styled_system_esm_analyzeCSSValue(value),
        unitless = _analyzeCSSValue.unitless;

    return unitless || isNumber(value) ? value + "px" : value;
  },
  fraction: function fraction(value) {
    return !isNumber(value) || value > 1 ? value : value * 100 + "%";
  },
  "float": function float(value, theme) {
    var map = {
      left: "right",
      right: "left"
    };
    return theme.direction === "rtl" ? map[value] : value;
  },
  degree: function degree(value) {
    if (isCssVar(value) || value == null) return value;
    var unitless = isString(value) && !value.endsWith("deg");
    return isNumber(value) || unitless ? value + "deg" : value;
  },
  gradient: gradientTransform,
  blur: wrap("blur"),
  opacity: wrap("opacity"),
  brightness: wrap("brightness"),
  contrast: wrap("contrast"),
  dropShadow: wrap("drop-shadow"),
  grayscale: wrap("grayscale"),
  hueRotate: wrap("hue-rotate"),
  invert: wrap("invert"),
  saturate: wrap("saturate"),
  sepia: wrap("sepia"),
  bgImage: function bgImage(value) {
    if (value == null) return value;
    var prevent = isCSSFunction(value) || globalSet.has(value);
    return !prevent ? "url(" + value + ")" : value;
  },
  outline: function outline(value) {
    var isNoneOrZero = String(value) === "0" || String(value) === "none";
    return value !== null && isNoneOrZero ? {
      outline: "2px solid transparent",
      outlineOffset: "2px"
    } : {
      outline: value
    };
  },
  flexDirection: function flexDirection(value) {
    var _flexDirectionTemplat;

    var _ref = (_flexDirectionTemplat = flexDirectionTemplate[value]) != null ? _flexDirectionTemplat : {},
        space = _ref.space,
        divide = _ref.divide;

    var result = {
      flexDirection: value
    };
    if (space) result[space] = 1;
    if (divide) result[divide] = 1;
    return result;
  }
};

var t = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  radii: toConfig("radii", transformFunctions.px),
  space: toConfig("space", transformFunctions.px),
  spaceT: toConfig("space", transformFunctions.px),
  degreeT: function degreeT(property) {
    return {
      property: property,
      transform: transformFunctions.degree
    };
  },
  prop: function prop(property, scale, transform) {
    return chakra_ui_styled_system_esm_extends({
      property: property,
      scale: scale
    }, scale && {
      transform: createTransform({
        scale: scale,
        transform: transform
      })
    });
  },
  propT: function propT(property, transform) {
    return {
      property: property,
      transform: transform
    };
  },
  sizes: toConfig("sizes", transformFunctions.px),
  sizesT: toConfig("sizes", transformFunctions.fraction),
  shadows: toConfig("shadows"),
  logical: logical,
  blur: toConfig("blur", transformFunctions.blur)
};

var background = {
  background: t.colors("background"),
  backgroundColor: t.colors("backgroundColor"),
  backgroundImage: t.propT("backgroundImage", transformFunctions.bgImage),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: {
    transform: transformFunctions.bgClip
  },
  bgSize: t.prop("backgroundSize"),
  bgPosition: t.prop("backgroundPosition"),
  bg: t.colors("background"),
  bgColor: t.colors("backgroundColor"),
  bgPos: t.prop("backgroundPosition"),
  bgRepeat: t.prop("backgroundRepeat"),
  bgAttachment: t.prop("backgroundAttachment"),
  bgGradient: t.propT("backgroundImage", transformFunctions.gradient),
  bgClip: {
    transform: transformFunctions.bgClip
  }
};
Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage
});

var border = {
  border: t.borders("border"),
  borderWidth: t.borderWidths("borderWidth"),
  borderStyle: t.borderStyles("borderStyle"),
  borderColor: t.colors("borderColor"),
  borderRadius: t.radii("borderRadius"),
  borderTop: t.borders("borderTop"),
  borderBlockStart: t.borders("borderBlockStart"),
  borderTopLeftRadius: t.radii("borderTopLeftRadius"),
  borderStartStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: t.radii("borderTopRightRadius"),
  borderStartEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: t.borders("borderRight"),
  borderInlineEnd: t.borders("borderInlineEnd"),
  borderBottom: t.borders("borderBottom"),
  borderBlockEnd: t.borders("borderBlockEnd"),
  borderBottomLeftRadius: t.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: t.radii("borderBottomRightRadius"),
  borderLeft: t.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: t.borders(["borderLeft", "borderRight"]),
  borderInline: t.borders("borderInline"),
  borderY: t.borders(["borderTop", "borderBottom"]),
  borderBlock: t.borders("borderBlock"),
  borderTopWidth: t.borderWidths("borderTopWidth"),
  borderBlockStartWidth: t.borderWidths("borderBlockStartWidth"),
  borderTopColor: t.colors("borderTopColor"),
  borderBlockStartColor: t.colors("borderBlockStartColor"),
  borderTopStyle: t.borderStyles("borderTopStyle"),
  borderBlockStartStyle: t.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: t.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: t.borderWidths("borderBlockEndWidth"),
  borderBottomColor: t.colors("borderBottomColor"),
  borderBlockEndColor: t.colors("borderBlockEndColor"),
  borderBottomStyle: t.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: t.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: t.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: t.borderWidths("borderInlineStartWidth"),
  borderLeftColor: t.colors("borderLeftColor"),
  borderInlineStartColor: t.colors("borderInlineStartColor"),
  borderLeftStyle: t.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: t.borderStyles("borderInlineStartStyle"),
  borderRightWidth: t.borderWidths("borderRightWidth"),
  borderInlineEndWidth: t.borderWidths("borderInlineEndWidth"),
  borderRightColor: t.colors("borderRightColor"),
  borderInlineEndColor: t.colors("borderInlineEndColor"),
  borderRightStyle: t.borderStyles("borderRightStyle"),
  borderInlineEndStyle: t.borderStyles("borderInlineEndStyle"),
  borderTopRadius: t.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: t.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
  borderLeftRadius: t.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: t.radii(["borderTopRightRadius", "borderBottomRightRadius"])
};
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle
});
/**
 * The prop types for border properties listed above
 */

var color = {
  color: t.colors("color"),
  textColor: t.colors("color"),
  fill: t.colors("fill"),
  stroke: t.colors("stroke")
};

var effect = {
  boxShadow: t.shadows("boxShadow"),
  mixBlendMode: true,
  blendMode: t.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: t.prop("backgroundBlendMode"),
  opacity: true
};
Object.assign(effect, {
  shadow: effect.boxShadow
});
/**
 * Types for box and text shadow properties
 */

var filter = {
  filter: {
    transform: transformFunctions.filter
  },
  blur: t.blur("--chakra-blur"),
  brightness: t.propT("--chakra-brightness", transformFunctions.brightness),
  contrast: t.propT("--chakra-contrast", transformFunctions.contrast),
  hueRotate: t.degreeT("--chakra-hue-rotate"),
  invert: t.propT("--chakra-invert", transformFunctions.invert),
  saturate: t.propT("--chakra-saturate", transformFunctions.saturate),
  dropShadow: t.propT("--chakra-drop-shadow", transformFunctions.dropShadow),
  backdropFilter: {
    transform: transformFunctions.backdropFilter
  },
  backdropBlur: t.blur("--chakra-backdrop-blur"),
  backdropBrightness: t.propT("--chakra-backdrop-brightness", transformFunctions.brightness),
  backdropContrast: t.propT("--chakra-backdrop-contrast", transformFunctions.contrast),
  backdropHueRotate: t.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: t.propT("--chakra-backdrop-invert", transformFunctions.invert),
  backdropSaturate: t.propT("--chakra-backdrop-saturate", transformFunctions.saturate)
};

var flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: {
    transform: transformFunctions.flexDirection
  },
  experimental_spaceX: {
    "static": spaceXTemplate,
    transform: createTransform({
      scale: "space",
      transform: function transform(value) {
        return value !== null ? {
          "--chakra-space-x": value
        } : null;
      }
    })
  },
  experimental_spaceY: {
    "static": spaceYTemplate,
    transform: createTransform({
      scale: "space",
      transform: function transform(value) {
        return value != null ? {
          "--chakra-space-y": value
        } : null;
      }
    })
  },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: t.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  gap: t.space("gap"),
  rowGap: t.space("rowGap"),
  columnGap: t.space("columnGap")
};
Object.assign(flexbox, {
  flexDir: flexbox.flexDirection
});

var grid = {
  gridGap: t.space("gridGap"),
  gridColumnGap: t.space("gridColumnGap"),
  gridRowGap: t.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};

var interactivity = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: {
    transform: transformFunctions.outline
  },
  outlineOffset: true,
  outlineColor: t.colors("outlineColor")
};

var layout = {
  width: t.sizesT("width"),
  inlineSize: t.sizesT("inlineSize"),
  height: t.sizes("height"),
  blockSize: t.sizes("blockSize"),
  boxSize: t.sizes(["width", "height"]),
  minWidth: t.sizes("minWidth"),
  minInlineSize: t.sizes("minInlineSize"),
  minHeight: t.sizes("minHeight"),
  minBlockSize: t.sizes("minBlockSize"),
  maxWidth: t.sizes("maxWidth"),
  maxInlineSize: t.sizes("maxInlineSize"),
  maxHeight: t.sizes("maxHeight"),
  maxBlockSize: t.sizes("maxBlockSize"),
  d: t.prop("display"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  "float": t.propT("float", transformFunctions["float"]),
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true
};
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY
});
/**
 * Types for layout related CSS properties
 */

var list = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: t.prop("listStylePosition"),
  listStyleImage: true,
  listStyleImg: t.prop("listStyleImage")
};

var srOnly = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var srFocusable = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
};

var getWithPriority = function getWithPriority(theme, key, styles) {
  var result = {};
  var obj = chakra_ui_utils_esm_memoizedGet(theme, key, {});

  for (var prop in obj) {
    var isInStyles = prop in styles && styles[prop] != null;
    if (!isInStyles) result[prop] = obj[prop];
  }

  return result;
};

var others = {
  srOnly: {
    transform: function transform(value) {
      if (value === true) return srOnly;
      if (value === "focusable") return srFocusable;
      return {};
    }
  },
  layerStyle: {
    processResult: true,
    transform: function transform(value, theme, styles) {
      return getWithPriority(theme, "layerStyles." + value, styles);
    }
  },
  textStyle: {
    processResult: true,
    transform: function transform(value, theme, styles) {
      return getWithPriority(theme, "textStyles." + value, styles);
    }
  },
  apply: {
    processResult: true,
    transform: function transform(value, theme, styles) {
      return getWithPriority(theme, value, styles);
    }
  }
};

var position = {
  position: true,
  pos: t.prop("position"),
  zIndex: t.prop("zIndex", "zIndices"),
  inset: t.spaceT("inset"),
  insetX: t.spaceT(["left", "right"]),
  insetInline: t.spaceT("insetInline"),
  insetY: t.spaceT(["top", "bottom"]),
  insetBlock: t.spaceT("insetBlock"),
  top: t.spaceT("top"),
  insetBlockStart: t.spaceT("insetBlockStart"),
  bottom: t.spaceT("bottom"),
  insetBlockEnd: t.spaceT("insetBlockEnd"),
  left: t.spaceT("left"),
  insetInlineStart: t.logical({
    scale: "space",
    property: {
      ltr: "left",
      rtl: "right"
    }
  }),
  right: t.spaceT("right"),
  insetInlineEnd: t.logical({
    scale: "space",
    property: {
      ltr: "right",
      rtl: "left"
    }
  })
};
Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd
});
/**
 * Types for position CSS properties
 */

/**
 * The parser configuration for common outline properties
 */
var ring = {
  ring: {
    transform: transformFunctions.ring
  },
  ringColor: t.colors("--chakra-ring-color"),
  ringOffset: t.prop("--chakra-ring-offset-width"),
  ringOffsetColor: t.colors("--chakra-ring-offset-color"),
  ringInset: t.prop("--chakra-ring-inset")
};

var space = {
  margin: t.spaceT("margin"),
  marginTop: t.spaceT("marginTop"),
  marginBlockStart: t.spaceT("marginBlockStart"),
  marginRight: t.spaceT("marginRight"),
  marginInlineEnd: t.spaceT("marginInlineEnd"),
  marginBottom: t.spaceT("marginBottom"),
  marginBlockEnd: t.spaceT("marginBlockEnd"),
  marginLeft: t.spaceT("marginLeft"),
  marginInlineStart: t.spaceT("marginInlineStart"),
  marginX: t.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: t.spaceT("marginInline"),
  marginY: t.spaceT(["marginTop", "marginBottom"]),
  marginBlock: t.spaceT("marginBlock"),
  padding: t.space("padding"),
  paddingTop: t.space("paddingTop"),
  paddingBlockStart: t.space("paddingBlockStart"),
  paddingRight: t.space("paddingRight"),
  paddingBottom: t.space("paddingBottom"),
  paddingBlockEnd: t.space("paddingBlockEnd"),
  paddingLeft: t.space("paddingLeft"),
  paddingInlineStart: t.space("paddingInlineStart"),
  paddingInlineEnd: t.space("paddingInlineEnd"),
  paddingX: t.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: t.space("paddingInline"),
  paddingY: t.space(["paddingTop", "paddingBottom"]),
  paddingBlock: t.space("paddingBlock")
};
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd
});
/**
 * Types for space related CSS properties
 */

var textDecoration = {
  textDecorationColor: t.colors("textDecorationColor"),
  textDecoration: true,
  textDecor: {
    property: "textDecoration"
  },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: t.shadows("textShadow")
};

var transform = {
  clipPath: true,
  transform: t.propT("transform", transformFunctions.transform),
  transformOrigin: true,
  translateX: t.spaceT("--chakra-translate-x"),
  translateY: t.spaceT("--chakra-translate-y"),
  skewX: t.degreeT("--chakra-skew-x"),
  skewY: t.degreeT("--chakra-skew-y"),
  scaleX: t.prop("--chakra-scale-x"),
  scaleY: t.prop("--chakra-scale-y"),
  scale: t.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: t.degreeT("--chakra-rotate")
};

var transition = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: t.prop("transitionDuration", "transition.duration"),
  transitionProperty: t.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: t.prop("transitionTimingFunction", "transition.easing")
};

var typography = {
  fontFamily: t.prop("fontFamily", "fonts"),
  fontSize: t.prop("fontSize", "fontSizes", transformFunctions.px),
  fontWeight: t.prop("fontWeight", "fontWeights"),
  lineHeight: t.prop("lineHeight", "lineHeights"),
  letterSpacing: t.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  noOfLines: {
    "static": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  },
  isTruncated: {
    transform: function transform(value) {
      if (value === true) {
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
      }
    }
  }
};
/**
 * Types for typography related CSS properties
 */

function chakra_ui_styled_system_esm_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function chakra_ui_styled_system_esm_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return chakra_ui_styled_system_esm_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return chakra_ui_styled_system_esm_arrayLikeToArray(o, minLen);
}

function chakra_ui_styled_system_esm_createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = chakra_ui_styled_system_esm_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var group = {
  hover: function hover(selector) {
    return selector + ":hover &, " + selector + "[data-hover] &";
  },
  focus: function focus(selector) {
    return selector + ":focus &, " + selector + "[data-focus] &";
  },
  focusVisible: function focusVisible(selector) {
    return selector + ":focus-visible &";
  },
  active: function active(selector) {
    return selector + ":active &, " + selector + "[data-active] &";
  },
  disabled: function disabled(selector) {
    return selector + ":disabled &, " + selector + "[data-disabled] &";
  },
  invalid: function invalid(selector) {
    return selector + ":invalid &, " + selector + "[data-invalid] &";
  },
  checked: function checked(selector) {
    return selector + ":checked &, " + selector + "[data-checked] &";
  },
  indeterminate: function indeterminate(selector) {
    return selector + ":indeterminate &, " + selector + "[aria-checked=mixed] &, " + selector + "[data-indeterminate] &";
  },
  readOnly: function readOnly(selector) {
    return selector + ":read-only &, " + selector + "[readonly] &, " + selector + "[data-read-only] &";
  },
  expanded: function expanded(selector) {
    return selector + ":read-only &, " + selector + "[aria-expanded=true] &, " + selector + "[data-expanded] &";
  }
};

var toGroup = function toGroup(fn) {
  return merge(fn, "[role=group]", "[data-group]", ".group");
};

var merge = function merge(fn) {
  for (var _len = arguments.length, selectors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    selectors[_key - 1] = arguments[_key];
  }

  return selectors.map(fn).join(", ");
};

var pseudoSelectors = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",

  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",

  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",

  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",

  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible",

  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   */
  _disabled: "&[disabled], &[aria-disabled=true], &[data-disabled]",

  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",

  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",

  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  _empty: "&:empty",

  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",

  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",

  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",

  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",

  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",

  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",

  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",

  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",

  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",

  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",

  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",

  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",

  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",

  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",

  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",

  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",

  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",

  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",

  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",

  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",

  /**
   * Styles to apply when parent is hovered
   */
  _groupHover: toGroup(group.hover),

  /**
   * Styles to apply when parent is focused
   */
  _groupFocus: toGroup(group.focus),
  _groupFocusVisible: toGroup(group.focusVisible),

  /**
   * Styles to apply when parent is active
   */
  _groupActive: toGroup(group.active),

  /**
   * Styles to apply when parent is disabled
   */
  _groupDisabled: toGroup(group.disabled),

  /**
   * Styles to apply when parent is invalid
   */
  _groupInvalid: toGroup(group.invalid),

  /**
   * Styles to apply when parent is checked
   */
  _groupChecked: toGroup(group.checked),

  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",

  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",

  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",

  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when any parent element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &",

  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * used when the user has requested the system
   * use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",

  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &, [data-theme=dark] &, &[data-theme=dark]",

  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &, [data-theme=light] &, &[data-theme=light]"
};
var pseudoPropNames = objectKeys(pseudoSelectors);

var systemProps = lodash_mergewith_default()({}, background, border, color, flexbox, layout, filter, ring, interactivity, grid, others, position, effect, space, typography, textDecoration, transform, list, transition);
var layoutSystem = Object.assign({}, space, layout, flexbox, grid, position);
var layoutPropNames = objectKeys(layoutSystem);
var propNames = [].concat(objectKeys(systemProps), pseudoPropNames);

var styleProps = chakra_ui_styled_system_esm_extends({}, systemProps, pseudoSelectors);

var isStyleProp = function isStyleProp(prop) {
  return prop in styleProps;
};

/**
 * Expands an array or object syntax responsive style.
 *
 * @example
 * expandResponsive({ mx: [1, 2] })
 * // or
 * expandResponsive({ mx: { base: 1, sm: 2 } })
 *
 * // => { mx: 1, "@media(min-width:<sm>)": { mx: 2 } }
 */

var expandResponsive = function expandResponsive(styles) {
  return function (theme) {
    /**
     * Before any style can be processed, the user needs to call `toCSSVar`
     * which analyzes the theme's breakpoint and appends a `__breakpoints` property
     * to the theme with more details of the breakpoints.
     *
     * To learn more, go here: packages/utils/src/responsive.ts #analyzeBreakpoints
     */
    if (!theme.__breakpoints) return styles;
    var _theme$__breakpoints = theme.__breakpoints,
        isResponsive = _theme$__breakpoints.isResponsive,
        toArrayValue = _theme$__breakpoints.toArrayValue,
        medias = _theme$__breakpoints.media;
    var computedStyles = {};

    for (var key in styles) {
      var value = chakra_ui_utils_esm_runIfFn(styles[key], theme);
      if (value == null) continue; // converts the object responsive syntax to array syntax

      value = isObject(value) && isResponsive(value) ? toArrayValue(value) : value;

      if (!Array.isArray(value)) {
        computedStyles[key] = value;
        continue;
      }

      var queries = value.slice(0, medias.length).length;

      for (var index = 0; index < queries; index += 1) {
        var media = medias == null ? void 0 : medias[index];

        if (!media) {
          computedStyles[key] = value[index];
          continue;
        }

        computedStyles[media] = computedStyles[media] || {};

        if (value[index] == null) {
          continue;
        }

        computedStyles[media][key] = value[index];
      }
    }

    return computedStyles;
  };
};

var isCSSVariableTokenValue = function isCSSVariableTokenValue(key, value) {
  return key.startsWith("--") && isString(value) && !isCssVar(value);
};

var resolveTokenValue = function resolveTokenValue(theme, value) {
  var _ref, _getVar2;

  if (value == null) return value;

  var getVar = function getVar(val) {
    var _theme$__cssMap, _theme$__cssMap$val;

    return (_theme$__cssMap = theme.__cssMap) == null ? void 0 : (_theme$__cssMap$val = _theme$__cssMap[val]) == null ? void 0 : _theme$__cssMap$val.varRef;
  };

  var getValue = function getValue(val) {
    var _getVar;

    return (_getVar = getVar(val)) != null ? _getVar : val;
  };

  var valueSplit = value.split(",").map(function (v) {
    return v.trim();
  });
  var tokenValue = valueSplit[0],
      fallbackValue = valueSplit[1];
  value = (_ref = (_getVar2 = getVar(tokenValue)) != null ? _getVar2 : getValue(fallbackValue)) != null ? _ref : getValue(value);
  return value;
};

function getCss(options) {
  var _options$configs = options.configs,
      configs = _options$configs === void 0 ? {} : _options$configs,
      _options$pseudos = options.pseudos,
      pseudos = _options$pseudos === void 0 ? {} : _options$pseudos,
      theme = options.theme;

  var css = function css(stylesOrFn, nested) {
    if (nested === void 0) {
      nested = false;
    }

    var _styles = chakra_ui_utils_esm_runIfFn(stylesOrFn, theme);

    var styles = expandResponsive(_styles)(theme);
    var computedStyles = {};

    for (var key in styles) {
      var _config$transform, _config, _config2, _config3, _config4;

      var valueOrFn = styles[key];
      /**
       * allows the user to pass functional values
       * boxShadow: theme => `0 2px 2px ${theme.colors.red}`
       */

      var value = chakra_ui_utils_esm_runIfFn(valueOrFn, theme);
      /**
       * converts pseudo shorthands to valid selector
       * "_hover" => "&:hover"
       */

      if (key in pseudos) {
        key = pseudos[key];
      }
      /**
       * allows the user to use theme tokens in css vars
       * { --banner-height: "sizes.md" } => { --banner-height: "var(--chakra-sizes-md)" }
       *
       * You can also provide fallback values
       * { --banner-height: "sizes.no-exist, 40px" } => { --banner-height: "40px" }
       */


      if (isCSSVariableTokenValue(key, value)) {
        value = resolveTokenValue(theme, value);
      }

      var config = configs[key];

      if (config === true) {
        config = {
          property: key
        };
      }

      if (isObject(value)) {
        var _computedStyles$key;

        computedStyles[key] = (_computedStyles$key = computedStyles[key]) != null ? _computedStyles$key : {};
        computedStyles[key] = lodash_mergewith_default()({}, computedStyles[key], css(value, true));
        continue;
      }

      var rawValue = (_config$transform = (_config = config) == null ? void 0 : _config.transform == null ? void 0 : _config.transform(value, theme, _styles)) != null ? _config$transform : value;
      /**
       * Used for `layerStyle`, `textStyle` and `apply`. After getting the
       * styles in the theme, we need to process them since they might
       * contain theme tokens.
       *
       * `processResult` is the config property we pass to `layerStyle`, `textStyle` and `apply`
       */

      rawValue = (_config2 = config) != null && _config2.processResult ? css(rawValue, true) : rawValue;
      /**
       * allows us define css properties for RTL and LTR.
       *
       * const marginStart = {
       *   property: theme => theme.direction === "rtl" ? "marginRight": "marginLeft",
       * }
       */

      var configProperty = chakra_ui_utils_esm_runIfFn((_config3 = config) == null ? void 0 : _config3.property, theme);

      if (!nested && (_config4 = config) != null && _config4["static"]) {
        var staticStyles = chakra_ui_utils_esm_runIfFn(config["static"], theme);
        computedStyles = lodash_mergewith_default()({}, computedStyles, staticStyles);
      }

      if (configProperty && Array.isArray(configProperty)) {
        for (var _iterator = chakra_ui_styled_system_esm_createForOfIteratorHelperLoose(configProperty), _step; !(_step = _iterator()).done;) {
          var property = _step.value;
          computedStyles[property] = rawValue;
        }

        continue;
      }

      if (configProperty) {
        if (configProperty === "&" && isObject(rawValue)) {
          computedStyles = lodash_mergewith_default()({}, computedStyles, rawValue);
        } else {
          computedStyles[configProperty] = rawValue;
        }

        continue;
      }

      if (isObject(rawValue)) {
        computedStyles = lodash_mergewith_default()({}, computedStyles, rawValue);
        continue;
      }

      computedStyles[key] = rawValue;
    }

    return computedStyles;
  };

  return css;
}
var chakra_ui_styled_system_esm_css = function css(styles) {
  return function (theme) {
    var cssFn = getCss({
      theme: theme,
      pseudos: pseudoSelectors,
      configs: systemProps
    });
    return cssFn(styles);
  };
};

/**
 * Thank you @markdalgleish for this piece of art!
 */

function resolveReference(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }

  return String(operand);
}

var toExpression = function toExpression(operator) {
  for (var _len = arguments.length, operands = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    operands[_key - 1] = arguments[_key];
  }

  return operands.map(resolveReference).join(" " + operator + " ").replace(/calc/g, "");
};

var _add = function add() {
  for (var _len2 = arguments.length, operands = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    operands[_key2] = arguments[_key2];
  }

  return "calc(" + toExpression.apply(void 0, ["+"].concat(operands)) + ")";
};

var _subtract = function subtract() {
  for (var _len3 = arguments.length, operands = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    operands[_key3] = arguments[_key3];
  }

  return "calc(" + toExpression.apply(void 0, ["-"].concat(operands)) + ")";
};

var _multiply = function multiply() {
  for (var _len4 = arguments.length, operands = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    operands[_key4] = arguments[_key4];
  }

  return "calc(" + toExpression.apply(void 0, ["*"].concat(operands)) + ")";
};

var _divide = function divide() {
  for (var _len5 = arguments.length, operands = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    operands[_key5] = arguments[_key5];
  }

  return "calc(" + toExpression.apply(void 0, ["/"].concat(operands)) + ")";
};

var _negate = function negate(x) {
  var value = resolveReference(x);

  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : "-" + value;
  }

  return _multiply(value, -1);
};

var calc = Object.assign(function (x) {
  return {
    add: function add() {
      for (var _len6 = arguments.length, operands = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        operands[_key6] = arguments[_key6];
      }

      return calc(_add.apply(void 0, [x].concat(operands)));
    },
    subtract: function subtract() {
      for (var _len7 = arguments.length, operands = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        operands[_key7] = arguments[_key7];
      }

      return calc(_subtract.apply(void 0, [x].concat(operands)));
    },
    multiply: function multiply() {
      for (var _len8 = arguments.length, operands = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        operands[_key8] = arguments[_key8];
      }

      return calc(_multiply.apply(void 0, [x].concat(operands)));
    },
    divide: function divide() {
      for (var _len9 = arguments.length, operands = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        operands[_key9] = arguments[_key9];
      }

      return calc(_divide.apply(void 0, [x].concat(operands)));
    },
    negate: function negate() {
      return calc(_negate(x));
    },
    toString: function toString() {
      return x.toString();
    }
  };
}, {
  add: _add,
  subtract: _subtract,
  multiply: _multiply,
  divide: _divide,
  negate: _negate
});

function replaceWhiteSpace(value, replaceValue) {
  if (replaceValue === void 0) {
    replaceValue = "-";
  }

  return value.replace(/\s+/g, replaceValue);
}

function chakra_ui_styled_system_esm_escape(value) {
  var valueStr = replaceWhiteSpace(value.toString());
  if (valueStr.includes("\\.")) return value;
  var isDecimal = !Number.isInteger(parseFloat(value.toString()));
  return isDecimal ? valueStr.replace(".", "\\.") : value;
}

function addPrefix(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }

  return [prefix, chakra_ui_styled_system_esm_escape(value)].filter(Boolean).join("-");
}
function toVarReference(name, fallback) {
  return "var(" + chakra_ui_styled_system_esm_escape(name) + (fallback ? ", " + fallback : "") + ")";
}
function toVarDefinition(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }

  return "--" + addPrefix(value, prefix);
}
function cssVar(name, fallback, cssVarPrefix) {
  var cssVariable = toVarDefinition(name, cssVarPrefix);
  return {
    variable: cssVariable,
    reference: toVarReference(cssVariable, fallback)
  };
}

function createThemeVars(target, options) {
  var context = {
    cssMap: {},
    cssVars: {}
  };
  walkObject(target, function (value, path) {
    var _tokenHandlerMap$firs;

    // firstKey will be e.g. "space"
    var firstKey = path[0];
    var handler = (_tokenHandlerMap$firs = tokenHandlerMap[firstKey]) != null ? _tokenHandlerMap$firs : tokenHandlerMap.defaultHandler;

    var _handler = handler(path, value, options),
        cssVars = _handler.cssVars,
        cssMap = _handler.cssMap;

    Object.assign(context.cssVars, cssVars);
    Object.assign(context.cssMap, cssMap);
  });
  return context;
}

/**
 * Define transformation handlers for ThemeScale
 */
var tokenHandlerMap = {
  space: function space(keys, value, options) {
    var _extends2;

    var properties = tokenHandlerMap.defaultHandler(keys, value, options);
    var firstKey = keys[0],
        referenceKeys = keys.slice(1);
    var negativeLookupKey = firstKey + ".-" + referenceKeys.join(".");
    var negativeVarKey = keys.join("-");

    var _cssVar = cssVar(negativeVarKey, undefined, options.cssVarPrefix),
        variable = _cssVar.variable,
        reference = _cssVar.reference;

    var negativeValue = calc.negate(value);
    var varRef = calc.negate(reference);
    return {
      cssVars: properties.cssVars,
      cssMap: chakra_ui_styled_system_esm_extends({}, properties.cssMap, (_extends2 = {}, _extends2[negativeLookupKey] = {
        value: "" + negativeValue,
        "var": "" + variable,
        varRef: varRef
      }, _extends2))
    };
  },
  defaultHandler: function defaultHandler(keys, value, options) {
    var _cssVars, _cssMap;

    var lookupKey = keys.join(".");
    var varKey = keys.join("-");

    var _cssVar2 = cssVar(varKey, undefined, options.cssVarPrefix),
        variable = _cssVar2.variable,
        reference = _cssVar2.reference;

    return {
      cssVars: (_cssVars = {}, _cssVars[variable] = value, _cssVars),
      cssMap: (_cssMap = {}, _cssMap[lookupKey] = {
        value: value,
        "var": variable,
        varRef: reference
      }, _cssMap)
    };
  }
};

function chakra_ui_styled_system_esm_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var chakra_ui_styled_system_esm_excluded = (/* unused pure expression or super */ null && (["__cssMap", "__cssVars", "__breakpoints"]));
var tokens = (/* unused pure expression or super */ null && (["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur"]));
function extractTokens(theme) {
  var _tokens = tokens;
  return pick(theme, _tokens);
}
function omitVars(rawTheme) {
  rawTheme.__cssMap;
      rawTheme.__cssVars;
      rawTheme.__breakpoints;
      var cleanTheme = chakra_ui_styled_system_esm_objectWithoutPropertiesLoose(rawTheme, chakra_ui_styled_system_esm_excluded);

  return cleanTheme;
}

function chakra_ui_styled_system_esm_toCSSVar(rawTheme) {
  var _theme$config;

  /**
   * In the case the theme has already been converted to css-var (e.g extending the theme),
   * we can omit the computed css vars and recompute it for the extended theme.
   */
  var theme = omitVars(rawTheme); // omit components and breakpoints from css variable map

  var tokens = extractTokens(theme);
  var cssVarPrefix = (_theme$config = theme.config) == null ? void 0 : _theme$config.cssVarPrefix;

  var _createThemeVars = createThemeVars(tokens, {
    cssVarPrefix: cssVarPrefix
  }),
      cssMap = _createThemeVars.cssMap,
      cssVars = _createThemeVars.cssVars;

  var defaultCssVars = {
    "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-ring-offset-width": "0px",
    "--chakra-ring-offset-color": "#fff",
    "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
    "--chakra-ring-offset-shadow": "0 0 #0000",
    "--chakra-ring-shadow": "0 0 #0000",
    "--chakra-space-x-reverse": "0",
    "--chakra-space-y-reverse": "0"
  };
  Object.assign(theme, {
    __cssVars: chakra_ui_styled_system_esm_extends({}, defaultCssVars, cssVars),
    __cssMap: cssMap,
    __breakpoints: analyzeBreakpoints(theme.breakpoints)
  });
  return theme;
}



// EXTERNAL MODULE: ./node_modules/react-fast-compare/index.js
var react_fast_compare = __webpack_require__(590);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/react-utils/dist/chakra-ui-react-utils.esm.js



/**
 * Assigns a value to a ref function or object
 *
 * @param ref the ref to assign to
 * @param value the value
 */
function assignRef(ref, value) {
  if (ref == null) return;

  if (isFunction(ref)) {
    ref(value);
    return;
  }

  try {
    // @ts-ignore
    ref.current = value;
  } catch (error) {
    throw new Error("Cannot assign value '" + value + "' to ref '" + ref + "'");
  }
}
/**
 * Combine multiple React refs into a single ref function.
 * This is used mostly when you need to allow consumers forward refs to
 * internal components
 *
 * @param refs refs to assign to value to
 */

function mergeRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return function (node) {
    refs.forEach(function (ref) {
      return assignRef(ref, node);
    });
  };
}

/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
function createContext(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? true : _options$strict,
      _options$errorMessage = _options.errorMessage,
      errorMessage = _options$errorMessage === void 0 ? "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider" : _options$errorMessage,
      name = _options.name;
  var Context = /*#__PURE__*/external_React_.createContext(undefined);
  Context.displayName = name;

  function useContext() {
    var context = external_React_.useContext(Context);

    if (!context && strict) {
      var error = new Error(errorMessage);
      error.name = "ContextError";
      Error.captureStackTrace == null ? void 0 : Error.captureStackTrace(error, useContext);
      throw error;
    }

    return context;
  }

  return [Context.Provider, useContext, Context];
}

/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */

function getValidChildren(children) {
  return React.Children.toArray(children).filter(function (child) {
    return /*#__PURE__*/React.isValidElement(child);
  });
}



;// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js
function emotion_memoize_browser_esm_memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const emotion_memoize_browser_esm = (emotion_memoize_browser_esm_memoize);

;// CONCATENATED MODULE: ./node_modules/@emotion/styled/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */emotion_memoize_browser_esm(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const emotion_is_prop_valid_browser_esm = (isPropValid);

;// CONCATENATED MODULE: ./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (false) { var isImportRule; }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (false) {}
  };

  return StyleSheet;
}();



;// CONCATENATED MODULE: ./node_modules/stylis/src/Utility.js
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var Utility_from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var Utility_assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return (((((((length << 2) ^ Utility_charat(value, 0)) << 2) ^ Utility_charat(value, 1)) << 2) ^ Utility_charat(value, 2)) << 2) ^ Utility_charat(value, 3)
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function Utility_charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function Utility_substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function Utility_strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function Utility_sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function Utility_append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function Utility_combine (array, callback) {
	return array.map(callback).join('')
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Tokenizer.js


var line = 1
var column = 1
var Tokenizer_length = 0
var Tokenizer_position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function Tokenizer_copy (root, props) {
	return Utility_assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function Tokenizer_char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = Tokenizer_position > 0 ? Utility_charat(characters, --Tokenizer_position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = Tokenizer_position < Tokenizer_length ? Utility_charat(characters, Tokenizer_position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return Utility_charat(characters, Tokenizer_position)
}

/**
 * @return {number}
 */
function caret () {
	return Tokenizer_position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return Utility_substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, Tokenizer_length = Utility_strlen(characters = value), Tokenizer_position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(Tokenizer_position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function Tokenizer_tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: append(identifier(Tokenizer_position - 1), children)
				break
			case 2: append(delimit(character), children)
				break
			default: append(from(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return Tokenizer_position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return Tokenizer_position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, Tokenizer_position - 1) + '*' + Utility_from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, Tokenizer_position)
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Enum.js
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var Enum_RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'

;// CONCATENATED MODULE: ./node_modules/stylis/src/Serializer.js



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''
	var length = Utility_sizeof(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case Enum_RULESET: element.value = element.props.join(',')
	}

	return Utility_strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Prefixer.js



/**
 * @param {string} value
 * @param {number} length
 * @return {string}
 */
function prefix (value, length) {
	switch (hash(value, length)) {
		// color-adjust
		case 5103:
			return WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return WEBKIT + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return WEBKIT + value + MOZ + value + MS + value + value
		// flex, flex-direction
		case 6828: case 4268:
			return WEBKIT + value + MS + value + value
		// order
		case 6165:
			return WEBKIT + value + MS + 'flex-' + value + value
		// align-items
		case 5187:
			return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value
		// align-content
		case 4675:
			return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value
		// flex-shrink
		case 5548:
			return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value
		// cursor
		case 6187:
			return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if (Utility_strlen(value) - 1 - length > 6)
				switch (Utility_charat(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if (Utility_charat(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (Utility_charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value
				}
			break
		// position: sticky
		case 4949:
			// (s)ticky?
			if (Utility_charat(value, length + 1) !== 115)
				break
		// display: (flex|inline-flex)
		case 6444:
			switch (Utility_charat(value, Utility_strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
				// stic(k)y
				case 107:
					return replace(value, ':', ':' + WEBKIT) + value
				// (inline-)?fl(e)x
				case 101:
					return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (Utility_charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value
			}
			break
		// writing-mode
		case 5936:
			switch (Utility_charat(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
			}

			return WEBKIT + value + MS + value + value
	}

	return value
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Middleware.js






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = Utility_sizeof(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case DECLARATION: element.return = prefix(element.value, element.length)
					break
				case KEYFRAMES:
					return serialize([Tokenizer_copy(element, {value: replace(element.value, '@', '@' + WEBKIT)})], callback)
				case Enum_RULESET:
					if (element.length)
						return Utility_combine(element.props, function (value) {
							switch (match(value, /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									return serialize([Tokenizer_copy(element, {props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]})], callback)
								// :placeholder
								case '::placeholder':
									return serialize([
										Tokenizer_copy(element, {props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]}),
										Tokenizer_copy(element, {props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]}),
										Tokenizer_copy(element, {props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]})
									], callback)
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case RULESET:
			element.props = element.props.map(function (value) {
				return combine(tokenize(value), function (value, index, children) {
					switch (charat(value, 0)) {
						// \f
						case 12:
							return substr(value, 1, strlen(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + substr(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return sizeof(children) > 1 ? '' : value
								case index = sizeof(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Parser.js




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && characters.charCodeAt(length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous)
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7)
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						Utility_append(comment(commenter(next(), caret()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = Utility_strlen(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset:
						if (property > 0 && (Utility_strlen(characters) - length))
							Utility_append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						Utility_append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule) {
									// d m s
									case 100: case 109: case 115:
										parse(value, reference, reference, rule && Utility_append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + Utility_strlen(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += Utility_from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = (Utility_strlen(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next())

						atrule = peek(), offset = length = Utility_strlen(type = characters += identifier(caret())), character++
						break
					// -
					case 45:
						if (previous === 45 && Utility_strlen(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = Utility_sizeof(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = Utility_substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z

	return node(value, root, parent, offset === 0 ? Enum_RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, Utility_from(Tokenizer_char()), Utility_substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, DECLARATION, Utility_substr(value, 0, length), Utility_substr(value, length + 1, -1), length)
}

;// CONCATENATED MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js





var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
}; // based on https://github.com/thysultan/stylis.js/blob/e6843c373ebcbbfade25ebcc23f540ed8508da0a/src/Tokenizer.js#L239-L244


var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, Tokenizer_position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(Tokenizer_position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += Utility_from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule') return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;

      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if (false) {}

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (false) {}

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (false) {}

  {
    var currentSheet;
    var finalizingPlugins = [stringify,  false ? 0 : rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if (false) {}

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/* harmony default export */ const emotion_cache_browser_esm = (createCache);

;// CONCATENATED MODULE: ./node_modules/@emotion/hash/dist/hash.browser.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ const hash_browser_esm = (murmur2);

;// CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const unitless_browser_esm = (unitlessKeys);

;// CONCATENATED MODULE: ./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */emotion_memoize_browser_esm(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitless_browser_esm[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {}

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var emotion_serialize_browser_esm_serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = hash_browser_esm(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};



;// CONCATENATED MODULE: ./node_modules/@emotion/react/dist/emotion-element-699e6908.browser.esm.js








var emotion_element_699e6908_browser_esm_hasOwnProperty = {}.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */(0,external_React_.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */emotion_cache_browser_esm({
  key: 'css'
}) : null);

if (false) {}

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return useContext(EmotionCacheContext);
};

var emotion_element_699e6908_browser_esm_withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/(0,external_React_.forwardRef)(function (props, ref) {
    // the cache will never be null in the browser
    var cache = (0,external_React_.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var emotion_element_699e6908_browser_esm_ThemeContext = /* #__PURE__ */(0,external_React_.createContext)({});

if (false) {}

var useTheme = function useTheme() {
  return useContext(emotion_element_699e6908_browser_esm_ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if (false) {}

    return mergedTheme;
  }

  if (false) {}

  return _extends({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */(/* unused pure expression or super */ null && (weakMemoize(function (outerTheme) {
  return weakMemoize(function (theme) {
    return getTheme(outerTheme, theme);
  });
})));
var ThemeProvider = function ThemeProvider(props) {
  var theme = useContext(emotion_element_699e6908_browser_esm_ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/createElement(emotion_element_699e6908_browser_esm_ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = useContext(emotion_element_699e6908_browser_esm_ThemeContext);
    return /*#__PURE__*/createElement(Component, _extends({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/forwardRef(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return hoistNonReactStatics(WithTheme, Component);
}

var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);

  if (match) {
    // The match may be something like 'Object.createEmotionProps'
    var parts = match[1].split('.');
    return parts[parts.length - 1];
  } // Safari / Firefox


  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return match[1];
  return undefined;
};

var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }

  return undefined;
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}

  var newProps = {};

  for (var key in props) {
    if (emotion_element_699e6908_browser_esm_hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
  // the label hasn't already been computed

  if (false) { var label; }

  return newProps;
};

var Noop = function Noop() {
  return null;
};

var Emotion = /* #__PURE__ */(/* unused pure expression or super */ null && (emotion_element_699e6908_browser_esm_withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles, undefined, useContext(emotion_element_699e6908_browser_esm_ThemeContext));

  if (false) { var labelFromStack; }

  var rules = insertStyles(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (emotion_element_699e6908_browser_esm_hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || 0)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/createElement(type, newProps);
  var possiblyStyleElement = /*#__PURE__*/createElement(Noop, null);


  return /*#__PURE__*/createElement(Fragment, null, possiblyStyleElement, ele);
})));

if (false) {}



;// CONCATENATED MODULE: ./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var emotion_utils_browser_esm_isBrowser = "object" !== 'undefined';
function emotion_utils_browser_esm_getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var emotion_utils_browser_esm_insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  emotion_utils_browser_esm_isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};



;// CONCATENATED MODULE: ./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js







var testOmitPropsOnStringTag = emotion_is_prop_valid_browser_esm;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var emotion_styled_base_browser_esm_ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";

var emotion_styled_base_browser_esm_Noop = function Noop() {
  return null;
};

var createStyled = function createStyled(tag, options) {
  if (false) {}

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (false) {}

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (false) {}

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = emotion_element_699e6908_browser_esm_withEmotionCache(function (props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = (0,external_React_.useContext)(emotion_element_699e6908_browser_esm_ThemeContext);
      }

      if (typeof props.className === 'string') {
        className = emotion_utils_browser_esm_getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = emotion_serialize_browser_esm_serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      var rules = emotion_utils_browser_esm_insertStyles(cache, serialized, typeof finalTag === 'string');
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      var ele = /*#__PURE__*/(0,external_React_.createElement)(finalTag, newProps);
      var possiblyStyleElement = /*#__PURE__*/(0,external_React_.createElement)(emotion_styled_base_browser_esm_Noop, null);


      return /*#__PURE__*/(0,external_React_.createElement)(external_React_.Fragment, null, possiblyStyleElement, ele);
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {} // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, extends_extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ const emotion_styled_base_browser_esm = (createStyled);

;// CONCATENATED MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js








var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = emotion_styled_base_browser_esm.bind();
tags.forEach(function (tagName) {
  // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
  newStyled[tagName] = newStyled(tagName);
});

/* harmony default export */ const emotion_styled_browser_esm = (newStyled);

;// CONCATENATED MODULE: ./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js













function chakra_ui_system_esm_extends() {
  chakra_ui_system_esm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return chakra_ui_system_esm_extends.apply(this, arguments);
}

var chakra_ui_system_esm_ThemeProvider = function ThemeProvider(props) {
  var _props$cssVarsRoot = props.cssVarsRoot,
      cssVarsRoot = _props$cssVarsRoot === void 0 ? ":host, :root" : _props$cssVarsRoot,
      theme = props.theme,
      children = props.children;
  var computedTheme = React.useMemo(function () {
    return toCSSVar(theme);
  }, [theme]);
  return /*#__PURE__*/React.createElement(ThemeProvider$1, {
    theme: computedTheme
  }, /*#__PURE__*/React.createElement(Global, {
    styles: function styles(theme) {
      var _ref;

      return _ref = {}, _ref[cssVarsRoot] = theme.__cssVars, _ref;
    }
  }), children);
};
function chakra_ui_system_esm_useTheme() {
  var theme = React.useContext(ThemeContext);

  if (!theme) {
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
  }

  return theme;
}

var _createContext = createContext({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
}),
    StylesProvider = _createContext[0],
    useStyles = _createContext[1];
/**
 * Applies styles defined in `theme.styles.global` globally
 * using emotion's `Global` component
 */

var GlobalStyle = function GlobalStyle() {
  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  return /*#__PURE__*/React.createElement(Global, {
    styles: function styles(theme) {
      var styleObjectOrFn = memoizedGet(theme, "styles.global");
      var globalStyles = runIfFn(styleObjectOrFn, {
        theme: theme,
        colorMode: colorMode
      });
      if (!globalStyles) return undefined;
      var styles = css(globalStyles)(theme);
      return styles;
    }
  });
};

/**
 * Carefully selected html elements for chakra components.
 * This is mostly for `chakra.<element>` syntax.
 */
var domElements = ["a", "b", "article", "aside", "blockquote", "button", "caption", "cite", "circle", "code", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "img", "input", "kbd", "label", "li", "main", "mark", "nav", "ol", "p", "path", "pre", "q", "rect", "s", "svg", "section", "select", "strong", "small", "span", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "tr", "ul"];
function omitThemingProps(props) {
  return omit(props, ["styleConfig", "size", "variant", "colorScheme"]);
}

function useChakra() {
  var colorModeResult = useColorMode();
  var theme = chakra_ui_system_esm_useTheme();
  return chakra_ui_system_esm_extends({}, colorModeResult, {
    theme: theme
  });
}

var resolveBreakpointValue = function resolveBreakpointValue(theme, tokenValue, fallbackValue) {
  var _ref, _getValue;

  if (tokenValue === null) return tokenValue;

  var getValue = function getValue(val) {
    var _theme$__breakpoints, _theme$__breakpoints$;

    return (_theme$__breakpoints = theme.__breakpoints) == null ? void 0 : (_theme$__breakpoints$ = _theme$__breakpoints.asArray) == null ? void 0 : _theme$__breakpoints$[val];
  };

  return (_ref = (_getValue = getValue(tokenValue)) != null ? _getValue : getValue(fallbackValue)) != null ? _ref : fallbackValue;
}; // inspired from ./css.ts : resolveTokenValue


var chakra_ui_system_esm_resolveTokenValue = function resolveTokenValue(theme, tokenValue, fallbackValue) {
  var _ref2, _getValue2;

  if (tokenValue == null) return tokenValue;

  var getValue = function getValue(val) {
    var _theme$__cssMap, _theme$__cssMap$val;

    return (_theme$__cssMap = theme.__cssMap) == null ? void 0 : (_theme$__cssMap$val = _theme$__cssMap[val]) == null ? void 0 : _theme$__cssMap$val.value;
  };

  return (_ref2 = (_getValue2 = getValue(tokenValue)) != null ? _getValue2 : getValue(fallbackValue)) != null ? _ref2 : fallbackValue;
};

function useToken(scale, token, fallback) {
  var theme = chakra_ui_system_esm_useTheme();

  if (Array.isArray(token)) {
    var fallbackArr = [];

    if (fallback) {
      fallbackArr = Array.isArray(fallback) ? fallback : [fallback];
    }

    return token.map(function (token, index) {
      var _fallbackArr$index2;

      if (scale === "breakpoints") {
        var _fallbackArr$index;

        return resolveBreakpointValue(theme, token, (_fallbackArr$index = fallbackArr[index]) != null ? _fallbackArr$index : token);
      }

      var path = scale + "." + token;
      return chakra_ui_system_esm_resolveTokenValue(theme, path, (_fallbackArr$index2 = fallbackArr[index]) != null ? _fallbackArr$index2 : token);
    });
  }

  if (scale === "breakpoints") {
    return resolveBreakpointValue(theme, token, fallback);
  }

  var path = scale + "." + token;
  return chakra_ui_system_esm_resolveTokenValue(theme, path, fallback);
}
function useProps(themeKey, props) {
  var _theme$components, _styleConfig$defaultP;

  var _useChakra = useChakra(),
      theme = _useChakra.theme,
      colorMode = _useChakra.colorMode;

  var styleConfig = props.styleConfig || ((_theme$components = theme.components) == null ? void 0 : _theme$components[themeKey]);
  var defaultProps = (_styleConfig$defaultP = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _styleConfig$defaultP : {};

  var propsWithDefault = chakra_ui_system_esm_extends({}, defaultProps, filterUndefined(props));

  var stylesRef = useRef({});
  var mergedProps = mergeWith({}, propsWithDefault, {
    theme: theme,
    colorMode: colorMode
  });
  var memoizedStyles = useMemo(function () {
    if (styleConfig) {
      var _styleConfig$baseStyl, _styleConfig$variants, _styleConfig$variants2, _styleConfig$sizes, _styleConfig$sizes2;

      var baseStyles = runIfFn((_styleConfig$baseStyl = styleConfig.baseStyle) != null ? _styleConfig$baseStyl : {}, mergedProps);
      var variants = runIfFn((_styleConfig$variants = (_styleConfig$variants2 = styleConfig.variants) == null ? void 0 : _styleConfig$variants2[mergedProps.variant]) != null ? _styleConfig$variants : {}, mergedProps);
      var sizes = runIfFn((_styleConfig$sizes = (_styleConfig$sizes2 = styleConfig.sizes) == null ? void 0 : _styleConfig$sizes2[mergedProps.size]) != null ? _styleConfig$sizes : {}, mergedProps);
      var styles = mergeWith(baseStyles, sizes, variants);

      if (styleConfig.parts) {
        styleConfig.parts.forEach(function (part) {
          var _styles$part;

          styles[part] = (_styles$part = styles[part]) != null ? _styles$part : {};
        });
      }

      var isStyleEqual = isEqual(stylesRef.current, styles);

      if (!isStyleEqual) {
        stylesRef.current = styles;
      }
    }

    return stylesRef.current;
  }, [styleConfig, mergedProps]);
  return {
    styles: memoizedStyles,
    props: omitThemingProps(propsWithDefault)
  };
}

function chakra_ui_system_esm_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/**
 * List of props for emotion to omit from DOM.
 * It mostly consists of Chakra props
 */

var allPropNames = new Set([].concat(propNames, ["textStyle", "layerStyle", "apply", "isTruncated", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"]));
/**
 * htmlWidth and htmlHeight is used in the <Image />
 * component to support the native `width` and `height` attributes
 *
 * https://github.com/chakra-ui/chakra-ui/issues/149
 */

var validHTMLProps = new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
var shouldForwardProp = function shouldForwardProp(prop) {
  return validHTMLProps.has(prop) || !allPropNames.has(prop);
};

var _excluded$1 = ["theme", "css", "__css", "sx"],
    _excluded2 = ["baseStyle"];

/**
 * Style resolver function that manages how style props are merged
 * in combination with other possible ways of defining styles.
 *
 * For example, take a component defined this way:
 * ```jsx
 * <Box fontSize="24px" sx={{ fontSize: "40px" }}></Box>
 * ```
 *
 * We want to manage the priority of the styles properly to prevent unwanted
 * behaviors. Right now, the `sx` prop has the highest priority so the resolved
 * fontSize will be `40px`
 */
var toCSSObject = function toCSSObject(_ref) {
  var baseStyle = _ref.baseStyle;
  return function (props) {
    props.theme;
        var cssProp = props.css,
        __css = props.__css,
        sx = props.sx,
        rest = chakra_ui_system_esm_objectWithoutPropertiesLoose(props, _excluded$1);

    var styleProps = objectFilter(rest, function (_, prop) {
      return isStyleProp(prop);
    });
    var finalBaseStyle = chakra_ui_utils_esm_runIfFn(baseStyle, props);
    var finalStyles = Object.assign({}, __css, finalBaseStyle, chakra_ui_utils_esm_filterUndefined(styleProps), sx);
    var computedCSS = chakra_ui_styled_system_esm_css(finalStyles)(props.theme);
    return cssProp ? [computedCSS, cssProp] : computedCSS;
  };
};
function styled(component, options) {
  var _ref2 = options != null ? options : {},
      baseStyle = _ref2.baseStyle,
      styledOptions = chakra_ui_system_esm_objectWithoutPropertiesLoose(_ref2, _excluded2);

  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }

  var styleObject = toCSSObject({
    baseStyle: baseStyle
  });
  return emotion_styled_browser_esm(component, styledOptions)(styleObject);
}
var chakra_ui_system_esm_chakra = styled;
domElements.forEach(function (tag) {
  chakra_ui_system_esm_chakra[tag] = chakra_ui_system_esm_chakra(tag);
});

/**
 * All credit goes to Chance (Reach UI), Haz (Reakit) and (fluentui)
 * for creating the base type definitions upon which we improved on
 */
function chakra_ui_system_esm_forwardRef(component) {
  return /*#__PURE__*/external_React_.forwardRef(component);
}

var chakra_ui_system_esm_excluded = (/* unused pure expression or super */ null && (["styleConfig"]));
function useStyleConfig(themeKey, props, opts) {
  var _styleConfig$defaultP;

  if (props === void 0) {
    props = {};
  }

  if (opts === void 0) {
    opts = {};
  }

  var _props = props,
      styleConfigProp = _props.styleConfig,
      rest = chakra_ui_system_esm_objectWithoutPropertiesLoose(_props, chakra_ui_system_esm_excluded);

  var _useChakra = useChakra(),
      theme = _useChakra.theme,
      colorMode = _useChakra.colorMode;

  var themeStyleConfig = memoizedGet(theme, "components." + themeKey);
  var styleConfig = styleConfigProp || themeStyleConfig;
  var mergedProps = mergeWith({
    theme: theme,
    colorMode: colorMode
  }, (_styleConfig$defaultP = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _styleConfig$defaultP : {}, filterUndefined(omit(rest, ["children"])));
  /**
   * Store the computed styles in a `ref` to avoid unneeded re-computation
   */

  var stylesRef = useRef({});

  if (styleConfig) {
    var _styleConfig$baseStyl, _styleConfig$variants, _styleConfig$variants2, _styleConfig$sizes$me, _styleConfig$sizes, _opts;

    var baseStyles = runIfFn((_styleConfig$baseStyl = styleConfig.baseStyle) != null ? _styleConfig$baseStyl : {}, mergedProps);
    var variants = runIfFn((_styleConfig$variants = (_styleConfig$variants2 = styleConfig.variants) == null ? void 0 : _styleConfig$variants2[mergedProps.variant]) != null ? _styleConfig$variants : {}, mergedProps);
    var sizes = runIfFn((_styleConfig$sizes$me = (_styleConfig$sizes = styleConfig.sizes) == null ? void 0 : _styleConfig$sizes[mergedProps.size]) != null ? _styleConfig$sizes$me : {}, mergedProps);
    var styles = mergeWith({}, baseStyles, sizes, variants);

    if ((_opts = opts) != null && _opts.isMultiPart && styleConfig.parts) {
      styleConfig.parts.forEach(function (part) {
        var _styles$part;

        styles[part] = (_styles$part = styles[part]) != null ? _styles$part : {};
      });
    }

    var isStyleEqual = isEqual(stylesRef.current, styles);

    if (!isStyleEqual) {
      stylesRef.current = styles;
    }
  }

  return stylesRef.current;
}
function useMultiStyleConfig(themeKey, props) {
  return useStyleConfig(themeKey, props, {
    isMultiPart: true
  });
}



// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(640);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js





/**
 * React hook to manage boolean (on - off) states
 *
 * @param initialState the initial boolean state value
 */
function useBoolean(initialState) {
  if (initialState === void 0) {
    initialState = false;
  }

  var _useState = useState(initialState),
      value = _useState[0],
      setValue = _useState[1];

  var on = useCallback(function () {
    setValue(true);
  }, []);
  var off = useCallback(function () {
    setValue(false);
  }, []);
  var toggle = useCallback(function () {
    setValue(function (prev) {
      return !prev;
    });
  }, []);
  return [value, {
    on: on,
    off: off,
    toggle: toggle
  }];
}

/**
 * useSafeLayoutEffect enables us to safely call `useLayoutEffect` on the browser
 * (for SSR reasons)
 *
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser.
 *
 * @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 */

var useSafeLayoutEffect = isBrowser ? external_React_.useLayoutEffect : external_React_.useEffect;

/**
 * React hook to persist any value between renders,
 * but keeps it up-to-date if it changes.
 *
 * @param value the value or function to persist
 */

function useCallbackRef(fn, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var ref = React.useRef(fn);
  useSafeLayoutEffect(function () {
    ref.current = fn;
  }); // eslint-disable-next-line react-hooks/exhaustive-deps

  return React.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current == null ? void 0 : ref.current.apply(ref, args);
  }, deps);
}

function chakra_ui_hooks_esm_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var chakra_ui_hooks_esm_excluded = (/* unused pure expression or super */ null && (["timeout"]));

/**
 * React hook to copy content to clipboard
 *
 * @param text the text or value to copy
 * @param {Number} [optionsOrTimeout=1500] optionsOrTimeout - delay (in ms) to switch back to initial state once copied.
 * @param {Object} optionsOrTimeout
 * @param {string} optionsOrTimeout.format - set the desired MIME type
 * @param {number} optionsOrTimeout.timeout - delay (in ms) to switch back to initial state once copied.
 */
function useClipboard(text, optionsOrTimeout) {
  if (optionsOrTimeout === void 0) {
    optionsOrTimeout = {};
  }

  var _useState = useState(false),
      hasCopied = _useState[0],
      setHasCopied = _useState[1];

  var _ref = typeof optionsOrTimeout === "number" ? {
    timeout: optionsOrTimeout
  } : optionsOrTimeout,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 1500 : _ref$timeout,
      copyOptions = chakra_ui_hooks_esm_objectWithoutPropertiesLoose(_ref, chakra_ui_hooks_esm_excluded);

  var onCopy = useCallback(function () {
    var didCopy = copy(text, copyOptions);
    setHasCopied(didCopy);
  }, [text, copyOptions]);
  useEffect(function () {
    var timeoutId = null;

    if (hasCopied) {
      timeoutId = window.setTimeout(function () {
        setHasCopied(false);
      }, timeout);
    }

    return function () {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);
  return {
    value: text,
    onCopy: onCopy,
    hasCopied: hasCopied
  };
}

/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */

function useConst(init) {
  var ref = useRef(null);

  if (ref.current === null) {
    ref.current = typeof init === "function" ? init() : init;
  }

  return ref.current;
}

function useControllableProp(prop, state) {
  var isControlled = prop !== undefined;
  var value = isControlled && typeof prop !== "undefined" ? prop : state;
  return [isControlled, value];
}

/**
 * React hook for using controlling component state.
 * @param props
 */
function useControllableState(props) {
  var valueProp = props.value,
      defaultValue = props.defaultValue,
      onChange = props.onChange,
      _props$shouldUpdate = props.shouldUpdate,
      shouldUpdate = _props$shouldUpdate === void 0 ? function (prev, next) {
    return prev !== next;
  } : _props$shouldUpdate;
  var onChangeProp = useCallbackRef(onChange);
  var shouldUpdateProp = useCallbackRef(shouldUpdate);

  var _React$useState = React.useState(defaultValue),
      valueState = _React$useState[0],
      setValue = _React$useState[1];

  var isControlled = valueProp !== undefined;
  var value = isControlled ? valueProp : valueState;
  var updateValue = React.useCallback(function (next) {
    var nextValue = runIfFn(next, value);

    if (!shouldUpdateProp(value, nextValue)) {
      return;
    }

    if (!isControlled) {
      setValue(nextValue);
    }

    onChangeProp(nextValue);
  }, [isControlled, onChangeProp, value, shouldUpdateProp]);
  return [value, updateValue];
}

/**
 * Reack hook to measure a component's dimensions
 *
 * @param ref ref of the component to measure
 * @param observe if `true`, resize and scroll observers will be turned on
 */

function useDimensions(ref, observe) {
  var _React$useState = React.useState(null),
      dimensions = _React$useState[0],
      setDimensions = _React$useState[1];

  var rafId = React.useRef();
  useSafeLayoutEffect(function () {
    if (!ref.current) return undefined;
    var node = ref.current;

    function measure() {
      rafId.current = requestAnimationFrame(function () {
        var boxModel = getBox(node);
        setDimensions(boxModel);
      });
    }

    measure();

    if (observe) {
      window.addEventListener("resize", measure);
      window.addEventListener("scroll", measure);
    }

    return function () {
      if (observe) {
        window.removeEventListener("resize", measure);
        window.removeEventListener("scroll", measure);
      }

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [observe]);
  return dimensions;
}

function chakra_ui_hooks_esm_extends() {
  chakra_ui_hooks_esm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return chakra_ui_hooks_esm_extends.apply(this, arguments);
}

// This implementation is heavily inspired by react-aria's implementation
var defaultIdContext = {
  prefix: Math.round(Math.random() * 10000000000),
  current: 0
};
var IdContext = /*#__PURE__*/(/* unused pure expression or super */ null && (React.createContext(defaultIdContext)));
var IdProvider = /*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(function (_ref) {
  var children = _ref.children;
  var currentContext = React.useContext(IdContext);
  var isRoot = currentContext === defaultIdContext;
  var context = React.useMemo(function () {
    return {
      prefix: isRoot ? 0 : ++currentContext.prefix,
      current: 0
    };
  }, [isRoot, currentContext]);
  return /*#__PURE__*/React.createElement(IdContext.Provider, {
    value: context
  }, children);
})));
function useId(idProp, prefix) {
  var context = React.useContext(IdContext);
  return React.useMemo(function () {
    return idProp || [prefix, context.prefix, ++context.current].filter(Boolean).join("-");
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [idProp, prefix]);
}
/**
 * Reack hook to generate ids for use in compound components
 *
 * @param idProp the external id passed from the user
 * @param prefixes array of prefixes to use
 *
 * @example
 *
 * ```js
 * const [buttonId, menuId] = useIds("52", "button", "menu")
 *
 * // buttonId will be `button-52`
 * // menuId will be `menu-52`
 * ```
 */

function useIds(idProp) {
  for (var _len = arguments.length, prefixes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    prefixes[_key - 1] = arguments[_key];
  }

  var id = useId(idProp);
  return React.useMemo(function () {
    return prefixes.map(function (prefix) {
      return prefix + "-" + id;
    });
  }, [id, prefixes]);
}
/**
 * Used to generate an id, and after render, check if that id is rendered so we know
 * if we can use it in places such as `aria-labelledby`.
 *
 * @param partId - The unique id for the component part
 *
 * @example
 * const { ref, id } = useOptionalPart<HTMLInputElement>(`${id}-label`)
 */

function useOptionalPart(partId) {
  var _React$useState = React.useState(null),
      id = _React$useState[0],
      setId = _React$useState[1];

  var ref = React.useCallback(function (node) {
    setId(node ? partId : null);
  }, [partId]);
  return {
    ref: ref,
    id: id,
    isRendered: Boolean(id)
  };
}

function useDisclosure(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      onCloseProp = _props.onClose,
      onOpenProp = _props.onOpen,
      isOpenProp = _props.isOpen,
      idProp = _props.id;
  var onOpenPropCallbackRef = useCallbackRef(onOpenProp);
  var onClosePropCallbackRef = useCallbackRef(onCloseProp);

  var _React$useState = React.useState(props.defaultIsOpen || false),
      isOpenState = _React$useState[0],
      setIsOpen = _React$useState[1];

  var _useControllableProp = useControllableProp(isOpenProp, isOpenState),
      isControlled = _useControllableProp[0],
      isOpen = _useControllableProp[1];

  var id = useId(idProp, "disclosure");
  var onClose = React.useCallback(function () {
    if (!isControlled) {
      setIsOpen(false);
    }

    onClosePropCallbackRef == null ? void 0 : onClosePropCallbackRef();
  }, [isControlled, onClosePropCallbackRef]);
  var onOpen = React.useCallback(function () {
    if (!isControlled) {
      setIsOpen(true);
    }

    onOpenPropCallbackRef == null ? void 0 : onOpenPropCallbackRef();
  }, [isControlled, onOpenPropCallbackRef]);
  var onToggle = React.useCallback(function () {
    var action = isOpen ? onClose : onOpen;
    action();
  }, [isOpen, onOpen, onClose]);
  return {
    isOpen: !!isOpen,
    onOpen: onOpen,
    onClose: onClose,
    onToggle: onToggle,
    isControlled: isControlled,
    getButtonProps: function getButtonProps(props) {
      if (props === void 0) {
        props = {};
      }

      return chakra_ui_hooks_esm_extends({}, props, {
        "aria-expanded": "true",
        "aria-controls": id,
        onClick: callAllHandlers(props.onClick, onToggle)
      });
    },
    getDisclosureProps: function getDisclosureProps(props) {
      if (props === void 0) {
        props = {};
      }

      return chakra_ui_hooks_esm_extends({}, props, {
        hidden: !isOpen,
        id: id
      });
    }
  };
}

/**
 * React hook for performant `useCallbacks`
 *
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @deprecated Use `useCallbackRef` instead. `useEventCallback` will be removed
 * in a future version.
 */

function useEventCallback(callback) {
  var ref = React.useRef(callback);
  useSafeLayoutEffect(function () {
    ref.current = callback;
  });
  return React.useCallback(function (event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return ref.current.apply(ref, [event].concat(args));
  }, []);
}

/**
 * React hook to manage browser event listeners
 *
 * @param event the event name
 * @param handler the event handler function to execute
 * @param doc the dom environment to execute against (defaults to `document`)
 * @param options the event listener options
 *
 * @internal
 */
function useEventListener(event, handler, env, options) {
  var listener = useCallbackRef(handler);
  React.useEffect(function () {
    var _runIfFn;

    var node = (_runIfFn = runIfFn(env)) != null ? _runIfFn : document;
    node.addEventListener(event, listener, options);
    return function () {
      node.removeEventListener(event, listener, options);
    };
  }, [event, env, options, listener]);
  return function () {
    var _runIfFn2;

    var node = (_runIfFn2 = runIfFn(env)) != null ? _runIfFn2 : document;
    node.removeEventListener(event, listener, options);
  };
}

function useEventListenerMap() {
  var listeners = React.useRef(new Map());
  var currentListeners = listeners.current;
  var add = React.useCallback(function (el, type, listener, options) {
    var pointerEventListener = wrapPointerEventHandler(listener, type === "pointerdown");
    listeners.current.set(listener, {
      __listener: pointerEventListener,
      type: getPointerEventName(type),
      el: el,
      options: options
    });
    el.addEventListener(type, pointerEventListener, options);
  }, []);
  var remove = React.useCallback(function (el, type, listener, options) {
    var _listeners$current$ge = listeners.current.get(listener),
        pointerEventListener = _listeners$current$ge.__listener;

    el.removeEventListener(type, pointerEventListener, options);
    listeners.current["delete"](pointerEventListener);
  }, []);
  React.useEffect(function () {
    return function () {
      currentListeners.forEach(function (value, key) {
        remove(value.el, value.type, key, value.options);
      });
    };
  }, [remove, currentListeners]);
  return {
    add: add,
    remove: remove
  };
}

/**
 * React effect hook that invokes only on update.
 * It doesn't invoke on mount
 */

var useUpdateEffect = function useUpdateEffect(effect, deps) {
  var mounted = React.useRef(false);
  React.useEffect(function () {
    if (mounted.current) {
      return effect();
    }

    mounted.current = true;
    return undefined; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return mounted.current;
};

/**
 * React hook to focus an element conditionally
 *
 * @param ref the ref of the element to focus
 * @param options focus management options
 */
function useFocusEffect(ref, options) {
  var shouldFocus = options.shouldFocus,
      preventScroll = options.preventScroll;
  useUpdateEffect(function () {
    var node = ref.current;
    if (!node || !shouldFocus) return;

    if (!hasFocusWithin(node)) {
      focus(node, {
        preventScroll: preventScroll,
        nextTick: true
      });
    }
  }, [shouldFocus, ref, preventScroll]);
}

function preventReturnFocus(containerRef) {
  var el = containerRef.current;
  if (!el) return false;
  var activeElement = getActiveElement(el);
  if (!activeElement) return false;
  if (contains(el, activeElement)) return false;
  if (isTabbable(activeElement)) return true;
  return false;
}
/**
 * Popover hook to manage the focus when the popover closes or hides.
 *
 * We either want to return focus back to the popover trigger or
 * let focus proceed normally if user moved to another interactive
 * element in the viewport.
 */


function useFocusOnHide(containerRef, options) {
  var shouldFocusProp = options.shouldFocus,
      visible = options.visible,
      focusRef = options.focusRef;
  var shouldFocus = shouldFocusProp && !visible;
  useUpdateEffect(function () {
    if (!shouldFocus) return;

    if (preventReturnFocus(containerRef)) {
      return;
    }

    var el = (focusRef == null ? void 0 : focusRef.current) || containerRef.current;

    if (el) {
      focus(el, {
        nextTick: true
      });
    }
  }, [shouldFocus, containerRef, focusRef]);
}

/**
 * Credit goes to `framer-motion` of this useful utilities.
 * License can be found here: https://github.com/framer/motion
 */
/**
 * @internal
 */

function usePointerEvent(env, eventName, handler, options) {
  return useEventListener(getPointerEventName(eventName), wrapPointerEventHandler(handler, eventName === "pointerdown"), env, options);
}

/**
 * Polyfill to get `relatedTarget` working correctly consistently
 * across all browsers.
 *
 * It ensures that elements receives focus on pointer down if
 * it's not the active active element.
 *
 * @internal
 */
function useFocusOnPointerDown(props) {
  var ref = props.ref,
      elements = props.elements,
      enabled = props.enabled;
  var isSafari = detectBrowser("Safari");

  var doc = function doc() {
    return getOwnerDocument(ref.current);
  };

  usePointerEvent(doc, "pointerdown", function (event) {
    if (!isSafari || !enabled) return;
    var target = event.target;
    var els = elements != null ? elements : [ref];
    var isValidTarget = els.some(function (elementOrRef) {
      var el = isRefObject(elementOrRef) ? elementOrRef.current : elementOrRef;
      return contains(el, target);
    });

    if (!isActiveElement(target) && isValidTarget) {
      event.preventDefault();
      focus(target);
    }
  });
}

var defaultOptions = {
  preventScroll: true,
  shouldFocus: false
};
function useFocusOnShow(target, options) {
  if (options === void 0) {
    options = defaultOptions;
  }

  var _options = options,
      focusRef = _options.focusRef,
      preventScroll = _options.preventScroll,
      shouldFocus = _options.shouldFocus,
      visible = _options.visible;
  var element = isRefObject(target) ? target.current : target;
  var autoFocus = shouldFocus && visible;
  var onFocus = useCallback(function () {
    if (!element || !autoFocus) return;
    if (contains(element, document.activeElement)) return;

    if (focusRef != null && focusRef.current) {
      focus(focusRef.current, {
        preventScroll: preventScroll,
        nextTick: true
      });
    } else {
      var tabbableEls = getAllFocusable(element);

      if (tabbableEls.length > 0) {
        focus(tabbableEls[0], {
          preventScroll: preventScroll,
          nextTick: true
        });
      }
    }
  }, [autoFocus, preventScroll, element, focusRef]);
  useUpdateEffect(function () {
    onFocus();
  }, [onFocus]);
  useEventListener("transitionend", onFocus, element);
}

function useUnmountEffect(fn, deps) {
  if (deps === void 0) {
    deps = [];
  }

  return React.useEffect(function () {
    return function () {
      return fn();
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  deps);
}

function useForceUpdate() {
  var unloadingRef = React.useRef(false);

  var _React$useState = React.useState(0),
      count = _React$useState[0],
      setCount = _React$useState[1];

  useUnmountEffect(function () {
    unloadingRef.current = true;
  });
  return React.useCallback(function () {
    if (!unloadingRef.current) {
      setCount(count + 1);
    }
  }, [count]);
}

/**
 * React Hook that provides a declarative `setInterval`
 *
 * @param callback the callback to execute at interval
 * @param delay the `setInterval` delay (in ms)
 */

function useInterval(callback, delay) {
  var fn = useCallbackRef(callback);
  React.useEffect(function () {
    var intervalId = null;

    var tick = function tick() {
      return fn();
    };

    if (delay !== null) {
      intervalId = window.setInterval(tick, delay);
    }

    return function () {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay, fn]);
}

/**
 * React hook to persist any value between renders,
 * but keeps it up-to-date if it changes.
 *
 * @param value the value or function to persist
 */

function useLatestRef(value) {
  var ref = React.useRef(null);
  ref.current = value;
  return ref;
}

/* eslint-disable react-hooks/exhaustive-deps */
function chakra_ui_hooks_esm_assignRef(ref, value) {
  if (ref == null) return;

  if (typeof ref === "function") {
    ref(value);
    return;
  }

  try {
    // @ts-ignore
    ref.current = value;
  } catch (error) {
    throw new Error("Cannot assign value '" + value + "' to ref '" + ref + "'");
  }
}
/**
 * React hook that merges react refs into a single memoized function
 *
 * @example
 * import React from "react";
 * import { useMergeRefs } from `@chakra-ui/hooks`;
 *
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   return <div {...props} ref={useMergeRefs(internalRef, ref)} />;
 * });
 */

function useMergeRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return React.useMemo(function () {
    if (refs.every(function (ref) {
      return ref == null;
    })) {
      return null;
    }

    return function (node) {
      refs.forEach(function (ref) {
        if (ref) chakra_ui_hooks_esm_assignRef(ref, node);
      });
    };
  }, refs);
}

/**
 * @deprecated `useMouseDownRef` will be removed in a future version.
 */

function useMouseDownRef(shouldListen) {
  if (shouldListen === void 0) {
    shouldListen = true;
  }

  var mouseDownRef = React__default.useRef();
  useEventListener("mousedown", function (event) {
    if (shouldListen) {
      mouseDownRef.current = event.target;
    }
  });
  return mouseDownRef;
}

/**
 * Example, used in components like Dialogs and Popovers so they can close
 * when a user clicks outside them.
 */
function useOutsideClick(props) {
  var ref = props.ref,
      handler = props.handler,
      _props$enabled = props.enabled,
      enabled = _props$enabled === void 0 ? true : _props$enabled;
  var savedHandler = useCallbackRef(handler);
  var stateRef = useRef({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  var state = stateRef.current;
  useEffect(function () {
    if (!enabled) return;

    var onPointerDown = function onPointerDown(e) {
      if (isValidEvent(e, ref)) {
        state.isPointerDown = true;
      }
    };

    var onMouseUp = function onMouseUp(event) {
      if (state.ignoreEmulatedMouseEvents) {
        state.ignoreEmulatedMouseEvents = false;
        return;
      }

      if (state.isPointerDown && handler && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };

    var onTouchEnd = function onTouchEnd(event) {
      state.ignoreEmulatedMouseEvents = true;

      if (handler && state.isPointerDown && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };

    var doc = getOwnerDocument(ref.current);
    doc.addEventListener("mousedown", onPointerDown, true);
    doc.addEventListener("mouseup", onMouseUp, true);
    doc.addEventListener("touchstart", onPointerDown, true);
    doc.addEventListener("touchend", onTouchEnd, true);
    return function () {
      doc.removeEventListener("mousedown", onPointerDown, true);
      doc.removeEventListener("mouseup", onMouseUp, true);
      doc.removeEventListener("touchstart", onPointerDown, true);
      doc.removeEventListener("touchend", onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state, enabled]);
}

function isValidEvent(event, ref) {
  var _ref$current;

  var target = event.target;
  if (event.button > 0) return false; // if the event target is no longer in the document

  if (target) {
    var doc = getOwnerDocument(target);
    if (!doc.body.contains(target)) return false;
  }

  return !((_ref$current = ref.current) != null && _ref$current.contains(target));
}

function usePanGesture(ref, props) {
  var onPan = props.onPan,
      onPanStart = props.onPanStart,
      onPanEnd = props.onPanEnd,
      onPanSessionStart = props.onPanSessionStart,
      onPanSessionEnd = props.onPanSessionEnd,
      threshold = props.threshold;
  var hasPanEvents = Boolean(onPan || onPanStart || onPanEnd || onPanSessionStart || onPanSessionEnd);
  var panSession = useRef(null);
  var handlers = {
    onSessionStart: onPanSessionStart,
    onSessionEnd: onPanSessionEnd,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: function onEnd(event, info) {
      panSession.current = null;
      onPanEnd == null ? void 0 : onPanEnd(event, info);
    }
  };
  useEffect(function () {
    var _panSession$current;

    (_panSession$current = panSession.current) == null ? void 0 : _panSession$current.updateHandlers(handlers);
  });

  function onPointerDown(event) {
    panSession.current = new PanSession(event, handlers, threshold);
  }

  usePointerEvent(function () {
    return ref.current;
  }, "pointerdown", hasPanEvents ? onPointerDown : noop);
  useUnmountEffect(function () {
    var _panSession$current2;

    (_panSession$current2 = panSession.current) == null ? void 0 : _panSession$current2.end();
    panSession.current = null;
  });
}

function usePrevious(value) {
  var ref = useRef();
  useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/**
 * Checks if the key pressed is a printable character
 * and can be used for shortcut navigation
 */

function isPrintableCharacter(event) {
  var key = event.key;
  return key.length === 1 || key.length > 1 && /[^a-zA-Z0-9]/.test(key);
}

/**
 * React hook that provides an enhanced keydown handler,
 * that's used for key navigation within menus, select dropdowns.
 */
function useShortcut(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      _props$timeout = _props.timeout,
      timeout = _props$timeout === void 0 ? 300 : _props$timeout,
      _props$preventDefault = _props.preventDefault,
      preventDefault = _props$preventDefault === void 0 ? function () {
    return true;
  } : _props$preventDefault;

  var _React$useState = React.useState([]),
      keys = _React$useState[0],
      setKeys = _React$useState[1];

  var timeoutRef = React.useRef();

  var flush = function flush() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  var clearKeysAfterDelay = function clearKeysAfterDelay() {
    flush();
    timeoutRef.current = setTimeout(function () {
      setKeys([]);
      timeoutRef.current = null;
    }, timeout);
  };

  React.useEffect(function () {
    return flush;
  }, []);

  function onKeyDown(fn) {
    return function (event) {
      if (event.key === "Backspace") {
        var keysCopy = [].concat(keys);
        keysCopy.pop();
        setKeys(keysCopy);
        return;
      }

      if (isPrintableCharacter(event)) {
        var _keysCopy = keys.concat(event.key);

        if (preventDefault(event)) {
          event.preventDefault();
          event.stopPropagation();
        }

        setKeys(_keysCopy);
        fn(_keysCopy.join(""));
        clearKeysAfterDelay();
      }
    };
  }

  return onKeyDown;
}

/**
 * React hook that provides a declarative `setTimeout`
 *
 * @param callback the callback to run after specified delay
 * @param delay the delay (in ms)
 */

function useTimeout(callback, delay) {
  var fn = useCallbackRef(callback);
  React.useEffect(function () {
    if (delay == null) return undefined;
    var timeoutId = null;
    timeoutId = window.setTimeout(function () {
      fn();
    }, delay);
    return function () {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay, fn]);
}

function useWhyDidYouUpdate(name, props) {
  var previousProps = React.useRef();
  React.useEffect(function () {
    if (previousProps.current) {
      var allKeys = Object.keys(chakra_ui_hooks_esm_extends({}, previousProps.current, props));
      var changesObj = {};
      allKeys.forEach(function (key) {
        if (previousProps.current[key] !== props[key]) {
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key]
          };
        }
      });

      if (Object.keys(changesObj).length) {
        console.log("[why-did-you-update]", name, changesObj);
      }
    }

    previousProps.current = props;
  });
}



;// CONCATENATED MODULE: ./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js






function chakra_ui_image_esm_extends() {
  chakra_ui_image_esm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return chakra_ui_image_esm_extends.apply(this, arguments);
}

function chakra_ui_image_esm_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/**
 * React hook that loads an image in the browser,
 * and let's us know the `status` so we can show image
 * fallback if it is still `pending`
 *
 * @returns the status of the image loading progress
 *
 * @example
 *
 * ```jsx
 * function App(){
 *   const status = useImage({ src: "image.png" })
 *   return status === "loaded" ? <img src="image.png" /> : <Placeholder />
 * }
 * ```
 */
function useImage(props) {
  var loading = props.loading,
      src = props.src,
      srcSet = props.srcSet,
      onLoad = props.onLoad,
      onError = props.onError,
      crossOrigin = props.crossOrigin,
      sizes = props.sizes,
      ignoreFallback = props.ignoreFallback;

  var _useState = (0,external_React_.useState)("pending"),
      status = _useState[0],
      setStatus = _useState[1];

  (0,external_React_.useEffect)(function () {
    setStatus(src ? "loading" : "pending");
  }, [src]);
  var imageRef = (0,external_React_.useRef)();
  var load = (0,external_React_.useCallback)(function () {
    if (!src) return;
    flush();
    var img = new Image();
    img.src = src;
    if (crossOrigin) img.crossOrigin = crossOrigin;
    if (srcSet) img.srcset = srcSet;
    if (sizes) img.sizes = sizes;
    if (loading) img.loading = loading;

    img.onload = function (event) {
      flush();
      setStatus("loaded");
      onLoad == null ? void 0 : onLoad(event);
    };

    img.onerror = function (error) {
      flush();
      setStatus("failed");
      onError == null ? void 0 : onError(error);
    };

    imageRef.current = img;
  }, [src, crossOrigin, srcSet, sizes, onLoad, onError, loading]);

  var flush = function flush() {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };

  useSafeLayoutEffect(function () {
    /**
     * If user opts out of the fallback/placeholder
     * logic, let's bail out.
     */
    if (ignoreFallback) return undefined;

    if (status === "loading") {
      load();
    }

    return function () {
      flush();
    };
  }, [status, load, ignoreFallback]);
  /**
   * If user opts out of the fallback/placeholder
   * logic, let's just return 'loaded'
   */

  return ignoreFallback ? "loaded" : status;
}

var chakra_ui_image_esm_excluded = ["htmlWidth", "htmlHeight", "alt"],
    chakra_ui_image_esm_excluded2 = ["fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"];
var NativeImage = /*#__PURE__*/external_React_.forwardRef(function (props, ref) {
  var htmlWidth = props.htmlWidth,
      htmlHeight = props.htmlHeight,
      alt = props.alt,
      rest = chakra_ui_image_esm_objectWithoutPropertiesLoose(props, chakra_ui_image_esm_excluded);

  return /*#__PURE__*/external_React_.createElement("img", chakra_ui_image_esm_extends({
    width: htmlWidth,
    height: htmlHeight,
    ref: ref,
    alt: alt
  }, rest));
});

/**
 * React component that renders an image with support
 * for fallbacks
 *
 * @see Docs https://chakra-ui.com/image
 */
var Image$1 = /*#__PURE__*/chakra_ui_system_esm_forwardRef(function (props, ref) {
  var fallbackSrc = props.fallbackSrc,
      fallback = props.fallback,
      src = props.src,
      srcSet = props.srcSet,
      align = props.align,
      fit = props.fit,
      loading = props.loading,
      ignoreFallback = props.ignoreFallback,
      crossOrigin = props.crossOrigin,
      rest = chakra_ui_image_esm_objectWithoutPropertiesLoose(props, chakra_ui_image_esm_excluded2);
  /**
   * Defer to native `img` tag if `loading` prop is passed
   * @see https://github.com/chakra-ui/chakra-ui/issues/1027
   */


  var shouldIgnore = loading != null || ignoreFallback || fallbackSrc === undefined && fallback === undefined; // if the user doesn't provide any kind of fallback we should ignore it

  var status = useImage(chakra_ui_image_esm_extends({}, props, {
    ignoreFallback: shouldIgnore
  }));

  var shared = chakra_ui_image_esm_extends({
    ref: ref,
    objectFit: fit,
    objectPosition: align
  }, shouldIgnore ? rest : chakra_ui_utils_esm_omit(rest, ["onError", "onLoad"]));

  if (status !== "loaded") {
    /**
     * If user passed a custom fallback component,
     * let's render it here.
     */
    if (fallback) return fallback;
    return /*#__PURE__*/external_React_.createElement(chakra_ui_system_esm_chakra.img, chakra_ui_image_esm_extends({
      as: NativeImage,
      className: "chakra-image__placeholder",
      src: fallbackSrc
    }, shared));
  }

  return /*#__PURE__*/external_React_.createElement(chakra_ui_system_esm_chakra.img, chakra_ui_image_esm_extends({
    as: NativeImage,
    src: src,
    srcSet: srcSet,
    crossOrigin: crossOrigin,
    loading: loading,
    className: "chakra-image"
  }, shared));
});

/**
 * Fallback component for most SSR users who want to use the native `img` with
 * support for chakra props
 */
var Img = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(chakra.img, chakra_ui_image_esm_extends({
    ref: ref,
    as: NativeImage,
    className: "chakra-image"
  }, props));
})));

if (__DEV__) {
  Image$1.displayName = "Image";
}



;// CONCATENATED MODULE: external ["wp","blockEditor"]
const external_wp_blockEditor_namespaceObject = window["wp"]["blockEditor"];
;// CONCATENATED MODULE: ./assets/img/course-categories-block-grid-design.png
/* harmony default export */ const course_categories_block_grid_design = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAACUCAMAAAB8x5+oAAAAOVBMVEX///+tuv/L0/+rq6vw8//k5/z19v3l6f/+/v77+/vU1NS6urrd3d3CwsLLy8uampru7u7l5eWCgoJwY4XLAAAERElEQVR42u3d21bbOhAG4LEGydKcdHj/h90XDtB2tSVYMjs0818kiwsGfSiSBfGsAHg8Ho/H4/F4PA+UvCDrSi2v9IekOJ29AADAy3yl+AIAAGWfr5T+rt7nkwAA8oJCe8xLx+RqV7va1a52tatd7WpXu9rVrnb1I6hDjPu+7zGEWXUMR6UYptXHoOIHpc6rQzi4r8/n1XELIR6/v21SfeegTqtj2LYt7PvtaWqut20L8ag4q75vUBNzvW3btsdtXn2rcRScV2/xw0HNzfXTqZ95ro8fEOfX9XeZ62Pzidu2hT3OXrlu6hCnr1yv6ouuXMf1Nf59oPe9wmOMIewhxH1ave/3DGrqbHacCB7sbHbPoPxE6mpXu9rVrna1q13tale72tWu/kp1eZnPoX5ZkUO9oFC5/FbUcnucv/uzZACAy0e8JOXdPlvJ1f8D4iHUv7vfOa9ByuhUSWAQ1ErEXKv1U+o+cIhJFSIVUmFU6emUulZqompGRKINRlMxwSasQivUdWBC5Da4YK9SKyHqSbViRURErGij2rBa4aS6MlZEHIhcrY2j6OBaGVeorXFWtYIMytTZGjOdUicBIjY1xUGEFa3JSbUhoTERmamxUCEiVBqdzfSxdrP3JdcFABoAtDSxrnP+ZR2XtmpZP+ke3htIW6Puvc/VelO3Pj+sv6ZZo27W1YiIy4Q6qUqTriZKZGdqvauVtUk362znSn0QpsLEitgqKraZuTayxMSK2hHtRK333UxZExMzYkfU2i59uee8bF2fKeUnUlc/IrrAqrGmHwte+sfxfFZXWlEqg8fjea4s3DjKslKX72Yr/vd8bL1tQaXj4Fme7F2A3d/7cLWrXe1qV7va1a52tatd7WpX7951/mfOwq7zcM+gZrpTjx8Qwnz/9bqu8+216/zCntw1Xee3Dte4PX7Xebyz/dX7r7+/2uf6ibrO3xq8V1y51nWdh6u7zvdFXed7jHsM+4eV7jqlxMu7ztedzeLbg59IXe1qV7va1a52tatd7WpXu9rV/5zau869A8LV/6Q6rVIfNzi3kgq0AgA5ARxNqp9Wp18GldNiNI2OwsRExpWQsCNROaPujFhbNUQYVZhUWdmUie2z6lrZsKOxEjIhE6IwLVTXUVuVW7e41WGjcT01141Rh5oiAmKtjPjWhP5pNVaVQe9t7MMG1YVqacSdRYVFhJhaZ8Jz65pNOmcmAbbOpFKriPQ+Pq0WkMJ9YFcSERGhJgPXvsh/ahfIGVJetJsdy/t4+vRulvOP3/fzV76Hn0oXIFmzh1tKllaoc5MuIHKdmi1RUyMmVsU0oS4klkmNVAnv3rd/f+XipmBNSZDQGJf3X5uBkhlzQyPuE+pkImaqLKRMPKMWFQM1I8aGZnrNrOdV6zrnRev6KPTATaZ+Dv8e6hVd08co07JKuVzef/1Qn+n7ZR8P7PF4PB6Px+PxfG3+A+QAIvSNtIKZAAAAAElFTkSuQmCC");
;// CONCATENATED MODULE: ./assets/img/courses-block-grid-design.png
/* harmony default export */ const courses_block_grid_design = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAAD6CAMAAABOOfGCAAABC1BMVEX////7+/v+//3//v/8/P39/v////7l6f///v78/fv+///9/v3s7v35+fj6+/95Y+H29//n6//29/bn6/7z9PTz9f7w8fDu7fCruP+6u72/wMHDxMLq6+ve397Hx8nh4+Lb29zo6OjS1NPl5eX+qEvQ0dHIy8jW1tjLzc/Y2dXy3LFq237W0fHk5vu1tbqOfN+toeSvr7Smmuufoat8ZuKnqbGbjOfd4v+ZmqXPz8nU2/+xvf/5yZnGz//z5cfj2vGAa+K6xP/58+T+tmuQkZ6HcuG2rOfEuuj27NS37MP6d56b5qrPyef4iKvv0cDxwdn0rsh73o71mbiIipjo7+59f45/g/luc4n7//8/ySuNAAAi6UlEQVR42u1dC2PattrGxqiSVfV0rmfP91t9oUtIKSWBdV3aLW13tnbdWnbO9/9/yfdKJoAJFwNuTrpEEG7Br98HSe9FkvW0Oq3/WUH/qxN3Wv9D1K071P9E1AiKitsduXyjyqp45k/QzjtI5p/BB7egru/69R3qO9R3qK8LNboVqBF9+O3B5SGFH6stHS7oW4nr1IhKMtqEun3/3sHlPuGnYI8OFvTooaiIJlRCG1HLjaF+eDjqe82hpptQt+TGTsEaQt1qBDW+BtS4mbp+dE2oceOouz8ulz/2Q33+8c+yfDy/8XX94+Or5ZfdUBOh0vlv8/Jxd5Va19SvBeoQMPLymN8f/yhePX78x+6ojz/99unTh7L89uG4WRveEOrWJeo/Hj/+8ccncIPH6cMT+GgP1B9++/MTb97Qzn/7cN4saoSarWtvWteL5fHjcCcbXqIGrJ8+/Smq+7dPDdc1ariFr+zXP97bCXVpzc4/zLr1hz369XXUdWtuw70/lku4nw0/+3hZGrfhDaGu+uvj6W36Zld/jZtQScbX2K9vTJSyETWWbxxqRL+WupabrOtGWjjCX96Gf2Wot0Qpx8fV57UtHG1Dfbb0vMFzbUZ9dq+WSge08LOXL8VJfnj58viwnOuHlz9wCWfwfFimCRLOFgRuVmkv1N/88N1rDvfs5evvfth4CroN9YsXr7myP7x+8eKwup6r9OKH/fs12nyK7757fXz2Gp5+OMyGvxAiuLytqBHertLxVpXk/fu10PLs7MW2U+Ct/ZqLeHnv5cGoj+uqJNNrQL1tBGkX1LQJlehG1M2colYLbwL1Yl2f7Y96Y13zHl2e4vXZYahfvpiifvHysLqurRI9wF//8PL12dnrzV6ijg3nRhdQv3653V9vtmY7qbT/WMrx9rTpPqkVm/E07JsmYrM6Km1E3eCQ+w0bGZa/fBzeahA1JY2gbt1G1OgrQ41pYyqttWboJs34CBuOlS8+u3ezRpDuNVfXaPNahRuHGpHbiLqhFo5vI+rNOdc/FjW669dfBDVuMiKVlS8emzWEuskVGjL98qjRTUJd9uuvpoU3iVpuBHVnI2p8/5uyPILyzazMXj9aLN98s/iN2dvSObJHhxdhzZT73xxctqFmkvLggcLLgwcPpAfiCZ4vi7RQ4Hv8/+WXJfGk8G9KohMxJh1amCRs+MMHawo/mXL5ZvaCKyT0mirPC9uyelY5fG2qIlBL9GBBVJk/HlakO9RrUCNKCFHgJgqFd3Rf1FhRuChC5QNRYxCjCLWmL3DTqMlll7xEXvawPVBLEoEbf2T0INSUcTkKSFMkpRQo4UZRY0ZNUzdN89g0H+nGsaGbhOF9UFOJmaYBkkyNkYNQc5VEuc8fuMidfscaqKmkHR29Pzo/P3oPBR6OzvdErZDo6P35e5DmKtJhqKUjoQqUd+/f8Re61CzqFrQepumMGbqu6ZqkMbYnasx03YCbph/awrkf00CYpmmGJh4l1mwL5w1zudD9+rUyk6QcZs0wF/RwKqsUShq2ZlhFVBSEMZKRjGWM90ONhRgZIzpNcNEul9AsosaYyjLlcrhuMlduB1HbUaMWkagCYsn0jwrfxedM8G6oKQVjCwczBloSnfLfgDA6FUm3/phz1DKodKmMXD5p4olIUw1FOQQ1soa2FQWJZXb1MAojLwrTIjHcXVEjqg16iWeGReAFnucEbuCR3jAIDTfy3FAPGaY1UaPxMPWCKPKCwIu8MAFxfgiSJ+HQSQLXhI/dwD0MdX9kjQajwUW/PxoOBv3PF73BcDTK8a4tnOrD3ujz8GLIpQ1GIPEzGZnOcNAfXNgXw4ucyHVR21wTkAKaXYxGXN6Ii3WsvAuf9y6sz73PPeWQfi3bSeBbQ8uyB/bFoOiDfKew/tZ27teyNhj6A3/U641Gaa/nW6O/iT2MB85g2Asv7FEko7r9ugjztN8bXvRTgGr3bNvp97L+Z98b2r2+NeiHA2tQHFLXPCDlHZkHZa7tQtfJ4VWU092tGTc6YCFIZLtCYOrTaYxLSUfZGucuxmZCn9DXqDheEeIiZwLBYymSf4IOs+HCNGB6+cxPKdePpGeosSyDEFzaoakpwnhmezDaATUIki+FXGp2qZ54kjdde1kLtUwJCEOiwHsVnBdaexUnQmrVgyzUtVzqiRFWQYQs88vpEchDGFXXqfN3U1cE/7+KWgZ0HUAmg+cSF+4LSSAQvg1/qF2qgLiyM612jFIUiATo9hatbuvXlCcJIGmn637VVXUtc0lUrXGwqu4bkR4zYppbUVMCFgCCBt4yFucWZqgRNUyFRdo21BB3gG9vQcek/D5rOQuolWNJMvXOdpWmWmEQtJCM1kDdfnT63fmHj4oUexrTIZQ2DYWH0rpmQAQ8CwTJzz9p4s7g/utPkhHo4DUrnou8fnb054eIJJ6rMU3TXSEPbloEYf5UKRmTX39lP5X3n+FOPBDkaXjRc90/ff3xw0eih4kQpJs6f4J43IQHZfozyWRBH6GSZyRegOvlXMf/+c+n3/6UzH7PLqyeY9sWeAqL32wrvXSKbeXJk58u778+efJzaiW2U6iLqKUX/3n64bdIcfyeVfQLcDgW+EO/54Afs2ZBBWZwtLj/KoSZdhd8kysvon70n9NPv32UAsu3fNtybMe2elwSV8xn0/WSmAgRs/vPY6dr+07N/Pr+s9NPH/5QDL9IYyf28jzM+l7o+1k3Kyaz1Urk1yc//3R5f/JEc0OjG5rVFn50+vbDJ4PEcVGMnahbhONh5nWtNI7tdN7u6ZMnhKP+Sdx/1WPdyz1IeBZa+P1nzz59OJfcoluUKnl2P/cyP4vTIpgG+UgmPz3RfnrC4P6E3yUeGIZJ3bGU+8eRCfEynnobSg3jSqyrlp6Tkv8D36vy6Jh7TrmKmj06TnRyGc3DM4ukFVEzHEemMQLlg0TinIstvEWMUqV5MUzutYTkWbADCuPpqBel/0fm56k1WkikQ8b6FsfNFJBUO8dCG3IuRZFoe8v31wu8GyNdjxqSakhpIQgo81rIsBHqqDzAFJ+KSAn+A2HCJtRIRDxyR+ZHYd4S+bFcdPlBG8uqkLMmTKuiRlguAz2ZS6Fypwz9eNotb9tKqA5qFUQnfpK4CRsHURYmLErcIIc8L0pi+DONKIoCI0iSSVffhBrxXuZ04YgoCg0j1CEdTCZhEE0CkoCAIAijyM0hhZzIWyJSrlIY5XDabmQEeQiCWJjoOeSvkRsk9GDUiBkeCdIM/ExgOxEkN11wFc7A8e0YPE9mFR687/P/95xoY2ymBy6xxk7P8ru2kxVd3/Ytu98DGQSSJnCFmT927L7jFHjLaKEeEK8PbqtwwH92uQ91XHscF33uC/P8cNQt09cp04woCbXEY+DotUkUOHECNe5BpbuGZnrJWLz0NtY1ibuEmIYeRonhRUHEX2VQ1YHZJa4X9Nw8ipIoAAdjqJtR6w6oFJjJBE7pQdCTgBY6yDGgnqEJultMZq1+LckzE9ieiqNlUDbrQFSqY82qMxSin0udqW1FRJOnOYe61ZrJyhobXW9zsL1tOPrn23D+6/I6kHlCKItEphwuRXuhxnyQU13IIpGK9kSNShFcl7KZ8DxT5V4H9OTPK1WshRocgx4bGjGLCeQJSRQzpkn8zjS6A2rER3FJN9YkSXMnBnMlSXIjSYMXmmZsH2NfjFJ4NAZmhk9QMKJxfSDvkCTPYMwMcp1BYiMJBeFc8O+lfl5rBIklJAA7ncdgZfuZ1fVTH+J9P8scy91l3AxD3EjGhZWN/aHv6JaV/myD5dbtHviDCd4BNZUiwgqz52e+0/UgAckSx+9nrpNZoWbFIfcyY3sSxxCZQz7iL02M1KnrJHOpXoCtdBNvDN4hyEKnF6eQiniZucsYKckzJieek457VuBpDrxNw3GqOWmajie71LWRucT19TBMIYsBgZmnZ6nt6EGcRpI3dr3U8dNs0o3H6djz45jsjhrrvINAVckqwtBO23KHaCrfalHt7NKvUVtXoPfBgcRkbRnaEOMjRxBNoTbubLcRiy1cB7sAKolYjkBqqcptCAcgqGuXA12ITwvIuIMRfEXeq1+vwLbX7N6l4VdROfij4r1t+OJPNLuIowIPfwnPdUj2gb6E50I7yK03RipzgwnxmaTzlQoaIXqoQy4bRfCS0XLlhsbEeO+mFi7zmbgogmMYfF/i82U60Wqv+Vi24R6jCiikaXzWTCPT9RpEl/jDVE/4jJEyU4dvKXwarO4YKTEIGMZ8bGVFlhaGXXiS3x1niWX38rGdwochmGWrcOJM2+i5KNOJ5aUxNzHdPPNZnBWOHee+tiNqrlJY5HFugcGKu36SFiHEtmmWptkYFDIgOTDH47HVBZubxpMuWLXYccZ+LjZbq+O53NijrOiOnX4KiYdlOH5GcnAIYZGM08z3wY1lluWnPafrR3iTDfcygzghZAng9MDI+pINSY1VjB13R9RGHEAaGHMXOrZi3w66qe+EESQi4FIzP3btzDGcbmaBec882xiPbUh0rKBwNLnuyHAEOvEFLwxaSNSlmmFQRdEgyKASDwX0rqnoLuOvJUndVNemTqmmiVl2+K6iUb50jgc8NYa2qyPDkQImG+ITcTxI4ZPEjPJwhc/iS0TXDcoI4wsrGOgPjxH8C75Q35ot1J/KJy7EPDM8TKcVIJVvbZh6Xpy1n9kbzMcRVFTOeqy1QnitNcMrEwM0N2oLV9PjDh9vxs3Y8Lp7H//D1hbeTtT/6EwTK/sv81UqqPEBC4bxUvZxkEp1UPOBUd6NsUplxI3Q1R9vKY0VRgpDFIyXrBnPyvkfH2xFnVVhvIqrVwmDCPiqMCIVa8YNIxLDtTwIv2Jy+HKpqkogF5RX5Zr+uoUNlw8XifVN/GGpP2M+q0GXUBMziViHVlCjDnUNjMTMeilr6fJIXK5nqIjCWpIYYo66mn2YYvpUnopatv10eUIcUFM3iZRObdRmHoaYhYEpeUnoGlpVnJulFJlBqKMKgNwIAxoF1fFwEORSM/Q0M/ASQ6+6O5zaeouGSVDF4EVuThkXvxilgCSqh4nJwiQ0zaVV7ji0XUqDSK38plpsQBwdJLSt1kEdmmFOtMIpdK8InSyuDvkllqVjPYujSjOjMUsCOarM5GKaJ4lHjDDzjDC3/bR63aBkWx4mcZ5XKhuHpp4jqVud3QvMIFcM3weVwtj3w2qnkworJzSvrJJCWM/htyM5X6RTB7WR5h6VgmiiJS788pPqFmiBnhtUMgO9UkXYse0EiZ6xYM28bmpSQ5uYUZIk7qS6tiUyvQBT040qayNpaNl5SzLkSl3raR4QKXBN3TP5pEEFNdLdJFBQYlSbuGbZtiZHZs0WjjSdtFC77EGYLoVFFGIzzKd8qg3/oa6zK55L0bXp4syyX1ebByRFLbVNq2vtkGLo2hXPhZguocs1OPKVfk3F6MeS/Wnrui7v4K9LRGJSiZ9qRbBSrvpZGu2G0y7ZcPHRbJ0QrV4jyg1vS4X/d666gyuZJuLtZLbe6Mq8GD/zMmqQ0/m6/fUhKuG72Oxg1OjmoV6jEmoONeJRV6VMk74dUcuIz0svSeIUN7uj5tEYviqrQdTo/ttnV8s7uitq/P7ZqvL00e6oO+bTVSpJFNfyXDzWlVvq5pWjx2/+dbWcPqigVtXO4hLJlb/e03+tKq/OK6hRG1oSXyYB3qW9bpIMn79apZJG5RqoO2EvKMcfN80Ko1Won1dQUwnCBC6Je5u1dc1RP58evha1PoxS37ADEjp6ka4ZYVVXo2a0TgtH/WEx6g3TYUy21fWzU2iLJ0+fnbw5PT19erpU10j77Pd7Q7/X19YPOPG6Pnn7Fg5/+wYa6OkJ/D17voQa+f/1R8NR/8IYWcPhYN2CDI4ajuaSTk9OTp+VKtVF3XOsi+HFyNqEmtf1q7fv3r59e/L0Lch/9+50CTXC2ud4YI+Gf48m61sNr+s37969fff0KaB+++4d/3u1XNfhxWB4YQ0ugpE96A+T9XX9HFR6B6jfwi84Vake6lY4iby8l/S9rXX9/Pmr53CmV/D86jlvoJW6lqX0QWz0Ut9msrqxX7/hx0MFP5/ells4dkeeb5u9vIh7hu0rq39DxOuaq3Kp0iuhEkO1UM8Xm7d27NdL1owvqAfrgOkGA4FrWbNOmVeTUrM10tb0a60earm8lAtvnnU03j69Wiqei68QEzkH2ui5nq4s96uei3tiJBZaorVDy/j+KkHguVA9z8WXYvA1EBujC3k6ZoPmF6hVoxRA3ZFbW6+cwPOR5/mMnYyujocjWcWotWE4XV6RlmB++cC1xeHK4REpVuaPN39kmDaEmjaFentsdvAeEJIyPdPhBTer0nrUuIUPLIsjvIeUTudSFm61GlFpPepbUe5Q36G+Xaix9PDhtw9nZeFl/VKu6+s8PLyUnmv7977d9q8Hm/e8am5nzgffNLSXHf7yHIvoxrENXgPqlnqTdty91xzLyRZrduP2GW5dw96z5Q979vv38/LX7wegDv76flGUt0ddl6iPV/Cb/XjcEOqyrn//vqLsv/dGffxXKWkmLti3rv94fAirWx3UxwD093n5/q+9Uf8bJIEoLo3/7foDzlEf//L4F07G+cvi3+NfkgZRB1zXf5fqwuOhqCf/viwHo+Y8jb9wtkZO1tgw6uPfy/58eAs/+6sq6fuzfVEf2MLlGlFKxZp9/0+wZvI1xGat1rVwItdnLvyaUDfJNnhNUcoNQ41uY2wm38qI9Cuq6wYZ3g/hBajJsUi2o74UcHYo6uN7tVQ6APVxTY7F7aivnWNRpXt7rtoci1tt+IvXJcfiyxoci7QJjsXNdd0Mx+J21N9996Imx+J2Urw6HItq+yDUtXj36qCuy7vXok1wLG6ua9wY6ofXgXo3lfazZjcPdW2ORby/Da9NaLgV9Q4ci61mOBbVvVs4/LSvaxEabvfX9TkWt/nrmhyLrf1R37v3zfFxDULDWrHZdkE1Y7OzGiphfAjqrzUOP6yua52C3Lw4/JbWtXorUd/KusboFqI25datrOuvB3WDM7kb2YFv4rjZNcza/2PnrzehVls3KUq5Nhve/oe2cNy6jf1avZWor6Ou1RvnubbN2jdAaDhljD1Y0GVdN6DSFtRrCQ3rl3Ixu/SgAUlild3DCqli/YOl+ddZC33ZKyDQNV2JXKW2ECc+jOWkkatdvrqrzjFWphshAAC5pZTvFL69l6CwUiiuixokKfy6FzqTqOC9UONSiy2nPgB1hyzQnhI6f8OoVL5hG9nflvdV4JsWlkyqSilld9RorhLbB3et/cOJqbuCZdHk+yzq8ErnxBoM3nGCQ2Mz/dsix6J0KYQ/6xEnR6TSHnXN+Ibc/GhDkb4Masq0kmDx6P05ZYLd8P3R8fnRMZGYcXR09P6dKym1UCuK+f7dkQtCyJEgRzx/9/4I74VaOgKdclAEs/aX6dd8J8CHnNHQ0Kbchg+hopnCoIUy/VtD28w+uMixqDFdE+3a0ODltw+/1b8l+6CWJF3nVC7aQ+kL1XW5mRh7wLjLo2KDxbI/K1hhlevLtlqzsiNLmFMkzuTgPVDj0kBIu1Gm3nmurdaMUoI7WJUp5lsi8J1o+UXPeGfUsw185PIZX14/zXcpoxqlbfGG0A7lTDIYHtqovdKGgweUxZemsqh4lrHcnDUb+5ane1EUsUHf9HTT9Vx4vzsDHSXpUE9t0w3g5ibuhI0sK3ETa+J1M9fx3CiQrB7pDwIvDbzALpLE9KSVqJNBMTEdK/HMJCqkZAJS4BYlCmqshSefe8PRYDgcRf1k2B9Yg1Ef3k/2QD36zI+0RiBtYF8MtdHwYgC3Xq8/5JyLows2GumjofWZf0HQMA6Mlahtf9Dvjy78i0EvsJKL4ag34BKGE9ycDbdzoWnf7PftAZzP9we94T4ci0OA54/S0bDo9a2hrQ35B33LGTohiO4N/mbDz0Zv4o+GvbjX7zn94Wd9Zb/2hjYc2O+N+rk79AdWv98fgiB/0lxdtyAgMywP9JYUKlGJR5WKtDvboNhXQeISOG01yEFcHrziTKicVrxwODE2wfAhoQo8sNQhq62ZJP7PnQoIubwpdbm/a9pwTpTz5W14mzPyVKx2hcrxuve8QnIHb9NabLsgq9P9FxZ26ZmjRght27AWzVlOVLU13URnuoXwzqiRrJby1KVdIWrtJiFaEl7IXFcVmc6JMrkD4tuFV/cjhW/wsERc+K1eScMXCplxYxI69Wt825IKtwsESR2xF9Z60JzHcqZV2WqmB9TJuZRjxqnO+OaEfB9pTlg4nQ+qbAI54wYlgm1NFjq3Klxs+n2Jmdpsb/j58dX+KAQhMuNKLtnbqhyLPCWa7+GyUlAbc7BkXhdtESLUQ40fPXtx/umjJOUB36xb001d0ZgGOYRhLOSYtGQznN2NSE+Cys6c6JJjMQpcwUBiagqnTofX/P0ctOBYlATBIudYDEBQoC2iRuaz1398+ChBFCG410GSYDSBHHAhKUC0wrH4q2QkehAErV04Fplbcizati3+BMeiXVzGBYgscCz+xDkW7cSqciziCsdiz+/bltWzLL/nFHOORSRPORZ/veRYNOzc6dlRBfX9OcdixjkWuaQevOGUVT6bNvsVHIt5bY5F+GHnHIt27MVxWAiOxaLrFzNOKLSSY3GJT/Ol4FjEcZwVhR3lnGPR93IrTVM7VabmBrVXcCx2qxyLqORYVMwsL2In9fJYcCwWfpGnWUBnfJqHcCw+uH+WmEzEzVM7YxiXzIV0oVsLFgaJEGnGa1jt15iy4+NzA/yxLDosfIclbNbtZnNrslRKmD+KSLvCsViqtMC+bpik3GVpvuMQvWSFEI+SNLU5cIpangtML1FLdySImtB0Fzm0ODApCHr5fj/wL+4pZtv5LPACtCE1pVMeLf4FJLeFPLVqitUOl8HNbUfsRgSiOePwoueCSEcRLE1T7kyVm1guaDEBgUM7YgtrpII0VZ3NZF7zXvG4fUBsUfHXeD9l7vLrbS2cUnM84UOEEQHHpWmGZsKTabi0vQNqsR0xDV3P0E3TMHSNGbGUhhOdWz7NlSI4gae7kW5ouoE3j6VA5GJGRmSYWmRqRpKASCkCtWJTT1zwqJt3JavFGMtC4oFfyArb1zM7GzvBGN5YmR/Xic4XrZnpEvBX4Gsyy+qGcZYxp++MrayfOX6SOXZsOU6f8yY6m1ETKREci1nhw3c5G5ftu/Y473J/OnYsTT60rlXXMYibeXE3GHvMD/K0qyeJl4MLCzDaATUleaGQoAveptuNg7HhdiNpHAdxnsaB148CEOl5Qexl4253I2qsOxNq5gncwjSOu143DhMj7CZm6o3D7jgk9OC6hqxSOBoezUqa2JBOnkaLaBfUSGbKAgW9Pg3YqdwB0VIktvYTPKgaZJtb6prNVKBT2nj5MngXZ0A3zpqhr8Oa3VYbjs2uLgiKOEeRyTijejmcrU2YpGxu5/NMk4cM1DV0yGDgcJ0xRsDcQmt14aNIf8BnrVzqBTq8gMhLIfJaG84ZiYPpuDzjc28KY5Ju6K4Eb5hi6HFisINQIxaBDe9BpuCAsUwjsJ09J4JQf+ykY8v2w82cYnNrJkLZLAeDa9sgKnVsTrNrOZofF07fmsRggXvE51bYHxaZbdB1qKnkkmiYxenYtoos8p0icRxOtdi3zLEFrzSnm2kHoY6yiEy6cTF2xqlfhHrm98I8AcPpQ9oQF3Gq45o2PM4Y7aZdfqDXTdMiLJxu6Pc1Jx5b3djtjr00I0XmjceFH6extI6zCRm+SwzwKmk3Aw30NA1ML/DHWZ5lZjcLxmPF0zdsEFxrxkenM7p1weZmTMjlm/KFXM+GU12aZghkmn3w41kCL3g+Ax8pc5m8rGvhiPL0hyqUXI5jzNXhQhQhHDduzWZdGe1mzdYMnFWlcRpYeX9rhraqdWfD16KG354pIjvswF+ZSbbVVvlSlQ0iy23KmPjHZtRwiGvKgnZIlrHGudgT8R5rra00ohXUCCkJQzLVXQ0hTfcYaCZUaAo1IgZJ/DFYirwI0lz3itSLo643BkMyTpLYiYoiz4o4zwK60ZphwbHogC3Lx3Dr9kLP1+0iC0GgDUZuS1S/OEZKdZKE+bgYZ1aRgpG0ijzuZr1uGjPcCGrBsRjZXb/Xjzk1ombx9GAyHlux3bO8cJxG4HggJ8mcfDNqGhQ6GUfg6+BAOwv7edYzbZCZ9bJht3Bqo0ZGNyBuAa6vm0HOYmckBZWswvedjKBm6polElhaSU80SdMknSVME0SJGktyphGdKUxwG+qr1yws2HDXoITBAUwPGCSaOoQqBJ7LWxjUr2sSMEo0TefqwHl1CE10XeMiGW0I9dwwzks5CiTzQSX58h+qutWaqW3+9Q5SxeAPVhHcoINzATLe5g8qO2mreDqbASKQoGpAajmI1STq22fD71B/9agx/uKcTZXx8K+KY/GWtnAqVi3y4XS+9GiJQ5LT5vLd9quxAabg2WhJEjlHLWNJ4awKYpSHsxlU2RThUxUtb+8Nro4p3NcvzwKUQ0VYXSKQFOyVaBXtIiTgCJdccnVQ62kRtKTIkCTXNUlVHmqRPNaRlGjV3IRBFmnQyKighigl1SGGNKhuJnzkq6Iw1eOwperREmwvz2MqRdoS716RYD5ddJU2U89DivRkuUXQIA5jSgABVmuh9iIvV7RiXLA09AvfaFfwSbYVYDMMqmmPFqLEldJYrUQpnGMRTu97BgSQRVjNBanZtyVIv6trp1GosxwruVaZ5wqiIJfcrs/Hpqtfx4ZlaTTK9WXUno5zKuV5rqBanE1RGHJGy27CkiAMQqMajEQQmlOWu0uoLd83aRipFWuWB3lE3TxINC8PgmSprvPId0Hf6hXhOLf9GLOo2sI5xSfRci/w6FLSgsOkiKgRLq9OpTnE/xgnnqfWa+EdM9EwJXxxuEjgl76hEAl6WLVFIZJ4AcOkasMhtnWnwwricSktlii7umgR657nAmK5Om5mRlwlcpVHCkt8RRMmy/ugcznmDmsVLossVpOgq7kcWjG6wAnVpqPlC6jLQFbMd67ICVfzlaDZRN4iPxcqLRSV1wxSXBUlPmiX04K1ZgGmRVJ2L1V/TZW9y5K/3l9QXX9NDyjVuj5AUBU1PkyluyildSDHYkOo26sGQ5C8O2qEV+nEP22OY1E7WlHO8a6oIaw6XiVJ251jUX64UiWlHmpca03q8ZvnV8sSxyKu02TkpysEvTqXrzBVbRV1/mqVSg9RrRYueYpuEFNCzJCXOb/n7dLdyrHYgkCRmqzFICLV1nLQySu5JZe42BRQSTI0mZig2rpxp3Uci/L2ugYn2vuv3b+wRwPtYtC7uDDWjG5xBjrOZHh6cnry5tUJvDpZYqCj2t8X/eGAXVxsENOSKUf99hWXc3Ly/OTNyckqjkX7oj8aRdZocDGK6QaORUGu+Ob05BWo9EaoVI9tkOZ/D70Lf/SZDS9GvWG0ejiO8+6VhIYnT58+O3327t2zZWZJyvp/W4MLbfj5whpF61RFHPWb9+8EUyMX9v7p2+W6Rt7nntMbfA7T0cXws7/mB5xyLD6dcyw+q8+xSMd/2/1BOHIca5AM+usujeSo38Cvefrq5BSe4dd9s8yxyAaf05Hv97iYtVcaihb+5jmvaZD0HAS+OVmuaxz+7efFsF8Uo7Q3MNaJ4nUtVHoO9fwGJL4q67pelMIEy25HrCFat2KsBseiTMUyaRXzNXHrbZBco19jxlls19BtbenXGqo541PHYJq8Gy6Xp1VrRmt5rrcrBJ0c4ypPbh2VjlcJelrHmtWPnMT660ppL0ekdRbvQL60ij+tuo603rggXSmI0ib5rxuKSNFNiEgxPvgUq5gl92DIw5fXmx+qEb4OjkVpmu0fXmhTKm3jWLwV5Q71Heo71Heo71Dfof7aUNNbiJr+P7e1t0c7zha2AAAAAElFTkSuQmCC");
;// CONCATENATED MODULE: ./assets/svg/505.svg



function SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 400 300",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160.124 23.806l-70.648 85.718 104.558 123.398 69.705-81.95L160.124 23.805z",
    fill: "#4484fe",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M92.302 110.467c1.563-2.813 3.5-5.4 5.76-7.691l64.887-65.782s22.607-3.768 27.317 7.536l-82.892 67.82-15.072-1.883z",
    fill: "#f2f2f2",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M89.006 109.054L185.086 256s9.42 6.594 18.839 2.826l98.435-66.408-104.557-158.25-94.197 73.473-14.6 1.413z",
    fill: "#4484fe",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M111.668 101.352l-1.6 1.248-.177-.896 1.777-.352z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M111.668 101.352l-1.6 1.248 1.21 6.108 10.601-.144 5.437 8.972 10.763 1.404 8.193 6.687 29.627 5.887.985 4.97 10.704 5.87 16.358 2.027 18.727 10.269 20.038 11.94 21.463 7.672 9.463 10.436 14.185 6.572 4.978 4.156 2.562 1.712 3.592-2.422-3.748-2.505-5.219-4.358-13.926-6.45-9.591-10.579-22.042-7.878-19.764-11.778-19.463-10.673-16.358-2.027-8.39-4.6-1.141-5.764-31.279-6.215-8.302-6.777-9.985-1.302-5.627-9.286-9.556.13-.739-3.73-2.156.428z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M276.467 192.735l-64.039 47.117.905 1.23 64.039-47.117-.905-1.23zM124.966 116.64l-1.274.842 79.126 119.63 1.273-.843-79.125-119.629zm72.521-57.474l-1.253.872 81.951 117.745 1.252-.872-81.95-117.745zm-14.232-21.148l-80.868 67.407.603.724 80.869-67.407-.604-.724zm-4.873-1.37l-77.901 68.771.623.707 77.902-68.772-.624-.707zm-6.208-.587l-74.538 68.408.637.694 74.537-68.409-.636-.693zm13.882 21.04l-60.29 43.324.89 1.24 60.29-43.324-.89-1.24z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44.031 119.165h41.645c11.489 0 19.746.359 29.26 1.257V89.008c-7.181.898-13.822 1.257-29.619 1.257H31.645c-8.616 0-10.411 0-17.951-.359-.179 6.821-.359 11.129-.718 14.899L8.13 160.81c-.539 5.027-1.077 9.335-1.795 14.72l33.388 3.231c3.949-8.796 11.309-13.283 22.617-13.283 15.079 0 24.772 9.334 24.772 23.694 0 14.361-10.052 23.874-25.131 23.874-12.924 0-20.463-5.564-23.515-17.412l-36.08 5.565c2.692 9.334 4.846 14.54 8.975 20.105 10.411 14.36 28.182 22.079 50.8 22.079 38.055 0 60.673-20.464 60.673-54.929 0-15.078-4.488-26.746-13.463-35.901-9.514-9.693-22.618-14.719-38.594-14.719-11.668 0-21.002 2.692-29.08 8.616.359-3.052.539-4.847.539-5.744l1.795-21.541zm277.515 0h41.646c11.488 0 19.745.359 29.259 1.257V89.008c-7.18.898-13.822 1.257-29.618 1.257H309.16c-8.616 0-10.411 0-17.95-.359-.18 6.821-.359 11.129-.718 14.899l-4.847 56.005c-.538 5.027-1.077 9.335-1.795 14.72l33.388 3.231c3.949-8.796 11.309-13.283 22.618-13.283 15.078 0 24.772 9.334 24.772 23.694 0 14.361-10.053 23.874-25.131 23.874-12.925 0-20.464-5.564-23.515-17.412l-36.081 5.565c2.693 9.334 4.847 14.54 8.975 20.105 10.412 14.36 28.183 22.079 50.8 22.079 38.056 0 60.673-20.464 60.673-54.929 0-15.078-4.487-26.746-13.463-35.901-9.513-9.693-22.617-14.719-38.593-14.719-11.668 0-21.003 2.692-29.08 8.616.359-3.052.538-4.847.538-5.744l1.795-21.541zM201.098 242.844c22.797 0 41.645-10.052 52.416-28.002 6.821-11.309 11.309-31.055 11.309-49.903 0-14.719-2.334-28.541-7.001-41.286-2.693-7.18-7.18-14.002-13.104-19.925-10.95-10.771-26.208-16.694-43.62-16.694-22.618 0-41.286 10.052-52.236 28.362-6.821 11.308-11.309 30.874-11.309 49.723 0 14.539 2.334 28.361 7.001 41.106 2.693 7.18 7.18 14.002 13.104 19.925 10.95 10.95 25.849 16.694 43.44 16.694zm0-125.474c17.412 0 26.746 16.156 26.746 46.851 0 31.952-8.975 48.107-26.566 48.107-17.771 0-26.926-16.514-26.926-48.646 0-29.259 9.873-46.312 26.746-46.312z",
    fillOpacity: 0.1,
    fillRule: "nonzero"
  }));
}

/* harmony default export */ const _505 = ((/* unused pure expression or super */ null && (SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/course-per-row-1-active.svg



function course_per_row_1_active_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#4584FF",
    rx: 3
  }), /*#__PURE__*/React.createElement("rect", {
    width: 102,
    height: 52,
    x: 9,
    y: 9,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 3
  }));
}

/* harmony default export */ const course_per_row_1_active = ((/* unused pure expression or super */ null && (course_per_row_1_active_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/course-per-row-1.svg



function course_per_row_1_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#EBECF2",
    rx: 3
  }), /*#__PURE__*/React.createElement("rect", {
    width: 102,
    height: 52,
    x: 9,
    y: 9,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 3
  }));
}

/* harmony default export */ const course_per_row_1 = ((/* unused pure expression or super */ null && (course_per_row_1_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/course-per-row-2-active.svg



function course_per_row_2_active_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#4584FF",
    rx: 3
  }), /*#__PURE__*/React.createElement("rect", {
    width: 46,
    height: 48,
    x: 11,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 46,
    height: 48,
    x: 63,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }));
}

/* harmony default export */ const course_per_row_2_active = ((/* unused pure expression or super */ null && (course_per_row_2_active_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/course-per-row-2.svg



function course_per_row_2_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#F2F3FA",
    rx: 3
  }), /*#__PURE__*/React.createElement("rect", {
    width: 46,
    height: 48,
    x: 11,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 46,
    height: 48,
    x: 63,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }));
}

/* harmony default export */ const course_per_row_2 = ((/* unused pure expression or super */ null && (course_per_row_2_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/course-per-row-3-active.svg



function course_per_row_3_active_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#4584FF",
    rx: 3
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 11.01,
    y: 11,
    fill: "#78A6FF",
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 11.01,
    y: 11,
    fill: "#78A6FF",
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 11.01,
    y: 11,
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    fill: "#D2DFFF",
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    fill: "#BDD9FE",
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    fill: "#78A6FF",
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 81.654,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }));
}

/* harmony default export */ const course_per_row_3_active = ((/* unused pure expression or super */ null && (course_per_row_3_active_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/course-per-row-3.svg



function course_per_row_3_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#F2F3FA",
    rx: 3
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 11.01,
    y: 11,
    fill: "#78A6FF",
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 11.01,
    y: 11,
    fill: "#78A6FF",
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 11.01,
    y: 11,
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    fill: "#D2DFFF",
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    fill: "#BDD9FE",
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    fill: "#78A6FF",
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 81.654,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }));
}

/* harmony default export */ const course_per_row_3 = ((/* unused pure expression or super */ null && (course_per_row_3_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/course-per-row-4-active.svg



function course_per_row_4_active_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#4584FF",
    rx: 3
  }), /*#__PURE__*/React.createElement("rect", {
    width: 19.66,
    height: 48,
    x: 10.18,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 19.66,
    height: 48,
    x: 36.84,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 19.66,
    height: 48,
    x: 63.5,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 19.66,
    height: 48,
    x: 90.16,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }));
}

/* harmony default export */ const course_per_row_4_active = ((/* unused pure expression or super */ null && (course_per_row_4_active_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/course-per-row-4.svg



function course_per_row_4_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#F2F3FA",
    rx: 3
  }), /*#__PURE__*/React.createElement("rect", {
    width: 19.66,
    height: 48,
    x: 10.18,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 19.66,
    height: 48,
    x: 36.84,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 19.66,
    height: 48,
    x: 63.5,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 19.66,
    height: 48,
    x: 90.16,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }));
}

/* harmony default export */ const course_per_row_4 = ((/* unused pure expression or super */ null && (course_per_row_4_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/fill-in-the-blanks-tooltip-icon.svg



function fill_in_the_blanks_tooltip_icon_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 18,
    height: 18,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 28,
    height: 28,
    rx: 3,
    fill: "#FF9066"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#prefix__clip0_237_871)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.578 15.394a.573.573 0 00.14-.017l2.31-.578a.58.58 0 00.27-.152L24.4 7.545c.218-.219.339-.509.339-.817 0-.309-.12-.599-.339-.817l-.916-.917a1.182 1.182 0 00-1.634 0l-7.103 7.103a.578.578 0 00-.152.268l-.578 2.311a.578.578 0 00.56.718zm8.089-9.583l.916.917-.916.916-.917-.916.917-.917zm-6.99 6.99l5.256-5.256.917.916-5.257 5.256-1.221.305.305-1.221z",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("path", {
    stroke: "#fff",
    strokeWidth: 2,
    d: "M4.667 20h17.5"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "prefix__clip0_237_871"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    transform: "translate(12.189 4.667)",
    d: "M0 0h13.867v13.867H0z"
  }))));
}

/* harmony default export */ const fill_in_the_blanks_tooltip_icon = ((/* unused pure expression or super */ null && (fill_in_the_blanks_tooltip_icon_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/full_star.svg



function full_star_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.947 9.179a1.001 1.001 0 00-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 00-1.822-.001L8.622 8.05l-5.701.453a1 1 0 00-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 001.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
  }));
}

/* harmony default export */ const full_star = ((/* unused pure expression or super */ null && (full_star_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/image-matching-tooltip-icon.svg



function image_matching_tooltip_icon_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 18,
    height: 18,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 28,
    height: 28,
    rx: 3,
    fill: "#D67AF1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.167 6.417h-8.5c-.782 0-1.417.635-1.417 1.416v8.5c0 .782.635 1.417 1.417 1.417h8.5c.781 0 1.416-.635 1.416-1.417v-8.5c0-.781-.635-1.416-1.416-1.416zm-8.5 9.916v-8.5h8.5l.001 8.5h-8.501z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.833 10.667H7.417v8.5c0 .78.635 1.416 1.416 1.416h8.5v-1.416h-8.5v-8.5z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 13.5l-.708-.708-1.417 2.125h7.083l-2.833-4.25L14.5 13.5z",
    fill: "#fff"
  }));
}

/* harmony default export */ const image_matching_tooltip_icon = ((/* unused pure expression or super */ null && (image_matching_tooltip_icon_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/multi-choice-tooltip-icon.svg



function multi_choice_tooltip_icon_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 18,
    height: 18,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 28,
    height: 28,
    rx: 3,
    fill: "#3BC3C3"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#prefix__clip0_237_869)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.625 14.048L8.05 10.472l-1.535 1.536 5.111 5.111L22.167 6.578 20.63 5.042l-9.006 9.006z",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#prefix__clip1_237_869)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.625 19.881L8.05 16.305l-1.535 1.536 5.111 5.111 10.542-10.54-1.536-1.536-9.006 9.005z",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "prefix__clip0_237_869"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    transform: "translate(5.833 2.333)",
    d: "M0 0h16.333v16.333H0z"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "prefix__clip1_237_869"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    transform: "translate(5.833 8.167)",
    d: "M0 0h16.333v16.333H0z"
  }))));
}

/* harmony default export */ const multi_choice_tooltip_icon = ((/* unused pure expression or super */ null && (multi_choice_tooltip_icon_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/open-ended-essay-tooltip-icon.svg



function open_ended_essay_tooltip_icon_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 18,
    height: 18,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 28,
    height: 28,
    rx: 3,
    fill: "#AF6DED"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#prefix__clip0_237_870)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23.137 11.575l-.84-.871a.653.653 0 00-.947 0l-.718.745 1.787 1.856.718-.745a.715.715 0 000-.985zm-6.306 3.792c-.2.206-.347.461-.428.741l-.401 1.392h-.652a.295.295 0 01-.267-.178c-.316-.652-1.219-.83-1.738-.387l-.366-1.138a.634.634 0 00-.6-.449.634.634 0 00-.6.449L11.3 17.29a.294.294 0 01-.279.209h-.327a.43.43 0 00-.42.438.43.43 0 00.42.437h.327c.49 0 .924-.325 1.079-.808l.28-.872.442 1.38a.437.437 0 00.142.208.412.412 0 00.635-.15l.201-.42a.285.285 0 01.265-.169.29.29 0 01.268.179c.194.402.584.652 1.017.652h1.664v1.313H9.43V8.315h4.213v2.843c0 .364.281.656.631.656h2.74v2.133l1.264-1.301v-2.037c0-.347-.136-.684-.373-.93l-2.21-2.293A1.24 1.24 0 0014.804 7H9.43c-.697.003-1.263.59-1.263 1.315v11.373c0 .724.566 1.312 1.263 1.312h7.582c.698 0 1.266-.588 1.266-1.312V17.63l3.546-3.707-1.788-1.856-3.205 3.3zm-1.925-6.945l2.004 2.08h-2.004v-2.08z",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "prefix__clip0_237_870"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    transform: "translate(8.167 7)",
    d: "M0 0h15.167v14H0z"
  }))));
}

/* harmony default export */ const open_ended_essay_tooltip_icon = ((/* unused pure expression or super */ null && (open_ended_essay_tooltip_icon_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/ribbon.svg



function ribbon_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 285 37",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h285l-9.492 18.5L285 37H0l9.492-18.5L0 0z",
    fill: "#fff",
    fillOpacity: 0.3,
    fillRule: "nonzero"
  }));
}

/* harmony default export */ const ribbon = ((/* unused pure expression or super */ null && (ribbon_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/single-choice-tooltip-icon.svg



function single_choice_tooltip_icon_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 18,
    height: 18,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 28,
    height: 28,
    rx: 3,
    fill: "#FFC844"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#prefix__clip0_237_868)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.625 17.548L8.05 13.972l-1.535 1.536 5.111 5.111 10.542-10.541-1.536-1.536-9.006 9.006z",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "prefix__clip0_237_868"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    transform: "translate(5.833 5.833)",
    d: "M0 0h16.333v16.333H0z"
  }))));
}

/* harmony default export */ const single_choice_tooltip_icon = ((/* unused pure expression or super */ null && (single_choice_tooltip_icon_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/sortable-tooltip-icon.svg



function sortable_tooltip_icon_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 18,
    height: 18,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 28,
    height: 28,
    rx: 3,
    fill: "#3AD0AE"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.667 17.333H7.833l4.25 4.25V7.417h-1.416v9.916zm4.25-7.791v12.041h1.416v-9.916h2.834l-4.25-4.25v2.125z",
    fill: "#fff"
  }));
}

/* harmony default export */ const sortable_tooltip_icon = ((/* unused pure expression or super */ null && (sortable_tooltip_icon_SvgComponent)));
;// CONCATENATED MODULE: ./assets/svg/true-false-tooltip-icon.svg



function true_false_tooltip_icon_SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 18,
    height: 18,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 28,
    height: 28,
    rx: 3,
    fill: "#4DABF7"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#prefix__clip0_237_867)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.298 17.041l-3.065-3.065-1.316 1.316 4.381 4.382 9.035-9.036-1.316-1.316-7.719 7.72z",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#prefix__clip1_237_867)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23.838 8.629l-4.03 4.028L15.78 8.63 14.437 9.97 18.465 14l-4.028 4.028 1.343 1.343 4.028-4.028 4.03 4.028 1.342-1.343L21.152 14 25.18 9.97 23.838 8.63z",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "prefix__clip0_237_867"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    transform: "translate(2.333 7)",
    d: "M0 0h14v14H0z"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "prefix__clip1_237_867"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    transform: "translate(14 8.167)",
    d: "M0 0h11.667v11.667H0z"
  }))));
}

/* harmony default export */ const true_false_tooltip_icon = ((/* unused pure expression or super */ null && (true_false_tooltip_icon_SvgComponent)));
;// CONCATENATED MODULE: ./assets/js/back-end/constants/images.ts





























// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/js/blocks/components/toggle/editor.scss
var toggle_editor = __webpack_require__(493);
;// CONCATENATED MODULE: ./assets/js/blocks/components/toggle/editor.scss

            

var toggle_editor_options = {};

toggle_editor_options.insert = "head";
toggle_editor_options.singleton = false;

var toggle_editor_update = injectStylesIntoStyleTag_default()(toggle_editor/* default */.Z, toggle_editor_options);



/* harmony default export */ const components_toggle_editor = (toggle_editor/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./assets/js/blocks/components/toggle/index.tsx






var Toggle = function Toggle(props) {
  var checked = props.checked,
      _onChange = props.onChange,
      label = props.label;
  var id = (0,external_wp_compose_namespaceObject.useInstanceId)(Toggle);
  return /*#__PURE__*/external_React_default().createElement("div", {
    className: classnames_default()('masteriyo-control', 'masteriyo-toggle', 'masteriyo-inline', {
      'is-checked': checked
    })
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-toggle-head"
  }, label && /*#__PURE__*/external_React_default().createElement("label", {
    htmlFor: "masteriyo-toggle-".concat(id),
    className: "masteriyo-control-label masteriyo-toggle-label"
  }, label)), /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-control-body masteriyo-toggle-body"
  }, /*#__PURE__*/external_React_default().createElement("input", {
    id: "masteriyo-toggle-".concat(id),
    type: "checkbox",
    className: "masteriyo-toggle-checkbox",
    onChange: function onChange(e) {
      return _onChange(e.target.checked);
    }
  }), /*#__PURE__*/external_React_default().createElement("span", {
    className: "masteriyo-toggle-track"
  }), /*#__PURE__*/external_React_default().createElement("span", {
    className: "masteriyo-toggle-thumb"
  })));
};

/* harmony default export */ const toggle = (Toggle);
;// CONCATENATED MODULE: ./assets/js/blocks/course-categories/components/BlockSettings.tsx








var BlockSettings = function BlockSettings(props) {
  var _props$attributes = props.attributes,
      count = _props$attributes.count,
      columns = _props$attributes.columns,
      hide_courses_count = _props$attributes.hide_courses_count,
      include_sub_categories = _props$attributes.include_sub_categories,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/external_React_default().createElement(external_wp_blockEditor_namespaceObject.InspectorControls, null, /*#__PURE__*/external_React_default().createElement(tab_panel, null, /*#__PURE__*/external_React_default().createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Design', 'masteriyo')
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-design-card"
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-design-card__items masteriyo-design-card__items--active"
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "preview-image"
  }, /*#__PURE__*/external_React_default().createElement(Image$1, {
    src: course_categories_block_grid_design,
    alt: "Grid Design"
  })), /*#__PURE__*/external_React_default().createElement("div", {
    className: "status"
  }, /*#__PURE__*/external_React_default().createElement("span", {
    className: "title"
  }, (0,external_wp_i18n_namespaceObject.__)('Grid', 'masteriyo')), /*#__PURE__*/external_React_default().createElement("span", {
    className: "active-label"
  }, (0,external_wp_i18n_namespaceObject.__)('Active', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement("div", {
    className: "coming-soon-notice"
  }, /*#__PURE__*/external_React_default().createElement("span", null, (0,external_wp_i18n_namespaceObject.__)('New Design', 'masteriyo')), /*#__PURE__*/external_React_default().createElement("span", null, (0,external_wp_i18n_namespaceObject.__)('Coming Soon', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Settings', 'masteriyo')
  }, /*#__PURE__*/external_React_default().createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('General', 'masteriyo'),
    initialOpen: true
  }, /*#__PURE__*/external_React_default().createElement(slider, {
    onChange: function onChange(val) {
      return setAttributes({
        count: val ? val : 1
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('No. of Categories', 'masteriyo'),
    min: 1,
    step: 1,
    value: count
  }), /*#__PURE__*/external_React_default().createElement(toggle, {
    checked: hide_courses_count === 'yes',
    onChange: function onChange(val) {
      return setAttributes({
        hide_courses_count: val ? 'yes' : 'no'
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Hide courses count', 'masteriyo')
  }), /*#__PURE__*/external_React_default().createElement(toggle, {
    checked: include_sub_categories,
    onChange: function onChange(val) {
      return setAttributes({
        include_sub_categories: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Include sub-categories', 'masteriyo')
  })), /*#__PURE__*/external_React_default().createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Layout', 'masteriyo')
  }, /*#__PURE__*/external_React_default().createElement(slider, {
    onChange: function onChange(val) {
      return setAttributes({
        columns: val ? val : 1
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Columns', 'masteriyo'),
    min: 1,
    max: 4,
    step: 1,
    value: columns
  })))));
};

/* harmony default export */ const components_BlockSettings = (BlockSettings);
;// CONCATENATED MODULE: ./assets/js/blocks/course-categories/Edit.tsx





var Edit = function Edit(props) {
  var clientId = props.attributes.clientId,
      setAttributes = props.setAttributes;
  var ServerSideRender = wp.serverSideRender ? wp.serverSideRender : wp.components.ServerSideRender;
  hooks_useClientId(props.clientId, setAttributes, props.attributes);
  return /*#__PURE__*/external_React_default().createElement(external_wp_element_namespaceObject.Fragment, null, /*#__PURE__*/external_React_default().createElement(components_BlockSettings, props), /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-block-editor-wrapper",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/external_React_default().createElement(ServerSideRender, {
    block: "masteriyo/course-categories",
    attributes: {
      clientId: clientId ? clientId : '',
      count: props.attributes.count,
      columns: props.attributes.columns,
      categoryIds: props.attributes.categoryIds,
      hide_courses_count: props.attributes.hide_courses_count,
      include_sub_categories: props.attributes.include_sub_categories
    }
  })));
};

/* harmony default export */ const course_categories_Edit = (Edit);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/js/blocks/course-categories/editor.scss
var course_categories_editor = __webpack_require__(959);
;// CONCATENATED MODULE: ./assets/js/blocks/course-categories/editor.scss

            

var course_categories_editor_options = {};

course_categories_editor_options.insert = "head";
course_categories_editor_options.singleton = false;

var course_categories_editor_update = injectStylesIntoStyleTag_default()(course_categories_editor/* default */.Z, course_categories_editor_options);



/* harmony default export */ const blocks_course_categories_editor = (course_categories_editor/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./assets/js/blocks/course-categories/block.tsx






function registerCourseCategoriesBlock() {
  wp.blocks.registerBlockType('masteriyo/course-categories', {
    title: 'Course Categories',
    description: (0,external_wp_i18n_namespaceObject.__)('Display a collection of course categories.', 'masteriyo'),
    icon: /*#__PURE__*/external_React_default().createElement(icon, {
      type: "blockIcon",
      name: "course-categories",
      size: 24
    }),
    category: 'masteriyo',
    keywords: ['Course Categories Block'],
    attributes: course_categories_attributes,
    supports: {
      align: false,
      html: false,
      color: {
        background: false,
        gradient: false,
        text: false
      }
    },
    edit: course_categories_Edit,
    save: function save() {
      return null;
    }
  });
}
;// CONCATENATED MODULE: ./assets/js/blocks/courses/attributes.ts
var attributes_attributes = {
  clientId: {
    type: String
  },
  count: {
    type: Number,
    "default": 12
  },
  columns: {
    type: Number,
    "default": 3
  },
  categoryIds: {
    type: Array,
    "default": []
  },
  sortBy: {
    type: String,
    "default": 'date'
  },
  sortOrder: {
    type: String,
    "default": 'desc'
  },
  startCourseButtonBorder: {
    type: Object,
    "default": {
      border: 1,
      radius: {
        desktop: {
          top: 50,
          right: 50,
          bottom: 50,
          left: 50,
          unit: 'px'
        },
        tablet: {
          top: 50,
          right: 50,
          bottom: 50,
          left: 50,
          unit: 'px'
        },
        mobile: {
          top: 50,
          right: 50,
          bottom: 50,
          left: 50,
          unit: 'px'
        }
      }
    },
    style: [{
      selector: '{{WRAPPER}} .masteriyo-btn-primary.masteriyo-btn-primary.masteriyo-btn-primary'
    }]
  }
};
/* harmony default export */ const courses_attributes = (attributes_attributes);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: external ["wp","blocks"]
const external_wp_blocks_namespaceObject = window["wp"]["blocks"];
;// CONCATENATED MODULE: ./assets/js/blocks/utils/getBlockAttributesDefinition.ts

function getBlockAttributesDef(blockName) {
  var def = (0,external_wp_blocks_namespaceObject.getBlockType)(blockName);
  return def === null || def === void 0 ? void 0 : def.attributes;
}
;// CONCATENATED MODULE: ./assets/js/blocks/utils/getDeviceType.ts

var getDeviceType = function getDeviceType() {
  var core = (0,external_wp_data_namespaceObject.select)('core/edit-post');

  if (core !== null && core !== void 0 && core.__experimentalGetPreviewDeviceType) {
    return core.__experimentalGetPreviewDeviceType().toLowerCase();
  }

  return 'desktop';
};
;// CONCATENATED MODULE: ./assets/js/blocks/utils/replacePlaceholders.ts

function replacePlaceholders(str, placeholders) {
  Object.entries(placeholders).forEach(function (_ref) {
    var _ref2 = slicedToArray_slicedToArray(_ref, 2),
        tag = _ref2[0],
        value = _ref2[1];

    str = str.replaceAll("{{".concat(tag, "}}"), value);
  });
  return str;
}
;// CONCATENATED MODULE: ./assets/js/blocks/utils/generateBlockCSS.ts





var settingStyleGenerators = {
  empty: function empty() {
    return {
      allDevice: [],
      desktop: [],
      tablet: [],
      mobile: []
    };
  },
  border: function border(props) {
    var settingValue = props.settingValue,
        settingDef = props.settingDef;
    var stylesDef = settingDef.style;
    var css = {
      allDevice: [],
      desktop: [],
      tablet: [],
      mobile: []
    };

    if (!stylesDef) {
      return css;
    }

    stylesDef.forEach(function (styleDef) {
      if (!meetsConditions(props.settings, styleDef)) {
        return;
      }

      var selector = replacePlaceholders(styleDef.selector, {
        WRAPPER: '.masteriyo-block-' + props.blockID
      });

      if (settingValue.color) {
        css.allDevice.push("".concat(selector, " { border-color:  ").concat(settingValue.color, "; }"));
      }

      if (settingValue.type) {
        css.allDevice.push("".concat(selector, " { border-style: ").concat(settingValue.type, "; }"));
      }

      if (settingValue.size) {
        ['desktop', 'tablet', 'mobile'].forEach(function (deviceType) {
          if (!settingValue.size[deviceType]) {
            return;
          }

          var unit = settingValue.size[deviceType].unit || 'px';
          var top = settingValue.size[deviceType].top || 0;
          var right = settingValue.size[deviceType].right || 0;
          var bottom = settingValue.size[deviceType].bottom || 0;
          var left = settingValue.size[deviceType].left || 0;
          css[deviceType].push("".concat(selector, " { border-width: ").concat(top).concat(unit, " ").concat(right).concat(unit, " ").concat(bottom).concat(unit, " ").concat(left).concat(unit, "; }"));
        });
      }

      if (settingValue.radius) {
        ['desktop', 'tablet', 'mobile'].forEach(function (deviceType) {
          if (settingValue.radius && settingValue.radius[deviceType]) {
            var unit = settingValue.radius[deviceType].unit || 'px';
            var top = settingValue.radius[deviceType].top || 0;
            var right = settingValue.radius[deviceType].right || 0;
            var bottom = settingValue.radius[deviceType].bottom || 0;
            var left = settingValue.radius[deviceType].left || 0;
            css[deviceType].push("".concat(selector, " { border-radius: ").concat(top).concat(unit, " ").concat(right).concat(unit, " ").concat(bottom).concat(unit, " ").concat(left).concat(unit, "; }"));
          }
        });
      }
    });
    return css;
  },
  general: function general(props) {
    var settingValue = props.settingValue,
        settingDef = props.settingDef;
    var stylesDef = settingDef.style;
    var css = {
      allDevice: [],
      desktop: [],
      tablet: [],
      mobile: []
    };

    if (!stylesDef) {
      return css;
    }

    stylesDef.forEach(function (styleDef) {
      if (!meetsConditions(props.settings, styleDef)) {
        return;
      }

      var selector = replacePlaceholders(styleDef.selector, {
        WRAPPER: '.masteriyo-block-' + props.blockID
      });

      if (_typeof(settingValue) === 'object' && !Array.isArray(settingValue)) {
        if (settingValue.desktop || settingValue.tablet || settingValue.mobile) {
          ['desktop', 'tablet', 'mobile'].forEach(function (deviceType) {
            css[deviceType].push(replacePlaceholders(selector, {
              VALUE: settingValue[deviceType]
            }));
          });
        }
      } else {
        css.allDevice.push(replacePlaceholders(selector, {
          VALUE: settingValue
        }));
      }
    });
    return css;
  }
};

function getSettingStyleGenerator(settingName, settingValue) {
  if (_typeof(settingValue) === 'object') {
    if (!Array.isArray(settingValue)) {
      if (settingValue.border) {
        return settingStyleGenerators.border;
      }
    }

    return settingStyleGenerators.general;
  }

  if (['hideOnDesktop', 'hideOnTablet', 'hideOnMobile', 'colReverseOnTablet', 'colReverseOnMobile'].includes(settingName)) {
    return settingStyleGenerators.empty;
  }

  return settingStyleGenerators.general;
}

var generateBlockCSS = function generateBlockCSS(settings, blockName, blockID) {
  var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'editor';
  if (!blockID) return '';
  var cssForDevices = {
    allDevice: [],
    desktop: [],
    tablet: [],
    mobile: []
  };
  var attributesDef = getBlockAttributesDef('masteriyo/' + blockName);
  if (!attributesDef) return '';
  Object.entries(settings).forEach(function (_ref) {
    var _ref2 = slicedToArray_slicedToArray(_ref, 2),
        settingName = _ref2[0],
        settingValue = _ref2[1];

    var attributeDef = attributesDef[settingName];
    var settingStylesDef = attributeDef === null || attributeDef === void 0 ? void 0 : attributeDef.style;
    if (!settingStylesDef) return;
    var settingStyleGenerator = getSettingStyleGenerator(settingName, settingValue);
    if (!settingStyleGenerator) return;
    var settingCssForDevices = settingStyleGenerator({
      blockID: blockID,
      settingDef: attributeDef,
      settingName: settingName,
      settingValue: settingValue,
      settings: settings
    });
    cssForDevices.allDevice = cssForDevices.allDevice.concat(settingCssForDevices.allDevice);
    cssForDevices.desktop = cssForDevices.desktop.concat(settingCssForDevices.desktop);
    cssForDevices.tablet = cssForDevices.tablet.concat(settingCssForDevices.tablet);
    cssForDevices.mobile = cssForDevices.mobile.concat(settingCssForDevices.mobile);
  });
  var css = cssForDevices.allDevice.join('');

  if (context === 'editor') {
    if (getDeviceType() === 'desktop') {
      css += cssForDevices.desktop.join('');
    }

    if (getDeviceType() === 'tablet') {
      css += cssForDevices.tablet.join('');
    }

    if (getDeviceType() === 'mobile') {
      css += cssForDevices.mobile.join('');
    }
  } else if (context === 'save') {
    css += cssForDevices.desktop.join('');
    css += '@media (max-width: 780px) {' + cssForDevices.tablet.join('') + '}';
    css += '@media (max-width: 360px) {' + cssForDevices.mobile.join('') + '}';
  }

  return css;
};

var meetsConditions = function meetsConditions(settings, selectData) {
  var depends = true;

  if (selectData.condition) {
    selectData.condition.forEach(function (data) {
      var previous = depends;

      if (data.relation === '==' || data.relation === '===') {
        if (typeof data.value === 'string' || typeof data.value === 'number' || typeof data.value === 'boolean') {
          depends = settings[data.key] === data.value;
        } else {
          var _data$value;

          if ((_data$value = data.value) !== null && _data$value !== void 0 && _data$value.includes(settings[data.key])) {
            depends = true;
          } else {
            depends = false;
          }
        }
      } else if (data.relation === '!=' || data.relation === '!==') {
        if (typeof data.value === 'string' || typeof data.value === 'number' || typeof data.value === 'boolean') {
          depends = settings[data.key] !== data.value;
        } else {
          var select = false;
          data.value.forEach(function (arrData) {
            if (settings[data.key] !== arrData) {
              select = true;
            }
          });

          if (select) {
            depends = true;
          }
        }
      }

      if (previous === false) {
        depends = false;
      }
    });
  }

  return depends;
};
;// CONCATENATED MODULE: ./assets/js/blocks/utils/createStyleElement.ts
function createStyleElement_createStyleElement(id) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var styleElement = document.createElement('style');
  styleElement.setAttribute('type', 'text/css');
  styleElement.setAttribute('id', id);
  styleElement.innerHTML = content;
  return styleElement;
}
;// CONCATENATED MODULE: ./assets/js/blocks/utils/updateInlineCSS.ts

function updateInlineCSS(styleId, css) {
  var _window$frames;

  var styleElement = document.getElementById(styleId);

  if (!styleElement) {
    var _document$head;

    styleElement = createStyleElement_createStyleElement(styleId);
    (_document$head = document.head) === null || _document$head === void 0 ? void 0 : _document$head.appendChild(styleElement);
  }

  styleElement.innerHTML = css;

  if ('yes' === _MASTERIYO_BLOCKS_DATA_.isCustomizer && (_window$frames = window.frames) !== null && _window$frames !== void 0 && _window$frames.length) {
    var frames = window.frames;

    for (var i = 0; i < frames.length; i++) {
      if (!frames[i].name) {
        continue;
      }

      var iframeDocument = frames[i].document;
      var styleElement2 = iframeDocument.getElementById(styleId);

      if (!styleElement2) {
        var _iframeDocument$head;

        styleElement2 = createStyleElement_createStyleElement(styleId);
        (_iframeDocument$head = iframeDocument.head) === null || _iframeDocument$head === void 0 ? void 0 : _iframeDocument$head.appendChild(styleElement2);
      }

      styleElement2.innerHTML = css;
    }
  }
}
;// CONCATENATED MODULE: ./assets/js/blocks/hooks/useBlockCSS.ts



var useBlockCSS = function useBlockCSS(props) {
  var clientId = props.clientId,
      blockName = props.blockName,
      deviceType = props.deviceType,
      attributes = props.attributes;
  (0,external_wp_element_namespaceObject.useEffect)(function () {
    if (!clientId) {
      return;
    }

    updateInlineCSS("masteriyo-block-css-".concat(clientId), generateBlockCSS(attributes, blockName, clientId, 'editor'));
  }, [clientId, blockName, deviceType, attributes]);
};
;// CONCATENATED MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function memoize_one_esm_isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!memoize_one_esm_isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ const memoize_one_esm = (memoizeOne);

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function setPrototypeOf_setPrototypeOf(o, p) {
  setPrototypeOf_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return setPrototypeOf_setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf_setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ./node_modules/@emotion/core/node_modules/@emotion/sheet/dist/sheet.browser.esm.js
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheet_browser_esm_sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function sheet_browser_esm_createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var sheet_browser_esm_StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = sheet_browser_esm_createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheet_browser_esm_sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();



;// CONCATENATED MODULE: ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ const stylis_browser_esm = (stylis_min);

;// CONCATENATED MODULE: ./node_modules/@emotion/core/node_modules/@emotion/cache/dist/cache.browser.esm.js




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var cache_browser_esm_delimiter = '/*|*/';
var needle = cache_browser_esm_delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + cache_browser_esm_delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? cache_browser_esm_delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var cache_browser_esm_createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new stylis_browser_esm(stylisOptions);

  if (false) {}

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if (false) { var map; }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (false) { var commentEnd, commentStart; }

  var cache = {
    key: key,
    sheet: new sheet_browser_esm_StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ const cache_browser_esm = (cache_browser_esm_createCache);

;// CONCATENATED MODULE: ./node_modules/@emotion/core/node_modules/@emotion/utils/dist/utils.browser.esm.js
var utils_browser_esm_isBrowser = "object" !== 'undefined';
function utils_browser_esm_getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var utils_browser_esm_insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  utils_browser_esm_isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};



;// CONCATENATED MODULE: ./node_modules/@emotion/core/node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize_browser_esm_memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const memoize_browser_esm = (memoize_browser_esm_memoize);

;// CONCATENATED MODULE: ./node_modules/@emotion/core/node_modules/@emotion/serialize/dist/serialize.browser.esm.js




var serialize_browser_esm_ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var serialize_browser_esm_UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var serialize_browser_esm_hyphenateRegex = /[A-Z]|^ms/g;
var serialize_browser_esm_animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var serialize_browser_esm_isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var serialize_browser_esm_isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var serialize_browser_esm_processStyleName = memoize_browser_esm(function (styleName) {
  return serialize_browser_esm_isCustomProperty(styleName) ? styleName : styleName.replace(serialize_browser_esm_hyphenateRegex, '-$&').toLowerCase();
});

var serialize_browser_esm_processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(serialize_browser_esm_animationRegex, function (match, p1, p2) {
            serialize_browser_esm_cursor = {
              name: p1,
              styles: p2,
              next: serialize_browser_esm_cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitless_browser_esm[key] !== 1 && !serialize_browser_esm_isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var serialize_browser_esm_hyphenatedCache, serialize_browser_esm_hyphenPattern, serialize_browser_esm_msPattern, serialize_browser_esm_oldProcessStyleValue, serialize_browser_esm_contentValues, serialize_browser_esm_contentValuePattern; }

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function serialize_browser_esm_handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          serialize_browser_esm_cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: serialize_browser_esm_cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              serialize_browser_esm_cursor = {
                name: next.name,
                styles: next.styles,
                next: serialize_browser_esm_cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return serialize_browser_esm_createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = serialize_browser_esm_cursor;
          var result = interpolation(mergedProps);
          serialize_browser_esm_cursor = previousCursor;
          return serialize_browser_esm_handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (false) {}

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function serialize_browser_esm_createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += serialize_browser_esm_handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (serialize_browser_esm_isProcessableValue(value)) {
          string += serialize_browser_esm_processStyleName(_key) + ":" + serialize_browser_esm_processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {}

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (serialize_browser_esm_isProcessableValue(value[_i])) {
              string += serialize_browser_esm_processStyleName(_key) + ":" + serialize_browser_esm_processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = serialize_browser_esm_handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += serialize_browser_esm_processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var serialize_browser_esm_labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var serialize_browser_esm_sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var serialize_browser_esm_cursor;
var serialize_browser_esm_serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  serialize_browser_esm_cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += serialize_browser_esm_handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += serialize_browser_esm_handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  serialize_browser_esm_labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = serialize_browser_esm_labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = hash_browser_esm(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: serialize_browser_esm_cursor
  };
};



;// CONCATENATED MODULE: ./node_modules/@emotion/core/dist/emotion-element-04d85134.browser.esm.js






var emotion_element_04d85134_browser_esm_hasOwnProperty = Object.prototype.hasOwnProperty;

var emotion_element_04d85134_browser_esm_EmotionCacheContext = /*#__PURE__*/(0,external_React_.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? cache_browser_esm() : null);
var emotion_element_04d85134_browser_esm_ThemeContext = /*#__PURE__*/(0,external_React_.createContext)({});
var emotion_element_04d85134_browser_esm_CacheProvider = emotion_element_04d85134_browser_esm_EmotionCacheContext.Provider;

var emotion_element_04d85134_browser_esm_withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return /*#__PURE__*/(0,external_React_.createElement)(emotion_element_04d85134_browser_esm_EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return /*#__PURE__*/(0,external_React_.forwardRef)(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var emotion_element_04d85134_browser_esm_sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var emotion_element_04d85134_browser_esm_typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var emotion_element_04d85134_browser_esm_labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var emotion_element_04d85134_browser_esm_createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}

  var newProps = {};

  for (var key in props) {
    if (emotion_element_04d85134_browser_esm_hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[emotion_element_04d85134_browser_esm_typePropName] = type; // TODO: check if this still works with all of those different JSX functions

  if (false) { var match, error; }

  return newProps;
};

var emotion_element_04d85134_browser_esm_Noop = function Noop() {
  return null;
};

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[emotion_element_04d85134_browser_esm_typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = utils_browser_esm_getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serialize_browser_esm_serializeStyles(registeredStyles);

  if (false) { var labelFromStack; }

  var rules = utils_browser_esm_insertStyles(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (emotion_element_04d85134_browser_esm_hasOwnProperty.call(props, key) && key !== 'css' && key !== emotion_element_04d85134_browser_esm_typePropName && ( true || 0)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/(0,external_React_.createElement)(type, newProps);
  var possiblyStyleElement = /*#__PURE__*/(0,external_React_.createElement)(emotion_element_04d85134_browser_esm_Noop, null);


  return /*#__PURE__*/(0,external_React_.createElement)(external_React_.Fragment, null, possiblyStyleElement, ele);
}; // eslint-disable-next-line no-undef


var emotion_element_04d85134_browser_esm_Emotion = /* #__PURE__ */emotion_element_04d85134_browser_esm_withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return /*#__PURE__*/(0,external_React_.createElement)(emotion_element_04d85134_browser_esm_ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (false) {}



;// CONCATENATED MODULE: ./node_modules/@emotion/css/node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function dist_memoize_browser_esm_memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const dist_memoize_browser_esm = (dist_memoize_browser_esm_memoize);

;// CONCATENATED MODULE: ./node_modules/@emotion/css/node_modules/@emotion/serialize/dist/serialize.browser.esm.js




var dist_serialize_browser_esm_ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var dist_serialize_browser_esm_UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var dist_serialize_browser_esm_hyphenateRegex = /[A-Z]|^ms/g;
var dist_serialize_browser_esm_animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var dist_serialize_browser_esm_isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var dist_serialize_browser_esm_isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var dist_serialize_browser_esm_processStyleName = dist_memoize_browser_esm(function (styleName) {
  return dist_serialize_browser_esm_isCustomProperty(styleName) ? styleName : styleName.replace(dist_serialize_browser_esm_hyphenateRegex, '-$&').toLowerCase();
});

var dist_serialize_browser_esm_processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(dist_serialize_browser_esm_animationRegex, function (match, p1, p2) {
            dist_serialize_browser_esm_cursor = {
              name: p1,
              styles: p2,
              next: dist_serialize_browser_esm_cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitless_browser_esm[key] !== 1 && !dist_serialize_browser_esm_isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var dist_serialize_browser_esm_hyphenatedCache, dist_serialize_browser_esm_hyphenPattern, dist_serialize_browser_esm_msPattern, dist_serialize_browser_esm_oldProcessStyleValue, dist_serialize_browser_esm_contentValues, dist_serialize_browser_esm_contentValuePattern; }

var serialize_browser_esm_shouldWarnAboutInterpolatingClassNameFromCss = true;

function dist_serialize_browser_esm_handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          dist_serialize_browser_esm_cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: dist_serialize_browser_esm_cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              dist_serialize_browser_esm_cursor = {
                name: next.name,
                styles: next.styles,
                next: dist_serialize_browser_esm_cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return dist_serialize_browser_esm_createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = dist_serialize_browser_esm_cursor;
          var result = interpolation(mergedProps);
          dist_serialize_browser_esm_cursor = previousCursor;
          return dist_serialize_browser_esm_handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (false) {}

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function dist_serialize_browser_esm_createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += dist_serialize_browser_esm_handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (dist_serialize_browser_esm_isProcessableValue(value)) {
          string += dist_serialize_browser_esm_processStyleName(_key) + ":" + dist_serialize_browser_esm_processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {}

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (dist_serialize_browser_esm_isProcessableValue(value[_i])) {
              string += dist_serialize_browser_esm_processStyleName(_key) + ":" + dist_serialize_browser_esm_processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = dist_serialize_browser_esm_handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += dist_serialize_browser_esm_processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var dist_serialize_browser_esm_labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var dist_serialize_browser_esm_sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var dist_serialize_browser_esm_cursor;
var dist_serialize_browser_esm_serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  dist_serialize_browser_esm_cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += dist_serialize_browser_esm_handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += dist_serialize_browser_esm_handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  dist_serialize_browser_esm_labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = dist_serialize_browser_esm_labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = hash_browser_esm(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: dist_serialize_browser_esm_cursor
  };
};



;// CONCATENATED MODULE: ./node_modules/@emotion/css/dist/css.browser.esm.js


function css_browser_esm_css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return dist_serialize_browser_esm_serializeStyles(args);
}

/* harmony default export */ const css_browser_esm = (css_browser_esm_css);

;// CONCATENATED MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js











var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !emotion_element_04d85134_browser_esm_hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return external_React_.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = emotion_element_04d85134_browser_esm_Emotion;
  createElementArgArray[1] = emotion_element_04d85134_browser_esm_createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return external_React_.createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var core_browser_esm_Global = /* #__PURE__ */(/* unused pure expression or super */ null && (withEmotionCache(function (props, cache) {
  if (false) {}

  var styles = props.styles;

  if (typeof styles === 'function') {
    return /*#__PURE__*/createElement(ThemeContext.Consumer, null, function (theme) {
      var serialized = serializeStyles([styles(theme)]);
      return /*#__PURE__*/createElement(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = serializeStyles([styles]);
  return /*#__PURE__*/createElement(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
})));

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new sheet_browser_esm_StyleSheet({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      utils_browser_esm_insertStyles(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(external_React_.Component);

var keyframes = function keyframes() {
  var insertable = css_browser_esm.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var core_browser_esm_classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function core_browser_esm_merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = utils_browser_esm_getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var core_browser_esm_Noop = function Noop() {
  return null;
};

var ClassNames = emotion_element_04d85134_browser_esm_withEmotionCache(function (props, context) {
  return /*#__PURE__*/(0,external_React_.createElement)(emotion_element_04d85134_browser_esm_ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "production" !== 'production') {}

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = serialize_browser_esm_serializeStyles(args, context.registered);

      {
        utils_browser_esm_insertStyles(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "production" !== 'production') {}

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return core_browser_esm_merge(context.registered, css, core_browser_esm_classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;
    var possiblyStyleElement = /*#__PURE__*/(0,external_React_.createElement)(core_browser_esm_Noop, null);


    return /*#__PURE__*/(0,external_React_.createElement)(external_React_.Fragment, null, possiblyStyleElement, ele);
  });
});



;// CONCATENATED MODULE: external "ReactDOM"
const external_ReactDOM_namespaceObject = window["ReactDOM"];
;// CONCATENATED MODULE: ./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js
// ==============================
// NO OP
// ==============================
var utils_06b0d5a4_browser_esm_noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("" + applyPrefixToName(prefix, key));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to, duration, callback) {
  if (duration === void 0) {
    duration = 200;
  }

  if (callback === void 0) {
    callback = utils_06b0d5a4_browser_esm_noop;
  }

  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}



// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-input-autosize/lib/AutosizeInput.js
var AutosizeInput = __webpack_require__(639);
;// CONCATENATED MODULE: ./node_modules/react-select/dist/index-4322c0ed.browser.esm.js








function index_4322c0ed_browser_esm_extends() { index_4322c0ed_browser_esm_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return index_4322c0ed_browser_esm_extends.apply(this, arguments); }

function index_4322c0ed_browser_esm_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        scrollTo(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"" + placement + "\".");
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, _ref3[alignToControl(placement)] = '100%', _ref3.backgroundColor = colors.neutral0, _ref3.borderRadius = borderRadius, _ref3.boxShadow = '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)', _ref3.marginBottom = spacing.menuGutter, _ref3.marginTop = spacing.menuGutter, _ref3.position = 'absolute', _ref3.width = '100%', _ref3.zIndex = 1, _ref3;
}; // NOTE: internal only

var MenuPlacer =
/*#__PURE__*/
function (_Component) {
  index_4322c0ed_browser_esm_inheritsLoose(MenuPlacer, _Component);

  function MenuPlacer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };

    _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    };

    _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return index_4322c0ed_browser_esm_extends({}, _this.props, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    };

    return _this;
  }

  var _proto = MenuPlacer.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return children({
      ref: this.getPlacement,
      placerProps: this.getUpdatedProps()
    });
  };

  return MenuPlacer;
}(external_React_.Component);
MenuPlacer.contextTypes = {
  getPortalPlacement: (prop_types_default()).func
};

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return jsx("div", index_4322c0ed_browser_esm_extends({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className)
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;
  return jsx("div", {
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: baseUnit * 2 + "px " + baseUnit * 3 + "px",
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", index_4322c0ed_browser_esm_extends({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", index_4322c0ed_browser_esm_extends({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal =
/*#__PURE__*/
function (_Component2) {
  index_4322c0ed_browser_esm_inheritsLoose(MenuPortal, _Component2);

  function MenuPortal() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
    _this2.state = {
      placement: null
    };

    _this2.getPortalPlacement = function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    };

    return _this2;
  }

  var _proto2 = MenuPortal.prototype;

  _proto2.getChildContext = function getChildContext() {
    return {
      getPortalPlacement: this.getPortalPlacement
    };
  } // callback for occassions where the menu must "flip"
  ;

  _proto2.render = function render() {
    var _this$props2 = this.props,
        appendTo = _this$props2.appendTo,
        children = _this$props2.children,
        controlElement = _this$props2.controlElement,
        menuPlacement = _this$props2.menuPlacement,
        position = _this$props2.menuPosition,
        getStyles = _this$props2.getStyles;
    var isFixed = position === 'fixed'; // bail early if required elements aren't present

    if (!appendTo && !isFixed || !controlElement) {
      return null;
    }

    var placement = this.state.placement || coercePlacement(menuPlacement);
    var rect = getBoundingClientObj(controlElement);
    var scrollDistance = isFixed ? 0 : window.pageYOffset;
    var offset = rect[placement] + scrollDistance;
    var state = {
      offset: offset,
      position: position,
      rect: rect
    }; // same wrapper element whether fixed or portalled

    var menuWrapper = jsx("div", {
      css: getStyles('menuPortal', state)
    }, children);
    return appendTo ? (0,external_ReactDOM_namespaceObject.createPortal)(menuWrapper, appendTo) : menuWrapper;
  };

  return MenuPortal;
}(external_React_.Component);
MenuPortal.childContextTypes = {
  getPortalPlacement: (prop_types_default()).func
};

var index_4322c0ed_browser_esm_isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = index_4322c0ed_browser_esm_isArray(a),
        arrB = index_4322c0ed_browser_esm_isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // Custom handling for React


    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
}

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return jsx("div", _extends$1({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: spacing.baseUnit / 2 + "px " + spacing.baseUnit * 2 + "px",
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer = function ValueContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      isMulti = props.isMulti,
      getStyles = props.getStyles,
      hasValue = props.hasValue;
  return jsx("div", {
    css: getStyles('valueContainer', props),
    className: cx({
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }, className)
  }, children);
}; // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return jsx("div", {
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, children);
};

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function index_4322c0ed_browser_esm_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _ref2 =  true ? {
  name: "19bqh2r",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;"
} : 0;

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = index_4322c0ed_browser_esm_objectWithoutPropertiesLoose(_ref, ["size"]);

  return jsx("svg", _extends$2({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return jsx(Svg, _extends$2({
    size: 20
  }, props), jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return jsx(Svg, _extends$2({
    size: 20
  }, props), jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends$2({}, innerProps, {
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }), children || jsx(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends$2({}, innerProps, {
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }), children || jsx(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("span", _extends$2({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = keyframes(_templateObject());
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return jsx("span", {
    css:
    /*#__PURE__*/
    css_browser_esm({
      animation: loadingDotAnimations + " 1s ease-in-out " + delay + "ms infinite;",
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  true ? "" : 0)
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return jsx("div", _extends$2({}, innerProps, {
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }), jsx(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), jsx(LoadingDot, {
    delay: 160,
    offset: true
  }), jsx(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var index_4322c0ed_browser_esm_css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px " + colors.primary : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return jsx("div", _extends$3({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return jsx("div", {
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, jsx(Heading, _extends$4({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), jsx("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = _objectWithoutPropertiesLoose$1(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return jsx("div", _extends$4({
    css: getStyles('groupHeading', _extends$4({
      theme: theme
    }, cleanProps)),
    className: cx({
      'group-heading': true
    }, className)
  }, cleanProps));
};

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = _objectWithoutPropertiesLoose$2(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return jsx("div", {
    css: getStyles('input', _extends$5({
      theme: theme
    }, props))
  }, jsx(AutosizeInput/* default */.Z, _extends$5({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return jsx("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children,
      innerProps = _ref5.innerProps;
  return jsx("div", innerProps, children || jsx(CrossIcon, {
    size: 14
  }));
}

var MultiValue = function MultiValue(props) {
  var children = props.children,
      className = props.className,
      components = props.components,
      cx = props.cx,
      data = props.data,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
  var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
  return jsx(ClassNames, null, function (_ref6) {
    var css = _ref6.css,
        emotionCx = _ref6.cx;
    return jsx(Container, {
      data: data,
      innerProps: _extends$6({}, innerProps, {
        className: emotionCx(css(getStyles('multiValue', props)), cx({
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className))
      }),
      selectProps: selectProps
    }, jsx(Label, {
      data: data,
      innerProps: {
        className: emotionCx(css(getStyles('multiValueLabel', props)), cx({
          'multi-value__label': true
        }, className))
      },
      selectProps: selectProps
    }, children), jsx(Remove, {
      data: data,
      innerProps: _extends$6({
        className: emotionCx(css(getStyles('multiValueRemove', props)), cx({
          'multi-value__remove': true
        }, className))
      }, removeProps),
      selectProps: selectProps
    }));
  });
};

MultiValue.defaultProps = {
  cropWithEllipsis: true
};

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }
var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: spacing.baseUnit * 2 + "px " + spacing.baseUnit * 3 + "px",
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return jsx("div", _extends$7({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }
var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends$8({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }
var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - " + spacing.baseUnit * 2 + "px)",
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return jsx("div", _extends$9({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }
var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _extends$a({}, components, props.components);
};



;// CONCATENATED MODULE: ./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js








var diacritics = [{
  base: 'A',
  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
  base: 'AA',
  letters: /[\uA732]/g
}, {
  base: 'AE',
  letters: /[\u00C6\u01FC\u01E2]/g
}, {
  base: 'AO',
  letters: /[\uA734]/g
}, {
  base: 'AU',
  letters: /[\uA736]/g
}, {
  base: 'AV',
  letters: /[\uA738\uA73A]/g
}, {
  base: 'AY',
  letters: /[\uA73C]/g
}, {
  base: 'B',
  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
  base: 'C',
  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
  base: 'D',
  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
  base: 'DZ',
  letters: /[\u01F1\u01C4]/g
}, {
  base: 'Dz',
  letters: /[\u01F2\u01C5]/g
}, {
  base: 'E',
  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
  base: 'F',
  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
  base: 'G',
  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
  base: 'H',
  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
  base: 'I',
  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
  base: 'J',
  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
  base: 'K',
  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
  base: 'L',
  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
  base: 'LJ',
  letters: /[\u01C7]/g
}, {
  base: 'Lj',
  letters: /[\u01C8]/g
}, {
  base: 'M',
  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
  base: 'N',
  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
  base: 'NJ',
  letters: /[\u01CA]/g
}, {
  base: 'Nj',
  letters: /[\u01CB]/g
}, {
  base: 'O',
  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
  base: 'OI',
  letters: /[\u01A2]/g
}, {
  base: 'OO',
  letters: /[\uA74E]/g
}, {
  base: 'OU',
  letters: /[\u0222]/g
}, {
  base: 'P',
  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
  base: 'Q',
  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
  base: 'R',
  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
  base: 'S',
  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
  base: 'T',
  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
  base: 'TZ',
  letters: /[\uA728]/g
}, {
  base: 'U',
  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
  base: 'V',
  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
  base: 'VY',
  letters: /[\uA760]/g
}, {
  base: 'W',
  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
  base: 'X',
  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
  base: 'Y',
  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
  base: 'Z',
  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
  base: 'a',
  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
  base: 'aa',
  letters: /[\uA733]/g
}, {
  base: 'ae',
  letters: /[\u00E6\u01FD\u01E3]/g
}, {
  base: 'ao',
  letters: /[\uA735]/g
}, {
  base: 'au',
  letters: /[\uA737]/g
}, {
  base: 'av',
  letters: /[\uA739\uA73B]/g
}, {
  base: 'ay',
  letters: /[\uA73D]/g
}, {
  base: 'b',
  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
  base: 'c',
  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
  base: 'd',
  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
  base: 'dz',
  letters: /[\u01F3\u01C6]/g
}, {
  base: 'e',
  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
  base: 'f',
  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
  base: 'g',
  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
  base: 'h',
  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
  base: 'hv',
  letters: /[\u0195]/g
}, {
  base: 'i',
  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
  base: 'j',
  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
  base: 'k',
  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
  base: 'l',
  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
  base: 'lj',
  letters: /[\u01C9]/g
}, {
  base: 'm',
  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
  base: 'n',
  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
  base: 'nj',
  letters: /[\u01CC]/g
}, {
  base: 'o',
  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
  base: 'oi',
  letters: /[\u01A3]/g
}, {
  base: 'ou',
  letters: /[\u0223]/g
}, {
  base: 'oo',
  letters: /[\uA74F]/g
}, {
  base: 'p',
  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
  base: 'q',
  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
  base: 'r',
  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
  base: 's',
  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
  base: 't',
  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
  base: 'tz',
  letters: /[\uA729]/g
}, {
  base: 'u',
  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
  base: 'v',
  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
  base: 'vy',
  letters: /[\uA761]/g
}, {
  base: 'w',
  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
  base: 'x',
  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
  base: 'y',
  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
  base: 'z',
  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
}];
var stripDiacritics = function stripDiacritics(str) {
  for (var i = 0; i < diacritics.length; i++) {
    str = str.replace(diacritics[i].letters, diacritics[i].base);
  }

  return str;
};

function Select_9fdb8cd0_browser_esm_extends() { Select_9fdb8cd0_browser_esm_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_9fdb8cd0_browser_esm_extends.apply(this, arguments); }

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return option.label + " " + option.value;
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = Select_9fdb8cd0_browser_esm_extends({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

function Select_9fdb8cd0_browser_esm_extends$1() { Select_9fdb8cd0_browser_esm_extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_9fdb8cd0_browser_esm_extends$1.apply(this, arguments); }

var _ref =  true ? {
  name: "1laao21-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;"
} : 0;

var A11yText = function A11yText(props) {
  return jsx("span", Select_9fdb8cd0_browser_esm_extends$1({
    css: _ref
  }, props));
};

function Select_9fdb8cd0_browser_esm_extends$2() { Select_9fdb8cd0_browser_esm_extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_9fdb8cd0_browser_esm_extends$2.apply(this, arguments); }

function Select_9fdb8cd0_browser_esm_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function DummyInput(_ref) {
  var inProp = _ref.in,
      out = _ref.out,
      onExited = _ref.onExited,
      appear = _ref.appear,
      enter = _ref.enter,
      exit = _ref.exit,
      innerRef = _ref.innerRef,
      emotion = _ref.emotion,
      props = Select_9fdb8cd0_browser_esm_objectWithoutPropertiesLoose(_ref, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

  return jsx("input", Select_9fdb8cd0_browser_esm_extends$2({
    ref: innerRef
  }, props, {
    css:
    /*#__PURE__*/
    css_browser_esm({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      fontSize: 'inherit',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(0)'
    },  true ? "" : 0)
  }));
}

function Select_9fdb8cd0_browser_esm_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NodeResolver =
/*#__PURE__*/
function (_Component) {
  Select_9fdb8cd0_browser_esm_inheritsLoose(NodeResolver, _Component);

  function NodeResolver() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NodeResolver.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.innerRef((0,external_ReactDOM_namespaceObject.findDOMNode)(this));
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.innerRef(null);
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return NodeResolver;
}(external_React_.Component);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

function _inheritsLoose$1(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
var Select_9fdb8cd0_browser_esm_canUseDOM = !!( window.document && window.document.createElement);
var activeScrollLocks = 0;

var ScrollLock =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$1(ScrollLock, _Component);

  function ScrollLock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.originalStyles = {};
    _this.listenerOptions = {
      capture: false,
      passive: false
    };
    return _this;
  }

  var _proto = ScrollLock.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (!Select_9fdb8cd0_browser_esm_canUseDOM) return;
    var _this$props = this.props,
        accountForScrollbars = _this$props.accountForScrollbars,
        touchScrollTarget = _this$props.touchScrollTarget;
    var target = document.body;
    var targetStyle = target && target.style;

    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        _this2.originalStyles[key] = val;
      });
    } // apply the lock styles and padding if this is the first scroll lock


    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });

      if (targetStyle) {
        targetStyle.paddingRight = adjustedPadding + "px";
      }
    } // account for touch devices


    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
      }
    } // increment active scroll locks


    activeScrollLocks += 1;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    if (!Select_9fdb8cd0_browser_esm_canUseDOM) return;
    var _this$props2 = this.props,
        accountForScrollbars = _this$props2.accountForScrollbars,
        touchScrollTarget = _this$props2.touchScrollTarget;
    var target = document.body;
    var targetStyle = target && target.style; // safely decrement active scroll locks

    activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = _this3.originalStyles[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    } // remove touch listeners


    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
      }
    }
  };

  _proto.render = function render() {
    return null;
  };

  return ScrollLock;
}(external_React_.Component);

ScrollLock.defaultProps = {
  accountForScrollbars: true
};

function _inheritsLoose$2(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _ref$1 =  true ? {
  name: "1dsbpcp",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;"
} : 0;

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
var ScrollBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose$2(ScrollBlock, _PureComponent);

  function ScrollBlock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.state = {
      touchScrollTarget: null
    };

    _this.getScrollTarget = function (ref) {
      if (ref === _this.state.touchScrollTarget) return;

      _this.setState({
        touchScrollTarget: ref
      });
    };

    _this.blurSelectInput = function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    };

    return _this;
  }

  var _proto = ScrollBlock.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        isEnabled = _this$props.isEnabled;
    var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

    if (!isEnabled) return children;
    /*
     * Div
     * ------------------------------
     * blocks scrolling on non-body elements behind the menu
      * NodeResolver
     * ------------------------------
     * we need a reference to the scrollable element to "unlock" scroll on
     * mobile devices
      * ScrollLock
     * ------------------------------
     * actually does the scroll locking
     */

    return jsx("div", null, jsx("div", {
      onClick: this.blurSelectInput,
      css: _ref$1
    }), jsx(NodeResolver, {
      innerRef: this.getScrollTarget
    }, children), touchScrollTarget ? jsx(ScrollLock, {
      touchScrollTarget: touchScrollTarget
    }) : null);
  };

  return ScrollBlock;
}(external_React_.PureComponent);

function Select_9fdb8cd0_browser_esm_objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$3(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ScrollCaptor =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$3(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.isBottom = false;
    _this.isTop = false;
    _this.scrollTarget = void 0;
    _this.touchStart = void 0;

    _this.cancelScroll = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };

    _this.handleEventDelta = function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;
      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false; // reset bottom/top flags

      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }

      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      } // bottom limit


      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }

        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true; // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }

        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      } // cancel scroll


      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    };

    _this.onWheel = function (event) {
      _this.handleEventDelta(event, event.deltaY);
    };

    _this.onTouchStart = function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    };

    _this.onTouchMove = function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

      _this.handleEventDelta(event, deltaY);
    };

    _this.getScrollTarget = function (ref) {
      _this.scrollTarget = ref;
    };

    return _this;
  }

  var _proto = ScrollCaptor.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.startListening(this.scrollTarget);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stopListening(this.scrollTarget);
  };

  _proto.startListening = function startListening(el) {
    // bail early if no element is available to attach to
    if (!el) return; // all the if statements are to appease Flow 😢

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('wheel', this.onWheel, false);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchstart', this.onTouchStart, false);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchmove', this.onTouchMove, false);
    }
  };

  _proto.stopListening = function stopListening(el) {
    // all the if statements are to appease Flow 😢
    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('wheel', this.onWheel, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchstart', this.onTouchStart, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchmove', this.onTouchMove, false);
    }
  };

  _proto.render = function render() {
    return external_React_default().createElement(NodeResolver, {
      innerRef: this.getScrollTarget
    }, this.props.children);
  };

  return ScrollCaptor;
}(external_React_.Component);

function ScrollCaptorSwitch(_ref) {
  var _ref$isEnabled = _ref.isEnabled,
      isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled,
      props = Select_9fdb8cd0_browser_esm_objectWithoutPropertiesLoose$1(_ref, ["isEnabled"]);

  return isEnabled ? external_React_default().createElement(ScrollCaptor, props) : props.children;
}

var instructionsAriaMessage = function instructionsAriaMessage(event, context) {
  if (context === void 0) {
    context = {};
  }

  var _context = context,
      isSearchable = _context.isSearchable,
      isMulti = _context.isMulti,
      label = _context.label,
      isDisabled = _context.isDisabled;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options" + (isDisabled ? '' : ', press Enter to select the currently focused option') + ", press Escape to exit the menu, press Tab to select the option and exit the menu.";

    case 'input':
      return (label ? label : 'Select') + " is focused " + (isSearchable ? ',type to refine list' : '') + ", press Down to open the menu, " + (isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option " + value + ", deselected.";

    case 'select-option':
      return isDisabled ? "option " + value + " is disabled. Select another option." : "option " + value + ", selected.";
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value " + getOptionLabel(focusedValue) + " focused, " + (selectValue.indexOf(focusedValue) + 1) + " of " + selectValue.length + ".";
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option " + getOptionLabel(focusedOption) + " focused" + (focusedOption.isDisabled ? ' disabled' : '') + ", " + (options.indexOf(focusedOption) + 1) + " of " + options.length + ".";
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "" + screenReaderMessage + (inputValue ? ' for search term ' + inputValue : '') + ".";
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

function Select_9fdb8cd0_browser_esm_extends$3() { Select_9fdb8cd0_browser_esm_extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_9fdb8cd0_browser_esm_extends$3.apply(this, arguments); }
var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: index_4322c0ed_browser_esm_css,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css$1,
  valueContainer: valueContainerCSS
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source, target) {
  if (target === void 0) {
    target = {};
  }

  // initialize with source styles
  var styles = Select_9fdb8cd0_browser_esm_extends$3({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

function Select_9fdb8cd0_browser_esm_objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Select_9fdb8cd0_browser_esm_extends$4() { Select_9fdb8cd0_browser_esm_extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_9fdb8cd0_browser_esm_extends$4.apply(this, arguments); }

function _inheritsLoose$4(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return count + " result" + (count !== 1 ? 's' : '') + " available";
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};
var instanceId = 1;

var Select_9fdb8cd0_browser_esm_Select =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$4(Select, _Component);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    _this = _Component.call(this, _props) || this;
    _this.state = {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      menuOptions: {
        render: [],
        focusable: []
      },
      selectValue: []
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.clearFocusValueOnUpdate = false;
    _this.commonProps = void 0;
    _this.components = void 0;
    _this.hasGroups = false;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.inputIsHiddenAfterUpdate = void 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;

    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };

    _this.focusedOptionRef = null;

    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };

    _this.menuListRef = null;

    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.inputRef = null;

    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };

    _this.cacheComponents = function (components) {
      _this.components = defaultComponents({
        components: components
      });
    };

    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;

    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, Select_9fdb8cd0_browser_esm_extends$4({}, actionMeta, {
        name: name
      }));
    };

    _this.setValue = function (newValue, action, option) {
      if (action === void 0) {
        action = 'set-value';
      }

      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.clearFocusValueOnUpdate = true;

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };

    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat(selectValue, [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };

    _this.removeValue = function (removedValue) {
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValue = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    };

    _this.clearValue = function () {
      var isMulti = _this.props.isMulti;

      _this.onChange(isMulti ? [] : null, {
        action: 'clear'
      });
    };

    _this.popValue = function () {
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValue = selectValue.slice(0, selectValue.length - 1);

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };

    _this.getOptionLabel = function (data) {
      return _this.props.getOptionLabel(data);
    };

    _this.getOptionValue = function (data) {
      return _this.props.getOptionValue(data);
    };

    _this.getStyles = function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    _this.getElementId = function (element) {
      return _this.instancePrefix + "-" + element;
    };

    _this.getActiveDescendentId = function () {
      var menuIsOpen = _this.props.menuIsOpen;
      var _this$state = _this.state,
          menuOptions = _this$state.menuOptions,
          focusedOption = _this$state.focusedOption;
      if (!focusedOption || !menuIsOpen) return undefined;
      var index = menuOptions.focusable.indexOf(focusedOption);
      var option = menuOptions.render[index];
      return option && option.key;
    };

    _this.announceAriaLiveSelection = function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    };

    _this.announceAriaLiveContext = function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, Select_9fdb8cd0_browser_esm_extends$4({}, context, {
          label: _this.props['aria-label']
        }))
      });
    };

    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    };

    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };

    _this.onControlMouseDown = function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if ( // $FlowFixMe
        event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }

      if ( // $FlowFixMe
      event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };

    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    };

    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };

    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };

    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };

    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };

    _this.onTouchStart = function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };

    _this.onTouchMove = function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };

    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };

    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    };

    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    };

    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    };

    _this.handleInputChange = function (event) {
      var inputValue = event.currentTarget.value;
      _this.inputIsHiddenAfterUpdate = false;

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      _this.onMenuOpen();
    };

    _this.onInputFocus = function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.inputIsHiddenAfterUpdate = false;

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    };

    _this.onInputBlur = function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };

    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    };

    _this.shouldHideSelectedOptions = function () {
      var _this$props6 = _this.props,
          hideSelectedOptions = _this$props6.hideSelectedOptions,
          isMulti = _this$props6.isMulti;
      if (hideSelectedOptions === undefined) return isMulti;
      return hideSelectedOptions;
    };

    _this.onKeyDown = function (event) {
      var _this$props7 = _this.props,
          isMulti = _this$props7.isMulti,
          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
          escapeClearsValue = _this$props7.escapeClearsValue,
          inputValue = _this$props7.inputValue,
          isClearable = _this$props7.isClearable,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen,
          onKeyDown = _this$props7.onKeyDown,
          tabSelectsValue = _this$props7.tabSelectsValue,
          openMenuOnFocus = _this$props7.openMenuOnFocus;
      var _this$state2 = _this.state,
          focusedOption = _this$state2.focusedOption,
          focusedValue = _this$state2.focusedValue,
          selectValue = _this$state2.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.inputIsHiddenAfterUpdate = false;

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    };

    _this.buildMenuOptions = function (props, selectValue) {
      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
          options = props.options;

      var toOption = function toOption(option, id) {
        var isDisabled = _this.isOptionDisabled(option, selectValue);

        var isSelected = _this.isOptionSelected(option, selectValue);

        var label = _this.getOptionLabel(option);

        var value = _this.getOptionValue(option);

        if (_this.shouldHideSelectedOptions() && isSelected || !_this.filterOption({
          label: label,
          value: value,
          data: option
        }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this.selectOption(option);
        };
        var optionId = _this.getElementId('option') + "-" + id;
        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this.hasGroups) _this.hasGroups = true;
          var items = item.options;
          var children = items.map(function (child, i) {
            var option = toOption(child, itemIndex + "-" + i);
            if (option) acc.focusable.push(child);
            return option;
          }).filter(Boolean);

          if (children.length) {
            var groupId = _this.getElementId('group') + "-" + itemIndex;
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, "" + itemIndex);

          if (option) {
            acc.render.push(option);
            acc.focusable.push(item);
          }
        }

        return acc;
      }, {
        render: [],
        focusable: []
      });
    };

    var _value = _props.value;
    _this.cacheComponents = memoize_one_esm(_this.cacheComponents, exportedEqual).bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.cacheComponents(_props.components);

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var _selectValue = cleanValue(_value);

    _this.buildMenuOptions = memoize_one_esm(_this.buildMenuOptions, function (newArgs, lastArgs) {
      var _ref6 = newArgs,
          newProps = _ref6[0],
          newSelectValue = _ref6[1];
      var _ref7 = lastArgs,
          lastProps = _ref7[0],
          lastSelectValue = _ref7[1];
      return exportedEqual(newSelectValue, lastSelectValue) && exportedEqual(newProps.inputValue, lastProps.inputValue) && exportedEqual(newProps.options, lastProps.options);
    }).bind(_assertThisInitialized(_assertThisInitialized(_this)));

    var _menuOptions = _props.menuIsOpen ? _this.buildMenuOptions(_props, _selectValue) : {
      render: [],
      focusable: []
    };

    _this.state.menuOptions = _menuOptions;
    _this.state.selectValue = _selectValue;
    return _this;
  }

  var _proto = Select.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.startListeningComposition();
    this.startListeningToTouch();

    if (this.props.closeMenuOnScroll && document && document.addEventListener) {
      // Listen to all scroll events, and filter them out inside of 'onScroll'
      document.addEventListener('scroll', this.onScroll, true);
    }

    if (this.props.autoFocus) {
      this.focusInput();
    }
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    var _this$props8 = this.props,
        options = _this$props8.options,
        value = _this$props8.value,
        menuIsOpen = _this$props8.menuIsOpen,
        inputValue = _this$props8.inputValue; // re-cache custom components

    this.cacheComponents(nextProps.components); // rebuild the menu options

    if (nextProps.value !== value || nextProps.options !== options || nextProps.menuIsOpen !== menuIsOpen || nextProps.inputValue !== inputValue) {
      var selectValue = cleanValue(nextProps.value);
      var menuOptions = nextProps.menuIsOpen ? this.buildMenuOptions(nextProps, selectValue) : {
        render: [],
        focusable: []
      };
      var focusedValue = this.getNextFocusedValue(selectValue);
      var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
      this.setState({
        menuOptions: menuOptions,
        selectValue: selectValue,
        focusedOption: focusedOption,
        focusedValue: focusedValue
      });
    } // some updates should toggle the state of the input visibility


    if (this.inputIsHiddenAfterUpdate != null) {
      this.setState({
        inputIsHidden: this.inputIsHiddenAfterUpdate
      });
      delete this.inputIsHiddenAfterUpdate;
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props9 = this.props,
        isDisabled = _this$props9.isDisabled,
        menuIsOpen = _this$props9.menuIsOpen;
    var isFocused = this.state.isFocused;

    if ( // ensure focus is restored correctly when the control becomes enabled
    isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
    isFocused && menuIsOpen && !prevProps.menuIsOpen) {
      this.focusInput();
    } // scroll the focused option into view if necessary


    if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
      scrollIntoView(this.menuListRef, this.focusedOptionRef);
      this.scrollToFocusedOptionOnUpdate = false;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stopListeningComposition();
    this.stopListeningToTouch();
    document.removeEventListener('scroll', this.onScroll, true);
  };

  // ==============================
  // Consumer Handlers
  // ==============================
  _proto.onMenuOpen = function onMenuOpen() {
    this.props.onMenuOpen();
  };

  _proto.onMenuClose = function onMenuClose() {
    var _this$props10 = this.props,
        isSearchable = _this$props10.isSearchable,
        isMulti = _this$props10.isMulti;
    this.announceAriaLiveContext({
      event: 'input',
      context: {
        isSearchable: isSearchable,
        isMulti: isMulti
      }
    });
    this.onInputChange('', {
      action: 'menu-close'
    });
    this.props.onMenuClose();
  };

  _proto.onInputChange = function onInputChange(newValue, actionMeta) {
    this.props.onInputChange(newValue, actionMeta);
  } // ==============================
  // Methods
  // ==============================
  ;

  _proto.focusInput = function focusInput() {
    if (!this.inputRef) return;
    this.inputRef.focus();
  };

  _proto.blurInput = function blurInput() {
    if (!this.inputRef) return;
    this.inputRef.blur();
  } // aliased for consumers
  ;

  _proto.openMenu = function openMenu(focusOption) {
    var _this2 = this;

    var _this$state3 = this.state,
        selectValue = _this$state3.selectValue,
        isFocused = _this$state3.isFocused;
    var menuOptions = this.buildMenuOptions(this.props, selectValue);
    var isMulti = this.props.isMulti;
    var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

    if (!isMulti) {
      var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

      if (selectedIndex > -1) {
        openAtIndex = selectedIndex;
      }
    } // only scroll if the menu isn't already open


    this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
    this.inputIsHiddenAfterUpdate = false;
    this.setState({
      menuOptions: menuOptions,
      focusedValue: null,
      focusedOption: menuOptions.focusable[openAtIndex]
    }, function () {
      _this2.onMenuOpen();

      _this2.announceAriaLiveContext({
        event: 'menu'
      });
    });
  };

  _proto.focusValue = function focusValue(direction) {
    var _this$props11 = this.props,
        isMulti = _this$props11.isMulti,
        isSearchable = _this$props11.isSearchable;
    var _this$state4 = this.state,
        selectValue = _this$state4.selectValue,
        focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

    if (!isMulti) return;
    this.setState({
      focusedOption: null
    });
    var focusedIndex = selectValue.indexOf(focusedValue);

    if (!focusedValue) {
      focusedIndex = -1;
      this.announceAriaLiveContext({
        event: 'value'
      });
    }

    var lastIndex = selectValue.length - 1;
    var nextFocus = -1;
    if (!selectValue.length) return;

    switch (direction) {
      case 'previous':
        if (focusedIndex === 0) {
          // don't cycle from the start to the end
          nextFocus = 0;
        } else if (focusedIndex === -1) {
          // if nothing is focused, focus the last value first
          nextFocus = lastIndex;
        } else {
          nextFocus = focusedIndex - 1;
        }

        break;

      case 'next':
        if (focusedIndex > -1 && focusedIndex < lastIndex) {
          nextFocus = focusedIndex + 1;
        }

        break;
    }

    if (nextFocus === -1) {
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
    }

    this.setState({
      inputIsHidden: nextFocus !== -1,
      focusedValue: selectValue[nextFocus]
    });
  };

  _proto.focusOption = function focusOption(direction) {
    if (direction === void 0) {
      direction = 'first';
    }

    var pageSize = this.props.pageSize;
    var _this$state5 = this.state,
        focusedOption = _this$state5.focusedOption,
        menuOptions = _this$state5.menuOptions;
    var options = menuOptions.focusable;
    if (!options.length) return;
    var nextFocus = 0; // handles 'first'

    var focusedIndex = options.indexOf(focusedOption);

    if (!focusedOption) {
      focusedIndex = -1;
      this.announceAriaLiveContext({
        event: 'menu'
      });
    }

    if (direction === 'up') {
      nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
    } else if (direction === 'down') {
      nextFocus = (focusedIndex + 1) % options.length;
    } else if (direction === 'pageup') {
      nextFocus = focusedIndex - pageSize;
      if (nextFocus < 0) nextFocus = 0;
    } else if (direction === 'pagedown') {
      nextFocus = focusedIndex + pageSize;
      if (nextFocus > options.length - 1) nextFocus = options.length - 1;
    } else if (direction === 'last') {
      nextFocus = options.length - 1;
    }

    this.scrollToFocusedOptionOnUpdate = true;
    this.setState({
      focusedOption: options[nextFocus],
      focusedValue: null
    });
    this.announceAriaLiveContext({
      event: 'menu',
      context: {
        isDisabled: isOptionDisabled(options[nextFocus])
      }
    });
  };

  // ==============================
  // Getters
  // ==============================
  _proto.getTheme = function getTheme() {
    // Use the default theme if there are no customizations.
    if (!this.props.theme) {
      return defaultTheme;
    } // If the theme prop is a function, assume the function
    // knows how to merge the passed-in default theme with
    // its own modifications.


    if (typeof this.props.theme === 'function') {
      return this.props.theme(defaultTheme);
    } // Otherwise, if a plain theme object was passed in,
    // overlay it with the default theme.


    return Select_9fdb8cd0_browser_esm_extends$4({}, defaultTheme, this.props.theme);
  };

  _proto.getCommonProps = function getCommonProps() {
    var clearValue = this.clearValue,
        getStyles = this.getStyles,
        setValue = this.setValue,
        selectOption = this.selectOption,
        props = this.props;
    var classNamePrefix = props.classNamePrefix,
        isMulti = props.isMulti,
        isRtl = props.isRtl,
        options = props.options;
    var selectValue = this.state.selectValue;
    var hasValue = this.hasValue();

    var getValue = function getValue() {
      return selectValue;
    };

    var cx = classNames.bind(null, classNamePrefix);
    return {
      cx: cx,
      clearValue: clearValue,
      getStyles: getStyles,
      getValue: getValue,
      hasValue: hasValue,
      isMulti: isMulti,
      isRtl: isRtl,
      options: options,
      selectOption: selectOption,
      setValue: setValue,
      selectProps: props,
      theme: this.getTheme()
    };
  };

  _proto.getNextFocusedValue = function getNextFocusedValue(nextSelectValue) {
    if (this.clearFocusValueOnUpdate) {
      this.clearFocusValueOnUpdate = false;
      return null;
    }

    var _this$state6 = this.state,
        focusedValue = _this$state6.focusedValue,
        lastSelectValue = _this$state6.selectValue;
    var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

    if (lastFocusedIndex > -1) {
      var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

      if (nextFocusedIndex > -1) {
        // the focused value is still in the selectValue, return it
        return focusedValue;
      } else if (lastFocusedIndex < nextSelectValue.length) {
        // the focusedValue is not present in the next selectValue array by
        // reference, so return the new value at the same index
        return nextSelectValue[lastFocusedIndex];
      }
    }

    return null;
  };

  _proto.getNextFocusedOption = function getNextFocusedOption(options) {
    var lastFocusedOption = this.state.focusedOption;
    return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
  };

  _proto.hasValue = function hasValue() {
    var selectValue = this.state.selectValue;
    return selectValue.length > 0;
  };

  _proto.hasOptions = function hasOptions() {
    return !!this.state.menuOptions.render.length;
  };

  _proto.countOptions = function countOptions() {
    return this.state.menuOptions.focusable.length;
  };

  _proto.isClearable = function isClearable() {
    var _this$props12 = this.props,
        isClearable = _this$props12.isClearable,
        isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
    // multi select, by default, IS clearable

    if (isClearable === undefined) return isMulti;
    return isClearable;
  };

  _proto.isOptionDisabled = function isOptionDisabled(option, selectValue) {
    return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
  };

  _proto.isOptionSelected = function isOptionSelected(option, selectValue) {
    var _this3 = this;

    if (selectValue.indexOf(option) > -1) return true;

    if (typeof this.props.isOptionSelected === 'function') {
      return this.props.isOptionSelected(option, selectValue);
    }

    var candidate = this.getOptionValue(option);
    return selectValue.some(function (i) {
      return _this3.getOptionValue(i) === candidate;
    });
  };

  _proto.filterOption = function filterOption(option, inputValue) {
    return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
  };

  _proto.formatOptionLabel = function formatOptionLabel(data, context) {
    if (typeof this.props.formatOptionLabel === 'function') {
      var inputValue = this.props.inputValue;
      var selectValue = this.state.selectValue;
      return this.props.formatOptionLabel(data, {
        context: context,
        inputValue: inputValue,
        selectValue: selectValue
      });
    } else {
      return this.getOptionLabel(data);
    }
  };

  _proto.formatGroupLabel = function formatGroupLabel(data) {
    return this.props.formatGroupLabel(data);
  } // ==============================
  // Mouse Handlers
  // ==============================
  ;

  // ==============================
  // Composition Handlers
  // ==============================
  _proto.startListeningComposition = function startListeningComposition() {
    if (document && document.addEventListener) {
      document.addEventListener('compositionstart', this.onCompositionStart, false);
      document.addEventListener('compositionend', this.onCompositionEnd, false);
    }
  };

  _proto.stopListeningComposition = function stopListeningComposition() {
    if (document && document.removeEventListener) {
      document.removeEventListener('compositionstart', this.onCompositionStart);
      document.removeEventListener('compositionend', this.onCompositionEnd);
    }
  };

  // ==============================
  // Touch Handlers
  // ==============================
  _proto.startListeningToTouch = function startListeningToTouch() {
    if (document && document.addEventListener) {
      document.addEventListener('touchstart', this.onTouchStart, false);
      document.addEventListener('touchmove', this.onTouchMove, false);
      document.addEventListener('touchend', this.onTouchEnd, false);
    }
  };

  _proto.stopListeningToTouch = function stopListeningToTouch() {
    if (document && document.removeEventListener) {
      document.removeEventListener('touchstart', this.onTouchStart);
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchend', this.onTouchEnd);
    }
  };

  // ==============================
  // Renderers
  // ==============================
  _proto.constructAriaLiveMessage = function constructAriaLiveMessage() {
    var _this$state7 = this.state,
        ariaLiveContext = _this$state7.ariaLiveContext,
        selectValue = _this$state7.selectValue,
        focusedValue = _this$state7.focusedValue,
        focusedOption = _this$state7.focusedOption;
    var _this$props13 = this.props,
        options = _this$props13.options,
        menuIsOpen = _this$props13.menuIsOpen,
        inputValue = _this$props13.inputValue,
        screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

    var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
      focusedValue: focusedValue,
      getOptionLabel: this.getOptionLabel,
      selectValue: selectValue
    }) : ''; // An aria live message representing the currently focused option in the select.

    var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
      focusedOption: focusedOption,
      getOptionLabel: this.getOptionLabel,
      options: options
    }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

    var resultsMsg = resultsAriaMessage({
      inputValue: inputValue,
      screenReaderMessage: screenReaderStatus({
        count: this.countOptions()
      })
    });
    return focusedValueMsg + " " + focusedOptionMsg + " " + resultsMsg + " " + ariaLiveContext;
  };

  _proto.renderInput = function renderInput() {
    var _this$props14 = this.props,
        isDisabled = _this$props14.isDisabled,
        isSearchable = _this$props14.isSearchable,
        inputId = _this$props14.inputId,
        inputValue = _this$props14.inputValue,
        tabIndex = _this$props14.tabIndex;
    var Input = this.components.Input;
    var inputIsHidden = this.state.inputIsHidden;
    var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

    var ariaAttributes = {
      'aria-autocomplete': 'list',
      'aria-label': this.props['aria-label'],
      'aria-labelledby': this.props['aria-labelledby']
    };

    if (!isSearchable) {
      // use a dummy input to maintain focus/blur functionality
      return external_React_default().createElement(DummyInput, Select_9fdb8cd0_browser_esm_extends$4({
        id: id,
        innerRef: this.getInputRef,
        onBlur: this.onInputBlur,
        onChange: utils_06b0d5a4_browser_esm_noop,
        onFocus: this.onInputFocus,
        readOnly: true,
        disabled: isDisabled,
        tabIndex: tabIndex,
        value: ""
      }, ariaAttributes));
    }

    var _this$commonProps = this.commonProps,
        cx = _this$commonProps.cx,
        theme = _this$commonProps.theme,
        selectProps = _this$commonProps.selectProps;
    return external_React_default().createElement(Input, Select_9fdb8cd0_browser_esm_extends$4({
      autoCapitalize: "none",
      autoComplete: "off",
      autoCorrect: "off",
      cx: cx,
      getStyles: this.getStyles,
      id: id,
      innerRef: this.getInputRef,
      isDisabled: isDisabled,
      isHidden: inputIsHidden,
      onBlur: this.onInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.onInputFocus,
      selectProps: selectProps,
      spellCheck: "false",
      tabIndex: tabIndex,
      theme: theme,
      type: "text",
      value: inputValue
    }, ariaAttributes));
  };

  _proto.renderPlaceholderOrValue = function renderPlaceholderOrValue() {
    var _this4 = this;

    var _this$components = this.components,
        MultiValue = _this$components.MultiValue,
        MultiValueContainer = _this$components.MultiValueContainer,
        MultiValueLabel = _this$components.MultiValueLabel,
        MultiValueRemove = _this$components.MultiValueRemove,
        SingleValue = _this$components.SingleValue,
        Placeholder = _this$components.Placeholder;
    var commonProps = this.commonProps;
    var _this$props15 = this.props,
        controlShouldRenderValue = _this$props15.controlShouldRenderValue,
        isDisabled = _this$props15.isDisabled,
        isMulti = _this$props15.isMulti,
        inputValue = _this$props15.inputValue,
        placeholder = _this$props15.placeholder;
    var _this$state8 = this.state,
        selectValue = _this$state8.selectValue,
        focusedValue = _this$state8.focusedValue,
        isFocused = _this$state8.isFocused;

    if (!this.hasValue() || !controlShouldRenderValue) {
      return inputValue ? null : external_React_default().createElement(Placeholder, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, {
        key: "placeholder",
        isDisabled: isDisabled,
        isFocused: isFocused
      }), placeholder);
    }

    if (isMulti) {
      var selectValues = selectValue.map(function (opt, index) {
        var isOptionFocused = opt === focusedValue;
        return external_React_default().createElement(MultiValue, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, {
          components: {
            Container: MultiValueContainer,
            Label: MultiValueLabel,
            Remove: MultiValueRemove
          },
          isFocused: isOptionFocused,
          isDisabled: isDisabled,
          key: _this4.getOptionValue(opt),
          index: index,
          removeProps: {
            onClick: function onClick() {
              return _this4.removeValue(opt);
            },
            onTouchEnd: function onTouchEnd() {
              return _this4.removeValue(opt);
            },
            onMouseDown: function onMouseDown(e) {
              e.preventDefault();
              e.stopPropagation();
            }
          },
          data: opt
        }), _this4.formatOptionLabel(opt, 'value'));
      });
      return selectValues;
    }

    if (inputValue) {
      return null;
    }

    var singleValue = selectValue[0];
    return external_React_default().createElement(SingleValue, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, {
      data: singleValue,
      isDisabled: isDisabled
    }), this.formatOptionLabel(singleValue, 'value'));
  };

  _proto.renderClearIndicator = function renderClearIndicator() {
    var ClearIndicator = this.components.ClearIndicator;
    var commonProps = this.commonProps;
    var _this$props16 = this.props,
        isDisabled = _this$props16.isDisabled,
        isLoading = _this$props16.isLoading;
    var isFocused = this.state.isFocused;

    if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
      return null;
    }

    var innerProps = {
      onMouseDown: this.onClearIndicatorMouseDown,
      onTouchEnd: this.onClearIndicatorTouchEnd,
      'aria-hidden': 'true'
    };
    return external_React_default().createElement(ClearIndicator, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, {
      innerProps: innerProps,
      isFocused: isFocused
    }));
  };

  _proto.renderLoadingIndicator = function renderLoadingIndicator() {
    var LoadingIndicator = this.components.LoadingIndicator;
    var commonProps = this.commonProps;
    var _this$props17 = this.props,
        isDisabled = _this$props17.isDisabled,
        isLoading = _this$props17.isLoading;
    var isFocused = this.state.isFocused;
    if (!LoadingIndicator || !isLoading) return null;
    var innerProps = {
      'aria-hidden': 'true'
    };
    return external_React_default().createElement(LoadingIndicator, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, {
      innerProps: innerProps,
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderIndicatorSeparator = function renderIndicatorSeparator() {
    var _this$components2 = this.components,
        DropdownIndicator = _this$components2.DropdownIndicator,
        IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

    if (!DropdownIndicator || !IndicatorSeparator) return null;
    var commonProps = this.commonProps;
    var isDisabled = this.props.isDisabled;
    var isFocused = this.state.isFocused;
    return external_React_default().createElement(IndicatorSeparator, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, {
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderDropdownIndicator = function renderDropdownIndicator() {
    var DropdownIndicator = this.components.DropdownIndicator;
    if (!DropdownIndicator) return null;
    var commonProps = this.commonProps;
    var isDisabled = this.props.isDisabled;
    var isFocused = this.state.isFocused;
    var innerProps = {
      onMouseDown: this.onDropdownIndicatorMouseDown,
      onTouchEnd: this.onDropdownIndicatorTouchEnd,
      'aria-hidden': 'true'
    };
    return external_React_default().createElement(DropdownIndicator, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, {
      innerProps: innerProps,
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderMenu = function renderMenu() {
    var _this5 = this;

    var _this$components3 = this.components,
        Group = _this$components3.Group,
        GroupHeading = _this$components3.GroupHeading,
        Menu = _this$components3.Menu,
        MenuList = _this$components3.MenuList,
        MenuPortal = _this$components3.MenuPortal,
        LoadingMessage = _this$components3.LoadingMessage,
        NoOptionsMessage = _this$components3.NoOptionsMessage,
        Option = _this$components3.Option;
    var commonProps = this.commonProps;
    var _this$state9 = this.state,
        focusedOption = _this$state9.focusedOption,
        menuOptions = _this$state9.menuOptions;
    var _this$props18 = this.props,
        captureMenuScroll = _this$props18.captureMenuScroll,
        inputValue = _this$props18.inputValue,
        isLoading = _this$props18.isLoading,
        loadingMessage = _this$props18.loadingMessage,
        minMenuHeight = _this$props18.minMenuHeight,
        maxMenuHeight = _this$props18.maxMenuHeight,
        menuIsOpen = _this$props18.menuIsOpen,
        menuPlacement = _this$props18.menuPlacement,
        menuPosition = _this$props18.menuPosition,
        menuPortalTarget = _this$props18.menuPortalTarget,
        menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
        menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
        noOptionsMessage = _this$props18.noOptionsMessage,
        onMenuScrollToTop = _this$props18.onMenuScrollToTop,
        onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
    if (!menuIsOpen) return null; // TODO: Internal Option Type here

    var render = function render(props) {
      // for performance, the menu options in state aren't changed when the
      // focused option changes so we calculate additional props based on that
      var isFocused = focusedOption === props.data;
      props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
      return external_React_default().createElement(Option, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, props, {
        isFocused: isFocused
      }), _this5.formatOptionLabel(props.data, 'menu'));
    };

    var menuUI;

    if (this.hasOptions()) {
      menuUI = menuOptions.render.map(function (item) {
        if (item.type === 'group') {
          var type = item.type,
              group = Select_9fdb8cd0_browser_esm_objectWithoutPropertiesLoose$2(item, ["type"]);

          var headingId = item.key + "-heading";
          return external_React_default().createElement(Group, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, group, {
            Heading: GroupHeading,
            headingProps: {
              id: headingId
            },
            label: _this5.formatGroupLabel(item.data)
          }), item.options.map(function (option) {
            return render(option);
          }));
        } else if (item.type === 'option') {
          return render(item);
        }
      });
    } else if (isLoading) {
      var message = loadingMessage({
        inputValue: inputValue
      });
      if (message === null) return null;
      menuUI = external_React_default().createElement(LoadingMessage, commonProps, message);
    } else {
      var _message = noOptionsMessage({
        inputValue: inputValue
      });

      if (_message === null) return null;
      menuUI = external_React_default().createElement(NoOptionsMessage, commonProps, _message);
    }

    var menuPlacementProps = {
      minMenuHeight: minMenuHeight,
      maxMenuHeight: maxMenuHeight,
      menuPlacement: menuPlacement,
      menuPosition: menuPosition,
      menuShouldScrollIntoView: menuShouldScrollIntoView
    };
    var menuElement = external_React_default().createElement(MenuPlacer, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, menuPlacementProps), function (_ref8) {
      var ref = _ref8.ref,
          _ref8$placerProps = _ref8.placerProps,
          placement = _ref8$placerProps.placement,
          maxHeight = _ref8$placerProps.maxHeight;
      return external_React_default().createElement(Menu, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, menuPlacementProps, {
        innerRef: ref,
        innerProps: {
          onMouseDown: _this5.onMenuMouseDown,
          onMouseMove: _this5.onMenuMouseMove
        },
        isLoading: isLoading,
        placement: placement
      }), external_React_default().createElement(ScrollCaptorSwitch, {
        isEnabled: captureMenuScroll,
        onTopArrive: onMenuScrollToTop,
        onBottomArrive: onMenuScrollToBottom
      }, external_React_default().createElement(ScrollBlock, {
        isEnabled: menuShouldBlockScroll
      }, external_React_default().createElement(MenuList, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, {
        innerRef: _this5.getMenuListRef,
        isLoading: isLoading,
        maxHeight: maxHeight
      }), menuUI))));
    }); // positioning behaviour is almost identical for portalled and fixed,
    // so we use the same component. the actual portalling logic is forked
    // within the component based on `menuPosition`

    return menuPortalTarget || menuPosition === 'fixed' ? external_React_default().createElement(MenuPortal, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, {
      appendTo: menuPortalTarget,
      controlElement: this.controlRef,
      menuPlacement: menuPlacement,
      menuPosition: menuPosition
    }), menuElement) : menuElement;
  };

  _proto.renderFormField = function renderFormField() {
    var _this6 = this;

    var _this$props19 = this.props,
        delimiter = _this$props19.delimiter,
        isDisabled = _this$props19.isDisabled,
        isMulti = _this$props19.isMulti,
        name = _this$props19.name;
    var selectValue = this.state.selectValue;
    if (!name || isDisabled) return;

    if (isMulti) {
      if (delimiter) {
        var value = selectValue.map(function (opt) {
          return _this6.getOptionValue(opt);
        }).join(delimiter);
        return external_React_default().createElement("input", {
          name: name,
          type: "hidden",
          value: value
        });
      } else {
        var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
          return external_React_default().createElement("input", {
            key: "i-" + i,
            name: name,
            type: "hidden",
            value: _this6.getOptionValue(opt)
          });
        }) : external_React_default().createElement("input", {
          name: name,
          type: "hidden"
        });
        return external_React_default().createElement("div", null, input);
      }
    } else {
      var _value2 = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

      return external_React_default().createElement("input", {
        name: name,
        type: "hidden",
        value: _value2
      });
    }
  };

  _proto.renderLiveRegion = function renderLiveRegion() {
    if (!this.state.isFocused) return null;
    return external_React_default().createElement(A11yText, {
      "aria-live": "polite"
    }, external_React_default().createElement("p", {
      id: "aria-selection-event"
    }, "\xA0", this.state.ariaLiveSelection), external_React_default().createElement("p", {
      id: "aria-context"
    }, "\xA0", this.constructAriaLiveMessage()));
  };

  _proto.render = function render() {
    var _this$components4 = this.components,
        Control = _this$components4.Control,
        IndicatorsContainer = _this$components4.IndicatorsContainer,
        SelectContainer = _this$components4.SelectContainer,
        ValueContainer = _this$components4.ValueContainer;
    var _this$props20 = this.props,
        className = _this$props20.className,
        id = _this$props20.id,
        isDisabled = _this$props20.isDisabled,
        menuIsOpen = _this$props20.menuIsOpen;
    var isFocused = this.state.isFocused;
    var commonProps = this.commonProps = this.getCommonProps();
    return external_React_default().createElement(SelectContainer, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, {
      className: className,
      innerProps: {
        id: id,
        onKeyDown: this.onKeyDown
      },
      isDisabled: isDisabled,
      isFocused: isFocused
    }), this.renderLiveRegion(), external_React_default().createElement(Control, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, {
      innerRef: this.getControlRef,
      innerProps: {
        onMouseDown: this.onControlMouseDown,
        onTouchEnd: this.onControlTouchEnd
      },
      isDisabled: isDisabled,
      isFocused: isFocused,
      menuIsOpen: menuIsOpen
    }), external_React_default().createElement(ValueContainer, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, {
      isDisabled: isDisabled
    }), this.renderPlaceholderOrValue(), this.renderInput()), external_React_default().createElement(IndicatorsContainer, Select_9fdb8cd0_browser_esm_extends$4({}, commonProps, {
      isDisabled: isDisabled
    }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
  };

  return Select;
}(external_React_.Component);

Select_9fdb8cd0_browser_esm_Select.defaultProps = defaultProps;



;// CONCATENATED MODULE: ./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js


function stateManager_04f734a2_browser_esm_extends() { stateManager_04f734a2_browser_esm_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return stateManager_04f734a2_browser_esm_extends.apply(this, arguments); }

function stateManager_04f734a2_browser_esm_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function stateManager_04f734a2_browser_esm_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
var stateManager_04f734a2_browser_esm_defaultProps = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    stateManager_04f734a2_browser_esm_inheritsLoose(StateManager, _Component);

    function StateManager() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.select = void 0;
      _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      };

      _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      };

      _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      };

      _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      };

      _this.onMenuClose = function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      };

      return _this;
    }

    var _proto = StateManager.prototype;

    _proto.focus = function focus() {
      this.select.focus();
    };

    _proto.blur = function blur() {
      this.select.blur();
    } // FIXME: untyped flow code, return any
    ;

    _proto.getProp = function getProp(key) {
      return this.props[key] !== undefined ? this.props[key] : this.state[key];
    } // FIXME: untyped flow code, return any
    ;

    _proto.callProp = function callProp(name) {
      if (typeof this.props[name] === 'function') {
        var _this$props;

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return (_this$props = this.props)[name].apply(_this$props, args);
      }
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          defaultInputValue = _this$props2.defaultInputValue,
          defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
          defaultValue = _this$props2.defaultValue,
          props = stateManager_04f734a2_browser_esm_objectWithoutPropertiesLoose(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

      return external_React_default().createElement(SelectComponent, stateManager_04f734a2_browser_esm_extends({}, props, {
        ref: function ref(_ref) {
          _this2.select = _ref;
        },
        inputValue: this.getProp('inputValue'),
        menuIsOpen: this.getProp('menuIsOpen'),
        onChange: this.onChange,
        onInputChange: this.onInputChange,
        onMenuClose: this.onMenuClose,
        onMenuOpen: this.onMenuOpen,
        value: this.getProp('value')
      }));
    };

    return StateManager;
  }(external_React_.Component), _class.defaultProps = stateManager_04f734a2_browser_esm_defaultProps, _temp;
};



;// CONCATENATED MODULE: ./node_modules/react-select/node_modules/@emotion/sheet/dist/sheet.browser.esm.js
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function dist_sheet_browser_esm_sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function dist_sheet_browser_esm_createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var dist_sheet_browser_esm_StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = dist_sheet_browser_esm_createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = dist_sheet_browser_esm_sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();



;// CONCATENATED MODULE: ./node_modules/react-select/node_modules/@emotion/cache/dist/cache.browser.esm.js




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var dist_cache_browser_esm_delimiter = '/*|*/';
var cache_browser_esm_needle = dist_cache_browser_esm_delimiter + '}';

function cache_browser_esm_toSheet(block) {
  if (block) {
    cache_browser_esm_Sheet.current.insert(block + '}');
  }
}

var cache_browser_esm_Sheet = {
  current: null
};
var cache_browser_esm_ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              cache_browser_esm_Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + dist_cache_browser_esm_delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              cache_browser_esm_Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? dist_cache_browser_esm_delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(cache_browser_esm_needle).forEach(cache_browser_esm_toSheet);
      }
  }
};

var dist_cache_browser_esm_createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new stylis_browser_esm(stylisOptions);

  if (false) {}

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(cache_browser_esm_ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      cache_browser_esm_Sheet.current = sheet;

      if (false) { var map; }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (false) { var commentEnd, commentStart; }

  var cache = {
    key: key,
    sheet: new dist_sheet_browser_esm_StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ const dist_cache_browser_esm = (dist_cache_browser_esm_createCache);

;// CONCATENATED MODULE: ./node_modules/react-select/dist/react-select.browser.esm.js














function react_select_browser_esm_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NonceProvider =
/*#__PURE__*/
function (_Component) {
  react_select_browser_esm_inheritsLoose(NonceProvider, _Component);

  function NonceProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.createEmotionCache = function (nonce) {
      return dist_cache_browser_esm({
        nonce: nonce
      });
    };

    _this.createEmotionCache = memoize_one_esm(_this.createEmotionCache);
    return _this;
  }

  var _proto = NonceProvider.prototype;

  _proto.render = function render() {
    var emotionCache = this.createEmotionCache(this.props.nonce);
    return external_React_default().createElement(emotion_element_04d85134_browser_esm_CacheProvider, {
      value: emotionCache
    }, this.props.children);
  };

  return NonceProvider;
}(external_React_.Component);

var index = manageState(Select_9fdb8cd0_browser_esm_Select);

/* harmony default export */ const react_select_browser_esm = (index);


;// CONCATENATED MODULE: ./assets/js/blocks/courses/components/BorderSetting.tsx





var BorderSetting = function BorderSetting(props) {
  var radius = props.value.radius,
      onChange = props.onChange;

  var setSetting = function setSetting(genre, val) {
    var data = defineProperty_defineProperty({}, genre, val);

    onChange(Object.assign({}, props.value, data));
  };

  return /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-control masteriyo-border"
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-control-body masteriyo-border-body"
  }, /*#__PURE__*/external_React_default().createElement(dimensions, {
    label: (0,external_wp_i18n_namespaceObject.__)('Radius', 'masteriyo'),
    value: radius || {},
    responsive: true,
    units: ['px', 'em', '%'],
    defaultUnit: "px",
    min: 0,
    max: 100,
    onChange: function onChange(val) {
      return setSetting('radius', val);
    },
    dimensionLabels: {
      top: (0,external_wp_i18n_namespaceObject.__)('Top Left', 'masteriyo'),
      right: (0,external_wp_i18n_namespaceObject.__)('Top Right', 'masteriyo'),
      bottom: (0,external_wp_i18n_namespaceObject.__)('Bottom Right', 'masteriyo'),
      left: (0,external_wp_i18n_namespaceObject.__)('Bottom Left', 'masteriyo')
    }
  })));
};

/* harmony default export */ const components_BorderSetting = (BorderSetting);
;// CONCATENATED MODULE: ./assets/js/blocks/courses/components/BlockSettings.tsx










var categoryOptions = _MASTERIYO_BLOCKS_DATA_.categories.map(function (category) {
  return {
    label: category.name,
    value: category.slug
  };
});

var BlockSettings_BlockSettings = function BlockSettings(props) {
  var _props$attributes = props.attributes,
      count = _props$attributes.count,
      columns = _props$attributes.columns,
      startCourseButtonBorder = _props$attributes.startCourseButtonBorder,
      categoryIds = _props$attributes.categoryIds,
      clientId = _props$attributes.clientId,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/external_React_default().createElement(external_wp_blockEditor_namespaceObject.InspectorControls, null, /*#__PURE__*/external_React_default().createElement(tab_panel, null, /*#__PURE__*/external_React_default().createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Design', 'masteriyo')
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-design-card"
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-design-card__items masteriyo-design-card__items--active"
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "preview-image"
  }, /*#__PURE__*/external_React_default().createElement(Image$1, {
    src: courses_block_grid_design,
    alt: "Grid Design"
  })), /*#__PURE__*/external_React_default().createElement("div", {
    className: "status"
  }, /*#__PURE__*/external_React_default().createElement("span", {
    className: "title"
  }, (0,external_wp_i18n_namespaceObject.__)('Grid', 'masteriyo')), /*#__PURE__*/external_React_default().createElement("span", {
    className: "active-label"
  }, (0,external_wp_i18n_namespaceObject.__)('Active', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement("div", {
    className: "coming-soon-notice"
  }, /*#__PURE__*/external_React_default().createElement("span", null, (0,external_wp_i18n_namespaceObject.__)('New Design', 'masteriyo')), /*#__PURE__*/external_React_default().createElement("span", null, (0,external_wp_i18n_namespaceObject.__)('Coming Soon', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Settings', 'masteriyo')
  }, /*#__PURE__*/external_React_default().createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('General', 'masteriyo'),
    initialOpen: true
  }, /*#__PURE__*/external_React_default().createElement(slider, {
    onChange: function onChange(val) {
      return setAttributes({
        count: val ? val : 1
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('No. of Courses', 'masteriyo'),
    min: 1,
    step: 1,
    value: count
  })), /*#__PURE__*/external_React_default().createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Layout', 'masteriyo')
  }, /*#__PURE__*/external_React_default().createElement(slider, {
    onChange: function onChange(val) {
      return setAttributes({
        columns: val ? val : 1
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Columns', 'masteriyo'),
    min: 1,
    max: 4,
    step: 1,
    value: columns
  })), /*#__PURE__*/external_React_default().createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Filter', 'masteriyo')
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: classnames_default()('masteriyo-control', 'masteriyo-select' // { 'masteriyo-inline': inline && !responsive }
    )
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-control-head masteriyo-select-head"
  }, /*#__PURE__*/external_React_default().createElement("label", {
    htmlFor: "masteriyo-select-button-".concat(clientId),
    className: "masteriyo-control-label masteriyo-select-label"
  }, (0,external_wp_i18n_namespaceObject.__)('Categories', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-control-body masteriyo-select-body"
  }, /*#__PURE__*/external_React_default().createElement(react_select_browser_esm, {
    className: "masteriyo-multi-select",
    id: "masteriyo-select-button-".concat(clientId),
    value: categoryOptions.filter(function (cate) {
      return categoryIds.includes(cate.value);
    }),
    closeMenuOnSelect: false,
    isMulti: true,
    options: categoryOptions,
    onChange: function onChange(val) {
      return setAttributes({
        categoryIds: val ? val.map(function (item) {
          return item.value;
        }) : []
      });
    }
  })))), /*#__PURE__*/external_React_default().createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Button', 'masteriyo')
  }, /*#__PURE__*/external_React_default().createElement(components_BorderSetting, {
    value: startCourseButtonBorder,
    onChange: function onChange(val) {
      return setAttributes({
        startCourseButtonBorder: val
      });
    }
  })))));
};

/* harmony default export */ const courses_components_BlockSettings = (BlockSettings_BlockSettings);
;// CONCATENATED MODULE: ./assets/js/blocks/courses/Edit.tsx








var Edit_Edit = function Edit(props) {
  var clientId = props.attributes.clientId,
      setAttributes = props.setAttributes;
  var ServerSideRender = wp.serverSideRender ? wp.serverSideRender : wp.components.ServerSideRender;

  var _useDeviceType = useDeviceType_useDeviceType(),
      _useDeviceType2 = slicedToArray_slicedToArray(_useDeviceType, 1),
      deviceType = _useDeviceType2[0];

  hooks_useClientId(props.clientId, setAttributes, props.attributes);
  useBlockCSS({
    blockName: 'courses',
    clientId: clientId,
    attributes: props.attributes,
    deviceType: deviceType
  });
  return /*#__PURE__*/external_React_default().createElement(external_wp_element_namespaceObject.Fragment, null, /*#__PURE__*/external_React_default().createElement(courses_components_BlockSettings, props), /*#__PURE__*/external_React_default().createElement("div", {
    className: "masteriyo-block-editor-wrapper",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/external_React_default().createElement(ServerSideRender, {
    block: "masteriyo/courses",
    attributes: {
      clientId: clientId ? clientId : '',
      count: props.attributes.count,
      columns: props.attributes.columns,
      categoryIds: props.attributes.categoryIds
    }
  })));
};

/* harmony default export */ const courses_Edit = (Edit_Edit);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/js/blocks/courses/editor.scss
var courses_editor = __webpack_require__(114);
;// CONCATENATED MODULE: ./assets/js/blocks/courses/editor.scss

            

var courses_editor_options = {};

courses_editor_options.insert = "head";
courses_editor_options.singleton = false;

var courses_editor_update = injectStylesIntoStyleTag_default()(courses_editor/* default */.Z, courses_editor_options);



/* harmony default export */ const blocks_courses_editor = (courses_editor/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./assets/js/blocks/courses/block.tsx






function registerCoursesBlock() {
  wp.blocks.registerBlockType('masteriyo/courses', {
    title: 'Courses',
    description: (0,external_wp_i18n_namespaceObject.__)('Display a collection of courses.', 'masteriyo'),
    icon: /*#__PURE__*/external_React_default().createElement(icon, {
      type: "blockIcon",
      name: "courses",
      size: 24
    }),
    category: 'masteriyo',
    keywords: ['Courses Block'],
    attributes: courses_attributes,
    supports: {
      align: false,
      html: false,
      color: {
        background: false,
        gradient: false,
        text: false
      }
    },
    edit: courses_Edit,
    save: function save() {
      return null;
    }
  });
}
;// CONCATENATED MODULE: external ["wp","apiFetch"]
const external_wp_apiFetch_namespaceObject = window["wp"]["apiFetch"];
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_namespaceObject);
;// CONCATENATED MODULE: ./assets/js/blocks/utils/minifyCSS.ts
// TODO Use a npm package like csso instead of manually handling the cleaning of generated CSS.
function minifyCSS(css) {
  return css.replace(/([^0-9a-zA-Z.#])\s+/g, '$1').replace(/\s([^0-9a-zA-Z.#]+)/g, '$1').replace(/;}/g, '}').replace(/;;/g, ';').replace(/\/\*.*?\*\//g, '');
}
;// CONCATENATED MODULE: ./assets/js/blocks/utils/generateFrontEndCSS.ts


function generateFrontEndCSS(blocks) {
  var css = '';
  blocks.forEach(function (row) {
    var attributes = row.attributes,
        name = row.name;
    var blockName = name.split('/');

    if (blockName[0] === 'masteriyo' && attributes.clientId) {
      css += generateBlockCSS(attributes, blockName[1], attributes.clientId, 'save');
    }

    if (row.innerBlocks && row.innerBlocks.length > 0) {
      css += generateFrontEndCSS(row.innerBlocks);
    }
  });
  return minifyCSS(css);
}
;// CONCATENATED MODULE: ./assets/js/blocks/utils/hasMasteriyoBlocks.ts
function hasMasteriyoBlocks(blocks) {
  for (var i = 0; i < blocks.length; i += 1) {
    var block = blocks[i];

    if (block.name.indexOf('masteriyo/') !== -1) {
      return true;
    }

    if (block.innerBlocks && block.innerBlocks.length > 0) {
      if (hasMasteriyoBlocks(block.innerBlocks)) {
        return true;
      }
    }
  }

  return false;
}
;// CONCATENATED MODULE: ./assets/js/blocks/utils/frontedCss.ts




function saveFrontedCSS() {
  var allBlocks = (0,external_wp_data_namespaceObject.select)('core/block-editor').getBlocks();

  var _select = (0,external_wp_data_namespaceObject.select)('core/editor'),
      getCurrentPostId = _select.getCurrentPostId;

  var css = '';

  if (hasMasteriyoBlocks(allBlocks)) {
    css = generateFrontEndCSS(allBlocks);
  }

  return external_wp_apiFetch_default()({
    path: '/masteriyo/v1/blocks/save_css',
    method: 'POST',
    data: {
      css: css,
      postId: getCurrentPostId()
    }
  });
}
;// CONCATENATED MODULE: ./assets/js/blocks/helpers/saveWidgetsCSS.ts



var saveWidgetsCSS = function saveWidgetsCSS() {
  return new Promise(function (resolve, reject) {
    external_wp_apiFetch_default()({
      path: 'wp/v2/widgets',
      method: 'GET'
    }).then(function (response) {
      if (!response) {
        return resolve();
      }

      var content = response.map(function (datum) {
        var _datum$instance, _datum$instance$raw;

        return datum !== null && datum !== void 0 && (_datum$instance = datum.instance) !== null && _datum$instance !== void 0 && (_datum$instance$raw = _datum$instance.raw) !== null && _datum$instance$raw !== void 0 && _datum$instance$raw.content ? datum.instance.raw.content : '';
      }).join('');
      var parsedContent = (0,external_wp_blocks_namespaceObject.parse)(content);
      var css = generateFrontEndCSS(parsedContent);
      external_wp_apiFetch_default()({
        path: 'masteriyo/v1/settings',
        method: 'POST',
        data: {
          general: {
            widgets_css: css
          }
        }
      })["finally"](resolve);
    })["catch"](reject);
  });
};
;// CONCATENATED MODULE: ./assets/js/blocks/helpers/initCSSGenerators.ts



var isSavingWidgetsCSS = false;
var initCSSGenerators = function initCSSGenerators() {
  (0,external_wp_data_namespaceObject.subscribe)(function () {
    var _select2;

    if ((0,external_wp_data_namespaceObject.select)('core/editor')) {
      var _select = (0,external_wp_data_namespaceObject.select)('core/editor'),
          isSavingPost = _select.isSavingPost,
          isAutosavingPost = _select.isAutosavingPost;

      if (isSavingPost() && !isAutosavingPost()) {
        saveFrontedCSS();
      }
    }

    if ((_select2 = (0,external_wp_data_namespaceObject.select)('core/edit-widgets')) !== null && _select2 !== void 0 && _select2.isSavingWidgetAreas() && !isSavingWidgetsCSS) {
      isSavingWidgetsCSS = true;
      saveWidgetsCSS()["finally"](function () {
        isSavingWidgetsCSS = false;
      });
    }
  });

  if ('yes' === _MASTERIYO_BLOCKS_DATA_.isCustomizer) {
    wp.customize.bind('saved', saveWidgetsCSS);
  }
};
;// CONCATENATED MODULE: ./assets/js/blocks/utils/ucFirst.ts
var ucFirst = function ucFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
;// CONCATENATED MODULE: ./assets/js/blocks/helpers/registerDeviceTypeStore.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



function registerDeviceTypeStore() {
  var INITIAL_STATE = {
    deviceType: 'desktop'
  };
  var ACTIONS = {
    setPreviewDeviceType: function setPreviewDeviceType(deviceType) {
      var _ref = (0,external_wp_data_namespaceObject.dispatch)('core/edit-post') || false,
          setPreviewDeviceType = _ref.__experimentalSetPreviewDeviceType;

      if (setPreviewDeviceType) {
        setPreviewDeviceType(ucFirst(deviceType));
      }

      if ('yes' === _MASTERIYO_BLOCKS_DATA_.isCustomizer) {
        var _wp$customize;

        (_wp$customize = wp.customize) === null || _wp$customize === void 0 ? void 0 : _wp$customize.previewedDevice(deviceType.toLowerCase());
      }

      return {
        type: 'SET_PREVIEW_DEVICE_TYPE',
        payload: deviceType
      };
    }
  };
  var SELECTORS = {
    getPreviewDeviceType: function getPreviewDeviceType(state) {
      var _wp$data;

      var core = (_wp$data = wp.data) === null || _wp$data === void 0 ? void 0 : _wp$data.select('core/edit-post');

      if (core && core.__experimentalGetPreviewDeviceType) {
        return core.__experimentalGetPreviewDeviceType().toLowerCase();
      }

      return state.deviceType;
    }
  };

  var REDUCER = function REDUCER() {
    var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'SET_PREVIEW_DEVICE_TYPE':
        {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            deviceType: action.payload
          });
        }

      default:
        return prevState;
    }
  };

  (0,external_wp_data_namespaceObject.registerStore)('masteriyo/device-type', {
    reducer: REDUCER,
    actions: ACTIONS,
    selectors: SELECTORS
  });
}
;// CONCATENATED MODULE: ./assets/js/blocks/helpers/updateBlocksCategoryIcon.tsx


function updateBlocksCategoryIcon() {
  (0,external_wp_blocks_namespaceObject.updateCategory)('masteriyo', {
    icon: /*#__PURE__*/external_React_default().createElement("svg", {
      version: "1.1",
      id: "mto-logo",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 24 24",
      enableBackground: "new 0 0 24 24",
      xmlSpace: "preserve"
    }, /*#__PURE__*/external_React_default().createElement("style", {
      type: "text/css"
    }, ".st0{opacity:0.3;fill:#787DFF;enable-background:new    ;}\n\t\t\t\t.st1{opacity:0.5;fill:#787DFF;enable-background:new    ;}\n\t\t\t\t.st2{fill:#787DFF;}\n\t\t\t\t.st3{opacity:0.3;fill:#FD739C;enable-background:new    ;}\n\t\t\t\t.st4{opacity:0.5;fill:#FD739C;enable-background:new    ;}\n\t\t\t\t.st5{fill:#FD739C;}"), /*#__PURE__*/external_React_default().createElement("g", null, /*#__PURE__*/external_React_default().createElement("path", {
      className: "st0",
      d: "M5.9,3.5l4,4.5c0.6,0.7,1,1.6,1,2.5V21l-5-3.5L5.9,3.5z"
    }), /*#__PURE__*/external_React_default().createElement("path", {
      className: "st1",
      d: "M2.8,2.9l6.6,4.7c0.9,0.6,1.4,1.6,1.5,2.7c0,0.1,0,0.1,0,0.2V21l-8.2-4.3L2.8,2.9z"
    }), /*#__PURE__*/external_React_default().createElement("path", {
      className: "st2",
      d: "M10.9,21.1l-7.3-2.4C2.1,18.3,1.1,17,1,15.5c0-0.1,0-0.1,0-0.2V4.6l8,3.1c1.1,0.4,1.8,1.4,1.9,2.6 c0,0.1,0,0.1,0,0.2L10.9,21.1z"
    }), /*#__PURE__*/external_React_default().createElement("path", {
      className: "st3",
      d: "M18.1,3.5l-4,4.5c-0.6,0.7-1,1.6-1,2.5V21l5-3.5L18.1,3.5z"
    }), /*#__PURE__*/external_React_default().createElement("path", {
      className: "st4",
      d: "M21.2,2.9l-6.6,4.7c-0.9,0.6-1.4,1.6-1.5,2.7c0,0.1,0,0.1,0,0.2V21l8.2-4.3L21.2,2.9z"
    }), /*#__PURE__*/external_React_default().createElement("path", {
      className: "st5",
      d: "M13.1,21.1l7.3-2.4c1.4-0.5,2.5-1.7,2.6-3.3c0-0.1,0-0.1,0-0.2V4.6l-8,3.1c-1.1,0.4-1.8,1.4-1.9,2.6 c0,0.1,0,0.1,0,0.2L13.1,21.1z"
    })))
  });
}
;// CONCATENATED MODULE: ./assets/js/blocks/index.tsx





updateBlocksCategoryIcon();
registerDeviceTypeStore();
registerCoursesBlock();
registerCourseCategoriesBlock();
initCSSGenerators();
})();

/******/ })()
;