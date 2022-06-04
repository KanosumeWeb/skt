/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1459:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/focus-visible/dist/focus-visible.js
var focus_visible = __webpack_require__(5202);
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(9196);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(1850);
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js + 1 modules
var chakra_ui_react_esm = __webpack_require__(5358);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(8767);
// EXTERNAL MODULE: ./node_modules/react-query/devtools/index.js
var devtools = __webpack_require__(938);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(6215);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js
var chakra_ui_layout_esm = __webpack_require__(8527);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/icon/dist/chakra-ui-icon.esm.js
var chakra_ui_icon_esm = __webpack_require__(894);
;// CONCATENATED MODULE: ./assets/img/404.png
/* harmony default export */ const _404 = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./assets/img/close-cone.png
/* harmony default export */ const close_cone = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAB6CAMAAAArgeXTAAAAWlBMVEUAAABAgP9AgP9Ahf9Fhf9Eg/9Dg/9Gg/9Dg/9CgvxFgv9ChP1EhP1EhP9Eg/1EhP9Dg/1Fg/1Dhf9Ehf9EhP5EhP9EhP5EhP9FhP9Dg/5Dhf5Fg/9EhP5EhP6RspcfAAAAHXRSTlMAECAwMEBQUF9gYHBwf4CPkJCfr7C/z8/P39/f70rORKsAAAG5SURBVGje7dpRcsIgFIXhgCGWaDGitJbes/9t9sExWutLwz8dH8oCvhFi4HJuOt9BI1JQoSBzEKREQUZBihQErZKkHQUpUFB1EKRCQcQynSG9UlC7dIGaZzdDOnkIUl1DkLTzEKQaIaiBkiBKD0bNPQNJqlNgIElWpnVPQOfxWUrOOeeU0mYd+uXQ/TgdNj0CnR+GZyBJJUCQdP+rFkP377gaxpaC9EJB1kPQ7YnYBt3s9I3Q9bhvhebJtUJzxdcMmYcgZQqSp6BMQXIUlCjIKEiBgjIFmYMgBQraU1ChIDkK6ikoUtCego4U9EZBHxRkFKR/6O+eGvY/Kk/3iiQKGp5tYzNqzz5S0JaCegiq1Nm/pyAPQYUqtCIEVaqqjRBUqco/QlClbkcRgjJ0g6weggbochyZe79FJomoKyQbseSItOaeWQbZo2zxl8TnYRr9grDO3vOUxnEcxyGElXdLckgraXDNyahNwQERawlEevzzwS6DkkOC8eKRqN4GpgtRmhoj3ysBAtpCLZ/mlibldMy8LhDRPZ4LJQCqHoKYHvS1nGiGAgRRnyBQXfoOWqGuyxQ0UBD1kcYX8MdKFfjT8TsAAAAASUVORK5CYII=");
;// CONCATENATED MODULE: ./assets/img/polygon.png
/* harmony default export */ const polygon = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAaCAMAAADsW95KAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAECAwQFBgcH+AkJ+gr7/P3++SclzKAAAAi0lEQVQoz42Syw7DIAzAzKOl0K0F/v9jd2GDihHwEVlCTgL6SlkkHoCeSDnnfMKZF7CkFS2satfap4sJ2KkVFYCbWRoAgmilYiFn7F8LFceWpzLODbSYgXXzxImRFS9GVl69tvUW6pYim9y4YoF5jOXNiL3b93+8MIqW3xUYREquk62S65myeWe7xw/qpir1U0U7bQAAAABJRU5ErkJggg==");
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
;// CONCATENATED MODULE: ./assets/svg/505.svg



function SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    viewBox: "0 0 400 300",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2
  }, props), /*#__PURE__*/external_React_.createElement("path", {
    d: "M160.124 23.806l-70.648 85.718 104.558 123.398 69.705-81.95L160.124 23.805z",
    fill: "#4484fe",
    fillRule: "nonzero"
  }), /*#__PURE__*/external_React_.createElement("path", {
    d: "M92.302 110.467c1.563-2.813 3.5-5.4 5.76-7.691l64.887-65.782s22.607-3.768 27.317 7.536l-82.892 67.82-15.072-1.883z",
    fill: "#f2f2f2",
    fillRule: "nonzero"
  }), /*#__PURE__*/external_React_.createElement("path", {
    d: "M89.006 109.054L185.086 256s9.42 6.594 18.839 2.826l98.435-66.408-104.557-158.25-94.197 73.473-14.6 1.413z",
    fill: "#4484fe",
    fillRule: "nonzero"
  }), /*#__PURE__*/external_React_.createElement("path", {
    d: "M111.668 101.352l-1.6 1.248-.177-.896 1.777-.352z",
    fill: "#fff"
  }), /*#__PURE__*/external_React_.createElement("path", {
    d: "M111.668 101.352l-1.6 1.248 1.21 6.108 10.601-.144 5.437 8.972 10.763 1.404 8.193 6.687 29.627 5.887.985 4.97 10.704 5.87 16.358 2.027 18.727 10.269 20.038 11.94 21.463 7.672 9.463 10.436 14.185 6.572 4.978 4.156 2.562 1.712 3.592-2.422-3.748-2.505-5.219-4.358-13.926-6.45-9.591-10.579-22.042-7.878-19.764-11.778-19.463-10.673-16.358-2.027-8.39-4.6-1.141-5.764-31.279-6.215-8.302-6.777-9.985-1.302-5.627-9.286-9.556.13-.739-3.73-2.156.428z",
    fill: "#fff"
  }), /*#__PURE__*/external_React_.createElement("path", {
    d: "M276.467 192.735l-64.039 47.117.905 1.23 64.039-47.117-.905-1.23zM124.966 116.64l-1.274.842 79.126 119.63 1.273-.843-79.125-119.629zm72.521-57.474l-1.253.872 81.951 117.745 1.252-.872-81.95-117.745zm-14.232-21.148l-80.868 67.407.603.724 80.869-67.407-.604-.724zm-4.873-1.37l-77.901 68.771.623.707 77.902-68.772-.624-.707zm-6.208-.587l-74.538 68.408.637.694 74.537-68.409-.636-.693zm13.882 21.04l-60.29 43.324.89 1.24 60.29-43.324-.89-1.24z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  }), /*#__PURE__*/external_React_.createElement("path", {
    d: "M44.031 119.165h41.645c11.489 0 19.746.359 29.26 1.257V89.008c-7.181.898-13.822 1.257-29.619 1.257H31.645c-8.616 0-10.411 0-17.951-.359-.179 6.821-.359 11.129-.718 14.899L8.13 160.81c-.539 5.027-1.077 9.335-1.795 14.72l33.388 3.231c3.949-8.796 11.309-13.283 22.617-13.283 15.079 0 24.772 9.334 24.772 23.694 0 14.361-10.052 23.874-25.131 23.874-12.924 0-20.463-5.564-23.515-17.412l-36.08 5.565c2.692 9.334 4.846 14.54 8.975 20.105 10.411 14.36 28.182 22.079 50.8 22.079 38.055 0 60.673-20.464 60.673-54.929 0-15.078-4.488-26.746-13.463-35.901-9.514-9.693-22.618-14.719-38.594-14.719-11.668 0-21.002 2.692-29.08 8.616.359-3.052.539-4.847.539-5.744l1.795-21.541zm277.515 0h41.646c11.488 0 19.745.359 29.259 1.257V89.008c-7.18.898-13.822 1.257-29.618 1.257H309.16c-8.616 0-10.411 0-17.95-.359-.18 6.821-.359 11.129-.718 14.899l-4.847 56.005c-.538 5.027-1.077 9.335-1.795 14.72l33.388 3.231c3.949-8.796 11.309-13.283 22.618-13.283 15.078 0 24.772 9.334 24.772 23.694 0 14.361-10.053 23.874-25.131 23.874-12.925 0-20.464-5.564-23.515-17.412l-36.081 5.565c2.693 9.334 4.847 14.54 8.975 20.105 10.412 14.36 28.183 22.079 50.8 22.079 38.056 0 60.673-20.464 60.673-54.929 0-15.078-4.487-26.746-13.463-35.901-9.513-9.693-22.617-14.719-38.593-14.719-11.668 0-21.003 2.692-29.08 8.616.359-3.052.538-4.847.538-5.744l1.795-21.541zM201.098 242.844c22.797 0 41.645-10.052 52.416-28.002 6.821-11.309 11.309-31.055 11.309-49.903 0-14.719-2.334-28.541-7.001-41.286-2.693-7.18-7.18-14.002-13.104-19.925-10.95-10.771-26.208-16.694-43.62-16.694-22.618 0-41.286 10.052-52.236 28.362-6.821 11.308-11.309 30.874-11.309 49.723 0 14.539 2.334 28.361 7.001 41.106 2.693 7.18 7.18 14.002 13.104 19.925 10.95 10.95 25.849 16.694 43.44 16.694zm0-125.474c17.412 0 26.746 16.156 26.746 46.851 0 31.952-8.975 48.107-26.566 48.107-17.771 0-26.926-16.514-26.926-48.646 0-29.259 9.873-46.312 26.746-46.312z",
    fillOpacity: 0.1,
    fillRule: "nonzero"
  }));
}

/* harmony default export */ const _505 = (SvgComponent);
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





























;// CONCATENATED MODULE: ./assets/js/back-end/errors/ErrorBoundary.tsx






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ErrorBoundary = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(ErrorBoundary, _Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      error: null,
      errorInfo: null
    };
    return _this;
  }

  (0,createClass/* default */.Z)(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) {
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
          minH: "90vh"
        }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
          textAlign: "center"
        }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
          as: _505,
          w: "300px",
          h: "180px"
        }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
          direction: "column",
          align: "center"
        }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Code */.EK, null, this.state.error.toString()), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Code */.EK, {
          maxW: "3xl",
          colorScheme: "red",
          p: "8"
        }, this.state.errorInfo.componentStack))));
      }

      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(external_React_.Component);

/* harmony default export */ const errors_ErrorBoundary = (ErrorBoundary);
// EXTERNAL MODULE: ./node_modules/chakra-ui-steps/dist/chakra-ui-steps.esm.js
var chakra_ui_steps_esm = __webpack_require__(4809);
;// CONCATENATED MODULE: ./assets/js/back-end/theme/theme.ts


