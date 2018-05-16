var gulp   = require('gulp');
var runSeq = require('run-sequence');

gulp.task('show', function() {
    runSeq(
        'css',
        'fonts',
        'js',
        'html',
        'img',
        // 'php',
        'browserSync',
        'cleanStaff'
    );
});