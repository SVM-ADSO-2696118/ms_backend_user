"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersUser = require("../controllers/controllers.user.js");
var _oauth = require("../middlewares/oauth.js");
var rutaUser = (0, _express.Router)();

// GET = MOSTRAR
rutaUser.get("/user/:id", _controllersUser.showUser);
rutaUser.get("/user", _controllersUser.listUser);

// POST = GUARDAR O CREAR
rutaUser.post("/user", _oauth.verifyToken, _controllersUser.createUser);

// PUT = MODIFICAR DATOS
rutaUser.put("/user", _oauth.verifyToken, _controllersUser.modifyUser);

// DELETE = ELIMINAR DATOS
rutaUser["delete"]("/user", _oauth.verifyToken, _controllersUser.deleteUser);

// LOGIN
rutaUser.post("/login", _controllersUser.logUser);
var _default = exports["default"] = rutaUser;