var theme = (0,chakra_ui_react_esm.extendTheme)({
  colors: {
    blue: {
      10: '#ecf3ff',
      50: '#FFFFFF',
      100: '#ecf3ff',
      200: '#DEE9FF',
      300: '#ABC7FF',
      400: '#78A6FF',
      500: '#4584FF',
      600: '#1262FF',
      700: '#004BDE',
      800: '#003AAB',
      900: '#002978'
    },
    green: {
      10: '#E4FFE9'
    }
  },
  styles: {
    global: {
      'html,body': {
        bg: 'gray.50'
      },
      '.wp-admin #masteriyo': {
        ml: '-20px'
      },
      '.admin-bar': {
        ' .masteriyo-interactive-header': {
          top: '32px !important'
        }
      },
      '#masteriyo, #masteriyo-onboarding, #masteriyo-interactive-course, #masteriyo-account-page': {
        'input[type="color"], input[type="date"], input[type="datetime-local"], input[type="datetime"], input[type="email"], input[type="month"], input[type="number"], input[type="password"], input[type="search"], input[type="tel"], input[type="text"], input[type="time"], input[type="url"], input[type="week"], select, textarea, #rfs-btn': {
          shadow: 'input',
          color: 'gray.600',
          border: '1px',
          rounded: 'sm',
          borderColor: 'gray.200',
          maxW: 'auto',
          _hover: {
            borderColor: 'gray.300'
          },
          _focus: {
            borderColor: 'blue.300'
          }
        },
        ul: {
          li: {
            marginBottom: 0
          }
        },
        '.ProseMirror, .masteriyo-interactive-description': {
          'h1, h2, h3, h4, h5, h6': {
            lineHeight: '1.1',
            fontWeight: '700'
          },
          h1: {
            fontSize: '28px',
            my: '0.67em'
          },
          h2: {
            fontSize: '24px',
            my: '0.75em'
          },
          h3: {
            fontSize: '20px',
            my: '0.83em'
          },
          h4: {
            fontSize: '18px',
            my: '1.12em'
          },
          h5: {
            fontSize: '16px',
            my: '1.5em'
          },
          h6: {
            fontSize: '14px',
            my: '1.67em'
          },
          p: {
            mb: '1rem'
          },
          a: {
            textDecoration: 'underline',
            color: 'blue.500',
            cursor: 'pointer'
          },
          blockquote: {
            paddingLeft: '1rem',
            borderLeft: '2px solid rgba(13,13,13,.1)'
          },
          code: {
            backgroundColor: 'gray.100',
            color: 'gray.600',
            padding: '.1rem .3rem',
            borderRadius: '4px'
          },
          'ul, ol': {
            padding: '0 0.75rem'
          },
          ul: {
            listStyleType: 'disc'
          },
          ol: {
            pl: '1.2rem'
          },
          pre: {
            background: '#0D0D0D',
            color: '#FFF',
            fontFamily: 'JetBrainsMono, monospace',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            code: {
              color: 'inherit',
              padding: '0',
              background: 'none',
              fontSize: '0.8rem'
            },
            '.hljs-comment,.hljs-quote': {
              color: 'gray.600'
            },
            '.hljs-variable,.hljs-template-variable,.hljs-attribute,.hljs-tag,.hljs-name,.hljs-regexp,.hljs-link,.hljs-name,.hljs-selector-id,.hljs-selector-class': {
              color: '#F98181'
            },
            '.hljs-number,.hljs-meta,.hljs-built_in,.hljs-builtin-name,.hljs-literal,.hljs-type,.hljs-params': {
              color: '#FBBC88'
            },
            '.hljs-string,.hljs-symbol,.hljs-bullet': {
              color: '#B9F18D'
            },
            '.hljs-title,.hljs-section': {
              color: '#FAF594'
            },
            '.hljs-keyword,.hljs-selector-tag': {
              color: '#70CFF8'
            },
            '.hljs-emphasis': {
              fontStyle: 'italic'
            },
            '.hljs-strong': {
              fontWeight: '700'
            }
          }
        },
        select: {
          fontSize: 'sm',
          borderRadius: 'sm',
          shadow: 'input',
          borderColor: 'inherit',
          maxWidth: 'full',
          color: 'inherit',
          bg: 'white',
          _hover: {
            borderColor: 'gray.300'
          }
        },
        '::placeholder': {
          fontSize: 'sm'
        },
        '.responsiveTable': {
          width: '100%',
          th: {
            pb: '6',
            borderBottom: 'none',
            textTransform: 'uppercase',
            fontSize: 'xs',
            textAlign: 'left'
          },
          'tr:nth-of-type(2n+1) td': {
            bg: '#f8f9fa'
          },
          tr: {
            'th, td': {
              ':first-of-type': {
                pl: '12'
              },
              ':last-child': {
                pr: '12',
                textAlign: 'right'
              }
            }
          },
          td: {
            py: '3',
            borderBottom: 'none'
          }
        },
        '.responsiveTable td .tdBefore': {
          display: 'none'
        },
        '@media screen and (max-width: 40em)': {
          '.responsiveTable table': {
            display: 'block'
          },
          '.responsiveTable thead': {
            display: 'block'
          },
          '.responsiveTable tbody': {
            display: 'block'
          },
          '.responsiveTable th': {
            display: 'block'
          },
          '.responsiveTable td': {
            display: 'block'
          },
          '.responsiveTable tr': {
            display: 'block'
          },
          '.responsiveTable thead tr': {
            position: 'absolute',
            top: '-9999px',
            left: '-9999px',
            borderBottom: '2px solid #333'
          },
          '.responsiveTable td.pivoted': {
            border: 'none !important',
            position: 'relative',
            paddingLeft: 'calc(50% + 10px) !important',
            textAlign: 'left !important',
            whiteSpace: 'pre-wrap',
            overflowWrap: 'break-word',
            pr: '6'
          },
          '.responsiveTable td .tdBefore': {
            position: 'absolute',
            display: 'block',
            left: '6',
            width: 'calc(50% - 20px)',
            whiteSpace: 'pre-wrap',
            overflowWrap: 'break-word',
            textAlign: 'left !important',
            fontWeight: '600',
            fontSize: 'sm'
          }
        },
        '.react-datepicker-wrapper,\n.react-datepicker__input-container': {
          display: 'block'
        },
        '.react-datepicker__header': {
          borderRadius: '0',
          background: 'blue.100'
        },
        '.react-datepicker__navigation': {
          top: '8px'
        },
        '.react-datepicker,\n.react-datepicker__header,\n.react-datepicker__time-container': {
          borderColor: '#e2e8f0'
        },
        '.react-datepicker__current-month,\n.react-datepicker-time__header,\n.react-datepicker-year-header': {
          fontSize: 'inherit',
          fontWeight: 600
        },
        '.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item': {
          margin: '0 1px 0 0',
          height: 'auto',
          padding: '7px 10px',
          '&:hover': {
            background: '#edf2f7'
          }
        },
        '.react-datepicker__day:hover': {
          background: '#edf2f7'
        },
        '.react-datepicker__day--selected,\n.react-datepicker__day--in-selecting-range,\n.react-datepicker__day--in-range,\n.react-datepicker__month-text--selected,\n.react-datepicker__month-text--in-selecting-range,\n.react-datepicker__month-text--in-range,\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected': {
          background: '#3182ce',
          fontWeight: 'normal',
          '&:hover': {
            background: '#2a69ac'
          }
        },
        '.react-datepicker__triangle': {
          d: 'none'
        }
      }
    }
  },
  shadows: {
    box: '0px 0px 60px rgba(0, 0, 0, 0.08)',
    input: '0px 1px 0px #EFF0F6',
    button: '0px 4px 14px rgba(0, 0, 0, 0.13)',
    boxl: '0px 0px 60px rgba(0, 0, 0, 0.15)',
    header: '0px 2px 15px rgba(0, 0, 0, 0.04)'
  },
  components: {
    Popover: {
      baseStyle: {
        popper: {
          width: 'fit-content',
          maxWidth: 'fit-content'
        }
      }
    },
    Button: {
      baseStyle: {
        borderRadius: 'sm'
      },
      sizes: {
        md: {
          fontSize: 'xs'
        },
        sm: {
          fontSize: 'xs'
        }
      },
      variants: {
        solid: {
          shadow: 'button'
        }
      }
    },
    Input: {
      sizes: {
        md: {
          field: {
            borderRadius: 'sm',
            shadow: 'input'
          }
        }
      },
      variants: {
        outline: {
          addon: {
            bg: '#f8f8f8',
            borderRadius: 'sm',
            fontSize: 'sm'
          }
        }
      },
      defaultProps: {
        _placeholder: {
          color: 'red'
        }
      }
    },
    Textarea: {
      sizes: {
        md: {
          borderRadius: 'sm',
          shadow: 'input'
        }
      }
    },
    FormLabel: {
      baseStyle: {
        fontSize: 'sm',
        fontWeight: 'semibold',
        mb: '3'
      }
    },
    Select: {
      sizes: {
        md: {
          field: {
            borderRadius: 'sm',
            shadow: 'input'
          }
        }
      }
    },
    Modal: {
      sizes: {
        fullSpacing: {
          dialog: {
            w: '100%',
            maxW: '800px',
            minH: '400px',
            maxH: 'calc(100vh - 80px)'
          }
        }
      }
    },
    Radio: {
      sizes: {
        md: {
          label: {
            fontSize: 'sm'
          }
        }
      }
    },
    Steps: chakra_ui_steps_esm/* StepsStyleConfig */.cX
  }
});
/* harmony default export */ const theme_theme = (theme);
// EXTERNAL MODULE: ./node_modules/humanize-duration/humanize-duration.js
var humanize_duration = __webpack_require__(9695);
var humanize_duration_default = /*#__PURE__*/__webpack_require__.n(humanize_duration);
// EXTERNAL MODULE: ./node_modules/query-string/index.js
var query_string = __webpack_require__(7563);
;// CONCATENATED MODULE: ./assets/js/back-end/utils/utils.ts


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/**
 * repr :: gets the string representation of `arg`
 * @param {} arg :: unknown function argument
 * @returns {String} :: a string representation of `arg`
 */

var repr = function repr(arg) {
  return Object.prototype.toString.call(arg);
};
/**
 * isArray
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: returns true if `arg` is an Array, false otherwise
 */

var isArray = function isArray(arg) {
  return Array.isArray ? Array.isArray(arg) : repr(arg) === '[object Array]';
};
/**
 * isObject :: checks if `arg` is an object.
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: returns true if `arg` is an object.
 */

var isObject = function isObject(arg) {
  return repr(arg) === '[object Object]';
};
/**
 * isTruthyish :: checks if `arg` is not null or undefined.
 *
 * for example, statements like `!""`, `!0`, `!null`, or `!undefined`
 *  evaluate to `true`. However, sometimes deep-cleaner is only interested
 *  if something is null or undefined, so `isTruthyish("")` and
 *  `isTruthyish(0)` evaluate to `true`, while `isTruthyish(null)` and
 *  `isTruthyish(undefined)` still evaluate to `false`.
 *
 * @param {} arg :: unknown function argument.
 * @returns {Boolean}
 */

var isTruthyish = function isTruthyish(arg) {
  if (arg === false) {
    return false;
  }

  return !(isNull(arg) || isUndefined(arg));
};
/**
 * isString :: checks if `arg` is a string.
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: returns true if `arg` is a String, false otherwise
 */

var isString = function isString(arg) {
  return repr(arg) === '[object String]';
};
/**
 * isNumber :: checks if `arg` is a number.
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: returns true if `arg` is a Number, false otherwise
 */

var isNumber = function isNumber(arg) {
  return repr(arg) === '[object Number]';
};
var isFloat = function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
};
/**
 * isNull :: checks if `arg` is null.
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: returns true if `arg` is of type Null, false otherwise
 */

var isNull = function isNull(arg) {
  return repr(arg) === '[object Null]';
};
/**
 * isPositiveNumber :: checks if `arg` is a positive number.
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: returns true if `arg` is a Positive Number, false otherwise
 */

var isPositiveNumber = function isPositiveNumber(arg) {
  return parseInt(arg) >= 0;
};
/**
 * hasNumber :: checks if `arg` has number..
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: returns true if `arg` has number, false otherwise
 */

var hasNumber = function hasNumber(arg) {
  var pattern = /^\D+$/i;
  return pattern.test(arg);
};
/**
 * isUndefined :: checks if `arg` is undefined.
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: Returns true if `arg` is of type Undefined, false otherwise
 */

var isUndefined = function isUndefined(arg) {
  try {
    return typeof arg === 'undefined';
  } catch (e) {
    if (e instanceof ReferenceError) {
      return true;
    }

    throw e;
  }
};
/**
 * isEmpty :: Checks if `arg` is an empty string, array, or object.
 *
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: Returns true if `arg` is an empty string,
 *  array, or object. Also returns true is `arg` is null or
 *  undefined. Returns true otherwise.
 */

var isEmpty = function isEmpty(arg) {
  return isUndefined(arg) || isNull(arg) || isString(arg) && arg.length === 0 || isArray(arg) && arg.length === 0 || isObject(arg) && Object.keys(arg).length === 0;
};
/**
 * Deep merge two objects.
 * @return merged object
 */

function deepMerge(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (sources.length === 0) return target;
  var source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    }
  }

  return deepMerge.apply(void 0, [target].concat(sources));
}

function cleanCyclicObject(object) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var visitedObjects = new WeakMap(); // use a WeakMap to keep track of which objects have been visited

  function recursiveClean(obj) {
    // If `obj` is an actual object, check if it's been seen already.
    if (isObject(obj)) {
      // If we've seen this object already, return to stop infinite loops
      if (visitedObjects.has(obj)) {
        return;
      } // If we haven't seen this object yet, add it to the list of visited objects.
      // Since 'obj' itself is used as the key, the value of 'objects[obj]' is
      // irrelevent. I just went with using 'null'.


      visitedObjects.set(obj, null);

      for (var key in obj) {
        if (target && key === target || // Check if 'key' is the target to delete,
        !target && isEmpty(obj[key]) // or if 'target' is unspecified but the object is "empty"
        ) {
          delete obj[key];
        } else {
          recursiveClean(obj[key]);
        }
      } // If 'obj' is an array, check it's elements for objects to clean up.

    } else if (isArray(obj)) {
      for (var i in obj) {
        recursiveClean(obj[i]);
      }
    }
  }

  recursiveClean(object);
}
/**
 * removeKeyLoop :: does the same thing as `removeKey()` but with multiple keys.
 * @param {Object} obj :: the object being cleaned
 * @param {String|Array} keys :: an array containing keys to be cleaned from `obj`
 */


var removeKeyLoop = function removeKeyLoop(obj, keys) {
  var _iterator = _createForOfIteratorHelper(keys),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      cleanCyclicObject(obj, key);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
/**
 * deepClean
 *
 * @param {Object} obj :: the object being cleaned
 * @param {?String|?Array} target :: A string or array of strings of key(s) for key-value pair(s) to be cleaned from `obj`
 */

var deepClean = function deepClean(obj) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (isArray(target)) {
    removeKeyLoop(obj, target);
  } else {
    cleanCyclicObject(obj, target);
  }

  return obj;
};
var duplicateObject = function duplicateObject(propertyName, inputArray) {
  var seenDuplicate = false,
      testObject = {};
  inputArray.map(function (item) {
    var itemPropertyName = item[propertyName];

    if (itemPropertyName in testObject) {
      testObject[itemPropertyName].duplicate = true;
      item.duplicate = true;
      seenDuplicate = true;
    } else {
      testObject[itemPropertyName] = item;
      delete item.duplicate;
    }
  });
  return seenDuplicate;
};
var existsOnArray = function existsOnArray(array, property, value) {
  var arr = array;
  return arr.some(function (el) {
    return el[property] === value;
  });
};
var decodeEntity = function decodeEntity(html) {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};
var getLocalTime = function getLocalTime(date) {
  var formatString;

  if (date.indexOf(' ') >= 0) {
    formatString = date.replace(' ', 'T') + 'Z';
  } else {
    formatString = date + 'Z';
  }

  var localDate = new Date(formatString);
  return localDate;
};
var getFileNameFromURL = function getFileNameFromURL(url) {
  var fileNameWithType = url.substring(url.lastIndexOf('/') + 1);
  return fileNameWithType;
};
var formatParams = function formatParams(params) {
  if (isObject(params)) {
    return (0,query_string.stringify)(params);
  }

  return params;
};
var isDevelopment = (/* unused pure expression or super */ null && ("production" === 'development'));
var isProduction = "production" === 'production';
var humanizeTime = humanize_duration_default().humanizer({
  language: 'shortEn',
  languages: {
    shortEn: {
      y: function y() {
        return 'y';
      },
      mo: function mo() {
        return 'mo';
      },
      w: function w() {
        return 'w';
      },
      d: function d() {
        return 'd';
      },
      h: function h() {
        return 'h';
      },
      m: function m() {
        return 'm';
      },
      s: function s() {
        return 's';
      },
      ms: function ms() {
        return 'ms';
      }
    }
  },
  conjunction: ' ',
  spacer: '',
  units: ['h', 'm']
});
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
;// CONCATENATED MODULE: ./assets/js/interactive/constants/routes.ts
var routes = {
  course: '/course/:courseId',
  lesson: '/course/:courseId/lesson/:lessonId',
  quiz: '/course/:courseId/quiz/:quizId'
};
/* harmony default export */ const constants_routes = (routes);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/spinner/dist/chakra-ui-spinner.esm.js
var chakra_ui_spinner_esm = __webpack_require__(9609);
;// CONCATENATED MODULE: ./assets/js/back-end/components/layout/FullScreenLoader.tsx



var FullScreenLoader = function FullScreenLoader() {
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
    h: "calc(100vh - 60px)"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_spinner_esm/* Spinner */.$, {
    size: "lg",
    color: "blue.500",
    emptyColor: "gray.200",
    thickness: "3px"
  }));
};

/* harmony default export */ const layout_FullScreenLoader = (FullScreenLoader);
;// CONCATENATED MODULE: ./assets/js/back-end/constants/urls.ts
var base = '/masteriyo/v1/';
var urls = {
  wpMedia: '/wp/v2/media',
  wpPages: '/wp/v2/pages',
  courses: base + 'courses',
  categories: base + 'courses/categories',
  tags: base + 'courses/tags',
  difficulties: base + 'courses/difficulties',
  lessons: base + 'lessons',
  questions: base + 'questions',
  quizes: base + 'quizes',
  quizesAttempts: base + 'quizes/attempts',
  sections: base + 'sections',
  contents: base + 'sections/children',
  orders: base + 'orders',
  order_items: base + 'order-items',
  users: base + 'users',
  currentUser: base + 'users/me',
  settings: base + 'settings',
  builder: base + 'coursebuilder',
  courseProgress: base + 'course-progress',
  courseProgressItem: base + 'course-progress/items',
  qa: base + 'courses/questions-answers',
  countries: base + 'datas/countries',
  states: base + 'datas/states',
  currencies: base + 'datas/currencies',
  instructors: base + 'users/instructors',
  myCourses: base + 'users/courses',
  userLogout: base + 'users/logout',
  profileImage: base + 'users/account/profile-image',
  reviews: base + 'courses/reviews'
};
/* harmony default export */ const constants_urls = (urls);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
;// CONCATENATED MODULE: external "regeneratorRuntime"
const external_regeneratorRuntime_namespaceObject = window["regeneratorRuntime"];
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_namespaceObject);
;// CONCATENATED MODULE: external ["wp","apiFetch"]
const external_wp_apiFetch_namespaceObject = window["wp"]["apiFetch"];
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_namespaceObject);
;// CONCATENATED MODULE: ./assets/js/back-end/utils/global.ts
var localized = window._MASTERIYO_;
/* harmony default export */ const global = (localized);
;// CONCATENATED MODULE: ./assets/js/back-end/utils/http.ts


