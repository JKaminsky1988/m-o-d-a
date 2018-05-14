var gulp = require('gulp');
var scss = require('gulp-scss');
var minCss = require('gulp-cssmin');
var rename = require("gulp-rename");
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var del = require('gulp-clean');
var cssLint = require('gulp-csslint');

gulp.task('scss', function() {
    return gulp.src('./app/scss/*.scss') // беру все scss-ки
        .pipe(scss()) // компилирую их в css

        .pipe(gulp.dest('./app/css')) // кладу их в папку css/
});


gulp.task('css', ['scss'], function() {
    return gulp.src('./app/css/*.css') // беру все css-ки
        .pipe(concat('all.css')) // конкатенирую их в all.css
        .pipe(minCss()) //  минифицирую all.css
        .pipe(rename({ // добавляю суффикс .min
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css')) // кладу all.css в прод в папку css/
        .pipe(browserSync.reload({
            stream: true
        }))
});