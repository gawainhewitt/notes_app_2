const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const notes = new NotesModel;

const view = new NotesView(notes);

view.displayNotes();