external_wp_apiFetch_default().use(external_wp_apiFetch_default().createNonceMiddleware(global.nonce));
external_wp_apiFetch_default().use(external_wp_apiFetch_default().createRootURLMiddleware(global.rootApiUrl));
/* harmony default export */ const http = ((external_wp_apiFetch_default()));
;// CONCATENATED MODULE: ./assets/js/back-end/utils/api.ts







var API = /*#__PURE__*/function () {
  function API(uri) {
    (0,classCallCheck/* default */.Z)(this, API);

    this.uri = "".concat(uri, "/");
  }

  (0,createClass/* default */.Z)(API, [{
    key: "list",
    value: function () {
      var _list = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee(query) {
        return external_regeneratorRuntime_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", http({
                  path: query ? "".concat(this.uri, "?").concat(formatParams(query)) : this.uri,
                  method: 'get'
                }).then(function (res) {
                  return res;
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function list(_x) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee2(id) {
        return external_regeneratorRuntime_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", http({
                  path: id ? this.uri + id : this.uri,
                  method: 'get'
                }).then(function (res) {
                  return res;
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function get(_x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "store",
    value: function () {
      var _store = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee3(data) {
        return external_regeneratorRuntime_default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", http({
                  path: this.uri,
                  method: 'post',
                  data: data
                }).then(function (res) {
                  return res;
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function store(_x3) {
        return _store.apply(this, arguments);
      }

      return store;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee4(id, data) {
        return external_regeneratorRuntime_default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", http({
                  path: this.uri + id,
                  method: 'post',
                  headers: {
                    'x-http-method-override': 'PUT'
                  },
                  data: data
                }).then(function (res) {
                  return res;
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function update(_x4, _x5) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee5(id, params) {
        return external_regeneratorRuntime_default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", http({
                  path: params ? "".concat(this.uri).concat(id, "?").concat(formatParams(params)) : this.uri + id,
                  method: 'post',
                  headers: {
                    'x-http-method-override': 'DELETE'
                  }
                }).then(function (res) {
                  return res;
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _delete(_x6, _x7) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "start",
    value: function () {
      var _start = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee6(id) {
        return external_regeneratorRuntime_default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", http({
                  path: this.uri + 'start_quiz',
                  data: {
                    id: id
                  },
                  method: 'post'
                }).then(function (res) {
                  return res;
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function start(_x8) {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "check",
    value: function () {
      var _check = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee7(id, data) {
        return external_regeneratorRuntime_default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", http({
                  path: this.uri + 'check_answers',
                  data: {
                    id: id,
                    data: data
                  },
                  method: 'post'
                }).then(function (res) {
                  return res;
                }));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function check(_x9, _x10) {
        return _check.apply(this, arguments);
      }

      return check;
    }()
  }, {
    key: "restore",
    value: function () {
      var _restore = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee8(id) {
        return external_regeneratorRuntime_default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", http({
                  path: this.uri + id + '/restore',
                  method: 'post'
                }).then(function (res) {
                  return res;
                }));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function restore(_x11) {
        return _restore.apply(this, arguments);
      }

      return restore;
    }()
  }, {
    key: "updateProfileImage",
    value: function () {
      var _updateProfileImage = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee9(data) {
        return external_regeneratorRuntime_default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", http({
                  path: this.uri,
                  body: data,
                  method: 'post'
                }).then(function (res) {
                  return res;
                }));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function updateProfileImage(_x12) {
        return _updateProfileImage.apply(this, arguments);
      }

      return updateProfileImage;
    }()
  }, {
    key: "deleteProfileImage",
    value: function () {
      var _deleteProfileImage = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee10() {
        return external_regeneratorRuntime_default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", http({
                  path: this.uri,
                  method: 'delete'
                }).then(function (res) {
                  return res;
                }));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function deleteProfileImage() {
        return _deleteProfileImage.apply(this, arguments);
      }

      return deleteProfileImage;
    }()
  }]);

  return API;
}();

/* harmony default export */ const api = (API);
;// CONCATENATED MODULE: ./assets/js/back-end/utils/nav.ts

var getNavigationRoute = function getNavigationRoute(id, type, courseId) {
  if (type === 'lesson') {
    return constants_routes.lesson.replace(':lessonId', id.toString()).replace(':courseId', courseId.toString());
  } else if (type === 'quiz') {
    return constants_routes.quiz.replace(':quizId', id.toString()).replace(':courseId', courseId.toString());
  }

  return '';
};
// EXTERNAL MODULE: ./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js
var chakra_ui_image_esm = __webpack_require__(4651);
;// CONCATENATED MODULE: external ["wp","i18n"]
const external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: ./assets/js/interactive/pages/not-found/FourOFour.tsx





var FourOFour = function FourOFour() {
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
    maxW: "350px",
    mx: "auto"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* VStack */.gC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_image_esm/* Image */.Ee, {
    src: _404
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* VStack */.gC, {
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    size: "4xl"
  }, (0,external_wp_i18n_namespaceObject.__)('404', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    fontSize: "md"
  }, (0,external_wp_i18n_namespaceObject.__)('Oops - Page Not Found', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "sm",
    color: "gray.500"
  }, (0,external_wp_i18n_namespaceObject.__)('We cannot find the page you are looking for.', 'masteriyo'))))));
};

/* harmony default export */ const not_found_FourOFour = (FourOFour);
;// CONCATENATED MODULE: ./assets/js/interactive/pages/course/InteractiveCourse.tsx









var InteractiveCourse = function InteractiveCourse() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      courseId = _useParams.courseId;

  var history = (0,react_router/* useHistory */.k6)();
  var progressAPI = new api(constants_urls.courseProgress);
  var courseProgressQuery = (0,es.useQuery)(["courseProgress".concat(courseId), courseId], function () {
    return progressAPI.store({
      course_id: courseId
    });
  });

  if (courseProgressQuery.isSuccess) {
    try {
      var _courseProgressQuery$, _courseProgressQuery$2, _courseProgressQuery$3, _courseProgressQuery$4, _courseProgressQuery$5, _courseProgressQuery$6;

      history.push(getNavigationRoute(courseProgressQuery === null || courseProgressQuery === void 0 ? void 0 : (_courseProgressQuery$ = courseProgressQuery.data) === null || _courseProgressQuery$ === void 0 ? void 0 : (_courseProgressQuery$2 = _courseProgressQuery$.items[0]) === null || _courseProgressQuery$2 === void 0 ? void 0 : (_courseProgressQuery$3 = _courseProgressQuery$2.contents[0]) === null || _courseProgressQuery$3 === void 0 ? void 0 : _courseProgressQuery$3.item_id, courseProgressQuery === null || courseProgressQuery === void 0 ? void 0 : (_courseProgressQuery$4 = courseProgressQuery.data) === null || _courseProgressQuery$4 === void 0 ? void 0 : (_courseProgressQuery$5 = _courseProgressQuery$4.items[0]) === null || _courseProgressQuery$5 === void 0 ? void 0 : (_courseProgressQuery$6 = _courseProgressQuery$5.contents[0]) === null || _courseProgressQuery$6 === void 0 ? void 0 : _courseProgressQuery$6.item_type, courseId));
    } catch (error) {}
  }

  if (courseProgressQuery.isError) {
    return /*#__PURE__*/external_React_default().createElement(not_found_FourOFour, null);
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const course_InteractiveCourse = (InteractiveCourse);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/toast/dist/chakra-ui-toast.esm.js + 3 modules
var chakra_ui_toast_esm = __webpack_require__(3083);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js
var chakra_ui_hooks_esm = __webpack_require__(7375);
;// CONCATENATED MODULE: ./assets/js/back-end/utils/image.ts

var getSrcSet = function getSrcSet(mediaObject) {
  if (isEmpty(mediaObject)) return;
  var mediaDetails = mediaObject.media_details.sizes;
  var imageUrls = [];
  if (mediaDetails.thumbnail) imageUrls.push("".concat(mediaDetails.thumbnail.source_url, " ").concat(mediaDetails.thumbnail.width, "w"));
  if (mediaDetails.medium) imageUrls.push("".concat(mediaDetails.medium.source_url, " ").concat(mediaDetails.medium.width, "w"));
  if (mediaDetails.large) imageUrls.push("".concat(mediaDetails.large.source_url, " ").concat(mediaDetails.large.width, "w"));
  return !isEmpty(imageUrls) ? imageUrls.join(', ') : '';
};
;// CONCATENATED MODULE: ./assets/js/back-end/utils/media.ts








var MediaAPI = /*#__PURE__*/function () {
  function MediaAPI() {
    (0,classCallCheck/* default */.Z)(this, MediaAPI);

    this.uri = "".concat(constants_urls.wpMedia, "/");
  }

  (0,createClass/* default */.Z)(MediaAPI, [{
    key: "get",
    value: function () {
      var _get = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee(id) {
        return external_regeneratorRuntime_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (id) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                return _context.abrupt("return", http({
                  path: this.uri + id,
                  method: 'GET'
                }).then(function (res) {
                  return res;
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "store",
    value: function () {
      var _store = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee2(data) {
        return external_regeneratorRuntime_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", http({
                  path: this.uri,
                  method: 'POST',
                  data: data,
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                }).then(function (res) {
                  return res;
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function store(_x2) {
        return _store.apply(this, arguments);
      }

      return store;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee3(id) {
        return external_regeneratorRuntime_default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", http({
                  path: this.uri + id + '?force=true',
                  method: 'POST',
                  headers: {
                    'x-http-method-override': 'DELETE'
                  }
                }).then(function (res) {
                  return res;
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _delete(_x3) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "list",
    value: function () {
      var _list = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee4(query) {
        return external_regeneratorRuntime_default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", http({
                  path: query ? "".concat(this.uri, "?").concat(formatParams(query)) : this.uri,
                  method: 'GET'
                }).then(function (res) {
                  return res;
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function list(_x4) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }]);

  return MediaAPI;
}();

/* harmony default export */ const media = (MediaAPI);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js
var chakra_ui_button_esm = __webpack_require__(5193);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(7516);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/media-query/dist/chakra-ui-media-query.esm.js
var chakra_ui_media_query_esm = __webpack_require__(2684);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/MobileHidden.tsx



var MobileHidden = function MobileHidden(props) {
  var children = props.children;
  var display = (0,chakra_ui_media_query_esm/* useBreakpointValue */.Sx)({
    base: 'none',
    md: 'block'
  });
  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    d: display
  }, children));
};

/* harmony default export */ const common_MobileHidden = (MobileHidden);
;// CONCATENATED MODULE: ./assets/js/interactive/components/ContentNav.tsx








var ContentNav = function ContentNav(props) {
  var _navigation$previous, _navigation$previous2, _navigation$next, _navigation$next2;

  var navigation = props.navigation,
      courseId = props.courseId,
      onCompletePress = props.onCompletePress,
      isButtonLoading = props.isButtonLoading,
      isButtonDisabled = props.isButtonDisabled,
      type = props.type,
      quizStarted = props.quizStarted;
  var cirlceStyles = {
    w: '30px',
    h: '30px',
    bg: 'blue.500',
    color: 'white',
    fontSize: 'xx-large',
    rounded: 'full'
  };
  var navLinkStyles = {
    p: '4',
    w: 'full',
    d: 'block',
    _hover: {
      bg: 'white',
      shadow: 'box'
    }
  };
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "nav",
    w: "full",
    p: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* SimpleGrid */.MI, {
    columns: [1, 1, 3],
    minChildWidth: "100px"
  }, /*#__PURE__*/external_React_default().createElement(common_MobileHidden, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, null, (navigation === null || navigation === void 0 ? void 0 : navigation.previous) && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* Link */.rU,
    to: getNavigationRoute(navigation === null || navigation === void 0 ? void 0 : (_navigation$previous = navigation.previous) === null || _navigation$previous === void 0 ? void 0 : _navigation$previous.id, navigation === null || navigation === void 0 ? void 0 : (_navigation$previous2 = navigation.previous) === null || _navigation$previous2 === void 0 ? void 0 : _navigation$previous2.type, courseId),
    sx: navLinkStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, {
    spacing: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
    sx: cirlceStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiChevronLeft */.gbs
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "0"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "xs",
    color: "gray.500"
  }, (0,external_wp_i18n_namespaceObject.__)('Previous', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    fontSize: "xs"
  }, navigation === null || navigation === void 0 ? void 0 : navigation.previous.name)))))), (quizStarted || type !== 'quiz') && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    align: "center",
    justify: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    onClick: onCompletePress,
    isLoading: isButtonLoading,
    isDisabled: isButtonDisabled,
    colorScheme: "blue",
    rounded: "full",
    fontWeight: "bold",
    leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      fontSize: "xl",
      d: isButtonDisabled ? 'block' : 'none',
      as: index_esm/* BiCheck */.hXj
    }),
    textTransform: "uppercase"
  }, isButtonDisabled ? (0,external_wp_i18n_namespaceObject.__)('Completed', 'masteriyo') : type === 'quiz' ? (0,external_wp_i18n_namespaceObject.__)('Submit Quiz', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Mark as Complete', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(common_MobileHidden, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, null, (navigation === null || navigation === void 0 ? void 0 : navigation.next) && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* Link */.rU,
    to: getNavigationRoute(navigation === null || navigation === void 0 ? void 0 : (_navigation$next = navigation.next) === null || _navigation$next === void 0 ? void 0 : _navigation$next.id, navigation === null || navigation === void 0 ? void 0 : (_navigation$next2 = navigation.next) === null || _navigation$next2 === void 0 ? void 0 : _navigation$next2.type, courseId),
    sx: navLinkStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, {
    spacing: "4",
    justify: "flex-end"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "0"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "xs",
    color: "gray.500"
  }, (0,external_wp_i18n_namespaceObject.__)('Next', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    fontSize: "xs"
  }, navigation === null || navigation === void 0 ? void 0 : navigation.next.name)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
    sx: cirlceStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiChevronRight */.lU2
  }))))))));
};

