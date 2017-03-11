/**
 * Created by efisch17 on 2/16/17.
 */
'use strict';

testimonieApp.controller('FrontController', ['$scope',
    function ($scope) {
        $scope.main.title = 'Front Matter';
        $scope.main.sideNav = [
            {
                label:"Introduction",
                pages: [
                    {label:"The Book", link:"front/intro"},
                    {label:"People and Places", link:"front/intro"},
                    {label:"Reprintings", link:"front/intro"}
                ]
            },
            {label:"Editorial Policy", link:"front/editorial-policy"},
            {label:"Bibliography", link:"front/bibliography"},
            {label:"Citing this Edition", link:"front/cite"}
        ];

    }]);

