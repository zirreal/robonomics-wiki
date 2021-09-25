(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ru--spot-lesson-4-md"],{

/***/ "4PIf":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"108a2ad9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/spot-lesson4.md?vue&type=template&id=d77fc438& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_vm._v(\"In the fourth lesson you will learn how to record and play autonomous missions with GraphNav service.\")]),_c('h2',{attrs:{\"id\":\"the-challenge\"}},[_c('a',{attrs:{\"href\":\"#the-challenge\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"The challenge\")]),_c('p',[_vm._v(\"This lesson you can solve the challenge without writing your own Python script.\")]),_c('ol',[_c('li',[_vm._v(\"Record a map avioding obstacles. You can use WASD remote control tool. Save your mission in \"),_c('code',{pre:true},[_vm._v(\"/home/student/result\")]),_vm._v(\".\")]),_c('li',[_vm._v(\"Move Spot through recorded waypoints. You can use GraphNav service command line tool.\")])]),_c('h2',{attrs:{\"id\":\"theory\"}},[_c('a',{attrs:{\"href\":\"#theory\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Theory\")]),_c('p',[_vm._v(\"The Spot SDK includes APIs, client libraries, and examples that support the development of autonomous navigation behaviors for the Spot robot. Collectively, this service is referred to as GraphNav. Maps are recorded and saved and later can be replayed with any robot in your fleet. During the map recording process, you can assign actions and API callbacks to waypoints along the map route.\")]),_c('p',[_vm._v(\"Read \"),_c('a',{attrs:{\"href\":\"https://dev.bostondynamics.com/docs/concepts/autonomy/graphnav_tech_summary\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"GraphNav Tech Summary\")]),_vm._v(\" to learn how it works. \"),_c('a',{attrs:{\"href\":\"https://dev.bostondynamics.com/docs/concepts/autonomy/initialization\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Initialisation\")]),_vm._v(\" is also important part, it will be usefull in this lesson.\")]),_c('blockquote',[_c('p',[_vm._v(\"You can view recorded maps with \"),_c('a',{attrs:{\"href\":\"https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_view_map\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"View Map\")]),_vm._v(\" example. For that you need to copy the map to your computer:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"scp -r student@strelka.ygg.merklebot.com:<path_to_the_map_on_spot> <path_to_the_map_to_download>\")])]),_c('p',[_vm._v(\"Also you need \"),_c('a',{attrs:{\"href\":\"https://github.com/boston-dynamics/spot-sdk/blob/master/docs/python/quickstart.md#install-spot-python-packages\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"install spot packages\")]),_vm._v(\".\")])]),_c('p',[_vm._v(\"Study \"),_c('a',{attrs:{\"href\":\"https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_command_line\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"recording and playing missions\")]),_vm._v(\" examples in order to use it to record the map and playback the mission recorded.\\nUse \"),_c('a',{attrs:{\"href\":\"https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/wasd\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"wasd\")]),_vm._v(\" example to move robot while recording the map.\")]),_c('h2',{attrs:{\"id\":\"practice\"}},[_c('a',{attrs:{\"href\":\"#practice\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Practice\")]),_c('blockquote',[_c('p',[_vm._v(\"Ensure you have Yggdrasil Network software running and configured as described in the \"),_c('a',{attrs:{\"href\":\"/docs/spot-lesson0\"}},[_vm._v(\"Lesson 0\")]),_vm._v(\". Otherwise you will not have connection to the robot.\\nOn macOS you may need to launch Yggdrasil Network in the terminal:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"sudo yggdrasil -useconffile /etc/yggdrasil.conf\")])])]),_c('ol',[_c('li',[_vm._v(\"Connect to Spot from a terminal or using your development environment remote execution function.\")])]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-console\"}},[_vm._v(\"ssh student@strelka.ygg.merklebot.com\")])]),_c('ol',{attrs:{\"start\":\"2\"}},[_c('li',[_vm._v(\"Develop and demonstrate your solution to the challenge.\")])]),_c('p',[_vm._v(\"We create \"),_c('a',{attrs:{\"href\":\"https://dev.bostondynamics.com/python/examples/estop/readme\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"E-Stop endpoint\")]),_vm._v(\" for you, so you should not create it.\\nFor Spot authentication use username and password from \"),_c('code',{pre:true},[_vm._v(\"/home/student/credentials\")]),_vm._v(\" file.\\nSpot address is \"),_c('code',{pre:true},[_vm._v(\"192.168.50.3\")]),_vm._v(\".\")]),_c('p',[_vm._v(\"You can run remote control tool from examples directory.\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-console\"}},[_vm._v(\"cd ~/spot-sdk/python/examples/wasd\\npython3 wasd.py --username <SPOT_AUTH_USERNAME> --password <SPOT_AUTH_PASSWORD> <SPOT_ADDRESS>\")])]),_c('p',[_vm._v(\"GraphNav command line tool is located at \"),_c('code',{pre:true},[_vm._v(\"~/spot-sdk/python/examples/graph_nav_command_line\")]),_vm._v(\".\")])])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson4.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22108a2ad9-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "Gouu":
/*!******************************************************************************************!*\
  !*** ./docs/ru/spot-lesson4.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson4_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson4.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"K1La\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson4_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ru/spot-lesson4.md?");

/***/ }),

/***/ "K1La":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/spot-lesson4.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Lesson 4. GraphNav service. Mapping and navigating on the map\",\n  \"contributors\": [\"LoSk-p\", \"khssnv\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson4.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render: function render(h) {\n    return h('div', null, this.$slots[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "bXQL":
/*!*************************************************************************************!*\
  !*** ./docs/ru/spot-lesson4.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson4_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson4.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"pCl/\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson4_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ru/spot-lesson4.md?");

/***/ }),

/***/ "luFo":
/*!****************************************************************!*\
  !*** ./docs/ru/spot-lesson4.md?vue&type=template&id=d77fc438& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_108a2ad9_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson4_md_vue_type_template_id_d77fc438___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"108a2ad9-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson4.md?vue&type=template&id=d77fc438& */ \"4PIf\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_108a2ad9_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson4_md_vue_type_template_id_d77fc438___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_108a2ad9_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson4_md_vue_type_template_id_d77fc438___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson4.md?");

/***/ }),

/***/ "pCl/":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/spot-lesson4.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson4.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "wrp/":
/*!*********************************!*\
  !*** ./docs/ru/spot-lesson4.md ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spot_lesson4_md_vue_type_template_id_d77fc438___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spot-lesson4.md?vue&type=template&id=d77fc438& */ \"luFo\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _spot_lesson4_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spot-lesson4.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"bXQL\");\n/* harmony import */ var _spot_lesson4_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spot-lesson4.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Gouu\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _spot_lesson4_md_vue_type_template_id_d77fc438___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _spot_lesson4_md_vue_type_template_id_d77fc438___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _spot_lesson4_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_spot_lesson4_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _spot_lesson4_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_spot_lesson4_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson4.md?");

/***/ })

}]);