/* harmony default export */ const components_ContentNav = (ContentNav);
;// CONCATENATED MODULE: ./assets/js/interactive/components/FloatingNavigation.tsx






var FloatingNavigation = function FloatingNavigation(props) {
  var _navigation$previous, _navigation$previous$, _navigation$previous2, _navigation$previous3, _navigation$previous4, _navigation$previous5, _navigation$next, _navigation$next2, _navigation$next3, _navigation$next3$par, _navigation$next4, _navigation$next5, _navigation$next6;

  var navigation = props.navigation,
      courseId = props.courseId,
      isSidebarOpened = props.isSidebarOpened;

  var _useDisclosure = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)(),
      isPrevOpen = _useDisclosure.isOpen,
      onPrevOpen = _useDisclosure.onOpen,
      onPrevClose = _useDisclosure.onClose;

  var _useDisclosure2 = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)(),
      isNextOpen = _useDisclosure2.isOpen,
      onNextOpen = _useDisclosure2.onOpen,
      onNextClose = _useDisclosure2.onClose;

  var getContentIcon = function getContentIcon(itemType, video) {
    if (itemType === 'quiz') {
      return index_esm/* BiTimer */.b3O;
    }

    if (itemType === 'lesson') {
      if (video) {
        return index_esm/* BiPlay */.PHf;
      } else {
        return index_esm/* BiAlignLeft */.YSr;
      }
    }
  };

  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, (navigation === null || navigation === void 0 ? void 0 : navigation.previous) && /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    shadow: "box",
    position: "fixed",
    p: "6",
    pl: "80px",
    top: "50vh",
    left: isSidebarOpened ? '300px' : 0,
    transition: "all 0.35s ease-in-out",
    transform: isPrevOpen ? 'translate(0, -50%)' : 'translate(-100%, -50%)',
    rounded: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, {
    spacing: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "2",
    align: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "0"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "xs",
    color: "gray.400"
  }, navigation === null || navigation === void 0 ? void 0 : (_navigation$previous = navigation.previous) === null || _navigation$previous === void 0 ? void 0 : (_navigation$previous$ = _navigation$previous.parent) === null || _navigation$previous$ === void 0 ? void 0 : _navigation$previous$.name), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontWeight: "bold"
  }, navigation === null || navigation === void 0 ? void 0 : navigation.previous.name)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
    p: "2",
    bg: "white",
    rounded: "full",
    w: "42px",
    h: "42px",
    shadow: "0 0 10px rgba(0,0,0,0.1)",
    fontSize: "x-large",
    color: "blue.500"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: getContentIcon(navigation === null || navigation === void 0 ? void 0 : (_navigation$previous2 = navigation.previous) === null || _navigation$previous2 === void 0 ? void 0 : _navigation$previous2.type, navigation === null || navigation === void 0 ? void 0 : (_navigation$previous3 = navigation.previous) === null || _navigation$previous3 === void 0 ? void 0 : _navigation$previous3.video)
  }))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* Link */.rU,
    to: getNavigationRoute(navigation === null || navigation === void 0 ? void 0 : (_navigation$previous4 = navigation.previous) === null || _navigation$previous4 === void 0 ? void 0 : _navigation$previous4.id, navigation === null || navigation === void 0 ? void 0 : (_navigation$previous5 = navigation.previous) === null || _navigation$previous5 === void 0 ? void 0 : _navigation$previous5.type, courseId),
    position: "fixed",
    transition: "all 0.35s ease-in-out",
    top: "50%",
    transform: "translateY(-50%)",
    left: isSidebarOpened ? '300px' : 0,
    cursor: "pointer",
    color: "gray.200",
    onMouseEnter: onPrevOpen,
    onMouseLeave: onPrevClose,
    _hover: {
      color: 'blue.500'
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiChevronLeft */.gbs,
    fontSize: ['3rem', null, '5rem']
  }))), (navigation === null || navigation === void 0 ? void 0 : navigation.next) && /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    shadow: "box",
    position: "fixed",
    p: "6",
    pr: "80px",
    top: "50vh",
    zIndex: "99",
    right: "0",
    transition: "all 0.35s ease-in-out",
    transform: isNextOpen ? 'translate(0, -50%)' : 'translate(100%, -50%)',
    rounded: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, {
    spacing: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "2",
    align: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
    p: "2",
    bg: "white",
    rounded: "full",
    w: "42px",
    h: "42px",
    shadow: "0 0 10px rgba(0,0,0,0.1)",
    fontSize: "x-large",
    color: "blue.500"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: getContentIcon(navigation === null || navigation === void 0 ? void 0 : (_navigation$next = navigation.next) === null || _navigation$next === void 0 ? void 0 : _navigation$next.type, navigation === null || navigation === void 0 ? void 0 : (_navigation$next2 = navigation.next) === null || _navigation$next2 === void 0 ? void 0 : _navigation$next2.video)
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "0"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "xs",
    color: "gray.400"
  }, navigation === null || navigation === void 0 ? void 0 : (_navigation$next3 = navigation.next) === null || _navigation$next3 === void 0 ? void 0 : (_navigation$next3$par = _navigation$next3.parent) === null || _navigation$next3$par === void 0 ? void 0 : _navigation$next3$par.name), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontWeight: "bold"
  }, navigation === null || navigation === void 0 ? void 0 : (_navigation$next4 = navigation.next) === null || _navigation$next4 === void 0 ? void 0 : _navigation$next4.name))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* Link */.rU,
    to: getNavigationRoute(navigation === null || navigation === void 0 ? void 0 : (_navigation$next5 = navigation.next) === null || _navigation$next5 === void 0 ? void 0 : _navigation$next5.id, navigation === null || navigation === void 0 ? void 0 : (_navigation$next6 = navigation.next) === null || _navigation$next6 === void 0 ? void 0 : _navigation$next6.type, courseId),
    position: "fixed",
    top: "50%",
    transform: "translateY(-50%)",
    right: "0",
    cursor: "pointer",
    zIndex: "999",
    color: "gray.200",
    onMouseEnter: onNextOpen,
    onMouseLeave: onNextClose,
    _hover: {
      color: 'blue.500'
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiChevronRight */.lU2,
    fontSize: ['3rem', null, '5rem']
  }))));
};

/* harmony default export */ const components_FloatingNavigation = (FloatingNavigation);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/transition/dist/chakra-ui-transition.esm.js
var chakra_ui_transition_esm = __webpack_require__(7496);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/popover/dist/chakra-ui-popover.esm.js
var chakra_ui_popover_esm = __webpack_require__(2095);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/progress/dist/chakra-ui-progress.esm.js
var chakra_ui_progress_esm = __webpack_require__(8152);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js
var chakra_ui_alert_esm = __webpack_require__(6886);
;// CONCATENATED MODULE: ./assets/js/interactive/utils/global.ts
var global_localized = window._MASTERIYO_;
/* harmony default export */ const utils_global = (global_localized);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/menu/dist/chakra-ui-menu.esm.js
var chakra_ui_menu_esm = __webpack_require__(7989);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/avatar/dist/chakra-ui-avatar.esm.js
var chakra_ui_avatar_esm = __webpack_require__(7657);
;// CONCATENATED MODULE: ./assets/js/interactive/components/AvatarMenu.tsx






var AvatarMenu = function AvatarMenu() {
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
    placement: "bottom-end"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_avatar_esm/* Avatar */.qE, {
    src: utils_global.userAvatar,
    size: "sm"
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, {
    fontSize: "sm",
    textAlign: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    color: "gray.500",
    href: utils_global.urls.account,
    isExternal: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiUserCircle */.ePx, {
      size: 22
    })
  }, (0,external_wp_i18n_namespaceObject.__)('My Profile', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuDivider */.R, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    color: "gray.500",
    href: utils_global.urls.logout,
    isExternal: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiLogOut */.XqV, {
      size: 22
    })
  }, (0,external_wp_i18n_namespaceObject.__)('Log Out', 'masteriyo')))));
};

/* harmony default export */ const components_AvatarMenu = (AvatarMenu);
;// CONCATENATED MODULE: ./assets/js/interactive/components/Header.tsx









var Header = function Header(props) {
  var summary = props.summary,
      isOpen = props.isOpen,
      onToggle = props.onToggle;

  var _useDisclosure = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)(),
      onProgressOpen = _useDisclosure.onOpen,
      onProgressClose = _useDisclosure.onClose,
      isProgressOpen = _useDisclosure.isOpen;

  var lessonProgress = summary.lesson.completed === 0 && summary.lesson.pending === 0 ? 0 : Math.round(summary.lesson.completed / (summary.lesson.pending + summary.lesson.completed) * 100);
  var quizProgress = summary.quiz.completed === 0 && summary.quiz.pending === 0 ? 0 : Math.round(summary.quiz.completed / (summary.quiz.pending + summary.quiz.completed) * 100);
  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "header",
    h: "84px"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Slide */.Mi, {
    direction: "top",
    "in": isOpen,
    style: {
      zIndex: 999
    },
    className: "masteriyo-interactive-header"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    position: "relative",
    shadow: "box",
    bg: "white"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
    onClick: onToggle,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiChevronDown */.OrA, {
      style: {
        transform: isOpen ? 'rotate(180deg)' : 'none'
      }
    }),
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('Toggle Header', 'masteriyo'),
    variant: "unstyled",
    color: "gray.400",
    sx: {
      w: '40px',
      h: '26px',
      backgroundImage: "url(".concat(polygon, ")"),
      position: 'absolute',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      d: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      right: '80px',
      bottom: '-20px',
      fontSize: '2xl',
      minW: 'auto',
      lineHeight: '0'
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "12",
    align: "center",
    py: "4",
    justifyContent: "space-between"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    w: "165px"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    href: utils_global.urls.home
  }, '' != utils_global.logo ? /*#__PURE__*/external_React_default().createElement(chakra_ui_image_esm/* Image */.Ee, {
    src: utils_global.logo[0],
    height: "36px"
  }) : /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    textAlign: "center"
  }, utils_global.siteTitle))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "6",
    align: "center",
    flex: "1",
    justify: "space-between"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "2",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    justify: "space-between",
    align: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    fontSize: "lg"
  }, summary.total.completed === 0 && summary.total.pending === 0 ? 0 : Math.round(summary.total.completed / (summary.total.pending + summary.total.completed) * 100)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "xs"
  }, "%")), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "10px",
    textTransform: "uppercase",
    color: "gray.600",
    fontWeight: "bold"
  }, (0,external_wp_i18n_namespaceObject.__)('Complete', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(common_MobileHidden, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    fontSize: "xs",
    fontWeight: "medium",
    color: "gray.600"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, summary.total.pending, "/", summary.total.completed + summary.total.pending, (0,external_wp_i18n_namespaceObject.__)(' Left', 'masteriyo'), " |", ' '), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, summary.lesson.pending, ' ', (0,external_wp_i18n_namespaceObject.__)('lessons left', 'masteriyo'), " |", ' '), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, summary.quiz.pending, ' ', (0,external_wp_i18n_namespaceObject.__)('quiz left', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_popover_esm/* Popover */.J2, {
    isOpen: isProgressOpen,
    onClose: onProgressClose,
    onOpen: onProgressOpen
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_popover_esm/* PopoverTrigger */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
    py: "0",
    minW: "0",
    variant: "link",
    minH: "auto",
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiInfoCircle */.Fs0, null),
    "aria-label": "open progress"
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_popover_esm/* PopoverContent */.yk, {
    p: "6",
    w: "240px"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_popover_esm/* PopoverArrow */.QH, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    borderBottom: "1px",
    borderColor: "gray.100",
    pb: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_progress_esm/* CircularProgress */.D8, {
    value: lessonProgress,
    size: "54px",
    capIsRound: true,
    trackColor: "blue.100",
    color: "blue.500"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_progress_esm/* CircularProgressLabel */.ip, {
    fontWeight: "bold"
  }, lessonProgress + (0,external_wp_i18n_namespaceObject.__)('%', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    textTransform: "uppercase",
    fontSize: "x-small",
    color: "gray.500",
    fontWeight: "bold"
  }, (0,external_wp_i18n_namespaceObject.__)('Lesson', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "x-small",
    fontWeight: "bold",
    color: "blue.500"
  }, summary.lesson.completed, (0,external_wp_i18n_namespaceObject.__)(' Completed', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "x-small",
    fontWeight: "bold",
    color: "gray.700"
  }, summary.lesson.pending, (0,external_wp_i18n_namespaceObject.__)(' Left', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    pt: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_progress_esm/* CircularProgress */.D8, {
    value: quizProgress,
    size: "54px",
    capIsRound: true,
    trackColor: "gray.100",
    color: "blue.500"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_progress_esm/* CircularProgressLabel */.ip, {
    fontWeight: "bold"
  }, quizProgress + (0,external_wp_i18n_namespaceObject.__)('%', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    textTransform: "uppercase",
    fontSize: "x-small",
    color: "gray.500",
    fontWeight: "bold"
  }, (0,external_wp_i18n_namespaceObject.__)('Quiz', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "x-small",
    fontWeight: "bold",
    color: "blue.500"
  }, summary.quiz.completed, (0,external_wp_i18n_namespaceObject.__)(' Completed', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "x-small",
    fontWeight: "bold",
    color: "gray.700"
  }, summary.quiz.pending, (0,external_wp_i18n_namespaceObject.__)(' Left', 'masteriyo'))))))))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_progress_esm/* Progress */.Ex, {
    value: summary.total.completed,
    size: "xs",
    rounded: "full",
    max: summary.total.completed + summary.total.pending
  }))), utils_global.isUserLoggedIn ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "3",
    align: "center",
    color: "gray.400"
  }, /*#__PURE__*/external_React_default().createElement(components_AvatarMenu, null)) : null))))), summary.total.completed === summary.total.pending + summary.total.completed && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    centerContent: true,
    maxW: "container.xl"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* Alert */.bZ, {
    status: "success",
    variant: "top-accent",
    fontSize: "sm",
    mt: "4",
    mb: "-1.5"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    align: "center",
    justify: "space-between",
    w: "full"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertIcon */.zM, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertTitle */.Cd, {
    mr: 2
  }, (0,external_wp_i18n_namespaceObject.__)('Congratulations!', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertDescription */.X, null, (0,external_wp_i18n_namespaceObject.__)('You have successfully completed this course.', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    href: utils_global.urls.courses
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    size: "sm"
  }, (0,external_wp_i18n_namespaceObject.__)('Back to Course', 'masteriyo')))))));
};

