var gulp = require('gulp');
var awspublish = require('gulp-awspublish');
var env = require('gulp-env');
var parallelize = require("concurrent-transform");
var replace = require('gulp-replace');
var run = require('gulp-run');
var del = require('del');
var vinylPaths = require('vinyl-paths');


gulp.task('del-wrong-gitbook-folder', function () {
  return gulp.src('content/_book/gitbook')
    // .pipe(stripDebug())
    // .pipe(gulp.dest('dist'))
    .pipe(vinylPaths(del));
});

gulp.task('del-wrong-gitbook-folder', function (cb) {
  del([
    'content/_book/gitbook',
  ], cb);
});

gulp.task('replace-font-path', function(){
  gulp.src(['./content/_book/pt-BR/gitbook/print.css',
            './content/_book/pt-BR/gitbook/style.css'])
    .pipe(replace(/\.\/\/fonts/g, './fonts'))
    .pipe(gulp.dest('./content/_book/pt-BR/gitbook/'));
});


// Deploying normal files
gulp.task('publish-stage', function() {

  // create a new publisher
  var publisher = awspublish.create({
    key: process.env.AWS_ACCESS_KEY_ID,
    secret: process.env.AWS_SECRET_KEY,
    bucket: process.env.AWS_BUCKET,
    region: 'sa-east-1',
  });

  // define custom headers
  var headers = {
     'Cache-Control': 'max-age=315360000, no-transform, public'
     // ...
   };

  return gulp.src('./content/_book/**/*.*')

     // gzip, Set Content-Encoding headers and add .gz extension
    // .pipe(awspublish.gzip({ ext: '.gz' }))

    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(parallelize(publisher.publish(headers), 5))

    // create a cache file to speed up consecutive uploads
    // .pipe(publisher.cache())

     // print upload updates to console
    .pipe(awspublish.reporter());
});

// Deploying zipped files
gulp.task('publish-stage-gz', function() {

  // create a new publisher
  var publisher = awspublish.create({
    key: process.env.AWS_ACCESS_KEY_ID,
    secret: process.env.AWS_SECRET_KEY,
    bucket: process.env.AWS_BUCKET,
    region: 'sa-east-1',
  });

  // define custom headers
  var headers = {
     'Cache-Control': 'max-age=315360000, no-transform, public'
     // ...
   };

  return gulp.src('./content/_book/**/*.*')

     // gzip, Set Content-Encoding headers and add .gz extension
    .pipe(awspublish.gzip({ ext: '.gz' }))

    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(parallelize(publisher.publish(headers), 5))

    // create a cache file to speed up consecutive uploads
    // .pipe(publisher.cache())

     // print upload updates to console
    .pipe(awspublish.reporter());
});

gulp.task('set-env', function () {
    env({
        file: ".env.json",
        vars: {
            //any vars you want to overwrite
        }
    });
});

gulp.task('deploy', [
  'set-env',
  'publish-stage',
  'publish-stage-gz'
]);

gulp.task('default', ['deploy']);

