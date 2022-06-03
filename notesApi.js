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


// class GitHubApi {  
//   async getRepoInfo(repoName, callback) {
//     try {
//       const result = await fetch(
//         `https://api.github.com/repos/${repoName}`
//       );
//       const data = await result.json();
//       console.log(data);
//       callback(data);
//     } catch (error) {
//       return null;
//     }
//   }
// }
