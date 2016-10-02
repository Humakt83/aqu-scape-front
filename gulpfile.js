const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('clean', function () {
    return del('dist/**/*');
});

gulp.task('compile', ['clean'], function () {
    return gulp
        .src(['node_modules/angular2/typings/browser.d.ts', 'src/**/*.ts'])
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:libs', ['clean'], function() {
    return gulp.src([
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/paper/dist/paper-full.min.js',
        'node_modules/@angular/common/bundles/common.umd.js',
        'node_modules/@angular/compiler/bundles/compiler.umd.js',
        'node_modules/@angular/core/bundles/core.umd.js',
        'node_modules/@angular/forms/bundles/forms.umd.js',
        'node_modules/@angular/http/bundles/http.umd.js',
        'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        'node_modules/@angular/router/bundles/router.umd.js',
    ])
    .pipe(gulp.dest('dist/client/lib'))
});

gulp.task('copy:rxjs', ['clean'], function() {
    return gulp.src([
        'node_modules/rxjs/**/*.js'
    ])
    .pipe(gulp.dest('dist/client/lib/rxjs'))
});

gulp.task('copy:assets', ['clean'], function() {
    return gulp.src(['src/**/*', '!src/**/*.ts'])
        .pipe(gulp.dest('dist'))
});

gulp.task('serve', ['build'], function() {
    browserSync({
        server: {
            baseDir: 'dist/client',            
        },
        port: 5555
    });
    gulp.watch(['src/**/*'], ['buildAndReload']);
});

gulp.task('build', ['compile', 'copy:libs', 'copy:rxjs', 'copy:assets']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);