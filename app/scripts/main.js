(function() {
    'use strict';

    var module = angular.module('jeff-blaisdell.pages.main.app', [
      'jeff-blaisdell.components.logo'
    ]);

    module.controller('MainCtrl', function($scope, $log) {
        $log.info('Loading Main Controller.')
    });

})();
