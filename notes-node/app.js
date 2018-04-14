console.log('Starting app.js...');

const fs = require('fs'); // pulls in the File System Node module
const _ = require('lodash'); // pulls in the lodash Node package
const yargs = require('yargs');

const notes = require('./notes.js');

let userArgumentOne = userArgumentValidation(process.argv[2]);

function userArgumentValidation (argument) {
    try {
        return argument.toLowerCase();
    } catch (err) {
        console.log(err);

        return 'Invalid Argument';
    }
}

function handleUserArgument(argument) {
    switch (argument) {
        case 'add':
            console.log('Adding Note...');
            // add a note
            break;
        case 'remove':
            console.log('Removing Note...');
            // remove a note
            break;
        case 'list':
            console.log('Listing Notes...');
            // list all notes
            break;
        case 'read':
            console.log('Reading Note...');
            // read a note
            break;
        default:
            console.log('Command Not Found.');
    }
}

handleUserArgument(userArgumentOne);