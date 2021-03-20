"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var contactoSchema = new _mongoose.Schema({
  name: String,
  email: String,
  asunto: String,
  mensaje: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Contacto', contactoSchema);

exports["default"] = _default;