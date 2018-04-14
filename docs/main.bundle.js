webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./uploads/shared/upload.module": [
		"../../../../../src/app/uploads/shared/upload.module.ts",
		"upload.module"
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
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_user_login_user_login_component__ = __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__items_items_list_items_list_component__ = __webpack_require__("../../../../../src/app/items/items-list/items-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_readme_page_readme_page_component__ = __webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notes_notes_list_notes_list_component__ = __webpack_require__("../../../../../src/app/notes/notes-list/notes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__ui_readme_page_readme_page_component__["a" /* ReadmePageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__ui_user_login_user_login_component__["a" /* UserLoginComponent */] },
    { path: 'items', component: __WEBPACK_IMPORTED_MODULE_3__items_items_list_items_list_component__["a" /* ItemsListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__core_auth_guard__["a" /* AuthGuard */]] },
    { path: 'notes', component: __WEBPACK_IMPORTED_MODULE_5__notes_notes_list_notes_list_component__["a" /* NotesListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__core_auth_guard__["a" /* AuthGuard */]] },
    // uploads are lazy loaded
    { path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__core_auth_guard__["a" /* AuthGuard */]] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__core_auth_guard__["a" /* AuthGuard */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <top-nav></top-nav>\n\n  <div class=\"content columns\">\n    <aside class=\"column is-2 is-offset-1\">\n      <user-profile></user-profile>\n    </aside>\n\n    <main class=\"column is-8\">\n      <notification-message></notification-message>\n\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n\n  <div class=\"github-banner\">\n    <a href=\"https://github.com/codediodeio/angular-firestarter\" class=\"github-corner\" aria-label=\"View source on Github\">\n      <svg width=\"60\" height=\"60\" viewBox=\"0 0 250 250\" style=\"z-index: 11; fill:#FD6C6C; color:#fff; position: absolute; top: 0; border: 0; right: 0;\" aria-hidden=\"true\"><path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path><path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path><path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path>\n      </svg>\n    </a>\n    <style>\n      .github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}\n    </style>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__items_shared_item_module__ = __webpack_require__("../../../../../src/app/items/shared/item.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ui_shared_ui_module__ = __webpack_require__("../../../../../src/app/ui/shared/ui.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notes_notes_module__ = __webpack_require__("../../../../../src/app/notes/notes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





///// Start FireStarter
// Core

// Shared/Widget

// Feature Modules



///// End FireStarter


var firebaseConfig = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebaseConfig;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__items_shared_item_module__["a" /* ItemModule */],
                __WEBPACK_IMPORTED_MODULE_8__ui_shared_ui_module__["a" /* UiModule */],
                __WEBPACK_IMPORTED_MODULE_9__notes_notes_module__["a" /* NotesModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notify_service__ = __webpack_require__("../../../../../src/app/core/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(auth, router, notify) {
        this.auth = auth;
        this.router = router;
        this.notify = notify;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.user.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* take */])(1), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* map */])(function (user) { return !!user; }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (loggedIn) {
            if (!loggedIn) {
                console.log('access denied');
                _this.notify.update('You must be logged in!', 'error');
                _this.router.navigate(['/login']);
            }
        }));
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__notify_service__["a" /* NotifyService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notify_service__ = __webpack_require__("../../../../../src/app/core/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(afAuth, afs, router, notify) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.notify = notify;
        this.user = this.afAuth.authState
            .switchMap(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].of(null);
            }
        });
    }
    ////// OAuth Methods /////
    AuthService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.githubLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GithubAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.facebookLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.twitterLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].TwitterAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(credential.user);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    //// Anonymous Auth ////
    AuthService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth.signInAnonymously()
            .then(function (user) {
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(user); // if using firestore
        })
            .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            _this.handleError(error);
        });
    };
    //// Email/Password Auth ////
    AuthService.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(user); // if using firestore
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(user); // if using firestore
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Sends email allowing user to reset password
    AuthService.prototype.resetPassword = function (email) {
        var _this = this;
        var fbAuth = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]();
        return fbAuth.sendPasswordResetEmail(email)
            .then(function () { return _this.notify.update('Password update email sent', 'info'); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    // If error, console log and notify user
    AuthService.prototype.handleError = function (error) {
        console.error(error);
        this.notify.update(error.message, 'error');
    };
    // Sets user data to firestore after succesful login
    AuthService.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email || null,
            displayName: user.displayName || 'nameless user',
            photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ',
        };
        return userRef.set(data);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__notify_service__["a" /* NotifyService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notify_service__ = __webpack_require__("../../../../../src/app/core/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["b" /* AngularFirestoreModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__notify_service__["a" /* NotifyService */]],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/notify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotifyService = (function () {
    function NotifyService() {
        this._msgSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.msg = this._msgSource.asObservable();
    }
    NotifyService.prototype.update = function (content, style) {
        var msg = { content: content, style: style };
        this._msgSource.next(msg);
    };
    NotifyService.prototype.clear = function () {
        this._msgSource.next(null);
    };
    NotifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "../../../../../src/app/items/item-detail/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 [ngClass]=\"{ 'strike-out': !item.active }\">\n  {{ item.title || 'missing title' }}\n</h3>\n\n<div class=\"card-content\">\n  Task Active?: {{ item.active }}<br>\n  {{ item.timeStamp | date: 'medium' }}\n</div>\n\n<div class=\"card-footer\">\n  <span class=\"button is-small is-info card-footer-item\" (click)='updateTimeStamp()'>Update Timestamp</span>\n  <span class=\"button is-small is-success card-footer-item\" *ngIf='item.active' (click)='updateActive(false)'>Mark Complete</span>\n  <span class=\"button is-small is-warning card-footer-item\" *ngIf='!item.active' (click)='updateActive(true)'>Mark Incomplete</span>\n  <span class=\"button is-small is-danger card-footer-item\" (click)='deleteItem()'>Delete</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/items/item-detail/item-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\n  border-radius: 0;\n  margin: 10px 5px;\n  text-transform: uppercase;\n  font-weight: bold; }\n\n.strike-out {\n  text-decoration: line-through;\n  color: darkred; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/item-detail/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_item__ = __webpack_require__("../../../../../src/app/items/shared/item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailComponent = (function () {
    function ItemDetailComponent(itemSvc) {
        this.itemSvc = itemSvc;
    }
    ItemDetailComponent.prototype.updateTimeStamp = function () {
        var date = new Date().getTime();
        this.itemSvc.updateItem(this.item.$key, { timeStamp: date });
    };
    ItemDetailComponent.prototype.updateActive = function (value) {
        this.itemSvc.updateItem(this.item.$key, { active: value });
    };
    ItemDetailComponent.prototype.deleteItem = function () {
        this.itemSvc.deleteItem(this.item.$key);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_item__["a" /* Item */])
    ], ItemDetailComponent.prototype, "item", void 0);
    ItemDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'item-detail',
            template: __webpack_require__("../../../../../src/app/items/item-detail/item-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/items/item-detail/item-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_item_service__["a" /* ItemService */]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/items/item-form/item-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>New Task Form</h3>\n\n<label class=\"label\">Name: </label>\n\n<input placeholder=\"Item Title\" class=\"input\"\n  [(ngModel)]=\"item.title\"\n  required minlength=\"2\" \n  #title='ngModel' autofocus>\n\n<input placeholder=\"Item Priority\" class=\"input\"\n  [(ngModel)]=\"item.priority\"\n  required minlength=\"2\">\n  \n\n<div *ngIf=\"title.dirty\">\n  <span *ngIf='title.errors; then errors else valid'>template renders here...</span>\n</div>\n\n<button class=\"button is-primary\" (click)='createItem()' [disabled]=\"!title.valid\">Create</button>\n\n<ng-template #valid>\n  <p class=\"help is-success\">looks good!</p>\n</ng-template>\n\n<ng-template #errors>\n  <p class=\"help is-danger\">form contains errors!</p>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/items/item-form/item-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/item-form/item-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_item__ = __webpack_require__("../../../../../src/app/items/shared/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemFormComponent = (function () {
    function ItemFormComponent(itemSvc) {
        this.itemSvc = itemSvc;
        this.item = new __WEBPACK_IMPORTED_MODULE_1__shared_item__["a" /* Item */]();
    }
    ItemFormComponent.prototype.createItem = function () {
        this.itemSvc.createItem(this.item);
        this.item = new __WEBPACK_IMPORTED_MODULE_1__shared_item__["a" /* Item */](); // reset item
    };
    ItemFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'item-form',
            template: __webpack_require__("../../../../../src/app/items/item-form/item-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/items/item-form/item-form.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_item_service__["a" /* ItemService */]])
    ], ItemFormComponent);
    return ItemFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/items/items-list/items-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Items</h1>\n\n<p>This page is a demo of a very basic todo list in Angular, using the Firebase Realtime DB on the backend.</p>\n\n<h2>Version 2: IP: {{ip}}</h2>\n\n<div *ngFor=\"let item of items | async\" class=\"card\">\n  <item-detail [item]='item'></item-detail>\n</div>\n\n<loading-spinner *ngIf=\"showSpinner\"></loading-spinner>\n\n<button type=\"button\" class=\"button is-danger\" (click)='deleteItems()'>Delete Entire List</button>\n\n<hr>\n\n<item-form></item-form>\n"

/***/ }),

/***/ "../../../../../src/app/items/items-list/items-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  margin-bottom: 10px;\n  padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/items-list/items-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsListComponent = (function () {
    function ItemsListComponent(itemService, http) {
        this.itemService = itemService;
        this.http = http;
        this.showSpinner = true;
        this.ip = '';
        this.items = this.itemService.getItemsList();
    }
    ItemsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items.subscribe(function (x) {
            _this.showSpinner = false;
        });
        var url = "https://api.ipify.org/?format=json";
        this.http.get(url)
            .subscribe(function (data) {
            console.log('EYE CATCHER!!!');
            console.log(data);
            /* tslint:disable */ // Disable all rules for the rest of the file
            _this.ip = data['ip'];
            /* tslint:enable */ // Enable all rules for the rest of the file0
        });
    };
    ItemsListComponent.prototype.deleteItems = function () {
        this.itemService.deleteAll();
    };
    ItemsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'items-list',
            template: __webpack_require__("../../../../../src/app/items/items-list/items-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/items/items-list/items-list.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_item_service__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ItemsListComponent);
    return ItemsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/items/shared/item.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__items_list_items_list_component__ = __webpack_require__("../../../../../src/app/items/items-list/items-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__item_form_item_form_component__ = __webpack_require__("../../../../../src/app/items/item-form/item-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__item_detail_item_detail_component__ = __webpack_require__("../../../../../src/app/items/item-detail/item-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ItemModule = (function () {
    function ItemModule() {
    }
    ItemModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__items_list_items_list_component__["a" /* ItemsListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__item_form_item_form_component__["a" /* ItemFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__item_detail_item_detail_component__["a" /* ItemDetailComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__item_service__["a" /* ItemService */],
            ],
        })
    ], ItemModule);
    return ItemModule;
}());



