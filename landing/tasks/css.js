var gulp = require('gulp');
var scss = require('gulp-scss');
var minCss = require('gulp-cssmin');
var rename = require("gulp-rename");
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var del = require('gulp-clean');
var cssLint = require('gulp-csslint');

gulp.task('scss', function() {
    return gulp.src([
            './app/scss/mixins.scss',
            './app/scss/variables.scss',
            './app/scss/main.scss',
            './app/scss/fonts.scss',
            './app/scss/form.scss',
            './app/scss/panels.scss',
            './app/scss/media.scss'
        ]) // беру все scss-ки поочереди
        .pipe(scss()) // компилирую их в css

    .pipe(gulp.dest('./app/css')) // кладу их в папку css/
});


gulp.task('css', ['scss'], function() {
    return gulp.src([
            './app/css/bootstrap.css',
            './app/css/jquery.bxslider.css',
            './app/css/mixins.css',
            './app/css/variables.css',
            './app/css/main.css',
            './app/css/fonts.css',
            './app/css/form.css',
            './app/css/panels.css',
            './app/css/media.css'
        ]) // беру все css-ки поочереди
        .pipe(concat('all.css')) // конкатенирую их в all.css
        .pipe(minCss()) //  минифицирую all.css
        .pipe(rename({ // добавляю суффикс .min
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css')) // кладу all.css в прод в папку css/
        .pipe(browserSync.reload({ // обновляю браузер после изменений в файле
            stream: true
        }))
});