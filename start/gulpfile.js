var gulp = require("gulp");
var server = require("gulp-webserver");
gulp.task("server", function() {
    return gulp.src("./src")
        .pipe(server({
            port: 8090,
            open: true,
            livereload: true,
            proxies: [{
                    source: "/findThing",
                    target: "http://localhost:3000/findThing"
                },
                {
                    source: "/addWord",
                    target: "http://localhost:3000/addWord"
                },
                {
                    source: "/findWord",
                    target: "http://localhost:3000/findWord"
                }
            ]
        }))
})