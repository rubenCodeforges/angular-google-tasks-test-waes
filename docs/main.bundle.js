webpackJsonp([0,4],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });

var FormService = (function () {
    function FormService() {
    }
    FormService.hasError = function (formControl, errorType) {
        if (errorType === void 0) { errorType = "required"; }
        if (!formControl) {
            return;
        }
        return formControl.hasError(errorType) && formControl.touched;
    };
    FormService.markFormControlsTouched = function (form) {
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](form.controls, function (control) {
            control.markAsTouched(true);
        });
    };
    return FormService;
}());

//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/FormService.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpErrorHandler__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = HttpService_1 = (function () {
    function HttpService(http, errorHandler) {
        this.http = http;
        this.errorHandler = errorHandler;
    }
    HttpService.prototype.get = function (url, options) {
        var _this = this;
        return this.http.get(url, options)
            .map(HttpService_1.toJsonResponse)
            .catch(function (response) { return _this.errorHandler.handleError(response); });
    };
    HttpService.prototype.post = function (url, requestBody, options) {
        var _this = this;
        return this.http.post(url, requestBody, options)
            .map(HttpService_1.toJsonResponse)
            .catch(function (response) { return _this.errorHandler.handleError(response); });
    };
    HttpService.prototype.put = function (url, requestBody, options) {
        var _this = this;
        return this.http.put(url, requestBody, options)
            .map(HttpService_1.toJsonResponse)
            .catch(function (response) { return _this.errorHandler.handleError(response); });
    };
    HttpService.prototype.delete = function (url, options) {
        var _this = this;
        return this.http.delete(url, options)
            .map(HttpService_1.toJsonResponse)
            .catch(function (response) { return _this.errorHandler.handleError(response); });
    };
    HttpService.toJsonResponse = function (response) {
        try {
            return response.json();
        }
        catch (e) {
            return response.status;
        }
    };
    return HttpService;
}());
HttpService = HttpService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__HttpErrorHandler__["a" /* HttpErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__HttpErrorHandler__["a" /* HttpErrorHandler */]) === "function" && _b || Object])
], HttpService);

var HttpService_1, _a, _b;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/HttpService.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TaskResource__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taskList_services_TasklistModel__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskModel; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskModel = (function () {
    function TaskModel(taskListModel, resource) {
        this.taskListModel = taskListModel;
        this.resource = resource;
        this.tasks = [];
    }
    TaskModel.prototype.loadTasks = function () {
        var _this = this;
        this.getAllTasks().subscribe(function (tasks) { return _this.tasks = tasks || []; });
    };
    TaskModel.prototype.getLoadedTasks = function () {
        return this.tasks;
    };
    TaskModel.prototype.getAllTasks = function () {
        return this.resource.findAll(this.taskListModel.getCurrentTasklistId()).map(function (res) { return res.items; });
    };
    TaskModel.prototype.getTask = function (id) {
        return this.resource.findById(this.taskListModel.getCurrentTasklistId(), id);
    };
    TaskModel.prototype.createTask = function (task) {
        var _this = this;
        var observable = this.resource.create(this.taskListModel.getCurrentTasklistId(), task);
        return observable.subscribe(function (task) { return _this.tasks.push(task); });
    };
    TaskModel.prototype.updateTask = function (task) {
        var _this = this;
        var observable = this.resource.update(this.taskListModel.getCurrentTasklistId(), task);
        return observable.subscribe(function (task) {
            _this.tasks = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](_this.tasks, function (t) {
                if (t.id == task.id) {
                    return task;
                }
                return t;
            });
        });
    };
    TaskModel.prototype.deleteTask = function (id) {
        var _this = this;
        this.resource.delete(this.taskListModel.getCurrentTasklistId(), id)
            .subscribe(function () {
            __WEBPACK_IMPORTED_MODULE_3_lodash__["remove"](_this.tasks, function (task) { return task.id == id; });
        });
    };
    return TaskModel;
}());
TaskModel = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__taskList_services_TasklistModel__["a" /* TaskListModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__taskList_services_TasklistModel__["a" /* TaskListModel */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__TaskResource__["a" /* TaskResource */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__TaskResource__["a" /* TaskResource */]) === "function" && _b || Object])
], TaskModel);

var _a, _b;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/TaskModel.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user_UserService__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(userService, translate) {
        this.userService = userService;
        translate.setDefaultLang('eng');
    }
    ;
    AppComponent.prototype.isSignedIn = function () {
        return this.userService.isUserSignedIn();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(493),
        styles: [__webpack_require__(481)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_user_UserService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_user_UserService__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/AppComponent.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorPageComponent = (function () {
    function ErrorPageComponent(route) {
        var _this = this;
        this.route = route;
        route.params.subscribe(function (params) {
            _this.errorCode = params['code'];
        });
    }
    return ErrorPageComponent;
}());
ErrorPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        template: __webpack_require__(494)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], ErrorPageComponent);

