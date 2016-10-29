"use strict";

var mongoose = require("mongoose");

module.exports = {
  user: mongoose.Schema({
    username: String,
    email: String
  })
};
