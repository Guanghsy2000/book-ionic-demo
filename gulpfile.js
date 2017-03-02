var gulp = require('gulp')
var browser = require('browser-sync').create()

gulp.task('browser',function(){
    browser.init({
        server:{
            baseDir:'./'
        },
        port:8081
    })

    gulp.watch(['./dist/**/*.*','./index.html','./main.js'],function(){
        browser.reload()
    })
    gulp.watch(['./dist/lib/css/*.css'],function(){
        browser.reload()
    })
})