/* harmony default export */ const components_Header = (Header);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js
var slicedToArray = __webpack_require__(3324);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/accordion/dist/chakra-ui-accordion.esm.js
var chakra_ui_accordion_esm = __webpack_require__(4090);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/form-control/dist/chakra-ui-form-control.esm.js
var chakra_ui_form_control_esm = __webpack_require__(9762);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js
var chakra_ui_input_esm = __webpack_require__(4612);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.js
var dist_index_esm = __webpack_require__(2283);
// EXTERNAL MODULE: ./node_modules/use-ontype/build/index.es.js
var index_es = __webpack_require__(4008);
// EXTERNAL MODULE: ./node_modules/timeago-react/esm/timeago-react.js + 6 modules
var timeago_react = __webpack_require__(2837);
;// CONCATENATED MODULE: ./assets/js/interactive/components/qa/Message.tsx





var Message = function Message(props) {
  var message = props.message,
      avatar = props.avatar,
      name = props.name,
      time = props.time,
      sender = props.sender,
      byCurrentUser = props.byCurrentUser;
  var bubbleStyle = byCurrentUser ? {
    borderBottomRightRadius: 'lg',
    borderBottomLeftRadius: 'lg',
    borderTopLeftRadius: 'lg',
    bg: 'blue.400',
    color: 'white'
  } : {
    borderBottomRightRadius: 'lg',
    borderBottomLeftRadius: 'lg',
    borderTopRightRadius: 'lg',
    bg: 'gray.100'
  };
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: byCurrentUser ? 'row-reverse' : 'row',
    spacing: "2",
    justify: "space-between"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_avatar_esm/* Avatar */.qE, {
    size: "sm",
    src: avatar
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "2",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "1",
    align: "center",
    justify: "space-between"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    align: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "sm",
    fontWeight: "medium"
  }, name), /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: sender === 'instructor' ? index_esm/* BiBadgeCheck */.HsQ : index_esm/* BiUser */.EDj,
    color: sender === 'instructor' ? 'blue.400' : 'pink.400'
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "x-small",
    color: "gray.400"
  }, /*#__PURE__*/external_React_default().createElement(timeago_react/* default */.Z, {
    datetime: "".concat(time, " UTC"),
    live: false
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    fontSize: "xs",
    p: "4",
    py: "3",
    sx: bubbleStyle
  }, message)));
};

/* harmony default export */ const qa_Message = (Message);
;// CONCATENATED MODULE: ./assets/js/interactive/components/qa/QaChat.tsx











/*
TODO: implement infinite scroll on chat
*/

var QaChat = function QaChat(props) {
  var isOpen = props.isOpen,
      onBackPress = props.onBackPress,
      chatData = props.chatData;

  var _useParams = (0,react_router/* useParams */.UO)(),
      courseId = _useParams.courseId;

  var queryClient = (0,es.useQueryClient)();

  var _useForm = (0,dist_index_esm/* useForm */.cI)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      reset = _useForm.reset;

  var qaAPI = new api(constants_urls.qa);
  var chatQuery = (0,es.useQuery)(["chat".concat(chatData.parentId), chatData.parentId], function () {
    return qaAPI.list({
      course_id: courseId,
      parent: chatData.parentId,
      per_page: -1
    });
  }, {
    refetchInterval: 60000
  });
  var addNewChat = (0,es.useMutation)(function (data) {
    return qaAPI.store(data);
  }, {
    onSuccess: function onSuccess() {
      reset({});
      queryClient.invalidateQueries("chat".concat(chatData.parentId));
    }
  });

  var onSubmit = function onSubmit(data) {
    addNewChat.mutate({
      content: data.content,
      course_id: courseId,
      parent: chatData.parentId
    });
  };

  if (chatQuery.isSuccess) {
    var _chatQuery$data;

    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      flex: "0 0 100%",
      direction: "column",
      spacing: "8",
      justify: "space-between",
      h: "full",
      transition: "all 0.35s",
      transform: "translateX(".concat(isOpen ? '-100%' : '0', ")")
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8",
      overflowY: "hidden"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "header"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, {
      px: "4",
      py: "2"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        fontSize: "xl",
        as: index_esm/* BiChevronLeft */.gbs
      }),
      variant: "link",
      onClick: onBackPress
    }, (0,external_wp_i18n_namespaceObject.__)('Back', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      p: "4",
      bg: "gray.50",
      spacing: "1"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
      fontWeight: "bold"
    }, chatData.name), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
      fontSize: "x-small",
      color: "gray.400"
    }, (0,external_wp_i18n_namespaceObject.sprintf)((0,external_wp_i18n_namespaceObject._nx)('%d Answer', '%d Answers', chatData.answerCount, 'number of answers', 'masteriyo'), chatData.answerCount)))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column-reverse",
      spacing: "4",
      px: "4",
      overflowY: "auto"
    }, chatQuery === null || chatQuery === void 0 ? void 0 : (_chatQuery$data = chatQuery.data) === null || _chatQuery$data === void 0 ? void 0 : _chatQuery$data.data.map(function (chat) {
      return /*#__PURE__*/external_React_default().createElement(qa_Message, {
        key: chat === null || chat === void 0 ? void 0 : chat.id,
        name: chat === null || chat === void 0 ? void 0 : chat.user_name,
        avatar: chat === null || chat === void 0 ? void 0 : chat.user_avatar,
        message: chat === null || chat === void 0 ? void 0 : chat.content,
        sender: chat === null || chat === void 0 ? void 0 : chat.sender,
        time: chat === null || chat === void 0 ? void 0 : chat.created_at,
        byCurrentUser: chat === null || chat === void 0 ? void 0 : chat.by_current_user
      });
    }))), /*#__PURE__*/external_React_default().createElement("form", {
      onSubmit: handleSubmit(onSubmit)
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "3",
      w: "full",
      px: "4",
      pb: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "text",
      fontSize: "xs"
    }, register('content', {
      required: true
    }), {
      disabled: addNewChat.isLoading
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      colorScheme: "blue",
      type: "submit",
      isFullWidth: true,
      isLoading: addNewChat.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Send', 'masteriyo')))));
  }

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
    h: "full"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_spinner_esm/* Spinner */.$, {
    size: "lg",
    color: "blue.500",
    emptyColor: "gray.200",
    thickness: "3px"
  }));
};

/* harmony default export */ const qa_QaChat = (QaChat);
;// CONCATENATED MODULE: ./assets/js/interactive/components/qa/QuestionList.tsx














/*
TODO: implement infinite scroll on question list
*/

var QuestionList = function QuestionList() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      courseId = _useParams.courseId;

  var _useState = (0,external_React_.useState)(),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      searchQuery = _useState2[0],
      setSearchQuery = _useState2[1];

  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var queryClient = (0,es.useQueryClient)();

  var _useState3 = (0,external_React_.useState)(null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      chatData = _useState4[0],
      setChatData = _useState4[1];

  var _useForm = (0,dist_index_esm/* useForm */.cI)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      reset = _useForm.reset,
      errors = _useForm.formState.errors;

  var qaAPI = new api(constants_urls.qa);

  var _useDisclosure = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)({
    defaultIsOpen: true
  }),
      isListOpen = _useDisclosure.isOpen,
      onListToggle = _useDisclosure.onToggle;

  var _useDisclosure2 = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)(),
      isChatOpen = _useDisclosure2.isOpen,
      onChatToggle = _useDisclosure2.onToggle;

  var qaQuery = (0,es.useQuery)(["qa".concat(courseId), courseId, searchQuery], function () {
    return qaAPI.list({
      course_id: courseId,
      parent: 0,
      per_page: -1,
      search: searchQuery
    });
  }, {
    useErrorBoundary: false,
    retry: false,
    retryOnMount: false,
    // keepPreviousData: true,
    refetchInterval: 10000
  });
  var onSearchInput = (0,index_es/* useOnType */.H)({
    onTypeFinish: function onTypeFinish(val) {
      setSearchQuery(val);
    }
  }, 800);
  var addNewQuestion = (0,es.useMutation)(function (data) {
    return qaAPI.store(data);
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Your question has been asked.', 'masteriyo'),
        description: (0,external_wp_i18n_namespaceObject.__)('You will get your answer as soon as possible.', 'masteriyo'),
        status: 'success',
        isClosable: true
      });
      reset({});
      queryClient.invalidateQueries("qa".concat(courseId));
    }
  });

  var onBackPress = function onBackPress() {
    onChatToggle();
    onListToggle();
  };

  var onQuestionPress = function onQuestionPress(id, name, answerCount) {
    setChatData({
      parentId: id,
      name: name,
      answerCount: answerCount
    });
    onChatToggle();
    onListToggle();
  };

  var onSubmit = function onSubmit(data) {
    addNewQuestion.mutate({
      content: data.content,
      course_id: courseId
    });
  };

  if (qaQuery.isSuccess) {
    var _qaQuery$data, _errors$content;

    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "0",
      overflow: "hidden",
      h: "full"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      flex: "0 0 100%",
      direction: "column",
      spacing: "1",
      h: "full",
      transition: "all 0.35s",
      justify: "space-between",
      transform: "translateX(".concat(isListOpen ? '0' : '-100%', ")")
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "0",
      overflow: "hidden"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      p: "4"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* InputGroup */.BZ, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      defaultValue: searchQuery,
      placeholder: (0,external_wp_i18n_namespaceObject.__)('Search a Question', 'masteriyo')
    }, onSearchInput)), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* InputRightElement */.xH, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiSearch */.Goc
    }))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "0",
      flex: "1",
      overflowY: "auto"
    }, qaQuery === null || qaQuery === void 0 ? void 0 : (_qaQuery$data = qaQuery.data) === null || _qaQuery$data === void 0 ? void 0 : _qaQuery$data.data.map(function (question, index) {
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
        key: index,
        _hover: {
          textDecor: 'none',
          bg: 'blue.50',
          color: 'blue.500',
          '.chakra-icon': {
            transform: 'translateX(5px)'
          }
        }
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
        direction: "row",
        align: "center",
        justify: "space-between",
        spacing: "4",
        borderBottom: "1px",
        borderBottomColor: "gray.100",
        px: "4",
        py: "2",
        onClick: function onClick() {
          return onQuestionPress(question === null || question === void 0 ? void 0 : question.id, question === null || question === void 0 ? void 0 : question.content, question === null || question === void 0 ? void 0 : question.answers_count);
        }
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
        direction: "column",
        spacing: "2"
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
        fontSize: "sm"
      }, question.content), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
        fontSize: "x-small",
        color: "gray.500"
      }, (0,external_wp_i18n_namespaceObject.sprintf)((0,external_wp_i18n_namespaceObject._nx)('%d Answer', '%d Answers', question === null || question === void 0 ? void 0 : question.answers_count, 'number of answers', 'masteriyo'), question === null || question === void 0 ? void 0 : question.answers_count))), /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        transition: "all 0.35s ease-in-out",
        as: index_esm/* BiChevronRight */.lU2,
        fontSize: "x-large",
        color: "gray.600"
      })));
    }))), /*#__PURE__*/external_React_default().createElement("form", {
      onSubmit: handleSubmit(onSubmit)
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "3",
      w: "full",
      p: "4",
      pb: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!errors.content
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "text",
      fontSize: "xs",
      placeholder: "What is your question?",
      disabled: addNewQuestion.isLoading
    }, register('content', {
      required: (0,external_wp_i18n_namespaceObject.__)('Please write your message.', 'masteriyo')
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.content) && (errors === null || errors === void 0 ? void 0 : (_errors$content = errors.content) === null || _errors$content === void 0 ? void 0 : _errors$content.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      colorScheme: "blue",
      type: "submit",
      isFullWidth: true,
      isLoading: addNewQuestion.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Ask a Question', 'masteriyo'))))), chatData && /*#__PURE__*/external_React_default().createElement(qa_QaChat, {
      isOpen: isChatOpen,
      onBackPress: onBackPress,
      chatData: chatData
    }));
  }

  if (!utils_global.isUserLoggedIn) {
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* Alert */.bZ, {
      mt: "6",
      status: "warning"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertIcon */.zM, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
      color: "gray.600",
      fontSize: "xs"
    }, (0,external_wp_i18n_namespaceObject.__)('You must be logged in to ask question. You can register from', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
      isExternal: true,
      color: "blue.500",
      href: utils_global.urls.account
    }, (0,external_wp_i18n_namespaceObject.__)(' here.', 'masteriyo'))));
  }

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
    h: "full"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_spinner_esm/* Spinner */.$, {
    size: "lg",
    color: "blue.500",
    emptyColor: "gray.200",
    thickness: "3px"
  }));
};

/* harmony default export */ const qa_QuestionList = (QuestionList);
;// CONCATENATED MODULE: ./assets/js/interactive/components/SidebarItem.tsx






var SidebarItem = function SidebarItem(props) {
  var courseId = props.courseId,
      name = props.name,
      contents = props.contents,
      id = props.id;

  var _useParams = (0,react_router/* useParams */.UO)(),
      lessonId = _useParams.lessonId,
      quizId = _useParams.quizId;

  var centerStyles = {
    width: '23px',
    height: '23px',
    bg: 'white',
    rounded: 'full'
  };

  var getContentIcon = function getContentIcon(itemType, video) {
    if (itemType === 'quiz') {
      return index_esm/* BiTimer */.b3O;
    }

    if (itemType === 'lesson') {
      if (video) {
        return index_esm/* BiPlay */.PHf;
      } else {
        return index_esm/* BiAlignLeft */.YSr;
      }
    }
  };

  var isActive = function isActive(type, id) {
    if (type === 'lesson' && id == lessonId) {
      return true;
    }

    if (type === 'quiz' && id == quizId) {
      return true;
    }

    return false;
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_accordion_esm/* AccordionItem */.Qd, {
    id: id,
    className: id,
    isDisabled: !contents.length,
    _first: {
      borderTop: 0
    }
  }, function (_ref) {
    var isExpanded = _ref.isExpanded;
    return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("h2", null, /*#__PURE__*/external_React_default().createElement(chakra_ui_accordion_esm/* AccordionButton */.KF, {
      _expanded: {
        bg: '#F8FAFF'
      }
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      flex: "1",
      textAlign: "left",
      fontWeight: "medium",
      fontSize: "sm"
    }, name), isExpanded ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
      sx: centerStyles,
      shadow: "md"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiMinus */.pwh
    })) : /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
      sx: centerStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiPlus */.poH
    })))), contents && /*#__PURE__*/external_React_default().createElement(chakra_ui_accordion_esm/* AccordionPanel */.Hk, {
      p: "0",
      bg: "#F8FAFF"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, null, contents.map(function (content, index) {
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
        key: content.item_id,
        sx: isActive(content.item_type, content.item_id) ? {
          bg: 'blue.500',
          color: 'white',
          p: {
            color: 'white'
          },
          svg: {
            fill: 'white'
          }
        } : {},
        borderTop: "1px",
        borderTopColor: "gray.200",
        px: "3",
        py: "3",
        pr: "5"
      }, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
        to: getNavigationRoute(content.item_id, content.item_type, courseId)
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
        direction: "row",
        justify: "space-between",
        align: "center"
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
        direction: "row",
        spacing: "2",
        alignItems: "center"
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        as: getContentIcon(content.item_type, content.video),
        color: "blue.500",
        fontSize: "xl"
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
        color: "gray.300",
        fontSize: "xs",
        fontWeight: "bold"
      }, index + 1), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
        fontSize: "xs"
      }, content.item_title)), content.completed && /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        as: index_esm/* BiCheckCircle */.wRn,
        color: "green.400"
      }))));
    }))));
  });
};

