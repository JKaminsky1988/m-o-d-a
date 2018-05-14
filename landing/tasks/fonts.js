var gulp = require('gulp');

gulp.task('fontsDest', function() {
    return gulp.src('app/fonts/*.*')
        .pipe(gulp.dest('./fonts'))
});