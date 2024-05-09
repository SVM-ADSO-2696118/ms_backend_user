import { Router } from "express";
import msg from "../message/message.js";
import { yeison } from "../message/message.js";

const rutaMain = Router();

rutaMain.get("/home", (req, res) => {
    res.json({
        "Mensaje": yeison.home
    })
    msg("Hola Home", "green");
});

rutaMain.get("/galery", (req, res) => {
    res.json({
        "Mensaje": yeison.galery
    })
    msg("Hola Galery", "red");

});

rutaMain.get("/about", (req, res) => {
    res.json({
        "Mensaje": yeison.about
    })
    msg("Hola About", "yellow");

});

rutaMain.get("/contact", (req, res) => {
    res.json({
        "Mensaje": yeison.contact
    })
    msg("Hola Contact", "blue");
});

export default rutaMain;