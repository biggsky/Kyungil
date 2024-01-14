const express = require("express");
const path = require("path");
const session = require("express-session");

const pageRouter = require("./routers/page");
const tvRouter = require("./routers/token_verify");

const app = express();

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret : process.env.KEY2, //???????????????????????
    resave : false, //?????????????????
    saveUninitialized : true
}));

app.use(pageRouter);
app.use(tvRouter);
// app.use(verifyRouter);

app.listen(8080, ()=>{
    console.log("server on~~~");
});

