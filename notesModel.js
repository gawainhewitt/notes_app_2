class NotesModel {
  constructor(api) {
    this.api = api;
    this.items = []
  }

  getNotes() {
    return this.items
  }

  addNote(item) {
   this.items.push(item) 
   this.api.createNote(item);
  }

  reset() {
    this.items = []
  }

  setNotes(notes) {
    notes.forEach(element => {
      this.items.push(element);
    });
  }

}

module.exports = NotesModel;