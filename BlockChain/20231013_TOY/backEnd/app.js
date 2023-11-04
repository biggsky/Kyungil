// npm init -y
// npm i cors dotenv express express-session mysql2 sequelize

const express = require("express");
const dot = require("dotenv").config();
const session = require("express-session");
const {sequelize} = require("./models");
const cors = require("cors");
const app = express();
const mainRouter = require("./routers/mainRouter");
// app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use(cors({
    origin : ["http://localhost:3000"],
    credentials: true
}))

app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false,
}));

sequelize.sync({force: false}).then((e)=>{
    console.log("sequelize 연결 성공");
}).catch((err)=>{
    console.log(err);
})

app.use("/", mainRouter);

const server = app.listen(8000, ()=>{
    console.log("server on");
});