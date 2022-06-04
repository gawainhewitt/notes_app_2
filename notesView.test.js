/**
 * @jest-environment jsdom
 */
const fs = require('fs');

jest.mock("./notesModel");
jest.mock("./notesApi");
const NotesApi = require("./notesApi");
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const api = new NotesApi;
const model = new NotesModel;

describe('NotesView class', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });
  
  describe('addNotes', () => {
    it('adds a typed in note when button clicked and displays it on page', () => {
      model.getNotes.mockReturnValue(['This is a test note']);
      const view = new NotesView(model, api);
      const textBox = document.getElementById('note-input');
      textBox.value = "This is a test note";
      const buttonEl = document.getElementById('add-note');
      buttonEl.click();

      expect(document.getElementsByClassName('notes').length).toBe(1);
      expect(document.getElementsByClassName('notes')[0].innerText).toBe('This is a test note');
      expect(api.createNote).toHaveBeenCalledTimes(1);
    });
    
  });
});