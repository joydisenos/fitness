webpackJsonp([29],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminInicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_entrenamientos_admin_entrenamientos__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_admin_chat_admin__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usuarios_admin_usuarios_admin__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_admin_config_admin__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notificaciones_notificaciones__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__crear_entrenamiento_crear_entrenamiento__ = __webpack_require__(169);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AdminInicioPage = /** @class */ (function () {
    function AdminInicioPage(navCtrl, navParams, afDatabase, popover) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.popover = popover;
        this.actividadKey = '';
        this.userKey = '';
        this.params = {
            actividadKey: "",
            userKey: ""
        };
        this.filters = {};
        this.entrenamiento = '';
        this.usersList = this.afDatabase.list('perfil');
        this.users = this.usersList
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (users) {
            return users.map(function (user) { return (__assign({ key: user.key }, user.payload.val())); });
        }));
    }
    AdminInicioPage.prototype.setVariable = function () {
        this.actividadesPri = this.actividades;
    };
    AdminInicioPage.prototype.seleccionarUsuario = function (user) {
        this.actividadesList = this.afDatabase.list('actividades/' + user.key);
        this.actividades = this.actividadesList
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (actividades) { return actividades.map(function (actividad) { return (__assign({ key: actividad.key }, actividad.payload.val())); }); }));
        this.userKey = user.key;
        this.params.userKey = user.key;
        this.setVariable();
    };
    AdminInicioPage.prototype.abrirEjercicio = function (actividadKey) {
        this.params.actividadKey = actividadKey;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__admin_entrenamientos_admin_entrenamientos__["a" /* AdminEntrenamientosPage */], this.params);
    };
    //Navegación header
    AdminInicioPage.prototype.chatPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_admin_chat_admin__["a" /* ChatAdminPage */]);
    };
    AdminInicioPage.prototype.usuariosPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__usuarios_admin_usuarios_admin__["a" /* UsuariosAdminPage */]);
    };
    AdminInicioPage.prototype.settingsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__config_admin_config_admin__["a" /* ConfigAdminPage */]);
    };
    AdminInicioPage.prototype.notificacionesPage = function () {
        this.popover.create(__WEBPACK_IMPORTED_MODULE_8__notificaciones_notificaciones__["a" /* NotificacionesPage */]).present();
    };
    AdminInicioPage.prototype.crearEntrenamiento = function () {
        this.popover.create(__WEBPACK_IMPORTED_MODULE_9__crear_entrenamiento_crear_entrenamiento__["a" /* CrearEntrenamientoPage */], { user: this.userKey }).present();
    };
    AdminInicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-inicio',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\admin-inicio\admin-inicio.html"*/'<!--\n\n  Generated template for the AdminInicioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header color="primary">\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Panel Administrativo</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="usuariosPage()">\n\n            <ion-icon name="contact" end></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only (click)="settingsPage()">\n\n            <ion-icon name="settings" end></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only (click)="chatPage()">\n\n            <ion-icon name="mail" ></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only (click)="notificacionesPage()">\n\n            <ion-icon name="notifications"></ion-icon>\n\n        </button>\n\n        \n\n      </ion-buttons>\n\n    \n\n  </ion-navbar>\n\n  \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <h3>\n\n        Entrenamientos\n\n      </h3>\n\n    </ion-col>\n\n    <ion-col>\n\n      <ion-input placeholder="Buscar entrenamiento" [(ngModel)]="entrenamiento"></ion-input>\n\n    </ion-col>\n\n    <ion-col>\n\n        <ion-input placeholder="Programacion"></ion-input>\n\n    </ion-col>\n\n    <ion-col>\n\n        <ion-input placeholder="Teoría Base"></ion-input>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n        <ion-item>\n\n            <ion-label>Objetivo</ion-label>\n\n            <ion-select>\n\n              <ion-option value="f">1</ion-option>\n\n              <ion-option value="m">2</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n    </ion-col>\n\n    <ion-col>\n\n        <ion-item>\n\n            <ion-label>Mostrar todos</ion-label>\n\n            <ion-select>\n\n              <ion-option value="f">1</ion-option>\n\n              <ion-option value="m">2</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n    </ion-col>\n\n    <ion-col>\n\n        <ion-icon name="star"></ion-icon>\n\n        <ion-icon name="star"></ion-icon>\n\n        <ion-icon name="star"></ion-icon>\n\n        <ion-icon name="star"></ion-icon>\n\n        <ion-icon name="star"></ion-icon>\n\n    </ion-col>\n\n    <ion-col>\n\n     \n\n        <ion-range [(ngModel)]="singleValue1" color="danger" pin="true"></ion-range>\n\n      \n\n    </ion-col>\n\n    <ion-col>\n\n        <ion-range [(ngModel)]="singleValue" color="danger" pin="true"></ion-range>\n\n    </ion-col>\n\n    <ion-col></ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n\n\n    <ion-col *ngFor="let actividad of actividadesPri | async" col-4 class="actividad">\n\n        <ion-row>\n\n          <ion-col col-9>\n\n              <ion-card (click)="abrirEjercicio(actividad.key)">\n\n\n\n                  <ion-card-header>\n\n                    {{actividad.nombre}}\n\n                  </ion-card-header>\n\n                \n\n                  <ion-card-content>\n\n                    <ion-row>\n\n                      <ion-col>\n\n                          <ion-icon name="star"></ion-icon>\n\n                          <ion-icon name="star"></ion-icon>\n\n                          <ion-icon name="star"></ion-icon>\n\n                          <ion-icon name="star"></ion-icon>\n\n                          <ion-icon name="star"></ion-icon>\n\n                      </ion-col>\n\n                    </ion-row>\n\n      \n\n                    <ion-row>\n\n                        <ion-col>\n\n                           {{actividad.dias}} días\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            Teoría: {{actividad.teoria}}\n\n                         </ion-col>\n\n                      </ion-row>\n\n                  </ion-card-content>\n\n                \n\n                </ion-card>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <ion-list no-lines>\n\n              <button ion-item (click)="crearEntrenamiento()">\n\n                  <ion-icon name="add-circle" ></ion-icon>\n\n              </button>\n\n              <button ion-item (click)="abrirEjercicio(actividad.key)">\n\n                  <ion-icon name="settings"></ion-icon>\n\n              </button>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-col>\n\n\n\n\n\n    \n\n      </ion-row>\n\n  \n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <div class="scroll">\n\n\n\n            <div (click)="seleccionarUsuario(user)" *ngFor="let user of users | async" class="userlist-admin">\n\n\n\n                <img src="/assets/imgs/icon-user-default.png" alt="user" width="30px">\n\n               \n\n                 \n\n                  <p>\n\n                     {{user.nombre}}\n\n                  </p>\n\n               \n\n               </div>\n\n\n\n        </div>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\admin-inicio\admin-inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], AdminInicioPage);
    return AdminInicioPage;
}());

