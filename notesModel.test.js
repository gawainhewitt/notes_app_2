const NotesModel = require('./notesModel')

describe('Notes Model', () => {
  it('Returns an empty to do list', () => {
    const notes = new NotesModel;
    
    expect(notes.getNotes()).toEqual([]);
  });

  it('Adds a to do item to the list', () => {
    const notes = new NotesModel;
    notes.addNote('Go to the gym');

    expect(notes.getNotes()).toEqual(['Go to the gym'])
  })

  it('Empties the to do list', () => {
    const notes = new NotesModel;
    notes.addNote('Go to the gym');
    notes.addNote('Buy milk');
    notes.reset();

    expect(notes.getNotes()).toEqual([]);
  });
});