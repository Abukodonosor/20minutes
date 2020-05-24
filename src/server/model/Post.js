const fs = require("fs");
const path = require("path");
const data = require("../util/json");

class Post {
  static jsonData = "/postMock.json";

  constructor({}) {}

  update() {}

  save() {}

  static getAll() {
    const obj = data.getData(Post.jsonData);
    return obj.posts;
  }

  static getPostById(id) {
    const obj = data.getData(Post.jsonData);
    const postResult = obj.posts.filter((el) => el.id === id);
    return postResult;
  }
}

module.exports = Post;
