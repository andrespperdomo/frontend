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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <!-- <a class=\"navbar-brand\" routerLink=\"\">Angular Routing</a>  -->\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"planets\" routerLinkActive=\"active\">Planets</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"people\" routerLinkActive=\"active\">People</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"visitas\" routerLinkActive=\"active\">Visits</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modal/view/modal.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal/view/modal.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<p>You can pass an existing component as content of the modal window. In this case remember to add content component\r\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\r\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open()\">Launch demo modal</button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modal/view/modal.component.template.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal/view/modal.component.template.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-header\" >\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\t   \r\n\t   \t <app-people-detail ></app-people-detail>\r\n\t    <app-planet-detail ></app-planet-detail>\r\n\t      \r\n    </div>\r\n    \r\n    <div>\r\n    \r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n    </div>\r\n\r\n  \r\n\r\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pagination/view/pagination.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pagination/view/pagination.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"float: right !important;\">\r\n<div *ngIf=\"numShops\" class=\"pagination\">\r\n    <div *ngIf=\"page > 1\" class=\"pagination__prev\"><button (click)=\"anterior()\"><\t</button></div>\r\n    <div class=\"pagination__text\">\r\n        <p>P&aacute;gina {{page}} de {{totalPages}}&nbsp;</p>\r\n        <p>{{numShops}} resultados</p>\r\n    </div>\r\n    <div *ngIf=\"page < totalPages\" class=\"pagination__next\"><button (click)=\"siguiente()\" >></button></div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/people/view/people.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/people/view/people.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\"> -->\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n\n\n<div style=\"text-align: center\">\n         <h1 class=\"text-center\" style=\"width:100%\">People</h1> \n</div>\n\n\n<div class=\"container\">\n            <form>\n \n<div class=\"container\">\n\n    <app-pagination (paginaEmitter)=\"goToPage($event)\" [page]=\"page\" [totalPages]=\"totalPages\" [numShops]=\"numShops\"></app-pagination>\n    <table class=\"table table-striped custab\">\n    <thead>\n        <tr>\n            <th *ngFor=\"let header of headerColumns\">{{header}}</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let people of people.results\" >\n            <td (click)=\"openDialog(people)\">{{people.name}}</td>\n            <td (click)=\"openDialog(people)\">{{people.height}}</td>\n            <td (click)=\"openDialog(people)\">{{people.mass}}</td>\n            <td (click)=\"openDialog(people)\">{{people.hair_color}}</td>\n            <td (click)=\"openDialog(people)\">{{people.skin_color}}</td>\n            <td (click)=\"openDialog(people)\">{{people.eye_color}}</td>\n            <td (click)=\"openDialog(people)\">{{people.birth_year}}</td>\n            <td (click)=\"openDialog(people)\">{{people.gender}}</td>\n            <td (click)=\"openDialog(people)\">{{people.created}}</td>\n            <td (click)=\"openDialog(people)\">{{people.edited}}</td>\n            \n          </tr>\n    </tbody>\n    </table>\n    <app-pagination (paginaEmitter)=\"goToPage($event)\" [page]=\"page\" [totalPages]=\"totalPages\" [numShops]=\"numShops\"></app-pagination>\n    </div>  \n  \n   \n            </form><!-- ends register form -->\n\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/planets/view/planets.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/planets/view/planets.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n<div style=\"text-align: center\">\n         <h1 class=\"text-center\" style=\"width:100%\">Planets</h1> \n</div>\n<div class=\"container\">\n    <div class=\"row\">\n\n            <form>\n \n<div class=\"container\">\n <app-pagination (paginaEmitter)=\"goToPage($event)\" [page]=\"page\" [totalPages]=\"totalPages\" [numShops]=\"numShops\"></app-pagination>\n    <table class=\"table table-striped custab\">\n    <thead>\n        <tr>\n            <th *ngFor=\"let header of headerColumns\">{{header}}</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let planet of planet.results\">\n            <td (click)=\"openDialog(planet)\"  >{{planet.name}}</td>\n            <td (click)=\"openDialog(planet)\" >{{planet.rotation_period}}</td>\n            <td (click)=\"openDialog(planet)\" >{{planet.orbital_period}}</td>\n            <td (click)=\"openDialog(planet)\" >{{planet.diameter}}</td>\n            <td (click)=\"openDialog(planet)\" >{{planet.climate}}</td>\n            <td (click)=\"openDialog(planet)\" >{{planet.gravity}}</td>\n            <td (click)=\"openDialog(planet)\" >{{planet.terrain}}</td>\n            <td (click)=\"openDialog(planet)\" >{{planet.surface_water}}</td>\n            <td (click)=\"openDialog(planet)\" >{{planet.population}}</td>\n          </tr>\n    </tbody>\n    </table>\n    \n    <app-pagination (paginaEmitter)=\"goToPage($event)\" [page]=\"page\" [totalPages]=\"totalPages\" [numShops]=\"numShops\"></app-pagination>\n        \n    </div>\n   \n            </form><!-- ends register form -->\n            <!-- second for to fiter user-->\n        <!-- ends col-6 -->\n\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/visitas/view/visitas.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitas/view/visitas.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\"> -->\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n\r\n\r\n<div style=\"text-align: center\">\r\n         <h1 class=\"text-center\" style=\"width:100%\">Visits</h1> \r\n</div>\r\n\r\n\r\n\r\n\r\n   \r\n \r\n<div class=\"container\">\r\n\r\n    <div class=\"row col-md-12\">\r\n    <div class=\"col-md-6 col-md-offset-2\">\r\n\t    <table class=\"table table-striped custab\">\r\n\t    <thead>\r\n\t        <tr>\r\n\t            <th *ngFor=\"let header of headerPeople\">{{header}}</th>\r\n\t        </tr>\r\n\t    </thead>\r\n\t    <tbody>\r\n\t       <tr *ngFor=\"let people of  peoples.data\" >\r\n\t         <td>{{people.visitado}}</td>\r\n\t         <td>{{people.conteo}}</td>\r\n\t        </tr>\r\n\t    </tbody>\r\n\t    </table>\r\n    </div>\r\n    <div class=\"row col-md-6\">\r\n\t    <table class=\"table table-striped custab\">\r\n\t    <thead>\r\n\t   \r\n\t        <tr>\r\n\t            <th *ngFor=\"let header of headerPlanet\">{{header}}</th>\r\n\t        </tr>\r\n\t    </thead>\r\n\t    <tbody>\r\n\t        <tr *ngFor=\"let planet of  planets.data\" >\r\n\t         <td>{{planet.visitado}}</td>\r\n\t         <td>{{planet.conteo}}</td>\r\n\t        </tr>\r\n\t    </tbody>\r\n\t    </table>\r\n    </div>\r\n    </div> \r\n    </div>\r\n    \r\n\t\r\n   \r\n   \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _planets_component_planets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./planets/component/planets.component */ "./src/app/planets/component/planets.component.ts");
/* harmony import */ var _people_component_people_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./people/component/people.component */ "./src/app/people/component/people.component.ts");
/* harmony import */ var _modal_component_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/component/modal.component */ "./src/app/modal/component/modal.component.ts");
/* harmony import */ var _visitas_component_visitas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitas/component/visitas.component */ "./src/app/visitas/component/visitas.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");