var _a;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/ErrorPageComponent.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_GoogleApiConfig__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleAuthService = (function () {
    function GoogleAuthService() {
        var _this = this;
        this.GoogleAuth = undefined;
        this.loadGapiAuth().subscribe(function (auth) { return _this.GoogleAuth = auth; });
    }
    /**
     * Init the gapi auth
     */
    GoogleAuthService.prototype.loadGapiAuth = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            gapi.load('auth2', function () {
                var auth = gapi.auth2.init(__WEBPACK_IMPORTED_MODULE_1__config_GoogleApiConfig__["a" /* GoogleApiConfig */].getConfig());
                observer.next(auth);
                return auth;
            });
        });
    };
    GoogleAuthService.prototype.getAuth = function () {
        if (!this.GoogleAuth) {
            return this.loadGapiAuth();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(this.GoogleAuth);
    };
    return GoogleAuthService;
}());
GoogleAuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GoogleAuthService);

//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/GoogleAuthService.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteConfirmationModal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteConfirmationModal = (function () {
    function DeleteConfirmationModal(activeModal) {
        this.activeModal = activeModal;
    }
    DeleteConfirmationModal.prototype.onConfirmation = function () {
        this.activeModal.close({ confirmed: true });
    };
    ;
    DeleteConfirmationModal.prototype.onClose = function () {
        this.activeModal.close({ confirmed: false });
    };
    return DeleteConfirmationModal;
}());
DeleteConfirmationModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'delete-confirmation-modal',
        template: __webpack_require__(495),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]) === "function" && _a || Object])
], DeleteConfirmationModal);

var _a;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/DeleteConfirmationModal.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_UserService__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
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
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.userService.isUserSignedIn()) {
            this.router.navigateByUrl("");
            return false;
        }
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_UserService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_UserService__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/AuthGuard.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SecurityService = (function () {
    function SecurityService(router) {
        this.router = router;
    }
    SecurityService.prototype.denyAndRedirectOnAuthError = function (errorBody) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](errorBody.error.errors, function (error) {
            if (error.reason == "authError") {
                _this.router.navigateByUrl('');
                location.reload();
            }
        });
    };
    return SecurityService;
}());
SecurityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
    /**
     * Security service used for security check and redirects
     * TODO: Rework
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], SecurityService);

var _a;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/SecurityService.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleTasksApi; });
var GoogleTasksApi = (function () {
    function GoogleTasksApi() {
    }
    return GoogleTasksApi;
}());

GoogleTasksApi.HOST = 'https://www.googleapis.com/tasks';
GoogleTasksApi.VERSION = '/v1';
GoogleTasksApi.URL = GoogleTasksApi.HOST + GoogleTasksApi.VERSION;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/GoogleTasksApi.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_security_SecurityService__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpErrorHandler; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpErrorHandler = (function () {
    function HttpErrorHandler(securityService) {
        this.securityService = securityService;
    }
    /**
     * TODO: SecurityService and auth errors handling
     * Simple handler , uses security to check if user is not authorized
     * @param response
     * @returns {any}
     */
    HttpErrorHandler.prototype.handleError = function (response) {
        var errMsg = response.status + " - " + response.statusText;
        var serverResponse = response.statusText == "OK" ? response.json() : {};
        this.securityService.denyAndRedirectOnAuthError(serverResponse);
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw({ message: errMsg, code: response.status, error: serverResponse });
    };
    return HttpErrorHandler;
}());
HttpErrorHandler = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_security_SecurityService__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_security_SecurityService__["a" /* SecurityService */]) === "function" && _a || Object])
], HttpErrorHandler);

var _a;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/HttpErrorHandler.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__taskList_TaskListComponent__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taskList_services_TasklistResource__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__taskList_services_TasklistModel__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_overview_TaskOverviewComponent__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_detail_TaskDetailComponent__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__TasksRouting__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__taskList_actionButtons_TasklistActionButtons__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__taskList_modal_TasklistCreateModalComponent__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__taskList_modal_TasklistEditModalComponent__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__task_services_TaskResource__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__task_services_TaskModel__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__task_modal_TaskCreateModalComponent__ = __webpack_require__(207);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var TasksModule = (function () {
    function TasksModule() {
    }
    return TasksModule;
}());
TasksModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_9__TasksRouting__["a" /* TasksRoutes */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__taskList_TaskListComponent__["a" /* TaskListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__task_modal_TaskCreateModalComponent__["a" /* TaskCreateModalComponent */],
            __WEBPACK_IMPORTED_MODULE_6__task_overview_TaskOverviewComponent__["a" /* TaskOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_7__task_detail_TaskDetailComponent__["a" /* TaskDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__taskList_modal_TasklistCreateModalComponent__["a" /* TasklistCreateModalComponent */],
            __WEBPACK_IMPORTED_MODULE_14__taskList_modal_TasklistEditModalComponent__["a" /* TasklistEditModalComponent */],
            __WEBPACK_IMPORTED_MODULE_10__taskList_actionButtons_TasklistActionButtons__["a" /* TasklistActionButtons */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__taskList_TaskListComponent__["a" /* TaskListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__taskList_actionButtons_TasklistActionButtons__["a" /* TasklistActionButtons */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__taskList_services_TasklistResource__["a" /* TaskListResource */],
            __WEBPACK_IMPORTED_MODULE_3__taskList_services_TasklistModel__["a" /* TaskListModel */],
            __WEBPACK_IMPORTED_MODULE_15__task_services_TaskResource__["a" /* TaskResource */],
            __WEBPACK_IMPORTED_MODULE_16__task_services_TaskModel__["a" /* TaskModel */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__taskList_modal_TasklistCreateModalComponent__["a" /* TasklistCreateModalComponent */],
            __WEBPACK_IMPORTED_MODULE_14__taskList_modal_TasklistEditModalComponent__["a" /* TasklistEditModalComponent */],
            __WEBPACK_IMPORTED_MODULE_17__task_modal_TaskCreateModalComponent__["a" /* TaskCreateModalComponent */]
        ]
    })
], TasksModule);

