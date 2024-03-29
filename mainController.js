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
        when('/front/intro', {
            templateUrl: 'components/front/intro.html',
            controller: 'FrontController'
        }).
        when('/front/reformation', {
            templateUrl: 'components/front/reformation.html',
            controller: 'FrontController'
        }).
        when('/front/parker', {
            templateUrl: 'components/front/parker.html',
            controller: 'FrontController'
        }).
        when('/front/contents', {
            templateUrl: 'components/front/contents.html',
            controller: 'FrontController'
        }).
        when('/front/printing', {
            templateUrl: 'components/front/printing.html',
            controller: 'FrontController'
        }).
        when('/front/reprintings', {
            templateUrl: 'components/front/reprintings.html',
            controller: 'FrontController'
        }).
        when('/front/binding', {
            templateUrl: 'components/front/binding.html',
            controller: 'FrontController'
        }).
        when('/front/interventions', {
            templateUrl: 'components/front/interventions.html',
            controller: 'FrontController'
        }).
        when('/front/editorial-policy', {
            templateUrl: 'components/front/editTemplate.html',
            controller: 'FrontController'
        }).
        when('/front/digital-editing', {
            templateUrl: 'components/front/digital-editing.html',
            controller: 'FrontController'
        }).
        when('/front/bibliography', {
            templateUrl: 'components/front/bibliographyTemplate.html',
            controller: 'FrontController'
        }).
        when('/front/cite', {
            templateUrl: 'components/front/citeTemplate.html',
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
        when('/edition/view', {
            templateUrl: 'components/edition/viewTemplate.html',
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
        get: {method:'GET', params:{}, isArray:false}
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
        };
        $scope.main.sidenavClick=function(item){
            if (!item.pages) $scope.main.goto(item.link);
            else item.expanded = !item.expanded;
        }
        
    }]);
