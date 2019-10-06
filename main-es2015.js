(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!isShowed\" class=\"container centered\">\r\n    <div class=\"col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4\">\r\n      <app-form-person (randomize)=\"Random($event)\"></app-form-person>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"isShowed\" class=\"container centeredAbsolute\">\r\n  <div class=\"col-12 col-md-12 col-lg-10 offset-lg-1\">\r\n    <app-show-random [player]=\"player\"></app-show-random>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-person/form-person.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-person/form-person.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr class=\"no-margin-top\">\n<div class=\"purple_background\">\n  <h1>Randomize</h1>\n  <div class=\"square\">\n    <div class=\"rollMove\">\n      <i class=\"fas fa-shield-alt\"></i>\n      <i class=\"fas fa-hammer\"></i>\n      <i class=\"fas fa-crown\"></i>\n      <i class=\"fas fa-dungeon\"></i>\n      <i class=\"fas fa-coins\"></i>\n    </div>\n  </div>\n</div>\n<hr>\n<input id=\"nomeJogador\" class=\"form-control\" type=\"text\" placeholder=\"Nome do Jogador\" [(ngModel)]=\"NamePlayer\">\n<input id=\"nomePersonagem\" class=\"form-control\" type=\"text\" placeholder=\"Nome do Personagem\" [(ngModel)]=\"NameCharacter\">\n<button class=\"btn-purple\" (click)=\"sendData()\"> Iniciar </button>\n<div *ngIf=\"error\" class=\"errorAlert\">\n  <span> {{ fraseErro }}</span>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-random/show-random.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-random/show-random.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <h4 class=\"nomeShow\"><b>{{player.nomeJogador}}</b> seu personagem?</h4>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"row\">\n        <h5>Pessoal</h5>\n        <div class=\"borderPurple container\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <p class=\"statusCampLeft statusP\">Nome: <b>{{player.nomePersonagem}}</b></p>\n              </div>\n            </div>\n            <hr>\n            <div class=\"col-lg-6 col-6\">\n              <div class=\"row\">\n                <p class=\"statusCampLeft statusP\"><i class=\"fas fa-fist-raised\"></i> For: <b>{{ atributes[0] }}</b></p>\n                <p class=\"statusCampLeft statusP\"><i class=\"fas fa-crosshairs\"></i> Des: <b>{{ atributes[1] }}</b></p>\n                <p class=\"statusCampLeft statusP\"><i class=\"fas fa-balance-scale-left\"></i> Sab: <b>{{ atributes[2] }}</b></p>\n              </div>\n            </div>\n            <div class=\"col-lg-6 col-6\">\n                <div class=\"row\">\n                  <p class=\"statusCampRight statusP\"><i class=\"fas fa-book\"></i> Int: <b>{{ atributes[3] }}</b></p>\n                  <p class=\"statusCampRight statusP\"><i class=\"fas fa-heartbeat\"></i> Con: <b>{{ atributes[4] }}</b></p>\n                  <p class=\"statusCampRight statusP\"><i class=\"fas fa-comments\"></i> Car: <b>{{ atributes[5] }}</b></p>\n                </div>\n            </div>\n            <hr>\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <p class=\"statusCampLeft statusP\">Pai: <b>{{family[0]}}</b></p>\n                <p class=\"statusCampLeft statusP\">Mãe: <b>{{family[1]}}</b></p>\n                <p class=\"statusCampLeft statusP\">Irmãos: <b>{{family[2]}}</b></p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"row\">\n        <h5>Social & Trabalho</h5>\n        <div class=\"borderPurple container\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <p class=\"statusCampLeft statusP\">Emprego: <b>{{job.nome}}</b></p>\n                <p class=\"statusCampLeft statusP\">Situação: <b>{{job.sit}}</b></p>\n              </div>\n            </div>\n            <hr>\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <p class=\"statusCampLeft statusP\">Fama: <b>{{influencia.influ}}</b></p>\n                <p class=\"statusCampLeft statusP\">Tipo: <b>{{influencia.tipo}}</b></p>\n                <p class=\"statusCampLeft statusP\">Motivo: <b>{{influencia.moti}}</b></p>\n              </div>\n            </div>\n            <hr>\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <p class=\"statusCampLeft statusP\">Herança: <b>{{heranca}}</b></p>\n                <p class=\"statusCampLeft statusP\">Religião: <b>{{religiao}}</b></p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"row\">\n        <h5>Traços</h5>\n        <div class=\"borderPurple container\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <p class=\"statusCampLeft statusP\"><i class=\"far fa-smile\"></i> {{qualidadesJogador[0]}}</p>\n                <p class=\"statusCampLeft statusP\"><i class=\"far fa-smile\"></i> {{qualidadesJogador[1]}}</p>\n                <p class=\"statusCampLeft statusP\"><i class=\"far fa-smile\"></i> {{qualidadesJogador[2]}}</p>\n              </div>\n            </div>\n            <hr>\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <p class=\"statusCampLeft statusP\"><i class=\"far fa-angry\"></i> {{defeitosJogador[0]}}</p>\n                <p class=\"statusCampLeft statusP\"><i class=\"far fa-angry\"></i>  {{defeitosJogador[1]}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr>\n        <div class=\"container\">\n          <div class=\"row\">\n           <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <p class=\"statusCampFim statusP\"> - </p>\n                <p class=\"statusCampFim statusP\"> - </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centered {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  /* bring your own prefixes */\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n\r\n@media (min-width: 640px) {  }\r\n\r\n\r\n\r\n@media (min-width:960px) {  }\r\n\r\n\r\n\r\n@media (min-width:1100px) { .centeredAbsolute{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  /* bring your own prefixes */\r\n  transform: translate(-50%, -50%);\r\n} }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCw0QkFBNEI7RUFDNUIsZ0NBQWdDO0FBQ2xDOzs7O0FBSUEsNkJBQTZCOzs7O0FBQzdCLDRCQUE0Qjs7OztBQUM1Qiw0QkFBNEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCLGdDQUFnQztBQUNsQyxFQUFFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHsgIH0gXHJcbkBtZWRpYSAobWluLXdpZHRoOjk2MHB4KSB7ICB9IFxyXG5AbWVkaWEgKG1pbi13aWR0aDoxMTAwcHgpIHsgLmNlbnRlcmVkQWJzb2x1dGV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59IH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.isShowed = false;
        this.player = { nomePersonagem: '', nomeJogador: '' };
    }
    Random(personData) {
        this.isShowed = personData.radomize;
        this.player.nomeJogador = personData.nomeJogador;
        this.player.nomePersonagem = personData.nomePersonagem;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_person_form_person_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-person/form-person.component */ "./src/app/form-person/form-person.component.ts");
