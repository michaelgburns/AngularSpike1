var AngularSpike1 = angular.module('AngularSpike1', ['ngRoute']);

AngularSpike1.controller('LandingPageController', LandingPageController);
AngularSpike1.controller('LoginController', LoginController);
AngularSpike1.controller('RegisterController', RegisterController);


AngularSpike1.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularSpike1.factory('LoginFactory', LoginFactory);
AngularSpike1.factory('RegistrationFactory', RegistrationFactory);


var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');

};

configFunction.$inject = ['$routeProvider', '$httpProvider'];

AngularSpike1.config(configFunction);