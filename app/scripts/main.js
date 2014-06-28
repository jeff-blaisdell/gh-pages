(function () {
    'use strict';

    var module = angular.module('jeff-blaisdell.pages.main.app', [
        'jeff-blaisdell.components.logo',
        'jeff-blaisdell.components.parallax',
        'jeff-blaisdell.components.page-loader'
    ]);

    module.controller('MainCtrl', function ($scope, $log) {
        $log.info('Loading Main Controller.');
    });

})();
