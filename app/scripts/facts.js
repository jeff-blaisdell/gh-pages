(function () {
    'use strict';

    var module = angular.module('jeff-blaisdell.components.facts', [
        'jeff-blaisdell.templates'
    ]);

    module.directive('facts', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'jeff-blaisdell/templates/facts.html',
            scope: {},
            link: function () {
            }
        };
    });

})();
