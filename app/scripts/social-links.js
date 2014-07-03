(function () {
    'use strict';

    var module = angular.module('jeff-blaisdell.components.social-links', [
        'jeff-blaisdell.templates'
    ]);

    module.directive('socialLinks', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'jeff-blaisdell/templates/social-links.html',
            scope: {},
            link: function () {
            }
        };
    });

})();
