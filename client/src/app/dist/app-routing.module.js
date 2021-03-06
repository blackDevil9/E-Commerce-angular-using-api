"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var not_found_component_1 = require("./core/not-found/not-found.component");
var server_error_component_1 = require("./core/server-error/server-error.component");
var test_error_component_1 = require("./core/test-error/test-error.component");
var home_component_1 = require("./home/home.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'test-error', component: test_error_component_1.TestErrorComponent, data: { breadcrumb: 'Test-Error' } },
    { path: 'server-error', component: server_error_component_1.ServerErrorComponent, data: { breadcrumb: 'Server Error' } },
    { path: 'not-found', component: not_found_component_1.NotFoundComponent, data: { breadcrumb: 'Not Found' } },
    { path: 'shop', loadChildren: function () { return Promise.resolve().then(function () { return require('./shop/shop.module'); }).then(function (mod) { return mod.ShopModule; }); }, data: { breadcrumb: 'Shop' } },
    { path: '**', redirectTo: 'Not-Found', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
