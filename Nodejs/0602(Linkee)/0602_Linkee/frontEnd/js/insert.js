// 업로드 한 이미지 미리 보여주기
let fileUpload = document.querySelector('#fileUpload');
let label = document.querySelector(".fileUpload");
let fileName;
let reader = new FileReader();
let res;
let previewImg = document.querySelector("#preview");

fileUpload.onclick = function() {
    fileUpload.onchange = function(){
        fileName = fileUpload.files[0];
        console.log(fileName);
        console.log("선택된 파일: ", fileName.name);
        profile(fileName);
        label.style.display = "none";
    }
}
  
// 업로드한 파일을 base64 형태로 변환
function profile(value) {
    reader.onload = function () {
        // base64로 변환하여 저장
        res = reader.result;
        // 변환한 값을 src에 할당
        preview.setAttribute("src", res);
        preview.style.display = "block";
    };
    reader.readAsDataURL(value);
}

// preview 사진 누르면 없어지기
previewImg.onclick = function() {
    preview.style.display = "none";
    label.style.display = "block";
    preview.removeAttribute("src");
    res = "";
    fileName = "";
    fileUpload.value = "";
}