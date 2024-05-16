import bcrypt from "bcrypt";
import { success, error } from "../message/message.js";
import pool from "../config/db.mysql.js";
import {config} from "dotenv"
import jwt from "jsonwebtoken";
config();


// INGRESAR DATO
export const createUser = async(req, res) => {
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const claveSinCifrar = req.body.clave;
    
    try {
        const hash = await bcrypt.hash(claveSinCifrar, 2);
        const clave = hash;
        const respuesta = await pool.query(`CALL SP_CREARUSUARIO('${nombre}', '${usuario}', '${clave}');`);
        if(respuesta[0].affectedRows == 1){
            success(req, res, 200, "Usuario creado");     
        }else{
            success(req, res, 200, "No se pudo agregar");
        }
    } catch (err) {
        error(req, res, 400, err)
    }
};

// MOSTRAR USUARIO
export const showUser = async(req, res) => {

    let id = req.params['id']

    try {
        const respuesta = await pool.query(`CALL SP_MOSTRARUSUARIO(${id}); `)
        success(req,res, 200, respuesta[0]); 
    } catch (err) {
        error(req,res, 500, err)
    }
};

// MOSTRAR USUARIOS
export const listUser = async(req, res) => {
    try {
        const respuesta = await pool.query(`CALL SP_LISTARUSUARIO();`)
        success(req,res, 200, respuesta[0]); 
    } catch (err) {
        error(req,res, 500, err)
    }
};

// MODIFICAR DATO
export const modifyUser = async(req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const claveSinCifrar = req.body.clave;
    const clave = claveSinCifrar;
    try {
        const respuesta = await pool.query(`CALL SP_EDITARUSUARIO(${id} ,'${nombre}', '${usuario}', '${clave}');`);
        if(respuesta[0].affectedRows == 1){
            success(req, res, 200, "Usuario modificado "+ usuario);     
        }else{
            success(req, res, 200, "No se pudo modificar");
        }
    } catch (err) {
        error(req, res, 400, err)
    }
};

// ELIMINAR DATO
export const deleteUser = async(req, res) => {
    const id = req.body.id;

    try {
        const respuesta = await pool.query(`CALL SP_ELIMINARUSUARIO(${id});`);
        if(respuesta[0].affectedRows == 1){
            success(req, res, 200, "Usuario eliminado ");     
        }else{
            success(req, res, 200, "No se pudo eliminar");
        }
    } catch (err) {
        error(req, res, 400, err)
    }
};

export const logUser = async(req, res) =>{
    const{usuario, clave} = req.body;
    const hash = await bcrypt.hash(clave, 2);
    try {
        const respuesta = await pool.query(`CALL SP_BUSCARUSUARIO('${usuario}')`);
        if (respuesta[0][0] == 0) {
            error(req, res, 404, "Usuario no existe");
            return;
        }
        const match = await bcrypt.compare(clave, respuesta[0][0][0].CLAVE)
        if (!match) {
            error(req, res, 401, "No está autorizado")
        }

        let payload = {
            "usuario": usuario,
            "nombre": respuesta[0][0][0].NOMBRE
        };

        let token = await jwt.sign(payload, 
            process.env.TOKEN_PRIVATEKEY, 
            {
                expiresIn: process.env.TOKEN_EXPIRES_IN
            }) ;

        success(req, res, 200, {token});


    } catch (err) {
        error(req, res, 500, "Error en el servidor, por favor intente de nuevo");

    }
};