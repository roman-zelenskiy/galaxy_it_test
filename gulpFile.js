const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');


function buildStylesTask() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./dist/styles'))
};
function copyHTMLFile() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
};
function buildScripts() {
    return gulp.src('./src/script/*.js')
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./dist/script'))
};
function watchСhanges() {
    gulp.watch('./src/styles/*.scss', buildStylesTask);
    gulp.watch('./src/index.html', copyHTMLFile);
    gulp.watch('./src/script/*.js', buildScripts);
};

exports.copyHTMLFile = copyHTMLFile;
exports.buildScripts = buildScripts;
exports.watchСhanges = watchСhanges;
exports.buildStylesTask = buildStylesTask
exports.buildProject = gulp.series(copyHTMLFile, buildStylesTask, buildScripts, watchСhanges);
 