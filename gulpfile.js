const gulp = require("gulp"),
  less = require("gulp-less"),
  concat = require("gulp-concat"),
  autoprefixer = require("gulp-autoprefixer"),
  sourcemaps = require("gulp-sourcemaps"),
  gulpMinifyCss = require("gulp-minify-css"),
  connect = require("gulp-connect"),
  postcss = require("gulp-postcss"),
  adaptive = require("postcss-adaptive"),
  watch = require("gulp-watch");

gulp.task("less", function() {
   var plugins = [
     adaptive({ remUnit: 75 }),
   ]
  gulp
    .src("./pages/**/*.less")
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss(plugins))
    .pipe(
      autoprefixer({
        browsers: ["last 6 versions", "> 1%"],
        cascade: false
      })
    )
    .pipe(sourcemaps.write())
    .pipe(concat("style.css"))
    .pipe(gulpMinifyCss())
    .pipe(gulp.dest("./pages/style/"));
});

gulp.task("default", function() {
   connect.server({
     livereload: true,
     port: 8080
   });
  watch("./pages/**/*.less", gulp.series("less"));
});
