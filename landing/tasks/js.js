var gulp = require('gulp');
var minJs = require('gulp-uglify');
var rename = require("gulp-rename");
var del = require('gulp-clean');
var concat = require('gulp-concat');
var strip = require('gulp-strip-comments');
var sort = require('gulp-sort');

gulp.task('js', function() {
    return gulp.src([ // беру все js-ки поочереди!
            './app/js/jquery.min.js',
            './app/js/jquery.inputmask.bundle.min.js',
            './app/js/bootstrap.min.js',
            './app/js/common.js',
            './app/js/form.js',
            './app/js/map.js',
            './app/js/jquery.bxslider.min.js',
            './app/js/carousel.js',
            './app/js/scroll.js',
        ])
        .pipe(concat('all.js')) //конкатенирую js-ки в all.js
       // .pipe(minJs())  минифицирую all.js
        .pipe(strip()) // удаляю комменты
        .pipe(rename({ // добавляю суффикс .min
            suffix: '.min'
        }))
        .pipe(gulp.dest('./js')) // кладу их в прод в папку js/
});