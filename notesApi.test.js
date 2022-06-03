const NotesApi = require('./notesApi');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(['This note is coming from the server']),
  })
);


describe('notesApi class', () => {
  it('calls fetch and loads note from server', async () => {
    const api = new NotesApi();
    let result;
    await api.loadNotes((notes) => {
      result = notes;
    });
    expect(result[0]).toBe('This note is coming from the server');
    })
});


