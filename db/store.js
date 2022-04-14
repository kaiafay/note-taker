const util = require('util');
const fs = require('fs');
const uuid = require('uuid/v1');

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
// delete method
// get notes method
// add notes method
};

module.exports = new Store();