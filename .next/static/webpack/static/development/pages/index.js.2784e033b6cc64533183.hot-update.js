webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ImageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ImageWrapper */ "./components/ImageWrapper.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/home/yerlan/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/projects/unsplash/pages/index.js";






var APP_ID = "75c17e375bb7f1947c0d7a32bbb85266511f0b099485492db887fb79c6ef40e6"; // "5fb3168316b9dbcd49a7a52129ae0f48c358dda1915d87bd96f7b7c3a35bf3b2"

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      images = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      result = _useState6[0],
      setResult = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getImages();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(images);
  }); // useEffect(() => {
  //   searchImages()
  // }, [search])

  var searchImages = function searchImages() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://api.unsplash.com/search/photos/?page=1&per_page=10&query=".concat(search, "&client_id=").concat(APP_ID)).then(function (data) {
      setData(data.data.results);
    }).catch(function (err) {
      console.log("Error happened during fetching!", err);
    });
  };

  var getImages = function getImages() {
    var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(search ? "https://api.unsplash.com/photos/random?client_id=".concat(APP_ID, "&count=").concat(count) : "https://api.unsplash.com/search/photos/?page=1&per_page=10&query=".concat(search, "&client_id=").concat(APP_ID)).then(function (data) {
      setData([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(images), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.data)));
    }).catch(function (err) {
      console.log(err);
    });
  };

  var _onSearch = function onSearch(val) {
    setSearch(val);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onSearch: function onSearch(val) {
      return _onSearch(val);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5___default.a, {
    loadMore: function loadMore() {
      return getImages(5);
    },
    pageStart: 0,
    hasMore: true,
    loader: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "loader",
      key: 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Loading ..."),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "image-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, images ? images.map(function (item, idx) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ImageWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      url: item.urls.small,
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    });
  }) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.2784e033b6cc64533183.hot-update.js.map