//# sourceMappingURL=admin-inicio.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEntrenamientosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editar_entrenamiento_editar_entrenamiento__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(13);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the AdminEntrenamientosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminEntrenamientosPage = /** @class */ (function () {
    function AdminEntrenamientosPage(navCtrl, navParams, afDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.params = navParams.data;
        this.actividad = this.afDatabase.object('actividades/' + this.params.userKey);
        this.semanasList = this.afDatabase
            .list('actividades/' + this.params.userKey + '/' + this.params.actividadKey + '/semana');
        this.semanas = this.semanasList
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (semanas) {
            return semanas.map(function (semana) { return (__assign({ key: semana.key }, semana.payload.val())); });
        }));
    }
    AdminEntrenamientosPage.prototype.ionViewDidLoad = function () {
        console.log(this.params);
    };
    AdminEntrenamientosPage.prototype.abrirEditar = function (semanaKey) {
        this.params.semanaKey = semanaKey;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editar_entrenamiento_editar_entrenamiento__["a" /* EditarEntrenamientoPage */], this.params);
    };
    AdminEntrenamientosPage.prototype.agregarSemana = function (semana) {
        this.afDatabase
            .list('actividades/' + this.params.userKey + '/' + this.params.actividadKey + '/semana')
            .push({
            nombre: semana
        });
    };
    AdminEntrenamientosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-entrenamientos',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\admin-entrenamientos\admin-entrenamientos.html"*/'<!--\n\n  Generated template for the AdminEntrenamientosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header color="primary">\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Panel Administrativo</ion-title>\n\n    </ion-navbar>\n\n    \n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  \n\n<ion-row>\n\n  <ion-col></ion-col>\n\n  <ion-col></ion-col>\n\n  <ion-col>\n\n      <ion-icon name="person" padding></ion-icon>\n\n      <ion-icon name="people" padding></ion-icon>\n\n  </ion-col>\n\n  <ion-col>\n\n      <ion-icon name="lock" padding></ion-icon>\n\n      <ion-icon name="unlock" padding></ion-icon>\n\n\n\n  </ion-col>\n\n</ion-row>\n\n\n\n<ion-row>\n\n  <ion-col>\n\n\n\n      <ion-row>\n\n        <ion-col col-9>\n\n            <ion-item>\n\n                <ion-input type="text" [(ngModel)]="semana" placeholder="Agregar"></ion-input>\n\n              </ion-item>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <button ion-button (click)="agregarSemana(semana)" small>+</button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Nombre del Entrenamiento</ion-label>\n\n            <ion-input type="text" value=""></ion-input>\n\n          </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>Objetivo del Entrenamiento</ion-label>\n\n        <ion-select>\n\n          <ion-option value="f">1</ion-option>\n\n          <ion-option value="m">2</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label>Programa</ion-label>\n\n          <ion-select>\n\n            <ion-option value="f">1</ion-option>\n\n            <ion-option value="m">2</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Teoría a Calificar</ion-label>\n\n            <ion-select>\n\n              <ion-option value="f">1</ion-option>\n\n              <ion-option value="m">2</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-label>Nivel de Calentamiento</ion-label>\n\n              <ion-select>\n\n                <ion-option value="f">1</ion-option>\n\n                <ion-option value="m">2</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n            <ion-input placeholder="Comentario"></ion-input>\n\n\n\n            <ion-item>\n\n                <ion-range dualKnobs="true" [(ngModel)]="dualValue2" min="21" max="72" step="3"></ion-range>\n\n              </ion-item>\n\n\n\n            <div class="centrar">\n\n                <ion-icon name="female" padding></ion-icon>\n\n                <ion-icon name="male" padding></ion-icon>\n\n            </div>\n\n\n\n  </ion-col>\n\n  <ion-col>\n\n  \n\n      <ion-card (click)="abrirEditar(semana.key)" *ngFor="let semana of semanas | async">\n\n          <ion-card-content>\n\n            <ion-row>\n\n              <ion-col>\n\n                {{semana.nombre}}\n\n              </ion-col>\n\n              <ion-col>\n\n                \n\n                      <ion-range [(ngModel)]="singleValue" color="danger" pin="true"></ion-range>\n\n                 \n\n              </ion-col>\n\n              <ion-col>\n\n                10\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-input type="number"></ion-input>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>  \n\n                  <ion-icon name="checkmark-circle"></ion-icon>\n\n                  <ion-icon name="checkmark-circle"></ion-icon>\n\n                  <ion-icon name="checkmark-circle"></ion-icon>\n\n                  <ion-icon name="checkmark-circle"></ion-icon>\n\n                  <ion-icon name="checkmark-circle"></ion-icon>\n\n                  <ion-icon name="checkmark-circle"></ion-icon>\n\n              </ion-col>\n\n              \n\n            </ion-row>\n\n          </ion-card-content>\n\n        \n\n        </ion-card>\n\n\n\n       \n\n  </ion-col>\n\n</ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\admin-entrenamientos\admin-entrenamientos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], AdminEntrenamientosPage);
    return AdminEntrenamientosPage;
}());

//# sourceMappingURL=admin-entrenamientos.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarEntrenamientoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crear_ejercicios_crear_ejercicios__ = __webpack_require__(164);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the EditarEntrenamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarEntrenamientoPage = /** @class */ (function () {
    function EditarEntrenamientoPage(navCtrl, navParams, afDatabase, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.modalCtrl = modalCtrl;
        this.params = navParams.data;
        this.ejerciciosList = this.afDatabase
            .list('actividades/' + this.params.userKey + '/' + this.params.actividadKey + '/semana/' + this.params.semanaKey + '/ejercicios');
        this.ejercicios = this.ejerciciosList
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (ejercicios) {
            return ejercicios.map(function (ejercicio) { return (__assign({ key: ejercicio.key }, ejercicio.payload.val())); });
        }));
    }
    EditarEntrenamientoPage.prototype.ionViewDidLoad = function () {
        console.log(this.params);
    };
    EditarEntrenamientoPage.prototype.crearEjercicio = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__crear_ejercicios_crear_ejercicios__["a" /* CrearEjerciciosPage */], this.params);
        modal.present();
    };
    EditarEntrenamientoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editar-entrenamiento',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\editar-entrenamiento\editar-entrenamiento.html"*/'<!--\n\n  Generated template for the EditarEntrenamientoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header color="primary">\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Panel Administrativo</ion-title>\n\n      \n\n    </ion-navbar>\n\n    \n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      2da Semana\n\n    </ion-col>\n\n    <ion-col col-6>\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="crearEjercicio()">\n\n        Añadir\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <div [sortablejs]="ejercicios | async">\n\n  <ion-card  *ngFor=\'let ejercicio of ejercicios | async\'>\n\n    <ion-card-content>\n\n        <ion-row>\n\n            <ion-col col-4>\n\n              {{ejercicio.nombre}}\n\n            </ion-col>\n\n            <ion-col>\n\n                <ion-item>\n\n                    \n\n                    <ion-input type="number" value="10"></ion-input>\n\n                  </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                    \n\n                    <ion-input type="number" value="10"></ion-input>\n\n                  </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                    \n\n                    <ion-input type="number" value="10"></ion-input>\n\n                  </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                    \n\n                    <ion-input type="number" value="10"></ion-input>\n\n                  </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                    \n\n                    <ion-input type="number" value="10"></ion-input>\n\n                  </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                    \n\n                    <ion-input type="number" value="10"></ion-input>\n\n                  </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                    \n\n                    <ion-input type="number" value="10"></ion-input>\n\n                  </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n                <ion-icon name="move"></ion-icon>\n\n                <ion-icon name="copy"></ion-icon>\n\n                <ion-icon name="trash"></ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  </div>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\editar-entrenamiento\editar-entrenamiento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], EditarEntrenamientoPage);
    return EditarEntrenamientoPage;
}());

//# sourceMappingURL=editar-entrenamiento.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearEjerciciosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(13);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the CrearEjerciciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CrearEjerciciosPage = /** @class */ (function () {
    function CrearEjerciciosPage(navCtrl, navParams, afDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.opt = 'ejercicio';
        this.ejercicio = {};
        this.params = navParams.data;
        this.ejerciciosList = this.afDatabase
            .list('ejercicios');
        this.ejercicios = this.ejerciciosList
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (ejercicios) {
            return ejercicios.map(function (ejercicio) { return (__assign({ key: ejercicio.key }, ejercicio.payload.val())); });
        }));
    }
    CrearEjerciciosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearEjerciciosPage');
    };
    CrearEjerciciosPage.prototype.cambiarPantalla = function (parametro) {
        this.opt = parametro;
    };
    CrearEjerciciosPage.prototype.agregarEjercicio = function (ejercicio) {
        this.afDatabase
            .list('actividades/' + this.params.userKey + '/' + this.params.actividadKey + '/semana/' + this.params.semanaKey + '/ejercicios')
            .push(ejercicio);
        this.afDatabase
            .list('ejercicios')
            .push(ejercicio);
        this.navCtrl.pop();
    };
    CrearEjerciciosPage.prototype.registrarEjercicio = function (item) {
        this.afDatabase
            .list('actividades/' + this.params.userKey + '/' + this.params.actividadKey + '/semana/' + this.params.semanaKey + '/ejercicios')
            .push(item);
        this.navCtrl.pop();
    };
    CrearEjerciciosPage.prototype.agregarDescanso = function (segundos) {
        this.afDatabase
            .list('actividades/' + this.params.userKey + '/' + this.params.actividadKey + '/semana/' + this.params.semanaKey + '/ejercicios')
            .push({
            nombre: 'descanso',
            tiempo: segundos
        });
        this.navCtrl.pop();
    };
    CrearEjerciciosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-crear-ejercicios',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\crear-ejercicios\crear-ejercicios.html"*/'<!--\n  Generated template for the CrearEjerciciosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>CrearEjercicios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="btn-superior">\n    <ion-row>\n      <ion-col>\n        <button ion-button (click)="cambiarPantalla(\'ejercicio\')">\n          Ejercicio\n        </button>\n        <button ion-button (click)="cambiarPantalla(\'descanso\')">\n            Descanso\n        </button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf=" opt == \'ejercicio\' ">\n    <div class="btn-nuevo" (click)="cambiarPantalla(\'nuevo\')">\n      <button ion-button>\n        Nuevo\n      </button>\n    </div>\n\n    <ion-item>\n        <ion-label floating>Buscar Ejercicio</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n            <ion-item>\n                <ion-label floating>Grupo Muscular</ion-label>\n                <ion-input type="text"></ion-input>\n            </ion-item>\n        </ion-col>\n        <ion-col>\n            <ion-item>\n                <ion-label floating>Tipo de Ejercicio</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <div class="ejercicios">\n\n        <ion-list no-lines>\n          <button ion-item *ngFor="let item of ejercicios | async" (click)="registrarEjercicio(item)">\n            {{item.nombre}}\n          </button>\n        </ion-list>\n\n      </div>\n  </div>\n\n  <div *ngIf="  opt == \'descanso\' ">\n     \n\n      \n\n      <ion-row>\n        <ion-col>\n            <ion-item>\n                <ion-label floating>Segundos</ion-label>\n                <ion-input type="number" [(ngModel)]="descanso"></ion-input>\n            </ion-item>\n        </ion-col>\n        <ion-col>\n            <div class="btn-superior">\n                <button ion-button (click)="agregarDescanso(descanso)">\n                  Confirmar\n                </button>\n              </div>\n        </ion-col>\n      </ion-row>\n  </div>\n\n  <div *ngIf=" opt == \'nuevo\' ">\n     <ion-list>\n        <ion-item>\n            <ion-label floating>Nombre de Ejercicio</ion-label>\n            <ion-input type="text" [(ngModel)]="ejercicio.nombre"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Grupo Muscular</ion-label>\n            <ion-input type="text" [(ngModel)]="ejercicio.grupo"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Tipo de Ejercicio</ion-label>\n            <ion-input type="text" [(ngModel)]="ejercicio.tipo"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Comentario</ion-label>\n            <ion-input type="text" [(ngModel)]="ejercicio.comentario"></ion-input>\n        </ion-item>\n        <ion-item>\n          <button ion-button (click)="agregarEjercicio(ejercicio)">\n            Registrar\n          </button>\n        </ion-item>\n     </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\crear-ejercicios\crear-ejercicios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], CrearEjerciciosPage);
    return CrearEjerciciosPage;
}());

