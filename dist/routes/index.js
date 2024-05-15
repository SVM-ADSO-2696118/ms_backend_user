"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routesMain = _interopRequireDefault(require("./routes.main.js"));
var _routesUsers = _interopRequireDefault(require("./routes.users.js"));
var ruta = (0, _express.Router)();
ruta.use("/", _routesMain["default"]);
ruta.use("/api", _routesUsers["default"]);
var _default = exports["default"] = ruta;