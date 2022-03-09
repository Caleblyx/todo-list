/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"header {\\n    font-size: 50px;\\n    font-family: 'Fredoka', sans-serif;\\n    font-weight: 800;\\n    height: 80px;\\n    display: flex;\\n    align-items: center;\\n    background-color: #947360;\\n    border-bottom: #5e070a solid 3px;\\n    color: white;\\n    padding-left: 20px;\\n}\\n\\nhtml{\\n    height: 100%;\\n}\\n\\nbody{\\n    margin: 0px;\\n    height: 100%;\\n}\\n\\n#content {\\n    display: flex;\\n    width: 100%;\\n    height: 100%;\\n\\n}\\n\\n#project{\\n    width: 75%;\\n    padding: 40px;\\n}\\n\\n#todo-list{\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 20px;\\n    margin-top: 10px;\\n}\\n\\n.todo{\\n    box-sizing: border-box;\\n    font-family: 'Fredoka', sans-serif;\\n    font-size: 18px;\\n    background-color: #A1AFA0;\\n    width: 100%;\\n    border-radius:  10px;\\n    padding: 10px 30px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n#project-name{\\n    font-family: 'Fredoka', sans-serif;\\n    font-weight: 800;\\n    font-size: 36px;\\n    width: 80%;\\n}\\n\\n.project-name-editable:hover{\\n    border: solid 1px black;\\n}\\n\\n.project-name-editable:focus {\\n    border: solid 1px black;\\n}\\n\\n#title,\\n.todo-title{\\n    font-size: 24px;\\n    font-weight: 600;\\n}\\n\\n#add-todo-button:hover{\\n    color: gray;\\n}\\n\\n#add-todo-form{\\n    display: none;\\n    margin-top: 20px;\\n    flex-direction: column;\\n    gap: 10px;\\n    background-color: #F7EDD0;\\n    padding: 20px;\\n    border-radius: 20px;\\n\\n}\\n\\n.tick-image{\\n    width: 50px;\\n    height: auto;\\n    filter: brightness(100%);\\n    border-radius: 50%;\\n    opacity: 0%;\\n}\\n\\n.tick-image:hover{\\n    opacity: 30%;\\n}\\n\\n.tick-image-checked{\\n    opacity: 100%;\\n}\\n\\n.dot {\\n    width: 50px;\\n    height: 50px;\\n    background-color: white;\\n    border-radius: 50%;\\n  }\\n\\n.todo-details {\\n    width: 80%;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 10px;\\n}\\n\\n.todo-selectors{\\n    display:flex;\\n    gap: 10px;\\n    font-family: 'Fredoka', sans-serif;\\n}\\n\\ninput{\\n    font-family: 'Fredoka', sans-serif;\\n    font-size: 14px;\\n}\\n\\noption{\\n    font-family: 'Fredoka', sans-serif;\\n}\\n\\n.buttons{\\n    display: flex;\\n    align-items: center;\\n    gap: 20px;\\n}\\n\\n.delete-button{\\n    width: 30px;\\n}\\n\\n.delete-button:hover{\\n    filter:contrast(0.2);\\n}\\n\\n#add-todo-button{\\n    font-family: 'Fredoka', sans-serif;\\n    font-size: 20px;\\n    display: flex;\\n    align-items: center;\\n    margin: 20px;\\n    gap: 10px;\\n}\\n\\n.add-image{\\n    width: 40px;\\n    transition: transform 1s;\\n}\\n\\n.add-image:hover{\\n    transform: rotate(90deg);\\n}\\n\\n#confirm-button{\\n    width: 80px;\\n}\\n\\n#projects {\\n    background-color: #970C10;\\n    width: 20%;\\n    border-right: solid #5e070a 3px;\\n    color: white;\\n    padding-top: 10px;\\n    height: 100%;\\n}\\n\\n#projects-title{\\n    font-family: 'Fredoka', sans-serif;\\n    font-size: 36px;\\n    font-weight: 800;\\n    padding-left: 20px;\\n}\\n\\n#name {\\n    font-size: 18px;\\n    width: 80%;\\n}\\n\\n#add-project-form{\\n    padding-top: 20px;\\n    display: none;\\n    flex-direction: column;\\n    gap: 10px;\\n    padding-left: 20px;\\n}\\n\\n#add-project-button{\\n    font-family: 'Fredoka', sans-serif;\\n    font-size: 18px;\\n    color: white;\\n    padding: 10px 20px;\\n}\\n\\n#project-confirm-button{\\n    width: 30%;\\n}\\n\\n#add-project-button:hover{\\n    color: rgb(184, 164, 52);\\n}\\n.projects-list-item{\\n    padding: 10px 20px;\\n    font-family: 'Fredoka', sans-serif;\\n    font-size: 28px;\\n    width: 100%;\\n    border-top:#160202 1px solid;\\n    border-bottom: #160202 1px solid;\\n    box-sizing: border-box;\\n}\\n\\n.projects-list-item:hover{\\n    background-color: rgba(255,255,255, 0.2);\\n}\\n\\n#projects-list{\\n    margin-top: 20px;\\n}\\n\\n.selected-project {\\n    background-color: rgba(0,0,0, 0.2);\\n}\\n\\n#project-panel{\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: 100%;\\n}\\n\\n#delete-project-button{\\n    font-family: 'Fredoka', 'sans-serif';\\n    background-color: #970C10;\\n    color: white;\\n    font-size: 32px;\\n    border-radius: 20px;\\n    padding: 20px;\\n}\\n\\n#delete-project-button:hover{\\n    background-color:#5e070a;\\n}\\n\\n#delete-project-button:active{\\n    background-color: #330506;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/event-aggregator.js":
/*!*********************************!*\
  !*** ./src/event-aggregator.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventAggregator\": () => (/* binding */ eventAggregator)\n/* harmony export */ });\n/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.js */ \"./src/event.js\");\n\n\nconst eventAggregator = (function () {\n    const events = [];\n    function getEvent(name) {\n        let event = events.find(e => e.name == name);\n        return event;\n    }\n\n    const publish = function(eventName, eventArgs) {\n        let event = getEvent(eventName);\n        console.log(\"publishing: \" + eventName + \" with \" + eventArgs);\n        if (!event) {\n            event = new _event_js__WEBPACK_IMPORTED_MODULE_0__.Event(eventName);\n            events.push(event);\n        }\n        event.invokeHandlers(eventArgs);\n    }\n\n    const subscribe = function(eventName, handler) {\n        let event = getEvent(eventName);\n        console.log(\"subscribing: \" + eventName + \" with \" + handler);\n        if (!event) {\n            event = new _event_js__WEBPACK_IMPORTED_MODULE_0__.Event(eventName);\n            events.push(event);\n        }\n        event.addHandler(handler);\n    }\n\n    return {\n        publish,\n        subscribe\n    }\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/event-aggregator.js?");

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Event\": () => (/* binding */ Event)\n/* harmony export */ });\nfunction Event(name) {\n    this.handlers = []\n    this.name = name\n}\n\nEvent.prototype.addHandler = function (handler){\n    this.handlers.push(handler);\n}\n\nEvent.prototype.invokeHandlers = function (args) {\n    this.handlers.forEach(handler => handler(args));\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/event.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _projectUIController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectUIController */ \"./src/projectUIController.js\");\n/* harmony import */ var _project_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-controller */ \"./src/project-controller.js\");\n/* harmony import */ var _todo_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-controller */ \"./src/todo-controller.js\");\n/* harmony import */ var _project_list_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-list-controller */ \"./src/project-list-controller.js\");\n/* harmony import */ var _projectsListUIController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projectsListUIController */ \"./src/projectsListUIController.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\n\n\n\n\n\n\n_storage__WEBPACK_IMPORTED_MODULE_8__.storage.loadProjects();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project-controller.js":
/*!***********************************!*\
  !*** ./src/project-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectController\": () => (/* binding */ projectController)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _event_aggregator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-aggregator */ \"./src/event-aggregator.js\");\n\n\n\n\nconst projectController = function() {\n       \n    let selectedProject = null;\n\n    const createProject = function(args) {\n        _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"add-project\", (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.project)(args.name));\n    }\n\n    const setProject = function(project) {\n        if (selectedProject != project) {\n            selectedProject = project;\n            _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"show-project\", selectedProject);\n        }\n    }\n\n    const addTodo = function(todo) {\n        selectedProject.addTodo(todo);\n        _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"save\", {});\n    }\n\n    const deleteTodo = function(todo) {\n        selectedProject.deleteTodo(todo);\n        _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"save\", {});\n    }\n\n    const setName = function(name) {\n        console.log(selectedProject);\n        selectedProject.setName(name);\n        _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"save\", {});\n    }\n\n    const deleteProject = function(args) {\n        _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"delete-project-from-list\", selectedProject);\n        selectedProject = null;\n    }\n\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"add-todo\", addTodo);\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"delete-todo\", deleteTodo);\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"create-project\", createProject);\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"select-project\", setProject);\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"edit-project-name\", setName);\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"delete-project\", deleteProject);\n    return {\n        setProject\n    }\n}()\n\n \n\n//# sourceURL=webpack://todo-list/./src/project-controller.js?");

