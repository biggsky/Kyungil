"use strict";

var _require = require("../models"),
    User = _require.User,
    Board = _require.Board; // const getAttractionPicture = require("./webCrawler");


exports.testcon = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            console.log("1");
          } catch (error) {
            console.log(error);
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}; // exports.getAttractionPicture = async (req, res) => {
//   try {
//     const pictureSrc = await getAttractionPicture(req, res);
//     res.send(pictureSrc);
//   } catch (error) {
//     console.log(error);
//   }
// };