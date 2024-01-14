"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// ----------------------------------------------------닉네임 변경---------------------------------------------------
var nickName = document.querySelector('.accessInfo span');
var changNicBtn = document.querySelector('.changeNic');
var subBtn = document.querySelector('.submit');
var closeBtn = document.querySelector('.close');
var nickPopup = document.querySelector('.nickName'); // 닉네임 변경 팝업창 활성화하는 함수

function popup() {
  document.body.classList.toggle('active');
  nickPopup.classList.toggle('active');
} // 닉네임 팝업창 close


closeBtn.addEventListener('click', function () {
  document.body.classList.remove('active');
  nickPopup.classList.remove('active');
  document.querySelector('.inputNic').value = '';
  document.querySelector('.cautionText').innerHTML = '';
}); // 닉네임 변경 진행하는 함수

function isNickname(input) {
  var regex = /^[\uAC00-\uD7A3A-Za-z0-9]{2,12}$/;
  return regex.test(input);
} // csh 닉네임 수정 -------------------------------------------


subBtn.onclick = function () {
  var inputNic = document.querySelector('.inputNic').value;

  if (!isNickname(inputNic)) {
    document.querySelector('.cautionText').innerHTML = '닉네임 형식이 올바르지 않습니다.';
    document.querySelector('.cautionText').style.color = 'red';
    subBtn.style.marginTop = '83px';
  } else {
    document.body.classList.remove('active');
    nickPopup.classList.remove('active');
    nickName.innerHTML = inputNic;

    var _nowLogin = JSON.parse(localStorage.getItem("nowLogin"));

    var userInformation10 = JSON.parse(localStorage.getItem("userInformation"));
    var ui10n = _nowLogin.id - 1;
    _nowLogin.name = inputNic;
    userInformation10[ui10n].name = inputNic;
    localStorage.setItem("nowLogin", JSON.stringify(_nowLogin));
    localStorage.setItem("userInformation", JSON.stringify(userInformation10)); // localStorage.setItem('nowLogin', inputNic);
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // 팝업창 닫았을 때, 모든 값 초기화

    document.querySelector('.inputNic').value = '';
    document.querySelector('.cautionText').innerHTML = '';
  }
};

var nowLogin10 = JSON.parse(localStorage.getItem("nowLogin"));
document.querySelector(".accessInfo p span").innerHTML = nowLogin10.name; // let storageNic = localStorage.getItem('nowLogin');
// console.log(storageNic);
// if (storageNic) {
//     nickName.innerHTML = storageNic;
// }
// csh 닉네임 수정 -------------------------------------------
// ---------------------------------------------- 계좌 관리 ---------------------------------------------------------

var accountPopup = document.querySelector('.bankAccount');
var closeAccount = document.querySelector('.close_account');
var parentContainer = document.querySelector('.container');
var coins = JSON.parse(localStorage.getItem('coinInformation')); // 계좌관리 팝업창 활성화 함수

function bankPopup() {
  document.body.classList.toggle('active');
  accountPopup.classList.toggle('active');
  accountPopup.style.display = 'flex';
} // 계좌관리 팝업창 close


closeAccount.addEventListener('click', function () {
  document.body.classList.remove('active');
  accountPopup.classList.remove('active');
  accountPopup.style.display = 'none';
}); // 코인 검색 기능

var findCoin = document.querySelector('.findCoin');
var searchButton = document.querySelector('.searchCoinBtn');

function searchCoin(query) {
  var lists = parentContainer.querySelectorAll('.list-descrip');
  lists.forEach(function (list) {
    var nameElement = list.querySelector('.name');
    var isKoreanConsonant = /^[ㄱ-ㅎ]$/;

    if (isKoreanConsonant.test(query)) {
      // 검색어가 한글 자음인 경우
      var regExp = new RegExp('[' + query + ']', 'gi');

      if (regExp.test(nameElement.textContent)) {
        list.style.display = 'flex';
      } else {
        list.style.display = 'none';
      }
    } else {
      // 검색어가 일반 텍스트인 경우
      if (nameElement.textContent.toLowerCase().includes(query.toLowerCase())) {
        list.style.display = 'flex';
      } else {
        list.style.display = 'none';
      }
    }
  });
}

function handleSearch() {
  var query = findCoin.value;
  searchCoin(query);
}

findCoin.addEventListener('input', handleSearch); // 계좌관리 내 코인별 보유자산

var myCoin = document.querySelector('.myCoin');
var coinToKrwElements = [];

var coinCurrentPrice = _toConsumableArray(coinsInTradeJS.map(function (a, i) {
  return a.currentPrice;
}));

coinStystems.forEach(function (a, i) {
  if (i != 0) {
    // console.log(i,a)
    setInterval(function () {
      // 1초마다 코인의 현재 가격들을 변경 배열에 저장한다.
      coinCurrentPrice[i] = getRandomPrice(coins[i], coinStystems[i], i);
      coinsInTradeJS[i].currentPrice = coinCurrentPrice[i];
      setLocalStorage('coinInformation', coinsInTradeJS);
      coinToKrwElements[i].innerHTML = "".concat(coinCurrentPrice[i], " KRW");
    }, 1000);
  }
});