/* harmony import */ var _show_random_show_random_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-random/show-random.component */ "./src/app/show-random/show-random.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _form_person_form_person_component__WEBPACK_IMPORTED_MODULE_5__["FormPersonComponent"],
            _show_random_show_random_component__WEBPACK_IMPORTED_MODULE_6__["ShowRandomComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/form-person/form-person.component.css":
/*!*******************************************************!*\
  !*** ./src/app/form-person/form-person.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');\r\n\r\n.no-margin-top{\r\n  margin-top:0;\r\n}\r\n\r\n.whiteColorize{\r\n  background-color: white;\r\n  color: rebeccapurple;\r\n}\r\n\r\n.purpleColorized{\r\n  background-color: rebeccapurple;\r\n  color: white;\r\n}\r\n\r\n.noMargin{\r\n  margin: 0;\r\n}\r\n\r\n.errorAlert{\r\n  margin-top: 0.5rem;\r\n  padding: 0.5rem 0.2rem;\r\n  background-color: lightcoral;\r\n  color: white;\r\n  border: red solid 1px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\ni{\r\n  color: rebeccapurple;\r\n  padding: 0.4rem;\r\n}\r\n\r\n.square{\r\n  margin-left: 0.5rem;\r\n  border: solid 2px rebeccapurple;\r\n  height: 2rem;\r\n  width: 2rem;\r\n  display: flex;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.rollMove{\r\n  display: flex;\r\n  align-items: center;\r\n  -webkit-animation-name: example;\r\n          animation-name: example;\r\n  -webkit-animation-duration: 8s;\r\n          animation-duration: 8s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n          animation-timing-function: ease-in-out;\r\n  -webkit-animation-delay: 2s;\r\n          animation-delay: 2s;\r\n}\r\n\r\n@-webkit-keyframes example {\r\n  0% {margin-left: 0;}\r\n  20% {margin-left: -30px;}\r\n  40% {margin-left: -62px;}\r\n  60% {margin-left: -93px;}\r\n  80% {margin-left: -122px;}\r\n}\r\n\r\n@keyframes example {\r\n  0% {margin-left: 0;}\r\n  20% {margin-left: -30px;}\r\n  40% {margin-left: -62px;}\r\n  60% {margin-left: -93px;}\r\n  80% {margin-left: -122px;}\r\n}\r\n\r\n.roll{\r\n  display: flex;\r\n  align-items: center;\r\n  -webkit-animation-duration: 2.5s;\r\n          animation-duration: 2.5s;\r\n}\r\n\r\n.purple_background{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nh1{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: rebeccapurple;\r\n  margin: 0;\r\n}\r\n\r\n.btn-purple{\r\n  background-color: rebeccapurple;\r\n  width:100%;\r\n  padding: 5px;\r\n  border-radius: 0;\r\n  border: none;\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n\r\n}\r\n\r\nhr{\r\n  border: solid 1px rebeccapurple;\r\n}\r\n\r\n.btn-purple:focus{\r\n  outline: none;\r\n}\r\n\r\n.btn-purple:active{\r\n  background-color: #DA70D6;\r\n}\r\n\r\ninput::-webkit-input-placeholder{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: rebeccapurple;\r\n}\r\n\r\ninput::-moz-placeholder{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: rebeccapurple;\r\n}\r\n\r\ninput::-ms-input-placeholder{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: rebeccapurple;\r\n}\r\n\r\ninput::placeholder{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: rebeccapurple;\r\n}\r\n\r\ninput{\r\n  margin: 0.8rem 0;\r\n  border: 2px solid rebeccapurple;\r\n  border-radius: 0;\r\n}\r\n\r\ninput:focus{\r\n  border-color: #DA70D6;\r\n  box-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1wZXJzb24vZm9ybS1wZXJzb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7O0FBRTNFO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDJDQUFtQztVQUFuQyxtQ0FBbUM7RUFDbkMsOENBQXNDO1VBQXRDLHNDQUFzQztFQUN0QywyQkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsSUFBSSxjQUFjLENBQUM7RUFDbkIsS0FBSyxrQkFBa0IsQ0FBQztFQUN4QixLQUFLLGtCQUFrQixDQUFDO0VBQ3hCLEtBQUssa0JBQWtCLENBQUM7RUFDeEIsS0FBSyxtQkFBbUIsQ0FBQztBQUMzQjs7QUFOQTtFQUNFLElBQUksY0FBYyxDQUFDO0VBQ25CLEtBQUssa0JBQWtCLENBQUM7RUFDeEIsS0FBSyxrQkFBa0IsQ0FBQztFQUN4QixLQUFLLGtCQUFrQixDQUFDO0VBQ3hCLEtBQUssbUJBQW1CLENBQUM7QUFDM0I7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxvQkFBb0I7QUFDdEI7O0FBSEE7RUFDRSxrQ0FBa0M7RUFDbEMsb0JBQW9CO0FBQ3RCOztBQUhBO0VBQ0Usa0NBQWtDO0VBQ2xDLG9CQUFvQjtBQUN0Qjs7QUFIQTtFQUNFLGtDQUFrQztFQUNsQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb3JtLXBlcnNvbi9mb3JtLXBlcnNvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLm5vLW1hcmdpbi10b3B7XHJcbiAgbWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ud2hpdGVDb2xvcml6ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogcmViZWNjYXB1cnBsZTtcclxufVxyXG4ucHVycGxlQ29sb3JpemVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubm9NYXJnaW57XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZXJyb3JBbGVydHtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDAuMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaXtcclxuICBjb2xvcjogcmViZWNjYXB1cnBsZTtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbn1cclxuLnNxdWFyZXtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIGJvcmRlcjogc29saWQgMnB4IHJlYmVjY2FwdXJwbGU7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucm9sbE1vdmV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxufVxyXG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xyXG4gIDAlIHttYXJnaW4tbGVmdDogMDt9XHJcbiAgMjAlIHttYXJnaW4tbGVmdDogLTMwcHg7fVxyXG4gIDQwJSB7bWFyZ2luLWxlZnQ6IC02MnB4O31cclxuICA2MCUge21hcmdpbi1sZWZ0OiAtOTNweDt9XHJcbiAgODAlIHttYXJnaW4tbGVmdDogLTEyMnB4O31cclxufVxyXG5cclxuXHJcbi5yb2xse1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDIuNXM7XHJcbn1cclxuLnB1cnBsZV9iYWNrZ3JvdW5ke1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5oMXtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uYnRuLXB1cnBsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuaHJ7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmViZWNjYXB1cnBsZTtcclxufVxyXG5cclxuLmJ0bi1wdXJwbGU6Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLXB1cnBsZTphY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBNzBENjtcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gIG1hcmdpbjogMC44cmVtIDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmViZWNjYXB1cnBsZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1c3tcclxuICBib3JkZXItY29sb3I6ICNEQTcwRDY7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/form-person/form-person.component.ts":
/*!******************************************************!*\
  !*** ./src/app/form-person/form-person.component.ts ***!
  \******************************************************/
/*! exports provided: FormPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPersonComponent", function() { return FormPersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormPersonComponent = class FormPersonComponent {
    constructor() {
        this.randomize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.NamePlayer = '';
        this.NameCharacter = '';
        this.fraseErro = '';
        this.error = false;
    }
    sendData() {
        if (this.NamePlayer === '' && this.NameCharacter === '') {
            this.error = true;
            this.fraseErro = 'Ambos precisam de um nome.';
        }
        else if (this.NamePlayer === '') {
            this.error = true;
            this.fraseErro = 'Você precisa de um nome.';
        }
        else if (this.NameCharacter === '') {
            this.error = true;
            this.fraseErro = 'Seu personagem precisa de um nome.';
        }
        else {
            this.error = false;
            this.randomize.emit({ nomeJogador: this.NamePlayer, nomePersonagem: this.NameCharacter, radomize: true });
        }
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FormPersonComponent.prototype, "randomize", void 0);
FormPersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-person',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-person.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-person/form-person.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-person.component.css */ "./src/app/form-person/form-person.component.css")).default]
    })
], FormPersonComponent);



