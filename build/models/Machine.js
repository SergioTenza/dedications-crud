"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var machineSchema = new _mongoose.Schema({
  name: String,
  location: String,
  user: {
    ref: "User",
    type: _mongoose.Schema.Types.ObjectId
  },
  tasks: [{
    ref: "Task",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Machine', machineSchema);

exports["default"] = _default;