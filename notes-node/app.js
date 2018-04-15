const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

let argv = yargs.argv;
let userArgumentOne = userArgumentValidation(argv._[0]);

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
            notes.add(argv.title, argv.body);
            break;
        case 'remove':
            notes.remove(argv.title);
            break;
        case 'list':
            notes.list();
            break;
        case 'read':
            notes.read(argv.title);
            break;
        default:
            console.log('Command Not Found.');
    }
}

handleUserArgument(userArgumentOne);