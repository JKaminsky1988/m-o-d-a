var gulp = require('gulp');
var htmlMin = require('gulp-htmlmin');
var htmlHint = require('gulp-htmlhint');
var removeHtmlComments = require('gulp-remove-html-comments');
var minifyInline = require('gulp-minify-inline');
var i18n = require('gulp-html-i18n');
var browserSync = require('browser-sync');

gulp.task('html', function() {
    return gulp.src('./app/*.html') // беру все html-ки
        .pipe(removeHtmlComments()) // удаляю в них все комменты
        .pipe(htmlHint({ // проверяю код html на ошибки
            "tag-pair": true,
        }))
        .pipe(i18n({ // интернационализирую файлы html
            langDir: './app/lang', // беру html из /lang
            createLangDirs: true, //создаю дирректорию под каждый нужный язык
            trace: false, // если true, разместит в комментах откуда взяты строки
            defaultLang: "ru", // устанавливаю язык по умолчанию
            fallback: "ru"
        }))
        .pipe(htmlMin({ // минифицирую их
            collapseWhitespace: true // удаляю лишние пробелы и комменты
        }))
        .pipe(gulp.dest('./')) // расскладываю по нужным дирректориям
        .pipe(browserSync.reload({ // перезагружаю браузер после изменений в файлах
            stream: true
        }));
});