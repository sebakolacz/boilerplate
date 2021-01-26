const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const del = require("del");

gulp.task("css", done => {

    gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
    .pipe(browserSync.stream());

    done();
});

gulp.task("server", done => {

    browserSync.init({
        server: "src/"
    });

    done();
});

gulp.task("watch", done => {

    gulp.watch("src/scss/**/*.scss", gulp.series('css'));
    gulp.watch(["src/*.html", "src/**/*.js"], browserSync.reload());

    done();
});

gulp.task("clean", done => {

    del("dist/");

    done();
});

gulp.task('default', gulp.parallel(
    'css',
    'server',
    'watch'
));