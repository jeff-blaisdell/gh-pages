(function() {
    'use strict';

    var module = angular.module('jeff-blaisdell.components.logo', [
    ]);

    module.directive('logo', function($timeout) {
        return {
            restrict: 'E',
            template: '<div class="logo-container"><img class="logo logo-1-1" src="images/jb-logo.svg" height="200" width="200"><img class="logo logo-1-2" src="images/jb-logo.svg" height="200" width="200"><img class="logo logo-1-3" src="images/jb-logo.svg" height="200" width="200"></div>',
            scope: {
            },
            link: function (scope) {

              function animate() {
                move('.logo-container .logo-1-3')
                  .x(125)
                  .rotate(180)
                  .end();

                move('.logo-container .logo-1-2')
                  .x(125)
                  .scaleX(-1)
                  .end();
              }

              $timeout(animate, 1500);

            }
        }
    });

})();
