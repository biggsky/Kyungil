"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var coinsInTradeJS = getLocalStorage("coinInformation");
var coinStystems = getLocalStorage("priceRangeInfo");
var realRandomPrice;
var iff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var cp;

var coinCurrentArray = _toConsumableArray(coinsInTradeJS.map(function (a, i) {
  return a.currentPrice;
}).slice(1));

coinStystems.forEach(function (a, i) {
  if (i != 0) {
    // console.log(i,a)
    setInterval(function () {
      // 1초마다 코인의 현재 가격들을 변경 배열에 저장한다.
      coinCurrentArray[i - 1] = getRandomPrice(coins[i], coinStystems[i], i - 1);
      coinsInTradeJS[i].currentPrice = coinCurrentArray[i - 1];
      setLocalStorage('coinInformation', coinsInTradeJS);
    }, 1000);
  }
}); // 1chori.js에서 매개변수만 바꾸고 로직은 그대로.

var getRandomPrice = function getRandomPrice(coin, coinStystem, i) {
  var min = coinStystem.min;
  var max = coinStystem.max;

  if (iff[i] == 0) {
    cp = Number(coin.currentPrice);
  } else {
    cp = iff[i];
  } // 1부터 10까지의 랜덤 숫자


  var ten_chance = Math.floor(Math.random() * 20 + 1);

  if (ten_chance == 10) {
    // 10%      500기준 min~200 and 10000~max
    var two = Math.floor(Math.random() * 2 + 1);

    if (two == 1) {
      // realRandomPrice = min;
      // min ~ 10% 까지의 값
      realRandomPrice = Math.floor(Math.random() * (max * 0.1) + min);
    } else {
      // realRandomPrice = max;
      // max ~ max밑의 10% 값
      realRandomPrice = Math.floor(Math.random() * (max * 0.1 + 1) + max * 0.9);
    } // console.log("결과값: ", realRandomPrice);

  } else {
    // 90%      500기준 300 ~ 700
    var half = cp / 2; // ???

    realRandomPrice = Math.floor(Math.random() * (cp + half - (cp - half) + 1) + (cp - half));

    if (realRandomPrice < min) {
      realRandomPrice = min;
    } else if (realRandomPrice > max) {
      // realRandomPrice = max;
      // max값보다 큰 값이 나와버리면 max밑20% ~ max 값까지 랜덤값 출력
      realRandomPrice = Math.floor(Math.random() * (max * 0.2 + 1) + max * 0.8);
    }
  }

  iff[i] = realRandomPrice;
  return realRandomPrice;
};