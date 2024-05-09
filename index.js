import app from "./app/app.js";
app.listen(app.get("port"), () => {
    console.log(`http://localhost:${app.get("port")}`);
})