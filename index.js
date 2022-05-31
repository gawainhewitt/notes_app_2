const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const notes = new NotesModel;
notes.addNote('This is an example note');

const view = new NotesView(notes);

view.displayNotes();
