/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('NotesView class', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('there is no notes when starting the view', () => {
    const view = new NotesView;

    expect(document.querySelectorAll('div.notes').length).toBe(0);
  });

  describe('displayNotes', () => {
    it('display a note in the page', () => {
      const model = new NotesModel;
      const view = new NotesView(model);
      model.addNote('Buy milk');
      model.addNote('Go to the gym');

      view.displayNotes();

      expect(document.querySelectorAll('div.notes').length).toBe(2);
      expect(document.querySelector('div.notes').innerText).toEqual('Buy milk');
    })
  })
});