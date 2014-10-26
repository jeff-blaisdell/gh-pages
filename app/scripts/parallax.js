(function() {
  'use strict';

  var module = angular.module('jeff-blaisdell.components.parallax', [
  ]);

  module.directive('parallax', function($window) {
    return {
      restrict: 'EA',
      scope: {},
      link: function (scope, elem) {

        // Setup variables
        var $slides = elem.find('.slide');
        var $body = $('body');
        var winH = $window.innerHeight;
        var winW = $window.innerWidth;

        function adjustWindow(){

            // Some mobile devices trigger resize on scroll.
            if (winW === $window.innerWidth) {
              return;
            }

            // Reset slide heights prior to recalc.
            $slides.height('auto');

            // Get window size
            winH = $window.innerHeight;
            winW = $window.innerWidth;

            // Keep minimum height 550
            if(winH <= 550) {
                winH = 550;
            }

            // Init Skrollr for 768 and up
            if( winW >= 768) {

                // Init Skrollr
                var s = skrollr.init({ forceHeight: false });

                // Resize our slides
                $slides.each(function(index, slide) {
                  var $slide = $(slide);
                  if ($slide.height() < winH) {
                    $slide.height(winH);
                  }
                });

                s.refresh($('.slide'));

            } else {
                // Destroy Skrollr
                skrollr.init().destroy();
            }

            // Check for touch
            if(Modernizr.touch) {
                // Destroy Skrollr
                skrollr.init().destroy();
            }

        }

        // Fade in all sections on load.
        $body.imagesLoaded( function() {
          // Resize sections
          adjustWindow();

          // Fade in sections
          $body.removeClass('loading').addClass('loaded');
        });

        // Recalc parallax settings on window resize.
        angular.element($window).bind('resize', _.throttle(adjustWindow, 300));

      }
    };
  });

})();
