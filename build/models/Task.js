"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var taskSchema = new _mongoose.Schema({
  Inicio: String,
  duracion: String,
  logo: String,
  skin: String,
  tema: String,
  texto: String,
  urls: [String],
  machine: {
    ref: "Machine",
    type: _mongoose.Schema.Types.ObjectId
  },
  user: {
    ref: "User",
    type: _mongoose.Schema.Types.ObjectId
  },
  mesas: [{
    name: String,
    participants: [String]
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Task', taskSchema);

exports["default"] = _default;