function renderCoinList() {
  coins.forEach(function (coin, i) {
    var ul = document.createElement('ul');
    var nameList = document.createElement('li');
    var percentList = document.createElement('li');
    var haveNumList = document.createElement('li');
    var iHaveCoin = document.createElement('strong');
    var coinToKrw = document.createElement('p');
    var myCoinUnit = document.createElement('span');
    var haveCoinUnit = document.createElement('div');
    ul.classList.add('list-descrip');
    nameList.classList.add('name');
    percentList.classList.add('percent');
    haveNumList.classList.add('haveNum');
    haveCoinUnit.classList.add('haveCoinUnit');
    parentContainer.appendChild(ul);
    ul.append(nameList, percentList, haveNumList);
    haveNumList.append(haveCoinUnit);
    haveCoinUnit.append(iHaveCoin, myCoinUnit);
    haveNumList.append(coinToKrw);
    iHaveCoin.append(document.createTextNode('0 '));
    coinToKrw.style.fontSize = '14px';
    haveNumList.style.display = 'flex';
    haveNumList.style.flexDirection = 'column';
    haveNumList.style.alignItems = 'flex-end';
    myCoinUnit.style.fontWeight = 'bold';
    nameList.innerHTML = coin.name;
    percentList.innerHTML = '0.00%';
    myCoinUnit.innerHTML = " ".concat(coin.symbol);
    coinToKrw.innerHTML = "".concat(coinCurrentPrice[i], " KRW");
    coinToKrwElements.push(coinToKrw); // peter가 보유한 코인에만 수량을 나타내는 함수
    // for (const key in peter.coin) {
    //     if (peter.coin[key].symbol === coin.symbol) {
    //         iHaveCoin.innerHTML = peter.coin[key].quantity;
    //         myCoin.innerHTML = peter.coin[key].quantity;
    //         break;
    //     }
    // }
  });
}

renderCoinList(); //------------Peter User test----------------

var totalMoney = document.querySelector('.moneyNum');
var accountNum = document.querySelectorAll('.thisBank');
var myMoney = document.querySelector('.myMoney');
var listDescrip = document.querySelectorAll('.list-descrip');
var coinQuantity = document.querySelector('.list-descrip .haveNum'); // let Peter = JSON.parse(localStorage.getItem('link'));
// accountNum.forEach(function (element) {
//     element.innerHTML = Peter.accountNumber;
// });
// if (Peter) {
//     nickName.innerHTML = Peter.name;
//     totalMoney.innerHTML = Peter.account;
//     myMoney.innerHTML = Peter.account;
//     // myCoin.innerHTML = Peter.coin.gyunil.quantity;
//     // coinQuantity.innerHTML = coins[i].currentPrice;
// }
//-------------------------------------------
// 계좌관리 내 코인소유량 표시

var coinName = document.querySelector('.list-descrip .name');
var coinPercentage = document.querySelector('.list-descrip .percent');
listDescrip.forEach(function (a, i) {
  listDescrip[0].style.backgroundColor = 'rgb(241, 236, 236)';
  a.addEventListener('click', function () {
    // 선택되지 않은 인덱스의 배경섹 제거
    listDescrip.forEach(function (element, index) {
      if (index !== i) {
        listDescrip[index].style.backgroundColor = '';
      }
    }); // 코인을 선택했을 때, 해당 코인 심볼로 바뀌는 함수

    listDescrip[i].style.backgroundColor = 'rgb(241, 236, 236)';
    document.querySelector('.tradeName span').innerHTML = coins[i].symbol;
    document.querySelector('.haveCoin .coinUnit').innerHTML = coins[i].symbol;
    document.querySelector('.tradeContent span').innerHTML = coins[i].symbol;
    document.querySelector('.inputMoney span').innerHTML = coins[i].symbol;
    document.querySelector('.out-money span').innerHTML = coins[i].symbol;
  });
}); // 계좌관리 내 입출금 섹터

var chargeTab = document.querySelector('.charge');
var withdrawTab = document.querySelector('.withdraw');
var historyTab = document.querySelector('.history');
var chargeBox = document.querySelector('.charge-tab');
var withdrawBox = document.querySelector('.withdraw-tab');
var historyBox = document.querySelector('.history-tab');
var chargeLabel = document.getElementById('charge');
var withdrawLabel = document.getElementById('withdraw');
var historyLabel = document.getElementById('history');
chargeBox.style.display = 'block';
withdrawBox.style.display = 'none';
historyBox.style.display = 'none';
chargeLabel.style.backgroundColor = 'rgb(241, 236, 236)';
chargeLabel.style.fontWeight = 'bold';