//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/TasksModule.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskDetailComponent = (function () {
    function TaskDetailComponent() {
    }
    return TaskDetailComponent;
}());
TaskDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'task-detail',
        template: __webpack_require__(499)
    })
], TaskDetailComponent);

//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/TaskDetailComponent.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure_form_FormService__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TaskModel__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskCreateModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskCreateModalComponent = (function () {
    function TaskCreateModalComponent(activeModal, model) {
        this.activeModal = activeModal;
        this.model = model;
        this.task = {};
    }
    TaskCreateModalComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            __WEBPACK_IMPORTED_MODULE_2__infrastructure_form_FormService__["a" /* FormService */].markFormControlsTouched(form);
            return;
        }
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.model.createTask(this.task))
            .subscribe(function () { return _this.onClose(); });
    };
    TaskCreateModalComponent.prototype.onClose = function () {
        this.activeModal.close();
    };
    TaskCreateModalComponent.prototype.hasError = function (formControl, errorType) {
        if (errorType === void 0) { errorType = "required"; }
        return __WEBPACK_IMPORTED_MODULE_2__infrastructure_form_FormService__["a" /* FormService */].hasError(formControl, errorType);
    };
    return TaskCreateModalComponent;
}());
TaskCreateModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'task-create-modal',
        template: __webpack_require__(500)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_TaskModel__["a" /* TaskModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_TaskModel__["a" /* TaskModel */]) === "function" && _b || Object])
], TaskCreateModalComponent);

var _a, _b;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/TaskCreateModalComponent.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taskList_services_TasklistModel__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TaskModel__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_tasks_task_modal_TaskCreateModalComponent__ = __webpack_require__(207);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskOverviewComponent = (function () {
    function TaskOverviewComponent(route, modalService, taskModel, tasklistModel) {
        this.route = route;
        this.modalService = modalService;
        this.taskModel = taskModel;
        this.tasklistModel = tasklistModel;
    }
    TaskOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.tasklistModel.setCurrentTasklistId(param['listId']);
            _this.taskModel.loadTasks();
        });
    };
    TaskOverviewComponent.prototype.getLoadedTasks = function () {
        return this.taskModel.getLoadedTasks();
    };
    TaskOverviewComponent.prototype.create = function () {
        this.modalService.open(__WEBPACK_IMPORTED_MODULE_5_app_tasks_task_modal_TaskCreateModalComponent__["a" /* TaskCreateModalComponent */]);
    };
    TaskOverviewComponent.prototype.isCompleted = function (task) {
        return { 'completed': task.completed };
    };
    return TaskOverviewComponent;
}());
TaskOverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'task-overview',
        template: __webpack_require__(501),
        styles: [__webpack_require__(483)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_TaskModel__["a" /* TaskModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_TaskModel__["a" /* TaskModel */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__taskList_services_TasklistModel__["a" /* TaskListModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__taskList_services_TasklistModel__["a" /* TaskListModel */]) === "function" && _d || Object])
], TaskOverviewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/TaskOverviewComponent.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_GoogleTasksApi__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure_http_HttpService__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_user_UserService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskResource; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskResource = (function () {
    function TaskResource(httpService, userService) {
        this.httpService = httpService;
        this.userService = userService;
        this.ENDPOINT_URL = __WEBPACK_IMPORTED_MODULE_1__config_GoogleTasksApi__["a" /* GoogleTasksApi */].URL + '/lists';
        this.authHeader = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]();
        this.authHeader.append('Authorization', 'Bearer ' + userService.getToken());
    }
    TaskResource.prototype.findAll = function (tasklistId) {
        var url = this.ENDPOINT_URL + "/" + tasklistId + "/tasks";
        return this.httpService.get(url, { headers: this.authHeader });
    };
    TaskResource.prototype.findById = function (tasklistId, id) {
        var url = this.ENDPOINT_URL + "/" + tasklistId + "/tasks";
        return this.httpService.get(url + "/" + id, { headers: this.authHeader });
    };
    TaskResource.prototype.create = function (tasklistId, task) {
        var url = this.ENDPOINT_URL + "/" + tasklistId + "/tasks";
        return this.httpService.post(url, task, { headers: this.authHeader });
    };
    TaskResource.prototype.update = function (tasklistId, task) {
        var url = this.ENDPOINT_URL + "/" + tasklistId + "/tasks";
        return this.httpService.put(url + "/" + task.id, task, { headers: this.authHeader });
    };
    TaskResource.prototype.delete = function (tasklistId, id) {
        var url = this.ENDPOINT_URL + "/" + tasklistId + "/tasks";
        return this.httpService.get(url + "/" + id, { headers: this.authHeader });
    };
    return TaskResource;
}());
TaskResource = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__infrastructure_http_HttpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infrastructure_http_HttpService__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_user_UserService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_user_UserService__["a" /* UserService */]) === "function" && _b || Object])
], TaskResource);

