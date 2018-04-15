const fs = require('fs'); // pulls in the File System Node module
const _ = require('lodash'); // pulls in the lodash Node package

/**
 * Adds a new note to notesFile
 *
 * Does NOT allow for notes with duplicate titles!
 *
 * @param title The title of the new note
 * @param body The body of the new note
 * @param notesFile The file path to a notes file. Default is './notes.json'
 */
const add = (title, body, notesFile = './notes.json') => {
    console.log('Adding Note...');

    let notes = getAllNotes(notesFile);

    if (notes.filter(existingNote => existingNote.title === title)) {
        console.log(`NOTE ADDITION FAILED:\n` +
            `A note with the title: ${title}\n` +
            `already exists, please use a different title!`
        );
    } else {
        let newNote = {
            title,
            body,
        };

        notes.push(newNote);

        fs.writeFileSync('./notes.json', JSON.stringify(notes));
    }
};

const remove = (title) => {
    console.log('Removing Note...', title);
};

const list = () => {
    console.log('Listing All Notes...');
};

const read = (title) => {
    console.log('Reading Note...', title);
};

module.exports = {
    add,
    remove,
    list,
    read,
};

/**
 * Returns JSON parsed version of notesFile
 * OR
 * an empty array, if notesFile doesn't exist
 *
 * @param notesFile
 * @returns {*}
 */
function getAllNotes(notesFile) {
    try {
        return JSON.parse(fs.readFileSync(notesFile));
    } catch (err) {
        return [];
    }
}