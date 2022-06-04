class NotesApi {
  async loadNotes(callback) {
    try {
      const result = await fetch('http://localhost:3000/notes');
      const data = await result.json();
      callback(data);
    } catch (error) {
      callback(null);
    }
  }
  // createNote(note) {
  //   fetch('http://localhost:3000/notes', {
  //     method: "POST",   // method type
  //     // Adding body or contents to send
  //     body: JSON.stringify({
  //         content: note 
  //     }),
      
  //     // Adding headers to the request
      
  //     headers: {
  //         "Content-type": "application/json; charset=UTF-8"
  //     }
  //   })
  //   // Converting to JSON
  //   .then(response => response.json())
 
  //   // Displaying results to console
  //   .then(json => console.log(json));
  // }

  async createNote(note) {
    const response = await fetch('http://localhost:3000/notes', {
      method: "POST",   // method type

      // Adding headers to the request
      
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      // Adding body or contents to send
      body: JSON.stringify({
          content: note 
      })
      
    });
    const data = await response.json();
    console.log(data);
  }

}

module.exports = NotesApi;


