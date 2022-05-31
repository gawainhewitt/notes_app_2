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
    });
  });
  
  describe('addNotes', () => {
    it('click adds a note', () => {
      const model = new NotesModel;
      const view = new NotesView(model);

      const textBox = document.getElementById('note-input');
      textBox.value = "This is a test note"
      const buttonEl = document.getElementById('add-note');
      buttonEl.click();

      expect(document.getElementsByClassName('notes').length).toBe(1);
      expect(document.getElementsByClassName('notes')[0].innerText).toBe('This is a test note');
    });
    it('clicking twice will remove the previous display', () => {
      const model = new NotesModel;
      const view = new NotesView(model);

      const textBox = document.getElementById('note-input');
      textBox.value = "This is a test note"
      const buttonEl = document.getElementById('add-note');
      buttonEl.click();
      buttonEl.click();

      console.log(model.getNotes());

      expect(document.getElementsByClassName('notes').length).toBe(2);
    });
  });
});