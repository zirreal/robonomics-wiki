(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ja--technical-committee-fast-track-md"],{

/***/ "+EUq":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"709914d4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/technical-committee-fast-track.md?vue&type=template&id=a4c86898& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_vm._v(\"Note: The screenshots contained in this article were taken using v1.9.0 of Robonomics node implementation, launched in \"),_c('strong',[_vm._v(\"dev\")]),_vm._v(\" mode.\")]),_c('p',[_vm._v(\"The Robonomics Technical Committee can use the \"),_c('strong',[_vm._v(\"fast-track\")]),_vm._v(\" function to speed up the proposals enacting in the Democracy module.\")]),_c('p',[_vm._v(\"If you want to learn more about how Polkadot ecosystem Governance works, then we strongly recommend reading \"),_c('a',{attrs:{\"href\":\"https://polkadot.network/blog/polkadot-governance/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"this article\")]),_vm._v(\" on the Polkadot blog.\")]),_c('p',[_vm._v(\"There are six members who make up the Technical Committee for the Robonomics parachain. For our example, let's create the same setup in our dev mode environment:\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Techcomm%20membership!../images/technical-committee-fast-track/techcomm_membership.png */ \"3Igc\"),\"alt\":\"Techcomm membership\"}})],1),_c('p',[_vm._v(\"Briefly, the process of fast-tracking a proposal involves a few steps:\\n1. Creating the proposal preimage\\n2. Creating the proposal using the created preimage hash\\n3. Technical committee votes on the created proposal\\n4. Initiating proposal fast-tracking \\n5. Technical committee votes regarding fast-tracking the proposal\\n6. Voting on enacted proposal in the Democracy pallet\")]),_c('p',[_vm._v(\"For example, let's set the free balance for the account \"),_c('em',[_vm._v(\"4EnEc9ZD1jpA1H3HpVzr1v6SGGYGrue2k9Ny5KzFHhti5xQv\")]),_vm._v(\" to 10 XRT\")]),_c('h2',{attrs:{\"id\":\"1-creating-the-proposal-preimage\"}},[_c('a',{attrs:{\"href\":\"#1-creating-the-proposal-preimage\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"1. Creating the proposal preimage\")]),_c('p',[_vm._v(\"Open the \"),_c('strong',[_vm._v(\"Governance -> Democracy\")]),_vm._v(\" page and click the \"),_c('strong',[_vm._v(\"Submit preimage\")]),_vm._v(\" button, and then input the required parameters:\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Creating%20preimage!../images/technical-committee-fast-track/creating_preimage.png */ \"VAyf\"),\"alt\":\"Creating preimage\"}})],1),_c('p',[_vm._v(\"After all fields are filled, then we need to save generated preimage hash (\"),_c('em',[_vm._v(\"0x691405ef2f4ee0aee5bfb9d1ac3d98413e528eb211d2b914aed980370b57822b\")]),_vm._v(\" in this example). As we will need it in the next step.\")]),_c('p',[_vm._v(\"After saving the preimage hash we can click the \"),_c('strong',[_vm._v(\"Submit preimage\")]),_vm._v(\" button in this window and sign the transaction:\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Sign%20submitting%20preimage!../images/technical-committee-fast-track/sign_submitting_preimage.png */ \"oGwz\"),\"alt\":\"Sign submitting preimage\"}})],1),_c('h2',{attrs:{\"id\":\"2-creating-proposal-using-created-preimage-hash\"}},[_c('a',{attrs:{\"href\":\"#2-creating-proposal-using-created-preimage-hash\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"2. Creating proposal using created preimage hash\")]),_c('p',[_vm._v(\"Open the \"),_c('strong',[_vm._v(\"Governance -> Tech. comm.\")]),_vm._v(\" page and go to the \"),_c('strong',[_vm._v(\"Proposals\")]),_vm._v(\" tab:\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Techcomm%20proposals%20interface!../images/technical-committee-fast-track/techcomm_proposals_interface.png */ \"xXdX\"),\"alt\":\"Techcomm proposals interface\"}})],1),_c('p',[_vm._v(\"Then click \"),_c('strong',[_vm._v(\"\\\"Submit proposal\\\"\")]),_vm._v(\" button and create \"),_c('em',[_vm._v(\"democracy.externalProposeMajority(0x691405ef2f4ee0aee5bfb9d1ac3d98413e528eb211d2b914aed980370b57822b)\")]),_vm._v(\" using your technical committee account and the preimage hash from earlier:\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Create%20techcomm%20proposal%201!../images/technical-committee-fast-track/create_techcomm_proposal_1.png */ \"NG71\"),\"alt\":\"Create techcomm proposal 1\"}})],1),_c('p',[_vm._v(\"After signing transaction, the proposal will appear on this page:\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Created%20techcomm%20proposal%201!../images/technical-committee-fast-track/created_techcomm_proposal_1.png */ \"FALJ\"),\"alt\":\"Created techcomm proposal 1\"}})],1),_c('h2',{attrs:{\"id\":\"3-technical-committee-voting-for-created-proposal\"}},[_c('a',{attrs:{\"href\":\"#3-technical-committee-voting-for-created-proposal\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"3. Technical committee voting for created proposal\")]),_c('p',[_vm._v(\"On this step the majority of the technical committee members need to vote \"),_c('strong',[_vm._v(\"Aye\")]),_vm._v(\" in this poll. For example:\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=First%20vote%20result!../images/technical-committee-fast-track/first_vote_result.png */ \"IN92\"),\"alt\":\"First vote result\"}})],1),_c('p',[_vm._v(\"Then we can decide to close this vote/poll using the \"),_c('strong',[_vm._v(\"Close\")]),_vm._v(\" button. After this action the proposal will appear on the \"),_c('strong',[_vm._v(\"Democracy\")]),_vm._v(\" page on the \"),_c('strong',[_vm._v(\"external\")]),_vm._v(\" table. You may wonder how can you see the \"),_c('strong',[_vm._v(\"Fast track\")]),_vm._v(\" button. This button appears and is active ONLY if we used the \"),_c('strong',[_vm._v(\"democracy.externalProposeMajority\")]),_vm._v(\" function:\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Created%20democracy%20proposal!../images/technical-committee-fast-track/created_democracy_proposal.png */ \"vdkH\"),\"alt\":\"Created democracy proposal\"}})],1),_c('h2',{attrs:{\"id\":\"4-initiating-proposal-fast-tracking\"}},[_c('a',{attrs:{\"href\":\"#4-initiating-proposal-fast-tracking\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"4. Initiating proposal fast-tracking\")]),_c('p',[_vm._v(\"Go to the \"),_c('strong',[_vm._v(\"Governance -> Democracy\")]),_vm._v(\" page and click on the \"),_c('strong',[_vm._v(\"Fast track\")]),_vm._v(\" button. In this newly opened window set the required parameters and click \"),_c('strong',[_vm._v(\"Fast track\")]),_vm._v(\".\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Fast%20track%20interface!../images/technical-committee-fast-track/fast_track_interface.png */ \"xx1s\"),\"alt\":\"Fast track interface\"}})],1),_c('p',[_vm._v(\"After this, the fast-track proposal should now appear on the Technical Committee proposals page:\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Techcomm%20fast-track%20proposal!../images/technical-committee-fast-track/techcomm_fasttrack_proposal.png */ \"2Ylg\"),\"alt\":\"Techcomm fast-track proposal\"}})],1),_c('h2',{attrs:{\"id\":\"5-technical-committee-voting-for-fast-track-the-proposal\"}},[_c('a',{attrs:{\"href\":\"#5-technical-committee-voting-for-fast-track-the-proposal\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"5. Technical committee voting for fast-track the proposal\")]),_c('p',[_vm._v(\"Now the technical committee need to vote unanimously for fast-tracking the earlier created proposal. It means that all six members need to vote \"),_c('strong',[_vm._v(\"Aye\")]),_vm._v(\":\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Fast-track%20vote%20result!../images/technical-committee-fast-track/fasttrack_vote_result.png */ \"JxFc\"),\"alt\":\"Fast-track vote result\"}})],1),_c('p',[_vm._v(\"After this anyone can \"),_c('strong',[_vm._v(\"Close\")]),_vm._v(\" this voting, and the proposal will be enacted and moved from \"),_c('strong',[_vm._v(\"external\")]),_vm._v(\" table to active \"),_c('strong',[_vm._v(\"referenda\")]),_vm._v(\":\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Democracy%20enacted%20proposal!../images/technical-committee-fast-track/democracy_enacted_proposal.png */ \"nlIM\"),\"alt\":\"Democracy enacted proposal\"}})],1),_c('h2',{attrs:{\"id\":\"6-voting-on-enacted-proposal-in-democracy\"}},[_c('a',{attrs:{\"href\":\"#6-voting-on-enacted-proposal-in-democracy\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"6. Voting on enacted proposal in Democracy\")]),_c('p',[_vm._v(\"Now at least one account needs to vote \"),_c('strong',[_vm._v(\"Aye\")]),_vm._v(\" on the referenda:\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Voting%20for%20enacted%20proposal!../images/technical-committee-fast-track/voting_for_enacted_proposal.png */ \"3+Rp\"),\"alt\":\"Voting for enacted proposal\"}})],1),_c('p',[_vm._v(\"As a result we'll get the active referenda with one positive vote on it:\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Positive%20voted%20referenda!../images/technical-committee-fast-track/positive_voted_referenda.png */ \"piaz\"),\"alt\":\"Positive voted referenda\"}})],1),_c('p',[_vm._v(\"After the voting period ends, this democracy proposal will be executed. In current example this will be happen in block #3351. Let's wait for this block and check it:\\n\"),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Result!../images/technical-committee-fast-track/result.png */ \"mVRA\"),\"alt\":\"Result\"}})],1)])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/ja/technical-committee-fast-track.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22709914d4-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "/fOl":
/*!************************************************************************************************************!*\
  !*** ./docs/ja/technical-committee-fast-track.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_technical_committee_fast_track_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./technical-committee-fast-track.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"dQmj\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_technical_committee_fast_track_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/technical-committee-fast-track.md?");

/***/ }),

