var fs = require("fs");
const path = require("path");

class Post {
  static jsonData = "/postMock.json";

  constructor({ id, title, text }) {}

  update() {}

  save() {}

  static getAll() {
    try {
      var obj = fs.readFileSync(path.join(__dirname, Post.jsonData));
      const result = JSON.parse(obj);
      return result.posts;
    } catch (err) {
      console.error(err, "Failed to load posts JSON");
      return;
    }
  }
}

module.exports = Post;
