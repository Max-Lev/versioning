var fs = require('fs');

var util = require('util');
// const version = require("../package.json").version;
// console.log(version);
const args = process.argv.slice(2);
const readDir = util.promisify(fs.readdir)
const writeFile = util.promisify(fs.writeFile)
console.log(process.argv);

let conf = {
    version: '0.0.1'
};

const path = require('path');


const distDirPath = path.join(__dirname, '../dist/versioning');

let mainBundleRegexp = /^main.?([a-z0-9]*)?(\.bundle)?.js$/;

readDir(distDirPath).then((files) => {

    const mainBundle = files.find(file => mainBundleRegexp.test(file));

    const mainHash = mainBundle.match(mainBundleRegexp);

    const hashNum = mainHash[1];

    conf = Object.assign({}, conf, { hash: hashNum });

    fs.writeFile(__dirname + '/vars.js',
        'export const conf =' + util.inspect(conf),
        function (err) { return err; });

});


// fs.writeFile(__dirname + '/vars.js',
//     'export const conf =' + util.inspect(conf),
//     function (err) { return err; });





