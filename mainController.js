/**
 * Created by efisch17 on 2/16/17.
 */
'use strict';

var testimonieApp = angular.module('testimonieApp', ['ngRoute', 'ngMaterial', 'ngResource', 'ngCookies']);

/* Enable linking to specific photo on page, like: #/photos/user_id?scrollTo=photo_id
 * thanks to http://stackoverflow.com/questions/14712223/how-to-handle-anchor-hash-linking-in-angularjs*/
testimonieApp.run(function($rootScope, $location, $anchorScroll, $timeout) {
    //when the route is changed scroll to the proper element.
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        $timeout(function(){
            if($location.hash()){
                $anchorScroll();
            }
        }, 500);
    });
});


testimonieApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.
        when('/about', {
            templateUrl: 'components/about/aboutTemplate.html',
            controller: 'AboutController'
        }).
        when('/front', {
            templateUrl: 'components/front/frontTemplate.html',
            controller: 'FrontController'
        }).
        when('/edition/intro', {
            templateUrl: 'components/edition/introTemplate.html',
            controller: 'EditionController'
        }).
        when('/edition/read/:pg', {
            templateUrl: 'components/edition/readTemplate.html',
            controller: 'EditionController'
        }).
        when('/home', {
            templateUrl: 'components/home/home.html',
            controller: 'HomeController'
        }).
        otherwise({
            redirectTo: '/home',
        });

    }
]);


/***************************************
 * Factories to handle server requests *
 ***************************************/

testimonieApp.factory('About', ['$resource', function ($resource) {
    return $resource('/about');
}]);

testimonieApp.factory('Edition', ['$resource', function ($resource) {
    return $resource('/edition');
}]);

testimonieApp.factory('Page', ['$resource', function ($resource) {
    return $resource('/edition/read/:pg', {pg:'@pg'}, {
        get: {method:'GET', params:{}, isArray:true}
    });
}]);

/*******************
 * Main controller *
 *******************/

testimonieApp.controller('MainController', ['$scope', '$rootScope', '$location', '$cookies',
    function ($scope, $rootScope, $location,$mdDialog, $cookies) {
        $scope.main = {};
        $scope.main.title = 'A Testimonie of Antiquitie';
        $scope.main.currentNavItem = 'page1';
        $scope.main.sideNav = null;

        $scope.main.goto=function (page) {
            $location.path("/"+page)
        }
    }]);