const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe('notesApi class', () => {
  it('calls fetch and loads note from server', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify(['This note is coming from the server']));
    let result;
    await api.loadNotes((notes) => {
      result = notes;
    });
    expect(result[0]).toBe('This note is coming from the server');
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/notes');
    expect(fetch).toHaveBeenCalledTimes(1);
    })
  it('handles exception with null', async () => {
    fetch.mockReject(() => Promise.reject('API failure'))
    const api = new NotesApi();
    let result;
    await api.loadNotes((notes) => {
      result = notes;
    });
    expect(result).toBe(null);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/notes');
    expect(fetch).toHaveBeenCalledTimes(1);

  })
});
  
  
  

// manual mocks below vvvv

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(['This note is coming from the server']),
//   })
// );

// beforeEach(() => {
//   fetch.mockClear();
// });


// describe('notesApi class', () => {
//   it('calls fetch and loads note from server', async () => {
//     const api = new NotesApi();
//     let result;
//     await api.loadNotes((notes) => {
//       result = notes;
//     });
//     expect(result[0]).toBe('This note is coming from the server');
//     expect(fetch).toHaveBeenCalledWith('http://localhost:3000/notes');
//     expect(fetch).toHaveBeenCalledTimes(1);
//     })
//   it('handles exception with null', async () => {
//     fetch.mockImplementationOnce(() => Promise.reject('API failure'))
//     const api = new NotesApi();
//     let result;
//     await api.loadNotes((notes) => {
//       result = notes;
//     });
//     expect(result).toBe(null);
//     expect(fetch).toHaveBeenCalledWith('http://localhost:3000/notes');
//     expect(fetch).toHaveBeenCalledTimes(1);

//   })
// });


