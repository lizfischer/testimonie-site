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
        otherwise({
            redirectTo: '/home'
        });

    }
]);


/***************************************
 * Factories to handle server requests *
 ***************************************/

testimonieApp.factory('About', ['$resource', function ($resource) {
    return $resource('/about');
}]);

/*******************
 * Main controller *
 *******************/

testimonieApp.controller('MainController', ['$scope', '$rootScope', '$location', '$cookies',
    function ($scope, $rootScope, $location,$mdDialog, $cookies) {
        $scope.main = {};
        $scope.main.title = 'A Testimonie of Antiquitie';
        $scope.main.currentNavItem = 'page1';

        $scope.main.goto=function (page) {
            $location.path("/"+page)
        }
    }]);