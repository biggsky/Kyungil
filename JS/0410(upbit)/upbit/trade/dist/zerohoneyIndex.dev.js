"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 코인의 순서, 코인을 클릭했을 때 해당 코인의 정보를 불러오기 위한 변수
var coinIndex = 1;
var tabItem = document.querySelectorAll(".tab-item");
var tabToggle = [true, false, false, false];
var loginUser = JSON.parse(localStorage.getItem("nowLogin"));
var userInformation = JSON.parse(localStorage.getItem("userInformation")); // 매도시 코인의 개수를 나타냄

var sellVolume = 0; // 가격을 빼는 - 버튼

var priceSubtract = document.querySelector(".price-subtract"); // 가격을 더하는 + 버튼

var priceAdd = document.querySelector(".price-add"); // 임시 코인

var coin = JSON.parse(localStorage.getItem("coinInformation"))[coinIndex]; // 매수시 직접 입력 버튼

var selfInput = document.querySelector(".self-input"); // 직접입력 슬라이더

var slider = document.querySelector("#progress"); // 슬라이더의 퍼센트 값

var output = document.querySelector(".self-input-percent"); //주문 수량 input

var tradeVolume = document.querySelector("#tradeVolume"); //주문 총액 input

var orderSum = document.querySelector("#orderSum"); // console.log(loginUser.account);

slider.addEventListener("input", function () {
  var value = slider.value;
  output.textContent = "Progress: ".concat(value, "%");
});

if (loginUser) {
  // console.log("sad");
  document.querySelector(".btn-container").innerHTML = '<a href="" class="buy-sell-btn">매수</a>';
}

tabItem[0].style.borderBottom = "2px solid red";
tabItem.forEach(function (a, i) {
  a.addEventListener("click", function () {
    tabItem.forEach(function (a, i) {
      a.style.borderBottom = "";
      tabToggle[i] = false;
    });
    a.style.borderBottom = "2px solid red";
    tabToggle[i] = true;
    changeTabContent();
  });
}); // 매수/메도 탭을 바꿔주는 함수

var changeTabContent = function changeTabContent(a, i) {
  console.log(loginUser);

  if (tabToggle[0]) {
    // 매수 가격에 임시코인의 현재가를 넣는다.
    // 매수시 여기
    document.querySelector(".buy-price-container > span").innerHTML = "매수 가격";
    document.querySelector(".buy-price-container input").id = "buyPrice";
    document.querySelector(".currency-units").innerHTML = "krw";
    document.querySelector(".account").childNodes[0].nodeValue = loginUser.account;
    document.querySelector(".btn-container").innerHTML = '<a  class="buy-btn">매수</a>';
    document.querySelector(".buy-steem-container > span").innerHTML = "주문수량";
    var buyBtn = document.querySelector(".buy-btn"); // 매수시 실행 메소드

    buyBtn.addEventListener("click", function () {
      buyFunction();
    }); // 매수시 + - 버튼 복귀

    priceSubtract.style.display = "flex";
    priceAdd.style.display = "flex";
    document.querySelector("#buyPrice").placeholder = coin.currentPrice; // 매수로 왔을시 퍼센트 복귀

    document.querySelectorAll(".percent-container span").forEach(function (a) {
      a.style.display = "flex"; // 셀프 입력바 없앰

      document.querySelector(".self-input-bar").style.display = "none";
      document.querySelector(".self-input-percent").style.display = "none"; // 매수시 buyPrice초기화

      document.querySelector("#buyPrice").value = "";
    });
  } else if (tabToggle[1]) {
    // 매도시 파는곳의 placeholder는 0고정이다
    // 매도시 여기
    document.querySelector(".buy-price-container > span").innerHTML = "매도 개수";
    document.querySelector(".buy-price-container input").id = "sellPrice";
    document.querySelector(".currency-units").innerHTML = coin.symbol;
    document.querySelector(".account").childNodes[0].nodeValue = loginUser.coinVolume["".concat(coin.symbol)];
    document.querySelector(".btn-container").innerHTML = '<a class="sell-btn">매도</a>';
    document.querySelector(".buy-steem-container > span").innerHTML = "현재가";
    var sellBtn = document.querySelector(".sell-btn"); // 매수시 실행 메소드

    sellBtn.addEventListener("click", function () {
      sellFunction();
    }); // 매도시 buyprice를 바꿔줘야한다.

    document.querySelector("#sellPrice").placeholder = 0; // 직접입력을 위한 attribute 삭제

    document.querySelector("#sellPrice").removeAttribute("readonly");
    document.querySelector("#sellPrice").removeAttribute("onfocus"); // 매도시 입력값으로 총액 변경

    document.querySelector("#sellPrice").addEventListener("input", function () {
      orderSum.placeholder = Math.floor(parseInt(document.querySelector("#sellPrice").value) * parseFloat(document.querySelector("#tradeVolume").placeholder));
    }); // 매도시 + - 없앰

    priceSubtract.style.display = "none";
    priceAdd.style.display = "none"; // 만약 매도시 필요없으므로 삭제
    // 매도시 퍼센트 없앰

    document.querySelectorAll(".percent-container span").forEach(function (a) {
      a.style.display = "none";
    }); // 매도시 input속성 다시 입력 못하게 변경

    document.querySelector("#tradeVolume").setAttribute("readonly", true);
    document.querySelector("#tradeVolume").setAttribute("onfocus", "this.blur()");
    document.querySelector("#tradeVolume").value = "";
  }
}; //매수가격 변경 버튼


