var gulp = require('gulp');
var del = require('gulp-clean');

gulp.task('cleanStaff', function() {
    gulp.src([
                  './.gulp-scss-cache',
                  './.sass-cache',
                  ])
        .pipe(del()) // удаляю шлак
});