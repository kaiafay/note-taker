const util = require('util');
const fs = require('fs');
const {v1} = require('uuid');

// create read file and write file for pathways
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    // read method
    read() {
        return readFileAsync('db/db.json', 'utf-8');
    };

    // write method
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    };

    // get notes method
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;

            // if no notes, send back empty array
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        });
    };

    // add note method
    addNote(note) {
        // destructure and set note title and text to variable
        const { title, text } = note;

        // check if note is missing title or text
        if (!title || !text) {
            throw new Error("Note 'title' and 'text' must be filled in!");
        }

        // add unique id using uuid 
        const newNote = { title, text, id: v1() };

        // get notes, add new note, write all notes again, return new note
        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote);
    };
    
    // delete note method
    deleteNote(id) {
        // get notes, remove the note with the corresponding id, write remaining notes again
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filteredNotes) => this.write(filteredNotes));
    };
};

module.exports = new Store();