'use strict'

// Various helper modules
var gulp = require("gulp");
var plug = require("gulp-load-plugins")();
var path = require('path');
var concat = require('gulp-concat');

// paths
var paths = {
	localhost: "http://localhost:8000/index.html",
	angular: "app/vendor/angular/angular.min.js",
	route: "app/vendor/angular-route/angular-route.min.js",
	app: "app/modules/app.js",
	appConfig: "app/modules/app.config.js",
	appModules: "app/modules/**/*.js",
	jquery: "app/vendor/jquery/dist/jquery.min.js",
	bootstrap: "app/vendor/bootstrap/dist/js/bootstrap.min.js"
};

gulp.task('concat', function() {  
	return gulp.src([
			paths.jquery, paths.bootstrap,
			paths.angular, paths.route,
			paths.app, paths.appConfig, paths.appModules
		])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('app'));
});



// WebServer
gulp.task('webserver', function() {
	return gulp.src('app')
		.pipe(plug.webserver({
			livereload: true,
			directoryListing: true,
			open: paths.localhost
		}));
});

// watch files, transpile if one of them changes
gulp.task("watch", function() {
	gulp.watch([paths.app, paths.appConfig, paths.appModules], ["concat"]);
});

// The default task is 'watch'
gulp.task("default", ["concat", "watch", "webserver"]);