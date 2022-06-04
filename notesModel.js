class NotesModel {
  constructor() {
    this.items = []
  }

  getNotes() {
    return this.items
  }

  addNote(item) {
   this.items.push(item) 
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