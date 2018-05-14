var gulp       = require('gulp');
const imageMin = require('gulp-imagemin');

gulp.task('img', function() {
    gulp.src('app/img/**/*.*')
        // .pipe(imageMin())
        .pipe(gulp.dest('./img'));
});