/***/ }),

/***/ "./src/project-list-controller.js":
/*!****************************************!*\
  !*** ./src/project-list-controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsListController\": () => (/* binding */ projectsListController)\n/* harmony export */ });\n/* harmony import */ var _event_aggregator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-aggregator */ \"./src/event-aggregator.js\");\n/* harmony import */ var _projects_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-list */ \"./src/projects-list.js\");\n\n\nconst projectsListController = function() {\n    const list = _projects_list__WEBPACK_IMPORTED_MODULE_1__.projectsList;\n\n    const addProject = function(project) {\n        list.addProject(project);\n        _event_aggregator__WEBPACK_IMPORTED_MODULE_0__.eventAggregator.publish(\"save\", {});\n    }\n\n    const deleteProject = function(project) {\n        list.deleteProject(project);\n        console.log(list.getProjects());\n        _event_aggregator__WEBPACK_IMPORTED_MODULE_0__.eventAggregator.publish(\"save\", {});\n    }\n\n    const setProjectsList = function(projectsList) {\n        list.setProjectsList(projectsList);\n        _event_aggregator__WEBPACK_IMPORTED_MODULE_0__.eventAggregator.publish(\"display-projects-list\", list.getProjects());\n    }\n\n    const getProjects = function () {\n        return list.getProjects();\n    }\n\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_0__.eventAggregator.subscribe(\"add-project\", addProject);\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_0__.eventAggregator.subscribe(\"delete-project-from-list\", deleteProject);\n\n    return {setProjectsList, getProjects};\n}();\n\n\n\n//# sourceURL=webpack://todo-list/./src/project-list-controller.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project)\n/* harmony export */ });\n\nconst project = function(newName) {\n    let project = Object.create(projectPrototype);\n    project.todos = [];\n    project.name = newName;\n\n\n    return project;\n}\n\n\nconst projectPrototype = {\n    addTodo(todo) {\n        this.todos.push(todo);\n    },\n    deleteTodo(todo) {\n        let index = this.todos.indexOf(todo);\n        this.todos.splice(index, 1);\n        console.log(this.todos);\n    },\n    getTodos() {\n        return this.todos;\n    },\n    getName() {\n        return this.name;\n    },\n    setName(newName) {\n        this.name = newName;\n    }\n\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectUIController.js":
