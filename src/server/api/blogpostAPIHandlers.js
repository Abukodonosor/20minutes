const express = require("express");

const router = express.Router();

router.post("/posts", function (req, res, next) {
  const postParam = req.body.id;
  // render a regular page
  console.log("AAAAAA");
  res.json(`I received your POST request. This is what you sent me`);
});

// http://localhost:3000/blog/post/dqwdqwdqwd
router.get("/post/:id", function (req, res, next) {
  const getParam = req.params.id;
  res.json({
    status: "Success",
    message: "You submitted registration formulary !!",
  });
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.post("/post/:id/comments", function (req, res, next) {
  // render a regular page
  console.log(req.params.id);
  res.json({
    status: "Success",
    message: "Best route ever",
  });
});

module.exports = router;
