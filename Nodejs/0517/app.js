/*
npm init -y
npm mysql2 express bcrypt
npm i bcrypt mysql2 express ejs 
*/

const express = require("express");
const app = express();
const path = require("path");
const joinRouter = require("./routers/joinRouter");
const loginRouter = require("./routers/loginRouter");
const bulletin = require("./routers/bulletin");

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}));

app.use("/join", joinRouter);
app.use("/login", loginRouter);
app.use("/bulletin", bulletin);

app.listen(5050, ()=>{
    console.log("server on");
});