//# sourceMappingURL=crear-ejercicios.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(13);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the ChatAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatAdminPage = /** @class */ (function () {
    function ChatAdminPage(navCtrl, navParams, afDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.mensaje = {};
        this.usersList = this.afDatabase.list('perfil');
        this.users = this.usersList
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (users) {
            return users.map(function (user) { return (__assign({ key: user.key }, user.payload.val())); });
        }));
    }
    ChatAdminPage.prototype.verMensajes = function (userKey) {
        this.mensajes = this.afDatabase.list('mensajes/' + userKey).valueChanges();
        this.userKey = userKey;
    };
    ChatAdminPage.prototype.enviarMensaje = function (mensaje) {
        this.afDatabase.list('mensajes/' + this.userKey)
            .push(this.mensaje);
        this.mensaje.mensaje = '';
    };
    ChatAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-admin',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\chat-admin\chat-admin.html"*/'<!--\n  Generated template for the ChatAdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Mensajería</ion-title>\n      </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-row>\n    <ion-col col-4>\n      <div class="users">\n          <ion-card *ngFor="let user of users | async">\n              <ion-card-content (click)="verMensajes(user.key)">\n               <ion-row>\n                 <ion-col col-4 class="centrar">\n                   <img src="/assets/imgs/icon-user-default.png" class="perfil-img" alt="">\n                 </ion-col>\n                 <ion-col>\n                   <h2>{{ user.nombre }} {{ user.apellido }}</h2>\n                 </ion-col>\n               </ion-row>\n              </ion-card-content>\n            </ion-card>\n      </div>\n    </ion-col>\n\n    <ion-col col-8>\n      <div class="mensajes">\n          <ion-card *ngFor="let mensaje of mensajes | async">\n              <!--<ion-card-header>\n                {{mensaje.nombre}}\n              </ion-card-header>-->\n              <ion-card-content>\n                {{mensaje.mensaje}}\n              </ion-card-content>\n            </ion-card>\n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color="primary">\n        <ion-input type="text" [(ngModel)]="mensaje.mensaje" color="secondary"></ion-input>\n        <ion-input type="hidden" [(ngModel)]="mensaje.nombre" value="admin"></ion-input>\n      <ion-buttons end>\n        <button ion-button icon-end color="royal" (click)="enviarMensaje(mensaje)">\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\chat-admin\chat-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], ChatAdminPage);
    return ChatAdminPage;
}());

//# sourceMappingURL=chat-admin.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(13);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the UsuariosAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuariosAdminPage = /** @class */ (function () {
    function UsuariosAdminPage(navCtrl, navParams, afDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.buscarCliente = {
            nombre: '',
            objetivo: '',
            estatus: ''
        };
        this.usersList = this.afDatabase.list('perfil');
        this.users = this.usersList
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (users) {
            return users.map(function (user) { return (__assign({ key: user.key }, user.payload.val())); });
        }));
    }
    UsuariosAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usuarios-admin',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\usuarios-admin\usuarios-admin.html"*/'<!--\n  Generated template for the UsuariosAdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Usuarios</ion-title>\n      </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-row >\n      <ion-col col-4>\n          <ion-item>\n              <ion-label>Usuario</ion-label>\n              <ion-select [(ngModel)]="tipoUsuario">\n                <ion-option value="cliente">Clientes</ion-option>\n                <ion-option value="gimnasio">Gimnasios</ion-option>\n                <ion-option value="entrenador">Entrenadores</ion-option>\n              </ion-select>\n            </ion-item>\n      </ion-col>\n\n      <ion-col>\n\n        <div *ngIf=" tipoUsuario == \'cliente\' ">\n          <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-input type="text" placeholder="Buscar Cliente"  [(ngModel)]="buscarclienteNombre"></ion-input>\n                </ion-item>\n            </ion-col>\n\n            <ion-col>\n                <ion-item>\n                    <ion-input type="text"  [(ngModel)]="buscarclienteObjetivo" placeholder="Buscar Objetivo"></ion-input>\n                </ion-item>\n            </ion-col>\n\n            <ion-col>\n                <ion-item>\n                    <ion-label>Activo / Inactivo</ion-label>\n                    <ion-select [(ngModel)]="buscarclienteEstatus">\n                      <ion-option value="">Todos</ion-option>\n                      <ion-option value="1">Activo</ion-option>\n                      <ion-option value="0">Inactivo</ion-option>\n                    </ion-select>\n                  </ion-item>\n            </ion-col>\n\n\n          </ion-row>\n\n          \n        </div>\n        <div *ngIf=" tipoUsuario == \'gimnasio\' ">\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-input type="text"  [(ngModel)]="buscarGimnasio" placeholder="Buscar Gimnasio"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div *ngIf=" tipoUsuario == \'entrenador\' ">\n\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-input type="text"  [(ngModel)]="buscarEntrenador" placeholder="Buscar Entrenador"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col *ngFor="let user of users | async" col-4>\n            <ion-card>\n                <ion-card-content>\n                  <ion-row>\n                    <ion-col col-4 class="centrar"> \n                        <img src="/assets/imgs/icon-user-default.png" alt="">\n                    </ion-col>\n                    <ion-col>\n                     <h3>\n                        {{user.nombre}} {{user.apellido}}\n                     </h3>\n                     <p>\n                       tipo: {{ user.tipo }}\n                     </p>\n                     <p>\n                       edad: {{ user.edad }}\n                     </p>\n                    </ion-col>\n                  </ion-row>\n                  \n                </ion-card-content>    \n              </ion-card>\n        </ion-col>\n      </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\usuarios-admin\usuarios-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], UsuariosAdminPage);
    return UsuariosAdminPage;
}());

