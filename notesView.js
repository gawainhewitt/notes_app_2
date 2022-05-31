class NotesView {
  constructor(model){
    this.model = model;

    const button = document.getElementById('add-note');
    button.addEventListener('click', () => {
      this.clearDisplay();
      const input = document.getElementById('note-input');
      this.model.addNote(input.value);
      this.displayNotes();
      input.value = '';
    })
  }

  displayNotes() {
    this.model.getNotes().forEach(note => {
      const item = document.createElement('div');
      item.className = 'notes';
      item.innerText = note;

      document.querySelector('div#main-container').append(item);
    });
  }
  clearDisplay() {
    const arrayNotes = document.getElementsByClassName('notes')
    Array.from(arrayNotes).forEach(note => {
      note.remove();
    });
  }
}

module.exports = NotesView;
