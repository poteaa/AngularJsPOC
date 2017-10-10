var browserSync = require('browser-sync');

var gulp = require('gulp');
var less = require('gulp-less');
var nodemon = require('gulp-nodemon');
var plumber = require('gulp-plumber');
var util = require('gulp-util');
var autoprefixer = require('autoprefixer');
var config = require('./gulp.config')();

var port = process.env.PORT || config.port;

gulp.task('hello', function() {
	log('Hi');
});

gulp.task('compileStyles', function() {
	log('Compiling styles...');
	
	return gulp
		.src(config.lessFile)
		.pipe(plumber())
		.pipe(less())
		.pipe(gulp.dest('./temp'));
});

gulp.task('start-server', function() {
	
	var nodeOptions = {
		script: config.nodeServer,
		delayTime: 1,
		env: {
			'PORT': port,
			'NODE_ENV': 'dev'
		},
		watch: [config.server]
	};
	
	return nodemon(nodeOptions)
		.on('start', function(ev) {
			log('nodemon: server started');
			startBrowserSync();
		})
		.on('restart', function(ev) {
			log('nodemon: server restarted');
		})
		.on('crash', function(ev) {
			log('nodemon: server crashed');
		})
		.on('exit', function(ev) {
			log('nodemon:  server exited');
		})
});

/******************************************************************************************/
function startBrowserSync() {
	if(browserSync.active) {
		return;
	}
	log('Started browser sync on port ' + port);
	
	gulp.watch([config.lessFile], ['compileStyles'])
		.on('change', function(event) {
			log('Event path: ' + event.path + ' Event Type' + event.type);
		});
	
	var options = {
		proxy: 'localhost:' + port,
		port: 1338,
		files: [
			config.client + '**/*.*',
			'!' + config.less, 
			config.temp + '**/*.css'
		],
		ghostMode: {
			clicks: true,
			location: false,
			forms: true,
			scroll: true
		},
		injectChanges: true,
		logFileChanges: true,
		logLevel: 'debug',
		logPrefix: 'gulp-sync',
		nofity: true,
		reloadDelay: 1000
	};
	
	browserSync(options)
		.on('start', function (){
			log('browserSync started');
		});
	
}

function log(msg) {
	util.log(util.colors.gray(msg));
}