/*!************************************!*\
  !*** ./src/projectUIController.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectUIController\": () => (/* binding */ projectUIController)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _event_aggregator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-aggregator */ \"./src/event-aggregator.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _images_tick_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/tick-icon.png */ \"./src/images/tick-icon.png\");\n/* harmony import */ var _images_delete_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/delete-icon.png */ \"./src/images/delete-icon.png\");\n/* harmony import */ var _images_plus_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/plus.png */ \"./src/images/plus.png\");\n\n\n\n\n\n\nconst projectUIController = (function() {\n    const previousName = \"Default\";\n    const projectName = document.querySelector(\"#project-name\");\n    const toDoList = document.querySelector(\"#todo-list\");\n    const form = document.querySelector(\"#add-todo-form\");\n    const addButton = document.querySelector(\"#add-todo-button\");\n    const cancelButton = document.querySelector(\"#cancel-button\");\n    const deleteProjectButton = document.querySelector('#delete-project-button');\n    const openForm = function() {\n        addButton.style.display = \"none\";\n        form.style.display = \"flex\";\n    }\n\n    const createTodo = function(e) {\n        e.preventDefault();\n        addButton.style.display = \"flex\";\n        const formData = new FormData(this);\n        const toDoArgs = {\"title\" : formData.get(\"title\"), \"desc\": formData.get(\"description\"), \"dueDate\": formData.get(\"due-date\"), \"priority\" : formData.get(\"priority\")};\n        _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"create-todo\", toDoArgs);\n        form.reset();\n        form.style.display = \"none\";\n    }\n\n    const closeForm = function() {\n        addButton.style.display=\"flex\";\n        form.style.display = \"none\";\n\n    }\n\n    const showDefault = function() {\n        resetProjectView();\n        projectName.classList.remove(\"project-name-editable\");\n        projectName.textContent = \"Select or create a new project to view or create new tasks.\";\n        projectName.contentEditable = false;\n        deleteProjectButton.style.display = \"none\";\n        addButton.style.display = \"none\";\n    }\n\n    const editProjectName = function(e) {\n        this.textContent = this.textContent.trim();\n        if (this.textContent == \"\") {\n            alert(\"Project name cannot be empty\");\n            this.textContent = previousName;\n        } else if (this.textContent != previousName){\n            _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"edit-project-name\", this.textContent);\n        }\n    }\n    const resetProjectView = function() {\n        projectName.innerHTML = \"\";\n        toDoList.innerHTML= \"\";\n    }\n    \n    const addToDoToView = function(todo) {\n        const todoDiv = todoView(todo);\n        toDoList.appendChild(todoDiv);\n\n    }\n\n    const saveProjectName = function(e){\n        previousName = this.textContent;\n    } \n\n    const showProject = function(project) {\n        resetProjectView();\n        projectName.classList.add(\"project-name-editable\");\n        projectName.contentEditable = true;\n        deleteProjectButton.style.display = \"block\";\n        addButton.style.display = \"block\";\n        projectName.textContent = project.getName();\n        projectName.addEventListener(\"onfocus\", saveProjectName);\n        projectName.addEventListener(\"focusout\", editProjectName);\n        for (let todo of project.getTodos()) {\n            addToDoToView(todo);\n        }\n    }\n\n    const deleteProject = function(e) {\n        if (confirm(\"Are you sure you want to delete this project?\")) {\n            _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"delete-project\", {});\n            showDefault();\n        }\n    } \n\n\n    const addImage = document.querySelector(\".add-image\");\n    addImage.src = _images_plus_png__WEBPACK_IMPORTED_MODULE_5__;\n\n    addButton.addEventListener(\"click\", openForm);\n    form.addEventListener(\"submit\", createTodo);\n\n    cancelButton.addEventListener(\"click\", closeForm);\n\n    \n    deleteProjectButton.addEventListener(\"click\", deleteProject);\n\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"show-project\", showProject);\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"add-todo\", addToDoToView);\n\n\n\n    showDefault();\n\n    return {\n        addToDoToView,\n        showProject\n    }\n})();\n\n\nconst todoView = function (todo) {\n\n    function selectTodo(e) {\n        console.log(\"Executing select to-do\");\n        _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"select-todo\", todo);\n    } \n\n    function editTitle(e) {\n        this.textContent = this.textContent.trim()\n        if (this.textContent == \"\") {\n            alert(\"To do title cannot be empty\");\n            this.textContent = todo.getTitle();\n        } else if (this.textContent != todo.getTitle()){\n            _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"edit-title\", this.textContent);\n        } \n    }\n\n    function editDesc(e) {\n        if (this.textContent != todo.getDesc()) {\n            _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"edit-description\", this.textContent);\n        }\n    }\n\n    function editDueDate(e) {\n        if (this.value != todo.getDueDate()) {\n            _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"edit-due-date\", this.value);\n        }\n    }\n\n    function editPriority(e){\n        if (this.value != todo.getPriority()) {\n            _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"edit-priority\", this.value);\n        }\n    }\n\n    function toggleDone(e) {\n        console.log(\"Executing toggle done\");\n        if (this.classList.contains(\"tick-image-checked\")) {\n            this.classList.remove(\"tick-image-checked\");\n        } else {\n            this.classList.add(\"tick-image-checked\");\n        }\n        _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"toggle-done\", {});\n    }\n\n    function deleteTodo(e) {\n        _event_aggregator__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"delete-todo\", todo);\n        todoDiv.remove();\n    }\n\n\n\n    const todoDiv = document.createElement(\"div\");\n    todoDiv.classList.add(\"todo\");\n    todoDiv.addEventListener(\"click\", selectTodo, {capture: true});\n\n\n    const details = document.createElement(\"div\");\n    details.classList.add(\"todo-details\");\n    todoDiv.appendChild(details);\n\n    const title = document.createElement(\"div\");\n    title.contentEditable = true;\n    title.textContent = todo.getTitle();\n    title.classList.add(\"todo-title\");\n    title.addEventListener(\"focusout\", editTitle);\n\n    const desc = document.createElement(\"div\");\n    desc.textContent = todo.getDesc();\n    desc.contentEditable = \"true\";\n    desc.addEventListener(\"focusout\", editDesc);\n\n    const dueDate = document.createElement(\"input\");\n    dueDate.type = \"date\";\n    dueDate.value = todo.getDueDate();\n    dueDate.addEventListener(\"input\", editDueDate);\n\n    const priority = document.createElement(\"select\");\n    const options = ['low', 'medium', 'high'];\n\n    for (let opt of options) {\n        let option = document.createElement(\"option\");\n        option.value = opt;\n        option.textContent = opt;\n        priority.appendChild(option);\n    } \n\n    priority.value = todo.getPriority();\n    priority.addEventListener(\"input\", editPriority);\n\n    const selectors = document.createElement(\"div\");\n    selectors.classList.add(\"todo-selectors\");\n    selectors.appendChild(dueDate);\n    selectors.appendChild(priority);\n\n\n    const tick = new Image();\n    tick.src = _images_tick_icon_png__WEBPACK_IMPORTED_MODULE_3__;\n    tick.classList.add(\"tick-image\");\n    if (todo.getDone()){\n        tick.classList.add(\"tick-image-checked\");\n    }\n\n    tick.addEventListener(\"click\", toggleDone);\n\n    const blackCircle = document.createElement(\"div\");\n    blackCircle.classList.add(\"dot\");\n    blackCircle.appendChild(tick);\n    \n    const deleteButton = new Image();\n    deleteButton.src = _images_delete_icon_png__WEBPACK_IMPORTED_MODULE_4__;\n    deleteButton.classList.add(\"delete-button\");\n    deleteButton.addEventListener(\"click\", deleteTodo);\n\n    const buttons = document.createElement(\"div\");\n    buttons.classList.add(\"buttons\");\n    buttons.appendChild(deleteButton);\n    buttons.appendChild(blackCircle);\n        \n\n    details.appendChild(title);\n    details.appendChild(desc);\n    details.appendChild(selectors);\n\n    todoDiv.appendChild(buttons);\n\n    return todoDiv;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectUIController.js?");

