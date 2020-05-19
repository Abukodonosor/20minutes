const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//enable config variables
require("dotenv").config();

const blogAPIHandlers = require("../api/blogpostAPIHandlers");
const commentAIHandlers = require("../api/commentAPIHandlers");

class Express {
  #host;
  #port;

  #app;

  constructor() {
    console.warn("[Express] Initializing");
    this.#app = express();
    this.#host = process.env.HOST || "localhost";
    this.#port = process.env.PORT || 9000;

    this.#app.use(bodyParser.json());
    this.#app.use(bodyParser.urlencoded({ extended: true }));

    //init routes
    this.#app.use("/blog", blogAPIHandlers);
    this.#app.use("/comment", commentAIHandlers);

    this.#app.use(express.static(path.join(__dirname, "../../client")));
  }

  run() {
    this.#app.get("*", (req, res) => {
      res.sendFile(path.join(`${__dirname}/../index.html`));
    });

    this.#app.listen(this.#port);
    console.warn(`[Express] Listening on http://${this.#host}:${this.#port}`);
  }
}

module.exports = Express;
