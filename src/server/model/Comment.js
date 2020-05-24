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

  static getCommentsByPostId(id) {
    const obj = data.getData(Comment.jsonData);
    const commentsResult = obj.comments.filter((el) => el.post_id === id);
    return commentsResult;
  }
}

module.exports = Comment;
