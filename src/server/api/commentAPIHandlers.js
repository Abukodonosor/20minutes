const express = require("express");

const router = express.Router();

//Handlers to do CRUD operations
router.post("/create", function (req, res, next) {
  res.json({
    status: "Success",
    message: "",
  });
});

router.post("/update", function (req, res, next) {
  res.json({
    status: "Success",
    message: "",
  });
});

module.exports = router;