var routes = [
    // {path:"",redirectTo:"register",pathMatch:"full"},
    { path: "planets", component: _planets_component_planets_component__WEBPACK_IMPORTED_MODULE_3__["PlanetsComponent"] },
    { path: "people", component: _people_component_people_component__WEBPACK_IMPORTED_MODULE_4__["PeopleComponent"] },
    { path: "dialog", component: _modal_component_modal_component__WEBPACK_IMPORTED_MODULE_5__["NgbdModalComponent"] },
    { path: "visitas", component: _visitas_component_visitas_component__WEBPACK_IMPORTED_MODULE_6__["VisitasComponent"] },
    { path: "spinner", component: _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a, p, h1, h2, h3 {\r\n  font-family: \"Roboto\",\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\r\n  color: #546E7A;\r\n}\r\na {\r\n  color: #1976D2;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3R0FBd0c7RUFDeEcsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSwgcCwgaDEsIGgyLCBoMyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsXCJMdWNpZGEgR3JhbmRlXCIsc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzU0NkU3QTtcclxufVxyXG5hIHtcclxuICBjb2xvcjogIzE5NzZEMjtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'user-registration-client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _planets_component_planets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planets/component/planets.component */ "./src/app/planets/component/planets.component.ts");
/* harmony import */ var _people_component_people_detalle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./people/component/people.detalle.component */ "./src/app/people/component/people.detalle.component.ts");
/* harmony import */ var _planets_component_planets_detalle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./planets/component/planets.detalle.component */ "./src/app/planets/component/planets.detalle.component.ts");
/* harmony import */ var _people_component_people_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./people/component/people.component */ "./src/app/people/component/people.component.ts");
/* harmony import */ var _visitas_component_visitas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./visitas/component/visitas.component */ "./src/app/visitas/component/visitas.component.ts");
/* harmony import */ var _pagination_component_pagination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pagination/component/pagination.component */ "./src/app/pagination/component/pagination.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _utilidad_datos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utilidad/datos.service */ "./src/app/utilidad/datos.service.ts");
/* harmony import */ var _services_apibackend_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/apibackend.service */ "./src/app/services/apibackend.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modal_component_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modal/component/modal.component */ "./src/app/modal/component/modal.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _planets_component_planets_component__WEBPACK_IMPORTED_MODULE_6__["PlanetsComponent"],
                _people_component_people_component__WEBPACK_IMPORTED_MODULE_9__["PeopleComponent"],
                _visitas_component_visitas_component__WEBPACK_IMPORTED_MODULE_10__["VisitasComponent"],
                _modal_component_modal_component__WEBPACK_IMPORTED_MODULE_19__["NgbdModalComponent"],
                _modal_component_modal_component__WEBPACK_IMPORTED_MODULE_19__["NgbdModalContent"],
                _people_component_people_detalle_component__WEBPACK_IMPORTED_MODULE_7__["PeopleDetailComponent"],
                _planets_component_planets_detalle_component__WEBPACK_IMPORTED_MODULE_8__["PlanetsDetailComponent"],
                _pagination_component_pagination_component__WEBPACK_IMPORTED_MODULE_11__["PaginationComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"]
            ],
            providers: [_services_swapi_service__WEBPACK_IMPORTED_MODULE_13__["SwapiService"], _utilidad_datos_service__WEBPACK_IMPORTED_MODULE_14__["Servicio"], _services_apibackend_service__WEBPACK_IMPORTED_MODULE_15__["BackendApiService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbActiveModal"], _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]],
            entryComponents: [_modal_component_modal_component__WEBPACK_IMPORTED_MODULE_19__["NgbdModalComponent"], _modal_component_modal_component__WEBPACK_IMPORTED_MODULE_19__["NgbdModalContent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.settings.ts":
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.API_BACKEND_ENDPOINT = window['cfgApiBaseUrl'] + "/api";
    AppSettings.API_SWAPI_ENDPOINT = 'https://swapi.dev/api';
    AppSettings.PLANET = "PLANET";
    AppSettings.PEOPLE = "PEOPLE";
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/modal/component/modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modal/component/modal.component.ts ***!
  \****************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgbdModalContent.prototype, "people", void 0);
    NgbdModalContent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngbd-modal-content',
            template: __webpack_require__(/*! raw-loader!../view/modal.component.template.html */ "./node_modules/raw-loader/index.js!./src/app/modal/view/modal.component.template.html"),
            styles: [__webpack_require__(/*! ../style/modal.component.css */ "./src/app/modal/style/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function (parametro) {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
        this.parametro = parametro;
        console.log("ejecuto bien  " + this.parametro);
    };
    NgbdModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    NgbdModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngbd-modal-component',
            template: __webpack_require__(/*! raw-loader!../view/modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/modal/view/modal.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/modal/style/modal.component.css":
/*!*************************************************!*\
  !*** ./src/app/modal/style/modal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    padding-top:50px;\r\n}\r\nfieldset {\r\n    border: thin solid #ccc; \r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    padding-left: 40px;\r\n    background: #fbfbfb;\r\n}\r\nlegend {\r\n   color: #678;\r\n}\r\n.form-control {\r\n    width: 95%;\r\n}\r\nlabel small {\r\n    color: #678 !important;\r\n}\r\nspan.req {\r\n    color:maroon;\r\n    font-size: 112%;\r\n}\r\nmat-dialog-container#modal-component {\r\n    border: 3px solid #262626;\r\n    border-radius: 11px;\r\n    background-color: #1a1a1a;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvc3R5bGUvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtHQUNHLFdBQVc7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL3N0eWxlL21vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG59XHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCAjY2NjOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG59XHJcbmxlZ2VuZCB7XHJcbiAgIGNvbG9yOiAjNjc4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG5sYWJlbCBzbWFsbCB7XHJcbiAgICBjb2xvcjogIzY3OCAhaW1wb3J0YW50O1xyXG59XHJcbnNwYW4ucmVxIHtcclxuICAgIGNvbG9yOm1hcm9vbjtcclxuICAgIGZvbnQtc2l6ZTogMTEyJTtcclxufVxyXG5tYXQtZGlhbG9nLWNvbnRhaW5lciNtb2RhbC1jb21wb25lbnQge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzI2MjYyNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pagination/component/pagination.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pagination/component/pagination.component.ts ***!
  \**************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.paginaEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.siguiente = function () {
        this.page++;
        this.pasarPagina();
    };
    PaginationComponent.prototype.anterior = function () {
        this.page--;
        this.pasarPagina();
    };
    PaginationComponent.prototype.pasarPagina = function () {
        this.paginaEmitter.emit(this.page);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginationComponent.prototype, "page", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginationComponent.prototype, "totalPages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginationComponent.prototype, "numShops", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PaginationComponent.prototype, "paginaEmitter", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! raw-loader!../view/pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/pagination/view/pagination.component.html"),
            styles: [__webpack_require__(/*! ../style/pagination.component.css */ "./src/app/pagination/style/pagination.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/pagination/style/pagination.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pagination/style/pagination.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.pagination {\r\n  display: inline-block;\r\n}\r\n*/\r\n.pagination{\r\n width:100%\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hdGlvbi9zdHlsZS9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztDQUdDO0FBQ0Q7Q0FDQztBQUNEIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hdGlvbi9zdHlsZS9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5wYWdpbmF0aW9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuKi9cclxuLnBhZ2luYXRpb257XHJcbiB3aWR0aDoxMDAlXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/people/component/people.component.ts":
/*!******************************************************!*\
  !*** ./src/app/people/component/people.component.ts ***!
  \******************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _modal_component_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal/component/modal.component */ "./src/app/modal/component/modal.component.ts");
/* harmony import */ var _utilidad_datos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilidad/datos.service */ "./src/app/utilidad/datos.service.ts");
/* harmony import */ var _services_apibackend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/apibackend.service */ "./src/app/services/apibackend.service.ts");
/* harmony import */ var _visitas_model_visita__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../visitas/model/visita */ "./src/app/visitas/model/visita.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");