/***/ }),

/***/ "../../../../../src/app/items/shared/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = (function () {
    function ItemService(db) {
        this.db = db;
        this.basePath = '/items';
        this.itemsRef = db.list('/items');
    }
    // Return an observable list of Items
    ItemService.prototype.getItemsList = function () {
        return this.itemsRef.snapshotChanges().map(function (arr) {
            return arr.map(function (snap) { return Object.assign(snap.payload.val(), { $key: snap.key }); });
        });
    };
    // Return a single observable item
    ItemService.prototype.getItem = function (key) {
        var itemPath = this.basePath + "/" + key;
        var item = this.db.object(itemPath).valueChanges();
        return item;
    };
    // Create a brand new item
    ItemService.prototype.createItem = function (item) {
        this.itemsRef.push(item);
    };
    // Update an exisiting item
    ItemService.prototype.updateItem = function (key, value) {
        this.itemsRef.update(key, value);
    };
    // Deletes a single item
    ItemService.prototype.deleteItem = function (key) {
        this.itemsRef.remove(key);
    };
    // Deletes the entire list of items
    ItemService.prototype.deleteAll = function () {
        this.itemsRef.remove();
    };
    // Default error handling for all actions
    ItemService.prototype.handleError = function (error) {
        console.error(error);
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "../../../../../src/app/items/shared/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item() {
        this.active = true;
    }
    return Item;
}());



