const { User, Board } = require("../models");
// const getAttractionPicture = require("./webCrawler");
exports.testcon = async (req, res) => {
  try {
    console.log("1");
  } catch (error) {
    console.log(error);
  }
};

// exports.getAttractionPicture = async (req, res) => {
//   try {
//     const pictureSrc = await getAttractionPicture(req, res);
//     res.send(pictureSrc);
//   } catch (error) {
//     console.log(error);
//   }
// };