/***/ }),

/***/ "./src/app/show-random/show-random.component.css":
/*!*******************************************************!*\
  !*** ./src/app/show-random/show-random.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');\r\n\r\n\r\n\r\nhr{\r\n  border: solid 0.5px rebeccapurple;\r\n  margin: 0.2rem;\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.statusCampRight:nth-child(even),.statusCampLeft:nth-child(odd){\r\n  background-color: rgb(218, 218, 218);\r\n}\r\n\r\n\r\n\r\n.statusCampRight:nth-child(odd),.statusCampLeft:nth-child(even){\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n\r\n\r\n.statusCampFim{\r\n  background-color: rgb(218, 218, 218);\r\n}\r\n\r\n\r\n\r\n.statusP{\r\n  color: black;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n.borderPurple{\r\n  border:solid 1px rebeccapurple;\r\n  min-height: 50px;\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.statusRow{\r\n  margin: 0;\r\n  background-color: rgb(216, 216, 216);\r\n  color: black;\r\n}\r\n\r\n\r\n\r\n.noMarginColumn{\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n.nomeShow{\r\n  color:rebeccapurple;\r\n  background:none;\r\n  border-bottom: solid 2px rebeccapurple;\r\n}\r\n\r\n\r\n\r\nh4,h5{\r\n  color: white;\r\n  background-color: rebeccapurple;\r\n  font-family: 'Raleway', sans-serif;\r\n  width: 100%;\r\n  padding: 0.4rem 0.4rem;\r\n}\r\n\r\n\r\n\r\nh5{\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\np{\r\n  padding: 0.3rem;\r\n  color: white;\r\n  background-color: rgb(139, 104, 175);\r\n  font-family: 'Raleway', sans-serif;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1yYW5kb20vc2hvdy1yYW5kb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7Ozs7QUFJM0U7RUFDRSxpQ0FBaUM7RUFDakMsY0FBYztFQUNkLFdBQVc7QUFDYjs7OztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDOzs7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7Ozs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7OztBQUNBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7QUFDWDs7OztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7Ozs7QUFFQTtFQUNFLFNBQVM7RUFDVCxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOzs7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7Ozs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOzs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOzs7O0FBQ0E7RUFDRSxTQUFTO0FBQ1g7Ozs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtDQUFrQztFQUNsQyxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zaG93LXJhbmRvbS9zaG93LXJhbmRvbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcblxyXG5ocntcclxuICBib3JkZXI6IHNvbGlkIDAuNXB4IHJlYmVjY2FwdXJwbGU7XHJcbiAgbWFyZ2luOiAwLjJyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnN0YXR1c0NhbXBSaWdodDpudGgtY2hpbGQoZXZlbiksLnN0YXR1c0NhbXBMZWZ0Om50aC1jaGlsZChvZGQpe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcclxufVxyXG5cclxuLnN0YXR1c0NhbXBSaWdodDpudGgtY2hpbGQob2RkKSwuc3RhdHVzQ2FtcExlZnQ6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLnN0YXR1c0NhbXBGaW17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xyXG59XHJcbi5zdGF0dXNQe1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5ib3JkZXJQdXJwbGV7XHJcbiAgYm9yZGVyOnNvbGlkIDFweCByZWJlY2NhcHVycGxlO1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdGF0dXNSb3d7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5ub01hcmdpbkNvbHVtbntcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5ub21lU2hvd3tcclxuICBjb2xvcjpyZWJlY2NhcHVycGxlO1xyXG4gIGJhY2tncm91bmQ6bm9uZTtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggcmViZWNjYXB1cnBsZTtcclxufVxyXG5cclxuaDQsaDV7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtO1xyXG59XHJcbmg1e1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxucHtcclxuICBwYWRkaW5nOiAwLjNyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDEwNCwgMTc1KTtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/show-random/show-random.component.ts":
/*!******************************************************!*\
  !*** ./src/app/show-random/show-random.component.ts ***!
  \******************************************************/