//# sourceMappingURL=usuarios-admin.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigAdminPage; });
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
 * Generated class for the ConfigAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfigAdminPage = /** @class */ (function () {
    function ConfigAdminPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.seccion = 'notificaciones';
    }
    ConfigAdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigAdminPage');
    };
    ConfigAdminPage.prototype.cambiarTab = function (pantalla) {
        this.seccion = pantalla;
    };
    ConfigAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-config-admin',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\config-admin\config-admin.html"*/'<!--\n  Generated template for the ConfigAdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="primary">\n\n    <ion-navbar color="primary">\n      <ion-title>Configuraciones</ion-title>\n      \n    </ion-navbar>\n    \n  \n  </ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n    <ion-col class="centrar">\n      <!--<button ion-button clear (click)="cambiarTab(\'entrenamientos\')">\n        Entrenamientos\n      </button> -->\n      <button ion-button clear (click)="cambiarTab(\'notificaciones\')">\n          Notificaciones\n        </button>\n        <button ion-button clear (click)="cambiarTab(\'suscripcion\')">\n            Suscripción\n          </button>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf=" seccion == \'suscripcion\' ">\n      <ion-row>\n          <ion-col col-4>\n      \n              <ion-card>\n                  <ion-card-content>\n                   <h6>\n                      Suscripción: \n                   </h6>\n                  </ion-card-content>\n                </ion-card>\n      \n              <ion-card>\n                <ion-card-content>\n                  <h6>\n                      Próxima Factura: \n                  </h6>\n                </ion-card-content>\n              </ion-card>\n      \n              <ion-card>\n                <ion-card-content>\n                  <h6>\n                    Modo de Pago\n                  </h6> \n      \n                  <button ion-button>\n                    Paypal\n                  </button>\n                  <button ion-button>\n                      Tarjeta\n                    </button>\n      \n                </ion-card-content>\n              </ion-card>\n      \n              <ion-card>\n                  <ion-card-content>\n                   <h6>\n                      Cancelar suscripción\n                   </h6>\n                  </ion-card-content>\n                </ion-card>\n      \n      \n          </ion-col>\n          \n    \n    <ion-col col-8>\n       <ion-row>\n         <ion-col>\n            <ion-card>\n                <ion-card-content class="centrar">\n    \n                  <h1>\n                    -€\n                  </h1>\n    \n                 <p>\n                   1€ por cliente activo\n                 </p>\n                 <p>\n                   Cuenta de Entrenador Gratis\n                 </p>\n                </ion-card-content>\n              </ion-card>\n         </ion-col>\n\n         <ion-col>\n            <ion-card>\n                <ion-card-content class="centrar">\n    \n                  <h1>\n                    19€\n                  </h1>\n    \n                 <p>\n                   30 Clientes Activos\n                 </p>\n                 <p>\n                   Cuenta de Entrenador Gratis\n                 </p>\n                </ion-card-content>\n              </ion-card>\n         </ion-col>\n\n         <ion-col>\n            <ion-card>\n                <ion-card-content class="centrar">\n    \n                  <h1>\n                    39€\n                  </h1>\n    \n                 <p>\n                   Clientes Ilimitados\n                 </p>\n                 <p>\n                   Cuenta de Entrenador Gratis\n                 </p>\n                </ion-card-content>\n              </ion-card>\n         </ion-col>\n      \n  </ion-row>\n          </ion-col>\n        </ion-row>\n  </div>\n\n  <div *ngIf=" seccion == \'notificaciones\' ">\n\n    <ion-row>\n      <ion-col>\n          <ion-card>\n              <ion-card-content class="centrar">\n  \n                  <ion-item>\n                      <ion-label>Avisos sobre Clientes</ion-label>\n                      <ion-toggle></ion-toggle>\n                    </ion-item>\n              </ion-card-content>\n            </ion-card>\n      </ion-col>\n\n      <ion-col>\n          <ion-card>\n              <ion-card-content class="centrar">\n  \n                  <ion-item>\n                      <ion-label>Avisos de Sistema</ion-label>\n                      <ion-toggle></ion-toggle>\n                    </ion-item>\n              </ion-card-content>\n            </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col>\n            <ion-card>\n                <ion-card-content class="centrar">\n    \n                    <ion-item>\n                        <ion-label>Avisos sobre Entrenamientos</ion-label>\n                        <ion-toggle></ion-toggle>\n                      </ion-item>\n                </ion-card-content>\n              </ion-card>\n        </ion-col>\n  \n        <ion-col>\n            <ion-card>\n                <ion-card-content class="centrar">\n    \n                    <ion-item>\n                        <ion-label>Otros Avisos</ion-label>\n                        <ion-toggle></ion-toggle>\n                      </ion-item>\n                </ion-card-content>\n              </ion-card>\n        </ion-col>\n      </ion-row>\n    \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\config-admin\config-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ConfigAdminPage);
    return ConfigAdminPage;
}());

//# sourceMappingURL=config-admin.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(13);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the NotificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificacionesPage = /** @class */ (function () {
    function NotificacionesPage(navCtrl, navParams, popover, view, afAuth, afDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popover = popover;
        this.view = view;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.notificacionesRef = this.afDatabase.list('notificaciones/admin');
        this.notificaciones = this.notificacionesRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (items) {
            return items.map(function (item) { return (__assign({ key: item.key }, item.payload.val())); });
        }));
    }
    NotificacionesPage.prototype.close = function () {
        this.view.dismiss();
    };
    NotificacionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notificaciones',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\notificaciones\notificaciones.html"*/'<ion-list>\n    <ion-list-header>Notificaciones</ion-list-header>\n    <button ion-item (click)="close()" *ngFor="let notificacion of notificaciones | async">{{notificacion.nombre}}</button>\n  </ion-list>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\notificaciones\notificaciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], NotificacionesPage);
    return NotificacionesPage;
}());

//# sourceMappingURL=notificaciones.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearEntrenamientoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(17);
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
 * Generated class for the CrearEntrenamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CrearEntrenamientoPage = /** @class */ (function () {
    function CrearEntrenamientoPage(navCtrl, navParams, afDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.entrenamiento = {};
        this.data = this.navParams.data;
        this.userKey = this.data.user;
        console.log(this.data.user);
    }
    CrearEntrenamientoPage.prototype.crearEntrenamiento = function () {
        this.afDatabase
            .list('actividades/' + this.data.user)
            .push(this.entrenamiento);
        this.navCtrl.pop();
    };
    CrearEntrenamientoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-crear-entrenamiento',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\crear-entrenamiento\crear-entrenamiento.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Crear Entrenamiento</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item>\n        <ion-label floating>Nombre del Entrenamiento</ion-label>\n        <ion-input type="text" [(ngModel)]="entrenamiento.nombre"></ion-input>\n      </ion-item>\n\n<ion-item>\n    <ion-label>Objetivo del Entrenamiento</ion-label>\n    <ion-select [(ngModel)]="entrenamiento.objetivo">\n      <ion-option value="Tonificar">Tonificar</ion-option>\n      <ion-option value="Endurecer">Endurecer</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Programa</ion-label>\n      <ion-select [(ngModel)]="entrenamiento.programa">\n        <ion-option value="Anaerobicos">Anaerobicos</ion-option>\n        <ion-option value="Aerobicos">Aerobicos</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>Teoría a Calificar</ion-label>\n        <ion-input type="text" [(ngModel)]="entrenamiento.teoria"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Nivel de Calentamiento</ion-label>\n          <ion-select [(ngModel)]="entrenamiento.calentamiento">\n              <ion-option value="Suave">Suave</ion-option>\n              <ion-option value="Medio">Medio</ion-option>\n              <ion-option value="Intenso">Intenso</ion-option>\n            </ion-select>\n        </ion-item>\n        \n        <ion-item>\n        <ion-input placeholder="Comentario" [(ngModel)]="entrenamiento.comentario"></ion-input>\n      </ion-item>\n        \n\n        <ion-item>\n          <button ion-button (click)="crearEntrenamiento()">\n            Agregar\n          </button>\n        </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\crear-entrenamiento\crear-entrenamiento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], CrearEntrenamientoPage);
    return CrearEntrenamientoPage;
}());

//# sourceMappingURL=crear-entrenamiento.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemanasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actividad_actividad__ = __webpack_require__(73);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SemanasPage = /** @class */ (function () {
    function SemanasPage(navCtrl, navParams, afAuth, afDatabase) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.user = '';
        this.params = {
            itemKey: '',
            ejercicioKey: ''
        };
        this.itemKey = navParams.get('item');
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.perfil = _this.afDatabase.object('perfil/' + data.uid);
                _this.perfilData = _this.perfil.valueChanges();
                _this.ejercicioRef = _this.afDatabase.object('actividades/' + data.uid + '/' + _this.itemKey);
                _this.ejercicio = _this.ejercicioRef.valueChanges();
                _this.itemsRef = _this.afDatabase.list('actividades/' + data.uid + '/' + _this.itemKey + '/semana');
                _this.items = _this.itemsRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (items) {
                    return items.map(function (item) { return (__assign({ key: item.key }, item.payload.val())); });
                }));
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
    }
    SemanasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SemanasPage');
    };
    SemanasPage.prototype.abrirEjercicios = function (item) {
        this.params.itemKey = item;
        this.params.ejercicioKey = this.itemKey;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__actividad_actividad__["a" /* ActividadPage */], this.params);
    };
    SemanasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-semanas',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\semanas\semanas.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>FitnessApp</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding  class="card-background-page">\n    \n    <ion-card>\n      \n      <ion-card-content>\n        <ion-card-title>\n          {{(entrenamiento | async)?.nombre}}\n        </ion-card-title>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card *ngFor="let item of items | async" (click)="abrirEjercicios(item.key)">\n      <ion-item>\n        <p item-start>{{item.nombre}}</p>\n      <ion-icon item-end *ngIf="item.finalizado == true" name="md-checkmark-circle" item-end style="color:rgb(51, 255, 51)"></ion-icon>\n      </ion-item>\n    </ion-card>\n  \n  </ion-content>\n  '/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\semanas\semanas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], SemanasPage);
    return SemanasPage;
}());

//# sourceMappingURL=semanas.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DietaDetallePage; });
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
 * Generated class for the DietaDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DietaDetallePage = /** @class */ (function () {
    function DietaDetallePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DietaDetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DietaDetallePage');
    };
    DietaDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dieta-detalle',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\dieta-detalle\dieta-detalle.html"*/'<!--\n\n  Generated template for the DietaDetallePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{i}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <p>\n\n    Descripción Detallada de la dieta orientada al usuario Registrado.\n\n  </p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\dieta-detalle\dieta-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DietaDetallePage);
    return DietaDetallePage;
}());

//# sourceMappingURL=dieta-detalle.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DietaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dieta_detalle_dieta_detalle__ = __webpack_require__(171);
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
 * Generated class for the DietaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DietaPage = /** @class */ (function () {
    function DietaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = ['Dieta baja en calorías', 'Frutas'];
    }
    DietaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DietaPage');
    };
    DietaPage.prototype.abrirDetalle = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dieta_detalle_dieta_detalle__["a" /* DietaDetallePage */], { i: i });
    };
    DietaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dieta',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\dieta\dieta.html"*/'<!--\n\n  Generated template for the DietaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Dieta</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list inset>\n\n    <button ion-item *ngFor="let item of items" (click)="abrirDetalle(i)">\n\n      {{ item }}\n\n    </button> \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\dieta\dieta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DietaPage);
    return DietaPage;
}());

