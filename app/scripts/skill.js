(function () {
    'use strict';

    var module = angular.module('jeff-blaisdell.components.skill', [
        'jeff-blaisdell.templates'
    ]);

    module.directive('skill', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'jeff-blaisdell/templates/skill.html',
            scope: {
                name: '@',
                percentage: '@'
            },
            link: function (scope, elem) {

                var percentage = parseInt(scope.percentage) / 100;
                var width = elem.find('.meter').prop('offsetWidth');
                var calculatedWidth = Math.ceil(width * percentage);

                console.log(['width', width, 'percentage', percentage, 'calc', calculatedWidth]);
                elem.find('.percentage-bar').css('width', calculatedWidth + 'px');

            }
        };
    });

})();
