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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ImageWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ImageWrapper */ "./components/ImageWrapper.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "/home/yerlan/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/projects/unsplash/pages/index.js";






var APP_ID = // "75c17e375bb7f1947c0d7a32bbb85266511f0b099485492db887fb79c6ef40e6"
// "5fb3168316b9dbcd49a7a52129ae0f48c358dda1915d87bd96f7b7c3a35bf3b2"
"75eab7600bf1c0159118b5d5fedfa1d2c16a2c1ec2c14dab57832738852ee432";

var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      images: [],
      search: "",
      result: ""
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "getImages",
    value: function getImages() {
      var _this2 = this;

      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://api.unsplash.com/photos/random?client_id=".concat(APP_ID, "&count=").concat(count)).then(function (data) {
        _this2.setState({
          images: data.data
        });

        setData([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(images), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.data)));
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      co;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SearchBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onSearch: function (_onSearch) {
          function onSearch(_x) {
            return _onSearch.apply(this, arguments);
          }

          onSearch.toString = function () {
            return _onSearch.toString();
          };

          return onSearch;
        }(function (val) {
          return onSearch(val);
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_11___default.a, {
        loadMore: function loadMore() {
          return getImages(5);
        },
        pageStart: 0,
        hasMore: true,
        loader: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "loader",
          key: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "Loading ..."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "image-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, images ? images.map(function (item, idx) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_ImageWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
          url: item.urls.small,
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        });
      }) : null)));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index); // const Index = () => {
//   const [images, setData] = useState([])
//   const [search, setSearch] = useState("")
//   const [result, setResult] = useState(null)
//   useEffect(() => {
//     getImages()
//   }, [])
//   useEffect(() => {
//     console.log(images)
//   })
//   useEffect(() => {
//     searchImages()
//   }, [search])
//   const searchImages = count => {
//     axios
//       .get(
//         `https://api.unsplash.com/search/photos/?page=1&per_page=${count}&query=${search}&client_id=${APP_ID}`,
//       )
//       .then(data => {
//         setResult([...data.data.results, ...result])
//       })
//       .catch(err => {
//         console.log("Error happened during fetching!", err)
//       })
//   }
//   const getImages = (count = 10) => {
//     axios
//       .get(
//         `https://api.unsplash.com/photos/random?client_id=${APP_ID}&count=${count}`,
//       )
//       .then(data => {
//         setData([...images, ...data.data])
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
//   const onSearch = val => {
//     setSearch(val)
//   }
//   return (
//     <div className="wrapper">
//       <SearchBar onSearch={val => onSearch(val)} />
//       <InfiniteScroll
//         loadMore={search ? () => searchImages(5) : () => getImages(5)}
//         pageStart={0}
//         hasMore={true}
//         loader={
//           <div className="loader" key={0}>
//             Loading ...
//           </div>
//         }
//       >
//         <div className="image-grid">
//           {images
//             ? images.map((item, idx) => {
//                 return <ImageWrapper url={item.urls.small} key={idx} />
//               })
//             : null}
//         </div>
//       </InfiniteScroll>
//     </div>
//   )
// }
// export default Index

/***/ })

})
//# sourceMappingURL=index.js.39ea60bba550346f8607.hot-update.js.map