//# sourceMappingURL=dieta.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogrosPage; });
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
 * Generated class for the LogrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogrosPage = /** @class */ (function () {
    function LogrosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LogrosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogrosPage');
    };
    LogrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-logros',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\logros\logros.html"*/'<!--\n  Generated template for the LogrosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Logros</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n	<ion-card>\n    \n    <ion-card-content>\n      <ion-card-title>\n        Retos de Entrenador\n      </ion-card-title>\n     \n     <ion-icon ios="ios-ribbon" md="md-ribbon" style="font-size: 100px; color: yellow"></ion-icon>\n     <ion-icon ios="ios-ribbon" md="md-ribbon" style="font-size: 100px; color: yellow"></ion-icon>\n     <ion-icon ios="ios-ribbon" md="md-ribbon" style="font-size: 100px; color: yellow"></ion-icon>\n     <ion-icon ios="ios-ribbon" md="md-ribbon" style="font-size: 100px; color: yellow"></ion-icon>\n     <ion-icon ios="ios-ribbon" md="md-ribbon" style="font-size: 100px; color: yellow"></ion-icon>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    \n    <ion-card-content>\n      <ion-card-title>\n        Retos de Aplicación\n      </ion-card-title>\n     \n     <ion-icon ios="ios-ribbon" md="md-ribbon" style="font-size: 100px; color: yellow"></ion-icon>\n     <ion-icon ios="ios-ribbon" md="md-ribbon" style="font-size: 100px; color: yellow"></ion-icon>\n     <ion-icon ios="ios-ribbon" md="md-ribbon" style="font-size: 100px; color: yellow"></ion-icon>\n     <ion-icon ios="ios-ribbon" md="md-ribbon" style="font-size: 100px; color: yellow"></ion-icon>\n     <ion-icon ios="ios-ribbon" md="md-ribbon" style="font-size: 100px; color: yellow"></ion-icon>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\logros\logros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LogrosPage);
    return LogrosPage;
}());

//# sourceMappingURL=logros.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametrosPage; });
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
 * Generated class for the ParametrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParametrosPage = /** @class */ (function () {
    function ParametrosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ParametrosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParametrosPage');
    };
    ParametrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-parametros',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\parametros\parametros.html"*/'<!--\n  Generated template for the ParametrosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Parámetros</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-slides pager>\n  <ion-slide>\n    <h1>VISIÓN GENERAL</h1>\n  </ion-slide>\n  <ion-slide>\n    <h1>PESO</h1>\n  </ion-slide>\n  <ion-slide>\n    <h1>GRASA CORPORAL</h1>\n  </ion-slide>\n</ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\parametros\parametros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ParametrosPage);
    return ParametrosPage;
}());

//# sourceMappingURL=parametros.js.map

/***/ }),

/***/ 213:
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
webpackEmptyAsyncContext.id = 213;

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/actividad/actividad.module": [
		538,
		28
	],
	"../pages/admin-entrenamientos/admin-entrenamientos.module": [
		539,
		27
	],
	"../pages/admin-inicio/admin-inicio.module": [
		541,
		26
	],
	"../pages/chat-admin/chat-admin.module": [
		540,
		25
	],
	"../pages/chat/chat.module": [
		542,
		24
	],
	"../pages/config-admin/config-admin.module": [
		544,
		23
	],
	"../pages/config-entrenador/config-entrenador.module": [
		545,
		3
	],
	"../pages/config-gimnasio/config-gimnasio.module": [
		543,
		2
	],
	"../pages/crear-ejercicios/crear-ejercicios.module": [
		546,
		22
	],
	"../pages/crear-entrenamiento/crear-entrenamiento.module": [
		547,
		21
	],
	"../pages/detalles/detalles.module": [
		548,
		20
	],
	"../pages/dieta-detalle/dieta-detalle.module": [
		550,
		19
	],
	"../pages/dieta/dieta.module": [
		553,
		18
	],
	"../pages/editar-entrenamiento/editar-entrenamiento.module": [
		554,
		17
	],
	"../pages/entrenador/entrenador.module": [
		549,
		16
	],
	"../pages/entrenadores-admin/entrenadores-admin.module": [
		555,
		1
	],
	"../pages/evolucion/evolucion.module": [
		551,
		15
	],
	"../pages/gimnasios-admin/gimnasios-admin.module": [
		552,
		0
	],
	"../pages/login/login.module": [
		560,
		14
	],
	"../pages/logros/logros.module": [
		556,
		13
	],
	"../pages/notificaciones/notificaciones.module": [
		558,
		12
	],
	"../pages/parametros/parametros.module": [
		557,
		11
	],
	"../pages/perfil-form/perfil-form.module": [
		562,
		10
	],
	"../pages/perfil/perfil.module": [
		565,
		9
	],
	"../pages/registro/registro.module": [
		559,
		8
	],
	"../pages/semanas/semanas.module": [
		566,
		7
	],
	"../pages/settings/settings.module": [
		561,
		6
	],
	"../pages/usuarios-admin/usuarios-admin.module": [
		564,
		5
	],
	"../pages/usuarios/usuarios.module": [
		563,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 255;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EjercicioComponent; });
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
 * Generated class for the EjercicioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EjercicioComponent = /** @class */ (function () {
    function EjercicioComponent(modalCtrl, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        console.log('Hello EjercicioComponent Component');
        this.text = 'Hello World';
    }
    EjercicioComponent.prototype.cerrar = function () {
        this.navCtrl.pop();
    };
    EjercicioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ejercicio',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\components\ejercicio\ejercicio.html"*/'<!-- Generated template for the EjercicioComponent component -->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Ejercicio</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n<ion-content>\n\n    <ion-card>\n\n              \n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            EJERCICIO\n\n          </ion-card-title>\n\n          <img src="https://t2.uc.ltmcdn.com/images/6/3/6/img_cuanto_ejercicio_hacer_a_la_semana_26636_orig.jpg"/>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                <h3 class="titulos">\n\n                  S1\n\n                </h3>\n\n              </ion-col>\n\n              <ion-col>\n\n                <h3 class="titulos">\n\n                  80 Kg\n\n                </h3>\n\n              </ion-col>\n\n              <ion-col> \n\n                <h3 class="titulos">\n\n                  X10\n\n                </h3>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card-content>\n\n      </ion-card>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button block (click)="cerrar()"> Entendido </button>\n\n  </ion-footer>\n\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\components\ejercicio\ejercicio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], EjercicioComponent);
    return EjercicioComponent;
}());

//# sourceMappingURL=ejercicio.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actividad_actividad__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(13);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListPage = /** @class */ (function () {
    function ListPage(afDatabase, afAuth, navCtrl, navParams) {
        var _this = this;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ActividadPage = "ActividadPage";
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.itemsRef = _this.afDatabase.list('actividades/' + data.uid);
                _this.items = _this.itemsRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (items) {
                    return items.map(function (item) { return (__assign({ key: item.key }, item.payload.val())); });
                }));
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
    }
    ListPage.prototype.abrirActividad = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__actividad_actividad__["a" /* ActividadPage */], { item: item });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Actividades</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items | async" (click)="abrirActividad(item)">\n      {{item.nombre}}\n      <ion-icon *ngIf="item.finalizado == true" name="md-checkmark-circle" item-end style="color:rgb(51, 255, 51)"></ion-icon>\n    </button>\n    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actividad_actividad__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ejercicio_ejercicio__ = __webpack_require__(265);
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
 * Generated class for the DetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetallesPage = /** @class */ (function () {
    function DetallesPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.item = {};
        this.item = navParams.get('item');
        this.ejercicios = this.item.ejercicios;
        this.itemKey = this.item.key;
    }
    DetallesPage.prototype.comenzarEjercicios = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__actividad_actividad__["a" /* ActividadPage */], { item: item });
    };
    DetallesPage.prototype.detalles = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_ejercicio_ejercicio__["a" /* EjercicioComponent */]);
        profileModal.present();
    };
    DetallesPage.prototype.cerrar = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_ejercicio_ejercicio__["a" /* EjercicioComponent */]);
        profileModal.dismiss();
    };
    DetallesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalles',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\detalles\detalles.html"*/'<!--\n\n  Generated template for the DetallesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Entrenamiento</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n\n\n    <ion-card-header>\n\n      {{item.nombre}}\n\n    </ion-card-header>\n\n  \n\n    <ion-card-content>\n\n      {{item.detalles}}\n\n    </ion-card-content>\n\n  \n\n  </ion-card>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let ejercicio of ejercicios" (click)="detalles()">\n\n      {{ejercicio.nombre}}\n\n\n\n        <ion-icon name="star" item-end></ion-icon>\n\n \n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <button ion-button center bottom (click)="comenzarEjercicios(item)"> Comenzar </button>\n\n</ion-footer>\n\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\detalles\detalles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], DetallesPage);
    return DetallesPage;
}());

