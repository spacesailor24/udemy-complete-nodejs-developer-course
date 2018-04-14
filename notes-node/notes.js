console.log('Starting notes.js...');

const add = (title, body) => {
    console.log('Adding Note...', title, body);
};

const remove = (title) => {
    console.log('Removing Note...', title);
};

const list = () => {
    console.log('Listing All Notes...');
};

const getNote = (title) => {
    console.log('Getting Note...', title);
};

module.exports = {
    add,
    remove,
    list,
    getNote,
};