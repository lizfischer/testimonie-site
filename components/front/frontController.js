/**
 * Created by efisch17 on 2/16/17.
 */
'use strict';

testimonieApp.controller('FrontController', ['$scope',
    function ($scope) {
        $scope.main.title = 'Front Matter';
        $scope.main.sideNav = [
            {
                label:"Introduction"
            },
            {
                label:"Editorial Policy"
            },
            {
                label:"Citation"
            }
        ];
    }]);

