"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordConfirm = document.querySelector("#passwordAgain");
var nickname = document.querySelector("#nickName");
var duplicateBtn = document.querySelector(".duplicate-btn"); // 이메일 정규식

var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // 패스워드 정규식

var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/; // 유저데이터를 가져옴

var userDataArr = JSON.parse(localStorage.getItem("userInformation"));
var adminUserData = [];

if (localStorage.getItem("admin")) {
  adminUserData = JSON.parse(localStorage.getItem("admin"));
} // 이메일 중복 확인 변수


var validateDuplicate = false; // 이메일과 패스워드에서 커서가 벗어났을 때 실행하는 함수

email.addEventListener("blur", function () {
  validateInputBlurEmail();
});
password.addEventListener("blur", function () {
  validateInputBlurPassword();
});
passwordConfirm.addEventListener("blur", function () {
  validateInputBlurPasswordAgain();
});
duplicateBtn.addEventListener("click", function () {
  validateDuplicateEmail();
}); // 회원가입 버튼을 눌렀을 때

function validateInput() {
  // 정규식으로 판별
  if (!validateDuplicate) {
    console.log(validateDuplicate);
    alert("이메일 중복을 부탁드립니다!");
    return;
  }

  if (validateInputBlurEmail() || validateInputBlurPassword() || validateInputBlurPasswordAgain() || nickname.value == "") {
    alert("정보를 정확하게 입력해주세요");
  } else {
    console.log(nickname.value);
    var newUser = new User(userDataArr.length + adminUserData.length + 1, nickname.value, email.value, password.value, false, "71629122");

    if (adminUserData == null) {
      localStorage.setItem("admin", JSON.stringify([newUser]));
    } else {
      localStorage.setItem("admin", JSON.stringify([].concat(_toConsumableArray(adminUserData), [newUser])));
    }

    location.href = "/main/main.html";
  } // JSON객체로 변경후 삽입

} // 이메일 정규식 확인


function validateInputBlurEmail() {
  if (!emailRegex.test(email.value)) {
    showModalEmail();
    return true;
  }
} // 비밀번호 정규식 확인


function validateInputBlurPassword() {
  if (!passwordRegex.test(password.value)) {
    showModalPassword();
    return true;
  }
} // 비밀번호 다시 입력 확인


function validateInputBlurPasswordAgain() {
  if (password.value !== passwordConfirm.value) {
    showModalPasswordConfirm();
    return true;
  }
} // 이메일 중복 확인 함수


function validateDuplicateEmail() {
  if (userDataArr.find(function (a) {
    return a.email == email.value;
  }) === undefined) {
    var modal3 = document.querySelector(".validateEmail p:nth-child(3)");
    modal3.style.display = "block";
    modal3.style.color = "blue";
    setTimeout(function () {
      modal3.style.display = "none";
    }, 3000);
    validateDuplicate = true;
  } else {
    var modal2 = document.querySelector(".validateEmail p:nth-child(2)");
    modal2.style.display = "block";
    setTimeout(function () {
      modal2.style.display = "none";
    }, 3000);
  }
} // 이메일 정규식 만족 안할 시 문구 띄워주기


function showModalEmail() {
  var modal1 = document.querySelector(".validateEmail p:nth-child(1)");
  modal1.style.display = "block";
  setTimeout(function () {
    modal1.style.display = "none";
  }, 3000);
} // 비밀번호 정규식 만족 안할 시 문구 띄워주기


function showModalPassword() {
  var modal = document.querySelector(".validatePassword");
  modal.style.display = "block";
  setTimeout(function () {
    modal.style.display = "none";
  }, 3000);
} // 비밀번호가 일치하지 않을 시 문구 띄워주기


function showModalPasswordConfirm() {
  var modal = document.querySelector(".validatePasswordAgain");
  modal.style.display = "block";
  setTimeout(function () {
    modal.style.display = "none";
  }, 3000);
}