/***/ "MuYp":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/technical-committee-fast-track.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ja/technical-committee-fast-track.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "dQmj":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/technical-committee-fast-track.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"How the technical committee is fast-tracking the democracy proposals\",\n  \"contributors\": [\"dergudzon\", \"Leemo94\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ja/technical-committee-fast-track.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "kOac":
/*!***************************************************!*\
  !*** ./docs/ja/technical-committee-fast-track.md ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _technical_committee_fast_track_md_vue_type_template_id_a4c86898___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./technical-committee-fast-track.md?vue&type=template&id=a4c86898& */ \"o9dN\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _technical_committee_fast_track_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./technical-committee-fast-track.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"neia\");\n/* harmony import */ var _technical_committee_fast_track_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technical-committee-fast-track.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"/fOl\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _technical_committee_fast_track_md_vue_type_template_id_a4c86898___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _technical_committee_fast_track_md_vue_type_template_id_a4c86898___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _technical_committee_fast_track_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_technical_committee_fast_track_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _technical_committee_fast_track_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_technical_committee_fast_track_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ja/technical-committee-fast-track.md?");

/***/ }),

/***/ "neia":
/*!*******************************************************************************************************!*\
  !*** ./docs/ja/technical-committee-fast-track.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_technical_committee_fast_track_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./technical-committee-fast-track.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"MuYp\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_technical_committee_fast_track_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/technical-committee-fast-track.md?");

/***/ }),

/***/ "o9dN":
/*!**********************************************************************************!*\
  !*** ./docs/ja/technical-committee-fast-track.md?vue&type=template&id=a4c86898& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_709914d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_technical_committee_fast_track_md_vue_type_template_id_a4c86898___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"709914d4-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./technical-committee-fast-track.md?vue&type=template&id=a4c86898& */ \"+EUq\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_709914d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_technical_committee_fast_track_md_vue_type_template_id_a4c86898___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_709914d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_technical_committee_fast_track_md_vue_type_template_id_a4c86898___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ja/technical-committee-fast-track.md?");

/***/ })

}]);