"use strict";

let mongoose = require("mongoose");
let schemas = require("./schemas");

module.exports = {
  user: mongoose.model("User", schemas.user)
};
