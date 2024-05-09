import {config} from "dotenv";
config();
import express from "express";
import colors from "colors"
import ruta from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set("port", process.env.PORT || 3000);

app.use("/", ruta)
export default app;