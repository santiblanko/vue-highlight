!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueHighlight=factory():root.VueHighlight=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=5)}([function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){var __vue_exports__,__vue_options__;__webpack_require__(3),__vue_exports__=__webpack_require__(2);var __vue_template__=__webpack_require__(4);__vue_options__=__vue_exports__=__vue_exports__||{},"object"!=typeof __vue_exports__.default&&"function"!=typeof __vue_exports__.default||(__vue_options__=__vue_exports__=__vue_exports__.default),"function"==typeof __vue_options__&&(__vue_options__=__vue_options__.options),__vue_options__.render=__vue_template__.render,__vue_options__.staticRenderFns=__vue_template__.staticRenderFns,__vue_options__._scopeId="data-v-e929e5f0",module.exports=__vue_exports__},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"test",data:function(){return{name:"world"}}}},function(module,exports){},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"test"},[_c("h1",[_vm._v("Hello vue-highlight!")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.name,expression:"name"}],attrs:{placeholder:"Name"},domProps:{value:_vm._s(_vm.name)},on:{input:function($event){$event.target.composing||(_vm.name=$event.target.value)}}})])},staticRenderFns:[]}},function(module,exports,__webpack_require__){"use strict";(function(global){function install(Vue){Vue.component("test",__WEBPACK_IMPORTED_MODULE_0__components_Test_vue___default.a)}var __WEBPACK_IMPORTED_MODULE_0__components_Test_vue__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0__components_Test_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Test_vue__);Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__.d(exports,"Test",function(){return __WEBPACK_IMPORTED_MODULE_0__components_Test_vue___default.a}),exports.install=install;var plugin={version:"0.0.0",install:install};exports.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}).call(exports,__webpack_require__(0))}])});