var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(service, modalService, servicio, serviceApiBackend) {
        this.service = service;
        this.modalService = modalService;
        this.servicio = servicio;
        this.serviceApiBackend = serviceApiBackend;
        this.people = [];
        this.parametro = false;
        this.visita = new _visitas_model_visita__WEBPACK_IMPORTED_MODULE_6__["Visita"](0, "", 0, "");
        this.headerColumns = ['Name', 'Height', 'Mass', 'Hair color', 'Skin color',
            'Eye color', 'Birth year', 'Gender', 'Created', 'Edited'];
        this.shops = []; //Listado de tiendas
        this.page = 1; //N�mero de p�gina en la que estamos. Ser� 1 la primera vez que se carga el componente
        this.numShops = 0; //Total de tiendas existentes
        this.numResults = 10;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resp = this.service.getPeopleAll();
        resp.subscribe(function (data) { return _this.people = data; });
        this.pagination(this.page);
    };
    PeopleComponent.prototype.openDialog = function (people) {
        this.registrarVisita(people);
        var array = people.homeworld;
        this.servicio.setValue(array);
        this.modalService.open(true);
    };
    PeopleComponent.prototype.registrarVisita = function (people) {
        var _this = this;
        this.visita = new _visitas_model_visita__WEBPACK_IMPORTED_MODULE_6__["Visita"](0, people.name, 0, _app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].PEOPLE);
        var resp = this.serviceApiBackend.registroVisitas(this.visita);
        resp.subscribe(function (data) { return _this.message = data; });
    };
    PeopleComponent.prototype.pagination = function (page) {
        var _this = this;
        var resp = this.service.getPaginationPeople(page);
        resp.subscribe(function (data) {
            var dataPagination = data;
            _this.people = dataPagination;
            _this.numShops = dataPagination.count;
            _this.totalPages = Math.round(_this.numShops / _this.numResults);
        });
    };
    //Funci�n para pasar de p�gina
    //Esta funci�n se ejecuta cada vez que se desencadena
    //un evento sobre el componente hijo (app-pagination)
    PeopleComponent.prototype.goToPage = function (page) {
        this.page = page;
        this.pagination(page);
    };
    PeopleComponent.ctorParameters = function () { return [
        { type: _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"] },
        { type: _modal_component_modal_component__WEBPACK_IMPORTED_MODULE_3__["NgbdModalComponent"] },
        { type: _utilidad_datos_service__WEBPACK_IMPORTED_MODULE_4__["Servicio"] },
        { type: _services_apibackend_service__WEBPACK_IMPORTED_MODULE_5__["BackendApiService"] }
    ]; };
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_modal_component_modal_component__WEBPACK_IMPORTED_MODULE_3__["NgbdModalComponent"]],
            selector: 'app-people',
            template: __webpack_require__(/*! raw-loader!../view/people.component.html */ "./node_modules/raw-loader/index.js!./src/app/people/view/people.component.html"),
            styles: [__webpack_require__(/*! ../style/people.component.css */ "./src/app/people/style/people.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"], _modal_component_modal_component__WEBPACK_IMPORTED_MODULE_3__["NgbdModalComponent"],
            _utilidad_datos_service__WEBPACK_IMPORTED_MODULE_4__["Servicio"], _services_apibackend_service__WEBPACK_IMPORTED_MODULE_5__["BackendApiService"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/people/component/people.detalle.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/people/component/people.detalle.component.ts ***!
  \**************************************************************/
/*! exports provided: PeopleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleDetailComponent", function() { return PeopleDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _utilidad_datos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilidad/datos.service */ "./src/app/utilidad/datos.service.ts");




var PeopleDetailComponent = /** @class */ (function () {
    function PeopleDetailComponent(service, servicio) {
        var _this = this;
        this.service = service;
        this.servicio = servicio;
        this.headerColumnsDetails = ['Name', 'Height', 'Mass', 'Hair color', 'Skin color',
            'Eye color', 'Gender'];
        this.peoplesArray = [];
        this.mostrar = false;
        servicio.getValue.subscribe(function (data) {
            var e_1, _a;
            _this.mensaje = data;
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.mensaje.valor), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var clave = _c.value;
                    var resp = _this.service.getPeopleForPlanet(clave);
                    resp.subscribe(function (response) {
                        _this.peoples = response;
                        _this.peoplesArray.push(_this.peoples);
                        _this.mostrar = true;
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
    PeopleDetailComponent.ctorParameters = function () { return [
        { type: _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"] },
        { type: _utilidad_datos_service__WEBPACK_IMPORTED_MODULE_3__["Servicio"] }
    ]; };
    PeopleDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people-detail',
            template: "\n  <div *ngIf=\"mostrar\">\n    <h2 class=\"text-center\">People details</h2>\n    <table class=\"table table-striped custab\">\n         <thead>\n        <tr>\n            <th *ngFor=\"let header of headerColumnsDetails\">{{header}}</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let peoples of peoplesArray\">\n            <td>{{peoples.name}}</td>\n            <td>{{peoples.height}}</td>\n            <td>{{peoples.mass}}</td>\n            <td>{{peoples.hair_color}}</td>\n            <td>{{peoples.skin_color}}</td>\n            <td>{{peoples.eye_color}}</td>\n            <td>{{peoples.gender}}</td>\n         </tr>\n    </tbody>\n    </table>\n    </div>\n    ",
            styles: [__webpack_require__(/*! ../style/people.component.css */ "./src/app/people/style/people.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"], _utilidad_datos_service__WEBPACK_IMPORTED_MODULE_3__["Servicio"]])
    ], PeopleDetailComponent);
    return PeopleDetailComponent;
}());



/***/ }),

/***/ "./src/app/people/style/people.component.css":
/*!***************************************************!*\
  !*** ./src/app/people/style/people.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    padding-top:50px;\r\n}\r\nfieldset {\r\n    border: thin solid #ccc; \r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    padding-left: 40px;\r\n    background: #fbfbfb;\r\n}\r\nlegend {\r\n   color: #678;\r\n}\r\n.form-control {\r\n    width: 95%;\r\n}\r\nlabel small {\r\n    color: #678 !important;\r\n}\r\nspan.req {\r\n    color:maroon;\r\n    font-size: 112%;\r\n}\r\nmat-dialog-container#modal-component {\r\n    border: 3px solid #262626;\r\n    border-radius: 11px;\r\n    background-color: #1a1a1a;\r\n}\r\n.modal-content {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 130% !important;\r\n    pointer-events: auto;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 0.3rem;\r\n    outline: 0;\r\n}\r\ntd{\r\n\tfont-size:12px;\r\n}\r\nth{\r\n\tfont-size:14px;\r\n}\r\n.modal-content-base{\r\n\twidth:120% !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVvcGxlL3N0eWxlL3Blb3BsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0dBQ0csV0FBVztBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wZW9wbGUvc3R5bGUvcGVvcGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG59XHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCAjY2NjOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG59XHJcbmxlZ2VuZCB7XHJcbiAgIGNvbG9yOiAjNjc4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG5sYWJlbCBzbWFsbCB7XHJcbiAgICBjb2xvcjogIzY3OCAhaW1wb3J0YW50O1xyXG59XHJcbnNwYW4ucmVxIHtcclxuICAgIGNvbG9yOm1hcm9vbjtcclxuICAgIGZvbnQtc2l6ZTogMTEyJTtcclxufVxyXG5tYXQtZGlhbG9nLWNvbnRhaW5lciNtb2RhbC1jb21wb25lbnQge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzI2MjYyNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xyXG59XHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEzMCUgIWltcG9ydGFudDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbnRke1xyXG5cdGZvbnQtc2l6ZToxMnB4O1xyXG59XHJcbnRoe1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudC1iYXNle1xyXG5cdHdpZHRoOjEyMCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/planets/component/planets.component.ts":
/*!********************************************************!*\
  !*** ./src/app/planets/component/planets.component.ts ***!
  \********************************************************/
/*! exports provided: PlanetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsComponent", function() { return PlanetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _modal_component_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal/component/modal.component */ "./src/app/modal/component/modal.component.ts");
/* harmony import */ var _utilidad_datos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilidad/datos.service */ "./src/app/utilidad/datos.service.ts");
/* harmony import */ var _services_apibackend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/apibackend.service */ "./src/app/services/apibackend.service.ts");
/* harmony import */ var _visitas_model_visita__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../visitas/model/visita */ "./src/app/visitas/model/visita.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");








