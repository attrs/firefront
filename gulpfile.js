'use strict';

const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const rimraf = require('gulp-rimraf');
const header = require('gulp-header');
const less = require('gulp-less');
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack');
const pkg = require('./package.json');

gulp.task('build.js.clean', () => {
  return gulp.src(['dist', 'docs/lib', 'docs/js', 'docs/css'], { read: false })
    .pipe(rimraf());
});

gulp.task('build.js', ['build.js.clean'], (done) => {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if( err ) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      colors: true,
      children: true,
      chunks: true,
      modules: false
    }));
    done();
  });
});

gulp.task('build.js.min', ['build.js'], (done) => {
  return gulp.src(path.join('dist/ff.js'))
    .pipe(header([
      '/*!',
      '* <%= pkg.name %>',
      '* <%= pkg.homepage %>',
      '*',
      '* Copyright attrs and others',
      '* Released under the <%=pkg.license%> license',
      '* https://github.com/<%=pkg.repository%>/blob/master/LICENSE',
      '*/',
      ''
    ].join('\n'), { pkg: pkg }))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(header('/*! <%= pkg.name %> - attrs */', { pkg: pkg }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build.docs.js', ['build.js.min'], (done) => {
  webpack(require('./webpack.config.docs.js'), function(err, stats) {
    if( err ) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      colors: true,
      children: true,
      chunks: true,
      modules: false
    }));
    done();
  });
});

gulp.task('build.docs.less', ['build.docs.js'], () => {
  return gulp.src(path.join('docs/less/index.less'))
    .pipe(less({
      paths: ['docs']
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('docs/css'))
    .pipe(csso())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('docs/css'));
});

gulp.task('build.docs', ['build.docs.less'], () => {
  return gulp.src('dist/*')
    .pipe(gulp.dest('docs/lib'));
});

gulp.task('build', ['build.docs']);

// conclusion
gulp.task('watch', ['build.watch']);
gulp.task('default', ['build']);
