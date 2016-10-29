"use strict";

var gulp = require("gulp"),
    jshint = require("gulp-jshint"),
    mocha = require("gulp-mocha"),
    shell = require("gulp-shell"),
    rimraf = require('gulp-rimraf'),
    ignore = require("gulp-ignore"),
    traceur = require('gulp-traceur');

gulp.task("default", ["watch"]);

gulp.task("jshint", function() {
  return gulp.src(["**/*.js"])
    .pipe(lintIgnorables())
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"));
});

gulp.task("alltests", function() {
	return gulp.src("test/**/*.js", {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: "nyan"}));
});

// gulp.task("build-app", function () {
//     return gulp.src(traceurBuildSources())
//         .pipe(traceur())
//         .pipe(gulp.dest("build"));
// });
//
// gulp.task("clean-build-folder", function() {
//   return gulp.src("build/**/*", { read: false })
//     .pipe(rimraf());
// });
//
// gulp.task("build", ["clean-build-folder", "build-app"]);

gulp.task("run-traceurd-tests", shell.task(["npm test"]));

gulp.task("watch", function() {
  gulp.watch(["**/*.js", "!node_modules/**", "!build/**"], ["jshint", "run-traceurd-tests"]);
});


function traceurBuildSources() {
  return [
    "server/**/*.js",
    "networks/**/*.js",
    "app*.js"
  ];
}


function lintIgnorables() {
  return ignore.exclude([
    "node_modules/**",
    "build/**"
  ]);
}