priceAdd.addEventListener("click", function () {
  // 임시코인의 현재가격+1
  // 매도시
  if (tabToggle[1]) {
    sellVolume++;
    document.querySelector("#sellPrice").placeholder = sellVolume;
    orderSum.placeholder = parseInt(document.querySelector("#sellPrice").placeholder) * parseInt(document.querySelector("#tradeVolume").placeholder);
  } else {
    var coinPrice = parseInt(document.querySelector("#buyPrice").placeholder);
    coinPrice++;
    document.querySelector("#buyPrice").placeholder = coinPrice;
  }
}); //매수가격 변경 버튼

priceSubtract.addEventListener("click", function () {
  // **warning** placrholder는 string이기 때문에 약한 비교로 비교해줌 강한 비교로 하면 자료구조도 비고해서 false가 나옴
  // 매도시
  if (tabToggle[1]) {
    if (sellVolume == 0) {
      alert("이미 0개입니다.");
      return;
    }

    sellVolume--;
    document.querySelector("#sellPrice").placeholder = sellVolume; // 증가,감소 누를시 orderSum의 값 변경

    orderSum.placeholder = parseInt(document.querySelector("#sellPrice").placeholder) * parseInt(document.querySelector("#tradeVolume").placeholder);
  } else {
    var coinPrice = parseInt(document.querySelector("#buyPrice").placeholder);

    if (coinPrice == 0) {
      alert("이미 0개 입니다.");
      return;
    }

    coinPrice--;
    document.querySelector("#buyPrice").placeholder = coinPrice;
  }
}); // 매수탭에서 직접 입력을 누를시

selfInput.addEventListener("click", function () {
  document.querySelectorAll(".percent-container span").forEach(function (a) {
    a.style.display = "none";
  });
  document.querySelector(".self-input-bar").style.display = "flex";
  document.querySelector(".self-input-percent").style.display = "flex";
  tradeVolume.removeAttribute("onfocus");
  tradeVolume.removeAttribute("readonly");
}); // 슬라이더값이 변경될 때 퍼센트를 바꿔줌

slider.addEventListener("input", function () {
  var value = slider.value;
  output.textContent = "\uD604\uC7AC \uC218\uB7C9: ".concat(value, "%");
  orderSum.placeholder = parseFloat(value) / 100 * parseInt(document.querySelector("#buyPrice").placeholder);
}); // 퍼센트 부분

var _loop = function _loop(i) {
  document.querySelectorAll(".percent-container span")[i].addEventListener("click", function () {
    // 주문할 퍼센트
    var percent = parseInt(document.querySelectorAll(".percent-container span")[i].getAttribute("value")) / 100; // 유저가 구매할 돈

    var buyAccountPrice = percent * loginUser.account; // 주문 수령

    var howOrderNum = Math.floor(buyAccountPrice / parseInt(document.querySelector("#buyPrice").placeholder)); //주문 총액

    var oderSum = parseInt(document.querySelector("#buyPrice").placeholder) * howOrderNum;
    console.log(buyAccountPrice);
    console.log(howOrderNum); // 주문수량 변경

    document.querySelector("#tradeVolume").placeholder = howOrderNum; // 만약 매도시 주문총액 계산

    if (tabToggle[1]) {} else {
      console.log("들어옴"); // 만약 매수시 주문총액 계산

      console.log(buyAccountPrice);
      console.log(howOrderNum);
      orderSum.placeholder = oderSum;
    } // 주문 총액 변경

  });
};