var PlanetsComponent = /** @class */ (function () {
    function PlanetsComponent(service, modalService, servicio, serviceApiBackend) {
        this.service = service;
        this.modalService = modalService;
        this.servicio = servicio;
        this.serviceApiBackend = serviceApiBackend;
        this.planet = [];
        this.parametro = true;
        this.headerColumns = ['Name', 'Rotation period', 'Orbital period', 'Diameter', 'Climate',
            'Gravity', 'Terrain', 'Surface water', 'Population'];
        this.peoplesList = [];
        this.visita = new _visitas_model_visita__WEBPACK_IMPORTED_MODULE_6__["Visita"](0, "", 0, "");
        this.shops = []; //Listado de tiendas
        this.page = 1; //N�mero de p�gina en la que estamos. Ser� 1 la primera vez que se carga el componente
        this.numResults = 10;
    }
    PlanetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resp = this.service.getPlanetsAll();
        resp.subscribe(function (data) { return _this.planet = data; });
        this.pagination(this.page);
    };
    PlanetsComponent.prototype.openDialog = function (planets) {
        this.registrarVisita(planets);
        var array = planets.residents;
        this.servicio.setValue(array);
        this.modalService.open('false');
    };
    PlanetsComponent.prototype.registrarVisita = function (planet) {
        var _this = this;
        if (planet != null && planet != undefined) {
            this.visita = new _visitas_model_visita__WEBPACK_IMPORTED_MODULE_6__["Visita"](0, planet.name, 0, _app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].PLANET);
            var resp = this.serviceApiBackend.registroVisitas(this.visita);
            resp.subscribe(function (data) { return _this.message = data; });
        }
    };
    PlanetsComponent.prototype.pagination = function (page) {
        var _this = this;
        var resp = this.service.getPaginationPlanet(page);
        resp.subscribe(function (data) {
            var dataPagination = data;
            _this.planet = dataPagination;
            _this.numShops = dataPagination.count;
            _this.totalPages = Math.round(_this.numShops / _this.numResults);
        });
    };
    //Funci�n para pasar de p�gina
    //Esta funci�n se ejecuta cada vez que se desencadena
    //un evento sobre el componente hijo (app-pagination)
    PlanetsComponent.prototype.goToPage = function (page) {
        this.page = page;
        this.pagination(page);
    };
    PlanetsComponent.ctorParameters = function () { return [
        { type: _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"] },
        { type: _modal_component_modal_component__WEBPACK_IMPORTED_MODULE_3__["NgbdModalComponent"] },
        { type: _utilidad_datos_service__WEBPACK_IMPORTED_MODULE_4__["Servicio"] },
        { type: _services_apibackend_service__WEBPACK_IMPORTED_MODULE_5__["BackendApiService"] }
    ]; };
    PlanetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_modal_component_modal_component__WEBPACK_IMPORTED_MODULE_3__["NgbdModalComponent"]],
            selector: 'app-planets',
            template: __webpack_require__(/*! raw-loader!../view/planets.component.html */ "./node_modules/raw-loader/index.js!./src/app/planets/view/planets.component.html"),
            styles: [__webpack_require__(/*! ../style/planets.component.css */ "./src/app/planets/style/planets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"], _modal_component_modal_component__WEBPACK_IMPORTED_MODULE_3__["NgbdModalComponent"], _utilidad_datos_service__WEBPACK_IMPORTED_MODULE_4__["Servicio"],
            _services_apibackend_service__WEBPACK_IMPORTED_MODULE_5__["BackendApiService"]])
    ], PlanetsComponent);
    return PlanetsComponent;
}());



