const { src, dest, watch, series, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require("webpack-stream");
const minify = require("gulp-minify");
const webserver = require("gulp-webserver");

const jsFiles = './index.js';

function jsTask() {
    return (
        src(jsFiles)
            .pipe(
                webpack(
                    {
                        watch: true,
                        mode: "development",
                        module: {
                            rules: [
                                {
                                    test: /\.(js|jsx)$/i,
                                    loader: "babel-loader",
                                },
                                {
                                    test: /\.s[ac]ss$/i,
                                    use: [
                                        "style-loader",
                                        "css-loader",
                                        {
                                            loader: "sass-loader",
                                            options: {
                                                // Prefer `dart-sass`
                                                implementation: require("sass"),
                                                sourceMap: true,
                                            },
                                        },
                                    ],
                                }
                            ],
                        }

                    }
                )
            )
            .pipe(dest('dist'))
    )
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

exports.default = series(
    parallel(jsTask, webServerTask)
)