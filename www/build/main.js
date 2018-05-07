webpackJsonp([0],{

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__documents_documents__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_store__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__documents_documents__["a" /* DocumentsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* StorePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* StorePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"E:\Half Project\EganSafety\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Safety" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Documents" tabIcon="document"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Store" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Team" tabIcon="people"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"E:\Half Project\EganSafety\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentsPage = /** @class */ (function () {
    function DocumentsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DocumentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documents',template:/*ion-inline-start:"E:\Half Project\EganSafety\src\pages\documents\documents.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>\n      documents\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-row (click)="showForms()">\n    <ion-col col-12 text-center>\n      <ion-card class="document_box">\n        <ion-card-header>\n          <img src="../assets/imgs/icon-documents-safety.png" srcset="../assets/imgs/icon-documents-safety@2x.png 2x, ../assets/imgs/icon-documents-safety@3x.png 3x">\n        </ion-card-header>\n        <ion-card-content>\n          Safety\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row (click)="showForms()">\n    <ion-col col-12 text-center>\n      <ion-card class="document_box">\n        <ion-card-header>\n          <img src="../assets/imgs/icon-documents-forms.png" srcset="../assets/imgs/icon-documents-forms@2x.png 2x, ../assets/imgs/icon-documents-forms@3x.png 3x">\n        </ion-card-header>\n        <ion-card-content>\n          Forms\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row (click)="showForms()">\n    <ion-col col-12 text-center>\n      <ion-card class="document_box">\n        <ion-card-header>\n          <img src="../assets/imgs/icon-documents-toolboxtalks.png" srcset="../assets/imgs/icon-documents-toolboxtalks@2x.png 2x, ../assets/imgs/icon-documents-toolboxtalks@3x.png 3x">\n        </ion-card-header>\n        <ion-card-content>\n          Toolbox Talks\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row (click)="showForms()">\n    <ion-col col-12 text-center>\n      <ion-card class="document_box">\n        <ion-card-header>\n          <img src="../assets/imgs/icon-documents-taskssheets.png" srcset="../assets/imgs/icon-documents-taskssheets@2x.png 2x, ../assets/imgs/icon-documents-taskssheets@3x.png 3x">\n        </ion-card-header>\n        <ion-card-content>\n          Task Sheets\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"E:\Half Project\EganSafety\src\pages\documents\documents.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], DocumentsPage);
    return DocumentsPage;
}());

//# sourceMappingURL=documents.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store_service_store_service__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorePage = /** @class */ (function () {
    function StorePage(navCtrl, store) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.items = [];
        this.getposts(5);
    }
    StorePage.prototype.getposts = function (limit) {
        var _this = this;
        this.store.getPosts(limit).subscribe(function (res) { return _this.setPosts(res); });
    };
    StorePage.prototype.setPosts = function (res) {
        this.items = res;
    };
    StorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-store',template:/*ion-inline-start:"E:\Half Project\EganSafety\src\pages\store\store.html"*/'\n\n<ion-content>\n  <!-- <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list> -->\n\n  <ion-row>\n    <ion-col col-12 text-center class="store_view">\n      <ion-card>\n        <ion-card-header>\n          200\n        </ion-card-header>\n        <ion-card-content>\n          Available Points\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12 text-center class="store_check_out">\n      <ion-card>\n        <ion-label float-left no-margin>Items Available</ion-label>\n        <button ion-button no-margin class="chekout" float-right>CHECKOUT</button>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-item *ngFor="let item of items" padding>\n      <ion-thumbnail *ngIf="item.thumbnailUrl" item-left>\n        <img src="../assets/imgs/no-img.png">\n      </ion-thumbnail>\n      <h2>{{item.title}}</h2>\n      <p class="itm_id_points">\n        {{item.id}}\n      </p>\n      <p>\n        {{item.albumId}}\n      </p>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 text-center>\n        <button ion-button block (click)="orderItems()">\n          Order Items</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Half Project\EganSafety\src\pages\store\store.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_store_service_store_service__["a" /* StoreServiceProvider */]])
    ], StorePage);
    return StorePage;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpservice_httpservice__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the StoreServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StoreServiceProvider = /** @class */ (function () {
    function StoreServiceProvider(http, httpservice) {
        this.http = http;
        this.httpservice = httpservice;
        this.HttpRequestModel = new __WEBPACK_IMPORTED_MODULE_2__httpservice_httpservice__["a" /* HttpRequestModel */]();
        console.log('Hello StoreServiceProvider Provider');
    }
    StoreServiceProvider.prototype.getPosts = function (limit) {
        this.HttpRequestModel.reset();
        this.HttpRequestModel.url = 'photos';
        this.HttpRequestModel.method = 'GET';
        this.HttpRequestModel.header = 'Auth';
        return this.httpservice.init(this.HttpRequestModel).map(function (response) { return response; });
    };
    StoreServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__httpservice_httpservice__["b" /* HttpServiceProvider */]])
    ], StoreServiceProvider);
    return StoreServiceProvider;
}());

//# sourceMappingURL=store-service.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpRequestModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpRequestModel = /** @class */ (function () {
    function HttpRequestModel() {
    }
    HttpRequestModel.prototype.reset = function () {
        this.header = '';
        this.url = '';
        this.method = '';
        this.params = '';
        this.body = '';
    };
    return HttpRequestModel;
}());

