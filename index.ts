import express = require("express");
import cors = require("cors");

const app = express(); 
app.use(cors());

import * as keikat from "./keikat.json"
console.log(keikat);

app.get("/", (req, res)=>{
    res
    .status(200)
    .send("Hint: /api/keikat");
});

app.get("/api",(req, res)=>{
    res
    .send("Error 204: No Content")
})

app.get("/api/keikat", (req,res)=>{
    res
    .status(200)
    .json(keikat);
});

app.get ("*", (req, res) =>{
    res
    .status(404)
    .send("Error 404: Not Found")
})

app.listen(80, ()=>{
    console.log(`Server listening`);
})
