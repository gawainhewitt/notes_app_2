class NotesApi {
  async loadNotes(callback) {
    try {
      const result = await fetch('http://localhost:3000/notes', );
      const data = await result.json();
      callback(data);
    } catch (error) {
      return null;
    }
  }
}

module.exports = NotesApi;


