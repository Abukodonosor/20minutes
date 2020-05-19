const express = require("express");

const router = express.Router();

// a middleware sub-stack that handles GET requests to the /user/:id path
router.post("/create", function (req, res, next) {
  // render a regular page
  console.log("AAAAAA");
  res.json({
    status: "Success",
    message: "You submitted registration formulary !!",
  });
});

// handler for the /user/:id path, which renders a special page
router.post("/update", function (req, res, next) {
  console.log(req.params.id);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

module.exports = router;
