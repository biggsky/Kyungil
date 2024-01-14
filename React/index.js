const fs = require("fs");
const path = require("path");

function readDirectory(dir) {
  // 폴더에 파일을 가져오고
  const files = fs.readdirSync(dir);
  // [ '1', '2', '3', 'index.js' ]

  files.forEach((file) => {
    // console.log(file) file 1
    // 폴더에 있는 파일들 이름들을 반복문으로 실행

    // 현재 폴더 경로와 파일의 이름으로 경로를 합쳐준뒤 => 실제 경로
    const filePath = path.join(dir, file);
    // C:\Users\Biggs\Desktop\test\1\index.html

    // 파일 이름이 .git으로 끝나는지 혹인 => true or false
    const isHidden = file.endsWith(".git");

    // .git이 포함되어있으면 삭제를 진행할거라 true값이면
    if (isHidden) {
      // 실제로 있는 파일인지 확인
      if (fs.existsSync(filePath)) {
        // 그럼 실제로 있다면 제거를 시작
        console.log("제거중", filePath);
        // 제거중 C:\Users\Biggs\Desktop\test\1\.git

        // .git 파일을 제거 진행 숨김파일 제거
        fs.rmSync(filePath, { recursive: true, force: true });
        // 제거가 완료되면 동적으로 돌아가니까 여기 찍힘 제거 되고나서
        console.log("제거완료", filePath);
        // 제거완료 C:\Users\Biggs\Desktop\test\1\.git
      } else {

        // 실제로 없는 파일일 경우
        console.log("파일 없는데?", filePath);
      }
    }

    // 파일 있는지 확인 and 현재 경로가 폴더인지 확인
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      // 다시 재귀적으로 실행 모든 폴더를 순회하기 위해서
      readDirectory(filePath);
    }
  });
}

// 현재 경로
readDirectory(__dirname);