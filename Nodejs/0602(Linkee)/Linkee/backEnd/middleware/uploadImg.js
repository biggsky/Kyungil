const multer = require("multer");
const path = require("path");

exports.uploadImg = multer({
    storage : multer.diskStorage({
        destination : (req, file, done) => {
            done(null, "post_img/")
        },
        filename : (req, file, done) => {
            const ext = path.extname(file.originalname);
            const filename = path.basename(file.originalname, ext) + "_" + Date.now() + ext;
            done(null, filename);
        }
    }),

    limits : {fileSize : 1000 * 1024 * 1024}
});

exports.updateProfileImg = multer({
    storage : multer.diskStorage({
        destination : (req,file,done)=>{
            done(null, "user_img/")
        },
        filename : (req,file,done)=>{
            const ext = path.extname(file.originalname);
            const filename = path.basename(file.originalname,ext)+"_"+Date.now()+ext;
            done(null,filename);
        }
    }),
    limits : {filesize : 1000 * 1024 * 1024}
});