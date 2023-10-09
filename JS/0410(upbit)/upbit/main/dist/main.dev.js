"use strict";

var image = document.getElementById("dotIcon");
var image2 = document.getElementById("arrowIcon");
var image3 = document.getElementById("bellIcon");
var image4 = document.getElementById("coinIcon");
var appimg = document.getElementById("appImg");
var appimg2 = document.getElementById("appImg2");
var imageSub = document.getElementById("danTa");
var popupBtn = document.querySelector(".popup-btn");
var checkBox = document.getElementById("checkBox");
var popupEvent = document.querySelector(".event-btn");
var popupCookie = getCookie("popup"); //popup 쿠키 만들기

checkBox.addEventListener("change", function () {
  if (this.checked) {
    setCookie("popup", true, 86400);
    console.log("Checkbox is checked!");
  } else {
    console.log("Checkbox is unchecked!");
  }
});

function popupOpen() {
  var popup = document.querySelector(".popup-wrap");

  if (popup.classList.contains("is-on")) {
    popup.classList.remove("is-on");
  } else {
    popup.classList.add("is-on");
  }
}

popupBtn.addEventListener("click", popupOpen);

if (popupCookie == undefined) {
  popupOpen();
} else {
  console.log("팝업 삭제");
}

function getCookie(c_name) {
  var i,
      x,
      y,
      ARRcookies = document.cookie.split(";");

  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");

    if (x == c_name) {
      return unescape(y);
    }
  }
}

function setCookie(c_name, value, time) {
  var date = new Date();
  date.setTime(date.getTime() + time * 1000);
  var str = c_name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  var str2 = getCookieTime(str);
  console.log(getCookieTime(c_name + "=" + value + ";expires=" + date.toUTCString() + ";path=/"));
  console.log(c_name + "=" + "{\"value\" : \"".concat(value, "\", \"time\" : \"").concat(str2, "\"}") + ";expires=" + date.toUTCString() + ";path=/");
  document.cookie = c_name + "=" + "{\"value\" : \"".concat(value, "\", \"time\" : \"").concat(str2, "\"}") + ";expires=" + date.toUTCString() + ";path=/";
}

function getCookieTime(cookie) {
  // 쿠키 문자열을 받아서 배열로 변환
  var str = cookie.split(";");
  var str2 = str.find(function (i) {
    var temp = i.trim();
    return temp.startsWith("expires=");
  });

  if (str2) {
    var str3 = str2.trim();
    console.log(str3);
    return new Date(str3);
  } else {
    return null;
  }
} //---dot click-----


appimg.style.display = "none";
appimg2.style.display = "none";
imageSub.style.display = "none";

function dot() {
  image.src = "./img/lock.png";
  image2.src = "./img/dot.png";
  image3.src = "./img/dot.png";
  image4.src = "./img/dot.png";
  appimg.style.display = "block";
  appimg2.style.display = "none";
  imageSub.style.display = "none";
}

function dot2() {
  image.src = "./img/dot.png";
  image2.src = "./img/arrow.png";
  image3.src = "./img/dot.png";
  image4.src = "./img/dot.png";
  appimg.style.display = "none";
  appimg2.style.display = "block";
  imageSub.style.display = "none";
}

function dot3() {
  image.src = "./img/dot.png";
  image2.src = "./img/dot.png";
  image3.src = "./img/bell.png";
  image4.src = "./img/dot.png";
  appimg.style.display = "none";
  appimg2.style.display = "none";
  imageSub.style.display = "block";
}

function dot4() {
  image.src = "./img/dot.png";
  image2.src = "./img/dot.png";
  image3.src = "./img/dot.png";
  image4.src = "./img/coin.png";
  appimg.style.display = "none";
  appimg2.style.display = "none";
  imageSub.style.display = "none";
} // if(//로그인을 헸다면??
// ){
//     //로그인,회원가입을 로그아웃
// }


if (localStorage.getItem("nowLogin")) {
  if (JSON.parse(localStorage.getItem("nowLogin")).isAdmin == true) {
    document.getElementById("logIn").innerHTML = "Admin";
    document.getElementById("signUp").innerHTML = "LogOut";
    var admin = document.getElementById("logIn");
    admin.href = "../admin/admin.html";
    var logOut = document.getElementById("signUp");
    logOut.href = "./main.html";
    var trade = document.getElementById("trade");
    trade.href = "../trade/assemble.html";

    logOut.onclick = function () {
      window.localStorage.removeItem("nowLogin");
    };
  } else if (JSON.parse(localStorage.getItem("nowLogin")).isAdmin == false) {
    document.getElementById("logIn").innerHTML = "로그아웃";
    document.getElementById("signUp").innerHTML = "MyPage";
    var myPage = document.getElementById("signUp");
    myPage.href = "../mypage/myPage.html";

    var _logOut = document.getElementById("logIn");

    _logOut.href = "./main.html";

    var _trade = document.getElementById("trade");

    _trade.href = "../trade/assemble.html";

    _logOut.onclick = function () {
      window.localStorage.removeItem("nowLogin");
      window.localStorage.removeItem("nickname");
    };
  }
}