"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calendarPopulateById = exports.calendarPopulate = exports.panelContacto = exports.panelHome = exports.createAgendaEventForm = exports.createAgendaEvent = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _AgendaEvent = _interopRequireDefault(require("../models/AgendaEvent"));

var _passport = _interopRequireDefault(require("passport"));

var _auth = require("../helpers/auth");

var createAgendaEvent = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, title, start, end, allday, url, backgroundColor, borderColor, date, d, m, y, newAgendaEvent, savedAgendaEvent;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, start = _req$body.start, end = _req$body.end, allday = _req$body.allday, url = _req$body.url, backgroundColor = _req$body.backgroundColor, borderColor = _req$body.borderColor;
            date = new Date();
            d = date.getDate(), m = date.getMonth(), y = date.getFullYear();
            newAgendaEvent = new _AgendaEvent["default"]({});
            _context.next = 6;
            return newAgendaEvent.save();

          case 6:
            savedAgendaEvent = _context.sent;
            res.status(200).json({
              savedAgendaEvent: savedAgendaEvent
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createAgendaEvent(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createAgendaEvent = createAgendaEvent;

var createAgendaEventForm = function createAgendaEventForm(req, res) {
  //let name = a => a != null ? user.username : 'Visitante';        
  res.render('panelCreateAgendaEvent', {
    title: 'Crear evento',
    cabecera: 'Crear evento',
    username: req.user.username
  });
};

exports.createAgendaEventForm = createAgendaEventForm;

var panelHome = function panelHome(req, res) {
  res.render('panel', {
    title: 'Main panel',
    cabecera: 'Main',
    username: req.user.username
  });
};

exports.panelHome = panelHome;

var panelContacto = function panelContacto(req, res) {
  res.render('panel', {
    title: 'Main panel',
    cabecera: 'Main',
    username: req.user.username
  });
};

exports.panelContacto = panelContacto;

var calendarPopulate = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var mongoAgenda;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _AgendaEvent["default"].find();

          case 3:
            mongoAgenda = _context2.sent;
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 9:
            res.render('panelCalendar', {
              cabecera: 'Agenda',
              username: req.user.username,
              mongoEvents: mongoAgenda
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function calendarPopulate(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.calendarPopulate = calendarPopulate;

var calendarPopulateById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var mongoAgenda;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return AgendaEvent.findById(req.user.id);

          case 3:
            mongoAgenda = _context3.sent;
            ;
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

          case 10:
            res.render('panelCalendar', {
              cabecera: 'Agenda',
              username: req.user.username,
              mongoEvents: mongoAgenda
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function calendarPopulateById() {
    return _ref3.apply(this, arguments);
  };
}();

exports.calendarPopulateById = calendarPopulateById;