//# sourceMappingURL=detalles.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrenadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(93);
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
 * Generated class for the EntrenadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntrenadorPage = /** @class */ (function () {
    function EntrenadorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EntrenadorPage.prototype.abrirChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */]);
    };
    EntrenadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-entrenador',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\entrenador\entrenador.html"*/'<!--\n  Generated template for the EntrenadorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Entrenador</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img src="https://image.freepik.com/foto-gratis/sonriendo-entrenador-deportivo-escribiendo-portapapeles_13339-161340.jpg"/>\n    <ion-card-content>\n      <ion-card-title>\n        Nombre del Entrenador\n        </ion-card-title>\n      <p>\n        Descripción del entrenador.\n      </p>\n      <button ion-button full (click)="abrirChat()">Enviar mensaje</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\entrenador\entrenador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EntrenadorPage);
    return EntrenadorPage;
}());

//# sourceMappingURL=entrenador.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvolucionPage; });
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
 * Generated class for the EvolucionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EvolucionPage = /** @class */ (function () {
    function EvolucionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EvolucionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EvolucionPage');
    };
    EvolucionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-evolucion',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\evolucion\evolucion.html"*/'<!--\n  Generated template for the EvolucionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Evolución</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\evolucion\evolucion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EvolucionPage);
    return EvolucionPage;
}());

//# sourceMappingURL=evolucion.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
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
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registro',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\registro\registro.html"*/'<!--\n\n  Generated template for the RegistroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Registro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosPage; });
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
 * Generated class for the UsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuariosPage = /** @class */ (function () {
    function UsuariosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UsuariosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuariosPage');
    };
    UsuariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usuarios',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\usuarios\usuarios.html"*/'<!--\n\n  Generated template for the UsuariosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Usuarios</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\usuarios\usuarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UsuariosPage);
    return UsuariosPage;
}());

