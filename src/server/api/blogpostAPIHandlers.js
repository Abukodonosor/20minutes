const express = require("express");
const router = express.Router();

const Blogpost = require("../service/Blogpost/Blogpost");

router.post("/posts", function (req, res, next) {
  const shorterBlogPostsResult = Blogpost.getPostsOverview();
  res.json({ status: "Success", result: shorterBlogPostsResult, message: "" });
});

router.get("/post/:id", function (req, res, next) {
  const { id } = req.params;

  if (!id) {
    return res.json({
      status: "Fail",
      result: {},
      message: "Post id is required !!!",
    });
  }

  const postResult = Blogpost.getPostById(id);

  res.json({
    status: "Success",
    result: postResult,
    message: "",
  });
});

router.get("/post/:id/comments", function (req, res, next) {
  const { id } = req.params;

  if (!id) {
    return res.json({
      status: "Fail",
      result: {},
      message: "Post id is required !!!",
    });
  }

  const commentsResult = Blogpost.getCommentsForPostId(id);

  res.json({
    status: "Success",
    result: commentsResult,
    message: "",
  });
});

module.exports = router;
