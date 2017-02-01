(function () {
    'use strict';
    var app = angular.module('tempo');

    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/intro");

        $stateProvider
        .state("intro", {
            url: "/intro",
            templateUrl: "templates/intro.html"
        })
        .state("eq1", {
        url: "/eq1",
        templateUrl: "templates/eq1.html"
        });

    }]);
})();
