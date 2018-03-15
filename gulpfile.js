var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var paths = {
  html:['index.html'],
  css:['css/main.css'],
  script:['scripts/script.js']
};

// CSS
gulp.task('mincss', function(){
    return gulp.src(paths.css)
    // .pipe(sass().on('error', sass.logError))
    // .pipe(minifyCss())
    // .pipe(gulp.dest('main'))
    .pipe(reload({stream:true}));
});

// JavaScript
gulp.task('scripts', function(){
  return gulp.src(paths.script)
    // .pipe(coffee())
    // .pipe(gulp.dest('js'))
    .pipe(reload({stream:true}));
});
gulp.task('html', function(){
  gulp.src(paths.html)
  .pipe(reload({stream:true}));
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: false
  });
});

gulp.task('watcher', function(){
  gulp.watch(paths.css, ['mincss']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.script, ['scripts']);
});

gulp.task('default', ['watcher', 'browserSync']);