var _a, _b;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/TaskResource.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure_form_FormService__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TasklistModel__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasklistCreateModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TasklistCreateModalComponent = (function () {
    function TasklistCreateModalComponent(activeModal, model) {
        this.activeModal = activeModal;
        this.model = model;
        this.newTasklist = {};
    }
    TasklistCreateModalComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            __WEBPACK_IMPORTED_MODULE_2__infrastructure_form_FormService__["a" /* FormService */].markFormControlsTouched(form);
            return;
        }
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.model.createTasklist(this.newTasklist))
            .subscribe(function () { return _this.onClose(); });
    };
    TasklistCreateModalComponent.prototype.onClose = function () {
        this.activeModal.close();
    };
    TasklistCreateModalComponent.prototype.hasError = function (formControl, errorType) {
        if (errorType === void 0) { errorType = "required"; }
        return __WEBPACK_IMPORTED_MODULE_2__infrastructure_form_FormService__["a" /* FormService */].hasError(formControl, errorType);
    };
    return TasklistCreateModalComponent;
}());
TasklistCreateModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tasklist-create-modal',
        template: __webpack_require__(503)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_TasklistModel__["a" /* TaskListModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_TasklistModel__["a" /* TaskListModel */]) === "function" && _b || Object])
], TasklistCreateModalComponent);

var _a, _b;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/TasklistCreateModalComponent.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure_form_FormService__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TasklistModel__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasklistEditModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TasklistEditModalComponent = (function () {
    function TasklistEditModalComponent(activeModal, model) {
        var _this = this;
        this.activeModal = activeModal;
        this.model = model;
        this.tasklist = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.model.getLoadedTasklists(), function (tasklist) {
            return tasklist.id == _this.model.getCurrentTasklistId();
        });
    }
    TasklistEditModalComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            __WEBPACK_IMPORTED_MODULE_2__infrastructure_form_FormService__["a" /* FormService */].markFormControlsTouched(form);
            return;
        }
        __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(this.model.updateTasklist(this.tasklist))
            .subscribe(function () { return _this.onClose(); });
    };
    TasklistEditModalComponent.prototype.onClose = function () {
        this.activeModal.close();
    };
    TasklistEditModalComponent.prototype.hasError = function (formControl, errorType) {
        if (errorType === void 0) { errorType = "required"; }
        return __WEBPACK_IMPORTED_MODULE_2__infrastructure_form_FormService__["a" /* FormService */].hasError(formControl, errorType);
    };
    return TasklistEditModalComponent;
}());
TasklistEditModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tasklist-edit-modal',
        template: __webpack_require__(504)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_TasklistModel__["a" /* TaskListModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_TasklistModel__["a" /* TaskListModel */]) === "function" && _b || Object])
], TasklistEditModalComponent);

var _a, _b;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/TasklistEditModalComponent.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_GoogleTasksApi__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure_http_HttpService__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_user_UserService__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListResource; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskListResource = (function () {
    function TaskListResource(httpService, userService) {
        this.httpService = httpService;
        this.userService = userService;
        this.ENDPOINT_URL = __WEBPACK_IMPORTED_MODULE_2__config_GoogleTasksApi__["a" /* GoogleTasksApi */].URL + '/users/@me/lists';
        this.authHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.authHeader.append('Authorization', 'Bearer ' + userService.getToken());
    }
    TaskListResource.prototype.findAll = function () {
        return this.httpService.get(this.ENDPOINT_URL, { headers: this.authHeader });
    };
    TaskListResource.prototype.findById = function (id) {
        return this.httpService.get(this.ENDPOINT_URL + "/" + id, { headers: this.authHeader });
    };
    TaskListResource.prototype.create = function (tasklist) {
        return this.httpService.post(this.ENDPOINT_URL, tasklist, { headers: this.authHeader });
    };
    TaskListResource.prototype.update = function (tasklist) {
        return this.httpService.put(this.ENDPOINT_URL + "/" + tasklist.id, tasklist, { headers: this.authHeader });
    };
    TaskListResource.prototype.delete = function (id) {
        return this.httpService.delete(this.ENDPOINT_URL + "/" + id, { headers: this.authHeader });
    };
    return TaskListResource;
}());
TaskListResource = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__infrastructure_http_HttpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__infrastructure_http_HttpService__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_user_UserService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_user_UserService__["a" /* UserService */]) === "function" && _b || Object])
], TaskListResource);

var _a, _b;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/TasklistResource.js.map

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 298;