/* harmony default export */ const components_SidebarItem = (SidebarItem);
;// CONCATENATED MODULE: ./assets/js/interactive/components/Sidebar.tsx











var Sidebar = function Sidebar(props) {
  var items = props.items,
      name = props.name,
      onToggle = props.onToggle,
      isOpen = props.isOpen,
      isHeaderOpen = props.isHeaderOpen,
      coursePermalink = props.coursePermalink,
      activeIndex = props.activeIndex;

  var _useParams = (0,react_router/* useParams */.UO)(),
      courseId = _useParams.courseId;

  var _useState = (0,external_React_.useState)(1),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      currentTab = _useState2[0],
      setCurrentTab = _useState2[1];

  var hasAdminBar = document.body.classList.contains('admin-bar');
  var buttonStyles = {
    variant: 'solid',
    shadow: 'none',
    bg: 'gray.50',
    flex: '1',
    border: '1px',
    borderColor: 'gray.100',
    '.chakra-button__icon': {
      fontSize: 'lg'
    },
    _active: {
      borderColor: 'transparent',
      bg: 'white',
      color: 'blue.500'
    }
  };

  var sidebarTop = function sidebarTop() {
    if (isHeaderOpen) {
      if (hasAdminBar) {
        return '98px';
      } else {
        return '66px';
      }
    } else {
      if (hasAdminBar) {
        return '32px';
      } else {
        return '0';
      }
    }
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    pos: "fixed",
    top: sidebarTop(),
    left: "0",
    w: "300px",
    bg: "white",
    zIndex: "99",
    bottom: "0",
    transition: "all 0.35s",
    transform: "translateX(".concat(isOpen ? 0 : '-100%', ")")
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    pos: "relative",
    h: "full"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
    variant: "unstyled",
    color: "white",
    d: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "9px",
    right: "-35px",
    fontSize: "x-large",
    icon: isOpen ? /*#__PURE__*/external_React_default().createElement(index_esm/* BiX */.czh, null) : /*#__PURE__*/external_React_default().createElement(index_esm/* BiMenu */.ib2, null),
    bgSize: "cover",
    minW: "auto",
    w: "36px",
    p: "0",
    h: "60px",
    bgImage: "url(".concat(close_cone, ")"),
    onClick: onToggle,
    "aria-label": "open sidebar"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    justifyContent: "space-between",
    h: "full"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "0",
    flex: "1",
    overflowY: "hidden"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "1",
    px: "4",
    bg: "blue.500",
    minH: "20",
    justify: "center",
    color: "white"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    fontSize: "lg",
    d: "flex",
    alignItems: "center",
    fontWeight: "semibold"
  }, name), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    href: coursePermalink,
    fontSize: "x-small"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, {
    spacing: "1",
    align: "flex-start"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiChevronLeft */.gbs,
    fontSize: "sm"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, (0,external_wp_i18n_namespaceObject.__)('Back to Course', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    p: "0",
    position: "relative",
    overflowX: "hidden",
    flex: "1"
  }, currentTab === 1 && /*#__PURE__*/external_React_default().createElement(chakra_ui_accordion_esm/* Accordion */.UQ, {
    allowToggle: true,
    defaultIndex: activeIndex
  }, items.map(function (item) {
    return /*#__PURE__*/external_React_default().createElement(components_SidebarItem, {
      key: item.item_id,
      courseId: courseId,
      id: item.item_id.toString(),
      name: item.item_title,
      contents: item.contents
    });
  })), currentTab === 2 && /*#__PURE__*/external_React_default().createElement(qa_QuestionList, null))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    p: "0",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, {
    d: "flex",
    flex: "1",
    spacing: "0",
    w: "full"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    leftIcon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiAlignLeft */.YSr, null),
    isActive: currentTab === 1,
    sx: buttonStyles,
    onClick: function onClick() {
      return setCurrentTab(1);
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Lessons', 'masteriyo')), utils_global.qaEnable && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    leftIcon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiInfoCircle */.Fs0, null),
    isActive: currentTab === 2,
    sx: buttonStyles,
    onClick: function onClick() {
      return setCurrentTab(2);
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Questions', 'masteriyo')))))));
};

/* harmony default export */ const components_Sidebar = (Sidebar);
// EXTERNAL MODULE: ./node_modules/react-player/lib/index.js
var lib = __webpack_require__(2004);
;// CONCATENATED MODULE: ./assets/js/interactive/pages/lesson/VideoPlayer.tsx




var VideoPlayer = function VideoPlayer(props) {
  var type = props.type,
      url = props.url;
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    onContextMenu: type === 'self-hosted' ? function (e) {
      return e.preventDefault();
    } : undefined,
    style: {
      position: 'relative',
      paddingTop: '56.25%'
    }
  }, /*#__PURE__*/external_React_default().createElement(lib/* default */.Z, {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    url: url,
    controls: true,
    height: "100%",
    width: "100%",
    allow: "autoplay; fullscreen; picture-in-picture",
    config: {
      file: {
        attributes: {
          controlsList: 'nodownload'
        }
      }
    }
  }));
};

/* harmony default export */ const lesson_VideoPlayer = (VideoPlayer);
;// CONCATENATED MODULE: ./assets/js/interactive/pages/lesson/InteractiveLesson.tsx
















var InteractiveLesson = function InteractiveLesson() {
  var _lessonQuery$data, _lessonQuery$data2;

  var _useParams = (0,react_router/* useParams */.UO)(),
      lessonId = _useParams.lessonId,
      courseId = _useParams.courseId;

  var lessonAPI = new api(constants_urls.lessons);
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var queryClient = (0,es.useQueryClient)();
  var imageAPi = new media();
  var progressAPI = new api(constants_urls.courseProgress);
  var progressItemAPI = new api(constants_urls.courseProgressItem);

  var _useDisclosure = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)({
    defaultIsOpen: true
  }),
      isSidebarOpen = _useDisclosure.isOpen,
      onSidebarToggle = _useDisclosure.onToggle;

  var _useDisclosure2 = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)({
    defaultIsOpen: true
  }),
      isHeaderOpen = _useDisclosure2.isOpen,
      onHeaderToggle = _useDisclosure2.onToggle;

  var courseProgressQuery = (0,es.useQuery)(["courseProgress".concat(courseId), courseId], function () {
    return progressAPI.store({
      course_id: courseId
    });
  });
  var lessonQuery = (0,es.useQuery)(["interactiveLesson".concat(lessonId), lessonId], function () {
    return lessonAPI.get(lessonId);
  });
  var completeQuery = (0,es.useQuery)(["completeQuery".concat(lessonId), lessonId], function () {
    return progressItemAPI.list({
      item_id: lessonId,
      course_id: courseId
    });
  });
  var imageQuery = (0,es.useQuery)(["interactiveLessonimage".concat(lessonQuery === null || lessonQuery === void 0 ? void 0 : (_lessonQuery$data = lessonQuery.data) === null || _lessonQuery$data === void 0 ? void 0 : _lessonQuery$data.featured_image), lessonQuery === null || lessonQuery === void 0 ? void 0 : (_lessonQuery$data2 = lessonQuery.data) === null || _lessonQuery$data2 === void 0 ? void 0 : _lessonQuery$data2.featured_image], function () {
    var _lessonQuery$data3;

    return imageAPi.get((lessonQuery === null || lessonQuery === void 0 ? void 0 : (_lessonQuery$data3 = lessonQuery.data) === null || _lessonQuery$data3 === void 0 ? void 0 : _lessonQuery$data3.featured_image) || 0);
  }, {
    enabled: lessonQuery.isSuccess
  });
  var completeMutation = (0,es.useMutation)(function (data) {
    return progressItemAPI.store(data);
  });

  var onCompletePress = function onCompletePress() {
    completeMutation.mutate({
      course_id: courseId,
      item_id: lessonId,
      item_type: 'lesson',
      completed: true
    }, {
      onSuccess: function onSuccess() {
        queryClient.invalidateQueries("completeQuery".concat(lessonId));
        queryClient.invalidateQueries("courseProgress".concat(courseId));
        toast({
          title: (0,external_wp_i18n_namespaceObject.__)('Mark as Completed', 'masteriyo'),
          description: (0,external_wp_i18n_namespaceObject.__)('Lesson has been marked as completed.', 'masteriyo'),
          isClosable: true,
          status: 'success'
        });
      }
    });
  };

  if (courseProgressQuery.isSuccess && lessonQuery.isSuccess && imageQuery.isSuccess) {
    var _lessonQuery$data4, _lessonQuery$data5, _lessonQuery$data6, _lessonQuery$data7, _lessonQuery$data8, _imageQuery$data, _lessonQuery$data9, _lessonQuery$data10, _lessonQuery$data11, _completeQuery$data;

    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      h: "full",
      overflowX: "hidden",
      pos: "relative"
    }, /*#__PURE__*/external_React_default().createElement(components_Sidebar, {
      isOpen: isSidebarOpen,
      onToggle: onSidebarToggle,
      isHeaderOpen: isHeaderOpen,
      items: courseProgressQuery.data.items,
      name: courseProgressQuery.data.name,
      coursePermalink: courseProgressQuery.data.course_permalink,
      activeIndex: lessonQuery === null || lessonQuery === void 0 ? void 0 : (_lessonQuery$data4 = lessonQuery.data) === null || _lessonQuery$data4 === void 0 ? void 0 : _lessonQuery$data4.parent_menu_order
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      transition: "all 0.35s",
      ml: isSidebarOpen ? '300px' : 0
    }, /*#__PURE__*/external_React_default().createElement(components_Header, {
      summary: courseProgressQuery.data.summary,
      isOpen: isHeaderOpen,
      onToggle: onHeaderToggle
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
      centerContent: true,
      maxW: "container.lg",
      py: "16"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      bg: "white",
      p: ['5', null, '14'],
      shadow: "box",
      w: "full"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      as: "h5"
    }, lessonQuery === null || lessonQuery === void 0 ? void 0 : (_lessonQuery$data5 = lessonQuery.data) === null || _lessonQuery$data5 === void 0 ? void 0 : _lessonQuery$data5.name), lessonQuery !== null && lessonQuery !== void 0 && (_lessonQuery$data6 = lessonQuery.data) !== null && _lessonQuery$data6 !== void 0 && _lessonQuery$data6.video_source_url ? /*#__PURE__*/external_React_default().createElement(lesson_VideoPlayer, {
      type: lessonQuery === null || lessonQuery === void 0 ? void 0 : (_lessonQuery$data7 = lessonQuery.data) === null || _lessonQuery$data7 === void 0 ? void 0 : _lessonQuery$data7.video_source,
      url: lessonQuery === null || lessonQuery === void 0 ? void 0 : (_lessonQuery$data8 = lessonQuery.data) === null || _lessonQuery$data8 === void 0 ? void 0 : _lessonQuery$data8.video_source_url
    }) : null, /*#__PURE__*/external_React_default().createElement(chakra_ui_image_esm/* Image */.Ee, {
      src: imageQuery === null || imageQuery === void 0 ? void 0 : (_imageQuery$data = imageQuery.data) === null || _imageQuery$data === void 0 ? void 0 : _imageQuery$data.source_url,
      srcSet: getSrcSet(imageQuery === null || imageQuery === void 0 ? void 0 : imageQuery.data)
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
      className: "masteriyo-interactive-description",
      dangerouslySetInnerHTML: {
        __html: lessonQuery === null || lessonQuery === void 0 ? void 0 : (_lessonQuery$data9 = lessonQuery.data) === null || _lessonQuery$data9 === void 0 ? void 0 : _lessonQuery$data9.description
      }
    })), /*#__PURE__*/external_React_default().createElement(components_FloatingNavigation, {
      navigation: lessonQuery === null || lessonQuery === void 0 ? void 0 : (_lessonQuery$data10 = lessonQuery.data) === null || _lessonQuery$data10 === void 0 ? void 0 : _lessonQuery$data10.navigation,
      courseId: courseId,
      isSidebarOpened: isSidebarOpen
    })), /*#__PURE__*/external_React_default().createElement(components_ContentNav, {
      navigation: lessonQuery === null || lessonQuery === void 0 ? void 0 : (_lessonQuery$data11 = lessonQuery.data) === null || _lessonQuery$data11 === void 0 ? void 0 : _lessonQuery$data11.navigation,
      courseId: courseId,
      onCompletePress: onCompletePress,
      isButtonLoading: completeMutation.isLoading,
      isButtonDisabled: completeQuery === null || completeQuery === void 0 ? void 0 : (_completeQuery$data = completeQuery.data) === null || _completeQuery$data === void 0 ? void 0 : _completeQuery$data.completed
    }))));
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const lesson_InteractiveLesson = (InteractiveLesson);
// EXTERNAL MODULE: ./node_modules/react-timer-hook/dist/index.js
var dist = __webpack_require__(3751);
;// CONCATENATED MODULE: ./assets/js/interactive/components/FloatingTimer.tsx





var FloatingTimer = function FloatingTimer(props) {
  var duration = props.duration,
      startedOn = props.startedOn,
      onQuizeExpire = props.onQuizeExpire,
      quizeAboutToExpire = props.quizeAboutToExpire;
  var time = new Date(startedOn);
  var formatDate = time.setMinutes(time.getMinutes() + duration);

  var _useTimer = (0,dist.useTimer)({
    expiryTimestamp: formatDate,
    onExpire: function onExpire() {
      onQuizeExpire();
    }
  }),
      hours = _useTimer.hours,
      seconds = _useTimer.seconds,
      minutes = _useTimer.minutes;

  var quizCounterTime = hours * 60 * 60 + minutes * 60 + seconds;
  (0,external_React_.useEffect)(function () {
    if (quizCounterTime <= 30) {
      quizeAboutToExpire(true);
    }
  }, [quizCounterTime, quizeAboutToExpire]);
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
    position: "fixed",
    right: "40px",
    top: "140px",
    w: "110px",
    h: "110px",
    bg: "white",
    shadow: "boxl",
    rounded: "full"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_progress_esm/* CircularProgress */.D8, {
    value: quizCounterTime,
    max: duration * 60,
    capIsRound: true,
    color: quizCounterTime <= 30 ? 'red.500' : 'blue.500',
    size: "140px",
    trackColor: "transparent",
    thickness: "5px"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_progress_esm/* CircularProgressLabel */.ip, {
    fontSize: "lg"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* VStack */.gC, {
    spacing: "0"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "lg",
    fontWeight: "bold",
    color: "gray.700"
  }, hours, ":", minutes, ":", seconds), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "10px",
    color: "gray.500"
  }, (0,external_wp_i18n_namespaceObject.__)('Time Left', 'masteriyo'))))));
};

