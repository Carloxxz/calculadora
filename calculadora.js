const express = require ("express");

const app = express();

app.get("/", (req, res) => {
    res.send("prueba 2");
})

app.listen(3000, () => {
    console.log("servidor iniciado");
})