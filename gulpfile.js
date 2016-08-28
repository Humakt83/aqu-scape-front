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
        .src(['node_modules/@angular/platform-browser/src/browser.d.ts', 'src/**/*.ts'])
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:libs', ['clean'], function() {
    return gulp.src([
        'node_modules/@angular/common/bundles/common.umd.min.js',
        'node_modules/@angular/compiler/bundles/compiler.umd.min.js',
        'node_modules/@angular/core/bundles/core.umd.min.js',
        'node_modules/@angular/http/bundles/http.umd.min.js',
        'node_modules/@angular/platform-browser/bundles/platform-browser.umd.min.js',
        'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/systemjs/dist/system.js',
        'node_modules/rxjs/bundles/Rx.umd.min.js',
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/systemjs/dist/system-polyfills.js'
    ])
        .pipe(gulp.dest('dist/lib'))
});

gulp.task('copy:assets', ['clean'], function() {
    return gulp.src(['src/**/*', '!src/**/*.ts'])
        .pipe(gulp.dest('dist'))
});

gulp.task('serve', ['build'], function() {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    });
    gulp.watch(['src/**/*'], ['buildAndReload']);
});

gulp.task('build', ['compile', 'copy:libs', 'copy:assets']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);
