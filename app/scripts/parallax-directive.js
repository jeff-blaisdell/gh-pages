(function() {
  'use strict';

  var module = angular.module('jeff-blaisdell.components.parallax', [
  ]);

  module.directive('parallax', function($window) {
    return {
      restrict: 'EA',
      scope: {
      },
      link: function (scope, elem) {

        // Setup variables
        var $slide = elem.find('.slide');
        var $body = $('body');

        //FadeIn all sections
        $body.imagesLoaded( function() {
          setTimeout(function() {
            // Resize sections
            adjustWindow();
            // Fade in sections
            $body.removeClass('loading').addClass('loaded');
          }, 800);
        });

        function adjustWindow(){

          // Init Skrollr

          // Get window size
          var winH = $window.innerHeight;
          // Keep minimum height 550
          if(winH <= 550) {
            winH = 550;
          }

          // Resize our slides
          $slide.height(winH);

          // Refresh Skrollr after resizing our sections

        }


      }
    }
  });

})();