/* harmony default export */ const components_FloatingTimer = (FloatingTimer);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@ajna/pagination/dist/index.js
var pagination_dist = __webpack_require__(359);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js
var chakra_ui_skeleton_esm = __webpack_require__(4107);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(9583);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/checkbox/dist/chakra-ui-checkbox.esm.js
var chakra_ui_checkbox_esm = __webpack_require__(8133);
;// CONCATENATED MODULE: ./assets/js/interactive/pages/quiz/components/FieldMultipleChoice.tsx




var FieldMultipleChoice = function FieldMultipleChoice(props) {
  var answers = props.answers,
      questionId = props.questionId;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      errors = _useFormContext.formState.errors;

  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: errors[questionId]
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: questionId,
    render: function render(_ref) {
      var _ref$field = _ref.field,
          onChange = _ref$field.onChange,
          value = _ref$field.value;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_checkbox_esm/* CheckboxGroup */.cO, {
        onChange: onChange,
        value: value
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* SimpleGrid */.MI, {
        spacing: "4",
        columns: [1, 2, 3, 4]
      }, answers.map(function (answer, index) {
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
          key: index,
          justify: "space-between",
          align: "center",
          border: "1px",
          borderColor: "gray.100",
          bg: "white",
          rounded: "sm",
          py: "3",
          px: "4",
          shadow: "input"
        }, /*#__PURE__*/external_React_default().createElement(chakra_ui_checkbox_esm/* Checkbox */.XZ, {
          value: answer.name,
          width: "full"
        }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
          fontSize: "sm"
        }, answer.name)));
      })));
    }
  }), errors[questionId] && /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, {
    fontSize: "xs"
  }, errors[questionId].message)));
};

/* harmony default export */ const components_FieldMultipleChoice = (FieldMultipleChoice);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/textarea/dist/chakra-ui-textarea.esm.js
var chakra_ui_textarea_esm = __webpack_require__(3441);
;// CONCATENATED MODULE: ./assets/js/interactive/pages/quiz/components/FieldShortAnswer.tsx




var FieldShortAnswer = function FieldShortAnswer(props) {
  var questionId = props.questionId;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      errors = _useFormContext.formState.errors;

  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: errors[questionId]
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_textarea_esm/* Textarea */.g, register(questionId)), errors[questionId] && /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, {
    fontSize: "xs"
  }, errors[questionId].message)));
};

/* harmony default export */ const components_FieldShortAnswer = (FieldShortAnswer);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/radio/dist/chakra-ui-radio.esm.js
var chakra_ui_radio_esm = __webpack_require__(9680);
;// CONCATENATED MODULE: ./assets/js/interactive/pages/quiz/components/FieldSingleChoice.tsx




var FieldSingleChoice = function FieldSingleChoice(props) {
  var answers = props.answers,
      questionId = props.questionId;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      errors = _useFormContext.formState.errors;

  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: errors[questionId]
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: questionId,
    render: function render(_ref) {
      var field = _ref.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* RadioGroup */.Ee, field, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* SimpleGrid */.MI, {
        spacing: "4",
        columns: [1, 2, 3, 4]
      }, answers.map(function (answer, index) {
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
          key: index,
          justify: "space-between",
          align: "center",
          border: "1px",
          borderColor: "gray.100",
          bg: "white",
          rounded: "sm",
          py: "3",
          px: "4",
          minW: "200px",
          shadow: "input"
        }, /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
          value: answer.name,
          isFullWidth: true
        }, ' ', /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
          fontSize: "sm"
        }, answer.name)));
      })));
    }
  }), errors[questionId] && /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, {
    fontSize: "xs"
  }, errors[questionId].message)));
};

/* harmony default export */ const components_FieldSingleChoice = (FieldSingleChoice);
;// CONCATENATED MODULE: ./assets/js/interactive/pages/quiz/components/FieldTrueFalse.tsx




var FieldTrueFalse = function FieldTrueFalse(props) {
  var answers = props.answers,
      questionId = props.questionId;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      errors = _useFormContext.formState.errors;

  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: errors[questionId]
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: questionId,
    render: function render(_ref) {
      var field = _ref.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* RadioGroup */.Ee, field, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* SimpleGrid */.MI, {
        spacing: "4",
        columns: [1, 2, 3, 4]
      }, answers.map(function (answer, index) {
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
          key: index,
          justify: "space-between",
          align: "center",
          border: "1px",
          borderColor: "gray.100",
          bg: "white",
          rounded: "sm",
          py: "3",
          px: "4",
          minW: "200px",
          shadow: "input"
        }, /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
          value: answer.name,
          isFullWidth: true
        }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
          fontSize: "sm"
        }, answer.name)));
      })));
    }
  }), errors[questionId] && /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, {
    fontSize: "xs"
  }, errors[questionId].message)));
};

/* harmony default export */ const components_FieldTrueFalse = (FieldTrueFalse);
;// CONCATENATED MODULE: ./assets/js/interactive/pages/quiz/components/QuizFields.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















var QuizFields = function QuizFields(props) {
  var quizAboutToExpire = props.quizAboutToExpire,
      quizData = props.quizData;

  var _useParams = (0,react_router/* useParams */.UO)(),
      quizId = _useParams.quizId;

  var questionsAPI = new api(constants_urls.questions); // If individual quiz questions_display_per_page is 0 then set global settings value.

  var perPage = 0 === (quizData === null || quizData === void 0 ? void 0 : quizData.questions_display_per_page) ? quizData === null || quizData === void 0 ? void 0 : quizData.questions_display_per_page_global : quizData === null || quizData === void 0 ? void 0 : quizData.questions_display_per_page;

  var _useState = (0,external_React_.useState)({
    per_page: perPage
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      filterParams = _useState2[0],
      setFilterParams = _useState2[1];

  var questionQuery = (0,es.useQuery)(["interactiveQuestions".concat(quizId), quizId, filterParams], function () {
    return questionsAPI.list(_objectSpread({
      parent: quizId,
      order: 'asc'
    }, filterParams));
  }, {
    enabled: !!quizId
  });

  var _usePagination = (0,pagination_dist/* usePagination */.h0)({
    total: quizData === null || quizData === void 0 ? void 0 : quizData.questions_count,
    limits: {
      outer: 2,
      inner: 2
    },
    initialState: {
      pageSize: perPage,
      isDisabled: false,
      currentPage: 1
    }
  }),
      pages = _usePagination.pages,
      pagesCount = _usePagination.pagesCount,
      currentPage = _usePagination.currentPage,
      setCurrentPage = _usePagination.setCurrentPage,
      pageSize = _usePagination.pageSize;

  var handlePageChange = function handlePageChange(nextPage) {
    setFilterParams({
      page: nextPage,
      per_page: pageSize
    });
    setCurrentPage(nextPage);
  }; // Current page highest value. For e.g if 1 - 10, 10 is highest.


  var currentPageHighest = perPage * currentPage; // Current page lowest value. For e.g if 1 - 10, 1 is lowest.

  var displayCurrentPageLowest = currentPageHighest - perPage + 1; // Setting highest value depending on current page is last page or not.

  var displayCurrentPageHighest = currentPage === pagesCount ? quizData === null || quizData === void 0 ? void 0 : quizData.questions_count : currentPageHighest;

  if (questionQuery.isSuccess) {
    return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "16"
    }, quizAboutToExpire && /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* Alert */.bZ, {
      status: "error",
      fontSize: "sm",
      p: "2.5"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertIcon */.zM, null), (0,external_wp_i18n_namespaceObject.__)('Your quiz time is about to expire!', 'masteriyo')), questionQuery.data.map(function (question) {
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
        direction: "column",
        spacing: "8",
        key: question.id
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
        fontSize: "lg"
      }, question.name), question.type === 'true-false' && /*#__PURE__*/external_React_default().createElement(components_FieldTrueFalse, {
        answers: question.answers,
        questionId: "".concat(question.id.toString())
      }), question.type === 'single-choice' && /*#__PURE__*/external_React_default().createElement(components_FieldSingleChoice, {
        answers: question.answers,
        questionId: "".concat(question.id.toString())
      }), question.type === 'multiple-choice' && /*#__PURE__*/external_React_default().createElement(components_FieldMultipleChoice, {
        answers: question.answers,
        questionId: "".concat(question.id.toString())
      }), question.type === 'short-answer' && /*#__PURE__*/external_React_default().createElement(components_FieldShortAnswer, {
        questionId: "".concat(question.id.toString())
      }));
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      w: "full",
      direction: "row",
      justifyContent: "space-between",
      align: "center",
      fontSize: "sm"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
      color: "gray.500"
    }, (0,external_wp_i18n_namespaceObject.sprintf)(
    /* translators: %1$d: shown results from, %2$d shown results to, %3$d total count */
    (0,external_wp_i18n_namespaceObject.__)('Showing %d - %d out of %d Questions', 'masteriyo'), displayCurrentPageLowest, displayCurrentPageHighest, quizData === null || quizData === void 0 ? void 0 : quizData.questions_count)), /*#__PURE__*/external_React_default().createElement(pagination_dist/* Pagination */.tl, {
      pagesCount: pagesCount,
      currentPage: currentPage,
      onPageChange: handlePageChange
    }, /*#__PURE__*/external_React_default().createElement(pagination_dist/* PaginationContainer */.fS, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "1"
    }, /*#__PURE__*/external_React_default().createElement(pagination_dist/* PaginationPrevious */.dN, {
      size: "sm",
      shadow: "none"
    }, /*#__PURE__*/external_React_default().createElement(fa_index_esm/* FaChevronLeft */.bUI, null)), /*#__PURE__*/external_React_default().createElement(pagination_dist/* PaginationPageGroup */.NV, {
      isInline: true,
      align: "center",
      separator: /*#__PURE__*/external_React_default().createElement(pagination_dist/* PaginationSeparator */.N9, {
        fontSize: "sm",
        w: 7,
        jumpSize: 3
      })
    }, pages.map(function (page) {
      return /*#__PURE__*/external_React_default().createElement(pagination_dist/* PaginationPage */.Vt, {
        shadow: "none",
        h: "8",
        w: "8",
        key: "pagination_page_".concat(page),
        page: page,
        _hover: {
          bg: 'blue.400'
        },
        _current: {
          bg: 'blue.400',
          fontSize: 'sm',
          color: 'white'
        }
      });
    })), /*#__PURE__*/external_React_default().createElement(pagination_dist/* PaginationNext */.$0, {
      size: "sm",
      shadow: "none"
    }, /*#__PURE__*/external_React_default().createElement(fa_index_esm/* FaChevronRight */.Dli, null))))))));
  }

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
    noOfLines: 4
  });
};

/* harmony default export */ const components_QuizFields = (QuizFields);
;// CONCATENATED MODULE: ./assets/js/interactive/pages/quiz/components/QuizStart.tsx






var QuizStart = function QuizStart(props) {
  var quizData = props.quizData,
      onStartPress = props.onStartPress,
      isButtonLoading = props.isButtonLoading,
      isDisabled = props.isDisabled;
  var listItemStyles = {
    d: 'flex',
    alignItems: 'center',
    borderRight: '1px',
    borderRightColor: 'rgba(255, 255, 255, 0.2)',
    px: '3',
    '.chakra-icon': {
      fontSize: 'lg'
    },
    _last: {
      borderRightColor: 'transparent'
    }
  };
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, {
    bg: "blue.500",
    rounded: "sm",
    d: "flex",
    flexDirection: ['column', null, 'row'],
    alignItems: [null, null, 'center'],
    py: "3",
    color: "white",
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    sx: listItemStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: index_esm/* BiTime */.YFw
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    as: "strong"
  }, (0,external_wp_i18n_namespaceObject.__)('Duration: ', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    ml: "1"
  }, (quizData === null || quizData === void 0 ? void 0 : quizData.duration) === 0 ? (0,external_wp_i18n_namespaceObject.__)('No time limit', 'masteriyo') : humanize_duration_default()((quizData === null || quizData === void 0 ? void 0 : quizData.duration) * 60 * 1000))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    sx: listItemStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: index_esm/* BiInfoCircle */.Fs0
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    as: "strong"
  }, (0,external_wp_i18n_namespaceObject.__)('Questions: ', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    ml: "1"
  }, quizData === null || quizData === void 0 ? void 0 : quizData.questions_count)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    sx: listItemStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: index_esm/* BiCheckCircle */.wRn
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    as: "strong"
  }, (0,external_wp_i18n_namespaceObject.__)('Total Points: ', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    ml: "1"
  }, quizData === null || quizData === void 0 ? void 0 : quizData.full_mark)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    sx: listItemStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: index_esm/* BiCheckDouble */.xfT
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    as: "strong"
  }, (0,external_wp_i18n_namespaceObject.__)('Pass Points: ', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    ml: "1"
  }, quizData === null || quizData === void 0 ? void 0 : quizData.pass_mark))), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    onClick: onStartPress,
    isLoading: isButtonLoading,
    isDisabled: isDisabled,
    colorScheme: "blue",
    rounded: "full",
    fontWeight: "bold",
    rightIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiChevronRight */.lU2,
      fontSize: "x-large"
    }),
    textTransform: "uppercase"
  }, (0,external_wp_i18n_namespaceObject.__)('Start Quiz', 'masteriyo'))));
};

/* harmony default export */ const components_QuizStart = (QuizStart);
;// CONCATENATED MODULE: ./assets/js/interactive/pages/quiz/components/ScoreBoard.tsx





