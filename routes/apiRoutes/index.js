// dependencies 
const express = require('express');
const router = express.Router();
// store class
const store = require('../../db/store');

// returns all notes
router.get('/notes', (req, res) => {
    // run getNotes() method
    store.getNotes()
         .then((notes) => {
        // return response in json format
         return res.json(notes)
        })
        // if error, return status 500 with error
        .catch((err) => res.status(500).json(err));
});

// creates note
router.post('/notes', (req, res) => {
    // run addNote() method
    store.addNote(req.body)
         .then((note) => res.json(note))
         .catch((err) => res.status(500).json(err));
});

// deletes note
router.delete('/notes/:id', (req, res) => {
    // run deleteNote() method with req id as a parameter
    store.deleteNote(req.params.id)
         .then((note) => res.json({ ok: true }))
         .catch((err) => res.status(500).json(err));
});

module.exports = router;