/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(317);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */], [
    { defaultEncapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* ViewEncapsulation */].None }
]);
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/main.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppComponent__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppRoutes__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_AppCommonModule__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_LoginComponent__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__infrastructure_http_HttpService__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tasks_TasksModule__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__infrastructure_http_HttpErrorHandler__ = __webpack_require__(204);
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__AppRoutes__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__common_AppCommonModule__["a" /* AppCommonModule */],
            __WEBPACK_IMPORTED_MODULE_13__tasks_TasksModule__["a" /* TasksModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__AppComponent__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_LoginComponent__["a" /* LoginComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__infrastructure_http_HttpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_14__infrastructure_http_HttpErrorHandler__["a" /* HttpErrorHandler */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1__AppComponent__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/AppModules.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
var AppRoutes = [];
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/AppRoutes.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppCommonRoutes__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errorPages_ErrorPageComponent__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar_SidebarComponent__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbar_ToolbarComponent__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_UserService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__google_GoogleAuthService__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tasks_TasksModule__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__security_SecurityService__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__security_AuthGuard__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modal_DeleteConfirmationModal__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCommonModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppCommonModule = (function () {
    function AppCommonModule() {
    }
    return AppCommonModule;
}());
AppCommonModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__AppCommonRoutes__["a" /* AppCommonRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_10__tasks_TasksModule__["a" /* TasksModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__sidebar_SidebarComponent__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__toolbar_ToolbarComponent__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_3__errorPages_ErrorPageComponent__["a" /* ErrorPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__modal_DeleteConfirmationModal__["a" /* DeleteConfirmationModal */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__sidebar_SidebarComponent__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__toolbar_ToolbarComponent__["a" /* ToolbarComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__google_GoogleAuthService__["a" /* GoogleAuthService */],
            __WEBPACK_IMPORTED_MODULE_11__security_SecurityService__["a" /* SecurityService */],
            __WEBPACK_IMPORTED_MODULE_12__security_AuthGuard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_7__user_UserService__["a" /* UserService */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__modal_DeleteConfirmationModal__["a" /* DeleteConfirmationModal */]
        ]
    })
], AppCommonModule);

//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/AppCommonModule.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errorPages_ErrorPageComponent__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCommonRoutes; });

var AppCommonRoutes = [
    { path: 'error/:code', component: __WEBPACK_IMPORTED_MODULE_0__errorPages_ErrorPageComponent__["a" /* ErrorPageComponent */] }
];
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/AppCommonRoutes.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'sidebar',
        template: __webpack_require__(496),
        styles: [__webpack_require__(482)]
    })
], SidebarComponent);

//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/SidebarComponent.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_UserService__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = (function () {
    function ToolbarComponent(userService) {
        this.userService = userService;
    }
    ;
    ToolbarComponent.prototype.logout = function () {
        this.userService.signOut();
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'toolbar',
        template: __webpack_require__(497)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_UserService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_UserService__["a" /* UserService */]) === "function" && _a || Object])
], ToolbarComponent);

var _a;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/ToolbarComponent.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleApiConfig; });
var GoogleApiConfig = (function () {
    function GoogleApiConfig() {
    }
    GoogleApiConfig.getConfig = function () {
        return {
            client_id: GoogleApiConfig.CLIENT_ID,
            discoveryDocs: GoogleApiConfig.DISCOVERY_DOCS,
            scope: GoogleApiConfig.SCOPE
        };
    };
    return GoogleApiConfig;
}());

GoogleApiConfig.CLIENT_ID = "372063809670-qoggl887ba9vpt7aclf411hhk9f7icil.apps.googleusercontent.com";
GoogleApiConfig.DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest"
];
GoogleApiConfig.SCOPE = [
    'https://www.googleapis.com/auth/tasks',
    'https://www.googleapis.com/auth/tasks.readonly'
].join(" ");
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/GoogleApiConfig.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppComponent__ = __webpack_require__(197);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppModules__ = __webpack_require__(310);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__AppModules__["a"]; });


//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/index.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_user_UserService__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(userService) {
        this.userService = userService;
    }
    LoginComponent.prototype.signIn = function () {
        this.userService.signIn();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'login-form',
        template: __webpack_require__(498)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_user_UserService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_user_UserService__["a" /* UserService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/LoginComponent.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_overview_TaskOverviewComponent__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_detail_TaskDetailComponent__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_security_AuthGuard__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksRoutes; });



var TasksRoutes = [
    {
        path: 'taskList/:listId',
        component: __WEBPACK_IMPORTED_MODULE_0__task_overview_TaskOverviewComponent__["a" /* TaskOverviewComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__common_security_AuthGuard__["a" /* AuthGuard */]]
    },
    {
        path: 'taskList/:listId/task/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__task_detail_TaskDetailComponent__["a" /* TaskDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__common_security_AuthGuard__["a" /* AuthGuard */]]
    },
];
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/TasksRouting.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_TasklistModel__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskListComponent = (function () {
    function TaskListComponent(model) {
        this.model = model;
        this.model.loadTasklist();
    }
    TaskListComponent.prototype.getTasklists = function () {
        return this.model.getLoadedTasklists();
    };
    return TaskListComponent;
}());
TaskListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tasklist',
        template: __webpack_require__(505)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_TasklistModel__["a" /* TaskListModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_TasklistModel__["a" /* TaskListModel */]) === "function" && _a || Object])
], TaskListComponent);

