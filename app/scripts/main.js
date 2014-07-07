(function () {
    'use strict';

    var module = angular.module('jeff-blaisdell.pages.main.app', [
        'jeff-blaisdell.components.logo',
        'jeff-blaisdell.components.facts',
        'jeff-blaisdell.components.social-links',
        'jeff-blaisdell.components.parallax',
        'jeff-blaisdell.components.page-loader',
        'jeff-blaisdell.components.skill'
    ]);

    module.controller('MainCtrl', function ($scope, $log) {

        /**
         * Set image url for #preload img tag.
         * That image tag is monitored to know when images are loaded.
         */
        $scope.backgroundImageUrl = angular.element('#slide-1 .bcg').css('background-image');
        $log.info('Main Controller Loaded.');
    });

})();
