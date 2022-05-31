class NotesView {
  constructor(model){
    this.model = model;
  }

  displayNotes() {
    this.model.getNotes().forEach(note => {
      const item = document.createElement('div');
      item.className = 'notes';
      item.innerText = note;

      document.querySelector('div#main-container').append(item);
    });
  }
}

module.exports = NotesView;
