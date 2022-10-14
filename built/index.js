"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
var keikat = require("./keikat.json");
console.log(keikat);
app.get("/", function (req, res) {
    res
        .status(200)
        .send("Hint: /api/keikat");
});
app.get("/api", function (req, res) {
    res
        .send("Error 204: No Content");
});
app.get("/api/keikat", function (req, res) {
    res
        .status(200)
        .json(keikat);
});
app.get("*", function (req, res) {
    res
        .status(404)
        .send("Error 404: Not Found");
});
app.listen(80, function () {
    console.log("Server listening");
});
