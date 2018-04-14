console.log('Starting app...');

const fs = require('fs'); // pulls in the File System Node module
const os = require('os'); // pulls in the OS Node module

var filename = 'greetings.txt';
var user = os.userInfo();
var greeting = `Hello World! Welcome to ${user.username}\'s terminal!\n`;

fs.appendFile(filename, greeting, function (err) {
    if (err) throw err;
});