for (var i = 0; i < 4; i++) {
  _loop(i);
} //입력이 가능해진 input에 숫자를 입력 할 때마다 실행(매수)


tradeVolume.addEventListener("input", function () {
  var input = document.getElementById("tradeVolume").value;
  orderSum.placeholder = parseInt(document.querySelector("#buyPrice").placeholder) * parseFloat(input);
}); //매수 함수

var buyFunction = function buyFunction() {
  if (loginUser.account - parseInt(orderSum.placeholder) < 0) {
    alert("일해서 돈 버세요");
    return;
  } //소비자가 산 코인의 양
  // console.log("체결가격", document.querySelector("#buyPrice").placeholder);
  // console.log("주문총액", parseInt(orderSum.placeholder));


  var whatnumber = parseInt(parseInt(orderSum.placeholder) / parseFloat(document.querySelector("#buyPrice").placeholder));
  var time10 = new Date();
  var minutes10 = time10.getMinutes();
  var seconds10 = time10.getSeconds();
  var time100 = minutes10 + ":" + seconds10;
  addDealContent(time100, document.querySelector("#buyPrice").placeholder, whatnumber, parseInt(orderSum.placeholder));
  var buyCoinVolume = parseInt(parseInt(orderSum.placeholder) / parseFloat(document.querySelector("#buyPrice").placeholder)); // 소비자가 산 코인을 Coin 생성자로 만들어 push해야함

  var _ref = new Coin(dummyDataCoin[coinIndex], buyCoinVolume, loginUser.id),
      coinObj = _ref.coinObj,
      quantity = _ref.quantity,
      userId = _ref.userId;

  loginUser.coin.push({
    coinObj: coinObj,
    quantity: quantity,
    userId: userId
  }); // 소비자가 이미 갖고있는 코인, 새로산 코인을 여기에 더해야함

  var alreadyHaveCoin = loginUser["coinVolume"][coin.symbol];
  loginUser.coinVolume = _objectSpread({}, loginUser.coinVolume, _defineProperty({}, coin.symbol, alreadyHaveCoin + buyCoinVolume));
  console.log(alreadyHaveCoin);
  loginUser.account -= parseInt(orderSum.placeholder);
  console.log(loginUser);
  setLoginUser(loginUser);
  var tempUser = getLocalStorage("userInformation").map(function (a) {
    if (loginUser.id == a.id) {
      a = loginUser;
      return a;
    } else {
      return a;
    }
  });
  console.log(tempUser);
  setLocalStorage("userInformation", tempUser); // 매수후에 사용자의 계좌를 업데이트함

  document.querySelector(".account").childNodes[0].nodeValue = loginUser.account;
  init();
}; // 매도 함수


var sellFunction = function sellFunction() {
  var sellCoinVolume = -parseInt(document.querySelector("#sellPrice").value); // 소비자가 이미 갖고있는 코인, 새로산 코인을 여기에 더해야함

  var alreadyHaveCoin = loginUser["coinVolume"][coin.symbol]; // 소비자가 판 quantity는 -이다. 코인을 Coin 생성자로 만들어 push해야함

  var _ref2 = new Coin(dummyDataCoin[coinIndex], sellCoinVolume, loginUser.id),
      coinObj = _ref2.coinObj,
      quantity = _ref2.quantity,
      userId = _ref2.userId;

  if (alreadyHaveCoin + sellCoinVolume < 0) {
    alert("코인을 더 사세요 ㅡㅡ");
    return;
  }

  var whatnumber = document.querySelector("#sellPrice").value;
  var time10 = new Date();
  var minutes10 = time10.getMinutes();
  var seconds10 = time10.getSeconds();
  var time100 = minutes10 + ":" + seconds10;
  addDealContent(time100, document.querySelector("#tradeVolume").placeholder, whatnumber, parseInt(orderSum.placeholder));
  loginUser.account += parseInt(orderSum.placeholder);
  loginUser.coin.push({
    coinObj: coinObj,
    quantity: quantity,
    userId: userId
  });
  loginUser.coinVolume = _objectSpread({}, loginUser.coinVolume, _defineProperty({}, coin.symbol, alreadyHaveCoin + sellCoinVolume));
  console.log(alreadyHaveCoin);
  console.log(sellCoinVolume);
  console.log(loginUser);
  setLoginUser(loginUser);
  var tempUser = getLocalStorage("userInformation").map(function (a) {
    if (loginUser.id == a.id) {
      a = loginUser;
      return a;
    } else {
      return a;
    }
  });
  console.log(tempUser);
  setLocalStorage("userInformation", tempUser);
  document.querySelector(".account").childNodes[0].nodeValue = loginUser.coinVolume["".concat(coin.symbol)];
  init();
}; // ---------------------------체결 부분 csh