/***/ }),

/***/ "./src/app/planets/component/planets.detalle.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/planets/component/planets.detalle.component.ts ***!
  \****************************************************************/
/*! exports provided: PlanetsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsDetailComponent", function() { return PlanetsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _utilidad_datos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilidad/datos.service */ "./src/app/utilidad/datos.service.ts");
/* harmony import */ var _services_apibackend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/apibackend.service */ "./src/app/services/apibackend.service.ts");
/* harmony import */ var _visitas_model_visita__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../visitas/model/visita */ "./src/app/visitas/model/visita.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");







var PlanetsDetailComponent = /** @class */ (function () {
    function PlanetsDetailComponent(service, servicio, serviceApiBackend) {
        this.service = service;
        this.servicio = servicio;
        this.serviceApiBackend = serviceApiBackend;
        this.message = [];
        this.mensaje = [];
        this.mostrar = false;
        this.count = 0;
    }
    PlanetsDetailComponent.prototype.ngOnInit = function () {
        this.findPeopleForPlanetDetail();
    };
    PlanetsDetailComponent.prototype.findPeopleForPlanetDetail = function () {
        var _this = this;
        this.servicio.getValue.subscribe(function (data) {
            _this.mensaje = data;
            var servicioSuscription = _this.service.getPeopleForPlanet(_this.mensaje.valor)
                .subscribe(function (response) {
                _this.count++;
                _this.planets = response;
                _this.mostrar = true;
                if (_this.count == 1) {
                    _this.registrarVisita(_this.planets);
                }
            });
        });
    };
    PlanetsDetailComponent.prototype.registrarVisita = function (planet) {
        var _this = this;
        if (planet != null && planet != undefined) {
            this.visita = new _visitas_model_visita__WEBPACK_IMPORTED_MODULE_5__["Visita"](0, planet.name, 0, _app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PLANET);
            var resp = this.serviceApiBackend.registroVisitas(this.visita);
            resp.subscribe(function (data) { return _this.message = data; });
        }
    };
    PlanetsDetailComponent.ctorParameters = function () { return [
        { type: _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"] },
        { type: _utilidad_datos_service__WEBPACK_IMPORTED_MODULE_3__["Servicio"] },
        { type: _services_apibackend_service__WEBPACK_IMPORTED_MODULE_4__["BackendApiService"] }
    ]; };
    PlanetsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planet-detail',
            template: "\n  <div class=\"container col-md-12\" *ngIf=\"mostrar\">\n  <h2 class=\"text-center\">Planet detail</h2>\n    <div class=\"row\">\n                   <div class=\"col-md-6\">\n                        <label> Name: </label>\n                        <input type=\"text\" [(ngModel)]=\"planets.name\" \n                            class=\"form-control\" />\n                      </div>      \n                     <div class=\"col-md-6\">   \n                        <label for=\"Name\"> Rotation period: </label>\n                        <input required type=\"text\" [(ngModel)]=\"planets.rotation_period\"\n                            class=\"form-control\" maxlength=\"28\" placeholder=\"Enter your fullname...\" />\n                      </div>      \t\n    </div>\n    <div class=\"row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"Name\"> Orbital period: </label>\n                        <input required type=\"text\" [(ngModel)]=\"planets.orbital_period\" \n                            class=\"form-control phone\" maxlength=\"28\" placeholder=\"Enter your fullname...\" />\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"Name\"> Diameter: </label>\n                        <input required type=\"text\" [(ngModel)]=\"planets.diameter\" \n                            class=\"form-control phone\" maxlength=\"28\" placeholder=\"Enter your fullname...\" />\n                    </div>\n          </div>      \n             <div class=\"row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"Name\">Climate: </label>\n                        <input required type=\"text\" [(ngModel)]=\"planets.climate\" \n                            class=\"form-control phone\" maxlength=\"28\" placeholder=\"Enter your fullname...\" />\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"Name\"> Gravity: </label>\n                        <input required type=\"text\" [(ngModel)]=\"planets.gravity\" \n                            class=\"form-control phone\" maxlength=\"28\" placeholder=\"Enter your fullname...\" />\n                    </div>\n          </div>\n          <div class=\"row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"Name\">Terrain: </label>\n                        <input required type=\"text\" [(ngModel)]=\"planets.terrain\" \n                            class=\"form-control phone\" maxlength=\"28\" placeholder=\"Enter your fullname...\" />\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"Name\"> Population: </label>\n                        <input required type=\"text\" [(ngModel)]=\"planets.population\" \n                            class=\"form-control phone\" maxlength=\"28\" placeholder=\"Enter your fullname...\" />\n                    </div>\n          </div>          \n      \n</div>\n    ",
            styles: [__webpack_require__(/*! ../style/planets.component.css */ "./src/app/planets/style/planets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"], _utilidad_datos_service__WEBPACK_IMPORTED_MODULE_3__["Servicio"], _services_apibackend_service__WEBPACK_IMPORTED_MODULE_4__["BackendApiService"]])
    ], PlanetsDetailComponent);
    return PlanetsDetailComponent;
}());



