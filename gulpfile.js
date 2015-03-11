var gulp         = require( "gulp" );
var sass         = require( "gulp-sass" );
var jshint       = require( "gulp-jshint" );
var gulp_if      = require( "gulp-if" );
var annotate     = require( "gulp-ng-annotate" );
var uglify       = require( "gulp-uglify" );
var minify       = require( "gulp-minify-css" );
var rev          = require( "gulp-rev" );
var concat       = require( "gulp-concat" );
var revCollector = require( "gulp-rev-collector" );
var del          = require( "del");
var copy         = require( "gulp-copy");

var isDev        = false;



// ====================================================================
// T A S K S
// ====================================================================
gulp.task( "setDevMode", function() {
	isDev = true;
});


gulp.task( "clean:js", function() {
    return del([
        "build/js/*.js",
        "tmp/rev/js/*.json",
        "!build/js/vendors.js"
    ]); 
});


gulp.task( "clean:css", function() {
    return del([
        "tmp/rev/css/*.json",
        "build/css/*.css"
    ]); 
});


gulp.task( "clean:all", [ "clean:css", "clean:js" ], function() {
});


gulp.task( "rev:sass", function() {
	 return gulp.src( "./sass/*.scss" )
    	.pipe( sass() )
    	.pipe( gulp_if( isDev, minify() ) )
    	.pipe( rev() )
        .pipe( gulp.dest("build/css") )
        .pipe( rev.manifest() )
        .pipe( gulp.dest( "tmp/rev/css" ) );
});



gulp.task( "jshint", function() {
     return gulp.src( "./js/*.js")
        .pipe( jshint() )
        .pipe( jshint.reporter( "default" ) );
});


gulp.task( "rev:js", function() {
	 return gulp.src("js/*.js")
	    .pipe( annotate() )
	    .pipe( gulp_if( isDev, uglify() ) )
        .pipe( rev() )
        .pipe( gulp.dest("build/js") )
        .pipe( rev.manifest() )
        .pipe( gulp.dest( "tmp/rev/js" ) );
});


gulp.task( "rev", [ "rev:js", "rev:sass" ], function () {
    return gulp.src( [ "tmp/rev/**/*.json", "views/**/*.jade" ] )
        .pipe( revCollector({
            replaceReved: true
        }))
        .pipe( gulp.dest("build/views") );
});


var vendors_js_sources = [
    "bower_components/foundation/js/vendor/jquery.js",
    "bower_components/foundation/js/vendor/jquery.cookie.js",
    "bower_components/foundation/js/vendor/fastclick.js",
    "bower_components/foundation/js/vendor/modernizr.js",
    "bower_components/foundation/js/vendor/placeholder.js",
    "bower_components/foundation/js/foundation.min.js",
    "bower_components/angular/angular.min.js"
    ];
gulp.task( "init:vendors:js", function() {
    return gulp.src( vendors_js_sources )
        .pipe( concat( "vendors.js" ) )
        .pipe( gulp.dest( "build/js" ) );
});

gulp.task( "init:foundation:sass", function() {
    return gulp.src( "bower_components/foundation/scss/foundation/**")
        .pipe( copy( "sass/foundation", { prefix: 4 } ) );
});

gulp.task( "init", [ "init:vendors:js", "init:foundation:sass" ], function() {
});






// ====================================================================
// W A T C H E R S
// ====================================================================

// release
var watch_task = gulp.task( "watch", [ "clean:all", "jshint", "rev" ], function() {
	gulp.watch( "js/*.js", [ "clean:js", "jshint", "rev" ]  );
    gulp.watch( "sass/*.scss", [ "clean:css", "rev" ]  );
});

// dev (do not use uglify/minify)
gulp.task( "watch:dev", [ "setDevMode" ].concat( watch_task.tasks.watch.dep ), function() {
	gulp.watch( "js/*.js", [ "clean:js", "jshint", "rev" ]  );
    gulp.watch( "sass/*.scss", [ "clean:css", "rev" ]  );
});