var gulp = require('gulp');
var htmlMin = require('gulp-htmlmin');
var htmlHint = require('gulp-htmlhint');
var removeHtmlComments = require('gulp-remove-html-comments');
var minifyInline = require('gulp-minify-inline');
var i18n = require('gulp-html-i18n');

gulp.task('html', function() {
    return gulp.src('./app/*.html')
        .pipe(removeHtmlComments())
        .pipe(minifyInline())
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(htmlHint({
            "tag-pair": true,
        }))
        .pipe(i18n({
            langDir: './app/lang',
            createLangDirs: true,
            trace: false,
            defaultLang: "ru",
            fallback: "ru"
        }))
        .pipe(gulp.dest('./'));
});