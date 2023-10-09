const express = require("express");
const fs = require("fs")


const app = express();

app.get('/', (req,res)=>{
    const page = fs.readFileSync("./index.html","utf-8");

    res.send(page);
})

app.listen(8080,() =>{
    console.log("server");
})