/***/ }),

/***/ "./src/app/planets/style/planets.component.css":
/*!*****************************************************!*\
  !*** ./src/app/planets/style/planets.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    padding-top:50px;\r\n}\r\nfieldset {\r\n    border: thin solid #ccc; \r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    padding-left: 40px;\r\n    background: #fbfbfb;\r\n}\r\nlegend {\r\n   color: #678;\r\n}\r\n.form-control {\r\n    width: 95%;\r\n}\r\nlabel small {\r\n    color: #678 !important;\r\n}\r\nspan.req {\r\n    color:maroon;\r\n    font-size: 112%;\r\n}\r\ntd{\r\n\tfont-size:12px;\r\n}\r\nth{\r\n\tfont-size:14px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhbmV0cy9zdHlsZS9wbGFuZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7R0FDRyxXQUFXO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wbGFuZXRzL3N0eWxlL3BsYW5ldHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOjUwcHg7XHJcbn1cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkICNjY2M7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbn1cclxubGVnZW5kIHtcclxuICAgY29sb3I6ICM2Nzg7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbmxhYmVsIHNtYWxsIHtcclxuICAgIGNvbG9yOiAjNjc4ICFpbXBvcnRhbnQ7XHJcbn1cclxuc3Bhbi5yZXEge1xyXG4gICAgY29sb3I6bWFyb29uO1xyXG4gICAgZm9udC1zaXplOiAxMTIlO1xyXG59XHJcbnRke1xyXG5cdGZvbnQtc2l6ZToxMnB4O1xyXG59XHJcbnRoe1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/services/apibackend.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/apibackend.service.ts ***!
  \************************************************/
