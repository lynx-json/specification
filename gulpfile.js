var gulp = require('gulp');
var run = require('gulp-run');
var del = require('del');

gulp.task('clean', function(cb) {
	del("./out", cb);
});

gulp.task('build-html', ['clean'], function(cb) {
	var cmd = "gitbook build --format page . -o ./out/html";
	run(cmd).exec(cb);
});

gulp.task('build-epub', ['clean'],  function(cb){
	var cmd = "gitbook epub -v --format ebook --cover ./cover.jpg -o ./out/book.epub";
	run(cmd).exec(cb);
});

gulp.task('build-pdf', ['build-html'], function(cb) {
	var cmd = "ebook-convert ./out/html/index.html ./out/book.pdf " +
	"--cover=./cover.jpg --title=\"Lynx JSON Media Type\" " +
	"--comments=\"The media type specification\" " +
	"--margin-left=62 --margin-right=62 --margin-top=36 --margin-bottom=36 " +
	"--pdf-default-font-size=12 --pdf-mono-font-size=12 " +
	"--paper-size=a4 --page-breaks-before=/ " +
	"--level1-toc=\"descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' book-chapter-1 ')]\" " +
	"--level2-toc=\"descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' book-chapter-2 ')]\" " +
	"--level3-\"toc=descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' book-chapter-3 ')]\"";

	run(cmd).exec(cb);
});

gulp.task('build', ['build-pdf', 'build-epub']);

gulp.task('default', ['build']);