//# sourceMappingURL=usuarios.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_form_perfil_form__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(37);
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
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(afDatabase, afAuth, navCtrl, navParams) {
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.perfil = _this.afDatabase.object('perfil/' + data.uid);
                _this.perfilData = _this.perfil.valueChanges();
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
    };
    PerfilPage.prototype.actualizarPerfil = function (perfilData) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__perfil_form_perfil_form__["a" /* PerfilFormPage */]);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-perfil',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\perfil\perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n      <img src="https://static.saludenvidiable.com/wp-content/uploads/2016/07/instrucciones-ligar-en-el-gimnasio-772x528.jpg"/>\n      <ion-card-content>\n        <ion-card-title>\n            {{(perfilData | async)?.nombre}} {{(perfilData | async)?.apellido}}\n          </ion-card-title>\n        \n          <!--\n          <ion-item>\n              <span item-start>Sexo</span>\n              <span item-end>{{(perfilData | async)?.sexo}}</span>\n          </ion-item>\n          <ion-item>\n              <span item-start>Edad</span>\n              <span item-end>{{(perfilData | async)?.edad}}</span>\n          </ion-item>\n          <ion-item>\n              <span item-start>Peso Inicial:</span>\n              <span item-end>{{(perfilData | async)?.peso}}</span>\n          </ion-item>\n          -->\n      </ion-card-content>\n    </ion-card>\n    \n    <button ion-button (click)="actualizarPerfil()">Actualizar Perfil</button>\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, navCtrl, navParams, alertCtrl) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.user = {};
    }
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
                    .then(function (auth) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                })
                    .catch(function (err) {
                    var alert = _this.alertCtrl.create({
                        title: 'Error de Autenticación!',
                        buttons: ['OK']
                    });
                    alert.present();
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding class="dark">\n\n\n\n  \n\n<div padding class="ingresar">\n\n    \n\n  <ion-list>\n\n\n\n      <ion-item class="inicio-sesion">\n\n        <ion-label floating>Usuario</ion-label>\n\n        <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="inicio-sesion">\n\n        <ion-label floating>Contraseña</ion-label>\n\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item class="inicio-sesion">\n\n          <div class="centrar">\n\n              <button ion-button (click)="login(user)" color="light" >Entrar</button>\n\n            </div>\n\n      </ion-item>\n\n  </ion-list>\n\n\n\n  \n\n\n\n</div>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_actividad_actividad__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dieta_dieta__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_entrenador_entrenador__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_evolucion_evolucion__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_logros_logros__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_perfil_perfil__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_auth_service__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_firebase_config__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_perfil_form_perfil_form__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_chat_chat__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_admin_inicio_admin_inicio__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_parametros_parametros__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_detalles_detalles__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_dieta_detalle_dieta_detalle__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_ejercicio_ejercicio__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_admin_entrenamientos_admin_entrenamientos__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_editar_entrenamiento_editar_entrenamiento__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_usuarios_usuarios__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_registro_registro__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_crear_ejercicios_crear_ejercicios__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular_sortablejs__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_angular_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_chat_admin_chat_admin__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_usuarios_admin_usuarios_admin__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_config_admin_config_admin__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_notificaciones_notificaciones__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_data_data__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_semanas_semanas__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_crear_entrenamiento_crear_entrenamiento__ = __webpack_require__(169);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_actividad_actividad__["a" /* ActividadPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dieta_dieta__["a" /* DietaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_entrenador_entrenador__["a" /* EntrenadorPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_evolucion_evolucion__["a" /* EvolucionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_logros_logros__["a" /* LogrosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_perfil_form_perfil_form__["a" /* PerfilFormPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_admin_inicio_admin_inicio__["a" /* AdminInicioPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_parametros_parametros__["a" /* ParametrosPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_detalles_detalles__["a" /* DetallesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_dieta_detalle_dieta_detalle__["a" /* DietaDetallePage */],
                __WEBPACK_IMPORTED_MODULE_27__components_ejercicio_ejercicio__["a" /* EjercicioComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_admin_entrenamientos_admin_entrenamientos__["a" /* AdminEntrenamientosPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_editar_entrenamiento_editar_entrenamiento__["a" /* EditarEntrenamientoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_usuarios_usuarios__["a" /* UsuariosPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_crear_ejercicios_crear_ejercicios__["a" /* CrearEjerciciosPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_chat_admin_chat_admin__["a" /* ChatAdminPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_usuarios_admin_usuarios_admin__["a" /* UsuariosAdminPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_config_admin_config_admin__["a" /* ConfigAdminPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_notificaciones_notificaciones__["a" /* NotificacionesPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_semanas_semanas__["a" /* SemanasPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_crear_entrenamiento_crear_entrenamiento__["a" /* CrearEntrenamientoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/actividad/actividad.module#ActividadPageModule', name: 'ActividadPage', segment: 'actividad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-entrenamientos/admin-entrenamientos.module#AdminEntrenamientosPageModule', name: 'AdminEntrenamientosPage', segment: 'admin-entrenamientos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-admin/chat-admin.module#ChatAdminPageModule', name: 'ChatAdminPage', segment: 'chat-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-inicio/admin-inicio.module#AdminInicioPageModule', name: 'AdminInicioPage', segment: 'admin-inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/config-gimnasio/config-gimnasio.module#ConfigGimnasioPageModule', name: 'ConfigGimnasioPage', segment: 'config-gimnasio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/config-admin/config-admin.module#ConfigAdminPageModule', name: 'ConfigAdminPage', segment: 'config-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/config-entrenador/config-entrenador.module#ConfigEntrenadorPageModule', name: 'ConfigEntrenadorPage', segment: 'config-entrenador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crear-ejercicios/crear-ejercicios.module#CrearEjerciciosPageModule', name: 'CrearEjerciciosPage', segment: 'crear-ejercicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crear-entrenamiento/crear-entrenamiento.module#CrearEntrenamientoPageModule', name: 'CrearEntrenamientoPage', segment: 'crear-entrenamiento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalles/detalles.module#DetallesPageModule', name: 'DetallesPage', segment: 'detalles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entrenador/entrenador.module#EntrenadorPageModule', name: 'EntrenadorPage', segment: 'entrenador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dieta-detalle/dieta-detalle.module#DietaDetallePageModule', name: 'DietaDetallePage', segment: 'dieta-detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/evolucion/evolucion.module#EvolucionPageModule', name: 'EvolucionPage', segment: 'evolucion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gimnasios-admin/gimnasios-admin.module#GimnasiosAdminPageModule', name: 'GimnasiosAdminPage', segment: 'gimnasios-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dieta/dieta.module#DietaPageModule', name: 'DietaPage', segment: 'dieta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editar-entrenamiento/editar-entrenamiento.module#EditarEntrenamientoPageModule', name: 'EditarEntrenamientoPage', segment: 'editar-entrenamiento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entrenadores-admin/entrenadores-admin.module#EntrenadoresAdminPageModule', name: 'EntrenadoresAdminPage', segment: 'entrenadores-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logros/logros.module#LogrosPageModule', name: 'LogrosPage', segment: 'logros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parametros/parametros.module#ParametrosPageModule', name: 'ParametrosPage', segment: 'parametros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notificaciones/notificaciones.module#NotificacionesPageModule', name: 'NotificacionesPage', segment: 'notificaciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil-form/perfil-form.module#PerfilFormPageModule', name: 'PerfilFormPage', segment: 'perfil-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuarios/usuarios.module#UsuariosPageModule', name: 'UsuariosPage', segment: 'usuarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuarios-admin/usuarios-admin.module#UsuariosAdminPageModule', name: 'UsuariosAdminPage', segment: 'usuarios-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/semanas/semanas.module#SemanasPageModule', name: 'SemanasPage', segment: 'semanas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_20__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_15__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_33_angular_sortablejs__["SortablejsModule"].forRoot({ animation: 150 })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_actividad_actividad__["a" /* ActividadPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dieta_dieta__["a" /* DietaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_entrenador_entrenador__["a" /* EntrenadorPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_evolucion_evolucion__["a" /* EvolucionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_logros_logros__["a" /* LogrosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_perfil_form_perfil_form__["a" /* PerfilFormPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_admin_inicio_admin_inicio__["a" /* AdminInicioPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_parametros_parametros__["a" /* ParametrosPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_detalles_detalles__["a" /* DetallesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_dieta_detalle_dieta_detalle__["a" /* DietaDetallePage */],
                __WEBPACK_IMPORTED_MODULE_27__components_ejercicio_ejercicio__["a" /* EjercicioComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_admin_entrenamientos_admin_entrenamientos__["a" /* AdminEntrenamientosPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_editar_entrenamiento_editar_entrenamiento__["a" /* EditarEntrenamientoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_usuarios_usuarios__["a" /* UsuariosPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_crear_ejercicios_crear_ejercicios__["a" /* CrearEjerciciosPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_chat_admin_chat_admin__["a" /* ChatAdminPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_usuarios_admin_usuarios_admin__["a" /* UsuariosAdminPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_config_admin_config_admin__["a" /* ConfigAdminPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_notificaciones_notificaciones__["a" /* NotificacionesPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_semanas_semanas__["a" /* SemanasPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_crear_entrenamiento_crear_entrenamiento__["a" /* CrearEntrenamientoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_38__providers_data_data__["a" /* Data */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dieta_dieta__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_logros_logros__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_perfil_form_perfil_form__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_parametros_parametros__ = __webpack_require__(174);
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
    function MyApp(afDatabase, afAuth, platform, statusBar, splashScreen) {
        var _this = this;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Entrenamiento', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Dieta Programada', component: __WEBPACK_IMPORTED_MODULE_7__pages_dieta_dieta__["a" /* DietaPage */] },
            { title: 'Mi Entrenador', component: __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */] },
            { title: 'Logros', component: __WEBPACK_IMPORTED_MODULE_9__pages_logros_logros__["a" /* LogrosPage */] },
            { title: 'Parametros', component: __WEBPACK_IMPORTED_MODULE_13__pages_parametros_parametros__["a" /* ParametrosPage */] },
            { title: 'Actividades', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_10__pages_perfil_form_perfil_form__["a" /* PerfilFormPage */] }
        ];
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.perfil = _this.afDatabase.object('perfil/' + data.uid);
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logOut = function () {
        var _this = this;
        this.afAuth.auth.signOut()
            .then(function () { return _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\app\app.html"*/'<ion-menu [content]="content">\n\n  \n\n\n\n  <ion-content class="menu-side" padding>\n\n    <ion-list class="centrar" no-lines>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class="centrar inicio-sesion">\n\n        {{p.title}}\n\n      </button>\n\n      \n\n      <button menuClose ion-item (click)="logOut()" class="centrar inicio-sesion">Cerrar Sesión</button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://localhost:8080/api/';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(apiUrl + 'login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('X-Auth-Token', localStorage.getItem('token'));
            _this.http.post(apiUrl + 'logout', {}, { headers: headers })
                .subscribe(function (res) {
                localStorage.clear();
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyBYaN3bY1HATgE28Lyzu4Mc0nnZOFFYAqw",
    authDomain: "fitness-e4dff.firebaseapp.com",
    databaseURL: "https://fitness-e4dff.firebaseio.com",
    projectId: "fitness-e4dff",
    storageBucket: "fitness-e4dff.appspot.com",
    messagingSenderId: "535071090849"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Data = /** @class */ (function () {
    function Data(http) {
        this.http = http;
        this.items = [
            { title: 'one' },
            { title: 'two' },
            { title: 'three' },
            { title: 'four' },
            { title: 'five' },
            { title: 'six' }
        ];
    }
    Data.prototype.filterItems = function (searchTerm) {
        return this.items.filter(function (item) {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    Data = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], Data);
    return Data;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_inicio_admin_inicio__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__semanas_semanas__ = __webpack_require__(170);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function HomePage(afDatabase, afAuth, navCtrl) {
        var _this = this;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.user = '';
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.perfil = _this.afDatabase.object('perfil/' + data.uid);
                _this.perfilData = _this.perfil.valueChanges();
                _this.perfilData.subscribe(function (user) {
                    if (user.tipo == 'admin') {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__admin_inicio_admin_inicio__["a" /* AdminInicioPage */]);
                    }
                });
                _this.itemsRef = _this.afDatabase.list('actividades/' + data.uid);
                _this.items = _this.itemsRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (items) {
                    return items.map(function (item) { return (__assign({ key: item.key }, item.payload.val())); });
                }));
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    }
    HomePage.prototype.abrirEjercicios = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__semanas_semanas__["a" /* SemanasPage */], { item: item });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>FitnessApp</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding  class="card-background-page">\n  \n  <ion-card>\n    \n    <ion-card-content>\n      <ion-card-title>\n        Entrenamientos\n      </ion-card-title>\n     <ion-item>\n      <p item-start>30 días</p>\n      <p item-end>10 días restantes</p>\n    </ion-item>\n      <ion-row>\n        <ion-col>\n          <div style="background:gray; width:100%; height: 10px">\n              <div style="background: green;width: 80%;height: 10px; margin:0;padding:0;"></div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let item of items | async" (click)="abrirEjercicios(item.key)">\n    <ion-item>\n      <p item-start>{{item.nombre}}</p>\n    <ion-icon item-end *ngIf="item.finalizado == true" name="md-checkmark-circle" item-end style="color:rgb(51, 255, 51)"></ion-icon>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActividadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(13);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the ActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActividadPage = /** @class */ (function () {
    function ActividadPage(afDatabase, afAuth, navCtrl, navParams) {
        var _this = this;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // var cronometro
        this.centesimas = 0;
        this.minutos = 59;
        this.segundos = 0;
        this._centesimas = '00';
        this._minutos = '00';
        this._segundos = '00';
        this.isRun = true;
        this.estado = 'play';
        this.refreshColor = 'light';
        this.item = navParams.data;
        this.itemKey = this.item.itemKey;
        this.ejercicioKey = this.item.ejercicioKey;
        console.log(this.itemKey);
        this.start();
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.itemsRef = _this.afDatabase.list('actividades/' + data.uid + '/' + _this.ejercicioKey + '/semana/' + _this.itemKey);
                _this.items = _this.itemsRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (items) {
                    return items.map(function (item) { return (__assign({ key: item.key }, item.payload.val())); });
                }));
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
    }
    ActividadPage.prototype.slideChanged = function () {
        var currentIndex = this.slides;
        if (currentIndex.isEnd()) {
            document.getElementById('btn-next').style.display = 'none';
            document.getElementById('e-card').style.display = 'block';
        }
        else {
            document.getElementById('btn-next').style.display = 'block';
            document.getElementById('e-card').style.display = 'none';
        }
    };
    ActividadPage.prototype.slideNext = function () {
        this.slides.slideNext();
    };
    ActividadPage.prototype.completarActividad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.afDatabase.object('actividades/' + data.uid + '/' + _this.ejercicioKey + '/semana/' + _this.itemKey)
                    .update({
                    finalizado: true,
                    tiempo: _this._minutos + ':' + _this._segundos
                });
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    //Cronometro
    ActividadPage.prototype.estadoSwap = function () {
        this.isRun = !this.isRun;
        if (this.isRun) {
            this.estado = 'pause';
            this.refreshColor = 'gris';
            this.start();
        }
        else {
            this.estado = 'play';
            this.refreshColor = 'light';
            this.pause();
        }
    };
    ActividadPage.prototype.start = function () {
        var _this = this;
        this.contador = setInterval(function () {
            _this.centesimas += 1;
            if (_this.centesimas < 10)
                _this._centesimas = '0' + _this.centesimas;
            else
                _this._centesimas = '' + _this.centesimas;
            if (_this.centesimas == 10) {
                _this.centesimas = 0;
                _this.segundos += 1;
                if (_this.segundos < 10)
                    _this._segundos = '0' + _this.segundos;
                else
                    _this._segundos = _this.segundos + '';
                if (_this.segundos == 60) {
                    _this.segundos = 0;
                    _this.minutos += 1;
                    if (_this.minutos < 10)
                        _this._minutos = '0' + _this.minutos;
                    else
                        _this._minutos = _this.minutos + '';
                    _this._segundos = '00';
                    if (_this.minutos == 90) {
                        _this.pause();
                    }
                }
            }
        }, 100);
    };
    ActividadPage.prototype.pause = function () {
        clearInterval(this.contador);
    };
    ActividadPage.prototype.stop = function () {
        if (!this.isRun) {
            clearInterval(this.contador);
            this.minutos = 0;
            this.segundos = 0;
            this.centesimas = 0;
            this._centesimas = '00';
            this._segundos = '00';
            this._minutos = '00';
            this.estado = 'play';
            this.isRun = false;
            this.contador = null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], ActividadPage.prototype, "slides", void 0);
    ActividadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-actividad',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\actividad\actividad.html"*/'<!--\n\n  Generated template for the ActividadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{item.nombre}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n-->\n\n\n\n<ion-content>\n\n\n\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n\n    <ion-slide>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-card-title>\n\n              CALENTAMIENTO\n\n            </ion-card-title>\n\n            \n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <div class="timer">\n\n                    <span item-start>\n\n                      <span class="titulos">4</span>m <span class="titulos">12</span>s\n\n                    </span>\n\n                   <span item-end>\n\n                     <ion-icon name="play"></ion-icon>\n\n                   <ion-icon name="square"></ion-icon>\n\n                   </span>\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col>\n\n                   <span (click)="slideNext()">salta</span>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>  \n\n            \n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n      </ion-slide>\n\n\n\n      <ion-slide *ngFor="let ejercicio of items | async">\n\n          <ion-card>\n\n              \n\n              <ion-card-content>\n\n                <ion-card-title>\n\n                  HAZ EL EJERCICIO\n\n                </ion-card-title>\n\n                <img src="https://t2.uc.ltmcdn.com/images/6/3/6/img_cuanto_ejercicio_hacer_a_la_semana_26636_orig.jpg"/>\n\n                <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                      <h3 class="titulos">\n\n                        S1\n\n                      </h3>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                      <h3 class="titulos">\n\n                        {{ejercicio.peso}} Kg\n\n                      </h3>\n\n                    </ion-col>\n\n                    <ion-col> \n\n                      <h3 class="titulos">\n\n                        X{{ejercicio.repeticiones}}\n\n                      </h3>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n              </ion-card-content>\n\n            </ion-card>\n\n\n\n           \n\n              \n\n          \n\n      </ion-slide>\n\n\n\n      <ion-slide>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-card-title>\n\n              ¡ENTRENAMIENTO COMPLETADO!\n\n            </ion-card-title>\n\n            <img class="copa" src="/assets/imgs/copa.png"/>\n\n            <h3 class="titulos">\n\n             1<small>h</small> 5<small>m</small> 30<small>s</small>\n\n            </h3>\n\n            <h3 class="titulos">\n\n              2.450 Kg\n\n            </h3>\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <ion-icon name="star" style="color:yellow"></ion-icon>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <ion-icon name="star" style="color:yellow"></ion-icon>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <ion-icon name="star" style="color:yellow"></ion-icon>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <ion-icon name="star" style="color:yellow"></ion-icon>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <ion-icon name="star"></ion-icon>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>  \n\n            <button ion-button (click)="completarActividad()">\n\n              Finalizar\n\n            </button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-slide>\n\n      \n\n    </ion-slides>\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button block (click)="slideNext()" id="btn-next" style="display:none">\n\n        Siguiente ejercicio\n\n      </button>\n\n  <ion-card id="e-card">\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n      {{item.nombre}}\n\n    </ion-card-title>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-icon name="star" style="color:yellow"></ion-icon>\n\n          <ion-icon name="star" style="color:yellow"></ion-icon>\n\n          <ion-icon name="star" style="color:yellow"></ion-icon>\n\n        </ion-col>\n\n        <ion-col>\n\n          x10 x2 80Kg\n\n        </ion-col>\n\n        </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-footer>'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\actividad\actividad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ActividadPage);
    return ActividadPage;
}());

//# sourceMappingURL=actividad.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(37);
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(afDatabase, afAuth, navCtrl, navParams) {
        var _this = this;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mensaje = {};
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.mensajes = _this.afDatabase.list('mensajes/' + data.uid).valueChanges();
                _this.perfil = _this.afDatabase.object('perfil/' + data.uid);
                _this.perfilData = _this.perfil.valueChanges();
                console.log(_this.perfil);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    }
    ChatPage.prototype.enviarMensaje = function (mensaje) {
        var _this = this;
        this.afAuth.authState.subscribe(function (auth) {
            _this.afDatabase.list('mensajes/' + auth.uid)
                .push(_this.mensaje);
            _this.mensaje.mensaje = '';
        });
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\chat\chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mi Entrenador</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-card *ngFor="let mensaje of mensajes | async">\n      <!--<ion-card-header>\n        {{mensaje.nombre}}\n      </ion-card-header>-->\n      <ion-card-content>\n        {{mensaje.mensaje}}\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="primary">\n      <ion-input type="text" [(ngModel)]="mensaje.mensaje" color="secondary"></ion-input>\n      <ion-input type="hidden" [(ngModel)]="mensaje.nombre" value="yo"></ion-input>\n    <ion-buttons end>\n      <button ion-button icon-end color="royal" (click)="enviarMensaje(mensaje)">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PerfilFormPage = /** @class */ (function () {
    function PerfilFormPage(afDatabase, afAuth, navCtrl, navParams) {
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.perfilData = {};
        console.log(this.perfil);
    }
    PerfilFormPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.perfil = _this.afDatabase.object('perfil/' + data.uid);
                _this.perfilData = _this.perfil.snapshotChanges().subscribe(function (perfil) {
                    console.log(perfil.key);
                    _this.perfilData = perfil.payload.val();
                });
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
    };
    PerfilFormPage.prototype.crearPerfil = function (perfilData) {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.object('perfil/' + auth.uid)
                .set(perfilData)
                .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]); });
        });
    };
    PerfilFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-perfil-form',template:/*ion-inline-start:"c:\xampp\htdocs\fitness\src\pages\perfil-form\perfil-form.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Actualizar Perfil {{ perfilData.nombre }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-slides>\n\n    <ion-slide>\n\n      <img src="assets/imgs/icon-user-default.png" class="perfil">\n\n  \n\n  <ion-item>\n\n    <ion-label floating>\n\n      Nombre\n\n    </ion-label>\n\n    <ion-input [(ngModel)]="perfilData.nombre"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>\n\n      Email\n\n    </ion-label>\n\n    <ion-input [(ngModel)]="perfilData.email"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>\n\n      Fecha de nacimiento\n\n    </ion-label>\n\n    <ion-datetime displayFormat="DD-MM-YYYY" pickerFormat="DD-MM-YYYY" [(ngModel)]="perfilData.nacimiento"></ion-datetime>\n\n  </ion-item>\n\n  \n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-icon name="female"></ion-icon>\n\n    </ion-col>\n\n    <ion-col>\n\n      <ion-icon name="male"></ion-icon>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-input [(ngModel)]="perfilData.tipo" type="hidden" value="usuario"></ion-input>\n\n\n\n   \n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <ion-icon name="arrow-up"></ion-icon>\n\n      <h1 class="titulos">80 <small>Kg</small></h1>\n\n      <ion-icon name="arrow-down"></ion-icon><br> <br>\n\n      <ion-icon name="arrow-up"></ion-icon>\n\n      <h1 class="titulos">180 <small>cm</small></h1>\n\n      <ion-icon name="arrow-down"></ion-icon><br> <br>\n\n      <ion-icon name="arrow-up"></ion-icon>\n\n      <h1 class="titulos">15 <small>%</small></h1>\n\n      <ion-icon name="arrow-down"></ion-icon>\n\n    </ion-slide>\n\n  \n\n\n\n  <ion-slide>\n\n    <img src="assets/imgs/shield.png" alt="" class="perfil">\n\n    <br>\n\n    <ion-item>\n\n  <ion-label>Objetivo del Entrenamiento</ion-label>\n\n  <ion-select>\n\n    <ion-option value="f">Opcion 1</ion-option>\n\n    <ion-option value="m">Opcion 2</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n\n\n<br>\n\n<br>\n\n\n\n <img src="assets/imgs/heart.png" alt="" class="perfil">\n\n    <br>\n\n    <ion-item>\n\n  <ion-label>Objetivo Dieta</ion-label>\n\n  <ion-select>\n\n    <ion-option value="f">Opcion 1</ion-option>\n\n    <ion-option value="m">Opcion 2</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n  </ion-slide>\n\n</ion-slides>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab (click)="crearPerfil(perfilData)">\n\n      <ion-icon name="archive"></ion-icon>\n\n    </button>\n\n   </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\fitness\src\pages\perfil-form\perfil-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PerfilFormPage);
    return PerfilFormPage;
}());

//# sourceMappingURL=perfil-form.js.map

/***/ })

},[323]);
//# sourceMappingURL=main.js.map