/*! exports provided: ShowRandomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowRandomComponent", function() { return ShowRandomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShowRandomComponent = class ShowRandomComponent {
    constructor() {
        this.defeitos = [
            'agressivo',
            ,
            'ansioso',
            'antipático',
            'antissocial',
            'apático',
            'apressado',
            'arrogante',
            'atrevido',
            'autoritário',
            'avarento',
            'birrento',
            'bisbilhoteiro',
            'bruto',
            'calculista',
            'casmurro',
            'cínico',
            'ciumento',
            'colérico',
            'comodista',
            'covarde',
            'crítico',
            'cruel',
            'debochado',
            'depressivo',
            'desafiador',
            'desbocado',
            'descarado',
            'descomedido',
            'desconfiado',
            'descortês',
            'desequilibrado',
            'desleal',
            'desleixado',
            'desmazelado',
            'desmotivado',
            'desobediente',
            'desonesto',
            'desordeiro',
            'despótico',
            'desumano',
            'discriminador',
            'dissimulado',
            'distraído',
            'egoísta',
            'estourado',
            'estressado',
            'exigente',
            'falso',
            'fingido',
            'fraco',
            'frio',
            'frívolo',
            'fútil',
            'ganancioso',
            'grosseiro',
            'grosso',
            'hipócrita',
            'ignorante',
            'impaciente',
            'impertinente',
            'impetuoso',
            'impiedoso',
            'imponderado',
            'impostor',
            'imprudente',
            'impulsivo',
            'incompetente',
            'inconstante',
            'inconveniente',
            'incorreto',
            'indeciso',
            'indecoroso',
            'indelicado',
            'indiferente',
            'infiel',
            'inflexível',
            'injusto',
            'inseguro',
            'insensato',
            'insincero',
            'instável',
            'insuportável',
            'interesseiro',
            'intolerante',
            'intransigente',
            'introvertido',
            'irracional',
            'irrascível',
            'irrequieto',
            'irresponsável',
            'irritadiço',
            'malandro',
            'maldoso',
            'malicioso',
            'malvado',
            'mandão',
            'manhoso',
            'maquiavélico',
            'medroso',
            'mentiroso',
            'mesquinho',
            'narcisista',
            'negligente',
            'nervoso',
            'neurótico',
            'obcecado',
            'odioso',
            'oportunista',
            'orgulhoso',
            'pedante',
            'pessimista',
            'possessivo',
            'precipitado',
            'preconceituoso',
            'preguiçoso',
            'prepotente',
            'presunçoso',
            'problemático',
            'quezilento',
            'rancoroso',
            'relapso',
            'rigoroso',
            'rabugento',
            'rude',
            'sarcástico',
            'sedentário',
            'teimoso',
            'tímido',
            'tirano',
            'traiçoeiro',
            'traidor',
            'trapaceiro',
            'tendencioso',
            'trocista',
            'vagabundo',
            'vaidoso',
            'vulnerável',
            'vigarista',
            'xenófobo',
            'fobia',
            'queimadura',
            'cicatriz'
        ];
        this.corpo = [
            'Rosto',
            'Costas',
            'Torax',
            'Abdômen',
            'Braço',
            'Perna'
        ];
        this.fobias = [
            'Acrofobia',
            'Aracnofobia',
            'Catastrofobia',
            'Claustrofobia',
            'Hematofobia',
            'Monofobia',
            'Nictofobia',
            'Tanatofobia',
            'Zoofobia'
        ];
        this.qualidades = [
            'afetivo',
            ,
            'agradável',
            'ajuizado',
            'alegre',
            'altruísta',
            'amável',
            'amigável',
            'amoroso',
            'aplicado',
            'assertivo',
            'atencioso',
            'atento',
            'autêntico',
            'aventureiro',
            'bacana',
            'benévolo',
            'bondoso',
            'brioso',
            'calmo',
            'carinhoso',
            'carismático',
            'caritativo',
            'cavalheiro',
            'cívico',
            'civilizado',
            'companheiro',
            'compreensivo',
            'comunicativo',
            'confiante',
            'confiável',
            'consciencioso',
            'corajoso',
            'cordial',
            'cortês',
            'credível',
            'criativo',
            'criterioso',
            'cuidadoso',
            'curioso',
            'decente',
            'decoroso',
            'dedicado',
            'descontraído',
            'desenvolto',
            'determinado',
            'digno',
            'diligente',
            'disciplinado',
            'disponível',
            'divertido',
            'doce',
            'educado',
            'eficiente',
            'eloquente',
            'empático',
            'empenhado',
            'empreendedor',
            'encantador',
            'engraçado',
            'entusiasta',
            'escrupuloso',
            'esforçado',
            'esmerado',
            'esperançoso',
            'esplêndido',
            'excelente',
            'extraordinário',
            'extrovertido',
            'feliz',
            'fiel',
            'fofo',
            'forte',
            'franco',
            'generoso',
            'gentil',
            'genuíno',
            'habilidoso',
            'honesto',
            'honrado',
            'honroso',
            'humanitário',
            'humilde',
            'idôneo',
            'imparcial',
            'independente',
            'inovador',
            'íntegro',
            'inteligente',
            'inventivo',
            'justo',
            'leal',
            'legal',
            'livre',
            'maduro',
            'maravilhoso',
            'meigo',
            'modesto',
            'natural',
            'nobre',
            'observador',
            'organizado',
            'otimista',
            'ousado',
            'pacato',
            'paciente',
            'perfeccionista',
            'perseverante',
            'persistente',
            'perspicaz',
            'ponderado',
            'pontual',
            'preocupado',
            'preparado',
            'prestativo',
            'prestável',
            'proativo',
            'produtivo',
            'prudente',
            'racional',
            'respeitador',
            'responsável',
            'sábio',
            'sagaz',
            'sensato',
            'sensível',
            'simpático',
            'sincero',
            'solícito',
            'solidário',
            'sossegado',
            'ternurento',
            'tolerante',
            'tranquilo',
            'transparente',
            'valente',
            'valoroso',
            'verdadeiro',
            'zeloso'
        ];
        this.herancaTipo = [
            'Ruim',
            'Comum',
            'Boa',
            'Incomum',
            'Rara'
        ];
        this.GrauFama = [
            'Baixa',
            'Normal',
            'Alta'
        ];
        this.Fama = [
            'Nenhuma',
            'Baixa',
            'Mediana',
            'Alta'
        ];
        this.Motivos = [
            'Familia',
            'Trabalho',
            'Feitos'
        ];
        this.jobs = [
            'Camponês',
            'Lenhador',
            'Ferreiro',
            'Pastor',
            'Carniceiro',
            'Cirieiro',
            'Pergaminheiro',
            'Ourives',
            'Canteiro',
            'Mercador',
            'Boticário',
            'Alfaiate',
            'Bancário',
            'Nobre',
            'Cavaleiro',
            'Mercenário',
            'Soldado',
            'Vagabundo',
            'Taverneiro',
            'Diácono',
            'Escudeiro',
            'Marinheiro'
        ];
        this.situation = [
            'Pessima',
            'Ruim',
            'Normal',
            'Boa',
            'Excelente'
        ];
        this.family = [];
        this.atributes = [];
        this.job = { nome: '', sit: '' };
        this.influencia = { influ: '', tipo: '', moti: '' };
        this.heranca = '';
        this.religiao = '';
        this.qualidadesJogador = [];
        this.defeitosJogador = [];
        this.trick = '';
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.rollAtributes();
        this.rollFamily();
        this.rollJob();
        this.rollInflu();
        this.rollHeRe();
        this.adjustName();
        this.rollTraits();
    }
    rollAtributes() {
        for (let i = 0; i < 6; i++) {
            let atribute = [];
            for (let j = 0; j < 4; j++) {
                atribute.push(Math.floor(Math.random() * 6) + 1);
            }
            atribute = atribute.sort();
            this.atributes.push(atribute[1] + atribute[2] + atribute[3]);
        }
    }
    rollFamily() {
        for (let i = 0; i < 2; i++) {
            this.family.push(Math.floor(Math.random() * 2) + 1 === 1 ? 'Morto(a)' : 'Vivo(a)');
        }
        this.family.push((Math.floor(Math.random() * 2) + 1 === 1 ? 0 : Math.floor(Math.random() * 5) + 1).toString());
    }
    rollJob() {
        this.job.nome = this.jobs[Math.floor(Math.random() * 22)];
        this.job.sit = this.situation[Math.floor(Math.random() * 5)];
    }
    rollInflu() {
        this.influencia.influ = this.Fama[Math.floor(Math.random() * 4)];
        if (this.influencia.influ != 'Nenhuma') {
            this.influencia.moti = this.Motivos[Math.floor(Math.random() * 3)];
            this.influencia.tipo = Math.floor(Math.random() * 2) == 0 ? 'Má' : 'Boa';
        }
    }
    rollHeRe() {
        this.heranca = Math.floor(Math.random() * 2) == 0 ? 'Sim' : 'Não';
        if (this.heranca === 'Sim') {
            this.heranca = `${this.heranca} - ${this.herancaTipo[Math.floor(Math.random() * 5)]}`;
        }
        this.religiao = Math.floor(Math.random() * 2) == 0 ? 'Sim' : 'Não';
    }
    adjustName() {
        let novoNomePersonagemSplited = this.player.nomePersonagem.split(" ");
        let novoNomeJogadorSplited = this.player.nomeJogador.split(" ");
        novoNomePersonagemSplited = novoNomePersonagemSplited.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
        novoNomeJogadorSplited = novoNomeJogadorSplited.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
        this.player.nomePersonagem = novoNomePersonagemSplited.join(" ");
        this.player.nomeJogador = novoNomeJogadorSplited.join(" ");
    }
    rollTraits() {
        for (let i = 0; i < 3; i++) {
            this.qualidadesJogador.push(this.qualidades[Math.floor(Math.random() * 138)]);
        }
        for (let i = 0; i < 2; i++) {
            let defeito = this.defeitos[Math.floor(Math.random() * 142)];
            if (defeito === 'fobia') {
                defeito += ' - ' + this.fobias[Math.floor(Math.random() * 9)];
            }
            if (defeito === 'queimadura' || defeito === 'cicatriz') {
                defeito += ' - ' + this.fobias[Math.floor(Math.random() * 6)];
            }
            this.defeitosJogador.push(defeito);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShowRandomComponent.prototype, "player", void 0);
ShowRandomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-random',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-random.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-random/show-random.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-random.component.css */ "./src/app/show-random/show-random.component.css")).default]
    })
], ShowRandomComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\w326\Documents\GitHub\Angular\NewFunc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map