(function () {
    'use strict';

    var module = angular.module('jeff-blaisdell.components.skill', [
        'jeff-blaisdell.templates'
    ]);

    module.directive('skill', function ($window) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'jeff-blaisdell/templates/skill.html',
            scope: {
                name: '@',
                percentage: '@'
            },
            link: function (scope, elem) {

                function setWidth() {
                    var percentage = parseInt(scope.percentage) / 100;
                    var width = elem.find('.meter').prop('offsetWidth');
                    var calculatedWidth = Math.ceil(width * percentage);
                    elem.find('.percentage-bar').css('width', calculatedWidth + 'px');
                }


                angular.element($window).bind('resize', setWidth);

                setWidth();
            }
        };
    });

})();
