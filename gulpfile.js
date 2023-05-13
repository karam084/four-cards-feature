const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const gulp = require('gulp');


gulp.task('styles', () => {
    return gulp.src('sass/**//*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('clean', () => {
    return del([
        'css/style.css',
    ]);
});



// webp images
function webpImage() {
    return src('./images/*.{jpg, png}')
        .pipe(imagewebp())
        .pipe('images')
}

// default gulp
exports.default = series(
    jsmin,
    optimizeimg,
    webpImage,
    watchTask
);
