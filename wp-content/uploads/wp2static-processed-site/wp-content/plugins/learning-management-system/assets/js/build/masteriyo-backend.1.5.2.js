/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 5783:
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js
var slicedToArray = __webpack_require__(3324);
;// CONCATENATED MODULE: ./assets/js/back-end/context/CreateCatProvider.tsx


var CreateCatModal = /*#__PURE__*/(0,external_React_.createContext)({
  isCreateCatModalOpen: false
});

var CreateCatModalProvicer = function CreateCatModalProvicer(_ref) {
  var children = _ref.children;

  var _useState = (0,external_React_.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isCreateCatModalOpen = _useState2[0],
      setIsCreateCatModalOpen = _useState2[1];

  var providerValue = (0,external_React_.useMemo)(function () {
    return {
      isCreateCatModalOpen: isCreateCatModalOpen,
      setIsCreateCatModalOpen: setIsCreateCatModalOpen
    };
  }, [isCreateCatModalOpen, setIsCreateCatModalOpen]);
  return /*#__PURE__*/external_React_default().createElement(CreateCatModal.Provider, {
    value: providerValue
  }, children);
};

/* harmony default export */ const CreateCatProvider = (CreateCatModalProvicer);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./assets/js/back-end/context/MasteriyoProvider.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var ACTIONS = {
  SHOW_CATEGORY: 'showCategory',
  SET_COURSE_PUBLISHED: 'isCoursePublished'
};

var Reducer = function Reducer(prevState, action) {
  switch (action.type) {
    case ACTIONS.SHOW_CATEGORY:
      return _objectSpread(_objectSpread({}, prevState), {}, {
        showCatPopup: action.payload
      });

    case ACTIONS.SET_COURSE_PUBLISHED:
      return _objectSpread(_objectSpread({}, prevState), {}, {
        isCoursePublished: action.payload
      });

    default:
      return prevState;
  }
};

var initialState = {
  showCatPopup: false,
  isCoursePublished: false
};
var MasteriyoContext = /*#__PURE__*/(0,external_React_.createContext)(initialState);

var MasteriyoProvider = function MasteriyoProvider(_ref) {
  var children = _ref.children;

  var _useReducer = (0,external_React_.useReducer)(Reducer, initialState),
      _useReducer2 = (0,slicedToArray/* default */.Z)(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var providerValue = (0,external_React_.useMemo)(function () {
    return [state, dispatch];
  }, [state]);
  return /*#__PURE__*/external_React_default().createElement(MasteriyoContext.Provider, {
    value: providerValue
  }, children);
};

var useOptions = function useOptions() {
  return useContext(MasteriyoContext);
};
/* harmony default export */ const context_MasteriyoProvider = (MasteriyoProvider);
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
/* harmony default export */ const _404 = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACyCAMAAADRVGVaAAACRlBMVEUAAAD///8AAAD///8AAACAgIAAAABVVVUAAABAQEAzMzPx8fHX19fk5OTZ2dnw8PD39/fp6enw8PD19fX6+vr39/f09PT8/Pz6+vr6+vr9/f37+/v7+/v9/f37+/v9/f39/f3////8/Pz9/f3////+/v7////+/v7+/v7////+/v7///////8HCS8SFDgSSLAXGDwXGTwYTrUZTrUaRJkeIEEeIEIeU7ofU7ofVLogU7UmJ0kmKEkoWLIpK0opK0sqLEorX8QsW7YsX8MvXrowX7o1N1Q1N1Y2N1Y4a80+cdM/a79AQlxFRmNFR2NFd9dGbrxJcsBLfdxMTmVMTmZNdcRUVXBXWW5YWm9YiOZejutkZX1klPBnaXxrmvVyoPpzdIp2eYl4pv96mNJ/gI6Aq/+ArP+ChJKDhJeIpNiIsf+Jsf+Oj5uRk5+Rtv+Rt/+Sk6SSt/+TlKSZm6SZvP+avP+dn6iho6yhwf+iorGio7Giwf+iwv+nuuGqx/+rx/+trrWyusazzP+zzf+1trq4ury4ur66ws+70v+70/+80v+80/++xtLAwcbBwcvBwsbBwsvD2P/ExcfExsrE1//E2P/E2f/IysnMzc/M3f/M3v/N1eLN3f/N3v/P0dPQ0dHQ0dPR0djS2ebS3fDV4//X2djY2dnZ4O7b3dzc3Nzd6f/f4ODf4eDg4OXh6PXi6PXj5OTj5eTl7v/m7//n6Ofn6Ojr7Ovu9P/v7/Lv8O/v8PLw9Prz9PP39/f3+Pf3+f/3+v////8aqcsAAAAALXRSTlMAAAEBAgIDAwQEBRITExQiIiMjMjJCQ2FicXFygYGRkaCgoaGvsLDA0N/g4O95RkxgAAAVSklEQVR42u1dj39kV1V/99e7762L7bIsG9E1QA27lqRDwfqLKggVRSmiiECxoKMptVHKauKPuu4Ci5CCYpUGt0CRYuRHyq7ll2kV2M1/5j3fc+59M5t5981kZyb6+eRuNjOZvMx833nnnt/nvKI4WkfraB2to3W0jtakSxeFUbrQqlBaF6oID0oZVWhj6Jda0QFF+FX4r4ym4w9vBUgKqLQJ+FT4rg0whlWY8NTggbDjEKdNwGzkT+eNPZCTEGkinDJ4QkueOIZtcDqOyNscEP4pRqvmR1qFzwX9VMJJTIEfVIJsjBDdMN3x3wj+AqdU4ELMnr641poxgZRCZb76hfAHoeUD6dHFoxW/ZsA7+GttZkpg/twi0dZE4OHBMSb6PV0HwxxemIZljDGR+PxXDmel1SwJTNdZBZKFD1QDWMIPBvwJqitiEzCAnBbJEOYEsFTk6yKdrp7JTlRF0dBV/jFJBQNeckxeB0ZgqgY5EWGBEYpA2/gmmndBeIk4etq4jWlYgR/wIVY2GL1itbOOvpw11ln6Cq9Zi2fWgcvpQhTgloIJj1dwjkpNl8RC3SJecMXALX0aFmDREowE2jn5IRxI3+lYa8Lz8BV5wzB/QLgEDTRVLtbMq0ani0qgrPWMyhmgDP8JppdzAKEZuMVjOAuHP4Ma1A0rQ9ZNjadVYVhW0Ts7AcwgHBAZoXAkdPxdIGaAFl8GYJyDpQ0cHg2R37C8jmJoGtwBYQDrgMUW7TDi2oTQxe8O8EqL8wD1nWCXA03zgol/q22QQE6JZjHToDOfPVMZii2wnTOW9xl9qrfe+ZKelbjiZSBl6Ql5WZa+DD96z/jDQT78JGxiNA63SbQUol9umc6RcUna0rN03YE2YA+oAsAS331YdRkQE1Y6Ex9OJrxGv6BD6DgnV2SAj1yjw2E73RKlVSSxaLHIAkQgQAj/AAzAAYuWAzggDedR1njR4xclnQNdgcgykI3E8tBBTvbiLXFF1AgBLyBj/9NnAUXNcAIA5ytfe4EGjvB4EALTN1vTqdD5MWTLewJsYqwSjUrS7uCmkqa9JjKYAKedJARNTJFW5QG0qj19hcfwn16uanoZf4Y/CDxtCXmgOBi9MU6VhpdwYGGhBzQrpC8JYp94VxZYwldh1fI/YA0PNX2LKx5shfCB2HRRXGQP6BodjdOD0tiIjUskDu9sQN3Ap86TZPCgXgmkIDCh9XVVH/N4gX8l+IHdE1vXx2o+ARuZCFwdqE6iyLEmPJhSYV9DOZg4YLewzUveb2W43idOLy7deefegdad584uLpwsmdiWdmQUQgGqg746gE5RRhylgNyLYBJW8OXxhVcu793yWl5aOG6F2FD9dDUhoAsjbu6E5jxLd8MWGtgtiFq6lKd+cgp4Zb38pHC4E1PEiaurJ/dWyOoNf9qoZwv29eWps3tTXWdPsSi3bKlE23tybhaZo4SPCS/98ycT4BvbT146v9Y/0FrbuLC5cyO+09IJUUDM0iROiWJqMlEXrWMyiSPksFl+5Cci3k9t9G95bTy5K293pg7yzrPAD+ROIQQ1QeBAFbB+lKY95yCIg8K6/Rx/ws4U8ArqHX7Hn76NNgkZVkEyueSk6Qm4ooghFHaIWIguLE8ZMHhkm6XHy0TvszNm4OPqYhLFTQKjsd2Ji0tmit2pAqZ1idnjDMvoIOqS9lYT0JnlsYsWEETbGbzx1mp/6mvti4yZTT1xHZOVPoGwYEUN94LsHND4xuX+TNbHImb4NNCCMQQyrrQootMMziB7lxGf789ond8V3gjsDEIJd6jx9QnzBVlCcIrKHwMbr/VnttaAeQFyg7c8hyD0uK4I+dQw3MjdCW9yYnnGiANm0izLJzyEhoEnPr7WTr4prCEYLTDYzvdnus4T5nPHYdWRjZAiU+MYyRLfYx8v7L0KwuJyf8brY1HUScxAgqpj8IaOMiM5eC+m93qqP/O1RZ9z0orqhpMCKdcVrFOFSQJOw5ovl2bOyLweoi14towWf8oRdDjcHKhWhePYDimkU3TyF/tzWBv0SafIAUcwMjmeXSFOdnMNLDhXh+1H5uZ2fy6LjKSzdRl8S4fwTIxbjhOq5ygLpMVJOvW1+UAWMovfTYxhCv7eilYpvhYKdjJpEevvIOOt358fmReDu8bmWBIZGd81HhNo7GF01v44nfjGvCATmZePk6kRMXPksh2yQuLGxPAxbd4FEhf9uS3SJ6fF40aIoCPNpgbSeRHzT4X3+Of5Qd4kr5sEFWKswTiCbnPtGYmUvQkK05Ez4uvlefKFcEZdgi3JD2RALpd2EkJT8BRxFpIX1/v9+XLGbcEJpMgfBTUKiZWrTPo06moHzKfnKS9obcMGhc4mo7kjl4lcHlgHWQXEJxfDO2zOE/KWiDlYoRR3liCuadt9zM2s+YjIFam+C/kPeeTy1vbOzlOb69mjVtcvP7W9s7118dEO5zV84KtqCoQ2co6T+C1sIT4iAmTkVlfnOnbf6uO7KVR14/OtSnJ9K8WG9nYv5nTphygwysEj7EFJe6uMTSQZSK0RHipfndfWl28MB9hGg159evio3YyRtUaQa4SfXbSakcNry+Ugx8cCkRySqqJPaH/7nX1BwVFhjvXdfYfttJOBfl1TXgVEpmBKxtVWIpY5C8Bx+Rzktd1Rkcx9FLw46qh2+xuQK/ZbNXuAmQwmVVlwas+ZkjFnII9GvA/zxdFHtWKmX1YICyP/HQtUVLvyK4yE7INJlIf87ZaA8fVH93nOo9a3M5ChR8roTWUEsxJLj64GZ8lykDdbg9xDYHZbD3s8Q+WKvKnGAi3aijU4RcH5SM5hlGUr5LVMYP7xYTHbdjVWs5A5BsP1VcbpTDCukKh92bH9ns5Avj4OkdvIjO2HNCzyxDprGGkpHIyZ2izkG7n8x8YYRG4jM6hcIwbqYu6kaLWYucDQSMYsy8sXsimbpwaNnDHObBRjcJo4GUY5xlAIE+ng5ZZ12Qp5K4vl+ljXYrTrAMjeO8ZsTTbMJUV3zBiQjO1U3slnxkToPpQ/artVyNU+GJNeJ7+kNcolfhQX04QNUPlWyLt5MCKa1/NH7WYYQ6pNmDNaMRsx5cS8JzLXB4S8cauQ68jMTQlhe8WISVLO11V1OJApDRjoTLsqFuWZdmeVIwKOI4hjQL76B/eu3P2+q6Mhfyi98MT9d6/82sM3HfadTioj1Wq4+LxV/UF2S4FERi5H6fXM3StYfzMMZvWm7fcwH3XvMOaddshVySEjLixvD8vFmk6pfPNV3crLYmFcFcQrK58ZST65GH8ej7r3+cHDNnNCTiyMWCeUCeGrGCqyWYW9wR/6vohl5f6RqkTE973psA+PrUpQVQftV7SanlB+bMlR7QWckrpDYTdYVp4fhYXP7InmqN/r2n1DZhHFPxXVhLS5q1IlizLHYH2i/q0VMnNGg2Xl6kgsUDmPrYy8GBfzXonUt8V8eq6Oz8RyESoZa4X8EMj8mpFUvngTAz0xEvJu1pGCxNDOxraDfKgWIs7mFbYYRg0v//oITo6i5b+bM3usi8iRMVCPJhY+5RZUtiwO8S1P1YRZR4q21jMjsAx7dcjZPByPen3DPlv9PGQqs0Q1K1/+TODTCWOw9qtzHjbx6YcFy8OtfiicP7kar3mm0/UbpDIyvDqnr5V0UnA4msyiMhsUeIgu+tX7A5S3fybjOcMTf+z1AfDbGxo/vdoBufSxUtvodrNIxU4GrsJAiWM29NL/FP36+avP52MqHKEZOuzT/X4eMoWYkfUXgdEaE3CNyKC4Z1V1QL45XtRWr3Fp2IrayaXDJY7hvfhz0mKgctUjBmX+qMesyg7IQYp9McK5sfO37SUxl9K53XgynxSAkEMFrtTyS169I+2ApIPNGZ9DOf4Llzc3L53vKuHZuLS5eflSZwYxab8YxqDuwYy5DKOIpRzV7NZjQZ7uipYcGUZk7khwJdMpQDk0q7vjGLOFTFVGHoV+sS2vhZeDaVpEIwMtC3V5WFQWPwoZHhhG7VEBEwv6SsqtdkqMGUE+xvXjGvUvOscYkneItSO2PDTGQMdHSknlIYcLIN1BQZhXh8cYzBlcMRcYVrU7JWjOo+o4x/X9hwnZce0ZcjutrOxElTgRGdWhCbm6jFSO3NpK5cKwInEwi8rD2n7cX8O9XyZ2Y7YGBShYSxqbqiYPkTGo6YSb21BRZnINUYZz7rRj68OTGFVFvQooioKx7HS2ptallqL6sCAHjrRoyIOJzz2HGVViNDrySPWV9bHD037CyxLHMJkqYMNKErWeVe0PEzKZ+KkPsNX4VClYy1GBQzOLKq6I0tiAcdzD6NZlTu+Ixi79GJDfP/kaTy5LgJnt+7YQVyw4Iynn0A7XKZd/53W9ydcvvLd7+5EnZay2aQhA1i3hmNxY2u+3er37aL3pTffdN/xk8Gnz7Jfo2y/2eg/kIQf5SjFElIUoNowyMo6UtuNa66oT8gd6vb+DQ/fss+LZfferySn9j+/tf/ZvL9D3P+r9Sof2Y4lBKo1tjNaEsNHSeUbdguFMy6pDYjzQe9feASD/T++1XZARRzQucnNr55HUEVjEo0vb7UgdEPJer9ep/TxXJDrpT87E5DgfjE6HsjsoMCvIqBEqMaLAykiTtvgyKrgMp/3Cn1UzYoxuKnsUkTgnbeXtkU/aeLEeivR1p1eSIP/TlwTTc1cS5CvxNPY+kp594rnxqMztf6L9uG+/LfEAgRFbuXwmVRkhv+NZWlfe9u4rePLlB/8yQf6LB7/6LP/2jQ9+Iz3DYxfkGn1kTZelbnOlpIwgXAvPLYl1V9HZA72feUtYKyt3veEtvO6554N/xevPfjm+dtfKys8OP8tARtFZJZ10RmZ/tCZ40sQeuFzUZ+SrVzcJ6ZGQf/uFsD7+xs/+1wu8vvWeu34X6557vhxf++Y7//C7/Ozrb+NnGciUkD0nLeY0AIRHrehc96cZMIzCHlzKdjsIL//g75uo5j/+6fd/GNb3P/vHzWv/8lx89vHvdfHyBWnU4AIumXFUtNcvDxhGcFitXcxWXEfI/9rAuyLwBl+bRGJQpmuxlIi407G5pMglhKmb0kn/p/cL2Q6N3+/9ahu8HOT/zGi/HS4GLjmMGHOrrZi5sNaJYQSX9fZ8yfVre3/y79eufe2j19L6hy/w46jXrl375Ffo+2/23tr6jpRZeQnGFlCmxIjiU1rlmhNd8v/oXPOF7e/tHWj93Ptzu2/ZSpkAfFV8KaXzPascMXKoiLqjvQgPrPHmn598/Ua7kU+ZuVc56ZJqKq47OufIY3U83iec7en5FuNTFmOB0w5O6uRQW9QqMJSSmRqcpyDh+KK5tjygTOY4TCKueEnBzVbBTGIO8hm1faT+3OK8G47uqGmCjEHlGw1d7JonxoYRTozHYXDv3JzIjELSl5RSumzRrVV0jPcQw6iZTyQdBHMi87aoPgfMMqIjp7CFNxAxkvkalGZ56dzIfCn2zvEgMmRVVa51J87B1DwazBlJCnsi8+7qHNiCxMVSmdLXY7WBShUl4uIy4EuajvY+N3vIqC8+4THACyFEtCBq1QkaUhAZeBmSVfr5NDVfTvMb4KjSmKfxpgpwKUGRIFPt5/Fz+0rsp7/OY7QHaxFmC2dE6o7Rny9yjttnqGTgxaRPrq/NnJGXT8CCRH8+6rbUeOOLTGqO5wo/0oGn5zMG4WWYgaPt4FCuYnzMZOzH0XXCzrsz4w0MFNg748M1jab9JBNAgzcbJ7JxkbujwVs8hGRGe5Bbrc7ENlsn7STGjD85pRmTamM/NtN57/MzYI7VrTjspeSqLZ1mIIwNOTovgdaeZ2TQRj7T2UV2QOttd2DUi4N34THzjAewTjKeBrmrZGoEcfnjPARoe6qEXucKnuUFz66IEYksedNJpkOlEU0Y28gVoLfLLLad9SkD3jt3G/FemSZjUNKmMBMODosJbTR3OJ4DVNozsRpuawqo1x+PPRxnXkTtfaXVzTxKE8dkTzBpmYeVww2UWj+M91hKlVg7m3+9/sjBwD7y6MWt7dRzcvYkBeC8DLaU+sIuk7MtdkSxMGFnZAJpwMeMhrNxRwbqLxJXTjq1T+k4tw/DZZEFwJzO8uQrpoZ3eTEBbgzOiQZD7ctCmNS24aH5MWWUBg0uTWPQ4CsXftTLxNJUeR+rCw80g1LHQedk7DueC5LmZNbVyYXFs+cOOs7xzqXFhROlRAudS+McOQanaHL9QUbXqmaqMwaTMlN768o41REpY08Zr7ryMh6zOobH8HCsqjFIk2d91h4TQJEZRxWq50mxXsxjy5MM8n2f3WRWjkNHSmbL6chxacgoyrxqTsQyFFRRJZw1nwh90XBVnutZVlam2HpfC3V9MxUx06wzhn1UyLB7fh/XTFpOY/Ei8jiftkaORUpmKEdTewxN9WXl+boQV/FJ2xjGSlOKOFjlWkcIjCeeB+fBW2ms4zEwZRz8SXX7w5Nr45xUmQnsMNi45AGsPNnYNqHC6IMUMtRd6VsZ0I3x93IvjIFuiGZyMg1OtGi18Ux2jyGKgOYF7sDVwNRjKzmFZkw6yWKRxmZcR6RL1EUHoZnqYONV9RztBxwMsBMxYDHHII00RmspD3qDikscZmLrJAZHcF/ZLc8+57n1mGts0txo6aLiwg2pG+Sz8YLFx2ninF1uLo6+acS4KLtYJjSFAegcFos7WfHMfnZWZDvyGHYYusanVwZmtzNMZ6MI1rg4GB1ibLqEbATpqdzHRMdRO2J0pyrLNDvepsDDAPV4WHOaRc8Dz7k1QUagB4PcuHQDBr5fyNTuYsJgldGDPhZGUogpA65Ac7pNfM7MIhfBOBnqbZjgGGcxcO8VueXJFJeKt5UwRXObB8PmB7Z7s6H2L3i97EkaayTLZAZ4mKcEqqnfmELrOFGskLtjFAM30iC2sIaVpJViFNDcyNWIlGymu8ptcHjKiJrFTUvkFjtuYNLpwGcnyrvGGHNxQr3YhLHVzajGlEDUTZmZ3RpGMZ1NrBo2MUaTbtKQEA6eh4lHGWhjVQzMhVZsac72/ju6kLnZTg/cTkE1Z9LgdQJXTqgw0TmLfYcGcyRmfHcmExNAepiWfEMM4p50yxe5mxAxtZEbnURp6YxURc787kZDAwlxPfmjlVLaDBNYp/vbyOVX6W48hvljxvc2GsEcipO0XPdKToRLpmoxdOsjldiAq0plwiXNwjyke43J3otgG0OK74rG3BtL05U+1DuiDU0ikDkhmiv6NWxtA05VXGOqDd/h7f8E5KN1tI7W0TpaR+v/2/pfuNlNBu93UrUAAAAASUVORK5CYII=");
;// CONCATENATED MODULE: ./assets/img/download-materials.png
/* harmony default export */ const download_materials = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADwCAMAAAAZ4sIQAAAAflBMVEU5aMVFcclGcslSe8xehM9ehNBfhNBfhdBrjtNrjtR3l9d3l9h3mNd3mNiDoduEoduPqt6Qqt6Qq9+cs+KctOKovOaoveWoveapvea0xum0xuq1xum1xuq1x+nBz+3B0O3N2fHN2vHZ4vTZ4vXZ4/Xa4/Xm7Pjy9fvz9vv////2j5eiAAADrElEQVR42u3dXWOaSBgGUAyxa9psPhq3ceuyku0G5f//wd2mDYIyMAYwvTjnMuLN+zjzzgxokgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACLlI0/RCGX6JKK5Xm6L84TlfXYvlXdO4y8tD+U2qMO8jXW3LVuuF4rxDHOsyLDdKzu1+W3Zai+SswyMv+xS/K9PZLLZlhAeFOpPbMs5Xa+CzWB4WfltssizL/z1K5Fki5x8fT3eX1UuXh/sSiUxv3qh4tuheDX9VsKnXV0V9dKS9GxSdfWK1am9vY0K7UrMp3dQ2GuGt32xTu0wbOc+EVaSRK7E/lO0cE1aRRq+NTVrTDZB9lXuPqv7cnzQq3PQDpH/xNCsMkWnV70YVEddfGSKTxvFQP1CMOlt/rC630Bp/uds4382i3jPb2R1ONTz+bh5RHZyXfFj8FFppmbMmPC5p6SBF4O8zc9Yk5oe3o+4jA0mqVcCNKk6Yx1FLDwZy//qOlTJONl+VxWMSG8hvr+/ZqONoGnk8LS87Ljnenbyus3ae1BpL/X7t86I7s+NAvu3HleeCxpmwOnp5RCCbxr0qa63h9qcl20VyeiBZs/sYJEMt9nnMk8GBdAwy4qyjShkfiETG6iBZMk4gjuIHuYmb/U8JZKePDLCJO94NB/Kl+K75TQVlfbtvcfc/ip7bVhcfNyatMcwibxAW/Zd9KgyR4WKPoiICqR+J6SKDdyHL4YEkc/cPpwzkIa+pVlD1P/51+Bb3D8ebslZdM1DgG21psCPtVHbovnDTNQO1azlpyTWRobo+059P/n7hY+AZCU7fh1x11bdF6y3bpUCGqmq+bns1/NXo9uWWQAa76tw7BBt74OSr2q5/UNm3btV3nUvVUGMP3DqprlbY4XNW+27u8yk/GFAdHf+jriPMWeVtEtnYV31nJ5m6vl3e88HPIxt6/Uo9fcjecNf9m0vHj9G1N/T0tO+WENRoE+vr3sbe2tAbXy7xnO9ok9bLMPn+syZZFmrstXktqzzHTGnELn1bdxuBxr5qOXfpeVKbk9tI0R1IEmgPfkTrnIm0vt5s6PKYLpFNZyBVY2829DJ+j8LJa61dVyA/G/vBp78lD88tjjdI1l2BvDT2w0//URxPc3UcNZIiHMj/jf1oOXsYhw366BbLfBsIJD3+LbP6jzI+3VntTjZSXkRfmPq/CQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADv4j93r1Kqa0EhJAAAAABJRU5ErkJggg==");
;// CONCATENATED MODULE: ./assets/img/logo.png
/* harmony default export */ const logo = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAACPCAMAAABQ18ByAAAB9VBMVEUAAAB4ff/9c5x4ff/9c5x4ff94ff/9c5x4ff/9c5z9c5x4ff94ff/9c5x4ff94ff/9c5x4ff/9c5z9c5z9c5z9c5z9c5x4ff/9c5x4ff/9c5x4ff/9c5x4ff94ff94ff94ff94ff94ff/9c5x4ff/9c5x4ff/9c5z9c5z9c5x4ff/9c5x4ff/9c5x4ff/9c5x4ff/9c5x4ff/9c5z9c5x4ff/9c5x4ff94ff/9c5x4ff/9c5x4ff/9c5x4ff/9c5z9c5z9c5x4ff/9c5z9c5x4ff94ff/9c5x4ff/9c5x4ff/9c5x4ff94ff/9c5x4ff/9c5x4ff/9c5z9c5z9c5x4ff/9c5x4ff94ff/9c5z9c5x4ff94ff/9c5x4ff/9c5x4ff/9c5x4ff94ff94ff/9c5x4ff/9c5x4ff/9c5x4ff94ff/9c5x4ff94ff/9c5x4ff/9c5x4ff/9c5z9c5x4ff94ff/9c5x4ff/9c5x4ff/9c5x4ff94ff/9c5z9c5x4ff/9c5x4ff/9c5x4ff94ff94ff/9c5x4ff/9c5x4ff/9c5x4ff/9c5x4ff/9c5x4ff94ff/9c5x4ff/9c5x4ff/9c5z9c5x4ff94ff/9c5x4ff/9c5x4ff94ff94ff/9c5x4ff/9c5x4ff/9c5x4ff/9c5zO4dq9AAAApXRSTlMABQUICAoODhAQEhMYGBodHSAgIiQmJygoKyswMDE1ODo7Pz9AQEJCREVISE1NTk5QUFNTVVhYWVtcXl5gYGNjZGVoaGlvcHB0dHh4eXp8f3+AgIGFiIiJioqNj5CQlpaYmJudoKChoaamp6ioq6yssLCxsbO1t7e4uLy8vcDAwcLCyMjJzdDQ09PY2N7e4ODh4+Po6Onp6+zv7/Dw8fL09Pj4+voQlMORAAAFKElEQVR42u3c6VcbVRgG8NhWGkQEgnvi1hKXNqNEbOvS4NqkWKvOaLFqUlwCzLi0hFYrVlCJEu2SKGoVEy0K9/6dzoTM5M6W2e6Qt577fGsPZ87v3DPP+37J3EiEhcWc6E4Yjl43fzTyws0QrEnBFZbn7+v+sWYEt1j+cLS71juPCe6x/Mt3dJG6Ky0IXrA8P2roWU9PWLa7Df/uzwlesXxW37O+fTeGYx3mjM0SvGN5fkSHTe25IQzrIKfD9r4o+MPqetaXCkXbz+mwiWOCXyzZMxmbupe6dfd+ErvroCD4xxI9U7CpeBhWDRvLCcGwWs+a2NRdVK07HuYIbFIQgmLVnm1hUwM0rXu5NpZoVmfsENkkE3arZy0sTW3LyhmbZcbGMoQP1Ytxe2yzZyo21UfLmuA0rL5ZBmxvpoKXSKycajZqh+X5Azs17L4eylbO2CwdNjndwNiElTM3aofls/ek6GqHNSuXFAQbbCxXw81YYOXjzQ9ZY/m3jmtaGsthUKMenBJssOkSVmOJlbMyd8ISK546QE/br1knZiVLaqFcw9gRi9A/K+9ZYcWZI6r2firLQM7Y25JkgZ0skdKOWDm/fHHCjBXFk4+3tHE61mdnJQvs+5V/MfaAVV6Hj81Y8YNxCtrW4uK41yXJhJ1caGBznLAI1RfzRqwoHg+8HNTF9cyUZMJ+cglbxhmrTIc5I1br2UDAxTUxKxmwhaUGxgGw7bZpWK1nfUGWQbNZOqyxU36wStuUYdbGqj3ztxwSRLPaWItO+cQqbSuS2FbP/GiHyWa1MrnwK3aIJyxCf/0wT3Jf87ccBnXNaubbK9g5HrFyfl4mtKee9qHt1zdLks7+uI5xKFiENi5+3u7ZUc+rTFkGZLPKq9hl/GDlrC2fJnsW92h9STvW85c2MQ4ZKx/v5S/Vwx33ot2xnxtTm3Wm/Cf2Et9YOde+n9d6NuB+canNunAFe0wQrNK2b9SeDbi1TnjqFE2s0rb5rZ65WmWJsUJzUK1iPwmMlfOb0raTj7pYDgmlWWe9dIo6VmnbvDhzyFF7u9ys8lXsO3Swci6fnhl3WA6Db0oX1jEGgEUby2Jn7a1TZ1YxhoFVDvdQp2XwxvlNDAeL1j7aYz+0Xi0HtdLForUPb7HDPlHGGBYWrb1i89redg6Dw6KLD1q/BO9sAsSizyyP9qGrGCL22pNW2AUMEou+s7A+sg4Uu/GAGXsOA8WiT03Wm9bBYv8wYZ/DYLFoxIj9GjD2XSP2d8DYr4xYDBj7k8H62PWEfR4y9u/rCYsYlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZ9n+OjYLHloiH1qFjyW8EF6Fj08RDeehY8hqJOHBsRffUKmxsTvfUPGxsTP+ZMGjstOGxRcjYpPELbMDYkukXWHm42JgJG61CxVp9jh8Hil2y/FluFiS2YXMHUhEgtpGw+yl5ERzW3kpBSxnbyRr8vaWLrSQcrg+pwsFOO94vFs0DwdbSbj4zG1oEgG0Irq5tU7jFenextZxbavNlODxX7xa2Vkh4/6x71Mf5BsZWcj6kqre6ndhKLhbsro94vro92FImoFT1roSNLWV6I9QylF0JDduYTlOUqt7FELCyNBJO5IFGFVsrJCNhxmEAe8D6GqdUB7BbbIBxSm8Au8IGHqeUBrAzltI4pTGAHbBUx2ngAdwBG8Y4DTaA7bDhjdMAA9gSG/Y49TuADf/51LaNUz8DzXi5RQ6olIWFxZz/AM4/Y3mS5vy2AAAAAElFTkSuQmCC");
;// CONCATENATED MODULE: ./assets/img/stripe.png
/* harmony default export */ const stripe = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADwCAMAAAAZ4sIQAAAAh1BMVEUKJUAZMkwZM0waMkwoQFgpQFgpQVg4TmRHXHBIXG9IXHBWaXxWanxXaXxld4dld4hmd4dmd4h1hJN1hJR1hZR2hJOEkp+EkqCFkp+FkqCToKuUn6uUn6yUoKujrbejrbikrbeyu8Ozu8PByM/CyM/Q1tvR1dvR1tvg4+fg5Ofv8fPw8fP///9Q7taGAAAEZUlEQVR42u3cbXeaShSGYSAi9NBGoz3UE1qaAJYB+f+/7xgQZgbGtyxM6PK+PikEWGs/vM0GY1kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Pew/dWLoAzT4K1e8uoNpZgCt6xaFGMSgVQE8rFXhxmBTMZ8EeVVTCCTODCCKGuuDgQyCX5XZgL5OwPZRguqNpFAxOvaf6BkEwnEWcyp1pQCwa1ucedz+waB6Gs1bZXSD6uySkRTfJFFgd0LJA8b3n5iKD/bm0zkiWc5YeftBNZ+Xu2/zDZ1j6tIlsYb68VLs9U88slAPRaySpcFWiCtR8sK28+RtSoPE/Xb3u7bzrJ/yTnFIBJ7Uyrrzj1yaAvza1D5KjsbSLbsJh4JpAoKbemotxcUvbVviKLJI6/eE8iuOBtIX65eS5bD+dw71Ex5XBCIMvHSQOq1Hs+DRGph9XGBVP+2W52dmX+/nOIjA6naRr55q9VudveBLKsPDSQ7dVhy0tpLZDHKbZqm5diBCP1rPd6YyQOk/OHN/VjOt+89kK28B2qag+7XWPQDyfzGQy+QMo3jNDgRyOtb/f1t/95XHpa5W2/0O/e+rd6+exgixNmx1okSSPnj0N89GsjTYSHlCNhpVxDhHv7iuRs/EohyPpIezgdSdkPro4GYbq33uXvDFTvdJPfOA9nJ3sbskm5vaJh4PhDlcrSyrFX3xRueOh+5hsgS+7cKxMrUxRLDH8RHGix3Pi4s1EzGDEQu9kfdCRadtJ2U3Hkgg1FDsZzdIBC5rkK9bhnc/VX9eViSzfiBqBOdk4Hs7n5omBn20tnYgShHxemhPG8SWc6zIRGPQD7RkxgmYhPItCKJPusaQiBtt6TU62J/0l0WF3V5mKR6E3fMQJ7VBrzs9frzIYJQ9mOhPpkYM5BCPRfKkXpAzc8ME2VrKxkzkOWRXlZCyQetk1jrKcbKqcU3ndffFYitPLH1tFYjL2MZellq/yozBqK8fHBVIIchv/qikTjZYvZ5hBs2PcWg3lXVV+Yi5bHFvrTe2+umX64MpCqW3ny+KvoPzdWOZtRGYgdRSSdLqY0Q2mDkyTBeeLw2kKH6+ZOz0wahWfKS5SWtRau/s/YrV4wfSHxmqwQSnqhcOH4ghwe0jiCQ6wKp3z7QzyxjBPKf4f6aQC4J5Fs98/vIgfyW2/V2BHJ5IKXh/Z0RAvmtjUEFgRgbWIaqpK6hB/WeQPQ8f/a6ArFhT1gzMnT1nuI+Du3dE7UxX/5z7UhdWTod/mjNjYX+HmTAL6sPA+R1nG734xDxGi0GNfkap82s+ofort+Sh5HTTfMH8fjRfultvD7SxPXD13rtaczv3G92yPGsiUBAIAQCAiEQEAiB4NMCKSnGZAIptxH/1WwqgYh47dEGAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADT/A19MjTUWoqydAAAAAElFTkSuQmCC");
;// CONCATENATED MODULE: ./assets/img/woocommerce.png
/* harmony default export */ const woocommerce = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAHgCAMAAABq2fnHAAABVlBMVEU1I1Y5Jls+KWBCLWVCMGBCMWBCMWFHMGlHMGpLM25LM29MM25MM29MNG5OP2tPP2tQN3NQN3RUOnhVOnhVOnlZPX1aTHVbTHVbTXZeQIJiQ4diRIdmRoxmR4xnR4tnR4xnWoBoWoBrSpBrSpFwTZV0UJp0UJt0aIp0aIt1aIp1aIt4U594VJ95VJ99V6SAdZWAdpWBdZWBdpWFYamFYaqNbK+NbLCNg5+Ng6CNhKCObK+ObLCVdrWWdrWWdraakaqakauegbuli8Cmi8Cmi8Gnn7WtlsatlseulsaulsezrL+zrMCzrb+zrcC0rb+0rcC2oMu2oMy+q9G+q9K/usq/u8rAu8rGttfGttjMyNTMyNXNyNTOwN3PwN3WyuLXyuLXyuPZ1d/Z1t/a1t/f1ejf1enl4+nl4+rm3+7m4+rn3+7u6vTv6vTy8fTy8fX39fn39fr///8JHjPZAAASq0lEQVR42u3d62NUx3kHYNmR5F6lxKkdHHphncbUJBE2FlglpmslrENasKuIgLRFxFbXVQSy0P7/X4pA2j1n5p2zWsFqVfd5vqGzV3Z+O/POzNkzMwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA+ffGW29fvPiz8+HiO3/9pk+Ec+Sti79YOl9+9kOfCufEm+8vnUM/FxHOhR/9Yul8es9nw/S9s3Ru/fMbPh7ko6ES8fkwXX+7dK4ZZTHd+vzn5zsgS2/5jDDAMsji+9qBLP/hT096d36tC+F76Iev3H7/7aB/aO+2LoTvn1deIbzxMh/PrU4oIL8y1cvU/HLQEWzt9Q96d8Zuvo+O89F/YozF964EOW6Ea0etfGvcDqQ/9NmEAvJjnxNT8tZRG7w1aOX/edoOpN//7YQC8o7PiSkHpHfKgVK1A5lYEXLR58R0A7JcaebL47TdtWpAbqbzv7d/v76+dvvWCWaKV1/cclVAOJcBuX7aSuJp5Y5byerI3vGBgz811v7La8P+K1xPaQzI4ocftzv37rXbH7bm8qNzH648P9pur0QH/8/7yceH767TXvnwJ5rymfUg40xkrZY6kBvV2uRwleROeZnxoH7Th78+cUDmPr63X73rdv1wq7NTObj7VSt4hFbdYqX1JYdmX/l+rZLgAWsPGX4xrHSr732/Ezx1/No5RQ1S6Qk2Tlmi96ojr6TRH0YkXmpffZrf8vbJArLQ2U/vWotHN3vk3WvpY6wkt+gMjsynd3639uDJwS+Hh3aTQ8Pn7Jc8P3Y1+PP2/ZVSz5C/uc3nf90pPUFLS3/FgDwe/mc+LnYXa+u3G0ZYlTmsh9GH9Oz2qBpm4A8nCMjcvbilHR9+ED7ybvK93E6Od4sR6F9rCtbuMLb9YubGDcjLTC+eJB4CMuGAbFS+wAvzVb28H6iOsPbifqXfOHhbL9zyDyMDsrLfbwrIhd1SW/m89jBpjL4rRqfS0KOjg2Z8rV/sXE4TkOcR+Tz9auhENxOQiQZkbdQ01o2jzmJvuTDC2hqZj/6zWyfMR7IaEwSkU2xpL/OxX3zkekK6xYFUt9zQg2AN+5esY/vmFQOSdnsLcfYFZKIBWR01jTVo9euFEdZno1t9PV1LS78p3/LZr5sCMvff/caALDTko56Q7IafFo980xisQf+y3S92SqcNSH+3Uv+U+kYBmWhARk1jfTFsuvEq4d4JWn2//zDqlEK9hoAU83EUkLndfqNL5Up80E9kJUiloUfx6RYfsT/7ygHpf7c4sm8UkIkGZKky7bTevN5xM0jNcITV2Or7/WrH0Gu85Wo5IA/6zQG515yP/u6gyV7IjxWq8GpDj2JwHJ8r+f3effWADCawF4rZF5DJBqRXWvDLojDsYB4H7flR8we9FT9mcxeSBOTzfnNALvRH6RSnqgYxeNDQ0MOneLdYHF17DQHpt0f1jQIy2YA0T2NVu4WN8K/R3qzDx+olPcpyaYB10HtS6kLqAWn1RwQkrQ+2N7dLc05BP3E5Xs2oz/MG/cSnheKkUtacOCDtzh/Tl/zdbMPchIBMPiCN01hfhF/tN4I/1odN3x428tu1JKzHayV7h7e8XovIRiEgWdPd73zcarWurHQ2+0GAOod7TBbacRfSKfUuUS/0aXkZZFC8BCXIcPqr9sePK9KAvBhMtfezwil/VZsrVw7fe/uP22lAHlSfYFFLf9WANE1jLdea+KBKv523+9rWk+M/Xj8IklTvar795OUTPYmepx6QdIC1W/l2nMsrkPbRoY+C7+NwINWNVzPq87xBsHaL3dtmFJB0Tf9qXkrV5+I6wXfDZvLed4I3zusJSNM0VjJxezMflR2Ph3phZ7EWjLFqtcqfP1nKN00Ox1gXGzqQf882Ie7HjboTTWRt9wvV9r2mhh4OpF4WL+1+v1j3jxuQeqi/yQd2n6ZvXUAmF5CG3VhptXAnGE4t593CXuOOlOqf9m6Gi4xrUUCuNSxvB9/hw8J6PgpONGe6WEhOZTtJePhSKTmD6a9xA1J7ybvZg2cbywRkkgEp78ZKJ6Y28pnhJ/ktD27GXdBaXtXciTevbEUB6ZbabNhTfFM6sFusGF60u/BAZZ53v1SihKsUi6cMSD2H6S6vIAECMsGAbESj/2hi6rhr+Cxvy0/78WrK9eymvdJ5JHnqagFZKOyAKiSo2sFcyu9Z6W02a/cZHviv6Nkq+dkeROJ+rYrezCfGxg9Itxbpa6O+GwRkkgH5XWkaK1/ZWM5q9LWmvYv15PTSiqd+IuKj4CEulkZYXwbvaL80vTmfz+ZWBvXDU0e6tVJiJWjo1WDd71aLl2vB4w1rhbEDslurgLojZ24FZIIB+azw6ws3Srty17N6eqNY6KfN/nbxRMS1fG2lGpDOqA5kvnyD7WxA1K4uPVQb+rAtvrsfFMXVYK1Un2z48lrbeT82bkCu1DvD/eLOMAE5g4AsR+VxvDS+ka2jv+xTnhQXG9eTI49KHUgtOkFAuoVppcIad+3Q3azzqcTt2tVqYb8/HMjsBAO2arAuVTuY4cubrcwg3w8C8nly6mAQkPq2xNZ88wxWGpCvTnxuIicKSLV5bzV2IEet/0laLSwXu4Xq+G0vvG/Ykd3MA7I/okytT2Ltlsv3+0ncKu3vWqXSuT8TNPRq1K4NX1KnEoHN6m12m1fSr0UBmWvdS0qO0vRcISA6k9cdkEfh9//X0f/4i5bbT6e9VuOthkFASr1VUs8HAYl2hZSHKvUupp0d2q42uO1hQ29VvqiDhl4L1vAf9yvdV6f2bOMGpNvdyW90tdw3CshZBCTcbLIa/o+vJV/168XyIX/sveYorTYOsRZG1qkNAVnJxvC1KdzOsEpvV3LTbp5+fXf4sLuVoqFVeyGLYwYk9yC5xa6AnHlAwlb7tLjTdjUr6jfiszmSGuRJodA4RUAWxwtI1sIWam3/yrBKf1Ap2K82L2jMVqaPZzuVP1/Ju7rTB+TwnML2qPJLQCYbkGjcU9qSvlzvL1bTqn2r/OsnvTwvhcHYs0kHpFX757AIWdyuVB1BQ68Ha1iEXO5W+qeFfMrq1AF5cc6tgEw5INXeYquxA3kxibuRjch65XOukrNNGvqa6NBrCkg2xLpav+UgFp9W54ou5A29Hqxhf/NptV6fz9crTxuQFxuSDbGmHpC8Sq91IF/Xx1iPs6/6p8XKOz1f8VG5r+kFO15KRXpUg1wZo0hv1yeoBgOk7eozLOQNPQnWIHjdWlezny1onjggtRWb7VahAxSQMw5IXqXXdxRWWvmz5epMbS8LyJ3y3O1vmwMSnfpbmua9Nt40bxaQu/Wmfyne2Zuv3CfBuhDv2trJVvVOHJBL+f77dBfmrICceUCysvuL+ub1jVqRctC0E+tO+efhbjYGZHXEdvft5q28ySBst3mhsFtvQ/PxBve8oT9IXkL8AyjddAv9GOsg3WBr/kK0X19AzjAgy8li+XKyJb3aeHvL+b7Ep8Ua5El5Ib1h5/ByEJC7o8YZ8+XVggdpo9lJGmk33KC7nTX0JFj1FzXoae5m3/e1cA8XuvMKYybsQkYuktYCcnf4BAva+WsJSLqlcD09+6l6ZmA+y1tYik9W47fKa5LJS3gSnVG4MvJrdOdke7Eu1xtsK1tqH/w1b+j7SbCyE3Avp4/2bhaQEXuxtoO32c3P62p477qN1x+QR7W6+0Z2TlN1jNXLx0KPS80+uwrVemnn8Bf96LStSkDq4/2vgnfULSYobfsX0hacFSEzIxt6Kx/8HOdyJYvDGAH5KOhCOmN9OQjI6w9IfWnjUdqBFJbVB1tCHhWa/Y1sq/zvCjuHl8OfaqydMLU/qpV0Slv6sm2MrbRrmI9KkLyhZ8FKi5BvsibfHjcg9Y7w5dus53d3VkDOOiDVyaa1+umzN9Mppn6+4r1W2GGVnxy1WtjWuB6fUHKx1P6jVnIlGr5nA6HN+h++C3qf4zaWNfQsWGkR8mUWyC/HDkjUhdRz2BGQsw5INQCP8w6k9LO7e8FO9V7hJx9Ws+mAZ8vxb/XeiQOSDIO2Z5ur9Mrh3bTtt7PpqXZQgtTy8OVMGKyVYFqqNvD6ZuyA1E+hvxS9vM8F5KwDUvmufxZ0IPUTAbMwLPejOdr1KEvhubn/dlA4z/BiscbIL/hRPOf282y3+INsRfFSUILkDb2TBSs+ETibbxvrhKl23oXMJ0O5rxYF5GwDslEoMtYbf073cXT0+Ifc1/tRt1B7oqOLIvymlo+t0o9XZ5X0V4OrMM0d/gLbzL+EX7MrjQsVR2d61FvgZt4l7c6EwapXDLvBH2fHDkj9tSxGXUj16jqLlwVk8gG53W8cQxXK9K24szj8nerVXvxAtcfZO6zTlx+GhX/wy4rBldXut9vtzv2dqGX1X1yZsBX9Ys5+3tGEvc9+0tC381Oo8pMVk2nlxTQghy95YDY6o7Cdz9fN5z+asn3v+f3v3d/Pfnq0W30C5xS+noAsF7cmBkt+ef+S3L239aT4QPVy/8mf0ltulC+g03Txj/B7Ntgdm/YMx7Nd7Wir107S0INgXY06hwfpykjx9SxGAYm6kH8tvye/zXsGAQnbf21RY61w+tRJLmhQ3dq+3nzLvZsNV5j6aERA5ndGBSSbrb0cjd9m44YeBWshWp28m95wvIDU03oUxf8QkKkGZGNEB7K0fNB0fLW5Xd5sfpx+aS9Xen2QdnNAkiokbkv1+eBWsMwy2AqcNPRWEKxq09yNXmbnFAGpdSFHvyY8vy0g0wzI7REdSPjV/9sTXhNn/WSXJ8x3MGaXYGs3B6TpKgHDia+VaEtKN5gASxp6GKxOXpfU2vz9UwSk/jaPiu6FHQGZYkCWR36bB1/9lbPKrzd0DN82/GJ80wAruohnuzkg5e/ZSmvpRJsaV4LeIWnoYbCuBvNTV9KqZ9yARF3IzMK2gEwvIEEXsDfyyuarI697HrX6W8UsHSS3jK5y224MSGNCghr6u2gSebbQ0MNgzae7T9LC5DQBCbuQmfmOgEwvIOsjOpCokF89ydApzcfS0p1SPtKLRYfXSY+HGsMGe7c0vhq0le1sva9WhAz/dqH+DN1wS+1Ovgd/Pq3cxw5I2IXMzHy0IyDTCsjqqA4kuMlnJ7j2eZ6PUkLyfIQBiZvJiMPPm9HiTFM9Xmn+wzX4ZIoqDlYnK0HqCyiXTxOQ+vrKcOlv4a6ATCkg2X7E4JrQX5cnp0qjrK8/ia69fiuoQ/4cJCkOyMxcnoFaH9PODlevyDQfLO1Vi5DKr9LVT/Xoh8G6Emwg3kkGduMHpJbN7yobyxbu7gjIVAKyMaoDyev09Ipt19Of8937zVIsu+VBdAnqUkAORz8rm8Ov6f0/riSHW3eHX/f7myu19eT5VnjK3XztPL+jh6mYG+N+F5KbtkoOW3zy7+CpW/WLabXalff+P3c/bHqCOS39dQUkGUDdjhrsWkMNctTwKxn6du2TpaLrjyq9yN56fMuLjW9hrnXl8DqVFwrbKS60Do9+T3/Aea51+O6uLArAmQVk+aBhQSIeZK1GN1lde9jr9bYe/r4hHUcDrS8eft3rff1w7VbpFhd9TpyXgNTOC4xK63wR487ShL3jc2JK3mycpCo2/doixsQD8mOfE9Pyy6XyPNZWuc3eGTXEep3e8jExLe9nzXGwkLHXVD6sZ6ekT45Pial5u1hglAqQNCFbk87HP/mUmJo38jHWrZPkY5CQkbd7ZX/jU2J63gmmaJ/2D9ZHTs++XOb7duL5+MBnxDS7kA9eofHe/GTiBcjSmz4jpumtpXPNIghT9nfnOR9/7/PhHJYh58VP3/DxMHV/9cE5zcd7PhvOgzd/eh7j8b4ldM5PRD4QD2iaznr7vYuv6B/itv6PYz/Q23+p+OD/zVjNVC0c+UEwVPuV/xY49qMPbFiHcSLyM/8nUClF3ksSouSGhmpdmQ5JRN5XpsMJSxFlOjRERJkOwThrsFP4B/4zoFytK9OhoVr/lZleaChF/D4iNEREmQ5Fb7xjpheaSpG/8H8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJn/BZyrlr46lPXlAAAAAElFTkSuQmCC");
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
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/external_React_.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#4584FF",
    rx: 3
  }), /*#__PURE__*/external_React_.createElement("rect", {
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

/* harmony default export */ const course_per_row_1_active = (course_per_row_1_active_SvgComponent);
;// CONCATENATED MODULE: ./assets/svg/course-per-row-1.svg



function course_per_row_1_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/external_React_.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#EBECF2",
    rx: 3
  }), /*#__PURE__*/external_React_.createElement("rect", {
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

/* harmony default export */ const course_per_row_1 = (course_per_row_1_SvgComponent);
;// CONCATENATED MODULE: ./assets/svg/course-per-row-2-active.svg



function course_per_row_2_active_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/external_React_.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#4584FF",
    rx: 3
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 46,
    height: 48,
    x: 11,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
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

/* harmony default export */ const course_per_row_2_active = (course_per_row_2_active_SvgComponent);
;// CONCATENATED MODULE: ./assets/svg/course-per-row-2.svg



function course_per_row_2_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/external_React_.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#F2F3FA",
    rx: 3
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 46,
    height: 48,
    x: 11,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
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

/* harmony default export */ const course_per_row_2 = (course_per_row_2_SvgComponent);
;// CONCATENATED MODULE: ./assets/svg/course-per-row-3-active.svg



function course_per_row_3_active_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/external_React_.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#4584FF",
    rx: 3
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 11.01,
    y: 11,
    fill: "#78A6FF",
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 11.01,
    y: 11,
    fill: "#78A6FF",
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 11.01,
    y: 11,
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    fill: "#D2DFFF",
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    fill: "#BDD9FE",
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    fill: "#78A6FF",
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
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

/* harmony default export */ const course_per_row_3_active = (course_per_row_3_active_SvgComponent);
;// CONCATENATED MODULE: ./assets/svg/course-per-row-3.svg



function course_per_row_3_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/external_React_.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#F2F3FA",
    rx: 3
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 11.01,
    y: 11,
    fill: "#78A6FF",
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 11.01,
    y: 11,
    fill: "#78A6FF",
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 11.01,
    y: 11,
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    fill: "#D2DFFF",
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    fill: "#BDD9FE",
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    fill: "#78A6FF",
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28.714,
    height: 48,
    x: 46.332,
    y: 11,
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
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

/* harmony default export */ const course_per_row_3 = (course_per_row_3_SvgComponent);
;// CONCATENATED MODULE: ./assets/svg/course-per-row-4-active.svg



function course_per_row_4_active_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/external_React_.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#4584FF",
    rx: 3
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 19.66,
    height: 48,
    x: 10.18,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 19.66,
    height: 48,
    x: 36.84,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 19.66,
    height: 48,
    x: 63.5,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
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

/* harmony default export */ const course_per_row_4_active = (course_per_row_4_active_SvgComponent);
;// CONCATENATED MODULE: ./assets/svg/course-per-row-4.svg



function course_per_row_4_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: 40,
    viewBox: "0 0 120 70"
  }, props), /*#__PURE__*/external_React_.createElement("rect", {
    width: 120,
    height: 70,
    fill: "#F2F3FA",
    rx: 3
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 19.66,
    height: 48,
    x: 10.18,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 19.66,
    height: 48,
    x: 36.84,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
    width: 19.66,
    height: 48,
    x: 63.5,
    y: 11,
    fill: "#78A6FF",
    stroke: "#fff",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/external_React_.createElement("rect", {
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

/* harmony default export */ const course_per_row_4 = (course_per_row_4_SvgComponent);
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
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/external_React_.createElement("path", {
    d: "M21.947 9.179a1.001 1.001 0 00-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 00-1.822-.001L8.622 8.05l-5.701.453a1 1 0 00-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 001.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
  }));
}

/* harmony default export */ const full_star = (full_star_SvgComponent);
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
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    width: 18,
    height: 18,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28,
    height: 28,
    rx: 3,
    fill: "#3BC3C3"
  }), /*#__PURE__*/external_React_.createElement("g", {
    clipPath: "url(#prefix__clip0_237_869)"
  }, /*#__PURE__*/external_React_.createElement("path", {
    d: "M11.625 14.048L8.05 10.472l-1.535 1.536 5.111 5.111L22.167 6.578 20.63 5.042l-9.006 9.006z",
    fill: "#fff"
  })), /*#__PURE__*/external_React_.createElement("g", {
    clipPath: "url(#prefix__clip1_237_869)"
  }, /*#__PURE__*/external_React_.createElement("path", {
    d: "M11.625 19.881L8.05 16.305l-1.535 1.536 5.111 5.111 10.542-10.54-1.536-1.536-9.006 9.005z",
    fill: "#fff"
  })), /*#__PURE__*/external_React_.createElement("defs", null, /*#__PURE__*/external_React_.createElement("clipPath", {
    id: "prefix__clip0_237_869"
  }, /*#__PURE__*/external_React_.createElement("path", {
    fill: "#fff",
    transform: "translate(5.833 2.333)",
    d: "M0 0h16.333v16.333H0z"
  })), /*#__PURE__*/external_React_.createElement("clipPath", {
    id: "prefix__clip1_237_869"
  }, /*#__PURE__*/external_React_.createElement("path", {
    fill: "#fff",
    transform: "translate(5.833 8.167)",
    d: "M0 0h16.333v16.333H0z"
  }))));
}

/* harmony default export */ const multi_choice_tooltip_icon = (multi_choice_tooltip_icon_SvgComponent);
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
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    viewBox: "0 0 285 37",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2
  }, props), /*#__PURE__*/external_React_.createElement("path", {
    d: "M0 0h285l-9.492 18.5L285 37H0l9.492-18.5L0 0z",
    fill: "#fff",
    fillOpacity: 0.3,
    fillRule: "nonzero"
  }));
}

/* harmony default export */ const ribbon = (ribbon_SvgComponent);
;// CONCATENATED MODULE: ./assets/svg/single-choice-tooltip-icon.svg



function single_choice_tooltip_icon_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    width: 18,
    height: 18,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28,
    height: 28,
    rx: 3,
    fill: "#FFC844"
  }), /*#__PURE__*/external_React_.createElement("g", {
    clipPath: "url(#prefix__clip0_237_868)"
  }, /*#__PURE__*/external_React_.createElement("path", {
    d: "M11.625 17.548L8.05 13.972l-1.535 1.536 5.111 5.111 10.542-10.541-1.536-1.536-9.006 9.006z",
    fill: "#fff"
  })), /*#__PURE__*/external_React_.createElement("defs", null, /*#__PURE__*/external_React_.createElement("clipPath", {
    id: "prefix__clip0_237_868"
  }, /*#__PURE__*/external_React_.createElement("path", {
    fill: "#fff",
    transform: "translate(5.833 5.833)",
    d: "M0 0h16.333v16.333H0z"
  }))));
}

/* harmony default export */ const single_choice_tooltip_icon = (single_choice_tooltip_icon_SvgComponent);
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
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    width: 18,
    height: 18,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_.createElement("rect", {
    width: 28,
    height: 28,
    rx: 3,
    fill: "#4DABF7"
  }), /*#__PURE__*/external_React_.createElement("g", {
    clipPath: "url(#prefix__clip0_237_867)"
  }, /*#__PURE__*/external_React_.createElement("path", {
    d: "M7.298 17.041l-3.065-3.065-1.316 1.316 4.381 4.382 9.035-9.036-1.316-1.316-7.719 7.72z",
    fill: "#fff"
  })), /*#__PURE__*/external_React_.createElement("g", {
    clipPath: "url(#prefix__clip1_237_867)"
  }, /*#__PURE__*/external_React_.createElement("path", {
    d: "M23.838 8.629l-4.03 4.028L15.78 8.63 14.437 9.97 18.465 14l-4.028 4.028 1.343 1.343 4.028-4.028 4.03 4.028 1.342-1.343L21.152 14 25.18 9.97 23.838 8.63z",
    fill: "#fff"
  })), /*#__PURE__*/external_React_.createElement("defs", null, /*#__PURE__*/external_React_.createElement("clipPath", {
    id: "prefix__clip0_237_867"
  }, /*#__PURE__*/external_React_.createElement("path", {
    fill: "#fff",
    transform: "translate(2.333 7)",
    d: "M0 0h14v14H0z"
  })), /*#__PURE__*/external_React_.createElement("clipPath", {
    id: "prefix__clip1_237_867"
  }, /*#__PURE__*/external_React_.createElement("path", {
    fill: "#fff",
    transform: "translate(14 8.167)",
    d: "M0 0h11.667v11.667H0z"
  }))));
}

/* harmony default export */ const true_false_tooltip_icon = (true_false_tooltip_icon_SvgComponent);
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
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
;// CONCATENATED MODULE: ./assets/js/back-end/constants/routes.ts
var routes = {
  course: '/courses/:courseId',
  courses: {
    list: '/courses',
    add: '/courses/add-new-course',
    edit: '/courses/:courseId/edit',
    settings: '/courses/:courseId/settings'
  },
  orders: {
    list: '/orders',
    add: '/orders/create-new-order',
    edit: '/orders/:orderId'
  },
  section: '/courses/:courseId/section',
  lesson: {
    add: '/courses/:courseId/lesson/:sectionId/add-new-lesson',
    edit: '/courses/:courseId/lesson/edit/:lessonId'
  },
  quiz: {
    add: '/courses/:courseId/quiz/:sectionId/add-new-quiz',
    edit: '/courses/:courseId/quiz/edit/:quizId'
  },
  course_categories: {
    list: '/courses/categories',
    add: '/courses/categories/new',
    edit: '/courses/categories/:categoryId'
  },
  course_tags: {
    list: '/courses/tags',
    add: '/courses/tags/new',
    edit: '/courses/tags/:tagId'
  },
  users: {
    students: {
      list: '/users/students',
      add: '/users/students/new',
      edit: '/users/students/:userId'
    },
    instructors: {
      list: '/users/instructors',
      add: '/users/instructors/new',
      edit: '/users/instructors/:userId'
    }
  },
  quiz_attempts: {
    list: '/quiz-attempts',
    edit: '/quiz-attempts/:attemptId'
  },
  settings: '/settings',
  addOns: '/add-ons',
  reviews: {
    list: '/reviews',
    add: '/reviews/new',
    edit: '/reviews/:reviewId/edit',
    replies: '/reviews/:reviewId/replies'
  },
  notFound: '/not-found'
};
/* harmony default export */ const constants_routes = (routes);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js
var chakra_ui_image_esm = __webpack_require__(4651);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js
var chakra_ui_button_esm = __webpack_require__(5193);
;// CONCATENATED MODULE: external ["wp","i18n"]
const external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: ./assets/js/back-end/screens/404/FourOFour.tsx







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
  }, (0,external_wp_i18n_namespaceObject.__)('We cannot find the page you are looking for.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.courses.list
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "blue"
  }, (0,external_wp_i18n_namespaceObject.__)('Back to Courses', 'masteriyo')))))));
};

/* harmony default export */ const _404_FourOFour = (FourOFour);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/tabs/dist/chakra-ui-tabs.esm.js
var chakra_ui_tabs_esm = __webpack_require__(3465);
// EXTERNAL MODULE: ./node_modules/react-grid-system/build/index.js
var build = __webpack_require__(2553);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/switch/dist/chakra-ui-switch.esm.js
var chakra_ui_switch_esm = __webpack_require__(4304);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(7516);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/add-ons/components/AddonItem.tsx




var AddonItem = function AddonItem(props) {
  var addOnName = props.addOnName,
      addOnDescription = props.addOnDescription,
      thumbnailSrc = props.thumbnailSrc;
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    borderColor: "gray.100",
    rounded: "sm",
    bg: "white",
    mb: "30px",
    shadow: "sm",
    minH: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_image_esm/* Image */.Ee, {
    src: thumbnailSrc,
    borderTopRightRadius: "sm",
    borderTopLeftRadius: "sm"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    position: "absolute",
    top: "1",
    right: "5",
    bg: "lightseagreen",
    borderRadius: "md",
    px: "1",
    textAlign: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "white",
    fontSize: "xs",
    p: "1"
  }, "Pro")), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    p: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    justify: "space-between",
    align: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    fontSize: "sm",
    fontWeight: "semibold",
    color: "gray.700"
  }, addOnName), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, {
    isChecked: false,
    colorScheme: "green",
    onChange: function onChange(e) {
      window.open('https://masteriyo.com/wordpress-lms/pricing/', '_blank');
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiLock */.egU,
    boxSize: "5",
    color: "gray.300"
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.500"
  }, addOnDescription))));
};

/* harmony default export */ const components_AddonItem = (AddonItem);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/add-ons/AddOns.tsx








var AddOns = function AddOns() {
  var _useState = (0,external_React_.useState)('any'),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var tabStyles = {
    fontWeight: 'medium',
    fontSize: 'sm',
    py: '6',
    px: 0,
    mx: 4,
    _hover: {
      color: 'blue.500'
    }
  };
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    align: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    w: "full",
    shadow: "header",
    pb: ['3', 0, 0]
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: ['column', 'row'],
    justifyContent: "space-between",
    align: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: ['column', null, 'row'],
    spacing: ['3', null, '8'],
    align: "center",
    minHeight: "16"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    d: ['none', null, 'block']
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_image_esm/* Image */.Ee, {
    src: logo,
    w: "36px"
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
    borderBottom: "none",
    bg: "white"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles,
    onClick: function onClick() {
      return setStatus('any');
    }
  }, (0,external_wp_i18n_namespaceObject.__)('All Addons', 'masteriyo')))))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    width: "100%",
    h: "auto",
    py: "4",
    mt: "6",
    bg: "linear-gradient(90.03deg, #4584FF 0.57%, #7761FF 99.97%)",
    color: "white"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    justifyContent: "space-between"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    pos: "relative",
    w: "300px"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    pos: "absolute",
    fontSize: "md",
    color: "white",
    left: "16px",
    top: "10px"
  }, (0,external_wp_i18n_namespaceObject.__)('SPECIAL INTRODUCTORY OFFER', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(ribbon, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "15px",
    fontWeight: "400"
  }, (0,external_wp_i18n_namespaceObject.__)('We are giving', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
    d: "inline-flex",
    w: "40px",
    h: "40px",
    bg: "rgba(255,255,255, 0.5)",
    fontWeight: "bold",
    rounded: "full"
  }, "75", /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    as: "span",
    fontSize: "xx-small"
  }, "%")), (0,external_wp_i18n_namespaceObject.__)('off on all our premium plans.', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "5"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    href: "https://masteriyo.com/wordpress-lms/pricing/",
    target: "_blank"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    color: "black"
  }, (0,external_wp_i18n_namespaceObject.__)('Buy now', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    href: "https://masteriyo.com/wordpress-lms/contact/",
    target: "_blank"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "unstyled",
    textDecor: "underline",
    color: "rgba(255,255,255,0.8)",
    _hover: {
      color: 'white'
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Any Queries?', 'masteriyo'))))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    width: "container.xl",
    ml: "auto",
    mr: "auto",
    mt: "10"
  }, /*#__PURE__*/external_React_default().createElement(build/* Row */.X2, null, /*#__PURE__*/external_React_default().createElement(build/* Col */.JX, {
    md: 3
  }, /*#__PURE__*/external_React_default().createElement(components_AddonItem, {
    addOnName: (0,external_wp_i18n_namespaceObject.__)('Stripe Payment Gateway', 'masteriyo'),
    addOnDescription: (0,external_wp_i18n_namespaceObject.__)('Easily sell online courses and accept credit card payments via Stripe. It supports major cards like Visa, MasterCard, American Express, Discover, debit cards, etc.', 'masteriyo'),
    thumbnailSrc: stripe
  })), /*#__PURE__*/external_React_default().createElement(build/* Col */.JX, {
    md: 3
  }, /*#__PURE__*/external_React_default().createElement(components_AddonItem, {
    addOnName: (0,external_wp_i18n_namespaceObject.__)('Download Materials', 'masteriyo'),
    addOnDescription: (0,external_wp_i18n_namespaceObject.__)('Attach unlimited lesson materials such as PDF, Doc, etc. Provide students with quick and easy access to download materials, and preview without download.', 'masteriyo'),
    thumbnailSrc: download_materials
  })), /*#__PURE__*/external_React_default().createElement(build/* Col */.JX, {
    md: 3
  }, /*#__PURE__*/external_React_default().createElement(components_AddonItem, {
    addOnName: (0,external_wp_i18n_namespaceObject.__)('WooCommerce Integration', 'masteriyo'),
    addOnDescription: (0,external_wp_i18n_namespaceObject.__)('WooCommerce Integration for Masteriyo allows to enroll users using WooCommerce checkout process and payment methods.', 'masteriyo'),
    thumbnailSrc: woocommerce
  })))));
};

/* harmony default export */ const add_ons_AddOns = (AddOns);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/toast/dist/chakra-ui-toast.esm.js + 3 modules
var chakra_ui_toast_esm = __webpack_require__(3083);
// EXTERNAL MODULE: ./node_modules/query-string/index.js
var query_string = __webpack_require__(7563);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.js
var dist_index_esm = __webpack_require__(2283);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/modal/dist/chakra-ui-modal.esm.js + 16 modules
var chakra_ui_modal_esm = __webpack_require__(6514);
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
// EXTERNAL MODULE: ./node_modules/@chakra-ui/form-control/dist/chakra-ui-form-control.esm.js
var chakra_ui_form_control_esm = __webpack_require__(9762);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js
var chakra_ui_input_esm = __webpack_require__(4612);
// EXTERNAL MODULE: ./node_modules/humanize-duration/humanize-duration.js
var humanize_duration = __webpack_require__(9695);
var humanize_duration_default = /*#__PURE__*/__webpack_require__.n(humanize_duration);
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
        if (!target[key]) Object.assign(target, (0,defineProperty/* default */.Z)({}, key, {}));
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, (0,defineProperty/* default */.Z)({}, key, source[key]));
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7326);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/textarea/dist/chakra-ui-textarea.esm.js
var chakra_ui_textarea_esm = __webpack_require__(3441);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/WPEditor.tsx







function WPEditor_createSuper(Derived) { var hasNativeReflectConstruct = WPEditor_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function WPEditor_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var _ref = window,
    WPEditor_wp = _ref.wp,
    addEventListener = _ref.addEventListener,
    removeEventListener = _ref.removeEventListener;

var WPEditor = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(WPEditor, _React$Component);

  var _super = WPEditor_createSuper(WPEditor);

  function WPEditor(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, WPEditor);

    _this = _super.call(this, props);
    _this.state = {
      editor: null,
      id: props.id
    };
    _this.initEditor = _this.initEditor.bind((0,assertThisInitialized/* default */.Z)(_this));
    return _this;
  }

  (0,createClass/* default */.Z)(WPEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (document.readyState === 'complete') {
        this.initEditor();
      } else {
        addEventListener('DOMContentLoaded', this.initEditor);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      removeEventListener('DOMContentLoaded', this.initEditor);
      WPEditor_wp.editor.remove(this.state.id);
    }
  }, {
    key: "initEditor",
    value: function initEditor() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var $this = this;
      id = null !== this.state.id ? this.state.id : $this.props.id;

      if (!isUndefined(WPEditor_wp) && !isUndefined(WPEditor_wp.editor)) {
        WPEditor_wp.editor.initialize("".concat(id), {
          tinymce: {
            wpautop: true,
            plugins: 'charmap textcolor colorpicker compat3x directionality fullscreen hr image lists media paste tabfocus wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wplink wptextpattern wpview',
            toolbar1: 'formatselect bold italic underline bullist numlist blockquote alignleft aligncenter alignright link wp_more media wp_add_media wp_adv',
            toolbar2: 'forecolor strikethrough wp_code wp_page removeformat charmap outdent indent undo redo wp_help ',
            setup: function setup(editor) {
              $this.setState({
                editor: editor,
                id: $this.props.id
              });
              editor.on('keyup change', function (e) {
                var content = editor.getContent();
                $this.props.onContentChange(content, $this.props.name);
              });
            },
            height: $this.props.height || 350
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var name = this.props.name ? this.props.name : '';
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
        sx: {
          '.mce-tinymce': {
            shadow: 'input',
            border: '1px',
            borderColor: 'gray.100',
            '.mce-statusbar': {
              borderTop: '1px solid',
              borderColor: 'gray.100'
            },
            '.mce-container-body': {
              bg: 'white'
            },
            '.mce-toolbar': {
              '.mce-btn': {
                borderColor: 'transparent',
                shadow: 'none',
                '&.mce-listbox': {
                  borderColor: 'gray.100',
                  rounded: '3px'
                },
                button: {
                  rounded: '3px',
                  padding: '1',
                  transition: 'all 0.35s',
                  '&:hover': {
                    borderColor: 'gray.100'
                  }
                },
                '.mce-ico': {
                  fontSize: '1rem',
                  lineHeight: 1.2
                },
                '&.mce-active': {
                  bg: 'blue.500',
                  color: 'white'
                }
              }
            },
            '.mce-toolbar-grp.mce-container.mce-panel.mce-first.mce-last': {
              borderBottom: '2px solid',
              borderColor: 'gray.100'
            },
            '.mce-top-part::before': {
              boxShadow: 'none'
            }
          }
        }
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_textarea_esm/* Textarea */.g, {
        id: this.props.id,
        value: this.props.value,
        onChange: function onChange(e) {
          return _this2.props.onContentChange(e.target.value);
        },
        name: name
      }));
    }
  }]);

  return WPEditor;
}((external_React_default()).Component);

/* harmony default export */ const common_WPEditor = (WPEditor);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/Editor.tsx







var Editor = function Editor(props) {
  var id = props.id,
      name = props.name,
      defaultValue = props.defaultValue,
      height = props.height;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      setValue = _useFormContext.setValue;

  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "hidden"
  }, register(name), {
    defaultValue: defaultValue
  })), /*#__PURE__*/external_React_default().createElement(common_WPEditor, {
    id: id,
    value: defaultValue,
    onContentChange: function onContentChange(value) {
      setValue(name, !isEmpty(value) ? value : ' ');
    },
    height: height
  }));
};

/* harmony default export */ const common_Editor = (Editor);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/course-categories/components/DescriptionInput.tsx





var DescriptionInput = function DescriptionInput(props) {
  var defaultValue = props.defaultValue;
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Description', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(common_Editor, {
    id: "mto-category-description",
    name: "description",
    defaultValue: defaultValue
  }));
};

/* harmony default export */ const components_DescriptionInput = (DescriptionInput);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/course-categories/components/NameInput.tsx






var NameInput = function NameInput(props) {
  var _errors$name;

  var defaultValue = props.defaultValue;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      errors = _useFormContext.formState.errors;

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.name)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    defaultValue: defaultValue,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Your Category Name', 'masteriyo')
  }, register('name', {
    required: (0,external_wp_i18n_namespaceObject.__)('You must provide a name for the category.', 'masteriyo')
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.name) && (errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message)));
};

/* harmony default export */ const components_NameInput = (NameInput);
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.browser.esm.js + 1 modules
var react_select_browser_esm = __webpack_require__(7789);
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
;// CONCATENATED MODULE: ./assets/js/back-end/config/styles.ts


function styles_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function styles_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? styles_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : styles_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var borderedBoxStyles = {
  border: '1px',
  borderColor: 'gray.100',
  rounded: 'sm',
  mb: '4',
  alignItems: 'center',
  justify: 'space-between',
  px: '2',
  py: '1'
};
var sectionHeaderStyles = {
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px',
  borderColor: 'gray.100',
  pb: '3'
};
var infoIconStyles = {
  d: 'inline-flex',
  alignItems: 'center',
  ml: '2',
  color: 'gray.400'
};
var reactSelectStyles = {
  valueContainer: function valueContainer(provided) {
    return styles_objectSpread(styles_objectSpread({}, provided), {}, {
      paddingTop: 0,
      paddingBottom: 0
    });
  },
  control: function control(provided, state) {
    return styles_objectSpread(styles_objectSpread({}, provided), {}, {
      minHeight: '40px',
      minWidth: '250px',
      boxShadow: theme_theme.shadows.input,
      borderRadius: theme_theme.radii.sm,
      borderColor: state.isDisabled ? theme_theme.colors.gray[200] : state.isFocused ? theme_theme.colors.blue : 'inherit',
      transition: 'all 0.35s ease-in-out',
      backgroundColor: theme_theme.colors.white,
      opacity: state.isDisabled ? '0.4' : '1',
      cursor: state.isDisabled ? 'not-allowed' : 'inherit',
      fontSize: theme_theme.fontSizes.sm,
      '&:hover': {
        borderColor: theme_theme.colors.gray[300]
      }
    });
  },
  placeholder: function placeholder(provided) {
    return styles_objectSpread(styles_objectSpread({}, provided), {}, {
      color: theme_theme.colors.gray[300],
      marginLeft: 0
    });
  },
  indicatorSeparator: function indicatorSeparator(provided) {
    return styles_objectSpread(styles_objectSpread({}, provided), {}, {
      backgroundColor: theme_theme.colors.gray[100]
    });
  },
  dropdownIndicator: function dropdownIndicator(provided) {
    return styles_objectSpread(styles_objectSpread({}, provided), {}, {
      color: theme_theme.colors.gray[300]
    });
  },
  option: function option(provided, state) {
    var _state$data;

    return styles_objectSpread(styles_objectSpread({}, provided), {}, {
      backgroundColor: state.isSelected ? theme_theme.colors.blue[300] : state.isFocused ? theme_theme.colors.blue[10] : 'transparent',
      color: (_state$data = state.data) !== null && _state$data !== void 0 && _state$data.isDisabled ? '#1a202c' : provided.color
    });
  },
  multiValue: function multiValue(provided) {
    return styles_objectSpread(styles_objectSpread({}, provided), {}, {
      backgroundColor: theme_theme.colors.blue[50]
    });
  },
  menu: function menu(provided) {
    return styles_objectSpread(styles_objectSpread({}, provided), {}, {
      borderRadius: theme_theme.radii.sm,
      zIndex: '3',
      fontSize: theme_theme.fontSizes.xs
    });
  }
};
var whileDraggingStyles = {
  bg: '#f8f8f8',
  border: '1px dashed',
  borderColor: 'gray.200',
  borderRadius: 'sm'
};
var tableStyles = {
  th: {
    pb: '6',
    borderBottom: 'none'
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
        pr: '6'
      }
    }
  },
  td: {
    py: '3',
    borderBottom: 'none'
  }
};
var navLinkStyles = {
  mr: '10',
  py: '6',
  d: 'flex',
  alignItems: 'center',
  fontWeight: 'medium',
  fontSize: ['xs', null, 'sm']
};
var navActiveStyles = {
  borderBottom: '2px',
  borderColor: 'blue.500',
  color: 'blue.500'
};
var tabStyles = {
  justifyContent: 'flex-start',
  width: [null, null, '180px'],
  borderLeft: 0,
  borderRight: '2px solid',
  borderRightColor: 'transparent',
  marginLeft: 0,
  marginRight: '-2px',
  pl: 0,
  fontSize: ['xs', null, 'sm'],
  textAlign: 'left'
};
var tabListStyles = {
  borderLeft: 0,
  borderRight: '2px solid',
  borderRightColor: 'gray.200'
};
var accountStyles = {
  '#masteriyo-account-container': {
    p: {
      mb: 0
    },
    ul: {
      li: {
        a: {
          textDecoration: 'none',
          color: 'gray.700',
          ':hover': {
            color: 'blue.500'
          },
          '&.active': {
            color: 'blue.500'
          }
        }
      }
    },
    table: {
      tr: {
        'td, th': {
          border: 'none',
          px: '2',
          a: {
            textDecoration: 'none'
          }
        }
      }
    },
    '.chakra-tabs__tablist': {
      button: {
        bg: 'none'
      }
    },
    '.copy-from': {
      bg: 'none'
    }
  }
};
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
;// CONCATENATED MODULE: ./assets/js/back-end/utils/categories.ts


function categories_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function categories_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? categories_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : categories_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var makeCategoriesHierarchy = function makeCategoriesHierarchy(categories) {
  var excludeId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  var newList = [];
  var includedCategoryIds = [];

  var makeCategoryChildren = function makeCategoryChildren(category) {
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var children = [];
    categories.filter(function (item) {
      return item.parent_id === category.id && item.id !== excludeId;
    }).forEach(function (child) {
      includedCategoryIds.push(child.id);
      children.push(categories_objectSpread(categories_objectSpread({}, child), {}, {
        depth: depth
      }));
      children = children.concat(makeCategoryChildren(child, depth + 1));
    });
    return children;
  };

  categories.filter(function (cat) {
    return cat.parent_id === 0 && cat.id !== excludeId;
  }).forEach(function (cat) {
    includedCategoryIds.push(cat.id);
    newList.push(categories_objectSpread(categories_objectSpread({}, cat), {}, {
      depth: 0
    }));
    newList = newList.concat(makeCategoryChildren(cat));
  }); // Include the categories that were left out because of its top level parent not being present.

  newList = categories.filter(function (category) {
    return !includedCategoryIds.includes(category.id);
  }).map(function (category) {
    return categories_objectSpread(categories_objectSpread({}, category), {}, {
      depth: 0
    });
  }).concat(newList);
  return newList;
};
var makeSlug = function makeSlug(str) {
  return str === null || str === void 0 ? void 0 : str.toLowerCase().replace(/\s/g, '-');
};
;// CONCATENATED MODULE: ./assets/js/back-end/screens/course-categories/components/ParentCategory.tsx













var ParentCategory = function ParentCategory(props) {
  var _errors$parentId;

  var defaultValue = props.defaultValue;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      errors = _useFormContext.formState.errors,
      control = _useFormContext.control;

  var categoryAPI = new api(constants_urls.categories);

  var _useState = (0,external_React_.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      categories = _useState2[0],
      setCategories = _useState2[1];

  var categoriesQuery = (0,es.useQuery)('categoryLists', function () {
    return categoryAPI.list({
      per_page: 100
    });
  }, {
    onSuccess: function onSuccess(response) {
      if (isArray(response === null || response === void 0 ? void 0 : response.data)) {
        var _makeCategoriesHierar;

        setCategories((_makeCategoriesHierar = makeCategoriesHierarchy(response.data)) === null || _makeCategoriesHierar === void 0 ? void 0 : _makeCategoriesHierar.map(function (cat) {
          return {
            value: cat === null || cat === void 0 ? void 0 : cat.id,
            label: '— '.repeat(cat === null || cat === void 0 ? void 0 : cat.depth) + (cat === null || cat === void 0 ? void 0 : cat.name)
          };
        }));
      }
    }
  });

  if (!categoriesQuery.isSuccess) {
    return null;
  }

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.parentId)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Parent Category', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "parentId",
    control: control,
    defaultValue: categories === null || categories === void 0 ? void 0 : categories.find(function (cat) {
      return defaultValue === (cat === null || cat === void 0 ? void 0 : cat.value);
    }),
    render: function render(_ref) {
      var _ref$field = _ref.field,
          onChange = _ref$field.onChange,
          value = _ref$field.value;
      return /*#__PURE__*/external_React_default().createElement(react_select_browser_esm/* default */.ZP, {
        onChange: onChange,
        value: value,
        styles: reactSelectStyles,
        options: categories,
        isClearable: true
      });
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.parentId) && (errors === null || errors === void 0 ? void 0 : (_errors$parentId = errors.parentId) === null || _errors$parentId === void 0 ? void 0 : _errors$parentId.message)));
};

/* harmony default export */ const components_ParentCategory = (ParentCategory);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/course-categories/components/SlugInput.tsx







var SlugInput = function SlugInput(props) {
  var _errors$slug;

  var defaultValue = props.defaultValue,
      defaultNameValue = props.defaultNameValue;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      errors = _useFormContext.formState.errors,
      control = _useFormContext.control;

  var watchedName = (0,dist_index_esm/* useWatch */.qo)({
    name: 'name',
    defaultValue: defaultNameValue || '',
    control: control
  });
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.slug)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Slug', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    defaultValue: defaultValue
  }, register('slug', {
    validate: function validate(value) {
      return value.includes(' ') ? (0,external_wp_i18n_namespaceObject.__)('Spaces are not allowed.', 'masteriyo') : true;
    }
  }), {
    placeholder: watchedName ? makeSlug(watchedName) : ''
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormHelperText */.Q6, {
    fontSize: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('The “slug” is the URL-friendly version of the name. It should be all lowercase and contains only letters, numbers, and hyphens.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.slug) && (errors === null || errors === void 0 ? void 0 : (_errors$slug = errors.slug) === null || _errors$slug === void 0 ? void 0 : _errors$slug.message)));
};

/* harmony default export */ const components_SlugInput = (SlugInput);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/spinner/dist/chakra-ui-spinner.esm.js
var chakra_ui_spinner_esm = __webpack_require__(9609);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/MediaUploader.tsx



var MediaUploader = function MediaUploader(props) {
  var modalTitle = props.modalTitle,
      buttonLabel = props.buttonLabel,
      _props$isMultiple = props.isMultiple,
      isMultiple = _props$isMultiple === void 0 ? false : _props$isMultiple,
      onSelect = props.onSelect,
      _props$size = props.size,
      size = _props$size === void 0 ? 'md' : _props$size,
      _props$isFullWidth = props.isFullWidth,
      isFullWidth = _props$isFullWidth === void 0 ? false : _props$isFullWidth,
      _props$mediaType = props.mediaType,
      mediaType = _props$mediaType === void 0 ? 'image' : _props$mediaType,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? {
    enable: false,
    name: null
  } : _props$icon;
  var frame;

  var handleButtonClick = function handleButtonClick(event) {
    var _wp;

    event.preventDefault();

    if (frame) {
      frame.open();
      return;
    } //@ts-ignore


    frame = (_wp = wp) === null || _wp === void 0 ? void 0 : _wp.media({
      title: modalTitle,
      library: {
        type: mediaType
      },
      multiple: isMultiple
    });
    frame.on('select', function () {
      var selectedItems = frame.state().get('selection').toJSON();
      'function' === typeof onSelect && onSelect(selectedItems);
    });
    frame.open();
  };

  return icon.enable ? /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    onClick: handleButtonClick,
    as: icon.name
  }) : /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    size: size,
    variant: "outline",
    isFullWidth: isFullWidth,
    colorScheme: "blue",
    onClick: handleButtonClick
  }, buttonLabel);
};

/* harmony default export */ const common_MediaUploader = (MediaUploader);
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
;// CONCATENATED MODULE: ./assets/js/back-end/screens/courses/components/FeaturedImage.tsx









var FeaturedImage = function FeaturedImage(props) {
  var _imageQuery$data, _imageQuery$data$medi, _imageQuery$data$medi2, _imageQuery$data$medi3, _imageQuery$data2, _imageQuery$data2$med, _imageQuery$data2$med2, _imageQuery$data2$med3, _imageQuery$data3;

  var defaultValue = props.defaultValue,
      _props$size = props.size,
      size = _props$size === void 0 ? 'full' : _props$size;

  var _useState = (0,external_React_.useState)(defaultValue || null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      imageId = _useState2[0],
      setImageId = _useState2[1];

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      setValue = _useFormContext.setValue;

  var imageAPi = new media();
  (0,external_React_.useEffect)(function () {
    setImageId(defaultValue || null);
  }, [defaultValue]);
  var imageQuery = (0,es.useQuery)(["featuredImage".concat(imageId), imageId], function () {
    return imageAPi.get(imageId);
  }, {
    enabled: !!imageId,
    refetchOnWindowFocus: true
  });

  var onComplete = function onComplete(imageId) {
    setImageId(imageId);
    setValue('featuredImage', imageId);
  };

  var onDelete = function onDelete() {
    setImageId(null);
    setValue('featuredImage', 0);
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Featured Image', 'masteriyo')), imageQuery.isLoading && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
    mb: "4",
    mt: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_spinner_esm/* Spinner */.$, null)), imageQuery.isSuccess && /*#__PURE__*/external_React_default().createElement(chakra_ui_image_esm/* Image */.Ee, {
    w: "full",
    src: imageQuery !== null && imageQuery !== void 0 && (_imageQuery$data = imageQuery.data) !== null && _imageQuery$data !== void 0 && (_imageQuery$data$medi = _imageQuery$data.media_details) !== null && _imageQuery$data$medi !== void 0 && (_imageQuery$data$medi2 = _imageQuery$data$medi.sizes) !== null && _imageQuery$data$medi2 !== void 0 && (_imageQuery$data$medi3 = _imageQuery$data$medi2[size]) !== null && _imageQuery$data$medi3 !== void 0 && _imageQuery$data$medi3.source_url ? imageQuery === null || imageQuery === void 0 ? void 0 : (_imageQuery$data2 = imageQuery.data) === null || _imageQuery$data2 === void 0 ? void 0 : (_imageQuery$data2$med = _imageQuery$data2.media_details) === null || _imageQuery$data2$med === void 0 ? void 0 : (_imageQuery$data2$med2 = _imageQuery$data2$med.sizes) === null || _imageQuery$data2$med2 === void 0 ? void 0 : (_imageQuery$data2$med3 = _imageQuery$data2$med2[size]) === null || _imageQuery$data2$med3 === void 0 ? void 0 : _imageQuery$data2$med3.source_url : imageQuery === null || imageQuery === void 0 ? void 0 : (_imageQuery$data3 = imageQuery.data) === null || _imageQuery$data3 === void 0 ? void 0 : _imageQuery$data3.source_url,
    mb: "4"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, {
    d: "flex",
    justifyContent: "space-between"
  }, imageId && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "outline",
    onClick: onDelete,
    colorScheme: "red"
  }, (0,external_wp_i18n_namespaceObject.__)('Remove Featured Image', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(common_MediaUploader, {
    buttonLabel: imageId ? (0,external_wp_i18n_namespaceObject.__)('Add New', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Add Featured Image', 'masteriyo'),
    modalTitle: "Featured Image",
    onSelect: function onSelect(data) {
      onComplete(data[0].id);
    },
    isFullWidth: imageId ? false : true
  })));
};

/* harmony default export */ const components_FeaturedImage = (FeaturedImage);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/AddCategoryModal.tsx


function AddCategoryModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function AddCategoryModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AddCategoryModal_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AddCategoryModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

















var AddCategoryModal = function AddCategoryModal() {
  var _useContext = (0,external_React_.useContext)(CreateCatModal),
      isCreateCatModalOpen = _useContext.isCreateCatModalOpen,
      setIsCreateCatModalOpen = _useContext.setIsCreateCatModalOpen;

  var methods = (0,dist_index_esm/* useForm */.cI)();
  var categoryAPI = new api(constants_urls.categories);
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var queryClient = (0,es.useQueryClient)();
  var createCategory = (0,es.useMutation)(function (data) {
    return categoryAPI.store(data);
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Category Added', 'masteriyo'),
        description: (0,external_wp_i18n_namespaceObject.__)('You can select the new category from dropdown.', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
      queryClient.invalidateQueries('categoryLists');
      setIsCreateCatModalOpen(false);
      methods.reset();
    },
    onError: function onError(error) {
      var _error$response, _error$response$data;

      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Failed to create category.', 'masteriyo'),
        description: "".concat((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message),
        isClosable: true,
        status: 'error'
      });
    }
  });

  var onSubmit = function onSubmit(data) {
    var _data$parentId;

    createCategory.mutate(deepClean(AddCategoryModal_objectSpread(AddCategoryModal_objectSpread({}, data), {}, {
      slug: data.slug ? data.slug : makeSlug(data.name),
      parent_id: (_data$parentId = data.parentId) === null || _data$parentId === void 0 ? void 0 : _data$parentId.value,
      featured_image: data.featuredImage
    })));
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* Modal */.u_, {
    isOpen: isCreateCatModalOpen,
    onClose: function onClose() {
      return setIsCreateCatModalOpen(false);
    },
    size: "2xl"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* ModalOverlay */.ZA, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* ModalContent */.hz, null, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, methods, /*#__PURE__*/external_React_default().createElement("form", {
    onSubmit: methods.handleSubmit(onSubmit)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* ModalHeader */.xB, null, (0,external_wp_i18n_namespaceObject.__)('Add New Category', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* ModalCloseButton */.ol, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* ModalBody */.fe, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "4"
  }, /*#__PURE__*/external_React_default().createElement(components_NameInput, null), /*#__PURE__*/external_React_default().createElement(components_SlugInput, null), /*#__PURE__*/external_React_default().createElement(components_ParentCategory, null), /*#__PURE__*/external_React_default().createElement(components_DescriptionInput, null), /*#__PURE__*/external_React_default().createElement(components_FeaturedImage, null))), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* ModalFooter */.mz, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "blue",
    type: "submit",
    isFullWidth: true,
    isLoading: createCategory.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Add New Category', 'masteriyo')))))));
};

/* harmony default export */ const common_AddCategoryModal = (AddCategoryModal);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/media-query/dist/chakra-ui-media-query.esm.js
var chakra_ui_media_query_esm = __webpack_require__(2684);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/transition/dist/chakra-ui-transition.esm.js
var chakra_ui_transition_esm = __webpack_require__(7496);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/ReviewNotice.tsx









var ReviewNotice = function ReviewNotice() {
  var _useState = (0,external_React_.useState)(global.show_review_notice === 'yes'),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isShowNotice = _useState2[0],
      setIsShowNotice = _useState2[1];

  var handleNotice = function handleNotice(masteriyo_action) {
    setIsShowNotice(false);
    global.show_review_notice = 'no';
    var formData = new FormData();
    formData.append('action', 'masteriyo_review_notice');
    formData.append('nonce', global.review_notice_nonce);
    formData.append('masteriyo_action', masteriyo_action);
    external_wp_apiFetch_default()({
      url: global.ajax_url,
      method: 'post',
      body: formData
    });
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
    "in": isShowNotice,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    background: "white",
    p: "6",
    spacing: "4",
    shadow: "box"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, {
    align: "flex-start",
    spacing: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    width: "12",
    height: "12",
    fill: "red",
    as: index_esm/* BiHeart */.kTx
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "16px",
    fontWeight: "bold"
  }, (0,external_wp_i18n_namespaceObject.__)('Love using LMS by Masteriyo?', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    color: "#7C7D8F"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, "Please do us a favor by providing 5-star"), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, {
    mx: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    width: "4",
    height: "4",
    fill: "#fec30d",
    as: full_star
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    width: "4",
    height: "4",
    fill: "#fec30d",
    as: full_star
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    width: "4",
    height: "4",
    fill: "#fec30d",
    as: full_star
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    width: "4",
    height: "4",
    fill: "#fec30d",
    as: full_star
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    width: "4",
    height: "4",
    fill: "#fec30d",
    as: full_star
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, "rating at WordPress.org. Let us know"), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    href: "https://masteriyo.com/contact/",
    target: "_blank",
    mx: "1",
    textDecoration: "underline"
  }, "here"), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, "if you have any query. - Masteriyo Team"))), /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    width: "6",
    height: "6",
    fill: "#ACACBE",
    cursor: "pointer",
    as: index_esm/* BiX */.czh,
    onClick: function onClick() {
      return handleNotice('close_notice');
    }
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, {
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    href: "https://wordpress.org/support/plugin/learning-management-system/reviews/?rate=5#new-post",
    target: "_blank"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    size: "sm",
    variant: "solid",
    colorScheme: "blue",
    onClick: function onClick() {
      return handleNotice('review_received');
    }
  }, (0,external_wp_i18n_namespaceObject.__)("Sure, I'd love to", 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    size: "sm",
    variant: "unstyled",
    onClick: function onClick() {
      return handleNotice('remind_me_later');
    },
    color: "#7C7D8F"
  }, (0,external_wp_i18n_namespaceObject.__)('Maybe later', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    size: "sm",
    variant: "unstyled",
    onClick: function onClick() {
      return handleNotice('already_reviewed');
    },
    color: "#7C7D8F"
  }, (0,external_wp_i18n_namespaceObject.__)('I already did', 'masteriyo'))))));
};

/* harmony default export */ const common_ReviewNotice = (ReviewNotice);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/Header.tsx











var Header = function Header(props) {
  var firstBtn = props.firstBtn,
      secondBtn = props.secondBtn,
      thirdBtn = props.thirdBtn,
      course = props.course,
      children = props.children,
      showLinks = props.showLinks,
      showPreview = props.showPreview,
      showCourseName = props.showCourseName;
  var location = (0,react_router/* useLocation */.TH)();

  var _useParams = (0,react_router/* useParams */.UO)(),
      courseId = _useParams.courseId;

  var buttonSize = (0,chakra_ui_media_query_esm/* useBreakpointValue */.Sx)(['sm', 'md']);

  var _useMediaQuery = (0,chakra_ui_media_query_esm/* useMediaQuery */.ac)('(min-width: 48em)'),
      _useMediaQuery2 = (0,slicedToArray/* default */.Z)(_useMediaQuery, 1),
      isDesktop = _useMediaQuery2[0];

  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    w: "full",
    shadow: "header",
    pb: ['3', 0, 0]
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: ['column', 'row'],
    justifyContent: "space-between",
    align: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: ['column', null, 'row'],
    spacing: ['3', null, '8'],
    align: "center",
    minHeight: "16"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    d: ['none', null, 'block']
  }, /*#__PURE__*/external_React_default().createElement(react_router_dom/* NavLink */.OL, {
    to: constants_routes.courses.list
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_image_esm/* Image */.Ee, {
    src: logo,
    w: "36px"
  }))), showCourseName && /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, course && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    fontSize: "md",
    fontWeight: "medium"
  }, course.name)), children, showLinks && courseId && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, {
    d: "flex"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    mb: "0"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* NavLink */.OL,
    sx: navLinkStyles,
    _activeLink: navActiveStyles,
    to: constants_routes.courses.edit.replace(':courseId', courseId.toString())
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: index_esm/* BiBook */.lOc
  }), (0,external_wp_i18n_namespaceObject.__)('Course', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    mb: "0"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* NavLink */.OL,
    sx: navLinkStyles,
    isActive: function isActive() {
      return location.pathname.includes('/courses');
    },
    _activeLink: navActiveStyles,
    to: constants_routes.courses.edit.replace(':courseId', courseId.toString()) + '?page=builder'
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: index_esm/* BiEdit */.Hlf
  }), (0,external_wp_i18n_namespaceObject.__)('Builder', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    mb: "0"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* NavLink */.OL,
    sx: navLinkStyles,
    _activeLink: navActiveStyles,
    to: constants_routes.courses.edit.replace(':courseId', courseId.toString()) + '?page=settings'
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: index_esm/* BiCog */.MBj
  }), (0,external_wp_i18n_namespaceObject.__)('Settings', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, firstBtn && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    size: buttonSize,
    variant: "outline",
    onClick: firstBtn.action,
    isLoading: firstBtn.isLoading,
    isDisabled: firstBtn.isDisabled
  }, firstBtn.label), showPreview && (course === null || course === void 0 ? void 0 : course.previewUrl) && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    href: course === null || course === void 0 ? void 0 : course.previewUrl,
    isExternal: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    size: buttonSize,
    variant: "outline"
  }, (0,external_wp_i18n_namespaceObject.__)('Preview', 'masteriyo'))), secondBtn && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    size: buttonSize,
    variant: "outline",
    colorScheme: "blue",
    onClick: secondBtn.action,
    leftIcon: secondBtn.icon,
    isDisabled: secondBtn.isDisabled,
    isLoading: secondBtn.isLoading
  }, secondBtn.label), thirdBtn && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    size: buttonSize,
    colorScheme: "blue",
    onClick: thirdBtn.action,
    isDisabled: thirdBtn.isDisabled,
    leftIcon: isDesktop ? thirdBtn.icon : /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null),
    isLoading: thirdBtn.isLoading
  }, thirdBtn.label))))), /*#__PURE__*/external_React_default().createElement(common_ReviewNotice, null));
};

/* harmony default export */ const common_Header = (Header);
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
// EXTERNAL MODULE: ./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js
var chakra_ui_skeleton_esm = __webpack_require__(4107);
// EXTERNAL MODULE: ./node_modules/react-select/dist/index-4322c0ed.browser.esm.js
var index_4322c0ed_browser_esm = __webpack_require__(9584);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/ReactSelectOptions.tsx




var ReactSelectOptions = function ReactSelectOptions(props) {
  return /*#__PURE__*/external_React_default().createElement(index_4322c0ed_browser_esm.y.MenuList, props, props.children, props.selectProps.isFetchingNextPage ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    p: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
    noOfLines: 1
  })) : null);
};

/* harmony default export */ const common_ReactSelectOptions = (ReactSelectOptions);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/courses/components/Categories.tsx















var Categories = function Categories(props) {
  var defaultValue = props.defaultValue;

  var _useContext = (0,external_React_.useContext)(CreateCatModal),
      setIsCreateCatModalOpen = _useContext.setIsCreateCatModalOpen;

  var _useState = (0,external_React_.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      categoriesList = _useState2[0],
      setCategoriesList = _useState2[1];

  var categoryAPI = new api(constants_urls.categories);
  var categoriesQuery = (0,es.useInfiniteQuery)('categoryLists', function (_ref) {
    var _ref$pageParam = _ref.pageParam,
        pageParam = _ref$pageParam === void 0 ? 1 : _ref$pageParam;
    return categoryAPI.list({
      per_page: 10,
      page: pageParam
    });
  }, {
    retry: false,
    onSuccess: function onSuccess(response) {
      var _response$pages;

      var categories = [];
      response === null || response === void 0 ? void 0 : (_response$pages = response.pages) === null || _response$pages === void 0 ? void 0 : _response$pages.forEach(function (page) {
        page.data.forEach(function (category) {
          categories.push(category);
        });
      });
      setCategoriesList(makeCategoriesHierarchy(categories).map(function (category) {
        return {
          value: category.id,
          label: '— '.repeat(category.depth) + category.name
        };
      }));
    },
    getNextPageParam: function getNextPageParam(lastResponse) {
      return lastResponse.meta.current_page >= lastResponse.meta.pages ? undefined : lastResponse.meta.current_page + 1;
    }
  });
  var hasNextPage = categoriesQuery.hasNextPage,
      fetchNextPage = categoriesQuery.fetchNextPage,
      isFetchingNextPage = categoriesQuery.isFetchingNextPage;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      control = _useFormContext.control;

  if (categoriesQuery.isSuccess) {
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Categories', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
      name: "categories",
      control: control,
      defaultValue: defaultValue && (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.map(function (category) {
        return {
          value: category.id,
          label: category.name
        };
      })),
      render: function render(_ref2) {
        var _ref2$field = _ref2.field,
            onChange = _ref2$field.onChange,
            value = _ref2$field.value;
        return /*#__PURE__*/external_React_default().createElement(react_select_browser_esm/* default */.ZP, {
          onChange: onChange,
          value: value,
          styles: reactSelectStyles,
          closeMenuOnSelect: false,
          isMulti: true,
          isFetchingNextPage: isFetchingNextPage,
          options: categoriesList,
          onMenuScrollToBottom: function onMenuScrollToBottom() {
            if (hasNextPage) {
              fetchNextPage();
            }
          },
          components: {
            MenuList: common_ReactSelectOptions
          },
          noOptionsMessage: function noOptionsMessage(_ref3) {
            var inputValue = _ref3.inputValue;

            if (inputValue.length > 0) {
              return (0,external_wp_i18n_namespaceObject.__)('No categories found.', 'masteriyo');
            }

            return (0,external_wp_i18n_namespaceObject.__)('No categories.', 'masteriyo');
          }
        });
      }
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, {
      mt: "4"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      variant: "link",
      leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        fontSize: "xl",
        as: index_esm/* BiPlus */.poH
      }),
      onClick: function onClick() {
        return setIsCreateCatModalOpen(true);
      },
      _hover: {
        color: 'blue.500'
      }
    }, (0,external_wp_i18n_namespaceObject.__)('Add New Category', 'masteriyo'))));
  }

  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null);
};

/* harmony default export */ const components_Categories = (Categories);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/courses/components/Description.tsx





var Description = function Description(props) {
  var defaultValue = props.defaultValue;
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Course Description', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(common_Editor, {
    id: "mto-course-description",
    name: "description",
    defaultValue: defaultValue
  }));
};

/* harmony default export */ const components_Description = (Description);
;// CONCATENATED MODULE: external ["wp","blockEditor"]
const external_wp_blockEditor_namespaceObject = window["wp"]["blockEditor"];
;// CONCATENATED MODULE: ./assets/js/back-end/screens/courses/components/Highlights.tsx






var Highlights = function Highlights(props) {
  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      setValue = _useFormContext.setValue;

  var defaultValue = props.defaultValue;
  var formattedDefaultValue = defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.replaceAll('<ul>', '').replaceAll('</ul>', '').replaceAll('<p>', '').replaceAll('</p>', '');
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Course Highlights', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    border: "1px",
    fontSize: "sm",
    borderColor: "gray.200",
    shadow: "input",
    rounded: "sm",
    minH: "28",
    pl: "5",
    sx: {
      ul: {
        listStyleType: 'disc',
        outline: 'none'
      }
    }
  }, /*#__PURE__*/external_React_default().createElement(external_wp_blockEditor_namespaceObject.RichText, {
    identifier: "values",
    tagName: "ul",
    multiline: "li",
    value: formattedDefaultValue || '',
    onChange: function onChange(val) {
      return setValue('highlights', val);
    }
  })));
};

/* harmony default export */ const components_Highlights = (Highlights);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/courses/components/Name.tsx






var Name = function Name(props) {
  var _errors$name;

  var defaultValue = props.defaultValue;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      errors = _useFormContext.formState.errors;

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.name)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Course Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    defaultValue: defaultValue,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Your Course Name', 'masteriyo')
  }, register('name', {
    required: (0,external_wp_i18n_namespaceObject.__)('You must provide a name for the course.', 'masteriyo')
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.name) && (errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message)));
};

/* harmony default export */ const components_Name = (Name);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/courses/EditCourse.tsx








var EditCourse = function EditCourse(props) {
  var courseData = props.courseData;
  return /*#__PURE__*/external_React_default().createElement("form", null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: ['column', null, 'row'],
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    flex: "1",
    bg: "white",
    p: ['4', null, '10'],
    shadow: "box",
    d: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(components_Name, {
    defaultValue: courseData === null || courseData === void 0 ? void 0 : courseData.name
  }), /*#__PURE__*/external_React_default().createElement(components_Description, {
    defaultValue: courseData === null || courseData === void 0 ? void 0 : courseData.description
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    w: ['100%', null, '400px'],
    bg: "white",
    p: ['4', null, '10'],
    shadow: "box"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(components_Highlights, {
    defaultValue: courseData === null || courseData === void 0 ? void 0 : courseData.highlights
  }), /*#__PURE__*/external_React_default().createElement(components_Categories, {
    defaultValue: courseData === null || courseData === void 0 ? void 0 : courseData.categories
  }), /*#__PURE__*/external_React_default().createElement(components_FeaturedImage, {
    defaultValue: courseData === null || courseData === void 0 ? void 0 : courseData.featured_image
  })))));
};

/* harmony default export */ const courses_EditCourse = (EditCourse);
// EXTERNAL MODULE: ./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js + 21 modules
var react_beautiful_dnd_esm = __webpack_require__(7445);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/AddNewButton.tsx


var _excluded = ["children"];



var AddNewButton = /*#__PURE__*/(0,external_React_.forwardRef)(function (props, ref) {
  var children = props.children,
      rest = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, (0,esm_extends/* default */.Z)({}, rest, {
    variant: "link",
    ref: ref,
    sx: {
      '.chakra-button__icon': {
        fontSize: 'lg',
        rounded: 'full',
        shadow: 'xs',
        bg: 'blue.500',
        color: 'white',
        h: '26px',
        w: '26px',
        d: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiPlus */.poH
    })
  }), children);
});
AddNewButton.displayName = 'AddNewButton';
/* harmony default export */ const common_AddNewButton = (AddNewButton);
;// CONCATENATED MODULE: ./assets/js/back-end/utils/reorder.ts


function reorder_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function reorder_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? reorder_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : reorder_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var reorder = function reorder(result, builderData) {
  var source = result.source,
      destination = result.destination,
      draggableId = result.draggableId,
      type = result.type; // if dropped outside the droppable area

  if (!destination) {
    return builderData;
  } // moving to same place


  if (destination.droppableId === source.droppableId && destination.index === source.index) {
    return builderData;
  } // moving section


  if (type === 'section') {
    var newSectionOrder = Array.from(builderData.section_order);
    newSectionOrder.splice(source.index, 1);
    newSectionOrder.splice(destination.index, 0, draggableId);

    var newBuilderData = reorder_objectSpread(reorder_objectSpread({}, builderData), {}, {
      section_order: newSectionOrder
    });

    return newBuilderData;
  } // moving content


  if (type === 'content') {
    var currentSection = builderData.sections[source.droppableId];
    var destinationSection = builderData.sections[destination.droppableId]; // moving on same section

    if (currentSection === destinationSection) {
      var newContents = Array.from(currentSection.contents);
      newContents.splice(source.index, 1);
      newContents.splice(destination.index, 0, draggableId);

      var newSection = reorder_objectSpread(reorder_objectSpread({}, currentSection), {}, {
        contents: newContents
      });

      var _newBuilderData = reorder_objectSpread(reorder_objectSpread({}, builderData), {}, {
        sections: reorder_objectSpread(reorder_objectSpread({}, builderData.sections), {}, (0,defineProperty/* default */.Z)({}, newSection.id, newSection))
      });

      return _newBuilderData;
    } else {
      var _objectSpread3;

      var currentContents = Array.from(currentSection.contents);
      currentContents.splice(source.index, 1);

      var newCurrentSection = reorder_objectSpread(reorder_objectSpread({}, currentSection), {}, {
        contents: currentContents
      });

      var destinationContents = Array.from(destinationSection.contents);
      destinationContents.splice(destination.index, 0, draggableId);

      var newDestinationSection = reorder_objectSpread(reorder_objectSpread({}, destinationSection), {}, {
        contents: destinationContents
      });

      var _newBuilderData2 = reorder_objectSpread(reorder_objectSpread({}, builderData), {}, {
        sections: reorder_objectSpread(reorder_objectSpread({}, builderData.sections), {}, (_objectSpread3 = {}, (0,defineProperty/* default */.Z)(_objectSpread3, newCurrentSection.id, newCurrentSection), (0,defineProperty/* default */.Z)(_objectSpread3, newDestinationSection.id, newDestinationSection), _objectSpread3))
      });

      return _newBuilderData2;
    }
  }
};
;// CONCATENATED MODULE: ./assets/js/back-end/screens/sections/components/NewSection.tsx










var NewSection = function NewSection(props) {
  var onSave = props.onSave,
      onCancel = props.onCancel,
      courseId = props.courseId;
  var methods = (0,dist_index_esm/* useForm */.cI)();
  var register = methods.register,
      handleSubmit = methods.handleSubmit,
      reset = methods.reset,
      errors = methods.formState.errors;
  var queryClient = (0,es.useQueryClient)();
  var sectionAPI = new api(constants_urls.sections);
  var addSection = (0,es.useMutation)(function (data) {
    return sectionAPI.store(data);
  }, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries("builder".concat(courseId));
      reset();
      onSave();
    }
  });

  var onSubmit = function onSubmit(data) {
    var cleanData = deepClean(data);
    var newData = {
      parent_id: courseId,
      course_id: courseId
    };
    addSection.mutate(deepMerge(cleanData, newData));
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    p: "8",
    bg: "white",
    shadow: "box",
    mb: "8"
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, methods, /*#__PURE__*/external_React_default().createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.name)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
    htmlFor: ""
  }, (0,external_wp_i18n_namespaceObject.__)('Section Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Your Section Name', 'masteriyo')
  }, register('name', {
    required: (0,external_wp_i18n_namespaceObject.__)('Section name cannot be empty.', 'masteriyo')
  }))), (errors === null || errors === void 0 ? void 0 : errors.name) && /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, errors === null || errors === void 0 ? void 0 : errors.name.message)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "blue",
    type: "submit",
    isLoading: addSection.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Add', 'masteriyo')), !addSection.isLoading && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "outline",
    onClick: function onClick() {
      return onCancel();
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')))))));
};

/* harmony default export */ const components_NewSection = (NewSection);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js
var chakra_ui_hooks_esm = __webpack_require__(7375);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/menu/dist/chakra-ui-menu.esm.js
var chakra_ui_menu_esm = __webpack_require__(7989);
;// CONCATENATED MODULE: ./assets/js/back-end/assets/icons/fill-in-the-blanks.svg



function fill_in_the_blanks_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    clipRule: "evenodd",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_.createElement("path", {
    d: "M3.593 3.475h21.773v21.371H3.593z",
    fill: "#ebebeb"
  }), /*#__PURE__*/external_React_.createElement("path", {
    d: "M28 3c0-1.656-1.344-3-3-3H3C1.344 0 0 1.344 0 3v22c0 1.656 1.344 3 3 3h22c1.656 0 3-1.344 3-3zM4.667 21h17.5v-2h-17.5zm9.911-5.606a.559.559 0 00.14-.017l2.311-.578a.576.576 0 00.268-.152L24.4 7.545a1.152 1.152 0 000-1.634l-.916-.917a1.184 1.184 0 00-1.634 0l-7.103 7.103a.585.585 0 00-.152.268l-.578 2.311a.573.573 0 00.561.718zm1.099-2.593l5.256-5.256.917.916-5.257 5.256-1.221.305zm6.99-6.99l.916.917-.916.916-.917-.916z",
    fill: "#ff9066"
  }));
}

/* harmony default export */ const fill_in_the_blanks = (fill_in_the_blanks_SvgComponent);
;// CONCATENATED MODULE: ./assets/js/back-end/assets/icons/image-matching.svg



function image_matching_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    clipRule: "evenodd",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_.createElement("path", {
    d: "M3.593 3.475h21.773v21.371H3.593z",
    fill: "#ebebeb"
  }), /*#__PURE__*/external_React_.createElement("path", {
    d: "M28 3c0-1.656-1.344-3-3-3H3C1.344 0 0 1.344 0 3v22c0 1.656 1.344 3 3 3h22c1.656 0 3-1.344 3-3zM8.833 10.667H7.417v8.5c0 .781.635 1.416 1.416 1.416h8.5v-1.416h-8.5zm11.334-4.25h-8.5c-.782 0-1.417.635-1.417 1.416v8.5c0 .782.635 1.417 1.417 1.417h8.5c.781 0 1.416-.635 1.416-1.417v-8.5c0-.781-.635-1.416-1.416-1.416zm-8.5 9.916v-8.5h8.5l.001 8.5zM14.5 13.5l-.708-.708-1.417 2.125h7.083l-2.833-4.25z",
    fill: "#d67af1"
  }));
}

/* harmony default export */ const image_matching = (image_matching_SvgComponent);
;// CONCATENATED MODULE: ./assets/js/back-end/assets/icons/multiple-choice.svg



function multiple_choice_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    clipRule: "evenodd",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_.createElement("path", {
    d: "M3.593 3.475h21.773v21.371H3.593z",
    fill: "#ebebeb"
  }), /*#__PURE__*/external_React_.createElement("path", {
    d: "M28 3c0-1.656-1.344-3-3-3H3C1.344 0 0 1.344 0 3v22c0 1.656 1.344 3 3 3h22c1.656 0 3-1.344 3-3zM11.625 19.881l-3.576-3.576-1.535 1.536 5.111 5.111 10.542-10.541-1.536-1.535zm0-5.833l-3.576-3.576-1.535 1.536 5.111 5.111L22.167 6.578l-1.536-1.536z",
    fill: "#3bc3c3"
  }));
}

/* harmony default export */ const multiple_choice = (multiple_choice_SvgComponent);
;// CONCATENATED MODULE: ./assets/js/back-end/assets/icons/open-ended-essay.svg



function open_ended_essay_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    clipRule: "evenodd",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_.createElement("path", {
    d: "M3.593 3.475h21.773v21.371H3.593z",
    fill: "#ebebeb"
  }), /*#__PURE__*/external_React_.createElement("path", {
    d: "M28 3c0-1.656-1.344-3-3-3H3C1.344 0 0 1.344 0 3v22c0 1.656 1.344 3 3 3h22c1.656 0 3-1.344 3-3zM16.831 15.367c-.2.206-.347.461-.428.741l-.401 1.392h-.652a.293.293 0 01-.267-.178c-.316-.652-1.219-.829-1.738-.387l-.366-1.138a.633.633 0 00-.6-.449.633.633 0 00-.599.449l-.48 1.494a.294.294 0 01-.279.209h-.326a.43.43 0 00-.422.438.43.43 0 00.422.437h.326a1.14 1.14 0 001.079-.807l.28-.872.442 1.38c.027.082.076.154.142.207s.145.085.229.091l.029.001a.42.42 0 00.377-.242l.202-.419c.073-.153.209-.17.264-.17s.191.016.268.179c.194.402.584.652 1.017.652h1.664v1.313H9.43V8.315h4.213v2.843c0 .364.281.656.632.656h2.739v2.133l1.264-1.301v-2.037c0-.347-.136-.684-.373-.93l-2.209-2.293A1.238 1.238 0 0014.803 7H9.43c-.697.003-1.263.591-1.263 1.315v11.373c0 .724.566 1.312 1.263 1.312h7.582c.698 0 1.266-.588 1.266-1.312v-2.057l3.546-3.707-1.788-1.856zm6.306-3.792l-.839-.871a.653.653 0 00-.948 0l-.718.745 1.788 1.856.717-.745a.715.715 0 000-.985zm-8.231-3.153l2.004 2.08h-2.004z",
    fill: "#af6ded"
  }));
}

/* harmony default export */ const open_ended_essay = (open_ended_essay_SvgComponent);
;// CONCATENATED MODULE: ./assets/js/back-end/assets/icons/single-choice.svg



function single_choice_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    clipRule: "evenodd",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_.createElement("path", {
    d: "M3.593 3.475h21.773v21.371H3.593z",
    fill: "#ebebeb"
  }), /*#__PURE__*/external_React_.createElement("path", {
    d: "M28 3c0-1.656-1.344-3-3-3H3C1.344 0 0 1.344 0 3v22c0 1.656 1.344 3 3 3h22c1.656 0 3-1.344 3-3zM11.625 17.548l-3.576-3.576-1.535 1.536 5.111 5.111 10.542-10.541-1.536-1.536z",
    fill: "#ffc844"
  }));
}

/* harmony default export */ const single_choice = (single_choice_SvgComponent);
;// CONCATENATED MODULE: ./assets/js/back-end/assets/icons/sortable-question.svg



function sortable_question_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    clipRule: "evenodd",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_.createElement("path", {
    d: "M3.593 3.475h21.773v21.371H3.593z",
    fill: "#ebebeb"
  }), /*#__PURE__*/external_React_.createElement("path", {
    d: "M28 3c0-1.656-1.344-3-3-3H3C1.344 0 0 1.344 0 3v22c0 1.656 1.344 3 3 3h22c1.656 0 3-1.344 3-3zM10.667 17.333H7.833l4.25 4.25V7.417h-1.416zm4.25-9.916v14.166h1.416v-9.916h2.834z",
    fill: "#3ad0ae"
  }));
}

/* harmony default export */ const sortable_question = (sortable_question_SvgComponent);
;// CONCATENATED MODULE: ./assets/js/back-end/assets/icons/sortable.svg



function sortable_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2
  }, props), /*#__PURE__*/external_React_.createElement("path", {
    d: "M7.182 9.455h2.363v2.363H7.182V9.455zm-4.727 0h2.363v2.363H2.455V9.455zm4.727-4.728h2.363v2.364H7.182V4.727zm-4.727 0h2.363v2.364H2.455V4.727zm0-4.727h2.363v2.364H2.455V0zm4.727 0h2.363v2.364H7.182V0z",
    fillRule: "nonzero"
  }));
}

/* harmony default export */ const sortable = (sortable_SvgComponent);
;// CONCATENATED MODULE: ./assets/js/back-end/assets/icons/yes-no.svg



function yes_no_SvgComponent(props) {
  return /*#__PURE__*/external_React_.createElement("svg", (0,esm_extends/* default */.Z)({
    clipRule: "evenodd",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_.createElement("path", {
    d: "M3.593 3.475h21.773v21.371H3.593z",
    fill: "#ebebeb"
  }), /*#__PURE__*/external_React_.createElement("path", {
    d: "M28 3c0-1.656-1.344-3-3-3H3C1.344 0 0 1.344 0 3v22c0 1.656 1.344 3 3 3h22c1.656 0 3-1.344 3-3zM14.395 9.944l-7.097 7.097-3.065-3.065-1.316 1.316 4.381 4.382 8.413-8.413 2.712 2.712-4.028 4.028 1.343 1.343 4.028-4.028 4.03 4.028 1.342-1.343-4.028-4.028 4.028-4.029-1.342-1.342-4.03 4.028-4.028-4.028z",
    fill: "#4dabf7"
  }));
}

/* harmony default export */ const yes_no = (yes_no_SvgComponent);
;// CONCATENATED MODULE: ./assets/js/back-end/assets/icons/index.ts








// EXTERNAL MODULE: ./node_modules/@chakra-ui/tooltip/dist/chakra-ui-tooltip.esm.js
var chakra_ui_tooltip_esm = __webpack_require__(7398);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/sections/components/Content.tsx













var Content = function Content(props) {
  var id = props.id,
      name = props.name,
      type = props.type,
      index = props.index,
      courseId = props.courseId,
      hasVideo = props.hasVideo,
      previewPermalink = props.previewPermalink;
  var history = (0,react_router/* useHistory */.k6)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var queryClient = (0,es.useQueryClient)();

  var _useDisclosure = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)(),
      onClose = _useDisclosure.onClose,
      onOpen = _useDisclosure.onOpen,
      isOpen = _useDisclosure.isOpen;

  var cancelRef = (0,external_React_.useRef)();
  var lessonAPI = new api(constants_urls.lessons);
  var quizAPI = new api(constants_urls.quizes);

  var onEditPress = function onEditPress() {
    if (type === 'lesson') {
      history.push(constants_routes.lesson.edit.replace(':lessonId', id.toString()).replace(':courseId', courseId.toString()));
    }

    if (type === 'quiz') {
      history.push(constants_routes.quiz.edit.replace(':quizId', id.toString()).replace(':courseId', courseId.toString()));
    }
  };

  var deleteLesson = (0,es.useMutation)(function (id) {
    return lessonAPI["delete"](id);
  }, {
    onSuccess: function onSuccess() {
      onClose();
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Lesson Deleted.', 'masteriyo'),
        isClosable: true,
        status: 'error'
      });
      queryClient.invalidateQueries("builder".concat(courseId));
    }
  });
  var deleteQuiz = (0,es.useMutation)(function (id) {
    return quizAPI["delete"](id);
  }, {
    onSuccess: function onSuccess() {
      onClose();
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Quiz Deleted.', 'masteriyo'),
        isClosable: true,
        status: 'error'
      });
      queryClient.invalidateQueries("builder".concat(courseId));
    }
  });

  var onDeletePress = function onDeletePress() {
    onOpen();
  };

  var onDeleteConfirm = function onDeleteConfirm() {
    if (type === 'lesson') {
      deleteLesson.mutate(id);
    } else if (type === 'quiz') {
      deleteQuiz.mutate(id);
    }
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

  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(react_beautiful_dnd_esm/* Draggable */._l, {
    draggableId: id.toString(),
    index: index
  }, function (draggableProvided) {
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, (0,esm_extends/* default */.Z)({
      justify: "space-between",
      rounded: "sm",
      bg: "white",
      border: "1px",
      borderColor: "gray.100",
      mb: "3",
      _last: {
        mb: 0
      },
      ref: draggableProvided.innerRef
    }, draggableProvided.draggableProps), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "3",
      align: "center"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, (0,esm_extends/* default */.Z)({
      as: "span",
      p: "2"
    }, draggableProvided.dragHandleProps, {
      borderRight: "1px",
      borderColor: "gray.200"
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: sortable,
      fontSize: "lg",
      color: "gray.500"
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      color: "blue.400",
      as: getContentIcon(type, hasVideo),
      fontSize: "xl"
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
      fontSize: "sm",
      onClick: onEditPress
    }, name)), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, {
      color: "gray.400",
      size: "xs",
      p: "2"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Preview', 'masteriyo')
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
      href: previewPermalink,
      isExternal: true
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
      _hover: {
        color: 'gray.700'
      },
      variant: "unstyled",
      icon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        fontSize: "xl",
        as: index_esm/* BiShow */.A7v
      }),
      "aria-label": (0,external_wp_i18n_namespaceObject.__)('Preview', 'masteriyo')
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Edit', 'masteriyo')
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
      _hover: {
        color: 'gray.700'
      },
      onClick: onEditPress,
      variant: "unstyled",
      icon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        fontSize: "xl",
        as: index_esm/* BiEdit */.Hlf
      }),
      "aria-label": (0,external_wp_i18n_namespaceObject.__)('Edit', 'masteriyo')
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo')
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
      _hover: {
        color: 'red.500'
      },
      onClick: onDeletePress,
      variant: "unstyled",
      icon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        fontSize: "xl",
        as: index_esm/* BiTrash */.SW4
      }),
      "aria-label": (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo')
    }))));
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
    isOpen: isOpen,
    onClose: onClose,
    isCentered: true,
    leastDestructiveRef: cancelRef
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.sprintf)((0,external_wp_i18n_namespaceObject.__)('Delete %s - %s?', 'masteriyo'), type, name)), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, (0,external_wp_i18n_namespaceObject.__)('Are you sure? You can’t restore after deleting.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    ref: cancelRef,
    onClick: onClose,
    variant: "outline"
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "red",
    onClick: onDeleteConfirm,
    isLoading: deleteQuiz.isLoading || deleteLesson.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))))));
};

/* harmony default export */ const components_Content = (Content);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/sections/components/EditSection.tsx










var EditSection = function EditSection(props) {
  var id = props.id,
      name = props.name,
      onSave = props.onSave,
      onCancel = props.onCancel,
      courseId = props.courseId;

  var _useForm = (0,dist_index_esm/* useForm */.cI)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var queryClient = (0,es.useQueryClient)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var sectionAPI = new api(constants_urls.sections);
  var updateMutation = (0,es.useMutation)(function (data) {
    return sectionAPI.update(id, data);
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Updated', 'masteriyo'),
        status: 'success',
        isClosable: true
      });
      queryClient.invalidateQueries("builder".concat(courseId));
      onSave();
    }
  });

  var onUpdate = function onUpdate(data) {
    updateMutation.mutate(deepClean(data));
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    p: "5",
    pt: "0"
  }, /*#__PURE__*/external_React_default().createElement("form", {
    onSubmit: handleSubmit(onUpdate)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.name)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
    htmlFor: ""
  }, (0,external_wp_i18n_namespaceObject.__)('Section Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Your Section Name', 'masteriyo'),
    defaultValue: name
  }, register('name', {
    required: (0,external_wp_i18n_namespaceObject.__)('Section name cannot be empty.', 'masteriyo')
  }))), (errors === null || errors === void 0 ? void 0 : errors.name) && /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, errors === null || errors === void 0 ? void 0 : errors.name.message)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "blue",
    type: "submit"
  }, (0,external_wp_i18n_namespaceObject.__)('Save', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "outline",
    onClick: function onClick() {
      return onCancel();
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null))));
};

/* harmony default export */ const components_EditSection = (EditSection);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/sections/components/Section.tsx


















var Section = function Section(props) {
  var id = props.id,
      name = props.name,
      description = props.description,
      index = props.index,
      contents = props.contents,
      contentsMap = props.contentsMap,
      courseId = props.courseId;

  var _useState = (0,external_React_.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  var _useDisclosure = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)(),
      onClose = _useDisclosure.onClose,
      onOpen = _useDisclosure.onOpen,
      isOpen = _useDisclosure.isOpen;

  var newContents = contents === null || contents === void 0 ? void 0 : contents.map(function (contentId) {
    return contentsMap[contentId];
  });
  var cancelRef = (0,external_React_.useRef)();
  var queryClient = (0,es.useQueryClient)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var sectionAPI = new api(constants_urls.sections);
  var deleteSection = (0,es.useMutation)(function (id) {
    return sectionAPI["delete"](id);
  }, {
    onSuccess: function onSuccess() {
      onClose();
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Section Deleted.', 'masteriyo'),
        isClosable: true,
        status: 'error'
      });
      queryClient.invalidateQueries("builder".concat(courseId));
    },
    onError: function onError(error) {
      var _error$response, _error$response$data;

      onClose();
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Failed to delete section.', 'masteriyo'),
        description: "".concat((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message),
        isClosable: true,
        status: 'error'
      });
    }
  });

  var onDeletePress = function onDeletePress() {
    onOpen();
  };

  var onDeleteConfirm = function onDeleteConfirm() {
    deleteSection.mutate(id);
  };

  var onEditPress = function onEditPress() {
    setIsEditing(true);
  };

  return /*#__PURE__*/external_React_default().createElement(react_beautiful_dnd_esm/* Draggable */._l, {
    draggableId: id.toString(),
    index: index
  }, function (draggableProvided) {
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, (0,esm_extends/* default */.Z)({
      bg: "white",
      shadow: "box",
      mb: "8",
      p: "3",
      ref: draggableProvided.innerRef
    }, draggableProvided.draggableProps), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
      justify: "space-between",
      p: "5"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "3",
      align: "center"
    }, /*#__PURE__*/external_React_default().createElement("span", draggableProvided.dragHandleProps, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: sortable,
      fontSize: "lg",
      color: "gray.500"
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
      fontWeight: "semibold",
      fontSize: "xl"
    }, name)), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
      placement: "bottom-end"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
      as: chakra_ui_button_esm/* IconButton */.hU,
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
      variant: "outline",
      rounded: "sm",
      fontSize: "large"
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
      onClick: onEditPress,
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiEdit */.Hlf, null)
    }, (0,external_wp_i18n_namespaceObject.__)('Edit', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
      onClick: onDeletePress,
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null)
    }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
      "in": isEditing,
      animateOpacity: true
    }, /*#__PURE__*/external_React_default().createElement(components_EditSection, {
      id: id,
      courseId: courseId,
      name: name,
      description: description,
      onSave: function onSave() {
        return setIsEditing(false);
      },
      onCancel: function onCancel() {
        return setIsEditing(false);
      }
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      px: "2"
    }, /*#__PURE__*/external_React_default().createElement(react_beautiful_dnd_esm/* Droppable */.bK, {
      droppableId: id.toString(),
      type: "content"
    }, function (droppableProvided, snapshot) {
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, (0,esm_extends/* default */.Z)({
        p: "3",
        minH: "8",
        sx: snapshot.isDraggingOver ? whileDraggingStyles : {},
        ref: droppableProvided.innerRef
      }, droppableProvided.droppableProps), newContents && (newContents === null || newContents === void 0 ? void 0 : newContents.map(function (content, index) {
        return /*#__PURE__*/external_React_default().createElement(components_Content, {
          key: content.id,
          id: content.id,
          name: content.name,
          type: content.type,
          hasVideo: content.video,
          index: index,
          courseId: courseId,
          previewPermalink: content.preview_permalink
        });
      })), droppableProvided.placeholder);
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      p: "5",
      id: "add-new-section-content-".concat(id)
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
      as: common_AddNewButton
    }, (0,external_wp_i18n_namespaceObject.__)('Add New Content', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
      as: react_router_dom/* Link */.rU,
      to: constants_routes.lesson.add.replace(':sectionId', id.toString()).replace(':courseId', courseId.toString())
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
      fontSize: "sm",
      fontWeight: "medium",
      icon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        as: index_esm/* BiAlignLeft */.YSr,
        fontSize: "lg"
      })
    }, (0,external_wp_i18n_namespaceObject.__)('Add New Lesson', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
      as: react_router_dom/* Link */.rU,
      to: constants_routes.quiz.add.replace(':sectionId', id.toString()).replace(':courseId', courseId.toString())
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
      fontSize: "sm",
      fontWeight: "medium",
      icon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        as: index_esm/* BiTimer */.b3O,
        fontSize: "lg"
      })
    }, (0,external_wp_i18n_namespaceObject.__)('Add New Quiz', 'masteriyo')))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
      isOpen: isOpen,
      onClose: onClose,
      isCentered: true,
      leastDestructiveRef: cancelRef
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.sprintf)((0,external_wp_i18n_namespaceObject.__)('Delete Section - %s?', 'masteriyo'), name)), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, (0,external_wp_i18n_namespaceObject.__)('Are you sure? You can’t restore after deleting.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      ref: cancelRef,
      onClick: onClose,
      variant: "outline"
    }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      colorScheme: "red",
      onClick: onDeleteConfirm,
      isLoading: deleteSection.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))))));
  });
};

/* harmony default export */ const components_Section = (Section);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/sections/SectionBuilder.tsx















var SectionBuilder = function SectionBuilder(props) {
  var courseId = props.courseId,
      builderData = props.builderData,
      setBuilderData = props.setBuilderData;

  var _useState = (0,external_React_.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isAddNewSection = _useState2[0],
      setIsAddNewSection = _useState2[1];

  var scrollRef = (0,external_React_.useRef)(null);

  var _useLocation = (0,react_router/* useLocation */.TH)(),
      search = _useLocation.search;

  var _queryString$parse = query_string.parse(search),
      view = _queryString$parse.view;

  (0,external_React_.useEffect)(function () {
    var _document$getElementB;

    (_document$getElementB = document.getElementById("add-new-section-content-".concat(view))) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }, [view]);

  var onDragEnd = function onDragEnd(result) {
    var orderedData = reorder(result, builderData);
    setBuilderData(orderedData);
  };

  var onAddNewSectionPress = function onAddNewSectionPress() {
    setIsAddNewSection(true);
    setTimeout(function () {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }, 600);
  };

  return /*#__PURE__*/external_React_default().createElement(react_beautiful_dnd_esm/* DragDropContext */.Z5, {
    onDragEnd: onDragEnd
  }, /*#__PURE__*/external_React_default().createElement(react_beautiful_dnd_esm/* Droppable */.bK, {
    droppableId: "section",
    type: "section"
  }, function (droppableProvided) {
    var _builderData$section_;

    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, (0,esm_extends/* default */.Z)({
      ref: droppableProvided.innerRef
    }, droppableProvided.droppableProps), builderData === null || builderData === void 0 ? void 0 : (_builderData$section_ = builderData.section_order) === null || _builderData$section_ === void 0 ? void 0 : _builderData$section_.map(function (sectionId, index) {
      var section = builderData.sections[sectionId];
      return /*#__PURE__*/external_React_default().createElement(components_Section, {
        key: section.id,
        id: section.id,
        index: index,
        name: section.name,
        description: section.description,
        courseId: courseId,
        contents: section.contents,
        contentsMap: builderData.contents
      });
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
      "in": isAddNewSection,
      animateOpacity: true
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      ref: scrollRef
    }, /*#__PURE__*/external_React_default().createElement(components_NewSection, {
      courseId: courseId,
      onSave: function onSave() {
        return setIsAddNewSection(false);
      },
      onCancel: function onCancel() {
        return setIsAddNewSection(false);
      }
    }))), isEmpty(builderData.section_order) ? !isAddNewSection && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      py: "16",
      px: "8",
      bg: "white",
      shadow: "box",
      mb: "8",
      textAlign: "center"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      fontSize: "2xl"
    }, (0,external_wp_i18n_namespaceObject.__)('Get Started', 'Masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
      color: "gray.500",
      fontSize: "xs"
    }, (0,external_wp_i18n_namespaceObject.__)('Add new section to add your content.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, {
      justifyContent: "center"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      colorScheme: "blue",
      onClick: onAddNewSectionPress
    }, (0,external_wp_i18n_namespaceObject.__)('Add New Section', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
      color: "gray.500",
      fontSize: "xs"
    }, (0,external_wp_i18n_namespaceObject.__)('Not sure how to get started? Learn more in our', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
      isExternal: true,
      href: "https://docs.masteriyo.com/docs/how-to-add-courses/#1-toc-title"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
      as: "span",
      color: "gray.800",
      fontSize: "xs"
    }, (0,external_wp_i18n_namespaceObject.__)(' Documentation', 'masteriyo'))))))) : !isAddNewSection && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
      mb: "8"
    }, /*#__PURE__*/external_React_default().createElement(common_AddNewButton, {
      onClick: onAddNewSectionPress
    }, (0,external_wp_i18n_namespaceObject.__)('Add New Section', 'masteriyo'))), droppableProvided.placeholder);
  }));
};

/* harmony default export */ const sections_SectionBuilder = (SectionBuilder);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/select/dist/chakra-ui-select.esm.js
var chakra_ui_select_esm = __webpack_require__(1391);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/number-input/dist/chakra-ui-number-input.esm.js
var chakra_ui_number_input_esm = __webpack_require__(9103);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/radio/dist/chakra-ui-radio.esm.js
var chakra_ui_radio_esm = __webpack_require__(9680);
;// CONCATENATED MODULE: ./assets/js/back-end/utils/math.ts
var convertMinutesToHours = function convertMinutesToHours(totalMinutes) {
  var hours = Math.floor(totalMinutes / 60);
  var minutes = totalMinutes % 60;
  return [hours, minutes];
};
// EXTERNAL MODULE: ./node_modules/@chakra-ui/avatar/dist/chakra-ui-avatar.esm.js
var chakra_ui_avatar_esm = __webpack_require__(7657);
;// CONCATENATED MODULE: external ["wp","data"]
const external_wp_data_namespaceObject = window["wp"]["data"];
// EXTERNAL MODULE: ./node_modules/react-select/async/dist/react-select.browser.esm.js
var dist_react_select_browser_esm = __webpack_require__(7540);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/builder/component/ChangeInstructorSetting.tsx

var ChangeInstructorSetting_excluded = ["children"],
    _excluded2 = ["children"];













var Control = function Control(_ref) {
  var _rest$getValue, _rest$getValue$;

  var children = _ref.children,
      rest = (0,objectWithoutProperties/* default */.Z)(_ref, ChangeInstructorSetting_excluded);

  return /*#__PURE__*/external_React_default().createElement(index_4322c0ed_browser_esm.y.Control, rest, /*#__PURE__*/external_React_default().createElement(chakra_ui_avatar_esm/* Avatar */.qE, {
    marginLeft: "2",
    src: (_rest$getValue = rest.getValue()) === null || _rest$getValue === void 0 ? void 0 : (_rest$getValue$ = _rest$getValue[0]) === null || _rest$getValue$ === void 0 ? void 0 : _rest$getValue$.avatar_url,
    size: "xs"
  }), children);
};

var Option = function Option(_ref2) {
  var _rest$data;

  var children = _ref2.children,
      rest = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded2);

  return /*#__PURE__*/external_React_default().createElement(index_4322c0ed_browser_esm.y.Option, rest, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, {
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_avatar_esm/* Avatar */.qE, {
    src: (_rest$data = rest.data) === null || _rest$data === void 0 ? void 0 : _rest$data.avatar_url,
    size: "xs"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, null, children)));
};

var ChangeInstructorSetting = function ChangeInstructorSetting(props) {
  var canEditUsers = (0,external_wp_data_namespaceObject.useSelect)(function (select) {
    return select('core').canUser('create', 'users');
  }, []);
  var currentUser = (0,external_wp_data_namespaceObject.useSelect)(function (select) {
    return select('core').getCurrentUser();
  }, []);
  var defaultInstructor = isEmpty(currentUser) ? null : {
    value: currentUser === null || currentUser === void 0 ? void 0 : currentUser.id,
    label: currentUser === null || currentUser === void 0 ? void 0 : currentUser.name,
    avatar_url: currentUser === null || currentUser === void 0 ? void 0 : currentUser.avatar_urls['24']
  };
  var courseData = props.courseData;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      setValue = _useFormContext.setValue;

  var usersAPI = new api(constants_urls.users);
  var usersQuery = (0,es.useQuery)('users', function () {
    return usersAPI.list({
      roles: 'administrator,masteriyo_instructor',
      orderby: 'display_name',
      order: 'asc',
      per_page: 10
    });
  });

  if (!usersQuery.isLoading && canEditUsers === true && defaultInstructor) {
    var _usersQuery$data, _usersQuery$data$data;

    return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Instructor', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist_react_select_browser_esm/* default */.ZP, {
      components: {
        Control: Control,
        Option: Option
      },
      styles: reactSelectStyles,
      cacheOptions: true,
      loadingMessage: function loadingMessage() {
        return (0,external_wp_i18n_namespaceObject.__)('Searching...', 'masteriyo');
      },
      noOptionsMessage: function noOptionsMessage(_ref3) {
        var inputValue = _ref3.inputValue;
        return !isEmpty(inputValue) ? (0,external_wp_i18n_namespaceObject.__)('Users not found.', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Please enter one or more characters.', 'masteriyo');
      },
      isClearable: true,
      placeholder: (0,external_wp_i18n_namespaceObject.__)('Search by username or email', 'masteriyo'),
      defaultValue: courseData ? {
        value: courseData.author.id,
        label: courseData.author.display_name,
        avatar_url: courseData.author.avatar_url
      } : defaultInstructor,
      onChange: function onChange(selectedOption) {
        setValue('author_id', selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value);
      },
      defaultOptions: usersQuery.isSuccess ? (_usersQuery$data = usersQuery.data) === null || _usersQuery$data === void 0 ? void 0 : (_usersQuery$data$data = _usersQuery$data.data) === null || _usersQuery$data$data === void 0 ? void 0 : _usersQuery$data$data.map(function (user) {
        return {
          value: user.id,
          label: user.display_name,
          avatar_url: user.avatar_url
        };
      }) : [],
      loadOptions: function loadOptions(searchValue, callback) {
        if (isEmpty(searchValue)) {
          return callback([]);
        }

        usersAPI.list({
          search: searchValue,
          roles: 'administrator,masteriyo_instructor'
        }).then(function (data) {
          callback(data.data.map(function (user) {
            return {
              value: user.id,
              label: user.display_name,
              avatar_url: user.avatar_url
            };
          }));
        });
      }
    }));
  }

  return null;
};

/* harmony default export */ const component_ChangeInstructorSetting = (ChangeInstructorSetting);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/builder/component/CourseSetting.tsx














var CourseSetting = function CourseSetting(props) {
  var _courseData$difficult, _errors$duration_hour, _errors$duration_minu;

  var courseData = props.courseData;

  var _useState = (0,external_React_.useState)((courseData === null || courseData === void 0 ? void 0 : courseData.enrollment_limit) != 0 ? '1' : '0'),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      enrollDisplayValue = _useState2[0],
      setEnrollDisplayValue = _useState2[1];

  var _useState3 = (0,external_React_.useState)((courseData === null || courseData === void 0 ? void 0 : courseData.price_type) || 'free'),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      pricingDisplayValue = _useState4[0],
      setPricingDisplayValue = _useState4[1];

  var _useState5 = (0,external_React_.useState)((courseData === null || courseData === void 0 ? void 0 : courseData.access_mode) || 'open'),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      accessModeType = _useState6[0],
      setAccessModeType = _useState6[1];

  var _convertMinutesToHour = convertMinutesToHours((courseData === null || courseData === void 0 ? void 0 : courseData.duration) || 0),
      _convertMinutesToHour2 = (0,slicedToArray/* default */.Z)(_convertMinutesToHour, 2),
      hours = _convertMinutesToHour2[0],
      minutes = _convertMinutesToHour2[1];

  var difficultiesAPI = new api(constants_urls.difficulties);

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      errors = _useFormContext.formState.errors,
      setValue = _useFormContext.setValue;

  var diffultiesQuery = (0,es.useQuery)('difficulties', function () {
    return difficultiesAPI.list();
  });

  var renderDifficultiesOption = function renderDifficultiesOption() {
    try {
      var _diffultiesQuery$data;

      return diffultiesQuery === null || diffultiesQuery === void 0 ? void 0 : (_diffultiesQuery$data = diffultiesQuery.data) === null || _diffultiesQuery$data === void 0 ? void 0 : _diffultiesQuery$data.map(function (page) {
        return /*#__PURE__*/external_React_default().createElement("option", {
          value: page.id,
          key: page.id
        }, page.name);
      });
    } catch (error) {
      return;
    }
  };

  var tabStyles = {
    justifyContent: 'flex-start',
    w: '150px',
    borderLeft: 0,
    borderRight: '2px solid',
    borderRightColor: 'transparent',
    marginLeft: 0,
    marginRight: '-2px',
    pl: 0,
    fontSize: 'sm',
    textAlign: 'left'
  };
  var tabListStyles = {
    borderLeft: 0,
    borderRight: '2px solid',
    borderRightColor: 'gray.200'
  };
  var currencyCode = global.currency.code;
  var currencySymbol = global.currency.symbol;

  var onChangePriceType = function onChangePriceType(priceType) {
    setPricingDisplayValue(priceType);
    setValue('price_type', priceType);
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    p: "10",
    shadow: "box"
  }, /*#__PURE__*/external_React_default().createElement("form", null, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, {
    orientation: "vertical"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
    sx: tabListStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('General', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Display', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Pricing', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, {
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, diffultiesQuery !== null && diffultiesQuery !== void 0 && diffultiesQuery.isLoading ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_spinner_esm/* Spinner */.$, null)) : /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(component_ChangeInstructorSetting, {
    courseData: courseData
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Difficulty', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Choose Course Level', 'masteriyo'),
    defaultValue: courseData === null || courseData === void 0 ? void 0 : (_courseData$difficult = courseData.difficulty) === null || _courseData$difficult === void 0 ? void 0 : _courseData$difficult.id
  }, register('difficulty.id')), renderDifficultiesOption())), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "0"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Duration', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.duration_hour)
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "duration_hour",
    defaultValue: hours || 0,
    rules: {
      required: (0,external_wp_i18n_namespaceObject.__)('Hours is required.', 'masteriyo'),
      min: 0
    },
    render: function render(_ref) {
      var field = _ref.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* InputGroup */.BZ, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInput */.Y2, (0,esm_extends/* default */.Z)({}, field, {
        w: "sm",
        min: 0
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputField */.zu, {
        rounded: "sm"
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputStepper */.Fi, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberIncrementStepper */.WQ, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberDecrementStepper */.Y_, null))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* InputRightAddon */.xW, null, (0,external_wp_i18n_namespaceObject.__)('Hours', 'masteriyo')));
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.duration_hour) && (errors === null || errors === void 0 ? void 0 : (_errors$duration_hour = errors.duration_hour) === null || _errors$duration_hour === void 0 ? void 0 : _errors$duration_hour.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.duration_minute)
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "duration_minute",
    defaultValue: minutes || 0,
    rules: {
      required: (0,external_wp_i18n_namespaceObject.__)('Minutes is required.', 'masteriyo'),
      min: 0,
      max: 59
    },
    render: function render(_ref2) {
      var field = _ref2.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* InputGroup */.BZ, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInput */.Y2, (0,esm_extends/* default */.Z)({}, field, {
        w: "sm",
        min: 0,
        max: 59
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputField */.zu, {
        rounded: "sm"
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputStepper */.Fi, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberIncrementStepper */.WQ, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberDecrementStepper */.Y_, null))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* InputRightAddon */.xW, null, (0,external_wp_i18n_namespaceObject.__)('Minutes', 'masteriyo')));
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.duration_minute) && (errors === null || errors === void 0 ? void 0 : (_errors$duration_minu = errors.duration_minute) === null || _errors$duration_minu === void 0 ? void 0 : _errors$duration_minu.message))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Maximum Students', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* RadioGroup */.Ee, {
    onChange: setEnrollDisplayValue,
    value: enrollDisplayValue
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "8",
    align: "flex-start"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
    onChange: function onChange(e) {
      return setValue('enrollment_limit', e.target.value);
    },
    value: "0"
  }, (0,external_wp_i18n_namespaceObject.__)('No limit', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
    value: "1"
  }, (0,external_wp_i18n_namespaceObject.__)('Limit', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
    "in": enrollDisplayValue != '0',
    animateOpacity: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Number of Students', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "enrollment_limit",
    render: function render(_ref3) {
      var field = _ref3.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInput */.Y2, (0,esm_extends/* default */.Z)({}, field, {
        defaultValue: courseData === null || courseData === void 0 ? void 0 : courseData.enrollment_limit
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputField */.zu, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputStepper */.Fi, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberIncrementStepper */.WQ, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberDecrementStepper */.Y_, null)));
    }
  })))))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Curriculum in Single page', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* RadioGroup */.Ee, {
    defaultValue: courseData !== null && courseData !== void 0 && courseData.show_curriculum ? 'true' : 'false',
    onChange: function onChange(value) {
      return setValue('show_curriculum', value);
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
    value: "true"
  }, (0,external_wp_i18n_namespaceObject.__)('Always Visible', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
    value: "false"
  }, (0,external_wp_i18n_namespaceObject.__)('Only Visible to Enrollers', 'masteriyo'))))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Pricing Option', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* RadioGroup */.Ee, {
    onChange: onChangePriceType,
    value: pricingDisplayValue,
    defaultValue: courseData === null || courseData === void 0 ? void 0 : courseData.price_type
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
    value: "free",
    onChange: function onChange() {
      setAccessModeType('open');
      setValue('access_mode', 'open');
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Free', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
    "in": pricingDisplayValue != 'paid',
    animateOpacity: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* RadioGroup */.Ee, {
    onChange: function onChange(accessMode) {
      setValue('access_mode', accessMode);
      setAccessModeType(accessMode);
    },
    value: accessModeType
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "3",
    ml: "5"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
    value: "open",
    isChecked: accessModeType === 'open'
  }, (0,external_wp_i18n_namespaceObject.__)('Does not need registration', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
    value: "need_registration",
    isChecked: accessModeType === 'need_registration'
  }, (0,external_wp_i18n_namespaceObject.__)('Needs registration', 'masteriyo')))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
    onChange: function onChange() {
      return setValue('access_mode', 'one_time');
    },
    value: "paid"
  }, (0,external_wp_i18n_namespaceObject.__)('Paid', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
    "in": pricingDisplayValue != 'free',
    animateOpacity: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('One Time Fee', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "regular_price",
    defaultValue: courseData !== null && courseData !== void 0 && courseData.regular_price ? courseData.regular_price : '',
    render: function render(_ref4) {
      var field = _ref4.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInput */.Y2, (0,esm_extends/* default */.Z)({}, field, {
        w: "full",
        min: 0
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputField */.zu, {
        borderRadius: "sm",
        shadow: "input"
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputStepper */.Fi, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberIncrementStepper */.WQ, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberDecrementStepper */.Y_, null)));
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormHelperText */.Q6, null, currencyCode, " (", decodeEntity(currencySymbol), ")")))))))))))));
};

/* harmony default export */ const component_CourseSetting = (CourseSetting);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/builder/Builder.tsx



function Builder_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Builder_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Builder_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Builder_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




















var Builder = function Builder() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      courseId = _useParams.courseId;

  var _useLocation = (0,react_router/* useLocation */.TH)(),
      search = _useLocation.search;

  var queryClient = (0,es.useQueryClient)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var methods = (0,dist_index_esm/* useForm */.cI)();
  var history = (0,react_router/* useHistory */.k6)();
  var courseAPI = new api(constants_urls.courses);
  var builderAPI = new api(constants_urls.builder);

  var _useState = (0,external_React_.useState)(null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      builderData = _useState2[0],
      setBuilderData = _useState2[1];

  var _queryString$parse = query_string.parse(search),
      page = _queryString$parse.page;

  var _useState3 = (0,external_React_.useState)(page === 'builder' ? 1 : page === 'settings' ? 2 : 0),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      tabIndex = _useState4[0],
      setTabIndex = _useState4[1];

  var tabStyles = {
    fontWeight: 'medium',
    fontSize: 'sm',
    py: '6',
    px: 0,
    mx: 4,
    _hover: {
      color: 'blue.500'
    }
  };
  var tabPanelStyles = {
    px: '0'
  };
  var iconStyles = {
    mr: '2'
  };
  var courseQuery = (0,es.useQuery)(["course".concat(courseId), courseId], function () {
    return courseAPI.get(courseId);
  });
  var builderQuery = (0,es.useQuery)(["builder".concat(courseId), courseId], function () {
    return builderAPI.get(courseId);
  }, {
    onSuccess: function onSuccess(data) {
      setBuilderData(data);
    }
  });
  var updateCourse = (0,es.useMutation)(function (data) {
    return courseAPI.update(courseId, data);
  }, {
    onSuccess: function onSuccess(data) {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Course Updated', 'masteriyo'),
        status: 'success',
        isClosable: true
      });
      queryClient.invalidateQueries("course".concat(data.id));
    }
  });
  var draftCourse = (0,es.useMutation)(function (data) {
    return courseAPI.update(courseId, data);
  }, {
    onSuccess: function onSuccess(data) {
      toast({
        title: data.name + (0,external_wp_i18n_namespaceObject.__)(' drafted', 'masteriyo'),
        status: 'success',
        isClosable: true
      });
      queryClient.invalidateQueries("course".concat(data.id));
    }
  });
  var updateBuilder = (0,es.useMutation)(function (data) {
    return builderAPI.update(courseId, data);
  }, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries("builder".concat(courseId));
    }
  });

  var onSave = function onSave(data, type) {
    updateBuilder.mutate(deepClean(builderData));

    var newData = Builder_objectSpread(Builder_objectSpread({}, data.categories && {
      categories: data.categories.map(function (category) {
        return {
          id: category.value
        };
      }),
      status: type
    }), {}, {
      duration: ((data === null || data === void 0 ? void 0 : data.duration_hour) || 0) * 60 + +((data === null || data === void 0 ? void 0 : data.duration_minute) || 0),
      duration_hour: null,
      duration_minute: null,
      regular_price: "".concat(data.regular_price),
      featured_image: data.featuredImage
    });

    if (type === 'draft') {
      draftCourse.mutate(deepClean(deepMerge(data, newData)));
    } else {
      updateCourse.mutate(deepClean(deepMerge(data, newData)));
    }
  };

  var isPublished = function isPublished() {
    var _courseQuery$data;

    if (((_courseQuery$data = courseQuery.data) === null || _courseQuery$data === void 0 ? void 0 : _courseQuery$data.status) === 'publish') {
      return true;
    } else {
      return false;
    }
  };

  var isDrafted = function isDrafted() {
    var _courseQuery$data2;

    if (((_courseQuery$data2 = courseQuery.data) === null || _courseQuery$data2 === void 0 ? void 0 : _courseQuery$data2.status) === 'draft') {
      return true;
    } else {
      return false;
    }
  };

  if (courseQuery.isSuccess && builderQuery.isSuccess) {
    return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, methods, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, {
      index: tabIndex,
      onChange: function onChange(index) {
        return setTabIndex(index);
      }
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8",
      align: "center"
    }, /*#__PURE__*/external_React_default().createElement(common_Header, {
      showCourseName: true,
      showPreview: true,
      course: {
        name: courseQuery.data.name,
        id: courseQuery.data.id,
        previewUrl: courseQuery.data.permalink
      },
      secondBtn: {
        label: isDrafted() ? (0,external_wp_i18n_namespaceObject.__)('Save To Draft', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Switch To Draft', 'masteriyo'),
        action: methods.handleSubmit(function (data) {
          return onSave(data, 'draft');
        }),
        isLoading: draftCourse.isLoading
      },
      thirdBtn: {
        label: isPublished() ? (0,external_wp_i18n_namespaceObject.__)('Update', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Publish', 'masteriyo'),
        action: methods.handleSubmit(function (data) {
          return onSave(data, 'publish');
        }),
        isLoading: updateCourse.isLoading
      }
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
      borderBottom: "none",
      bg: "white"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles,
      onClick: function onClick() {
        history.push(constants_routes.courses.edit.replace(':courseId', courseId));
      }
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiBook */.lOc,
      sx: iconStyles
    }), (0,external_wp_i18n_namespaceObject.__)('Course', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles,
      onClick: function onClick() {
        history.push({
          pathname: constants_routes.courses.edit.replace(':courseId', courseId),
          search: '?page=builder'
        });
      }
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiEdit */.Hlf,
      sx: iconStyles
    }), (0,external_wp_i18n_namespaceObject.__)('Builder', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles,
      onClick: function onClick() {
        history.push({
          pathname: constants_routes.courses.edit.replace(':courseId', courseId),
          search: '?page=settings'
        });
      }
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiCog */.MBj,
      sx: iconStyles
    }), (0,external_wp_i18n_namespaceObject.__)('Settings', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
      maxW: "container.xl"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "2"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      sx: tabPanelStyles
    }, /*#__PURE__*/external_React_default().createElement(courses_EditCourse, {
      courseData: courseQuery.data
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      sx: tabPanelStyles
    }, /*#__PURE__*/external_React_default().createElement(sections_SectionBuilder, {
      courseId: courseQuery.data.id,
      builderData: builderData && builderData || builderQuery.data,
      setBuilderData: setBuilderData
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      sx: tabPanelStyles
    }, /*#__PURE__*/external_React_default().createElement(component_CourseSetting, {
      courseData: courseQuery.data
    })))))))), /*#__PURE__*/external_React_default().createElement(common_AddCategoryModal, null));
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const builder_Builder = (Builder);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/course-categories/AddNewCourseCategory.tsx


function AddNewCourseCategory_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function AddNewCourseCategory_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AddNewCourseCategory_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AddNewCourseCategory_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






















var AddNewCourseCategory = function AddNewCourseCategory() {
  var history = (0,react_router/* useHistory */.k6)();
  var methods = (0,dist_index_esm/* useForm */.cI)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var queryClient = (0,es.useQueryClient)();
  var categoryAPI = new api(constants_urls.categories);
  var createCategory = (0,es.useMutation)(function (data) {
    return categoryAPI.store(data);
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Category Added', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
      history.push(constants_routes.course_categories.list);
      queryClient.invalidateQueries('courseCategoriesList');
      queryClient.invalidateQueries('categoryLists');
    },
    onError: function onError(error) {
      var _error$response, _error$response$data;

      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Failed to create category.', 'masteriyo'),
        description: "".concat((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message),
        isClosable: true,
        status: 'error'
      });
    }
  });

  var onSubmit = function onSubmit(data) {
    var _data$parentId;

    createCategory.mutate(deepClean(AddNewCourseCategory_objectSpread(AddNewCourseCategory_objectSpread({}, data), {}, {
      parent_id: (_data$parentId = data.parentId) === null || _data$parentId === void 0 ? void 0 : _data$parentId.value,
      slug: data.slug ? data.slug : makeSlug(data.name),
      featured_image: data.featuredImage
    })));
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(common_Header, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* NavLink */.OL,
    sx: navLinkStyles,
    _activeLink: navActiveStyles,
    to: constants_routes.course_categories.add
  }, (0,external_wp_i18n_namespaceObject.__)('Add New Category', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl",
    marginTop: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.course_categories.list
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "link",
    _hover: {
      color: 'blue.500'
    },
    leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      fontSize: "xl",
      as: index_esm/* BiChevronLeft */.gbs
    })
  }, (0,external_wp_i18n_namespaceObject.__)('Back to Categories', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, methods, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    p: "10",
    shadow: "box"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement("form", {
    onSubmit: methods.handleSubmit(onSubmit)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(components_NameInput, null), /*#__PURE__*/external_React_default().createElement(components_SlugInput, null), /*#__PURE__*/external_React_default().createElement(components_ParentCategory, null), /*#__PURE__*/external_React_default().createElement(components_DescriptionInput, null), /*#__PURE__*/external_React_default().createElement(components_FeaturedImage, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    py: "3"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "blue",
    type: "submit",
    isLoading: createCategory.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Create', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "outline",
    onClick: function onClick() {
      return history.push(constants_routes.course_categories.list);
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')))))))))));
};

/* harmony default export */ const course_categories_AddNewCourseCategory = (AddNewCourseCategory);
// EXTERNAL MODULE: ./node_modules/react-super-responsive-table/dist/index.js
var dist = __webpack_require__(4952);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/EmptyInfo.tsx





var EmptyInfo = function EmptyInfo(props) {
  var message = props.message;
  return (
    /*#__PURE__*/
    // Adjust in table structure of backend courselist, orders and categories.
    external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "1",
      align: "center"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0,
      color: "blue.400"
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
      as: "span",
      fontWeight: "medium",
      color: "gray.600",
      fontSize: "sm"
    }, message))), /*#__PURE__*/external_React_default().createElement(dist.Td, null), /*#__PURE__*/external_React_default().createElement(dist.Td, null), /*#__PURE__*/external_React_default().createElement(dist.Td, null), /*#__PURE__*/external_React_default().createElement(dist.Td, null), /*#__PURE__*/external_React_default().createElement(dist.Td, null), /*#__PURE__*/external_React_default().createElement(dist.Td, null))
  );
};

/* harmony default export */ const common_EmptyInfo = (EmptyInfo);
// EXTERNAL MODULE: ./node_modules/@ajna/pagination/dist/index.js
var pagination_dist = __webpack_require__(359);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(9583);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/MasteriyoPagination.tsx


function MasteriyoPagination_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function MasteriyoPagination_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? MasteriyoPagination_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : MasteriyoPagination_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var MasteriyoPagination = function MasteriyoPagination(props) {
  var metaData = props.metaData,
      setFilterParams = props.setFilterParams,
      perPageText = props.perPageText,
      _props$outerLimits = props.outerLimits,
      outerLimits = _props$outerLimits === void 0 ? 2 : _props$outerLimits,
      _props$innerLimits = props.innerLimits,
      innerLimits = _props$innerLimits === void 0 ? 2 : _props$innerLimits,
      extraFilterParams = props.extraFilterParams;

  var _usePagination = (0,pagination_dist/* usePagination */.h0)({
    total: metaData === null || metaData === void 0 ? void 0 : metaData.total,
    limits: {
      outer: outerLimits,
      inner: innerLimits
    },
    initialState: {
      pageSize: metaData === null || metaData === void 0 ? void 0 : metaData.per_page,
      isDisabled: false,
      currentPage: metaData === null || metaData === void 0 ? void 0 : metaData.current_page
    }
  }),
      pages = _usePagination.pages,
      pagesCount = _usePagination.pagesCount,
      currentPage = _usePagination.currentPage,
      setCurrentPage = _usePagination.setCurrentPage,
      pageSize = _usePagination.pageSize,
      setPageSize = _usePagination.setPageSize;

  var handlePageChange = function handlePageChange(nextPage) {
    setFilterParams(MasteriyoPagination_objectSpread({
      page: nextPage,
      per_page: pageSize
    }, extraFilterParams));
    setCurrentPage(nextPage);
  };

  var handlePageSizeChange = function handlePageSizeChange(event) {
    var pageSize = Number(event.target.value);
    setFilterParams(MasteriyoPagination_objectSpread({
      per_page: pageSize
    }, extraFilterParams));
    setPageSize(pageSize);
  }; // Current page highest value. For e.g if 1 - 10, 10 is highest.


  var currentPageHighest = (metaData === null || metaData === void 0 ? void 0 : metaData.per_page) * (metaData === null || metaData === void 0 ? void 0 : metaData.current_page); // Current page lowest value. For e.g if 1 - 10, 1 is lowest.

  var displayCurrentPageLowest = currentPageHighest - (metaData === null || metaData === void 0 ? void 0 : metaData.per_page) + 1; // Setting highest value depending on current page is last page or not.

  var displayCurrentPageHighest = (metaData === null || metaData === void 0 ? void 0 : metaData.current_page) === (metaData === null || metaData === void 0 ? void 0 : metaData.pages) ? metaData === null || metaData === void 0 ? void 0 : metaData.total : currentPageHighest;
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    mt: "8",
    w: "full",
    direction: ['column', null, 'row'],
    justifyContent: "space-between",
    pb: "4",
    fontSize: ['xs', null, 'sm']
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.500"
  }, (0,external_wp_i18n_namespaceObject.sprintf)(
  /* translators: %1$d: shown results from, %2$d shown results to, %3$d total count */
  (0,external_wp_i18n_namespaceObject.__)('Showing %d - %d out of %d', 'masteriyo'), displayCurrentPageLowest, displayCurrentPageHighest, metaData === null || metaData === void 0 ? void 0 : metaData.total)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.500"
  }, perPageText), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, {
    size: "sm",
    defaultValue: metaData === null || metaData === void 0 ? void 0 : metaData.per_page,
    ml: 3,
    onChange: handlePageSizeChange,
    w: 20
  }, /*#__PURE__*/external_React_default().createElement("option", {
    value: "5"
  }, "5"), /*#__PURE__*/external_React_default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/external_React_default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/external_React_default().createElement("option", {
    value: "30"
  }, "30"), /*#__PURE__*/external_React_default().createElement("option", {
    value: "40"
  }, "40"), /*#__PURE__*/external_React_default().createElement("option", {
    value: "50"
  }, "50")), /*#__PURE__*/external_React_default().createElement(pagination_dist/* Pagination */.tl, {
    pagesCount: pagesCount,
    currentPage: currentPage,
    onPageChange: handlePageChange
  }, /*#__PURE__*/external_React_default().createElement(pagination_dist/* PaginationContainer */.fS, {
    sx: {
      li: {
        m: '0'
      }
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
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
  }, /*#__PURE__*/external_React_default().createElement(fa_index_esm/* FaChevronRight */.Dli, null)))))));
};

/* harmony default export */ const common_MasteriyoPagination = (MasteriyoPagination);
;// CONCATENATED MODULE: ./assets/js/back-end/skeleton/index.tsx



var SkeletonCourseList = function SkeletonCourseList() {
  var lengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, lengths.map(function (index) {
    return /*#__PURE__*/external_React_default().createElement(dist.Tr, {
      key: index
    }, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })));
  }));
};
var SkeletonEditCourse = function SkeletonEditCourse() {
  return /*#__PURE__*/React.createElement(Stack, {
    direction: "row",
    spacing: "8",
    w: "full"
  }, /*#__PURE__*/React.createElement(Box, {
    flex: "1",
    bg: "white",
    p: "10",
    shadow: "box",
    d: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(Skeleton, {
    h: "6",
    w: "full"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    h: "6",
    w: "full"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    h: "6",
    w: "full"
  })), /*#__PURE__*/React.createElement(Box, {
    w: "400px",
    bg: "white",
    p: "10",
    shadow: "box"
  }, /*#__PURE__*/React.createElement(Skeleton, {
    h: "6"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    h: "6"
  })));
};
var SkeletonCourseTaxonomy = function SkeletonCourseTaxonomy() {
  var lengths = [1, 2, 3];
  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, lengths.map(function (index) {
    return /*#__PURE__*/external_React_default().createElement(dist.Tr, {
      key: index
    }, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })));
  }));
};
var SkeletonOrdersList = function SkeletonOrdersList() {
  var lengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, lengths.map(function (index) {
    return /*#__PURE__*/external_React_default().createElement(dist.Tr, {
      key: index
    }, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })));
  }));
};
var SkeletonAccountOrdersList = function SkeletonAccountOrdersList() {
  var lengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return /*#__PURE__*/React.createElement(React.Fragment, null, lengths.map(function (index) {
    return /*#__PURE__*/React.createElement(Tr, {
      key: index
    }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(SkeletonText, {
      noOfLines: 1
    })), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(SkeletonText, {
      noOfLines: 1
    })), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(SkeletonText, {
      noOfLines: 1
    })), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(SkeletonText, {
      noOfLines: 1
    })), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(SkeletonText, {
      noOfLines: 1
    })));
  }));
};
var SkeletonQuizAttemptList = function SkeletonQuizAttemptList() {
  var lengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, lengths.map(function (index) {
    return /*#__PURE__*/external_React_default().createElement(dist.Tr, {
      key: index
    }, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })));
  }));
};
var SkeletonOrderItemsList = function SkeletonOrderItemsList() {
  var lengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return /*#__PURE__*/React.createElement(React.Fragment, null, lengths.map(function (index) {
    return /*#__PURE__*/React.createElement(Tr, {
      key: index
    }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(SkeletonText, {
      noOfLines: 1
    })), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(SkeletonText, {
      noOfLines: 1
    })), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(SkeletonText, {
      noOfLines: 1
    })), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(SkeletonText, {
      noOfLines: 1
    })));
  }));
};
var SkeletonStudentsList = function SkeletonStudentsList() {
  var lengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, lengths.map(function (index) {
    return /*#__PURE__*/external_React_default().createElement(dist.Tr, {
      key: index
    }, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })));
  }));
};
var SkeletonInstructorsList = function SkeletonInstructorsList() {
  var lengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, lengths.map(function (index) {
    return /*#__PURE__*/external_React_default().createElement(dist.Tr, {
      key: index
    }, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })));
  }));
};
var SkeletonReviewsList = function SkeletonReviewsList() {
  var lengths = [1, 2, 3, 4, 5, 6, 7];
  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, lengths.map(function (index) {
    return /*#__PURE__*/external_React_default().createElement(dist.Tr, {
      key: index
    }, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })));
  }));
};
var SkeletonReplyList = function SkeletonReplyList() {
  var lengths = [1, 2, 3, 4];
  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, lengths.map(function (index) {
    return /*#__PURE__*/external_React_default().createElement(dist.Tr, {
      key: index
    }, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonText */.N2, {
      noOfLines: 1
    })));
  }));
};
// EXTERNAL MODULE: ./node_modules/use-ontype/build/index.es.js
var index_es = __webpack_require__(4008);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/course-categories/components/CategoriesFilter.tsx










var CategoriesFilter = function CategoriesFilter(props) {
  var setFilterParams = props.setFilterParams,
      filterParams = props.filterParams;

  var _useForm = (0,dist_index_esm/* useForm */.cI)(),
      handleSubmit = _useForm.handleSubmit;

  var _useMediaQuery = (0,chakra_ui_media_query_esm/* useMediaQuery */.ac)('(min-width: 48em)'),
      _useMediaQuery2 = (0,slicedToArray/* default */.Z)(_useMediaQuery, 1),
      isMobile = _useMediaQuery2[0];

  var onSearchInput = (0,index_es/* useOnType */.H)({
    onTypeFinish: function onTypeFinish(val) {
      setFilterParams({
        search: val
      });
    }
  }, 800);

  var _useState = (0,external_React_.useState)(isMobile),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var onChange = function onChange(data) {
    setFilterParams(deepClean(data));
  };

  (0,external_React_.useEffect)(function () {
    setIsOpen(isMobile);
  }, [isMobile]);
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    px: {
      base: 6,
      md: 12
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    justify: "end"
  }, !isMobile && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('toggle filter', 'masteriyo'),
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
    "in": isOpen
  }, /*#__PURE__*/external_React_default().createElement("form", {
    onChange: handleSubmit(onChange)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: ['column', null, 'row'],
    spacing: "4",
    mt: [6, null, 0]
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    defaultValue: filterParams === null || filterParams === void 0 ? void 0 : filterParams.search,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Search categories', 'masteriyo')
  }, onSearchInput))))));
};

/* harmony default export */ const components_CategoriesFilter = (CategoriesFilter);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/course-categories/components/CategoryRow.tsx








var CategoryRow = function CategoryRow(props) {
  var id = props.id,
      name = props.name,
      slug = props.slug,
      count = props.count,
      link = props.link,
      onDeletePress = props.onDeletePress,
      background = props.background;
  var tdStyle = {
    background: background
  };
  return /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Td, {
    style: tdStyle
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* Link */.rU,
    to: constants_routes.course_categories.edit.replace(':categoryId', id.toString()),
    fontWeight: "semibold",
    _hover: {
      color: 'blue.500'
    }
  }, name)), /*#__PURE__*/external_React_default().createElement(dist.Td, {
    style: tdStyle
  }, slug), /*#__PURE__*/external_React_default().createElement(dist.Td, {
    style: tdStyle
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    href: link,
    isExternal: true
  }, count)), /*#__PURE__*/external_React_default().createElement(dist.Td, {
    style: tdStyle
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.course_categories.edit.replace(':categoryId', id.toString())
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    leftIcon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiEdit */.Hlf, null),
    colorScheme: "blue",
    size: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Edit', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
    placement: "bottom-end"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
    as: chakra_ui_button_esm/* IconButton */.hU,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    size: "xs"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    href: link,
    isExternal: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiShow */.A7v, null)
  }, (0,external_wp_i18n_namespaceObject.__)('View Category', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: function onClick() {
      return onDeletePress(id);
    },
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null)
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))))));
};

/* harmony default export */ const components_CategoryRow = (CategoryRow);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/course-categories/AllCourseCategories.tsx



function AllCourseCategories_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function AllCourseCategories_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AllCourseCategories_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AllCourseCategories_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





















var AllCourseCategories = function AllCourseCategories() {
  var _categoriesQuery$data4, _categoriesQuery$data5, _categoriesQuery$data6, _categoriesQuery$data7;

  var categoryAPI = new api(constants_urls.categories);
  var queryClient = (0,es.useQueryClient)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var history = (0,react_router/* useHistory */.k6)();

  var _useState = (0,external_React_.useState)({}),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      filterParams = _useState2[0],
      setFilterParams = _useState2[1];

  var categoriesQuery = (0,es.useQuery)(['courseCategoriesList', filterParams], function () {
    return categoryAPI.list(filterParams);
  });
  var categories = [];

  if (categoriesQuery.isSuccess) {
    if (filterParams.search) {
      var _categoriesQuery$data, _categoriesQuery$data2;

      categories = (_categoriesQuery$data = categoriesQuery.data) === null || _categoriesQuery$data === void 0 ? void 0 : (_categoriesQuery$data2 = _categoriesQuery$data.data) === null || _categoriesQuery$data2 === void 0 ? void 0 : _categoriesQuery$data2.map(function (cat) {
        return AllCourseCategories_objectSpread(AllCourseCategories_objectSpread({}, cat), {}, {
          depth: 0
        });
      });
    } else {
      var _categoriesQuery$data3;

      categories = makeCategoriesHierarchy((_categoriesQuery$data3 = categoriesQuery.data) === null || _categoriesQuery$data3 === void 0 ? void 0 : _categoriesQuery$data3.data);
    }
  }

  var _useState3 = (0,external_React_.useState)(),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      deleteCategoryId = _useState4[0],
      setDeleteCategoryId = _useState4[1];

  var _useDisclosure = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)(),
      onClose = _useDisclosure.onClose,
      onOpen = _useDisclosure.onOpen,
      isOpen = _useDisclosure.isOpen;

  var cancelRef = (0,external_React_.useRef)();
  var deleteCategory = (0,es.useMutation)(function (id) {
    return categoryAPI["delete"](id, {
      force: true
    });
  }, {
    onSuccess: function onSuccess() {
      onClose();
      queryClient.invalidateQueries('courseCategoriesList');
    },
    onError: function onError(error) {
      var _error$response, _error$response$data;

      onClose();
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Failed to delete category.', 'masteriyo'),
        description: "".concat((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message),
        isClosable: true,
        status: 'error'
      });
    }
  });

  var onDeletePress = function onDeletePress(categoryId) {
    onOpen();
    setDeleteCategoryId(categoryId);
  };

  var onDeleteConfirm = function onDeleteConfirm() {
    deleteCategoryId && deleteCategory.mutate(deleteCategoryId);
  };

  var renderCategories = null;

  if (!categoriesQuery.isLoading && categoriesQuery !== null && categoriesQuery !== void 0 && (_categoriesQuery$data4 = categoriesQuery.data) !== null && _categoriesQuery$data4 !== void 0 && _categoriesQuery$data4.data.length) {
    var _categories;

    var isCurrentColorEmpty = true;
    renderCategories = (_categories = categories) === null || _categories === void 0 ? void 0 : _categories.map(function (cat) {
      if (cat.depth === 0) {
        isCurrentColorEmpty = !isCurrentColorEmpty;
      }

      return /*#__PURE__*/external_React_default().createElement(components_CategoryRow, {
        key: cat.id,
        id: cat.id,
        name: '— '.repeat(filterParams.search ? 0 : cat.depth) + cat.name,
        slug: cat.slug,
        count: cat.count,
        link: cat.link,
        onDeletePress: onDeletePress,
        background: isCurrentColorEmpty ? 'transparent' : '#f8f9fa'
      });
    });
  }

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(common_Header, {
    showLinks: true,
    thirdBtn: {
      label: (0,external_wp_i18n_namespaceObject.__)('Add New Category', 'masteriyo'),
      action: function action() {
        return history.push(constants_routes.course_categories.add);
      },
      icon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        as: index_esm/* BiPlus */.poH,
        fontSize: "md"
      })
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* NavLink */.OL,
    sx: navLinkStyles,
    _activeLink: navActiveStyles,
    to: constants_routes.course_categories.list
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: index_esm/* BiListUl */.dC0
  }), (0,external_wp_i18n_namespaceObject.__)('Categories', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    py: "12",
    shadow: "box",
    mx: "auto",
    w: "full"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "10"
  }, /*#__PURE__*/external_React_default().createElement(components_CategoriesFilter, {
    filterParams: filterParams,
    setFilterParams: setFilterParams
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(dist/* Table */.iA, null, /*#__PURE__*/external_React_default().createElement(dist/* Thead */.hr, null, /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Slug', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Count', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Actions', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(dist/* Tbody */.p3, null, categoriesQuery.isLoading ? /*#__PURE__*/external_React_default().createElement(SkeletonCourseTaxonomy, null) : isEmpty(categoriesQuery === null || categoriesQuery === void 0 ? void 0 : (_categoriesQuery$data5 = categoriesQuery.data) === null || _categoriesQuery$data5 === void 0 ? void 0 : _categoriesQuery$data5.data) ? /*#__PURE__*/external_React_default().createElement(common_EmptyInfo, {
    message: (0,external_wp_i18n_namespaceObject.__)('No categories found.', 'masteriyo')
  }) : renderCategories))))), categoriesQuery.isSuccess && !isEmpty(categoriesQuery === null || categoriesQuery === void 0 ? void 0 : (_categoriesQuery$data6 = categoriesQuery.data) === null || _categoriesQuery$data6 === void 0 ? void 0 : _categoriesQuery$data6.data) && /*#__PURE__*/external_React_default().createElement(common_MasteriyoPagination, {
    metaData: categoriesQuery === null || categoriesQuery === void 0 ? void 0 : (_categoriesQuery$data7 = categoriesQuery.data) === null || _categoriesQuery$data7 === void 0 ? void 0 : _categoriesQuery$data7.meta,
    setFilterParams: setFilterParams,
    perPageText: (0,external_wp_i18n_namespaceObject.__)('Categories Per Page:', 'masteriyo')
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
    isOpen: isOpen,
    onClose: onClose,
    isCentered: true,
    leastDestructiveRef: cancelRef
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.__)('Delete Category', 'masteriyo'), " ", name), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, (0,external_wp_i18n_namespaceObject.__)('Are you sure? You can’t restore after deleting.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    ref: cancelRef,
    onClick: onClose,
    variant: "outline"
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "red",
    onClick: onDeleteConfirm,
    isLoading: deleteCategory.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))))));
};

/* harmony default export */ const course_categories_AllCourseCategories = (AllCourseCategories);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/course-categories/EditCourseCategory.tsx



function EditCourseCategory_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function EditCourseCategory_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? EditCourseCategory_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : EditCourseCategory_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }























var EditCourseCategory = function EditCourseCategory() {
  var _categoryQuery$data, _categoryQuery$data2, _categoryQuery$data3;

  var _useParams = (0,react_router/* useParams */.UO)(),
      categoryId = _useParams.categoryId;

  var history = (0,react_router/* useHistory */.k6)();
  var methods = (0,dist_index_esm/* useForm */.cI)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var cancelRef = (0,external_React_.useRef)();
  var categoryAPI = new api(constants_urls.categories);

  var _useState = (0,external_React_.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isDeleteModalOpen = _useState2[0],
      setDeleteModalOpen = _useState2[1];

  var queryClient = (0,es.useQueryClient)();
  var categoryQuery = (0,es.useQuery)(["courseCategory".concat(categoryId), categoryId], function () {
    return categoryAPI.get(categoryId);
  });
  var updateCategoryMutation = (0,es.useMutation)(function (data) {
    return categoryAPI.update(categoryId, data);
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Category Updated', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
      categoryQuery.refetch();
      queryClient.invalidateQueries('courseCategoriesList');
      history.push(constants_routes.course_categories.list);
    },
    onError: function onError(error) {
      var _error$response, _error$response$data;

      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Failed to update category.', 'masteriyo'),
        description: "".concat((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message),
        isClosable: true,
        status: 'error'
      });
    }
  });
  var deleteCategory = (0,es.useMutation)(function (categoryId) {
    return categoryAPI["delete"](categoryId, {
      force: true
    });
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Category Deleted', 'masteriyo'),
        isClosable: true,
        status: 'error'
      });
      history.push(constants_routes.course_categories.list);
      queryClient.invalidateQueries('courseCategoriesList');
    },
    onError: function onError(error) {
      var _error$response2, _error$response2$data;

      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Failed to delete category.', 'masteriyo'),
        description: "".concat((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message),
        isClosable: true,
        status: 'error'
      });
    }
  });

  var onSubmit = function onSubmit(data) {
    var _data$parentId;

    updateCategoryMutation.mutate(deepClean(EditCourseCategory_objectSpread(EditCourseCategory_objectSpread({}, data), {}, {
      parent_id: (_data$parentId = data.parentId) === null || _data$parentId === void 0 ? void 0 : _data$parentId.value,
      slug: data.slug ? data.slug : makeSlug(data.name),
      featured_image: data.featuredImage
    })));
  };

  var onDeletePress = function onDeletePress() {
    setDeleteModalOpen(true);
  };

  var onDeleteConfirm = function onDeleteConfirm() {
    deleteCategory.mutate(categoryId);
  };

  var onDeleteModalClose = function onDeleteModalClose() {
    setDeleteModalOpen(false);
  };

  if (categoryQuery.isLoading) {
    return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
  }

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(common_Header, {
    showLinks: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* NavLink */.OL,
    sx: navLinkStyles,
    _activeLink: navActiveStyles,
    to: constants_routes.course_categories.list
  }, (0,external_wp_i18n_namespaceObject.__)('Categories', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.course_categories.list
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "link",
    _hover: {
      color: 'blue.500'
    },
    leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      fontSize: "xl",
      as: index_esm/* BiChevronLeft */.gbs
    })
  }, (0,external_wp_i18n_namespaceObject.__)('Back to Categories', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, methods, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    p: "10",
    shadow: "box"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    aling: "center",
    justify: "space-between"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    as: "h1",
    fontSize: "x-large"
  }, (0,external_wp_i18n_namespaceObject.__)('Edit Category', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
    placement: "bottom-end"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
    as: chakra_ui_button_esm/* IconButton */.hU,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null),
    onClick: onDeletePress
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement("form", {
    onSubmit: methods.handleSubmit(onSubmit)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(components_NameInput, {
    defaultValue: categoryQuery.data.name
  }), /*#__PURE__*/external_React_default().createElement(components_SlugInput, {
    defaultValue: categoryQuery === null || categoryQuery === void 0 ? void 0 : (_categoryQuery$data = categoryQuery.data) === null || _categoryQuery$data === void 0 ? void 0 : _categoryQuery$data.slug,
    defaultNameValue: categoryQuery === null || categoryQuery === void 0 ? void 0 : (_categoryQuery$data2 = categoryQuery.data) === null || _categoryQuery$data2 === void 0 ? void 0 : _categoryQuery$data2.name
  }), /*#__PURE__*/external_React_default().createElement(components_ParentCategory, {
    defaultValue: categoryQuery.data.parent_id
  }), /*#__PURE__*/external_React_default().createElement(components_DescriptionInput, {
    defaultValue: categoryQuery.data.description
  }), /*#__PURE__*/external_React_default().createElement(components_FeaturedImage, {
    defaultValue: (_categoryQuery$data3 = categoryQuery.data) === null || _categoryQuery$data3 === void 0 ? void 0 : _categoryQuery$data3.featured_image
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    py: "3"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "blue",
    type: "submit",
    isLoading: updateCategoryMutation.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Update', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "outline",
    onClick: function onClick() {
      return history.push(constants_routes.course_categories.list);
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo'))))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
    isOpen: isDeleteModalOpen,
    onClose: onDeleteModalClose,
    isCentered: true,
    leastDestructiveRef: cancelRef
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.__)('Delete Category', 'masteriyo'), " ", name), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, (0,external_wp_i18n_namespaceObject.__)('Are you sure? You can’t restore after deleting.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    ref: cancelRef,
    onClick: onDeleteModalClose,
    variant: "outline"
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "red",
    onClick: onDeleteConfirm,
    isLoading: deleteCategory.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo')))))))))));
};

/* harmony default export */ const course_categories_EditCourseCategory = (EditCourseCategory);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/courses/AddNewCourse.tsx


function AddNewCourse_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function AddNewCourse_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AddNewCourse_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AddNewCourse_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





















var AddNewCourse = function AddNewCourse() {
  var history = (0,react_router/* useHistory */.k6)();
  var methods = (0,dist_index_esm/* useForm */.cI)();
  var courseAPI = new api(constants_urls.courses);
  var tabStyles = {
    fontWeight: 'medium',
    fontSize: 'sm',
    py: '6',
    px: 0,
    mx: 4
  };
  var tabPanelStyles = {
    px: '0'
  };
  var iconStyles = {
    mr: '2'
  };
  var addMutation = (0,es.useMutation)(function (data) {
    return courseAPI.store(data);
  }); // On Add Course

  var onSubmit = function onSubmit(data) {
    var newData = AddNewCourse_objectSpread(AddNewCourse_objectSpread({}, data.categories && {
      categories: data.categories.map(function (category) {
        return {
          id: category.value
        };
      })
    }), {}, {
      regular_price: "".concat(data.regular_price),
      status: 'draft',
      featured_image: data.featuredImage
    });

    addMutation.mutate(deepClean(deepMerge(data, newData)), {
      onSuccess: function onSuccess(data) {
        history.push({
          pathname: constants_routes.courses.edit.replace(':courseId', data.id.toString()),
          search: '?page=builder'
        });
      }
    });
  };

  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, methods, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(common_Header, {
    thirdBtn: {
      label: (0,external_wp_i18n_namespaceObject.__)('Next', 'masteriyo'),
      action: methods.handleSubmit(onSubmit),
      isLoading: addMutation.isLoading
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
    borderBottom: "none",
    bg: "white"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiBook */.lOc,
    sx: iconStyles
  }), (0,external_wp_i18n_namespaceObject.__)('Course', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles,
    isDisabled: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiEdit */.Hlf,
    sx: iconStyles
  }), (0,external_wp_i18n_namespaceObject.__)('Builder', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiCog */.MBj,
    sx: iconStyles
  }), (0,external_wp_i18n_namespaceObject.__)('Settings', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    as: "h1",
    size: "xl"
  }, (0,external_wp_i18n_namespaceObject.__)('Add New Course', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
    sx: tabPanelStyles
  }, /*#__PURE__*/external_React_default().createElement("form", null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    flex: "1",
    bg: "white",
    p: "10",
    shadow: "box",
    d: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(components_Name, null), /*#__PURE__*/external_React_default().createElement(components_Description, null))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    w: "400px",
    bg: "white",
    p: "10",
    shadow: "box"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(components_Highlights, null), /*#__PURE__*/external_React_default().createElement(components_Categories, null), /*#__PURE__*/external_React_default().createElement(components_FeaturedImage, {
    size: "masteriyo_thumbnail"
  })))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
    sx: tabPanelStyles
  }, /*#__PURE__*/external_React_default().createElement(component_CourseSetting, null)))))))), /*#__PURE__*/external_React_default().createElement(common_AddCategoryModal, null));
};

/* harmony default export */ const courses_AddNewCourse = (AddNewCourse);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(5434);
;// CONCATENATED MODULE: ./assets/js/back-end/enums/Enum.tsx
var OrderStatus;

(function (OrderStatus) {
  OrderStatus["Completed"] = "completed";
  OrderStatus["OnHold"] = "on-hold";
  OrderStatus["Failed"] = "failed";
  OrderStatus["Refunded"] = "refunded";
  OrderStatus["Cancelled"] = "cancelled";
  OrderStatus["Pending"] = "pending";
  OrderStatus["Trash"] = "trash";
})(OrderStatus || (OrderStatus = {}));

var ReviewStatus;

(function (ReviewStatus) {
  ReviewStatus["approve"] = "approve";
  ReviewStatus["hold"] = "hold";
  ReviewStatus["spam"] = "spam";
  ReviewStatus["trash"] = "trash";
})(ReviewStatus || (ReviewStatus = {}));

var CourseStatus;

(function (CourseStatus) {
  CourseStatus["Any"] = "any";
  CourseStatus["Publish"] = "publish";
  CourseStatus["Draft"] = "draft";
  CourseStatus["Trash"] = "trash";
})(CourseStatus || (CourseStatus = {}));

var UserStatus;

(function (UserStatus) {
  UserStatus[UserStatus["Active"] = 0] = "Active";
  UserStatus[UserStatus["Ham"] = 0] = "Ham";
  UserStatus[UserStatus["Spam"] = 1] = "Spam";
  UserStatus[UserStatus["Inactive"] = 1000] = "Inactive";
})(UserStatus || (UserStatus = {}));

var IconType;

(function (IconType) {
  IconType["TrueFalse"] = "true-false";
  IconType["SingleChoice"] = "single-choice";
  IconType["MultipleChoice"] = "multiple-choice";
})(IconType || (IconType = {}));
;// CONCATENATED MODULE: ./assets/js/back-end/screens/courses/components/CourseFilter.tsx
















var pricingOptions = [{
  label: (0,external_wp_i18n_namespaceObject.__)('Free', 'masteriyo'),
  value: 'free'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Paid', 'masteriyo'),
  value: 'paid'
}];

var CourseFilter = function CourseFilter(props) {
  var _useState = (0,external_React_.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      categoriesList = _useState2[0],
      setCategoriesList = _useState2[1];

  var setFilterParams = props.setFilterParams,
      filterParams = props.filterParams,
      courseStatus = props.courseStatus;
  var categoryAPI = new api(constants_urls.categories);
  var categoriesQuery = (0,es.useInfiniteQuery)('categoryLists', function (_ref) {
    var _ref$pageParam = _ref.pageParam,
        pageParam = _ref$pageParam === void 0 ? 1 : _ref$pageParam;
    return categoryAPI.list({
      per_page: 10,
      page: pageParam
    });
  }, {
    retry: false,
    getNextPageParam: function getNextPageParam(lastResponse) {
      return lastResponse.meta.current_page >= lastResponse.meta.pages ? undefined : lastResponse.meta.current_page + 1;
    },
    onSuccess: function onSuccess(response) {
      var _response$pages;

      var categories = [];
      response === null || response === void 0 ? void 0 : (_response$pages = response.pages) === null || _response$pages === void 0 ? void 0 : _response$pages.forEach(function (page) {
        page.data.forEach(function (category) {
          categories.push(category);
        });
      });
      setCategoriesList(makeCategoriesHierarchy(categories).map(function (category) {
        return {
          value: category.id,
          label: '— '.repeat(category.depth) + category.name
        };
      }));
    }
  });
  var hasNextPage = categoriesQuery.hasNextPage,
      fetchNextPage = categoriesQuery.fetchNextPage,
      isFetchingNextPage = categoriesQuery.isFetchingNextPage;

  var _useForm = (0,dist_index_esm/* useForm */.cI)(),
      handleSubmit = _useForm.handleSubmit,
      control = _useForm.control;

  var _useMediaQuery = (0,chakra_ui_media_query_esm/* useMediaQuery */.ac)('(min-width: 48em)'),
      _useMediaQuery2 = (0,slicedToArray/* default */.Z)(_useMediaQuery, 1),
      isMobile = _useMediaQuery2[0];

  var onSearchInput = (0,index_es/* useOnType */.H)({
    onTypeFinish: function onTypeFinish(val) {
      setFilterParams({
        search: val,
        category: filterParams.category,
        status: courseStatus,
        price_type: filterParams.priceType
      });
    }
  }, 800);

  var _useState3 = (0,external_React_.useState)(isMobile),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var _onChange = function onChange(data) {
    var _data$category, _data$price_type;

    setFilterParams(deepClean(deepMerge(data, {
      search: filterParams.search,
      category: (_data$category = data.category) === null || _data$category === void 0 ? void 0 : _data$category.value,
      status: courseStatus,
      price_type: (_data$price_type = data.price_type) === null || _data$price_type === void 0 ? void 0 : _data$price_type.value
    })));
  };

  (0,external_React_.useEffect)(function () {
    setIsOpen(isMobile);
  }, [isMobile]);
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    px: {
      base: 6,
      md: 12
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    justify: "end"
  }, !isMobile && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('toggle filter', 'masteriyo'),
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
    "in": isOpen
  }, /*#__PURE__*/external_React_default().createElement("form", {
    onChange: handleSubmit(_onChange)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: ['column', null, 'row'],
    spacing: "4",
    mt: [6, null, 0]
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Search courses', 'masteriyo')
  }, onSearchInput)), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "category",
    control: control,
    render: function render(_ref2) {
      var _ref2$field = _ref2.field,
          onChangeValue = _ref2$field.onChange,
          value = _ref2$field.value;
      return /*#__PURE__*/external_React_default().createElement(react_select_browser_esm/* default */.ZP, {
        placeholder: (0,external_wp_i18n_namespaceObject.__)('All Categories', 'masteriyo'),
        onChange: function onChange() {
          onChangeValue.apply(void 0, arguments);
          handleSubmit(_onChange)();
        },
        value: value,
        styles: reactSelectStyles,
        closeMenuOnSelect: true,
        isClearable: true,
        options: categoriesList,
        isFetchingNextPage: isFetchingNextPage,
        onMenuScrollToBottom: function onMenuScrollToBottom() {
          if (hasNextPage) {
            fetchNextPage();
          }
        },
        components: {
          MenuList: common_ReactSelectOptions
        },
        noOptionsMessage: function noOptionsMessage(_ref3) {
          var inputValue = _ref3.inputValue;

          if (inputValue.length > 0) {
            return (0,external_wp_i18n_namespaceObject.__)('No categories found.', 'masteriyo');
          }

          return (0,external_wp_i18n_namespaceObject.__)('No categories.', 'masteriyo');
        }
      });
    }
  }), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "price_type",
    control: control,
    render: function render(_ref4) {
      var _ref4$field = _ref4.field,
          onChangeValue = _ref4$field.onChange,
          value = _ref4$field.value;
      return /*#__PURE__*/external_React_default().createElement(react_select_browser_esm/* default */.ZP, {
        onChange: function onChange() {
          onChangeValue.apply(void 0, arguments);
          handleSubmit(_onChange)();
        },
        value: value,
        styles: reactSelectStyles,
        options: pricingOptions,
        placeholder: (0,external_wp_i18n_namespaceObject.__)('Pricing', 'masteriyo'),
        isClearable: true,
        isSearchable: false
      });
    }
  })))));
};

/* harmony default export */ const components_CourseFilter = (CourseFilter);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/PriceWithSymbol.tsx



var PriceWithSymbol = function PriceWithSymbol(price, currencySymbol) {
  var FormattedPriceWithSymbol;

  switch (global.currency.position) {
    case 'left':
      FormattedPriceWithSymbol = "".concat(decodeEntity(currencySymbol)).concat(price);
      break;

    case 'right':
      FormattedPriceWithSymbol = "".concat(price).concat(decodeEntity(currencySymbol));
      break;

    case 'left_space':
      FormattedPriceWithSymbol = "".concat(decodeEntity(currencySymbol), " ").concat(price);
      break;

    case 'right_space':
      FormattedPriceWithSymbol = "".concat(price, " ").concat(decodeEntity(currencySymbol));
      break;

    default:
      // default set to left.
      FormattedPriceWithSymbol = "".concat(decodeEntity(currencySymbol)).concat(price);
  }

  return FormattedPriceWithSymbol;
};

/* harmony default export */ const common_PriceWithSymbol = (PriceWithSymbol);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/courses/components/CourseList.tsx











var CourseList = function CourseList(props) {
  var id = props.id,
      name = props.name,
      price = props.price,
      categories = props.categories,
      permalink = props.permalink,
      editPostLink = props.editPostLink,
      createdOn = props.createdOn,
      author = props.author,
      onDeletePress = props.onDeletePress,
      onTrashPress = props.onTrashPress,
      onRestorePress = props.onRestorePress,
      status = props.status;
  var createdOnDate = createdOn.split(' ')[0];
  var currencySymbol = global.currency.symbol;
  return /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Td, null, status === 'trash' ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontWeight: "semibold"
  }, name) : /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* Link */.rU,
    to: constants_routes.courses.edit.replace(':courseId', id.toString()),
    fontWeight: "semibold",
    _hover: {
      color: 'blue.500'
    }
  }, name, status === 'draft' ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Badge */.Ct, {
    bg: "blue.200",
    fontSize: "10px",
    ml: "2",
    mt: "-2"
  }, (0,external_wp_i18n_namespaceObject.__)('Draft', 'masteriyo')) : null)), /*#__PURE__*/external_React_default().createElement(dist.Td, null, !isEmpty(categories) ? categories === null || categories === void 0 ? void 0 : categories.map(function (category) {
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
      as: "span",
      fontSize: "xs",
      fontWeight: "medium",
      color: "gray.600",
      key: category === null || category === void 0 ? void 0 : category.id,
      _last: {
        _after: {
          content: 'none'
        }
      },
      _after: {
        content: "\", \""
      }
    }, category === null || category === void 0 ? void 0 : category.name);
  }) : /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    as: "span",
    fontSize: "xs",
    fontWeight: "medium",
    color: "gray.600"
  }, (0,external_wp_i18n_namespaceObject.__)('Uncategorized', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "2",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_avatar_esm/* Avatar */.qE, {
    src: author === null || author === void 0 ? void 0 : author.avatar_url,
    size: "xs"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "xs",
    fontWeight: "medium",
    color: "gray.600"
  }, author === null || author === void 0 ? void 0 : author.display_name))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, price === undefined || price < 1 ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Badge */.Ct, {
    textTransform: "none"
  }, (0,external_wp_i18n_namespaceObject.__)('Free', 'masteriyo')) : /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontWeight: "medium",
    fontSize: "xs"
  }, common_PriceWithSymbol(price, currencySymbol))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "2",
    alignItems: "center",
    color: "gray.600"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiCalendar */.R1q
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "xs",
    fontWeight: "medium"
  }, createdOnDate))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, status === 'trash' ? /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
    placement: "bottom-end"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
    as: chakra_ui_button_esm/* IconButton */.hU,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    size: "xs"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: function onClick() {
      return onRestorePress(id);
    },
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiShow */.A7v, null),
    _hover: {
      color: 'blue.500'
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Restore', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: function onClick() {
      return onDeletePress(id);
    },
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null),
    _hover: {
      color: 'red.500'
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Delete Permanently', 'masteriyo')))) : /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.courses.edit.replace(':courseId', id.toString())
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    leftIcon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiEdit */.Hlf, null),
    colorScheme: "blue",
    size: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Edit', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
    placement: "bottom-end"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
    as: chakra_ui_button_esm/* IconButton */.hU,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    size: "xs"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    href: permalink,
    isExternal: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiShow */.A7v, null)
  }, (0,external_wp_i18n_namespaceObject.__)('Preview', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    href: editPostLink,
    isExternal: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiWrench */.rjU, null)
  }, (0,external_wp_i18n_namespaceObject.__)('WordPress Editor', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: function onClick() {
      return onTrashPress(id);
    },
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null),
    _hover: {
      color: 'red.500'
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Trash', 'masteriyo')))))));
};

/* harmony default export */ const components_CourseList = (CourseList);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/courses/AllCourses.tsx























var AllCourses = function AllCourses() {
  var _courseQuery$data, _courseQuery$data2, _courseQuery$data2$da, _courseQuery$data3, _courseQuery$data4;

  var courseAPI = new api(constants_urls.courses);
  var history = (0,react_router/* useHistory */.k6)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();

  var _useState = (0,external_React_.useState)({
    order: 'desc',
    orderby: 'id'
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      filterParams = _useState2[0],
      setFilterParams = _useState2[1];

  var _useState3 = (0,external_React_.useState)(),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      deleteCourseId = _useState4[0],
      setDeleteCourseId = _useState4[1];

  var queryClient = (0,es.useQueryClient)();

  var _useDisclosure = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)(),
      onClose = _useDisclosure.onClose,
      onOpen = _useDisclosure.onOpen,
      isOpen = _useDisclosure.isOpen;

  var _useState5 = (0,external_React_.useState)('any'),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      active = _useState6[0],
      setActive = _useState6[1];

  var _useState7 = (0,external_React_.useState)({
    any: null,
    publish: null,
    draft: null,
    trash: null
  }),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      courseStatusCount = _useState8[0],
      setCourseStatusCount = _useState8[1];

  var courseQuery = (0,es.useQuery)(['courseList', filterParams], function () {
    return courseAPI.list(filterParams);
  }, {
    onSuccess: function onSuccess(data) {
      var _data$meta, _data$meta$courses_co, _data$meta2, _data$meta2$courses_c, _data$meta3, _data$meta3$courses_c, _data$meta4, _data$meta4$courses_c;

      setCourseStatusCount({
        any: data === null || data === void 0 ? void 0 : (_data$meta = data.meta) === null || _data$meta === void 0 ? void 0 : (_data$meta$courses_co = _data$meta.courses_count) === null || _data$meta$courses_co === void 0 ? void 0 : _data$meta$courses_co.any,
        publish: data === null || data === void 0 ? void 0 : (_data$meta2 = data.meta) === null || _data$meta2 === void 0 ? void 0 : (_data$meta2$courses_c = _data$meta2.courses_count) === null || _data$meta2$courses_c === void 0 ? void 0 : _data$meta2$courses_c.publish,
        draft: data === null || data === void 0 ? void 0 : (_data$meta3 = data.meta) === null || _data$meta3 === void 0 ? void 0 : (_data$meta3$courses_c = _data$meta3.courses_count) === null || _data$meta3$courses_c === void 0 ? void 0 : _data$meta3$courses_c.draft,
        trash: data === null || data === void 0 ? void 0 : (_data$meta4 = data.meta) === null || _data$meta4 === void 0 ? void 0 : (_data$meta4$courses_c = _data$meta4.courses_count) === null || _data$meta4$courses_c === void 0 ? void 0 : _data$meta4$courses_c.trash
      });
    },
    keepPreviousData: true
  });
  var cancelRef = external_React_default().useRef();
  var deleteCourse = (0,es.useMutation)(function (id) {
    return courseAPI["delete"](id, {
      force: true,
      children: true
    });
  }, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries('courseList');
      onClose();
    }
  });
  var restoreCourse = (0,es.useMutation)(function (id) {
    return courseAPI.restore(id);
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Course Restored', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
      queryClient.invalidateQueries('courseList');
    }
  });
  var trashCourse = (0,es.useMutation)(function (id) {
    return courseAPI["delete"](id);
  }, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries('courseList');
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Course Trashed', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
    }
  });

  var onTrashPress = function onTrashPress(courseId) {
    courseId && trashCourse.mutate(courseId);
  };

  var onDeletePress = function onDeletePress(courseId) {
    onOpen();
    setDeleteCourseId(courseId);
  };

  var onDeleteConfirm = function onDeleteConfirm() {
    deleteCourseId ? deleteCourse.mutate(deleteCourseId) : null;
  };

  var onRestorePress = function onRestorePress(courseId) {
    courseId ? restoreCourse.mutate(courseId) : null;
  };

  var onChangeCourseStatus = function onChangeCourseStatus(status) {
    setActive(status);
    setFilterParams(deepMerge(filterParams, {
      status: status
    }));
  };

  var courseStatusBtnStyles = {
    mr: '10',
    py: '6',
    d: 'flex',
    gap: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontWeight: 'medium',
    fontSize: ['xs', null, 'sm']
  };

  var courseStatusButton = function courseStatusButton(courseStatus, iconName) {
    var _statusList;

    var statusList = (_statusList = {}, (0,defineProperty/* default */.Z)(_statusList, CourseStatus.Any, (0,external_wp_i18n_namespaceObject.__)('All Courses', 'masteriyo')), (0,defineProperty/* default */.Z)(_statusList, CourseStatus.Publish, (0,external_wp_i18n_namespaceObject.__)('Published', 'masteriyo')), (0,defineProperty/* default */.Z)(_statusList, CourseStatus.Draft, (0,external_wp_i18n_namespaceObject.__)('Draft', 'masteriyo')), (0,defineProperty/* default */.Z)(_statusList, CourseStatus.Trash, (0,external_wp_i18n_namespaceObject.__)('Trash', 'masteriyo')), _statusList);
    var buttonText = statusList[courseStatus] ? statusList[courseStatus] : courseStatus[0].toUpperCase() + courseStatus.slice(1);
    var courseCount = courseStatusCount[courseStatus];
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      color: "gray.600",
      variant: "link",
      sx: courseStatusBtnStyles,
      _active: navActiveStyles,
      rounded: "none",
      isActive: active === courseStatus,
      _hover: {
        color: 'blue.500'
      },
      onClick: function onClick() {
        return onChangeCourseStatus(courseStatus);
      }
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
      as: iconName
    }), buttonText, courseCount !== null ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Badge */.Ct, {
      color: "inherit"
    }, courseCount) : /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonCircle */.s7, {
      size: "3",
      w: "17px",
      ml: "1",
      mb: "1",
      rounded: "sm"
    }));
  };

  var filterCoursesBy = function filterCoursesBy(order, orderBy) {
    return setFilterParams(deepMerge({
      filterParams: filterParams,
      order: order,
      orderby: orderBy
    }));
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(common_Header, {
    thirdBtn: {
      label: (0,external_wp_i18n_namespaceObject.__)('Add New Course', 'masteriyo'),
      action: function action() {
        return history.push(constants_routes.courses.add);
      },
      icon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        as: index_esm/* BiPlus */.poH,
        fontSize: "md"
      })
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, {
    d: "flex"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    mb: "0"
  }, courseStatusButton('any', index_esm/* BiBook */.lOc)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    mb: "0"
  }, courseStatusButton('publish', index_esm/* BiBookOpen */.v_B)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    mb: "0"
  }, courseStatusButton('draft', index_esm/* BiBookBookmark */.eXA)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    mb: "0"
  }, courseStatusButton('trash', index_esm/* BiTrash */.SW4)))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    py: {
      base: 6,
      md: 12
    },
    shadow: "box",
    mx: "auto"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "10"
  }, /*#__PURE__*/external_React_default().createElement(components_CourseFilter, {
    setFilterParams: setFilterParams,
    filterParams: filterParams,
    courseStatus: active
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(dist/* Table */.iA, null, /*#__PURE__*/external_React_default().createElement(dist/* Thead */.hr, null, /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Th, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, (0,external_wp_i18n_namespaceObject.__)('Title', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column"
  }, (filterParams === null || filterParams === void 0 ? void 0 : filterParams.order) === 'desc' ? /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: md_index_esm/* MdOutlineArrowDropUp */.IVI,
    h: 6,
    w: 6,
    cursor: "pointer",
    color: "lightgray",
    transition: "1s",
    _hover: {
      color: 'black'
    },
    onClick: function onClick() {
      return filterCoursesBy('asc', 'title');
    }
  }) : /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: md_index_esm/* MdOutlineArrowDropDown */.FIC,
    h: 6,
    w: 6,
    cursor: "pointer",
    color: "lightgray",
    transition: "1s",
    _hover: {
      color: 'black'
    },
    onClick: function onClick() {
      return filterCoursesBy('desc', 'title');
    }
  })))), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Categories', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Instructor', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Price', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Date', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Actions', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(dist/* Tbody */.p3, null, courseQuery.isLoading && /*#__PURE__*/external_React_default().createElement(SkeletonCourseList, null), courseQuery.isSuccess && isEmpty(courseQuery === null || courseQuery === void 0 ? void 0 : (_courseQuery$data = courseQuery.data) === null || _courseQuery$data === void 0 ? void 0 : _courseQuery$data.data) ? /*#__PURE__*/external_React_default().createElement(common_EmptyInfo, {
    message: (0,external_wp_i18n_namespaceObject.__)('No courses found.', 'masteriyo')
  }) : courseQuery === null || courseQuery === void 0 ? void 0 : (_courseQuery$data2 = courseQuery.data) === null || _courseQuery$data2 === void 0 ? void 0 : (_courseQuery$data2$da = _courseQuery$data2.data) === null || _courseQuery$data2$da === void 0 ? void 0 : _courseQuery$data2$da.map(function (course) {
    return /*#__PURE__*/external_React_default().createElement(components_CourseList, {
      id: course === null || course === void 0 ? void 0 : course.id,
      name: course === null || course === void 0 ? void 0 : course.name,
      price: course === null || course === void 0 ? void 0 : course.price,
      categories: course === null || course === void 0 ? void 0 : course.categories,
      key: course === null || course === void 0 ? void 0 : course.id,
      createdOn: course === null || course === void 0 ? void 0 : course.date_created,
      permalink: course === null || course === void 0 ? void 0 : course.permalink,
      editPostLink: course === null || course === void 0 ? void 0 : course.edit_post_link,
      author: course === null || course === void 0 ? void 0 : course.author,
      onDeletePress: onDeletePress,
      onTrashPress: onTrashPress,
      onRestorePress: onRestorePress,
      status: course === null || course === void 0 ? void 0 : course.status
    });
  })))))), courseQuery.isSuccess && !isEmpty(courseQuery === null || courseQuery === void 0 ? void 0 : (_courseQuery$data3 = courseQuery.data) === null || _courseQuery$data3 === void 0 ? void 0 : _courseQuery$data3.data) && /*#__PURE__*/external_React_default().createElement(common_MasteriyoPagination, {
    metaData: courseQuery === null || courseQuery === void 0 ? void 0 : (_courseQuery$data4 = courseQuery.data) === null || _courseQuery$data4 === void 0 ? void 0 : _courseQuery$data4.meta,
    setFilterParams: setFilterParams,
    perPageText: (0,external_wp_i18n_namespaceObject.__)('Courses Per Page:', 'masteriyo'),
    extraFilterParams: {
      order: filterParams === null || filterParams === void 0 ? void 0 : filterParams.order,
      orderby: filterParams === null || filterParams === void 0 ? void 0 : filterParams.orderby,
      search: filterParams === null || filterParams === void 0 ? void 0 : filterParams.search,
      status: filterParams === null || filterParams === void 0 ? void 0 : filterParams.status,
      category: filterParams === null || filterParams === void 0 ? void 0 : filterParams.category,
      price_type: filterParams === null || filterParams === void 0 ? void 0 : filterParams.price
    }
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
    isOpen: isOpen,
    onClose: onClose,
    isCentered: true,
    leastDestructiveRef: cancelRef
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.__)('Deleting Course', 'masteriyo'), " ", name), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, (0,external_wp_i18n_namespaceObject.__)('Are you sure? You can’t restore after deleting.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    onClick: onClose,
    variant: "outline",
    ref: cancelRef
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "red",
    isLoading: deleteCourse.isLoading,
    onClick: onDeleteConfirm
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))))));
};

/* harmony default export */ const courses_AllCourses = (AllCourses);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/BackToBuilder.tsx







var BackToBuilder = function BackToBuilder() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      courseId = _useParams.courseId;

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.courses.edit.replace(':courseId', courseId.toString()) + '?page=builder'
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "link",
    _hover: {
      color: 'blue.500'
    },
    leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      fontSize: "xl",
      as: index_esm/* BiChevronLeft */.gbs
    })
  }, (0,external_wp_i18n_namespaceObject.__)('Back to Builder', 'masteriyo'))));
};

/* harmony default export */ const common_BackToBuilder = (BackToBuilder);
;// CONCATENATED MODULE: ./assets/js/back-end/hooks/useCourse.tsx




var useCourse = function useCourse() {
  var courseAPI = new api(constants_urls.courses);
  var updateCourse = (0,es.useMutation)(function (_ref) {
    var id = _ref.id,
        data = _ref.data;
    return courseAPI.update(id, data);
  });
  var draftCourse = (0,es.useMutation)(function (id) {
    return courseAPI.update(id, {
      status: 'draft'
    });
  });
  var publishCourse = (0,es.useMutation)(function (id) {
    return courseAPI.update(id, {
      status: 'publish'
    });
  });
  return {
    updateCourse: updateCourse,
    draftCourse: draftCourse,
    publishCourse: publishCourse
  };
};

/* harmony default export */ const hooks_useCourse = (useCourse);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/lessons/components/Description.tsx





var Description_Description = function Description(props) {
  var defaultValue = props.defaultValue;
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Lesson Description', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(common_Editor, {
    id: "mto-lesson-description",
    name: "description",
    defaultValue: defaultValue
  }));
};

/* harmony default export */ const lessons_components_Description = (Description_Description);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/lessons/components/Name.tsx






var Name_Name = function Name(props) {
  var _errors$name;

  var defaultValue = props.defaultValue;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      errors = _useFormContext.formState.errors;

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.name)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Lesson Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    defaultValue: defaultValue,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Your lesson Name', 'masteriyo')
  }, register('name', {
    required: (0,external_wp_i18n_namespaceObject.__)('You must provide name for the lesson.', 'masteriyo')
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.name) && (errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message)));
};

/* harmony default export */ const lessons_components_Name = (Name_Name);
// EXTERNAL MODULE: ./node_modules/react-player/lib/index.js
var lib = __webpack_require__(2004);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/lessons/components/VideoSource.tsx











var VideoSource = function VideoSource(props) {
  var _errors$video_source_, _mediaQuery$data, _mediaQuery$data2, _mediaQuery$data2$tit;

  var defaultSource = props.defaultSource,
      defaultSourceUrl = props.defaultSourceUrl,
      defaultSourceID = props.defaultSourceID;

  var _useState = (0,external_React_.useState)(null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      videoId = _useState2[0],
      setVideoId = _useState2[1];

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      control = _useFormContext.control,
      errors = _useFormContext.formState.errors,
      setValue = _useFormContext.setValue;

  var imageAPi = new media();
  (0,external_React_.useEffect)(function () {
    setVideoId(defaultSourceID || null);
  }, [defaultSourceID]);
  var mediaQuery = (0,es.useQuery)(["videoSource".concat(videoId), videoId], function () {
    return imageAPi.get(videoId);
  }, {
    enabled: !!videoId,
    refetchOnWindowFocus: true
  });
  var watchSource = (0,dist_index_esm/* useWatch */.qo)({
    name: 'video_source',
    defaultValue: defaultSource || 'self-hosted',
    control: control
  });

  var onComplete = function onComplete(videoId) {
    setVideoId(videoId);
    setValue('video_source_url', videoId.toString());
  };

  var onDelete = function onDelete() {
    setVideoId(null);
    setValue('video_source_url', ' ');
    setValue('video_source_id', 0);
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Video Source', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({}, register('video_source'), {
    defaultValue: defaultSource
  }), /*#__PURE__*/external_React_default().createElement("option", {
    value: "self-hosted"
  }, (0,external_wp_i18n_namespaceObject.__)('Self Hosted', 'masteriyo')), /*#__PURE__*/external_React_default().createElement("option", {
    value: "youtube"
  }, (0,external_wp_i18n_namespaceObject.__)('YouTube', 'masteriyo')), /*#__PURE__*/external_React_default().createElement("option", {
    value: "vimeo"
  }, (0,external_wp_i18n_namespaceObject.__)('Vimeo', 'masteriyo')))), watchSource !== 'self-hosted' && /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!errors.video_source_url
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Video Source URL', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text",
    defaultValue: defaultSourceUrl
  }, register('video_source_url', {
    pattern: {
      value: watchSource === 'youtube' ? /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i : /\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i,
      message: (0,external_wp_i18n_namespaceObject.__)('Please Provide Valid URL.', 'masteriyo')
    }
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.video_source_url) && (errors === null || errors === void 0 ? void 0 : (_errors$video_source_ = errors.video_source_url) === null || _errors$video_source_ === void 0 ? void 0 : _errors$video_source_.message))), watchSource === 'self-hosted' && /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Self Hosted Video', 'masteriyo')), mediaQuery.isLoading && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
    mb: "4",
    mt: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_spinner_esm/* Spinner */.$, null)), mediaQuery.isSuccess && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* AspectRatio */.oM, {
    ratio: 16 / 9,
    mb: "4"
  }, /*#__PURE__*/external_React_default().createElement(lib/* default */.Z, {
    style: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    height: "100%",
    width: "100%",
    url: mediaQuery === null || mediaQuery === void 0 ? void 0 : (_mediaQuery$data = mediaQuery.data) === null || _mediaQuery$data === void 0 ? void 0 : _mediaQuery$data.source_url,
    title: mediaQuery === null || mediaQuery === void 0 ? void 0 : (_mediaQuery$data2 = mediaQuery.data) === null || _mediaQuery$data2 === void 0 ? void 0 : (_mediaQuery$data2$tit = _mediaQuery$data2.title) === null || _mediaQuery$data2$tit === void 0 ? void 0 : _mediaQuery$data2$tit.rendered,
    controls: true
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, {
    d: "flex",
    justifyContent: "space-between"
  }, videoId && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "outline",
    onClick: onDelete,
    colorScheme: "red"
  }, (0,external_wp_i18n_namespaceObject.__)('Remove Video', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(common_MediaUploader, {
    buttonLabel: videoId ? (0,external_wp_i18n_namespaceObject.__)('Add New Video', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Add Video', 'masteriyo'),
    modalTitle: (0,external_wp_i18n_namespaceObject.__)('Self Hosted Video', 'masteriyo'),
    onSelect: function onSelect(data) {
      onComplete(data[0].id);
    },
    isFullWidth: videoId ? false : true,
    mediaType: "video"
  }))));
};

/* harmony default export */ const components_VideoSource = (VideoSource);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/lessons/AddNewLesson.tsx




















var AddNewLesson = function AddNewLesson() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      sectionId = _useParams.sectionId,
      courseId = _useParams.courseId;

  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var queryClient = (0,es.useQueryClient)();
  var methods = (0,dist_index_esm/* useForm */.cI)();

  var _useCourse = hooks_useCourse(),
      draftCourse = _useCourse.draftCourse,
      publishCourse = _useCourse.publishCourse;

  var history = (0,react_router/* useHistory */.k6)();
  var lessonAPI = new api(constants_urls.lessons);
  var sectionsAPI = new api(constants_urls.sections);
  var courseAPI = new api(constants_urls.courses);
  var courseQuery = (0,es.useQuery)(["course".concat(courseId), courseId], function () {
    return courseAPI.get(courseId);
  }); // checks whether section exist or not

  var sectionQuery = (0,es.useQuery)(["section".concat(sectionId), sectionId], function () {
    return sectionsAPI.get(sectionId);
  }); // adds lesson on the database

  var addLesson = (0,es.useMutation)(function (data) {
    return lessonAPI.store(data);
  });

  var onSubmit = function onSubmit(data, status) {
    var newData = {
      course_id: courseId,
      parent_id: sectionId,
      featured_image: data.featuredImage
    };
    status === 'draft' && draftCourse.mutate(courseId);
    status === 'publish' && publishCourse.mutate(courseId);
    addLesson.mutate(deepMerge(deepClean(data), newData), {
      onSuccess: function onSuccess(data) {
        toast({
          title: data.name + (0,external_wp_i18n_namespaceObject.__)(' has been added.', 'masteriyo'),
          status: 'success',
          isClosable: true
        });
        queryClient.invalidateQueries("course".concat(data.id));
        history.push({
          pathname: constants_routes.courses.edit.replace(':courseId', courseId),
          search: '?page=builder&view=' + sectionId
        });
      }
    });
  };

  var isPublished = function isPublished() {
    var _courseQuery$data;

    if (((_courseQuery$data = courseQuery.data) === null || _courseQuery$data === void 0 ? void 0 : _courseQuery$data.status) === 'publish') {
      return true;
    } else {
      return false;
    }
  };

  var isDrafted = function isDrafted() {
    var _courseQuery$data2;

    if (((_courseQuery$data2 = courseQuery.data) === null || _courseQuery$data2 === void 0 ? void 0 : _courseQuery$data2.status) === 'draft') {
      return true;
    } else {
      return false;
    }
  };

  if (sectionQuery.isSuccess && courseQuery.isSuccess && sectionQuery.data.course_id == courseId) {
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8",
      alignItems: "center"
    }, /*#__PURE__*/external_React_default().createElement(common_Header, {
      showCourseName: true,
      showLinks: true,
      showPreview: true,
      course: {
        name: courseQuery.data.name,
        id: courseQuery.data.id,
        previewUrl: courseQuery.data.permalink
      },
      secondBtn: {
        label: isDrafted() ? (0,external_wp_i18n_namespaceObject.__)('Save To Draft', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Switch To Draft', 'masteriyo'),
        action: methods.handleSubmit(function (data) {
          return onSubmit(data, 'draft');
        }),
        isLoading: draftCourse.isLoading
      },
      thirdBtn: {
        label: isPublished() ? (0,external_wp_i18n_namespaceObject.__)('Update', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Publish', 'masteriyo'),
        action: methods.handleSubmit(function (data) {
          return onSubmit(data, 'publish');
        }),
        isLoading: publishCourse.isLoading
      }
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
      maxW: "container.xl"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(common_BackToBuilder, null), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, methods, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      bg: "white",
      p: "10",
      shadow: "box"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
      aling: "center",
      justify: "space-between"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      as: "h1",
      fontSize: "x-large"
    }, (0,external_wp_i18n_namespaceObject.__)('Add New Lesson', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
      placement: "bottom-end"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
      as: chakra_ui_button_esm/* IconButton */.hU,
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
      variant: "outline",
      rounded: "sm",
      fontSize: "large"
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiEdit */.Hlf, null)
    }, (0,external_wp_i18n_namespaceObject.__)('Edit', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null)
    }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement("form", {
      onSubmit: methods.handleSubmit(function (data) {
        return onSubmit(data);
      })
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(lessons_components_Name, null), /*#__PURE__*/external_React_default().createElement(lessons_components_Description, null), /*#__PURE__*/external_React_default().createElement(components_FeaturedImage, {
      size: "masteriyo_single"
    }), /*#__PURE__*/external_React_default().createElement(components_VideoSource, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      colorScheme: "blue",
      type: "submit",
      isLoading: addLesson.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Add New Lesson', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      variant: "outline",
      onClick: function onClick() {
        return history.push({
          pathname: constants_routes.courses.edit.replace(':courseId', courseId),
          search: '?page=builder&view=' + sectionId
        });
      }
    }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')))))))))));
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const lessons_AddNewLesson = (AddNewLesson);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/lessons/EditLesson.tsx



function EditLesson_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function EditLesson_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? EditLesson_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : EditLesson_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





















var EditLesson = function EditLesson() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      lessonId = _useParams.lessonId,
      courseId = _useParams.courseId;

  var _useCourse = hooks_useCourse(),
      draftCourse = _useCourse.draftCourse,
      publishCourse = _useCourse.publishCourse;

  var history = (0,react_router/* useHistory */.k6)();
  var methods = (0,dist_index_esm/* useForm */.cI)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var cancelRef = (0,external_React_.useRef)();
  var lessonAPI = new api(constants_urls.lessons);
  var courseAPI = new api(constants_urls.courses);

  var _useState = (0,external_React_.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isDeleteModalOpen = _useState2[0],
      setDeleteModalOpen = _useState2[1];

  var queryClient = (0,es.useQueryClient)();
  var courseQuery = (0,es.useQuery)(["course".concat(courseId), courseId], function () {
    return courseAPI.get(courseId);
  });
  var lessonQuery = (0,es.useQuery)(["section".concat(lessonId), lessonId], function () {
    return lessonAPI.get(lessonId);
  });
  var updateLesson = (0,es.useMutation)(function (data) {
    return lessonAPI.update(lessonId, data);
  }, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries("section".concat(lessonId));
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Lesson Updated', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
      history.push({
        pathname: constants_routes.courses.edit.replace(':courseId', courseId),
        search: '?page=builder'
      });
    }
  });
  var deleteLesson = (0,es.useMutation)(function (lessonId) {
    return lessonAPI["delete"](lessonId);
  }, {
    onSuccess: function onSuccess(data) {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Lesson Deleted.', 'masteriyo'),
        isClosable: true,
        status: 'error'
      });
      history.push({
        pathname: constants_routes.courses.edit.replace(':courseId', data.course_id),
        search: '?page=builder'
      });
    }
  });

  var onSubmit = function onSubmit(data, status) {
    status === 'draft' && draftCourse.mutate(courseId);
    status === 'publish' && publishCourse.mutate(courseId);
    updateLesson.mutate(deepClean(EditLesson_objectSpread(EditLesson_objectSpread({}, data), {}, {
      featured_image: data.featuredImage
    })));
  };

  var onDeletePress = function onDeletePress() {
    setDeleteModalOpen(true);
  };

  var onDeleteConfirm = function onDeleteConfirm() {
    deleteLesson.mutate(lessonId);
  };

  var onDeleteModalClose = function onDeleteModalClose() {
    setDeleteModalOpen(false);
  };

  var isPublished = function isPublished() {
    var _courseQuery$data;

    if (((_courseQuery$data = courseQuery.data) === null || _courseQuery$data === void 0 ? void 0 : _courseQuery$data.status) === 'publish') {
      return true;
    } else {
      return false;
    }
  };

  var isDrafted = function isDrafted() {
    var _courseQuery$data2;

    if (((_courseQuery$data2 = courseQuery.data) === null || _courseQuery$data2 === void 0 ? void 0 : _courseQuery$data2.status) === 'draft') {
      return true;
    } else {
      return false;
    }
  };

  if (lessonQuery.isSuccess && courseQuery.isSuccess && lessonQuery.data.course_id == courseId) {
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8",
      alignItems: "center"
    }, /*#__PURE__*/external_React_default().createElement(common_Header, {
      showCourseName: true,
      showLinks: true,
      showPreview: true,
      course: {
        name: courseQuery.data.name,
        id: courseQuery.data.id,
        previewUrl: courseQuery.data.permalink
      },
      secondBtn: {
        label: isDrafted() ? (0,external_wp_i18n_namespaceObject.__)('Save To Draft', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Switch To Draft', 'masteriyo'),
        action: methods.handleSubmit(function (data) {
          return onSubmit(data, 'draft');
        }),
        isLoading: draftCourse.isLoading
      },
      thirdBtn: {
        label: isPublished() ? (0,external_wp_i18n_namespaceObject.__)('Update', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Publish', 'masteriyo'),
        action: methods.handleSubmit(function (data) {
          return onSubmit(data, 'publish');
        }),
        isLoading: publishCourse.isLoading
      }
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
      maxW: "container.xl"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(common_BackToBuilder, null), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, methods, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      bg: "white",
      p: "10",
      shadow: "box"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
      aling: "center",
      justify: "space-between"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      as: "h1",
      fontSize: "x-large"
    }, (0,external_wp_i18n_namespaceObject.__)('Edit Lesson', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
      placement: "bottom-end"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
      as: chakra_ui_button_esm/* IconButton */.hU,
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
      variant: "outline",
      rounded: "sm",
      fontSize: "large"
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null),
      onClick: onDeletePress
    }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement("form", {
      onSubmit: methods.handleSubmit(function (data) {
        return onSubmit(data);
      })
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(lessons_components_Name, {
      defaultValue: lessonQuery.data.name
    }), /*#__PURE__*/external_React_default().createElement(lessons_components_Description, {
      defaultValue: lessonQuery.data.description
    }), /*#__PURE__*/external_React_default().createElement(components_FeaturedImage, {
      defaultValue: lessonQuery.data.featured_image,
      size: "masteriyo_single"
    }), /*#__PURE__*/external_React_default().createElement(components_VideoSource, {
      defaultSource: lessonQuery.data.video_source,
      defaultSourceUrl: lessonQuery.data.video_source_url,
      defaultSourceID: lessonQuery.data.video_source_id
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      colorScheme: "blue",
      type: "submit",
      isLoading: updateLesson.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Update Lesson', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      variant: "outline",
      onClick: function onClick() {
        return history.push({
          pathname: constants_routes.courses.edit.replace(':courseId', courseId),
          search: '?page=builder'
        });
      }
    }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo'))))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
      isOpen: isDeleteModalOpen,
      onClose: onDeleteModalClose,
      isCentered: true,
      leastDestructiveRef: cancelRef
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.__)('Delete Lesson', 'masteriyo'), " ", name), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, (0,external_wp_i18n_namespaceObject.__)('Are you sure? You can’t restore after deleting.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      ref: cancelRef,
      onClick: onDeleteModalClose,
      variant: "outline"
    }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      colorScheme: "red",
      onClick: onDeleteConfirm,
      isLoading: deleteLesson.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo')))))))))));
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const lessons_EditLesson = (EditLesson);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/orders/components/NoOrdersNotice.tsx






var NoOrdersNotice = function NoOrdersNotice() {
  return /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "1",
    align: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0,
    color: "blue.400"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    as: "span",
    fontWeight: "medium",
    color: "gray.600",
    fontSize: "sm"
  }, (0,external_wp_i18n_namespaceObject.__)('No orders found.', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(dist.Td, null), /*#__PURE__*/external_React_default().createElement(dist.Td, null), /*#__PURE__*/external_React_default().createElement(dist.Td, null), /*#__PURE__*/external_React_default().createElement(dist.Td, null), /*#__PURE__*/external_React_default().createElement(dist.Td, null), /*#__PURE__*/external_React_default().createElement(dist.Td, null));
};

/* harmony default export */ const components_NoOrdersNotice = (NoOrdersNotice);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/orders/components/OrderRow.tsx















var makeOrderNumberLabel = function makeOrderNumberLabel(order) {
  if (order.billing.first_name || order.billing.last_name) {
    return "#".concat(order.id, " ").concat(order.billing.first_name, " ").concat(order.billing.last_name).trim();
  } else if (order.billing.company) {
    return "#".concat(order.id, " ").concat(order.billing.company).trim();
  }

  return "#".concat(order.id);
};

var OrderRow = function OrderRow(props) {
  var _data$billing, _data$billing2, _data$billing3, _data$billing4, _data$billing5, _data$course_lines$;

  var data = props.data;
  var id = data.id,
      status = data.status,
      total = data.total,
      currency_symbol = data.currency_symbol,
      billing = data.billing;
  var order_number = makeOrderNumberLabel(data);
  var queryClient = (0,es.useQueryClient)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();

  var _useState = (0,external_React_.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isDeleteModalOpen = _useState2[0],
      setDeleteModalOpen = _useState2[1];

  var _useState3 = (0,external_React_.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      isOrderPreviewModalOpen = _useState4[0],
      setOrderPreviewModalOpen = _useState4[1];

  var ordersAPI = new api(constants_urls.orders);
  var cancelDeleteModalRef = (0,external_React_.useRef)();
  var cancelOrderPreviewModalRef = (0,external_React_.useRef)();
  var deleteOrder = (0,es.useMutation)(function (id) {
    return ordersAPI["delete"](id, {
      force: true
    });
  }, {
    onSuccess: function onSuccess() {
      setDeleteModalOpen(false);
      queryClient.invalidateQueries('ordersList');
    }
  });

  var onDeletePress = function onDeletePress() {
    setDeleteModalOpen(true);
  };

  var onDeleteModalClose = function onDeleteModalClose() {
    setDeleteModalOpen(false);
  };

  var onDeleteConfirm = function onDeleteConfirm() {
    deleteOrder.mutate(id);
  };

  var onPreviewPress = function onPreviewPress() {
    setOrderPreviewModalOpen(true);
  };

  var onOrderPreviewModalClose = function onOrderPreviewModalClose() {
    setOrderPreviewModalOpen(false);
  };

  var restoreOrder = (0,es.useMutation)(function (id) {
    return ordersAPI.restore(id);
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Order Restored', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
      queryClient.invalidateQueries('ordersList');
    }
  });
  var trashOrder = (0,es.useMutation)(function (id) {
    return ordersAPI["delete"](id);
  }, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries('ordersList');
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Order Trashed', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
    }
  });

  var onTrashPress = function onTrashPress() {
    return trashOrder.mutate(id);
  };

  var onRestorePress = function onRestorePress() {
    return restoreOrder.mutate(id);
  };

  var orderStatus = status == OrderStatus.Completed ? 'green' : status == OrderStatus.OnHold ? 'orange' : status == OrderStatus.Pending ? 'yellow' : status == OrderStatus.Cancelled ? 'red' : status == OrderStatus.Refunded ? 'blue' : status == OrderStatus.Failed ? 'blackalpha' : 'gray';
  return /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column"
  }, status === 'trash' ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontWeight: "semibold"
  }, "#".concat(id, " ").concat(data === null || data === void 0 ? void 0 : (_data$billing = data.billing) === null || _data$billing === void 0 ? void 0 : _data$billing.first_name, " ").concat(data === null || data === void 0 ? void 0 : (_data$billing2 = data.billing) === null || _data$billing2 === void 0 ? void 0 : _data$billing2.last_name)) : /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* Link */.rU,
    to: constants_routes.orders.edit.replace(':orderId', id.toString()),
    fontWeight: "semibold",
    fontSize: "sm",
    _hover: {
      color: 'blue.500'
    }
  }, "#".concat(id, " ").concat(data === null || data === void 0 ? void 0 : (_data$billing3 = data.billing) === null || _data$billing3 === void 0 ? void 0 : _data$billing3.first_name, " ").concat(data === null || data === void 0 ? void 0 : (_data$billing4 = data.billing) === null || _data$billing4 === void 0 ? void 0 : _data$billing4.last_name)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "xs",
    color: "gray.600"
  }, data === null || data === void 0 ? void 0 : (_data$billing5 = data.billing) === null || _data$billing5 === void 0 ? void 0 : _data$billing5.email))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "sm",
    color: "gray.600"
  }, data === null || data === void 0 ? void 0 : (_data$course_lines$ = data.course_lines[0]) === null || _data$course_lines$ === void 0 ? void 0 : _data$course_lines$.name)), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "2",
    alignItems: "center",
    color: "gray.600"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiCalendar */.R1q
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "sm",
    fontWeight: "medium"
  }, getLocalTime(data === null || data === void 0 ? void 0 : data.date_created).toLocaleString()))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Badge */.Ct, {
    colorScheme: orderStatus
  }, status)), /*#__PURE__*/external_React_default().createElement(dist.Td, null, common_PriceWithSymbol(total, currency_symbol)), /*#__PURE__*/external_React_default().createElement(dist.Td, null, status === 'trash' ? /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
    placement: "bottom-end"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
    as: chakra_ui_button_esm/* IconButton */.hU,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    size: "xs"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: function onClick() {
      return onRestorePress();
    },
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiShow */.A7v, null),
    _hover: {
      color: 'blue.500'
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Restore', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: function onClick() {
      return onDeletePress();
    },
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null),
    _hover: {
      color: 'red.500'
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Delete Permanently', 'masteriyo')))) : /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.orders.edit.replace(':orderId', id.toString())
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    leftIcon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiEdit */.Hlf, null),
    colorScheme: "blue",
    size: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Edit', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
    placement: "bottom-end"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
    as: chakra_ui_button_esm/* IconButton */.hU,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    size: "xs"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: onPreviewPress,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiShow */.A7v, null)
  }, (0,external_wp_i18n_namespaceObject.__)('Preview', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: onTrashPress,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null),
    _hover: {
      color: 'red.500'
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Trash', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
    isOpen: isOrderPreviewModalOpen,
    onClose: onOrderPreviewModalClose,
    isCentered: true,
    leastDestructiveRef: cancelOrderPreviewModalRef
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.__)('Order', 'masteriyo'), " ", order_number), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, /*#__PURE__*/external_React_default().createElement("div", null, /*#__PURE__*/external_React_default().createElement("strong", null, (0,external_wp_i18n_namespaceObject.__)('Billing details', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement("div", null, billing.first_name, " ", billing.last_name), /*#__PURE__*/external_React_default().createElement("div", null, billing.company), /*#__PURE__*/external_React_default().createElement("div", null, billing.address_1), /*#__PURE__*/external_React_default().createElement("div", null, billing.address_2), /*#__PURE__*/external_React_default().createElement("div", null, billing.city), /*#__PURE__*/external_React_default().createElement("div", null, billing.state), /*#__PURE__*/external_React_default().createElement("div", null, billing.postcode), /*#__PURE__*/external_React_default().createElement("div", null, billing.country)), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    ref: cancelOrderPreviewModalRef,
    onClick: onOrderPreviewModalClose,
    variant: "outline"
  }, (0,external_wp_i18n_namespaceObject.__)('OK', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* Link */.rU,
    to: constants_routes.orders.edit.replace(':orderId', id.toString())
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "blue"
  }, (0,external_wp_i18n_namespaceObject.__)('Edit', 'masteriyo')))))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
    isOpen: isDeleteModalOpen,
    onClose: onDeleteModalClose,
    isCentered: true,
    leastDestructiveRef: cancelDeleteModalRef
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.__)('Delete Order', 'masteriyo'), " ", order_number), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, (0,external_wp_i18n_namespaceObject.__)('Are you sure? You can’t restore after deleting.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    ref: cancelDeleteModalRef,
    onClick: onDeleteModalClose,
    variant: "outline"
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "red",
    onClick: onDeleteConfirm,
    isLoading: deleteOrder.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo')))))))));
};

/* harmony default export */ const components_OrderRow = (OrderRow);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.min.js
var react_datepicker_min = __webpack_require__(9198);
var react_datepicker_min_default = /*#__PURE__*/__webpack_require__.n(react_datepicker_min);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__(4308);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/DesktopHidden.tsx



var DesktopHidden = function DesktopHidden(props) {
  var children = props.children;
  var display = (0,chakra_ui_media_query_esm/* useBreakpointValue */.Sx)({
    base: 'block',
    md: 'none'
  });
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    d: display
  }, children);
};

/* harmony default export */ const common_DesktopHidden = (DesktopHidden);
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
;// CONCATENATED MODULE: ./assets/js/back-end/screens/orders/components/OrdersFilter.tsx

















var orderStatusList = [{
  label: (0,external_wp_i18n_namespaceObject.__)('Pending', 'masteriyo'),
  value: 'pending'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('On-hold', 'masteriyo'),
  value: 'on-hold'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Completed', 'masteriyo'),
  value: 'completed'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Cancelled', 'masteriyo'),
  value: 'cancelled'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Refunded', 'masteriyo'),
  value: 'refunded'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Failed', 'masteriyo'),
  value: 'failed'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Trash', 'masteriyo'),
  value: 'trash'
}];

var OrdersFilter = function OrdersFilter(props) {
  var _usersQuery$data, _usersQuery$data$data;

  var setFilterParams = props.setFilterParams;

  var _useForm = (0,dist_index_esm/* useForm */.cI)(),
      handleSubmit = _useForm.handleSubmit,
      setValue = _useForm.setValue,
      control = _useForm.control;

  var _useMediaQuery = (0,chakra_ui_media_query_esm/* useMediaQuery */.ac)('(min-width: 48em)'),
      _useMediaQuery2 = (0,slicedToArray/* default */.Z)(_useMediaQuery, 1),
      isMobile = _useMediaQuery2[0];

  var _useState = (0,external_React_.useState)(isMobile),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var usersQuery = (0,es.useQuery)('users', function () {
    return usersAPI.list({
      orderby: 'display_name',
      order: 'asc',
      per_page: 10
    });
  });

  var _onChange = function onChange(data) {
    var _data$before, _data$after, _data$status;

    var formattedDate = {
      before: data === null || data === void 0 ? void 0 : (_data$before = data.before) === null || _data$before === void 0 ? void 0 : _data$before.toISOString(),
      after: data === null || data === void 0 ? void 0 : (_data$after = data.after) === null || _data$after === void 0 ? void 0 : _data$after.toISOString(),
      status: data === null || data === void 0 ? void 0 : (_data$status = data.status) === null || _data$status === void 0 ? void 0 : _data$status.value
    };
    setFilterParams(deepClean(deepMerge(data, formattedDate)));
  };

  (0,external_React_.useEffect)(function () {
    setIsOpen(isMobile);
  }, [isMobile]);
  var usersAPI = new api(constants_urls.users);
  var orderFilterForm = /*#__PURE__*/external_React_default().createElement("form", {
    onChange: handleSubmit(_onChange)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: ['column', null, 'row'],
    spacing: "4",
    mt: [6, null, 0]
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, null, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    control: control,
    name: "after",
    render: function render(_ref) {
      var _ref$field = _ref.field,
          onDateChange = _ref$field.onChange,
          value = _ref$field.value;
      return /*#__PURE__*/external_React_default().createElement((react_datepicker_min_default()), {
        dateFormat: "yyyy-MM-dd",
        onChange: function onChange(value) {
          onDateChange(value);
          handleSubmit(_onChange)();
        },
        selected: value,
        customInput: /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, null),
        placeholderText: (0,external_wp_i18n_namespaceObject.__)('From', 'masteriyo'),
        autoComplete: "off"
      });
    }
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, null, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    control: control,
    name: "before",
    render: function render(_ref2) {
      var _ref2$field = _ref2.field,
          onDateChange = _ref2$field.onChange,
          value = _ref2$field.value;
      return /*#__PURE__*/external_React_default().createElement((react_datepicker_min_default()), {
        dateFormat: "yyyy-MM-dd",
        onChange: function onChange(value) {
          onDateChange(value);
          handleSubmit(_onChange)();
        },
        selected: value,
        customInput: /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, null),
        placeholderText: (0,external_wp_i18n_namespaceObject.__)('To', 'masteriyo'),
        autoComplete: "off"
      });
    }
  })), /*#__PURE__*/external_React_default().createElement(dist_react_select_browser_esm/* default */.ZP, {
    styles: reactSelectStyles,
    cacheOptions: true,
    loadingMessage: function loadingMessage() {
      return (0,external_wp_i18n_namespaceObject.__)('Searching...', 'masteriyo');
    },
    noOptionsMessage: function noOptionsMessage(_ref3) {
      var inputValue = _ref3.inputValue;
      return !isEmpty(inputValue) ? (0,external_wp_i18n_namespaceObject.__)('Users not found.', 'masteriyo') : usersQuery.isLoading ? (0,external_wp_i18n_namespaceObject.__)('Loading...', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Please enter one or more characters.', 'masteriyo');
    },
    isClearable: true,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Search by customer', 'masteriyo'),
    onChange: function onChange(selectedOption) {
      setValue('customer', selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value);
      handleSubmit(_onChange)();
    },
    defaultOptions: usersQuery.isSuccess ? (_usersQuery$data = usersQuery.data) === null || _usersQuery$data === void 0 ? void 0 : (_usersQuery$data$data = _usersQuery$data.data) === null || _usersQuery$data$data === void 0 ? void 0 : _usersQuery$data$data.map(function (user) {
      return {
        value: user.id,
        label: "".concat(user.display_name, " (#").concat(user.id, " - ").concat(user.email, ")"),
        avatar_url: user.avatar_url
      };
    }) : [],
    loadOptions: function loadOptions(searchValue, callback) {
      if (isEmpty(searchValue)) {
        return callback([]);
      }

      usersAPI.list({
        search: searchValue
      }).then(function (data) {
        callback(data.data.map(function (user) {
          return {
            value: user.id,
            label: "".concat(user.display_name, " (#").concat(user.id, " - ").concat(user.email, ")")
          };
        }));
      });
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "status",
    control: control,
    render: function render(_ref4) {
      var _ref4$field = _ref4.field,
          onChangeValue = _ref4$field.onChange,
          value = _ref4$field.value;
      return /*#__PURE__*/external_React_default().createElement(react_select_browser_esm/* default */.ZP, {
        onChange: function onChange() {
          onChangeValue.apply(void 0, arguments);
          handleSubmit(_onChange)();
        },
        value: value,
        styles: reactSelectStyles,
        options: orderStatusList,
        placeholder: (0,external_wp_i18n_namespaceObject.__)('All Status', 'masteriyo'),
        isClearable: true
      });
    }
  }))));
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    px: {
      base: 6,
      md: 12
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    justify: "end"
  }, !isMobile && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('toggle filter', 'masteriyo'),
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  })), /*#__PURE__*/external_React_default().createElement(common_DesktopHidden, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
    "in": isOpen
  }, orderFilterForm)), /*#__PURE__*/external_React_default().createElement(common_MobileHidden, null, orderFilterForm));
};

/* harmony default export */ const components_OrdersFilter = (OrdersFilter);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/orders/AllOrders.tsx





















var AllOrders = function AllOrders() {
  var _ordersQuery$data, _ordersQuery$data2, _ordersQuery$data2$da, _ordersQuery$data3, _ordersQuery$data4;

  var _useState = (0,external_React_.useState)({
    order: 'desc',
    orderby: 'id'
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      filterParams = _useState2[0],
      setFilterParams = _useState2[1];

  var ordersAPI = new api(constants_urls.orders);
  var ordersQuery = (0,es.useQuery)(['ordersList', filterParams], function () {
    return ordersAPI.list(filterParams);
  }, {
    keepPreviousData: true
  });
  var history = (0,react_router/* useHistory */.k6)();

  var filterOrderBy = function filterOrderBy(order, orderBy) {
    return setFilterParams(deepMerge({
      filterParams: filterParams,
      order: order,
      orderby: orderBy
    }));
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(common_Header, {
    showLinks: true,
    thirdBtn: {
      label: (0,external_wp_i18n_namespaceObject.__)('Create New Order', 'masteriyo'),
      action: function action() {
        return history.push(constants_routes.orders.add);
      },
      icon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        as: index_esm/* BiPlus */.poH,
        fontSize: "md"
      })
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* NavLink */.OL,
    sx: navLinkStyles,
    _activeLink: navActiveStyles,
    to: constants_routes.orders.list
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: index_esm/* BiCart */.ByR
  }), (0,external_wp_i18n_namespaceObject.__)('Orders', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl",
    marginTop: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    py: {
      base: 6,
      md: 12
    },
    shadow: "box",
    mx: "auto"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(components_OrdersFilter, {
    setFilterParams: setFilterParams
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(dist/* Table */.iA, null, /*#__PURE__*/external_React_default().createElement(dist/* Thead */.hr, null, /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Th, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, (0,external_wp_i18n_namespaceObject.__)('Order', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column"
  }, (filterParams === null || filterParams === void 0 ? void 0 : filterParams.order) === 'desc' ? /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: md_index_esm/* MdOutlineArrowDropUp */.IVI,
    h: 6,
    w: 6,
    cursor: "pointer",
    color: "lightgray",
    transition: "1s",
    _hover: {
      color: 'black'
    },
    onClick: function onClick() {
      return filterOrderBy('asc', 'id');
    }
  }) : /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: md_index_esm/* MdOutlineArrowDropDown */.FIC,
    h: 6,
    w: 6,
    cursor: "pointer",
    color: "lightgray",
    transition: "1s",
    _hover: {
      color: 'black'
    },
    onClick: function onClick() {
      return filterOrderBy('desc', 'id');
    }
  })))), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Course', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Date', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Status', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Total', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Actions', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(dist/* Tbody */.p3, null, ordersQuery.isLoading && /*#__PURE__*/external_React_default().createElement(SkeletonOrdersList, null), ordersQuery.isSuccess && isEmpty(ordersQuery === null || ordersQuery === void 0 ? void 0 : (_ordersQuery$data = ordersQuery.data) === null || _ordersQuery$data === void 0 ? void 0 : _ordersQuery$data.data) ? /*#__PURE__*/external_React_default().createElement(components_NoOrdersNotice, null) : ordersQuery === null || ordersQuery === void 0 ? void 0 : (_ordersQuery$data2 = ordersQuery.data) === null || _ordersQuery$data2 === void 0 ? void 0 : (_ordersQuery$data2$da = _ordersQuery$data2.data) === null || _ordersQuery$data2$da === void 0 ? void 0 : _ordersQuery$data2$da.map(function (order) {
    return /*#__PURE__*/external_React_default().createElement(components_OrderRow, {
      key: order === null || order === void 0 ? void 0 : order.id,
      data: order
    });
  })))))), ordersQuery.isSuccess && !isEmpty(ordersQuery === null || ordersQuery === void 0 ? void 0 : (_ordersQuery$data3 = ordersQuery.data) === null || _ordersQuery$data3 === void 0 ? void 0 : _ordersQuery$data3.data) && /*#__PURE__*/external_React_default().createElement(common_MasteriyoPagination, {
    extraFilterParams: {
      order: filterParams === null || filterParams === void 0 ? void 0 : filterParams.order,
      orderby: filterParams === null || filterParams === void 0 ? void 0 : filterParams.orderby
    },
    metaData: ordersQuery === null || ordersQuery === void 0 ? void 0 : (_ordersQuery$data4 = ordersQuery.data) === null || _ordersQuery$data4 === void 0 ? void 0 : _ordersQuery$data4.meta,
    setFilterParams: setFilterParams,
    perPageText: (0,external_wp_i18n_namespaceObject.__)('Orders Per Page:', 'masteriyo')
  })));
};

/* harmony default export */ const orders_AllOrders = (AllOrders);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/orders/CreateNewOrder.tsx















var CreateNewOrder_orderStatusList = [{
  label: (0,external_wp_i18n_namespaceObject.__)('Pending', 'masteriyo'),
  value: 'pending'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('On Hold', 'masteriyo'),
  value: 'on-hold'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Completed', 'masteriyo'),
  value: 'completed'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Cancelled', 'masteriyo'),
  value: 'cancelled'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Refunded', 'masteriyo'),
  value: 'refunded'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Failed', 'masteriyo'),
  value: 'failed'
}];

var CreateNewOrder = function CreateNewOrder() {
  var _usersQuery$data, _usersQuery$data$data, _errors$customer_id, _errors$course_lines, _errors$course_lines$, _coursesQuery$data, _coursesQuery$data$da, _errors$course_lines2, _errors$course_lines3, _errors$course_lines4, _errors$course_lines5, _errors$course_lines6;

  var formMethods = (0,dist_index_esm/* useForm */.cI)();
  var handleSubmit = formMethods.handleSubmit,
      setValue = formMethods.setValue,
      register = formMethods.register,
      errors = formMethods.formState.errors;
  var history = (0,react_router/* useHistory */.k6)();
  var usersAPI = new api(constants_urls.users);
  var coursesAPI = new api(constants_urls.courses);
  var ordersAPI = new api(constants_urls.orders);
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var usersQuery = (0,es.useQuery)('users', function () {
    return usersAPI.list({
      orderby: 'display_name',
      order: 'asc',
      per_page: 10
    });
  });
  var coursesQuery = (0,es.useQuery)('courses', function () {
    return coursesAPI.list({
      per_page: 10
    });
  });
  var addOrder = (0,es.useMutation)(function (data) {
    return ordersAPI.store(data);
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('New Order Added.', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
      history.push(constants_routes.orders.list);
    }
  });

  var onSubmit = function onSubmit(data) {
    addOrder.mutate(deepClean(data));
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(common_Header, {
    showLinks: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* NavLink */.OL,
    sx: navLinkStyles,
    _activeLink: navActiveStyles,
    to: constants_routes.orders.list
  }, (0,external_wp_i18n_namespaceObject.__)('Create Order', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl",
    marginTop: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.orders.list
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "link",
    _hover: {
      color: 'blue.500'
    },
    leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      fontSize: "xl",
      as: index_esm/* BiChevronLeft */.gbs
    })
  }, (0,external_wp_i18n_namespaceObject.__)('Back to Orders', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    p: "10",
    shadow: "box"
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, formMethods, /*#__PURE__*/external_React_default().createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    flex: "1",
    py: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    as: "h2",
    fontSize: "medium"
  }, (0,external_wp_i18n_namespaceObject.__)('General', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    py: "3"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Status', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({
    defaultValue: "pending"
  }, register('status')), CreateNewOrder_orderStatusList.map(function (option) {
    return /*#__PURE__*/external_React_default().createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    flex: "1",
    py: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    as: "h2",
    fontSize: "medium"
  }, (0,external_wp_i18n_namespaceObject.__)('Billing', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.customer_id),
    py: "3"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Customer', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist_react_select_browser_esm/* default */.ZP, (0,esm_extends/* default */.Z)({}, register('customer_id', {
    required: 'Customer must be selected'
  }), {
    styles: reactSelectStyles,
    cacheOptions: true,
    loadingMessage: function loadingMessage() {
      return (0,external_wp_i18n_namespaceObject.__)('Searching customer...', 'masteriyo');
    },
    noOptionsMessage: function noOptionsMessage(_ref) {
      var inputValue = _ref.inputValue;
      return !isEmpty(inputValue) ? (0,external_wp_i18n_namespaceObject.__)('Users not found.', 'masteriyo') : usersQuery.isLoading ? (0,external_wp_i18n_namespaceObject.__)('Loading...', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Please enter one or more characters.', 'masteriyo');
    },
    isClearable: true,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Search customer by username or email', 'masteriyo'),
    onChange: function onChange(selectedOption) {
      setValue('customer_id', selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value.toString());
    },
    defaultOptions: usersQuery.isSuccess ? (_usersQuery$data = usersQuery.data) === null || _usersQuery$data === void 0 ? void 0 : (_usersQuery$data$data = _usersQuery$data.data) === null || _usersQuery$data$data === void 0 ? void 0 : _usersQuery$data$data.map(function (user) {
      return {
        value: user.id,
        label: "".concat(user.display_name, " (#").concat(user.id, " - ").concat(user.email, ")"),
        avatar_url: user.avatar_url
      };
    }) : [],
    loadOptions: function loadOptions(searchValue, callback) {
      if (isEmpty(searchValue)) {
        return callback([]);
      }

      usersAPI.list({
        search: searchValue
      }).then(function (data) {
        callback(data.data.map(function (user) {
          return {
            value: user.id,
            label: "".concat(user.display_name, " (#").concat(user.id, " - ").concat(user.email, ")")
          };
        }));
      });
    }
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.customer_id) && (errors === null || errors === void 0 ? void 0 : (_errors$customer_id = errors.customer_id) === null || _errors$customer_id === void 0 ? void 0 : _errors$customer_id.message))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    py: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && (_errors$course_lines = errors.course_lines) !== null && _errors$course_lines !== void 0 && (_errors$course_lines$ = _errors$course_lines[0]) !== null && _errors$course_lines$ !== void 0 && _errors$course_lines$.course_id),
    py: "3"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Course', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist_react_select_browser_esm/* default */.ZP, (0,esm_extends/* default */.Z)({}, register('course_lines.0.course_id', {
    required: 'Course must be selected'
  }), {
    styles: reactSelectStyles,
    cacheOptions: true,
    loadingMessage: function loadingMessage() {
      return (0,external_wp_i18n_namespaceObject.__)('Searching course...', 'masteriyo');
    },
    noOptionsMessage: function noOptionsMessage(_ref2) {
      var inputValue = _ref2.inputValue;
      return !isEmpty(inputValue) ? (0,external_wp_i18n_namespaceObject.__)('Course not found.', 'masteriyo') : coursesQuery.isLoading ? (0,external_wp_i18n_namespaceObject.__)('Loading...', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Please enter one or more characters.', 'masteriyo');
    },
    isClearable: true,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Search courses', 'masteriyo'),
    onChange: function onChange(selectedOption) {
      setValue('course_lines.0.course_id', selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value);
    },
    defaultOptions: coursesQuery.isSuccess ? (_coursesQuery$data = coursesQuery.data) === null || _coursesQuery$data === void 0 ? void 0 : (_coursesQuery$data$da = _coursesQuery$data.data) === null || _coursesQuery$data$da === void 0 ? void 0 : _coursesQuery$data$da.map(function (course) {
      return {
        value: course.id,
        label: "#".concat(course.id, " ").concat(course.name)
      };
    }) : [],
    loadOptions: function loadOptions(searchValue, callback) {
      if (isEmpty(searchValue)) {
        return callback([]);
      }

      coursesAPI.list({
        search: searchValue
      }).then(function (data) {
        callback(data.data.map(function (course) {
          return {
            value: course.id,
            label: "#".concat(course.id, " ").concat(course.name)
          };
        }));
      });
    }
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : (_errors$course_lines2 = errors.course_lines) === null || _errors$course_lines2 === void 0 ? void 0 : (_errors$course_lines3 = _errors$course_lines2[0]) === null || _errors$course_lines3 === void 0 ? void 0 : _errors$course_lines3.course_id) && (errors === null || errors === void 0 ? void 0 : (_errors$course_lines4 = errors.course_lines) === null || _errors$course_lines4 === void 0 ? void 0 : (_errors$course_lines5 = _errors$course_lines4[0]) === null || _errors$course_lines5 === void 0 ? void 0 : (_errors$course_lines6 = _errors$course_lines5.course_id) === null || _errors$course_lines6 === void 0 ? void 0 : _errors$course_lines6.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    py: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "blue",
    type: "submit",
    isLoading: addOrder.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Create Order', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "outline",
    onClick: function onClick() {
      return history.push(constants_routes.orders.list);
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo'))))))))));
};

/* harmony default export */ const orders_CreateNewOrder = (CreateNewOrder);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/orders/EditOrder.tsx


















var EditOrder_orderStatusList = [{
  label: (0,external_wp_i18n_namespaceObject.__)('Pending', 'masteriyo'),
  value: 'pending'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('On Hold', 'masteriyo'),
  value: 'on-hold'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Completed', 'masteriyo'),
  value: 'completed'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Cancelled', 'masteriyo'),
  value: 'cancelled'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Refunded', 'masteriyo'),
  value: 'refunded'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Failed', 'masteriyo'),
  value: 'failed'
}];
var paymentMethods = [{
  label: (0,external_wp_i18n_namespaceObject.__)('Standard Paypal', 'masteriyo'),
  value: 'paypal'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Offline', 'masteriyo'),
  value: 'offline'
}];

var EditOrder = function EditOrder() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      orderId = _useParams.orderId;

  var history = (0,react_router/* useHistory */.k6)();
  var formMethods = (0,dist_index_esm/* useForm */.cI)();
  var handleSubmit = formMethods.handleSubmit,
      register = formMethods.register,
      errors = formMethods.formState.errors;
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var cancelRef = (0,external_React_.useRef)();
  var orderAPI = new api(constants_urls.orders);
  var orderItemsAPI = new api(constants_urls.order_items);

  var _useState = (0,external_React_.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isDeleteModalOpen = _useState2[0],
      setDeleteModalOpen = _useState2[1];

  var queryClient = (0,es.useQueryClient)();
  var orderQuery = (0,es.useQuery)(["order".concat(orderId), orderId], function () {
    return orderAPI.get(orderId);
  }, {
    onError: function onError() {
      history.push(constants_routes.notFound);
    }
  });
  var orderItemsQuery = (0,es.useQuery)('orderItemsList', function () {
    return orderItemsAPI.list({
      order_id: orderId
    });
  }, {
    onError: function onError(error) {
      var _error$response, _error$response$data;

      toast({
        description: "".concat((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message),
        isClosable: true,
        status: 'error'
      });
    }
  });
  var updateOrder = (0,es.useMutation)(function (data) {
    return orderAPI.update(orderId, data);
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Order updated', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
    },
    onError: function onError(error) {
      var _error$response2, _error$response2$data;

      toast({
        description: "".concat((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message),
        isClosable: true,
        status: 'error'
      });
    }
  });
  var deleteOrder = (0,es.useMutation)(function (orderId) {
    return orderAPI["delete"](orderId);
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Order Deleted', 'masteriyo'),
        isClosable: true,
        status: 'error'
      });
      history.push(constants_routes.orders.list);
      queryClient.invalidateQueries('ordersList');
    }
  });

  var onSubmit = function onSubmit(data) {
    updateOrder.mutate(deepClean(data));
  };

  var onDeletePress = function onDeletePress() {
    setDeleteModalOpen(true);
  };

  var onDeleteConfirm = function onDeleteConfirm() {
    deleteOrder.mutate(orderId);
  };

  var onDeleteModalClose = function onDeleteModalClose() {
    setDeleteModalOpen(false);
  };

  if (orderQuery.isSuccess && orderItemsQuery.isSuccess) {
    var _errors$status, _errors$payment_metho, _errors$transaction_i, _errors$billing, _orderQuery$data, _errors$billing2, _errors$billing3, _errors$billing3$firs, _errors$billing4, _orderQuery$data2, _orderQuery$data2$bil, _errors$billing5, _errors$billing6, _errors$billing6$last, _errors$billing7, _orderQuery$data3, _errors$billing8, _errors$billing9, _errors$billing9$emai;

    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8",
      alignItems: "center"
    }, /*#__PURE__*/external_React_default().createElement(common_Header, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
      as: react_router_dom/* NavLink */.OL,
      sx: navLinkStyles,
      _activeLink: navActiveStyles,
      to: constants_routes.orders.list
    }, (0,external_wp_i18n_namespaceObject.__)('Edit Order', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
      maxW: "container.xl",
      marginTop: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
      to: constants_routes.orders.list
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      variant: "link",
      _hover: {
        color: 'blue.500'
      },
      leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        fontSize: "xl",
        as: index_esm/* BiChevronLeft */.gbs
      })
    }, (0,external_wp_i18n_namespaceObject.__)('Back to Orders', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      bg: "white",
      p: "10",
      shadow: "box"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
      aling: "center",
      justify: "space-between"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      as: "h1",
      fontSize: "x-large"
    }, (0,external_wp_i18n_namespaceObject.__)('Edit Order', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
      placement: "bottom-end"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
      as: chakra_ui_button_esm/* IconButton */.hU,
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
      variant: "outline",
      rounded: "sm",
      fontSize: "large"
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null),
      onClick: onDeletePress
    }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, formMethods, /*#__PURE__*/external_React_default().createElement("form", {
      onSubmit: handleSubmit(onSubmit)
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      flexGrow: 1,
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      as: "h2",
      fontSize: "medium"
    }, (0,external_wp_i18n_namespaceObject.__)('General', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Date created', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, {
      defaultValue: getLocalTime(orderQuery.data.date_created).toString(),
      disabled: true
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && errors.status),
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Status', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({
      defaultValue: orderQuery.data.status
    }, register('status', {
      required: (0,external_wp_i18n_namespaceObject.__)('Select a status.', 'masteriyo')
    })), EditOrder_orderStatusList.map(function (option) {
      return /*#__PURE__*/external_React_default().createElement("option", {
        key: option.value,
        value: option.value
      }, option.label);
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.status) && (errors === null || errors === void 0 ? void 0 : (_errors$status = errors.status) === null || _errors$status === void 0 ? void 0 : _errors$status.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && errors.payment_method),
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Payment method', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({
      placeholder: (0,external_wp_i18n_namespaceObject.__)('Select a payment method.', 'masteriyo'),
      defaultValue: orderQuery.data.payment_method
    }, register('payment_method', {
      required: (0,external_wp_i18n_namespaceObject.__)('Select a payment method.', 'masteriyo')
    })), paymentMethods.map(function (option) {
      return /*#__PURE__*/external_React_default().createElement("option", {
        key: option.value,
        value: option.value
      }, option.label);
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.payment_method) && (errors === null || errors === void 0 ? void 0 : (_errors$payment_metho = errors.payment_method) === null || _errors$payment_metho === void 0 ? void 0 : _errors$payment_metho.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && errors.transaction_id),
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Transaction ID', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      defaultValue: orderQuery.data.transaction_id
    }, register('transaction_id'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.transaction_id) && (errors === null || errors === void 0 ? void 0 : (_errors$transaction_i = errors.transaction_id) === null || _errors$transaction_i === void 0 ? void 0 : _errors$transaction_i.message)))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      flexGrow: 1,
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      as: "h2",
      fontSize: "medium"
    }, (0,external_wp_i18n_namespaceObject.__)('Billing', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "8",
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && (_errors$billing = errors.billing) !== null && _errors$billing !== void 0 && _errors$billing.first_name)
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('First Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      defaultValue: (_orderQuery$data = orderQuery.data) === null || _orderQuery$data === void 0 ? void 0 : _orderQuery$data.billing.first_name
    }, register('billing.first_name'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : (_errors$billing2 = errors.billing) === null || _errors$billing2 === void 0 ? void 0 : _errors$billing2.first_name) && (errors === null || errors === void 0 ? void 0 : (_errors$billing3 = errors.billing) === null || _errors$billing3 === void 0 ? void 0 : (_errors$billing3$firs = _errors$billing3.first_name) === null || _errors$billing3$firs === void 0 ? void 0 : _errors$billing3$firs.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && (_errors$billing4 = errors.billing) !== null && _errors$billing4 !== void 0 && _errors$billing4.last_name)
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Last Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      defaultValue: (_orderQuery$data2 = orderQuery.data) === null || _orderQuery$data2 === void 0 ? void 0 : (_orderQuery$data2$bil = _orderQuery$data2.billing) === null || _orderQuery$data2$bil === void 0 ? void 0 : _orderQuery$data2$bil.last_name
    }, register('billing.last_name'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : (_errors$billing5 = errors.billing) === null || _errors$billing5 === void 0 ? void 0 : _errors$billing5.last_name) && (errors === null || errors === void 0 ? void 0 : (_errors$billing6 = errors.billing) === null || _errors$billing6 === void 0 ? void 0 : (_errors$billing6$last = _errors$billing6.last_name) === null || _errors$billing6$last === void 0 ? void 0 : _errors$billing6$last.message)))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && (_errors$billing7 = errors.billing) !== null && _errors$billing7 !== void 0 && _errors$billing7.email)
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Email address', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "email",
      defaultValue: (_orderQuery$data3 = orderQuery.data) === null || _orderQuery$data3 === void 0 ? void 0 : _orderQuery$data3.billing.email
    }, register('billing.email'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : (_errors$billing8 = errors.billing) === null || _errors$billing8 === void 0 ? void 0 : _errors$billing8.email) && (errors === null || errors === void 0 ? void 0 : (_errors$billing9 = errors.billing) === null || _errors$billing9 === void 0 ? void 0 : (_errors$billing9$emai = _errors$billing9.email) === null || _errors$billing9$emai === void 0 ? void 0 : _errors$billing9$emai.message))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      as: "h2",
      fontSize: "medium"
    }, (0,external_wp_i18n_namespaceObject.__)('Items', 'masteriyo')), orderItemsQuery.isSuccess && orderItemsQuery.data.map(function (orderItem) {
      var _orderQuery$data4;

      return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
        key: orderItem.id,
        direction: "row",
        spacing: "6"
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
        flexGrow: 1,
        fontWeight: "semibold"
      }, orderItem.name), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
        fontSize: "sm",
        fontWeight: "medium",
        color: "gray.600"
      }, "x ", orderItem.quantity), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
        fontSize: "sm",
        fontWeight: "medium",
        color: "gray.600"
      }, common_PriceWithSymbol(orderItem.total, (_orderQuery$data4 = orderQuery.data) === null || _orderQuery$data4 === void 0 ? void 0 : _orderQuery$data4.currency_symbol)));
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      colorScheme: "blue",
      type: "submit",
      isLoading: updateOrder.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Update Order', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      variant: "outline",
      onClick: function onClick() {
        return history.push(constants_routes.orders.list);
      }
    }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')))))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
      isOpen: isDeleteModalOpen,
      onClose: onDeleteModalClose,
      isCentered: true,
      leastDestructiveRef: cancelRef
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.__)('Delete Order', 'masteriyo'), " ", name), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, (0,external_wp_i18n_namespaceObject.__)('Are you sure? You can’t restore after deleting.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      ref: cancelRef,
      onClick: onDeleteModalClose,
      variant: "outline"
    }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      colorScheme: "red",
      onClick: onDeleteConfirm,
      isLoading: deleteOrder.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))))))));
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const orders_EditOrder = (EditOrder);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz-attempts/components/QuizAttemptFilter.tsx
















var QuizAttemptFilter = function QuizAttemptFilter(props) {
  var _usersQuery$data, _usersQuery$data$data, _quizzesQuery$data;

  var setFilterParams = props.setFilterParams;

  var _useForm = (0,dist_index_esm/* useForm */.cI)(),
      handleSubmit = _useForm.handleSubmit,
      setValue = _useForm.setValue;

  var _useMediaQuery = (0,chakra_ui_media_query_esm/* useMediaQuery */.ac)('(min-width: 48em)'),
      _useMediaQuery2 = (0,slicedToArray/* default */.Z)(_useMediaQuery, 1),
      isMobile = _useMediaQuery2[0];

  var _useState = (0,external_React_.useState)(isMobile),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _onChange = function onChange(data) {
    setFilterParams(deepClean(data));
  };

  (0,external_React_.useEffect)(function () {
    setIsOpen(isMobile);
  }, [isMobile]);
  var usersAPI = new api(constants_urls.users);
  var quizAPI = new api(constants_urls.quizes);
  var usersQuery = (0,es.useQuery)('users', function () {
    return usersAPI.list({
      orderby: 'display_name',
      order: 'asc',
      per_page: 10
    });
  });
  var quizzesQuery = (0,es.useQuery)('quizzes', function () {
    return quizAPI.list({
      per_page: 10
    });
  });
  var QuizAttemptFilterForm = /*#__PURE__*/external_React_default().createElement("form", {
    onChange: handleSubmit(_onChange)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: ['column', null, 'row'],
    spacing: "4",
    mt: [6, null, 0]
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(dist_react_select_browser_esm/* default */.ZP, {
    styles: reactSelectStyles,
    cacheOptions: true,
    loadingMessage: function loadingMessage() {
      return (0,external_wp_i18n_namespaceObject.__)('Searching...', 'masteriyo');
    },
    noOptionsMessage: function noOptionsMessage(_ref) {
      var inputValue = _ref.inputValue;
      return !isEmpty(inputValue) ? (0,external_wp_i18n_namespaceObject.__)('Users not found.', 'masteriyo') : usersQuery.isLoading ? (0,external_wp_i18n_namespaceObject.__)('Loading...', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Please enter one or more characters.', 'masteriyo');
    },
    isClearable: true,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Search by username or email', 'masteriyo'),
    onChange: function onChange(selectedOption) {
      setValue('user_id', selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value);
      handleSubmit(_onChange)();
    },
    defaultOptions: usersQuery.isSuccess ? (_usersQuery$data = usersQuery.data) === null || _usersQuery$data === void 0 ? void 0 : (_usersQuery$data$data = _usersQuery$data.data) === null || _usersQuery$data$data === void 0 ? void 0 : _usersQuery$data$data.map(function (user) {
      return {
        value: user.id,
        label: "".concat(user.display_name, " (#").concat(user.id, " - ").concat(user.email, ")"),
        avatar_url: user.avatar_url
      };
    }) : [],
    loadOptions: function loadOptions(searchValue, callback) {
      if (isEmpty(searchValue)) {
        return callback([]);
      }

      usersAPI.list({
        search: searchValue
      }).then(function (data) {
        callback(data.data.map(function (user) {
          return {
            value: user.id,
            label: "".concat(user.display_name, " (#").concat(user.id, " - ").concat(user.email, ")")
          };
        }));
      });
    }
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(dist_react_select_browser_esm/* default */.ZP, {
    styles: reactSelectStyles,
    cacheOptions: true,
    loadingMessage: function loadingMessage() {
      return (0,external_wp_i18n_namespaceObject.__)('Searching...', 'masteriyo');
    },
    noOptionsMessage: function noOptionsMessage(_ref2) {
      var inputValue = _ref2.inputValue;
      return !isEmpty(inputValue) ? (0,external_wp_i18n_namespaceObject.__)('Quiz not found.', 'masteriyo') : quizzesQuery.isLoading ? (0,external_wp_i18n_namespaceObject.__)('Loading...', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Please enter one or more characters.', 'masteriyo');
    },
    isClearable: true,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Search by Quiz', 'masteriyo'),
    onChange: function onChange(selectedOption) {
      setValue('quiz_id', selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value);
      handleSubmit(_onChange)();
    },
    defaultOptions: quizzesQuery.isSuccess ? (_quizzesQuery$data = quizzesQuery.data) === null || _quizzesQuery$data === void 0 ? void 0 : _quizzesQuery$data.map(function (quiz) {
      return {
        value: quiz.id,
        label: quiz.name
      };
    }) : [],
    loadOptions: function loadOptions(searchValue, callback) {
      if (isEmpty(searchValue)) {
        return callback([]);
      }

      quizAPI.list({
        search: searchValue
      }).then(function (data) {
        callback(data.map(function (quiz) {
          return {
            value: quiz.id,
            label: quiz.name
          };
        }));
      });
    }
  }))));
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    px: {
      base: 6,
      md: 12
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    justify: "end"
  }, !isMobile && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('toggle filter', 'masteriyo'),
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  })), /*#__PURE__*/external_React_default().createElement(common_DesktopHidden, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
    "in": isOpen
  }, QuizAttemptFilterForm)), /*#__PURE__*/external_React_default().createElement(common_MobileHidden, null, QuizAttemptFilterForm));
};

/* harmony default export */ const components_QuizAttemptFilter = (QuizAttemptFilter);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz-attempts/components/QuizAttemptList.tsx











var QuizAttemptList = function QuizAttemptList(props) {
  var _data$user, _data$user2, _data$user3, _data$user4, _data$user5, _data$user6, _data$quiz, _data$course, _data$quiz2;

  var data = props.data;
  var quizAttemptsAPI = new api(constants_urls.quizesAttempts);
  var cancelRef = (0,external_React_.useRef)();
  var queryClient = (0,es.useQueryClient)();

  var _useDisclosure = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)(),
      onClose = _useDisclosure.onClose,
      onOpen = _useDisclosure.onOpen,
      isOpen = _useDisclosure.isOpen;

  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var deleteQuizAttempt = (0,es.useMutation)(function (id) {
    return quizAttemptsAPI["delete"](id);
  }, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries('quizAttemptsList');
      onClose();
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Quiz attempt deleted', 'masteriyo'),
        status: 'success',
        isClosable: true
      });
    },
    onError: function onError(error) {
      var _error$response, _error$response$data, _error$response2, _error$response2$data;

      onClose();
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Failed to delete quiz attempt', 'masteriyo'),
        description: error !== null && error !== void 0 && error.message ? error === null || error === void 0 ? void 0 : error.message : error !== null && error !== void 0 && (_error$response = error.response) !== null && _error$response !== void 0 && (_error$response$data = _error$response.data) !== null && _error$response$data !== void 0 && _error$response$data.message ? "".concat(error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) : null,
        isClosable: true,
        status: 'error'
      });
    }
  });

  var Result = function Result(earnedMarks, totalMarks) {
    if (isNaN(earnedMarks) || isNaN(totalMarks)) {
      return;
    }

    var total = earnedMarks / totalMarks * 100;
    return Math.round(total) + '%';
  };

  var onDeleteConfirm = function onDeleteConfirm() {
    deleteQuizAttempt.mutate(data === null || data === void 0 ? void 0 : data.id);
  };

  return /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "2"
  }, 'attempt_ended' === (data === null || data === void 0 ? void 0 : data.attempt_status) ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* Link */.rU,
    to: constants_routes.quiz_attempts.edit.replace(':attemptId', data === null || data === void 0 ? void 0 : data.id.toString()),
    fontWeight: "semibold",
    fontSize: "sm",
    _hover: {
      color: 'blue.500'
    }
  }, "#", data === null || data === void 0 ? void 0 : data.id, " ", data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : _data$user.first_name, " ", data === null || data === void 0 ? void 0 : (_data$user2 = data.user) === null || _data$user2 === void 0 ? void 0 : _data$user2.last_name) : /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontWeight: "semibold",
    fontSize: "sm"
  }, "#", data === null || data === void 0 ? void 0 : data.id, " ", data === null || data === void 0 ? void 0 : (_data$user3 = data.user) === null || _data$user3 === void 0 ? void 0 : _data$user3.first_name, " ", data === null || data === void 0 ? void 0 : (_data$user4 = data.user) === null || _data$user4 === void 0 ? void 0 : _data$user4.last_name), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, data === null || data === void 0 ? void 0 : (_data$user5 = data.user) === null || _data$user5 === void 0 ? void 0 : _data$user5.display_name, " (", data === null || data === void 0 ? void 0 : (_data$user6 = data.user) === null || _data$user6 === void 0 ? void 0 : _data$user6.email, ")"))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontWeight: "bold",
    color: "gray.600",
    fontSize: "sm"
  }, data === null || data === void 0 ? void 0 : (_data$quiz = data.quiz) === null || _data$quiz === void 0 ? void 0 : _data$quiz.name), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Course:', 'masteriyo'), " ", data === null || data === void 0 ? void 0 : (_data$course = data.course) === null || _data$course === void 0 ? void 0 : _data$course.name)), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Total Questions:', 'masteriyo'), " ", data === null || data === void 0 ? void 0 : data.total_questions), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Earned Points:', 'masteriyo'), " ", data === null || data === void 0 ? void 0 : data.earned_marks), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Total Points:', 'masteriyo'), " ", data === null || data === void 0 ? void 0 : data.total_marks))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, 'attempt_ended' !== (data === null || data === void 0 ? void 0 : data.attempt_status) ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Badge */.Ct, {
    colorScheme: "yellow"
  }, (0,external_wp_i18n_namespaceObject.__)('In progress', 'masteriyo')) : /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* VStack */.gC, {
    align: "flex-start"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "sm"
  }, Result(parseFloat(data === null || data === void 0 ? void 0 : data.earned_marks), parseFloat(data === null || data === void 0 ? void 0 : data.total_marks))), !isNaN(parseFloat(data === null || data === void 0 ? void 0 : data.earned_marks)) && (parseFloat(data === null || data === void 0 ? void 0 : data.earned_marks) < (data === null || data === void 0 ? void 0 : (_data$quiz2 = data.quiz) === null || _data$quiz2 === void 0 ? void 0 : _data$quiz2.pass_mark) ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Badge */.Ct, {
    colorScheme: "red"
  }, (0,external_wp_i18n_namespaceObject.__)('Fail', 'masteriyo')) : /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Badge */.Ct, {
    colorScheme: "green"
  }, (0,external_wp_i18n_namespaceObject.__)('Pass', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, 'attempt_ended' === (data === null || data === void 0 ? void 0 : data.attempt_status) ? /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.quiz_attempts.edit.replace(':attemptId', data === null || data === void 0 ? void 0 : data.id.toString())
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "blue",
    size: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('View', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
    placement: "bottom-end"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
    as: chakra_ui_button_esm/* IconButton */.hU,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    size: "xs"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: onOpen,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null),
    _hover: {
      color: 'red.500'
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))) : null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
    isOpen: isOpen,
    onClose: onClose,
    isCentered: true,
    leastDestructiveRef: cancelRef
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.__)('Deleting Quiz Attempt', 'masteriyo'), ' ', data !== null && data !== void 0 && data.id ? "#".concat(data.id) : ''), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, (0,external_wp_i18n_namespaceObject.__)("Are you sure? You can't restore after deleting.", 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    onClick: onClose,
    variant: "outline",
    ref: cancelRef,
    isDisabled: deleteQuizAttempt.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "red",
    isLoading: deleteQuizAttempt.isLoading,
    onClick: onDeleteConfirm
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo')))))))));
};

/* harmony default export */ const components_QuizAttemptList = (QuizAttemptList);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz-attempts/AllQuizAttempts.tsx




















var AllQuizAttempts = function AllQuizAttempts() {
  var _quizAttemptsQuery$da, _quizAttemptsQuery$da2, _quizAttemptsQuery$da3, _quizAttemptsQuery$da4, _quizAttemptsQuery$da5;

  var _useState = (0,external_React_.useState)({}),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      filterParams = _useState2[0],
      setFilterParams = _useState2[1];

  var quizAttemptsAPI = new api(constants_urls.quizesAttempts);
  var quizAttemptsQuery = (0,es.useQuery)(['quizAttemptsList', filterParams], function () {
    return quizAttemptsAPI.list(filterParams);
  });
  var location = (0,react_router/* useLocation */.TH)();
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(common_Header, {
    showLinks: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* NavLink */.OL,
    sx: navLinkStyles,
    _activeLink: navActiveStyles,
    isActive: function isActive() {
      return location.pathname.includes('/quiz-attempts');
    },
    to: constants_routes.quiz_attempts.list
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: index_esm/* BiTargetLock */.v8K
  }), (0,external_wp_i18n_namespaceObject.__)('Quiz Attempts', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl",
    marginTop: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    py: {
      base: 6,
      md: 12
    },
    shadow: "box",
    mx: "auto"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(components_QuizAttemptFilter, {
    setFilterParams: setFilterParams
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(dist/* Table */.iA, null, /*#__PURE__*/external_React_default().createElement(dist/* Thead */.hr, null, /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Student Info', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Quiz', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Quiz overview', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Result', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Actions', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(dist/* Tbody */.p3, null, (quizAttemptsQuery === null || quizAttemptsQuery === void 0 ? void 0 : quizAttemptsQuery.isLoading) && /*#__PURE__*/external_React_default().createElement(SkeletonQuizAttemptList, null), quizAttemptsQuery !== null && quizAttemptsQuery !== void 0 && quizAttemptsQuery.isSuccess && isEmpty(quizAttemptsQuery === null || quizAttemptsQuery === void 0 ? void 0 : (_quizAttemptsQuery$da = quizAttemptsQuery.data) === null || _quizAttemptsQuery$da === void 0 ? void 0 : _quizAttemptsQuery$da.data) ? /*#__PURE__*/external_React_default().createElement(common_EmptyInfo, {
    message: "No quiz attempts found."
  }) : quizAttemptsQuery === null || quizAttemptsQuery === void 0 ? void 0 : (_quizAttemptsQuery$da2 = quizAttemptsQuery.data) === null || _quizAttemptsQuery$da2 === void 0 ? void 0 : (_quizAttemptsQuery$da3 = _quizAttemptsQuery$da2.data) === null || _quizAttemptsQuery$da3 === void 0 ? void 0 : _quizAttemptsQuery$da3.map(function (quizAttempt) {
    return /*#__PURE__*/external_React_default().createElement(components_QuizAttemptList, {
      key: quizAttempt === null || quizAttempt === void 0 ? void 0 : quizAttempt.id,
      data: quizAttempt
    });
  })))))), quizAttemptsQuery.isSuccess && !isEmpty(quizAttemptsQuery === null || quizAttemptsQuery === void 0 ? void 0 : (_quizAttemptsQuery$da4 = quizAttemptsQuery.data) === null || _quizAttemptsQuery$da4 === void 0 ? void 0 : _quizAttemptsQuery$da4.data) && /*#__PURE__*/external_React_default().createElement(common_MasteriyoPagination, {
    metaData: quizAttemptsQuery === null || quizAttemptsQuery === void 0 ? void 0 : (_quizAttemptsQuery$da5 = quizAttemptsQuery.data) === null || _quizAttemptsQuery$da5 === void 0 ? void 0 : _quizAttemptsQuery$da5.meta,
    setFilterParams: setFilterParams,
    perPageText: "Quiz Attempts Per Page:"
  })));
};

/* harmony default export */ const quiz_attempts_AllQuizAttempts = (AllQuizAttempts);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz-attempts/components/NoQuestionAttemptNotice.tsx






var NoQuestionAttemptNotice = function NoQuestionAttemptNotice() {
  return /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "1",
    align: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0,
    color: "blue.400"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    as: "span",
    fontWeight: "medium",
    color: "gray.600",
    fontSize: "sm"
  }, (0,external_wp_i18n_namespaceObject.__)('No questions attempt found.', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(dist.Td, null), /*#__PURE__*/external_React_default().createElement(dist.Td, null), /*#__PURE__*/external_React_default().createElement(dist.Td, null));
};

/* harmony default export */ const components_NoQuestionAttemptNotice = (NoQuestionAttemptNotice);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz-attempts/components/QuizAttemptInfo.tsx






var QuizAttemptInfo = function QuizAttemptInfo(props) {
  var _quizAttemptData$user, _quizAttemptData$user2, _quizAttemptData$user3, _quizAttemptData$user4, _quizAttemptData$quiz, _quizAttemptData$quiz2;

  var quizAttemptData = props.quizAttemptData;
  /**
   * Convert minutes to hours and minutes.
   *
   * @param minutes Minutes.
   * @return string
   */

  var getHrsAndMins = function getHrsAndMins(minutes) {
    var hrs = Math.floor(minutes / 60);
    var mins = minutes % 60;
    return hrs + ' hrs ' + mins + ' mins';
  };
  /**
   * Get total percentage.
   *
   * @param earnedMarks Earned marks.
   * @param totalMarks Total marks.
   * @returns string
   */


  var Result = function Result(earnedMarks, totalMarks) {
    if (isNaN(earnedMarks) || isNaN(totalMarks)) {
      return;
    }

    var total = earnedMarks / totalMarks * 100;
    return Math.round(total) + '%';
  };
  /**
   *
   * Get total attempt time of quiz.
   *
   * @param attemptStarted Attempt started date and time.
   * @param attemptEnded Attempt ended date and time.
   * @returns string
   */


  var getTotalAttemptTime = function getTotalAttemptTime(attemptStarted, attemptEnded) {
    attemptStarted = new Date(attemptStarted);
    attemptEnded = new Date(attemptEnded);
    var seconds = Math.floor((attemptEnded - attemptStarted) / 1000);
    var hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * 60 * 60;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return hours + ' hrs ' + minutes + ' min ' + seconds + ' sec';
  };

  return /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontWeight: "semibold",
    fontSize: "sm"
  }, quizAttemptData === null || quizAttemptData === void 0 ? void 0 : (_quizAttemptData$user = quizAttemptData.user) === null || _quizAttemptData$user === void 0 ? void 0 : _quizAttemptData$user.first_name, ' ', quizAttemptData === null || quizAttemptData === void 0 ? void 0 : (_quizAttemptData$user2 = quizAttemptData.user) === null || _quizAttemptData$user2 === void 0 ? void 0 : _quizAttemptData$user2.last_name), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, quizAttemptData === null || quizAttemptData === void 0 ? void 0 : (_quizAttemptData$user3 = quizAttemptData.user) === null || _quizAttemptData$user3 === void 0 ? void 0 : _quizAttemptData$user3.display_name, " (", quizAttemptData === null || quizAttemptData === void 0 ? void 0 : (_quizAttemptData$user4 = quizAttemptData.user) === null || _quizAttemptData$user4 === void 0 ? void 0 : _quizAttemptData$user4.email, ")"))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs",
    fontWeight: "bold"
  }, getLocalTime(quizAttemptData === null || quizAttemptData === void 0 ? void 0 : quizAttemptData.attempt_started_at).toLocaleString()), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Total Attempts:', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs",
    fontWeight: "bold"
  }, quizAttemptData === null || quizAttemptData === void 0 ? void 0 : quizAttemptData.total_attempts)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Quiz Time:', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs",
    fontWeight: "bold"
  }, getHrsAndMins(quizAttemptData === null || quizAttemptData === void 0 ? void 0 : (_quizAttemptData$quiz = quizAttemptData.quiz) === null || _quizAttemptData$quiz === void 0 ? void 0 : _quizAttemptData$quiz.duration))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Attempt Time:', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs",
    fontWeight: "bold"
  }, getTotalAttemptTime(quizAttemptData === null || quizAttemptData === void 0 ? void 0 : quizAttemptData.attempt_started_at, quizAttemptData === null || quizAttemptData === void 0 ? void 0 : quizAttemptData.attempt_ended_at))))), /*#__PURE__*/external_React_default().createElement(dist.Td, {
    colSpan: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, null, !isNaN(parseFloat(quizAttemptData === null || quizAttemptData === void 0 ? void 0 : quizAttemptData.earned_marks)) && (parseFloat(quizAttemptData === null || quizAttemptData === void 0 ? void 0 : quizAttemptData.earned_marks) < (quizAttemptData === null || quizAttemptData === void 0 ? void 0 : (_quizAttemptData$quiz2 = quizAttemptData.quiz) === null || _quizAttemptData$quiz2 === void 0 ? void 0 : _quizAttemptData$quiz2.pass_mark) ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Badge */.Ct, {
    colorScheme: "red"
  }, (0,external_wp_i18n_namespaceObject.__)('Fail', 'masteriyo')) : /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Badge */.Ct, {
    colorScheme: "green"
  }, (0,external_wp_i18n_namespaceObject.__)('Pass', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs",
    fontWeight: "bold"
  }, Result(parseFloat(quizAttemptData === null || quizAttemptData === void 0 ? void 0 : quizAttemptData.earned_marks), parseFloat(quizAttemptData === null || quizAttemptData === void 0 ? void 0 : quizAttemptData.total_marks)))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Earned Points:', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs",
    fontWeight: "bold"
  }, quizAttemptData === null || quizAttemptData === void 0 ? void 0 : quizAttemptData.earned_marks, " / ", quizAttemptData === null || quizAttemptData === void 0 ? void 0 : quizAttemptData.total_marks)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Correct Answers:', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs",
    fontWeight: "bold"
  }, quizAttemptData === null || quizAttemptData === void 0 ? void 0 : quizAttemptData.total_correct_answers, " /", ' ', quizAttemptData === null || quizAttemptData === void 0 ? void 0 : quizAttemptData.total_questions)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Attempt Questions:', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs",
    fontWeight: "bold"
  }, quizAttemptData === null || quizAttemptData === void 0 ? void 0 : quizAttemptData.total_answered_questions, " /", ' ', quizAttemptData === null || quizAttemptData === void 0 ? void 0 : quizAttemptData.total_questions)))));
};

/* harmony default export */ const components_QuizAttemptInfo = (QuizAttemptInfo);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz-attempts/components/QuizInfo.tsx




var QuizInfo = function QuizInfo(props) {
  var _quizAttemptData$quiz, _quizAttemptData$cour;

  var quizAttemptData = props.quizAttemptData;
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "md",
    fontWeight: "bold"
  }, (_quizAttemptData$quiz = quizAttemptData.quiz) === null || _quizAttemptData$quiz === void 0 ? void 0 : _quizAttemptData$quiz.name), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs",
    fontWeight: "medium"
  }, (0,external_wp_i18n_namespaceObject.__)('Course: ', 'masteriyo'), (_quizAttemptData$cour = quizAttemptData.course) === null || _quizAttemptData$cour === void 0 ? void 0 : _quizAttemptData$cour.name));
};

/* harmony default export */ const components_QuizInfo = (QuizInfo);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz-attempts/components/QuizOverview.tsx






var QuizOverview = function QuizOverview(props) {
  var answersData = props.answersData;

  var getQuestionTypeIcon = function getQuestionTypeIcon(iconType) {
    return iconType === IconType.TrueFalse ? /*#__PURE__*/external_React_default().createElement(true_false_tooltip_icon, null) : iconType === IconType.SingleChoice ? /*#__PURE__*/external_React_default().createElement(single_choice_tooltip_icon, null) : iconType === IconType.MultipleChoice ? /*#__PURE__*/external_React_default().createElement(multi_choice_tooltip_icon, null) : null;
  };

  return /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: answersData === null || answersData === void 0 ? void 0 : answersData.type
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, null, getQuestionTypeIcon(answersData === null || answersData === void 0 ? void 0 : answersData.type))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, answersData === null || answersData === void 0 ? void 0 : answersData.question))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, "Correct:"), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, 'multiple-choice' === (answersData === null || answersData === void 0 ? void 0 : answersData.type) ? answersData === null || answersData === void 0 ? void 0 : answersData.correct_answer.join(', ') : answersData === null || answersData === void 0 ? void 0 : answersData.correct_answer)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, "Given:"), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs"
  }, 'multiple-choice' === (answersData === null || answersData === void 0 ? void 0 : answersData.type) ? answersData === null || answersData === void 0 ? void 0 : answersData.answered.join(', ') : answersData === null || answersData === void 0 ? void 0 : answersData.answered)))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Badge */.Ct, {
    w: "fit-content",
    colorScheme: answersData !== null && answersData !== void 0 && answersData.correct ? 'green' : 'red'
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "xs"
  }, answersData !== null && answersData !== void 0 && answersData.correct ? 'Correct' : 'Incorrect')))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "gray.600",
    fontSize: "xs",
    fontWeight: "bold"
  },
  /**
   * #TODO Need to enhance later.
   */
  answersData !== null && answersData !== void 0 && answersData.correct ? answersData === null || answersData === void 0 ? void 0 : answersData.points : 0)));
};

/* harmony default export */ const components_QuizOverview = (QuizOverview);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz-attempts/ReviewQuizAttempt.tsx




















var ReviewQuizAttempt = function ReviewQuizAttempt() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      attemptId = _useParams.attemptId;

  var history = (0,react_router/* useHistory */.k6)();
  var quizAttemptsAPI = new api(constants_urls.quizesAttempts);
  var quizAttemptQuery = (0,es.useQuery)(["quizAttempt".concat(attemptId), attemptId], function () {
    return quizAttemptsAPI.get(attemptId);
  }, {
    onError: function onError() {
      history.push(constants_routes.notFound);
    }
  });

  if (quizAttemptQuery.isSuccess) {
    var _quizAttemptQuery$dat, _quizAttemptQuery$dat2;

    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8",
      alignItems: "center"
    }, /*#__PURE__*/external_React_default().createElement(common_Header, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, {
      d: "flex"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
      mb: "0"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
      as: react_router_dom/* NavLink */.OL,
      sx: navLinkStyles,
      _activeLink: navActiveStyles,
      to: "#"
    }, (0,external_wp_i18n_namespaceObject.__)('Quiz Details', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
      maxW: "container.xl"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
      to: constants_routes.quiz_attempts.list
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      variant: "link",
      _hover: {
        color: 'blue.500'
      },
      leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        fontSize: "xl",
        as: index_esm/* BiChevronLeft */.gbs
      })
    }, (0,external_wp_i18n_namespaceObject.__)('Back', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(components_QuizInfo, {
      quizAttemptData: quizAttemptQuery === null || quizAttemptQuery === void 0 ? void 0 : quizAttemptQuery.data
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      bg: "white",
      py: {
        base: 6,
        md: 12
      },
      shadow: "box",
      mx: "auto"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(dist/* Table */.iA, null, /*#__PURE__*/external_React_default().createElement(dist/* Thead */.hr, null, /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Student Info', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Quiz Summary', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Result', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null))), /*#__PURE__*/external_React_default().createElement(dist/* Tbody */.p3, null, /*#__PURE__*/external_React_default().createElement(components_QuizAttemptInfo, {
      quizAttemptData: quizAttemptQuery === null || quizAttemptQuery === void 0 ? void 0 : quizAttemptQuery.data
    }))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
      fontSize: "md",
      fontWeight: "bold"
    }, (0,external_wp_i18n_namespaceObject.__)('Quiz Overview', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      bg: "white",
      py: {
        base: 6,
        md: 12
      },
      shadow: "box",
      mx: "auto"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(dist/* Table */.iA, null, /*#__PURE__*/external_React_default().createElement(dist/* Thead */.hr, null, /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Question', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Answer', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Result', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Points', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(dist/* Tbody */.p3, null, isEmpty(quizAttemptQuery === null || quizAttemptQuery === void 0 ? void 0 : (_quizAttemptQuery$dat = quizAttemptQuery.data) === null || _quizAttemptQuery$dat === void 0 ? void 0 : _quizAttemptQuery$dat.answers) ? /*#__PURE__*/external_React_default().createElement(components_NoQuestionAttemptNotice, null) : Object.keys(quizAttemptQuery === null || quizAttemptQuery === void 0 ? void 0 : (_quizAttemptQuery$dat2 = quizAttemptQuery.data) === null || _quizAttemptQuery$dat2 === void 0 ? void 0 : _quizAttemptQuery$dat2.answers).map(function (questionId) {
      var _quizAttemptQuery$dat3;

      return /*#__PURE__*/external_React_default().createElement(components_QuizOverview, {
        answersData: quizAttemptQuery === null || quizAttemptQuery === void 0 ? void 0 : (_quizAttemptQuery$dat3 = quizAttemptQuery.data) === null || _quizAttemptQuery$dat3 === void 0 ? void 0 : _quizAttemptQuery$dat3.answers[questionId],
        key: questionId
      });
    }))))))));
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const quiz_attempts_ReviewQuizAttempt = (ReviewQuizAttempt);
// EXTERNAL MODULE: ./node_modules/react-icons/fc/index.esm.js
var fc_index_esm = __webpack_require__(1872);
// EXTERNAL MODULE: ./node_modules/react-icons/ri/index.esm.js
var ri_index_esm = __webpack_require__(9352);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/reviews/components/ReviewFilter.tsx















var ReviewFilter = function ReviewFilter(_ref) {
  var _courseQueries$data, _courseQueries$data$d, _userQueries$data, _userQueries$data$dat;

  var filterParams = _ref.filterParams,
      setFilterParams = _ref.setFilterParams;

  var _useMediaQuery = (0,chakra_ui_media_query_esm/* useMediaQuery */.ac)('(min-width: 48em)'),
      _useMediaQuery2 = (0,slicedToArray/* default */.Z)(_useMediaQuery, 1),
      isMobile = _useMediaQuery2[0];

  var _useState = (0,external_React_.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var courseAPI = new api(constants_urls.courses);
  var userAPI = new api(constants_urls.users);
  var courseQueries = (0,es.useQuery)('courseList', function () {
    return courseAPI.list({
      order_by: 'name',
      order: 'asc',
      per_page: 5
    });
  });
  var userQueries = (0,es.useQuery)('userList', function () {
    return userAPI.list({
      order_by: 'name',
      order: 'asc',
      per_page: 5
    });
  });

  var _useForm = (0,dist_index_esm/* useForm */.cI)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      setValue = _useForm.setValue;

  var onSearchInput = (0,index_es/* useOnType */.H)({
    onTypeFinish: function onTypeFinish(val) {
      setFilterParams({
        parent: 0,
        user: filterParams.user,
        course: filterParams.course,
        search: val
      });
    }
  }, 800);

  var _onChange = function onChange(data) {
    setFilterParams(deepClean(deepMerge(data, {
      search: filterParams.search,
      parent: 0
    })));
  };

  (0,external_React_.useEffect)(function () {
    setIsOpen(isMobile);
  }, [isMobile]);
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    px: {
      base: 6,
      md: 12
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    justify: "end"
  }, !isMobile && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('toggle filter', 'masteriyo'),
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
    "in": isOpen
  }, /*#__PURE__*/external_React_default().createElement("form", {
    onChange: handleSubmit(_onChange)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: ['column', null, 'row'],
    spacing: "4",
    mt: [6, null, 0]
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Search reviews', 'masteriyo')
  }, onSearchInput, {
    height: "40px"
  })), /*#__PURE__*/external_React_default().createElement(dist_react_select_browser_esm/* default */.ZP, (0,esm_extends/* default */.Z)({}, register('course'), {
    onChange: function onChange(selectedOption) {
      setValue('course', selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value.toString());
      handleSubmit(_onChange)();
    },
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Filter by Course', 'masteriyo'),
    isClearable: true,
    styles: reactSelectStyles,
    cacheOptions: true,
    loadingMessage: function loadingMessage() {
      return (0,external_wp_i18n_namespaceObject.__)('Searching course...', 'masteriyo');
    },
    noOptionsMessage: function noOptionsMessage(_ref2) {
      var inputValue = _ref2.inputValue;
      return inputValue.length > 0 ? (0,external_wp_i18n_namespaceObject.__)('Course not found.', 'masteriyo') : courseQueries.isLoading ? (0,external_wp_i18n_namespaceObject.__)('Loading...', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Please enter 1 or more characters.', 'masteriyo');
    },
    defaultOptions: courseQueries.isSuccess ? courseQueries === null || courseQueries === void 0 ? void 0 : (_courseQueries$data = courseQueries.data) === null || _courseQueries$data === void 0 ? void 0 : (_courseQueries$data$d = _courseQueries$data.data) === null || _courseQueries$data$d === void 0 ? void 0 : _courseQueries$data$d.map(function (course) {
      return {
        value: course.id,
        label: "(#".concat(course.id, " - ").concat(course.name, ")")
      };
    }) : [],
    loadOptions: function loadOptions(searchValue, callback) {
      if (searchValue.length < 0) {
        return callback([]);
      }

      courseAPI.list({
        search: searchValue
      }).then(function (data) {
        var _data$data;

        callback(data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.map(function (course) {
          return {
            value: course.id,
            label: "#".concat(course.id, " ").concat(course.name)
          };
        }));
      });
    }
  })), /*#__PURE__*/external_React_default().createElement(dist_react_select_browser_esm/* default */.ZP, (0,esm_extends/* default */.Z)({}, register('user'), {
    onChange: function onChange(selectedOption) {
      setValue('user', selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value.toString());
      handleSubmit(_onChange)();
    },
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Filter by Author', 'masteriyo'),
    isClearable: true,
    styles: reactSelectStyles,
    cacheOptions: true,
    loadingMessage: function loadingMessage() {
      return (0,external_wp_i18n_namespaceObject.__)('Searching author...', 'masteriyo');
    },
    noOptionsMessage: function noOptionsMessage(_ref3) {
      var inputValue = _ref3.inputValue;
      return inputValue.length > 0 ? (0,external_wp_i18n_namespaceObject.__)('Author not found.', 'masteriyo') : userQueries.isLoading ? (0,external_wp_i18n_namespaceObject.__)('Loading...', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Please enter 1 or more characters.', 'masteriyo');
    },
    defaultOptions: userQueries.isSuccess ? userQueries === null || userQueries === void 0 ? void 0 : (_userQueries$data = userQueries.data) === null || _userQueries$data === void 0 ? void 0 : (_userQueries$data$dat = _userQueries$data.data) === null || _userQueries$data$dat === void 0 ? void 0 : _userQueries$data$dat.map(function (author) {
      return {
        value: author.id,
        label: "".concat(author.username, " (#").concat(author.id, " - ").concat(author.email, ")")
      };
    }) : [],
    loadOptions: function loadOptions(searchValue, callback) {
      if (searchValue.length < 0) {
        return callback([]);
      }

      userAPI.list({
        search: searchValue
      }).then(function (data) {
        var _data$data2;

        callback(data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : _data$data2.map(function (author) {
          return {
            value: author.id,
            label: "".concat(author.username, " (#").concat(author.id, " - ").concat(author.email, ")")
          };
        }));
      });
    }
  }))))));
};

/* harmony default export */ const components_ReviewFilter = (ReviewFilter);
// EXTERNAL MODULE: ./node_modules/react-icons/cg/index.esm.js
var cg_index_esm = __webpack_require__(471);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(1649);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/reviews/components/ReviewList.tsx













var ReviewList = function ReviewList(props) {
  var id = props.id,
      title = props.title,
      status = props.status,
      author = props.author,
      course = props.course,
      rating = props.rating,
      replies_count = props.replies_count,
      createdAt = props.createdAt,
      onDeletePress = props.onDeletePress,
      onTrashPress = props.onTrashPress,
      onRestorePress = props.onRestorePress,
      onSpamPress = props.onSpamPress,
      onUnSpamPress = props.onUnSpamPress;
  var history = (0,react_router/* useHistory */.k6)();
  var reviewStatus = status === ReviewStatus.approve ? {
    color: 'green',
    text: 'Approved'
  } : status === ReviewStatus.hold ? {
    color: 'orange',
    text: 'On Hold'
  } : status === ReviewStatus.spam ? {
    color: 'pink',
    text: 'Spam'
  } : {
    color: 'red',
    text: 'Trash'
  };

  var renderRatings = function renderRatings(rate) {
    var average = Number(rate);
    var stars = [];

    for (var i = 1; i <= 5; i++) {
      if (i <= average) {
        stars.push( /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
          key: i,
          as: io_index_esm/* IoMdStar */.hF5
        }));
      } else {
        stars.push( /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
          key: i,
          as: io_index_esm/* IoMdStarOutline */.PHX
        }));
      }
    }

    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "0",
      color: "orange.300"
    }, stars);
  };

  var editReviewLink = constants_routes.reviews.edit.replace(':reviewId', id.toString());
  return /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Td, null, status === ReviewStatus.trash ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontWeight: "semibold"
  }, title) : /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* Link */.rU,
    to: editReviewLink,
    fontWeight: "semibold",
    _hover: {
      color: 'blue.500'
    }
  }, title), renderRatings(rating)), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "xs",
    fontWeight: "medium",
    color: "gray.600"
  }, course)), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Badge */.Ct, {
    colorScheme: reviewStatus.color
  }, reviewStatus.text.toUpperCase())), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "2",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_avatar_esm/* Avatar */.qE, {
    size: "xs",
    src: author.avatar_url
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "xs",
    fontWeight: "medium",
    color: "gray.600"
  }, author === null || author === void 0 ? void 0 : author.display_name))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: {
      pathname: editReviewLink,
      search: '?page=replies'
    }
  }, replies_count)), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "2",
    alignItems: "center",
    color: "gray.600"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiCalendar */.R1q
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "xs",
    fontWeight: "medium"
  }, getLocalTime(createdAt).toLocaleString()))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, status === ReviewStatus.trash ? /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
    placement: "bottom-end"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
    as: chakra_ui_button_esm/* IconButton */.hU,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    size: "xs"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: onRestorePress,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiShow */.A7v, null),
    _: true
  }, (0,external_wp_i18n_namespaceObject.__)('Restore', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: onDeletePress,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null)
  }, (0,external_wp_i18n_namespaceObject.__)('Delete Permanently', 'masteriyo')))) : /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.reviews.edit.replace(':reviewId', id.toString())
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    leftIcon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiEdit */.Hlf, null),
    colorScheme: "blue",
    size: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Edit', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
    placement: "bottom-end"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
    as: chakra_ui_button_esm/* IconButton */.hU,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    size: "xs"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: function onClick() {
      return history.push({
        pathname: editReviewLink,
        search: '?page=replies'
      });
    },
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDetail */.ZbI, null)
  }, (0,external_wp_i18n_namespaceObject.__)('View Replies', 'masteriyo')), status !== ReviewStatus.spam ? /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: onSpamPress,
    icon: /*#__PURE__*/external_React_default().createElement(ri_index_esm/* RiSpam2Fill */.gf6, null)
  }, (0,external_wp_i18n_namespaceObject.__)('Mark Spam', 'masteriyo')) : /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: onUnSpamPress,
    icon: /*#__PURE__*/external_React_default().createElement(cg_index_esm/* CgUnblock */.mqM, null)
  }, (0,external_wp_i18n_namespaceObject.__)('Mark Unspam', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: onTrashPress,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null),
    _hover: {
      color: 'red.500'
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Trash', 'masteriyo')))))));
};

/* harmony default export */ const components_ReviewList = (ReviewList);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/reviews/AllReviews.tsx





















var statusList = [{
  status: 'all',
  icon: index_esm/* BiBook */.lOc,
  name: (0,external_wp_i18n_namespaceObject.__)('All Reviews', 'masteriyo')
}, {
  status: ReviewStatus.approve,
  icon: fc_index_esm/* FcApproval */.pl2,
  name: (0,external_wp_i18n_namespaceObject.__)('Approved', 'masteriyo')
}, {
  status: ReviewStatus.hold,
  icon: fa_index_esm/* FaHandHoldingWater */.GnP,
  name: (0,external_wp_i18n_namespaceObject.__)('On Hold', 'masteriyo')
}, {
  status: ReviewStatus.spam,
  icon: ri_index_esm/* RiSpam2Fill */.gf6,
  name: (0,external_wp_i18n_namespaceObject.__)('Spam', 'masteriyo')
}, {
  status: ReviewStatus.trash,
  icon: index_esm/* BiTrash */.SW4,
  name: (0,external_wp_i18n_namespaceObject.__)('Trash', 'masteriyo')
}];

var AllReviews = function AllReviews() {
  var _reviewQuery$data, _reviewQuery$data2, _reviewQuery$data2$da, _reviewQuery$data3;

  var reviewsAPI = new api(constants_urls.reviews);
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();

  var _useState = (0,external_React_.useState)({
    parent: 0
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      filterParams = _useState2[0],
      setFilterParams = _useState2[1];

  var _useState3 = (0,external_React_.useState)(),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      deleteReviewId = _useState4[0],
      setDeleteReviewId = _useState4[1];

  var _useState5 = (0,external_React_.useState)('all'),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      reviewStatus = _useState6[0],
      setReviewStatus = _useState6[1];

  var _useState7 = (0,external_React_.useState)({
    all: undefined,
    approve: undefined,
    hold: undefined,
    spam: undefined,
    trash: undefined
  }),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      reviewStatusCount = _useState8[0],
      setReviewStatusCount = _useState8[1];

  var queryClient = (0,es.useQueryClient)();

  var _useDisclosure = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)(),
      onClose = _useDisclosure.onClose,
      onOpen = _useDisclosure.onOpen,
      isOpen = _useDisclosure.isOpen;

  var cancelRef = (0,external_React_.useRef)();
  var reviewQuery = (0,es.useQuery)(['reviewList', filterParams], function () {
    return reviewsAPI.list(filterParams);
  }, {
    onSuccess: function onSuccess(data) {
      var _data$meta, _data$meta$reviews_co, _data$meta2, _data$meta2$reviews_c, _data$meta3, _data$meta3$reviews_c, _data$meta4, _data$meta4$reviews_c, _data$meta5, _data$meta5$reviews_c;

      setReviewStatusCount({
        all: data === null || data === void 0 ? void 0 : (_data$meta = data.meta) === null || _data$meta === void 0 ? void 0 : (_data$meta$reviews_co = _data$meta.reviews_count) === null || _data$meta$reviews_co === void 0 ? void 0 : _data$meta$reviews_co.all,
        approve: data === null || data === void 0 ? void 0 : (_data$meta2 = data.meta) === null || _data$meta2 === void 0 ? void 0 : (_data$meta2$reviews_c = _data$meta2.reviews_count) === null || _data$meta2$reviews_c === void 0 ? void 0 : _data$meta2$reviews_c.approve,
        hold: data === null || data === void 0 ? void 0 : (_data$meta3 = data.meta) === null || _data$meta3 === void 0 ? void 0 : (_data$meta3$reviews_c = _data$meta3.reviews_count) === null || _data$meta3$reviews_c === void 0 ? void 0 : _data$meta3$reviews_c.hold,
        spam: data === null || data === void 0 ? void 0 : (_data$meta4 = data.meta) === null || _data$meta4 === void 0 ? void 0 : (_data$meta4$reviews_c = _data$meta4.reviews_count) === null || _data$meta4$reviews_c === void 0 ? void 0 : _data$meta4$reviews_c.spam,
        trash: data === null || data === void 0 ? void 0 : (_data$meta5 = data.meta) === null || _data$meta5 === void 0 ? void 0 : (_data$meta5$reviews_c = _data$meta5.reviews_count) === null || _data$meta5$reviews_c === void 0 ? void 0 : _data$meta5$reviews_c.trash
      });
    }
  });

  var _onDeletePress = function onDeletePress(reviewId) {
    onOpen();
    setDeleteReviewId(reviewId);
  };

  var deleteReviewMutation = (0,es.useMutation)(function (id) {
    return reviewsAPI["delete"](id, {
      force_delete: true,
      children: true
    });
  }, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries('reviewList');
      onClose();
    }
  });

  var onDeleteConfirm = function onDeleteConfirm() {
    deleteReviewId ? deleteReviewMutation.mutate(deleteReviewId) : null;
  };

  var trashReviewMutation = (0,es.useMutation)(function (id) {
    return reviewsAPI["delete"](id);
  }, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries('reviewList');
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Review Trashed', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
    }
  });

  var _onTrashPress = function onTrashPress(reviewId) {
    reviewId ? trashReviewMutation.mutate(reviewId) : null;
  };

  var onReviewStatusChange = function onReviewStatusChange(status) {
    setReviewStatus(status);
    setFilterParams(deepMerge(filterParams, {
      status: status
    }));
  };

  var updateReviewMutation = (0,es.useMutation)(function (data) {
    return reviewsAPI.update(data.id, data);
  }, {
    onSuccess: function onSuccess(responseData) {
      queryClient.invalidateQueries('reviewList');
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)("Review ".concat(responseData.status === ReviewStatus.spam ? 'Spammend' : 'Holded'), 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
    }
  });
  var restoreReviewMutation = (0,es.useMutation)(function (id) {
    return reviewsAPI.restore(id);
  }, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries('reviewList');
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)("Review Restored", 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
    }
  });

  var _onRestorePress = function onRestorePress(reviewId) {
    reviewId ? restoreReviewMutation.mutate(reviewId) : null;
  };

  var onReviewUpdate = function onReviewUpdate(data, status) {
    updateReviewMutation.mutate(deepClean(deepMerge(data, {
      status: status
    })));
  };

  var reviewStatusBtnStyles = {
    mr: '10',
    py: '6',
    d: 'flex',
    gap: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontWeight: 'medium',
    fontSize: ['xs', null, 'sm']
  };
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(common_Header, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, {
    d: "flex"
  }, statusList.map(function (button) {
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
      key: button.status,
      mb: "0"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      color: "gray.600",
      variant: "link",
      sx: reviewStatusBtnStyles,
      _active: navActiveStyles,
      isActive: button.status === reviewStatus,
      _hover: {
        color: 'blue.500'
      },
      onClick: function onClick() {
        return onReviewStatusChange(button.status);
      }
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
      as: button.icon
    }), button.name, reviewStatusCount[button.status] !== undefined ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Badge */.Ct, {
      color: "inherit"
    }, reviewStatusCount[button.status]) : /*#__PURE__*/external_React_default().createElement(chakra_ui_skeleton_esm/* SkeletonCircle */.s7, {
      size: "4",
      ml: "1",
      mb: "1"
    })));
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    py: {
      base: 6,
      md: 12
    },
    shadow: "box",
    mx: "auto"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "10"
  }, /*#__PURE__*/external_React_default().createElement(components_ReviewFilter, {
    setFilterParams: setFilterParams,
    filterParams: filterParams
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "10"
  }, /*#__PURE__*/external_React_default().createElement(dist/* Table */.iA, null, /*#__PURE__*/external_React_default().createElement(dist/* Thead */.hr, null, /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Title', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Course', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Status', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Author', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Replies', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Date', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Actions', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(dist/* Tbody */.p3, null, reviewQuery.isLoading && /*#__PURE__*/external_React_default().createElement(SkeletonReviewsList, null), reviewQuery.isSuccess && isEmpty(reviewQuery === null || reviewQuery === void 0 ? void 0 : (_reviewQuery$data = reviewQuery.data) === null || _reviewQuery$data === void 0 ? void 0 : _reviewQuery$data.data) ? /*#__PURE__*/external_React_default().createElement(common_EmptyInfo, {
    message: (0,external_wp_i18n_namespaceObject.__)('No reviewes found.', 'masteriyo')
  }) : reviewQuery === null || reviewQuery === void 0 ? void 0 : (_reviewQuery$data2 = reviewQuery.data) === null || _reviewQuery$data2 === void 0 ? void 0 : (_reviewQuery$data2$da = _reviewQuery$data2.data) === null || _reviewQuery$data2$da === void 0 ? void 0 : _reviewQuery$data2$da.map(function (review) {
    var _review$course;

    return /*#__PURE__*/external_React_default().createElement(components_ReviewList, {
      id: review.id,
      key: review.id,
      title: review.title,
      author: {
        id: review.author_id,
        display_name: review.author_name,
        avatar_url: review.author_avatar_url
      },
      replies_count: review.replies_count,
      course: review === null || review === void 0 ? void 0 : (_review$course = review.course) === null || _review$course === void 0 ? void 0 : _review$course.name,
      rating: review.rating,
      status: review.status,
      createdAt: review.date_created,
      onDeletePress: function onDeletePress() {
        return _onDeletePress(review.id);
      },
      onTrashPress: function onTrashPress() {
        return _onTrashPress(review.id);
      },
      onRestorePress: function onRestorePress() {
        return _onRestorePress(review.id);
      },
      onSpamPress: function onSpamPress() {
        return onReviewUpdate(review, ReviewStatus.spam);
      },
      onUnSpamPress: function onUnSpamPress() {
        return onReviewUpdate(review, ReviewStatus.hold);
      }
    });
  })))))), reviewQuery.isSuccess && !isEmpty(reviewQuery === null || reviewQuery === void 0 ? void 0 : reviewQuery.data) && /*#__PURE__*/external_React_default().createElement(common_MasteriyoPagination, {
    metaData: reviewQuery === null || reviewQuery === void 0 ? void 0 : (_reviewQuery$data3 = reviewQuery.data) === null || _reviewQuery$data3 === void 0 ? void 0 : _reviewQuery$data3.meta,
    setFilterParams: setFilterParams,
    perPageText: (0,external_wp_i18n_namespaceObject.__)('Reviews Per Page:', 'masteriyo'),
    extraFilterParams: {
      search: filterParams === null || filterParams === void 0 ? void 0 : filterParams.search,
      course: filterParams === null || filterParams === void 0 ? void 0 : filterParams.course,
      user: filterParams === null || filterParams === void 0 ? void 0 : filterParams.user,
      status: filterParams === null || filterParams === void 0 ? void 0 : filterParams.status,
      parent: 0
    }
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
    isOpen: isOpen,
    onClose: onClose,
    isCentered: true,
    leastDestructiveRef: cancelRef
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.__)('Deleting Review', 'masteriyo'), " ", name), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, (0,external_wp_i18n_namespaceObject.__)("Are you sure? All the replies related to this review will also be deleted and you can't restore.", 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    onClick: onClose,
    variant: "outline",
    ref: cancelRef
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "red",
    isLoading: deleteReviewMutation.isLoading,
    onClick: onDeleteConfirm
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))))));
};

/* harmony default export */ const reviews_AllReviews = (AllReviews);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/reviews/components/ReplyList.tsx




function ReplyList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ReplyList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ReplyList_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ReplyList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












var ReplyList = function ReplyList(props) {
  var _props$reply = props.reply,
      id = _props$reply.id,
      author_email = _props$reply.author_email,
      description = _props$reply.description,
      date_created = _props$reply.date_created;
  var cancelRef = external_React_default().useRef();

  var _useDisclosure = (0,chakra_ui_hooks_esm/* useDisclosure */.qY)(),
      onClose = _useDisclosure.onClose,
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen;

  var reviewAPI = new api(constants_urls.reviews);
  var queryClient = (0,es.useQueryClient)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();

  var _React$useState = external_React_default().useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _useForm = (0,dist_index_esm/* useForm */.cI)({
    defaultValues: {
      content: description
    }
  }),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.formState.errors;

  var deleteReviewReply = (0,es.useMutation)(function () {
    return reviewAPI["delete"](id, {
      force: true,
      children: true
    });
  }, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries('reviewList');
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Reply Deleted', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
    }
  });
  var updateReview = (0,es.useMutation)(function (data) {
    return reviewAPI.update(data.id, data);
  }, {
    onSuccess: function onSuccess() {
      setOpen(false);
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Review Reply updated', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
      queryClient.invalidateQueries("reviewList");
    },
    onError: function onError(error) {
      var _error$response, _error$response$data;

      toast({
        description: "".concat(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message),
        isClosable: true,
        status: 'error'
      });
    }
  });

  var onSubmit = function onSubmit(data) {
    var content = data.content;
    updateReview.mutate(deepClean(ReplyList_objectSpread(ReplyList_objectSpread({}, props.reply), {}, {
      content: content
    })));
  };

  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "3"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_avatar_esm/* Avatar */.qE, {
    size: "xs"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, author_email))), /*#__PURE__*/external_React_default().createElement(dist.Td, {
    width: "46%"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: description
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    width: 'fit-content',
    isTruncated: false,
    noOfLines: 1
  }, description))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, getLocalTime(date_created).toLocaleString()), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    leftIcon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiEdit */.Hlf, null),
    colorScheme: "blue",
    size: "xs",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Edit', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
    placement: "bottom-end"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
    as: chakra_ui_button_esm/* IconButton */.hU,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    size: "xs"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: function onClick() {
      return onOpen();
    },
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null),
    _hover: {
      color: 'red.500'
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo')))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
    isOpen: isOpen,
    onClose: onClose,
    isCentered: true,
    leastDestructiveRef: cancelRef
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.__)('Deleting Reply', 'masteriyo'), " ", name), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, (0,external_wp_i18n_namespaceObject.__)('Are you sure? You can’t restore after deleting.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    onClick: onClose,
    variant: "outline",
    ref: cancelRef
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "red",
    isLoading: deleteReviewReply.isLoading,
    onClick: function onClick() {
      return deleteReviewReply.mutate();
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo')))))))), /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Td, {
    colSpan: 4
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
    "in": open
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    textAlign: "left",
    direction: "column",
    spacing: "3"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    as: "h4",
    size: "md"
  }, (0,external_wp_i18n_namespaceObject.__)('Edit', 'masteriyo')), /*#__PURE__*/external_React_default().createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.content)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Description', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_textarea_esm/* Textarea */.g, (0,esm_extends/* default */.Z)({
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Your Content', 'masteriyo')
  }, register('content', {
    required: (0,external_wp_i18n_namespaceObject.__)('You must provide a content for the review.', 'masteriyo')
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, errors && errors.content && errors.content.message)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: 'row',
    mt: 4
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    type: "submit",
    w: "18%",
    colorScheme: "blue",
    isLoading: updateReview.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Update Reply', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    w: "18%",
    variant: "outline",
    onClick: function onClick() {
      return setOpen(false);
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')))))))));
};

/* harmony default export */ const components_ReplyList = (ReplyList);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/reviews/components/module/AllReplies.tsx














var AllReplies = function AllReplies(props) {
  var _data$pages$;

  var reviewId = props.reviewId;

  var _useLocation = (0,react_router/* useLocation */.TH)(),
      search = _useLocation.search;

  var _queryString$parse = query_string.parse(search),
      page = _queryString$parse.page;

  var reviewAPI = new api(constants_urls.reviews); // Scroll to replies if clicked reply count from reply field in review table

  (0,external_React_.useEffect)(function () {
    var _document$getElementB;

    if (page === 'replies') (_document$getElementB = document.getElementById("reply-table-".concat(reviewId))) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.scrollIntoView({
      behavior: 'smooth'
    });
  }, [page, reviewId]);

  var _useInfiniteQuery = (0,es.useInfiniteQuery)('reviewList', function (_ref) {
    var _ref$pageParam = _ref.pageParam,
        pageParam = _ref$pageParam === void 0 ? 1 : _ref$pageParam;
    return reviewAPI.list({
      parent: reviewId,
      per_page: 10,
      page: pageParam
    });
  }, {
    getNextPageParam: function getNextPageParam(_ref2) {
      var meta = _ref2.meta;
      if (meta.pages > meta.current_page) return meta.current_page + 1;
      return false;
    }
  }),
      data = _useInfiniteQuery.data,
      isLoading = _useInfiniteQuery.isLoading,
      isFetching = _useInfiniteQuery.isFetching,
      fetchNextPage = _useInfiniteQuery.fetchNextPage,
      isSuccess = _useInfiniteQuery.isSuccess,
      hasNextPage = _useInfiniteQuery.hasNextPage;

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl",
    marginTop: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    id: "reply-table-".concat(reviewId),
    d: "flex",
    flexDir: "column",
    gap: "6",
    bg: "white",
    py: "8",
    shadow: "box",
    mt: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    as: "h4",
    size: "md",
    ml: "3rem"
  }, (0,external_wp_i18n_namespaceObject.__)('Replies', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist/* Table */.iA, null, /*#__PURE__*/external_React_default().createElement(dist/* Thead */.hr, null, /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Author', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Content', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Date', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Action', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(dist/* Tbody */.p3, null, isLoading && /*#__PURE__*/external_React_default().createElement(SkeletonReplyList, null), isSuccess && isEmpty(data === null || data === void 0 ? void 0 : (_data$pages$ = data.pages[0]) === null || _data$pages$ === void 0 ? void 0 : _data$pages$.data) ? /*#__PURE__*/external_React_default().createElement(common_EmptyInfo, {
    message: (0,external_wp_i18n_namespaceObject.__)('No replies found.', 'masteriyo')
  }) : data === null || data === void 0 ? void 0 : data.pages.map(function (page) {
    return page === null || page === void 0 ? void 0 : page.data.map(function (reply) {
      return /*#__PURE__*/external_React_default().createElement(components_ReplyList, {
        key: reply.id,
        reply: reply
      });
    });
  }))), hasNextPage ? /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    spinner: /*#__PURE__*/external_React_default().createElement(chakra_ui_spinner_esm/* Spinner */.$, null),
    spinnerPlacement: "end",
    isLoading: isFetching,
    w: "20%",
    m: "auto",
    onClick: function onClick() {
      return fetchNextPage();
    },
    variant: "outline"
  }, "Load More") : null));
};

/* harmony default export */ const module_AllReplies = (AllReplies);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/reviews/components/Content.tsx






var Content_Content = function Content() {
  var _errors$content;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      errors = _useFormContext.formState.errors;

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.title)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Review Content', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_textarea_esm/* Textarea */.g, (0,esm_extends/* default */.Z)({
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Your Content', 'masteriyo')
  }, register('content', {
    required: (0,external_wp_i18n_namespaceObject.__)('You must provide a content for the review.', 'masteriyo')
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.content) && (errors === null || errors === void 0 ? void 0 : (_errors$content = errors.content) === null || _errors$content === void 0 ? void 0 : _errors$content.message)));
};

/* harmony default export */ const reviews_components_Content = (Content_Content);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/reviews/components/Courses.tsx












var Courses = function Courses(props) {
  var _courseQuery$data, _courseQuery$data$dat, _errors$course_id;

  var defaultValue = props.defaultValue;
  var coursesAPI = new api(constants_urls.courses);

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      errors = _useFormContext.formState.errors,
      setValue = _useFormContext.setValue;

  var courseQuery = (0,es.useQuery)('courseList', function () {
    return coursesAPI.list({
      order_by: 'name',
      order: 'asc',
      per_page: 5
    });
  });
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.course_id),
    py: "3"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Course', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist_react_select_browser_esm/* default */.ZP, (0,esm_extends/* default */.Z)({}, register('course_id', {
    required: (0,external_wp_i18n_namespaceObject.__)('Course must be selected', 'masteriyo')
  }), {
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Select Course', 'masteriyo'),
    defaultValue: defaultValue,
    isClearable: true,
    styles: reactSelectStyles,
    cacheOptions: true,
    loadingMessage: function loadingMessage() {
      return (0,external_wp_i18n_namespaceObject.__)('Searching course...', 'masteriyo');
    },
    noOptionsMessage: function noOptionsMessage(_ref) {
      var inputValue = _ref.inputValue;
      return inputValue.length > 0 ? (0,external_wp_i18n_namespaceObject.__)('Course not found.', 'masteriyo') : courseQuery.isLoading ? (0,external_wp_i18n_namespaceObject.__)('Loading...', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Please enter 1 or more characters.', 'masteriyo');
    },
    onChange: function onChange(selectedOption) {
      setValue('course_id', selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value.toString());
    },
    defaultOptions: courseQuery.isSuccess ? courseQuery === null || courseQuery === void 0 ? void 0 : (_courseQuery$data = courseQuery.data) === null || _courseQuery$data === void 0 ? void 0 : (_courseQuery$data$dat = _courseQuery$data.data) === null || _courseQuery$data$dat === void 0 ? void 0 : _courseQuery$data$dat.map(function (course) {
      return {
        value: course.id,
        label: "".concat(course.name, " (#").concat(course.id, " - ").concat(course.name, ")")
      };
    }) : [],
    loadOptions: function loadOptions(searchValue, callback) {
      if (isEmpty(searchValue)) {
        return callback([]);
      }

      coursesAPI.list({
        search: searchValue
      }).then(function (data) {
        var _data$data;

        callback(data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.map(function (course) {
          return {
            value: course.id,
            label: "#".concat(course.id, " ").concat(course.name)
          };
        }));
      });
    }
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.course_id) && (errors === null || errors === void 0 ? void 0 : (_errors$course_id = errors.course_id) === null || _errors$course_id === void 0 ? void 0 : _errors$course_id.message)));
};

Courses.defaultProps = {
  defaultValue: null
};
/* harmony default export */ const components_Courses = (Courses);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/RatingButton.tsx




var RatingButton = function RatingButton(_ref) {
  var onClick = _ref.onClick,
      fill = _ref.fill;
  return fill ? /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: io_index_esm/* IoMdStar */.hF5,
    w: 8,
    h: 8,
    onClick: onClick
  }) : /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: io_index_esm/* IoMdStarOutline */.PHX,
    w: 8,
    h: 8,
    onClick: onClick
  });
};

/* harmony default export */ const common_RatingButton = (RatingButton);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/reviews/components/Rating.tsx







var Rating = function Rating() {
  var _errors$rating;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      errors = _useFormContext.formState.errors,
      setValue = _useFormContext.setValue,
      watch = _useFormContext.watch;

  var rating = watch('rating');
  var buttons = [];

  var _onClick = function onClick(idx) {
    if (!isNaN(idx)) {
      // allow user to click first icon and set rating to zero if rating is already 1
      if (rating === 1 && idx === 1) {
        setValue('rating', 0);
      } else {
        setValue('rating', idx);
      }
    }
  };

  var _loop = function _loop(i) {
    buttons.push( /*#__PURE__*/external_React_default().createElement(common_RatingButton, {
      key: i,
      onClick: function onClick() {
        return _onClick(i);
      },
      fill: i <= rating
    }));
  };

  for (var i = 1; i <= 5; i++) {
    _loop(i);
  }

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.title)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Review Rating', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "3",
    align: "center",
    justify: "space-between"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "0",
    color: "orange.300",
    cursor: 'pointer'
  }, /*#__PURE__*/external_React_default().createElement("input", (0,esm_extends/* default */.Z)({
    type: "hidden"
  }, register('rating'))), buttons)), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.rating) && (errors === null || errors === void 0 ? void 0 : (_errors$rating = errors.rating) === null || _errors$rating === void 0 ? void 0 : _errors$rating.message)));
};

/* harmony default export */ const components_Rating = (Rating);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/reviews/components/Status.tsx




var reviewStatusList = [{
  label: (0,external_wp_i18n_namespaceObject.__)('Approve', 'masteriyo'),
  value: 'approve'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('On Hold', 'masteriyo'),
  value: 'hold'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Spam', 'masteriyo'),
  value: 'spam'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Trash', 'masteriyo'),
  value: 'trash'
}];

var Status = function Status() {
  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      errors = _useFormContext.formState.errors;

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.status),
    py: "3"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Status', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, register('status'), reviewStatusList.map(function (option) {
    return /*#__PURE__*/external_React_default().createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  })));
};

/* harmony default export */ const components_Status = (Status);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/reviews/components/Title.tsx






var Title = function Title() {
  var _errors$title;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      errors = _useFormContext.formState.errors;

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.title)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Review Title', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Your Review Title', 'masteriyo')
  }, register('title', {
    required: (0,external_wp_i18n_namespaceObject.__)('You must provide a title for the review.', 'masteriyo')
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.title) && (errors === null || errors === void 0 ? void 0 : (_errors$title = errors.title) === null || _errors$title === void 0 ? void 0 : _errors$title.message)));
};

/* harmony default export */ const components_Title = (Title);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/reviews/components/template/ReviewForm.tsx



















var ReviewForm = function ReviewForm(props) {
  var _reviewQueryData$cour;

  var editMode = props.editMode,
      reviewQueryData = props.reviewQueryData;

  var _useParams = (0,react_router/* useParams */.UO)(),
      reviewId = _useParams.reviewId;

  var history = (0,react_router/* useHistory */.k6)();
  var queryClient = (0,es.useQueryClient)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var methods = (0,dist_index_esm/* useForm */.cI)({
    defaultValues: {
      title: (reviewQueryData === null || reviewQueryData === void 0 ? void 0 : reviewQueryData.title) || '',
      content: (reviewQueryData === null || reviewQueryData === void 0 ? void 0 : reviewQueryData.description) || '',
      rating: (reviewQueryData === null || reviewQueryData === void 0 ? void 0 : reviewQueryData.rating) || 0,
      course_id: reviewQueryData === null || reviewQueryData === void 0 ? void 0 : (_reviewQueryData$cour = reviewQueryData.course) === null || _reviewQueryData$cour === void 0 ? void 0 : _reviewQueryData$cour.id,
      status: (reviewQueryData === null || reviewQueryData === void 0 ? void 0 : reviewQueryData.status) || 'approve'
    }
  });
  var handleSubmit = methods.handleSubmit;
  var reviewAPI = new api(constants_urls.reviews);
  var addReviewMutation = (0,es.useMutation)(function (data) {
    return reviewAPI.store(data);
  });
  var updateReviewMutation = (0,es.useMutation)(function (data) {
    return reviewAPI.update(reviewId, data);
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Review updated', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
      queryClient.invalidateQueries("review".concat(reviewId));
    },
    onError: function onError(error) {
      var _error$response, _error$response$data;

      toast({
        description: "".concat(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message),
        isClosable: true,
        status: 'error'
      });
    }
  });

  var onSubmit = function onSubmit(data) {
    if (editMode) {
      updateReviewMutation.mutate(deepClean(data));
    } else {
      addReviewMutation.mutate(deepClean(data), {
        onSuccess: function onSuccess(data) {
          history.push({
            pathname: constants_routes.reviews.edit.replace(':reviewId', data.id.toString())
          });
        }
      });
    }
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(common_Header, {
    showLinks: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* NavLink */.OL,
    sx: navLinkStyles,
    _activeLink: navActiveStyles,
    to: constants_routes.reviews.list
  }, (0,external_wp_i18n_namespaceObject.__)("".concat(editMode ? 'Update' : 'Create', " Review"), 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl",
    marginTop: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.reviews.list
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "link",
    _hover: {
      color: 'blue.500'
    },
    leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      fontSize: "xl",
      as: index_esm/* BiChevronLeft */.gbs
    })
  }, (0,external_wp_i18n_namespaceObject.__)('Back to Reviews', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, methods, /*#__PURE__*/external_React_default().createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    flex: "1",
    bg: "white",
    p: "10",
    shadow: "box",
    d: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(components_Title, null), /*#__PURE__*/external_React_default().createElement(reviews_components_Content, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "12"
  }, /*#__PURE__*/external_React_default().createElement(components_Courses, {
    defaultValue: editMode && reviewQueryData ? {
      label: reviewQueryData.course.name,
      value: reviewQueryData.course.id
    } : null
  }), /*#__PURE__*/external_React_default().createElement(components_Status, null)), /*#__PURE__*/external_React_default().createElement(components_Rating, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    py: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "blue",
    type: "submit",
    isLoading: addReviewMutation.isLoading || updateReviewMutation.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)("".concat(editMode ? 'Update' : 'Create', " Review"), 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "outline",
    onClick: function onClick() {
      return history.push(constants_routes.reviews.list);
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo'))))))))))));
};

/* harmony default export */ const template_ReviewForm = (ReviewForm);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/reviews/EditReview.tsx










var EditReview = function EditReview() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      reviewId = _useParams.reviewId;

  var history = (0,react_router/* useHistory */.k6)();
  var reviewAPI = new api(constants_urls.reviews);
  var reviewQuery = (0,es.useQuery)(["review".concat(reviewId), reviewId], function () {
    return reviewAPI.get(reviewId);
  }, {
    onError: function onError() {
      history.push(constants_routes.notFound);
    }
  });

  if (reviewQuery.isSuccess) {
    return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(template_ReviewForm, {
      editMode: true,
      reviewQueryData: reviewQuery.data
    }), /*#__PURE__*/external_React_default().createElement(module_AllReplies, {
      reviewId: reviewId
    }));
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const reviews_EditReview = (EditReview);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js
var chakra_ui_alert_esm = __webpack_require__(6886);
;// CONCATENATED MODULE: ./assets/js/back-end/utils/pages.ts








var PagesAPI = /*#__PURE__*/function () {
  function PagesAPI() {
    (0,classCallCheck/* default */.Z)(this, PagesAPI);

    this.uri = "".concat(constants_urls.wpPages);
  }

  (0,createClass/* default */.Z)(PagesAPI, [{
    key: "list",
    value: function () {
      var _list = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee() {
        var query,
            _args = arguments;
        return external_regeneratorRuntime_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _args.length > 0 && _args[0] !== undefined ? _args[0] : {
                  per_page: -1
                };
                return _context.abrupt("return", http({
                  path: "".concat(this.uri, "?").concat(formatParams(query)),
                  method: 'get'
                }).then(function (res) {
                  return res;
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function list() {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }]);

  return PagesAPI;
}();

/* harmony default export */ const pages = (PagesAPI);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/settings/components/AdvancedSettings.tsx











var AdvancedSettings = function AdvancedSettings(props) {
  var _advanceData$permalin, _advanceData$permalin2, _advanceData$pages, _advanceData$pages2, _advanceData$pages3, _advanceData$pages4, _advanceData$pages5, _advanceData$permalin3, _advanceData$permalin4, _advanceData$account, _advanceData$account2, _advanceData$account3, _advanceData$account4, _advanceData$account5, _advanceData$account6, _advanceData$account7, _advanceData$checkout, _advanceData$checkout2, _advanceData$checkout3, _advanceData$checkout4, _advanceData$checkout5;

  var advanceData = props.advanceData;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register;

  var pageAPI = new pages();
  var pagesQuery = (0,es.useQuery)('pages', function () {
    return pageAPI.list();
  });
  var watchPermalinkData = (0,dist_index_esm/* useWatch */.qo)({
    name: 'advance.permalinks',
    defaultValue: {
      category_base: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$permalin = advanceData.permalinks) === null || _advanceData$permalin === void 0 ? void 0 : _advanceData$permalin.category_base,
      difficulty_base: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$permalin2 = advanceData.permalinks) === null || _advanceData$permalin2 === void 0 ? void 0 : _advanceData$permalin2.difficulty_base
    }
  });

  var renderPagesOption = function renderPagesOption() {
    try {
      var _pagesQuery$data;

      return pagesQuery === null || pagesQuery === void 0 ? void 0 : (_pagesQuery$data = pagesQuery.data) === null || _pagesQuery$data === void 0 ? void 0 : _pagesQuery$data.map(function (page) {
        return /*#__PURE__*/external_React_default().createElement("option", {
          value: page.id,
          key: page.id
        }, page.title.rendered);
      });
    } catch (error) {
      return;
    }
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, {
    orientation: "vertical"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
    sx: tabListStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Pages Setup', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Permalinks', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Account Endpoints', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Checkout Endpoints', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Debug', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, {
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, pagesQuery.isLoading ? /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
    h: "20"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_spinner_esm/* Spinner */.$, null)) : /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Courses Page', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Select a page to be set as courses page. This page will show all available courses.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Select a Page', 'masteriyo')
  }, register('advance.pages.courses_page_id'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$pages = advanceData.pages) === null || _advanceData$pages === void 0 ? void 0 : _advanceData$pages.courses_page_id
  }), renderPagesOption())), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Learn Page', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Select a page to be set as learning page. This page runs the distraction free course learning page for any course.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Select a Page', 'masteriyo')
  }, register('advance.pages.learn_page_id'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$pages2 = advanceData.pages) === null || _advanceData$pages2 === void 0 ? void 0 : _advanceData$pages2.learn_page_id
  }), renderPagesOption())), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Account Page', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Select a page to be set as account page. This page shows the account of both student or instructor. The page should contain shortcode [masteriyo_account].', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({}, register('advance.pages.account_page_id'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$pages3 = advanceData.pages) === null || _advanceData$pages3 === void 0 ? void 0 : _advanceData$pages3.account_page_id,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Select a Page', 'masteriyo')
  }), renderPagesOption())), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Checkout Page', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Select a page to be set as checkout page. This page shows the checkout page while purchasing any course. The page should contain shortcode [masteriyo_checkout].', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Select a Page', 'masteriyo'),
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$pages4 = advanceData.pages) === null || _advanceData$pages4 === void 0 ? void 0 : _advanceData$pages4.checkout_page_id
  }, register('advance.pages.checkout_page_id')), renderPagesOption())), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Instructor Registration Page', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Select a page to be set as instructor registration page. This page shows the signup form to apply as an instructor. The page should contain shortcode [masteriyo_instructor_registration].', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Select a Page', 'masteriyo'),
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$pages5 = advanceData.pages) === null || _advanceData$pages5 === void 0 ? void 0 : _advanceData$pages5.instructor_registration_page_id
  }, register('advance.pages.instructor_registration_page_id')), renderPagesOption())))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Course Category Base', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text",
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$permalin3 = advanceData.permalinks) === null || _advanceData$permalin3 === void 0 ? void 0 : _advanceData$permalin3.category_base
  }, register('advance.permalinks.category_base'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Code */.EK, null, global.home_url, "/", watchPermalinkData.category_base, "/", (0,external_wp_i18n_namespaceObject.__)('uncategorized', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Course Difficulty Base', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text"
  }, register('advance.permalinks.difficulty_base'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$permalin4 = advanceData.permalinks) === null || _advanceData$permalin4 === void 0 ? void 0 : _advanceData$permalin4.difficulty_base
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Code */.EK, null, global.home_url, "/", watchPermalinkData.difficulty_base, (0,external_wp_i18n_namespaceObject.__)('/uncategorized', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Single Course Permalink', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "advance.permalinks.single_course_permalink",
    render: function render(_ref) {
      var _advanceData$permalin5;

      var field = _ref.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* RadioGroup */.Ee, (0,esm_extends/* default */.Z)({}, field, {
        defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$permalin5 = advanceData.permalinks) === null || _advanceData$permalin5 === void 0 ? void 0 : _advanceData$permalin5.single_course_permalink
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
        spacing: 3,
        direction: "column"
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
        value: "course",
        w: "100%"
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
        fontSize: "sm",
        w: "150px"
      }, (0,external_wp_i18n_namespaceObject.__)('Default', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Code */.EK, {
        flex: "1"
      }, global.home_url, (0,external_wp_i18n_namespaceObject.__)('?course=sample-course', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
        value: global.pageSlugs.courses
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
        fontSize: "sm",
        w: "150px"
      }, (0,external_wp_i18n_namespaceObject.__)('Courses page base', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Code */.EK, {
        flex: "1"
      }, global.home_url, "/", global.pageSlugs.courses, (0,external_wp_i18n_namespaceObject.__)('/sample-course', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
        value: global.pageSlugs.courses + '/%course_cat%/'
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
        fontSize: "sm",
        w: "150px"
      }, (0,external_wp_i18n_namespaceObject.__)('Courses page base with category', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Code */.EK, {
        flex: "1"
      }, global.home_url, "/", global.pageSlugs.courses, (0,external_wp_i18n_namespaceObject.__)('/course-category/sample-course', 'masteriyo'))))));
    }
  }))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "sm",
    color: "gray.600"
  }, (0,external_wp_i18n_namespaceObject.__)('Endpoints are appended to your page URLs to handle specific actions on the accounts pages. They should be unique and can be left blank to disable the endpoint.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Orders', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Endpoint for the "Account - Orders" page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text"
  }, register('advance.account.orders'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$account = advanceData.account) === null || _advanceData$account === void 0 ? void 0 : _advanceData$account.orders
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('View Order', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Endpoint for the "Account - View order" page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text"
  }, register('advance.account.view_order'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$account2 = advanceData.account) === null || _advanceData$account2 === void 0 ? void 0 : _advanceData$account2.view_order
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('My Courses', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Endpoint for the "Account - My courses" page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text"
  }, register('advance.account.my_courses'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$account3 = advanceData.account) === null || _advanceData$account3 === void 0 ? void 0 : _advanceData$account3.my_courses
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Edit Account', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Endpoint for the "Account - Edit Account" page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text"
  }, register('advance.account.edit_account'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$account4 = advanceData.account) === null || _advanceData$account4 === void 0 ? void 0 : _advanceData$account4.edit_account
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Payment Methods', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Endpoint for the "Account - Payment methods" page', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text"
  }, register('advance.account.payment_methods'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$account5 = advanceData.account) === null || _advanceData$account5 === void 0 ? void 0 : _advanceData$account5.payment_methods
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Lost Password', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Endpoint for the "Account - Lost password" page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text"
  }, register('advance.account.lost_password'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$account6 = advanceData.account) === null || _advanceData$account6 === void 0 ? void 0 : _advanceData$account6.lost_password
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Logout', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Endpoint for the triggering logout.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text"
  }, register('advance.account.logout'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$account7 = advanceData.account) === null || _advanceData$account7 === void 0 ? void 0 : _advanceData$account7.logout
  }))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "sm",
    color: "gray.600"
  }, (0,external_wp_i18n_namespaceObject.__)('Endpoints are appended to your page URLs to handle specific actions during the checkout process. They should be unique.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Pay', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Endpoint for the "Checkout - Pay" page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text"
  }, register('advance.checkout.pay'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$checkout = advanceData.checkout) === null || _advanceData$checkout === void 0 ? void 0 : _advanceData$checkout.pay
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Order Received', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Endpoint for the "Checkout - Order received" page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text"
  }, register('advance.checkout.order_received'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$checkout2 = advanceData.checkout) === null || _advanceData$checkout2 === void 0 ? void 0 : _advanceData$checkout2.order_received
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Add Payment Method', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Endpoint for the "Checkout - Add payment method" page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text"
  }, register('advance.checkout.add_payment_method'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$checkout3 = advanceData.checkout) === null || _advanceData$checkout3 === void 0 ? void 0 : _advanceData$checkout3.add_payment_method
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Delete Payment Method', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Endpoint for the delete payment method page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text"
  }, register('advance.checkout.delete_payment_method'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$checkout4 = advanceData.checkout) === null || _advanceData$checkout4 === void 0 ? void 0 : _advanceData$checkout4.delete_payment_method
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Set Default Payment Method', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Endpoint for the setting a default payment method page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "text"
  }, register('advance.checkout.set_default_payment_method'), {
    defaultValue: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$checkout5 = advanceData.checkout) === null || _advanceData$checkout5 === void 0 ? void 0 : _advanceData$checkout5.set_default_payment_method
  }))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* Alert */.bZ, {
    status: "warning"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertIcon */.zM, null), (0,external_wp_i18n_namespaceObject.__)("This section is for development and testing purpose only. It's not recommended to be used in a live site.", 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
    minW: "3xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Template Debug', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Enable it for template debugging.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "advance.debug.template_debug",
    render: function render(_ref2) {
      var _advanceData$debug;

      var field = _ref2.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({}, field, {
        defaultChecked: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$debug = advanceData.debug) === null || _advanceData$debug === void 0 ? void 0 : _advanceData$debug.template_debug
      }));
    }
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
    minW: "3xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Debug', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Enable it for plugin debugging.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "advance.debug.debug",
    render: function render(_ref3) {
      var _advanceData$debug2;

      var field = _ref3.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({}, field, {
        defaultChecked: advanceData === null || advanceData === void 0 ? void 0 : (_advanceData$debug2 = advanceData.debug) === null || _advanceData$debug2 === void 0 ? void 0 : _advanceData$debug2.debug
      }));
    }
  })))))))));
};

/* harmony default export */ const components_AdvancedSettings = (AdvancedSettings);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/slider/dist/chakra-ui-slider.esm.js
var chakra_ui_slider_esm = __webpack_require__(918);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/settings/components/CourseArchiveSettings.tsx









var RadioCard = function RadioCard(props) {
  var radioProps = props.radioProps,
      normalComponent = props.normalComponent,
      activeComponent = props.activeComponent;

  var _useRadio = (0,chakra_ui_radio_esm/* useRadio */.xL)(radioProps),
      state = _useRadio.state,
      getInputProps = _useRadio.getInputProps,
      getCheckboxProps = _useRadio.getCheckboxProps;

  var input = getInputProps();
  var checkbox = getCheckboxProps();
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "label"
  }, /*#__PURE__*/external_React_default().createElement("input", input), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, (0,esm_extends/* default */.Z)({}, checkbox, {
    cursor: "pointer",
    p: 1
  }), state.isChecked ? activeComponent : normalComponent));
};

var CourseArchiveSettings = function CourseArchiveSettings(props) {
  var _courseArchiveData$di, _errors$course_archiv, _errors$course_archiv2, _errors$course_archiv3, _errors$course_archiv4, _errors$course_archiv5, _errors$course_archiv6, _errors$course_archiv7, _errors$course_archiv8, _errors$course_archiv9, _errors$course_archiv10, _errors$course_archiv11, _errors$course_archiv12;

  var courseArchiveData = props.courseArchiveData;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      control = _useFormContext.control,
      errors = _useFormContext.formState.errors,
      setValue = _useFormContext.setValue;

  var watchCoursePerPage = (0,dist_index_esm/* useWatch */.qo)({
    name: 'course_archive.display.per_page',
    defaultValue: courseArchiveData === null || courseArchiveData === void 0 ? void 0 : courseArchiveData.display.per_page,
    control: control
  });

  var _useRadioGroup = (0,chakra_ui_radio_esm/* useRadioGroup */.ar)({
    name: 'course_per_row',
    defaultValue: (courseArchiveData === null || courseArchiveData === void 0 ? void 0 : courseArchiveData.display.per_row) + '',
    onChange: function onChange(data) {
      setValue('course_archive.display.per_row', data);
    }
  }),
      getRootProps = _useRadioGroup.getRootProps,
      getRadioProps = _useRadioGroup.getRadioProps;

  var group = getRootProps();
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, {
    orientation: "vertical"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
    sx: tabListStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Display', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, {
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Show Search', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Display search on courses page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({}, register('course_archive.display.enable_search'), {
    defaultChecked: courseArchiveData === null || courseArchiveData === void 0 ? void 0 : (_courseArchiveData$di = courseArchiveData.display) === null || _courseArchiveData$di === void 0 ? void 0 : _courseArchiveData$di.enable_search
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && (_errors$course_archiv = errors.course_archive) !== null && _errors$course_archiv !== void 0 && (_errors$course_archiv2 = _errors$course_archiv.display) !== null && _errors$course_archiv2 !== void 0 && _errors$course_archiv2.per_page)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Courses Per Page', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Total number of courses to be shown in courses page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "course_archive.display.per_page",
    defaultValue: watchCoursePerPage || 12,
    rules: {
      required: true
    },
    render: function render(_ref) {
      var field = _ref.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_slider_esm/* Slider */.iR, (0,esm_extends/* default */.Z)({}, field, {
        "aria-label": "course-per-page",
        max: 24,
        min: 1
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_slider_esm/* SliderTrack */.Uj, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_slider_esm/* SliderFilledTrack */.Ms, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_slider_esm/* SliderThumb */.gs, {
        boxSize: "6",
        bgColor: "blue.500"
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
        fontSize: "xs",
        fontWeight: "semibold",
        color: "white"
      }, watchCoursePerPage || 12)));
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : (_errors$course_archiv3 = errors.course_archive) === null || _errors$course_archiv3 === void 0 ? void 0 : (_errors$course_archiv4 = _errors$course_archiv3.display) === null || _errors$course_archiv4 === void 0 ? void 0 : _errors$course_archiv4.per_page) && (errors === null || errors === void 0 ? void 0 : (_errors$course_archiv5 = errors.course_archive) === null || _errors$course_archiv5 === void 0 ? void 0 : (_errors$course_archiv6 = _errors$course_archiv5.display) === null || _errors$course_archiv6 === void 0 ? void 0 : _errors$course_archiv6.per_page.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && (_errors$course_archiv7 = errors.course_archive) !== null && _errors$course_archiv7 !== void 0 && (_errors$course_archiv8 = _errors$course_archiv7.display) !== null && _errors$course_archiv8 !== void 0 && _errors$course_archiv8.per_row)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Courses Per Row', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Total number of courses to be shown per row in courses page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, group, /*#__PURE__*/external_React_default().createElement(RadioCard, {
    radioProps: getRadioProps({
      value: '1'
    }),
    normalComponent: /*#__PURE__*/external_React_default().createElement(course_per_row_1, null),
    activeComponent: /*#__PURE__*/external_React_default().createElement(course_per_row_1_active, null)
  }), /*#__PURE__*/external_React_default().createElement(RadioCard, {
    radioProps: getRadioProps({
      value: '2'
    }),
    normalComponent: /*#__PURE__*/external_React_default().createElement(course_per_row_2, null),
    activeComponent: /*#__PURE__*/external_React_default().createElement(course_per_row_2_active, null)
  }), /*#__PURE__*/external_React_default().createElement(RadioCard, {
    radioProps: getRadioProps({
      value: '3'
    }),
    normalComponent: /*#__PURE__*/external_React_default().createElement(course_per_row_3, null),
    activeComponent: /*#__PURE__*/external_React_default().createElement(course_per_row_3_active, null)
  }), /*#__PURE__*/external_React_default().createElement(RadioCard, {
    radioProps: getRadioProps({
      value: '4'
    }),
    normalComponent: /*#__PURE__*/external_React_default().createElement(course_per_row_4, null),
    activeComponent: /*#__PURE__*/external_React_default().createElement(course_per_row_4_active, null)
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : (_errors$course_archiv9 = errors.course_archive) === null || _errors$course_archiv9 === void 0 ? void 0 : (_errors$course_archiv10 = _errors$course_archiv9.display) === null || _errors$course_archiv10 === void 0 ? void 0 : _errors$course_archiv10.per_row) && (errors === null || errors === void 0 ? void 0 : (_errors$course_archiv11 = errors.course_archive) === null || _errors$course_archiv11 === void 0 ? void 0 : (_errors$course_archiv12 = _errors$course_archiv11.display) === null || _errors$course_archiv12 === void 0 ? void 0 : _errors$course_archiv12.per_row.message))))))));
};

/* harmony default export */ const components_CourseArchiveSettings = (CourseArchiveSettings);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/settings/components/EmailSettings.tsx








var EmailSetttings = function EmailSetttings(props) {
  var emailData = props.emailData;
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, {
    orientation: "vertical"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
    sx: tabListStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('New Order', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Completed Order', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('OnHold Order', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Cancelled Order', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, {
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
    minW: "160px"
  }, (0,external_wp_i18n_namespaceObject.__)('Enable', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Email sent to user when a new order is received.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "emails.new_order.enable",
    render: function render(_ref) {
      var _emailData$new_order;

      var field = _ref.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({}, field, {
        defaultChecked: emailData === null || emailData === void 0 ? void 0 : (_emailData$new_order = emailData.new_order) === null || _emailData$new_order === void 0 ? void 0 : _emailData$new_order.enable
      }));
    }
  }))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
    minW: "160px"
  }, (0,external_wp_i18n_namespaceObject.__)('Enable', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Email sent to user when an order is complete.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "emails.completed_order.enable",
    render: function render(_ref2) {
      var _emailData$completed_;

      var field = _ref2.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({}, field, {
        defaultChecked: emailData === null || emailData === void 0 ? void 0 : (_emailData$completed_ = emailData.completed_order) === null || _emailData$completed_ === void 0 ? void 0 : _emailData$completed_.enable
      }));
    }
  }))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
    minW: "160px"
  }, (0,external_wp_i18n_namespaceObject.__)('Enable', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Email sent to user when an order is placed on-hold.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "emails.onhold_order.enable",
    render: function render(_ref3) {
      var _emailData$onhold_ord;

      var field = _ref3.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({}, field, {
        defaultChecked: emailData === null || emailData === void 0 ? void 0 : (_emailData$onhold_ord = emailData.onhold_order) === null || _emailData$onhold_ord === void 0 ? void 0 : _emailData$onhold_ord.enable
      }));
    }
  }))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
    minW: "160px"
  }, (0,external_wp_i18n_namespaceObject.__)('Enable', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Email sent to user when an order is cancelled.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "emails.cancelled_order.enable",
    render: function render(_ref4) {
      var _emailData$cancelled_;

      var field = _ref4.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({}, field, {
        defaultChecked: emailData === null || emailData === void 0 ? void 0 : (_emailData$cancelled_ = emailData.cancelled_order) === null || _emailData$cancelled_ === void 0 ? void 0 : _emailData$cancelled_.enable
      }));
    }
  }))))))));
};

/* harmony default export */ const EmailSettings = (EmailSetttings);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/popover/dist/chakra-ui-popover.esm.js
var chakra_ui_popover_esm = __webpack_require__(2095);
// EXTERNAL MODULE: ./node_modules/react-colorful/dist/index.module.js
var index_module = __webpack_require__(5907);
;// CONCATENATED MODULE: ./assets/js/back-end/components/common/ColorInput.tsx




var ColorInput = function ColorInput(props) {
  var color = props.color,
      setColor = props.setColor;
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    sx: {
      '.color-input-field': {
        width: 'full',
        border: '1px solid',
        borderColor: 'gray.100',
        shadow: 'input',
        borderRadius: 'sm',
        px: '2',
        py: '2',
        pl: '9'
      }
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_popover_esm/* Popover */.J2, {
    placement: "bottom-start"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_popover_esm/* PopoverTrigger */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    pos: "relative"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    pos: "absolute",
    w: "20px",
    h: "20px",
    bg: color,
    rounded: "sm",
    top: "10px",
    left: "10px"
  }), /*#__PURE__*/external_React_default().createElement(index_module/* HexColorInput */.ZE, {
    onChange: setColor,
    color: color,
    className: "color-input-field"
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_popover_esm/* PopoverContent */.yk, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_popover_esm/* PopoverArrow */.QH, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_popover_esm/* PopoverCloseButton */.us, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_popover_esm/* PopoverBody */.b, null, /*#__PURE__*/external_React_default().createElement(index_module/* HexColorPicker */.gW, {
    onChange: setColor,
    color: color
  })))));
};

/* harmony default export */ const common_ColorInput = (ColorInput);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/settings/components/GeneralSettings.tsx










var GeneralSettings = function GeneralSettings(props) {
  var _generalData$styling, _generalData$styling2;

  var generalData = props.generalData;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      setValue = _useFormContext.setValue;

  var _useState = (0,external_React_.useState)((generalData === null || generalData === void 0 ? void 0 : (_generalData$styling = generalData.styling) === null || _generalData$styling === void 0 ? void 0 : _generalData$styling.primary_color) || '#787DFF'),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      primaryColor = _useState2[0],
      setPrimaryColor = _useState2[1];

  (0,external_React_.useEffect)(function () {
    setValue('general.styling.primary_color', primaryColor);
  }, [primaryColor, setValue]);
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, {
    orientation: "vertical"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
    sx: tabListStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Styling', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, {
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Primary Color', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Choose a color to match your brand or site. This color reflects on buttons, links, and few other elements.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement("input", (0,esm_extends/* default */.Z)({
    type: "hidden"
  }, register('general.styling.primary_color'), {
    defaultValue: generalData === null || generalData === void 0 ? void 0 : (_generalData$styling2 = generalData.styling) === null || _generalData$styling2 === void 0 ? void 0 : _generalData$styling2.primary_color
  })), /*#__PURE__*/external_React_default().createElement(common_ColorInput, {
    color: primaryColor,
    setColor: setPrimaryColor
  })))))));
};

/* harmony default export */ const components_GeneralSettings = (GeneralSettings);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/settings/components/LearningPageSettings.tsx












var LearningPageSettings = function LearningPageSettings(props) {
  var _learningPageData$gen, _imageQuery$data, _imageQuery$data$medi, _imageQuery$data$medi2, _imageQuery$data$medi3, _imageQuery$data2, _imageQuery$data2$med, _imageQuery$data2$med2, _imageQuery$data2$med3, _imageQuery$data3, _learningPageData$dis;

  var learningPageData = props.learningPageData;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      setValue = _useFormContext.setValue;

  var _useState = (0,external_React_.useState)((learningPageData === null || learningPageData === void 0 ? void 0 : (_learningPageData$gen = learningPageData.general) === null || _learningPageData$gen === void 0 ? void 0 : _learningPageData$gen.logo_id) || null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      imageId = _useState2[0],
      setImageId = _useState2[1];

  var imageAPi = new media();
  var imageQuery = (0,es.useQuery)(["learnPageLogo".concat(imageId), imageId], function () {
    return imageAPi.get(imageId);
  }, {
    enabled: !!imageId,
    refetchOnWindowFocus: true
  });

  var onComplete = function onComplete(imageId) {
    setImageId(imageId);
    setValue('learn_page.general.logo_id', imageId);
  };

  var onDelete = function onDelete() {
    setImageId(null);
    setValue('learn_page.general.logo_id', 0);
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, {
    orientation: "vertical"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
    sx: tabListStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('General', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Display', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, {
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Logo', 'masteriyo')), imageQuery.isLoading && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    w: "40",
    mb: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_spinner_esm/* Spinner */.$, null))), imageQuery.isSuccess && /*#__PURE__*/external_React_default().createElement(chakra_ui_image_esm/* Image */.Ee, {
    w: "40",
    src: imageQuery !== null && imageQuery !== void 0 && (_imageQuery$data = imageQuery.data) !== null && _imageQuery$data !== void 0 && (_imageQuery$data$medi = _imageQuery$data.media_details) !== null && _imageQuery$data$medi !== void 0 && (_imageQuery$data$medi2 = _imageQuery$data$medi.sizes) !== null && _imageQuery$data$medi2 !== void 0 && (_imageQuery$data$medi3 = _imageQuery$data$medi2['full']) !== null && _imageQuery$data$medi3 !== void 0 && _imageQuery$data$medi3.source_url ? imageQuery === null || imageQuery === void 0 ? void 0 : (_imageQuery$data2 = imageQuery.data) === null || _imageQuery$data2 === void 0 ? void 0 : (_imageQuery$data2$med = _imageQuery$data2.media_details) === null || _imageQuery$data2$med === void 0 ? void 0 : (_imageQuery$data2$med2 = _imageQuery$data2$med.sizes) === null || _imageQuery$data2$med2 === void 0 ? void 0 : (_imageQuery$data2$med3 = _imageQuery$data2$med2['full']) === null || _imageQuery$data2$med3 === void 0 ? void 0 : _imageQuery$data2$med3.source_url : imageQuery === null || imageQuery === void 0 ? void 0 : (_imageQuery$data3 = imageQuery.data) === null || _imageQuery$data3 === void 0 ? void 0 : _imageQuery$data3.source_url,
    mb: "4"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, {
    d: "flex",
    justifyContent: "space-between",
    w: "40"
  }, imageId && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    size: "xs",
    variant: "outline",
    onClick: onDelete,
    colorScheme: "red"
  }, (0,external_wp_i18n_namespaceObject.__)('Remove', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(common_MediaUploader, {
    size: "xs",
    buttonLabel: imageId ? (0,external_wp_i18n_namespaceObject.__)('Upload New', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Upload', 'masteriyo'),
    modalTitle: "Featured Image",
    onSelect: function onSelect(data) {
      onComplete(data[0].id);
    },
    isFullWidth: false
  }))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Enable Questions & Answers', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Display questions & answers tab in learn page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({}, register('learn_page.display.enable_questions_answers'), {
    defaultChecked: learningPageData === null || learningPageData === void 0 ? void 0 : (_learningPageData$dis = learningPageData.display) === null || _learningPageData$dis === void 0 ? void 0 : _learningPageData$dis.enable_questions_answers
  })))))))));
};

/* harmony default export */ const components_LearningPageSettings = (LearningPageSettings);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/settings/components/PaymentsSettings.tsx













var PaymentsSettings = function PaymentsSettings(props) {
  var _paymentsData$paypal, _paymentsData$paypal2, _paymentsData$offline;

  var paymentsData = props.paymentsData;
  var countriesAPI = new api(constants_urls.countries);
  var currenciesAPI = new api(constants_urls.currencies);
  var statesAPI = new api(constants_urls.states);
  var countriesQuery = (0,es.useQuery)('countries', function () {
    return countriesAPI.list();
  });
  var currenciesQuery = (0,es.useQuery)('currencies', function () {
    return currenciesAPI.list();
  });
  var statesQuery = (0,es.useQuery)('states', function () {
    return statesAPI.list();
  });

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      control = _useFormContext.control,
      errors = _useFormContext.formState.errors;

  var watchSelectedCountry = (0,dist_index_esm/* useWatch */.qo)({
    name: 'payments.store.country',
    defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : paymentsData.store.country,
    control: control
  });
  var watchNoOfDecimals = (0,dist_index_esm/* useWatch */.qo)({
    name: 'payments.currency.number_of_decimals',
    defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : paymentsData.currency.number_of_decimals,
    control: control
  });
  var showPayPalOptions = (0,dist_index_esm/* useWatch */.qo)({
    name: 'payments.paypal.enable',
    defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal = paymentsData.paypal) === null || _paymentsData$paypal === void 0 ? void 0 : _paymentsData$paypal.enable,
    control: control
  });
  var showPayPalSandBoxOptions = (0,dist_index_esm/* useWatch */.qo)({
    name: 'payments.paypal.sandbox',
    defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal2 = paymentsData.paypal) === null || _paymentsData$paypal2 === void 0 ? void 0 : _paymentsData$paypal2.sandbox,
    control: control
  });
  var showOfflineOptions = (0,dist_index_esm/* useWatch */.qo)({
    name: 'payments.offline.enable',
    defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$offline = paymentsData.offline) === null || _paymentsData$offline === void 0 ? void 0 : _paymentsData$offline.enable,
    control: control
  });

  if (countriesQuery !== null && countriesQuery !== void 0 && countriesQuery.isSuccess && currenciesQuery !== null && currenciesQuery !== void 0 && currenciesQuery.isSuccess && statesQuery !== null && statesQuery !== void 0 && statesQuery.isSuccess) {
    var _paymentsData$store, _paymentsData$store2, _paymentsData$store3, _paymentsData$store4, _paymentsData$store5, _paymentsData$currenc, _paymentsData$currenc2, _errors$payments, _errors$payments$curr, _paymentsData$currenc3, _errors$payments2, _errors$payments2$cur, _errors$payments3, _errors$payments3$cur, _errors$payments3$cur2, _errors$payments4, _errors$payments4$cur, _paymentsData$currenc4, _errors$payments5, _errors$payments5$cur, _errors$payments6, _errors$payments6$cur, _errors$payments7, _errors$payments7$cur, _paymentsData$currenc5, _errors$payments8, _errors$payments8$cur, _errors$payments9, _errors$payments9$cur, _paymentsData$paypal4, _paymentsData$paypal5, _paymentsData$paypal7, _paymentsData$paypal8, _paymentsData$paypal9, _paymentsData$paypal10, _paymentsData$paypal11, _paymentsData$paypal12, _paymentsData$paypal15, _paymentsData$paypal16, _paymentsData$paypal17, _paymentsData$paypal18, _paymentsData$paypal19, _paymentsData$paypal20, _paymentsData$offline3, _paymentsData$offline4, _paymentsData$offline5;

    var matchCountriesData = statesQuery === null || statesQuery === void 0 ? void 0 : statesQuery.data.filter(function (statesData) {
      return statesData.country === watchSelectedCountry;
    });
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, {
      orientation: "vertical"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      flex: "1"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
      sx: tabListStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Store', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Currency', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Standard Paypal', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Offline Payment', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, {
      flex: "1"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Country', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({}, register('payments.store.country'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$store = paymentsData.store) === null || _paymentsData$store === void 0 ? void 0 : _paymentsData$store.country
    }), countriesQuery === null || countriesQuery === void 0 ? void 0 : countriesQuery.data.map(function (country) {
      return /*#__PURE__*/external_React_default().createElement("option", {
        value: country.code,
        key: country.code
      }, country.name);
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('State', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({}, register('payments.store.state'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$store2 = paymentsData.store) === null || _paymentsData$store2 === void 0 ? void 0 : _paymentsData$store2.state
    }), !isEmpty(matchCountriesData) ? matchCountriesData[0].states.map(function (stateData) {
      return /*#__PURE__*/external_React_default().createElement("option", {
        value: stateData.code,
        key: stateData.code
      }, stateData.name);
    }) : /*#__PURE__*/external_React_default().createElement("option", null, (0,external_wp_i18n_namespaceObject.__)('No state found', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('City', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "text"
    }, register('payments.store.city'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$store3 = paymentsData.store) === null || _paymentsData$store3 === void 0 ? void 0 : _paymentsData$store3.city
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Address Line 1', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "text"
    }, register('payments.store.address_line1'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$store4 = paymentsData.store) === null || _paymentsData$store4 === void 0 ? void 0 : _paymentsData$store4.address_line1
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Address Line 2', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "text"
    }, register('payments.store.address_line2'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$store5 = paymentsData.store) === null || _paymentsData$store5 === void 0 ? void 0 : _paymentsData$store5.address_line2
    }))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Currency', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Select default currency.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({}, register('payments.currency.currency'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$currenc = paymentsData.currency) === null || _paymentsData$currenc === void 0 ? void 0 : _paymentsData$currenc.currency
    }), currenciesQuery === null || currenciesQuery === void 0 ? void 0 : currenciesQuery.data.map(function (currency) {
      return /*#__PURE__*/external_React_default().createElement("option", {
        value: currency.code,
        key: currency.code
      }, currency.name, " (", currency.symbol, ")");
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Currency Position', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Specifies where the currency symbol will appear.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({}, register('payments.currency.currency_position'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$currenc2 = paymentsData.currency) === null || _paymentsData$currenc2 === void 0 ? void 0 : _paymentsData$currenc2.currency_position
    }), /*#__PURE__*/external_React_default().createElement("option", {
      value: "left"
    }, (0,external_wp_i18n_namespaceObject.__)('Left ($99.99)', 'masteriyo')), /*#__PURE__*/external_React_default().createElement("option", {
      value: "right"
    }, (0,external_wp_i18n_namespaceObject.__)('Right (99.99$)', 'masteriyo')), /*#__PURE__*/external_React_default().createElement("option", {
      value: "left_space"
    }, (0,external_wp_i18n_namespaceObject.__)('Left Space ($ 99.99)', 'masteriyo')), /*#__PURE__*/external_React_default().createElement("option", {
      value: "right_space"
    }, (0,external_wp_i18n_namespaceObject.__)('Right Space  (99.99 $)', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && (_errors$payments = errors.payments) !== null && _errors$payments !== void 0 && (_errors$payments$curr = _errors$payments.currency) !== null && _errors$payments$curr !== void 0 && _errors$payments$curr.thousand_separator)
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Thousand Separator', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)("It can't be a number and same as decimal separator.", 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "text"
    }, register('payments.currency.thousand_separator', {
      maxLength: {
        value: 1,
        message: (0,external_wp_i18n_namespaceObject.__)('Thousand separator should be 1 character only.', 'masteriyo')
      },
      required: (0,external_wp_i18n_namespaceObject.__)('Thousand separator is required.', 'masteriyo'),
      validate: function validate(value) {
        return hasNumber(value) || (0,external_wp_i18n_namespaceObject.__)("Thousand separator can't be a number.", 'masteriyo');
      }
    }), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$currenc3 = paymentsData.currency) === null || _paymentsData$currenc3 === void 0 ? void 0 : _paymentsData$currenc3.thousand_separator
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : (_errors$payments2 = errors.payments) === null || _errors$payments2 === void 0 ? void 0 : (_errors$payments2$cur = _errors$payments2.currency) === null || _errors$payments2$cur === void 0 ? void 0 : _errors$payments2$cur.thousand_separator) && (errors === null || errors === void 0 ? void 0 : (_errors$payments3 = errors.payments) === null || _errors$payments3 === void 0 ? void 0 : (_errors$payments3$cur = _errors$payments3.currency) === null || _errors$payments3$cur === void 0 ? void 0 : (_errors$payments3$cur2 = _errors$payments3$cur.thousand_separator) === null || _errors$payments3$cur2 === void 0 ? void 0 : _errors$payments3$cur2.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && (_errors$payments4 = errors.payments) !== null && _errors$payments4 !== void 0 && (_errors$payments4$cur = _errors$payments4.currency) !== null && _errors$payments4$cur !== void 0 && _errors$payments4$cur.decimal_separator)
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Decimal Separator', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)("It can't be a number and same as thousand separator.", 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "text"
    }, register('payments.currency.decimal_separator', {
      required: (0,external_wp_i18n_namespaceObject.__)('Decimal separator is required.', 'masteriyo'),
      maxLength: {
        value: 1,
        message: (0,external_wp_i18n_namespaceObject.__)('Decimal separator should be 1 character only.', 'masteriyo')
      },
      validate: function validate(value) {
        return hasNumber(value) || (0,external_wp_i18n_namespaceObject.__)("Decimal separator can't be a number.", 'masteriyo');
      }
    }), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$currenc4 = paymentsData.currency) === null || _paymentsData$currenc4 === void 0 ? void 0 : _paymentsData$currenc4.decimal_separator
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : (_errors$payments5 = errors.payments) === null || _errors$payments5 === void 0 ? void 0 : (_errors$payments5$cur = _errors$payments5.currency) === null || _errors$payments5$cur === void 0 ? void 0 : _errors$payments5$cur.decimal_separator) && (errors === null || errors === void 0 ? void 0 : (_errors$payments6 = errors.payments) === null || _errors$payments6 === void 0 ? void 0 : (_errors$payments6$cur = _errors$payments6.currency) === null || _errors$payments6$cur === void 0 ? void 0 : _errors$payments6$cur.decimal_separator.message)))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && (_errors$payments7 = errors.payments) !== null && _errors$payments7 !== void 0 && (_errors$payments7$cur = _errors$payments7.currency) !== null && _errors$payments7$cur !== void 0 && _errors$payments7$cur.number_of_decimals)
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Number of Decimals', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Number of digits to show on fractional part. Maximum limit is 10.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
      name: "payments.currency.number_of_decimals",
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$currenc5 = paymentsData.currency) === null || _paymentsData$currenc5 === void 0 ? void 0 : _paymentsData$currenc5.number_of_decimals,
      rules: {
        required: (0,external_wp_i18n_namespaceObject.__)('Number of decimals is required.', 'masteriyo')
      },
      render: function render(_ref) {
        var field = _ref.field;
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_slider_esm/* Slider */.iR, (0,esm_extends/* default */.Z)({}, field, {
          "aria-label": "course-per-page",
          defaultValue: watchNoOfDecimals,
          max: 5,
          min: 0
        }), /*#__PURE__*/external_React_default().createElement(chakra_ui_slider_esm/* SliderTrack */.Uj, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_slider_esm/* SliderFilledTrack */.Ms, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_slider_esm/* SliderThumb */.gs, {
          boxSize: "6",
          bgColor: "blue.500"
        }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
          fontSize: "xs",
          fontWeight: "semibold",
          color: "white"
        }, watchNoOfDecimals)));
      }
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : (_errors$payments8 = errors.payments) === null || _errors$payments8 === void 0 ? void 0 : (_errors$payments8$cur = _errors$payments8.currency) === null || _errors$payments8$cur === void 0 ? void 0 : _errors$payments8$cur.number_of_decimals) && (errors === null || errors === void 0 ? void 0 : (_errors$payments9 = errors.payments) === null || _errors$payments9 === void 0 ? void 0 : (_errors$payments9$cur = _errors$payments9.currency) === null || _errors$payments9$cur === void 0 ? void 0 : _errors$payments9$cur.number_of_decimals.message)))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Enable', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Use Standard PayPal on checkout.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
      name: "payments.paypal.enable",
      render: function render(_ref2) {
        var _paymentsData$paypal3;

        var field = _ref2.field;
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({}, field, {
          defaultChecked: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal3 = paymentsData.paypal) === null || _paymentsData$paypal3 === void 0 ? void 0 : _paymentsData$paypal3.enable
        }));
      }
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
      "in": showPayPalOptions,
      animateOpacity: true
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Title', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      textAlign: "center",
      label: (0,external_wp_i18n_namespaceObject.__)('The title of payment method which the user sees during checkout.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "text"
    }, register('payments.paypal.title'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal4 = paymentsData.paypal) === null || _paymentsData$paypal4 === void 0 ? void 0 : _paymentsData$paypal4.title
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Description', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      textAlign: "center",
      label: (0,external_wp_i18n_namespaceObject.__)('The description of payment method which the user sees during checkout.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_textarea_esm/* Textarea */.g, (0,esm_extends/* default */.Z)({}, register('payments.paypal.description'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal5 = paymentsData.paypal) === null || _paymentsData$paypal5 === void 0 ? void 0 : _paymentsData$paypal5.description
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('IPN Email Notification', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      textAlign: "center",
      label: (0,external_wp_i18n_namespaceObject.__)('Send notifications when an IPN is received from PayPal indicating refunds, charge-backs, and cancellations.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
      name: "payments.paypal.ipn_email_notifications",
      render: function render(_ref3) {
        var _paymentsData$paypal6;

        var field = _ref3.field;
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({}, field, {
          defaultChecked: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal6 = paymentsData.paypal) === null || _paymentsData$paypal6 === void 0 ? void 0 : _paymentsData$paypal6.ipn_email_notifications
        }));
      }
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Paypal Email', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      textAlign: "center",
      label: (0,external_wp_i18n_namespaceObject.__)('Please enter your PayPal email address; this is needed in order to take payment.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "email"
    }, register('payments.paypal.email'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal7 = paymentsData.paypal) === null || _paymentsData$paypal7 === void 0 ? void 0 : _paymentsData$paypal7.email
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Receiver Email', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      textAlign: "center",
      label: (0,external_wp_i18n_namespaceObject.__)('If your main PayPal email differs from the PayPal email entered above, input your main receiver email for your PayPal account here. This is used to validate IPN requests. If your main PayPal email differs from the PayPal email entered above, input your main receiver email for your PayPal account here. This is used to validate IPN requests.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "email"
    }, register('payments.paypal.receiver_email'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal8 = paymentsData.paypal) === null || _paymentsData$paypal8 === void 0 ? void 0 : _paymentsData$paypal8.receiver_email
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Identity Token', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      textAlign: "center",
      label: (0,external_wp_i18n_namespaceObject.__)('Optionally enable "Payment Data Transfer" (Profile > Profile and Settings > My Selling Tools > Website Preferences) and then copy your identity token here. This will allow payments to be verified without the need for PayPal IPN.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "text"
    }, register('payments.paypal.identity_token'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal9 = paymentsData.paypal) === null || _paymentsData$paypal9 === void 0 ? void 0 : _paymentsData$paypal9.identity_token
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Invoice Prefix', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      textAlign: "center",
      label: (0,external_wp_i18n_namespaceObject.__)('If you use your PayPal account with more than one installation, please use a distinct prefix to separate those installations. Please do not use numbers in your prefix.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "text"
    }, register('payments.paypal.invoice_prefix'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal10 = paymentsData.paypal) === null || _paymentsData$paypal10 === void 0 ? void 0 : _paymentsData$paypal10.invoice_prefix
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Payment Actions', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      textAlign: "center",
      label: (0,external_wp_i18n_namespaceObject.__)("The intent to either capture payment immediately or authorize a payment for an order after order creation.", 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({
      placeholder: (0,external_wp_i18n_namespaceObject.__)('Select Payment Action', 'masteriyo'),
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal11 = paymentsData.paypal) === null || _paymentsData$paypal11 === void 0 ? void 0 : _paymentsData$paypal11.payment_action
    }, register('payments.paypal.payment_action')), /*#__PURE__*/external_React_default().createElement("option", {
      value: "capture"
    }, (0,external_wp_i18n_namespaceObject.__)('Capture', 'masteriyo')), /*#__PURE__*/external_React_default().createElement("option", {
      value: "authorize"
    }, (0,external_wp_i18n_namespaceObject.__)('Authorize', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Image URL', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      textAlign: "center",
      label: (0,external_wp_i18n_namespaceObject.__)("Optionally enter the URL to a 150x50px image displayed as your logo in the upper left corner of the PayPal checkout pages.", 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      placeholder: "Optional",
      type: "text"
    }, register('payments.paypal.image_url'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal12 = paymentsData.paypal) === null || _paymentsData$paypal12 === void 0 ? void 0 : _paymentsData$paypal12.image_url
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Debug Log', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      textAlign: "center",
      label: (0,external_wp_i18n_namespaceObject.__)('Note: This may log personal information. We recommend using this for debugging purposes only and deleting the logs when finished.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
      name: "payments.paypal.debug",
      render: function render(_ref4) {
        var _paymentsData$paypal13;

        var field = _ref4.field;
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({}, field, {
          defaultChecked: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal13 = paymentsData.paypal) === null || _paymentsData$paypal13 === void 0 ? void 0 : _paymentsData$paypal13.debug
        }));
      }
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Sandbox', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('PayPal sandbox can be used to test payments.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
      name: "payments.paypal.sandbox",
      render: function render(_ref5) {
        var _paymentsData$paypal14;

        var field = _ref5.field;
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({}, field, {
          defaultChecked: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal14 = paymentsData.paypal) === null || _paymentsData$paypal14 === void 0 ? void 0 : _paymentsData$paypal14.sandbox
        }));
      }
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
      "in": showPayPalSandBoxOptions
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Sandbox API Username', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Get your API credentials from PayPal.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      placeholder: "Optional",
      type: "text"
    }, register('payments.paypal.sandbox_api_username'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal15 = paymentsData.paypal) === null || _paymentsData$paypal15 === void 0 ? void 0 : _paymentsData$paypal15.sandbox_api_username
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Sandbox API Password', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Get your API credentials from PayPal.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      placeholder: "Optional",
      type: "password"
    }, register('payments.paypal.sandbox_api_password'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal16 = paymentsData.paypal) === null || _paymentsData$paypal16 === void 0 ? void 0 : _paymentsData$paypal16.sandbox_api_password
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Sandbox API Signature', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Get your API credentials from PayPal.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      placeholder: "Optional",
      type: "text"
    }, register('payments.paypal.sandbox_api_signature'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal17 = paymentsData.paypal) === null || _paymentsData$paypal17 === void 0 ? void 0 : _paymentsData$paypal17.sandbox_api_signature
    }))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
      "in": !showPayPalSandBoxOptions
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Live API Username', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Get your API credentials from PayPal.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      placeholder: "Optional",
      type: "text"
    }, register('payments.paypal.live_api_username'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal18 = paymentsData.paypal) === null || _paymentsData$paypal18 === void 0 ? void 0 : _paymentsData$paypal18.live_api_username
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Live API Password', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Get your API credentials from PayPal.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      placeholder: "Optional",
      type: "password"
    }, register('payments.paypal.live_api_password'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal19 = paymentsData.paypal) === null || _paymentsData$paypal19 === void 0 ? void 0 : _paymentsData$paypal19.live_api_password
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Live API Signature', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Get your API credentials from PayPal.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      placeholder: "Optional",
      type: "text"
    }, register('payments.paypal.live_api_signature'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$paypal20 = paymentsData.paypal) === null || _paymentsData$paypal20 === void 0 ? void 0 : _paymentsData$paypal20.live_api_signature
    }))))))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Enable', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Use offline payment on checkout.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
      name: "payments.offline.enable",
      render: function render(_ref6) {
        var _paymentsData$offline2;

        var field = _ref6.field;
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({}, field, {
          defaultChecked: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$offline2 = paymentsData.offline) === null || _paymentsData$offline2 === void 0 ? void 0 : _paymentsData$offline2.enable
        }));
      }
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
      "in": showOfflineOptions,
      animateOpacity: true
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Title', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "text"
    }, register('payments.offline.title'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$offline3 = paymentsData.offline) === null || _paymentsData$offline3 === void 0 ? void 0 : _paymentsData$offline3.title
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Description', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_textarea_esm/* Textarea */.g, (0,esm_extends/* default */.Z)({}, register('payments.offline.description'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$offline4 = paymentsData.offline) === null || _paymentsData$offline4 === void 0 ? void 0 : _paymentsData$offline4.description
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, {
      minW: "160px"
    }, (0,external_wp_i18n_namespaceObject.__)('Instructions', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_textarea_esm/* Textarea */.g, (0,esm_extends/* default */.Z)({}, register('payments.offline.instructions'), {
      defaultValue: paymentsData === null || paymentsData === void 0 ? void 0 : (_paymentsData$offline5 = paymentsData.offline) === null || _paymentsData$offline5 === void 0 ? void 0 : _paymentsData$offline5.instructions
    }))))))))));
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const components_PaymentsSettings = (PaymentsSettings);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/settings/components/QuizSettings.tsx








var QuizSettings = function QuizSettings(props) {
  var _errors$quiz, _errors$quiz$styling, _quizData$styling, _errors$quiz2, _errors$quiz2$styling, _errors$quiz3, _errors$quiz3$styling;

  var quizData = props.quizData;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      errors = _useFormContext.formState.errors,
      control = _useFormContext.control;

  var watchQuestionsPerPage = (0,dist_index_esm/* useWatch */.qo)({
    name: 'quiz.styling.questions_display_per_page',
    defaultValue: quizData === null || quizData === void 0 ? void 0 : quizData.styling.questions_display_per_page,
    control: control
  });
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, {
    orientation: "vertical"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
    sx: tabListStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Styling', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, {
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && (_errors$quiz = errors.quiz) !== null && _errors$quiz !== void 0 && (_errors$quiz$styling = _errors$quiz.styling) !== null && _errors$quiz$styling !== void 0 && _errors$quiz$styling.questions_display_per_page)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Questions Per Page', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Total number of questions to be shown per page for a quiz.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "quiz.styling.questions_display_per_page",
    defaultValue: quizData === null || quizData === void 0 ? void 0 : (_quizData$styling = quizData.styling) === null || _quizData$styling === void 0 ? void 0 : _quizData$styling.questions_display_per_page,
    rules: {
      required: (0,external_wp_i18n_namespaceObject.__)('Questions per page is required.', 'masteriyo')
    },
    render: function render(_ref) {
      var field = _ref.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_slider_esm/* Slider */.iR, (0,esm_extends/* default */.Z)({}, field, {
        "aria-label": "questions-per-page",
        defaultValue: watchQuestionsPerPage || 12,
        max: 24,
        min: 1
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_slider_esm/* SliderTrack */.Uj, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_slider_esm/* SliderFilledTrack */.Ms, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_slider_esm/* SliderThumb */.gs, {
        boxSize: "6",
        bgColor: "blue.500"
      }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
        fontSize: "xs",
        fontWeight: "semibold",
        color: "white"
      }, watchQuestionsPerPage || 12)));
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : (_errors$quiz2 = errors.quiz) === null || _errors$quiz2 === void 0 ? void 0 : (_errors$quiz2$styling = _errors$quiz2.styling) === null || _errors$quiz2$styling === void 0 ? void 0 : _errors$quiz2$styling.questions_display_per_page) && (errors === null || errors === void 0 ? void 0 : (_errors$quiz3 = errors.quiz) === null || _errors$quiz3 === void 0 ? void 0 : (_errors$quiz3$styling = _errors$quiz3.styling) === null || _errors$quiz3$styling === void 0 ? void 0 : _errors$quiz3$styling.questions_display_per_page.message))))))));
};

/* harmony default export */ const components_QuizSettings = (QuizSettings);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/settings/components/SingleCourseSettings.tsx








var SingleCourseSettings = function SingleCourseSettings(props) {
  var _singleCourseData$dis;

  var singleCourseData = props.singleCourseData;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register;

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, {
    orientation: "vertical"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
    sx: tabListStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Display', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, {
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Enable Review', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Display review tab in single course page.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({}, register('single_course.display.enable_review'), {
    defaultChecked: singleCourseData === null || singleCourseData === void 0 ? void 0 : (_singleCourseData$dis = singleCourseData.display) === null || _singleCourseData$dis === void 0 ? void 0 : _singleCourseData$dis.enable_review
  })))))))));
};

/* harmony default export */ const components_SingleCourseSettings = (SingleCourseSettings);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/settings/Settings.tsx























var Settings = function Settings() {
  var settingsApi = new api(constants_urls.settings);
  var methods = (0,dist_index_esm/* useForm */.cI)({
    reValidateMode: 'onChange',
    mode: 'onChange'
  });
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var queryClient = (0,es.useQueryClient)();
  var tabStyles = {
    fontWeight: 'medium',
    py: ['2', '4'],
    fontSize: ['xs', null, 'sm'],
    px: ['1', '2', '4']
  };
  var tabPanelStyles = {
    px: '0',
    py: 8
  };
  var settingsQuery = (0,es.useQuery)('settings', function () {
    return settingsApi.list();
  });
  var updateSettings = (0,es.useMutation)(function (data) {
    return settingsApi.store(data);
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Settings Updated.', 'masteriyo'),
        status: 'success',
        isClosable: true
      });
      queryClient.invalidateQueries("settings");
    }
  });

  var onSubmit = function onSubmit(data) {
    try {
      updateSettings.mutate(deepClean(data));
    } catch (err) {}
  };

  if (settingsQuery.isSuccess) {
    var _settingsQuery$data, _settingsQuery$data2, _settingsQuery$data3, _settingsQuery$data4, _settingsQuery$data5, _settingsQuery$data6, _settingsQuery$data7, _settingsQuery$data8;

    return /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, methods, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8",
      width: "full",
      alignItems: "center"
    }, /*#__PURE__*/external_React_default().createElement(common_Header, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, {
      d: "flex"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
      mb: "0"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
      as: react_router_dom/* NavLink */.OL,
      sx: navLinkStyles,
      _activeLink: navActiveStyles,
      _hover: {
        color: 'blue.500'
      },
      to: constants_routes.settings
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
      as: index_esm/* BiCog */.MBj
    }), (0,external_wp_i18n_namespaceObject.__)('Settings', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
      maxW: "container.xl"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      bg: "white",
      p: ['4', null, '10'],
      shadow: "box"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
      justifyContent: "center",
      borderBottom: "1px",
      flexWrap: "wrap"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('General', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Courses Page', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Single Course Page', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Learn Page', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Payments', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Quiz', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Emails', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Advanced', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement("form", {
      onSubmit: methods.handleSubmit(onSubmit)
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      sx: tabPanelStyles
    }, /*#__PURE__*/external_React_default().createElement(components_GeneralSettings, {
      generalData: settingsQuery === null || settingsQuery === void 0 ? void 0 : (_settingsQuery$data = settingsQuery.data) === null || _settingsQuery$data === void 0 ? void 0 : _settingsQuery$data.general
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      sx: tabPanelStyles
    }, /*#__PURE__*/external_React_default().createElement(components_CourseArchiveSettings, {
      courseArchiveData: settingsQuery === null || settingsQuery === void 0 ? void 0 : (_settingsQuery$data2 = settingsQuery.data) === null || _settingsQuery$data2 === void 0 ? void 0 : _settingsQuery$data2.course_archive
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      sx: tabPanelStyles
    }, /*#__PURE__*/external_React_default().createElement(components_SingleCourseSettings, {
      singleCourseData: settingsQuery === null || settingsQuery === void 0 ? void 0 : (_settingsQuery$data3 = settingsQuery.data) === null || _settingsQuery$data3 === void 0 ? void 0 : _settingsQuery$data3.single_course
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      sx: tabPanelStyles
    }, /*#__PURE__*/external_React_default().createElement(components_LearningPageSettings, {
      learningPageData: settingsQuery === null || settingsQuery === void 0 ? void 0 : (_settingsQuery$data4 = settingsQuery.data) === null || _settingsQuery$data4 === void 0 ? void 0 : _settingsQuery$data4.learn_page
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      sx: tabPanelStyles
    }, /*#__PURE__*/external_React_default().createElement(components_PaymentsSettings, {
      paymentsData: settingsQuery === null || settingsQuery === void 0 ? void 0 : (_settingsQuery$data5 = settingsQuery.data) === null || _settingsQuery$data5 === void 0 ? void 0 : _settingsQuery$data5.payments
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      sx: tabPanelStyles
    }, /*#__PURE__*/external_React_default().createElement(components_QuizSettings, {
      quizData: settingsQuery === null || settingsQuery === void 0 ? void 0 : (_settingsQuery$data6 = settingsQuery.data) === null || _settingsQuery$data6 === void 0 ? void 0 : _settingsQuery$data6.quiz
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      sx: tabPanelStyles
    }, /*#__PURE__*/external_React_default().createElement(EmailSettings, {
      emailData: settingsQuery === null || settingsQuery === void 0 ? void 0 : (_settingsQuery$data7 = settingsQuery.data) === null || _settingsQuery$data7 === void 0 ? void 0 : _settingsQuery$data7.emails
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      sx: tabPanelStyles
    }, /*#__PURE__*/external_React_default().createElement(components_AdvancedSettings, {
      advanceData: settingsQuery === null || settingsQuery === void 0 ? void 0 : (_settingsQuery$data8 = settingsQuery.data) === null || _settingsQuery$data8 === void 0 ? void 0 : _settingsQuery$data8.advance
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      colorScheme: "blue",
      type: "submit",
      isLoading: updateSettings.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Save Settings', 'masteriyo')))))))));
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const settings_Settings = (Settings);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/users/components/instructors/AddInstructor.tsx

















var AddInstructor = function AddInstructor() {
  var _errors$password, _errors$first_name, _errors$last_name, _errors$nickname, _errors$email, _errors$url;

  var history = (0,react_router/* useHistory */.k6)();
  var formMethods = (0,dist_index_esm/* useForm */.cI)();
  var handleSubmit = formMethods.handleSubmit,
      register = formMethods.register,
      errors = formMethods.formState.errors;
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var queryClient = (0,es.useQueryClient)();
  var userAPI = new api(constants_urls.instructors);
  var createUser = (0,es.useMutation)(function (data) {
    return userAPI.store(data);
  }, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries('instructorsList');
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('New instructor added successfully.', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
      history.push(constants_routes.users.instructors.list);
    },
    onError: function onError(error) {
      toast({
        title: error === null || error === void 0 ? void 0 : error.message,
        isClosable: true,
        status: 'error'
      });
    }
  });

  var onSubmit = function onSubmit(data) {
    createUser.mutate(deepClean(deepMerge(data, {
      status: data.status ? UserStatus.Active : UserStatus.Inactive,
      role: 'masteriyo_instructor'
    })));
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(common_Header, {
    showLinks: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* NavLink */.OL,
    sx: navLinkStyles,
    isActive: function isActive() {
      return location.hash.includes('/users/');
    },
    _activeLink: navActiveStyles,
    to: constants_routes.users.instructors.add
  }, (0,external_wp_i18n_namespaceObject.__)('Add New Instructor', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl",
    mt: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.users.instructors.list
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "link",
    _hover: {
      color: 'blue.500'
    },
    leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      fontSize: "xl",
      as: index_esm/* BiChevronLeft */.gbs
    })
  }, (0,external_wp_i18n_namespaceObject.__)('Back to Instructors', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    p: "10",
    shadow: "box"
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, formMethods, /*#__PURE__*/external_React_default().createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    py: "3",
    spacing: "3",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    as: "h2",
    fontSize: "lg"
  }, (0,external_wp_i18n_namespaceObject.__)('Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Username', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('You cannot change username later.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, register('username'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Password', 'masteriyo'), /*#__PURE__*/external_React_default().createElement("span", {
    style: {
      color: 'red'
    },
    className: "required"
  }, "*")), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "password"
  }, register('password', {
    required: (0,external_wp_i18n_namespaceObject.__)('Password is required.', 'masteriyo')
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.password) && (errors === null || errors === void 0 ? void 0 : (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.first_name)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('First Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, register('first_name')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.first_name) && (errors === null || errors === void 0 ? void 0 : (_errors$first_name = errors.first_name) === null || _errors$first_name === void 0 ? void 0 : _errors$first_name.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.last_name)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Last Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, register('last_name')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.last_name) && (errors === null || errors === void 0 ? void 0 : (_errors$last_name = errors.last_name) === null || _errors$last_name === void 0 ? void 0 : _errors$last_name.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.nickname)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Nickname', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, register('nickname')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.nickname) && (errors === null || errors === void 0 ? void 0 : (_errors$nickname = errors.nickname) === null || _errors$nickname === void 0 ? void 0 : _errors$nickname.message)))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    py: "3",
    spacing: "3",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    as: "h2",
    fontSize: "lg"
  }, (0,external_wp_i18n_namespaceObject.__)('Contact Info', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.email)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Email address', 'masteriyo'), /*#__PURE__*/external_React_default().createElement("span", {
    style: {
      color: 'red'
    },
    className: "required"
  }, "*")), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "email"
  }, register('email', {
    required: (0,external_wp_i18n_namespaceObject.__)('Email is required.', 'masteriyo')
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.email) && (errors === null || errors === void 0 ? void 0 : (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.url)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Website URL', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "url"
  }, register('url'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.url) && (errors === null || errors === void 0 ? void 0 : (_errors$url = errors.url) === null || _errors$url === void 0 ? void 0 : _errors$url.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    align: "flex-start"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Approved', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Approve or unapprove the user as instructor.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({
    colorScheme: "green"
  }, register('status'))))))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    py: "3"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "blue",
    type: "submit",
    isLoading: createUser.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Add Instructor', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "outline",
    isDisabled: createUser.isLoading,
    onClick: function onClick() {
      return history.push(constants_routes.users.instructors.list);
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo'))))))))));
};

/* harmony default export */ const instructors_AddInstructor = (AddInstructor);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/users/components/instructors/EditInstructor.tsx


















var EditInstructor = function EditInstructor() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      userId = _useParams.userId;

  var history = (0,react_router/* useHistory */.k6)();
  var formMethods = (0,dist_index_esm/* useForm */.cI)();
  var handleSubmit = formMethods.handleSubmit,
      register = formMethods.register,
      errors = formMethods.formState.errors;
  var userAPI = new api(constants_urls.instructors);
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var queryClient = (0,es.useQueryClient)();
  var userQuery = (0,es.useQuery)(["user".concat(userId), userId], function () {
    return userAPI.get(userId);
  }, {
    onError: function onError() {
      history.push(constants_routes.notFound);
    }
  });
  var updateUser = (0,es.useMutation)(function (data) {
    return userAPI.update(userId, data);
  }, {
    onSuccess: function onSuccess(data) {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('User updated successfully.', 'masteriyo'),
        description: "#".concat(data.id, " ").concat((0,external_wp_i18n_namespaceObject.__)(' has been updated successfully.', 'masteriyo')),
        isClosable: true,
        status: 'success'
      });
      queryClient.invalidateQueries("user".concat(userId));
    },
    onError: function onError(error) {
      var _error$response, _error$response$data;

      toast({
        description: "".concat((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message),
        isClosable: true,
        status: 'error'
      });
    }
  });

  var onSubmit = function onSubmit(data) {
    updateUser.mutate(deepClean(deepMerge(data, {
      status: data.status ? UserStatus.Active : UserStatus.Inactive
    })));
  };

  if (userQuery.isSuccess) {
    var _userQuery$data, _userQuery$data2, _errors$first_name, _userQuery$data3, _errors$last_name, _userQuery$data4, _errors$nickname, _userQuery$data5, _errors$email, _userQuery$data6, _errors$url, _userQuery$data7;

    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8",
      alignItems: "center"
    }, /*#__PURE__*/external_React_default().createElement(common_Header, {
      showLinks: true
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
      as: react_router_dom/* NavLink */.OL,
      sx: navLinkStyles,
      isActive: function isActive() {
        return location.hash.includes('/users/');
      },
      _activeLink: navActiveStyles,
      to: constants_routes.users.instructors.list
    }, (0,external_wp_i18n_namespaceObject.__)('Edit Instructor', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
      maxW: "container.xl",
      mt: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
      to: constants_routes.users.instructors.list
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      variant: "link",
      _hover: {
        color: 'blue.500'
      },
      leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        fontSize: "xl",
        as: index_esm/* BiChevronLeft */.gbs
      })
    }, (0,external_wp_i18n_namespaceObject.__)('Back to Instructors', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      bg: "white",
      p: "10",
      shadow: "box"
    }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, formMethods, /*#__PURE__*/external_React_default().createElement("form", {
      onSubmit: handleSubmit(onSubmit)
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      flexGrow: 1,
      py: 3
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      as: "h2",
      fontSize: "lg"
    }, (0,external_wp_i18n_namespaceObject.__)('Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Username', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Username cannot be changed.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, {
      defaultValue: userQuery === null || userQuery === void 0 ? void 0 : (_userQuery$data = userQuery.data) === null || _userQuery$data === void 0 ? void 0 : _userQuery$data.username,
      disabled: true
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && errors.first_name),
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('First Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      defaultValue: userQuery === null || userQuery === void 0 ? void 0 : (_userQuery$data2 = userQuery.data) === null || _userQuery$data2 === void 0 ? void 0 : _userQuery$data2.first_name
    }, register('first_name'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.first_name) && (errors === null || errors === void 0 ? void 0 : (_errors$first_name = errors.first_name) === null || _errors$first_name === void 0 ? void 0 : _errors$first_name.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && errors.last_name),
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Last Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      defaultValue: userQuery === null || userQuery === void 0 ? void 0 : (_userQuery$data3 = userQuery.data) === null || _userQuery$data3 === void 0 ? void 0 : _userQuery$data3.last_name
    }, register('last_name'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.last_name) && (errors === null || errors === void 0 ? void 0 : (_errors$last_name = errors.last_name) === null || _errors$last_name === void 0 ? void 0 : _errors$last_name.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && errors.nickname),
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Nickname', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      defaultValue: userQuery === null || userQuery === void 0 ? void 0 : (_userQuery$data4 = userQuery.data) === null || _userQuery$data4 === void 0 ? void 0 : _userQuery$data4.nickname
    }, register('nickname'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.nickname) && (errors === null || errors === void 0 ? void 0 : (_errors$nickname = errors.nickname) === null || _errors$nickname === void 0 ? void 0 : _errors$nickname.message)))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      flexGrow: 1,
      py: 3
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      as: "h2",
      fontSize: "lg"
    }, (0,external_wp_i18n_namespaceObject.__)('Contact Info', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && errors.email),
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Email address', 'masteriyo'), /*#__PURE__*/external_React_default().createElement("span", {
      style: {
        color: 'red'
      },
      className: "required"
    }, "*")), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "email",
      defaultValue: userQuery === null || userQuery === void 0 ? void 0 : (_userQuery$data5 = userQuery.data) === null || _userQuery$data5 === void 0 ? void 0 : _userQuery$data5.email
    }, register('email', {
      required: (0,external_wp_i18n_namespaceObject.__)('Email is required.', 'masteriyo')
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.email) && (errors === null || errors === void 0 ? void 0 : (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && errors.url),
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Website URL', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "url",
      defaultValue: userQuery === null || userQuery === void 0 ? void 0 : (_userQuery$data6 = userQuery.data) === null || _userQuery$data6 === void 0 ? void 0 : _userQuery$data6.url
    }, register('url'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.url) && (errors === null || errors === void 0 ? void 0 : (_errors$url = errors.url) === null || _errors$url === void 0 ? void 0 : _errors$url.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      align: "flex-start"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Approved', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Approve or unapprove the user as instructor.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_switch_esm/* Switch */.r, (0,esm_extends/* default */.Z)({
      colorScheme: "green"
    }, register('status'), {
      defaultChecked: UserStatus.Active === (userQuery === null || userQuery === void 0 ? void 0 : (_userQuery$data7 = userQuery.data) === null || _userQuery$data7 === void 0 ? void 0 : _userQuery$data7.status)
    })))))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      colorScheme: "blue",
      type: "submit",
      isLoading: updateUser.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Update', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      variant: "outline",
      onClick: function onClick() {
        return history.push(constants_routes.users.instructors.list);
      },
      isDisabled: updateUser.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo'))))))))));
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const instructors_EditInstructor = (EditInstructor);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/users/UserHeader.tsx









var UserHeader = function UserHeader(props) {
  var location = (0,react_router/* useLocation */.TH)();
  return /*#__PURE__*/external_React_default().createElement(common_Header, {
    showLinks: true,
    thirdBtn: props.thirdBtn
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, {
    d: "flex"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    mb: "0"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* NavLink */.OL,
    sx: navLinkStyles,
    _activeLink: navActiveStyles,
    to: constants_routes.users.students.list
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: fa_index_esm/* FaUserFriends */.wN
  }), (0,external_wp_i18n_namespaceObject.__)('Students', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, {
    mb: "0"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* NavLink */.OL,
    sx: navLinkStyles,
    isActive: function isActive() {
      return location.pathname.includes('/instructors');
    },
    _activeLink: navActiveStyles,
    to: constants_routes.users.instructors.list
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListIcon */.DE, {
    as: fa_index_esm/* FaUserTie */.$yZ
  }), (0,external_wp_i18n_namespaceObject.__)('Instructors', 'masteriyo')))));
};

/* harmony default export */ const users_UserHeader = (UserHeader);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/users/components/instructors/InstructorList.tsx
















var InstructorList = function InstructorList(props) {
  var data = props.data;

  var _useState = (0,external_React_.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isDeleteModalOpen = _useState2[0],
      setDeleteModalOpen = _useState2[1];

  var queryClient = (0,es.useQueryClient)();
  var usersAPI = new api(constants_urls.instructors);
  var allUsersAPI = new api(constants_urls.users);
  var cancelDeleteModalRef = (0,external_React_.useRef)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();

  var _useState3 = (0,external_React_.useState)(0),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      reassignID = _useState4[0],
      setReassignID = _useState4[1];

  var usersQuery = (0,es.useQuery)('allUsers', function () {
    return allUsersAPI.list({
      per_page: -1,
      order: 'asc',
      orderby: 'display_name'
    });
  }, {
    onSuccess: function onSuccess(data) {
      var _data$data, _data$data$;

      // Set first user id to reassign ID as it is selected on top of option.
      setReassignID((data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : (_data$data$ = _data$data[0]) === null || _data$data$ === void 0 ? void 0 : _data$data$.id) || 0);
    }
  });

  var renderUsersOption = function renderUsersOption() {
    try {
      var _usersQuery$data;

      return usersQuery === null || usersQuery === void 0 ? void 0 : (_usersQuery$data = usersQuery.data) === null || _usersQuery$data === void 0 ? void 0 : _usersQuery$data.data.map(function (user) {
        // Do not include same user in the users option.
        if (user.id === data.id) {
          return;
        }

        return /*#__PURE__*/external_React_default().createElement("option", {
          value: user.id,
          key: user.id
        }, user.display_name, " (", user.nicename, ")");
      });
    } catch (error) {
      return;
    }
  };

  var deleteUser = (0,es.useMutation)(function (id) {
    return usersAPI["delete"](id, {
      reassign: reassignID
    });
  }, {
    onSuccess: function onSuccess() {
      setDeleteModalOpen(false);
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('User deleted successfully.', 'masteriyo'),
        description: "#".concat(data.id, " ").concat((0,external_wp_i18n_namespaceObject.__)(' has been deleted successfully.', 'masteriyo')),
        isClosable: true,
        status: 'success'
      });
      queryClient.invalidateQueries('instructorsList');
    }
  });

  var onDeletePress = function onDeletePress() {
    setDeleteModalOpen(true);
  };

  var onDeleteModalClose = function onDeleteModalClose() {
    setDeleteModalOpen(false);
  };

  var onDeleteConfirm = function onDeleteConfirm() {
    deleteUser.mutate(data === null || data === void 0 ? void 0 : data.id);
  };

  return /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* Link */.rU,
    to: constants_routes.users.instructors.edit.replace(':userId', data === null || data === void 0 ? void 0 : data.id.toString()),
    fontWeight: "semibold",
    fontSize: "sm",
    _hover: {
      color: 'blue.500'
    }
  }, "#".concat(data === null || data === void 0 ? void 0 : data.id, " ").concat(data === null || data === void 0 ? void 0 : data.first_name, " ").concat(data === null || data === void 0 ? void 0 : data.last_name), ' '), UserStatus.Active === (data === null || data === void 0 ? void 0 : data.status) ? /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Approved Instructor', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    boxSize: "3",
    as: fa_index_esm/* FaCheckCircle */.FJM,
    color: "green"
  }))) : /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('Pending Approval', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    boxSize: "3",
    as: fa_index_esm/* FaCheckCircle */.FJM
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "xs",
    color: "gray.600"
  }, data === null || data === void 0 ? void 0 : data.display_name))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "sm",
    color: "gray.600"
  }, data === null || data === void 0 ? void 0 : data.email)), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "2",
    alignItems: "center",
    color: "gray.600"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiCalendar */.R1q
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "sm",
    color: "gray.600"
  }, getLocalTime(data === null || data === void 0 ? void 0 : data.date_created).toLocaleString()))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.users.instructors.edit.replace(':userId', data === null || data === void 0 ? void 0 : data.id.toString())
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    leftIcon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiEdit */.Hlf, null),
    colorScheme: "blue",
    size: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Edit', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
    placement: "bottom-end"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
    as: chakra_ui_button_esm/* IconButton */.hU,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    size: "xs"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: onDeletePress,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null)
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
    isOpen: isDeleteModalOpen,
    onClose: onDeleteModalClose,
    isCentered: true,
    size: "xl",
    leastDestructiveRef: cancelDeleteModalRef
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.__)('Delete User', 'masteriyo'), " ", data === null || data === void 0 ? void 0 : data.display_name), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "14px"
  }, (0,external_wp_i18n_namespaceObject.__)('What should be done with content owned by this user?', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* RadioGroup */.Ee, {
    defaultValue: "reassign",
    mt: "4",
    mb: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    spacing: "3"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* HStack */.Ug, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
    value: "reassign",
    onChange: function onChange() {
      return queryClient.invalidateQueries('allUsers');
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, (0,external_wp_i18n_namespaceObject.__)('Attribute all content to:', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, {
    size: "sm",
    w: "xs",
    value: reassignID,
    bg: "none !important",
    onChange: function onChange(e) {
      return setReassignID(e.target.value);
    }
  }, renderUsersOption())), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
    value: "",
    onChange: function onChange() {
      return setReassignID(0);
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    color: "red.400"
  }, (0,external_wp_i18n_namespaceObject.__)('Delete all content.', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "12px",
    color: "gray.500"
  }, (0,external_wp_i18n_namespaceObject.__)('*Please note that all course progresses and quiz attempts of this user will be deleted and cannot be transfer.', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    ref: cancelDeleteModalRef,
    onClick: onDeleteModalClose,
    variant: "outline"
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "red",
    onClick: onDeleteConfirm,
    isLoading: deleteUser.isLoading || usersQuery.isFetching
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo')))))))));
};

/* harmony default export */ const instructors_InstructorList = (InstructorList);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/users/components/instructors/InstructorsFilter.tsx










var InstructorsFilter = function InstructorsFilter(props) {
  var setFilterParams = props.setFilterParams,
      filterParams = props.filterParams;

  var _useForm = (0,dist_index_esm/* useForm */.cI)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var _useMediaQuery = (0,chakra_ui_media_query_esm/* useMediaQuery */.ac)('(min-width: 48em)'),
      _useMediaQuery2 = (0,slicedToArray/* default */.Z)(_useMediaQuery, 1),
      isMobile = _useMediaQuery2[0];

  var onSearchInput = (0,index_es/* useOnType */.H)({
    onTypeFinish: function onTypeFinish(val) {
      setFilterParams({
        search: val,
        approved: filterParams.approved
      });
    }
  }, 800);

  var _useState = (0,external_React_.useState)(isMobile),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var onChange = function onChange(data) {
    setFilterParams(deepClean(deepMerge(data, {
      search: filterParams.search
    })));
  };

  (0,external_React_.useEffect)(function () {
    setIsOpen(isMobile);
  }, [isMobile]);
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    px: {
      base: 6,
      md: 12
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    justify: "end"
  }, !isMobile && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('toggle filter', 'masteriyo'),
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
    "in": isOpen
  }, /*#__PURE__*/external_React_default().createElement("form", {
    onChange: handleSubmit(onChange)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: ['column', null, 'row'],
    spacing: "4",
    mt: [6, null, 0]
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_select_esm/* Select */.Ph, (0,esm_extends/* default */.Z)({}, register('approved'), {
    w: "44"
  }), /*#__PURE__*/external_React_default().createElement("option", {
    value: ""
  }, (0,external_wp_i18n_namespaceObject.__)('All', 'masteriyo')), /*#__PURE__*/external_React_default().createElement("option", {
    value: "true"
  }, (0,external_wp_i18n_namespaceObject.__)('Approved', 'masteriyo')), /*#__PURE__*/external_React_default().createElement("option", {
    value: "false"
  }, (0,external_wp_i18n_namespaceObject.__)('Unapproved', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Search by username or email', 'masteriyo')
  }, onSearchInput))))));
};

/* harmony default export */ const instructors_InstructorsFilter = (InstructorsFilter);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/users/components/instructors/Instructors.tsx




















var Instructors = function Instructors() {
  var _usersQuery$data, _usersQuery$data2, _usersQuery$data2$dat, _usersQuery$data3, _usersQuery$data4;

  var _useState = (0,external_React_.useState)({
    order: 'desc',
    orderby: 'id'
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      filterParams = _useState2[0],
      setFilterParams = _useState2[1];

  var usersAPI = new api(constants_urls.instructors);
  var usersQuery = (0,es.useQuery)(['instructorsList', filterParams], function () {
    return usersAPI.list(filterParams);
  }, {
    keepPreviousData: true
  });
  var history = (0,react_router/* useHistory */.k6)();

  var filterInstructorsBy = function filterInstructorsBy(order, orderBy) {
    return setFilterParams(deepMerge({
      filterParams: filterParams,
      order: order,
      orderby: orderBy
    }));
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(users_UserHeader, {
    thirdBtn: {
      label: (0,external_wp_i18n_namespaceObject.__)('Add New Instructor', 'masteriyo'),
      action: function action() {
        return history.push(constants_routes.users.instructors.add);
      },
      icon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        as: index_esm/* BiPlus */.poH,
        fontSize: "md"
      })
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    py: {
      base: 6,
      md: 12
    },
    shadow: "box",
    mx: "auto"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(instructors_InstructorsFilter, {
    setFilterParams: setFilterParams,
    filterParams: filterParams
  }), /*#__PURE__*/external_React_default().createElement(dist/* Table */.iA, null, /*#__PURE__*/external_React_default().createElement(dist/* Thead */.hr, null, /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Th, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, (0,external_wp_i18n_namespaceObject.__)('Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column"
  }, (filterParams === null || filterParams === void 0 ? void 0 : filterParams.order) === 'desc' ? /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: md_index_esm/* MdOutlineArrowDropUp */.IVI,
    h: 6,
    w: 6,
    cursor: "pointer",
    color: "lightgray",
    transition: "1s",
    _hover: {
      color: 'black'
    },
    onClick: function onClick() {
      return filterInstructorsBy('asc', 'name');
    }
  }) : /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: md_index_esm/* MdOutlineArrowDropDown */.FIC,
    h: 6,
    w: 6,
    cursor: "pointer",
    color: "lightgray",
    transition: "1s",
    _hover: {
      color: 'black'
    },
    onClick: function onClick() {
      return filterInstructorsBy('desc', 'name');
    }
  })))), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Email', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Registered On', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Actions', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(dist/* Tbody */.p3, null, usersQuery.isLoading && /*#__PURE__*/external_React_default().createElement(SkeletonInstructorsList, null), usersQuery.isSuccess && isEmpty(usersQuery === null || usersQuery === void 0 ? void 0 : (_usersQuery$data = usersQuery.data) === null || _usersQuery$data === void 0 ? void 0 : _usersQuery$data.data) ? /*#__PURE__*/external_React_default().createElement(common_EmptyInfo, {
    message: (0,external_wp_i18n_namespaceObject.__)('No instructors found.', 'masteriyo')
  }) : usersQuery === null || usersQuery === void 0 ? void 0 : (_usersQuery$data2 = usersQuery.data) === null || _usersQuery$data2 === void 0 ? void 0 : (_usersQuery$data2$dat = _usersQuery$data2.data) === null || _usersQuery$data2$dat === void 0 ? void 0 : _usersQuery$data2$dat.map(function (user) {
    return /*#__PURE__*/external_React_default().createElement(instructors_InstructorList, {
      key: user === null || user === void 0 ? void 0 : user.id,
      data: user
    });
  }))))), usersQuery.isSuccess && !isEmpty(usersQuery === null || usersQuery === void 0 ? void 0 : (_usersQuery$data3 = usersQuery.data) === null || _usersQuery$data3 === void 0 ? void 0 : _usersQuery$data3.data) && /*#__PURE__*/external_React_default().createElement(common_MasteriyoPagination, {
    metaData: usersQuery === null || usersQuery === void 0 ? void 0 : (_usersQuery$data4 = usersQuery.data) === null || _usersQuery$data4 === void 0 ? void 0 : _usersQuery$data4.meta,
    setFilterParams: setFilterParams,
    perPageText: (0,external_wp_i18n_namespaceObject.__)('Instructors Per Page:', 'masteriyo'),
    extraFilterParams: {
      approved: filterParams.approved,
      search: filterParams.search,
      order: filterParams === null || filterParams === void 0 ? void 0 : filterParams.order,
      orderby: filterParams === null || filterParams === void 0 ? void 0 : filterParams.orderby
    }
  })));
};

/* harmony default export */ const instructors_Instructors = (Instructors);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/users/components/students/AddStudent.tsx



function AddStudent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function AddStudent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AddStudent_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AddStudent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
















var AddStudent = function AddStudent() {
  var _errors$password, _errors$first_name, _errors$last_name, _errors$nickname, _errors$email, _errors$url;

  var history = (0,react_router/* useHistory */.k6)();
  var formMethods = (0,dist_index_esm/* useForm */.cI)();
  var handleSubmit = formMethods.handleSubmit,
      register = formMethods.register,
      errors = formMethods.formState.errors;
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var queryClient = (0,es.useQueryClient)();
  var userAPI = new api(constants_urls.users);
  var createUser = (0,es.useMutation)(function (data) {
    return userAPI.store(data);
  }, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries('usersList');
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('New student added successfully.', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
      history.push(constants_routes.users.students.list);
    },
    onError: function onError(error) {
      toast({
        title: error === null || error === void 0 ? void 0 : error.message,
        isClosable: true,
        status: 'error'
      });
    }
  });

  var onSubmit = function onSubmit(data) {
    createUser.mutate(deepClean(AddStudent_objectSpread(AddStudent_objectSpread({}, data), {}, {
      role: 'masteriyo_student'
    })));
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(common_Header, {
    showLinks: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* NavLink */.OL,
    sx: navLinkStyles,
    isActive: function isActive() {
      return location.hash.includes('/users/');
    },
    _activeLink: navActiveStyles,
    to: constants_routes.users.students.add
  }, (0,external_wp_i18n_namespaceObject.__)('Add New Student', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl",
    mt: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.users.students.list
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "link",
    _hover: {
      color: 'blue.500'
    },
    leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      fontSize: "xl",
      as: index_esm/* BiChevronLeft */.gbs
    })
  }, (0,external_wp_i18n_namespaceObject.__)('Back to Students', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    p: "10",
    shadow: "box"
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, formMethods, /*#__PURE__*/external_React_default().createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    py: "3",
    spacing: "3",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    as: "h2",
    fontSize: "lg"
  }, (0,external_wp_i18n_namespaceObject.__)('Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Username', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
    label: (0,external_wp_i18n_namespaceObject.__)('You cannot change username later.', 'masteriyo'),
    hasArrow: true,
    fontSize: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    as: "span",
    sx: infoIconStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiInfoCircle */.Fs0
  })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, register('username'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Password', 'masteriyo'), /*#__PURE__*/external_React_default().createElement("span", {
    style: {
      color: 'red'
    },
    className: "required"
  }, "*")), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "password"
  }, register('password', {
    required: (0,external_wp_i18n_namespaceObject.__)('Password is required.', 'masteriyo')
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.password) && (errors === null || errors === void 0 ? void 0 : (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.first_name)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('First Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, register('first_name')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.first_name) && (errors === null || errors === void 0 ? void 0 : (_errors$first_name = errors.first_name) === null || _errors$first_name === void 0 ? void 0 : _errors$first_name.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.last_name)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Last Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, register('last_name')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.last_name) && (errors === null || errors === void 0 ? void 0 : (_errors$last_name = errors.last_name) === null || _errors$last_name === void 0 ? void 0 : _errors$last_name.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.nickname)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Nickname', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, register('nickname')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.nickname) && (errors === null || errors === void 0 ? void 0 : (_errors$nickname = errors.nickname) === null || _errors$nickname === void 0 ? void 0 : _errors$nickname.message)))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    spacing: "3",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    as: "h2",
    fontSize: "lg"
  }, (0,external_wp_i18n_namespaceObject.__)('Contact Info', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.email)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Email address', 'masteriyo'), /*#__PURE__*/external_React_default().createElement("span", {
    style: {
      color: 'red'
    },
    className: "required"
  }, "*")), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "email"
  }, register('email', {
    required: (0,external_wp_i18n_namespaceObject.__)('Email is required.', 'masteriyo')
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.email) && (errors === null || errors === void 0 ? void 0 : (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.url)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Website URL', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "url"
  }, register('url'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.url) && (errors === null || errors === void 0 ? void 0 : (_errors$url = errors.url) === null || _errors$url === void 0 ? void 0 : _errors$url.message))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    py: "3"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "blue",
    type: "submit",
    isLoading: createUser.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Add Student', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    variant: "outline",
    onClick: function onClick() {
      return history.push(constants_routes.users.students.list);
    },
    isDisabled: createUser.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo'))))))))));
};

/* harmony default export */ const students_AddStudent = (AddStudent);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/users/components/students/EditStudent.tsx

















var EditStudent = function EditStudent() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      userId = _useParams.userId;

  var history = (0,react_router/* useHistory */.k6)();
  var formMethods = (0,dist_index_esm/* useForm */.cI)();
  var handleSubmit = formMethods.handleSubmit,
      register = formMethods.register,
      errors = formMethods.formState.errors;
  var userAPI = new api(constants_urls.users);
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var userQuery = (0,es.useQuery)(["user".concat(userId), userId], function () {
    return userAPI.get(userId);
  }, {
    onError: function onError() {
      history.push(constants_routes.notFound);
    }
  });
  var updateUser = (0,es.useMutation)(function (data) {
    return userAPI.update(userId, data);
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('User updated', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
    },
    onError: function onError(error) {
      var _error$response, _error$response$data;

      toast({
        description: "".concat((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message),
        isClosable: true,
        status: 'error'
      });
    }
  });

  var onSubmit = function onSubmit(data) {
    updateUser.mutate(deepClean(data));
  };

  if (userQuery.isSuccess) {
    var _userQuery$data, _userQuery$data2, _errors$first_name, _userQuery$data3, _errors$last_name, _userQuery$data4, _errors$nickname, _userQuery$data5, _errors$email, _userQuery$data6, _errors$url;

    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8",
      alignItems: "center"
    }, /*#__PURE__*/external_React_default().createElement(common_Header, {
      showLinks: true
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* List */.aV, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* ListItem */.HC, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
      as: react_router_dom/* NavLink */.OL,
      sx: navLinkStyles,
      isActive: function isActive() {
        return location.hash.includes('/users/');
      },
      _activeLink: navActiveStyles,
      to: constants_routes.users.students.list
    }, (0,external_wp_i18n_namespaceObject.__)('Edit Student', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
      maxW: "container.xl",
      mt: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
      to: constants_routes.users.students.list
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      variant: "link",
      _hover: {
        color: 'blue.500'
      },
      leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        fontSize: "xl",
        as: index_esm/* BiChevronLeft */.gbs
      })
    }, (0,external_wp_i18n_namespaceObject.__)('Back to Students', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      bg: "white",
      p: "10",
      shadow: "box"
    }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, formMethods, /*#__PURE__*/external_React_default().createElement("form", {
      onSubmit: handleSubmit(onSubmit)
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      flexGrow: 1,
      py: 3
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      as: "h2",
      fontSize: "lg"
    }, (0,external_wp_i18n_namespaceObject.__)('Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Username', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_tooltip_esm/* Tooltip */.u, {
      label: (0,external_wp_i18n_namespaceObject.__)('Username cannot be changed.', 'masteriyo'),
      hasArrow: true,
      fontSize: "xs"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      as: "span",
      sx: infoIconStyles
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiInfoCircle */.Fs0
    })))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, {
      defaultValue: userQuery === null || userQuery === void 0 ? void 0 : (_userQuery$data = userQuery.data) === null || _userQuery$data === void 0 ? void 0 : _userQuery$data.username,
      disabled: true
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && errors.first_name),
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('First Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      defaultValue: userQuery === null || userQuery === void 0 ? void 0 : (_userQuery$data2 = userQuery.data) === null || _userQuery$data2 === void 0 ? void 0 : _userQuery$data2.first_name
    }, register('first_name'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.first_name) && (errors === null || errors === void 0 ? void 0 : (_errors$first_name = errors.first_name) === null || _errors$first_name === void 0 ? void 0 : _errors$first_name.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && errors.last_name),
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Last Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      defaultValue: userQuery === null || userQuery === void 0 ? void 0 : (_userQuery$data3 = userQuery.data) === null || _userQuery$data3 === void 0 ? void 0 : _userQuery$data3.last_name
    }, register('last_name'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.last_name) && (errors === null || errors === void 0 ? void 0 : (_errors$last_name = errors.last_name) === null || _errors$last_name === void 0 ? void 0 : _errors$last_name.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && errors.nickname),
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Nickname', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      defaultValue: userQuery === null || userQuery === void 0 ? void 0 : (_userQuery$data4 = userQuery.data) === null || _userQuery$data4 === void 0 ? void 0 : _userQuery$data4.nickname
    }, register('nickname'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.nickname) && (errors === null || errors === void 0 ? void 0 : (_errors$nickname = errors.nickname) === null || _errors$nickname === void 0 ? void 0 : _errors$nickname.message)))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      flexGrow: 1,
      py: 3
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      as: "h2",
      fontSize: "lg"
    }, (0,external_wp_i18n_namespaceObject.__)('Contact Info', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && errors.email),
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Email address', 'masteriyo'), /*#__PURE__*/external_React_default().createElement("span", {
      style: {
        color: 'red'
      },
      className: "required"
    }, "*")), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "email",
      defaultValue: userQuery === null || userQuery === void 0 ? void 0 : (_userQuery$data5 = userQuery.data) === null || _userQuery$data5 === void 0 ? void 0 : _userQuery$data5.email
    }, register('email', {
      required: (0,external_wp_i18n_namespaceObject.__)('Email is required.', 'masteriyo')
    }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.email) && (errors === null || errors === void 0 ? void 0 : (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
      isInvalid: !!(errors !== null && errors !== void 0 && errors.url),
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Website URL', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
      type: "url",
      defaultValue: userQuery === null || userQuery === void 0 ? void 0 : (_userQuery$data6 = userQuery.data) === null || _userQuery$data6 === void 0 ? void 0 : _userQuery$data6.url
    }, register('url'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.url) && (errors === null || errors === void 0 ? void 0 : (_errors$url = errors.url) === null || _errors$url === void 0 ? void 0 : _errors$url.message))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      colorScheme: "blue",
      type: "submit",
      isLoading: updateUser.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Update', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      variant: "outline",
      onClick: function onClick() {
        return history.push(constants_routes.users.students.list);
      },
      isDisabled: updateUser.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo'))))))))));
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const students_EditStudent = (EditStudent);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/users/components/students/StudentList.tsx













var StudentList = function StudentList(props) {
  var data = props.data;

  var _useState = (0,external_React_.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isDeleteModalOpen = _useState2[0],
      setDeleteModalOpen = _useState2[1];

  var queryClient = (0,es.useQueryClient)();
  var usersAPI = new api(constants_urls.users);
  var cancelDeleteModalRef = (0,external_React_.useRef)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var deleteUser = (0,es.useMutation)(function (id) {
    return usersAPI["delete"](id);
  }, {
    onSuccess: function onSuccess() {
      setDeleteModalOpen(false);
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('User deleted', 'masteriyo'),
        description: "#".concat(data.id, " ").concat((0,external_wp_i18n_namespaceObject.__)(' has been deleted successfully.', 'masteriyo')),
        isClosable: true,
        status: 'success'
      });
      queryClient.invalidateQueries('usersList');
    }
  });

  var onDeletePress = function onDeletePress() {
    setDeleteModalOpen(true);
  };

  var onDeleteModalClose = function onDeleteModalClose() {
    setDeleteModalOpen(false);
  };

  var onDeleteConfirm = function onDeleteConfirm() {
    deleteUser.mutate(data === null || data === void 0 ? void 0 : data.id);
  };

  return /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Link */.rU, {
    as: react_router_dom/* Link */.rU,
    to: constants_routes.users.students.edit.replace(':userId', data === null || data === void 0 ? void 0 : data.id.toString()),
    fontWeight: "semibold",
    fontSize: "sm",
    _hover: {
      color: 'blue.500'
    }
  }, "#".concat(data === null || data === void 0 ? void 0 : data.id, " ").concat(data === null || data === void 0 ? void 0 : data.first_name, " ").concat(data === null || data === void 0 ? void 0 : data.last_name)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "xs",
    color: "gray.600"
  }, data === null || data === void 0 ? void 0 : data.display_name))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "sm",
    color: "gray.600"
  }, data === null || data === void 0 ? void 0 : data.email)), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "2",
    alignItems: "center",
    color: "gray.600"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: index_esm/* BiCalendar */.R1q
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "sm",
    color: "gray.600"
  }, getLocalTime(data === null || data === void 0 ? void 0 : data.date_created).toLocaleString()))), /*#__PURE__*/external_React_default().createElement(dist.Td, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(react_router_dom/* Link */.rU, {
    to: constants_routes.users.students.edit.replace(':userId', data === null || data === void 0 ? void 0 : data.id.toString())
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    leftIcon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiEdit */.Hlf, null),
    colorScheme: "blue",
    size: "xs"
  }, (0,external_wp_i18n_namespaceObject.__)('Edit', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* Menu */.v2, {
    placement: "bottom-end"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuButton */.j2, {
    as: chakra_ui_button_esm/* IconButton */.hU,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    size: "xs"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuList */.qy, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_menu_esm/* MenuItem */.sN, {
    onClick: onDeletePress,
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null)
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
    isOpen: isDeleteModalOpen,
    onClose: onDeleteModalClose,
    isCentered: true,
    leastDestructiveRef: cancelDeleteModalRef
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.__)('Delete User', 'masteriyo'), " ", data === null || data === void 0 ? void 0 : data.display_name), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, (0,external_wp_i18n_namespaceObject.__)('Are you sure? You can’t restore after deleting.', 'masteriyo'), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, {
    fontSize: "12px",
    color: "gray.500",
    mt: "4"
  }, (0,external_wp_i18n_namespaceObject.__)('*Please note that all course progresses and quiz attempts of this user will be deleted.', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    ref: cancelDeleteModalRef,
    onClick: onDeleteModalClose,
    variant: "outline"
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "red",
    onClick: onDeleteConfirm,
    isLoading: deleteUser.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo')))))))));
};

/* harmony default export */ const students_StudentList = (StudentList);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/users/components/students/StudentsFilter.tsx










var StudentsFilter = function StudentsFilter(props) {
  var setFilterParams = props.setFilterParams;

  var _useForm = (0,dist_index_esm/* useForm */.cI)(),
      handleSubmit = _useForm.handleSubmit;

  var _useMediaQuery = (0,chakra_ui_media_query_esm/* useMediaQuery */.ac)('(min-width: 48em)'),
      _useMediaQuery2 = (0,slicedToArray/* default */.Z)(_useMediaQuery, 1),
      isMobile = _useMediaQuery2[0];

  var onSearchInput = (0,index_es/* useOnType */.H)({
    onTypeFinish: function onTypeFinish(val) {
      setFilterParams({
        search: val,
        role: 'masteriyo_student'
      });
    }
  }, 800);

  var _useState = (0,external_React_.useState)(isMobile),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var onChange = function onChange(data) {
    setFilterParams(deepClean(data));
  };

  (0,external_React_.useEffect)(function () {
    setIsOpen(isMobile);
  }, [isMobile]);
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    px: {
      base: 6,
      md: 12
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    justify: "end"
  }, !isMobile && /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiDotsVerticalRounded */.T41, null),
    variant: "outline",
    rounded: "sm",
    fontSize: "large",
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('toggle filter', 'masteriyo'),
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
    "in": isOpen
  }, /*#__PURE__*/external_React_default().createElement("form", {
    onChange: handleSubmit(onChange)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: ['column', null, 'row'],
    spacing: "4",
    mt: [6, null, 0]
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Search by username or email', 'masteriyo')
  }, onSearchInput))))));
};

/* harmony default export */ const students_StudentsFilter = (StudentsFilter);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/users/components/students/Students.tsx




















var Students = function Students() {
  var _usersQuery$data, _usersQuery$data2, _usersQuery$data2$dat, _usersQuery$data3, _usersQuery$data4;

  var _useState = (0,external_React_.useState)({
    role: 'masteriyo_student',
    order: 'desc',
    orderby: 'id'
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      filterParams = _useState2[0],
      setFilterParams = _useState2[1];

  var usersAPI = new api(constants_urls.users);
  var usersQuery = (0,es.useQuery)(['usersList', filterParams], function () {
    return usersAPI.list(filterParams);
  }, {
    keepPreviousData: true
  });
  var history = (0,react_router/* useHistory */.k6)();

  var filterStudentsBy = function filterStudentsBy(order, orderBy) {
    return setFilterParams(deepMerge({
      filterParams: filterParams,
      order: order,
      orderby: orderBy
    }));
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(users_UserHeader, {
    thirdBtn: {
      label: (0,external_wp_i18n_namespaceObject.__)('Add New Student', 'masteriyo'),
      action: function action() {
        return history.push(constants_routes.users.students.add);
      },
      icon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
        as: index_esm/* BiPlus */.poH,
        fontSize: "md"
      })
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
    maxW: "container.xl"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
    bg: "white",
    py: {
      base: 6,
      md: 12
    },
    shadow: "box",
    mx: "auto"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(students_StudentsFilter, {
    setFilterParams: setFilterParams
  }), /*#__PURE__*/external_React_default().createElement(dist/* Table */.iA, null, /*#__PURE__*/external_React_default().createElement(dist/* Thead */.hr, null, /*#__PURE__*/external_React_default().createElement(dist.Tr, null, /*#__PURE__*/external_React_default().createElement(dist.Th, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    alignItems: "center"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Text */.xv, null, (0,external_wp_i18n_namespaceObject.__)('Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column"
  }, (filterParams === null || filterParams === void 0 ? void 0 : filterParams.order) === 'desc' ? /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: md_index_esm/* MdOutlineArrowDropUp */.IVI,
    h: 6,
    w: 6,
    cursor: "pointer",
    color: "lightgray",
    transition: "1s",
    _hover: {
      color: 'black'
    },
    onClick: function onClick() {
      return filterStudentsBy('asc', 'name');
    }
  }) : /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: md_index_esm/* MdOutlineArrowDropDown */.FIC,
    h: 6,
    w: 6,
    cursor: "pointer",
    color: "lightgray",
    transition: "1s",
    _hover: {
      color: 'black'
    },
    onClick: function onClick() {
      return filterStudentsBy('desc', 'name');
    }
  })))), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Email', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Registered On', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist.Th, null, (0,external_wp_i18n_namespaceObject.__)('Actions', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(dist/* Tbody */.p3, null, usersQuery.isLoading && /*#__PURE__*/external_React_default().createElement(SkeletonStudentsList, null), usersQuery.isSuccess && isEmpty(usersQuery === null || usersQuery === void 0 ? void 0 : (_usersQuery$data = usersQuery.data) === null || _usersQuery$data === void 0 ? void 0 : _usersQuery$data.data) ? /*#__PURE__*/external_React_default().createElement(common_EmptyInfo, {
    message: (0,external_wp_i18n_namespaceObject.__)('No students found.', 'masteriyo')
  }) : usersQuery === null || usersQuery === void 0 ? void 0 : (_usersQuery$data2 = usersQuery.data) === null || _usersQuery$data2 === void 0 ? void 0 : (_usersQuery$data2$dat = _usersQuery$data2.data) === null || _usersQuery$data2$dat === void 0 ? void 0 : _usersQuery$data2$dat.map(function (user) {
    return /*#__PURE__*/external_React_default().createElement(students_StudentList, {
      key: user === null || user === void 0 ? void 0 : user.id,
      data: user
    });
  }))))), usersQuery.isSuccess && !isEmpty(usersQuery === null || usersQuery === void 0 ? void 0 : (_usersQuery$data3 = usersQuery.data) === null || _usersQuery$data3 === void 0 ? void 0 : _usersQuery$data3.data) && /*#__PURE__*/external_React_default().createElement(common_MasteriyoPagination, {
    metaData: usersQuery === null || usersQuery === void 0 ? void 0 : (_usersQuery$data4 = usersQuery.data) === null || _usersQuery$data4 === void 0 ? void 0 : _usersQuery$data4.meta,
    setFilterParams: setFilterParams,
    perPageText: (0,external_wp_i18n_namespaceObject.__)('Students Per Page:', 'masteriyo'),
    extraFilterParams: {
      role: 'masteriyo_student',
      order: filterParams === null || filterParams === void 0 ? void 0 : filterParams.order,
      orderby: filterParams === null || filterParams === void 0 ? void 0 : filterParams.orderby
    }
  })));
};

/* harmony default export */ const students_Students = (Students);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/index.ts


























;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz/components/Name.tsx






var components_Name_Name = function Name(props) {
  var _errors$name;

  var defaultValue = props.defaultValue;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      errors = _useFormContext.formState.errors;

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.name)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Quiz Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    defaultValue: defaultValue,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Your Quiz Name', 'masteriyo')
  }, register('name', {
    required: (0,external_wp_i18n_namespaceObject.__)('You must provide a name for the quiz.', 'masteriyo')
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.name) && (errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message)));
};

/* harmony default export */ const quiz_components_Name = (components_Name_Name);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz/components/QuizSettings.tsx









var QuizSettings_QuizSettings = function QuizSettings(props) {
  var _errors$full_mark, _errors$pass_mark, _errors$duration_hour, _errors$duration_minu, _errors$attempts_allo, _errors$questions_dis;

  var quizData = props.quizData;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      errors = _useFormContext.formState.errors,
      setValue = _useFormContext.setValue;

  var _convertMinutesToHour = convertMinutesToHours((quizData === null || quizData === void 0 ? void 0 : quizData.duration) || 0),
      _convertMinutesToHour2 = (0,slicedToArray/* default */.Z)(_convertMinutesToHour, 2),
      hours = _convertMinutesToHour2[0],
      minutes = _convertMinutesToHour2[1];

  var _useState = (0,external_React_.useState)(quizData && (quizData === null || quizData === void 0 ? void 0 : quizData.attempts_allowed) != 0 ? '1' : '0'),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      attemptsDisplayValue = _useState2[0],
      setAttemptsDisplayValue = _useState2[1];

  var _useState3 = (0,external_React_.useState)((quizData === null || quizData === void 0 ? void 0 : quizData.questions_display_per_page) != 0 ? '1' : '0'),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      displayValue = _useState4[0],
      setDisplayValue = _useState4[1];

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, {
    orientation: "vertical"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
    sx: tabListStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('General', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
    sx: tabStyles
  }, (0,external_wp_i18n_namespaceObject.__)('Display', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, {
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.full_mark)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Full Points', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "full_mark",
    defaultValue: (quizData === null || quizData === void 0 ? void 0 : quizData.full_mark) || 100,
    rules: {
      required: (0,external_wp_i18n_namespaceObject.__)('Full points is required for the quiz.', 'masteriyo')
    },
    render: function render(_ref) {
      var field = _ref.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInput */.Y2, (0,esm_extends/* default */.Z)({}, field, {
        w: "full",
        min: 0
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputField */.zu, {
        borderRadius: "sm",
        shadow: "input"
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputStepper */.Fi, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberIncrementStepper */.WQ, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberDecrementStepper */.Y_, null)));
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.full_mark) && (errors === null || errors === void 0 ? void 0 : (_errors$full_mark = errors.full_mark) === null || _errors$full_mark === void 0 ? void 0 : _errors$full_mark.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.pass_mark)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Pass Points', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "pass_mark",
    defaultValue: (quizData === null || quizData === void 0 ? void 0 : quizData.pass_mark) || 40,
    rules: {
      required: (0,external_wp_i18n_namespaceObject.__)('Pass points is required for the quiz.', 'masteriyo')
    },
    render: function render(_ref2) {
      var field = _ref2.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInput */.Y2, (0,esm_extends/* default */.Z)({}, field, {
        w: "full",
        min: 0
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputField */.zu, {
        borderRadius: "sm",
        shadow: "input"
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputStepper */.Fi, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberIncrementStepper */.WQ, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberDecrementStepper */.Y_, null)));
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.pass_mark) && (errors === null || errors === void 0 ? void 0 : (_errors$pass_mark = errors.pass_mark) === null || _errors$pass_mark === void 0 ? void 0 : _errors$pass_mark.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "0"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Duration', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.duration_hour)
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "duration_hour",
    defaultValue: hours || 0,
    rules: {
      required: (0,external_wp_i18n_namespaceObject.__)('Hours is required.', 'masteriyo'),
      min: 0
    },
    render: function render(_ref3) {
      var field = _ref3.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* InputGroup */.BZ, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInput */.Y2, (0,esm_extends/* default */.Z)({}, field, {
        flex: "1",
        min: 0
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputField */.zu, {
        rounded: "sm"
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputStepper */.Fi, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberIncrementStepper */.WQ, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberDecrementStepper */.Y_, null))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* InputRightAddon */.xW, null, (0,external_wp_i18n_namespaceObject.__)('Hours', 'masteriyo')));
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.duration_hour) && (errors === null || errors === void 0 ? void 0 : (_errors$duration_hour = errors.duration_hour) === null || _errors$duration_hour === void 0 ? void 0 : _errors$duration_hour.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.duration_minute)
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "duration_minute",
    defaultValue: minutes || 0,
    rules: {
      required: (0,external_wp_i18n_namespaceObject.__)('Minutes is required.', 'masteriyo'),
      min: 0,
      max: 59
    },
    render: function render(_ref4) {
      var field = _ref4.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* InputGroup */.BZ, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInput */.Y2, (0,esm_extends/* default */.Z)({}, field, {
        flex: "1",
        min: 0,
        max: 59
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputField */.zu, {
        rounded: "sm"
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputStepper */.Fi, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberIncrementStepper */.WQ, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberDecrementStepper */.Y_, null))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* InputRightAddon */.xW, null, (0,external_wp_i18n_namespaceObject.__)('Minutes', 'masteriyo')));
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.duration_minute) && (errors === null || errors === void 0 ? void 0 : (_errors$duration_minu = errors.duration_minute) === null || _errors$duration_minu === void 0 ? void 0 : _errors$duration_minu.message))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Attempts Allowed', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* RadioGroup */.Ee, {
    onChange: setAttemptsDisplayValue,
    value: attemptsDisplayValue
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "8",
    align: "flex-start"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
    onChange: function onChange(e) {
      return setValue('attempts_allowed', e.target.value);
    },
    value: "0"
  }, (0,external_wp_i18n_namespaceObject.__)('No limit', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
    value: "1",
    onChange: function onChange() {
      return setValue('attempts_allowed', (quizData === null || quizData === void 0 ? void 0 : quizData.attempts_allowed) || 5);
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Limit', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
    "in": attemptsDisplayValue != '0',
    animateOpacity: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.attempts_allowed)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Number of Attempts', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "attempts_allowed",
    defaultValue: (quizData === null || quizData === void 0 ? void 0 : quizData.attempts_allowed) || 0,
    rules: {
      required: (0,external_wp_i18n_namespaceObject.__)('Attempts allowed is required.', 'masteriyo')
    },
    render: function render(_ref5) {
      var field = _ref5.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* InputGroup */.BZ, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInput */.Y2, (0,esm_extends/* default */.Z)({}, field, {
        w: "full",
        min: 1
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputField */.zu, {
        rounded: "sm"
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputStepper */.Fi, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberIncrementStepper */.WQ, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberDecrementStepper */.Y_, null))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* InputRightAddon */.xW, null, (0,external_wp_i18n_namespaceObject.__)('Attempts', 'masteriyo')));
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.attempts_allowed) && (errors === null || errors === void 0 ? void 0 : (_errors$attempts_allo = errors.attempts_allowed) === null || _errors$attempts_allo === void 0 ? void 0 : _errors$attempts_allo.message))))))))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Questions Per Page', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* RadioGroup */.Ee, {
    onChange: setDisplayValue,
    value: displayValue
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "4"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "6",
    align: "flex-start"
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "questions_display_per_page",
    render: function render(_ref6) {
      var field = _ref6.field;
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, (0,esm_extends/* default */.Z)({}, field, {
        value: "0",
        onChange: function onChange(e) {
          return setValue('questions_display_per_page', e.target.value);
        }
      }), (0,external_wp_i18n_namespaceObject.__)('From Global Settings', 'masteriyo')));
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_radio_esm/* Radio */.Y8, {
    value: "1"
  }, (0,external_wp_i18n_namespaceObject.__)('Set Individually', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_transition_esm/* Collapse */.UO, {
    "in": displayValue != '0' ? true : false,
    animateOpacity: true
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.questions_display_per_page)
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "questions_display_per_page",
    defaultValue: (quizData === null || quizData === void 0 ? void 0 : quizData.questions_display_per_page) || 5,
    rules: {
      required: (0,external_wp_i18n_namespaceObject.__)('Questions per page is required.', 'masteriyo')
    },
    render: function render(_ref7) {
      var field = _ref7.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInput */.Y2, (0,esm_extends/* default */.Z)({}, field, {
        defaultValue: (quizData === null || quizData === void 0 ? void 0 : quizData.questions_display_per_page) || 5,
        w: "full",
        min: 1
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputField */.zu, {
        rounded: "sm"
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputStepper */.Fi, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberIncrementStepper */.WQ, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberDecrementStepper */.Y_, null)));
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.questions_display_per_page) && (errors === null || errors === void 0 ? void 0 : (_errors$questions_dis = errors.questions_display_per_page) === null || _errors$questions_dis === void 0 ? void 0 : _errors$questions_dis.message))))))))))));
};

/* harmony default export */ const quiz_components_QuizSettings = (QuizSettings_QuizSettings);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz/AddNewQuiz.tsx

















var AddNewQuiz = function AddNewQuiz() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      sectionId = _useParams.sectionId,
      courseId = _useParams.courseId;

  var methods = (0,dist_index_esm/* useForm */.cI)();
  var history = (0,react_router/* useHistory */.k6)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var sectionsAPI = new api(constants_urls.sections);
  var quizAPI = new api(constants_urls.quizes);
  var courseAPI = new api(constants_urls.courses);

  var _useCourse = hooks_useCourse(),
      draftCourse = _useCourse.draftCourse,
      publishCourse = _useCourse.publishCourse;

  var tabStyles = {
    fontWeight: 'medium',
    py: '4'
  };
  var courseQuery = (0,es.useQuery)(["course".concat(courseId), courseId], function () {
    return courseAPI.get(courseId);
  });
  var sectionQuery = (0,es.useQuery)(["section".concat(sectionId), sectionId], function () {
    return sectionsAPI.get(sectionId);
  });
  var addQuiz = (0,es.useMutation)(function (data) {
    return quizAPI.store(data);
  }, {
    onSuccess: function onSuccess(data) {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Quiz Added', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
      history.push({
        pathname: constants_routes.quiz.edit.replace(':quizId', "".concat(data.id)).replace(':courseId', "".concat(data.course_id)),
        search: '?page=questions'
      });
    }
  });

  var onSubmit = function onSubmit(data, status) {
    var newData = {
      course_id: courseId,
      parent_id: sectionId,
      duration: ((data === null || data === void 0 ? void 0 : data.duration_hour) || 0) * 60 + +((data === null || data === void 0 ? void 0 : data.duration_minute) || 0),
      duration_hour: null,
      duration_minute: null
    };
    status === 'draft' && draftCourse.mutate(courseId);
    status === 'publish' && publishCourse.mutate(courseId);
    addQuiz.mutate(deepClean(deepMerge(data, newData)));
  };

  var isPublished = function isPublished() {
    var _courseQuery$data;

    if (((_courseQuery$data = courseQuery.data) === null || _courseQuery$data === void 0 ? void 0 : _courseQuery$data.status) === 'publish') {
      return true;
    } else {
      return false;
    }
  };

  var isDrafted = function isDrafted() {
    var _courseQuery$data2;

    if (((_courseQuery$data2 = courseQuery.data) === null || _courseQuery$data2 === void 0 ? void 0 : _courseQuery$data2.status) === 'draft') {
      return true;
    } else {
      return false;
    }
  };

  if (sectionQuery.isSuccess && courseQuery.isSuccess && sectionQuery.data.course_id == courseId) {
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8",
      alignItems: "center"
    }, /*#__PURE__*/external_React_default().createElement(common_Header, {
      showCourseName: true,
      showLinks: true,
      showPreview: true,
      course: {
        name: courseQuery.data.name,
        id: courseQuery.data.id,
        previewUrl: courseQuery.data.permalink
      },
      secondBtn: {
        label: isDrafted() ? (0,external_wp_i18n_namespaceObject.__)('Save To Draft', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Switch To Draft', 'masteriyo'),
        action: methods.handleSubmit(function (data) {
          return onSubmit(data, 'draft');
        }),
        isLoading: draftCourse.isLoading
      },
      thirdBtn: {
        label: isPublished() ? (0,external_wp_i18n_namespaceObject.__)('Update', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Publish', 'masteriyo'),
        action: methods.handleSubmit(function (data) {
          return onSubmit(data, 'publish');
        }),
        isLoading: publishCourse.isLoading
      }
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
      maxW: "container.xl"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(common_BackToBuilder, null), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, methods, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      bg: "white",
      p: "10",
      shadow: "box"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
      aling: "center",
      justify: "space-between"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      as: "h1",
      fontSize: "x-large"
    }, (0,external_wp_i18n_namespaceObject.__)('Add New Quiz', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement("form", {
      onSubmit: methods.handleSubmit(function (data) {
        return onSubmit(data);
      })
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
      justifyContent: "center",
      borderBottom: "1px"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Info', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Questions', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Settings', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      px: "0"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(quiz_components_Name, null))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      px: "0"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* Alert */.bZ, {
      status: "error"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertIcon */.zM, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertTitle */.Cd, {
      mr: 2
    }, (0,external_wp_i18n_namespaceObject.__)('Add Quiz first', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertDescription */.X, null, (0,external_wp_i18n_namespaceObject.__)('In order to add questions, you need to add a quiz first.', 'masteriyo')))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      px: "0"
    }, /*#__PURE__*/external_React_default().createElement(quiz_components_QuizSettings, null)))), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      colorScheme: "blue",
      type: "submit",
      isLoading: addQuiz.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Add New Quiz', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      variant: "outline",
      onClick: function onClick() {
        return history.push({
          pathname: constants_routes.courses.edit.replace(':courseId', courseId),
          search: '?page=builder'
        });
      }
    }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')))))))))));
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const quiz_AddNewQuiz = (AddNewQuiz);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz/components/Description.tsx





var components_Description_Description = function Description(props) {
  var defaultValue = props.defaultValue;
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Quiz Description', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(common_Editor, {
    id: "mto-quiz-description",
    name: "description",
    defaultValue: defaultValue
  }));
};

/* harmony default export */ const quiz_components_Description = (components_Description_Description);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/accordion/dist/chakra-ui-accordion.esm.js
var chakra_ui_accordion_esm = __webpack_require__(4090);
;// CONCATENATED MODULE: ./assets/js/back-end/context/QuestionProvider.tsx


var QuestionContext = /*#__PURE__*/(0,external_React_.createContext)({
  submitQuestionDisabled: false
});

var QuestionProvider = function QuestionProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,external_React_.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      submitQuestionDisabled = _useState2[0],
      setSubmitQuestionDisabled = _useState2[1];

  var providerValue = (0,external_React_.useMemo)(function () {
    return {
      submitQuestionDisabled: submitQuestionDisabled,
      setSubmitQuestionDisabled: setSubmitQuestionDisabled
    };
  }, [submitQuestionDisabled, setSubmitQuestionDisabled]);
  return /*#__PURE__*/external_React_default().createElement(QuestionContext.Provider, {
    value: providerValue
  }, children);
};

/* harmony default export */ const context_QuestionProvider = (QuestionProvider);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
var toConsumableArray = __webpack_require__(9062);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/checkbox/dist/chakra-ui-checkbox.esm.js
var chakra_ui_checkbox_esm = __webpack_require__(8133);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/editable/dist/chakra-ui-editable.esm.js
var chakra_ui_editable_esm = __webpack_require__(9636);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz/components/answer/EditableAnswer.tsx




function EditableAnswer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function EditableAnswer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? EditableAnswer_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : EditableAnswer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var EditableAnswer = function EditableAnswer(props) {
  var defaultValue = props.defaultValue,
      setAnswers = props.setAnswers,
      answers = props.answers,
      index = props.index;

  var _useState = (0,external_React_.useState)(defaultValue),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      editableValue = _useState2[0],
      setEditableValue = _useState2[1];

  var _useContext = (0,external_React_.useContext)(QuestionContext),
      setSubmitQuestionDisabled = _useContext.setSubmitQuestionDisabled;

  var _onSubmit = function onSubmit(index, value) {
    var newAnswers = (0,toConsumableArray/* default */.Z)(answers);

    if (isEmpty(value)) {
      newAnswers.splice(index, 1, EditableAnswer_objectSpread(EditableAnswer_objectSpread({}, newAnswers[index]), {}, {
        name: defaultValue
      }));
      setEditableValue(defaultValue);
    } else {
      newAnswers.splice(index, 1, EditableAnswer_objectSpread(EditableAnswer_objectSpread({}, newAnswers[index]), {}, {
        name: value
      }));
      setEditableValue(value);
    }

    setAnswers(newAnswers);
  };

  var _onChange = function onChange(value) {
    setEditableValue(value);
  };

  (0,external_React_.useEffect)(function () {
    try {
      setSubmitQuestionDisabled(duplicateObject('name', answers) ? true : false);
    } catch (error) {}
  }, [answers, setSubmitQuestionDisabled]);
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_editable_esm/* Editable */.CX, {
    defaultValue: defaultValue,
    value: editableValue,
    onChange: function onChange(value) {
      return _onChange(value);
    },
    onSubmit: function onSubmit(value) {
      return _onSubmit(index, value);
    }
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_editable_esm/* EditablePreview */.wp, {
    minW: "sm"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_editable_esm/* EditableInput */.Vm, null));
};

/* harmony default export */ const answer_EditableAnswer = (EditableAnswer);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz/components/answer/types/MultipleChoice.tsx





function MultipleChoice_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function MultipleChoice_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? MultipleChoice_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : MultipleChoice_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












var MultipleChoice = function MultipleChoice(props) {
  var answersData = props.answersData;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      setValue = _useFormContext.setValue;

  var _useState = (0,external_React_.useState)(answersData || []),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      answers = _useState2[0],
      setAnswers = _useState2[1];

  var _useContext = (0,external_React_.useContext)(QuestionContext),
      setSubmitQuestionDisabled = _useContext.setSubmitQuestionDisabled;

  var iconStyles = {
    fontSize: 'x-large',
    color: 'gray.500',
    minW: 'auto',
    _hover: {
      color: 'blue.500'
    }
  };

  var onAddNewAnswerPress = function onAddNewAnswerPress() {
    var newAnswers = (0,toConsumableArray/* default */.Z)(answers);

    setAnswers([].concat((0,toConsumableArray/* default */.Z)(newAnswers), [{
      name: 'Option ' + (newAnswers.length + 1),
      correct: newAnswers.length === 0 ? true : false
    }]));
  };

  var onDeletePress = function onDeletePress(id) {
    var newAnswers = (0,toConsumableArray/* default */.Z)(answers);

    newAnswers.splice(id, 1);
    setAnswers(newAnswers);
  };

  var onCheckPress = function onCheckPress(id, correct) {
    var newAnswers = (0,toConsumableArray/* default */.Z)(answers);

    newAnswers.splice(id, 1, MultipleChoice_objectSpread(MultipleChoice_objectSpread({}, newAnswers[id]), {}, {
      correct: correct
    }));
    setAnswers(newAnswers);
  };

  var onDuplicatePress = function onDuplicatePress(name) {
    var newAnswers = (0,toConsumableArray/* default */.Z)(answers);

    setAnswers([].concat((0,toConsumableArray/* default */.Z)(newAnswers), [{
      name: name,
      correct: false
    }]));
  };

  (0,external_React_.useEffect)(function () {
    setValue('answers', answers);
    setSubmitQuestionDisabled(duplicateObject('name', answers) ? true : false);
    setSubmitQuestionDisabled(existsOnArray(answers, 'correct', true) ? false : true);
  }, [answers, setValue, setSubmitQuestionDisabled]);
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    sx: sectionHeaderStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    fontSize: "lg",
    fontWeight: "semibold"
  }, (0,external_wp_i18n_namespaceObject.__)('Answers', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "hidden"
  }, register('answers'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, null, duplicateObject('name', answers) && /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* Alert */.bZ, {
    status: "error",
    mb: "4",
    fontSize: "xs",
    p: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertIcon */.zM, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertTitle */.Cd, {
    mr: 2
  }, (0,external_wp_i18n_namespaceObject.__)('Duplicate Names', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertDescription */.X, null, (0,external_wp_i18n_namespaceObject.__)('Answer cannot be duplicate.', 'masteriyo'))), !existsOnArray(answers, 'correct', true) && /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* Alert */.bZ, {
    status: "error",
    mb: "4",
    fontSize: "xs",
    p: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertIcon */.zM, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertTitle */.Cd, {
    mr: 2
  }, (0,external_wp_i18n_namespaceObject.__)('No answer checked.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertDescription */.X, null, (0,external_wp_i18n_namespaceObject.__)('Please check at least one answer.', 'masteriyo'))), answers && answers.map(function (answer, index) {
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
      key: index,
      border: "1px",
      borderColor: answer !== null && answer !== void 0 && answer.correct ? 'green.200' : 'gray.100',
      rounded: "sm",
      mb: "4",
      align: "center",
      justify: "space-between",
      px: "2",
      py: "1"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "2",
      align: "center",
      flex: "1"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: sortable,
      fontSize: "lg",
      color: "gray.500"
    }), /*#__PURE__*/external_React_default().createElement(answer_EditableAnswer, {
      index: index,
      defaultValue: answer.name,
      answers: answers,
      setAnswers: setAnswers
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "4",
      flexWrap: "wrap"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_checkbox_esm/* Checkbox */.XZ, {
      colorScheme: "green",
      isChecked: answer === null || answer === void 0 ? void 0 : answer.correct,
      onChange: function onChange(e) {
        return onCheckPress(index, e.target.checked);
      }
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "2"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
      variant: "unstyled",
      sx: iconStyles,
      "aria-label": (0,external_wp_i18n_namespaceObject.__)('Duplicate', 'masteriyo'),
      onClick: function onClick() {
        return onDuplicatePress(answer.name);
      },
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiCopy */.LhG, null)
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
      variant: "unstyled",
      sx: iconStyles,
      "aria-label": (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'),
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null),
      minW: "auto",
      onClick: function onClick() {
        return onDeletePress(index);
      }
    }))));
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiPlus */.poH,
      fontSize: "xl"
    }),
    variant: "link",
    color: "gray.900",
    onClick: onAddNewAnswerPress
  }, (0,external_wp_i18n_namespaceObject.__)('Add New Answer', 'masteriyo'))));
};

/* harmony default export */ const types_MultipleChoice = (MultipleChoice);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz/components/answer/types/ShortAnswer.tsx





var ShortAnswer = function ShortAnswer() {
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    sx: sectionHeaderStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    fontSize: "lg",
    fontWeight: "semibold"
  }, (0,external_wp_i18n_namespaceObject.__)('Answers', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* Alert */.bZ, {
    status: "info",
    fontSize: "sm"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertIcon */.zM, null), (0,external_wp_i18n_namespaceObject.__)('Short answer doesn’t require any options.', 'masteriyo'))));
};

/* harmony default export */ const types_ShortAnswer = (ShortAnswer);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz/components/answer/types/SingleChoice.tsx





function SingleChoice_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function SingleChoice_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? SingleChoice_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : SingleChoice_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












var SingleChoice = function SingleChoice(props) {
  var answersData = props.answersData;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      setValue = _useFormContext.setValue;

  var _useState = (0,external_React_.useState)(answersData || []),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      answers = _useState2[0],
      setAnswers = _useState2[1];

  var _useContext = (0,external_React_.useContext)(QuestionContext),
      setSubmitQuestionDisabled = _useContext.setSubmitQuestionDisabled;

  var iconStyles = {
    fontSize: 'x-large',
    color: 'gray.500',
    minW: 'auto',
    _hover: {
      color: 'blue.500'
    }
  };

  var onAddNewAnswerPress = function onAddNewAnswerPress() {
    var newAnswers = (0,toConsumableArray/* default */.Z)(answers);

    setAnswers([].concat((0,toConsumableArray/* default */.Z)(newAnswers), [{
      name: 'Option ' + (newAnswers.length + 1),
      correct: newAnswers.length === 0 ? true : false
    }]));
  };

  var onDeletePress = function onDeletePress(id) {
    var newAnswers = (0,toConsumableArray/* default */.Z)(answers);

    newAnswers.splice(id, 1);
    setAnswers(newAnswers);
  };

  var onCheckPress = function onCheckPress(id) {
    var newAnswers = (0,toConsumableArray/* default */.Z)(answers); // uncheck other checkbox


    for (var key in newAnswers) {
      newAnswers[key] = SingleChoice_objectSpread(SingleChoice_objectSpread({}, newAnswers[key]), {}, {
        correct: false
      });
    }

    newAnswers.splice(id, 1, SingleChoice_objectSpread(SingleChoice_objectSpread({}, newAnswers[id]), {}, {
      correct: true
    }));
    setAnswers(newAnswers);
  };

  var onDuplicatePress = function onDuplicatePress(name) {
    var newAnswers = (0,toConsumableArray/* default */.Z)(answers);

    setAnswers([].concat((0,toConsumableArray/* default */.Z)(newAnswers), [{
      name: name,
      correct: false
    }]));
  };

  (0,external_React_.useEffect)(function () {
    setValue('answers', answers);
    setSubmitQuestionDisabled(duplicateObject('name', answers) ? true : false);
    setSubmitQuestionDisabled(existsOnArray(answers, 'correct', true) ? false : true);
  }, [answers, setValue, setSubmitQuestionDisabled]);
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    sx: sectionHeaderStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    fontSize: "lg",
    fontWeight: "semibold"
  }, (0,external_wp_i18n_namespaceObject.__)('Answers', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "hidden"
  }, register('answers'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, null, duplicateObject('name', answers) && /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* Alert */.bZ, {
    status: "error",
    mb: "4",
    fontSize: "xs",
    p: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertIcon */.zM, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertTitle */.Cd, {
    mr: 2
  }, (0,external_wp_i18n_namespaceObject.__)('Duplicate Names', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertDescription */.X, null, (0,external_wp_i18n_namespaceObject.__)('Answer cannot be duplicate.', 'masteriyo'))), !existsOnArray(answers, 'correct', true) && /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* Alert */.bZ, {
    status: "error",
    mb: "4",
    fontSize: "xs",
    p: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertIcon */.zM, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertTitle */.Cd, {
    mr: 2
  }, (0,external_wp_i18n_namespaceObject.__)('No answer checked.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertDescription */.X, null, (0,external_wp_i18n_namespaceObject.__)('Please check at least one answer.', 'masteriyo'))), answers && answers.map(function (answer, index) {
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
      key: index,
      border: "1px",
      borderColor: answer !== null && answer !== void 0 && answer.correct ? 'green.200' : 'gray.100',
      rounded: "sm",
      mb: "4",
      align: "center",
      justify: "space-between",
      px: "2",
      py: "1"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "2",
      align: "center",
      flex: "1"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: sortable,
      fontSize: "lg",
      color: "gray.500"
    }), /*#__PURE__*/external_React_default().createElement(answer_EditableAnswer, {
      index: index,
      defaultValue: answer.name,
      answers: answers,
      setAnswers: setAnswers
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "4"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_checkbox_esm/* Checkbox */.XZ, {
      colorScheme: "green",
      isChecked: answer === null || answer === void 0 ? void 0 : answer.correct,
      onChange: function onChange() {
        return onCheckPress(index);
      }
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "2"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
      variant: "unstyled",
      sx: iconStyles,
      "aria-label": (0,external_wp_i18n_namespaceObject.__)('Duplicate', 'masteriyo'),
      onClick: function onClick() {
        return onDuplicatePress(answer.name);
      },
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiCopy */.LhG, null)
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
      variant: "unstyled",
      sx: iconStyles,
      "aria-label": (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'),
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null),
      minW: "auto",
      onClick: function onClick() {
        return onDeletePress(index);
      }
    }))));
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiPlus */.poH,
      fontSize: "xl"
    }),
    variant: "link",
    color: "gray.900",
    onClick: onAddNewAnswerPress
  }, (0,external_wp_i18n_namespaceObject.__)('Add New Answer', 'masteriyo'))));
};

/* harmony default export */ const types_SingleChoice = (SingleChoice);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz/components/answer/types/TrueFalse.tsx





function TrueFalse_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function TrueFalse_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? TrueFalse_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : TrueFalse_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












var TrueFalse = function TrueFalse(props) {
  var answersData = props.answersData;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      setValue = _useFormContext.setValue;

  var _useContext = (0,external_React_.useContext)(QuestionContext),
      setSubmitQuestionDisabled = _useContext.setSubmitQuestionDisabled;

  var _useState = (0,external_React_.useState)(answersData || [{
    name: 'True',
    correct: true
  }, {
    name: 'False',
    correct: false
  }]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      answers = _useState2[0],
      setAnswers = _useState2[1];

  var iconStyles = {
    fontSize: 'x-large',
    color: 'gray.500',
    minW: 'auto',
    _hover: {
      color: 'blue.500'
    }
  };

  var onAddNewAnswerPress = function onAddNewAnswerPress() {
    var newAnswers = (0,toConsumableArray/* default */.Z)(answers);

    if (newAnswers.length < 2) {
      setAnswers([].concat((0,toConsumableArray/* default */.Z)(newAnswers), [{
        name: 'Option ' + (newAnswers.length + 1),
        correct: false
      }]));
    }
  };

  var onDeletePress = function onDeletePress(id) {
    var newAnswers = (0,toConsumableArray/* default */.Z)(answers);

    newAnswers.splice(id, 1);
    setAnswers(newAnswers);
  };

  var onCheckPress = function onCheckPress(id) {
    var newAnswers = (0,toConsumableArray/* default */.Z)(answers); // uncheck other checkbox


    for (var key in newAnswers) {
      newAnswers[key] = TrueFalse_objectSpread(TrueFalse_objectSpread({}, newAnswers[key]), {}, {
        correct: false
      });
    }

    newAnswers.splice(id, 1, TrueFalse_objectSpread(TrueFalse_objectSpread({}, newAnswers[id]), {}, {
      correct: true
    }));
    setAnswers(newAnswers);
  };

  (0,external_React_.useEffect)(function () {
    setValue('answers', answers);
    setSubmitQuestionDisabled(duplicateObject('name', answers) ? true : false);
  }, [answers, setValue, setSubmitQuestionDisabled]);
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    sx: sectionHeaderStyles
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    fontSize: "lg",
    fontWeight: "semibold"
  }, (0,external_wp_i18n_namespaceObject.__)('Answers', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    type: "hidden"
  }, register('answers'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, null, duplicateObject('name', answers) && /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* Alert */.bZ, {
    status: "error",
    mb: "4",
    fontSize: "xs",
    p: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertIcon */.zM, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertTitle */.Cd, {
    mr: 2
  }, (0,external_wp_i18n_namespaceObject.__)('Duplicate Names', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertDescription */.X, null, (0,external_wp_i18n_namespaceObject.__)('Answer cannot be duplicate.', 'masteriyo'))), answers && answers.map(function (answer, index) {
    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
      key: index,
      border: "1px",
      borderColor: answer !== null && answer !== void 0 && answer.correct ? 'green.200' : 'gray.100',
      rounded: "sm",
      mb: "4",
      align: "center",
      justify: "space-between",
      px: "2",
      py: "1"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "2",
      align: "center",
      flex: "1"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: sortable,
      fontSize: "lg",
      color: "gray.500"
    }), /*#__PURE__*/external_React_default().createElement(answer_EditableAnswer, {
      answers: answers,
      index: index,
      setAnswers: setAnswers,
      defaultValue: answer.name
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "4"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_checkbox_esm/* Checkbox */.XZ, {
      colorScheme: "green",
      isChecked: answer === null || answer === void 0 ? void 0 : answer.correct,
      onChange: function onChange() {
        return onCheckPress(index);
      }
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "2"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
      variant: "unstyled",
      sx: iconStyles,
      "aria-label": (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'),
      icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null),
      minW: "auto",
      onClick: function onClick() {
        return onDeletePress(index);
      }
    }))));
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    leftIcon: /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
      as: index_esm/* BiPlus */.poH,
      fontSize: "xl"
    }),
    variant: "link",
    color: "gray.900",
    isDisabled: answers.length > 1,
    onClick: onAddNewAnswerPress
  }, (0,external_wp_i18n_namespaceObject.__)('Add New Answer', 'masteriyo'))));
};

/* harmony default export */ const types_TrueFalse = (TrueFalse);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz/components/answer/Answers.tsx








var Answers = function Answers(props) {
  var answers = props.answers,
      questionType = props.questionType;

  var _useContext = (0,external_React_.useContext)(QuestionContext),
      setSubmitQuestionDisabled = _useContext.setSubmitQuestionDisabled;

  if (questionType === 'short-answer') {
    setSubmitQuestionDisabled(false);
  }

  if (questionType === 'true-false') {
    return /*#__PURE__*/external_React_default().createElement(types_TrueFalse, {
      answersData: answers
    });
  } else if (questionType === 'single-choice') {
    return /*#__PURE__*/external_React_default().createElement(types_SingleChoice, {
      answersData: answers
    });
  } else if (questionType === 'multiple-choice') {
    return /*#__PURE__*/external_React_default().createElement(types_MultipleChoice, {
      answersData: answers
    });
  } else if (questionType === 'short-answer') {
    return /*#__PURE__*/external_React_default().createElement(types_ShortAnswer, {
      answersData: answers
    });
  }

  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_spinner_esm/* Spinner */.$, null));
};

/* harmony default export */ const answer_Answers = (Answers);
;// CONCATENATED MODULE: ./assets/js/back-end/config/ReactSelectComponent.tsx





var ReactSelectComponent = function ReactSelectComponent() {
  var renderIcon = function renderIcon(iconName) {
    var iconStyles = {
      fontSize: '1.5rem'
    };

    switch (iconName) {
      case 'FillInTheBlanks':
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
          sx: iconStyles,
          as: fill_in_the_blanks
        });

      case 'ImageMatching':
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
          sx: iconStyles,
          as: image_matching
        });

      case 'MultipleChoice':
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
          sx: iconStyles,
          as: multiple_choice
        });

      case 'OpenEndedEssay':
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
          sx: iconStyles,
          as: open_ended_essay
        });

      case 'SingleChoice':
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
          sx: iconStyles,
          as: single_choice
        });

      case 'SortableQuestion':
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
          sx: iconStyles,
          as: sortable_question
        });

      case 'YesNo':
        return /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
          sx: iconStyles,
          as: yes_no
        });

      default:
        return;
    }
  };

  var SingleValue = function SingleValue(singleValueProps) {
    return /*#__PURE__*/external_React_default().createElement(index_4322c0ed_browser_esm.y.SingleValue, singleValueProps, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "2"
    }, singleValueProps.data.icon && renderIcon(singleValueProps.data.icon), /*#__PURE__*/external_React_default().createElement("span", null, singleValueProps.data.label)));
  };

  var Option = function Option(optionProps) {
    return /*#__PURE__*/external_React_default().createElement(index_4322c0ed_browser_esm.y.Option, optionProps, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "row",
      spacing: "2"
    }, optionProps.data.icon && renderIcon(optionProps.data.icon), /*#__PURE__*/external_React_default().createElement("span", null, optionProps.label)));
  };

  return {
    Option: Option,
    SingleValue: SingleValue
  };
};

/* harmony default export */ const config_ReactSelectComponent = (ReactSelectComponent);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz/components/question/EditQuestion.tsx









var EditQuestion = function EditQuestion(props) {
  var _errors$name, _errors$type, _errors$points;

  var questionData = props.questionData,
      setQuestionType = props.setQuestionType,
      setAnswerData = props.setAnswerData;

  var _useFormContext = (0,dist_index_esm/* useFormContext */.Gc)(),
      register = _useFormContext.register,
      control = _useFormContext.control,
      errors = _useFormContext.formState.errors,
      unregister = _useFormContext.unregister;

  var questionType = [{
    value: 'true-false',
    label: 'True False',
    icon: 'YesNo'
  }, {
    value: 'single-choice',
    label: 'Single Choice',
    icon: 'SingleChoice'
  }, {
    value: 'multiple-choice',
    label: 'Multi Choice',
    icon: 'MultipleChoice'
  }];

  var getQuestionTypeDefaultValue = function getQuestionTypeDefaultValue() {
    switch (questionData.type) {
      case 'true-false':
        return questionType[0];

      case 'single-choice':
        return questionType[1];

      case 'multiple-choice':
        return questionType[2];

      case 'short-answer':
        return questionType[3];

      default:
        return;
    }
  };

  var onQuestionTypeChange = function onQuestionTypeChange(questionType) {
    setQuestionType(questionType.value);
  };

  return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    align: "center",
    justify: "space-between",
    borderBottom: "1px",
    borderColor: "gray.100",
    pb: "3"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
    fontSize: "lg",
    fontWeight: "semibold"
  }, (0,external_wp_i18n_namespaceObject.__)('Question', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "6"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.name)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Question Name', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_input_esm/* Input */.II, (0,esm_extends/* default */.Z)({
    defaultValue: questionData.name,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Your Question Name', 'masteriyo')
  }, register('name', {
    required: (0,external_wp_i18n_namespaceObject.__)('You must provide name for the question.', 'masteriyo')
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.name) && (errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Question Type', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    defaultValue: getQuestionTypeDefaultValue(),
    render: function render(_ref) {
      var _ref$field = _ref.field,
          _onChange = _ref$field.onChange,
          value = _ref$field.value;
      return /*#__PURE__*/external_React_default().createElement(react_select_browser_esm/* default */.ZP, {
        value: value,
        options: questionType,
        styles: reactSelectStyles,
        components: config_ReactSelectComponent(),
        onChange: function onChange(data) {
          _onChange(data);

          unregister('answers');
          setAnswerData(null);
          onQuestionTypeChange(data);
        }
      });
    },
    control: control,
    name: "type",
    rules: {
      required: (0,external_wp_i18n_namespaceObject.__)('Please select question type', 'masteriyo')
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.type) && (errors === null || errors === void 0 ? void 0 : (_errors$type = errors.type) === null || _errors$type === void 0 ? void 0 : _errors$type.message))), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormControl */.NI, {
    isInvalid: !!(errors !== null && errors !== void 0 && errors.points),
    flex: "0 0 100px"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormLabel */.lX, null, (0,external_wp_i18n_namespaceObject.__)('Points', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* Controller */.Qr, {
    name: "points",
    defaultValue: questionData.points || 1,
    rules: {
      required: (0,external_wp_i18n_namespaceObject.__)('Please provide points for the question.', 'masteriyo'),
      validate: {
        positive: function positive(value) {
          return parseInt(value) >= 0 || (0,external_wp_i18n_namespaceObject.__)('Points should be positive number.', 'masteriyo');
        }
      }
    },
    render: function render(_ref2) {
      var field = _ref2.field;
      return /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInput */.Y2, (0,esm_extends/* default */.Z)({}, field, {
        w: "full",
        min: 0
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputField */.zu, {
        borderRadius: "sm",
        shadow: "input"
      }), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberInputStepper */.Fi, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberIncrementStepper */.WQ, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_number_input_esm/* NumberDecrementStepper */.Y_, null)));
    }
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_form_control_esm/* FormErrorMessage */.J1, null, (errors === null || errors === void 0 ? void 0 : errors.points) && (errors === null || errors === void 0 ? void 0 : (_errors$points = errors.points) === null || _errors$points === void 0 ? void 0 : _errors$points.message)))));
};

/* harmony default export */ const question_EditQuestion = (EditQuestion);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz/components/question/Question.tsx



function Question_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Question_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Question_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Question_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















var Question = function Question(props) {
  var questionData = props.questionData;
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var methods = (0,dist_index_esm/* useForm */.cI)();

  var _useContext = (0,external_React_.useContext)(QuestionContext),
      submitQuestionDisabled = _useContext.submitQuestionDisabled;

  var _useState = (0,external_React_.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isDeleteModalOpen = _useState2[0],
      setDeleteModalOpen = _useState2[1];

  var _useState3 = (0,external_React_.useState)((questionData === null || questionData === void 0 ? void 0 : questionData.answers) || null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      answerData = _useState4[0],
      setAnswerData = _useState4[1];

  var _useState5 = (0,external_React_.useState)(questionData.type),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      questionType = _useState6[0],
      setQuestionType = _useState6[1];

  var questionAPI = new api(constants_urls.questions);
  var cancelRef = (0,external_React_.useRef)();
  var queryClient = (0,es.useQueryClient)();
  var duplicateQuestion = (0,es.useMutation)(function (data) {
    return questionAPI.store(data);
  }, {
    onSuccess: function onSuccess(data) {
      queryClient.invalidateQueries("questions".concat(data.parent_id));
    }
  });
  var updateQuestion = (0,es.useMutation)(function (data) {
    return questionAPI.update(questionData.id, data);
  }, {
    onSuccess: function onSuccess(data) {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Question Updated', 'masteriyo'),
        isClosable: true,
        status: 'success'
      });
      queryClient.invalidateQueries("questions".concat(data.parent_id));
    }
  });
  var deleteQuestion = (0,es.useMutation)(function (id) {
    return questionAPI["delete"](id);
  }, {
    onSuccess: function onSuccess(data) {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Question Deleted', 'masteriyo'),
        isClosable: true,
        status: 'error'
      });
      queryClient.invalidateQueries("questions".concat(data.parent_id));
      setDeleteModalOpen(false);
    }
  });

  var onDuplicatePress = function onDuplicatePress() {
    var data = {
      name: questionData.name,
      description: questionData.description,
      parent_id: questionData.parent_id,
      course_id: questionData.course_id
    };
    duplicateQuestion.mutate(data);
  };

  var onSubmit = function onSubmit(data) {
    var cleanData = deepClean(data);

    var newData = Question_objectSpread({}, cleanData.type && {
      type: cleanData.type.value
    });

    updateQuestion.mutate(deepMerge(cleanData, newData));
  };

  var onDeletePress = function onDeletePress() {
    setDeleteModalOpen(true);
  };

  var onDeleteModalClose = function onDeleteModalClose() {
    setDeleteModalOpen(false);
  };

  var onDeleteConfirm = function onDeleteConfirm() {
    deleteQuestion.mutate(questionData.id);
  };

  var iconStyles = {
    fontSize: 'x-large',
    color: 'gray.500',
    minW: 'auto',
    _hover: {
      color: 'blue.500'
    }
  };
  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_accordion_esm/* AccordionItem */.Qd, {
    borderWidth: "1px",
    borderColor: "gray.100",
    rounded: "sm",
    mb: "4",
    p: "0"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
    align: "center",
    justify: "space-between",
    px: "2",
    py: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "2",
    align: "center",
    flex: "1"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_icon_esm/* Icon */.JO, {
    as: sortable,
    fontSize: "lg",
    color: "gray.500"
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_accordion_esm/* AccordionButton */.KF, {
    _hover: {
      background: 'transparent'
    },
    px: "0"
  }, questionData.name)), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "row",
    spacing: "2"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
    variant: "unstyled",
    sx: iconStyles,
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('Duplicate', 'masteriyo'),
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiCopy */.LhG, null),
    onClick: onDuplicatePress
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* IconButton */.hU, {
    variant: "unstyled",
    sx: iconStyles,
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'),
    icon: /*#__PURE__*/external_React_default().createElement(index_esm/* BiTrash */.SW4, null),
    minW: "auto",
    onClick: onDeletePress
  }))), /*#__PURE__*/external_React_default().createElement(chakra_ui_accordion_esm/* AccordionPanel */.Hk, {
    borderTop: "1px",
    borderColor: "gray.100",
    p: "5"
  }, /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, methods, /*#__PURE__*/external_React_default().createElement("form", {
    onSubmit: methods.handleSubmit(onSubmit)
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "8"
  }, /*#__PURE__*/external_React_default().createElement(question_EditQuestion, {
    questionData: questionData,
    setQuestionType: setQuestionType,
    setAnswerData: setAnswerData
  }), /*#__PURE__*/external_React_default().createElement(answer_Answers, {
    answers: answerData,
    questionType: questionType
  }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "blue",
    type: "submit",
    isDisabled: submitQuestionDisabled,
    isLoading: updateQuestion.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Update', 'masteriyo')))))))), duplicateQuestion.isLoading && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_spinner_esm/* Spinner */.$, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialog */.aR, {
    isOpen: isDeleteModalOpen,
    onClose: onDeleteModalClose,
    isCentered: true,
    leastDestructiveRef: cancelRef
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogOverlay */.dh, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogContent */._T, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogHeader */.fY, null, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo') + ' ' + questionData.name), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogBody */.iP, null, (0,external_wp_i18n_namespaceObject.__)('Are you sure? You can’t restore after deleting.', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_modal_esm/* AlertDialogFooter */.xo, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    ref: cancelRef,
    onClick: onDeleteModalClose,
    variant: "outline"
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
    colorScheme: "red",
    onClick: onDeleteConfirm,
    isLoading: deleteQuestion.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Delete', 'masteriyo'))))))));
};

/* harmony default export */ const question_Question = (Question);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz/components/question/Questions.tsx










var Questions = function Questions(props) {
  var quizId = props.quizId,
      courseId = props.courseId;
  var questionsAPI = new api(constants_urls.questions);
  var queryClient = (0,es.useQueryClient)();
  var questionQuery = (0,es.useQuery)(["questions".concat(quizId), quizId], function () {
    return questionsAPI.list({
      parent: quizId,
      order: 'asc'
    });
  }, {
    enabled: !!quizId
  });
  var addQuestion = (0,es.useMutation)(function (data) {
    return questionsAPI.store(data);
  }, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries("questions".concat(quizId));
    }
  });

  var onAddNewQuestionPress = function onAddNewQuestionPress() {
    addQuestion.mutate({
      name: (0,external_wp_i18n_namespaceObject.__)('Untitled Question', 'masteriyo'),
      course_id: courseId,
      parent_id: quizId,
      type: 'true-false',
      answers: [{
        name: 'True',
        correct: true
      }, {
        name: 'False',
        correct: false
      }]
    });
  };

  return /*#__PURE__*/external_React_default().createElement(context_QuestionProvider, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
    direction: "column",
    spacing: "6",
    py: "8"
  }, questionQuery.isLoading && /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, {
    minH: "xs"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_spinner_esm/* Spinner */.$, null)), questionQuery.isSuccess && /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, questionQuery.data.length == 0 ? /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* Alert */.bZ, {
    status: "info",
    fontSize: "sm",
    p: "2.5"
  }, /*#__PURE__*/external_React_default().createElement(chakra_ui_alert_esm/* AlertIcon */.zM, null), (0,external_wp_i18n_namespaceObject.__)('No questions found.', 'masteriyo')) : /*#__PURE__*/external_React_default().createElement(chakra_ui_accordion_esm/* Accordion */.UQ, {
    allowToggle: true
  }, questionQuery.data.map(function (question) {
    return /*#__PURE__*/external_React_default().createElement(question_Question, {
      key: question.id,
      questionData: question
    });
  })), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Center */.M5, null, /*#__PURE__*/external_React_default().createElement(common_AddNewButton, {
    onClick: onAddNewQuestionPress,
    isLoading: addQuestion.isLoading
  }, (0,external_wp_i18n_namespaceObject.__)('Add New Question', 'masteriyo'))))));
};

/* harmony default export */ const question_Questions = (Questions);
;// CONCATENATED MODULE: ./assets/js/back-end/screens/quiz/EditQuiz.tsx





















var EditQuiz = function EditQuiz() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      quizId = _useParams.quizId,
      courseId = _useParams.courseId;

  var _useLocation = (0,react_router/* useLocation */.TH)(),
      search = _useLocation.search;

  var _queryString$parse = query_string.parse(search),
      page = _queryString$parse.page;

  var _useCourse = hooks_useCourse(),
      draftCourse = _useCourse.draftCourse,
      publishCourse = _useCourse.publishCourse;

  var methods = (0,dist_index_esm/* useForm */.cI)();
  var history = (0,react_router/* useHistory */.k6)();
  var toast = (0,chakra_ui_toast_esm/* useToast */.pm)();
  var quizAPI = new api(constants_urls.quizes);
  var courseAPI = new api(constants_urls.courses);

  var _useState = (0,external_React_.useState)(page === 'questions' ? 1 : 0),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      tabIndex = _useState2[0],
      setTabIndex = _useState2[1];

  var tabStyles = {
    fontWeight: 'medium',
    py: '4'
  };
  var tabPanelStyles = {
    p: '0'
  };
  var courseQuery = (0,es.useQuery)(["course".concat(courseId), courseId], function () {
    return courseAPI.get(courseId);
  }); // gets total number of content on section

  var quizQuery = (0,es.useQuery)(["quiz".concat(quizId), quizId], function () {
    return quizAPI.get(quizId);
  });
  var updateQuiz = (0,es.useMutation)(function (data) {
    return quizAPI.update(quizId, data);
  }, {
    onSuccess: function onSuccess() {
      toast({
        title: (0,external_wp_i18n_namespaceObject.__)('Quiz Updated', 'masteriyo'),
        isClosable: true,
        status: 'success'
      }); // methods.reset(data, {
      // 	keepDirty: false,
      // 	keepValues: true,
      // });

      courseQuery.refetch();
    }
  });

  var onSubmit = function onSubmit(data, status) {
    var newData = {
      duration: ((data === null || data === void 0 ? void 0 : data.duration_hour) || 0) * 60 + +((data === null || data === void 0 ? void 0 : data.duration_minute) || 0),
      duration_hour: null,
      duration_minute: null
    };
    status === 'draft' && draftCourse.mutate(courseId);
    status === 'publish' && publishCourse.mutate(courseId);
    updateQuiz.mutate(deepClean(deepMerge(data, newData)));
  };

  var isPublished = function isPublished() {
    var _courseQuery$data;

    if (((_courseQuery$data = courseQuery.data) === null || _courseQuery$data === void 0 ? void 0 : _courseQuery$data.status) === 'publish') {
      return true;
    } else {
      return false;
    }
  };

  var isDrafted = function isDrafted() {
    var _courseQuery$data2;

    if (((_courseQuery$data2 = courseQuery.data) === null || _courseQuery$data2 === void 0 ? void 0 : _courseQuery$data2.status) === 'draft') {
      return true;
    } else {
      return false;
    }
  };

  if (quizQuery.isSuccess && courseQuery.isSuccess && quizQuery.data.course_id == courseId) {
    var _quizQuery$data, _quizQuery$data2, _quizQuery$data3, _quizQuery$data4;

    return /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8",
      alignItems: "center"
    }, /*#__PURE__*/external_React_default().createElement(common_Header, {
      showCourseName: true,
      showLinks: true,
      showPreview: true,
      course: {
        name: courseQuery.data.name,
        id: courseQuery.data.id,
        previewUrl: courseQuery.data.permalink
      },
      secondBtn: {
        label: isDrafted() ? (0,external_wp_i18n_namespaceObject.__)('Save To Draft', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Switch To Draft', 'masteriyo'),
        action: methods.handleSubmit(function (data) {
          return onSubmit(data, 'draft');
        }),
        isLoading: draftCourse.isLoading
      },
      thirdBtn: {
        label: isPublished() ? (0,external_wp_i18n_namespaceObject.__)('Update', 'masteriyo') : (0,external_wp_i18n_namespaceObject.__)('Publish', 'masteriyo'),
        action: methods.handleSubmit(function (data) {
          return onSubmit(data, 'publish');
        }),
        isLoading: publishCourse.isLoading
      }
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Container */.W2, {
      maxW: "container.xl"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, /*#__PURE__*/external_React_default().createElement(common_BackToBuilder, null), /*#__PURE__*/external_React_default().createElement(dist_index_esm/* FormProvider */.RV, methods, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      bg: "white",
      p: "10",
      shadow: "box"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "8"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Flex */.kC, {
      aling: "center",
      justify: "space-between"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Heading */.X6, {
      as: "h1",
      fontSize: "x-large"
    }, (0,external_wp_i18n_namespaceObject.__)('Edit Quiz:', 'masteriyo'), " ", quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data = quizQuery.data) === null || _quizQuery$data === void 0 ? void 0 : _quizQuery$data.name)), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tabs */.mQ, {
      index: tabIndex,
      onChange: function onChange(index) {
        return setTabIndex(index);
      }
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabList */.td, {
      justifyContent: "center",
      borderBottom: "1px"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Info', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Questions', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* Tab */.OK, {
      sx: tabStyles
    }, (0,external_wp_i18n_namespaceObject.__)('Settings', 'masteriyo'))), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanels */.nP, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      sx: tabPanelStyles
    }), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      sx: tabPanelStyles
    }, /*#__PURE__*/external_React_default().createElement(question_Questions, {
      courseId: quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data2 = quizQuery.data) === null || _quizQuery$data2 === void 0 ? void 0 : _quizQuery$data2.course_id,
      quizId: quizId
    })), /*#__PURE__*/external_React_default().createElement(chakra_ui_tabs_esm/* TabPanel */.x4, {
      sx: tabPanelStyles
    }))), /*#__PURE__*/external_React_default().createElement("form", {
      onSubmit: methods.handleSubmit(function (data) {
        return onSubmit(data);
      })
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Stack */.Kq, {
      direction: "column",
      spacing: "6"
    }, tabIndex === 0 && /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(quiz_components_Name, {
      defaultValue: quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data3 = quizQuery.data) === null || _quizQuery$data3 === void 0 ? void 0 : _quizQuery$data3.name
    }), /*#__PURE__*/external_React_default().createElement(quiz_components_Description, {
      defaultValue: quizQuery === null || quizQuery === void 0 ? void 0 : (_quizQuery$data4 = quizQuery.data) === null || _quizQuery$data4 === void 0 ? void 0 : _quizQuery$data4.description
    })), tabIndex === 2 && /*#__PURE__*/external_React_default().createElement(quiz_components_QuizSettings, {
      quizData: quizQuery === null || quizQuery === void 0 ? void 0 : quizQuery.data
    }), tabIndex !== 1 && /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Box */.xu, {
      py: "3"
    }, /*#__PURE__*/external_React_default().createElement(chakra_ui_layout_esm/* Divider */.iz, null)), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* ButtonGroup */.hE, null, /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      colorScheme: "blue",
      type: "submit",
      isLoading: updateQuiz.isLoading
    }, (0,external_wp_i18n_namespaceObject.__)('Update', 'masteriyo')), /*#__PURE__*/external_React_default().createElement(chakra_ui_button_esm/* Button */.zx, {
      variant: "outline",
      onClick: function onClick() {
        return history.push(constants_routes.courses.edit.replace(':courseId', courseId));
      }
    }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'masteriyo'))))))))))));
  }

  return /*#__PURE__*/external_React_default().createElement(layout_FullScreenLoader, null);
};

/* harmony default export */ const quiz_EditQuiz = (EditQuiz);
;// CONCATENATED MODULE: ./assets/js/back-end/router/Router.tsx







var Router = function Router() {
  return /*#__PURE__*/external_React_default().createElement(react_router_dom/* HashRouter */.UT, null, /*#__PURE__*/external_React_default().createElement(react_router/* Switch */.rs, null, /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.orders.list,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(orders_AllOrders, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.orders.add,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(orders_CreateNewOrder, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.orders.edit,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(orders_EditOrder, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.courses.list,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(courses_AllCourses, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.courses.add,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(courses_AddNewCourse, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.course_categories.list,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(course_categories_AllCourseCategories, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.course_categories.add,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(course_categories_AddNewCourseCategory, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.course_categories.edit,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(course_categories_EditCourseCategory, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.quiz.add,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(quiz_AddNewQuiz, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.quiz.edit,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(quiz_EditQuiz, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.courses.edit,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(builder_Builder, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.lesson.add,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(lessons_AddNewLesson, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.lesson.edit,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(lessons_EditLesson, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.users.students.add,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(students_AddStudent, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.users.students.list,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(students_Students, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.users.students.edit,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(students_EditStudent, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.users.instructors.add,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(instructors_AddInstructor, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.users.instructors.list,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(instructors_Instructors, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.users.instructors.edit,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(instructors_EditInstructor, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.quiz_attempts.list,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(quiz_attempts_AllQuizAttempts, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.quiz_attempts.edit,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(quiz_attempts_ReviewQuizAttempt, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.settings,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(settings_Settings, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.addOns,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(add_ons_AddOns, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.reviews.list,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(reviews_AllReviews, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, {
    path: constants_routes.reviews.edit,
    exact: true
  }, /*#__PURE__*/external_React_default().createElement(reviews_EditReview, null)), /*#__PURE__*/external_React_default().createElement(react_router/* Route */.AW, null, /*#__PURE__*/external_React_default().createElement(_404_FourOFour, null))));
};

/* harmony default export */ const router_Router = (Router);
;// CONCATENATED MODULE: ./assets/js/back-end/App.tsx











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
  return /*#__PURE__*/external_React_default().createElement(chakra_ui_react_esm.ChakraProvider, {
    theme: theme_theme
  }, /*#__PURE__*/external_React_default().createElement(errors_ErrorBoundary, null, /*#__PURE__*/external_React_default().createElement(context_MasteriyoProvider, null, /*#__PURE__*/external_React_default().createElement(es.QueryClientProvider, {
    client: queryClient
  }, /*#__PURE__*/external_React_default().createElement(devtools.ReactQueryDevtools, {
    initialIsOpen: false
  }), /*#__PURE__*/external_React_default().createElement(CreateCatProvider, null, /*#__PURE__*/external_React_default().createElement(router_Router, null))))));
};

/* harmony default export */ const back_end_App = (App);
;// CONCATENATED MODULE: ./assets/js/back-end/index.tsx




var appRoot = document.getElementById('masteriyo');

if (appRoot) {
  external_ReactDOM_default().render( /*#__PURE__*/external_React_default().createElement(back_end_App, null), appRoot);
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
/******/ 		__webpack_require__.j = 154;
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
/******/ 			154: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [697], () => (__webpack_require__(5783)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;