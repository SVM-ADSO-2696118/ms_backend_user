import { Router } from "express";
import { createUser, 
    deleteUser, listUser, 
    modifyUser, showUser, 
    logUser } from "../controllers/controllers.user.js";
import { verifyToken } from "../middlewares/oauth.js";

const rutaUser = Router();


// GET = MOSTRAR
rutaUser.get("/user/:id", showUser);
rutaUser.get("/user", listUser);

// POST = GUARDAR O CREAR
rutaUser.post("/user", verifyToken, createUser);

// PUT = MODIFICAR DATOS
rutaUser.put("/user", verifyToken, modifyUser);

// DELETE = ELIMINAR DATOS
rutaUser.delete("/user", verifyToken, deleteUser);

// LOGIN
rutaUser.post("/login", logUser);

export default rutaUser;