const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
//const autoprefixer = require('gulp-autoprefixer');
const Dotenv = require('dotenv-webpack');
const webPackConfig = require('./webpack.config');
const webpack = require("webpack-stream");
const minify = require("gulp-minify");
//const watch = require('gulp-watch');
const webserver = require("gulp-webserver");
const cleanCSS = require('gulp-clean-css');

const jsFiles = './index.js';

function jsTask() {
    return src(jsFiles)
        .pipe(webpack(webPackConfig))
        .pipe(dest('dist'));
}

function sassTask() {

    return src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))

        .pipe(concat('formio-external.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist'));
}

function webServerTask() {
    src(".").pipe(
        webserver({
            livereload: true,
            directoryListing: true,
            open: true,
        })
    );

}

// Watch task
function watchTask() {
    watch('./scss/**/*.scss', sassTask);
    watch('./dist/**/*.js', jsTask);

}

exports.default = series(
    parallel(jsTask, sassTask, watchTask, webServerTask)
)