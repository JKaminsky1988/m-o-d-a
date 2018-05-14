var gulp        = require('gulp');
var browserSync = require('browser-sync');


gulp.task('watch', function() {
	gulp.watch('app/scss/*.scss', ['css']);
	gulp.watch('app/*.html', ['html'], browserSync.reload);
	gulp.watch('app/lang/**/*.js', ['html'], browserSync.reload);
	gulp.watch('app/js/*.js', ['js'], browserSync.reload);
});

gulp.task('browserSync', ['watch'], function() {
	browserSync({
		server: {
			baseDir: "./"
		}
	})
})