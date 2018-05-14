var gulp = require('gulp');

gulp.task('php', function() {
    return gulp.src('app/feedback/**/*.*')
    .pipe(gulp.dest('./feedback/'))
});