const express = require("express");
const cors = require("cors");

const app = express(); 
app.use(cors());
const keikkaData =
{
    700: "Eloton",
    701:"Elvytys"
}

app.get("/", (req, res)=>{
    res
    .status(200)
    .send("Hint: /api/keikat");
});

app.get("/api",(req, res)=>{
    res
    .status(204)
    .send("Hint: /api/keikat")
})

app.get("/api/keikat", (req,res)=>{
    res
    .status(200)
    .json(keikkaData);
});

app.listen(process.env.PORT || 80, ()=>{
    console.log(`Server listening`);
})