var _a;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/TaskListComponent.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_TasklistModel__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_TasklistCreateModalComponent__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_modal_DeleteConfirmationModal__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_TasklistEditModalComponent__ = __webpack_require__(211);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasklistActionButtons; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TasklistActionButtons = (function () {
    function TasklistActionButtons(model, modalService) {
        this.model = model;
        this.modalService = modalService;
    }
    TasklistActionButtons.prototype.isTasklistSelected = function () {
        return !__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.model.getCurrentTasklistId());
    };
    TasklistActionButtons.prototype.create = function () {
        this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__modal_TasklistCreateModalComponent__["a" /* TasklistCreateModalComponent */]);
    };
    TasklistActionButtons.prototype.update = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_6__modal_TasklistEditModalComponent__["a" /* TasklistEditModalComponent */]);
    };
    TasklistActionButtons.prototype.deleteTasklist = function () {
        var _this = this;
        this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__common_modal_DeleteConfirmationModal__["a" /* DeleteConfirmationModal */]).result.then(function (res) {
            if (res.confirmed) {
                _this.model.deleteCurrentTasklist();
            }
        });
    };
    return TasklistActionButtons;
}());
TasklistActionButtons = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tasklist-action-buttons',
        template: __webpack_require__(502),
        styles: [__webpack_require__(484)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_TasklistModel__["a" /* TaskListModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_TasklistModel__["a" /* TaskListModel */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object])
], TasklistActionButtons);

var _a, _b;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/TasklistActionButtons.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/environment.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/polyfills.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_GoogleAuthService__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = UserService_1 = (function () {
    function UserService(googleAuthService) {
        this.googleAuthService = googleAuthService;
        this.user = undefined;
    }
    UserService.prototype.setUser = function (user) {
        this.user = user;
    };
    UserService.prototype.getCurrentUser = function () {
        return this.user;
    };
    UserService.prototype.getToken = function () {
        var token = sessionStorage.getItem(UserService_1.SESSION_STORAGE_KEY);
        if (!token) {
            throw new Error("no token set , authentication required");
        }
        return sessionStorage.getItem(UserService_1.SESSION_STORAGE_KEY);
    };
    UserService.prototype.signIn = function () {
        var _this = this;
        this.googleAuthService.getAuth().subscribe(function (auth) {
            auth.signIn().then(function (res) { return _this.signInSuccessHandler(res); }, function (err) { return _this.signInErrorHandler(err); });
        });
    };
    //TODO: Rework
    UserService.prototype.signOut = function () {
        this.googleAuthService.getAuth().subscribe(function (auth) {
            try {
                auth.signOut();
            }
            catch (e) {
                console.error(e);
            }
            sessionStorage.removeItem(UserService_1.SESSION_STORAGE_KEY);
        });
    };
    UserService.prototype.isUserSignedIn = function () {
        return !__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](sessionStorage.getItem(UserService_1.SESSION_STORAGE_KEY));
    };
    UserService.prototype.signInSuccessHandler = function (res) {
        this.user = res;
        sessionStorage.setItem(UserService_1.SESSION_STORAGE_KEY, res.getAuthResponse().access_token);
    };
    UserService.prototype.signInErrorHandler = function (err) {
        console.warn(err);
    };
    return UserService;
}());
UserService.SESSION_STORAGE_KEY = "accessToken";
UserService = UserService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__google_GoogleAuthService__["a" /* GoogleAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__google_GoogleAuthService__["a" /* GoogleAuthService */]) === "function" && _a || Object])
], UserService);

