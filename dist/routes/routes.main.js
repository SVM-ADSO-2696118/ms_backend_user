"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _message = _interopRequireWildcard(require("../message/message.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var rutaMain = (0, _express.Router)();
rutaMain.get("/home", function (req, res) {
  res.json({
    "Mensaje": _message.yeison.home
  });
  (0, _message["default"])("Hola Home", "green");
});
rutaMain.get("/galery", function (req, res) {
  res.json({
    "Mensaje": _message.yeison.galery
  });
  (0, _message["default"])("Hola Galery", "red");
});
rutaMain.get("/about", function (req, res) {
  res.json({
    "Mensaje": _message.yeison.about
  });
  (0, _message["default"])("Hola About", "yellow");
});
rutaMain.get("/contact", function (req, res) {
  res.json({
    "Mensaje": _message.yeison.contact
  });
  (0, _message["default"])("Hola Contact", "blue");
});
var _default = exports["default"] = rutaMain;