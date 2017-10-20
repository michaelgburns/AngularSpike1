var AngularSpike1 = angular.module('AngularSpike1', ['ngRoute']);

AngularSpike1.controller('LandingPageController', LandingPageController);

var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        });
}

configFunction.$inject = ['$routeProvider'];

AngularSpike1.config(configFunction);