var ScoreBoard = function ScoreBoard(props) {
  var scoreData = props.scoreData,
      onStartPress = props.onStartPress,
      isButtonLoading = props.isButtonLoading,
      onCompletePress = props.onCompletePress,
      isButtonDisabled = props.isButtonDisabled,
      isFinishButtonLoading = props.isFinishButtonLoading,
      limitReached = props.limitReached;
  var listStyles = {
    li: {
      fontSize: 'sm',
      borderBottom: '1px',
      py: '2',
      borderColor: 'gray.100'
    }
  };
  var isQuizAnswered = scoreData.total_answered_questions === 0 ? index_esm/* BiXCircle */.FfE : index_esm/* BiCheckCircle */.wRn;
  var checkQuizTotalAnswered = scoreData.total_answered_questions === 0 ? 'red.500' : 'green.500';
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    fontSize: "x-large",
    d: "flex",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: isQuizAnswered,
    fontSize: "xx-large",
    color: checkQuizTotalAnswered,
    mr: "4"
  }), (0,external_wp_i18n_namespaceObject.__)('Your Score', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, {
    sx: listStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    d: "flex",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: index_esm/* BiInfoCircle */.Fs0,
    color: "green.500"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontWeight: "bold",
    flex: "0 0 150px"
  }, (0,external_wp_i18n_namespaceObject.__)('Total Questions: ', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, scoreData.total_questions)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    d: "flex",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: isQuizAnswered,
    color: checkQuizTotalAnswered
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontWeight: "bold",
    flex: "0 0 150px"
  }, (0,external_wp_i18n_namespaceObject.__)('Answered Questions: ', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, scoreData.total_answered_questions)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    d: "flex",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: index_esm/* BiTargetLock */.v8K,
    color: "green.500"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontWeight: "bold",
    flex: "0 0 150px"
  }, (0,external_wp_i18n_namespaceObject.__)('Total Attempts: ', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, scoreData.total_attempts)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    d: "flex",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: index_esm/* BiInfoSquare */.qj6,
    color: "green.500"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontWeight: "bold",
    flex: "0 0 150px"
  }, (0,external_wp_i18n_namespaceObject.__)('Total Points: ', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, scoreData.total_marks)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    d: "flex",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: index_esm/* BiFlag */.K_W,
    color: "green.500"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontWeight: "bold",
    flex: "0 0 150px"
  }, (0,external_wp_i18n_namespaceObject.__)('Earned Points:', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, scoreData.earned_marks))), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "green",
    rounded: "full",
    fontWeight: "bold",
    leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiCheck */.hXj,
      fontSize: "xl"
    }),
    isDisabled: isButtonDisabled,
    isLoading: isFinishButtonLoading,
    onClick: onCompletePress,
    textTransform: "uppercase"
  }, isButtonDisabled ? (0,external_wp_i18n_namespaceObject.__)('Completed', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Complete Quiz', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    onClick: onStartPress,
    colorScheme: "blue",
    isLoading: isButtonLoading,
    isDisabled: limitReached,
    rounded: "full",
    fontWeight: "bold",
    leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiRefresh */.t5J,
      fontSize: "xl"
    }),
    textTransform: "uppercase"
  }, (0,external_wp_i18n_namespaceObject.__)('Start Quiz Again', 'masteriyo'))));
};

/* harmony default export */ const components_ScoreBoard = (ScoreBoard);
;// CONCATENATED MODULE: ./assets/js/interactive/pages/quiz/InteractiveQuiz.tsx




















var InteractiveQuiz = function InteractiveQuiz() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      quizId = _useParams.quizId,
      courseId = _useParams.courseId;

  var quizAPI = new api(constants_urls.quizes);
  var quizAttemptsAPI = new api(constants_urls.quizesAttempts);
  var methods = (0,dist_index_esm/* useForm */.cI)();

  var _useState = (0,external_React_.useState)(null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      scoreBoardData = _useState2[0],
      setScoreBoardData = _useState2[1];

  var _useState3 = (0,external_React_.useState)(null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      quizStartedOn = _useState4[0],
      setQuizStartedOn = _useState4[1];

  var _useState5 = (0,external_React_.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      quizAboutToExpire = _useState6[0],
      setQuizAboutToExpire = _useState6[1];

  var progressItemAPI = new api(constants_urls.courseProgressItem);
  var progressAPI = new api(constants_urls.courseProgress);
  var queryClient = (0,es.useQueryClient)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();

  var _useDisclosure = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)({
    defaultIsOpen: true
  }),
      isSidebarOpen = _useDisclosure.isOpen,
      onSidebarToggle = _useDisclosure.onToggle;

  var _useDisclosure2 = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)({
    defaultIsOpen: true
  }),
      isHeaderOpen = _useDisclosure2.isOpen,
      onHeaderToggle = _useDisclosure2.onToggle;

  var courseProgressQuery = (0,es.useQuery)(["courseProgress".concat(courseId), courseId], function () {
    return progressAPI.store({
      course_id: courseId
    });
  });
  var quizQuery = (0,es.useQuery)(["section".concat(quizId), quizId], function () {
    return quizAPI.get(quizId);
  });
  var quizProgress = (0,es.useQuery)(["attempt".concat(quizId), quizId], function () {
    return quizAttemptsAPI.list({
      quiz_id: quizId,
      per_page: 1
    });
  }, {
    onSuccess: function onSuccess(data) {
      setScoreBoardData(data.data[0]);
    }
  });
  var startQuiz = (0,es.useMutation)(function (quizId) {
    return quizAPI.start(quizId);
  });
  var completeMutation = (0,es.useMutation)(function (data) {
    return progressItemAPI.store(data);
  });
  var checkQuizAnswers = (0,es.useMutation)(function (data) {
    return quizAPI.check(quizId, data);
  });
  var completeQuiz = (0,es.useQuery)(["completeQuery".concat(quizId), quizId], function () {
    return progressItemAPI.list({
      item_id: quizId,
      course_id: courseId
    });
  });

  var onStartPress = function onStartPress() {
    completeMutation.mutate({
      course_id: courseId,
      item_id: quizId,
      item_type: 'quiz',
      completed: false
    }, {
      onSuccess: function onSuccess() {
        completeQuiz.refetch();
        queryClient.invalidateQueries("courseProgress".concat(courseId));
      }
    });
    startQuiz.mutate(quizId, {
      onSuccess: function onSuccess(data) {
        setQuizStartedOn(getLocalTime(data.attempt_started_at));
        setScoreBoardData(null);
      }
    });
    setQuizAboutToExpire(false);
  };

  var onSubmit = function onSubmit(data) {
    checkQuizAnswers.mutate(deepClean(data), {
      onSuccess: function onSuccess(data) {
        queryClient.invalidateQueries("attempt".concat(quizId));
        setQuizStartedOn(null);
        setScoreBoardData(data);
      }
    });
    methods.reset();
  };

  var onCompletePress = function onCompletePress() {
    completeMutation.mutate({
      course_id: courseId,
      item_id: quizId,
      item_type: 'quiz',
      completed: true
    }, {
      onSuccess: function onSuccess() {
        queryClient.invalidateQueries("completeQuery".concat(quizId));
        queryClient.invalidateQueries("courseProgress".concat(courseId));
        toast({
          title: (0,external_wp_i18n_namespaceObject.__)('Mark as Completed', 'masteriyo'),
          description: (0,external_wp_i18n_namespaceObject.__)('Quiz has been marked as completed.', 'masteriyo'),
          isClosable: true,
          status: 'success'
        });
      }
    });
  };

  var onQuizeExpire = function onQuizeExpire() {
    return onSubmit(methods.getValues());
  };

  if (quizQuery.isSuccess && quizProgress.isSuccess && courseProgressQuery.isSuccess) {
    var _quizQuery$data, _quizProgress$data$da, _quizQuery$data2, _quizQuery$data3, _quizQuery$data4, _quizQuery$data5, _quizQuery$data6, _completeQuiz$data, _quizQuery$data7, _quizQuery$data8, _quizQuery$data9, _quizQuery$data10, _quizQuery$data11, _quizQuery$data12;

    var maxLimitReached = (quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data = quizQuery.data) === null || _quizQuery$data === void 0 ? void 0 : _quizQuery$data.attempts_allowed) != 0 && (quizProgress === null || quizProgress === void 0 ? void 0 : (_quizProgress$data$da = quizProgress.data.data[0]) === null || _quizProgress$data$da === void 0 ? void 0 : _quizProgress$data$da.total_attempts) >= (quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data2 = quizQuery.data) === null || _quizQuery$data2 === void 0 ? void 0 : _quizQuery$data2.attempts_allowed);
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      h: "full",
      overflowX: "hidden",
      pos: "relative"
    }, /*#__PURE__*/external_React_default().createElement(components_Sidebar, {
      isOpen: isSidebarOpen,
      onToggle: onSidebarToggle,
      isHeaderOpen: isHeaderOpen,
      items: courseProgressQuery.data.items,
      name: courseProgressQuery.data.name,
      coursePermalink: courseProgressQuery.data.course_permalink,
      activeIndex: quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data3 = quizQuery.data) === null || _quizQuery$data3 === void 0 ? void 0 : _quizQuery$data3.parent_menu_order
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      transition: "all 0.35s",
      ml: isSidebarOpen ? '300px' : 0
    }, /*#__PURE__*/external_React_default().createElement(components_Header, {
      summary: courseProgressQuery.data.summary,
      isOpen: isHeaderOpen,
      onToggle: onHeaderToggle
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
      centerContent: true,
      maxW: "container.xl",
      py: "16"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      bg: "white",
      p: ['5', null, '14'],
      shadow: "box",
      w: "full"
    }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, methods, /*#__PURE__*/external_React_default().createElement("form", {
      onSubmit: methods.handleSubmit(onSubmit)
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      as: "h5"
    }, quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data4 = quizQuery.data) === null || _quizQuery$data4 === void 0 ? void 0 : _quizQuery$data4.name), (quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data5 = quizQuery.data) === null || _quizQuery$data5 === void 0 ? void 0 : _quizQuery$data5.description) && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
      dangerouslySetInnerHTML: {
        __html: quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data6 = quizQuery.data) === null || _quizQuery$data6 === void 0 ? void 0 : _quizQuery$data6.description
      }
    }), maxLimitReached && /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* Alert */.bZ, {
      status: "error",
      fontSize: "sm",
      p: "2.5"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertIcon */.zM, null), (0,external_wp_i18n_namespaceObject.__)('You have reached the maximum limit to start quiz.', 'masteriyo')), quizStartedOn ? /*#__PURE__*/external_React_default().createElement(components_QuizFields, {
      quizAboutToExpire: quizAboutToExpire,
      quizData: quizQuery.data
    }) : scoreBoardData ? /*#__PURE__*/external_React_default().createElement(components_ScoreBoard, {
      scoreData: scoreBoardData,
      onStartPress: onStartPress,
      isButtonLoading: startQuiz.isLoading,
      isFinishButtonLoading: completeMutation.isLoading,
      isButtonDisabled: completeQuiz === null || completeQuiz === void 0 ? void 0 : (_completeQuiz$data = completeQuiz.data) === null || _completeQuiz$data === void 0 ? void 0 : _completeQuiz$data.completed,
      onCompletePress: onCompletePress,
      limitReached: maxLimitReached
    }) : /*#__PURE__*/external_React_default().createElement(components_QuizStart, {
      quizData: quizQuery.data,
      onStartPress: onStartPress,
      isDisabled: maxLimitReached,
      isButtonLoading: startQuiz.isLoading
    }))))), /*#__PURE__*/external_React_default().createElement(components_FloatingNavigation, {
      navigation: quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data7 = quizQuery.data) === null || _quizQuery$data7 === void 0 ? void 0 : _quizQuery$data7.navigation,
      courseId: quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data8 = quizQuery.data) === null || _quizQuery$data8 === void 0 ? void 0 : _quizQuery$data8.course_id,
      isSidebarOpened: isSidebarOpen
    }), quizStartedOn && quizQuery.data.duration !== 0 && /*#__PURE__*/external_React_default().createElement(components_FloatingTimer, {
      startedOn: quizStartedOn,
      duration: quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data9 = quizQuery.data) === null || _quizQuery$data9 === void 0 ? void 0 : _quizQuery$data9.duration,
      quizId: quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data10 = quizQuery.data) === null || _quizQuery$data10 === void 0 ? void 0 : _quizQuery$data10.id,
      onQuizeExpire: onQuizeExpire,
      quizeAboutToExpire: setQuizAboutToExpire
    }), /*#__PURE__*/external_React_default().createElement(components_ContentNav, {
      type: "quiz",
      onCompletePress: methods.handleSubmit(onSubmit),
      navigation: quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data11 = quizQuery.data) === null || _quizQuery$data11 === void 0 ? void 0 : _quizQuery$data11.navigation,
      courseId: quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data12 = quizQuery.data) === null || _quizQuery$data12 === void 0 ? void 0 : _quizQuery$data12.course_id,
      isButtonDisabled: scoreBoardData,
      isButtonLoading: checkQuizAnswers.isLoading,
      quizStarted: quizStartedOn
    }))));
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const quiz_InteractiveQuiz = (InteractiveQuiz);
;// CONCATENATED MODULE: ./assets/js/interactive/pages/index.ts




;// CONCATENATED MODULE: ./assets/js/interactive/router/Router.tsx





var Router = function Router() {
  return /*#__PURE__*/external_React_default().createElement(react_router_dom/* HashRouter */.UT, null, /*#__PURE__*/external_React_default().createElement(react_router/* Switch */.rs, null, /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.course,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(course_InteractiveCourse, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.lesson,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(lesson_InteractiveLesson, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.quiz,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(quiz_InteractiveQuiz, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, null, /*#__PURE__*/external_React_default().createElement(not_found_FourOFour, null))));
};

/* harmony default export */ const router_Router = (Router);
;// CONCATENATED MODULE: ./assets/js/interactive/App.tsx









var App = function App() {
  var queryClient = new es.QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        useErrorBoundary: isProduction
      }
    }
  });
  return /*#__PURE__*/external_React_default().createElement(errors_ErrorBoundary, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_react_esm.ChakraProvider, {
    theme: theme_theme
  }, /*#__PURE__*/external_React_default().createElement(es.QueryClientProvider, {
    client: queryClient
  }, /*#__PURE__*/external_React_default().createElement(devtools.ReactQueryDevtools, {
    initialIsOpen: false
  }), /*#__PURE__*/external_React_default().createElement(router_Router, null))));
};

/* harmony default export */ const interactive_App = (App);
;// CONCATENATED MODULE: ./assets/js/interactive/index.tsx




var appRoot = document.getElementById('masteriyo-interactive-course');

if (appRoot) {
  external_ReactDOM_default().render( /*#__PURE__*/external_React_default().createElement(interactive_App, null), appRoot);
}

/***/ }),

/***/ 9196:
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ 1850:
/***/ ((module) => {

module.exports = window["ReactDOM"];

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 674;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			674: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklearning_management_system"] = self["webpackChunklearning_management_system"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [697], () => (__webpack_require__(1459)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;