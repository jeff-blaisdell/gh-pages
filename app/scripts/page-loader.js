(function () {
    'use strict';

    var module = angular.module('jeff-blaisdell.components.page-loader', [
        'jeff-blaisdell.templates'
    ]);

    module.directive('pageLoader', function ($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'jeff-blaisdell/templates/page-loader.html',
            scope: {},
            link: function () {

            }
        };
    });

})();