const { watch, src, dest, series, lastRun } = require('gulp');
const prettier = require('gulp-prettier');
const eslint = require('@doamatto/gulp-eslint');

/*
 * Confiuguration
 */

/* Source Paths */
const source = {
    scripts: ['src/**/*.js'],
};

/* Iteration Counter */
let counter = 1;

/*
 * Tasks
 */

function defaultTask(callback) {
    console.log('Here be dragons!');

    callback();
}

/* Scripts */

function formatScripts() {
    return src(source.scripts, { since: lastRun(formatScripts) })
        .pipe(prettier())
        .pipe(dest((file) => file.base));
}

function lintScripts() {
    return src(source.scripts, { since: lastRun(lintScripts) })
        .pipe(eslint())
        .pipe(eslint.format());
}

/*
 * Watcher
 */
function showStatus() {
    console.log('\x1b[36m%s\x1b[0m', '✨  Watching ...\n');
}

function clearConsole() {
    if (counter > 2 && Date.now() - lastRun(clearConsole) >= 1000) {
        console.clear();
        showStatus();
    }

    counter++;

    return Promise.resolve();
}

function watchFiles() {
    console.clear();
    showStatus();

    watch(source.scripts, series(clearConsole, formatScripts, lintScripts));
}

/*
 * Exports
 */

exports.default = defaultTask;
exports.watch = watchFiles;
