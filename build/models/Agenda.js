"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var agendaSchema = new _mongoose.Schema({
  tasks: [{
    ref: "Task",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Agenda', agendaSchema);

exports["default"] = _default;