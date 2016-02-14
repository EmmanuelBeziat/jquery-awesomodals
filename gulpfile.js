/**
 * Gulp dependancies
 */
var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

/**
 * Project & pathes
 */
var project =  {
		name: 'jquery-awesomodals',
		dist: './dist/',
		src: './src/',
		demo: './demo/'
	},
	path = {
		js: {
			src: project.src + 'js/',
			dist: project.dist,
			demo: project.demo + 'js/'
		},
		css: {
			src: project.src + 'stylus/',
			demo: project.demo + 'css/'
		}
	};

/**
 * livereload
 */
gulp.task('reload', function() {
	plugins.livereload();
});

/**
 * Save and minify stylus files in one css file
 * Create sourcemap file
 **/
gulp.task('stylus', function() {
	return gulp.src(path.css.src + 'main.styl')
		.pipe(plugins.plumber())
		.pipe(plugins.sourcemaps.init())
			.pipe(plugins.stylus({
				compress: true
			}))
		.pipe(plugins.sourcemaps.write())
		.pipe(plugins.plumber.stop())
		.pipe(gulp.dest(path.css.demo))
		.pipe(plugins.livereload());
});

/**
 * Save and minify js files in one js file
 * Create sourcemap file
 **/
gulp.task('javascript', function() {
	return gulp.src(path.js.src + '*.js')
		.pipe(plugins.plumber())
		.pipe(plugins.sourcemaps.init())
			.pipe(plugins.uglify({
				preserveComments: 'some'
			}))
			.pipe(plugins.rename(project.name + '.min.js'))
		.pipe(plugins.sourcemaps.write('../dist'))
		.pipe(plugins.plumber.stop())
		.pipe(gulp.dest(path.js.dist))
		.pipe(plugins.livereload());
});

/**
 * Watcher + Livereload
 */
gulp.task('watch', function() {
	plugins.livereload.listen();
	gulp.watch(path.css.src + '*.styl', ['stylus']);
	gulp.watch(path.js.src + '*.js', ['javascript']);
	gulp.watch('**/*.html', ['reload']);
});

gulp.task('default', ['stylus', 'javascript', 'reload']);