/***/ }),

/***/ "../../../../../src/app/notes/note-detail/note-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>{{ note.content }}</h3>\n  <span class=\"button is-small is-info\" (click)='addHeartToNote(note.hearts)'>\n    Heart <i class=\"fa fa-heart\"></i>\n  </span>\n  <span class=\"button is-small is-danger\" (click)='deleteNote(note?.id)'>Delete</span>\n  <p>This note has been hearted {{ note.hearts || 0 }} times.</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/notes/note-detail/note-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i {\n  margin-left: 5px; }\n\n.button {\n  border-radius: 0;\n  margin: 10px 5px;\n  text-transform: uppercase;\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notes/note-detail/note-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__note_service__ = __webpack_require__("../../../../../src/app/notes/note.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteDetailComponent = (function () {
    function NoteDetailComponent(noteService) {
        this.noteService = noteService;
    }
    NoteDetailComponent.prototype.addHeartToNote = function (val) {
        if (this.note.id) {
            this.noteService.updateNote(this.note.id, { hearts: val + 1 });
        }
        else {
            console.error('Note missing ID!');
        }
    };
    NoteDetailComponent.prototype.deleteNote = function (id) {
        this.noteService.deleteNote(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NoteDetailComponent.prototype, "note", void 0);
    NoteDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'note-detail',
            template: __webpack_require__("../../../../../src/app/notes/note-detail/note-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notes/note-detail/note-detail.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__note_service__["a" /* NoteService */]])
    ], NoteDetailComponent);
    return NoteDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notes/note.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteService = (function () {
    function NoteService(afs) {
        this.afs = afs;
        this.notesCollection = this.afs.collection('notes', function (ref) { return ref.orderBy('time', 'desc').limit(5); });
    }
    NoteService.prototype.getData = function () {
        return this.notesCollection.valueChanges();
    };
    NoteService.prototype.getSnapshot = function () {
        // ['added', 'modified', 'removed']
        return this.notesCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                return { id: a.payload.doc.id, content: data.content, hearts: data.hearts, time: data.time };
            });
        });
    };
    NoteService.prototype.getNote = function (id) {
        return this.afs.doc("notes/" + id);
    };
    NoteService.prototype.create = function (content) {
        var note = {
            content: content,
            hearts: 0,
            time: new Date().getTime(),
        };
        return this.notesCollection.add(note);
    };
    NoteService.prototype.updateNote = function (id, data) {
        return this.getNote(id).update(data);
    };
    NoteService.prototype.deleteNote = function (id) {
        return this.getNote(id).delete();
    };
    NoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], NoteService);
    return NoteService;
}());