var UserService_1, _a;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/UserService.js.map

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, ".form-control.ng-invalid.ng-touched {\n  border-color: #FF4444;\n}\n.form-group .has-error {\n  color: #FF4444;\n}\n.form-group.required label:after {\n  content: \"*\";\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "sidebar ul.nav {\n  display: block !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "task-overview .completed {\n  text-decoration: line-through;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "tasklist-action-buttons .button-create {\n  background-color: #2ca536 !important;\n  color: white !important;\n}\ntasklist-action-buttons .button-create:hover {\n  background-color: rgba(44, 165, 54, 0.75) !important;\n}\ntasklist-action-buttons .button-update {\n  background-color: #2c6fab !important;\n  color: white !important;\n}\ntasklist-action-buttons .button-update:hover {\n  background-color: rgba(44, 111, 171, 0.75) !important;\n}\ntasklist-action-buttons .button-delete {\n  background-color: #d06c3b !important;\n  color: white !important;\n}\ntasklist-action-buttons .button-delete:hover {\n  background-color: rgba(208, 108, 59, 0.75) !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TasklistResource__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListModel; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskListModel = (function () {
    function TaskListModel(resource, router) {
        this.resource = resource;
        this.router = router;
        this.tasklists = [];
    }
    TaskListModel.prototype.loadTasklist = function () {
        var _this = this;
        this.getAllTasklists().subscribe(function (tasklists) { return _this.tasklists = tasklists; });
    };
    TaskListModel.prototype.getLoadedTasklists = function () {
        return this.tasklists;
    };
    TaskListModel.prototype.setCurrentTasklistId = function (tasklistId) {
        this.currentTasklistId = tasklistId;
    };
    TaskListModel.prototype.getCurrentTasklistId = function () {
        return this.currentTasklistId;
    };
    TaskListModel.prototype.getAllTasklists = function () {
        return this.resource.findAll().map(function (res) { return res.items; });
    };
    TaskListModel.prototype.getTasklist = function (id) {
        return this.resource.findById(id);
    };
    TaskListModel.prototype.createTasklist = function (tasklist) {
        var _this = this;
        return this.resource.create(tasklist)
            .subscribe(function () { return _this.tasklists.push(tasklist); });
    };
    TaskListModel.prototype.updateTasklist = function (tasklist) {
        var _this = this;
        var observable = this.resource.update(tasklist);
        return observable.subscribe(function (tasklist) {
            _this.tasklists = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](_this.tasklists, function (tl) {
                if (tl.id == tasklist.id) {
                    return tasklist;
                }
                return tl;
            });
        });
    };
    TaskListModel.prototype.deleteCurrentTasklist = function () {
        var _this = this;
        this.resource.delete(this.currentTasklistId).subscribe(function () {
            __WEBPACK_IMPORTED_MODULE_3_lodash__["remove"](_this.tasklists, function (tasklist) { return tasklist.id == _this.currentTasklistId; });
            _this.currentTasklistId = undefined;
            _this.router.navigateByUrl("");
        });
    };
    return TaskListModel;
}());
TaskListModel = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__TasklistResource__["a" /* TaskListResource */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__TasklistResource__["a" /* TaskListResource */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TaskListModel);

var _a, _b;
//# sourceMappingURL=/home/codeforges/work/angular-google-tasks-test-waes/src/TasklistModel.js.map

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n  <div class=\"app\" id=\"app\" *ngIf=\"isSignedIn(); else login\">\n    <toolbar></toolbar>\n    <sidebar></sidebar>\n\n    <div class=\"sidebar-overlay\" id=\"sidebar-overlay\"></div>\n\n    <article class=\"content dashboard-page\">\n      <router-outlet></router-outlet>\n    </article>\n    <footer class=\"footer\"></footer>\n  </div>\n\n  <ng-template #login>\n    <login-form></login-form>\n  </ng-template>\n</div>"

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n    <div class=\"error-card\">\n        <div class=\"error-title-block\">\n            <h1 class=\"error-title\">{{errorCode}}</h1>\n            <h2 class=\"error-sub-title\">{{errorMessage}}</h2>\n        </div>\n        <div class=\"error-container visible\">\n            <p>Why not try refreshing your page? or you can contact support</p>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

module.exports = "<form>\n    <div class=\"modal-header alert-danger\">\n        <h4 class=\"modal-title\">\n            <i class=\"fa fa-warning\"></i>\n            {{\"MODAL.DELETE.HEADER\" | translate}}\n        </h4>\n        <button type=\"button\"\n                class=\"close\"\n                aria-label=\"Close\"\n                (click)=\"onClose()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <p translate>\n            MODAL.DELETE.TITLE\n        </p>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onConfirmation()\" translate>FORM.BUTTON.CONFIRM</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onClose()\" translate>FORM.BUTTON.CANCEL</button>\n    </div>\n</form>\n"

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

module.exports = "<aside class=\"sidebar\">\n    <div class=\"sidebar-container\">\n        <div class=\"sidebar-header\">\n            <div class=\"brand\">\n                {{ \"BRAND.NAME\" | translate }}\n            </div>\n        </div>\n        <nav class=\"menu\">\n            <tasklist></tasklist>\n        </nav>\n    </div>\n    <footer class=\"sidebar-footer\">\n        <tasklist-action-buttons></tasklist-action-buttons>\n    </footer>\n</aside>"

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

module.exports = "\n<header class=\"header\">\n    <div class=\"header-block header-block-collapse hidden-lg-up\">\n        <button class=\"collapse-btn\" id=\"sidebar-collapse-btn\">\n            <i class=\"fa fa-bars\"></i>\n        </button>\n    </div>\n    <div class=\"header-block header-block-nav\">\n        <ul class=\"navbar-nav\">\n            <li>\n                <a href=\"/\" (click)=\"logout()\" translate>\n                    BUTTON.LOGOUT\n                </a>\n            </li>\n        </ul>\n    </div>\n</header>"

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

module.exports = "<div class=\"auth\">\n    <div class=\"auth-container\">\n        <div class=\"card\">\n            <header class=\"auth-header\">\n                <h1 class=\"auth-title\" translate>\n                    BRAND.NAME\n                </h1>\n            </header>\n            <div class=\"auth-content\">\n                <p class=\"text-xs-center\" translate>\n                    LOGIN.FORM.TITLE\n                </p>\n                <form id=\"login-form\">\n                    <div class=\"form-group\">\n                        <button type=\"button\"\n                                (click)=\"signIn()\"\n                                class=\"btn btn-block btn-primary\"\n                                translate>\n                            FORM.BUTTON.PROCEED\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 499:
/***/ (function(module, exports) {

module.exports = "<h2>detail</h2>"

/***/ }),

/***/ 500:
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" translate>\n            TASKLIST.FORM.CREATE\n        </h4>\n        <button type=\"button\"\n                class=\"close\"\n                aria-label=\"Close\"\n                (click)=\"onClose()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <div class=\"card card-block sameheight-item\">\n            <div class=\"form-group required\">\n                <label class=\"control-label\" translate>TASKS.FORM.TASK_TITLE</label>\n                <input type=\"text\"\n                       name=\"taskTitle\"\n                       [(ngModel)]=\"task.title\"\n                       class=\"form-control boxed\"\n                       required>\n                <span *ngIf=\"hasError(form.controls['taskTitle'])\"\n                      class=\"has-error\"\n                      translate>\n                    FORM.VALIDATION.FIELD.REQUIRED\n                </span>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary\" translate>FORM.BUTTON.SUBMIT</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onClose()\" translate>FORM.BUTTON.CANCEL</button>\n    </div>\n</form>"

/***/ }),

