// *
// * Cytonn Technologies
// *
// * @author: Joseph Mahugu <jmahugu@cytonn.com>
// *
// * Project: Gulp Usage
// *

var gulp = require('gulp'),
	uglify = require('gulp-uglify');

//Scripts task
//Uglifies JavaScript files
gulp.task('script', function(){
	gulp.src('js/*.js') //specifies the directory where the file to be uglified is located
	.pipe(uglify())		//calls the uglify function
	.pipe(gulp.dest('js/min.js'));		//inducates the destination folder after uglifying the file
});

//Name of task
//Definition of task
gulp.task('sample', function(){
	console.log("Show something");
});

//Watch task
//Watches the js files in the js/*js
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['script']);
});

//The default gulp task can be called to execute all the tasks in the gulpfile.js
gulp.task('default', ['script', 'sample']);