/*! exports provided: BackendApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendApiService", function() { return BackendApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BackendApiService = /** @class */ (function () {
    function BackendApiService(http) {
        this.http = http;
        this.BASE_URL = window["cfgApiBaseUrl"] + "/api";
    }
    BackendApiService.prototype.registroVisitas = function (visitas) {
        return this.http.post(this.BASE_URL + "/visitas", visitas, { responseType: 'text' });
    };
    BackendApiService.prototype.getTopVisitas = function (tipoVisita) {
        return this.http.get(this.BASE_URL + "/visitas?tipoVisita=" + tipoVisita);
    };
    BackendApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    BackendApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BackendApiService);
    return BackendApiService;
}());



/***/ }),

/***/ "./src/app/services/swapi.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/swapi.service.ts ***!
  \*******************************************/
/*! exports provided: SwapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapiService", function() { return SwapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SwapiService = /** @class */ (function () {
    function SwapiService(http) {
        this.http = http;
        this.BASE_URL = "https://swapi.dev/api";
    }
    /*
      public doRegistration(user){
        return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
      }
    */
    SwapiService.prototype.getPlanetsAll = function () {
        return this.http.get(this.BASE_URL + "/planets/");
    };
    SwapiService.prototype.getPeopleAll = function () {
        return this.http.get(this.BASE_URL + "/people/");
    };
    SwapiService.prototype.getPeopleForPlanet = function (urlPersona) {
        return this.http.get(urlPersona);
    };
    SwapiService.prototype.getPaginationPlanet = function (page) {
        return this.http.get(this.BASE_URL + "/planets/?page=" + page);
    };
    SwapiService.prototype.getPaginationPeople = function (page) {
        return this.http.get(this.BASE_URL + "/people/?page=" + page);
    };
    SwapiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SwapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SwapiService);
    return SwapiService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.css":
/*!***********************************************!*\
  !*** ./src/app/spinner/spinner.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n\twidth:100%;\r\n\theight:100vh;\r\n\tdisplay:flex;\r\n\tjustify-content:center;\r\n\talign-items:center;\r\n\tz-index:3200;\r\n    filter:alpha(opacity=65);\r\n    -moz-opacity:65;\r\n    opacity:0.65;\r\n}\r\n.spinner{\r\n\twidth:100px;\r\n\theight:100px;\r\n\tborder-radius:50%;\r\n\tborder:5px solid black;\r\n\tbackground:transparent;\r\n\tborder-top-color:#efef;\r\n\tborder-bottom-color:#efef;\r\n\tborder-left-color:black;\r\n\t-webkit-animation:spin 1.5s linear infinite;\r\n\t        animation:spin 1.5s linear infinite;\r\n\tposition:relative;\r\n}\r\n@-webkit-keyframes spin{\r\n\t0%{\r\n\tbackground:transparent;\r\n\t-webkit-transform:rotate(720deg);\r\n\t        transform:rotate(720deg);\r\n\t}\r\n\t\r\n}\r\n@keyframes spin{\r\n\t0%{\r\n\tbackground:transparent;\r\n\t-webkit-transform:rotate(720deg);\r\n\t        transform:rotate(720deg);\r\n\t}\r\n\t\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0NBQ1YsWUFBWTtDQUNaLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLFlBQVk7SUFDVCx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLHNCQUFzQjtDQUN0QixzQkFBc0I7Q0FDdEIsc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6Qix1QkFBdUI7Q0FDdkIsMkNBQW1DO1NBQW5DLG1DQUFtQztDQUNuQyxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDO0NBQ0Esc0JBQXNCO0NBQ3RCLGdDQUF3QjtTQUF4Qix3QkFBd0I7Q0FDeEI7O0FBRUQ7QUFOQTtDQUNDO0NBQ0Esc0JBQXNCO0NBQ3RCLGdDQUF3QjtTQUF4Qix3QkFBd0I7Q0FDeEI7O0FBRUQiLCJmaWxlIjoic3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0aGVpZ2h0OjEwMHZoO1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHR6LWluZGV4OjMyMDA7XHJcbiAgICBmaWx0ZXI6YWxwaGEob3BhY2l0eT02NSk7XHJcbiAgICAtbW96LW9wYWNpdHk6NjU7XHJcbiAgICBvcGFjaXR5OjAuNjU7XHJcbn1cclxuLnNwaW5uZXJ7XHJcblx0d2lkdGg6MTAwcHg7XHJcblx0aGVpZ2h0OjEwMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdGJvcmRlcjo1cHggc29saWQgYmxhY2s7XHJcblx0YmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuXHRib3JkZXItdG9wLWNvbG9yOiNlZmVmO1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6I2VmZWY7XHJcblx0Ym9yZGVyLWxlZnQtY29sb3I6YmxhY2s7XHJcblx0YW5pbWF0aW9uOnNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuQGtleWZyYW1lcyBzcGlue1xyXG5cdDAle1xyXG5cdGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcblx0dHJhbnNmb3JtOnJvdGF0ZSg3MjBkZWcpO1xyXG5cdH1cclxuXHRcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: "<div class=\"content\"><div class=\"spinner\"></div></div>",
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/spinner/spinner.component.css")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/utilidad/datos.service.ts":
/*!*******************************************!*\
  !*** ./src/app/utilidad/datos.service.ts ***!
  \*******************************************/
/*! exports provided: Servicio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Servicio", function() { return Servicio; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

//our root app component


// SERVICIO QUE COMUNICA
var Servicio = /** @class */ (function () {
    function Servicio() {
        this.getValue = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    Servicio.prototype.setValue = function (value) {
        return this.getValue.next({ valor: value });
    };
    Servicio = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Servicio);
    return Servicio;
}());



/***/ }),