var HttpServiceProvider = /** @class */ (function () {
    function HttpServiceProvider(http) {
        this.http = http;
        this.baseUrl = 'https://jsonplaceholder.typicode.com/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        });
    }
    /**
     * Before any Request.
     */
    HttpServiceProvider.prototype.beforeRequest = function () {
        // this.blockUIService.displayLoader();
    };
    /**
     * After any request.
     */
    // private afterRequest(): void {
    //   // this.blockUIService.hideLoader();
    // }
    /**
     * Request options.
     * @param options
     * @returns {RequestOptionsArgs}
     */
    HttpServiceProvider.prototype.requestOptions = function (httpRequest, options) {
        options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        options.body = httpRequest.body;
        options.params = httpRequest.params;
        options.method = httpRequest.method;
        options.headers = this.headers;
        // if (options.headers.has('X-BGK-AuthKey') !== false) {
        //   options.headers.set('X-BGK-AuthKey', this.LocalStorage.getItem('company_url') + '.gbslms.net');
        // }
        // if (httpRequest.header !== 'NoAuth') {
        // let user;
        // user = this.AuthUserIdentity.getIdentity();
        // if (options.headers.has('Authorization') === false) {
        //   options.headers.append('Authorization', user.authToken);
        // }
        // }
        return options;
    };
    HttpServiceProvider.prototype.init = function (httpRequest) {
        var options;
        options = this.requestOptions(httpRequest);
        return this.request(this.baseUrl + httpRequest.url, options);
    };
    HttpServiceProvider.prototype.request = function (url, option) {
        var _this = this;
        this.beforeRequest();
        return this.http.request(url, option)
            .map(function (response) { return response.json(); })
            .catch(this.onCatch.bind(this))
            .do(function (res) { _this.onSuccess(res); }, function (error) { _this.onError(error); });
    };
    /*
     * onSuccess
     * @param res
     */
    HttpServiceProvider.prototype.onSuccess = function (res) {
        // this.blockUIService.hideLoader();
        return res;
    };
    HttpServiceProvider.prototype.onCatch = function (error, caught) {
        // this.blockUIService.hideLoader();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error);
    };
    /**
     * onError
     * @param error
     */
    HttpServiceProvider.prototype.onError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.status === 'error' ? body.data : JSON.stringify(body);
            // this.messageService.sendMessage(err);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        // this.messageService.sendMessage(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    HttpServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpServiceProvider);
    return HttpServiceProvider;
}());

//# sourceMappingURL=httpservice.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Half Project\EganSafety\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar class="head_body" text-center>\n    <!--<ion-title padding>\n       <ion-icon name="medkit" padding-right></ion-icon>Egan Safety</ion-title> -->\n    <img src="../assets/imgs/safetypointe.png">\n    <ion-list padding no-margin>\n      <ion-item>\n        <!-- <ion-label>Select jobsite...</ion-label> -->\n        <ion-select placeholder="Select jobsite..." [(ngModel)]="gaming" class="tb_LPselect">\n          <ion-option value="nes">NES</ion-option>\n          <ion-option value="n64">Nintendo64</ion-option>\n          <ion-option value="ps">PlayStation</ion-option>\n          <ion-option value="genesis">Sega Genesis</ion-option>\n          <ion-option value="saturn">Sega Saturn</ion-option>\n          <ion-option value="snes">SNES</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item detail-push no-padding>\n      <img src="../assets/imgs/icon-hospital.png" srcset="../assets/imgs/icon-hospital@2x.png 2x" padding-right>Hospital</ion-item>\n    <ion-item detail-push no-padding>\n      <img src="../assets/imgs/icon-police.png" srcset="../assets/imgs/icon-police@2x.png 2x" padding-right>Police</ion-item>\n    <ion-item detail-push no-padding>\n      <img src="../assets/imgs/icon-firestation.png" srcset="../assets/imgs/icon-firestation@2x.png 2x" padding-right>Fire Station</ion-item>\n  </ion-list>\n  <ion-grid>\n  <ion-col col-12 class="padTB">\n  <button ion-button block class="call_btn" no-margin>Call 911</button>\n</ion-col>\n</ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 text-center>\n        <ion-card class="yellow-bg" no-margin>\n          <ion-card-header class="font-s">\n            2146\n          </ion-card-header>\n          <ion-card-content class="font-small">\n            Days since accident\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6 text-center>\n        <ion-card class="yellow-bg" no-margin>\n          <ion-card-header  class="font-s">\n            0.96\n          </ion-card-header>\n          <ion-card-content  class="font-small">\n            EMR rate\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 text-center>\n        <ion-card  class="yellow-bg" no-margin>\n          <ion-card-header  class="font-s">\n            1.02\n          </ion-card-header>\n          <ion-card-content  class="font-small">\n            Incident rate\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6 text-center>\n        <ion-card  class="yellow-bg" no-margin>\n          <ion-card-header  class="font-s">\n            0.00\n          </ion-card-header>\n          <ion-card-content  class="font-small">\n            D.A.R.T.\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Half Project\EganSafety\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_documents_documents__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_store_store__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_httpservice_httpservice__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_store_service_store_service__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_httpservice_httpservice__["b" /* HttpServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_store_service_store_service__["a" /* StoreServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Half Project\EganSafety\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Half Project\EganSafety\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map