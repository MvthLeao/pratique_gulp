// determinando constantes dos pacotes instalados 

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// comprimindo Imagens

function comprimeImg() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

// comprimindo JS

function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

// compilação dos arquivos

function compilaSass() {
    return gulp.src('./source/styles/*main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles')); 
}

// exportando tarefas

exports.sass = compilaSass;
exports.javascript = comprimeJS;
exports.images = comprimeImg;