webpackJsonp([2],{

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigGimnasioPageModule", function() { return ConfigGimnasioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_gimnasio__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfigGimnasioPageModule = /** @class */ (function () {
    function ConfigGimnasioPageModule() {
    }
    ConfigGimnasioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__config_gimnasio__["a" /* ConfigGimnasioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__config_gimnasio__["a" /* ConfigGimnasioPage */]),
            ],
        })
    ], ConfigGimnasioPageModule);
    return ConfigGimnasioPageModule;
}());

//# sourceMappingURL=config-gimnasio.module.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigGimnasioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConfigGimnasioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfigGimnasioPage = /** @class */ (function () {
    function ConfigGimnasioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfigGimnasioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigGimnasioPage');
    };
    ConfigGimnasioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-config-gimnasio',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\config-gimnasio\config-gimnasio.html"*/'<!--\n  Generated template for the ConfigAdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="primary">\n\n    <ion-navbar color="primary">\n      <ion-title>Configuraciones</ion-title>\n      \n    </ion-navbar>\n    \n  \n  </ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n    <ion-col class="centrar">\n      <button ion-button clear>\n        Entrenamientos\n      </button>\n      <button ion-button clear>\n          Notificaciones\n        </button>\n        <button ion-button clear>\n            Suscripción\n          </button>\n    </ion-col>\n  </ion-row>\n\n  <div>\n      <ion-row>\n          <ion-col col-4>\n      \n              <ion-card>\n                  <ion-card-content>\n                   <h6>\n                      Suscripción: \n                   </h6>\n                  </ion-card-content>\n                </ion-card>\n      \n              <ion-card>\n                <ion-card-content>\n                  <h6>\n                      Próxima Factura: \n                  </h6>\n                </ion-card-content>\n              </ion-card>\n      \n              <ion-card>\n                <ion-card-content>\n                  <h6>\n                    Modo de Pago\n                  </h6> \n      \n                  <button ion-button>\n                    Paypal\n                  </button>\n                  <button ion-button>\n                      Tarjeta\n                    </button>\n      \n                </ion-card-content>\n              </ion-card>\n      \n              <ion-card>\n                  <ion-card-content>\n                   <h6>\n                      Cancelar suscripción\n                   </h6>\n                  </ion-card-content>\n                </ion-card>\n      \n      \n          </ion-col>\n          \n    \n    <ion-col col-8>\n       <ion-row>\n         <ion-col>\n            <ion-card>\n                <ion-card-content class="centrar">\n    \n                  <h1>\n                    -€\n                  </h1>\n    \n                 <p>\n                   1€ por cliente activo\n                 </p>\n                 <p>\n                   Cuenta de Entrenador Gratis\n                 </p>\n                </ion-card-content>\n              </ion-card>\n         </ion-col>\n\n         <ion-col>\n            <ion-card>\n                <ion-card-content class="centrar">\n    \n                  <h1>\n                    19€\n                  </h1>\n    \n                 <p>\n                   30 Clientes Activos\n                 </p>\n                 <p>\n                   Cuenta de Entrenador Gratis\n                 </p>\n                </ion-card-content>\n              </ion-card>\n         </ion-col>\n\n         <ion-col>\n            <ion-card>\n                <ion-card-content class="centrar">\n    \n                  <h1>\n                    39€\n                  </h1>\n    \n                 <p>\n                   Clientes Ilimitados\n                 </p>\n                 <p>\n                   Cuenta de Entrenador Gratis\n                 </p>\n                </ion-card-content>\n              </ion-card>\n         </ion-col>\n      \n  </ion-row>\n          </ion-col>\n        </ion-row>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\config-gimnasio\config-gimnasio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ConfigGimnasioPage);
    return ConfigGimnasioPage;
}());

//# sourceMappingURL=config-gimnasio.js.map

/***/ })

});
//# sourceMappingURL=2.js.map