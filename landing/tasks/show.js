var gulp   = require('gulp');
var runSeq = require('run-sequence');

gulp.task('show', function() {
    runSeq(
        'fontsDest',
        'css',
        'js',
        'html',
        'img',
        // 'php',
        'browserSync',
        'cleanStaff'
    );
});