function switchTabs(activeTab) {
  chargeBox.style.display = 'none';
  withdrawBox.style.display = 'none';
  historyBox.style.display = 'none';
  chargeLabel.style.backgroundColor = '';
  withdrawLabel.style.backgroundColor = '';
  historyLabel.style.backgroundColor = '';
  chargeLabel.style.fontWeight = '';
  withdrawLabel.style.fontWeight = '';
  historyLabel.style.fontWeight = '';

  if (activeTab === 'charge') {
    chargeBox.style.display = 'block';
    chargeLabel.style.backgroundColor = 'rgb(241, 236, 236)';
    chargeLabel.style.fontWeight = 'bold';
  } else if (activeTab === 'withdraw') {
    withdrawBox.style.display = 'block';
    withdrawLabel.style.backgroundColor = 'rgb(241, 236, 236)';
    withdrawLabel.style.fontWeight = 'bold';
  } else if (activeTab === 'history') {
    historyBox.style.display = 'block';
    historyLabel.style.backgroundColor = 'rgb(241, 236, 236)';
    historyLabel.style.fontWeight = 'bold';
  }
}

chargeTab.onclick = function () {
  switchTabs('charge');
};

withdrawTab.onclick = function () {
  switchTabs('withdraw');
};

historyTab.onclick = function () {
  switchTabs('history');
}; // 계좌관리 내 입출금 전역변수


var depositInput = document.querySelector('.inputMoney input');
var withdrawInput = document.querySelector('.out-money-num');
var depositButton = document.querySelector('.applyInput');
var withdrawButton = document.querySelector('.applyout');
var historyList = document.querySelector('.history-tab'); // 입출금 입력창에 숫자만 입력 가능하도록 하는 함수

function nonNum(event) {
  var charCode = event.which;

  var _char = String.fromCharCode(charCode);

  if (!/^[0-9.]+$/.test(_char) || _char === '.' && event.target.value.indexOf('.') !== -1) {
    event.preventDefault();
  }
}

depositInput.addEventListener('keypress', nonNum);
withdrawInput.addEventListener('keypress', nonNum); // 입출금 신청시 입출금 내역에 저장되는 함수

function loadFromLocalStorage(key, defaultValue) {
  var storedValue = localStorage.getItem(key);
  return storedValue === null ? defaultValue : parseFloat(storedValue);
}

totalMoney.textContent = loadFromLocalStorage('totalMoney', 0);
myMoney.textContent = loadFromLocalStorage('myMoney', 0);

function getCurrentTime() {
  var now = new Date();
  var dateFormatter = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  return dateFormatter.format(now);
}

function addToHistory(name, money, state, timestamp) {
  var saveToLocalStorage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var ul = document.createElement('ul');
  var nameList = document.createElement('li');
  var moneyList = document.createElement('li');
  var stateList = document.createElement('li');
  var dateList = document.createElement('li');
  nameList.classList.add('Name');
  moneyList.classList.add('Money');
  stateList.classList.add('state');
  dateList.classList.add('Date');
  nameList.textContent = name;
  moneyList.textContent = money;
  stateList.textContent = state;
  dateList.textContent = timestamp;
  ul.append(nameList, moneyList, stateList, dateList);
  historyList.appendChild(ul); // '출금'이라는 텍스트에 빨강색을 입히기 위해 추가한 코드

  if (name === '출금') {
    nameList.classList.add('withdraw-text');
  } // window.localStorage.clear();


  if (saveToLocalStorage) {
    var newEntry = {
      name: name,
      money: money,
      state: state,
      date: getCurrentTime()
    };
    var history = JSON.parse(localStorage.getItem('history')) || [];
    history.push(newEntry);
    localStorage.setItem('history', JSON.stringify(history));
  }
} // '입금신청' 버튼 이벤트


depositButton.addEventListener('click', function () {
  var amount = parseFloat(depositInput.value);
  var timestamp = getCurrentTime();
  addToHistory('입금', amount, '입금완료', timestamp, true);

  if (isNaN(amount)) {
    alert('입금 금액을 입력하세요');
    return;
  }

  var currentTotal = parseFloat(totalMoney.textContent);
  var currentMyMoney = parseFloat(myMoney.textContent);
  totalMoney.textContent = currentTotal + amount;
  myMoney.textContent = currentMyMoney + amount;
  localStorage.setItem('totalMoney', totalMoney.textContent);
  localStorage.setItem('myMoney', myMoney.textContent);
}); // '출금신청' 버튼 이벤트

withdrawButton.addEventListener('click', function () {
  var amount = parseFloat(withdrawInput.value);
  var timestamp = getCurrentTime();
  addToHistory('출금', amount, '출금완료', timestamp, true);

  if (isNaN(amount)) {
    alert('출금 금액을 입력하세요');
    return;
  }

  var currentTotal = parseFloat(totalMoney.textContent);
  var currentMyMoney = parseFloat(myMoney.textContent);
  totalMoney.textContent = currentTotal - amount;
  myMoney.textContent = currentMyMoney - amount;
  localStorage.setItem('totalMoney', totalMoney.textContent);
  localStorage.setItem('myMoney', myMoney.textContent);
});

function loadHistory() {
  var history = JSON.parse(localStorage.getItem('history')) || [];
  historyList.innerHTML = '';
  history.forEach(function (entry) {
    addToHistory(entry.name, entry.money, entry.state, entry.date);
  });
}

loadHistory();