var path = require('path')
var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var cssWrap = require('gulp-css-wrap')
// var merge = require('merge-stream');

// 当前目录下运行 npx glup
gulp.task('default',function () {
    return gulp.src(path.resolve('./theme-blue/theme/index.css'))
    /* 找需要添加命名空间的css文件，支持正则表达式 */
    .pipe(cssWrap({
        selector: '.theme-blue' /* 添加的命名空间 */
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist')); /* 存放的目录 */
 
    // return gulp.src(path.resolve('./theme-red/theme/index.css'))
    // /* 找需要添加命名空间的css文件，支持正则表达式 */
    // .pipe(cssWrap({
    //     selector: '.theme-red' /* 添加的命名空间 */
    // }))
    // .pipe(cleanCSS())
    // .pipe(gulp.dest('./dist')); /* 存放的目录 */
})