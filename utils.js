var mkdirp = require('mkdirp');
var fs = require('fs');
var path = require('path');
var readline = require('readline');
var package = require('./package');
/**
 * mkdir -p
 *
 * @param {String} pathName
 * @param {Function} callback
 */
function mkdirP(pathName, callback) {
  mkdirp(pathName, 0755, function (error) {
    if (error) throw new Error(error);
    console.log('    [√] created: ' + pathName);
    if (callback) callback();
  });
}

/**
 * read and load a file content from /templates
 *
 * @param {String} fileName
 * @returns {*}
 */
function loadFile(fileName) {
  return fs.readFileSync(path.join(__dirname, 'templates', fileName), 'utf-8');
}

/**
 * receive string data and write to a file
 *
 * @param {String} path
 * @param {String} data
 * @param {Number} mode
 */
function writeToFile(pathName, data, mode) {
  fs.writeFileSync(pathName, data, {
    mode: mode || 0666
  });
  console.log('    [√] created: ' + pathName);
}

/**
 * determine if the dir is empty and pass a boolean to the callback function
 *
 * @param {String} path
 * @param {Function} callback
 */
function isEmptyDir(path, callback) {
  fs.readdir(path, function (error, files) {
    if (error && 'ENOENT' != error.code) throw new Error(error);
    callback(!files || !files.length);
  });
}

/**
 * determine if launched from cmd and return a boolean
 *
 * @returns {boolean}
 */
function isCmd() {
  return process.platform === 'win32' && process.env._ === undefined;
}

/**
 * make a prompt to STDIN or STDOUT
 *
 * @param message
 * @param callback
 */
function mkPrompt(message, callback) {
  var newPrompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  newPrompt.question(message, function (answer) {
    callback(/^y|yes|ok|true$/i.test(answer));
    newPrompt.close();
  });
}

function finished(appName) {
  var prompt = isCmd() ? '>' : '$';
  console.log('\n');
  console.log('\x1b[32m%s\x1b[0m', '  Successfully generated a new Koa2 RESTFul project - ' + appName + '!\n');
  console.log('\x1b[36m%s\x1b[0m', '    [+] Run the project in DEV mode: ');
  console.log('      %s npm run dev\n', prompt);
  console.log('\x1b[36m%s\x1b[0m', '    [+] Run the project in PRODUCTION mode: ');
  console.log('      %s npm run prod (requires pm2 global installation)\n', prompt);
  console.log('  For more information, please leave for ' + package.homepage);
  console.log('  For bugs or issues, please leave for ' + package.bugs.url);
}

module.exports = {
  mkdirP,
  loadFile,
  writeToFile,
  isEmptyDir,
  mkPrompt,
  finished
}