/***/ "./src/app/visitas/component/visitas.component.ts":
/*!********************************************************!*\
  !*** ./src/app/visitas/component/visitas.component.ts ***!
  \********************************************************/
/*! exports provided: VisitasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitasComponent", function() { return VisitasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_apibackend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/apibackend.service */ "./src/app/services/apibackend.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");




var VisitasComponent = /** @class */ (function () {
    function VisitasComponent(service) {
        this.service = service;
        this.headerPeople = ["People", "Count"];
        this.headerPlanet = ["Planet", "Count"];
        this.planets = [];
        this.peoples = [];
    }
    VisitasComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resp = this.service.getTopVisitas(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PLANET);
        resp.subscribe(function (data) { return _this.planets = data; });
        var respuesta = this.service.getTopVisitas(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].PEOPLE);
        respuesta.subscribe(function (data) { return _this.peoples = data; });
    };
    VisitasComponent.ctorParameters = function () { return [
        { type: _services_apibackend_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] }
    ]; };
    VisitasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visitas',
            template: __webpack_require__(/*! raw-loader!../view/visitas.component.html */ "./node_modules/raw-loader/index.js!./src/app/visitas/view/visitas.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_apibackend_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"]])
    ], VisitasComponent);
    return VisitasComponent;
}());



/***/ }),

/***/ "./src/app/visitas/model/visita.ts":
/*!*****************************************!*\
  !*** ./src/app/visitas/model/visita.ts ***!
  \*****************************************/
/*! exports provided: Visita */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visita", function() { return Visita; });
var Visita = /** @class */ (function () {
    function Visita(id, visitado, conteo, tipoVisita) {
        this.id = id;
        this.visitado = visitado;
        this.conteo = conteo;
        this.tipoVisita = tipoVisita;
    }
    Visita.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: Number },
        { type: String }
    ]; };
    return Visita;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\springboot-angular8-crud-example-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map