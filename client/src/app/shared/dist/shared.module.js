"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var pagination_1 = require("ngx-bootstrap/pagination");
var paging_header_component_1 = require("./components/paging-header/paging-header.component");
var pager_component_1 = require("./components/pager/pager.component");
var carousel_1 = require("ngx-bootstrap/carousel");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                paging_header_component_1.PagingHeaderComponent,
                pager_component_1.PagerComponent,
            ],
            imports: [
                common_1.CommonModule,
                pagination_1.PaginationModule.forRoot(),
                carousel_1.CarouselModule.forRoot(),
            ],
            exports: [
                pagination_1.PaginationModule,
                paging_header_component_1.PagingHeaderComponent,
                pager_component_1.PagerComponent,
                carousel_1.CarouselModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
