const express = require("express");
const app = express();
const path = require("path");

const session = require("express-session");
const dot = require("dotenv").config();
const {sequelize} = require("./models");


app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false
}));

const Routers = require("./routers/router");
app.use("/", Routers);


sequelize.sync({force:false}).then((e)=>{
    console.log("연결 성공");
}).catch((err)=>{
    console.log(err);
})


app.listen(8000, ()=>{
    console.log("server on");
});