var dealContent = document.querySelector(".deal-content");

function addDealContent(time, price, volume, amount) {
  console.log("a", time);
  console.log("b", price);
  console.log("c", volume);
  console.log("d", amount);
  var ul = document.createElement("ul");
  var timeList = document.createElement("li");
  var priceList = document.createElement("li");
  var volumeList = document.createElement("li");
  var amountList = document.createElement("li");
  timeList.classList.add("dealTime");
  priceList.classList.add("dealPrice");
  volumeList.classList.add("dealVolume");
  amountList.classList.add("dealAmount");
  timeList.textContent = time;
  priceList.textContent = price;
  volumeList.textContent = volume;
  amountList.textContent = amount;

  if (tabToggle[0]) {
    timeList.style.color = "red";
    priceList.style.color = "red";
    volumeList.style.color = "red";
    amountList.style.color = "red";
  } else {
    timeList.style.color = "blue";
    priceList.style.color = "blue";
    volumeList.style.color = "blue";
    amountList.style.color = "blue";
  }

  ul.append(timeList, priceList, volumeList, amountList);
  dealContent.append(ul);
} // ---------------------------


changeTabContent(); // 콜백 함수 정의

function getAveragePrice(array) {
  if (array.length >= 6) {
    var start = 1;
    var end = 5; // 1~5번 인덱스의 합을 계산

    var sum = array.slice(start, end + 1).reduce(function (acc, cur) {
      return acc + cur;
    }, 0); // 1~5번 인덱스의 개수로 나누어 평균 계산

    var _average = sum / (end - start + 1);

    return _average;
  }
} // setInterval(() => {
//   if (randomPrices.length == 6) {
//     // 평균가가 6초때 나오므로 length가 6일때
//     console.log(coins[coinIndex].currentPrice);
//     // 해당하는 인덱스의 현재가를 평균가로 바꿔줌
//     coins[coinIndex].currentPrice = getAveragePrice(randomPrices);
//     // html에 나타내기 위하여 coinPrice또한 바꿔줌
//     coinPrice = coins[coinIndex].currentPrice;
//     // html수정
//     setLocalStorage("coinInformation", coins);
//   }
// }, 1000);
// 범인 찾았다!!
// 오류 1. 6초 전에 다른 코인을 누를시 평균가가 존재 x=>버그남


allCoinList.forEach(function (a, index) {
  a.addEventListener("click", function (i) {
    coinIndex = index + 1;
    coin = JSON.parse(localStorage.getItem("coinInformation"))[coinIndex];
    document.querySelector(".currency-units").innerHTML = coin.symbol;
    document.querySelector(".account").childNodes[0].nodeValue = loginUser.coinVolume["".concat(coin.symbol)]; // 해당하는 인덱스의 현재가를 평균가로 바꿔줌
    // console.log(coins[coinIndex].currentPrice);
    // html수정
    //1chori에 있는 6초후에 계산되는 평균가를 가져옴

    if (average == undefined) {
      document.querySelector("#buyPrice").placeholder = "종가를 기다리세요";
    }
  });
});

var init = function init() {
  // 만약 매도할시
  if (tabToggle[1]) {
    alert("매도가 완료 됐습니다!더 따야겠지?");
    document.querySelector("#sellPrice").placeholder = 0;
    orderSum.placeholder = 0;
  } else {
    alert("매수가 완료 됐습니다! 지금 사면 오름 내가 봄");
    document.querySelector("#buyPrice").placeholder = 0;
    document.querySelector("#tradeVolume").placeholder = 0;
    document.querySelectorAll(".percent-container span").forEach(function (a) {
      a.style.display = "flex";
    });
    document.querySelector(".self-input-bar").style.display = "none";
    document.querySelector(".self-input-percent").style.display = "none";
    orderSum.placeholder = 0;
  }
};