/***/ }),

/***/ "./src/projects-list.js":
/*!******************************!*\
  !*** ./src/projects-list.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsList\": () => (/* binding */ projectsList)\n/* harmony export */ });\nconst projectsListPrototype = {\n    getProjects() {\n        return this.projects;\n    },\n    addProject(project){\n        this.projects.push(project);\n    },\n    deleteProject(project){\n        let index =this.projects.indexOf(project);\n        this.projects.splice(index, 1);\n    },\n    setProjectsList(list) {\n        this.projects = list;\n    }\n}\n\n\nconst projectsList = function(){\n    const projectsList = Object.create(projectsListPrototype);\n    projectsList.projects = [];\n    return projectsList;\n}();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projects-list.js?");

/***/ }),

/***/ "./src/projectsListUIController.js":
/*!*****************************************!*\
  !*** ./src/projectsListUIController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsListsUIController\": () => (/* binding */ projectsListsUIController)\n/* harmony export */ });\n/* harmony import */ var _event_aggregator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-aggregator */ \"./src/event-aggregator.js\");\n\n\nconst projectsListsUIController = function() {\n    const list = document.querySelector(\"#projects-list\");\n    const addProjectButton = document.querySelector(\"#add-project-button\");\n    const form = document.querySelector(\"#add-project-form\");\n    const cancelButton = document.querySelector(\"#project-cancel-button\");\n\n    const displayProjects = function (projectsList) {\n        for (let project of projectsList) {\n            list.appendChild(projectView(project).projectDiv);\n        }\n    } \n\n    const editSelectedProjectName = function (name) {\n        let selected = document.querySelector(\".selected-project\");\n        selected.textContent = name;\n    }\n\n    const deleteSelectedProject = function(args) {\n        let selected = document.querySelector(\".selected-project\");\n        selected.remove();\n    }\n\n    const showAddProjectForm = function(e) {\n        addProjectButton.style.display = \"none\";\n        form.style.display = \"flex\";\n    }\n\n    const createProject = function(e){\n        e.preventDefault();\n        addProjectButton.style.display = 'block';\n        const formData = new FormData(this);\n        const projectArgs = {\"name\" : formData.get(\"project-name\")};\n        _event_aggregator__WEBPACK_IMPORTED_MODULE_0__.eventAggregator.publish(\"create-project\", projectArgs);\n        form.reset();\n        form.style.display = \"none\";\n    }\n\n    const addProject = function(project) {\n        const projectUI = projectView(project);\n        list.appendChild(projectUI.projectDiv);\n        projectUI.selectProject();\n    }\n\n    const closeAddProjectForm = function (e){\n        addProjectButton.style.display = \"block\";\n        form.style.display = \"none\";\n    }\n\n    cancelButton.addEventListener(\"click\", closeAddProjectForm);\n    addProjectButton.addEventListener(\"click\", showAddProjectForm);\n    form.addEventListener(\"submit\", createProject);\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_0__.eventAggregator.subscribe(\"add-project\", addProject);\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_0__.eventAggregator.subscribe(\"display-projects-list\", displayProjects);\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_0__.eventAggregator.subscribe(\"edit-project-name\", editSelectedProjectName);\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_0__.eventAggregator.subscribe(\"delete-project\", deleteSelectedProject);\n}();\n\nconst projectView = function(project) {\n\n    const selectProject = function(e) {\n        let selected = document.querySelector(\".selected-project\");\n        if (selected){\n            selected.classList.remove(\"selected-project\");\n        }\n        projectDiv.classList.add(\"selected-project\");\n        _event_aggregator__WEBPACK_IMPORTED_MODULE_0__.eventAggregator.publish(\"select-project\", project);\n    }\n\n    const projectDiv= document.createElement(\"div\");\n    projectDiv.classList.add(\"projects-list-item\");\n    projectDiv.textContent = project.getName();\n\n    projectDiv.addEventListener(\"click\", selectProject);\n    \n    return {projectDiv,\n            selectProject};\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectsListUIController.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var _project_list_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-list-controller */ \"./src/project-list-controller.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _event_aggregator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-aggregator */ \"./src/event-aggregator.js\");\n\n\n\n\n\nconst storage = function() {\n    const saveProjects = function(args) {\n        localStorage.setItem(\"projects\", JSON.stringify(_project_list_controller__WEBPACK_IMPORTED_MODULE_0__.projectsListController.getProjects()));\n    }\n\n    const loadProjects = function() {\n        let loadedProjects = localStorage.getItem(\"projects\");\n        loadedProjects = JSON.parse(loadedProjects);\n        const projects = []\n        loadedProjects.forEach(projectArgs => projects.push(loadProject(projectArgs)));\n        _project_list_controller__WEBPACK_IMPORTED_MODULE_0__.projectsListController.setProjectsList(projects);\n    }\n\n    const loadProject = function(projectArgs){\n        const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.project)(projectArgs.name);\n        projectArgs.todos.forEach(todoArgs => newProject.addTodo(loadTodo(todoArgs)));\n        return newProject\n    }\n\n    const loadTodo = function(todoArgs) {\n        const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.todo)(todoArgs.title, todoArgs.desc, todoArgs.dueDate, todoArgs.priority, todoArgs.done);\n        return newTodo\n    }\n    _event_aggregator__WEBPACK_IMPORTED_MODULE_3__.eventAggregator.subscribe(\"save\", saveProjects);\n\n    return {loadProjects};\n}();\n\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/todo-controller.js":
