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
            console.log('Adding note...');

            const result = notes.add(argv.title, argv.body);

            if (result !== null && _.has(result, 'title')) {
                console.log('Note addition was successful!\n' +
                    'Here is your new note...');

                console.log(notes.read(result.title));
            }
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