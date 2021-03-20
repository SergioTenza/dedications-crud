"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _AgendaEvent = _interopRequireDefault(require("../models/AgendaEvent"));

var panelCtrl = _interopRequireWildcard(require("../controllers/panel.controller"));

var _auth = require("../helpers/auth");

var router = (0, _express.Router)();
router.get('/', _auth.isAuthenticated, panelCtrl.panelHome);
router.get('/', _auth.isAuthenticated, panelCtrl.panelContacto);
router.get('/calendar', _auth.isAuthenticated, panelCtrl.calendarPopulate);
router.get('/calendar/create', _auth.isAuthenticated, panelCtrl.createAgendaEventForm);
router.post('/calendar/create', _auth.isAuthenticated, panelCtrl.createAgendaEvent);
var _default = router;
exports["default"] = _default;