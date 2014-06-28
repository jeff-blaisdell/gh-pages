(function () {
    'use strict';

    var module = angular.module('jeff-blaisdell.components.logo', [
        'jeff-blaisdell.templates'
    ]);

    module.directive('logo', function ($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'jeff-blaisdell/templates/logo.html',
            scope: {
            },
            link: function () {

                function animateDots() {
                    move('.logo-dot-2-3')
                        .ease('in')
                        .x(55)
                        .end(function () {
                        });

                    move('.logo-dot-3-3')
                        .ease('in')
                        .x(55)
                        .end(function () {
                            move('.logo-dot-3-3')
                                .ease('in')
                                .x(110)
                                .end();
                        });
                }

                function animate() {
                    move('.logo-container .logo-1-3')
                        .x(125)
                        .rotate(180)
                        .end();

                    move('.logo-container .logo-1-2')
                        .x(125)
                        .scaleX(-1)
                        .end(animateDots);
                }

                $timeout(animate, 2500);

            }
        };
    });

})();
