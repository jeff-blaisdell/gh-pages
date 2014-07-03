angular.module("jeff-blaisdell.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("jeff-blaisdell/templates/facts.html","<div class=facts><dl class=clear><span class=fact-group><dt>Vocation</dt><dd>Creating Software</dd><dt>Location</dt><dd>St Paul, MN</dd></span> <span class=fact-group><dt>Education</dt><dd><ul class=\"education-list list--reset\"><li>Luther College, BA</li><li>Globe University, MBA</li></ul></dd><dt>Hobbies</dt><dd>Coding, Traveling, Photgraphy</dd></span></dl></div>");
$templateCache.put("jeff-blaisdell/templates/logo.html","<div class=logo-container><img class=\"logo logo-1-1\" src=images/jb-logo.svg height=200 width=200> <img class=\"logo logo-1-2\" src=images/jb-logo.svg height=200 width=200> <img class=\"logo logo-1-3\" src=images/jb-logo.svg height=200 width=200> <img class=\"logo-dot logo-dot-1-3\" src=images/jb-logo-dot.svg height=200 width=200> <img class=\"logo-dot logo-dot-2-3\" src=images/jb-logo-dot.svg height=200 width=200> <img class=\"logo-dot logo-dot-3-3\" src=images/jb-logo-dot.svg height=200 width=200></div>");
$templateCache.put("jeff-blaisdell/templates/page-loader.html","<i class=page-loader></i>");
$templateCache.put("jeff-blaisdell/templates/skill.html","<div class=skill><p class=clear><span class=name>{{name}}</span> <span class=percentage>{{percentage}}%</span></p><div class=\"meter nostrips frontend\"><span class=percentage-bar></span></div></div>");
$templateCache.put("jeff-blaisdell/templates/social-links.html","<ul class=\"social-links list--reset clear\"><li><a href=https://plus.google.com/+JeffBlaisdell><span class=\"social-link google-plus\"></span></a></li><li><a href=https://github.com/jeff-blaisdell><span class=\"social-link github\"></span></a></li><li><a href=https://www.linkedin.com/in/jeffreyblaisdell><span class=\"social-link linked-in\"></span></a></li><li><a href=\"http://jeff-blaisdell.blogspot.com/\"><span class=\"social-link blogger\"></span></a></li><li><a href=https://twitter.com/jeff_blaisdell><span class=\"social-link twitter\"></span></a></li></ul>");}]);