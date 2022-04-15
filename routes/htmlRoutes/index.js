// dependencies
const express = require('express');
const path = require('path');
const router = express.Router();
// store class
const store = require('../../db/store');

// sends notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// all other routes send index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;