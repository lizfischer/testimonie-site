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
                    {label:"The English Reformation", link:"front/reformation"},
                    {label:"Matthew Parker", link:"front/parker"},
                    {label: "<i>A Testimonie</i> Contents", link: "front/contents"},
                    {label:"Typeface and Printing", link: "front/printing"},
                    {label:"Subsequent Publications", link:"front/reprintings"},
                    {label: "Manuscript Binding", link: "front/binding"},
                    {label: "Reader/Owner Interventions", link: "front/interventions"}
                ]
            },
            {label:"Editorial Policy", link:"front/editorial-policy"},
            {label: "Notes on Digital Editing", link: "front/digital-editing"},
            {label:"Bibliography", link:"front/bibliography"}
        ];

    }]);

