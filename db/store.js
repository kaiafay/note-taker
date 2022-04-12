const util = require('util');
const fs = require('fs');
const uuid = require('uuid/v1');

// create read file and write file for pathways
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {

};

module.exports = new Store();