/***/ }),

/***/ "../../../../../src/app/notes/notes-list/notes-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Firestore Notes</h1>\n<p>This is a very basic demo of the Firestore database.</p>\n\n<input [(ngModel)]=\"content\" placeholder=\"Add your own note\" class=\"input\">\n\n\n<button class=\"button is-success\" (click)=\"createNote()\" [disabled]=\"content?.length < 2 || content?.length > 200\">\n  Add Note\n</button>\n<hr>\n<div *ngFor=\"let note of notes | async\">\n  <note-detail [note]=\"note\"></note-detail>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/notes/notes-list/notes-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notes/notes-list/notes-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__note_service__ = __webpack_require__("../../../../../src/app/notes/note.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesListComponent = (function () {
    function NotesListComponent(noteService) {
        this.noteService = noteService;
    }
    NotesListComponent.prototype.ngOnInit = function () {
        // this.notes = this.noteService.getData()
        this.notes = this.noteService.getSnapshot();
    };
    NotesListComponent.prototype.createNote = function () {
        this.noteService.create(this.content);
        this.content = '';
    };
    NotesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'notes-list',
            template: __webpack_require__("../../../../../src/app/notes/notes-list/notes-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notes/notes-list/notes-list.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__note_service__["a" /* NoteService */]])
    ], NotesListComponent);
    return NotesListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notes/notes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__note_service__ = __webpack_require__("../../../../../src/app/notes/note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notes_list_notes_list_component__ = __webpack_require__("../../../../../src/app/notes/notes-list/notes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__note_detail_note_detail_component__ = __webpack_require__("../../../../../src/app/notes/note-detail/note-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NotesModule = (function () {
    function NotesModule() {
    }
    NotesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__notes_list_notes_list_component__["a" /* NotesListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__note_detail_note_detail_component__["a" /* NoteDetailComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__note_service__["a" /* NoteService */]],
        })
    ], NotesModule);
    return NotesModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    Angular + Firebase PWA Starter App <br>\n    Build me from scratch at <a href=\"https://angularfirebase.com\">AngularFirebase.com</a><br>\n    <br>Open Source | MIT License | Created by <a href=\"https://jeffdelaney.me\">Jeff Delaney</a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterNavComponent = (function () {
    function FooterNavComponent() {
    }
    FooterNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'footer-nav',
            template: __webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.scss")],
        })
    ], FooterNavComponent);
    return FooterNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"rect1\"></div>\n  <div class=\"rect2\"></div>\n  <div class=\"rect3\"></div>\n  <div class=\"rect4\"></div>\n  <div class=\"rect5\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\n  margin: 100px auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px; }\n\n.spinner > div {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n\n.spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.spinner .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n.spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'loading-spinner',
            template: __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.scss")],
        })
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui/notification-message/notification-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"notify.msg | async as msg\" class=\"notification\"\n  [ngClass]=\"{ \n    'is-danger': msg.style == 'error',\n    'is-success': msg.style == 'success',\n    'is-info': msg.style == 'info'\n  }\">\n  <button class=\"delete\" (click)=\"notify.clear()\"></button>\n  {{ msg.content }}\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/notification-message/notification-message.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/notification-message/notification-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_notify_service__ = __webpack_require__("../../../../../src/app/core/notify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationMessageComponent = (function () {
    function NotificationMessageComponent(notify) {
        this.notify = notify;
    }
    NotificationMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'notification-message',
            template: __webpack_require__("../../../../../src/app/ui/notification-message/notification-message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/notification-message/notification-message.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_notify_service__["a" /* NotifyService */]])
    ], NotificationMessageComponent);
    return NotificationMessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to Firestarter!</h1>\n\n<p>I am a Progressive Web App (PWA) built with Angular and Firebase.</p>\n\n<h2>Have Questions?</h2>\n\n<p>\n  <i class=\"fa fa-slack fa-lg\"></i> Let's talk on the <a target=\"blank\" href=\"https://join.slack.com/t/angularfirebase/shared_invite/enQtMjU2OTU5OTMyODM3LWU4YTZiMGFhZjJhYmEwYzI1MWFmYTgyMWRmOTI5NWZjYWE3NTMwZjFmNWMwZGI1MmMzODQ3OTFlZjFkMjc5N2Y\">\n  Angular Firebase Developers Slack Team\n</a>\n</p>\n\n<h2>Free Open Source Screencasts</h2>\n\n<p>\n  <i class=\"fa fa-youtube fa-lg\"></i>\n  Subscribe to the <a href=\"https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA\">AngularFirebase YouTube Channel</a> for weekly lessons.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadmePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReadmePageComponent = (function () {
    function ReadmePageComponent() {
    }
    ReadmePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'readme-page',
            template: __webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.scss")],
        })
    ], ReadmePageComponent);
    return ReadmePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui/shared/ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_login_user_login_component__ = __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_form_user_form_component__ = __webpack_require__("../../../../../src/app/ui/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__top_nav_top_nav_component__ = __webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_nav_footer_nav_component__ = __webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__readme_page_readme_page_component__ = __webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__notification_message_notification_message_component__ = __webpack_require__("../../../../../src/app/ui/notification-message/notification-message.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var UiModule = (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__user_login_user_login_component__["a" /* UserLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__top_nav_top_nav_component__["a" /* TopNavComponent */],
                __WEBPACK_IMPORTED_MODULE_10__footer_nav_footer_nav_component__["a" /* FooterNavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_form_user_form_component__["a" /* UserFormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__readme_page_readme_page_component__["a" /* ReadmePageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__notification_message_notification_message_component__["a" /* NotificationMessageComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__top_nav_top_nav_component__["a" /* TopNavComponent */],
                __WEBPACK_IMPORTED_MODULE_10__footer_nav_footer_nav_component__["a" /* FooterNavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__notification_message_notification_message_component__["a" /* NotificationMessageComponent */],
            ],
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n  <div class=\"nav-left\">\n    <a class=\"nav-item logo\" routerLink=\"/\">\n      <img src=\"assets/images/angularfirebase.png\" width=\"30px\" alt=\"Firestarter Angular4 Demo App\"/> FireStarter\n    </a>\n  </div>\n\n  <!-- This \"nav-toggle\" hamburger menu is only visible on mobile -->\n  <!-- You need JavaScript to toggle the \"is-active\" class on \"nav-menu\" -->\n  <span class=\"nav-toggle\" (click)=\"toggleCollapse()\" [ngClass]=\"{'is-active': show}\">\n    <span></span>\n    <span></span>\n    <span></span>\n  </span>\n\n  <!-- This \"nav-menu\" is hidden on mobile -->\n  <!-- Add the modifier \"is-active\" to display it on mobile -->\n  <div class=\"nav-right nav-menu\" [ngClass]=\"{'is-active': show}\">\n    <a class=\"nav-item\" routerLink=\"/login\">\n      Login\n    </a>\n    <a class=\"nav-item\" routerLink=\"/items\">\n      Your URL\n    </a>\n    <a class=\"nav-item\" routerLink=\"/leaders\">\n      Leaders\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  border-bottom: 1px solid #E4E4E4;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 25px;\n  padding: 0 5vw;\n  padding-right: 60px; }\n  nav .nav-item {\n    color: gray;\n    font-weight: normal;\n    transition: color 0.3s ease; }\n    nav .nav-item:hover {\n      font-color: #1c90f3; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopNavComponent = (function () {
    function TopNavComponent() {
        this.show = false;
    }
    TopNavComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
    };
    TopNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'top-nav',
            template: __webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.scss")],
        })
    ], TopNavComponent);
    return TopNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userForm\"  *ngIf=\"newUser\"  (ngSubmit)=\"signup()\">\n\n  <h3>New User Signup</h3>\n  <p class=\"button is-small\" (click)=\"toggleForm()\">Already Registered?</p>\n  <hr>\n\n  <label for=\"email\">Email</label>\n  <input type=\"email\" id=\"email\" class=\"input\"\n         formControlName=\"email\" required >\n\n  <div *ngIf=\"formErrors.email\" class=\"notification is-danger\">\n    {{ formErrors.email }}\n  </div>\n\n  <label for=\"password\">Password</label>\n  <input type=\"password\" id=\"password\" class=\"input\"\n         formControlName=\"password\" required >\n\n  <div *ngIf=\"formErrors.password\" class=\"notification is-danger\">\n    {{ formErrors.password }}\n  </div>\n\n  <div *ngIf=\"userForm.valid\" class=\"notification is-success\">Form is valid</div>\n  <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\n\n</form>\n\n\n<form [formGroup]=\"userForm\"  *ngIf=\"!newUser\"  (ngSubmit)=\"login()\">\n\n  <h3>Existing User Login</h3>\n  <p class=\"btn button is-small\" (click)=\"toggleForm()\">New User?</p>\n  <hr>\n\n  <label for=\"email\">Email</label>\n  <input type=\"email\" id=\"email\" class=\"input\"\n         formControlName=\"email\" required >\n\n  <div *ngIf=\"formErrors.email\" class=\"help is-danger\">\n    {{ formErrors.email }}\n  </div>\n\n  <label for=\"password\">Password</label>\n  <input type=\"password\" id=\"password\" class=\"input\"\n         formControlName=\"password\" required >\n\n  <div *ngIf=\"formErrors.password\" class=\"help is-danger\">\n    {{ formErrors.password }}\n  </div>\n\n  <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\n\n  <span *ngIf=\"userForm.valid\" class=\"help is-success\">Form Looks Valid</span>\n\n  <a *ngIf=\"!passReset && userForm.controls.email.valid\" class=\"help is-info\" (click)=\"resetPassword()\">Reset Password for {{userForm.value.email}}?</a>\n  <p *ngIf=\"passReset\" class=\"help is-info\">Reset requested. Check your email instructions.</p>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserFormComponent = (function () {
    function UserFormComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.newUser = true; // to toggle login or signup form
        this.passReset = false; // set to true when password reset is triggered
        this.formErrors = {
            'email': '',
            'password': '',
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'email': 'Email must be a valid email',
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password must be include at one letter and one number.',
                'minlength': 'Password must be at least 4 characters long.',
                'maxlength': 'Password cannot be more than 40 characters long.',
            },
        };
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserFormComponent.prototype.toggleForm = function () {
        this.newUser = !this.newUser;
    };
    UserFormComponent.prototype.signup = function () {
        this.auth.emailSignUp(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.login = function () {
        this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.resetPassword = function () {
        var _this = this;
        this.auth.resetPassword(this.userForm.value['email'])
            .then(function () { return _this.passReset = true; });
    };
    UserFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email,
                ]],
            'password': ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(25),
                ]],
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    // Updates validation state on form changes.
    UserFormComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    if (control.errors) {
                        for (var key in control.errors) {
                            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                                this.formErrors[field] += messages[key] + " ";
                            }
                        }
                    }
                }
            }
        }
    };
    UserFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-form',
            template: __webpack_require__("../../../../../src/app/ui/user-form/user-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/user-form/user-form.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!(auth.user | async); else alreadyLoggedIn\">\n\n  <h3>Social Login</h3>\n\n    <button (click)=\"signInWithGoogle()\" class=\"button btn-social btn-google\" disabled>\n      <i class=\"fa fa-google fa-lg\"></i> Connect Google\n    </button>\n\n    <button (click)=\"signInWithGithub()\" class=\"button btn-social btn-github\" disabled>\n      <i class=\"fa fa-github fa-lg\"></i> Connect GitHub\n    </button>\n\n    <button (click)=\"signInWithFacebook()\" class=\"button  btn-social btn-facebook\" disabled>\n      <i class=\"fa fa-facebook fa-lg\"></i> Connect Facebook\n    </button>\n\n    <button (click)=\"signInWithTwitter()\" class=\"button  btn-social btn-twitter\">\n      <i class=\"fa fa-twitter fa-lg\"></i> Connect Twitter\n    </button>\n\n    <hr>\n\n    <h3>Anonymous Login</h3>\n\n      <button (click)=\"signInAnonymously()\" class=\"button button-info\">\n        <i class=\"fa fa-user-secret fa-lg\"></i> Connect Anonymously\n      </button>\n\n    <hr>\n\n    <user-form></user-form>\n\n</div>\n\n<ng-template #alreadyLoggedIn>\n  <p class=\"text-success\">\n    Already logged in!\n  </p>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLoginComponent = (function () {
    function UserLoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    /// Social Login
    UserLoginComponent.prototype.signInWithGithub = function () {
        var _this = this;
        this.auth.githubLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.auth.googleLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.auth.facebookLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithTwitter = function () {
        var _this = this;
        this.auth.twitterLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    /// Anonymous Sign In
    UserLoginComponent.prototype.signInAnonymously = function () {
        var _this = this;
        this.auth.anonymousLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    /// Shared
    UserLoginComponent.prototype.afterSignIn = function () {
        // Do after login stuff here, such router redirects, toast messages, etc.
        this.router.navigate(['/']);
    };
    UserLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-login',
            template: __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/user-login/user-login.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\" >\n  <div *ngIf=\"auth.user | async; then authenticated else guest\">\n          <!-- template will replace this div -->\n  </div>\n</div>\n\n<!-- User NOT logged in -->\n<ng-template #guest class=\"box\">\n  <h3>Howdy, GUEST</h3>\n  <p class=\"card-text\">Login to get started...</p>\n  <button class=\"button\" routerLink=\"/login\">Login</button>\n</ng-template>\n\n<!-- User logged in -->\n<ng-template #authenticated>\n  <div *ngIf=\"auth.user | async as user\">\n    <h3>Howdy, {{ user.displayName }}</h3>\n    <img class=\"card-img-top\" [src]=\"user.photoURL || 'https://api.adorable.io/avatars/109/fire.png'\" width=50px>\n    <p class=\"text-truncate\">UID: {{ user.uid }}</p>\n    <button class=\"button\" (click)=\"logout()\">Logout</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = (function () {
    function UserProfileComponent(auth) {
        this.auth = auth;
    }
    UserProfileComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-profile',
            template: __webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyD11jJJivOFgudz_SI_0_0y0aDaFIhAcCE',
        authDomain: 'cblb-91230.firebaseapp.com',
        databaseURL: 'https://cblb-91230.firebaseio.com',
        projectId: 'cblb-91230',
        storageBucket: 'cblb-91230.appspot.com',
        messagingSenderId: '591733565886'
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map