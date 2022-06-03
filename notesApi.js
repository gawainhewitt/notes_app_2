class NotesApi {
  async loadnotes(url, callback) {
    try {
      const result = await fetch(url);
      const data = await result.json();
      callback(data);
    } catch (error) {
      return null;
    }
  }
}

module.exports = NotesApi;