/***/ 501:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-block\">\n        <div class=\"card-title-block\">\n            <h3 class=\"title pull-left\" translate>TASKS.OVERVIEW.TITLE</h3>\n            <a href=\"\" class=\"btn btn-primary btn-sm rounded-s pull-right\"\n               (click)=\"create(); $event.preventDefault()\"\n               translate>\n                TASKS.OVERVIEW.TABLE.CREATE\n            </a>\n        </div>\n        <section class=\"section\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered table-hover\">\n                    <thead>\n                    <tr>\n                        <th translate>TASKS.OVERVIEW.TABLE.TITLE</th>\n                        <th translate>TASKS.OVERVIEW.TABLE.NOTES</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let task of getLoadedTasks()\" [ngClass]=\"isCompleted(task)\">\n                        <td>{{task.title}}</td>\n                        <td>{{task.notes}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 502:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav metismenu\" id=\"customize-menu\">\n    <li>\n        <a href=\"\" class=\"button-create\" (click)=\"create(); $event.preventDefault()\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n            {{ \"TASKLIST.FORM.CREATE\" | translate }}\n        </a>\n    </li>\n    <ng-container *ngIf=\"isTasklistSelected()\">\n        <li>\n            <a href=\"\" class=\"button-update\" (click)=\"update(); $event.preventDefault()\">\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                {{ \"TASKLIST.FORM.UPDATE\" | translate }}\n            </a>\n        </li>\n        <li>\n            <a href=\"\" class=\"button-delete\" (click)=\"deleteTasklist(); $event.preventDefault()\">\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                {{ \"TASKLIST.FORM.DELETE\" | translate }}\n            </a>\n        </li>\n    </ng-container>\n</ul>"

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" translate>\n            TASKLIST.FORM.CREATE\n        </h4>\n        <button type=\"button\"\n                class=\"close\"\n                aria-label=\"Close\"\n                (click)=\"onClose()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <div class=\"card card-block sameheight-item\">\n            <div class=\"form-group required\">\n                <label class=\"control-label\" translate>TASKLIST.FORM.TASKLIST_TITLE</label>\n                <input type=\"text\"\n                       name=\"tasklistTitle\"\n                       [(ngModel)]=\"newTasklist.title\"\n                       class=\"form-control boxed\"\n                       required>\n                <span *ngIf=\"hasError(form.controls['tasklistTitle'])\"\n                      class=\"has-error\"\n                      translate>\n                    FORM.VALIDATION.FIELD.REQUIRED\n                </span>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary\" translate>FORM.BUTTON.SUBMIT</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onClose()\" translate>FORM.BUTTON.CANCEL</button>\n    </div>\n</form>"

/***/ }),

/***/ 504:
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" translate>\n            TASKLIST.FORM.CREATE\n        </h4>\n        <button type=\"button\"\n                class=\"close\"\n                aria-label=\"Close\"\n                (click)=\"onClose()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <div class=\"card card-block sameheight-item\">\n            <div class=\"form-group required\">\n                <label class=\"control-label\" translate>TASKLIST.FORM.TASKLIST_TITLE</label>\n                <input type=\"text\"\n                       name=\"tasklistTitle\"\n                       [(ngModel)]=\"tasklist.title\"\n                       class=\"form-control boxed\"\n                       required>\n                <span *ngIf=\"hasError(form.controls['tasklistTitle'])\"\n                      class=\"has-error\"\n                      translate>\n                    FORM.VALIDATION.FIELD.REQUIRED\n                </span>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary\" translate>FORM.BUTTON.SUBMIT</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onClose()\" translate>FORM.BUTTON.CANCEL</button>\n    </div>\n</form>"

/***/ }),

/***/ 505:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav metismenu\" id=\"sidebar-menu\">\n    <li *ngFor=\"let list of getTasklists()\" routerLinkActive=\"active\">\n        <a [routerLink]=\"['taskList/', list.id]\">{{list.title}}</a>\n    </li>\n</ul>"

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(299);


/***/ })

},[765]);
//# sourceMappingURL=main.bundle.js.map