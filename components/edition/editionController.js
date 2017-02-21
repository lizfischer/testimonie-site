/**
 * Created by Liz on 2/20/2017.
 */
'use strict';

testimonieApp.controller('EditionController', ['$scope', '$routeParams', 'Page',
    function ($scope, $routeParams, Page) {
        $scope.main.title = 'Edition';
        $scope.main.sideNav = [
            {label:"Read", link:"edition/read/40"},
            {label:"View <coming soon>", link:"edition/object"}
        ];

        $scope.read = {};
        $scope.read.left = "https://stacks.stanford.edu/image/iiif/rs424xq9888%2Frs424xq9888_0040/full/pct:25/0/default.jpg";
        $scope.read.right = "https://stacks.stanford.edu/image/iiif/rs424xq9888%2Frs424xq9888_0041/full/pct:25/0/default.jpg";

        $scope.read.viewTranscript;
        $scope.read.viewModern;
        $scope.$watch('read.viewTranscript', function(newValue, oldValue){
            // Turn off Modernization switch
            if (newValue && $scope.read.viewModern){
                $scope.read.viewModern = false;
            }

            //var jsonLeft = $http.get('annotations/list/transcript-40.json');
            //var jsonRight = $http.get('annotations/list/transcript-41.json')

        });
        $scope.$watch('read.viewModern', function(newValue, oldValue){
            // Turn off Transcription switch
            if (newValue && $scope.read.viewTranscript){
                $scope.read.viewTranscript = false;
            }
        });

        Page.get({pg: $routeParams.pg}, {}, function(annotations){
            var leftText = [];
            for (var i = 0; i < annotations.length; i++) {
                var coords = getCoords(annotations[i]["on"]);
                var text = annotations[i]["resource"]["chars"];
                var lang = annotations[i]["resource"]["language"];
                leftText.push({text:text, coords:coords, lang:lang});
            }
            $scope.read.leftText = leftText;
        });

        function getCoords(purl){
            var coords = {};
            var split = purl.split('#');
            split = split[1].split(',');
            var img = document.getElementById('pageLeft');
            var imgWidth = img.clientWidth/1981;
            coords.x = (parseInt(split[0])*imgWidth);
            coords.y = parseInt(split[1])*imgWidth;
            coords.w = parseInt(split[2])*imgWidth;
            coords.h = parseInt(split[3])*imgWidth;
            return coords;
        }

    }]);

