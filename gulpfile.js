/**
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var pagespeed = require('psi');
var es = require('event-stream');
var _ = require('lodash');
var runSequence = require('run-sequence');
var reload = browserSync.reload;


var venderScripts = [
  { 'angular': [ 'bower_components/angular/angular.min.js' ] },
  { 'jquery': [ 'bower_components/jquery/dist/jquery.min.js' ] },
  { 'skrollr': [ 'bower_components/skrollr/dist/skrollr.min.js' ] },
  { 'imagesloaded': [ 'bower_components/imagesloaded/imagesloaded.pkgd.min.js' ] },
  { 'move': [ 'bower_components/move.js/move.min.js' ] }
];

// Prepare vendor scripts.
gulp.task('scripts:vendor', function () {

  var streams = _.map(venderScripts, function(vendor) {
    var name = _.keys(vendor);
    var scripts = vendor[name];
    var target = 'app/scripts/lib'

    return gulp.src(scripts)
        .pipe($.concat(name + '.js'))
        .pipe(gulp.dest(target));
  });

  return es.merge.apply(null, streams);
});

// Prepare Angular template cache.
gulp.task('scripts:views', function () {

  var streams = _.map(venderScripts, function(vendor) {
    var name = _.keys(vendor);
    var scripts = vendor[name];
    var target = 'app/scripts'

    return gulp.src('app/scripts/**/*.html')
        .pipe($.minifyHtml())
        .pipe($.angularTemplatecache({
            standalone: true,
            module:     'jeff-blaisdell.templates',
            root: 'jeff-blaisdell',
            filename:   'templates.js'
        }))
        .pipe(gulp.dest(target));
  });

  return es.merge.apply(null, streams);
});

// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src(['app/scripts/**/*.js', '!app/scripts/lib/**/*.js', '!app/scripts/templates.js'])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'))
    .pipe(reload({stream: true}));
});

// Optimize Images
gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe(reload({stream: true, once: true}))
    .pipe($.size({title: 'images'}));
});

// Automatically Prefix CSS
gulp.task('styles:css', function () {
  return gulp.src('app/styles/**/*.css')
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('app/styles'))
    .pipe(reload({stream: true}))
    .pipe($.size({title: 'styles:css'}));
});

// Compile Sass For Style Guide Components (app/styles/components)
gulp.task('styles:components', function () {
  return gulp.src('app/styles/components/components.scss')
    .pipe($.rubySass({
      style: 'expanded',
      precision: 10,
      loadPath: ['app/styles/components']
    }))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('app/styles/components'))
    .pipe($.size({title: 'styles:components'}));
});

// Compile Any Other Sass Files You Added (app/styles)
gulp.task('styles:scss', function () {
  return gulp.src(['app/styles/**/*.scss', '!app/styles/components/components.scss'])
    .pipe($.rubySass({
      style: 'expanded',
      precision: 10,
      loadPath: ['app/styles']
    }))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe($.size({title: 'styles:scss'}));
});

// Output Final CSS Styles
gulp.task('styles', ['styles:components', 'styles:scss', 'styles:css']);

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', [], function () {
  return gulp.src('app/**/*.html')
    .pipe($.useref.assets({searchPath: '{.tmp,app}'}))

    // Safe guard Angular module names against minification.
    .pipe($.if('*.js', $.ngmin()))

    // Concatenate And Minify JavaScript
    .pipe($.if('*.js', $.uglify()))

    // Concatenate And Minify Styles
    .pipe($.if('*.css', $.csso()))
    // Remove Any Unused CSS
    // Note: If not using the Style Guide, you can delete it from
    // the next line to only include styles your project uses.
    .pipe($.useref.restore())
    .pipe($.useref())
    // Update Production Style Guide Paths
    .pipe($.replace('components/components.css', 'components/main.min.css'))
    // Minify Any HTML
    .pipe($.if('*.html', $.minifyHtml()))
    // Output Files
    .pipe(gulp.dest('dist'))
    .pipe($.size({title: 'html'}));
});

gulp.task('build', ['clean'], function () {
    runSequence(
        ['scripts:vendor', 'scripts:views', 'images'],
        'html'
    );
});

// Clean Output Directory
gulp.task('clean', function (cb) {
    return gulp.src(['dist/*', '!dist/{.git,.git/**,README.md}'])
      .pipe($.clean());
});

// Watch Files For Changes & Reload
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: ['app', '.tmp']
    },
    notify: false
  });

  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/styles/**/*.{css,scss}'], ['styles']);
  gulp.watch(['.tmp/styles/**/*.css'], reload);
  gulp.watch(['app/scripts/**/*.js', '!app/scripts/lib/**/*.js'], ['jshint']);
  gulp.watch(['app/scripts/templates**/*.html'], ['scripts:views']);
  gulp.watch(['app/images/**/*'], ['images']);
});

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function (cb) {
  runSequence('styles', ['jshint', 'html', 'images'], cb);
});

// Run PageSpeed Insights
// Update `url` below to the public URL for your site
gulp.task('pagespeed', pagespeed.bind(null, {
  // By default, we use the PageSpeed Insights
  // free (no API key) tier. You can use a Google
  // Developer API key if you have one. See
  // http://goo.gl/RkN0vE for info key: 'YOUR_API_KEY'
  url: 'https://jeff-blaisdell.github.io',
  strategy: 'mobile'
}));
