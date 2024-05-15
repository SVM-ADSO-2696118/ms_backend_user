"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showUser = exports.modifyUser = exports.logUser = exports.listUser = exports.deleteUser = exports.createUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _message = require("../message/message.js");
var _dbMysql = _interopRequireDefault(require("../config/db.mysql.js"));
var _dotenv = require("dotenv");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
(0, _dotenv.config)();

// INGRESAR DATO
var createUser = exports.createUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var nombre, usuario, claveSinCifrar, hash, clave, respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          nombre = req.body.nombre;
          usuario = req.body.usuario;
          claveSinCifrar = req.body.clave;
          _context.prev = 3;
          _context.next = 6;
          return _bcrypt["default"].hash(claveSinCifrar, 2);
        case 6:
          hash = _context.sent;
          clave = hash;
          _context.next = 10;
          return _dbMysql["default"].query("CALL SP_CREARUSUARIO('".concat(nombre, "', '").concat(usuario, "', '").concat(clave, "');"));
        case 10:
          respuesta = _context.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _message.success)(req, res, 200, "Usuario creado");
          } else {
            (0, _message.success)(req, res, 200, "No se pudo agregar");
          }
          _context.next = 17;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
          (0, _message.error)(req, res, 400, _context.t0);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 14]]);
  }));
  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// MOSTRAR USUARIO
var showUser = exports.showUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params['id'];
          _context2.prev = 1;
          _context2.next = 4;
          return _dbMysql["default"].query("CALL SP_MOSTRARUSUARIO(".concat(id, "); "));
        case 4:
          respuesta = _context2.sent;
          (0, _message.success)(req, res, 200, respuesta[0]);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          (0, _message.error)(req, res, 500, _context2.t0);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return function showUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// MOSTRAR USUARIOS
var listUser = exports.listUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _dbMysql["default"].query("CALL SP_LISTARUSUARIO();");
        case 3:
          respuesta = _context3.sent;
          (0, _message.success)(req, res, 200, respuesta[0]);
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          (0, _message.error)(req, res, 500, _context3.t0);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function listUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// MODIFICAR DATO
var modifyUser = exports.modifyUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, nombre, usuario, claveSinCifrar, clave, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.body.id;
          nombre = req.body.nombre;
          usuario = req.body.usuario;
          claveSinCifrar = req.body.clave;
          clave = claveSinCifrar;
          _context4.prev = 5;
          _context4.next = 8;
          return _dbMysql["default"].query("CALL SP_EDITARUSUARIO(".concat(id, " ,'").concat(nombre, "', '").concat(usuario, "', '").concat(clave, "');"));
        case 8:
          respuesta = _context4.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _message.success)(req, res, 200, "Usuario modificado " + usuario);
          } else {
            (0, _message.success)(req, res, 200, "No se pudo modificar");
          }
          _context4.next = 15;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](5);
          (0, _message.error)(req, res, 400, _context4.t0);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[5, 12]]);
  }));
  return function modifyUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// ELIMINAR DATO
var deleteUser = exports.deleteUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.body.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _dbMysql["default"].query("CALL SP_ELIMINARUSUARIO(".concat(id, ");"));
        case 4:
          respuesta = _context5.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _message.success)(req, res, 200, "Usuario eliminado ");
          } else {
            (0, _message.success)(req, res, 200, "No se pudo eliminar");
          }
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          (0, _message.error)(req, res, 400, _context5.t0);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function deleteUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var logUser = exports.logUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body, usuario, clave, hash, respuesta, match, payload, token;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body = req.body, usuario = _req$body.usuario, clave = _req$body.clave;
          _context6.next = 3;
          return _bcrypt["default"].hash(clave, 2);
        case 3:
          hash = _context6.sent;
          _context6.prev = 4;
          _context6.next = 7;
          return _dbMysql["default"].query("CALL SP_BUSCARUSUARIO('".concat(usuario, "')"));
        case 7:
          respuesta = _context6.sent;
          if (!(respuesta[0][0] == 0)) {
            _context6.next = 11;
            break;
          }
          (0, _message.error)(req, res, 404, "Usuario no existe");
          return _context6.abrupt("return");
        case 11:
          _context6.next = 13;
          return _bcrypt["default"].compare(clave, respuesta[0][0][0].CLAVE);
        case 13:
          match = _context6.sent;
          if (!match) {
            (0, _message.error)(req, res, 401, "No está autorizado");
          }
          payload = {
            "usuario": usuario,
            "nombre": respuesta[0][0][0].NOMBRE
          };
          _context6.next = 18;
          return _jsonwebtoken["default"].sign(payload, process.env.TOKEN_PRIVATEKEY, {
            expiresIn: process.env.TOKEN_EXPIRES_IN
          });
        case 18:
          token = _context6.sent;
          (0, _message.success)(req, res, 200, {
            token: token
          });
          _context6.next = 25;
          break;
        case 22:
          _context6.prev = 22;
          _context6.t0 = _context6["catch"](4);
          _context6.t0(req, res, 500, "Error en el servidor, por favor intente de nuevo");
        case 25:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[4, 22]]);
  }));
  return function logUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();