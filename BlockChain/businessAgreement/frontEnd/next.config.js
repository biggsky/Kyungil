/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     // qna페이지
  //     {
  //       source: "/qna/helprequest",
  //       destination: "/",
  //     },
  //     {
  //       source: "/qna/qnaMain",
  //       destination: "/qnaMain",
  //     },
  //     // nft페이지

  //     { source: "/nft/collections", destination: "/collections" },
  //   ];
  // },
  // devServer: {
  //   https: true,
  // },
  server : {
    https : true
  }
};

module.exports = nextConfig;
