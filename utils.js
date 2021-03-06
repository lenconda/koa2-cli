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
function mkdirP(pathName) {
  return new Promise(function (resolve, reject) {
    mkdirp(pathName, 0755, function (error) {
      if (error) reject(error);
      console.log('    [√] created: ' + pathName);
      resolve();
    });
  });
}

/**
 * read and load a file content from /templates
 *
 * @param {String} fileName
 * @returns {*}
 */
function loadFile(filePath) {
  return fs.readFileSync(path.join(__dirname, filePath), 'utf-8');
}

/**
 * receive string data and write to a file
 *
 * @param {String} path
 * @param {String} data
 * @param {Number} mode
 */
function writeToFile(pathName, data, mode) {
  return new Promise(function (resolve, reject) {
    fs.writeFileSync(pathName, data, {
      mode: mode || 0666
    });
    console.log('    [√] created: ' + pathName);
    resolve();
  });
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
    newPrompt.close();
    callback(/^y|yes|ok|true$/i.test(answer));
  });
}

function finished(appName, typescript) {
  var prompt = isCmd() ? '>' : '$';
  console.log('\n');
  console.log('\x1b[32m%s\x1b[0m', '  Successfully generated a new Koa2 RESTFul project - ' + appName + '!\n');
  if (typescript) {
    console.log('\x1b[36m%s\x1b[0m', '    [+] Run the project in DEV mode: ');
    console.log('      %s npm start\n', prompt);
    console.log('\x1b[36m%s\x1b[0m', '    [+] Run the project in PRODUCTION mode: ');
    console.log('      %s npm run serve (requires pm2 global installation)\n', prompt);
    console.log('\x1b[36m%s\x1b[0m', '    [+] Build the project: ');
    console.log('      %s npm run build\n', prompt);
    console.log('\x1b[36m%s\x1b[0m', '    [+] Clean the project: ');
    console.log('      %s npm run clean\n', prompt);
    console.log('\x1b[36m%s\x1b[0m', '    [+] Lint the project: ');
    console.log('      %s npm run lint\n', prompt);
    console.log('  The project is written in TypeScript.\n  To read TypeScript documentation, please leave for https://www.typescriptlang.org/docs/home.html\n');
  } else {
    console.log('\x1b[36m%s\x1b[0m', '    [+] Run the project in DEV mode: ');
    console.log('      %s npm run dev\n', prompt);
    console.log('\x1b[36m%s\x1b[0m', '    [+] Run the project in PRODUCTION mode: ');
    console.log('      %s npm run prod (requires pm2 global installation)\n', prompt);
  }
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
