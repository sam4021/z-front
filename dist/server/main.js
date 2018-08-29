(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var routes = [
    {
        path: '',
        loadChildren: './components/pages/home/home.module#HomeModule'
    },
    {
        path: 'product',
        loadChildren: './components/pages/product/product.module#ProductModule'
    },
    {
        path: 'products',
        loadChildren: './components/pages/products/products.module#ProductsModule'
    },
    {
        path: 'cart',
        loadChildren: './components/pages/cart/cart.module#CartModule'
    },
    {
        path: 'checkout',
        loadChildren: './components/pages/checkout/checkout.module#CheckoutModule'
    },
    {
        path: 'brand',
        loadChildren: './components/pages/brand/brand.module#BrandModule'
    },
    {
        path: 'blog',
        loadChildren: './components/pages/blog/blog.module#BlogModule'
    },
    {
        path: 'blogs',
        loadChildren: './components/pages/blogs/blogs.module#BlogsModule'
    },
    {
        path: 'offers',
        loadChildren: './components/pages/offers/offers.module#OffersModule'
    },
    {
        path: 'faq',
        loadChildren: './components/pages/faq/faq.module#FaqModule'
    },
    // { 
    //   path: 'callback',
    //   loadChildren: './components/pages/callback/callback.module#CallbackModule'
    // },
    {
        path: 'search',
        loadChildren: './components/pages/search/search.module#SearchModule'
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./components/partials/header/header.component.ngfactory */ "./src/app/components/partials/header/header.component.ngfactory.js");
var i2 = __webpack_require__(/*! ./components/partials/header/header.component */ "./src/app/components/partials/header/header.component.ts");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! ./services/products/products.service */ "./src/app/services/products/products.service.ts");
var i5 = __webpack_require__(/*! ./services/category/category.service */ "./src/app/services/category/category.service.ts");
var i6 = __webpack_require__(/*! ngx-device-detector */ "ngx-device-detector");
var i7 = __webpack_require__(/*! ./components/partials/footer/footer.component.ngfactory */ "./src/app/components/partials/footer/footer.component.ngfactory.js");
var i8 = __webpack_require__(/*! ./components/partials/footer/footer.component */ "./src/app/components/partials/footer/footer.component.ts");
var i9 = __webpack_require__(/*! ./services/checkout/checkout.service */ "./src/app/services/checkout/checkout.service.ts");
var i10 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var styles_AppComponent = [];
var RenderType_AppComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-header", [], null, null, null, i1.View_HeaderComponent_0, i1.RenderType_HeaderComponent)), i0.ɵdid(1, 114688, null, 0, i2.HeaderComponent, [i0.PLATFORM_ID, i3.Router, i4.ProductsService, i5.CategoryService, i6.DeviceDetectorService], null, null), (_l()(), i0.ɵeld(2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(3, 212992, null, 0, i3.RouterOutlet, [i3.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null), (_l()(), i0.ɵeld(4, 0, null, null, 1, "app-footer", [], null, null, null, i7.View_FooterComponent_0, i7.RenderType_FooterComponent)), i0.ɵdid(5, 245760, null, 0, i8.FooterComponent, [i0.PLATFORM_ID, i9.CheckoutService, i4.ProductsService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); }, null); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i0.ɵdid(1, 49152, null, 0, i10.AppComponent, [i3.Router], null, null)], null, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i0.ɵccf("app-root", i10.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (event) {
            window.scroll(0, 0);
        });
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular5_social_login_1 = __webpack_require__(/*! angular5-social-login */ "angular5-social-login");
// Configs 
function getAuthServiceConfigs() {
    var config = new angular5_social_login_1.AuthServiceConfig([
        {
            id: angular5_social_login_1.FacebookLoginProvider.PROVIDER_ID,
            provider: new angular5_social_login_1.FacebookLoginProvider("Your-Facebook-app-id")
        },
        {
            id: angular5_social_login_1.GoogleLoginProvider.PROVIDER_ID,
            provider: new angular5_social_login_1.GoogleLoginProvider("Your-Google-Client-Id")
        },
    ]);
    return config;
}
exports.getAuthServiceConfigs = getAuthServiceConfigs;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i6 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i7 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i8 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i9 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i10 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i11 = __webpack_require__(/*! @nguniversal/common */ "@nguniversal/common");
var i12 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i13 = __webpack_require__(/*! angular5-social-login */ "angular5-social-login");
var i14 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var i15 = __webpack_require__(/*! ngx-device-detector */ "ngx-device-detector");
var i16 = __webpack_require__(/*! ./services/products/products.service */ "./src/app/services/products/products.service.ts");
var i17 = __webpack_require__(/*! ./services/category/category.service */ "./src/app/services/category/category.service.ts");
var i18 = __webpack_require__(/*! ./services/checkout/checkout.service */ "./src/app/services/checkout/checkout.service.ts");
var i19 = __webpack_require__(/*! ./services/pager/pager.service */ "./src/app/services/pager/pager.service.ts");
var i20 = __webpack_require__(/*! ./services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
var i21 = __webpack_require__(/*! ./services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
var i22 = __webpack_require__(/*! ./services/filter/filter-sort.service */ "./src/app/services/filter/filter-sort.service.ts");
var i23 = __webpack_require__(/*! ./services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var i24 = __webpack_require__(/*! ./services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
var i25 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i26 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i27 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i28 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var i29 = __webpack_require__(/*! ./components/partials/top-cart/top-cart.module */ "./src/app/components/partials/top-cart/top-cart.module.ts");
var i30 = __webpack_require__(/*! ./components/partials/top-search/top-search.module */ "./src/app/components/partials/top-search/top-search.module.ts");
var i31 = __webpack_require__(/*! ./components/partials/menu/menu.module */ "./src/app/components/partials/menu/menu.module.ts");
var i32 = __webpack_require__(/*! ./components/partials/header/header.module */ "./src/app/components/partials/header/header.module.ts");
var i33 = __webpack_require__(/*! ./components/partials/footer/footer.module */ "./src/app/components/partials/footer/footer.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_l, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_k, []), i0.ɵmpd(4608, i5.DomSanitizer, i5.ɵangular_packages_platform_browser_platform_browser_e, [i4.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i5.DomSanitizer]), i0.ɵmpd(4608, i5.HAMMER_GESTURE_CONFIG, i5.HammerGestureConfig, []), i0.ɵmpd(5120, i5.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) { return [new i5.ɵDomEventsPlugin(p0_0, p0_1), new i5.ɵKeyEventsPlugin(p1_0), new i5.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2)]; }, [i4.DOCUMENT, i0.NgZone, i4.DOCUMENT, i4.DOCUMENT, i5.HAMMER_GESTURE_CONFIG, i0.ɵConsole]), i0.ɵmpd(4608, i5.EventManager, i5.EventManager, [i5.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i5.ɵDomSharedStylesHost, i5.ɵDomSharedStylesHost, [i4.DOCUMENT]), i0.ɵmpd(4608, i5.ɵDomRendererFactory2, i5.ɵDomRendererFactory2, [i5.EventManager, i5.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i6.ɵangular_packages_platform_server_platform_server_c, i6.ɵangular_packages_platform_server_platform_server_c, [i5.DOCUMENT, [2, i5.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i5.ɵSharedStylesHost, null, [i6.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i6.ɵServerRendererFactory2, i6.ɵServerRendererFactory2, [i0.NgZone, i5.DOCUMENT, i5.ɵSharedStylesHost]), i0.ɵmpd(4608, i7.AnimationDriver, i7.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i7.ɵAnimationStyleNormalizer, i8.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i7.ɵAnimationEngine, i8.ɵangular_packages_platform_browser_animations_animations_a, [i7.AnimationDriver, i7.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i6.ɵangular_packages_platform_server_platform_server_a, [i6.ɵServerRendererFactory2, i7.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i5.Meta, i5.Meta, [i4.DOCUMENT]), i0.ɵmpd(4608, i5.Title, i5.Title, [i4.DOCUMENT]), i0.ɵmpd(5120, i9.ActivatedRoute, i9.ɵangular_packages_router_router_f, [i9.Router]), i0.ɵmpd(4608, i9.NoPreloading, i9.NoPreloading, []), i0.ɵmpd(6144, i9.PreloadingStrategy, null, [i9.NoPreloading]), i0.ɵmpd(135680, i9.RouterPreloader, i9.RouterPreloader, [i9.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i9.PreloadingStrategy]), i0.ɵmpd(4608, i9.PreloadAllModules, i9.PreloadAllModules, []), i0.ɵmpd(5120, i9.ROUTER_INITIALIZER, i9.ɵangular_packages_router_router_i, [i9.ɵangular_packages_router_router_g]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i9.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i10.HttpXsrfTokenExtractor, i10.ɵangular_packages_common_http_http_h, [i4.DOCUMENT, i0.PLATFORM_ID, i10.ɵangular_packages_common_http_http_f]), i0.ɵmpd(4608, i10.ɵangular_packages_common_http_http_i, i10.ɵangular_packages_common_http_http_i, [i10.HttpXsrfTokenExtractor, i10.ɵangular_packages_common_http_http_g]), i0.ɵmpd(4608, i5.TransferState, i5.TransferState, []), i0.ɵmpd(4608, i11.ɵnguniversal_modules_common_common_a, i11.ɵnguniversal_modules_common_common_a, [i0.ApplicationRef, i5.TransferState]), i0.ɵmpd(5120, i10.HTTP_INTERCEPTORS, function (p0_0, p1_0) { return [p0_0, p1_0]; }, [i10.ɵangular_packages_common_http_http_i, i11.ɵnguniversal_modules_common_common_a]), i0.ɵmpd(4608, i10.XhrFactory, i6.ɵangular_packages_platform_server_platform_server_d, []), i0.ɵmpd(4608, i10.HttpXhrBackend, i10.HttpXhrBackend, [i10.XhrFactory]), i0.ɵmpd(6144, i10.HttpBackend, null, [i10.HttpXhrBackend]), i0.ɵmpd(5120, i10.HttpHandler, i6.ɵangular_packages_platform_server_platform_server_g, [i10.HttpBackend, [2, i10.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i10.HttpClient, i10.HttpClient, [i10.HttpHandler]), i0.ɵmpd(4608, i10.ɵangular_packages_common_http_http_e, i10.ɵangular_packages_common_http_http_e, []), i0.ɵmpd(4608, i12.ɵangular_packages_forms_forms_i, i12.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(4608, i12.FormBuilder, i12.FormBuilder, []), i0.ɵmpd(5120, i13.AuthServiceConfig, i14.getAuthServiceConfigs, []), i0.ɵmpd(4608, i13.AuthService, i13.AuthService, [i13.AuthServiceConfig]), i0.ɵmpd(4608, i15.DeviceDetectorService, i15.DeviceDetectorService, [i0.PLATFORM_ID]), i0.ɵmpd(4608, i16.ProductsService, i16.ProductsService, [i10.HttpClient]), i0.ɵmpd(4608, i17.CategoryService, i17.CategoryService, [i10.HttpClient]), i0.ɵmpd(4608, i18.CheckoutService, i18.CheckoutService, [i10.HttpClient]), i0.ɵmpd(4608, i19.PagerService, i19.PagerService, []), i0.ɵmpd(4608, i20.AlertService, i20.AlertService, [i9.Router]), i0.ɵmpd(4608, i4.DatePipe, i4.DatePipe, [i0.LOCALE_ID]), i0.ɵmpd(4608, i21.UtilsService, i21.UtilsService, [i4.DatePipe]), i0.ɵmpd(4608, i22.FilterSortService, i22.FilterSortService, [i4.DatePipe]), i0.ɵmpd(4608, i23.LocalStorageService, i23.LocalStorageService, []), i0.ɵmpd(4608, i23.StorageService, i23.LocalStorageService, []), i0.ɵmpd(4608, i24.CartService, i24.CartService, [i23.StorageService, i16.ProductsService]), i0.ɵmpd(4608, i25.BrowserXhr, i6.ɵangular_packages_platform_server_platform_server_d, []), i0.ɵmpd(4608, i25.ResponseOptions, i25.BaseResponseOptions, []), i0.ɵmpd(4608, i25.XSRFStrategy, i6.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i25.XHRBackend, i25.XHRBackend, [i25.BrowserXhr, i25.ResponseOptions, i25.XSRFStrategy]), i0.ɵmpd(4608, i25.RequestOptions, i25.BaseRequestOptions, []), i0.ɵmpd(5120, i25.Http, i6.ɵangular_packages_platform_server_platform_server_f, [i25.XHRBackend, i25.RequestOptions]), i0.ɵmpd(4608, i26.AnimationBuilder, i8.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i5.DOCUMENT]), i0.ɵmpd(5120, i6.BEFORE_APP_SERIALIZED, function (p0_0, p0_1, p0_2) { return [i6.ɵangular_packages_platform_server_platform_server_b(p0_0, p0_1, p0_2)]; }, [i5.DOCUMENT, i0.APP_ID, i5.TransferState]), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i5.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i9.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i9.ɵangular_packages_router_router_g, i9.ɵangular_packages_router_router_g, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "my-app", []), i0.ɵmpd(2048, i5.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [i5.ɵangular_packages_platform_browser_platform_browser_h(p0_0), i9.ɵangular_packages_router_router_h(p1_0), i5.ɵangular_packages_platform_browser_platform_browser_f(p2_0, p2_1, p2_2)]; }, [[2, i0.NgProbeToken], i9.ɵangular_packages_router_router_g, i5.ɵTRANSITION_ID, i4.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i5.BrowserModule, i5.BrowserModule, [[3, i5.BrowserModule]]), i0.ɵmpd(1024, i9.ɵangular_packages_router_router_a, i9.ɵangular_packages_router_router_d, [[3, i9.Router]]), i0.ɵmpd(512, i9.UrlSerializer, i9.DefaultUrlSerializer, []), i0.ɵmpd(512, i9.ChildrenOutletContexts, i9.ChildrenOutletContexts, []), i0.ɵmpd(256, i9.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i4.LocationStrategy, i9.ɵangular_packages_router_router_c, [i4.PlatformLocation, [2, i4.APP_BASE_HREF], i9.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i4.Location, i4.Location, [i4.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i27.ModuleMapNgFactoryLoader, [i0.Compiler, i27.MODULE_MAP]), i0.ɵmpd(1024, i9.ROUTES, function () { return [[{ path: "", loadChildren: "./components/pages/home/home.module#HomeModule" }, { path: "product", loadChildren: "./components/pages/product/product.module#ProductModule" }, { path: "products", loadChildren: "./components/pages/products/products.module#ProductsModule" }, { path: "cart", loadChildren: "./components/pages/cart/cart.module#CartModule" }, { path: "checkout", loadChildren: "./components/pages/checkout/checkout.module#CheckoutModule" }, { path: "brand", loadChildren: "./components/pages/brand/brand.module#BrandModule" }, { path: "blog", loadChildren: "./components/pages/blog/blog.module#BlogModule" }, { path: "blogs", loadChildren: "./components/pages/blogs/blogs.module#BlogsModule" }, { path: "offers", loadChildren: "./components/pages/offers/offers.module#OffersModule" }, { path: "faq", loadChildren: "./components/pages/faq/faq.module#FaqModule" }, { path: "search", loadChildren: "./components/pages/search/search.module#SearchModule" }, { path: "**", redirectTo: "/" }]]; }, []), i0.ɵmpd(1024, i9.Router, i9.ɵangular_packages_router_router_e, [i0.ApplicationRef, i9.UrlSerializer, i9.ChildrenOutletContexts, i4.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i9.ROUTES, i9.ROUTER_CONFIGURATION, [2, i9.UrlHandlingStrategy], [2, i9.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i9.RouterModule, i9.RouterModule, [[2, i9.ɵangular_packages_router_router_a], [2, i9.Router]]), i0.ɵmpd(1073742336, i28.AppRoutingModule, i28.AppRoutingModule, []), i0.ɵmpd(1073742336, i10.HttpClientXsrfModule, i10.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i10.HttpClientModule, i10.HttpClientModule, []), i0.ɵmpd(1073742336, i12.ɵangular_packages_forms_forms_bb, i12.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i12.FormsModule, i12.FormsModule, []), i0.ɵmpd(1073742336, i12.ReactiveFormsModule, i12.ReactiveFormsModule, []), i0.ɵmpd(1073742336, i5.BrowserTransferStateModule, i5.BrowserTransferStateModule, []), i0.ɵmpd(1073742336, i11.TransferHttpCacheModule, i11.TransferHttpCacheModule, []), i0.ɵmpd(1073742336, i29.TopCartModule, i29.TopCartModule, []), i0.ɵmpd(1073742336, i30.TopSearchModule, i30.TopSearchModule, []), i0.ɵmpd(1073742336, i31.MenuModule, i31.MenuModule, []), i0.ɵmpd(1073742336, i32.HeaderModule, i32.HeaderModule, []), i0.ɵmpd(1073742336, i33.FooterModule, i33.FooterModule, []), i0.ɵmpd(1073742336, i15.DeviceDetectorModule, i15.DeviceDetectorModule, []), i0.ɵmpd(1073742336, i13.SocialLoginModule, i13.SocialLoginModule, []), i0.ɵmpd(1073742336, i14.AppModule, i14.AppModule, []), i0.ɵmpd(1073742336, i25.HttpModule, i25.HttpModule, []), i0.ɵmpd(1073742336, i8.NoopAnimationsModule, i8.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i6.ServerModule, i6.ServerModule, []), i0.ɵmpd(1073742336, i27.ModuleMapLoaderModule, i27.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i6.ServerTransferStateModule, i6.ServerTransferStateModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i10.ɵangular_packages_common_http_http_f, "XSRF-TOKEN", []), i0.ɵmpd(256, i10.ɵangular_packages_common_http_http_g, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i8.ANIMATION_MODULE_TYPE, "NoopAnimations", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/components/pages/blog/blog.component.css.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/components/pages/blog/blog.component.css.shim.ngstyle.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".blog-page[_ngcontent-%COMP%], .main-cont[_ngcontent-%COMP%], .sub-cont[_ngcontent-%COMP%] {\n    background-color: #FFF\n}\n\na[_ngcontent-%COMP%] {\n    color: #706e6f;\n    text-decoration: none\n}\n\n.blog-page[_ngcontent-%COMP%] {\n    padding-top: 30px\n}\n\n.main-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n.info[_ngcontent-%COMP%] {\n    margin: 20px 0\n}\n\n.info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 700;\n    color: #01a19b;\n    padding: 0 30px\n}\n\n.main-info[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n    padding: 20px\n}\n\n.main-info[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-bottom: 1rem;\n    line-height: 1.3rem;\n    text-indent: 2rem;\n\n}\n\n.sub-cont[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .blog-cont[_ngcontent-%COMP%]   .blog-img[_ngcontent-%COMP%] {\n    width: 50%;\n    float: left\n}\n\n.sub-cont[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .blog-cont[_ngcontent-%COMP%]   .blog-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90%\n}\n\n.sub-cont[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .blog-cont[_ngcontent-%COMP%]   .blog-title[_ngcontent-%COMP%] {\n    color: #4aadaa;\n    font-size: 14px;\n    font-weight: 700;\n    border-top: 1px solid #ddd;\n    border-bottom: 1px solid #ddd\n}\n\n.sub-cont[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .blog-cont[_ngcontent-%COMP%]   .blog-txt[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 5px\n}\n\n.sub-cont[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .blog-cont[_ngcontent-%COMP%]   .blog-action[_ngcontent-%COMP%] {\n    text-align: right;\n    padding-right: 5px;\n    padding-bottom: 5px\n}\n\n.sub-cont[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .blog-cont[_ngcontent-%COMP%]   .blog-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    border-radius: 0;\n    font-size: 12px;\n    background-color: #706e6f;\n    border-color: #706e6f;\n    color: #fff\n}\n\n.sub-cont[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .view-all[_ngcontent-%COMP%], .recent-inner[_ngcontent-%COMP%]   .view-all[_ngcontent-%COMP%]{\n    width: 100%;\n    text-align: center;\n    margin-top: 10px;\n    background-color: #2fa09b;\n}\n\n.sub-cont[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .view-all[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .recent-inner[_ngcontent-%COMP%]   .view-all[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: #FFF;\n}\n\n.mobile_view[_ngcontent-%COMP%]   .main-cont[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    margin: 10px 0\n}\n\n.mobile_view[_ngcontent-%COMP%]   .main-cont[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    padding: 5px 10px 0\n}\n\n.mobile_view[_ngcontent-%COMP%]   .recent-container[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: scroll\n}\n\n.mobile_view[_ngcontent-%COMP%]   .recent-inner[_ngcontent-%COMP%] {\n    width: 700px\n}\n\n.mobile_view[_ngcontent-%COMP%]   .recent-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #02a09b;\n    font-size: 13px;\n    font-weight: 700;\n    padding: 5px;\n    text-align: inherit\n}\n\n.mobile_view[_ngcontent-%COMP%]   .recent-inner[_ngcontent-%COMP%]   .blog-cont[_ngcontent-%COMP%] {\n    float: left;\n    width: 20%\n}\n\n.mobile_view[_ngcontent-%COMP%]   .recent-inner[_ngcontent-%COMP%]   .blog-title[_ngcontent-%COMP%] {\n    padding: 5px\n}\n\n.mobile_view[_ngcontent-%COMP%]   .recent-inner[_ngcontent-%COMP%]   .blog-img[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center\n}\n\n.mobile_view[_ngcontent-%COMP%]   .recent-inner[_ngcontent-%COMP%]   .blog-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto\n}\n\n.mobile_view[_ngcontent-%COMP%]   .main-cont[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n    padding: 10px\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 1rem;\n    background-color: transparent\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: .75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6\n}\n\n.main-img[_ngcontent-%COMP%] {\n    padding: 0px 20px;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/pages/blog/blog.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/blog/blog.component.ngfactory.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./blog.component.css.shim.ngstyle */ "./src/app/components/pages/blog/blog.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./blog.component */ "./src/app/components/pages/blog/blog.component.ts");
var i5 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i6 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var styles_BlogComponent = [i0.styles];
var RenderType_BlogComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_BlogComponent, data: {} });
exports.RenderType_BlogComponent = RenderType_BlogComponent;
function View_BlogComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/blogs/", _co.blog.main_image, ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _co.blog.title, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_BlogComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/blogs/", _v.parent.context.$implicit.thumb_image, ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_BlogComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["src", "https://placeimg.com/286/180/tech"]], [[8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0); }); }
function View_BlogComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "div", [["class", "blog-cont"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 7, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 4, "div", [["class", "blog-img"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogComponent_4)), i1.ɵdid(5, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogComponent_5)), i1.ɵdid(7, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(8, 0, null, null, 0, "div", [["class", "blog-title"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/blog/", _v.context.$implicit.url, ""); _ck(_v, 2, 0, currVal_2); var currVal_3 = (_v.context.$implicit.thumb_image != ""); _ck(_v, 5, 0, currVal_3); var currVal_4 = (_v.context.$implicit.thumb_image == ""); _ck(_v, 7, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_5 = _v.context.$implicit.title; _ck(_v, 8, 0, currVal_5); }); }
function View_BlogComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 18, "div", [["class", "mobile_view"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 17, "div", [["class", "main-cont"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "main-img"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogComponent_2)), i1.ɵdid(4, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "div", [["class", "title"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 1, "div", [["class", "main-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 0, "div", [["class", "inner"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 9, "div", [["class", "recent-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Recent Posts"])), (_l()(), i1.ɵeld(12, 0, null, null, 6, "div", [["class", "recent-inner"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogComponent_3)), i1.ɵdid(14, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 3, "div", [["class", "view-all"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 2, "a", [["routerLink", "/blogs"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(17, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["view all"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.blog.main_image != ""); _ck(_v, 4, 0, currVal_0); var currVal_3 = _co.blogs; _ck(_v, 14, 0, currVal_3); var currVal_6 = "/blogs"; _ck(_v, 17, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.blog.title; _ck(_v, 6, 0, currVal_1); var currVal_2 = _co.blog.full_content; _ck(_v, 8, 0, currVal_2); var currVal_4 = i1.ɵnov(_v, 17).target; var currVal_5 = i1.ɵnov(_v, 17).href; _ck(_v, 16, 0, currVal_4, currVal_5); }); }
function View_BlogComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/blogs/", _co.blog.main_image, ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _co.blog.title, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_BlogComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/blogs/", _v.parent.context.$implicit.thumb_image, ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_BlogComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["src", "https://placeimg.com/286/180/tech"]], [[8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0); }); }
function View_BlogComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 13, "div", [["class", "blog-cont"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 0, "div", [["class", "blog-title"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 4, "div", [["class", "blog-img"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogComponent_9)), i1.ɵdid(6, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogComponent_10)), i1.ɵdid(8, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(9, 0, null, null, 0, "div", [["class", "blog-txt"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 3, "div", [["class", "blog-action"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 2, "a", [["class", "btn btn-primary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(12, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Read More"]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/blog/", _v.context.$implicit.url, ""); _ck(_v, 2, 0, currVal_2); var currVal_4 = (_v.context.$implicit.thumb_image != ""); _ck(_v, 6, 0, currVal_4); var currVal_5 = (_v.context.$implicit.thumb_image == ""); _ck(_v, 8, 0, currVal_5); var currVal_9 = i1.ɵinlineInterpolate(1, "/blog/", _v.context.$implicit.url, ""); _ck(_v, 12, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_3); var currVal_6 = _v.context.$implicit.short_content; _ck(_v, 9, 0, currVal_6); var currVal_7 = i1.ɵnov(_v, 12).target; var currVal_8 = i1.ɵnov(_v, 12).href; _ck(_v, 11, 0, currVal_7, currVal_8); }); }
function View_BlogComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 22, "div", [["class", "blog-page desktop_view"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 21, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 20, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 8, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 7, "div", [["class", "main-cont"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "div", [["class", "title"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "main-img"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogComponent_7)), i1.ɵdid(9, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(10, 0, null, null, 1, "div", [["class", "main-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 0, "div", [["class", "inner"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 10, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 9, "div", [["class", "sub-cont"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Recent Posts"])), (_l()(), i1.ɵeld(16, 0, null, null, 6, "div", [["class", "inner"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogComponent_8)), i1.ɵdid(18, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(19, 0, null, null, 3, "div", [["class", "view-all"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 2, "a", [["routerLink", "/blogs"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 21).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(21, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["view all"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.blog.main_image != ""); _ck(_v, 9, 0, currVal_1); var currVal_3 = _co.blogs; _ck(_v, 18, 0, currVal_3); var currVal_6 = "/blogs"; _ck(_v, 21, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.blog.title; _ck(_v, 6, 0, currVal_0); var currVal_2 = _co.blog.full_content; _ck(_v, 11, 0, currVal_2); var currVal_4 = i1.ɵnov(_v, 21).target; var currVal_5 = i1.ɵnov(_v, 21).href; _ck(_v, 20, 0, currVal_4, currVal_5); }); }
function View_BlogComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogComponent_1)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogComponent_6)), i1.ɵdid(3, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mobile_view; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.desktop_view; _ck(_v, 3, 0, currVal_1); }, null); }
exports.View_BlogComponent_0 = View_BlogComponent_0;
function View_BlogComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-blog", [], null, null, null, View_BlogComponent_0, RenderType_BlogComponent)), i1.ɵdid(1, 245760, null, 0, i4.BlogComponent, [i5.Title, i5.Meta, i6.ProductsService, i2.ActivatedRoute], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_BlogComponent_Host_0 = View_BlogComponent_Host_0;
var BlogComponentNgFactory = i1.ɵccf("app-blog", i4.BlogComponent, View_BlogComponent_Host_0, {}, {}, []);
exports.BlogComponentNgFactory = BlogComponentNgFactory;


/***/ }),

/***/ "./src/app/components/pages/blog/blog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/blog/blog.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var platform_browser_2 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var BlogComponent = /** @class */ (function () {
    function BlogComponent(title, meta, productService, route) {
        var _this = this;
        this.title = title;
        this.meta = meta;
        this.productService = productService;
        this.route = route;
        this.mobile_view = false;
        this.desktop_view = false;
        this.imageUrl = '';
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            //this._getBlogInfo(this.id);
            _this._getBlog(_this.id);
            _this.blogSub = _this.productService
                .getBlogInfo$(_this.id)
                .subscribe(function (res) {
                _this.blog = res;
                _this.loading = false;
                // this.title.setTitle(this.blog.title +' :: Zuri Cart Kenya');
                // this.meta.addTag({ name: 'description', content: this.blog.seo.description });
                // this.meta.addTag({ name: 'keywords', content: this.blog.seo.keywords });
            }, function (err) {
                console.error(err);
                _this.loading = false;
            });
        });
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.imageUrl = IMG_URL;
        if (window.screen.width >= 320 && window.screen.width <= 480) {
            this.mobile_view = true;
            this.desktop_view = false;
        }
        else {
            this.mobile_view = false;
            this.desktop_view = true;
        }
    };
    BlogComponent.prototype._getBlogInfo = function (id) {
        var _this = this;
        this.loading = true;
        // Get future, public events
        this.blogSub = this.productService
            .getBlogInfo$(id)
            .subscribe(function (res) {
            _this.blog = res;
            _this.loading = false;
        }, function (err) {
            console.error(err);
            _this.loading = false;
        });
    };
    BlogComponent.prototype._getBlog = function (id) {
        var _this = this;
        this.loading = true;
        // Get future, public events
        this.blogMSub = this.productService
            .getOtherBlogs$(id)
            .subscribe(function (res) {
            _this.blogs = res;
            _this.loading = false;
        }, function (err) {
            console.error(err);
            _this.loading = false;
        });
    };
    BlogComponent.prototype.ngOnDestroy = function () {
        if (this.blogSub) {
            this.blogSub.unsubscribe();
        }
        if (this.blogMSub) {
            this.blogMSub.unsubscribe();
        }
    };
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;


/***/ }),

/***/ "./src/app/components/pages/blog/blog.module.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/components/pages/blog/blog.module.ngfactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./blog.module */ "./src/app/components/pages/blog/blog.module.ts");
var i2 = __webpack_require__(/*! ./blog.component.ngfactory */ "./src/app/components/pages/blog/blog.component.ngfactory.js");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i5 = __webpack_require__(/*! ./blog.component */ "./src/app/components/pages/blog/blog.component.ts");
var BlogModuleNgFactory = i0.ɵcmf(i1.BlogModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.BlogComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(1073742336, i4.RouterModule, i4.RouterModule, [[2, i4.ɵangular_packages_router_router_a], [2, i4.Router]]), i0.ɵmpd(1073742336, i1.BlogModule, i1.BlogModule, []), i0.ɵmpd(1024, i4.ROUTES, function () { return [[{ path: ":id", component: i5.BlogComponent, pathMatch: "full" }]]; }, [])]); });
exports.BlogModuleNgFactory = BlogModuleNgFactory;


/***/ }),

/***/ "./src/app/components/pages/blog/blog.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/pages/blog/blog.module.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    return BlogModule;
}());
exports.BlogModule = BlogModule;


/***/ }),

/***/ "./src/app/components/pages/blogs/blogs.component.css.shim.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/components/pages/blogs/blogs.component.css.shim.ngstyle.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".blog-image[_ngcontent-%COMP%]{position:relative}.blog-image-inner[_ngcontent-%COMP%]{position:absolute;border:1px solid #FFF;top:5px;left:5px;right:5px;bottom:5px}.blog-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.blog-details[_ngcontent-%COMP%]{padding:10px}.blog-title[_ngcontent-%COMP%]{font-size:15px;color:#02a09b;font-weight:600;margin-bottom:10px}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/pages/blogs/blogs.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/blogs/blogs.component.ngfactory.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./blogs.component.css.shim.ngstyle */ "./src/app/components/pages/blogs/blogs.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! ./blogs.component */ "./src/app/components/pages/blogs/blogs.component.ts");
var i5 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var styles_BlogsComponent = [i0.styles];
var RenderType_BlogsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_BlogsComponent, data: {} });
exports.RenderType_BlogsComponent = RenderType_BlogsComponent;
function View_BlogsComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/blogs/", _v.parent.context.$implicit.thumb_image, ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_BlogsComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["src", "https://placeimg.com/286/180/tech"]], [[8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0); }); }
function View_BlogsComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 15, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 14, "div", [["class", "blog-main"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 13, "div", [["class", "blog-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 12, "div", [["class", "blog-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 5, "div", [["class", "blog-image"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, "div", [["class", "blog-image-inner"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_2)), i1.ɵdid(7, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_3)), i1.ɵdid(9, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(10, 0, null, null, 5, "div", [["class", "blog-details"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 0, "div", [["class", "blog-tags"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(13, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(14, 0, null, null, 0, "div", [["class", "blog-title"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 0, "div", [["class", "blog-short"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.thumb_image != ""); _ck(_v, 7, 0, currVal_0); var currVal_1 = (_v.context.$implicit.thumb_image == ""); _ck(_v, 9, 0, currVal_1); var currVal_4 = i1.ɵinlineInterpolate(1, "/blog/", _v.context.$implicit.url, ""); _ck(_v, 13, 0, currVal_4); }, function (_ck, _v) { var currVal_2 = i1.ɵnov(_v, 13).target; var currVal_3 = i1.ɵnov(_v, 13).href; _ck(_v, 12, 0, currVal_2, currVal_3); var currVal_5 = _v.context.$implicit.title; _ck(_v, 14, 0, currVal_5); var currVal_6 = _v.context.$implicit.short_content; _ck(_v, 15, 0, currVal_6); }); }
function View_BlogsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "blogs-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 3, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_1)), i1.ɵdid(6, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.blogs; _ck(_v, 6, 0, currVal_0); }, null); }
exports.View_BlogsComponent_0 = View_BlogsComponent_0;
function View_BlogsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-blogs", [], null, null, null, View_BlogsComponent_0, RenderType_BlogsComponent)), i1.ɵdid(1, 245760, null, 0, i4.BlogsComponent, [i5.ProductsService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_BlogsComponent_Host_0 = View_BlogsComponent_Host_0;
var BlogsComponentNgFactory = i1.ɵccf("app-blogs", i4.BlogsComponent, View_BlogsComponent_Host_0, {}, {}, []);
exports.BlogsComponentNgFactory = BlogsComponentNgFactory;


/***/ }),

/***/ "./src/app/components/pages/blogs/blogs.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/blogs/blogs.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var BlogsComponent = /** @class */ (function () {
    function BlogsComponent(productService) {
        this.productService = productService;
        this.mobile_view = false;
        this.desktop_view = false;
        this.imageUrl = '';
    }
    BlogsComponent.prototype.ngOnInit = function () {
        this._getBlogs();
        this.imageUrl = IMG_URL;
    };
    BlogsComponent.prototype._getBlogs = function () {
        var _this = this;
        this.loading = true;
        this.blogsSub = this.productService
            .getBlogs$()
            .subscribe(function (res) {
            _this.blogs = res;
            _this.loading = false;
        }, function (err) {
            console.error(err);
            _this.loading = false;
        });
    };
    BlogsComponent.prototype.ngOnDestroy = function () {
        if (this.blogsSub) {
            this.blogsSub.unsubscribe();
        }
    };
    return BlogsComponent;
}());
exports.BlogsComponent = BlogsComponent;


/***/ }),

/***/ "./src/app/components/pages/blogs/blogs.module.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/components/pages/blogs/blogs.module.ngfactory.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./blogs.module */ "./src/app/components/pages/blogs/blogs.module.ts");
var i2 = __webpack_require__(/*! ./blogs.component.ngfactory */ "./src/app/components/pages/blogs/blogs.component.ngfactory.js");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i5 = __webpack_require__(/*! ./blogs.component */ "./src/app/components/pages/blogs/blogs.component.ts");
var BlogsModuleNgFactory = i0.ɵcmf(i1.BlogsModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.BlogsComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(1073742336, i4.RouterModule, i4.RouterModule, [[2, i4.ɵangular_packages_router_router_a], [2, i4.Router]]), i0.ɵmpd(1073742336, i1.BlogsModule, i1.BlogsModule, []), i0.ɵmpd(1024, i4.ROUTES, function () { return [[{ path: "", component: i5.BlogsComponent, pathMatch: "full" }]]; }, [])]); });
exports.BlogsModuleNgFactory = BlogsModuleNgFactory;


/***/ }),

/***/ "./src/app/components/pages/blogs/blogs.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/pages/blogs/blogs.module.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BlogsModule = /** @class */ (function () {
    function BlogsModule() {
    }
    return BlogsModule;
}());
exports.BlogsModule = BlogsModule;


/***/ }),

/***/ "./src/app/components/pages/brand/brand.component.css.shim.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/components/pages/brand/brand.component.css.shim.ngstyle.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".all-category[_ngcontent-%COMP%], .all-products[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]{display:block}.header[_ngcontent-%COMP%]{padding:10px 0}.header[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{float:left;width:10%}.header[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:1px solid #02a09b}.header[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{float:left;width:90%;padding:20px 10px}.all-category[_ngcontent-%COMP%]{border:1px solid #ddd;padding:10px}.all-category[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{float:left;font-size:16px;font-weight:500}.all-category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{float:left;margin-top:5px}.all-category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;float:left;margin:0 10px}.all-category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.all-products[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]{width:20%;flex:0 0 20%;max-width:20%}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/pages/brand/brand.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/brand/brand.component.ngfactory.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./brand.component.css.shim.ngstyle */ "./src/app/components/pages/brand/brand.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./brand.component */ "./src/app/components/pages/brand/brand.component.ts");
var i5 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i6 = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var i7 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var i8 = __webpack_require__(/*! ../../../services/pager/pager.service */ "./src/app/services/pager/pager.service.ts");
var styles_BrandComponent = [i0.styles];
var RenderType_BrandComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_BrandComponent, data: {} });
exports.RenderType_BrandComponent = RenderType_BrandComponent;
function View_BrandComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(3, null, ["", " "])), (_l()(), i1.ɵeld(4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = i1.ɵinlineInterpolate(2, "/products/", _v.parent.parent.context.$implicit.url, "/", _co.brand.url, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.parent.parent.context.$implicit.title; _ck(_v, 3, 0, currVal_3); var currVal_4 = _v.parent.context.$implicit.count; _ck(_v, 5, 0, currVal_4); }); }
function View_BrandComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandComponent_3)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.parent.context.$implicit._id == _v.context.$implicit.category); _ck(_v, 2, 0, currVal_0); }, null); }
function View_BrandComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandComponent_2)), i1.ɵdid(2, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.allCat3; _ck(_v, 2, 0, currVal_0); }, null); }
function View_BrandComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent, 0), _v.parent.context.$implicit.price, 0)); _ck(_v, 1, 0, currVal_0); }); }
function View_BrandComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "discount"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, [" Ksh. ", " "])), i1.ɵppd(5, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent, 0), _v.parent.context.$implicit.special_price, 0)); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 4, 0, _ck(_v, 5, 0, i1.ɵnov(_v.parent.parent.parent.parent, 0), _v.parent.context.$implicit.price, 0)); _ck(_v, 4, 0, currVal_1); }); }
function View_BrandComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "ribbon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Offer"]))], null, null); }
function View_BrandComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 17, "div", [["class", "col-md-3 col-xs-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 16, "div", [["class", "product-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 15, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(4, 0, null, null, 13, "div", [["class", "product-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "product-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 8, "div", [["class", "product-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "div", [["class", "prod-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, [" ", " "])), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandComponent_7)), i1.ɵdid(12, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandComponent_8)), i1.ɵdid(14, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 0, "div", [["class", "prod-rate"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandComponent_9)), i1.ɵdid(17, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/product/", _v.context.$implicit.url, ""); _ck(_v, 3, 0, currVal_2); var currVal_6 = (_v.context.$implicit.special_price == 0); _ck(_v, 12, 0, currVal_6); var currVal_7 = (_v.context.$implicit.special_price != 0); _ck(_v, 14, 0, currVal_7); var currVal_8 = (_v.context.$implicit.special_price != 0); _ck(_v, 17, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit.images[0][0], ""); var currVal_4 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.title, ""); _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_5 = _v.context.$implicit.title; _ck(_v, 9, 0, currVal_5); }); }
function View_BrandComponent_11(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(2, { active: 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(4, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "page-item"; var currVal_1 = _ck(_v, 2, 0, (_co.pager.currentPage === _v.context.$implicit)); _ck(_v, 1, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 4, 0, currVal_2); }); }
function View_BrandComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 22, "ul", [["class", "pagination"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(2, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(3, { disabled: 0 }), (_l()(), i1.ɵeld(4, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["First"])), (_l()(), i1.ɵeld(6, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(7, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(8, { disabled: 0 }), (_l()(), i1.ɵeld(9, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage((_co.pager.currentPage - 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Previous"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandComponent_11)), i1.ɵdid(12, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(13, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(14, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(15, { disabled: 0 }), (_l()(), i1.ɵeld(16, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage((_co.pager.currentPage + 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Next"])), (_l()(), i1.ɵeld(18, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(19, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(20, { disabled: 0 }), (_l()(), i1.ɵeld(21, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(_co.pager.totalPages) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Last"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "page-item"; var currVal_1 = _ck(_v, 3, 0, (_co.pager.currentPage === 1)); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = "page-item"; var currVal_3 = _ck(_v, 8, 0, (_co.pager.currentPage === 1)); _ck(_v, 7, 0, currVal_2, currVal_3); var currVal_4 = _co.pager.pages; _ck(_v, 12, 0, currVal_4); var currVal_5 = "page-item"; var currVal_6 = _ck(_v, 15, 0, (_co.pager.currentPage === _co.pager.totalPages)); _ck(_v, 14, 0, currVal_5, currVal_6); var currVal_7 = "page-item"; var currVal_8 = _ck(_v, 20, 0, (_co.pager.currentPage === _co.pager.totalPages)); _ck(_v, 19, 0, currVal_7, currVal_8); }, null); }
function View_BrandComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandComponent_6)), i1.ɵdid(2, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 3, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 2, "nav", [["aria-label", "Page navigation example"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandComponent_10)), i1.ɵdid(6, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pagedItems; _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.pager.pages && _co.pager.pages.length); _ck(_v, 6, 0, currVal_1); }, null); }
function View_BrandComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandComponent_5)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.products.length; _ck(_v, 1, 0, currVal_0); }, null); }
function View_BrandComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i3.DecimalPipe, [i1.LOCALE_ID]), (_l()(), i1.ɵeld(1, 0, null, null, 16, "div", [["class", "brand-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 15, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 3, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "div", [["class", "desc"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 6, "div", [["class", "all-category"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Categories "])), (_l()(), i1.ɵeld(11, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandComponent_1)), i1.ɵdid(13, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(14, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 2, "div", [["class", "all-products"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandComponent_4)), i1.ɵdid(17, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.mainCat; _ck(_v, 13, 0, currVal_3); var currVal_4 = _co.products; _ck(_v, 17, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/brands-logo/", _co.brand.logo, ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _co.brand.title, ""); _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_2 = _co.brand.description; _ck(_v, 6, 0, currVal_2); }); }
exports.View_BrandComponent_0 = View_BrandComponent_0;
function View_BrandComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-brand", [], null, null, null, View_BrandComponent_0, RenderType_BrandComponent)), i1.ɵdid(1, 245760, null, 0, i4.BrandComponent, [i5.Title, i5.Meta, i2.Router, i2.ActivatedRoute, i6.CategoryService, i7.ProductsService, i8.PagerService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_BrandComponent_Host_0 = View_BrandComponent_Host_0;
var BrandComponentNgFactory = i1.ɵccf("app-brand", i4.BrandComponent, View_BrandComponent_Host_0, {}, {}, []);
exports.BrandComponentNgFactory = BrandComponentNgFactory;


/***/ }),

/***/ "./src/app/components/pages/brand/brand.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/brand/brand.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var platform_browser_2 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var category_service_1 = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var pager_service_1 = __webpack_require__(/*! ../../../services/pager/pager.service */ "./src/app/services/pager/pager.service.ts");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var BrandComponent = /** @class */ (function () {
    function BrandComponent(title, meta, router, route, categoryService, productService, pagerService) {
        var _this = this;
        this.title = title;
        this.meta = meta;
        this.router = router;
        this.route = route;
        this.categoryService = categoryService;
        this.productService = productService;
        this.pagerService = pagerService;
        this.mobile_view = false;
        this.desktop_view = false;
        this.imageUrl = '';
        this.pager = {};
        this.inArray = function (comparer) {
            for (var i = 0; i < this.length; i++) {
                if (comparer(this[i]))
                    return true;
            }
            return false;
        };
        var checkProds;
        var prodArr = [];
        var catArr = [];
        var catArr2 = [];
        var catArr3 = [];
        var arrtest = [];
        this.productService.productsData$
            .subscribe(function (data) {
            checkProds = data;
            if (checkProds === null) {
                _this.products = ['Null Prods'];
            }
            else {
                _this.route.params.subscribe(function (params) {
                    _this.brand = params['brand'],
                        _this._getBrand(_this.brand),
                        // this.products = this.brand
                        checkProds.forEach(function (prod) {
                            if (prod.brand.url == _this.brand) {
                                prodArr.push(prod);
                                catArr.push(prod.category);
                                if (catArr2.indexOf(prod.category) === -1) {
                                    catArr2.push(prod.category);
                                }
                            }
                        });
                    //   if (prodArr.length === 0) {
                    //     let sliced = this.brand.slice(0, 10).replace(/-/g, ' ');
                    //     var withNoDigits = sliced.replace(/[0-9]/g, '');
                    //       this.router.navigate(['/search/'+withNoDigits]);
                    //   }
                    var arrayToCount = [1, 2, 3, 5, 2, 8, 9, 2];
                    var result = arrayToCount.filter(function (i) { return i === 2; }).length;
                    catArr2.forEach(function (cat) {
                        arrtest.push({ "category": cat, "count": catArr.filter(function (i) { return i === cat; }).length });
                    });
                    _this.products = prodArr;
                    _this.allCat3 = arrtest;
                    _this.allCat1 = catArr2;
                    _this.count = prodArr.length;
                    _this.loading = false;
                    _this.setPage(1);
                });
            }
        });
        categoryService.categoryIData$.subscribe(function (data) {
            _this.mainCat = data;
        });
    }
    BrandComponent.prototype.ngOnInit = function () {
        this.imageUrl = IMG_URL;
    };
    BrandComponent.prototype._getBrand = function (brand) {
        var _this = this;
        this.brandSub = this.productService
            .getBrand$(brand)
            .subscribe(function (res) {
            return _this.brand = res;
        });
    };
    BrandComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.products.length, page);
        // get current page of items
        this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    BrandComponent.prototype.ngOnDestroy = function () {
        if (this.brandSub) {
            this.brandSub.unsubscribe();
        }
    };
    return BrandComponent;
}());
exports.BrandComponent = BrandComponent;


/***/ }),

/***/ "./src/app/components/pages/brand/brand.module.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/components/pages/brand/brand.module.ngfactory.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./brand.module */ "./src/app/components/pages/brand/brand.module.ts");
var i2 = __webpack_require__(/*! ./brand.component.ngfactory */ "./src/app/components/pages/brand/brand.component.ngfactory.js");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i5 = __webpack_require__(/*! ./brand.component */ "./src/app/components/pages/brand/brand.component.ts");
var BrandModuleNgFactory = i0.ɵcmf(i1.BrandModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.BrandComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(1073742336, i4.RouterModule, i4.RouterModule, [[2, i4.ɵangular_packages_router_router_a], [2, i4.Router]]), i0.ɵmpd(1073742336, i1.BrandModule, i1.BrandModule, []), i0.ɵmpd(1024, i4.ROUTES, function () { return [[{ path: ":brand", component: i5.BrandComponent, pathMatch: "full" }]]; }, [])]); });
exports.BrandModuleNgFactory = BrandModuleNgFactory;


/***/ }),

/***/ "./src/app/components/pages/brand/brand.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/pages/brand/brand.module.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BrandModule = /** @class */ (function () {
    function BrandModule() {
    }
    return BrandModule;
}());
exports.BrandModule = BrandModule;


/***/ }),

/***/ "./src/app/components/pages/cart/cart.component.css.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/components/pages/cart/cart.component.css.shim.ngstyle.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["#cart-page[_ngcontent-%COMP%]{padding-top: 97px;margin:10px 0}.cart-container[_ngcontent-%COMP%]   .cart-header[_ngcontent-%COMP%]{background-color:#706e6f;color:#FFF;padding:10px;text-transform:capitalize;font-weight:700;margin:0 0 20px}.cart-container[_ngcontent-%COMP%]   .cart-cont[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;margin-bottom:5px;padding-bottom:5px}.prod-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.prod-qty[_ngcontent-%COMP%]{border-top:1px solid #ddd}.prod-qty[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]{border:1px solid #ddd;float:right;width:50px;margin-top:5px}.prod-qty[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%;float:left;text-align:center;cursor:pointer;color:#FFF;background-color:#706e6f;border:none}.checkout-btn[_ngcontent-%COMP%], .continue-btn[_ngcontent-%COMP%], .empty-btn[_ngcontent-%COMP%]{border-radius:0}.prod-qty[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#4aadaa}.prod-qty[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%]{border-right:1px solid}.prod-price[_ngcontent-%COMP%]{border-top:1px solid #ddd;border-bottom:1px solid #ddd;margin-top:10px;font-size:16px;color:#009d8f;font-weight:700}.cart-totals[_ngcontent-%COMP%]{background-color:#706e6f;color:#FFF;padding:10px}.cart-totals[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-transform:capitalize;border-bottom:1px solid #FFF}.cart-totals[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{float:left;width:35%;font-weight:700;text-align:left}.cart-totals[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{float:left;width:65%;text-align:right;text-decoration:underline}.continue-cont[_ngcontent-%COMP%]{text-align:left}.continue-btn[_ngcontent-%COMP%]{background-color:#4aadaa;border-color:#4aadaa}.empty-cont[_ngcontent-%COMP%]{text-align:right}.checkout-btn[_ngcontent-%COMP%]{background-color:#f0a933;border-color:#f0a933;width:80%;margin:20px 10% auto;font-weight:700}.delete-cart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid #dc3545;background-color:#dc3545;color:#FFF}@media (min-width:320px) and (max-width:480px){.continue-cont[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .empty-cont[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:12px}#cart-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:0!important}#cart-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:0!important}#cart-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%], #cart-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%]{width:100%;padding:0}.continue-cont[_ngcontent-%COMP%], .empty-cont[_ngcontent-%COMP%]{width:50%;padding:0;float:left}.cart-container[_ngcontent-%COMP%]   .cart-cont[_ngcontent-%COMP%]{margin-bottom:10px}.prod-subtotal[_ngcontent-%COMP%]{float:left}.delete-cart[_ngcontent-%COMP%]{float:right}}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/pages/cart/cart.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/cart/cart.component.ngfactory.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./cart.component.css.shim.ngstyle */ "./src/app/components/pages/cart/cart.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! ./cart.component */ "./src/app/components/pages/cart/cart.component.ts");
var i5 = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var i6 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var i7 = __webpack_require__(/*! ../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
var i8 = __webpack_require__(/*! ../../../services/checkout/checkout.service */ "./src/app/services/checkout/checkout.service.ts");
var styles_CartComponent = [i0.styles];
var RenderType_CartComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_CartComponent, data: {} });
exports.RenderType_CartComponent = RenderType_CartComponent;
function View_CartComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.parent.context.$implicit.images[0][0], ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CartComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_CartComponent_3)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit._id == _v.parent.context.$implicit.productId); _ck(_v, 2, 0, currVal_0); }, null); }
function View_CartComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.title; _ck(_v, 1, 0, currVal_0); }); }
function View_CartComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_CartComponent_5)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit._id == _v.parent.context.$implicit.productId); _ck(_v, 2, 0, currVal_0); }, null); }
function View_CartComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 27, "div", [["class", "row cart-cont"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "div", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "prod-image"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_CartComponent_2)), i1.ɵdid(4, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(5, 0, null, null, 15, "div", [["class", "col-md-8"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 2, "div", [["class", "prod-title"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_CartComponent_4)), i1.ɵdid(8, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(9, 0, null, null, 8, "div", [["class", "prod-qty"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Qty: "])), (_l()(), i1.ɵted(12, null, ["", " "])), (_l()(), i1.ɵeld(13, 0, null, null, 4, "div", [["class", "qty"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 1, "button", [["class", "down"]], [[1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.qtyDown(_v.context.$implicit.productId) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 0, "i", [["class", "fa fa-caret-down"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, "button", [["class", "up"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.qtyUp(_v.context.$implicit.productId) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 0, "i", [["class", "fa fa-caret-up"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 2, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵted(19, null, [" Ksh.", " "])), i1.ɵppd(20, 2), (_l()(), i1.ɵeld(21, 0, null, null, 6, "div", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 2, "div", [["class", "prod-subtotal"]], null, null, null, null, null)), (_l()(), i1.ɵted(23, null, [" Ksh. ", " "])), i1.ɵppd(24, 2), (_l()(), i1.ɵeld(25, 0, null, null, 2, "div", [["class", "delete-cart"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 1, "button", [["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.remove(_v.context.$implicit.productId) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["delete"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.products; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.products; _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.quantity; _ck(_v, 12, 0, currVal_2); var currVal_3 = ((_v.context.$implicit.quantity === 1) ? true : null); _ck(_v, 14, 0, currVal_3); var currVal_4 = i1.ɵunv(_v, 19, 0, _ck(_v, 20, 0, i1.ɵnov(_v.parent, 0), _v.context.$implicit.price, 0)); _ck(_v, 19, 0, currVal_4); var currVal_5 = i1.ɵunv(_v, 23, 0, _ck(_v, 24, 0, i1.ɵnov(_v.parent, 0), (_v.context.$implicit.price * _v.context.$implicit.quantity), 0)); _ck(_v, 23, 0, currVal_5); }); }
function View_CartComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "button", [["class", "btn btn-danger empty-btn"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.emptyCart() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, [" Empty shopping basket "]))], null, null); }
function View_CartComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "a", [["class", "btn btn-primary checkout-btn"], ["routerLink", "/checkout"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Checkout"]))], function (_ck, _v) { var currVal_2 = "/checkout"; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CartComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "button", [["class", "btn btn-primary checkout-btn"], ["disabled", "true"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Checkout"]))], null, null); }
function View_CartComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i2.DecimalPipe, [i1.LOCALE_ID]), (_l()(), i1.ɵeld(1, 0, null, null, 30, "div", [["class", ""], ["id", "cart-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 29, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 28, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 14, "div", [["class", "col-md-8"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 13, "div", [["class", "cart-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "div", [["class", "cart-header"]], null, null, null, null, null)), (_l()(), i1.ɵted(7, null, [" ", " Products In Your Cart "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_CartComponent_1)), i1.ɵdid(9, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(10, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 4, "div", [["class", "col-md-6 continue-cont"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 3, "a", [["class", "btn btn-primary continue-btn"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(13, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(14, 0, null, null, 0, "i", [["class", "fa fa-long-arrow-alt-left"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Continue Shopping "])), (_l()(), i1.ɵeld(16, 0, null, null, 2, "div", [["class", "col-md-6 empty-cont"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_CartComponent_6)), i1.ɵdid(18, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(19, 0, null, null, 12, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 11, "div", [["class", "cart-totals"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["summary"])), (_l()(), i1.ɵeld(23, 0, null, null, 4, "div", [["class", "total"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Total "])), (_l()(), i1.ɵeld(26, 0, null, null, 1, "div", [["class", "amount"]], null, null, null, null, null)), (_l()(), i1.ɵted(27, null, [" Ksh. ", " "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_CartComponent_7)), i1.ɵdid(29, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_CartComponent_8)), i1.ɵdid(31, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.cartV; _ck(_v, 9, 0, currVal_1); var currVal_4 = "/"; _ck(_v, 13, 0, currVal_4); var currVal_5 = (_co.itemCount != 0); _ck(_v, 18, 0, currVal_5); var currVal_7 = (_co.itemCount != 0); _ck(_v, 29, 0, currVal_7); var currVal_8 = (_co.itemCount === 0); _ck(_v, 31, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.itemCount; _ck(_v, 7, 0, currVal_0); var currVal_2 = i1.ɵnov(_v, 13).target; var currVal_3 = i1.ɵnov(_v, 13).href; _ck(_v, 12, 0, currVal_2, currVal_3); var currVal_6 = _co.itemTotal; _ck(_v, 27, 0, currVal_6); }); }
exports.View_CartComponent_0 = View_CartComponent_0;
function View_CartComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-cart", [], null, null, null, View_CartComponent_0, RenderType_CartComponent)), i1.ɵdid(1, 245760, null, 0, i4.CartComponent, [i5.StorageService, i6.ProductsService, i7.CartService, i8.CheckoutService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_CartComponent_Host_0 = View_CartComponent_Host_0;
var CartComponentNgFactory = i1.ɵccf("app-cart", i4.CartComponent, View_CartComponent_Host_0, {}, {}, []);
exports.CartComponentNgFactory = CartComponentNgFactory;


/***/ }),

/***/ "./src/app/components/pages/cart/cart.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/cart/cart.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var cart_service_1 = __webpack_require__(/*! ../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
var storage_service_1 = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var checkout_service_1 = __webpack_require__(/*! ../../../services/checkout/checkout.service */ "./src/app/services/checkout/checkout.service.ts");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var CART_KEY = env_config_1.ENV.BASE_TOKEN;
var CartComponent = /** @class */ (function () {
    function CartComponent(storageService, productsService, shoppingCartService, checkoutService) {
        this.storageService = storageService;
        this.productsService = productsService;
        this.shoppingCartService = shoppingCartService;
        this.checkoutService = checkoutService;
        this.cookieValue = "Value";
        this.imageUrl = '';
        this.storage = this.storageService.get();
    }
    CartComponent.prototype.ngOnInit = function () {
        this.Cart();
        this._getShipping();
        this.imageUrl = IMG_URL;
    };
    CartComponent.prototype.Cart = function () {
        var _this = this;
        this.cart = this.shoppingCartService.get();
        this.cartSubscription = this.cart.subscribe(function (cart) {
            //this.cartV = cart;
            _this.itemCount = cart.items.length;
            _this.cartV = cart.items;
            _this.itemTotal = cart.itemsTotal;
            var prodArr = [];
            _this.productsService.productsData$
                .subscribe(function (data) {
                _this.products1 = data;
                _this.cartV.forEach(function (cart) {
                    _this.products1.forEach(function (prod) {
                        if (cart.productId == prod._id) {
                            prodArr.push(prod);
                        }
                    });
                });
                _this.products = prodArr;
            });
        });
    };
    CartComponent.prototype.emptyCart = function () {
        this.shoppingCartService.empty();
        this.Cart();
    };
    CartComponent.prototype.qtyUp = function (id) {
        this.qtyTest = this.shoppingCartService.updateQty(id, 1);
        this.Cart();
    };
    CartComponent.prototype.qtyDown = function (id) {
        this.shoppingCartService.updateQty(id, -1);
        this.Cart();
    };
    CartComponent.prototype.remove = function (id) {
        this.qtyTest = this.shoppingCartService.removeCart(id);
        this.Cart();
    };
    CartComponent.prototype._getShipping = function () {
        var _this = this;
        this.shippingSub = this.checkoutService
            .getShipping$()
            .subscribe(function (res) {
            _this.checkoutService.setShippingData(res);
        }, function (err) {
            console.error(err);
        });
    };
    CartComponent.prototype.ngOnDestroy = function () {
        if (this.cartSubscription) {
            this.cartSubscription.unsubscribe();
        }
        if (this.shippingSub) {
            this.shippingSub.unsubscribe();
        }
    };
    return CartComponent;
}());
exports.CartComponent = CartComponent;


/***/ }),

/***/ "./src/app/components/pages/cart/cart.module.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/components/pages/cart/cart.module.ngfactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./cart.module */ "./src/app/components/pages/cart/cart.module.ts");
var i2 = __webpack_require__(/*! ./cart.component.ngfactory */ "./src/app/components/pages/cart/cart.component.ngfactory.js");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i5 = __webpack_require__(/*! ./cart.component */ "./src/app/components/pages/cart/cart.component.ts");
var CartModuleNgFactory = i0.ɵcmf(i1.CartModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.CartComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(1073742336, i4.RouterModule, i4.RouterModule, [[2, i4.ɵangular_packages_router_router_a], [2, i4.Router]]), i0.ɵmpd(1073742336, i1.CartModule, i1.CartModule, []), i0.ɵmpd(1024, i4.ROUTES, function () { return [[{ path: "", component: i5.CartComponent, pathMatch: "full" }]]; }, [])]); });
exports.CartModuleNgFactory = CartModuleNgFactory;


/***/ }),

/***/ "./src/app/components/pages/cart/cart.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/pages/cart/cart.module.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    return CartModule;
}());
exports.CartModule = CartModule;


/***/ }),

/***/ "./src/app/components/pages/checkout/checkout.component.css.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/components/pages/checkout/checkout.component.css.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["#checkout-page[_ngcontent-%COMP%]{margin:30px 0}.checkout-header[_ngcontent-%COMP%]{border-top:1px solid #ddd;border-bottom:1px solid #DDD;padding:10px 5px;margin-bottom:20px}.checkout-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0}.order-summary[_ngcontent-%COMP%]{background-color:#4AADAA;padding:10px;font-size:15px;font-weight:700}.order-summary[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]{text-align:right}.order-summary[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:underline;color:#FFF;font-size:13px;text-transform:capitalize}.check-amount[_ngcontent-%COMP%]{background-color:#706e6f;color:#FFF;padding:0}.checkout-btn[_ngcontent-%COMP%]{border-radius:0;color:#706e6f;background-color:#FFF;border-color:#706e6f;width:80%;margin:auto 10%;position:absolute;bottom:10px}.amount[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{float:left;width:50%}.gross-total[_ngcontent-%COMP%]{border-top:1px solid #ddd;border-bottom:1px solid #ddd;margin:5px 0;font-size:16px;font-weight:700;background-color:#4aadaa}.gross-total[_ngcontent-%COMP%], .shipping-total[_ngcontent-%COMP%], .sub-total[_ngcontent-%COMP%]{padding:10px}.title[_ngcontent-%COMP%]{text-align:left}.amount[_ngcontent-%COMP%]{text-align:right;font-weight:600}.form-control[_ngcontent-%COMP%]{border-radius:0;border-color:#4aadaa;color:#706e6fe6}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/pages/checkout/checkout.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/checkout/checkout.component.ngfactory.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./checkout.component.css.shim.ngstyle */ "./src/app/components/pages/checkout/checkout.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ./checkout.component */ "./src/app/components/pages/checkout/checkout.component.ts");
var i6 = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var i7 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i8 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var i9 = __webpack_require__(/*! ../../../services/checkout/checkout.service */ "./src/app/services/checkout/checkout.service.ts");
var i10 = __webpack_require__(/*! ../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
var styles_CheckoutComponent = [i0.styles];
var RenderType_CheckoutComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_CheckoutComponent, data: {} });
exports.RenderType_CheckoutComponent = RenderType_CheckoutComponent;
function View_CheckoutComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 86, "div", [["class", ""], ["id", "checkout-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 85, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "checkout-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Checkout"])), (_l()(), i1.ɵeld(5, 0, null, null, 81, "form", [["autocomplete", "off"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 7).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 7).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.addPost() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(6, 16384, null, 0, i2.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(7, 540672, [["myForm", 4]], 0, i2.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.FormGroupDirective]), i1.ɵdid(9, 16384, null, 0, i2.NgControlStatusGroup, [[4, i2.ControlContainer]], null, null), (_l()(), i1.ɵeld(10, 0, null, null, 76, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 39, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 1, "label", [["for", "first_name"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["First Name"])), (_l()(), i1.ɵeld(15, 0, null, null, 5, "input", [["aria-describedby", "first_name_Help"], ["class", "form-control"], ["formControlName", "first_name"], ["id", "first_name"], ["ngModel", ""], ["placeholder", "First Name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 16)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 16).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 16)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 16)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(16, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(18, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(20, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(21, 0, null, null, 9, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 1, "label", [["for", "last_name"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Last Name"])), (_l()(), i1.ɵeld(24, 0, null, null, 5, "input", [["aria-describedby", "last_name_Help"], ["class", "form-control"], ["formControlName", "last_name"], ["id", "last_name"], ["ngModel", ""], ["placeholder", "Last Name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 25)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 25).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 25)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 25)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(25, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(27, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(29, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(30, 0, null, null, 0, "small", [["class", "form-text text-muted"], ["id", "last_name_Help"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 9, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 1, "label", [["for", "phone"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Phone Number"])), (_l()(), i1.ɵeld(34, 0, null, null, 5, "input", [["aria-describedby", "phone_Help"], ["class", "form-control"], ["formControlName", "phone"], ["id", "phone"], ["ngModel", ""], ["placeholder", "Phone Number"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 35)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 35).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 35)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 35)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(35, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(37, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(39, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(40, 0, null, null, 0, "small", [["class", "form-text text-muted"], ["id", "phone_Help"]], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 9, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 1, "label", [["for", "email"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Email address"])), (_l()(), i1.ɵeld(44, 0, null, null, 5, "input", [["aria-describedby", "email_Help"], ["class", "form-control"], ["formControlName", "email"], ["id", "email"], ["ngModel", ""], ["placeholder", "Enter email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 45)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 45).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 45)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 45)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(45, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(47, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(49, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(50, 0, null, null, 0, "small", [["class", "form-text text-muted"], ["id", "email_Help"]], null, null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 10, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(52, 0, null, null, 9, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(53, 0, null, null, 1, "label", [["for", "delivery_location"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Delivery Address"])), (_l()(), i1.ɵeld(55, 0, null, null, 5, "textarea", [["aria-describedby", "shipping_Help"], ["class", "form-control"], ["formControlName", "delivery_location"], ["id", "delivery_location"], ["ngModel", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 56)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 56).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 56)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 56)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_co._getShippingCost($event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(56, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(58, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(60, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(61, 0, null, null, 0, "small", [["class", "form-text text-muted"], ["id", "shipping_Help"]], null, null, null, null, null)), (_l()(), i1.ɵeld(62, 0, null, null, 24, "div", [["class", "col-md-4 check-amount"]], null, null, null, null, null)), (_l()(), i1.ɵeld(63, 0, null, null, 7, "div", [["class", "order-summary"]], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(65, 0, null, null, 1, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Order Summary "])), (_l()(), i1.ɵeld(67, 0, null, null, 3, "div", [["class", "col-md-6 cart"]], null, null, null, null, null)), (_l()(), i1.ɵeld(68, 0, null, null, 2, "a", [["routerLink", "/cart"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 69).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(69, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, [" edit Cart "])), (_l()(), i1.ɵeld(71, 0, null, null, 5, "div", [["class", "sub-total"]], null, null, null, null, null)), (_l()(), i1.ɵeld(72, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" SubTotal: "])), (_l()(), i1.ɵeld(74, 0, null, null, 1, "div", [["class", "amount"]], null, null, null, null, null)), (_l()(), i1.ɵted(75, null, [" Ksh. ", " "])), (_l()(), i1.ɵeld(76, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(77, 0, null, null, 7, "div", [["class", "gross-total"]], null, null, null, null, null)), (_l()(), i1.ɵeld(78, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Total: "])), (_l()(), i1.ɵeld(80, 0, null, null, 3, "div", [["class", "amount"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Ksh. "])), (_l()(), i1.ɵeld(82, 0, null, null, 1, "span", [["id", "gross-amount"]], null, null, null, null, null)), (_l()(), i1.ɵted(83, null, ["", ""])), (_l()(), i1.ɵeld(84, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(85, 0, null, null, 1, "button", [["class", "btn btn-primary checkout-btn"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Submit Order"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.rForm; _ck(_v, 7, 0, currVal_7); var currVal_15 = "first_name"; var currVal_16 = ""; _ck(_v, 18, 0, currVal_15, currVal_16); var currVal_24 = "last_name"; var currVal_25 = ""; _ck(_v, 27, 0, currVal_24, currVal_25); var currVal_33 = "phone"; var currVal_34 = ""; _ck(_v, 37, 0, currVal_33, currVal_34); var currVal_42 = "email"; var currVal_43 = ""; _ck(_v, 47, 0, currVal_42, currVal_43); var currVal_51 = "delivery_location"; var currVal_52 = ""; _ck(_v, 58, 0, currVal_51, currVal_52); var currVal_55 = "/cart"; _ck(_v, 69, 0, currVal_55); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 9).ngClassUntouched; var currVal_1 = i1.ɵnov(_v, 9).ngClassTouched; var currVal_2 = i1.ɵnov(_v, 9).ngClassPristine; var currVal_3 = i1.ɵnov(_v, 9).ngClassDirty; var currVal_4 = i1.ɵnov(_v, 9).ngClassValid; var currVal_5 = i1.ɵnov(_v, 9).ngClassInvalid; var currVal_6 = i1.ɵnov(_v, 9).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = i1.ɵnov(_v, 20).ngClassUntouched; var currVal_9 = i1.ɵnov(_v, 20).ngClassTouched; var currVal_10 = i1.ɵnov(_v, 20).ngClassPristine; var currVal_11 = i1.ɵnov(_v, 20).ngClassDirty; var currVal_12 = i1.ɵnov(_v, 20).ngClassValid; var currVal_13 = i1.ɵnov(_v, 20).ngClassInvalid; var currVal_14 = i1.ɵnov(_v, 20).ngClassPending; _ck(_v, 15, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_17 = i1.ɵnov(_v, 29).ngClassUntouched; var currVal_18 = i1.ɵnov(_v, 29).ngClassTouched; var currVal_19 = i1.ɵnov(_v, 29).ngClassPristine; var currVal_20 = i1.ɵnov(_v, 29).ngClassDirty; var currVal_21 = i1.ɵnov(_v, 29).ngClassValid; var currVal_22 = i1.ɵnov(_v, 29).ngClassInvalid; var currVal_23 = i1.ɵnov(_v, 29).ngClassPending; _ck(_v, 24, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_26 = i1.ɵnov(_v, 39).ngClassUntouched; var currVal_27 = i1.ɵnov(_v, 39).ngClassTouched; var currVal_28 = i1.ɵnov(_v, 39).ngClassPristine; var currVal_29 = i1.ɵnov(_v, 39).ngClassDirty; var currVal_30 = i1.ɵnov(_v, 39).ngClassValid; var currVal_31 = i1.ɵnov(_v, 39).ngClassInvalid; var currVal_32 = i1.ɵnov(_v, 39).ngClassPending; _ck(_v, 34, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_35 = i1.ɵnov(_v, 49).ngClassUntouched; var currVal_36 = i1.ɵnov(_v, 49).ngClassTouched; var currVal_37 = i1.ɵnov(_v, 49).ngClassPristine; var currVal_38 = i1.ɵnov(_v, 49).ngClassDirty; var currVal_39 = i1.ɵnov(_v, 49).ngClassValid; var currVal_40 = i1.ɵnov(_v, 49).ngClassInvalid; var currVal_41 = i1.ɵnov(_v, 49).ngClassPending; _ck(_v, 44, 0, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41); var currVal_44 = i1.ɵnov(_v, 60).ngClassUntouched; var currVal_45 = i1.ɵnov(_v, 60).ngClassTouched; var currVal_46 = i1.ɵnov(_v, 60).ngClassPristine; var currVal_47 = i1.ɵnov(_v, 60).ngClassDirty; var currVal_48 = i1.ɵnov(_v, 60).ngClassValid; var currVal_49 = i1.ɵnov(_v, 60).ngClassInvalid; var currVal_50 = i1.ɵnov(_v, 60).ngClassPending; _ck(_v, 55, 0, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50); var currVal_53 = i1.ɵnov(_v, 69).target; var currVal_54 = i1.ɵnov(_v, 69).href; _ck(_v, 68, 0, currVal_53, currVal_54); var currVal_56 = _co.itemTotal; _ck(_v, 75, 0, currVal_56); var currVal_57 = _co.itemTotal; _ck(_v, 83, 0, currVal_57); var currVal_58 = !_co.rForm.valid; _ck(_v, 85, 0, currVal_58); }); }
exports.View_CheckoutComponent_0 = View_CheckoutComponent_0;
function View_CheckoutComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-checkout", [], null, null, null, View_CheckoutComponent_0, RenderType_CheckoutComponent)), i1.ɵdid(1, 245760, null, 0, i5.CheckoutComponent, [i3.Router, i6.StorageService, i7.HttpClient, i8.ProductsService, i9.CheckoutService, i10.CartService, i2.FormBuilder], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_CheckoutComponent_Host_0 = View_CheckoutComponent_Host_0;
var CheckoutComponentNgFactory = i1.ɵccf("app-checkout", i5.CheckoutComponent, View_CheckoutComponent_Host_0, {}, {}, []);
exports.CheckoutComponentNgFactory = CheckoutComponentNgFactory;


/***/ }),

/***/ "./src/app/components/pages/checkout/checkout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/checkout/checkout.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var storage_service_1 = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var cart_service_1 = __webpack_require__(/*! ../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
var checkout_service_1 = __webpack_require__(/*! ../../../services/checkout/checkout.service */ "./src/app/services/checkout/checkout.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var Order_Message = env_config_1.ENV.BASE_SUCCESS;
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(router, storageService, http, productsService, checkoutService, shoppingCartService, fb) {
        var _this = this;
        this.router = router;
        this.storageService = storageService;
        this.http = http;
        this.productsService = productsService;
        this.checkoutService = checkoutService;
        this.shoppingCartService = shoppingCartService;
        this.fb = fb;
        this.selectedDel = '';
        this.rForm = new forms_1.FormGroup({
            first_name: new forms_1.FormControl('', forms_1.Validators.required),
            last_name: new forms_1.FormControl('', forms_1.Validators.required),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            delivery_location: new forms_1.FormControl('', forms_1.Validators.required),
            phone: new forms_1.FormControl('', forms_1.Validators.required),
        });
        this.storage = this.storageService.get();
        this.cart = this.shoppingCartService.get();
        this.cartSubscription = this.cart.subscribe(function (cart) {
            _this.cartV = cart;
            _this.itemCount = cart.items.length;
            _this.cartV = cart.items;
            _this.itemTotal = cart.itemsTotal;
        });
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent.prototype._getShipping = function () {
        var _this = this;
        this.shippingSub = this.checkoutService
            .getShipping$()
            .subscribe(function (res) {
            _this.shipping = res;
            _this.Mainshipping = res;
        }, function (err) {
            console.error(err);
        });
    };
    CheckoutComponent.prototype._getShippingCost = function (event) {
        var _this = this;
        this.selectedDel = event.target.value;
        var shipArr = [];
        var ship = this.Mainshipping;
        ship.forEach(function (prod) {
            shipArr.push(prod.id);
        });
        this.checkoutService
            .getShippingAmount$(this.selectedDel)
            .subscribe(function (res) {
            var fee = res;
            _this.courierFee = fee;
        }, function (err) {
            console.error(err);
        });
    };
    CheckoutComponent.prototype.addPost = function () {
        var _this = this;
        console.log(this.cartV);
        var first_name = this.rForm.value.first_name;
        var last_name = this.rForm.value.last_name;
        var phone = this.rForm.value.phone;
        var email = this.rForm.value.email;
        var delivery_location = this.rForm.value.delivery_location;
        var shipping = '5ab8a2795ac33b4bd89b19f9';
        var cart = this.cartV;
        this.http.post(env_config_1.ENV.BASE_API + "order", { first_name: first_name,
            last_name: last_name,
            phone: phone,
            email: email,
            cart: cart,
            shipping: shipping,
            delivery_location: delivery_location })
            .subscribe(function (data) {
            if (data.message == 'Success') {
                _this.storage.setItem(Order_Message, 'True');
                _this.emptyCart();
                _this.router.navigate(['/']);
            }
            else {
            }
        });
    };
    CheckoutComponent.prototype.Cart = function () {
        var _this = this;
        this.cart = this.shoppingCartService.get();
        this.cartSubscription = this.cart.subscribe(function (cart) {
            _this.itemCount = cart.items.length;
            _this.cartV = cart.items;
            _this.itemTotal = cart.itemsTotal;
        });
    };
    CheckoutComponent.prototype.emptyCart = function () {
        this.shoppingCartService.empty();
        this.Cart();
    };
    CheckoutComponent.prototype.ngOnDestroy = function () {
        if (this.shippingSub) {
            this.shippingSub.unsubscribe();
        }
    };
    return CheckoutComponent;
}());
exports.CheckoutComponent = CheckoutComponent;


/***/ }),

/***/ "./src/app/components/pages/checkout/checkout.module.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/components/pages/checkout/checkout.module.ngfactory.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./checkout.module */ "./src/app/components/pages/checkout/checkout.module.ts");
var i2 = __webpack_require__(/*! ./checkout.component.ngfactory */ "./src/app/components/pages/checkout/checkout.component.ngfactory.js");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ./checkout.component */ "./src/app/components/pages/checkout/checkout.component.ts");
var CheckoutModuleNgFactory = i0.ɵcmf(i1.CheckoutModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.CheckoutComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i4.ɵangular_packages_forms_forms_i, i4.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(4608, i4.FormBuilder, i4.FormBuilder, []), i0.ɵmpd(1073742336, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(1073742336, i5.RouterModule, i5.RouterModule, [[2, i5.ɵangular_packages_router_router_a], [2, i5.Router]]), i0.ɵmpd(1073742336, i4.ɵangular_packages_forms_forms_bb, i4.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i4.FormsModule, i4.FormsModule, []), i0.ɵmpd(1073742336, i4.ReactiveFormsModule, i4.ReactiveFormsModule, []), i0.ɵmpd(1073742336, i1.CheckoutModule, i1.CheckoutModule, []), i0.ɵmpd(1024, i5.ROUTES, function () { return [[{ path: "", component: i6.CheckoutComponent, pathMatch: "full" }]]; }, [])]); });
exports.CheckoutModuleNgFactory = CheckoutModuleNgFactory;


/***/ }),

/***/ "./src/app/components/pages/checkout/checkout.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/pages/checkout/checkout.module.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    return CheckoutModule;
}());
exports.CheckoutModule = CheckoutModule;


/***/ }),

/***/ "./src/app/components/pages/faq/faq.component.css.shim.ngstyle.js":
/*!************************************************************************!*\
  !*** ./src/app/components/pages/faq/faq.component.css.shim.ngstyle.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["#faqTab[_ngcontent-%COMP%], #faqTabContent[_ngcontent-%COMP%]{float:left;border:1px solid #ddd}.body[_ngcontent-%COMP%]{clear:both}#faqTab[_ngcontent-%COMP%]{width:28%;margin:45px 1% 0}#faqTabContent[_ngcontent-%COMP%]{width:70%;margin-top:40px;padding:25px}.nav-item[_ngcontent-%COMP%]{display:block;width:100%;margin:auto}.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{text-decoration:none}.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:#02a09b;background-color:#fff;border:none}.nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{background-color:#02a09b;color:#fff;border:none;border-radius:0}.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:0}.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{border-radius:0;padding:0}.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{background-color:#FFF}.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:.9rem;color:#02a09b}.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:1rem;background-color:#02a09b;color:#FFF}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/pages/faq/faq.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/faq/faq.component.ngfactory.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./faq.component.css.shim.ngstyle */ "./src/app/components/pages/faq/faq.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./faq.component */ "./src/app/components/pages/faq/faq.component.ts");
var i5 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_FaqComponent = [i0.styles];
var RenderType_FaqComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_FaqComponent, data: {} });
exports.RenderType_FaqComponent = RenderType_FaqComponent;
function View_FaqComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 86, "div", [["class", "faq-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 85, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 8, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 7, "nav", [["aria-label", "breadcrumb"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 6, "ol", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 3, "li", [["class", "breadcrumb-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 2, "a", [["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(7, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Home"])), (_l()(), i1.ɵeld(9, 0, null, null, 1, "li", [["aria-current", "page"], ["class", "breadcrumb-item active"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Faq"])), (_l()(), i1.ɵeld(11, 0, null, null, 75, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 6, "ul", [["class", "nav nav-tabs"], ["id", "faqTab"], ["role", "tablist"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 1, "a", [["aria-controls", "orders"], ["aria-selected", "true"], ["class", "nav-link active"], ["data-toggle", "tab"], ["href", "#orders"], ["id", "orders-tab"], ["ng-click", "tabZ = 2"], ["role", "tab"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Orders"])), (_l()(), i1.ɵeld(16, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 1, "a", [["aria-controls", "products"], ["aria-selected", "false"], ["class", "nav-link"], ["data-toggle", "tab"], ["href", "#products"], ["id", "products-tab"], ["ng-click", "tabZ = 1"], ["role", "tab"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Products"])), (_l()(), i1.ɵeld(19, 0, null, null, 66, "div", [["class", "tab-content"], ["id", "faqTabContent"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 12, "div", [["aria-labelledby", "products-tab"], ["class", "tab-pane fade"], ["id", "products"], ["ng-show", "tabZ === 1"], ["role", "tabpanel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Products"])), (_l()(), i1.ɵeld(23, 0, null, null, 9, "div", [["class", "tabBody"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 8, "div", [["class", "accordion"], ["id", "accordionProducts"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 3, "div", [["class", "card-header"], ["id", "headingSevenProd"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 2, "h5", [["class", "mb-0"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 1, "button", [["aria-controls", "collapseSevenProd"], ["aria-expanded", "false"], ["class", "btn btn-link collapsed"], ["data-target", "#collapseSevenProd"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Are your products under warranty? "])), (_l()(), i1.ɵeld(30, 0, null, null, 2, "div", [["aria-labelledby", "headingSevenProd"], ["class", "collapse"], ["data-parent", "#accordionProducts"], ["id", "collapseSevenProd"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Our products brag warranty ranging from 1 year to 2 years. The warranty may either be shop provided or provided by the manufacturer which covers you within the East African region. "])), (_l()(), i1.ɵeld(33, 0, null, null, 52, "div", [["aria-labelledby", "orders-tab"], ["class", "tab-pane fade show active"], ["id", "orders"], ["ng-show", "tabZ === 2"], ["role", "tabpanel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Orders"])), (_l()(), i1.ɵeld(36, 0, null, null, 49, "div", [["class", "tabBody"]], null, null, null, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 48, "div", [["class", "accordion"], ["id", "accordionOrder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 3, "div", [["class", "card-header"], ["id", "headingTwoOrder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 2, "h5", [["class", "mb-0"]], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 1, "button", [["aria-controls", "collapseTwoOrder"], ["aria-expanded", "false"], ["class", "btn btn-link collapsed"], ["data-target", "#collapseTwoOrder"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" How can I check the status of my order? "])), (_l()(), i1.ɵeld(43, 0, null, null, 2, "div", [["aria-labelledby", "headingTwoOrder"], ["class", "collapse"], ["data-parent", "#accordionOrder"], ["id", "collapseTwoOrder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(44, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" To inquire about the current status of your order, simply log in to your account on phonestablets.co.ke for complete details of the purchase made or call us on 0716690990 to check. "])), (_l()(), i1.ɵeld(46, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 3, "div", [["class", "card-header"], ["id", "headingThreeOrder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 2, "h5", [["class", "mb-0"]], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 1, "button", [["aria-controls", "collapseThreeOrder"], ["aria-expanded", "false"], ["class", "btn btn-link collapsed"], ["data-target", "#collapseThreeOrder"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" What if I want to cancel my order? "])), (_l()(), i1.ɵeld(51, 0, null, null, 2, "div", [["aria-labelledby", "headingThreeOrder"], ["class", "collapse"], ["data-parent", "#accordionOrder"], ["id", "collapseThreeOrder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(52, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" You can cancel your order by logging into your account or by intimating us over mail or call with your order number. "])), (_l()(), i1.ɵeld(54, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(55, 0, null, null, 3, "div", [["class", "card-header"], ["id", "headingFourOrder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(56, 0, null, null, 2, "h5", [["class", "mb-0"]], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 1, "button", [["aria-controls", "collapseFourOrder"], ["aria-expanded", "false"], ["class", "btn btn-link collapsed"], ["data-target", "#collapseFourOrder"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" How reliable is your shipping method? "])), (_l()(), i1.ɵeld(59, 0, null, null, 2, "div", [["aria-labelledby", "headingFourOrder"], ["class", "collapse"], ["data-parent", "#accordionOrder"], ["id", "collapseFourOrder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(60, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We rely on trusted logistic partners to deliver your orders at your doorstep. Rare events when your orders are lost or damaged in transit, you are entitled to receive a full refund. "])), (_l()(), i1.ɵeld(62, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(63, 0, null, null, 3, "div", [["class", "card-header"], ["id", "headingFiveOrder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 2, "h5", [["class", "mb-0"]], null, null, null, null, null)), (_l()(), i1.ɵeld(65, 0, null, null, 1, "button", [["aria-controls", "collapseFiveOrder"], ["aria-expanded", "false"], ["class", "btn btn-link collapsed"], ["data-target", "#collapseFiveOrder"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" What are the payment methods? "])), (_l()(), i1.ɵeld(67, 0, null, null, 2, "div", [["aria-labelledby", "headingFiveOrder"], ["class", "collapse"], ["data-parent", "#accordionOrder"], ["id", "collapseFiveOrder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(68, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We accept both before delivery and on delivery payment methods. Our means of payment include: M-PESA methods, Cash or Bank to Bank transfer methods. "])), (_l()(), i1.ɵeld(70, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(71, 0, null, null, 3, "div", [["class", "card-header"], ["id", "headingSixOrder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(72, 0, null, null, 2, "h5", [["class", "mb-0"]], null, null, null, null, null)), (_l()(), i1.ɵeld(73, 0, null, null, 1, "button", [["aria-controls", "collapseSixOrder"], ["aria-expanded", "false"], ["class", "btn btn-link collapsed"], ["data-target", "#collapseSixOrder"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" How long does it take for your product to be delivered? "])), (_l()(), i1.ɵeld(75, 0, null, null, 2, "div", [["aria-labelledby", "headingSixOrder"], ["class", "collapse"], ["data-parent", "#accordionOrder"], ["id", "collapseSixOrder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(76, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We do the same day delivery within Nairobi and its outskirts, overnight deliveries to other areas of Kenya far from Nairobi. "])), (_l()(), i1.ɵeld(78, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(79, 0, null, null, 3, "div", [["class", "card-header"], ["id", "headingSevenOrder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(80, 0, null, null, 2, "h5", [["class", "mb-0"]], null, null, null, null, null)), (_l()(), i1.ɵeld(81, 0, null, null, 1, "button", [["aria-controls", "collapseSevenOrder"], ["aria-expanded", "false"], ["class", "btn btn-link collapsed"], ["data-target", "#collapseSevenOrder"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Are your products under warranty? "])), (_l()(), i1.ɵeld(83, 0, null, null, 2, "div", [["aria-labelledby", "headingSevenOrder"], ["class", "collapse"], ["data-parent", "#accordionOrder"], ["id", "collapseSevenOrder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(84, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Our products brag warranty ranging from 1 year to 2 years. The warranty may either be shop provided or provided by the manufacturer which covers you within the East African region. "])), (_l()(), i1.ɵeld(86, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 7, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 7).target; var currVal_1 = i1.ɵnov(_v, 7).href; _ck(_v, 6, 0, currVal_0, currVal_1); }); }
exports.View_FaqComponent_0 = View_FaqComponent_0;
function View_FaqComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-faq", [], null, null, null, View_FaqComponent_0, RenderType_FaqComponent)), i1.ɵdid(1, 114688, null, 0, i4.FaqComponent, [i5.Title, i5.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_FaqComponent_Host_0 = View_FaqComponent_Host_0;
var FaqComponentNgFactory = i1.ɵccf("app-faq", i4.FaqComponent, View_FaqComponent_Host_0, {}, {}, []);
exports.FaqComponentNgFactory = FaqComponentNgFactory;


/***/ }),

/***/ "./src/app/components/pages/faq/faq.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/pages/faq/faq.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var platform_browser_2 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var FaqComponent = /** @class */ (function () {
    function FaqComponent(title, meta) {
        this.title = title;
        this.meta = meta;
        this.pageTitle = 'Frequently Asked Questions :: Phone And Tablets Kenya';
        // this.meta.addTag({ rel: 'canonical', href:'https://www.zuricart.co.ke/'  });
        // this.meta.addTag({ name: 'description', content:'Online Shopping : Buy Mobile Phones, Tablets, Televisions, Laptops , Cameras &  More | Best Prices In Kenya | Responsive Customer Support | Fast Shipping'  });
        // this.meta.addTag({ name: 'keywords', content: 'Phones & Tablets Kenya, Faqs, faq, frequently asked questions, Buy Phones and Tablets online, mobile, tablets , televisions in Kenya, Laptops, cameras' });
    }
    FaqComponent.prototype.ngOnInit = function () {
        this.title.setTitle(this.pageTitle);
    };
    return FaqComponent;
}());
exports.FaqComponent = FaqComponent;


/***/ }),

/***/ "./src/app/components/pages/faq/faq.module.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/components/pages/faq/faq.module.ngfactory.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./faq.module */ "./src/app/components/pages/faq/faq.module.ts");
var i2 = __webpack_require__(/*! ./faq.component.ngfactory */ "./src/app/components/pages/faq/faq.component.ngfactory.js");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i5 = __webpack_require__(/*! ./faq.component */ "./src/app/components/pages/faq/faq.component.ts");
var FaqModuleNgFactory = i0.ɵcmf(i1.FaqModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.FaqComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(1073742336, i4.RouterModule, i4.RouterModule, [[2, i4.ɵangular_packages_router_router_a], [2, i4.Router]]), i0.ɵmpd(1073742336, i1.FaqModule, i1.FaqModule, []), i0.ɵmpd(1024, i4.ROUTES, function () { return [[{ path: "", component: i5.FaqComponent, pathMatch: "full" }]]; }, [])]); });
exports.FaqModuleNgFactory = FaqModuleNgFactory;


/***/ }),

/***/ "./src/app/components/pages/faq/faq.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/pages/faq/faq.module.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FaqModule = /** @class */ (function () {
    function FaqModule() {
    }
    return FaqModule;
}());
exports.FaqModule = FaqModule;


/***/ }),

/***/ "./src/app/components/pages/home/home.component.css.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/components/pages/home/home.component.css.shim.ngstyle.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".modal-close[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n    text-decoration: none\n}\n\na[_ngcontent-%COMP%] {\n    color: #706e6f;\n    outline: 0\n}\n\n.hmenu[_ngcontent-%COMP%] {\n    padding-right: 0\n}\n\n.hslider[_ngcontent-%COMP%] {\n    padding-left: 0\n}\n\n.hslider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n.top-prod[_ngcontent-%COMP%]{\n    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\n    margin: 20px 0px;\n    background-color: #FFF;\n    display: none;\n}\n\n.top-prod[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{\n    padding: 10px 20px;\n    border-bottom: 1px solid #ddd;\n    font-size: 16px;\n}\n\n#hm-sec-2[_ngcontent-%COMP%] {\n    display: none\n}\n\n#hm-sec-3[_ngcontent-%COMP%] {\n    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\n    margin: 20px 0px;\n    background-color: #FFF;\n}\n\n.nav-item[_ngcontent-%COMP%]{\n\n}\n\n.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\n    \n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n    color: #355d87;\n    background-color: #fff;\n    border-top: #355d87 2px solid;\n    border-radius: 0px;\n    border-color: #355d87 #355d87 #fff;\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #355d87;\n}\n\n.pt-value[_ngcontent-%COMP%] {\n    margin-bottom: 18px\n}\n\n.pt-value[_ngcontent-%COMP%]   .pt-val-cont[_ngcontent-%COMP%]   .val-icon[_ngcontent-%COMP%] {\n    width: 40%;\n    float: left;\n    background-color: #02a09d;\n    padding: 5px\n}\n\n.pt-value[_ngcontent-%COMP%]   .pt-val-cont[_ngcontent-%COMP%]   .val-text[_ngcontent-%COMP%] {\n    width: 60%;\n    float: left;\n    color: #FFF;\n    text-align: left\n}\n\n.pt-value[_ngcontent-%COMP%]   .pt-val-cont[_ngcontent-%COMP%]   .val-text[_ngcontent-%COMP%]   .val-text-top[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 1.2em;\n    font-weight: unset\n}\n\n.pt-value[_ngcontent-%COMP%]   .pt-val-cont[_ngcontent-%COMP%]   .val-text[_ngcontent-%COMP%]   .val-text-bottom[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: 100\n}\n\n.pt-ad-img[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    transition: all .2s ease-in-out\n}\n\n.pt-ad-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n.pt-ad-img[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1)\n}\n\n.fProds-container[_ngcontent-%COMP%] {\n    padding: 10px\n}\n\n.fProds-item[_ngcontent-%COMP%] {\n    float: left;\n    width: 20%\n}\n\n.fProds-item[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90%\n}\n\n#all-brands[_ngcontent-%COMP%]{padding:30px 0 0;background-color:#FFF}\n\n.brands-container[_ngcontent-%COMP%]   .brand-cont[_ngcontent-%COMP%]{\n    float:left;margin:0 5px;position:relative;overflow:hidden;border:1px solid #FFF}\n\n.brands-container[_ngcontent-%COMP%]   .brand-cont[_ngcontent-%COMP%]:hover{border-color:#ddd}\n\n.brands-container[_ngcontent-%COMP%]   .brand-cont[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px}\n\n.blog-section[_ngcontent-%COMP%] {\n    padding: 20px 0\n}\n\n.blog-section[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    border-bottom: 1px solid #02a09d;\n    padding-bottom: 2px\n}\n\n.blog-section[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    background-color: #02a09d;\n    color: #FFF;\n    padding: 5px\n}\n\n.blog-section[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .view-link[_ngcontent-%COMP%] {\n    float: right;\n    margin-right: 10px;\n    margin-bottom: 6px\n}\n\n.blog-section[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin: 0\n}\n\n.blog-section[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .blog-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .blog-section[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .blog-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n    border-radius: 0\n}\n\n.blog-section[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .blog-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: .6rem\n}\n\n.mobile_view[_ngcontent-%COMP%]   .blog-section[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%], .mobile_view[_ngcontent-%COMP%]   .featured[_ngcontent-%COMP%]   .fProds-container[_ngcontent-%COMP%] {\n    padding: 0\n}\n\n.blog-section[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .blog-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    color: #424d82;\n    height: 40px;\n    overflow: hidden;\n    font-size: 1rem\n}\n\n.blog-section[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .blog-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    overflow: hidden;\n    height: 50px\n}\n\n.mobile_view[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n    width: 100%;\n    overflow-y: hidden\n}\n\n.mobile_view[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    width: 430px\n}\n\n.mobile_view[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n    float: left;\n    max-width: 68px;\n    margin: 4px\n}\n\n.mobile_view[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n.mobile_view[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 50%;\n    border: 1px solid #00a19b\n}\n\n.mobile_view[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    height: 30px;\n    text-align: center\n}\n\n.mobile_view[_ngcontent-%COMP%]   .featured[_ngcontent-%COMP%]   .fProds-container[_ngcontent-%COMP%]   .fProds-item[_ngcontent-%COMP%] {\n    width: 50%;\n    border: 1px solid #ddd;\n    border-bottom: none\n}\n\n.mobile_view[_ngcontent-%COMP%]   .fProds-item[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 75%;\n    margin: auto 12%\n}\n\n.mobile_view[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%] {\n    display: none\n}\n\n.mobile_view[_ngcontent-%COMP%]   .blog-section[_ngcontent-%COMP%]   .roW[_ngcontent-%COMP%] {\n    margin: 0\n}\n\n.mobile_view[_ngcontent-%COMP%]   .blog-section[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   .blog-container[_ngcontent-%COMP%] {\n    padding: 0 10px\n}\n\n.mobile_view[_ngcontent-%COMP%]   .category-strip[_ngcontent-%COMP%] {\n    margin: 10px 0\n}\n\n.mobile_view[_ngcontent-%COMP%]   .category-strip[_ngcontent-%COMP%]   .strip[_ngcontent-%COMP%] {\n    padding: 5px 0\n}\n\n.mobile_view[_ngcontent-%COMP%]   .category-strip[_ngcontent-%COMP%]   .strip[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n.mobile_view[_ngcontent-%COMP%]   .txt-link[_ngcontent-%COMP%] {\n    background-color: #FFF;\n    border: none;\n    color: inherit\n}\n\n.modal-window[_ngcontent-%COMP%] {\n    position: fixed;\n    background-color: rgba(86, 84, 84, .4);\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 99999999;\n    opacity: 1;\n    pointer-events: none;\n    transition: all .3s\n}\n\n.modal-window[_ngcontent-%COMP%]:target {\n    opacity: 1;\n    pointer-events: auto\n}\n\n.modal-window[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n    width: 400px;\n    position: relative;\n    margin: 10% auto;\n    padding: 2rem;\n    background: #fff;\n    color: #444;\n    border: 2px solid #42a19b\n}\n\n.modal-window[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    font-weight: 700\n}\n\n.modal-close[_ngcontent-%COMP%] {\n    color: #aaa;\n    line-height: 50px;\n    font-size: 80%;\n    position: absolute;\n    right: 0;\n    text-align: center;\n    top: 0;\n    width: 70px\n}\n\n.modal-close[_ngcontent-%COMP%]:hover {\n    color: #000\n}\n\n.modal-window[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 150%;\n    margin: 0 0 15px;\n    color: #42a19b\n}\n\n@media (min-width:320px) and (max-width:480px) {\n    .category-prods[_ngcontent-%COMP%], .hmenu[_ngcontent-%COMP%] {\n        display: none\n    }\n    .hslider[_ngcontent-%COMP%] {\n        padding: 0\n    }\n    .carousel-indicators[_ngcontent-%COMP%] {\n        bottom: -10px\n    }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/pages/home/home.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ngfactory.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home.component.css.shim.ngstyle */ "./src/app/components/pages/home/home.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ../../../core/loading.component.ngfactory */ "./src/app/core/loading.component.ngfactory.js");
var i5 = __webpack_require__(/*! ../../../core/loading.component */ "./src/app/core/loading.component.ts");
var i6 = __webpack_require__(/*! ../../partials/top-search/top-search.component.ngfactory */ "./src/app/components/partials/top-search/top-search.component.ngfactory.js");
var i7 = __webpack_require__(/*! ../../partials/top-search/top-search.component */ "./src/app/components/partials/top-search/top-search.component.ts");
var i8 = __webpack_require__(/*! ../../partials/main-slider/main-slider.component.ngfactory */ "./src/app/components/partials/main-slider/main-slider.component.ngfactory.js");
var i9 = __webpack_require__(/*! ../../partials/main-slider/main-slider.component */ "./src/app/components/partials/main-slider/main-slider.component.ts");
var i10 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var i11 = __webpack_require__(/*! ../../partials/home-menu/home-menu.component.ngfactory */ "./src/app/components/partials/home-menu/home-menu.component.ngfactory.js");
var i12 = __webpack_require__(/*! ../../partials/home-menu/home-menu.component */ "./src/app/components/partials/home-menu/home-menu.component.ts");
var i13 = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var i14 = __webpack_require__(/*! ../../partials/home-category/home-category.component.ngfactory */ "./src/app/components/partials/home-category/home-category.component.ngfactory.js");
var i15 = __webpack_require__(/*! ../../partials/home-category/home-category.component */ "./src/app/components/partials/home-category/home-category.component.ts");
var i16 = __webpack_require__(/*! ./home.component */ "./src/app/components/pages/home/home.component.ts");
var i17 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i18 = __webpack_require__(/*! ../../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
var i19 = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var i20 = __webpack_require__(/*! ../../../services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
var i21 = __webpack_require__(/*! ../../../services/filter/filter-sort.service */ "./src/app/services/filter/filter-sort.service.ts");
var i22 = __webpack_require__(/*! ngx-device-detector */ "ngx-device-detector");
var styles_HomeComponent = [i0.styles];
var RenderType_HomeComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeComponent, data: {} });
exports.RenderType_HomeComponent = RenderType_HomeComponent;
function View_HomeComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", _co.imageUrl, "/icons/mobile_Mobile.png"); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.parent.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_HomeComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", _co.imageUrl, "/icons/mobile_Tablets.png"); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.parent.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_HomeComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", _co.imageUrl, "/icons/mobile_Electronics.png"); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.parent.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_HomeComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", _co.imageUrl, "/icons/mobile_computer.png"); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.parent.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_HomeComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", _co.imageUrl, "/icons/mobile_accessories.png"); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.parent.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_HomeComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 17, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 16, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 15, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(4, 0, null, null, 13, "div", [["class", "cat-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 10, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_4)), i1.ɵdid(7, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_5)), i1.ɵdid(9, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_6)), i1.ɵdid(11, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_7)), i1.ɵdid(13, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_8)), i1.ɵdid(15, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(16, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), i1.ɵted(17, null, [" ", " "]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/products/", _v.parent.context.$implicit.url, ""); _ck(_v, 3, 0, currVal_2); var currVal_3 = (_v.parent.context.$implicit._id == "5a1fa8dd5d54cc0004e77464"); _ck(_v, 7, 0, currVal_3); var currVal_4 = (_v.parent.context.$implicit._id == "5a1faae25d54cc0004e7746c"); _ck(_v, 9, 0, currVal_4); var currVal_5 = (_v.parent.context.$implicit._id == "5a1fab895d54cc0004e77471"); _ck(_v, 11, 0, currVal_5); var currVal_6 = (_v.parent.context.$implicit._id == "5a1fa9735d54cc0004e77468"); _ck(_v, 13, 0, currVal_6); var currVal_7 = (_v.parent.context.$implicit._id == "5a819ab0b5e6a90004a1be90"); _ck(_v, 15, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_8 = _v.parent.context.$implicit.title; _ck(_v, 17, 0, currVal_8); }); }
function View_HomeComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_3)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (((((_v.context.$implicit._id == "5a1fa8dd5d54cc0004e77464") || (_v.context.$implicit._id == "5a1faae25d54cc0004e7746c")) || (_v.context.$implicit._id == "5a1fab895d54cc0004e77471")) || (_v.context.$implicit._id == "5a1fa9735d54cc0004e77468")) || (_v.context.$implicit._id == "5a819ab0b5e6a90004a1be90")); _ck(_v, 2, 0, currVal_0); }, null); }
function View_HomeComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-loading", [], null, null, null, i4.View_LoadingComponent_0, i4.RenderType_LoadingComponent)), i1.ɵdid(1, 49152, null, 0, i5.LoadingComponent, [], null, null)], null, null); }
function View_HomeComponent_14(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.product.price, 0)); _ck(_v, 1, 0, currVal_0); }); }
function View_HomeComponent_15(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "discount"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, [" Ksh. ", " "])), i1.ɵppd(5, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.product.special_price, 0)); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 4, 0, _ck(_v, 5, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.product.price, 0)); _ck(_v, 4, 0, currVal_1); }); }
function View_HomeComponent_16(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "ribbon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Offer"]))], null, null); }
function View_HomeComponent_13(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 17, "div", [["class", "fProds-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 16, "div", [["class", "product-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 15, "a", [["class", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(4, 2), (_l()(), i1.ɵeld(5, 0, null, null, 12, "div", [["class", "product-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "div", [["class", "product-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 7, "div", [["class", "product-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "div", [["class", "prod-title"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_14)), i1.ɵdid(12, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_15)), i1.ɵdid(14, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 0, "div", [["class", "prod-rate"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_16)), i1.ɵdid(17, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 4, 0, "/product", _v.context.$implicit.product.url); _ck(_v, 3, 0, currVal_2); var currVal_6 = (_v.context.$implicit.product.special_price == 0); _ck(_v, 12, 0, currVal_6); var currVal_7 = (_v.context.$implicit.product.special_price != 0); _ck(_v, 14, 0, currVal_7); var currVal_8 = (_v.context.$implicit.product.special_price != 0); _ck(_v, 17, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit.product.images[0][0], ""); var currVal_4 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.product.title, ""); _ck(_v, 7, 0, currVal_3, currVal_4); var currVal_5 = _v.context.$implicit.product.title; _ck(_v, 9, 0, currVal_5); }); }
function View_HomeComponent_12(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "div", [["class", "fProds-container"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_13)), i1.ɵdid(2, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.featuredProducts; _ck(_v, 2, 0, currVal_0); }, null); }
function View_HomeComponent_11(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_12)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.featuredProducts.length; _ck(_v, 1, 0, currVal_0); }, null); }
function View_HomeComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_11)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.featuredProducts; _ck(_v, 1, 0, currVal_0); }, null); }
function View_HomeComponent_17(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.bottom_image.link, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "", _v.context.$implicit.bottom_image.img, ""); var currVal_2 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.bottom_image.alt, ""); _ck(_v, 2, 0, currVal_1, currVal_2); }); }
function View_HomeComponent_19(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["class", "card-img-top"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/blogs/", _v.parent.context.$implicit.thumb_image, ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_HomeComponent_20(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["class", "card-img-top"], ["src", "https://placeimg.com/286/180/tech"]], [[8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0); }); }
function View_HomeComponent_18(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 11, "div", [["class", "col-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 10, "div", [["class", "blog-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 9, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_19)), i1.ɵdid(4, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_20)), i1.ɵdid(6, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(7, 0, null, null, 4, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 3, "a", [["class", "txt-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(9, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(10, 0, null, null, 0, "h5", [["class", "card-title"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 0, "p", [["class", "card-text"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.thumb_image != ""); _ck(_v, 4, 0, currVal_0); var currVal_1 = (_v.context.$implicit.thumb_image == ""); _ck(_v, 6, 0, currVal_1); var currVal_4 = i1.ɵinlineInterpolate(1, "/blog/", _v.context.$implicit.url, ""); _ck(_v, 9, 0, currVal_4); }, function (_ck, _v) { var currVal_2 = i1.ɵnov(_v, 9).target; var currVal_3 = i1.ɵnov(_v, 9).href; _ck(_v, 8, 0, currVal_2, currVal_3); var currVal_5 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_5); var currVal_6 = _v.context.$implicit.short_content; _ck(_v, 11, 0, currVal_6); }); }
function View_HomeComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 32, "div", [["class", "mobile_view"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "app-top-search", [], null, null, null, i6.View_TopSearchComponent_0, i6.RenderType_TopSearchComponent)), i1.ɵdid(2, 114688, null, 0, i7.TopSearchComponent, [i1.PLATFORM_ID, i2.Router], null, null), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "slider"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "app-main-slider", [], null, null, null, i8.View_MainSliderComponent_0, i8.RenderType_MainSliderComponent)), i1.ɵdid(5, 245760, null, 0, i9.MainSliderComponent, [i10.ProductsService], null, null), (_l()(), i1.ɵeld(6, 0, null, null, 4, "div", [["class", "category"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 3, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_2)), i1.ɵdid(9, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(10, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 4, "div", [["class", "featured"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_9)), i1.ɵdid(13, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_10)), i1.ɵdid(15, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(16, 0, null, null, 3, "section", [["class", "category-strip"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 2, "div", [["class", "strip"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_17)), i1.ɵdid(19, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(20, 0, null, null, 12, "section", [["class", "blog-section"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 11, "div", [["class", ""]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 6, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Blogs"])), (_l()(), i1.ɵeld(25, 0, null, null, 3, "div", [["class", "view-link"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 2, "a", [["routerLink", "/blogs"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 27).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(27, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["View All"])), (_l()(), i1.ɵeld(29, 0, null, null, 3, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_18)), i1.ɵdid(32, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); _ck(_v, 5, 0); var currVal_0 = _co.mainMenu; _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.loading; _ck(_v, 13, 0, currVal_1); var currVal_2 = _co.utils.isLoaded(_co.loading); _ck(_v, 15, 0, currVal_2); var currVal_3 = _co.category; _ck(_v, 19, 0, currVal_3); var currVal_6 = "/blogs"; _ck(_v, 27, 0, currVal_6); var currVal_7 = _co.blogs; _ck(_v, 32, 0, currVal_7); }, function (_ck, _v) { var currVal_4 = i1.ɵnov(_v, 27).target; var currVal_5 = i1.ɵnov(_v, 27).href; _ck(_v, 26, 0, currVal_4, currVal_5); }); }
function View_HomeComponent_22(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "div", [["class", "brand-cont"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 3, "a", [], [[8, "title", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(4, 2), (_l()(), i1.ɵeld(5, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], function (_ck, _v) { var currVal_3 = _ck(_v, 4, 0, "/brand", _v.context.$implicit.url); _ck(_v, 3, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.title, ""); var currVal_1 = i1.ɵnov(_v, 3).target; var currVal_2 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/brands-logo/", _v.context.$implicit.logo, ""); var currVal_5 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.title, ""); _ck(_v, 5, 0, currVal_4, currVal_5); }); }
function View_HomeComponent_23(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-loading", [], null, null, null, i4.View_LoadingComponent_0, i4.RenderType_LoadingComponent)), i1.ɵdid(1, 49152, null, 0, i5.LoadingComponent, [], null, null)], null, null); }
function View_HomeComponent_28(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.product.price, 0)); _ck(_v, 1, 0, currVal_0); }); }
function View_HomeComponent_29(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "discount"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, [" Ksh. ", " "])), i1.ɵppd(5, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.product.special_price, 0)); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 4, 0, _ck(_v, 5, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.product.price, 0)); _ck(_v, 4, 0, currVal_1); }); }
function View_HomeComponent_30(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "ribbon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Offer"]))], null, null); }
function View_HomeComponent_27(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 17, "div", [["class", "fProds-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 16, "div", [["class", "product-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 15, "a", [["class", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(4, 2), (_l()(), i1.ɵeld(5, 0, null, null, 12, "div", [["class", "product-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "div", [["class", "product-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 7, "div", [["class", "product-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "div", [["class", "prod-title"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_28)), i1.ɵdid(12, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_29)), i1.ɵdid(14, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 0, "div", [["class", "prod-rate"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_30)), i1.ɵdid(17, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 4, 0, "/product", _v.context.$implicit.product.url); _ck(_v, 3, 0, currVal_2); var currVal_6 = (_v.context.$implicit.product.special_price == 0); _ck(_v, 12, 0, currVal_6); var currVal_7 = (_v.context.$implicit.product.special_price != 0); _ck(_v, 14, 0, currVal_7); var currVal_8 = (_v.context.$implicit.product.special_price != 0); _ck(_v, 17, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit.product.images[0][0], ""); var currVal_4 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.product.title, ""); _ck(_v, 7, 0, currVal_3, currVal_4); var currVal_5 = _v.context.$implicit.product.title; _ck(_v, 9, 0, currVal_5); }); }
function View_HomeComponent_26(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "div", [["class", "fProds-container"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_27)), i1.ɵdid(2, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.featuredProducts; _ck(_v, 2, 0, currVal_0); }, null); }
function View_HomeComponent_25(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_26)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.featuredProducts.length; _ck(_v, 1, 0, currVal_0); }, null); }
function View_HomeComponent_24(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_25)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.featuredProducts; _ck(_v, 1, 0, currVal_0); }, null); }
function View_HomeComponent_36(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent.parent, 0), _v.parent.parent.context.$implicit.price, 0)); _ck(_v, 1, 0, currVal_0); }); }
function View_HomeComponent_37(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "discount"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, [" Ksh. ", " "])), i1.ɵppd(5, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent.parent, 0), _v.parent.parent.context.$implicit.special_price, 0)); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 4, 0, _ck(_v, 5, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent.parent, 0), _v.parent.parent.context.$implicit.price, 0)); _ck(_v, 4, 0, currVal_1); }); }
function View_HomeComponent_35(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_36)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_37)), i1.ɵdid(4, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.parent.context.$implicit.special_price == 0); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_v.parent.context.$implicit.special_price != 0); _ck(_v, 4, 0, currVal_1); }, null); }
function View_HomeComponent_38(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [["class", "upcoming"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Upcoming "]))], null, null); }
function View_HomeComponent_39(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "ribbon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Offer"]))], null, null); }
function View_HomeComponent_34(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 17, "div", [["class", "fProds-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 16, "div", [["class", "product-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 15, "a", [["class", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(4, 2), (_l()(), i1.ɵeld(5, 0, null, null, 12, "div", [["class", "product-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "div", [["class", "product-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 7, "div", [["class", "product-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "div", [["class", "prod-title"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_35)), i1.ɵdid(12, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_38)), i1.ɵdid(14, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 0, "div", [["class", "prod-rate"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_39)), i1.ɵdid(17, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 4, 0, "/product", _v.context.$implicit.url); _ck(_v, 3, 0, currVal_2); var currVal_6 = (_v.context.$implicit.stock != 2); _ck(_v, 12, 0, currVal_6); var currVal_7 = (_v.context.$implicit.stock == 2); _ck(_v, 14, 0, currVal_7); var currVal_8 = (_v.context.$implicit.special_price != 0); _ck(_v, 17, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit.images[0][0], ""); var currVal_4 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.title, ""); _ck(_v, 7, 0, currVal_3, currVal_4); var currVal_5 = _v.context.$implicit.title; _ck(_v, 9, 0, currVal_5); }); }
function View_HomeComponent_33(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "div", [["class", "fProds-container"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_34)), i1.ɵdid(2, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.latestProducts; _ck(_v, 2, 0, currVal_0); }, null); }
function View_HomeComponent_32(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_33)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.latestProducts.length; _ck(_v, 1, 0, currVal_0); }, null); }
function View_HomeComponent_31(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_32)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.latestProducts; _ck(_v, 1, 0, currVal_0); }, null); }
function View_HomeComponent_40(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-loading", [], null, null, null, i4.View_LoadingComponent_0, i4.RenderType_LoadingComponent)), i1.ɵdid(1, 49152, null, 0, i5.LoadingComponent, [], null, null)], null, null); }
function View_HomeComponent_45(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.product.price, 0)); _ck(_v, 1, 0, currVal_0); }); }
function View_HomeComponent_46(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "discount"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, [" Ksh. ", " "])), i1.ɵppd(5, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.product.special_price, 0)); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 4, 0, _ck(_v, 5, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.product.price, 0)); _ck(_v, 4, 0, currVal_1); }); }
function View_HomeComponent_47(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "ribbon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Offer"]))], null, null); }
function View_HomeComponent_44(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 17, "div", [["class", "fProds-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 16, "div", [["class", "product-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 15, "a", [["class", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(4, 2), (_l()(), i1.ɵeld(5, 0, null, null, 12, "div", [["class", "product-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "div", [["class", "product-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 7, "div", [["class", "product-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "div", [["class", "prod-title"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_45)), i1.ɵdid(12, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_46)), i1.ɵdid(14, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 0, "div", [["class", "prod-rate"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_47)), i1.ɵdid(17, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 4, 0, "/product", _v.context.$implicit.product.url); _ck(_v, 3, 0, currVal_2); var currVal_6 = (_v.context.$implicit.product.special_price == 0); _ck(_v, 12, 0, currVal_6); var currVal_7 = (_v.context.$implicit.product.special_price != 0); _ck(_v, 14, 0, currVal_7); var currVal_8 = (_v.context.$implicit.product.special_price != 0); _ck(_v, 17, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit.product.images[0][0], ""); var currVal_4 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.product.title, ""); _ck(_v, 7, 0, currVal_3, currVal_4); var currVal_5 = _v.context.$implicit.product.title; _ck(_v, 9, 0, currVal_5); }); }
function View_HomeComponent_43(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "div", [["class", "fProds-container"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_44)), i1.ɵdid(2, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.featuredProducts; _ck(_v, 2, 0, currVal_0); }, null); }
function View_HomeComponent_42(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_43)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.featuredProducts.length; _ck(_v, 1, 0, currVal_0); }, null); }
function View_HomeComponent_41(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_42)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.featuredProducts; _ck(_v, 1, 0, currVal_0); }, null); }
function View_HomeComponent_52(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.price, 0)); _ck(_v, 1, 0, currVal_0); }); }
function View_HomeComponent_53(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "discount"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, [" Ksh. ", " "])), i1.ɵppd(5, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.special_price, 0)); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 4, 0, _ck(_v, 5, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.price, 0)); _ck(_v, 4, 0, currVal_1); }); }
function View_HomeComponent_54(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "ribbon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Offer"]))], null, null); }
function View_HomeComponent_51(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 17, "div", [["class", "fProds-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 16, "div", [["class", "product-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 15, "a", [["class", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(4, 2), (_l()(), i1.ɵeld(5, 0, null, null, 12, "div", [["class", "product-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "div", [["class", "product-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 7, "div", [["class", "product-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "div", [["class", "prod-title"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_52)), i1.ɵdid(12, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_53)), i1.ɵdid(14, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 0, "div", [["class", "prod-rate"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_54)), i1.ɵdid(17, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 4, 0, "/product", _v.context.$implicit.url); _ck(_v, 3, 0, currVal_2); var currVal_6 = (_v.context.$implicit.special_price == 0); _ck(_v, 12, 0, currVal_6); var currVal_7 = (_v.context.$implicit.special_price != 0); _ck(_v, 14, 0, currVal_7); var currVal_8 = (_v.context.$implicit.special_price != 0); _ck(_v, 17, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit.images[0][0], ""); var currVal_4 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.title, ""); _ck(_v, 7, 0, currVal_3, currVal_4); var currVal_5 = _v.context.$implicit.title; _ck(_v, 9, 0, currVal_5); }); }
function View_HomeComponent_50(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "div", [["class", "fProds-container"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_51)), i1.ɵdid(2, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.latestProducts; _ck(_v, 2, 0, currVal_0); }, null); }
function View_HomeComponent_49(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_50)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.latestProducts.length; _ck(_v, 1, 0, currVal_0); }, null); }
function View_HomeComponent_48(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_49)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.latestProducts; _ck(_v, 1, 0, currVal_0); }, null); }
function View_HomeComponent_56(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["class", "card-img-top"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/blogs/", _v.parent.context.$implicit.thumb_image, ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_HomeComponent_57(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["class", "card-img-top"], ["src", "https://placeimg.com/286/180/tech"]], [[8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0); }); }
function View_HomeComponent_55(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 11, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 10, "div", [["class", "blog-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 9, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 8, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(4, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_56)), i1.ɵdid(6, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_57)), i1.ɵdid(8, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(9, 0, null, null, 2, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 0, "h5", [["class", "card-title"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 0, "p", [["class", "card-text"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/blog/", _v.context.$implicit.url, ""); _ck(_v, 4, 0, currVal_2); var currVal_3 = (_v.context.$implicit.thumb_image != ""); _ck(_v, 6, 0, currVal_3); var currVal_4 = (_v.context.$implicit.thumb_image == ""); _ck(_v, 8, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 4).target; var currVal_1 = i1.ɵnov(_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_5 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_5); var currVal_6 = _v.context.$implicit.short_content; _ck(_v, 11, 0, currVal_6); }); }
function View_HomeComponent_21(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 77, "div", [["class", "container desktop_view"], ["id", "home-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 6, "div", [["class", "row"], ["id", "home-top"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "col-md-2 hmenu"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "app-home-menu", [], null, null, null, i11.View_HomeMenuComponent_0, i11.RenderType_HomeMenuComponent)), i1.ɵdid(4, 245760, null, 0, i12.HomeMenuComponent, [i13.CategoryService], null, null), (_l()(), i1.ɵeld(5, 0, null, null, 2, "div", [["class", "col-md-10 hslider"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "app-main-slider", [], null, null, null, i8.View_MainSliderComponent_0, i8.RenderType_MainSliderComponent)), i1.ɵdid(7, 245760, null, 0, i9.MainSliderComponent, [i10.ProductsService], null, null), (_l()(), i1.ɵeld(8, 0, null, null, 6, "section", [["class", "clearfix"], ["id", "all-brands"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 5, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 3, "div", [["class", "brands-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 2, "div", [["class", "brands-strip"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_22)), i1.ɵdid(14, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 16, "section", [["id", "hm-sec-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 6, "ul", [["class", "nav nav-tabs"], ["id", "hmTab"], ["role", "tablist"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 1, "a", [["aria-controls", "featured"], ["aria-selected", "true"], ["class", "nav-link active"], ["data-toggle", "tab"], ["href", "#featured"], ["id", "featured-tab"], ["role", "tab"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Featured Products"])), (_l()(), i1.ɵeld(20, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 1, "a", [["aria-controls", "latest"], ["aria-selected", "false"], ["class", "nav-link"], ["data-toggle", "tab"], ["href", "#latest"], ["id", "latest-tab"], ["role", "tab"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Latest Products"])), (_l()(), i1.ɵeld(23, 0, null, null, 8, "div", [["class", "tab-content"], ["id", "myTabContent"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 4, "div", [["aria-labelledby", "featured-tab"], ["class", "tab-pane fade show active"], ["id", "featured"], ["role", "tabpanel"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_23)), i1.ɵdid(26, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_24)), i1.ɵdid(28, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(29, 0, null, null, 2, "div", [["aria-labelledby", "latest-tab"], ["class", "tab-pane fade"], ["id", "latest"], ["role", "tabpanel"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_31)), i1.ɵdid(31, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(32, 0, null, null, 6, "section", [["class", "top-prod"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 1, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Daily Deals "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_40)), i1.ɵdid(36, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_41)), i1.ɵdid(38, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(39, 0, null, null, 16, "section", [["id", "hm-sec-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 15, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 4, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 3, "div", [["class", "pt-ad-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(43, 0, null, null, 2, "a", [["routerLink", "/product/macbook-pro-mpxt2b-a-price-in-kenya"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 44).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(44, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(45, 0, null, null, 0, "img", [["alt", "3d curved fit "]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(46, 0, null, null, 4, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 3, "div", [["class", "pt-ad-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 2, "a", [["routerLink", "/product/samsung-galaxy-s9-plus-64gb-price-in-kenya"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 49).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(49, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(50, 0, null, null, 0, "img", [["alt", "sony dav dz350 home-theater"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 4, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(52, 0, null, null, 3, "div", [["class", "pt-ad-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(53, 0, null, null, 2, "a", [["routerLink", "/product/tesla-31-price-specs-in-kenya"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 54).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(54, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(55, 0, null, null, 0, "img", [["alt", "infinix hot 6 pro"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(56, 0, null, null, 4, "section", [["class", "top-prod"]], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 1, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Popular Products "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_48)), i1.ɵdid(60, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(61, 0, null, null, 1, "app-home-category", [], null, null, null, i14.View_HomeCategoryComponent_0, i14.RenderType_HomeCategoryComponent)), i1.ɵdid(62, 245760, null, 0, i15.HomeCategoryComponent, [i10.ProductsService], null, null), (_l()(), i1.ɵeld(63, 0, null, null, 1, "div", [["class", "delivery"]], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 0, "img", [["alt", "delivery"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(65, 0, null, null, 12, "section", [["class", "blog-section"]], null, null, null, null, null)), (_l()(), i1.ɵeld(66, 0, null, null, 11, "div", [["class", ""]], null, null, null, null, null)), (_l()(), i1.ɵeld(67, 0, null, null, 6, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(68, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Blogs"])), (_l()(), i1.ɵeld(70, 0, null, null, 3, "div", [["class", "view-link"]], null, null, null, null, null)), (_l()(), i1.ɵeld(71, 0, null, null, 2, "a", [["routerLink", "/blogs"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 72).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(72, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["View All"])), (_l()(), i1.ɵeld(74, 0, null, null, 3, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(75, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_55)), i1.ɵdid(77, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 4, 0); _ck(_v, 7, 0); var currVal_0 = _co.brands; _ck(_v, 14, 0, currVal_0); var currVal_1 = _co.loading; _ck(_v, 26, 0, currVal_1); var currVal_2 = _co.utils.isLoaded(_co.loading); _ck(_v, 28, 0, currVal_2); var currVal_3 = _co.utils.isLoaded(_co.loading); _ck(_v, 31, 0, currVal_3); var currVal_4 = _co.loading; _ck(_v, 36, 0, currVal_4); var currVal_5 = _co.utils.isLoaded(_co.loading); _ck(_v, 38, 0, currVal_5); var currVal_8 = "/product/macbook-pro-mpxt2b-a-price-in-kenya"; _ck(_v, 44, 0, currVal_8); var currVal_12 = "/product/samsung-galaxy-s9-plus-64gb-price-in-kenya"; _ck(_v, 49, 0, currVal_12); var currVal_16 = "/product/tesla-31-price-specs-in-kenya"; _ck(_v, 54, 0, currVal_16); var currVal_18 = _co.utils.isLoaded(_co.loading); _ck(_v, 60, 0, currVal_18); _ck(_v, 62, 0); var currVal_22 = "/blogs"; _ck(_v, 72, 0, currVal_22); var currVal_23 = _co.blogs; _ck(_v, 77, 0, currVal_23); }, function (_ck, _v) { var _co = _v.component; var currVal_6 = i1.ɵnov(_v, 44).target; var currVal_7 = i1.ɵnov(_v, 44).href; _ck(_v, 43, 0, currVal_6, currVal_7); var currVal_9 = i1.ɵinlineInterpolate(1, "", _co.imageUrl, "/home-page/Small-1.jpg"); _ck(_v, 45, 0, currVal_9); var currVal_10 = i1.ɵnov(_v, 49).target; var currVal_11 = i1.ɵnov(_v, 49).href; _ck(_v, 48, 0, currVal_10, currVal_11); var currVal_13 = i1.ɵinlineInterpolate(1, "", _co.imageUrl, "/home-page/Small-2.jpg"); _ck(_v, 50, 0, currVal_13); var currVal_14 = i1.ɵnov(_v, 54).target; var currVal_15 = i1.ɵnov(_v, 54).href; _ck(_v, 53, 0, currVal_14, currVal_15); var currVal_17 = i1.ɵinlineInterpolate(1, "", _co.imageUrl, "/home-page/Small-3.jpg"); _ck(_v, 55, 0, currVal_17); var currVal_19 = i1.ɵinlineInterpolate(1, "", _co.imageUrl, "/home-page/Delivery -strip.jpg"); _ck(_v, 64, 0, currVal_19); var currVal_20 = i1.ɵnov(_v, 72).target; var currVal_21 = i1.ɵnov(_v, 72).href; _ck(_v, 71, 0, currVal_20, currVal_21); }); }
function View_HomeComponent_58(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "div", [["class", "modal-window"], ["id", "open-modal"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Thank You!"])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Your order Has been Placed You'll receive a call From The Customer Care "]))], null, null); }
function View_HomeComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i3.DecimalPipe, [i1.LOCALE_ID]), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_1)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_21)), i1.ɵdid(4, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_58)), i1.ɵdid(6, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mobile_view; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.desktop_view; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.showAlert; _ck(_v, 6, 0, currVal_2); }, null); }
exports.View_HomeComponent_0 = View_HomeComponent_0;
function View_HomeComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), i1.ɵdid(1, 245760, null, 0, i16.HomeComponent, [i1.PLATFORM_ID, i17.Title, i17.Meta, i18.UtilsService, i10.ProductsService, i13.CategoryService, i19.StorageService, i20.AlertService, i21.FilterSortService, i22.DeviceDetectorService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeComponent_Host_0 = View_HomeComponent_Host_0;
var HomeComponentNgFactory = i1.ɵccf("app-home", i16.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
exports.HomeComponentNgFactory = HomeComponentNgFactory;


/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var platform_browser_2 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var category_service_1 = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var storage_service_1 = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var alert_service_1 = __webpack_require__(/*! ../../../services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
var utils_service_1 = __webpack_require__(/*! ../../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
var filter_sort_service_1 = __webpack_require__(/*! ../../../services/filter/filter-sort.service */ "./src/app/services/filter/filter-sort.service.ts");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var ngx_device_detector_1 = __webpack_require__(/*! ngx-device-detector */ "ngx-device-detector");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var Order_Message = env_config_1.ENV.BASE_SUCCESS;
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(platformId, title, meta, utils, productService, categoryService, storageService, alertService, fs, deviceService) {
        var _this = this;
        this.platformId = platformId;
        this.title = title;
        this.meta = meta;
        this.utils = utils;
        this.productService = productService;
        this.categoryService = categoryService;
        this.storageService = storageService;
        this.alertService = alertService;
        this.fs = fs;
        this.deviceService = deviceService;
        this.mobile_view = false;
        this.desktop_view = false;
        this.order_message = false;
        this.pageTitle = 'Online Shopping Site in Kenya - Shop for Electronics, Mobile, Tablets & Computers, Television - Phones And Tablets';
        this.imageUrl = '';
        this.showAlert = false;
        this.deviceInfo = null;
        this.storage = this.storageService.get();
        // this.meta.addTag({ name: 'description', content:'Online Shopping : Buy Mobile Phones, Tablets, Televisions, Laptops , Cameras &  More | Best Prices In Kenya | Responsive Customer Support | Fast Shipping'  });
        // this.meta.addTag({ name: 'keywords', content: 'Phones & Tablets Kenya, Buy Phones and Tablets online, mobile, tablets , televisions in Kenya, Laptops, cameras' });
        // this.meta.addTag({ property: 'og:url' , content:"https://www.phonestablets.co.ke" });
        // this.meta.addTag({ property: 'og:type' , content:"website" });
        // this.meta.addTag({ napropertyme: 'og:title' , content: this.pageTitle });
        // this.meta.addTag({ property: 'og:description' ,content: "Online Shopping : Buy Mobile Phones, Tablets, Televisions, Laptops , Cameras &  More | Best Prices In Kenya | Responsive Customer Support | Fast Shipping" });
        // this.meta.addTag({ property: 'og:image' , content:"https://www.static.phonestablets.co.ke/img/logo.png" });
        categoryService.categoryData$.subscribe(function (data) { return _this.mainMenu = data; });
        this.epicFunction();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._home();
        if (common_1.isPlatformBrowser(this.platformId)) {
            if (this.storage.getItem(Order_Message) == 'True') {
                this.setSuccessTimer();
                localStorage.removeItem(Order_Message);
                //this.storage.removeItem(Order_Message)
            }
            //if (window.screen.width >= 320 && window.screen.width <= 480) { 
            if (this.deviceInfo.device == 'android' || this.deviceInfo.device == 'iphone') {
                this.mobile_view = true;
                this.desktop_view = false;
                this._getCategoryProducts();
                this._getBlogsm();
                this._getFeaturedProducts();
                this._getLatestProducts();
            }
            else {
                this.mobile_view = false;
                this.desktop_view = true;
                //this._getBlogs();
                this._getFeaturedProducts();
                this._getLatestProducts();
                this._getBrands();
            }
        }
        if (common_1.isPlatformServer(this.platformId)) {
            this.mobile_view = false;
            this.desktop_view = true;
            //this._getBlogs();
        }
        this.imageUrl = IMG_URL;
        this.title.setTitle(this.pageTitle);
    };
    HomeComponent.prototype.epicFunction = function () {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        //console.log(this.deviceInfo);
    };
    HomeComponent.prototype._home = function () {
        var _this = this;
        //
        var checkData;
        this.homeSub = this.productService.homeData$.subscribe(function (data) {
            checkData = data;
            if (checkData != null) {
                _this.blogs = checkData.blog;
            }
        });
    };
    HomeComponent.prototype._getFeaturedProducts = function () {
        var _this = this;
        this.loading = true;
        // Get future, public events
        this.productsFeaturedSub = this.productService
            .getFeaturedProducts$()
            .subscribe(function (res) {
            _this.featuredProducts = res;
            _this.loading = false;
            _this.productService.setFeaturedProductsData(res);
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
        });
    };
    HomeComponent.prototype._getBrands = function () {
        var _this = this;
        this.loading = true;
        // Get future, public events
        this.brandsSub = this.productService
            .getAllBrands$()
            .subscribe(function (res) {
            _this.brands = res;
        }, function (err) {
            console.error(err);
            _this.error = true;
        });
    };
    HomeComponent.prototype._getLatestProducts = function () {
        var _this = this;
        this.loading = true;
        // Get future, public events
        this.productsLatestSub = this.productService
            .getLatestProducts$()
            .subscribe(function (res) {
            _this.latestProducts = res;
            _this.loading = false;
            _this.productService.setLatestProductsData(res);
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
        });
    };
    HomeComponent.prototype._getBlogsm = function () {
        var _this = this;
        this.loading = true;
        this.blogSub = this.productService
            .getHomeBlogm$()
            .subscribe(function (res) {
            _this.blogs = res;
        }, function (err) {
            console.error(err);
            _this.error = true;
        });
    };
    HomeComponent.prototype._getCategoryProducts = function () {
        var _this = this;
        this.loading = true;
        // Get future, public events
        this.categorySub = this.productService
            .getHomeCategoryMobile$()
            .subscribe(function (res) {
            _this.category = res;
            _this.loading = false;
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
        });
    };
    HomeComponent.prototype.setSuccessTimer = function () {
        var _this = this;
        // set showloader to true to show loading div on view
        this.showAlert = true;
        this.timer = rxjs_1.timer(6000); // 5000 millisecond means 5 seconds
        this.alertSub = this.timer.subscribe(function () {
            // set showloader to false to hide loading div from view after 5 seconds
            _this.showAlert = false;
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.menuSub) {
            this.menuSub.unsubscribe();
        }
        if (this.productsFeaturedSub) {
            this.productsFeaturedSub.unsubscribe();
        }
        if (this.brandsSub) {
            this.brandsSub.unsubscribe();
        }
        if (this.categorySub) {
            this.categorySub.unsubscribe();
        }
        if (this.blogSub) {
            this.blogSub.unsubscribe();
        }
        if (this.productsLatestSub) {
            this.productsLatestSub.unsubscribe();
        }
    };
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/components/pages/home/home.module.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/components/pages/home/home.module.ngfactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./home.module */ "./src/app/components/pages/home/home.module.ts");
var i2 = __webpack_require__(/*! ./home.component.ngfactory */ "./src/app/components/pages/home/home.component.ngfactory.js");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ../../../core/loading.module */ "./src/app/core/loading.module.ts");
var i7 = __webpack_require__(/*! ../../partials/top-search/top-search.module */ "./src/app/components/partials/top-search/top-search.module.ts");
var i8 = __webpack_require__(/*! ../../partials/home-menu/home-menu.module */ "./src/app/components/partials/home-menu/home-menu.module.ts");
var i9 = __webpack_require__(/*! ../../partials/main-slider/main-slider.module */ "./src/app/components/partials/main-slider/main-slider.module.ts");
var i10 = __webpack_require__(/*! ../../partials/home-category/home-category.module */ "./src/app/components/partials/home-category/home-category.module.ts");
var i11 = __webpack_require__(/*! ./home.component */ "./src/app/components/pages/home/home.component.ts");
var HomeModuleNgFactory = i0.ɵcmf(i1.HomeModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.HomeComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i4.ɵangular_packages_forms_forms_i, i4.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(4608, i4.FormBuilder, i4.FormBuilder, []), i0.ɵmpd(1073742336, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(1073742336, i5.RouterModule, i5.RouterModule, [[2, i5.ɵangular_packages_router_router_a], [2, i5.Router]]), i0.ɵmpd(1073742336, i6.LoadingModule, i6.LoadingModule, []), i0.ɵmpd(1073742336, i4.ɵangular_packages_forms_forms_bb, i4.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i4.FormsModule, i4.FormsModule, []), i0.ɵmpd(1073742336, i4.ReactiveFormsModule, i4.ReactiveFormsModule, []), i0.ɵmpd(1073742336, i7.TopSearchModule, i7.TopSearchModule, []), i0.ɵmpd(1073742336, i8.HomeMenuModule, i8.HomeMenuModule, []), i0.ɵmpd(1073742336, i9.MainSliderModule, i9.MainSliderModule, []), i0.ɵmpd(1073742336, i10.HomeCategoryModule, i10.HomeCategoryModule, []), i0.ɵmpd(1073742336, i1.HomeModule, i1.HomeModule, []), i0.ɵmpd(1024, i5.ROUTES, function () { return [[{ path: "", component: i11.HomeComponent, pathMatch: "full" }]]; }, [])]); });
exports.HomeModuleNgFactory = HomeModuleNgFactory;


/***/ }),

/***/ "./src/app/components/pages/home/home.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/pages/home/home.module.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
exports.HomeModule = HomeModule;


/***/ }),

/***/ "./src/app/components/pages/offers/offers.component.css.shim.ngstyle.js":
/*!******************************************************************************!*\
  !*** ./src/app/components/pages/offers/offers.component.css.shim.ngstyle.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".offers_page[_ngcontent-%COMP%]{background-color:#4aadaa;padding:30px 0}.product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]{text-align:center}.prod-price[_ngcontent-%COMP%]{border:none!important;float:left}.discount[_ngcontent-%COMP%]{float:left;text-decoration:line-through;padding-right:10px;color:#a29898;padding-top:3px}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/pages/offers/offers.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/offers/offers.component.ngfactory.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./offers.component.css.shim.ngstyle */ "./src/app/components/pages/offers/offers.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./offers.component */ "./src/app/components/pages/offers/offers.component.ts");
var i5 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i6 = __webpack_require__(/*! ../../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
var i7 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var styles_OffersComponent = [i0.styles];
var RenderType_OffersComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_OffersComponent, data: {} });
exports.RenderType_OffersComponent = RenderType_OffersComponent;
function View_OffersComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "ribbon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Offer"]))], null, null); }
function View_OffersComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 19, "div", [["class", "col-md-3 col-xs-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 18, "div", [["class", "product-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 17, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(4, 0, null, null, 15, "div", [["class", "product-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "product-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 10, "div", [["class", "product-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "div", [["class", "prod-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, [" ", " "])), (_l()(), i1.ɵeld(10, 0, null, null, 2, "div", [["class", "discount"]], null, null, null, null, null)), (_l()(), i1.ɵted(11, null, [" Ksh. ", " "])), i1.ɵppd(12, 2), (_l()(), i1.ɵeld(13, 0, null, null, 2, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵted(14, null, [" Ksh. ", " "])), i1.ɵppd(15, 2), (_l()(), i1.ɵeld(16, 0, null, null, 0, "div", [["class", "prod-rate"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OffersComponent_2)), i1.ɵdid(19, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/product/", _v.context.$implicit.url, ""); _ck(_v, 3, 0, currVal_2); var currVal_8 = (_v.context.$implicit.special_price != 0); _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit.images[0][0], ""); var currVal_4 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.title, ""); _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_5 = _v.context.$implicit.title; _ck(_v, 9, 0, currVal_5); var currVal_6 = i1.ɵunv(_v, 11, 0, _ck(_v, 12, 0, i1.ɵnov(_v.parent, 0), _v.context.$implicit.price, 0)); _ck(_v, 11, 0, currVal_6); var currVal_7 = i1.ɵunv(_v, 14, 0, _ck(_v, 15, 0, i1.ɵnov(_v.parent, 0), _v.context.$implicit.special_price, 0)); _ck(_v, 14, 0, currVal_7); }); }
function View_OffersComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i3.DecimalPipe, [i1.LOCALE_ID]), (_l()(), i1.ɵeld(1, 0, null, null, 6, "div", [["class", "offers_page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 5, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 3, "div", [["class", "offer_products"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OffersComponent_1)), i1.ɵdid(7, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.products; _ck(_v, 7, 0, currVal_0); }, null); }
exports.View_OffersComponent_0 = View_OffersComponent_0;
function View_OffersComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-offers", [], null, null, null, View_OffersComponent_0, RenderType_OffersComponent)), i1.ɵdid(1, 114688, null, 0, i4.OffersComponent, [i5.Title, i5.Meta, i6.UtilsService, i7.ProductsService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_OffersComponent_Host_0 = View_OffersComponent_Host_0;
var OffersComponentNgFactory = i1.ɵccf("app-offers", i4.OffersComponent, View_OffersComponent_Host_0, {}, {}, []);
exports.OffersComponentNgFactory = OffersComponentNgFactory;


/***/ }),

/***/ "./src/app/components/pages/offers/offers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/offers/offers.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var platform_browser_2 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var utils_service_1 = __webpack_require__(/*! ../../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var OffersComponent = /** @class */ (function () {
    function OffersComponent(title, meta, utils, productService) {
        this.title = title;
        this.meta = meta;
        this.utils = utils;
        this.productService = productService;
        this.imageUrl = '';
        // this.meta.addTag({ name: 'description', content: '' });
        // this.meta.addTag({ name: 'keywords', content: '' }); 
    }
    OffersComponent.prototype.ngOnInit = function () {
        this.imageUrl = IMG_URL;
        this._getProducts();
    };
    OffersComponent.prototype._getProducts = function () {
        var _this = this;
        this.loading = true;
        // Get future, public events
        this.productsSub = this.productService
            .getProductOffers$()
            .subscribe(function (res) {
            _this.products = res;
            _this.loading = false;
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
        });
    };
    return OffersComponent;
}());
exports.OffersComponent = OffersComponent;


/***/ }),

/***/ "./src/app/components/pages/offers/offers.module.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/components/pages/offers/offers.module.ngfactory.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./offers.module */ "./src/app/components/pages/offers/offers.module.ts");
var i2 = __webpack_require__(/*! ./offers.component.ngfactory */ "./src/app/components/pages/offers/offers.component.ngfactory.js");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i5 = __webpack_require__(/*! ../../../core/loading.module */ "./src/app/core/loading.module.ts");
var i6 = __webpack_require__(/*! ./offers.component */ "./src/app/components/pages/offers/offers.component.ts");
var OffersModuleNgFactory = i0.ɵcmf(i1.OffersModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.OffersComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(1073742336, i4.RouterModule, i4.RouterModule, [[2, i4.ɵangular_packages_router_router_a], [2, i4.Router]]), i0.ɵmpd(1073742336, i5.LoadingModule, i5.LoadingModule, []), i0.ɵmpd(1073742336, i1.OffersModule, i1.OffersModule, []), i0.ɵmpd(1024, i4.ROUTES, function () { return [[{ path: "", component: i6.OffersComponent, pathMatch: "full" }]]; }, [])]); });
exports.OffersModuleNgFactory = OffersModuleNgFactory;


/***/ }),

/***/ "./src/app/components/pages/offers/offers.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/offers/offers.module.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OffersModule = /** @class */ (function () {
    function OffersModule() {
    }
    return OffersModule;
}());
exports.OffersModule = OffersModule;


/***/ }),

/***/ "./src/app/components/pages/product/product.component.css.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/components/pages/product/product.component.css.shim.ngstyle.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: outside\n}\n\np[_ngcontent-%COMP%] {\n    margin-top: 10px\n}\n\n#product-page[_ngcontent-%COMP%] {\n    position: relative\n}\n\n#product-page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]{\n    padding-left: 20px;\n}\n\n.alert-container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 999999;\n    \n    left: 0px;\n    bottom: 0px;\n    background-color: #00000096;\n}\n\n.alert-inner[_ngcontent-%COMP%] {\n    background-color: #FFF;\n    color: #424d81;\n    position: absolute;\n    right: 0px;\n    width: 300px;\n    top: 0px;\n    bottom: 0px;\n}\n\n.alert-inner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{\n    position: absolute;\n    z-index: 9;\n    right: 5px;\n    top: 5px;\n    background-color: #706e6f;\n    border: none;\n    font-size: 18px;\n    color: #FFF;\n}\n\n.product-img[_ngcontent-%COMP%] {\n    position: relative\n}\n\n.product-img[_ngcontent-%COMP%]   .image-thumbs[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 20px;\n    left: 0\n}\n\n.product-img[_ngcontent-%COMP%]   .image-main[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 20px auto auto\n}\n\n.product-img[_ngcontent-%COMP%]   .image-main[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%] {\n    margin-left: 15%\n}\n\n.product-img[_ngcontent-%COMP%]   .image-main[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90%!important;\n    margin: auto\n}\n\n.product-img[_ngcontent-%COMP%]   .image-main[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\n    top: 0;\n    left: 0;\n    right: auto;\n    width: 60px;\n    display: block;\n    margin: 10% 15% 0 0\n}\n\n.product-img[_ngcontent-%COMP%]   .image-main[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px\n}\n\n.product-img[_ngcontent-%COMP%]   .image-main[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%\n}\n\n.product-img[_ngcontent-%COMP%]   .image-main[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n    border: 1px solid #02a09b\n}\n\n.product-img[_ngcontent-%COMP%]   .image-main[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: inline-block;\n    right: 0;\n    bottom: 0;\n    content: \"\";\n    background-color: #02a09b1a;\n    height: auto\n}\n\n.carousel-control-next[_ngcontent-%COMP%], .product-img[_ngcontent-%COMP%]   .image-main[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n    display: none\n}\n\n.product-top[_ngcontent-%COMP%]{\n    background-color: #FFF;\n}\n\n.prod-card[_ngcontent-%COMP%]{\n\n}\n\n.prod-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\n    \n}\n\n.prod-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{\n    background-color: #f5f3f3;\n}\n\n.prod-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]{\n    clear: both;\n}\n\n.prod-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\nfloat: left;\n}\n\n.prod-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{\nfloat: left;\n}\n\n.product-title[_ngcontent-%COMP%] {\n    padding: 20px 5px;\n    font-size: 1.6em;\n    text-transform: capitalize;\n    color: #424d81;\n    border-bottom: 1px solid #424d81;\n    background-color: #FFF;\n}\n\n.product-avail[_ngcontent-%COMP%]{\n    background-color: #FFF;\n}\n\n.product-amount[_ngcontent-%COMP%] {\n    padding: 5px 0 0px;\n    background-color: #FFF;\n}\n\n.product-amount[_ngcontent-%COMP%]   .upcoming[_ngcontent-%COMP%] {\n    background-color: #2fa09b;\n    color: #FFF;\n    text-align: center;\n    font-size: 20px\n}\n\n.product-amount[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n    float: left;\n    color: #424d81;\n    font-weight: 700;\n    font-size: 1rem\n}\n\n.product-amount[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%] {\n    float: right;\n    color: #706e6f;\n    font-size: 12px;\n    font-weight: 100;\n    text-decoration: line-through;\n    margin-top: 6px;\n    margin-left: 10px\n}\n\n.avail[_ngcontent-%COMP%] {\n    padding-left: 5px\n}\n\n.avail[_ngcontent-%COMP%]   .instock[_ngcontent-%COMP%] {\n    font-weight: 600;\n    color: green\n}\n\n.avail[_ngcontent-%COMP%]   .outstock[_ngcontent-%COMP%] {\n    font-weight: 600;\n    color: red;\n    font-size: 14px\n}\n\n.product-services[_ngcontent-%COMP%] {\n    float: left;\n    width: 40%;\n    padding: 10px;\n    border: 1px dashed #ccc4c4;\n    margin-top: 15px;\n    border-radius: 6px;\n    color: #908b8b\n}\n\n.product-services[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0\n}\n\n.product-services[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none\n}\n\n.product-services[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    color: #01a09b\n}\n\n.product-action[_ngcontent-%COMP%] {\n    padding: 15px 0;\n    background-color: #FFF;\n}\n\n.product-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 46%;\n    float: left;\n    margin: 0 2%\n}\n\n.product-action[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n    border-radius: 0;\n    color: #FFF;\n    background-color: #424d81;\n    border-color: #424d81\n}\n\n.product-action[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]:hover {\n    background-color: #FFF;\n    color: #424d81;\n    border-color: #424d81\n}\n\n.product-action[_ngcontent-%COMP%]   .call-btn[_ngcontent-%COMP%] {\n    border-radius: 0;\n    color: #FFF;\n    background-color: #f49a12;\n    border-color: #f49a12\n}\n\n.product-action[_ngcontent-%COMP%]   .call-btn[_ngcontent-%COMP%]:hover {\n    background-color: #FFF;\n    color: #f49a12;\n    border-color: #f49a12\n}\n\n.assoc-inner[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%] {\n    float: left\n}\n\n.assoc-inner[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%] {\n    position: relative\n}\n\n.assoc-inner[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    left: 0\n}\n\n.assoc-inner[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    float: left;\n    width: 50%\n}\n\n.assoc-inner[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    background-color: #e09d28;\n    text-align: center;\n    color: #FFF;\n    border: none\n}\n\n.assoc-inner[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n    background-color: #706e6f;\n    text-align: center;\n    color: #FFF;\n    border: none\n}\n\n.related[_ngcontent-%COMP%] {\n    margin: 30px 0;\n    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\n}\n\n.related-header[_ngcontent-%COMP%] {\n    color: #706e6f;\n    padding: 5px 10px;\n    background-color: #FFF;\n    font-size: 20px;\n    border-bottom: 1px solid #706e6f;\n}\n\n.related-container[_ngcontent-%COMP%] {\n    padding: 10px;\n    background-color: #FFF;\n}\n\n.related-item[_ngcontent-%COMP%] {\n    float: left;\n    width: 16.6%\n}\n\n#box[_ngcontent-%COMP%] {\n    padding: 20px 50px\n}\n\n#box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: outside\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n    border-bottom: none;\n    text-align: left;\n    width: 100%;\n    margin: 20px auto auto\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    border: 1px solid #ddd;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom: none;\n    text-decoration: none\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n    background-color: #414d80;\n    color: #fff;\n    border-color: #414d80 #414d80 #fff;\n    border-radius: 0\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    list-style: none;\n    margin: 0px 5px;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n    border-top: 1px solid #424d81;\n    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\n    background-color: #FFF;\n}\n\n.prod-assoc[_ngcontent-%COMP%] {\n    border: 1px solid #706e6f;\n    padding: 0\n}\n\n.prod-assoc[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    background-color: #706e6f;\n    color: #FFF;\n    text-align: center;\n    padding: 0;\n    margin: 0\n}\n\n.prod-assoc[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%] {\n    margin-top: 0\n}\n\n.prod-assoc[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n    width: 35%;\n    float: left;\n    padding: 0\n}\n\n.prod-assoc[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n    width: 65%;\n    float: left;\n    padding: 0\n}\n\n.prod-assoc[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]:hover   .product-info[_ngcontent-%COMP%] {\n    background-color: #FFF\n}\n\n.prod-assoc[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]:hover   .product-info[_ngcontent-%COMP%]   .prod-price[_ngcontent-%COMP%], .prod-assoc[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]:hover   .product-info[_ngcontent-%COMP%]   .prod-title[_ngcontent-%COMP%] {\n    color: #706e6f\n}\n\n.prod-assoc[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .prod-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    background-color: #f49a12;\n    border-color: #f49a12;\n    border-radius: 0;\n    font-size: 10px;\n    width: 100%\n}\n\n#description[_ngcontent-%COMP%] {\n    padding: 20px\n}\n\n.ent-desc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    width: 50%;\n    margin-left: 20px;\n    margin-top: 40px;\n}\n\n.ent-desc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #4c4c4c;\n    color: #FFF;\n    text-align: left;\n    padding: .5rem\n}\n\n.calls-btn[_ngcontent-%COMP%], .modal-header[_ngcontent-%COMP%] {\n    background-color: #f49a12;\n    color: #FFF\n}\n\n.ent-desc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: .5rem 1rem;\n    border-right: 1px solid #dee2e6;\n    text-align: left;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n    border-radius: 0;\n    border-color: #f49a12\n}\n\n.modal-header[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #f49a12;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0\n}\n\n.close[_ngcontent-%COMP%] {\n    color: #FFF;\n    text-shadow: 0 1px 0 #fff;\n    opacity: 1\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n    border-radius: 0\n}\n\n.calls-btn[_ngcontent-%COMP%] {\n    border-radius: 0;\n    width: 100%;\n    margin-top: 25px;\n    border-color: #f49a12\n}\n\n.tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n    float: left;\n    padding: 0 5px\n}\n\n.tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    font-weight: 700\n}\n\n.tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child::after {\n    content: \"::\"\n}\n\np[_ngcontent-%COMP%] {\n    margin: 0!important\n}\n\n.mobile_view[_ngcontent-%COMP%]   .alert-container[_ngcontent-%COMP%] {\n    position: relative\n}\n\n.mobile_view[_ngcontent-%COMP%]   .alert-inner[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    background-color: #008000b3;\n    color: #FFF;\n    text-align: center\n}\n\n.mobile_view[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n    font-size: 1.1em;\n    border-bottom: 1px solid;\n    padding: 15px 5px\n}\n\n.mobile_view[_ngcontent-%COMP%]   .product-amount[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n.mobile_view[_ngcontent-%COMP%]   .product-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 46%;\n    float: left;\n    border-radius: 3px;\n    font-size: .9rem\n}\n\n.mobile_view[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1.1em;\n    border-bottom: 1px solid #424d81;\n    margin: 10px 0;\n    color: #424d81;\n    font-weight: 700\n}\n\n.mobile_view[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\n\n}\n\n.mobile_view[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{\n\n}\n\n.mobile_view[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\n\n}\n\n.mobile_view[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0 15px\n}\n\n.mobile_view[_ngcontent-%COMP%]   .ent-desc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 0 4%\n}\n\n.mobile_view[_ngcontent-%COMP%]   .ent-desc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    font-size: 11px\n}\n\n.mobile_view[_ngcontent-%COMP%]   .related[_ngcontent-%COMP%]   .related-container[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: scroll\n}\n\n.mobile_view[_ngcontent-%COMP%]   .related[_ngcontent-%COMP%]   .related-container[_ngcontent-%COMP%]   .related-inner[_ngcontent-%COMP%] {\n    width: 700px\n}\n\n.desktop_bread[_ngcontent-%COMP%]{\n\n}\n\n.desktop_bread[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{\n    padding: .5rem;\n    margin-bottom: 0rem;\n}\n\n.desktop_bread[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]{\n    color: #999;\n}\n\n.desktop_bread[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: #999;\n    text-decoration: none;\n}\n\n.desktop_bread[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\n\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]::before {\n    padding-right: .2rem;\n    padding-left: .2rem;\n}\n\n@media (min-width:320px) and (max-width:480px) {\n    .modal-header[_ngcontent-%COMP%] {\n        padding: .5rem;\n        font-size: -1px\n    }\n    .modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n        font-size: 1rem\n    }\n    .modal-body[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n        padding: 0!important\n    }\n    .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n        margin: 0px 3px;\n    }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/pages/product/product.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/product/product.component.ngfactory.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./product.component.css.shim.ngstyle */ "./src/app/components/pages/product/product.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! ../../partials/product-cart/product-cart.component.ngfactory */ "./src/app/components/partials/product-cart/product-cart.component.ngfactory.js");
var i5 = __webpack_require__(/*! ../../partials/product-cart/product-cart.component */ "./src/app/components/partials/product-cart/product-cart.component.ts");
var i6 = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var i7 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var i8 = __webpack_require__(/*! ../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
var i9 = __webpack_require__(/*! ../../../services/checkout/checkout.service */ "./src/app/services/checkout/checkout.service.ts");
var i10 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i11 = __webpack_require__(/*! ./product.component */ "./src/app/components/pages/product/product.component.ts");
var i12 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i13 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i14 = __webpack_require__(/*! ../../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
var i15 = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var i16 = __webpack_require__(/*! ../../../services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
var styles_ProductComponent = [i0.styles];
var RenderType_ProductComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ProductComponent, data: {} });
exports.RenderType_ProductComponent = RenderType_ProductComponent;
function View_ProductComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [["class", "carousel-item"]], [[2, "active", null]], null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["alt", ""], ["class", "d-block w-100"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.index == 0); _ck(_v, 0, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit[0], ""); _ck(_v, 1, 0, currVal_1); }); }
function View_ProductComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "span", [["content", "KES"], ["itemprop", "priceCurrency"]], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["Ksh. ", ""])), i1.ɵppd(3, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵunv(_v, 2, 0, _ck(_v, 3, 0, i1.ɵnov(_v.parent.parent.parent, 0), _co.productPr, 0)); _ck(_v, 2, 0, currVal_0); }); }
function View_ProductComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "span", [["content", "KES"], ["itemprop", "priceCurrency"]], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["Ksh. ", ""])), i1.ɵppd(3, 2), (_l()(), i1.ɵeld(4, 0, null, null, 2, "div", [["class", "discount"]], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, [" Ksh. ", " "])), i1.ɵppd(6, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵunv(_v, 2, 0, _ck(_v, 3, 0, i1.ɵnov(_v.parent.parent.parent, 0), _co.productSp, 0)); _ck(_v, 2, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 5, 0, _ck(_v, 6, 0, i1.ɵnov(_v.parent.parent.parent, 0), _co.productPr, 0)); _ck(_v, 5, 0, currVal_1); }); }
function View_ProductComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "div", [["class", "product-price"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_4)), i1.ɵdid(3, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_5)), i1.ɵdid(5, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.productSp == 0); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.productSp != 0); _ck(_v, 5, 0, currVal_1); }, null); }
function View_ProductComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "div", [["class", "alert-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "alert-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "div", [["class", "alert-box"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Product Added To Cart! "]))], null, null); }
function View_ProductComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "button", [["class", "btn btn-primary success large js-btn-add add-btn"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addProductToCart(_co.productInfo._id, _co.productPr) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-shopping-basket"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Buy Now"]))], null, null); }
function View_ProductComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_8)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.productStock == 1); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ProductComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "button", [["class", "btn btn-primary success large js-btn-add add-btn"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addProductToCart(_co.productInfo._id, _co.productSp) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-shopping-basket"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Buy Now"]))], null, null); }
function View_ProductComponent_12(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.value; _ck(_v, 1, 0, currVal_0); }); }
function View_ProductComponent_11(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_12)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.entities._id == _v.parent.context.$implicit.entities._id); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ProductComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["", ""])), (_l()(), i1.ɵeld(3, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_11)), i1.ɵdid(5, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.productE; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.entities.title; _ck(_v, 2, 0, currVal_0); }); }
function View_ProductComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 48, "div", [["class", "mobile_view"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 11, "div", [["class", "carousel slide"], ["data-ride", "carousel"], ["id", "carouselExampleIndicators"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "carousel-inner"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_2)), i1.ɵdid(4, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(5, 0, null, null, 3, "a", [["class", "carousel-control-prev"], ["data-slide", "prev"], ["href", "#carouselExampleIndicators"], ["role", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "carousel-control-prev-icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Previous"])), (_l()(), i1.ɵeld(9, 0, null, null, 3, "a", [["class", "carousel-control-next"], ["data-slide", "next"], ["href", "#carouselExampleIndicators"], ["role", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "carousel-control-next-icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Next"])), (_l()(), i1.ɵeld(13, 0, null, null, 0, "div", [["class", "product-title"], ["itemprop", "name"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 2, "div", [["class", "product-amount clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_3)), i1.ɵdid(16, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_6)), i1.ɵdid(18, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(19, 0, null, null, 7, "div", [["class", "product-action clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_7)), i1.ɵdid(21, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_9)), i1.ɵdid(23, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(24, 0, null, null, 2, "button", [["class", "btn btn-primary success large js-btn-add call-btn"], ["data-target", "#exampleModalLong"], ["data-toggle", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-shopping-basket"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Contact Shop"])), (_l()(), i1.ɵeld(27, 0, null, null, 15, "div", [["class", "box"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 9, "ul", [["class", "nav nav-tabs"], ["id", "myTab"], ["role", "tablist"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 1, "a", [["aria-controls", "keyword"], ["aria-selected", "true"], ["class", "nav-link active"], ["data-toggle", "tab"], ["href", "#keyword"], ["id", "keyword-tab"], ["ng-click", "tabZ = 3"], ["role", "tab"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Key Features"])), (_l()(), i1.ɵeld(32, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 1, "a", [["aria-controls", "box"], ["aria-selected", "false"], ["class", "nav-link"], ["data-toggle", "tab"], ["href", "#box"], ["id", "box-tab"], ["ng-click", "tabZ = 1"], ["role", "tab"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Box Content"])), (_l()(), i1.ɵeld(35, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 1, "a", [["aria-controls", "description"], ["aria-selected", "false"], ["class", "nav-link"], ["data-toggle", "tab"], ["href", "#description"], ["id", "description-tab"], ["ng-click", "tabZ = 2"], ["role", "tab"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Description"])), (_l()(), i1.ɵeld(38, 0, null, null, 4, "div", [["class", "tab-content"], ["id", "myTabContent"]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 0, "div", [["aria-labelledby", "keyword-tab"], ["class", "tab-pane fade show active"], ["id", "keyword"], ["ng-show", "tabZ === 3"], ["role", "tabpanel"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 0, "div", [["aria-labelledby", "box-tab"], ["class", "tab-pane fade"], ["id", "box"], ["ng-show", "tabZ === 1"], ["role", "tabpanel"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 1, "div", [["aria-labelledby", "description-tab"], ["class", "tab-pane fade"], ["id", "description"], ["ng-show", "tabZ === 2"], ["role", "tabpanel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 0, "div", [["class", "main-desc"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(43, 0, null, null, 4, "div", [["class", "ent-desc"]], null, null, null, null, null)), (_l()(), i1.ɵeld(44, 0, null, null, 3, "table", [["class", "table"]], null, null, null, null, null)), (_l()(), i1.ɵeld(45, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_10)), i1.ɵdid(47, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(48, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.productImages; _ck(_v, 4, 0, currVal_0); var currVal_2 = (_co.productStock != 2); _ck(_v, 16, 0, currVal_2); var currVal_3 = _co.showAlert; _ck(_v, 18, 0, currVal_3); var currVal_4 = (_co.productSp == 0); _ck(_v, 21, 0, currVal_4); var currVal_5 = (_co.productSp != 0); _ck(_v, 23, 0, currVal_5); var currVal_9 = _co.productAE; _ck(_v, 47, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.productTle; _ck(_v, 13, 0, currVal_1); var currVal_6 = _co.productDs; _ck(_v, 39, 0, currVal_6); var currVal_7 = _co.productBxC; _ck(_v, 40, 0, currVal_7); var currVal_8 = _co.productDf; _ck(_v, 42, 0, currVal_8); }); }
function View_ProductComponent_14(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "li", [["class", "breadcrumb-item"], ["itemprop", "itemListElement"], ["itemscope", ""], ["itemtype", "http://schema.org/ListItem"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "a", [["itemprop", "item"], ["itemscope", ""], ["itemtype", "http://schema.org/Thing"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(3, null, ["", ""])), (_l()(), i1.ɵeld(4, 0, null, null, 0, "meta", [["itemprop", "position"]], [[8, "content", 0]], null, null, null, null))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/products/", _v.context.$implicit.link, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_3); var currVal_4 = i1.ɵinlineInterpolate(1, "", (_v.context.index + 1), ""); _ck(_v, 4, 0, currVal_4); }); }
function View_ProductComponent_15(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 6, "div", [["class", "alert-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 5, "div", [["class", "alert-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "button", [["class", "close-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.hideAlert() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["X"])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "app-product-cart", [], null, null, null, i4.View_ProductCartComponent_0, i4.RenderType_ProductCartComponent)), i1.ɵdid(6, 245760, null, 0, i5.ProductCartComponent, [i6.StorageService, i7.ProductsService, i8.CartService, i9.CheckoutService], null, null), (_l()(), i1.ɵeld(7, 0, null, null, 0, "div", [["class", "alert-box"]], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 6, 0); }, null); }
function View_ProductComponent_16(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [["class", "carousel-item"]], [[2, "active", null]], null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["alt", ""], ["class", "d-block w-100"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.index == 0); _ck(_v, 0, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit[0], ""); _ck(_v, 1, 0, currVal_1); }); }
function View_ProductComponent_18(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "li", [["class", "active"], ["data-slide-to", "0"], ["data-target", "#carouselExampleIndicators"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.parent.context.$implicit[0], ""); _ck(_v, 2, 0, currVal_0); }); }
function View_ProductComponent_19(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "li", [["data-slide-to", "1"], ["data-target", "#carouselExampleIndicators"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.parent.context.$implicit[0], ""); _ck(_v, 2, 0, currVal_0); }); }
function View_ProductComponent_20(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "li", [["data-slide-to", "2"], ["data-target", "#carouselExampleIndicators"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.parent.context.$implicit[0], ""); _ck(_v, 2, 0, currVal_0); }); }
function View_ProductComponent_21(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "li", [["data-slide-to", "3"], ["data-target", "#carouselExampleIndicators"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.parent.context.$implicit[0], ""); _ck(_v, 2, 0, currVal_0); }); }
function View_ProductComponent_17(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_18)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_19)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_20)), i1.ɵdid(6, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_21)), i1.ɵdid(8, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.context.index == 0); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_v.context.index == 1); _ck(_v, 4, 0, currVal_1); var currVal_2 = (_v.context.index == 2); _ck(_v, 6, 0, currVal_2); var currVal_3 = (_v.context.index == 3); _ck(_v, 8, 0, currVal_3); }, null); }
function View_ProductComponent_23(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [["class", "instock"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" In Stock "]))], null, null); }
function View_ProductComponent_24(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [["class", "outstock"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Out of Stock "]))], null, null); }
function View_ProductComponent_22(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 7, "div", [["class", "product-avail"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Availability: "])), (_l()(), i1.ɵeld(4, 0, null, null, 4, "span", [["class", "avail"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_23)), i1.ɵdid(6, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_24)), i1.ɵdid(8, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.productStock == 1); _ck(_v, 6, 0, currVal_0); var currVal_1 = (_co.productStock == 0); _ck(_v, 8, 0, currVal_1); }, null); }
function View_ProductComponent_26(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "span", [["content", "KES"], ["itemprop", "priceCurrency"]], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["Ksh. ", ""])), i1.ɵppd(3, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵunv(_v, 2, 0, _ck(_v, 3, 0, i1.ɵnov(_v.parent.parent.parent, 0), _co.productPr, 0)); _ck(_v, 2, 0, currVal_0); }); }
function View_ProductComponent_27(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "span", [["content", "KES"], ["itemprop", "priceCurrency"]], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["Ksh. ", ""])), i1.ɵppd(3, 2), (_l()(), i1.ɵeld(4, 0, null, null, 2, "div", [["class", "discount"]], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, [" Ksh. ", " "])), i1.ɵppd(6, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵunv(_v, 2, 0, _ck(_v, 3, 0, i1.ɵnov(_v.parent.parent.parent, 0), _co.productSp, 0)); _ck(_v, 2, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 5, 0, _ck(_v, 6, 0, i1.ɵnov(_v.parent.parent.parent, 0), _co.productPr, 0)); _ck(_v, 5, 0, currVal_1); }); }
function View_ProductComponent_25(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "div", [["class", "product-price"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_26)), i1.ɵdid(3, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_27)), i1.ɵdid(5, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.productSp == 0); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.productSp != 0); _ck(_v, 5, 0, currVal_1); }, null); }
function View_ProductComponent_29(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "button", [["class", "btn btn-primary success large js-btn-add add-btn"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addProductToCart(_co.productInfo._id, _co.productPr) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-shopping-basket"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Buy Now"]))], null, null); }
function View_ProductComponent_28(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_29)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.productStock == 1); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ProductComponent_30(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "button", [["class", "btn btn-primary success large js-btn-add add-btn"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addProductToCart(_co.productInfo._id, _co.productSp) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-shopping-basket"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Buy Now"]))], null, null); }
function View_ProductComponent_33(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 12, "div", [["class", "related-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 11, "div", [["class", "product-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 10, "a", [["class", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(4, 0, null, null, 8, "div", [["class", "product-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "product-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 5, "div", [["class", "product-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 0, "div", [["class", "prod-title"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 2, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵted(10, null, [" Ksh. ", " "])), i1.ɵppd(11, 2), (_l()(), i1.ɵeld(12, 0, null, null, 0, "div", [["class", "prod-rate"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/product/", _v.context.$implicit.url, ""); _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit.images[0][0], ""); var currVal_4 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.title, ""); _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_5 = _v.context.$implicit.title; _ck(_v, 8, 0, currVal_5); var currVal_6 = i1.ɵunv(_v, 10, 0, _ck(_v, 11, 0, i1.ɵnov(_v.parent.parent.parent.parent, 0), _v.context.$implicit.price, 0)); _ck(_v, 10, 0, currVal_6); }); }
function View_ProductComponent_32(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [["class", "related-header"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Related Products "])), (_l()(), i1.ɵeld(2, 0, null, null, 3, "div", [["class", "related-container"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_33)), i1.ɵdid(4, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(5, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.productRelated; _ck(_v, 4, 0, currVal_0); }, null); }
function View_ProductComponent_31(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_32)), i1.ɵdid(1, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.productRelated.length; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ProductComponent_13(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 89, "div", [["class", "row desktop_view"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 10, "nav", [["aria-label", "breadcrumb"], ["class", "desktop_bread col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 9, "ol", [["class", "breadcrumb"], ["itemscope", ""], ["itemtype", "http://schema.org/BreadcrumbList"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 4, "li", [["class", "breadcrumb-item"], ["itemprop", "itemListElement"], ["itemscope", ""], ["itemtype", "http://schema.org/ListItem"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 2, "a", [["itemprop", "item"], ["itemscope", ""], ["itemtype", "http://schema.org/Thing"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(5, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Home"])), (_l()(), i1.ɵeld(7, 0, null, null, 0, "meta", [["content", "0"], ["itemprop", "position"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_14)), i1.ɵdid(9, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(10, 0, null, null, 1, "li", [["aria-current", "page"], ["class", "breadcrumb-item active"]], null, null, null, null, null)), (_l()(), i1.ɵted(11, null, ["", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_15)), i1.ɵdid(13, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(14, 0, null, null, 59, "div", [["class", "col-md-12 product-top"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 58, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 16, "div", [["class", "col-md-5 product-img"], ["data-offset-top", "205"], ["data-spy", "affix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 15, "div", [["class", "image-main"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 14, "div", [["class", "carousel slide"], ["data-ride", "carousel"], ["id", "carouselExampleIndicators"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 2, "div", [["class", "carousel-inner"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_16)), i1.ɵdid(21, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(22, 0, null, null, 2, "ol", [["class", "carousel-indicators"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_17)), i1.ɵdid(24, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(25, 0, null, null, 3, "a", [["class", "carousel-control-prev"], ["data-slide", "prev"], ["href", "#carouselExampleIndicators"], ["role", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "carousel-control-prev-icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Previous"])), (_l()(), i1.ɵeld(29, 0, null, null, 3, "a", [["class", "carousel-control-next"], ["data-slide", "next"], ["href", "#carouselExampleIndicators"], ["role", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "carousel-control-next-icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Next"])), (_l()(), i1.ɵeld(33, 0, null, null, 40, "div", [["class", "col-md-7 product-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 0, "div", [["class", "product-title"], ["itemprop", "name"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 0, "div", [["class", "product-review clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 37, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 17, "div", [["class", "col-md-8"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_22)), i1.ɵdid(39, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(40, 0, null, null, 2, "div", [["class", "product-amount clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_25)), i1.ɵdid(42, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(43, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(44, 0, null, null, 0, "dir", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(45, 0, null, null, 0, "div", [["class", "product-entity clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(46, 0, null, null, 0, "div", [["class", "product-qty clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 7, "div", [["class", "product-action clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_28)), i1.ɵdid(49, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_30)), i1.ɵdid(51, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(52, 0, null, null, 2, "button", [["class", "btn btn-primary success large js-btn-add call-btn"], ["data-target", "#exampleModalLong"], ["data-toggle", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(53, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-shopping-basket"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Contact Shop"])), (_l()(), i1.ɵeld(55, 0, null, null, 18, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(56, 0, null, null, 17, "div", [["class", "prod-card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 16, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(58, 0, null, null, 15, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(59, 0, null, null, 4, "div", [["class", "cart-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(60, 0, null, null, 1, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 0, "i", [["class", "far fa-money-bill-alt fa-2x"]], null, null, null, null, null)), (_l()(), i1.ɵeld(62, 0, null, null, 1, "div", [["class", "txt"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" cash Back "])), (_l()(), i1.ɵeld(64, 0, null, null, 4, "div", [["class", "cart-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(65, 0, null, null, 1, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(66, 0, null, null, 0, "i", [["class", "far fa-money-bill-alt fa-2x"]], null, null, null, null, null)), (_l()(), i1.ɵeld(67, 0, null, null, 1, "div", [["class", "txt"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" cash Back "])), (_l()(), i1.ɵeld(69, 0, null, null, 4, "div", [["class", "cart-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(70, 0, null, null, 1, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(71, 0, null, null, 0, "i", [["class", "far fa-money-bill-alt fa-2x"]], null, null, null, null, null)), (_l()(), i1.ɵeld(72, 0, null, null, 1, "div", [["class", "txt"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" cash Back "])), (_l()(), i1.ɵeld(74, 0, null, null, 3, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(75, 0, null, null, 2, "div", [["class", "related"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_31)), i1.ɵdid(77, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(78, 0, null, null, 11, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(79, 0, null, null, 6, "ul", [["class", "nav nav-tabs"], ["id", "myTab"], ["role", "tablist"]], null, null, null, null, null)), (_l()(), i1.ɵeld(80, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(81, 0, null, null, 1, "a", [["aria-controls", "description"], ["aria-selected", "false"], ["class", "nav-link active"], ["data-toggle", "tab"], ["href", "#description"], ["id", "description-tab"], ["ng-click", "tabZ = 2"], ["role", "tab"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Description"])), (_l()(), i1.ɵeld(83, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(84, 0, null, null, 1, "a", [["aria-controls", "box"], ["aria-selected", "false"], ["class", "nav-link "], ["data-toggle", "tab"], ["href", "#box"], ["id", "box-tab"], ["ng-click", "tabZ = 1"], ["role", "tab"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Box Content"])), (_l()(), i1.ɵeld(86, 0, null, null, 3, "div", [["class", "tab-content"], ["id", "myTabContent"]], null, null, null, null, null)), (_l()(), i1.ɵeld(87, 0, null, null, 0, "div", [["aria-labelledby", "box-tab"], ["class", "tab-pane fade"], ["id", "box"], ["ng-show", "tabZ === 1"], ["role", "tabpanel"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(88, 0, null, null, 1, "div", [["aria-labelledby", "description-tab"], ["class", "tab-pane fade show active"], ["id", "description"], ["ng-show", "tabZ === 2"], ["role", "tabpanel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(89, 0, null, null, 0, "div", [["class", "main-desc"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/"; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.breadcrumb; _ck(_v, 9, 0, currVal_3); var currVal_5 = _co.showAlert; _ck(_v, 13, 0, currVal_5); var currVal_6 = _co.productImages; _ck(_v, 21, 0, currVal_6); var currVal_7 = _co.productImages; _ck(_v, 24, 0, currVal_7); var currVal_9 = (_co.productStock != 2); _ck(_v, 39, 0, currVal_9); var currVal_10 = (_co.productStock != 2); _ck(_v, 42, 0, currVal_10); var currVal_12 = (_co.productSp == 0); _ck(_v, 49, 0, currVal_12); var currVal_13 = (_co.productSp != 0); _ck(_v, 51, 0, currVal_13); var currVal_14 = _co.productRelated; _ck(_v, 77, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 5).target; var currVal_1 = i1.ɵnov(_v, 5).href; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_4 = _co.productTle; _ck(_v, 11, 0, currVal_4); var currVal_8 = _co.productTle; _ck(_v, 34, 0, currVal_8); var currVal_11 = _co.productDs; _ck(_v, 44, 0, currVal_11); var currVal_15 = _co.productBxC; _ck(_v, 87, 0, currVal_15); var currVal_16 = _co.productDf; _ck(_v, 89, 0, currVal_16); }); }
function View_ProductComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i2.DecimalPipe, [i1.LOCALE_ID]), (_l()(), i1.ɵeld(1, 0, null, null, 5, "div", [["class", ""], ["id", "product-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 4, "div", [["class", "container"], ["itemscope", ""], ["itemtype", "http://schema.org/Product"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_1)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductComponent_13)), i1.ɵdid(6, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(7, 0, null, null, 65, "div", [["aria-hidden", "true"], ["aria-labelledby", "exampleModalLongTitle"], ["class", "modal fade"], ["id", "exampleModalLong"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 64, "div", [["class", "modal-dialog"], ["role", "document"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 63, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 1, "h5", [["class", "modal-title"], ["id", "exampleModalLongTitle"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact Shop"])), (_l()(), i1.ɵeld(13, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(16, 0, null, null, 56, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 55, "form", [["autocomplete", "off"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 19).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 19).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit(_co.id) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(18, 16384, null, 0, i10.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(19, 540672, null, 0, i10.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i10.ControlContainer, null, [i10.FormGroupDirective]), i1.ɵdid(21, 16384, null, 0, i10.NgControlStatusGroup, [[4, i10.ControlContainer]], null, null), (_l()(), i1.ɵeld(22, 0, null, null, 50, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 1, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 0, "b", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 1, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 9, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 1, "label", [["for", "first_name"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name"])), (_l()(), i1.ɵeld(31, 0, null, null, 5, "input", [["aria-describedby", "first_name_Help"], ["class", "form-control"], ["formControlName", "name"], ["id", "first_name"], ["ngModel", ""], ["placeholder", "First Name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 32)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 32).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 32)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 32)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(32, 16384, null, 0, i10.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i10.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i10.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i10.DefaultValueAccessor]), i1.ɵdid(34, 671744, null, 0, i10.FormControlName, [[3, i10.ControlContainer], [8, null], [8, null], [6, i10.NG_VALUE_ACCESSOR], [2, i10.ɵangular_packages_forms_forms_j]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i10.NgControl, null, [i10.FormControlName]), i1.ɵdid(36, 16384, null, 0, i10.NgControlStatus, [[4, i10.NgControl]], null, null), (_l()(), i1.ɵeld(37, 0, null, null, 10, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 9, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 1, "label", [["for", "phone"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Phone Number"])), (_l()(), i1.ɵeld(41, 0, null, null, 5, "input", [["aria-describedby", "phone_Help"], ["class", "form-control"], ["formControlName", "phone"], ["id", "phone"], ["ngModel", ""], ["placeholder", "Phone Number"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 42)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 42).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 42)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 42)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(42, 16384, null, 0, i10.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i10.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i10.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i10.DefaultValueAccessor]), i1.ɵdid(44, 671744, null, 0, i10.FormControlName, [[3, i10.ControlContainer], [8, null], [8, null], [6, i10.NG_VALUE_ACCESSOR], [2, i10.ɵangular_packages_forms_forms_j]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i10.NgControl, null, [i10.FormControlName]), i1.ɵdid(46, 16384, null, 0, i10.NgControlStatus, [[4, i10.NgControl]], null, null), (_l()(), i1.ɵeld(47, 0, null, null, 0, "small", [["class", "form-text text-muted"], ["id", "phone_Help"]], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 10, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 9, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(50, 0, null, null, 1, "label", [["for", "email"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Email address"])), (_l()(), i1.ɵeld(52, 0, null, null, 5, "input", [["aria-describedby", "email_Help"], ["class", "form-control"], ["formControlName", "email"], ["id", "email"], ["ngModel", ""], ["placeholder", "Enter email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 53)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 53).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 53)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 53)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(53, 16384, null, 0, i10.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i10.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i10.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i10.DefaultValueAccessor]), i1.ɵdid(55, 671744, null, 0, i10.FormControlName, [[3, i10.ControlContainer], [8, null], [8, null], [6, i10.NG_VALUE_ACCESSOR], [2, i10.ɵangular_packages_forms_forms_j]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i10.NgControl, null, [i10.FormControlName]), i1.ɵdid(57, 16384, null, 0, i10.NgControlStatus, [[4, i10.NgControl]], null, null), (_l()(), i1.ɵeld(58, 0, null, null, 0, "small", [["class", "form-text text-muted"], ["id", "email_Help"]], null, null, null, null, null)), (_l()(), i1.ɵeld(59, 0, null, null, 9, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(60, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 1, "label", [["for", "message"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Message"])), (_l()(), i1.ɵeld(63, 0, null, null, 5, "textarea", [["class", "form-control"], ["formControlName", "message"], ["id", "message"], ["ngModel", ""], ["placeholder", "Enter Message"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 64)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 64).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 64)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 64)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(64, 16384, null, 0, i10.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i10.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i10.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i10.DefaultValueAccessor]), i1.ɵdid(66, 671744, null, 0, i10.FormControlName, [[3, i10.ControlContainer], [8, null], [8, null], [6, i10.NG_VALUE_ACCESSOR], [2, i10.ɵangular_packages_forms_forms_j]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i10.NgControl, null, [i10.FormControlName]), i1.ɵdid(68, 16384, null, 0, i10.NgControlStatus, [[4, i10.NgControl]], null, null), (_l()(), i1.ɵeld(69, 0, null, null, 3, "div", [["class", "col-md-6  action-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(70, 0, null, null, 2, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(71, 0, null, null, 1, "button", [["class", "btn btn-primary calls-btn"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Submit"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mobile_view; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.desktop_view; _ck(_v, 6, 0, currVal_1); var currVal_9 = _co.form; _ck(_v, 19, 0, currVal_9); var currVal_18 = "name"; var currVal_19 = ""; _ck(_v, 34, 0, currVal_18, currVal_19); var currVal_27 = "phone"; var currVal_28 = ""; _ck(_v, 44, 0, currVal_27, currVal_28); var currVal_36 = "email"; var currVal_37 = ""; _ck(_v, 55, 0, currVal_36, currVal_37); var currVal_45 = "message"; var currVal_46 = ""; _ck(_v, 66, 0, currVal_45, currVal_46); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = i1.ɵnov(_v, 21).ngClassUntouched; var currVal_3 = i1.ɵnov(_v, 21).ngClassTouched; var currVal_4 = i1.ɵnov(_v, 21).ngClassPristine; var currVal_5 = i1.ɵnov(_v, 21).ngClassDirty; var currVal_6 = i1.ɵnov(_v, 21).ngClassValid; var currVal_7 = i1.ɵnov(_v, 21).ngClassInvalid; var currVal_8 = i1.ɵnov(_v, 21).ngClassPending; _ck(_v, 17, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_10 = _co.productTle; _ck(_v, 24, 0, currVal_10); var currVal_11 = i1.ɵnov(_v, 36).ngClassUntouched; var currVal_12 = i1.ɵnov(_v, 36).ngClassTouched; var currVal_13 = i1.ɵnov(_v, 36).ngClassPristine; var currVal_14 = i1.ɵnov(_v, 36).ngClassDirty; var currVal_15 = i1.ɵnov(_v, 36).ngClassValid; var currVal_16 = i1.ɵnov(_v, 36).ngClassInvalid; var currVal_17 = i1.ɵnov(_v, 36).ngClassPending; _ck(_v, 31, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_20 = i1.ɵnov(_v, 46).ngClassUntouched; var currVal_21 = i1.ɵnov(_v, 46).ngClassTouched; var currVal_22 = i1.ɵnov(_v, 46).ngClassPristine; var currVal_23 = i1.ɵnov(_v, 46).ngClassDirty; var currVal_24 = i1.ɵnov(_v, 46).ngClassValid; var currVal_25 = i1.ɵnov(_v, 46).ngClassInvalid; var currVal_26 = i1.ɵnov(_v, 46).ngClassPending; _ck(_v, 41, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_29 = i1.ɵnov(_v, 57).ngClassUntouched; var currVal_30 = i1.ɵnov(_v, 57).ngClassTouched; var currVal_31 = i1.ɵnov(_v, 57).ngClassPristine; var currVal_32 = i1.ɵnov(_v, 57).ngClassDirty; var currVal_33 = i1.ɵnov(_v, 57).ngClassValid; var currVal_34 = i1.ɵnov(_v, 57).ngClassInvalid; var currVal_35 = i1.ɵnov(_v, 57).ngClassPending; _ck(_v, 52, 0, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35); var currVal_38 = i1.ɵnov(_v, 68).ngClassUntouched; var currVal_39 = i1.ɵnov(_v, 68).ngClassTouched; var currVal_40 = i1.ɵnov(_v, 68).ngClassPristine; var currVal_41 = i1.ɵnov(_v, 68).ngClassDirty; var currVal_42 = i1.ɵnov(_v, 68).ngClassValid; var currVal_43 = i1.ɵnov(_v, 68).ngClassInvalid; var currVal_44 = i1.ɵnov(_v, 68).ngClassPending; _ck(_v, 63, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44); var currVal_47 = !_co.form.valid; _ck(_v, 71, 0, currVal_47); }); }
exports.View_ProductComponent_0 = View_ProductComponent_0;
function View_ProductComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-product", [], null, null, null, View_ProductComponent_0, RenderType_ProductComponent)), i1.ɵdid(1, 245760, null, 0, i11.ProductComponent, [i1.PLATFORM_ID, i12.HttpClient, i3.Router, i3.ActivatedRoute, i13.Title, i13.Meta, i14.UtilsService, i7.ProductsService, i15.CategoryService, i8.CartService, i6.StorageService, i16.AlertService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ProductComponent_Host_0 = View_ProductComponent_Host_0;
var ProductComponentNgFactory = i1.ɵccf("app-product", i11.ProductComponent, View_ProductComponent_Host_0, {}, {}, []);
exports.ProductComponentNgFactory = ProductComponentNgFactory;


/***/ }),

/***/ "./src/app/components/pages/product/product.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/product/product.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var platform_browser_2 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var alert_service_1 = __webpack_require__(/*! ../../../services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var utils_service_1 = __webpack_require__(/*! ../../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var category_service_1 = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var cart_service_1 = __webpack_require__(/*! ../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
var storage_service_1 = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var Subscription_1 = __webpack_require__(/*! rxjs/Subscription */ "rxjs/Subscription");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "rxjs/Observable");
__webpack_require__(/*! rxjs/add/observable/timer */ "rxjs/add/observable/timer");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var Related_Key = env_config_1.ENV.BASE_RELATED_PRODUCTS;
var ProductComponent = /** @class */ (function () {
    function ProductComponent(platformId, http, router, route, title, meta, utils, productService, categoryService, cartService, storageService, alertService) {
        var _this = this;
        this.platformId = platformId;
        this.http = http;
        this.router = router;
        this.route = route;
        this.title = title;
        this.meta = meta;
        this.utils = utils;
        this.productService = productService;
        this.categoryService = categoryService;
        this.cartService = cartService;
        this.storageService = storageService;
        this.alertService = alertService;
        this.mobile_view = false;
        this.desktop_view = false;
        this.productDeB = false;
        this.imageUrl = '';
        this.showAlert = false;
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            phone: new forms_1.FormControl('', forms_1.Validators.required),
            email: new forms_1.FormControl(''),
            product_id: new forms_1.FormControl(''),
            message: new forms_1.FormControl(''),
        });
        var checkProds;
        this.productService.productsData$
            .subscribe(function (data) {
            checkProds = data;
            if (checkProds === null) {
                _this._getProduct();
                _this.route.params.subscribe(function (params) {
                    _this.id = params['id'],
                        _this.productService
                            .getProductSeo$(_this.id)
                            .subscribe(function (res) {
                            _this.title.setTitle(res.title + ' :: Zuri Cart Kenya');
                            _this.meta.addTag({ name: 'description', content: res.seo.description });
                            _this.meta.addTag({ name: 'keywords', content: res.seo.keywords });
                            _this.meta.addTag({ property: 'og:url', content: "https://www.zuricart.co.ke/product/" + res.url });
                            _this.meta.addTag({ property: 'og:type', content: "website" });
                            _this.meta.addTag({ property: 'og:title', content: res.title });
                            _this.meta.addTag({ property: 'og:description', content: res.seo.description });
                            _this.meta.addTag({ property: 'og:image', content: "https://www.static.phonestablets.co.ke/img/products/" + res.images[0][0] });
                        });
                });
            }
            else {
                var prodArr_1;
                var catArr_1 = [];
                var cArr_1;
                _this.route.params.subscribe(function (params) {
                    _this.id = params['id'],
                        checkProds.forEach(function (prod) {
                            if (prod.url == _this.id) {
                                prodArr_1 = prod;
                            }
                        });
                    if (prodArr_1.length === 0) {
                        var sliced = _this.id.slice(0, 10).replace(/-/g, ' ');
                        var withNoDigits = sliced.replace(/[0-9]/g, '');
                        _this.router.navigate(['/search/' + withNoDigits]);
                    }
                    categoryService.categoryIData$.subscribe(function (data) {
                        cArr_1 = data;
                        cArr_1.forEach(function (c) {
                            if (c._id == prodArr_1.category) {
                                catArr_1.push({ "title": c.title, "link": c.url, "parent": c.parent });
                            }
                        });
                        if (catArr_1[0].parent != "") {
                            cArr_1.forEach(function (c) {
                                if (c._id == catArr_1[0].parent) {
                                    catArr_1.unshift({ "title": c.title, "link": c.url, "parent": c.parent });
                                }
                            });
                        }
                        if (catArr_1[0].parent != "") {
                            cArr_1.forEach(function (c) {
                                if (c._id == catArr_1[0].parent) {
                                    catArr_1.unshift({ "title": c.title, "link": c.url, "parent": c.parent });
                                }
                            });
                        }
                    });
                    _this.breadcrumb = catArr_1;
                    _this.productRelated = _this._getProductRelatedC(checkProds, prodArr_1.category);
                    _this.productInfo = prodArr_1;
                    _this.productImages = _this.productInfo.images;
                    _this.productTle = _this.productInfo.title;
                    _this.productSp = _this.productInfo.special_price;
                    _this.productPr = _this.productInfo.price;
                    _this.productBxC = _this.productInfo.descriptions.box_content;
                    _this.productDy = _this.productInfo.descriptions.youtube;
                    _this.productDf = _this.productInfo.descriptions.full;
                    _this.productDs = _this.productInfo.descriptions.short;
                    _this.productDe = _this.productInfo.desc_entity;
                    if (_this.productDe != '') {
                        _this.productDeB = true;
                    }
                    _this.productStock = _this.productInfo.stock;
                    _this.productId = prodArr_1._id;
                    // this.title.setTitle(prodArr.title +' :: Zuri Cart Kenya');
                    // this.meta.addTag({ name: 'description', content: prodArr.seo.description });
                    // this.meta.addTag({ name: 'keywords', content: prodArr.seo.keywords });
                    // this.meta.addTag({ name: 'og:url' , content:"https://www.zuricart.co.ke/product/"+prodArr.url  });
                    // this.meta.addTag({ name: 'og:type' , content:"website" });
                    // this.meta.addTag({ name: 'og:title' , content: prodArr.title });
                    // this.meta.addTag({ name: 'og:description' ,content: prodArr.seo.description });
                    // this.meta.addTag({ name: 'og:image' , content:"https://www.static.phonestablets.co.ke/img/products/"+prodArr.images[0][0] });
                });
            }
        });
        this.storage = this.storageService.get();
    }
    ProductComponent.prototype.addProductToCart = function (prodId, price) {
        this.setSuccessTimer();
        this.cartService.addItem(prodId, price);
    };
    ProductComponent.prototype.ngOnInit = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            if (window.screen.width >= 320 && window.screen.width <= 480) {
                this.mobile_view = true;
                this.desktop_view = false;
            }
            else {
                this.mobile_view = false;
                this.desktop_view = true;
            }
        }
        if (common_1.isPlatformServer(this.platformId)) {
            this.mobile_view = false;
            this.desktop_view = true;
        }
        this.imageUrl = IMG_URL;
    };
    ProductComponent.prototype.onSubmit = function (id) {
        var name = this.form.value.name;
        var phone = this.form.value.phone;
        var email = this.form.value.email;
        var product_id = this.productId;
        var message = this.form.value.message;
        // this.http.post(`${ENV.BASE_API}contact-seller`,
        //    {name: name, phone: phone, email: email,product_id:product_id,message:message})
        //    .subscribe((data) => {
        //       this.router.navigate(['/product/'+this.id]);
        //    });
        document.getElementById("exampleModalLong").classList.remove('show');
        document.getElementById(".icon-rollover-color").style.display = "none";
    };
    ProductComponent.prototype._getProduct = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this._checkProduct(_this.id);
        });
    };
    ProductComponent.prototype._checkProduct = function (id) {
        var _this = this;
        this.productsCSub = this.productService
            .getProductInfoCount$(id)
            .subscribe(function (res) {
            if (parseInt(res.message) === 0) {
                var sliced = _this.id.slice(0, 10).replace(/-/g, ' ');
                var withNoDigits = sliced.replace(/[0-9]/g, '');
                //alert(withNoDigits);
                _this.router.navigate(['/search/' + withNoDigits]);
            }
            else {
                _this._getProductInfo(_this.id);
                _this._getProductRelated(_this.id);
                //this._getProductEntity(this.id)
            }
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
        });
    };
    ProductComponent.prototype._getProductInfo = function (id) {
        var _this = this;
        this.loading = true;
        // Get future, public events
        this.productsSub = this.productService
            .getProductInfo$(id)
            .subscribe(function (res) {
            _this.productInfo = res;
            _this.productImages = _this.productInfo.images;
            _this.productTle = _this.productInfo.title;
            _this.productSp = _this.productInfo.special_price;
            _this.productPr = _this.productInfo.price;
            _this.productBxC = _this.productInfo.descriptions.box_content;
            _this.productDy = _this.productInfo.descriptions.youtube;
            _this.productDf = _this.productInfo.descriptions.full;
            _this.productDs = _this.productInfo.descriptions.short;
            _this.productDe = _this.productInfo.desc_entity;
            if (_this.productDe != '') {
                _this.productDeB = true;
            }
            _this.productStock = _this.productInfo.stock;
            _this.loading = false;
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
        });
    };
    ProductComponent.prototype._getProductRelated = function (id) {
        var _this = this;
        // Get future, public events
        this.productsRSub = this.productService
            .getProductRelated$(id)
            .subscribe(function (res) {
            _this.productRelated = res.prodArr;
            _this.productE = res.productE;
            _this.productAE = res.ae;
            _this.loading = false;
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
        });
    };
    ProductComponent.prototype._getProductRelatedC = function (arr, cat) {
        var prodArr = [];
        arr.forEach(function (prod) {
            if (prod.category == cat) {
                prodArr.push(prod);
            }
        });
        var shuffled = prodArr.sort(function () { return .5 - Math.random(); });
        return shuffled.slice(0, 6);
    };
    // private _getProductViewed(id: string) {
    //   const storedProducts = this.storage.getItem(Related_Key);
    //   if(storedProducts){
    //     this.productViewed = JSON.parse(storedProducts);
    //   }
    // }
    // private _addProductViewed(id: string) {
    //   const storedProducts = this.storage.getItem(Related_Key);
    //   const productStored = JSON.parse(storedProducts);
    //   if(!productStored.includes(id)){
    //     // productStored.push(id);
    //     this.productViewTest = "Yes";
    //     // this.storage.setItem(Related_Key, JSON.stringify(productStored));
    //   } else{
    //     this.productViewTest = "";
    //   }
    // }
    ProductComponent.prototype.setSuccessTimer = function () {
        var _this = this;
        // set showloader to true to show loading div on view
        this.showAlert = true;
        this.timer = Observable_1.Observable.timer(500000); // 5000 millisecond means 5 seconds
        this.alertSub = this.timer.subscribe(function () {
            // set showloader to false to hide loading div from view after 5 seconds
            _this.showAlert = false;
        });
    };
    ProductComponent.prototype.hideAlert = function () {
        this.showAlert = false;
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
        if (this.alertSub && this.alertSub instanceof Subscription_1.Subscription) {
            this.alertSub.unsubscribe();
        }
        if (this.productsESub) {
            this.productsESub.unsubscribe();
        }
    };
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;


/***/ }),

/***/ "./src/app/components/pages/product/product.module.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/components/pages/product/product.module.ngfactory.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./product.module */ "./src/app/components/pages/product/product.module.ts");
var i2 = __webpack_require__(/*! ./product.component.ngfactory */ "./src/app/components/pages/product/product.component.ngfactory.js");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ../../partials/product-cart/product-cart.module */ "./src/app/components/partials/product-cart/product-cart.module.ts");
var i7 = __webpack_require__(/*! ./product.component */ "./src/app/components/pages/product/product.component.ts");
var ProductModuleNgFactory = i0.ɵcmf(i1.ProductModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ProductComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i4.ɵangular_packages_forms_forms_i, i4.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(4608, i4.FormBuilder, i4.FormBuilder, []), i0.ɵmpd(1073742336, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(1073742336, i5.RouterModule, i5.RouterModule, [[2, i5.ɵangular_packages_router_router_a], [2, i5.Router]]), i0.ɵmpd(1073742336, i4.ɵangular_packages_forms_forms_bb, i4.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i4.FormsModule, i4.FormsModule, []), i0.ɵmpd(1073742336, i4.ReactiveFormsModule, i4.ReactiveFormsModule, []), i0.ɵmpd(1073742336, i6.ProductCartModule, i6.ProductCartModule, []), i0.ɵmpd(1073742336, i1.ProductModule, i1.ProductModule, []), i0.ɵmpd(1024, i5.ROUTES, function () { return [[{ path: ":id", component: i7.ProductComponent, pathMatch: "full" }]]; }, [])]); });
exports.ProductModuleNgFactory = ProductModuleNgFactory;


/***/ }),

/***/ "./src/app/components/pages/product/product.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/pages/product/product.module.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
exports.ProductModule = ProductModule;


/***/ }),

/***/ "./src/app/components/pages/products/brand-category/brand-category.component.css.shim.ngstyle.js":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/pages/products/brand-category/brand-category.component.css.shim.ngstyle.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}.category-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.category-brand[_ngcontent-%COMP%]{font-size:17px;text-transform:capitalize}.category-filter[_ngcontent-%COMP%]{background-color:#fff;padding:10px;border-radius:5px}.category-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:12px;text-decoration:none;color:#666}.category-name-wrapper[_ngcontent-%COMP%]{padding:0 15px 10px;clear:both;font-size:22px}.category-name-wrapper[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%]{color:#5a5a59;float:left;margin-top:10px;font-size:23px;width:50%}.category-name-wrapper[_ngcontent-%COMP%]   .category-count[_ngcontent-%COMP%]{color:#999;margin-left:5px;font-size:13px;vertical-align:2px}.category-name-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{float:left;width:50%;text-align:right}.category-name-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #DDD;width:200px;font-size:14px;color:#8d8b8d;padding:3px 5px}.category-sort[_ngcontent-%COMP%]{border-bottom:2px solid #34b1a8}.category-sort[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%]{display:inline-block;margin:0 8px}.category-sort[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#FFF;border:1px solid #706e6f;color:#706E6F;border-radius:5px;padding:3px 10px}.item-header[_ngcontent-%COMP%]{margin:10px 0;border-bottom:1px solid #ddd;color:#6f6e6f}.item-header[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{padding-left:10px;float:left;font-weight:600;text-transform:capitalize}.item-body[_ngcontent-%COMP%]{max-height:180px;overflow-y:scroll}.item-checkbox[_ngcontent-%COMP%], .item-count[_ngcontent-%COMP%], .item-text[_ngcontent-%COMP%]{float:left}@media (min-width:320px) and (max-width:480px){.category-filter[_ngcontent-%COMP%], .category-name-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{display:none}#catgory-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:100%;padding:0}#catgory-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]{padding:0}.category-header[_ngcontent-%COMP%]{background-color:#039f9b;height:auto}.category-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.category-products[_ngcontent-%COMP%]{width:100%;padding:0}.category-products[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{width:100%;margin:0}.category-products[_ngcontent-%COMP%]   .col-xs-6[_ngcontent-%COMP%]{width:50%;float:left;border:1px solid #ddd;padding:0}.category-products[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{max-width:350px;overflow:scroll}.category-name-wrapper[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%]{color:#5a5a59;float:none;margin-top:10px;font-size:20px;width:100%;padding-left:5px}}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/pages/products/brand-category/brand-category.component.ngfactory.js":
/*!************************************************************************************************!*\
  !*** ./src/app/components/pages/products/brand-category/brand-category.component.ngfactory.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./brand-category.component.css.shim.ngstyle */ "./src/app/components/pages/products/brand-category/brand-category.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ../../../../core/loading.component.ngfactory */ "./src/app/core/loading.component.ngfactory.js");
var i5 = __webpack_require__(/*! ../../../../core/loading.component */ "./src/app/core/loading.component.ts");
var i6 = __webpack_require__(/*! ./brand-category.component */ "./src/app/components/pages/products/brand-category/brand-category.component.ts");
var i7 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i8 = __webpack_require__(/*! ../../../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
var i9 = __webpack_require__(/*! ../../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var i10 = __webpack_require__(/*! ../../../../services/pager/pager.service */ "./src/app/services/pager/pager.service.ts");
var i11 = __webpack_require__(/*! ../../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var i12 = __webpack_require__(/*! ../../../../services/filter/filter-sort.service */ "./src/app/services/filter/filter-sort.service.ts");
var styles_BrandCategoryComponent = [i0.styles];
var RenderType_BrandCategoryComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_BrandCategoryComponent, data: {} });
exports.RenderType_BrandCategoryComponent = RenderType_BrandCategoryComponent;
function View_BrandCategoryComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(3, null, ["", ""]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/products/", _v.context.$implicit.url, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_3); }); }
function View_BrandCategoryComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "div", [["class", "category-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(4, 0, null, null, 0, "img", [["style", "width:100%"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = i1.ɵinlineInterpolate(1, "", _co.topAdLink, ""); _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/category-top/", _co.topAdImg, ""); var currVal_4 = i1.ɵinlineInterpolate(1, "", _co.topAdTitle, ""); _ck(_v, 4, 0, currVal_3, currVal_4); }); }
function View_BrandCategoryComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-loading", [], null, null, null, i4.View_LoadingComponent_0, i4.RenderType_LoadingComponent)), i1.ɵdid(1, 49152, null, 0, i5.LoadingComponent, [], null, null)], null, null); }
function View_BrandCategoryComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.price, 0)); _ck(_v, 1, 0, currVal_0); }); }
function View_BrandCategoryComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "discount"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, [" Ksh. ", " "])), i1.ɵppd(5, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.special_price, 0)); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 4, 0, _ck(_v, 5, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.price, 0)); _ck(_v, 4, 0, currVal_1); }); }
function View_BrandCategoryComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "ribbon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Offer"]))], null, null); }
function View_BrandCategoryComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 17, "div", [["class", "col-md-3 col-xs-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 16, "div", [["class", "product-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 15, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(4, 0, null, null, 13, "div", [["class", "product-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "product-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 8, "div", [["class", "product-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "div", [["class", "prod-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, [" ", " "])), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandCategoryComponent_8)), i1.ɵdid(12, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandCategoryComponent_9)), i1.ɵdid(14, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 0, "div", [["class", "prod-rate"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandCategoryComponent_10)), i1.ɵdid(17, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/product/", _v.context.$implicit.url, ""); _ck(_v, 3, 0, currVal_2); var currVal_6 = (_v.context.$implicit.special_price == 0); _ck(_v, 12, 0, currVal_6); var currVal_7 = (_v.context.$implicit.special_price != 0); _ck(_v, 14, 0, currVal_7); var currVal_8 = (_v.context.$implicit.special_price != 0); _ck(_v, 17, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit.images[0][0], ""); var currVal_4 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.title, ""); _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_5 = _v.context.$implicit.title; _ck(_v, 9, 0, currVal_5); }); }
function View_BrandCategoryComponent_12(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(2, { active: 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(4, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "page-item"; var currVal_1 = _ck(_v, 2, 0, (_co.pager.currentPage === _v.context.$implicit)); _ck(_v, 1, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 4, 0, currVal_2); }); }
function View_BrandCategoryComponent_11(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 22, "ul", [["class", "pagination"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(2, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(3, { disabled: 0 }), (_l()(), i1.ɵeld(4, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["First"])), (_l()(), i1.ɵeld(6, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(7, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(8, { disabled: 0 }), (_l()(), i1.ɵeld(9, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage((_co.pager.currentPage - 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Previous"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandCategoryComponent_12)), i1.ɵdid(12, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(13, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(14, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(15, { disabled: 0 }), (_l()(), i1.ɵeld(16, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage((_co.pager.currentPage + 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Next"])), (_l()(), i1.ɵeld(18, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(19, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(20, { disabled: 0 }), (_l()(), i1.ɵeld(21, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(_co.pager.totalPages) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Last"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "page-item"; var currVal_1 = _ck(_v, 3, 0, (_co.pager.currentPage === 1)); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = "page-item"; var currVal_3 = _ck(_v, 8, 0, (_co.pager.currentPage === 1)); _ck(_v, 7, 0, currVal_2, currVal_3); var currVal_4 = _co.pager.pages; _ck(_v, 12, 0, currVal_4); var currVal_5 = "page-item"; var currVal_6 = _ck(_v, 15, 0, (_co.pager.currentPage === _co.pager.totalPages)); _ck(_v, 14, 0, currVal_5, currVal_6); var currVal_7 = "page-item"; var currVal_8 = _ck(_v, 20, 0, (_co.pager.currentPage === _co.pager.totalPages)); _ck(_v, 19, 0, currVal_7, currVal_8); }, null); }
function View_BrandCategoryComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandCategoryComponent_7)), i1.ɵdid(2, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 3, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 2, "nav", [["aria-label", "Page navigation example"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandCategoryComponent_11)), i1.ɵdid(6, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pagedItems; _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.pager.pages && _co.pager.pages.length); _ck(_v, 6, 0, currVal_1); }, null); }
function View_BrandCategoryComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandCategoryComponent_6)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.products.length; _ck(_v, 1, 0, currVal_0); }, null); }
function View_BrandCategoryComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandCategoryComponent_5)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.products; _ck(_v, 1, 0, currVal_0); }, null); }
function View_BrandCategoryComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i3.DecimalPipe, [i1.LOCALE_ID]), (_l()(), i1.ɵeld(1, 0, null, null, 31, "div", [["id", "catgory-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 30, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 29, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 10, "div", [["class", "col-md-3 category-filter"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandCategoryComponent_1)), i1.ɵdid(7, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(8, 0, null, null, 6, "div", [["class", "filter-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 5, "div", [["class", "filter-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "item-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 2, "div", [["class", "item-header clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "div", [["class", "txt"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Brands "])), (_l()(), i1.ɵeld(14, 0, null, null, 0, "div", [["class", "item-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 17, "div", [["class", "col-md-9 category-products"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 16, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandCategoryComponent_2)), i1.ɵdid(18, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(19, 0, null, null, 8, "div", [["class", "col-md-12 category-name-wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 5, "h1", [["category", ""], ["class", "category-name"], ["itemprop", "name"]], null, null, null, null, null)), (_l()(), i1.ɵted(21, null, [" ", " :: "])), (_l()(), i1.ɵeld(22, 0, null, null, 1, "span", [["class", "category-brand"]], null, null, null, null, null)), (_l()(), i1.ɵted(23, null, ["", ""])), (_l()(), i1.ɵeld(24, 0, null, null, 1, "span", [["class", "category-count"]], null, null, null, null, null)), (_l()(), i1.ɵted(25, null, ["( ", " Items)"])), (_l()(), i1.ɵeld(26, 0, null, null, 1, "div", [["class", "search"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 0, "input", [["placeholder", "search text goes here"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 0, "div", [["class", "col-md-12 category-sort"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandCategoryComponent_3)), i1.ɵdid(30, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BrandCategoryComponent_4)), i1.ɵdid(32, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mainMenu; _ck(_v, 7, 0, currVal_0); var currVal_1 = (_co.topAdImg != ""); _ck(_v, 18, 0, currVal_1); var currVal_5 = _co.loading; _ck(_v, 30, 0, currVal_5); var currVal_6 = _co.utils.isLoaded(_co.loading); _ck(_v, 32, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.topAdTitle; _ck(_v, 21, 0, currVal_2); var currVal_3 = _co.brand; _ck(_v, 23, 0, currVal_3); var currVal_4 = _co.count; _ck(_v, 25, 0, currVal_4); }); }
exports.View_BrandCategoryComponent_0 = View_BrandCategoryComponent_0;
function View_BrandCategoryComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-brand-category", [], null, null, null, View_BrandCategoryComponent_0, RenderType_BrandCategoryComponent)), i1.ɵdid(1, 245760, null, 0, i6.BrandCategoryComponent, [i2.ActivatedRoute, i7.Title, i7.Meta, i8.UtilsService, i9.ProductsService, i10.PagerService, i11.CategoryService, i12.FilterSortService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_BrandCategoryComponent_Host_0 = View_BrandCategoryComponent_Host_0;
var BrandCategoryComponentNgFactory = i1.ɵccf("app-brand-category", i6.BrandCategoryComponent, View_BrandCategoryComponent_Host_0, {}, {}, []);
exports.BrandCategoryComponentNgFactory = BrandCategoryComponentNgFactory;


/***/ }),

/***/ "./src/app/components/pages/products/brand-category/brand-category.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/pages/products/brand-category/brand-category.component.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var platform_browser_2 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var products_service_1 = __webpack_require__(/*! ../../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var utils_service_1 = __webpack_require__(/*! ../../../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
var filter_sort_service_1 = __webpack_require__(/*! ../../../../services/filter/filter-sort.service */ "./src/app/services/filter/filter-sort.service.ts");
var category_service_1 = __webpack_require__(/*! ../../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var pager_service_1 = __webpack_require__(/*! ../../../../services/pager/pager.service */ "./src/app/services/pager/pager.service.ts");
var env_config_1 = __webpack_require__(/*! ../../../../core/env.config */ "./src/app/core/env.config.ts");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var BrandCategoryComponent = /** @class */ (function () {
    function BrandCategoryComponent(route, title, meta, utils, productService, pagerService, categoryService, fs) {
        var _this = this;
        this.route = route;
        this.title = title;
        this.meta = meta;
        this.utils = utils;
        this.productService = productService;
        this.pagerService = pagerService;
        this.categoryService = categoryService;
        this.fs = fs;
        this.pageTitle = '';
        this.imageUrl = '';
        this.pager = {};
        this.searchTerm = '';
        this.route.params.subscribe(function (params) {
            _this.id = params['category'],
                _this.brand = params['brand'];
            _this.productService
                .getCategorySeo$(_this.id)
                .subscribe(function (res) {
                // this.title.setTitle(res.title +' :: Phones Tablets Kenya');
                // this.meta.addTag({ name: 'description', content: res.seo.description });
                // this.meta.addTag({ name: 'keywords', content: res.seo.keywords });
            }, function (err) {
                console.error(err);
                _this.error = true;
            });
        });
    }
    BrandCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['category'];
            _this.brand = params['brand'];
            _this.title.setTitle(_this.pageTitle);
            _this._getCategoryInfo(_this.id);
            _this._getTopMenu();
            _this.productService
                .getBrand$(_this.brand)
                .subscribe(function (res) {
                _this.brandInfo = res._id;
                _this._getProducts(_this.id, _this.brandInfo);
            }, function (err) {
                console.error(err);
            });
        });
        this.imageUrl = IMG_URL;
    };
    BrandCategoryComponent.prototype._getCategoryInfo = function (id) {
        var _this = this;
        this.categorySub = this.productService
            .getCategoryInfo$(id)
            .subscribe(function (res) {
            _this.category = res;
            _this.category1 = res;
            _this.topAdImg = _this.category1.top_ad.img;
            _this.topAdLink = _this.category1.top_ad.link;
            _this.topAdTitle = _this.category1.title;
            _this.topAdFooter = _this.category1.footer_seo;
            _this.loading = false;
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
        });
    };
    BrandCategoryComponent.prototype._getProducts = function (id, brand) {
        var _this = this;
        this.loading = true;
        // Get future, public events
        this.productsSub = this.productService
            .getCategoryProductsBrand$(id, brand)
            .subscribe(function (res) {
            _this.Mainproducts = res;
            _this.products = res;
            _this.filteredproducts = res;
            _this.count = res.length;
            _this.loading = false;
            _this.setPage(1);
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
        });
    };
    BrandCategoryComponent.prototype._getBrands = function (brand) {
        this.brandSub = this.productService
            .getBrand$(brand)
            .subscribe(function (res) {
            return res;
        }, function (err) {
            console.error(err);
        });
    };
    BrandCategoryComponent.prototype._getTopMenu = function () {
        var _this = this;
        this.menuSub = this.categoryService.categoryData$
            .subscribe(function (res) {
            _this.mainMenu = res;
        }, function (err) {
            console.error(err);
            // this.error = true;
        });
    };
    BrandCategoryComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.products.length, page);
        // get current page of items
        this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    BrandCategoryComponent.prototype.ngOnDestroy = function () {
        if (this.categorySub) {
            this.categorySub.unsubscribe();
        }
        if (this.productsSub) {
            this.productsSub.unsubscribe();
        }
        if (this.menuSub) {
            this.menuSub.unsubscribe();
        }
        if (this.brandSub) {
            this.brandSub.unsubscribe();
        }
    };
    return BrandCategoryComponent;
}());
exports.BrandCategoryComponent = BrandCategoryComponent;


/***/ }),

/***/ "./src/app/components/pages/products/products.component.css.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/components/pages/products/products.component.css.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["#catgory-page[_ngcontent-%COMP%]{\n    padding-top: 63px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none\n}\n.category-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%\n}\n.category-filter[_ngcontent-%COMP%] {\n    background-color: #fff;\n    padding: 10px;\n    border-radius: 5px\n}\n.category-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #666;\n    text-decoration: none\n}\n.childOne[_ngcontent-%COMP%] {\n    padding-left: 10px\n}\n.childTwo[_ngcontent-%COMP%] {\n    padding-left: 15px\n}\n.category-name-wrapper[_ngcontent-%COMP%] {\n    padding: 0 15px 10px;\n    clear: both;\n    font-size: 22px\n}\n.category-name-wrapper[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%] {\n    color: #5a5a59;\n    float: left;\n    margin-top: 10px;\n    font-size: 23px;\n    width: 50%\n}\n.category-name-wrapper[_ngcontent-%COMP%]   .category-count[_ngcontent-%COMP%] {\n    color: #999;\n    margin-left: 5px;\n    font-size: 13px;\n    vertical-align: 2px\n}\n.category-name-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    float: left;\n    width: 50%;\n    text-align: right\n}\n.category-name-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: 1px solid #DDD;\n    width: 200px;\n    font-size: 14px;\n    color: #8d8b8d;\n    padding: 3px 5px\n}\n.category-sort[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #424d81;\n}\n.category-sort[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 0 8px\n}\n.category-sort[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #FFF;\n    border: 1px solid #706e6f;\n    color: #706E6F;\n    border-radius: 5px;\n    padding: 3px 10px\n}\n.item-header[_ngcontent-%COMP%] {\n    margin: 10px 0;\n    border-bottom: 1px solid #ddd;\n    color: #6f6e6f\n}\n.item-header[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    float: left;\n    font-weight: 600;\n    text-transform: capitalize\n}\n.item-body[_ngcontent-%COMP%] {\n    max-height: 180px;\n    overflow-y: scroll\n}\n.item-checkbox[_ngcontent-%COMP%], .item-count[_ngcontent-%COMP%], .item-text[_ngcontent-%COMP%] {\n    float: left\n}\n.category-products[_ngcontent-%COMP%]{\n    background-color: #FFF;\n}\n@media (min-width:320px) and (max-width:480px) {\n    #catgory-page[_ngcontent-%COMP%]{\n        padding-top: 0px;\n    }\n    #catgory-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n        width: 100%;\n        padding: 0\n    }\n    #catgory-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%] {\n        padding: 0\n    }\n    .category-filter[_ngcontent-%COMP%] {\n        display: none\n    }\n    .category-header[_ngcontent-%COMP%] {\n        background-color: #039f9b;\n        height: auto\n    }\n    .category-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 100%\n    }\n    .category-products[_ngcontent-%COMP%] {\n        width: 100%;\n        padding: 0\n    }\n    .category-products[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0\n    }\n    .category-products[_ngcontent-%COMP%]   .col-xs-6[_ngcontent-%COMP%] {\n        width: 50%;\n        float: left;\n        border: 1px solid #ddd;\n        padding: 0\n    }\n    .category-products[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n        max-width: 350px;\n        overflow: scroll\n    }\n    .category-name-wrapper[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%] {\n        color: #5a5a59;\n        float: left;\n        margin-top: 10px;\n        font-size: 20px;\n        width: 50%;\n        padding-left: 5px\n    }\n    .category-name-wrapper[_ngcontent-%COMP%]   .category-count[_ngcontent-%COMP%] {\n        margin-left: 0;\n        display: block\n    }\n    .category-name-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n        display: block;\n        float: left;\n        width: 50%\n    }\n    .category-name-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        border: 1px solid #DDD;\n        width: 90%;\n        font-size: 14px;\n        color: #8d8b8d;\n        padding: 3px 5px;\n        margin-right: 5px;\n        margin-top: 25px;\n        border-radius: 4px\n    }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/pages/products/products.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/products/products.component.ngfactory.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./products.component.css.shim.ngstyle */ "./src/app/components/pages/products/products.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ../../../core/loading.component.ngfactory */ "./src/app/core/loading.component.ngfactory.js");
var i4 = __webpack_require__(/*! ../../../core/loading.component */ "./src/app/core/loading.component.ts");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ./products.component */ "./src/app/components/pages/products/products.component.ts");
var i7 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i8 = __webpack_require__(/*! ../../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
var i9 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var i10 = __webpack_require__(/*! ../../../services/pager/pager.service */ "./src/app/services/pager/pager.service.ts");
var i11 = __webpack_require__(/*! ../../../services/filter/filter-sort.service */ "./src/app/services/filter/filter-sort.service.ts");
var i12 = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var styles_ProductsComponent = [i0.styles];
var RenderType_ProductsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ProductsComponent, data: {} });
exports.RenderType_ProductsComponent = RenderType_ProductsComponent;
function View_ProductsComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "item-strip clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "input", [["name", "brand[]"], ["type", "checkbox"]], [[8, "id", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.filterBrands(_v.context.$implicit._id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "div", [["class", "item-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, [" ", " "])), (_l()(), i1.ɵeld(6, 0, null, null, 0, "div", [["class", "item-count"]], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "item-checkbox  ", _v.context.$implicit._id, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit._id, ""); _ck(_v, 2, 0, currVal_1); var currVal_2 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit._id, ""); _ck(_v, 3, 0, currVal_2); var currVal_3 = _v.context.$implicit.title; _ck(_v, 5, 0, currVal_3); }); }
function View_ProductsComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "div", [["class", "sort-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "button", [["name", "button"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeFilterBrands(_v.context.$implicit._id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(2, null, [" ", " X "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_0); }); }
function View_ProductsComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_3)), i1.ɵdid(1, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.brandsresult; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ProductsComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-loading", [], null, null, null, i3.View_LoadingComponent_0, i3.RenderType_LoadingComponent)), i1.ɵdid(1, 49152, null, 0, i4.LoadingComponent, [], null, null)], null, null); }
function View_ProductsComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.price, 0)); _ck(_v, 1, 0, currVal_0); }); }
function View_ProductsComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "discount"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, [" Ksh. ", " "])), i1.ɵppd(5, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.special_price, 0)); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 4, 0, _ck(_v, 5, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.price, 0)); _ck(_v, 4, 0, currVal_1); }); }
function View_ProductsComponent_11(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "ribbon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Offer"]))], null, null); }
function View_ProductsComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 17, "div", [["class", "col-md-3 col-xs-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 16, "div", [["class", "product-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 15, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i5.RouterLinkWithHref, [i5.Router, i5.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(4, 0, null, null, 13, "div", [["class", "product-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "product-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 8, "div", [["class", "product-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "div", [["class", "prod-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, [" ", " "])), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_9)), i1.ɵdid(12, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_10)), i1.ɵdid(14, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 0, "div", [["class", "prod-rate"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_11)), i1.ɵdid(17, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/product/", _v.context.$implicit.url, ""); _ck(_v, 3, 0, currVal_2); var currVal_6 = (_v.context.$implicit.special_price == 0); _ck(_v, 12, 0, currVal_6); var currVal_7 = (_v.context.$implicit.special_price != 0); _ck(_v, 14, 0, currVal_7); var currVal_8 = (_v.context.$implicit.special_price != 0); _ck(_v, 17, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit.images[0][0], ""); var currVal_4 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.title, ""); _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_5 = _v.context.$implicit.title; _ck(_v, 9, 0, currVal_5); }); }
function View_ProductsComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_8)), i1.ɵdid(1, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.products; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ProductsComponent_14(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.price, 0)); _ck(_v, 1, 0, currVal_0); }); }
function View_ProductsComponent_15(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "discount"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, [" Ksh. ", " "])), i1.ɵppd(5, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.special_price, 0)); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 4, 0, _ck(_v, 5, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent, 0), _v.parent.context.$implicit.price, 0)); _ck(_v, 4, 0, currVal_1); }); }
function View_ProductsComponent_16(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "ribbon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Offer"]))], null, null); }
function View_ProductsComponent_13(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 17, "div", [["class", "col-md-3 col-xs-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 16, "div", [["class", "product-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 15, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i5.RouterLinkWithHref, [i5.Router, i5.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(4, 0, null, null, 13, "div", [["class", "product-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "product-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 8, "div", [["class", "product-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "div", [["class", "prod-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, [" ", " "])), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_14)), i1.ɵdid(12, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_15)), i1.ɵdid(14, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 0, "div", [["class", "prod-rate"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_16)), i1.ɵdid(17, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/product/", _v.context.$implicit.url, ""); _ck(_v, 3, 0, currVal_2); var currVal_6 = (_v.context.$implicit.special_price == 0); _ck(_v, 12, 0, currVal_6); var currVal_7 = (_v.context.$implicit.special_price != 0); _ck(_v, 14, 0, currVal_7); var currVal_8 = (_v.context.$implicit.special_price != 0); _ck(_v, 17, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit.images[0][0], ""); var currVal_4 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.title, ""); _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_5 = _v.context.$implicit.title; _ck(_v, 9, 0, currVal_5); }); }
function View_ProductsComponent_18(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(2, { active: 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(4, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "page-item"; var currVal_1 = _ck(_v, 2, 0, (_co.pager.currentPage === _v.context.$implicit)); _ck(_v, 1, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 4, 0, currVal_2); }); }
function View_ProductsComponent_17(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 22, "ul", [["class", "pagination"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(2, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(3, { disabled: 0 }), (_l()(), i1.ɵeld(4, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["First"])), (_l()(), i1.ɵeld(6, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(7, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(8, { disabled: 0 }), (_l()(), i1.ɵeld(9, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage((_co.pager.currentPage - 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Previous"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_18)), i1.ɵdid(12, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(13, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(14, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(15, { disabled: 0 }), (_l()(), i1.ɵeld(16, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage((_co.pager.currentPage + 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Next"])), (_l()(), i1.ɵeld(18, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(19, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(20, { disabled: 0 }), (_l()(), i1.ɵeld(21, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(_co.pager.totalPages) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Last"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "page-item"; var currVal_1 = _ck(_v, 3, 0, (_co.pager.currentPage === 1)); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = "page-item"; var currVal_3 = _ck(_v, 8, 0, (_co.pager.currentPage === 1)); _ck(_v, 7, 0, currVal_2, currVal_3); var currVal_4 = _co.pager.pages; _ck(_v, 12, 0, currVal_4); var currVal_5 = "page-item"; var currVal_6 = _ck(_v, 15, 0, (_co.pager.currentPage === _co.pager.totalPages)); _ck(_v, 14, 0, currVal_5, currVal_6); var currVal_7 = "page-item"; var currVal_8 = _ck(_v, 20, 0, (_co.pager.currentPage === _co.pager.totalPages)); _ck(_v, 19, 0, currVal_7, currVal_8); }, null); }
function View_ProductsComponent_12(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_13)), i1.ɵdid(1, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(2, 0, null, null, 3, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "nav", [["aria-label", "Page navigation example"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_17)), i1.ɵdid(5, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pagedItems; _ck(_v, 1, 0, currVal_0); var currVal_1 = (_co.pager.pages && _co.pager.pages.length); _ck(_v, 5, 0, currVal_1); }, null); }
function View_ProductsComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_7)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_12)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.pagedItems == ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.pagedItems != ""); _ck(_v, 4, 0, currVal_1); }, null); }
function View_ProductsComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_6)), i1.ɵdid(1, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.products; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ProductsComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i2.DecimalPipe, [i1.LOCALE_ID]), (_l()(), i1.ɵeld(1, 0, null, null, 31, "div", [["id", "catgory-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 30, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 29, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 9, "div", [["class", "col-md-3 category-filter"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 8, "div", [["class", "filter-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 7, "div", [["class", "filter-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 6, "div", [["class", "item-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 2, "div", [["class", "item-header clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 1, "div", [["class", "txt"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Brands "])), (_l()(), i1.ɵeld(11, 0, null, null, 2, "div", [["class", "item-body"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_1)), i1.ɵdid(13, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(14, 0, null, null, 18, "div", [["class", "col-md-9 category-products"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 17, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 6, "div", [["class", "col-md-12 category-name-wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 3, "h1", [["category", ""], ["class", "category-name"], ["itemprop", "name"]], null, null, null, null, null)), (_l()(), i1.ɵted(18, null, [" ", ""])), (_l()(), i1.ɵeld(19, 0, null, null, 1, "span", [["class", "category-count"]], null, null, null, null, null)), (_l()(), i1.ɵted(20, null, ["( ", " Items)"])), (_l()(), i1.ɵeld(21, 0, null, null, 1, "div", [["class", "search"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 0, "input", [["placeholder", "search text goes here"]], null, [[null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (_co.searchList($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 4, "div", [["class", "col-md-12 category-sort"]], null, null, null, null, null)), (_l()(), i1.ɵted(24, null, ["", " "])), i1.ɵpid(0, i2.JsonPipe, []), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_2)), i1.ɵdid(27, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_4)), i1.ɵdid(29, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductsComponent_5)), i1.ɵdid(31, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(32, 0, null, null, 0, "div", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.brands; _ck(_v, 13, 0, currVal_0); var currVal_4 = _co.brandsresult.length; _ck(_v, 27, 0, currVal_4); var currVal_5 = _co.loading; _ck(_v, 29, 0, currVal_5); var currVal_6 = _co.utils.isLoaded(_co.loading); _ck(_v, 31, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.topAdTitle; _ck(_v, 18, 0, currVal_1); var currVal_2 = _co.count; _ck(_v, 20, 0, currVal_2); var currVal_3 = i1.ɵunv(_v, 24, 0, i1.ɵnov(_v, 25).transform(_co.filterArr)); _ck(_v, 24, 0, currVal_3); }); }
exports.View_ProductsComponent_0 = View_ProductsComponent_0;
function View_ProductsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-products", [], null, null, null, View_ProductsComponent_0, RenderType_ProductsComponent)), i1.ɵdid(1, 245760, null, 0, i6.ProductsComponent, [i5.ActivatedRoute, i7.Title, i7.Meta, i8.UtilsService, i9.ProductsService, i10.PagerService, i11.FilterSortService, i12.CategoryService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ProductsComponent_Host_0 = View_ProductsComponent_Host_0;
var ProductsComponentNgFactory = i1.ɵccf("app-products", i6.ProductsComponent, View_ProductsComponent_Host_0, {}, {}, []);
exports.ProductsComponentNgFactory = ProductsComponentNgFactory;


/***/ }),

/***/ "./src/app/components/pages/products/products.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/products/products.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var platform_browser_2 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var utils_service_1 = __webpack_require__(/*! ../../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
var filter_sort_service_1 = __webpack_require__(/*! ../../../services/filter/filter-sort.service */ "./src/app/services/filter/filter-sort.service.ts");
var pager_service_1 = __webpack_require__(/*! ../../../services/pager/pager.service */ "./src/app/services/pager/pager.service.ts");
var category_service_1 = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(route, title, meta, utils, productService, pagerService, fs, categoryService) {
        var _this = this;
        this.route = route;
        this.title = title;
        this.meta = meta;
        this.utils = utils;
        this.productService = productService;
        this.pagerService = pagerService;
        this.fs = fs;
        this.categoryService = categoryService;
        this.pageTitle = '';
        this.imageUrl = '';
        this.pager = {};
        this.searchTerm = '';
        var menu;
        this.route.params.subscribe(function (params) {
            _this.id = params['category'];
            _this.productService
                .getCategorySeo$(_this.id)
                .subscribe(function (res) {
                if (res.seo.title == '') {
                    // this.title.setTitle(res.title +' :: Phones Tablets Kenya');
                }
                else {
                    // this.title.setTitle(res.seo.title);
                }
                // this.meta.addTag({ name: 'description', content: res.seo.description });
                // this.meta.addTag({ name: 'keywords', content: res.seo.keywords });
            }, function (err) {
                console.error(err);
                _this.error = true;
            });
            categoryService.categoryIData$.subscribe(function (data) {
                menu = data;
                if (menu == null) {
                    _this._getCategoryInfo(_this.id);
                    _this._getProducts(_this.id);
                }
                else {
                    var prodArr_1 = [];
                    _this.categoryService
                        .getCategoryProductsUnique$(_this.id)
                        .subscribe(function (res) {
                        var checkProds;
                        _this.productService.productsData$
                            .subscribe(function (data) {
                            checkProds = data;
                            if (res.length == 1) {
                                checkProds.forEach(function (prod) {
                                    if (res[0] == prod.category) {
                                        prodArr_1.push(prod);
                                    }
                                });
                            }
                            else {
                                checkProds.forEach(function (prod) {
                                    res.forEach(function (cat) {
                                        if (cat == prod.category) {
                                            prodArr_1.push(prod);
                                        }
                                    });
                                });
                            }
                            _this.Mainproducts = prodArr_1;
                            _this.products = prodArr_1;
                            _this.filteredproducts = prodArr_1;
                            _this.count = prodArr_1.length;
                            _this.loading = false;
                            _this.setPage(1);
                        });
                    }, function (err) {
                        console.error(err);
                        // this.error = true;
                    });
                    var categoryArr = [];
                    var menuArr = [];
                    var menuArr1_1;
                    var menuArr2_1 = [];
                    var menuArr3_1 = [];
                    var menuArrU_1;
                    menu.forEach(function (prod) {
                        if (prod.url == _this.id) {
                            menuArrU_1 = prod;
                        }
                    });
                    if (menuArrU_1.parent == 0) {
                        menuArr1_1 = menuArrU_1;
                        menu.forEach(function (p) {
                            if (p.parent == menuArrU_1._id) {
                                menuArr2_1.push(p);
                            }
                        });
                    }
                    else {
                        menu.forEach(function (p) {
                            if (p._id == menuArrU_1.parent) {
                                menuArr1_1 = p;
                            }
                        });
                        if (menuArr1_1.parent == 0) {
                            menu.forEach(function (p) {
                                if (p.parent == menuArrU_1._id) {
                                    menuArr2_1.push(p);
                                }
                            });
                            menu.forEach(function (p) {
                                if (p.parent == menuArr2_1[0]._id) {
                                    menuArr3_1.push(p);
                                }
                            });
                        }
                        else {
                            menu.forEach(function (p) {
                                if (p.parent == menuArrU_1._id) {
                                    menuArr2_1.push(p);
                                }
                            });
                            menu.forEach(function (p) {
                                if (p.parent == menuArr2_1[0]._id) {
                                    menuArr3_1.push(p);
                                }
                            });
                        }
                    }
                    //this.category = menuArrU
                    _this.parentMenu = menuArr1_1;
                    _this.childMenu = menuArr2_1;
                    _this.childMenu2 = menuArr3_1;
                    _this.inMenu = menuArr1_1;
                }
            });
        });
        this.brandFilter = [];
        this.brandsresult = [];
        //this.filterArr = [];
    }
    ProductsComponent.prototype.filterBrands = function (id) {
        console.log(id);
        var brand = this.brandFilter.push(id);
        //this.filterArr.push(brand);
        this._getFilterBrands(this.brandFilter);
        this._getFilteredProducts(this.brandFilter);
    };
    ProductsComponent.prototype.removeFilterBrands = function (id) {
        var index = this.brandFilter.indexOf(id);
        if (index > -1) {
            this.brandFilter.splice(index, 1);
        }
        //  this.filterArr = id;
        this._getFilterBrands(this.brandFilter);
        this._getFilteredProducts(this.brandFilter);
    };
    ProductsComponent.prototype._getFilterBrands = function (brandF) {
        var _this = this;
        var brandIn = [];
        this.brandF = brandF;
        this.brandF.forEach(function (brand) {
            _this.productService
                .getBrandsInfo$(brand)
                .subscribe(function (res) {
                brandIn.push(res);
            }, function (err) {
                console.error(err);
            });
        });
        this.brandsresult = brandIn;
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['category'];
            _this.title.setTitle(_this.pageTitle);
            _this._getCategoryInfo(_this.id);
            //this._getTopMenu();
            _this._getBrands(_this.id);
            //     this._getProducts(this.id);
        });
        this.imageUrl = IMG_URL;
    };
    ProductsComponent.prototype._getCategoryInfo = function (id) {
        var _this = this;
        this.categorySub = this.productService
            .getCategoryInfo$(id)
            .subscribe(function (res) {
            _this.category1 = res;
            _this.category = res;
            _this.topAdImg = _this.category1.top_ad.img;
            _this.topAdLink = _this.category1.top_ad.link;
            _this.topAdTitle = _this.category1.title;
            _this.topAdFooter = _this.category1.footer_seo;
            _this.loading = false;
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
        });
    };
    ProductsComponent.prototype._getFilteredProducts = function (brands) {
        var _this = this;
        var productsB = [];
        if (brands.length) {
            this.loading = true;
            brands.forEach(function (brand) {
                _this.Mainproducts.forEach(function (prod) {
                    if (brand == prod.brand._id) {
                        productsB.push(prod);
                    }
                });
            });
            this.products = productsB;
            this.filteredproducts = productsB;
            this.count = productsB.length;
            this.loading = false;
            this.setPage(1);
        }
        else {
            // this._getProducts();
            this.loading = true;
            this.Mainproducts.forEach(function (prod) {
                productsB.push(prod);
            });
            this.products = productsB;
            this.filteredproducts = productsB;
            this.count = productsB.length;
            this.loading = false;
            this.setPage(1);
        }
    };
    ProductsComponent.prototype._getProducts = function (id) {
        var _this = this;
        this.loading = true;
        // Get future, public events
        this.productsSub = this.productService
            .getCategoryProducts$(id)
            .subscribe(function (res) {
            _this.Mainproducts = res;
            _this.products = res;
            _this.filteredproducts = res;
            _this.count = res.length;
            _this.loading = false;
            _this.setPage(1);
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
        });
    };
    ProductsComponent.prototype._getBrands = function (id) {
        var _this = this;
        this.brandSub = this.productService
            .getBrandEntity$(id)
            .subscribe(function (res) {
            _this.brands = res;
        }, function (err) {
            console.error(err);
        });
    };
    ProductsComponent.prototype._getTopMenu = function () {
        var _this = this;
        this.menuSub = this.categoryService.categoryData$ //this.productService
            .subscribe(function (res) {
            _this.mainMenu = res;
        }, function (err) {
            console.error(err);
            // this.error = true;
        });
    };
    ProductsComponent.prototype._getBrandsInfo = function (id) {
        var _this = this;
        this.productService
            .getBrandEntityInfo$(id)
            .subscribe(function (res) {
            _this.brandsresult = res;
        }, function (err) {
            console.error(err);
        });
    };
    ProductsComponent.prototype.searchEvents = function () {
        this.filteredproducts = this.fs.search(this.products, this.query, '_id', 'mediumDate');
    };
    ProductsComponent.prototype.resetQuery = function () {
        this.query = '';
        this.filteredproducts = this.products;
    };
    ProductsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.products.length, page);
        // get current page of items
        this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ProductsComponent.prototype.searchList = function (event) {
        var prodArr = [];
        if (event.target.value == '') {
            this.products = this.Mainproducts;
            this.filteredproducts = this.Mainproducts;
            this.count = this.Mainproducts.length;
            this.pager = this.pagerService.getPager(this.Mainproducts.length, 1);
            this.pagedItems = this.Mainproducts.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
        else {
            var searchString_1 = event.target.value.split(" ");
            if (searchString_1.length == 3) {
                this.Mainproducts.forEach(function (prod) {
                    if (prod.title.toLowerCase().indexOf(searchString_1[1].toLowerCase()) != -1 && prod.title.toLowerCase().indexOf(searchString_1[2].toLowerCase()) != -1) {
                        prodArr.push(prod);
                    }
                });
            }
            else if (searchString_1.length == 2) {
                this.Mainproducts.forEach(function (prod) {
                    if (prod.title.toLowerCase().indexOf(searchString_1[1].toLowerCase()) != -1) {
                        prodArr.push(prod);
                    }
                });
            }
            else {
                this.Mainproducts.forEach(function (prod) {
                    if (prod.title.toLowerCase().indexOf(event.target.value) != -1) {
                        prodArr.push(prod);
                    }
                });
            }
            this.products = prodArr;
            this.filteredproducts = prodArr;
            this.count = prodArr.length;
            this.loading = false;
            this.setPage(1);
        }
    };
    ProductsComponent.prototype.findInArray = function (arr, val) {
        var result = [];
        for (var i in arr) {
            //if (i.title.match(/val/)) {
            result.push(i);
            //}
        }
        return result;
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        if (this.categorySub) {
            this.categorySub.unsubscribe();
        }
        if (this.productsSub) {
            this.productsSub.unsubscribe();
        }
        if (this.menuSub) {
            this.menuSub.unsubscribe();
        }
        if (this.brandSub) {
            this.brandSub.unsubscribe();
        }
    };
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;


/***/ }),

/***/ "./src/app/components/pages/products/products.module.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/components/pages/products/products.module.ngfactory.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./products.module */ "./src/app/components/pages/products/products.module.ts");
var i2 = __webpack_require__(/*! ./products.component.ngfactory */ "./src/app/components/pages/products/products.component.ngfactory.js");
var i3 = __webpack_require__(/*! ./brand-category/brand-category.component.ngfactory */ "./src/app/components/pages/products/brand-category/brand-category.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ../../../core/loading.module */ "./src/app/core/loading.module.ts");
var i7 = __webpack_require__(/*! ./products.component */ "./src/app/components/pages/products/products.component.ts");
var i8 = __webpack_require__(/*! ./brand-category/brand-category.component */ "./src/app/components/pages/products/brand-category/brand-category.component.ts");
var ProductsModuleNgFactory = i0.ɵcmf(i1.ProductsModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ProductsComponentNgFactory, i3.BrandCategoryComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i5.RouterModule, i5.RouterModule, [[2, i5.ɵangular_packages_router_router_a], [2, i5.Router]]), i0.ɵmpd(1073742336, i6.LoadingModule, i6.LoadingModule, []), i0.ɵmpd(1073742336, i1.ProductsModule, i1.ProductsModule, []), i0.ɵmpd(1024, i5.ROUTES, function () { return [[{ path: ":category", component: i7.ProductsComponent, pathMatch: "full" }, { path: ":category/:brand", component: i8.BrandCategoryComponent, pathMatch: "full" }]]; }, [])]); });
exports.ProductsModuleNgFactory = ProductsModuleNgFactory;


/***/ }),

/***/ "./src/app/components/pages/products/products.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/pages/products/products.module.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;


/***/ }),

/***/ "./src/app/components/pages/search/search.component.css.shim.ngstyle.js":
/*!******************************************************************************!*\
  !*** ./src/app/components/pages/search/search.component.css.shim.ngstyle.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".category-header[_ngcontent-%COMP%]{background-color:#039f9b;height:130px}.category-filter[_ngcontent-%COMP%]{background-color:#fff;padding:10px;border-radius:5px}.category-name-wrapper[_ngcontent-%COMP%]{padding:0 15px 10px;clear:both;font-size:22px}.category-name-wrapper[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%]{color:#5a5a59;float:left;margin-top:10px;font-size:23px;width:50%}.category-name-wrapper[_ngcontent-%COMP%]   .category-count[_ngcontent-%COMP%]{color:#999;margin-left:5px;font-size:13px;vertical-align:2px}.category-name-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{float:left;width:50%;text-align:right}.category-name-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #DDD;width:200px;font-size:14px;color:#8d8b8d;padding:3px 5px}.category-sort[_ngcontent-%COMP%]{border-bottom:2px solid #34b1a8}@media (min-width:320px) and (max-width:480px){.category-filter[_ngcontent-%COMP%]{display:none}.category-header[_ngcontent-%COMP%]{background-color:#039f9b;height:auto}.category-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .category-products[_ngcontent-%COMP%]{width:100%}.category-products[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{width:100%;margin:0}.category-products[_ngcontent-%COMP%]   .col-xs-6[_ngcontent-%COMP%]{width:50%;float:left;border:1px solid #ddd;padding:0}.category-products[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{max-width:350px;overflow:scroll}.category-name-wrapper[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%]{color:#5a5a59;float:none;margin-top:10px;font-size:20px;width:100%}}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/pages/search/search.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/search/search.component.ngfactory.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./search.component.css.shim.ngstyle */ "./src/app/components/pages/search/search.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../../core/loading.component.ngfactory */ "./src/app/core/loading.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../../../core/loading.component */ "./src/app/core/loading.component.ts");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ./search.component */ "./src/app/components/pages/search/search.component.ts");
var i7 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var i8 = __webpack_require__(/*! ../../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
var i9 = __webpack_require__(/*! ../../../services/pager/pager.service */ "./src/app/services/pager/pager.service.ts");
var styles_SearchComponent = [i0.styles];
var RenderType_SearchComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_SearchComponent, data: {} });
exports.RenderType_SearchComponent = RenderType_SearchComponent;
function View_SearchComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-loading", [], null, null, null, i2.View_LoadingComponent_0, i2.RenderType_LoadingComponent)), i1.ɵdid(1, 49152, null, 0, i3.LoadingComponent, [], null, null)], null, null); }
function View_SearchComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.parent.context.$implicit.price, 0)); _ck(_v, 1, 0, currVal_0); }); }
function View_SearchComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "discount"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, [" Ksh. ", " "])), i1.ɵppd(5, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.parent.context.$implicit.special_price, 0)); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 4, 0, _ck(_v, 5, 0, i1.ɵnov(_v.parent.parent.parent.parent.parent.parent, 0), _v.parent.parent.context.$implicit.price, 0)); _ck(_v, 4, 0, currVal_1); }); }
function View_SearchComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SearchComponent_7)), i1.ɵdid(2, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SearchComponent_8)), i1.ɵdid(4, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.parent.context.$implicit.special_price == 0); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_v.parent.context.$implicit.special_price != 0); _ck(_v, 4, 0, currVal_1); }, null); }
function View_SearchComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [["class", "upcoming"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Upcoming "]))], null, null); }
function View_SearchComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 15, "div", [["class", "col-md-3 col-xs-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 14, "div", [["class", "product-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 13, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i5.RouterLinkWithHref, [i5.Router, i5.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(4, 0, null, null, 11, "div", [["class", "product-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "product-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 8, "div", [["class", "product-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "div", [["class", "prod-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, [" ", " "])), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SearchComponent_6)), i1.ɵdid(12, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SearchComponent_9)), i1.ɵdid(14, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 0, "div", [["class", "prod-rate"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/product/", _v.context.$implicit.url, ""); _ck(_v, 3, 0, currVal_2); var currVal_6 = (_v.context.$implicit.stock != 2); _ck(_v, 12, 0, currVal_6); var currVal_7 = (_v.context.$implicit.stock == 2); _ck(_v, 14, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit.images[0][0], ""); var currVal_4 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.title, ""); _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_5 = _v.context.$implicit.title; _ck(_v, 9, 0, currVal_5); }); }
function View_SearchComponent_11(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i4.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(2, { active: 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(4, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "page-item"; var currVal_1 = _ck(_v, 2, 0, (_co.pager.currentPage === _v.context.$implicit)); _ck(_v, 1, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 4, 0, currVal_2); }); }
function View_SearchComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 22, "ul", [["class", "pagination"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(2, 278528, null, 0, i4.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(3, { disabled: 0 }), (_l()(), i1.ɵeld(4, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["First"])), (_l()(), i1.ɵeld(6, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(7, 278528, null, 0, i4.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(8, { disabled: 0 }), (_l()(), i1.ɵeld(9, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage((_co.pager.currentPage - 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Previous"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SearchComponent_11)), i1.ɵdid(12, 802816, null, 0, i4.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(13, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(14, 278528, null, 0, i4.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(15, { disabled: 0 }), (_l()(), i1.ɵeld(16, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage((_co.pager.currentPage + 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Next"])), (_l()(), i1.ɵeld(18, 0, null, null, 4, "li", [["class", "page-item"]], null, null, null, null, null)), i1.ɵdid(19, 278528, null, 0, i4.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(20, { disabled: 0 }), (_l()(), i1.ɵeld(21, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(_co.pager.totalPages) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Last"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "page-item"; var currVal_1 = _ck(_v, 3, 0, (_co.pager.currentPage === 1)); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = "page-item"; var currVal_3 = _ck(_v, 8, 0, (_co.pager.currentPage === 1)); _ck(_v, 7, 0, currVal_2, currVal_3); var currVal_4 = _co.pager.pages; _ck(_v, 12, 0, currVal_4); var currVal_5 = "page-item"; var currVal_6 = _ck(_v, 15, 0, (_co.pager.currentPage === _co.pager.totalPages)); _ck(_v, 14, 0, currVal_5, currVal_6); var currVal_7 = "page-item"; var currVal_8 = _ck(_v, 20, 0, (_co.pager.currentPage === _co.pager.totalPages)); _ck(_v, 19, 0, currVal_7, currVal_8); }, null); }
function View_SearchComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SearchComponent_5)), i1.ɵdid(2, 802816, null, 0, i4.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 3, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 2, "nav", [["aria-label", "Page navigation example"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SearchComponent_10)), i1.ɵdid(6, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pagedItems; _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.pager.pages && _co.pager.pages.length); _ck(_v, 6, 0, currVal_1); }, null); }
function View_SearchComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_SearchComponent_4)), i1.ɵdid(1, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.products.length; _ck(_v, 1, 0, currVal_0); }, null); }
function View_SearchComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_SearchComponent_3)), i1.ɵdid(1, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.products; _ck(_v, 1, 0, currVal_0); }, null); }
function View_SearchComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i4.DecimalPipe, [i1.LOCALE_ID]), (_l()(), i1.ɵeld(1, 0, null, null, 22, "div", [["id", "catgory-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 21, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 20, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "div", [["class", "col-md-3 category-filter"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 18, "div", [["class", "col-md-9 category-products"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 17, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 4, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 3, "div", [["class", "category-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 2, "a", [["routerLink", "#"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(10, 671744, null, 0, i5.RouterLinkWithHref, [i5.Router, i5.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(11, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/Categories/Category slider- Mobile.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 6, "div", [["class", "col-md-12 category-name-wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 3, "h1", [["category", ""], ["class", "category-name"], ["itemprop", "name"]], null, null, null, null, null)), (_l()(), i1.ɵted(14, null, [" Searched For:", ""])), (_l()(), i1.ɵeld(15, 0, null, null, 1, "span", [["class", "category-count"]], null, null, null, null, null)), (_l()(), i1.ɵted(16, null, ["(", " Items)"])), (_l()(), i1.ɵeld(17, 0, null, null, 1, "div", [["class", "search"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 0, "input", [["placeholder", "search text goes here"]], null, [[null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (_co.searchList($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 0, "div", [["class", "col-md-12 category-sort"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SearchComponent_1)), i1.ɵdid(21, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SearchComponent_2)), i1.ɵdid(23, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "#"; _ck(_v, 10, 0, currVal_2); var currVal_5 = _co.loading; _ck(_v, 21, 0, currVal_5); var currVal_6 = _co.utils.isLoaded(_co.loading); _ck(_v, 23, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 10).target; var currVal_1 = i1.ɵnov(_v, 10).href; _ck(_v, 9, 0, currVal_0, currVal_1); var currVal_3 = _co.id; _ck(_v, 14, 0, currVal_3); var currVal_4 = _co.count; _ck(_v, 16, 0, currVal_4); }); }
exports.View_SearchComponent_0 = View_SearchComponent_0;
function View_SearchComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-search", [], null, null, null, View_SearchComponent_0, RenderType_SearchComponent)), i1.ɵdid(1, 245760, null, 0, i6.SearchComponent, [i5.ActivatedRoute, i7.ProductsService, i8.UtilsService, i9.PagerService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SearchComponent_Host_0 = View_SearchComponent_Host_0;
var SearchComponentNgFactory = i1.ɵccf("app-search", i6.SearchComponent, View_SearchComponent_Host_0, {}, {}, []);
exports.SearchComponentNgFactory = SearchComponentNgFactory;


/***/ }),

/***/ "./src/app/components/pages/search/search.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/search/search.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var utils_service_1 = __webpack_require__(/*! ../../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
var pager_service_1 = __webpack_require__(/*! ../../../services/pager/pager.service */ "./src/app/services/pager/pager.service.ts");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, productService, utils, pagerService) {
        var _this = this;
        this.route = route;
        this.productService = productService;
        this.utils = utils;
        this.pagerService = pagerService;
        this.productInfo = [];
        this.catInfo = [];
        this.catAll = [];
        this.brands = [];
        this.imageUrl = '';
        this.pager = {};
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            var checkProds;
            var splitString = _this.id.split(" ");
            var prodArr = [];
            var reg = new RegExp(_this.id, 'i');
            _this.productService.productsData$
                .subscribe(function (data) {
                checkProds = data;
                if (checkProds == null) {
                    _this._getProduct(_this.id);
                }
                else {
                    if (splitString.length == 3) {
                        checkProds.forEach(function (prod) {
                            if (prod.title.toLowerCase().indexOf(splitString[0].toLowerCase()) != -1 && prod.title.toLowerCase().indexOf(splitString[1].toLowerCase()) != -1 && prod.title.toLowerCase().indexOf(splitString[2].toLowerCase()) != -1) {
                                prodArr.push(prod);
                            }
                        });
                    }
                    else if (splitString.length == 2) {
                        checkProds.forEach(function (prod) {
                            if (prod.title.toLowerCase().indexOf(splitString[0].toLowerCase()) != -1 && prod.title.toLowerCase().indexOf(splitString[1].toLowerCase()) != -1) {
                                prodArr.push(prod);
                            }
                        });
                    }
                    else {
                        checkProds.forEach(function (prod) {
                            if (prod.title.toLowerCase().indexOf(splitString[0].toLowerCase()) != -1) {
                                prodArr.push(prod);
                            }
                        });
                    }
                    _this.products = prodArr;
                    _this.Mainproducts = prodArr;
                    _this.count = prodArr.length;
                    _this.loading = false;
                    _this.setPage(1);
                }
            });
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageUrl = IMG_URL;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            //this._getProduct(this.id);
        });
    };
    SearchComponent.prototype._getProduct = function (id) {
        var _this = this;
        var splitString = id.split(" ");
        var prodArr = [];
        this.loading = true;
        // Get future, public events
        this.productsSub = this.productService
            .getSearchProducts$(splitString[0])
            .subscribe(function (res) {
            if (splitString.length == 3) {
                res.forEach(function (prod) {
                    if (prod.title.toLowerCase().indexOf(splitString[1].toLowerCase()) != -1 && prod.title.toLowerCase().indexOf(splitString[2].toLowerCase()) != -1) {
                        prodArr.push(prod);
                    }
                });
            }
            else if (splitString.length == 2) {
                res.forEach(function (prod) {
                    if (prod.title.toLowerCase().indexOf(splitString[1].toLowerCase()) != -1) {
                        prodArr.push(prod);
                    }
                });
            }
            else {
                res.forEach(function (prod) {
                    prodArr.push(prod);
                });
            }
            _this.products = prodArr;
            _this.Mainproducts = prodArr;
            _this.count = prodArr.length;
            _this.loading = false;
            _this.setPage(1);
        }, function (err) {
            console.error(err);
            _this.loading = false;
        });
    };
    SearchComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.products.length, page);
        // get current page of items
        this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    SearchComponent.prototype.searchList = function (event) {
        var prodArr = [];
        if (event.target.value == '') {
            this.products = this.Mainproducts;
            this.count = this.Mainproducts.length;
            this.pager = this.pagerService.getPager(this.Mainproducts.length, 1);
            this.pagedItems = this.Mainproducts.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
        else {
            var searchString_1 = event.target.value.split(" ");
            if (event.target.value.toLowerCase().indexOf(" ")) {
                if (searchString_1.length == 3) {
                    this.Mainproducts.forEach(function (prod) {
                        if (prod.title.toLowerCase().indexOf(searchString_1[1].toLowerCase()) != -1 && prod.title.toLowerCase().indexOf(searchString_1[2].toLowerCase()) != -1) {
                            prodArr.push(prod);
                        }
                    });
                }
                else if (searchString_1.length == 2) {
                    this.Mainproducts.forEach(function (prod) {
                        if (prod.title.toLowerCase().indexOf(searchString_1[1].toLowerCase()) != -1) {
                            prodArr.push(prod);
                        }
                    });
                }
                else {
                    this.Mainproducts.forEach(function (prod) {
                        if (prod.title.toLowerCase().indexOf(event.target.value) != -1) {
                            prodArr.push(prod);
                        }
                    });
                }
            }
            else {
                alert(event.target.value);
                //  this.searchTerm = event.target.value;
                this.Mainproducts.forEach(function (prod) {
                    if (prod.title.toLowerCase().indexOf(event.target.value) != -1) {
                        prodArr.push(prod);
                    }
                });
            }
            this.products = prodArr;
            this.count = prodArr.length;
            this.loading = false;
            this.setPage(1);
        }
    };
    SearchComponent.prototype.ngOnDestroy = function () {
    };
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;


/***/ }),

/***/ "./src/app/components/pages/search/search.module.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/components/pages/search/search.module.ngfactory.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./search.module */ "./src/app/components/pages/search/search.module.ts");
var i2 = __webpack_require__(/*! ./search.component.ngfactory */ "./src/app/components/pages/search/search.component.ngfactory.js");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i5 = __webpack_require__(/*! ../../../core/loading.module */ "./src/app/core/loading.module.ts");
var i6 = __webpack_require__(/*! ./search.component */ "./src/app/components/pages/search/search.component.ts");
var SearchModuleNgFactory = i0.ɵcmf(i1.SearchModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.SearchComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(1073742336, i4.RouterModule, i4.RouterModule, [[2, i4.ɵangular_packages_router_router_a], [2, i4.Router]]), i0.ɵmpd(1073742336, i5.LoadingModule, i5.LoadingModule, []), i0.ɵmpd(1073742336, i1.SearchModule, i1.SearchModule, []), i0.ɵmpd(1024, i4.ROUTES, function () { return [[{ path: ":id", component: i6.SearchComponent, pathMatch: "full" }]]; }, [])]); });
exports.SearchModuleNgFactory = SearchModuleNgFactory;


/***/ }),

/***/ "./src/app/components/pages/search/search.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/search/search.module.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
exports.SearchModule = SearchModule;


/***/ }),

/***/ "./src/app/components/partials/footer/footer.component.css.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/components/partials/footer/footer.component.css.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".category-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .foot-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .foot-pay[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .mobile_view[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .mobile_view[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none\n}\n\nul[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0\n}\n\nfooter[_ngcontent-%COMP%] {\n    margin-top: 40px\n}\n\n.mobile_view[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n    text-align: center;\n    border-top: 1px solid #424d82;\n    border-bottom: 1px solid #424d82\n}\n\n.mobile_view[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: bolder;\n    background-color: #424d82;\n    color: #FFF\n}\n\n.mobile_view[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    padding: 10px 0\n}\n\n.mobile_view[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left;\n    width: 20%\n}\n\n.mobile_view[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    font-size: 1.3rem\n}\n\n.mobile_view[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fa-whatsapp-square[_ngcontent-%COMP%] {\n    color: #25d366\n}\n\n.mobile_view[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin: 0;\n    background-color: #DDD\n}\n\n.mobile_view[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%] {\n    padding: 0\n}\n\n.mobile_view[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%] {\n    padding-top: 30px\n}\n\n.mobile_view[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1rem\n}\n\n.mobile_view[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0\n}\n\n.mobile_view[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    padding: 30px 10px\n}\n\n.mobile_view[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    padding: 8px 0\n}\n\n.foot-pay[_ngcontent-%COMP%] {\n    border-top: 1px solid #ddd;\n    border-bottom: 1px solid #ddd;\n    padding: 20px 0\n}\n\n.foot-pay[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n    text-transform: uppercase\n}\n\n.foot-pay[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: initial;\n    padding-right: 10px\n}\n\n.top-footer[_ngcontent-%COMP%] {\n    padding: 30px 0;\n    background-color: #9c9999\n}\n\n.foot-pay[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa-facebook-f[_ngcontent-%COMP%], .mobile_view[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fa-facebook-f[_ngcontent-%COMP%] {\n    color: #3B5998\n}\n\n.foot-pay[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa-twitter[_ngcontent-%COMP%], .mobile_view[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fa-twitter[_ngcontent-%COMP%] {\n    color: #1DA1F2\n}\n\n.foot-pay[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa-instagram[_ngcontent-%COMP%], .mobile_view[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fa-instagram[_ngcontent-%COMP%] {\n    color: #262626\n}\n\n.foot-pay[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa-google-plus[_ngcontent-%COMP%], .mobile_view[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fa-google-plus[_ngcontent-%COMP%] {\n    color: #DB4437\n}\n\n.bottom-footer[_ngcontent-%COMP%] {\n    background-color: #f7f7f7;\n    width: 100%;\n    min-width: 1024px;\n    margin: 0 auto\n}\n\n.category-container[_ngcontent-%COMP%] {\n    line-height: 20px\n}\n\n.category-inner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #777\n}\n\n.category-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: inline-block\n}\n\n.category-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .categoryLabel[_ngcontent-%COMP%] {\n    font-family: font-bold\n}\n\n.category-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block\n}\n\n.category-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slash[_ngcontent-%COMP%] {\n    color: #FFF;\n    font-size: 12px\n}\n\n.foot-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .foot-head[_ngcontent-%COMP%] {\n    padding: 0 7px;\n    line-height: 23px\n}\n\n.foot-head[_ngcontent-%COMP%] {\n    font-size: 13px;\n    font-weight: 500;\n    color: #FFF;\n    text-transform: uppercase\n}\n\n.foot-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #FFF;\n    text-decoration: none;\n    display: block;\n    font-weight: 400;\n    font-size: 12px;\n    text-align: left;\n    cursor: pointer\n}\n\n.copyright[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    color: #706e6f;\n    background-color: #FFF;\n    text-align: center;\n    font-size: 12px\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/partials/footer/footer.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/components/partials/footer/footer.component.ngfactory.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./footer.component.css.shim.ngstyle */ "./src/app/components/partials/footer/footer.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./footer.component */ "./src/app/components/partials/footer/footer.component.ts");
var i5 = __webpack_require__(/*! ../../../services/checkout/checkout.service */ "./src/app/services/checkout/checkout.service.ts");
var i6 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var styles_FooterComponent = [i0.styles];
var RenderType_FooterComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_FooterComponent, data: {} });
exports.RenderType_FooterComponent = RenderType_FooterComponent;
function View_FooterComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 55, "footer", [["class", "mobile_view"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 20, "div", [["class", "social clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "div", [["class", "head"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Connect "])), (_l()(), i1.ɵeld(4, 0, null, null, 17, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 15, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 1, "a", [["href", "https://www.facebook.com/#"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fab fa-facebook-f fa-lg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 1, "a", [["href", "https://twitter.com/#"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fab fa-twitter fa-lg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 1, "a", [["href", "https://www.instagram.com/#"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fab fa-instagram fa-lg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, "a", [["href", "https://plus.google.com/#"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fab fa-google-plus fa-lg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 1, "a", [["href", "https://api.whatsapp.com/send?phone=2547######"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 0, "i", [["class", "fab fa-whatsapp-square"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 29, "div", [["class", "info row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 15, "div", [["class", "col-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 14, "div", [["class", "links"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 13, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["How To Order"])), (_l()(), i1.ɵeld(29, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Return Policy"])), (_l()(), i1.ɵeld(32, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 2, "a", [["routerLink", "/blogs"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 34).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(34, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Blogs"])), (_l()(), i1.ɵeld(36, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Help"])), (_l()(), i1.ɵeld(39, 0, null, null, 12, "div", [["class", "col-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 11, "div", [["class", "contacts"]], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 10, "div", [["class", "info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Zuri Cart Kenya"])), (_l()(), i1.ɵeld(44, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["XXXXX,"])), (_l()(), i1.ɵeld(46, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["XXXXXX"])), (_l()(), i1.ɵeld(48, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["XXXXX / XXXXX"])), (_l()(), i1.ɵeld(50, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Nairobi, Kenya"])), (_l()(), i1.ɵeld(52, 0, null, null, 3, "div", [["class", "copyright"]], null, null, null, null, null)), (_l()(), i1.ɵeld(53, 0, null, null, 2, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵted(54, null, [" Copyright (c) ", " Zuri Cart Kenya. "])), i1.ɵppd(55, 2)], function (_ck, _v) { var currVal_2 = "/blogs"; _ck(_v, 34, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 34).target; var currVal_1 = i1.ɵnov(_v, 34).href; _ck(_v, 33, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵunv(_v, 54, 0, _ck(_v, 55, 0, i1.ɵnov(_v.parent, 0), _co.date, "yyyy")); _ck(_v, 54, 0, currVal_3); }); }
function View_FooterComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(3, null, [" ", " "]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/tag/", _v.context.$implicit.url, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_3); }); }
function View_FooterComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 387, "footer", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 30, "div", [["class", "foot-pay"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 29, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 28, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 10, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "head"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Payment "])), (_l()(), i1.ɵeld(7, 0, null, null, 7, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 6, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 0, "i", [["class", "fas fa-credit-card fa-lg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 0, "i", [["class", "fab fa-cc-paypal fa-lg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 0, "i", [["class", "fab fa-cc-visa fa-lg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 16, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, "div", [["class", "head"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Connect "])), (_l()(), i1.ɵeld(18, 0, null, null, 13, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 12, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 1, "a", [["href", "https://www.facebook.com/#"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fab fa-facebook-f fa-lg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 1, "a", [["href", "https://twitter.com/#"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fab fa-twitter fa-lg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 1, "a", [["href", "https://www.instagram.com/#"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fab fa-instagram fa-lg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 1, "a", [["href", "https://plus.google.com/#"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fab fa-google-plus fa-lg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 58, "div", [["class", "top-footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 57, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 56, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 19, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 18, "div", [["class", "footer-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 1, "div", [["class", "foot-head"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Help "])), (_l()(), i1.ɵeld(39, 0, null, null, 15, "div", [["class", "foot-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 14, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["How to Order"])), (_l()(), i1.ɵeld(44, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(45, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Cancellations & returns"])), (_l()(), i1.ɵeld(47, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 2, "a", [["routerLink", "/blogs"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 49).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(49, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Blogs"])), (_l()(), i1.ɵeld(51, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(52, 0, null, null, 2, "a", [["routerLink", "/page/sitemap"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 53).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(53, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Sitemap"])), (_l()(), i1.ɵeld(55, 0, null, null, 15, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(56, 0, null, null, 14, "div", [["class", "footer-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 1, "div", [["class", "foot-head"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Privacy Info "])), (_l()(), i1.ɵeld(59, 0, null, null, 11, "div", [["class", "foot-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(60, 0, null, null, 10, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(62, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Privacy Policy"])), (_l()(), i1.ɵeld(64, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(65, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Terms & Conditions"])), (_l()(), i1.ɵeld(67, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(68, 0, null, null, 2, "a", [["routerLink", "faq"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 69).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(69, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["FAQ"])), (_l()(), i1.ɵeld(71, 0, null, null, 14, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(72, 0, null, null, 13, "div", [["class", "footer-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(73, 0, null, null, 1, "div", [["class", "foot-head"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Company "])), (_l()(), i1.ɵeld(75, 0, null, null, 10, "div", [["class", "foot-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(76, 0, null, null, 9, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(77, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(78, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["About Us"])), (_l()(), i1.ɵeld(80, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(81, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Cancellations & returns"])), (_l()(), i1.ɵeld(83, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(84, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Help"])), (_l()(), i1.ɵeld(86, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(87, 0, null, null, 3, "div", [["class", "footer-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(88, 0, null, null, 1, "div", [["class", "foot-head"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Contacts "])), (_l()(), i1.ɵeld(90, 0, null, null, 0, "div", [["class", "foot-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(91, 0, null, null, 292, "div", [["class", "bottom-footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(92, 0, null, null, 7, "div", [["class", "tags-footer clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(93, 0, null, null, 6, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(94, 0, null, null, 5, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(95, 0, null, null, 4, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(96, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Popular Search "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_3)), i1.ɵdid(99, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(100, 0, null, null, 273, "div", [["class", "delivery-footer clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(101, 0, null, null, 272, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(102, 0, null, null, 271, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(103, 0, null, null, 270, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(104, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Popular Search "])), (_l()(), i1.ɵeld(106, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mombasa |"])), (_l()(), i1.ɵeld(108, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Nairobi CBD |"])), (_l()(), i1.ɵeld(110, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Baraton |"])), (_l()(), i1.ɵeld(112, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Bungoma |"])), (_l()(), i1.ɵeld(114, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Burnt Forest |"])), (_l()(), i1.ɵeld(116, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Chwele |"])), (_l()(), i1.ɵeld(118, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Eldoret |"])), (_l()(), i1.ɵeld(120, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Iten |"])), (_l()(), i1.ɵeld(122, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kabarnet |"])), (_l()(), i1.ɵeld(124, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kapenguria |"])), (_l()(), i1.ɵeld(126, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kapsabet |"])), (_l()(), i1.ɵeld(128, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kimilili |"])), (_l()(), i1.ɵeld(130, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kitale |"])), (_l()(), i1.ɵeld(132, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Lodwar |"])), (_l()(), i1.ɵeld(134, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Lokichogio |"])), (_l()(), i1.ɵeld(136, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Lugari |"])), (_l()(), i1.ɵeld(138, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Malaba |"])), (_l()(), i1.ɵeld(140, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Moi's Bridge |"])), (_l()(), i1.ɵeld(142, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mosoriot |"])), (_l()(), i1.ɵeld(144, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mumias |"])), (_l()(), i1.ɵeld(146, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Nandi Hills |"])), (_l()(), i1.ɵeld(148, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Nzoia |"])), (_l()(), i1.ɵeld(150, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Turbo |"])), (_l()(), i1.ɵeld(152, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Webuye |"])), (_l()(), i1.ɵeld(154, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Ahero |"])), (_l()(), i1.ɵeld(156, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Awendo |"])), (_l()(), i1.ɵeld(158, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Bondo |"])), (_l()(), i1.ɵeld(160, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Bomet |"])), (_l()(), i1.ɵeld(162, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Busia |"])), (_l()(), i1.ɵeld(164, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Homabay |"])), (_l()(), i1.ɵeld(166, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Isebania |"])), (_l()(), i1.ɵeld(168, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kakamega |"])), (_l()(), i1.ɵeld(170, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kehancha |"])), (_l()(), i1.ɵeld(172, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kendubay |"])), (_l()(), i1.ɵeld(174, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kericho |"])), (_l()(), i1.ɵeld(176, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Keroka |"])), (_l()(), i1.ɵeld(178, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kilgoris |"])), (_l()(), i1.ɵeld(180, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kisii |"])), (_l()(), i1.ɵeld(182, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kisumu |"])), (_l()(), i1.ɵeld(184, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Litein |"])), (_l()(), i1.ɵeld(186, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Londiani |"])), (_l()(), i1.ɵeld(188, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Luanda |"])), (_l()(), i1.ɵeld(190, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Maseno |"])), (_l()(), i1.ɵeld(192, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mbale |"])), (_l()(), i1.ɵeld(194, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mbita |"])), (_l()(), i1.ɵeld(196, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Migori |"])), (_l()(), i1.ɵeld(198, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Muhoroni |"])), (_l()(), i1.ɵeld(200, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Nambale |"])), (_l()(), i1.ɵeld(202, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Nyamira |"])), (_l()(), i1.ɵeld(204, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Ogembo |"])), (_l()(), i1.ɵeld(206, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Oyugis |"])), (_l()(), i1.ɵeld(208, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Rachuonyo |"])), (_l()(), i1.ɵeld(210, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Rongo |"])), (_l()(), i1.ɵeld(212, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Sabatia |"])), (_l()(), i1.ɵeld(214, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Serem |"])), (_l()(), i1.ɵeld(216, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Siaya |"])), (_l()(), i1.ɵeld(218, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Sotik |"])), (_l()(), i1.ɵeld(220, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Ugunja |"])), (_l()(), i1.ɵeld(222, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Chogoria |"])), (_l()(), i1.ɵeld(224, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Chuka |"])), (_l()(), i1.ɵeld(226, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Embu |"])), (_l()(), i1.ɵeld(228, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Garissa |"])), (_l()(), i1.ɵeld(230, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Igoji |"])), (_l()(), i1.ɵeld(232, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Isiolo |"])), (_l()(), i1.ɵeld(234, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kagio |"])), (_l()(), i1.ɵeld(236, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kangari |"])), (_l()(), i1.ɵeld(238, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Karatina |"])), (_l()(), i1.ɵeld(240, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kerugoya |"])), (_l()(), i1.ɵeld(242, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kiganjo |"])), (_l()(), i1.ɵeld(244, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kutus |"])), (_l()(), i1.ɵeld(246, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Makutano |"])), (_l()(), i1.ɵeld(248, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Makuyu |"])), (_l()(), i1.ɵeld(250, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Matuu |"])), (_l()(), i1.ɵeld(252, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Maua |"])), (_l()(), i1.ɵeld(254, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Meru |"])), (_l()(), i1.ɵeld(256, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mukurweini |"])), (_l()(), i1.ɵeld(258, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Murang'a |"])), (_l()(), i1.ɵeld(260, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Murarandia |"])), (_l()(), i1.ɵeld(262, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mwea |"])), (_l()(), i1.ɵeld(264, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mwingi |"])), (_l()(), i1.ɵeld(266, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Nanyuki |"])), (_l()(), i1.ɵeld(268, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Naro Moru |"])), (_l()(), i1.ɵeld(270, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Nkubu |"])), (_l()(), i1.ɵeld(272, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Nyeri |"])), (_l()(), i1.ɵeld(274, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Othaya |"])), (_l()(), i1.ɵeld(276, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Ruiru |"])), (_l()(), i1.ɵeld(278, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Runyenjes |"])), (_l()(), i1.ɵeld(280, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Sabasaba |"])), (_l()(), i1.ɵeld(282, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Sagana |"])), (_l()(), i1.ɵeld(284, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Thika |"])), (_l()(), i1.ɵeld(286, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Timau |"])), (_l()(), i1.ɵeld(288, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Eldama Ravine |"])), (_l()(), i1.ɵeld(290, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Gilgil |"])), (_l()(), i1.ɵeld(292, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kijabe |"])), (_l()(), i1.ɵeld(294, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Limuru |"])), (_l()(), i1.ɵeld(296, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Molo |"])), (_l()(), i1.ɵeld(298, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Nakuru |"])), (_l()(), i1.ɵeld(300, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Narok |"])), (_l()(), i1.ɵeld(302, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Njoro |"])), (_l()(), i1.ɵeld(304, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Nyahururu |"])), (_l()(), i1.ɵeld(306, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Olkalau |"])), (_l()(), i1.ɵeld(308, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Diani |"])), (_l()(), i1.ɵeld(310, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Emali |"])), (_l()(), i1.ɵeld(312, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kibwezi |"])), (_l()(), i1.ɵeld(314, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kilifi |"])), (_l()(), i1.ɵeld(316, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kwale |"])), (_l()(), i1.ɵeld(318, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Malindi |"])), (_l()(), i1.ɵeld(320, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mariakani |"])), (_l()(), i1.ɵeld(322, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mtito Andei |"])), (_l()(), i1.ɵeld(324, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mtwapa |"])), (_l()(), i1.ɵeld(326, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mwatate |"])), (_l()(), i1.ɵeld(328, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Sultan Hamud |"])), (_l()(), i1.ɵeld(330, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Taveta |"])), (_l()(), i1.ɵeld(332, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Voi |"])), (_l()(), i1.ɵeld(334, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Watamu |"])), (_l()(), i1.ɵeld(336, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Wundanyi |"])), (_l()(), i1.ɵeld(338, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Athi River |"])), (_l()(), i1.ɵeld(340, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Gatundu |"])), (_l()(), i1.ɵeld(342, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Githinguri |"])), (_l()(), i1.ɵeld(344, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kajiado |"])), (_l()(), i1.ɵeld(346, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kiambu |"])), (_l()(), i1.ɵeld(348, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kikuyu |"])), (_l()(), i1.ɵeld(350, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kitengela |"])), (_l()(), i1.ɵeld(352, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kitui |"])), (_l()(), i1.ɵeld(354, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Machakos |"])), (_l()(), i1.ɵeld(356, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Masii |"])), (_l()(), i1.ɵeld(358, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mwala |"])), (_l()(), i1.ɵeld(360, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Nairobi |"])), (_l()(), i1.ɵeld(362, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Ngong |"])), (_l()(), i1.ɵeld(364, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Oloitoktok |"])), (_l()(), i1.ɵeld(366, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Ongata Rongai |"])), (_l()(), i1.ɵeld(368, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Tala/Kangundo |"])), (_l()(), i1.ɵeld(370, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Wote/Makueni |"])), (_l()(), i1.ɵeld(372, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Naivasha"])), (_l()(), i1.ɵeld(374, 0, null, null, 9, "div", [["class", "about-footer clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(375, 0, null, null, 8, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(376, 0, null, null, 1, "div", [["class", "head"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" About Us "])), (_l()(), i1.ɵeld(378, 0, null, null, 5, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(379, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore vitae, possimus necessitatibus corrupti, officiis recusandae aliquam dicta est cumque cum aliquid accusamus atque repudiandae inventore qui sequi, expedita non. Qui?"])), (_l()(), i1.ɵeld(381, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus ad aperiam dolorem vel reprehenderit adipisci alias fugiat sequi aliquam dolore ab nisi, inventore error officia animi, quas placeat. Ad!"])), (_l()(), i1.ɵted(-1, null, [" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam deleniti repudiandae ullam dolore nostrum voluptatibus ab sunt sapiente? Perspiciatis dignissimos dolore perferendis reprehenderit aperiam qui magni beatae cumque aliquid rem. "])), (_l()(), i1.ɵeld(384, 0, null, null, 3, "div", [["class", "copyright"]], null, null, null, null, null)), (_l()(), i1.ɵeld(385, 0, null, null, 2, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵted(386, null, [" Copyright (c) ", " Zuri Cart Kenya. All Rights Reserved. "])), i1.ɵppd(387, 2)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/blogs"; _ck(_v, 49, 0, currVal_2); var currVal_5 = "/page/sitemap"; _ck(_v, 53, 0, currVal_5); var currVal_8 = "faq"; _ck(_v, 69, 0, currVal_8); var currVal_9 = _co.tags; _ck(_v, 99, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 49).target; var currVal_1 = i1.ɵnov(_v, 49).href; _ck(_v, 48, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵnov(_v, 53).target; var currVal_4 = i1.ɵnov(_v, 53).href; _ck(_v, 52, 0, currVal_3, currVal_4); var currVal_6 = i1.ɵnov(_v, 69).target; var currVal_7 = i1.ɵnov(_v, 69).href; _ck(_v, 68, 0, currVal_6, currVal_7); var currVal_10 = i1.ɵunv(_v, 386, 0, _ck(_v, 387, 0, i1.ɵnov(_v.parent, 0), _co.date, "yyyy")); _ck(_v, 386, 0, currVal_10); }); }
function View_FooterComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i3.DatePipe, [i1.LOCALE_ID]), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_1)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_2)), i1.ɵdid(4, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mobile_view; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.desktop_view; _ck(_v, 4, 0, currVal_1); }, null); }
exports.View_FooterComponent_0 = View_FooterComponent_0;
function View_FooterComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), i1.ɵdid(1, 245760, null, 0, i4.FooterComponent, [i1.PLATFORM_ID, i5.CheckoutService, i6.ProductsService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_FooterComponent_Host_0 = View_FooterComponent_Host_0;
var FooterComponentNgFactory = i1.ɵccf("app-footer", i4.FooterComponent, View_FooterComponent_Host_0, {}, {}, []);
exports.FooterComponentNgFactory = FooterComponentNgFactory;


/***/ }),

/***/ "./src/app/components/partials/footer/footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/partials/footer/footer.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var checkout_service_1 = __webpack_require__(/*! ../../../services/checkout/checkout.service */ "./src/app/services/checkout/checkout.service.ts");
var FooterComponent = /** @class */ (function () {
    function FooterComponent(platformId, checkoutService, productService) {
        this.platformId = platformId;
        this.checkoutService = checkoutService;
        this.productService = productService;
        this.mobile_view = false;
        this.desktop_view = false;
    }
    FooterComponent.prototype.ngOnInit = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            if (window.screen.width >= 320 && window.screen.width <= 480) {
                this.mobile_view = true;
                this.desktop_view = false;
            }
            else {
                this.mobile_view = false;
                this.desktop_view = true;
            }
        }
        if (common_1.isPlatformServer(this.platformId)) {
            this.mobile_view = false;
            this.desktop_view = true;
        }
        this._getProd();
    };
    FooterComponent.prototype._getProd = function () {
        var _this = this;
        this.prodSub = this.productService
            .getAllProducts$()
            .subscribe(function (res) {
            _this.productService.setProductsData(res);
        }, function (err) {
            console.error(err);
        });
    };
    FooterComponent.prototype._getShipping = function () {
        var _this = this;
        this.shippingSub = this.checkoutService
            .getShippingLocation$()
            .subscribe(function (res) {
            _this.shipping = res;
        }, function (err) {
            console.error(err);
        });
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        if (this.shippingSub) {
            this.shippingSub.unsubscribe();
        }
    };
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/components/partials/footer/footer.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/partials/footer/footer.module.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
exports.FooterModule = FooterModule;


/***/ }),

/***/ "./src/app/components/partials/header/header.component.css.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/components/partials/header/header.component.css.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".mobile_view_header[_ngcontent-%COMP%] {\n    display: none\n}\n\n.desktop_view_header[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    background: #FFF;\n    right: 0px;\n    left: 0px;\n    z-index: 99999;\n}\n\n.mobile_view[_ngcontent-%COMP%] {\n    box-shadow: 0 5px 5px -5px #333\n}\n\n.nav-mobile[_ngcontent-%COMP%] {\n    background: #FFF;\n    color: #FFF;\n    padding: 0;\n    margin: 0;\n    cursor: auto;\n    font-size: 18px;\n    list-style-type: none;\n    border-bottom: 2px solid #345d89;\n}\n\n.nav-mobile[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    height: 45px;\n    width: 42px;\n    padding: 9px;\n    color: #FFF\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .account[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 35px\n}\n\n.nav-mobile[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #FFF\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%] {\n    display: none;\n    padding: 15px\n}\n\n.nav-mobile[_ngcontent-%COMP%]::after {\n    content: \"\";\n    display: table;\n    clear: both\n}\n\n.nav-mobile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 45px;\n    line-height: 46px;\n    text-align: center;\n    float: left\n}\n\n.nav-mobile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    color: #333;\n    width: 100%;\n    height: 100%;\n    text-decoration: none\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: -15px;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    cursor: pointer;\n    display: block\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]::after {\n    opacity: 0;\n    top: 45px;\n    width: 100vw;\n    display: block;\n    position: fixed;\n    height: 100vh;\n    background: rgba(0, 0, 0, .5);\n    content: \"\";\n    pointer-events: none;\n    transition: opacity .2s cubic-bezier(0, 0, .3, 1);\n    transition-delay: .1s\n}\n\n.nav-mobile[_ngcontent-%COMP%]   #menu-toggle[_ngcontent-%COMP%] {\n    display: none\n}\n\n.nav-mobile[_ngcontent-%COMP%]   #menu-toggle[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] ~ .menu-button[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%], .nav-mobile[_ngcontent-%COMP%]   #menu-toggle[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] ~ .menu-button[_ngcontent-%COMP%]   .icon-open[_ngcontent-%COMP%], .nav-mobile[_ngcontent-%COMP%]   #menu-toggle[_ngcontent-%COMP%]:checked ~ .menu-button[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%], .nav-mobile[_ngcontent-%COMP%]   #menu-toggle[_ngcontent-%COMP%]:checked ~ .menu-button[_ngcontent-%COMP%]   .icon-open[_ngcontent-%COMP%] {\n    display: block\n}\n\n.menu-sidebar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    opacity: 1;\n    pointer-events: auto;\n    transition: opacity .3s cubic-bezier(0, 0, .3, 1)\n}\n\n.nav-mobile[_ngcontent-%COMP%]   #menu-toggle[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] ~ .menu-sidebar[_ngcontent-%COMP%], .nav-mobile[_ngcontent-%COMP%]   #menu-toggle[_ngcontent-%COMP%]:checked ~ .menu-sidebar[_ngcontent-%COMP%] {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    transition: -webkit-transform .3s cubic-bezier(0, 0, .3, 1);\n    transition: transform .3s cubic-bezier(0, 0, .3, 1);\n    transition: transform .3s cubic-bezier(0, 0, .3, 1), -webkit-transform .3s cubic-bezier(0, 0, .3, 1)\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    width: 50%\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 45px\n}\n\n.cart-container[_ngcontent-%COMP%], .logo-container[_ngcontent-%COMP%], .search-container[_ngcontent-%COMP%] {\n    max-height: 65px\n}\n\n.search-container[_ngcontent-%COMP%]{\n    padding: 0px;\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .account[_ngcontent-%COMP%] {\n    width: 20%;\n    text-align: right\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .account[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: auto\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n    width: 20%\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: auto\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n    width: 65px;\n    float: left;\n    cursor: pointer;\n    position: absolute\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%] {\n    box-shadow: 5px 0 5px -5px #333;\n    display: block;\n    width: 65vw;\n    bottom: 0;\n    background: #fff;\n    color: #333;\n    position: fixed;\n    -webkit-transform: translateX(-405px);\n            transform: translateX(-405px);\n    transition: -webkit-transform .3s cubic-bezier(0, 0, .3, 1);\n    transition: transform .3s cubic-bezier(0, 0, .3, 1);\n    transition: transform .3s cubic-bezier(0, 0, .3, 1), -webkit-transform .3s cubic-bezier(0, 0, .3, 1);\n    top: 45px;\n    z-index: 2;\n    list-style-type: none;\n    padding: 0;\n    max-width: 400px\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    position: absolute;\n    line-height: 40px;\n    font-size: 21px;\n    color: #333;\n    top: 0;\n    z-index: 0;\n    right: 16px\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    left: 25px\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    right: 25px\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 40px;\n    line-height: 45px;\n    font-size: 13px;\n    text-align: left;\n    position: relative;\n    border-bottom: 1px solid rgba(0, 0, 0, .1);\n    padding-left: 0;\n    width: 100%\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    background: #eee\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-sub[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: 0;\n    overflow: hidden;\n    background: #fff;\n    visibility: hidden;\n    transition: all .3s cubic-bezier(0, 0, .3, 1);\n    border-left: 1px solid #ccc;\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    z-index: 2;\n    max-width: 400px\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-sub[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    overflow: hidden;\n    padding-left: 10px\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-sub[_ngcontent-%COMP%]   .menu-sub-title[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    background-color: #05a19e;\n    color: #FFF\n}\n\n#advert[_ngcontent-%COMP%]{\n\n}\n\n#advert[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    max-height: 60px;\n}\n\n.account[_ngcontent-%COMP%]   .acc-inner[_ngcontent-%COMP%], .cart-container[_ngcontent-%COMP%]   .cart-inner[_ngcontent-%COMP%], .search-container[_ngcontent-%COMP%]   .search-inner[_ngcontent-%COMP%] {\n    padding: 10px\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-sub[_ngcontent-%COMP%]   .menu-sub-title[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    color: #FFF\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu-label[_ngcontent-%COMP%] {\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n    display: block\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu-toggle[_ngcontent-%COMP%] {\n    display: none\n}\n\n.nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu-toggle[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] ~ .menu-sub[_ngcontent-%COMP%], .nav-mobile[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu-toggle[_ngcontent-%COMP%]:checked ~ .menu-sub[_ngcontent-%COMP%] {\n    width: 65vw;\n    visibility: visible;\n    z-index: 1;\n    transition: width .35s cubic-bezier(0, 0, .3, 1)\n}\n\n.header-top[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #94a6b93b;\n    background-color: #345d88;\n}\n\n.logo-container[_ngcontent-%COMP%]   .logo-inner[_ngcontent-%COMP%]{\n    margin-top: 10px;\n}\n\n.logo-container[_ngcontent-%COMP%]   .logo-inner[_ngcontent-%COMP%], .logo-container[_ngcontent-%COMP%]   .logo-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%\n}\n\n.top-menu[_ngcontent-%COMP%]{\n    padding: 0px;\n    margin-top: 10px;\n}\n\n.pnt-menu[_ngcontent-%COMP%]{\n\n}\n\n.account[_ngcontent-%COMP%], .cart-container[_ngcontent-%COMP%] {\n    width: 50%;\n    float: left;\n    text-align: center\n}\n\n.dropbtn[_ngcontent-%COMP%] {\n    background-color: #355d87;\n    color: #FFF;\n    padding: 8px 15px;\n    font-size: 16px;\n    border: none;\n    cursor: pointer\n}\n\n.dropdown[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .2);\n    z-index: 1\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #000;\n    padding: 5px 9px;\n    text-decoration: none;\n    display: block\n}\n\n.extras[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .extras[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #FFF;\n    font-weight: 700;\n    text-transform: capitalize;\n    font-size: 13px;\n    text-decoration: none\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #ddd\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n    display: block\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n    \n}\n\n.header-bottom[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #345d89;\n    background-color: #345d89;\n    display: none;\n}\n\n.extras[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0\n}\n\n.extras[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: right;\n    list-style: none;\n    padding: 5px 10px\n}\n\n@media (min-width:320px) and (max-width:480px) {\n    .mobile_view_header[_ngcontent-%COMP%] {\n        display: block\n    }\n    .accart-container[_ngcontent-%COMP%], .desktop_view_header[_ngcontent-%COMP%], .search-container[_ngcontent-%COMP%] {\n        display: none\n    }\n    header[_ngcontent-%COMP%] {\n        position: fixed;\n        top: 0;\n        right: 0;\n        left: 0;\n        z-index: 999\n    }\n    .logo-container[_ngcontent-%COMP%] {\n        width: 100%;\n        text-align: center\n    }\n    .logo-container[_ngcontent-%COMP%]   .logo-inner[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%\n    }\n    .logo-container[_ngcontent-%COMP%]   .logo-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: auto;\n        height: 100%\n    }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/partials/header/header.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/components/partials/header/header.component.ngfactory.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./header.component.css.shim.ngstyle */ "./src/app/components/partials/header/header.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ../top-cart/top-cart.component.ngfactory */ "./src/app/components/partials/top-cart/top-cart.component.ngfactory.js");
var i5 = __webpack_require__(/*! ../top-cart/top-cart.component */ "./src/app/components/partials/top-cart/top-cart.component.ts");
var i6 = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var i7 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var i8 = __webpack_require__(/*! ../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
var i9 = __webpack_require__(/*! ../menu/menu.component.ngfactory */ "./src/app/components/partials/menu/menu.component.ngfactory.js");
var i10 = __webpack_require__(/*! ../menu/menu.component */ "./src/app/components/partials/menu/menu.component.ts");
var i11 = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var i12 = __webpack_require__(/*! ../top-search/top-search.component.ngfactory */ "./src/app/components/partials/top-search/top-search.component.ngfactory.js");
var i13 = __webpack_require__(/*! ../top-search/top-search.component */ "./src/app/components/partials/top-search/top-search.component.ts");
var i14 = __webpack_require__(/*! ./header.component */ "./src/app/components/partials/header/header.component.ts");
var i15 = __webpack_require__(/*! ngx-device-detector */ "ngx-device-detector");
var styles_HeaderComponent = [i0.styles];
var RenderType_HeaderComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HeaderComponent, data: {} });
exports.RenderType_HeaderComponent = RenderType_HeaderComponent;
function View_HeaderComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.setFalse() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(3, null, ["", ""]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/products/", _v.parent.context.$implicit.url, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.parent.context.$implicit.title; _ck(_v, 3, 0, currVal_3); }); }
function View_HeaderComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeaderComponent_5)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.parent === _v.parent.context.$implicit._id); _ck(_v, 2, 0, currVal_0); }, null); }
function View_HeaderComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 13, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "input", [["class", "submenu-toggle"], ["type", "checkbox"]], [[8, "id", 0]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "label", [["class", "submenu-label"]], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""])), (_l()(), i1.ɵeld(4, 0, null, null, 1, "div", [["class", "arrow right"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u203A"])), (_l()(), i1.ɵeld(6, 0, null, null, 7, "ul", [["class", "menu-sub"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 4, "li", [["class", "menu-sub-title"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "label", [["class", "submenu-label"]], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Back"])), (_l()(), i1.ɵeld(10, 0, null, null, 1, "div", [["class", "arrow left"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u2039"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeaderComponent_4)), i1.ɵdid(13, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.inMenu; _ck(_v, 13, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.url, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.url, ""); _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_2); var currVal_3 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.url, ""); _ck(_v, 8, 0, currVal_3); }); }
function View_HeaderComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "ul", [["class", "menu-sidebar"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeaderComponent_3)), i1.ɵdid(2, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 0, "span", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mainMenu; _ck(_v, 2, 0, currVal_0); }, null); }
function View_HeaderComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 19, "header", [["class", "mobile_view_header"], ["role", "banner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 18, "div", [["class", "mobile_view"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 17, "ul", [["class", "nav-mobile"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 3, "li", [["class", "logo"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 2, "a", [["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(5, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [["alt", "logo "]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "li", [["class", "cart"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "app-top-cart", [], null, null, null, i4.View_TopCartComponent_0, i4.RenderType_TopCartComponent)), i1.ɵdid(9, 245760, null, 0, i5.TopCartComponent, [i1.PLATFORM_ID, i6.StorageService, i7.ProductsService, i8.CartService, i2.Router], null, null), (_l()(), i1.ɵeld(10, 0, null, null, 2, "li", [["class", "account"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 0, "i", [["class", "fas fa-user"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 6, "li", [["class", "menu-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 0, "input", [["id", "menu-toggle"], ["type", "checkbox"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 2, "label", [["class", "menu-button"], ["for", "menu-toggle"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, ":svg:svg", [["class", "icon-open"], ["viewBox", "0 0 24 24"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setTrue() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 0, ":svg:path", [["d", "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeaderComponent_2)), i1.ɵdid(19, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/"; _ck(_v, 5, 0, currVal_2); _ck(_v, 9, 0); var currVal_4 = _co.mMenu; _ck(_v, 19, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 5).target; var currVal_1 = i1.ɵnov(_v, 5).href; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(1, "", _co.imageUrl, "/zuri/logo-placeholder.jpg"); _ck(_v, 6, 0, currVal_3); }); }
function View_HeaderComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(0, null, null, 0))], null, null); }
function View_HeaderComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(0, null, null, 0, null, View_HeaderComponent_8))], null, null); }
function View_HeaderComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 40, "header", [["class", "desktop_view_header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 28, "div", [["class", "header-top"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 27, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 26, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 3, "div", [["class", "col-md-1 top-menu"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 2, "div", [["class", "pnt-menu"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "app-menu", [], null, null, null, i9.View_MenuComponent_0, i9.RenderType_MenuComponent)), i1.ɵdid(7, 245760, null, 0, i10.MenuComponent, [i7.ProductsService, i2.ActivatedRoute, i11.CategoryService], null, null), (_l()(), i1.ɵeld(8, 0, null, null, 4, "div", [["class", "col-md-2 col-xs-12 logo-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 3, "a", [["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(10, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(11, 0, null, null, 1, "div", [["class", "logo-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 0, "img", [["alt", "logo "]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 3, "div", [["class", "col-md-6 search-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 2, "div", [["class", "search-inner clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 1, "app-top-search", [], null, null, null, i12.View_TopSearchComponent_0, i12.RenderType_TopSearchComponent)), i1.ɵdid(16, 114688, null, 0, i13.TopSearchComponent, [i1.PLATFORM_ID, i2.Router], null, null), (_l()(), i1.ɵeld(17, 0, null, null, 12, "div", [["class", "col-md-3 accart-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 7, "div", [["class", "account"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 6, "div", [["class", "acc-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 5, "div", [["class", "dropdown"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 1, "button", [["class", "dropbtn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-user"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 2, "div", [["class", "dropdown-content"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeaderComponent_7)), i1.ɵdid(25, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"], ngIfThen: [1, "ngIfThen"], ngIfElse: [2, "ngIfElse"] }, null), (_l()(), i1.ɵeld(26, 0, null, null, 3, "div", [["class", "cart-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 2, "div", [["class", "cart-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 1, "app-top-cart", [], null, null, null, i4.View_TopCartComponent_0, i4.RenderType_TopCartComponent)), i1.ɵdid(29, 245760, null, 0, i5.TopCartComponent, [i1.PLATFORM_ID, i6.StorageService, i7.ProductsService, i8.CartService, i2.Router], null, null), (_l()(), i1.ɵeld(30, 0, null, null, 10, "div", [["class", "header-bottom"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 9, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 3, "div", [["class", "col-md-2 top-menu"]], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 2, "div", [["class", "pnt-menu"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 1, "app-menu", [], null, null, null, i9.View_MenuComponent_0, i9.RenderType_MenuComponent)), i1.ɵdid(36, 245760, null, 0, i10.MenuComponent, [i7.ProductsService, i2.ActivatedRoute, i11.CategoryService], null, null), (_l()(), i1.ɵeld(37, 0, null, null, 3, "div", [["class", "col-md-10 extras"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 0, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 0, "li", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; _ck(_v, 7, 0); var currVal_2 = "/"; _ck(_v, 10, 0, currVal_2); _ck(_v, 16, 0); var currVal_4 = _co.user; var currVal_5 = _co.user1; var currVal_6 = _co.user2; _ck(_v, 25, 0, currVal_4, currVal_5, currVal_6); _ck(_v, 29, 0); _ck(_v, 36, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 10).target; var currVal_1 = i1.ɵnov(_v, 10).href; _ck(_v, 9, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(1, "", _co.imageUrl, "/zuri/logo-placeholder.jpg"); _ck(_v, 12, 0, currVal_3); }); }
function View_HeaderComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeaderComponent_1)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeaderComponent_6)), i1.ɵdid(3, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mobile_view; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.desktop_view; _ck(_v, 3, 0, currVal_1); }, null); }
exports.View_HeaderComponent_0 = View_HeaderComponent_0;
function View_HeaderComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), i1.ɵdid(1, 114688, null, 0, i14.HeaderComponent, [i1.PLATFORM_ID, i2.Router, i7.ProductsService, i11.CategoryService, i15.DeviceDetectorService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HeaderComponent_Host_0 = View_HeaderComponent_Host_0;
var HeaderComponentNgFactory = i1.ɵccf("app-header", i14.HeaderComponent, View_HeaderComponent_Host_0, {}, {}, []);
exports.HeaderComponentNgFactory = HeaderComponentNgFactory;


/***/ }),

/***/ "./src/app/components/partials/header/header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/partials/header/header.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
__webpack_require__(/*! rxjs/add/operator/filter */ "rxjs/add/operator/filter");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var category_service_1 = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var ngx_device_detector_1 = __webpack_require__(/*! ngx-device-detector */ "ngx-device-detector");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(platformId, router, productService, categoryService, deviceService) {
        this.platformId = platformId;
        this.router = router;
        this.productService = productService;
        this.categoryService = categoryService;
        this.deviceService = deviceService;
        this.mobile_view = false;
        this.desktop_view = false;
        this.mMenu = false;
        this.imageUrl = '';
        this.deviceInfo = null;
        this.epicFunction();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            // this._getTopMenu();
            this._getInnerMenu();
            this.imageUrl = IMG_URL;
            //if (window.screen.width >= 320 && window.screen.width <= 480) { // 768px portrait
            if (this.deviceInfo.device == 'android' || this.deviceInfo.device == 'iphone') {
                this.mobile_view = true;
                this.desktop_view = false;
                this.mMenu = false;
            }
            else {
                this.mobile_view = false;
                this.desktop_view = true;
            }
        }
        if (common_1.isPlatformServer(this.platformId)) {
            this.mobile_view = false;
            this.desktop_view = true;
            //this._getTopMenu();
            this._getInnerMenu();
            this.imageUrl = IMG_URL;
        }
        this._home();
    };
    HeaderComponent.prototype.epicFunction = function () {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        //console.log(this.deviceInfo);
    };
    // private _getTopMenu() {
    //   this.menuSub = this.productService
    //     .getCategoryTop$()
    //     .subscribe(
    //       res => {
    //         this.mainMenu = res;
    //         this.categoryService.setCategoryData(res)
    //       },
    //       err => {
    //          console.error(err);
    //         // this.error = true;
    //       }
    //     );
    // }
    HeaderComponent.prototype._getInnerMenu = function () {
        var _this = this;
        this.menuSub = this.productService
            .getAllCategory$()
            .subscribe(function (res) {
            _this.menu = res;
            _this.inMenu = _this.menu.all;
            _this.mainMenu = _this.menu.top;
            _this.categoryService.setCategoryIData(_this.inMenu);
            _this.categoryService.setCategoryData(_this.mainMenu);
        }, function (err) {
            console.error(err);
            // this.error = true;
        });
    };
    HeaderComponent.prototype._home = function () {
        var _this = this;
        //
        var checkData;
        this.productService.homeData$.subscribe(function (data) {
            checkData = data;
            if (checkData == null) {
                _this.homeSub = _this.productService.getHome$()
                    .subscribe(function (res) {
                    _this.productService.setHomeData(res);
                }, function (err) {
                    console.error(err);
                });
            }
            else {
            }
        });
    };
    HeaderComponent.prototype.setTrue = function () {
        this.mMenu = true;
    };
    HeaderComponent.prototype.setFalse = function () {
        this.mMenu = false;
    };
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/components/partials/header/header.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/partials/header/header.module.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
exports.HeaderModule = HeaderModule;


/***/ }),

/***/ "./src/app/components/partials/home-category/home-category.component.css.shim.ngstyle.js":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/partials/home-category/home-category.component.css.shim.ngstyle.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".category-section[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\n}\n\n.category-section[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%] {\n    background-color: #355d87;\n}\n\n.bg-blue[_ngcontent-%COMP%]   .category-body[_ngcontent-%COMP%] {\n    border: 1px solid #158cf2;\n}\n\n.category-name[_ngcontent-%COMP%] {\n    float: left;\n    font-size: 1.2rem;\n    color: #ffffff;\n    margin: 5px 10px\n}\n\n.category-link[_ngcontent-%COMP%] {\n    float: right;\n    margin-right: 10px;\n    margin-top: 6px\n}\n\n.category-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #FFF;\n    font-size: 14px;\n    text-transform: lowercase;\n    text-decoration: underline\n}\n\n.category-body[_ngcontent-%COMP%] {\n    background-color: #FFF\n}\n\n.category-body[_ngcontent-%COMP%]   .category-img[_ngcontent-%COMP%] {\n    padding-right: 0\n}\n\n.category-body[_ngcontent-%COMP%]   .category-prods[_ngcontent-%COMP%] {\n    padding-left: 0\n}\n\n.main-image[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: #ddd\n}\n\n.main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n.main-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0\n}\n\n.main-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 0 10px;\n    list-style: none\n}\n\n.main-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none\n}\n\n.product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%] {\n    border: 1px solid #FFF\n}\n\n.product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n    width: 50%;\n    float: left\n}\n\n.product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90%\n}\n\n.product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n    width: 50%;\n    float: left;\n    padding: 0\n}\n\n.product-container[_ngcontent-%COMP%]:hover   .product-info[_ngcontent-%COMP%] {\n    background-color: #FFF;\n    color: #666\n}\n\n.product-container[_ngcontent-%COMP%]:hover   .product-inner[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .prod-title[_ngcontent-%COMP%] {\n    color: #666\n}\n\n.product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .prod-title[_ngcontent-%COMP%] {\n    height: 50px\n}\n\n.product-container[_ngcontent-%COMP%]   .product-inner[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .prod-price[_ngcontent-%COMP%] {\n    font-size: 13px\n}\n\n.category-strip[_ngcontent-%COMP%]   .strip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n.hm-category-brands[_ngcontent-%COMP%] {\n    margin: 10px auto;\n    border-top: 1px solid #ddd;\n    border-bottom: 1px solid #ddd;\n    max-width: 98%\n}\n\n.hm-category-brands[_ngcontent-%COMP%]   .hm-cat[_ngcontent-%COMP%] {\n    margin: 5px 0\n}\n\n.hm-category-brands[_ngcontent-%COMP%]   .hm-cat[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0\n}\n\n.hm-category-brands[_ngcontent-%COMP%]   .hm-cat[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n    display: inline-block;\n    margin: 0 10px\n}\n\n.hm-category-brands[_ngcontent-%COMP%]   .hm-cat[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #706e6f;\n    text-decoration: none\n}\n\n.hm-category-brands[_ngcontent-%COMP%]   .hm-cat[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #2fa09b\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/partials/home-category/home-category.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/components/partials/home-category/home-category.component.ngfactory.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home-category.component.css.shim.ngstyle */ "./src/app/components/partials/home-category/home-category.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./home-category.component */ "./src/app/components/partials/home-category/home-category.component.ts");
var i5 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var styles_HomeCategoryComponent = [i0.styles];
var RenderType_HomeCategoryComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeCategoryComponent, data: {} });
exports.RenderType_HomeCategoryComponent = RenderType_HomeCategoryComponent;
function View_HomeCategoryComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent, 0), _v.parent.context.$implicit.price, 0)); _ck(_v, 1, 0, currVal_0); }); }
function View_HomeCategoryComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Ksh. ", " "])), i1.ɵppd(2, 2)], null, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent.parent, 0), _v.parent.context.$implicit.special_price, 0)); _ck(_v, 1, 0, currVal_0); }); }
function View_HomeCategoryComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 16, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 15, "div", [["class", "product-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 14, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(4, 0, null, null, 12, "div", [["class", "product-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "product-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 8, "div", [["class", "product-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "div", [["class", "prod-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, [" ", " "])), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeCategoryComponent_3)), i1.ɵdid(12, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeCategoryComponent_4)), i1.ɵdid(14, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 0, "div", [["class", "prod-rate"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/product/", _v.context.$implicit.url, ""); _ck(_v, 3, 0, currVal_2); var currVal_6 = (_v.context.$implicit.special_price == 0); _ck(_v, 12, 0, currVal_6); var currVal_7 = (_v.context.$implicit.special_price != 0); _ck(_v, 14, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.context.$implicit.images[0][0], ""); var currVal_4 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.title, ""); _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_5 = _v.context.$implicit.title; _ck(_v, 9, 0, currVal_5); }); }
function View_HomeCategoryComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 22, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 21, "section", [], [[8, "className", 0]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 6, "div", [["class", "category-header clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h3", [["class", "category-name"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵeld(5, 0, null, null, 3, "div", [["class", "category-link"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(7, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["View All"])), (_l()(), i1.ɵeld(9, 0, null, null, 13, "div", [["class", "category-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 5, "div", [["class", "col-md-3 category-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 3, "div", [["class", "main-image"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(14, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 0, "div", [["class", "main-links"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 5, "div", [["class", "col-md-9 category-prods"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 3, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeCategoryComponent_2)), i1.ɵdid(22, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_4 = i1.ɵinlineInterpolate(1, "products/", _v.context.$implicit.category.url, ""); _ck(_v, 7, 0, currVal_4); var currVal_7 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.image.link, ""); _ck(_v, 14, 0, currVal_7); var currVal_10 = _v.context.$implicit.products; _ck(_v, 22, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "category-section ", _v.context.$implicit.category.url, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.category.title; _ck(_v, 4, 0, currVal_1); var currVal_2 = i1.ɵnov(_v, 7).target; var currVal_3 = i1.ɵnov(_v, 7).href; _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_5 = i1.ɵnov(_v, 14).target; var currVal_6 = i1.ɵnov(_v, 14).href; _ck(_v, 13, 0, currVal_5, currVal_6); var currVal_8 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "", _v.context.$implicit.image.img, ""); var currVal_9 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.image.alt, ""); _ck(_v, 15, 0, currVal_8, currVal_9); }); }
function View_HomeCategoryComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i3.DecimalPipe, [i1.LOCALE_ID]), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeCategoryComponent_1)), i1.ɵdid(2, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.category; _ck(_v, 2, 0, currVal_0); }, null); }
exports.View_HomeCategoryComponent_0 = View_HomeCategoryComponent_0;
function View_HomeCategoryComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home-category", [], null, null, null, View_HomeCategoryComponent_0, RenderType_HomeCategoryComponent)), i1.ɵdid(1, 245760, null, 0, i4.HomeCategoryComponent, [i5.ProductsService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeCategoryComponent_Host_0 = View_HomeCategoryComponent_Host_0;
var HomeCategoryComponentNgFactory = i1.ɵccf("app-home-category", i4.HomeCategoryComponent, View_HomeCategoryComponent_Host_0, {}, {}, []);
exports.HomeCategoryComponentNgFactory = HomeCategoryComponentNgFactory;


/***/ }),

/***/ "./src/app/components/partials/home-category/home-category.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/partials/home-category/home-category.component.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var HomeCategoryComponent = /** @class */ (function () {
    function HomeCategoryComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.imageUrl = '';
        var checkData;
        this.categorySub = this.productService.homeData$.subscribe(function (data) {
            checkData = data;
            if (checkData != null) {
                _this.category = checkData.category;
                _this.loading = false;
            }
        });
    }
    HomeCategoryComponent.prototype.ngOnInit = function () {
        this.imageUrl = IMG_URL;
        this.loading = false;
        //this._getCategoryProducts();
    };
    HomeCategoryComponent.prototype._getCategoryProducts = function () {
        var _this = this;
        this.loading = true;
        // Get future, public events
        this.productService.homeData$
            .subscribe(function (res) {
            _this.home = res;
            _this.loading = false;
            console.log(res);
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
        });
    };
    HomeCategoryComponent.prototype.ngOnDestroy = function () {
        if (this.categorySub) {
            this.categorySub.unsubscribe();
        }
    };
    return HomeCategoryComponent;
}());
exports.HomeCategoryComponent = HomeCategoryComponent;


/***/ }),

/***/ "./src/app/components/partials/home-category/home-category.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/partials/home-category/home-category.module.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HomeCategoryModule = /** @class */ (function () {
    function HomeCategoryModule() {
    }
    return HomeCategoryModule;
}());
exports.HomeCategoryModule = HomeCategoryModule;


/***/ }),

/***/ "./src/app/components/partials/home-menu/home-menu.component.css.shim.ngstyle.js":
/*!***************************************************************************************!*\
  !*** ./src/app/components/partials/home-menu/home-menu.component.css.shim.ngstyle.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover {\n    color: #706e6f;\n    text-decoration: none\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border: none\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .hmenu-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border: 1px solid #FFF\n}\n\n#main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: inherit;\n    line-height: 30px\n}\n\n#main_menu[_ngcontent-%COMP%] {\n    background-color: #FFF;\n    float: left;\n    padding: 0;\n    width: 160px;\n    min-height: 290px;\n    line-height: 30px;\n    border-radius: 0;\n    margin: 0;\n    border: 1px solid #ddd;\n    border-top: none\n}\n\n#main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%] {\n    color: #292727;\n    list-style-type: none;\n    padding-left: 15px\n}\n\n#main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: inherit;\n    font-family: inherit\n}\n\n#main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 13px;\n    color: #5a5a56;\n    padding-right: 10px\n}\n\n#main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]:hover, #main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n    color: #FFF;\n    background: #FFF;\n    cursor: pointer\n}\n\n#main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .hmenu-text[_ngcontent-%COMP%], #main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]:hover   .hmenu-text[_ngcontent-%COMP%] {\n    color: #345d89\n}\n\n.offer_link[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #870040;\n    border-top: 1px solid #870040\n}\n\n.offer_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .offer_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #870040;\n    font-size: 15px;\n    font-weight: 500\n}\n\n.main_list[_ngcontent-%COMP%]   .list-content[_ngcontent-%COMP%] {\n    background-color: #fff;\n    top: 0;\n    position: absolute;\n    left: 158px;\n    width: 910px;\n    padding: 0 0 10px;\n    float: left;\n    z-index: 99999;\n    border: 1px solid #DDD;\n    height: 100%\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    float: left;\n    max-height: 385px;\n    background: #fff;\n    width: 24%;\n    border-right: 1px solid #DDD\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col-2[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    float: left;\n    height: 557px;\n    background: #fff;\n    width: 40%\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%]   a.view[_ngcontent-%COMP%], .list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    word-wrap: break-word;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    float: left;\n    width: 167px\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0 17px 0 16px;\n    overflow: hidden;\n    margin: 0\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline!important;\n    color: #870040!important;\n    background-color: #FFF!important\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-family: inherit;\n    color: #605f5d;\n    text-decoration: none\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a.headingText[_ngcontent-%COMP%] {\n    font-size: 13px;\n    font-family: inherit;\n    font-weight: 700;\n    color: #37474e\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%]   a.view[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-family: inherit;\n    text-decoration: underline;\n    padding: 0 17px 0 16px;\n    margin: 0\n}\n\n.main_list[_ngcontent-%COMP%]:hover   .list-content[_ngcontent-%COMP%] {\n    display: block\n}\n\n.main_list[_ngcontent-%COMP%]   .list-content[_ngcontent-%COMP%] {\n    display: none\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/partials/home-menu/home-menu.component.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./src/app/components/partials/home-menu/home-menu.component.ngfactory.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home-menu.component.css.shim.ngstyle */ "./src/app/components/partials/home-menu/home-menu.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./home-menu.component */ "./src/app/components/partials/home-menu/home-menu.component.ts");
var i5 = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var styles_HomeMenuComponent = [i0.styles];
var RenderType_HomeMenuComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeMenuComponent, data: {} });
exports.RenderType_HomeMenuComponent = RenderType_HomeMenuComponent;
function View_HomeMenuComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "a", [["class", "link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(3, null, ["", ""]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/products/", _v.parent.context.$implicit.url, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.parent.context.$implicit.title; _ck(_v, 3, 0, currVal_3); }); }
function View_HomeMenuComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeMenuComponent_5)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.parent === _v.parent.parent.context.$implicit._id); _ck(_v, 2, 0, currVal_0); }, null); }
function View_HomeMenuComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "dk-col"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "a", [["class", "headingText"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeMenuComponent_4)), i1.ɵdid(6, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = i1.ɵinlineInterpolate(1, "/products/", _v.parent.context.$implicit.url, ""); _ck(_v, 3, 0, currVal_2); var currVal_4 = _co.inMenu; _ck(_v, 6, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _v.parent.context.$implicit.title; _ck(_v, 4, 0, currVal_3); }); }
function View_HomeMenuComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeMenuComponent_3)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.parent === _v.parent.context.$implicit._id); _ck(_v, 2, 0, currVal_0); }, null); }
function View_HomeMenuComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "li", [["class", "main_list"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 0, "div", [["class", "hmenu-icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "div", [["class", "hmenu-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, [" ", " "])), (_l()(), i1.ɵeld(6, 0, null, null, 2, "div", [["class", "list-content"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeMenuComponent_2)), i1.ɵdid(8, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = i1.ɵinlineInterpolate(1, "/products/", _v.context.$implicit.url, ""); _ck(_v, 2, 0, currVal_2); var currVal_4 = _co.inMenu; _ck(_v, 8, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.title; _ck(_v, 5, 0, currVal_3); }); }
function View_HomeMenuComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "ul", [["id", "main_menu"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeMenuComponent_1)), i1.ɵdid(2, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mainMenu; _ck(_v, 2, 0, currVal_0); }, null); }
exports.View_HomeMenuComponent_0 = View_HomeMenuComponent_0;
function View_HomeMenuComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home-menu", [], null, null, null, View_HomeMenuComponent_0, RenderType_HomeMenuComponent)), i1.ɵdid(1, 245760, null, 0, i4.HomeMenuComponent, [i5.CategoryService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeMenuComponent_Host_0 = View_HomeMenuComponent_Host_0;
var HomeMenuComponentNgFactory = i1.ɵccf("app-home-menu", i4.HomeMenuComponent, View_HomeMenuComponent_Host_0, {}, {}, []);
exports.HomeMenuComponentNgFactory = HomeMenuComponentNgFactory;


/***/ }),

/***/ "./src/app/components/partials/home-menu/home-menu.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/partials/home-menu/home-menu.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var category_service_1 = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var HomeMenuComponent = /** @class */ (function () {
    function HomeMenuComponent(categoryService) {
        var _this = this;
        this.categoryService = categoryService;
        categoryService.categoryData$.subscribe(function (data) { return _this.mainMenu = data; });
        categoryService.categoryIData$.subscribe(function (data) { return _this.inMenu = data; });
    }
    HomeMenuComponent.prototype.ngOnInit = function () {
    };
    HomeMenuComponent.prototype.ngOnDestroy = function () {
        if (this.menuSub) {
            this.menuSub.unsubscribe();
        }
        if (this.menuISub) {
            this.menuISub.unsubscribe();
        }
    };
    return HomeMenuComponent;
}());
exports.HomeMenuComponent = HomeMenuComponent;


/***/ }),

/***/ "./src/app/components/partials/home-menu/home-menu.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/partials/home-menu/home-menu.module.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HomeMenuModule = /** @class */ (function () {
    function HomeMenuModule() {
    }
    return HomeMenuModule;
}());
exports.HomeMenuModule = HomeMenuModule;


/***/ }),

/***/ "./src/app/components/partials/main-slider/main-slider.component.css.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/partials/main-slider/main-slider.component.css.shim.ngstyle.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".carousel-indicators[_ngcontent-%COMP%]{\nbottom: 3px;\nmargin-bottom: 0px;\n}\n.ad[_ngcontent-%COMP%]{\n    margin-bottom: 5px;\n}\n.ad[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    max-height: 93px;\n}\n.col-md-8[_ngcontent-%COMP%]{\n    padding: 0px;\n}\n.col-md-4[_ngcontent-%COMP%]{\n    padding-left:0px;\n}\n.w-100[_ngcontent-%COMP%]{\n    min-height: 290px;\n}\n@media (min-width: 320px) and (max-width: 480px) {\n    .col-md-4[_ngcontent-%COMP%]{\n        display: none;\n    }\n.carousel-indicators[_ngcontent-%COMP%]{\nbottom: 3px;\nmargin-bottom: 0px;\n}\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/partials/main-slider/main-slider.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/components/partials/main-slider/main-slider.component.ngfactory.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./main-slider.component.css.shim.ngstyle */ "./src/app/components/partials/main-slider/main-slider.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./main-slider.component */ "./src/app/components/partials/main-slider/main-slider.component.ts");
var i3 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var styles_MainSliderComponent = [i0.styles];
var RenderType_MainSliderComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_MainSliderComponent, data: {} });
exports.RenderType_MainSliderComponent = RenderType_MainSliderComponent;
function View_MainSliderComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 30, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 19, "div", [["class", "col-md-8"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 18, "div", [["class", "carousel slide"], ["data-ride", "carousel"], ["id", "carouselExampleIndicators"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "ol", [["class", "carousel-indicators"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "li", [["class", "active"], ["data-slide-to", "0"], ["data-target", "#carouselExampleIndicators"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, "li", [["data-slide-to", "1"], ["data-target", "#carouselExampleIndicators"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 6, "div", [["class", "carousel-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "carousel-item active"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "img", [["alt", ""], ["class", "d-block w-100"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 2, "div", [["class", "carousel-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 0, "img", [["alt", ""], ["class", "d-block w-100"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 3, "a", [["class", "carousel-control-prev"], ["data-slide", "prev"], ["href", "#carouselExampleIndicators"], ["role", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "carousel-control-prev-icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Previous"])), (_l()(), i1.ɵeld(17, 0, null, null, 3, "a", [["class", "carousel-control-next"], ["data-slide", "next"], ["href", "#carouselExampleIndicators"], ["role", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "carousel-control-next-icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Next"])), (_l()(), i1.ɵeld(21, 0, null, null, 9, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 2, "div", [["class", "ad"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 0, "img", [["alt", "topad"], ["src", "https://www.static.phonestablets.co.ke/img/zuri/side-menu-1.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 2, "div", [["class", "ad"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 0, "img", [["src", "https://www.static.phonestablets.co.ke/img/zuri/side-menu-2.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 2, "div", [["class", "ad"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 0, "img", [["src", "https://www.static.phonestablets.co.ke/img/zuri/side-menu-3.jpg"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", _co.imageUrl, "/zuri/Main-slider-1.jpg"); _ck(_v, 9, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "", _co.imageUrl, "/zuri/Main-slider-2.jpg"); _ck(_v, 12, 0, currVal_1); }); }
exports.View_MainSliderComponent_0 = View_MainSliderComponent_0;
function View_MainSliderComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-main-slider", [], null, null, null, View_MainSliderComponent_0, RenderType_MainSliderComponent)), i1.ɵdid(1, 245760, null, 0, i2.MainSliderComponent, [i3.ProductsService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_MainSliderComponent_Host_0 = View_MainSliderComponent_Host_0;
var MainSliderComponentNgFactory = i1.ɵccf("app-main-slider", i2.MainSliderComponent, View_MainSliderComponent_Host_0, {}, {}, []);
exports.MainSliderComponentNgFactory = MainSliderComponentNgFactory;


/***/ }),

/***/ "./src/app/components/partials/main-slider/main-slider.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/partials/main-slider/main-slider.component.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var MainSliderComponent = /** @class */ (function () {
    function MainSliderComponent(productService) {
        this.productService = productService;
        this.imageUrl = '';
    }
    MainSliderComponent.prototype.ngOnInit = function () {
        this.imageUrl = IMG_URL;
        this._getSlider();
    };
    MainSliderComponent.prototype._getSlider = function () {
        var _this = this;
        this.sliderSub = this.productService
            .getMainSlider$()
            .subscribe(function (res) {
            _this.slider = res;
        }, function (err) {
            console.error(err);
        });
    };
    MainSliderComponent.prototype.ngOnDestroy = function () {
        if (this.sliderSub) {
            this.sliderSub.unsubscribe();
        }
    };
    return MainSliderComponent;
}());
exports.MainSliderComponent = MainSliderComponent;


/***/ }),

/***/ "./src/app/components/partials/main-slider/main-slider.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/partials/main-slider/main-slider.module.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MainSliderModule = /** @class */ (function () {
    function MainSliderModule() {
    }
    return MainSliderModule;
}());
exports.MainSliderModule = MainSliderModule;


/***/ }),

/***/ "./src/app/components/partials/menu/menu.component.css.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/components/partials/menu/menu.component.css.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".dropdown[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    width: 100%\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%], .main_list[_ngcontent-%COMP%]:hover   .list-content[_ngcontent-%COMP%] {\n    display: block\n}\n\n.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border: none;\n    background-color: #355d87;\n    color: #FFF;\n    padding: 6px 0;\n    width: 100%;\n    text-align: right;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    margin: 0;\n    list-style: none;\n    width: 100%;\n    padding: 0\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border: none\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .hmenu-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border: 1px solid #FFF\n}\n\n#main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: inherit;\n    line-height: 30px\n}\n\n#main_menu[_ngcontent-%COMP%] {\n    background-color: #FFF;\n    float: left;\n    padding: 0;\n    width: 160px;\n    min-height: 290px;\n    line-height: 30px;\n    border-radius: 0;\n    margin: 0;\n    border: 1px solid #ddd;\n    border-top: none\n}\n\n#main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%] {\n    color: #292727;\n    list-style-type: none;\n    padding-left: 15px\n}\n\n#main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #292727;\n    text-decoration: none\n}\n\n#main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: inherit;\n    font-family: inherit\n}\n\n#main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 13px;\n    color: #5a5a56;\n    padding-right: 10px\n}\n\n#main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]:hover, #main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n    color: #ddd;\n    background: #FFF;\n    cursor: pointer\n}\n\n#main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .hmenu-text[_ngcontent-%COMP%], #main_menu[_ngcontent-%COMP%]   .main_list[_ngcontent-%COMP%]:hover   .hmenu-text[_ngcontent-%COMP%] {\n    color: #EC9000\n}\n\n.offer_link[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #870040;\n    border-top: 1px solid #870040\n}\n\n.offer_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .offer_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #870040;\n    font-size: 15px;\n    font-weight: 500\n}\n\n.main_list[_ngcontent-%COMP%]   .list-content[_ngcontent-%COMP%] {\n    background-color: #fff;\n    top: 0;\n    position: absolute;\n    left: 158px;\n    width: 910px;\n    padding: 0 0 10px;\n    float: left;\n    z-index: 99999;\n    border: 1px solid #DDD;\n    height: 100%;\n    display: none\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    float: left;\n    max-height: 385px;\n    background: #fff;\n    width: 24%;\n    border-right: 1px solid #DDD\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col-2[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    float: left;\n    height: 557px;\n    background: #fff;\n    width: 40%\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%]   a.view[_ngcontent-%COMP%], .list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    word-wrap: break-word;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    float: left;\n    width: 167px\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0 17px 0 16px;\n    overflow: hidden;\n    margin: 0\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline!important;\n    color: #870040!important;\n    background-color: #FFF!important\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-family: inherit;\n    color: #605f5d;\n    text-decoration: none\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a.headingText[_ngcontent-%COMP%] {\n    font-size: 13px;\n    font-family: inherit;\n    font-weight: 700;\n    color: #37474e\n}\n\n.list-content[_ngcontent-%COMP%]   .dk-col[_ngcontent-%COMP%]   a.view[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-family: inherit;\n    text-decoration: underline;\n    padding: 0 17px 0 16px;\n    margin: 0\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/partials/menu/menu.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/components/partials/menu/menu.component.ngfactory.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./menu.component.css.shim.ngstyle */ "./src/app/components/partials/menu/menu.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./menu.component */ "./src/app/components/partials/menu/menu.component.ts");
var i5 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var i6 = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var styles_MenuComponent = [i0.styles];
var RenderType_MenuComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_MenuComponent, data: {} });
exports.RenderType_MenuComponent = RenderType_MenuComponent;
function View_MenuComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "a", [["class", "link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(3, null, ["", ""]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/products/", _v.parent.context.$implicit.url, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.parent.context.$implicit.title; _ck(_v, 3, 0, currVal_3); }); }
function View_MenuComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MenuComponent_5)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.parent === _v.parent.parent.context.$implicit._id); _ck(_v, 2, 0, currVal_0); }, null); }
function View_MenuComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "dk-col"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "a", [["class", "headingText"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MenuComponent_4)), i1.ɵdid(6, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = i1.ɵinlineInterpolate(1, "/products/", _v.parent.context.$implicit.url, ""); _ck(_v, 3, 0, currVal_2); var currVal_4 = _co.inMenu; _ck(_v, 6, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _v.parent.context.$implicit.title; _ck(_v, 4, 0, currVal_3); }); }
function View_MenuComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MenuComponent_3)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.parent === _v.parent.context.$implicit._id); _ck(_v, 2, 0, currVal_0); }, null); }
function View_MenuComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "li", [["class", "main_list"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 0, "div", [["class", "hmenu-icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "div", [["class", "hmenu-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, [" ", " "])), (_l()(), i1.ɵeld(6, 0, null, null, 2, "div", [["class", "list-content"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MenuComponent_2)), i1.ɵdid(8, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = i1.ɵinlineInterpolate(1, "/products/", _v.context.$implicit.url, ""); _ck(_v, 2, 0, currVal_2); var currVal_4 = _co.inMenu; _ck(_v, 8, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.title; _ck(_v, 5, 0, currVal_3); }); }
function View_MenuComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "div", [["class", "dropdown"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "button", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "i", [["class", "fas fa-bars fa-2x"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "ul", [["class", "dropdown-menu"], ["id", "main_menu"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MenuComponent_1)), i1.ɵdid(5, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mainMenu; _ck(_v, 5, 0, currVal_0); }, null); }
exports.View_MenuComponent_0 = View_MenuComponent_0;
function View_MenuComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-menu", [], null, null, null, View_MenuComponent_0, RenderType_MenuComponent)), i1.ɵdid(1, 245760, null, 0, i4.MenuComponent, [i5.ProductsService, i2.ActivatedRoute, i6.CategoryService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_MenuComponent_Host_0 = View_MenuComponent_Host_0;
var MenuComponentNgFactory = i1.ɵccf("app-menu", i4.MenuComponent, View_MenuComponent_Host_0, {}, {}, []);
exports.MenuComponentNgFactory = MenuComponentNgFactory;


/***/ }),

/***/ "./src/app/components/partials/menu/menu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/partials/menu/menu.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var category_service_1 = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(productService, route, categoryService) {
        var _this = this;
        this.productService = productService;
        this.route = route;
        this.categoryService = categoryService;
        categoryService.categoryData$.subscribe(function (data) { return _this.mainMenu = data; });
        categoryService.categoryIData$.subscribe(function (data) { return _this.inMenu = data; });
    }
    MenuComponent.prototype.ngOnInit = function () {
        // this._getTopMenu();
        // this._getInnerMenu();
    };
    MenuComponent.prototype._getTopMenu = function () {
        var _this = this;
        this.menuSub = //this.productService
            //.getCategoryTop$()
            this.categoryService.categoryData$
                .subscribe(function (res) {
                _this.mainMenu = res;
                _this.categoryService.setCategoryData(res);
            }, function (err) {
                console.error(err);
                // this.error = true;
            });
    };
    MenuComponent.prototype._getInnerMenu = function () {
        var _this = this;
        this.menuSub = this.productService
            .getAllCategory$()
            .subscribe(function (res) {
            _this.inMenu = res;
            _this.categoryService.setCategoryIData(res);
        }, function (err) {
            console.error(err);
            // this.error = true;
        });
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        //this.menuSub.unsubscribe();
    };
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;


/***/ }),

/***/ "./src/app/components/partials/menu/menu.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/partials/menu/menu.module.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    return MenuModule;
}());
exports.MenuModule = MenuModule;


/***/ }),

/***/ "./src/app/components/partials/product-cart/product-cart.component.css.shim.ngstyle.js":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/partials/product-cart/product-cart.component.css.shim.ngstyle.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["#cart-page[_ngcontent-%COMP%] {\n   \n}\n\n.cart-container[_ngcontent-%COMP%]   .cart-header[_ngcontent-%COMP%] {\n    background-color: #706e6f;\n    color: #FFF;\n    padding: 10px;\n    text-transform: capitalize;\n    font-weight: 700;\n    margin: 0 0 20px;\n    border-bottom: 1px solid;\n    text-align: center;\n}\n\n.cart-container[_ngcontent-%COMP%]   .cart-cont[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #ddd;\n    margin: 0px 0px 5px 0px;\n    padding-bottom: 5px;\n    position: relative;\n}\n\n.cart-container[_ngcontent-%COMP%]   .cart-cont[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]{\n\n}\n\n.cart-container[_ngcontent-%COMP%]   .cart-cont[_ngcontent-%COMP%]   .col-md-9[_ngcontent-%COMP%]{\n\n}\n\n.cart-container[_ngcontent-%COMP%]   .cart-cont[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]{\n\n}\n\n.prod-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n.prod-qty[_ngcontent-%COMP%] {\n    border-top: 1px solid #ddd\n}\n\n.prod-qty[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%] {\n    border: 1px solid #ddd;\n    float: right;\n    width: 50px;\n    margin-top: 5px\n}\n\n.prod-qty[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 50%;\n    float: left;\n    text-align: center;\n    cursor: pointer;\n    color: #FFF;\n    background-color: #706e6f;\n    border: none\n}\n\n.checkout-btn[_ngcontent-%COMP%], {\n    border-radius: 0\n}\n\n.prod-qty[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: #4aadaa\n}\n\n.prod-qty[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%] {\n    border-right: 1px solid\n}\n\n.prod-price[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    font-size: 16px;\n    color: #009d8f;\n    font-weight: 700;\n    width: 50%;\nfloat: left;\n}\n\n.prod-subtotal[_ngcontent-%COMP%]{\n    width: 50%;\n    float: left;\n}\n\n.delete-cart[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom: 0px;\n    right: 0px;\n}\n\n.cart-totals[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    color: #706e6f;\n    padding: 10px;\n}\n\n.cart-totals[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    float: left;\n    width: 35%;\n    font-weight: 700;\n    text-align: left\n}\n\n.cart-totals[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n    float: left;\n    width: 65%;\n    text-align: right;\n    text-decoration: underline\n}\n\n.continue-btn[_ngcontent-%COMP%] {\n    background-color: #4aadaa;\n    border-color: #4aadaa\n}\n\n.checkout-btn[_ngcontent-%COMP%] {\n    background-color: #f0a933;\n    border-color: #f0a933;\n    width: 80%;\n    margin: 20px 10% auto;\n    font-weight: 700\n}\n\n.delete-cart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border: 1px solid #dc3545;\n    background-color: #dc3545;\n    color: #FFF\n}\n\n@media (min-width:320px) and (max-width:480px) {\n    #cart-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n        padding: 0!important\n    }\n    #cart-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n        margin: 0!important\n    }\n    #cart-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%], #cart-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%] {\n        width: 100%;\n        padding: 0\n    }\n    .cart-container[_ngcontent-%COMP%]   .cart-cont[_ngcontent-%COMP%] {\n        margin-bottom: 10px\n    }\n    .prod-subtotal[_ngcontent-%COMP%] {\n        float: left\n    }\n    .delete-cart[_ngcontent-%COMP%] {\n        float: right\n    }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/partials/product-cart/product-cart.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/components/partials/product-cart/product-cart.component.ngfactory.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./product-cart.component.css.shim.ngstyle */ "./src/app/components/partials/product-cart/product-cart.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./product-cart.component */ "./src/app/components/partials/product-cart/product-cart.component.ts");
var i4 = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var i5 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var i6 = __webpack_require__(/*! ../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
var i7 = __webpack_require__(/*! ../../../services/checkout/checkout.service */ "./src/app/services/checkout/checkout.service.ts");
var styles_ProductCartComponent = [i0.styles];
var RenderType_ProductCartComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ProductCartComponent, data: {} });
exports.RenderType_ProductCartComponent = RenderType_ProductCartComponent;
function View_ProductCartComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(2, "", _co.imageUrl, "/products/", _v.parent.context.$implicit.images[0][0], ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.title, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_ProductCartComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductCartComponent_3)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit._id == _v.parent.context.$implicit.productId); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ProductCartComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.title; _ck(_v, 1, 0, currVal_0); }); }
function View_ProductCartComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductCartComponent_5)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit._id == _v.parent.context.$implicit.productId); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ProductCartComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 27, "div", [["class", "row cart-cont"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "prod-image"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductCartComponent_2)), i1.ɵdid(4, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(5, 0, null, null, 12, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 2, "div", [["class", "prod-title"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductCartComponent_4)), i1.ɵdid(8, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(9, 0, null, null, 8, "div", [["class", "prod-qty"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Qty: "])), (_l()(), i1.ɵted(12, null, ["", " "])), (_l()(), i1.ɵeld(13, 0, null, null, 4, "div", [["class", "qty"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 1, "button", [["class", "down"]], [[1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.qtyDown(_v.context.$implicit.productId) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 0, "i", [["class", "fa fa-caret-down"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, "button", [["class", "up"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.qtyUp(_v.context.$implicit.productId) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 0, "i", [["class", "fa fa-caret-up"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 6, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 2, "div", [["class", "prod-price"]], null, null, null, null, null)), (_l()(), i1.ɵted(20, null, [" Ksh.", " "])), i1.ɵppd(21, 2), (_l()(), i1.ɵeld(22, 0, null, null, 2, "div", [["class", "prod-subtotal"]], null, null, null, null, null)), (_l()(), i1.ɵted(23, null, [" Ksh. ", " "])), i1.ɵppd(24, 2), (_l()(), i1.ɵeld(25, 0, null, null, 2, "div", [["class", "delete-cart"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 1, "button", [["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.remove(_v.context.$implicit.productId) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["delete"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.products; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.products; _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.quantity; _ck(_v, 12, 0, currVal_2); var currVal_3 = ((_v.context.$implicit.quantity === 1) ? true : null); _ck(_v, 14, 0, currVal_3); var currVal_4 = i1.ɵunv(_v, 20, 0, _ck(_v, 21, 0, i1.ɵnov(_v.parent, 0), _v.context.$implicit.price, 0)); _ck(_v, 20, 0, currVal_4); var currVal_5 = i1.ɵunv(_v, 23, 0, _ck(_v, 24, 0, i1.ɵnov(_v.parent, 0), (_v.context.$implicit.price * _v.context.$implicit.quantity), 0)); _ck(_v, 23, 0, currVal_5); }); }
function View_ProductCartComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "a", [["class", "btn btn-primary checkout-btn"], ["routerLink", "/checkout"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Checkout"]))], null, null); }
function View_ProductCartComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "button", [["class", "btn btn-primary checkout-btn"], ["disabled", "true"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Checkout"]))], null, null); }
function View_ProductCartComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i2.DecimalPipe, [i1.LOCALE_ID]), (_l()(), i1.ɵeld(1, 0, null, null, 18, "div", [["class", ""], ["id", "cart-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 17, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 5, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 4, "div", [["class", "cart-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "cart-header"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, [" ", " Products In Your Cart "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductCartComponent_1)), i1.ɵdid(8, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(9, 0, null, null, 10, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 9, "div", [["class", "cart-totals"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 4, "div", [["class", "total"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Total "])), (_l()(), i1.ɵeld(14, 0, null, null, 1, "div", [["class", "amount"]], null, null, null, null, null)), (_l()(), i1.ɵted(15, null, [" Ksh. ", " "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductCartComponent_6)), i1.ɵdid(17, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProductCartComponent_7)), i1.ɵdid(19, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.cartV; _ck(_v, 8, 0, currVal_1); var currVal_3 = (_co.itemCount != 0); _ck(_v, 17, 0, currVal_3); var currVal_4 = (_co.itemCount === 0); _ck(_v, 19, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.itemCount; _ck(_v, 6, 0, currVal_0); var currVal_2 = _co.itemTotal; _ck(_v, 15, 0, currVal_2); }); }
exports.View_ProductCartComponent_0 = View_ProductCartComponent_0;
function View_ProductCartComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-product-cart", [], null, null, null, View_ProductCartComponent_0, RenderType_ProductCartComponent)), i1.ɵdid(1, 245760, null, 0, i3.ProductCartComponent, [i4.StorageService, i5.ProductsService, i6.CartService, i7.CheckoutService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ProductCartComponent_Host_0 = View_ProductCartComponent_Host_0;
var ProductCartComponentNgFactory = i1.ɵccf("app-product-cart", i3.ProductCartComponent, View_ProductCartComponent_Host_0, {}, {}, []);
exports.ProductCartComponentNgFactory = ProductCartComponentNgFactory;


/***/ }),

/***/ "./src/app/components/partials/product-cart/product-cart.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/partials/product-cart/product-cart.component.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var cart_service_1 = __webpack_require__(/*! ../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
var storage_service_1 = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var checkout_service_1 = __webpack_require__(/*! ../../../services/checkout/checkout.service */ "./src/app/services/checkout/checkout.service.ts");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var IMG_URL = env_config_1.ENV.BASE_IMAGE;
var CART_KEY = env_config_1.ENV.BASE_TOKEN;
var ProductCartComponent = /** @class */ (function () {
    function ProductCartComponent(storageService, productsService, shoppingCartService, checkoutService) {
        this.storageService = storageService;
        this.productsService = productsService;
        this.shoppingCartService = shoppingCartService;
        this.checkoutService = checkoutService;
        this.cookieValue = "Value";
        this.imageUrl = '';
        this.storage = this.storageService.get();
    }
    ProductCartComponent.prototype.ngOnInit = function () {
        this.Cart();
        this._getShipping();
        this.imageUrl = IMG_URL;
    };
    ProductCartComponent.prototype.Cart = function () {
        var _this = this;
        this.cart = this.shoppingCartService.get();
        this.cartSubscription = this.cart.subscribe(function (cart) {
            //this.cartV = cart;
            _this.itemCount = cart.items.length;
            _this.cartV = cart.items;
            _this.itemTotal = cart.itemsTotal;
            var prodArr = [];
            _this.productsService.productsData$
                .subscribe(function (data) {
                _this.products1 = data;
                _this.cartV.forEach(function (cart) {
                    _this.products1.forEach(function (prod) {
                        if (cart.productId == prod._id) {
                            prodArr.push(prod);
                        }
                    });
                });
                _this.products = prodArr;
            });
        });
    };
    ProductCartComponent.prototype.emptyCart = function () {
        this.shoppingCartService.empty();
        this.Cart();
    };
    ProductCartComponent.prototype.qtyUp = function (id) {
        this.qtyTest = this.shoppingCartService.updateQty(id, 1);
        this.Cart();
    };
    ProductCartComponent.prototype.qtyDown = function (id) {
        this.shoppingCartService.updateQty(id, -1);
        this.Cart();
    };
    ProductCartComponent.prototype.remove = function (id) {
        this.qtyTest = this.shoppingCartService.removeCart(id);
        this.Cart();
    };
    ProductCartComponent.prototype._getShipping = function () {
        var _this = this;
        this.shippingSub = this.checkoutService
            .getShipping$()
            .subscribe(function (res) {
            _this.checkoutService.setShippingData(res);
        }, function (err) {
            console.error(err);
        });
    };
    ProductCartComponent.prototype.ngOnDestroy = function () {
        if (this.cartSubscription) {
            this.cartSubscription.unsubscribe();
        }
        if (this.shippingSub) {
            this.shippingSub.unsubscribe();
        }
    };
    return ProductCartComponent;
}());
exports.ProductCartComponent = ProductCartComponent;


/***/ }),

/***/ "./src/app/components/partials/product-cart/product-cart.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/partials/product-cart/product-cart.module.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProductCartModule = /** @class */ (function () {
    function ProductCartModule() {
    }
    return ProductCartModule;
}());
exports.ProductCartModule = ProductCartModule;


/***/ }),

/***/ "./src/app/components/partials/top-cart/top-cart.component.css.shim.ngstyle.js":
/*!*************************************************************************************!*\
  !*** ./src/app/components/partials/top-cart/top-cart.component.css.shim.ngstyle.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".mobile_view[_ngcontent-%COMP%]   .cart-body[_ngcontent-%COMP%] {\n    border: none;\n    width: 100%;\n    margin: auto;\n    position: relative\n}\n\n.mobile_view[_ngcontent-%COMP%]   .cart-body[_ngcontent-%COMP%]   .cart-left[_ngcontent-%COMP%] {\n    height: inherit;\n    float: none;\n    padding: 0;\n    color: #f49c38;\n    font-size: inherit;\n    position: relative\n}\n\n.mobile_view[_ngcontent-%COMP%]   .cart-body[_ngcontent-%COMP%]   .cart-total[_ngcontent-%COMP%] {\n    float: none;\n    width: auto;\n    padding: 0;\n    color: inherit;\n    font-weight: inherit;\n    position: absolute;\n    top: -10px;\n    left: 41px;\n    font-size: 11px\n}\n\n.mobile_view[_ngcontent-%COMP%]   .cart-body[_ngcontent-%COMP%]   .cart-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #FFF;\n    background-color: #345d89;\n    padding: 1px 5px;\n    border-radius: 20px\n}\n\n.cart-body[_ngcontent-%COMP%] {\n    border: none;\n    width: 60%;\n    margin: auto;\n    position: relative;\n}\n\n.cart-body[_ngcontent-%COMP%]   .cart-left[_ngcontent-%COMP%] {\n    background-color: #355d87;\n    height: inherit;\n    float: left;\n    padding: 8px 5px;\n    color: #FFF;\n    position: relative\n}\n\n.cart-body[_ngcontent-%COMP%]   .cart-count[_ngcontent-%COMP%] {\n    padding: 4px 10px;\n    position: absolute;\n    bottom: 0;\n    background-color: #6f6d6e;\n    border-radius: 20px;\n    font-size: 12px;\n    right: 0\n}\n\n.cart-body[_ngcontent-%COMP%]   .cart-total[_ngcontent-%COMP%] {\n    float: left;\n    width: 40%;\n    padding: 8px 5px;\n    color: #355d87;\n    font-weight: 700;\n    position: absolute;\n    left: 3px;\n    top: 7px;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/partials/top-cart/top-cart.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/components/partials/top-cart/top-cart.component.ngfactory.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./top-cart.component.css.shim.ngstyle */ "./src/app/components/partials/top-cart/top-cart.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./top-cart.component */ "./src/app/components/partials/top-cart/top-cart.component.ts");
var i4 = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var i5 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var i6 = __webpack_require__(/*! ../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
var i7 = __webpack_require__(/*! @angular/router */ "@angular/router");
var styles_TopCartComponent = [i0.styles];
var RenderType_TopCartComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_TopCartComponent, data: {} });
exports.RenderType_TopCartComponent = RenderType_TopCartComponent;
function View_TopCartComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "a", [["class", "mobile_view"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSubmit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "div", [["class", "cart-body clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 4, "div", [["class", "cart-left"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "i", [["class", "fas fa-shopping-bag"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 2, "div", [["class", "cart-total"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.itemCount; _ck(_v, 6, 0, currVal_0); }); }
function View_TopCartComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSubmit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "div", [["class", "cart-body clearfix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "div", [["class", "cart-left"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-shopping-bag fa-2x"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "div", [["class", "cart-total"]], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.itemCount; _ck(_v, 5, 0, currVal_0); }); }
function View_TopCartComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_TopCartComponent_1)), i1.ɵdid(1, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TopCartComponent_2)), i1.ɵdid(3, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mobile_view; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.desktop_view; _ck(_v, 3, 0, currVal_1); }, null); }
exports.View_TopCartComponent_0 = View_TopCartComponent_0;
function View_TopCartComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-top-cart", [], null, null, null, View_TopCartComponent_0, RenderType_TopCartComponent)), i1.ɵdid(1, 245760, null, 0, i3.TopCartComponent, [i1.PLATFORM_ID, i4.StorageService, i5.ProductsService, i6.CartService, i7.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_TopCartComponent_Host_0 = View_TopCartComponent_Host_0;
var TopCartComponentNgFactory = i1.ɵccf("app-top-cart", i3.TopCartComponent, View_TopCartComponent_Host_0, {}, {}, []);
exports.TopCartComponentNgFactory = TopCartComponentNgFactory;


/***/ }),

/***/ "./src/app/components/partials/top-cart/top-cart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/partials/top-cart/top-cart.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var products_service_1 = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var cart_service_1 = __webpack_require__(/*! ../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
var storage_service_1 = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var env_config_1 = __webpack_require__(/*! ../../../core/env.config */ "./src/app/core/env.config.ts");
var CART_KEY = env_config_1.ENV.BASE_TOKEN;
var TopCartComponent = /** @class */ (function () {
    function TopCartComponent(platformId, storageService, productsService, cartService, router) {
        this.platformId = platformId;
        this.storageService = storageService;
        this.productsService = productsService;
        this.cartService = cartService;
        this.router = router;
        this.mobile_view = false;
        this.desktop_view = false;
    }
    TopCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (common_1.isPlatformBrowser(this.platformId)) {
            if (window.screen.width >= 320 && window.screen.width <= 480) {
                this.mobile_view = true;
                this.desktop_view = false;
            }
            else {
                this.mobile_view = false;
                this.desktop_view = true;
            }
        }
        if (common_1.isPlatformServer(this.platformId)) {
            this.mobile_view = false;
            this.desktop_view = true;
        }
        this.cart = this.cartService.get();
        this.cartSubscription = this.cart.subscribe(function (cart) {
            _this.itemCount = cart.items.length;
            _this.itemTotal = cart.itemsTotal;
        });
    };
    TopCartComponent.prototype.onSubmit = function () {
        this.router.navigate(['/cart']);
    };
    TopCartComponent.prototype.ngOnDestroy = function () {
        if (this.cartSubscription) {
            this.cartSubscription.unsubscribe();
        }
    };
    return TopCartComponent;
}());
exports.TopCartComponent = TopCartComponent;


/***/ }),

/***/ "./src/app/components/partials/top-cart/top-cart.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/partials/top-cart/top-cart.module.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TopCartModule = /** @class */ (function () {
    function TopCartModule() {
    }
    return TopCartModule;
}());
exports.TopCartModule = TopCartModule;


/***/ }),

/***/ "./src/app/components/partials/top-search/top-search.component.css.shim.ngstyle.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/partials/top-search/top-search.component.css.shim.ngstyle.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".search-form[_ngcontent-%COMP%]   .search-drop[_ngcontent-%COMP%] {\n    float: left;\n    margin: 0\n}\n\n.search-form[_ngcontent-%COMP%]   .search-drop[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0;\n    margin: 5px\n}\n\n.search-form[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n    float: left;\n    margin: 0;\n    width: 85%;\n    border: 1px solid #f49c38;\n}\n\n.search-form[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0;\n}\n\n.search-form[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n    float: left;\n    background-color: #4aadaa;\n}\n\n.search-form[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    background-color: #f49a12;\n    color: #FFF;\n    border-radius: 0;\n}\n\n.search-mobile[_ngcontent-%COMP%] {\n    padding: 5px 10px 2px\n}\n\n.search-mobile[_ngcontent-%COMP%]   .search-drop[_ngcontent-%COMP%] {\n    float: left;\n    margin: 0\n}\n\n.search-mobile[_ngcontent-%COMP%]   .search-drop[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0;\n    margin: 5px\n}\n\n.search-mobile[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 100%;\n    border: 1px solid #d6dede;\n    border-radius: 0px\n}\n\n.search-mobile[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0;\n    padding: .3rem .2rem;\n    height: 25px;\n    font-size: 12px\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/partials/top-search/top-search.component.ngfactory.js":
/*!**********************************************************************************!*\
  !*** ./src/app/components/partials/top-search/top-search.component.ngfactory.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./top-search.component.css.shim.ngstyle */ "./src/app/components/partials/top-search/top-search.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./top-search.component */ "./src/app/components/partials/top-search/top-search.component.ts");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var styles_TopSearchComponent = [i0.styles];
var RenderType_TopSearchComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_TopSearchComponent, data: {} });
exports.RenderType_TopSearchComponent = RenderType_TopSearchComponent;
function View_TopSearchComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 11, "form", [["autocomplete", "off"], ["class", "search-mobile clearfix"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSearch(_co.id) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 16384, null, 0, i2.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(2, 540672, null, 0, i2.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.FormGroupDirective]), i1.ɵdid(4, 16384, null, 0, i2.NgControlStatusGroup, [[4, i2.ControlContainer]], null, null), (_l()(), i1.ɵeld(5, 0, null, null, 6, "div", [["class", "form-group search-input"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "search"], ["ngModel", ""], ["placeholder", "Search for Products, brands and more"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 7)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 7).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 7)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 7)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(7, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(9, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(11, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.form; _ck(_v, 2, 0, currVal_7); var currVal_15 = "search"; var currVal_16 = ""; _ck(_v, 9, 0, currVal_15, currVal_16); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 4).ngClassUntouched; var currVal_1 = i1.ɵnov(_v, 4).ngClassTouched; var currVal_2 = i1.ɵnov(_v, 4).ngClassPristine; var currVal_3 = i1.ɵnov(_v, 4).ngClassDirty; var currVal_4 = i1.ɵnov(_v, 4).ngClassValid; var currVal_5 = i1.ɵnov(_v, 4).ngClassInvalid; var currVal_6 = i1.ɵnov(_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = i1.ɵnov(_v, 11).ngClassUntouched; var currVal_9 = i1.ɵnov(_v, 11).ngClassTouched; var currVal_10 = i1.ɵnov(_v, 11).ngClassPristine; var currVal_11 = i1.ɵnov(_v, 11).ngClassDirty; var currVal_12 = i1.ɵnov(_v, 11).ngClassValid; var currVal_13 = i1.ɵnov(_v, 11).ngClassInvalid; var currVal_14 = i1.ɵnov(_v, 11).ngClassPending; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); }); }
function View_TopSearchComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 15, "form", [["autocomplete", "off"], ["class", "search-form clearfix"], ["itemscope", ""], ["itemtype", "http://schema.org/SearchAction"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSearch(_co.id) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 16384, null, 0, i2.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(2, 540672, null, 0, i2.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.FormGroupDirective]), i1.ɵdid(4, 16384, null, 0, i2.NgControlStatusGroup, [[4, i2.ControlContainer]], null, null), (_l()(), i1.ɵeld(5, 0, null, null, 0, "meta", [["content", "https://www.phonestablets.co.ke/search/{search_term_string}"], ["itemprop", "target"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 6, "div", [["class", "form-group search-input"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "search"], ["name", "search_term_string"], ["ngModel", ""], ["placeholder", "Search"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 8)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 8).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 8)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 8)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(8, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(10, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(12, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(13, 0, null, null, 2, "div", [["class", "search-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 1, "button", [["class", "btn btn-link"], ["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Search "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.form; _ck(_v, 2, 0, currVal_7); var currVal_15 = "search"; var currVal_16 = ""; _ck(_v, 10, 0, currVal_15, currVal_16); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 4).ngClassUntouched; var currVal_1 = i1.ɵnov(_v, 4).ngClassTouched; var currVal_2 = i1.ɵnov(_v, 4).ngClassPristine; var currVal_3 = i1.ɵnov(_v, 4).ngClassDirty; var currVal_4 = i1.ɵnov(_v, 4).ngClassValid; var currVal_5 = i1.ɵnov(_v, 4).ngClassInvalid; var currVal_6 = i1.ɵnov(_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = i1.ɵnov(_v, 12).ngClassUntouched; var currVal_9 = i1.ɵnov(_v, 12).ngClassTouched; var currVal_10 = i1.ɵnov(_v, 12).ngClassPristine; var currVal_11 = i1.ɵnov(_v, 12).ngClassDirty; var currVal_12 = i1.ɵnov(_v, 12).ngClassValid; var currVal_13 = i1.ɵnov(_v, 12).ngClassInvalid; var currVal_14 = i1.ɵnov(_v, 12).ngClassPending; _ck(_v, 7, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); }); }
function View_TopSearchComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_TopSearchComponent_1)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(2, 0, null, null, 3, "div", [["itemscope", ""], ["itemtype", "http://schema.org/WebSite"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "meta", [["content", "https://www.phonestablets.co.ke/"], ["itemprop", "url"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TopSearchComponent_2)), i1.ɵdid(5, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mobile_view; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.desktop_view; _ck(_v, 5, 0, currVal_1); }, null); }
exports.View_TopSearchComponent_0 = View_TopSearchComponent_0;
function View_TopSearchComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-top-search", [], null, null, null, View_TopSearchComponent_0, RenderType_TopSearchComponent)), i1.ɵdid(1, 114688, null, 0, i4.TopSearchComponent, [i1.PLATFORM_ID, i5.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_TopSearchComponent_Host_0 = View_TopSearchComponent_Host_0;
var TopSearchComponentNgFactory = i1.ɵccf("app-top-search", i4.TopSearchComponent, View_TopSearchComponent_Host_0, {}, {}, []);
exports.TopSearchComponentNgFactory = TopSearchComponentNgFactory;


/***/ }),

/***/ "./src/app/components/partials/top-search/top-search.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/partials/top-search/top-search.component.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var TopSearchComponent = /** @class */ (function () {
    function TopSearchComponent(platformId, router) {
        this.platformId = platformId;
        this.router = router;
        this.mobile_view = false;
        this.desktop_view = false;
        this.form = new forms_1.FormGroup({
            search: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    TopSearchComponent.prototype.ngOnInit = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            if (window.screen.width >= 320 && window.screen.width <= 480) {
                this.mobile_view = true;
                this.desktop_view = false;
            }
            else {
                this.mobile_view = false;
                this.desktop_view = true;
            }
        }
        if (common_1.isPlatformServer(this.platformId)) {
            this.mobile_view = false;
            this.desktop_view = true;
        }
    };
    TopSearchComponent.prototype.onSearch = function (id) {
        var search = this.form.value.search;
        if (search != '') {
            this.router.navigate(['/search', search]);
        }
    };
    return TopSearchComponent;
}());
exports.TopSearchComponent = TopSearchComponent;


/***/ }),

/***/ "./src/app/components/partials/top-search/top-search.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/partials/top-search/top-search.module.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TopSearchModule = /** @class */ (function () {
    function TopSearchModule() {
    }
    return TopSearchModule;
}());
exports.TopSearchModule = TopSearchModule;


/***/ }),

/***/ "./src/app/core/env.config.ts":
/*!************************************!*\
  !*** ./src/app/core/env.config.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// const _isDev = window.location.port.indexOf('4200') > -1;
// const getHost = () => {
//   const protocol = window.location.protocol;
//   const host = window.location.host;
//   return `${protocol}//${host}`;
// };
//const apiURI = _isDev ? 'http://localhost:3000/api2/' : `https://phonestablets-crm.herokuapp.com/api2/`;
var apiURI = 'https://zuri-back.herokuapp.com/api/';
//const apiURI = 'http://localhost:3000/api/';
exports.ENV = {
    //BASE_URI: getHost(),
    BASE_API: apiURI,
    BASE_TOKEN: 'k8Sc8BpRaj8T8SuIzYl5',
    BASE_SUCCESS: 'gzqwquza3vxil6tbs8pz',
    BASE_RELATED_PRODUCTS: 'retk8Sc8sdfBpRaj8T8Su$IzYl5',
    BASE_IMAGE: 'https://www.static.phonestablets.co.ke/img',
};


/***/ }),

/***/ "./src/app/core/loading.component.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/core/loading.component.ngfactory.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./loading.component */ "./src/app/core/loading.component.ts");
var styles_LoadingComponent = ["[_nghost-%COMP%] {\n      display: block;\n    }\n    img[_ngcontent-%COMP%] {\n      display: block;\n      margin: 20px auto;\n      width: 50px;\n    }"];
var RenderType_LoadingComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_LoadingComponent, data: {} });
exports.RenderType_LoadingComponent = RenderType_LoadingComponent;
function View_LoadingComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "img", [["src", "/assets/images/loading.svg"]], null, null, null, null, null))], null, null); }
exports.View_LoadingComponent_0 = View_LoadingComponent_0;
function View_LoadingComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-loading", [], null, null, null, View_LoadingComponent_0, RenderType_LoadingComponent)), i0.ɵdid(1, 49152, null, 0, i1.LoadingComponent, [], null, null)], null, null); }
exports.View_LoadingComponent_Host_0 = View_LoadingComponent_Host_0;
var LoadingComponentNgFactory = i0.ɵccf("app-loading", i1.LoadingComponent, View_LoadingComponent_Host_0, {}, {}, []);
exports.LoadingComponentNgFactory = LoadingComponentNgFactory;


/***/ }),

/***/ "./src/app/core/loading.component.ts":
/*!*******************************************!*\
  !*** ./src/app/core/loading.component.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    return LoadingComponent;
}());
exports.LoadingComponent = LoadingComponent;


/***/ }),

/***/ "./src/app/core/loading.module.ts":
/*!****************************************!*\
  !*** ./src/app/core/loading.module.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    return LoadingModule;
}());
exports.LoadingModule = LoadingModule;


/***/ }),

/***/ "./src/app/core/models/alert.model.ts":
/*!********************************************!*\
  !*** ./src/app/core/models/alert.model.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Alert = /** @class */ (function () {
    function Alert() {
    }
    return Alert;
}());
exports.Alert = Alert;
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType = exports.AlertType || (exports.AlertType = {}));


/***/ }),

/***/ "./src/app/core/models/cart-item.model.ts":
/*!************************************************!*\
  !*** ./src/app/core/models/cart-item.model.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CartItem = /** @class */ (function () {
    function CartItem() {
        this.quantity = 0;
        this.price = 0;
    }
    return CartItem;
}());
exports.CartItem = CartItem;


/***/ }),

/***/ "./src/app/core/models/cart.model.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models/cart.model.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = new Array();
        this.itemsTotal = 0;
    }
    ShoppingCart.prototype.updateFrom = function (src) {
        this.items = src.items;
        this.itemsTotal = src.itemsTotal;
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;


/***/ }),

/***/ "./src/app/services/alert/alert.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/alert/alert.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var Subject_1 = __webpack_require__(/*! rxjs/Subject */ "rxjs/Subject");
var alert_model_1 = __webpack_require__(/*! ../../core/models/alert.model */ "./src/app/core/models/alert.model.ts");
var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new Subject_1.Subject();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(alert_model_1.AlertType.Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(alert_model_1.AlertType.Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(alert_model_1.AlertType.Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(alert_model_1.AlertType.Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        // clear alerts
        this.subject.next();
    };
    return AlertService;
}());
exports.AlertService = AlertService;


/***/ }),

/***/ "./src/app/services/cart/cart.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/cart/cart.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var storage_service_1 = __webpack_require__(/*! ../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "rxjs/Observable");
var cart_item_model_1 = __webpack_require__(/*! ../../core/models/cart-item.model */ "./src/app/core/models/cart-item.model.ts");
var cart_model_1 = __webpack_require__(/*! ../../core/models/cart.model */ "./src/app/core/models/cart.model.ts");
var products_service_1 = __webpack_require__(/*! ../../services/products/products.service */ "./src/app/services/products/products.service.ts");
var env_config_1 = __webpack_require__(/*! ../../core/env.config */ "./src/app/core/env.config.ts");
var CART_KEY = env_config_1.ENV.BASE_TOKEN;
var CartService = /** @class */ (function () {
    function CartService(storageService, productService) {
        var _this = this;
        this.storageService = storageService;
        this.productService = productService;
        this.subscribers = new Array();
        this.cookieValue = 'UNKNOWN';
        this.storage = this.storageService.get();
        ///this.productService.getAllProducts$().subscribe((products) => this.products = products);
        //  this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
        //    this.subscribers.push(observer);
        //    observer.next(this.retrieve());
        //    return () => {
        //      this.subscribers = this.subscribers.filter((obs) => obs !== observer);
        //    };
        //  });
        this.subscriptionObservable = new Observable_1.Observable(function (observer) {
            _this.subscribers.push(observer);
            observer.next(_this.retrieve());
            return function () {
                _this.subscribers = _this.subscribers.filter(function (obs) { return obs !== observer; });
            };
        });
    }
    CartService.prototype.get = function () {
        return this.subscriptionObservable;
    };
    CartService.prototype.addItem = function (prodId, price) {
        var totals = 0;
        var cart = this.retrieve();
        var item = cart.items.find(function (p) { return p.productId === prodId; });
        if (item === undefined) {
            var prod = this.getProdInfoId(prodId);
            var item_1 = new cart_item_model_1.CartItem();
            item_1.productId = prodId;
            item_1.quantity = 1;
            item_1.price = price;
            //item.price = this.products.find((p) => p._id === item.productId).price;
            cart.items.push(item_1);
            totals = item_1.price * item_1.quantity;
        }
        var Newtotals = cart.itemsTotal + totals;
        cart.itemsTotal = Newtotals;
        this.save(cart);
        //this.calculateCart(cart);
        this.dispatch(cart);
    };
    CartService.prototype.updateQty = function (prodId, qty) {
        var totals = 0;
        var cart = this.retrieve();
        var item = cart.items.find(function (p) { return p.productId === prodId; });
        if (item) {
            var getIndex = cart.items.indexOf(item);
            var oldQty = item.quantity;
            var newQty = oldQty + qty;
            var Newtotals = void 0;
            if (qty == -1) {
                totals = item.price * newQty;
                Newtotals = cart.itemsTotal - totals;
            }
            else {
                totals = item.price * newQty;
                Newtotals = cart.itemsTotal + totals;
            }
            cart.items[getIndex].quantity = newQty;
            cart.itemsTotal = Newtotals;
            this.save(cart);
            // this.calculateCart(cart);
            this.dispatch(cart);
        }
    };
    CartService.prototype.removeCart = function (prodId) {
        var cart = this.retrieve();
        var item = cart.items.find(function (p) { return p.productId === prodId; });
        if (item) {
            var getIndex = cart.items.indexOf(item);
            if (getIndex > -1) {
                var oldTotals = cart.itemsTotal;
                var totals = item.price * item.quantity;
                var newTotals = oldTotals - totals;
                cart.itemsTotal = newTotals;
                cart.items.splice(getIndex, 1);
                this.save(cart);
                this.dispatch(cart);
                return cart;
            }
        }
    };
    CartService.prototype.save = function (cart) {
        this.storage.setItem(CART_KEY, JSON.stringify(cart));
    };
    CartService.prototype.dispatch = function (cart) {
        this.subscribers
            .forEach(function (sub) {
            try {
                sub.next(cart);
            }
            catch (e) {
                // we want all subscribers to get the update even if one errors.
            }
        });
    };
    CartService.prototype.calculateCart = function (cart) {
        var _this = this;
        cart.itemsTotal = cart.items
            .map(function (item) { return item.quantity * _this.products.find(function (p) { return p._id === item.productId; }).price; })
            .reduce(function (previous, current) { return previous + current; }, 0);
    };
    CartService.prototype.getCartCount = function () {
        return this.subscriptionObservable;
    };
    CartService.prototype.getProdInfoId = function (Prodid) {
        var _this = this;
        this.productService.getProductInfoId$(Prodid).subscribe(function (res) { return _this.products = res; });
        return this.products;
    };
    CartService.prototype.empty = function () {
        var newCart = new cart_model_1.ShoppingCart();
        this.save(newCart);
        this.dispatch(newCart);
    };
    CartService.prototype.retrieve = function () {
        var cart = new cart_model_1.ShoppingCart();
        var storedCart = this.storage.getItem(CART_KEY);
        if (storedCart) {
            cart.updateFrom(JSON.parse(storedCart));
        }
        return cart;
    };
    return CartService;
}());
exports.CartService = CartService;


/***/ }),

/***/ "./src/app/services/category/category.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/category/category.service.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "rxjs/Observable");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
__webpack_require__(/*! rxjs/add/observable/throw */ "rxjs/add/observable/throw");
var env_config_1 = __webpack_require__(/*! ../../core/env.config */ "./src/app/core/env.config.ts");
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/BehaviorSubject */ "rxjs/BehaviorSubject");
var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.categoryData = new BehaviorSubject_1.BehaviorSubject(null);
        this.categoryData$ = this.categoryData.asObservable();
        this.categoryIData = new BehaviorSubject_1.BehaviorSubject(null);
        this.categoryIData$ = this.categoryIData.asObservable();
    }
    CategoryService.prototype.setCategoryData = function (data) {
        this.categoryData.next(data);
    };
    CategoryService.prototype.setCategoryIData = function (data) {
        this.categoryIData.next(data);
    };
    // GET Category products
    CategoryService.prototype.getCategoryProductsUnique$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "product-category-unique/" + id)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    CategoryService.prototype._handleError = function (err) {
        var errorMsg = err.message || 'Error: Unable to complete request.';
        if (err.message && err.message.indexOf('No JWT present') > -1) {
        }
        return Observable_1.Observable.throw(errorMsg);
    };
    return CategoryService;
}());
exports.CategoryService = CategoryService;


/***/ }),

/***/ "./src/app/services/checkout/checkout.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/checkout/checkout.service.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "rxjs/Observable");
__webpack_require__(/*! rxjs/add/operator/catch */ "rxjs/add/operator/catch");
__webpack_require__(/*! rxjs/add/operator/do */ "rxjs/add/operator/do");
__webpack_require__(/*! rxjs/add/operator/map */ "rxjs/add/operator/map");
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/BehaviorSubject */ "rxjs/BehaviorSubject");
var env_config_1 = __webpack_require__(/*! ../../core/env.config */ "./src/app/core/env.config.ts");
var CheckoutService = /** @class */ (function () {
    function CheckoutService(http) {
        this.http = http;
        this.shippingData = new BehaviorSubject_1.BehaviorSubject(null);
        this.shippingData$ = this.shippingData.asObservable();
    }
    CheckoutService.prototype.setShippingData = function (data) {
        this.shippingData.next(data);
    };
    //Get Shipping Amount
    CheckoutService.prototype.getShippingAmount$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "shipping-amount/" + id)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    //Get Shipping
    CheckoutService.prototype.getShipping$ = function () {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "shipping")
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    //Get Shipping Locations
    CheckoutService.prototype.getShippingLocation$ = function () {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "delivery-location")
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    CheckoutService.prototype._handleError = function (err) {
        var errorMsg = err.message || 'Error: Unable to complete request.';
        if (err.message && err.message.indexOf('No JWT present') > -1) {
        }
        return Observable_1.Observable.throw(errorMsg);
    };
    return CheckoutService;
}());
exports.CheckoutService = CheckoutService;


/***/ }),

/***/ "./src/app/services/filter/filter-sort.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/filter/filter-sort.service.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var FilterSortService = /** @class */ (function () {
    function FilterSortService(datePipe) {
        this.datePipe = datePipe;
    }
    FilterSortService.prototype._objArrayCheck = function (array) {
        // Checks if the first item in the array is an object
        // (assumes same-shape for all array items)
        // Necessary because some arrays passed in may have
        // models that don't match {[key: string]: any}[]
        // This check prevents uncaught reference errors
        var item0 = array[0];
        var check = !!(array.length && item0 !== null && Object.prototype.toString.call(item0) === '[object Object]');
        return check;
    };
    FilterSortService.prototype.search = function (array, query, excludeProps, dateFormat) {
        var _this = this;
        // Match query to strings and Date objects / ISO UTC strings
        // Optionally exclude properties from being searched
        // If matching dates, can optionally pass in date format string
        if (!query || !this._objArrayCheck(array)) {
            return array;
        }
        var lQuery = query.toLowerCase();
        var isoDateRegex = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/; // ISO UTC
        var dateF = dateFormat ? dateFormat : 'medium';
        var filteredArray = array.filter(function (item) {
            for (var key in item) {
                if (item.hasOwnProperty(key)) {
                    if (!excludeProps || excludeProps.indexOf(key) === -1) {
                        var thisVal = item[key];
                        if (
                        // Value is a string and NOT a UTC date
                        typeof thisVal === 'string' &&
                            !thisVal.match(isoDateRegex) &&
                            thisVal.toLowerCase().indexOf(lQuery) !== -1) {
                            return true;
                        }
                        else if (
                        // Value is a Date object or UTC string
                        (thisVal instanceof Date || thisVal.toString().match(isoDateRegex)) &&
                            // https://angular.io/api/common/DatePipe
                            // Matching date format string passed in as param (or default to 'medium')
                            _this.datePipe.transform(thisVal, dateF).toLowerCase().indexOf(lQuery) !== -1) {
                            return true;
                        }
                    }
                }
            }
        });
        return filteredArray;
    };
    FilterSortService.prototype.noSearchResults = function (arr, query) {
        // Check if array searched by query returned any results
        return !!(!arr.length && query);
    };
    FilterSortService.prototype.orderByDate = function (array, prop, reverse) {
        // Order an array of objects by a date property
        // Default: ascending (1992->2017 | Jan->Dec)
        if (!prop || !this._objArrayCheck(array)) {
            return array;
        }
        var sortedArray = array.sort(function (a, b) {
            var dateA = new Date(a[prop]).getTime();
            var dateB = new Date(b[prop]).getTime();
            return !reverse ? dateA - dateB : dateB - dateA;
        });
        return sortedArray;
    };
    return FilterSortService;
}());
exports.FilterSortService = FilterSortService;


/***/ }),

/***/ "./src/app/services/pager/pager.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/pager/pager.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 28; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array(endPage + 1 - startPage), function (_, i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());
exports.PagerService = PagerService;


/***/ }),

/***/ "./src/app/services/products/products.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/products/products.service.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "rxjs/Observable");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
__webpack_require__(/*! rxjs/add/observable/throw */ "rxjs/add/observable/throw");
var env_config_1 = __webpack_require__(/*! ../../core/env.config */ "./src/app/core/env.config.ts");
__webpack_require__(/*! rxjs/add/operator/map */ "rxjs/add/operator/map");
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/BehaviorSubject */ "rxjs/BehaviorSubject");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.productsData = new BehaviorSubject_1.BehaviorSubject(null);
        this.productsData$ = this.productsData.asObservable();
        this.featuredProductsData = new BehaviorSubject_1.BehaviorSubject(null);
        this.featuredProductsData$ = this.featuredProductsData.asObservable();
        this.latestProductsData = new BehaviorSubject_1.BehaviorSubject(null);
        this.latestProductsData$ = this.latestProductsData.asObservable();
        this.homeData = new BehaviorSubject_1.BehaviorSubject(null);
        this.homeData$ = this.homeData.asObservable();
    }
    Object.defineProperty(ProductsService.prototype, "_authHeader", {
        get: function () {
            return "Bearer " + localStorage.getItem('access_token');
        },
        enumerable: true,
        configurable: true
    });
    //Set All Home
    ProductsService.prototype.setHomeData = function (data) {
        this.homeData.next(data);
    };
    //Set All Products
    ProductsService.prototype.setProductsData = function (data) {
        this.productsData.next(data);
    };
    //Set Latest Products
    ProductsService.prototype.setLatestProductsData = function (data) {
        this.latestProductsData.next(data);
    };
    //Set All Products
    ProductsService.prototype.setFeaturedProductsData = function (data) {
        this.featuredProductsData.next(data);
    };
    // GET list of products
    ProductsService.prototype.getAllProducts$ = function () {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "products")
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET list of products
    ProductsService.prototype.getMainSlider$ = function () {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "main-slider")
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET Product info Using URL
    ProductsService.prototype.getProductInfo$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "product-info/" + id)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET Product info Count
    ProductsService.prototype.getProductInfoCount$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "product-info-count/" + id)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET Product Seo
    ProductsService.prototype.getProductSeo$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "product-seo/" + id)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET Product info Using ID
    ProductsService.prototype.getProductInfoId$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "product-info-id/" + id)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET Product Related
    ProductsService.prototype.getProductRelated$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "product-related/" + id)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET Product Offer
    ProductsService.prototype.getProductOffers$ = function () {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "products-offer")
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET list of brands
    ProductsService.prototype.getAllBrands$ = function () {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "all-brands")
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET Product Offer Extra
    ProductsService.prototype.getProductOffersEx$ = function () {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "products_offer_extra")
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET Featured products
    ProductsService.prototype.getFeaturedProducts$ = function () {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "product-featured")
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET Latest products
    ProductsService.prototype.getLatestProducts$ = function () {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "product-latest")
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET Category info
    ProductsService.prototype.getCategoryInfo$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "category-info/" + id)
            .map(function (data) {
            _this.externalCategory = data; // should be allowed by typescript now
            return data;
        })
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET Category info SEO
    ProductsService.prototype.getCategorySeo$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "category-seo/" + id)
            .map(function (data) {
            _this.externalCategory = data;
            return data;
        })
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET Category products
    ProductsService.prototype.getCategoryProducts$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "product-category/" + id)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // GET Category products Brands
    ProductsService.prototype.getCategoryProductsBrand$ = function (id, brand) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "product-category-brand/" + id + "/" + brand)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    ProductsService.prototype.getBrand$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "brand/" + id)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    ProductsService.prototype.getBrandEntity$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "brand-entity/" + id)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    ProductsService.prototype.getBrandEntityInfo$ = function (id) {
        var _this = this;
        return this.http
            .post(env_config_1.ENV.BASE_API + "get-brands-entity/", id, httpOptions)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    // Get Brand Info
    ProductsService.prototype.getBrandsInfo$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "brands-info/" + id)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    //Get Home Category Products
    ProductsService.prototype.getHome$ = function () {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "home")
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    //Get Home Category Products Mobile
    ProductsService.prototype.getHomeBlogm$ = function () {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "home-blog-mobile")
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    //Get Blog Info
    ProductsService.prototype.getBlogInfo$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "blog/" + id)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    //Get Other Blogs
    ProductsService.prototype.getOtherBlogs$ = function (id) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "blogs-other/" + id)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    //Get Blogs
    ProductsService.prototype.getBlogs$ = function () {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "blogs/")
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    //Get Home Category Products
    ProductsService.prototype.getHomeCategoryMobile$ = function () {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "home-category-mobile")
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    //Get Top Category
    // public getCategoryTop$() : Observable<Category[]> {
    //   return this.http
    //     .get(`${ENV.BASE_API}category-top`)
    //     .pipe(
    //       catchError((error) => this._handleError(error))
    //     ); 
    // }
    //Get All Category
    ProductsService.prototype.getAllCategory$ = function () {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "all-category")
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    //Get search Products
    ProductsService.prototype.getSearchProducts$ = function (search) {
        var _this = this;
        return this.http
            .get(env_config_1.ENV.BASE_API + "products_search/" + search)
            .pipe(operators_1.catchError(function (error) { return _this._handleError(error); }));
    };
    ProductsService.prototype._handleError = function (err) {
        var errorMsg = err.message || 'Error: Unable to complete request.';
        if (err.message && err.message.indexOf('No JWT present') > -1) {
        }
        return Observable_1.Observable.throw(errorMsg);
    };
    return ProductsService;
}());
exports.ProductsService = ProductsService;


/***/ }),

/***/ "./src/app/services/storage/storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs/add/operator/share */ "rxjs/add/operator/share");
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    return StorageService;
}());
exports.StorageService = StorageService;
// tslint:disable-next-line:max-classes-per-file
var LocalStorageService = /** @class */ (function (_super) {
    __extends(LocalStorageService, _super);
    function LocalStorageService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalStorageService.prototype.get = function () {
        return localStorage;
    };
    return LocalStorageService;
}(StorageService));
exports.LocalStorageService = LocalStorageService;


/***/ }),

/***/ "./src/app/services/utils/utils.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/utils/utils.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var UtilsService = /** @class */ (function () {
    function UtilsService(datePipe) {
        this.datePipe = datePipe;
    }
    UtilsService.prototype.isLoaded = function (loading) {
        return loading === false;
    };
    UtilsService.prototype.eventDates = function (start, end) {
        // Display single-day events as "Jan 7, 2018"
        // Display multi-day events as "Aug 12, 2017 - Aug 13, 2017"
        var startDate = this.datePipe.transform(start, 'mediumDate');
        var endDate = this.datePipe.transform(end, 'mediumDate');
        if (startDate === endDate) {
            return startDate;
        }
        else {
            return startDate + " - " + endDate;
        }
    };
    UtilsService.prototype.eventDatesTimes = function (start, end) {
        // Display single-day events as "1/7/2018, 5:30 PM - 7:30 PM"
        // Display multi-day events as "8/12/2017, 8:00 PM - 8/13/2017, 10:00 AM"
        var _shortDate = 'M/d/yyyy';
        var startDate = this.datePipe.transform(start, _shortDate);
        var startTime = this.datePipe.transform(start, 'shortTime');
        var endDate = this.datePipe.transform(end, _shortDate);
        var endTime = this.datePipe.transform(end, 'shortTime');
        if (startDate === endDate) {
            return startDate + ", " + startTime + " - " + endTime;
        }
        else {
            return startDate + ", " + startTime + " - " + endDate + ", " + endTime;
        }
    };
    UtilsService.prototype.eventPast = function (eventEnd) {
        // Check if event has already ended
        var now = new Date();
        var then = new Date(eventEnd.toString());
        return now >= then;
    };
    UtilsService.prototype.findUnique = function (arr, predicate) {
        var found = {};
        arr.forEach(function (d) {
            found[predicate(d)] = d;
        });
        return Object.keys(found).map(function (key) { return found[key]; });
    };
    return UtilsService;
}());
exports.UtilsService = UtilsService;


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var __lazy_0__ = __webpack_require__(/*! ./app/components/pages/home/home.module.ngfactory.js */ "./src/app/components/pages/home/home.module.ngfactory.js");
var __lazy_1__ = __webpack_require__(/*! ./app/components/pages/product/product.module.ngfactory.js */ "./src/app/components/pages/product/product.module.ngfactory.js");
var __lazy_2__ = __webpack_require__(/*! ./app/components/pages/products/products.module.ngfactory.js */ "./src/app/components/pages/products/products.module.ngfactory.js");
var __lazy_3__ = __webpack_require__(/*! ./app/components/pages/cart/cart.module.ngfactory.js */ "./src/app/components/pages/cart/cart.module.ngfactory.js");
var __lazy_4__ = __webpack_require__(/*! ./app/components/pages/checkout/checkout.module.ngfactory.js */ "./src/app/components/pages/checkout/checkout.module.ngfactory.js");
var __lazy_5__ = __webpack_require__(/*! ./app/components/pages/brand/brand.module.ngfactory.js */ "./src/app/components/pages/brand/brand.module.ngfactory.js");
var __lazy_6__ = __webpack_require__(/*! ./app/components/pages/blog/blog.module.ngfactory.js */ "./src/app/components/pages/blog/blog.module.ngfactory.js");
var __lazy_7__ = __webpack_require__(/*! ./app/components/pages/blogs/blogs.module.ngfactory.js */ "./src/app/components/pages/blogs/blogs.module.ngfactory.js");
var __lazy_8__ = __webpack_require__(/*! ./app/components/pages/offers/offers.module.ngfactory.js */ "./src/app/components/pages/offers/offers.module.ngfactory.js");
var __lazy_9__ = __webpack_require__(/*! ./app/components/pages/faq/faq.module.ngfactory.js */ "./src/app/components/pages/faq/faq.module.ngfactory.js");
var __lazy_10__ = __webpack_require__(/*! ./app/components/pages/search/search.module.ngfactory.js */ "./src/app/components/pages/search/search.module.ngfactory.js");
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = { "./components/pages/home/home.module#HomeModule": __lazy_0__.HomeModuleNgFactory, "./components/pages/product/product.module#ProductModule": __lazy_1__.ProductModuleNgFactory, "./components/pages/products/products.module#ProductsModule": __lazy_2__.ProductsModuleNgFactory, "./components/pages/cart/cart.module#CartModule": __lazy_3__.CartModuleNgFactory, "./components/pages/checkout/checkout.module#CheckoutModule": __lazy_4__.CheckoutModuleNgFactory, "./components/pages/brand/brand.module#BrandModule": __lazy_5__.BrandModuleNgFactory, "./components/pages/blog/blog.module#BlogModule": __lazy_6__.BlogModuleNgFactory, "./components/pages/blogs/blogs.module#BlogsModule": __lazy_7__.BlogsModuleNgFactory, "./components/pages/offers/offers.module#OffersModule": __lazy_8__.OffersModuleNgFactory, "./components/pages/faq/faq.module#FaqModule": __lazy_9__.FaqModuleNgFactory, "./components/pages/search/search.module#SearchModule": __lazy_10__.SearchModuleNgFactory };


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wandah/Dropbox/Zuri-cart/frontend/z-main/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/common":
/*!**************************************!*\
  !*** external "@nguniversal/common" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/common");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "angular5-social-login":
/*!****************************************!*\
  !*** external "angular5-social-login" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("angular5-social-login");

/***/ }),

/***/ "ngx-device-detector":
/*!**************************************!*\
  !*** external "ngx-device-detector" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-device-detector");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/BehaviorSubject":
/*!***************************************!*\
  !*** external "rxjs/BehaviorSubject" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/BehaviorSubject");

/***/ }),

/***/ "rxjs/Observable":
/*!**********************************!*\
  !*** external "rxjs/Observable" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ }),

/***/ "rxjs/Subject":
/*!*******************************!*\
  !*** external "rxjs/Subject" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/Subject");

/***/ }),

/***/ "rxjs/Subscription":
/*!************************************!*\
  !*** external "rxjs/Subscription" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/Subscription");

/***/ }),

/***/ "rxjs/add/observable/throw":
/*!********************************************!*\
  !*** external "rxjs/add/observable/throw" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/observable/throw");

/***/ }),

/***/ "rxjs/add/observable/timer":
/*!********************************************!*\
  !*** external "rxjs/add/observable/timer" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/observable/timer");

/***/ }),

/***/ "rxjs/add/operator/catch":
/*!******************************************!*\
  !*** external "rxjs/add/operator/catch" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/catch");

/***/ }),

/***/ "rxjs/add/operator/do":
/*!***************************************!*\
  !*** external "rxjs/add/operator/do" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/do");

/***/ }),

/***/ "rxjs/add/operator/filter":
/*!*******************************************!*\
  !*** external "rxjs/add/operator/filter" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/filter");

/***/ }),

/***/ "rxjs/add/operator/map":
/*!****************************************!*\
  !*** external "rxjs/add/operator/map" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ }),

/***/ "rxjs/add/operator/share":
/*!******************************************!*\
  !*** external "rxjs/add/operator/share" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/share");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

/******/ })));