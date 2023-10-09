const {showtable, showone, add, edit, Delete} = require("../models");

exports.table = async (req,res)=>{
    try {
        const data = await showtable();
        return data;
    } catch (error) {
        console.log(error);
    }
};

exports.detail = async (req,res)=>{
    const {id} = req.params;
    try {
        const data = await showone(id);
        return data;
    } catch (error) {
        console.log(error);
    }
}
exports.add =async (req,res)=>{
    const {title, content} = req.body;
    try {
        await add(title, content);
    } catch (error) {
        console.log(error);
    }
}

exports.edit = async (req,res)=>{
    const {id}= req.params;
    const {title, content} = req.body;
    try {
        await edit(title, content, id);
    } catch (error) {
        console.log(error);
    }
}

exports.remove = async (req,res)=>{
    const {id} = req.params;
    try {
        await Delete(id);
    } catch (error) {
        console.log(error);
    }
}