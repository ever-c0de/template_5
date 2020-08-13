/rest/; /*global -$ */

("use strict");
var gulp = require("gulp");
var sass = require("gulp-sass");
var mainBowerFiles = require("main-bower-files");
var $ = require("gulp-load-plugins")();
var browserSync = require("browser-sync");
var reload = browserSync.reload;

// Error notifications
var reportError = function (error) {
  $.notify({
    title: "Gulp Task Error",
    message: "Check the console.",
  }).write(error);
  console.log(error.toString());
  this.emit("end");
};
var config = {
  bootstrapDir: "./bootstrap",
};

// Sass processing
gulp.task("sass", function () {
  return (
    gulp
    .src("src/style/**/*.scss")
    .pipe($.sourcemaps.init())
    // Convert sass into css
    .pipe(
      $.sass({
        outputStyle: "nested", // libsass doesn't support expanded yet
        precision: 10,
        includePaths: [config.bootstrapDir + "assets/stylesheets/bootstrap"],
      })
    )
    // Show errors
    .on("error", reportError)
    // Autoprefix properties
    .pipe(
      $.autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    // Write sourcemaps
    .pipe($.sourcemaps.write())
    // Save css
    .pipe(gulp.dest("src/style"))
    .pipe(gulp.dest("build/style"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    )
  );
  // .pipe($.notify({
  //   title: "SASS Compiled",
  //   message: "Your CSS files are ready",
  //   onLast: true
  // }));
});

// Process JS files and return the stream.
gulp.task("js", function () {
  return gulp.src("src/js/**/*.js").pipe(gulp.dest("build/js"));
});

// Process HTML files and return the stream.
gulp.task("html", function () {
  return gulp.src("src/index.html").pipe(gulp.dest("build"));
});

// 
gulp.task("fonts", function () {
  return gulp.src("src/fonts").pipe(gulp.dest("build"));
});


// Optimize Images
gulp.task("images", function () {
  return gulp
    .src("src/img/**/*")
    .pipe(
      $.imagemin({
        progressive: true,
        interlaced: true,
        svgoPlugins: [{
          cleanupIDs: false,
        }, ],
      })
    )
    .pipe(gulp.dest("build/img"));
});

// JS hint
gulp.task("jshint", function () {
  return gulp
    .src("src/js/*.js")
    .pipe(
      reload({
        stream: true,
        once: true,
      })
    )
    .pipe($.jshint())
    .pipe($.jshint.reporter("jshint-stylish"))
    .pipe(
      $.notify({
        title: "JS Hint",
        message: "JS Hint says all is good.",
        onLast: true,
      })
    );
});

// Beautify JS
gulp.task("beautify", function () {
  gulp
    .src("src/js/*.js")
    .pipe(
      $.beautify({
        indentSize: 2,
      })
    )
    .pipe(gulp.dest("build/js"))
    .pipe(
      $.notify({
        title: "JS Beautified",
        message: "JS files in the theme have been beautified.",
        onLast: true,
      })
    );
});

// Compress JS
gulp.task("compress", function () {
  return gulp
    .src("src/js/*.js")
    .pipe($.sourcemaps.init())
    .pipe($.uglify())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest("build/js"))
    .pipe(
      $.notify({
        title: "JS Minified",
        message: "JS files in the theme have been minified.",
        onLast: true,
      })
    );
});

// BrowserSync
gulp.task("browser-sync", function () {
  //watch files
  var files = [
    "src/style/main.css",
    "src/js/**/*.js",
    "src/img/**/*",
    "src/templates/**/*.twig",
    "src/index.html",
  ];
  browserSync.init({
    proxy: "template_4.test",
    online: true,
  });
});

// Default task to be run with `gulp`
gulp.task(
  "default",
  ["html", "sass", "browser-sync", "images", "fonts"],
  function () {
    gulp.watch("src/style/**/*.scss", ["sass"]);
    gulp.watch("bootstrap/assets/stylesheets/**/*.scss", ["sass"]);
    gulp.watch("src/js/**/*.js", ["js"]);
    gulp.watch("src/index.html", ["html"]).on("change", browserSync.reload);
  }
);