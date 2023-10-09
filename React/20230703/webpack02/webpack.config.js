const path = require("path");

// webpack 구성 객체 내보내자
module.exports = {
    // 진입점 시작점
    entry: "./src/index.js",

    // 모듈의 규칙 설정
    module : {
        rules : [
            {
                // test : 파일 확장자와 일치하는 정규식의 키
                // .css 확장자의 파일의 규칙을 설정
                test : /\.css$/,
                // use 확장자에 맞는 파일을 처리할때 사용할 로더를 지정
                // style-loader, css-loader를 사용할거임
                // CSS 파일을 번들링하자
                use:["style-loader", "css-loader"],
            }
        ]
    },

    // 번들링된 파일 내보내기 속성
    output : {
        // 내보내는 파일의 이름
        filename : "bundle.js",

        // 내보내는 파일의 경로는 
        path: path.join(__dirname, "dist")
    }
}