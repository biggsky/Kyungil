// const cheerio = require("cheerio");
// // puppeteer을 가져온다.
// const puppeteer = require("puppeteer");
// const getAttractionPicture = async (req, res) => {
//   const { queryKey } = req.query;
//   const encodedSearchQuery = encodeURIComponent(queryKey);
//   console.log(req.query);
//   // 브라우저를 실행한다.
//   // 옵션으로 headless모드를 끌 수 있다.
//   const browser = await puppeteer.launch({ headless: true });
//   // 새로운 페이지를 연다.
//   const page = await browser.newPage();
//   // "https://www.goodchoice.kr/product/search/2" URL에 접속한다. (여기어때 호텔 페이지)
//   await page.goto(`https://pixabay.com/images/search/${encodedSearchQuery}/`);
//   const content = await page.content();
//   await page.waitForSelector(".container--CC4hU");
//   // $에 cheerio를 로드한다.
//   const $ = cheerio.load(content);
//   const firstImg = $(
//     ".container--CC4hU > div > div > div > div > a > img"
//   ).first();
//   const imgSrc = firstImg.attr("src");
//   console.log(imgSrc);
//   await page.close();
//   await browser.close();
//   return imgSrc;
// };
// module.exports = getAttractionPicture;
// 크롤러 안 사용함
// "use strict";