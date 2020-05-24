const fs = require("fs");
const path = require("path");
const data = require("../util/json");

class Comment {
  static jsonData = "/commentMock.json";

  constructor({ id, postId, name, text }) {}

  create() {}

  update() {}

  save() {}

  static getAll() {
    const obj = data.getData(Comment.jsonData);
    return obj.comments;
  }
}

module.exports = Comment;
