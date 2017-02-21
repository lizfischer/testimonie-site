/**
 * Created by Liz on 2/20/2017.
 */
'use strict';

testimonieApp.controller('EditionController', ['$scope',
    function ($scope) {
        $scope.main.title = 'Edition';
        $scope.main.sideNav = [
            {
                label:"Text",
                link:"edition/read"
            },
            {
                label:"Object",
                link:"edition/object"
            },
            {
                label:"People",
                link:"edition/people"
            }
        ];
    }]);

