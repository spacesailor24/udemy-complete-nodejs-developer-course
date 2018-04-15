const fs = require('fs'); // pulls in the File System Node module
const _ = require('lodash'); // pulls in the lodash Node package

/**
 * Adds a new note to notesFile
 *
 * @NOTE Does NOT allow for notes with duplicate titles!
 *
 * @param title The title of the new note
 * @param body The body of the new note
 * @param notesFile The file path to a notes file. Default is './notes.json'
 */
const add = (title, body, notesFile = './notes.json') => {
    let notes = getAllNotesFromFile(notesFile);

    // Checking for duplicate titles in notes
    if (_.isEmpty(searchNotesForTitle(notes, title))) {
        let newNote = {
            title,
            body,
        };

        notes.push(newNote);

        saveNotesToFile(notesFile, notes);

        return newNote;
    } else {
        console.log(`NOTE ADDITION FAILED:\n` +
            `A note with the title: ${title}\n` +
            `already exists, please use a different title!`
        );

        return null;
    }
};

const remove = (title) => {
    //
};

const list = () => {
    //
};

const read = (noteTitle, notesFile = './notes.json') => {
    const notes = getAllNotesFromFile(notesFile);

    const foundNote = searchNotesForTitle(notes, noteTitle)[0];

    return `Note Title: ${foundNote.title}` +
        '\n-------------------------------------\n' +
        `Note Body: ${foundNote.body}`
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
const getAllNotesFromFile = (notesFile) => {
    try {
        return JSON.parse(fs.readFileSync(notesFile));
    } catch (err) {
        return [];
    }
};

/**
 * Saves notes to notesFile
 *
 * @NOTE This includes JSON.stringify, so notes can be a JavaScript array or object
 *
 * @param notesFile
 * @param notes
 */
const saveNotesToFile = (notesFile, notes) => {
    fs.writeFileSync(notesFile, JSON.stringify(notes));
};

/**
 * Searches notes for a note with title matching noteTitle
 *
 * @param notes is existing notes
 * @param noteTitle
 * @returns array[] is an array of matches
 */
const searchNotesForTitle = (notes, noteTitle) => {
    return notes.filter(existingNote => existingNote.title === noteTitle);
};