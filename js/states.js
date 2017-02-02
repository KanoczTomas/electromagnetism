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
            templateUrl: "templates/eq1.html",
            controller: [ '$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
                $scope.goToAnchor = function (name){
                    $location.hash(name);
                    $anchorScroll.yOffset = 70; //as angularstrap's scrollspy data-offset is only for spying, I have to manage the actual jump to be offseted by 70px, as the navigation bar is affixed and height 60.
                    $anchorScroll();
                }
                
            }]
        });

    }]);
})();