/*!********************************!*\
  !*** ./src/todo-controller.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoController\": () => (/* binding */ todoController)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-aggregator.js */ \"./src/event-aggregator.js\");\n\n\nconst todoController = function() {\n    \n    let selectedTodo = null;\n\n    const setTodo = function(todo) {\n        selectedTodo = todo;\n    }\n    const createTodo = function (args) {\n        _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"add-todo\", (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.todo)(args.title, args.desc, args.dueDate, args.priority));\n    }\n\n    const editTitle = function (newTitle) {\n        selectedTodo.setTitle(newTitle);\n        _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"save\", {});\n    }\n\n    const editDesc = function (newDesc) {\n        selectedTodo.setDesc(newDesc);\n        _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"save\", {});\n    }\n\n    const editDueDate = function (newDueDate) {\n        selectedTodo.setDueDate(newDueDate);\n        _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"save\", {});\n    }\n\n    const editPriority = function (newPriority) {\n        selectedTodo.setPriority(newPriority);\n        _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"save\", {});\n    }\n\n    const toggleDone = function (args) {\n        selectedTodo.toggleDone();\n        _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"save\", {});\n    }\n\n    const deleteTodo = function (args) {\n        selectedTodo = null;\n        _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.publish(\"save\", {});\n    }\n\n    _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"create-todo\", createTodo);\n    _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"select-todo\", setTodo);\n    _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"edit-title\", editTitle);\n    _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"edit-description\", editDesc);\n    _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"edit-due-date\", editDueDate);\n    _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"edit-priority\", editPriority);\n    _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"toggle-done\", toggleDone);\n    _event_aggregator_js__WEBPACK_IMPORTED_MODULE_1__.eventAggregator.subscribe(\"delete-todo\", deleteTodo);\n}();\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo-controller.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\nconst todo = function (newTitle, newDesc = \"No Description\", newDueDate = \"None\", newPriority = \"None\", done = false) {\n\n    let todo = Object.create(todoPrototype);\n    todo.title = newTitle;\n    todo.desc = newDesc;\n    todo.dueDate = newDueDate;\n    todo.priority = newPriority;\n    todo.done = done;\n    return todo;\n} \n\nconst todoPrototype = {\n\n    getTitle() {\n        return this.title;\n    },\n    setTitle(newTitle) {\n        this.title = newTitle;\n    },\n\n    getDesc() {\n        return this.desc;\n    },\n\n    setDesc(newDesc) {\n        this.desc = newDesc;\n    },\n\n    getDueDate() {\n        return this.dueDate;\n    },\n\n    setDueDate(newDueDate) {\n        this.dueDate = newDueDate;\n    },\n\n    getPriority(){\n        return this.priority;\n    },\n    \n    setPriority(newPriority) {\n        this.priority = newPriority;\n    },\n\n    getDone(){\n        return this.done;\n    },\n    \n    toggleDone(){\n        this.done = !this.done;\n    }\n\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/images/delete-icon.png":
/*!************************************!*\
  !*** ./src/images/delete-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0c294001661f4fb66a5b.png\";\n\n//# sourceURL=webpack://todo-list/./src/images/delete-icon.png?");

/***/ }),

/***/ "./src/images/plus.png":
/*!*****************************!*\
  !*** ./src/images/plus.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"91041acae134b848db20.png\";\n\n//# sourceURL=webpack://todo-list/./src/images/plus.png?");

/***/ }),

/***/ "./src/images/tick-icon.png":
/*!**********************************!*\
  !*** ./src/images/tick-icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"01471d3b8a6733d3d111.png\";\n\n//# sourceURL=webpack://todo-list/./src/images/tick-icon.png?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;