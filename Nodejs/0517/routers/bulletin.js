const router = require("express").Router();
const {table, detail, add, edit, remove} = require("../controllers/bulletinControllers");

router.get("/", async (req,res)=>{
    try {
        const data = await table();
        console.log(data);
        res.render("bulletin", {data});
        
    } catch (error) {
        console.log(error);
    }
});

router.get("/detail/:id", async (req,res)=>{
    try {
        const data = await detail(req,res);
        res.render("detail", {data});
    } catch (error) {
        console.log(error);
    }
});

router.get("/add", async (req,res)=>{
    res.render("add");
});

router.post("/add", async (req,res)=>{
    try {
        await add(req,res);
        res.redirect("/bulletin");
    } catch (error) {
        console.log(error);
    }
});

router.get("/edit/:id", async(req,res)=>{
    try {
        const data = await detail(req,res);
        res.render("edit", {data});
    } catch (error) {
        console.log(error);
    }
});

router.post("/edit/:id", async(req,res)=>{
    try {
        await edit(req,res);
        res.redirect("/bulletin");
    } catch (error) {
        console.log(error);
    }
});


router.get("/delete/:id", async(req,res)=>{
    try {
        await remove(req,res);
        res.redirect("/bulletin");
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;