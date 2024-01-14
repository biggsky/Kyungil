let loginUser = JSON.parse(localStorage.getItem("nowLogin"));
console.log(loginUser.coinVolume.GIC);
// ----------------------------------------------------닉네임 변경---------------------------------------------------

let nickName = document.querySelector('.accessInfo span');
let changNicBtn = document.querySelector('.changeNic');
let subBtn = document.querySelector('.submit');
let closeBtn = document.querySelector('.close');
let nickPopup = document.querySelector('.nickName');

// 닉네임 변경 팝업창 활성화하는 함수
function popup() {
    document.body.classList.toggle('active');
    nickPopup.classList.toggle('active');
}

// 닉네임 팝업창 close
closeBtn.addEventListener('click', () => {
    document.body.classList.remove('active');
    nickPopup.classList.remove('active');
    document.querySelector('.inputNic').value = '';
    document.querySelector('.cautionText').innerHTML = '';
})

// 닉네임 변경 진행하는 함수
function isNickname(input) {
    const regex = /^[\uAC00-\uD7A3A-Za-z0-9]{2,12}$/;
    return regex.test(input);
}


// csh 닉네임 수정 -------------------------------------------
subBtn.onclick = function () {
    let inputNic = document.querySelector('.inputNic').value;

    if (!isNickname(inputNic)) {
        document.querySelector('.cautionText').innerHTML = '닉네임 형식이 올바르지 않습니다.';
        document.querySelector('.cautionText').style.color = 'red';
        subBtn.style.marginTop = '83px';
    } else {
        document.body.classList.remove('active');
        nickPopup.classList.remove('active');
        nickName.innerHTML = inputNic;

        let nowLogin10 = JSON.parse(localStorage.getItem("nowLogin"));
        let userInformation10 = JSON.parse(localStorage.getItem("userInformation"));
        let ui10n = (nowLogin10.id) - 1;

        nowLogin10.name = inputNic;
        userInformation10[ui10n].name = inputNic;

        localStorage.setItem("nowLogin", JSON.stringify(nowLogin10));
        localStorage.setItem("userInformation", JSON.stringify(userInformation10));

        // localStorage.setItem('nowLogin', inputNic);

        // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

        // 팝업창 닫았을 때, 모든 값 초기화
        document.querySelector('.inputNic').value = '';
        document.querySelector('.cautionText').innerHTML = '';
    }
}


let nowLogin10 = JSON.parse(localStorage.getItem("nowLogin"));
document.querySelector(".accessInfo p span").innerHTML = nowLogin10.name;

// let storageNic = localStorage.getItem('nowLogin');
// console.log(storageNic);
// if (storageNic) {
//     nickName.innerHTML = storageNic;
// }

// csh 닉네임 수정 -------------------------------------------


// ---------------------------------------------- 계좌 관리 ---------------------------------------------------------

let accountPopup = document.querySelector('.bankAccount');
let closeAccount = document.querySelector('.close_account');
let parentContainer = document.querySelector('.container');
let coins = JSON.parse(localStorage.getItem('coinInformation'));


// 계좌관리 팝업창 활성화 함수
function bankPopup() {
    document.body.classList.toggle('active');
    accountPopup.classList.toggle('active');
    accountPopup.style.display = 'flex';
}



// 계좌관리 팝업창 close
closeAccount.addEventListener('click', () => {
    document.body.classList.remove('active');
    accountPopup.classList.remove('active');
    accountPopup.style.display = 'none';
})


// 코인 검색 기능

const findCoin = document.querySelector('.findCoin');
const searchButton = document.querySelector('.searchCoinBtn');

function searchCoin(query) {
    const lists = parentContainer.querySelectorAll('.list-descrip');
    lists.forEach((list) => {
        const nameElement = list.querySelector('.name');
        const isKoreanConsonant = /^[ㄱ-ㅎ]$/;

        if (isKoreanConsonant.test(query)) {
            // 검색어가 한글 자음인 경우
            const regExp = new RegExp('[' + query + ']', 'gi');
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
    const query = findCoin.value;
    searchCoin(query);
}

findCoin.addEventListener('input', handleSearch);






// 계좌관리 내 코인별 보유자산
let myCoin = document.querySelector('.myCoin');
let coinToKrwElements = [];
let coinCurrentPrice = [
    // 코인의 현재가를 map으로 반환하고 slice로 원화를 잘라줌
    ...coinsInTradeJS
        .map((a, i) => {
            return a.currentPrice;
        })
    // .slice(1),
];

coinStystems.forEach((a, i) => {
    if (i != 0) {
        // console.log(i,a)
        setInterval(() => {
            // 1초마다 코인의 현재 가격들을 변경 배열에 저장한다.
            coinCurrentPrice[i] = getRandomPrice(
                coins[i],
                coinStystems[i],
                i
            );
            coinsInTradeJS[i].currentPrice = coinCurrentPrice[i]

            setLocalStorage('coinInformation', coinsInTradeJS)

            coinToKrwElements[i].innerHTML = `${coinCurrentPrice[i]} KRW`;
        }, 1000);
    }
});

function renderCoinList() {
    coins.forEach((coin, i) => {
        let ul = document.createElement('ul');
        let nameList = document.createElement('li');
        let percentList = document.createElement('li');
        let haveNumList = document.createElement('li');
        let iHaveCoin = document.createElement('strong');
        let coinToKrw = document.createElement('p');
        let myCoinUnit = document.createElement('span');
        let haveCoinUnit = document.createElement('div');
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
        // iHaveCoin.append(document.createTextNode('0 '));

        coinToKrw.style.fontSize = '14px';
        haveNumList.style.display = 'flex';
        haveNumList.style.flexDirection = 'column';
        haveNumList.style.alignItems = 'flex-end';
        myCoinUnit.style.fontWeight = 'bold';

        nameList.innerHTML = coin.name;
        percentList.innerHTML = '0.00%';
        myCoinUnit.innerHTML = ` ${coin.symbol}`;
        coinToKrw.innerHTML = `${coinCurrentPrice[i]} KRW`;
        coinToKrwElements.push(coinToKrw);
        if (i == 0) {

        } else {
            iHaveCoin.innerHTML = loginUser.coinVolume[coin.symbol];
            myCoin.innerHTML = loginUser.coinVolume[coin.symbol];

        }
    })
}
renderCoinList();




let totalMoney = document.querySelector('.moneyNum');
let accountNum = document.querySelectorAll('.thisBank');

let myMoney = document.querySelector('.myMoney');
let listDescrip = document.querySelectorAll('.list-descrip');
let coinQuantity = document.querySelector('.list-descrip .haveNum');



// 계좌관리 내 코인소유량 표시

let coinName = document.querySelector('.list-descrip .name');
let coinPercentage = document.querySelector('.list-descrip .percent');

listDescrip.forEach((a, i) => {
    listDescrip[0].style.backgroundColor = 'rgb(241, 236, 236)';
    a.addEventListener('click', () => {

        // 선택되지 않은 인덱스의 배경섹 제거
        listDescrip.forEach((element, index) => {
            if (index !== i) {
                listDescrip[index].style.backgroundColor = '';
            }
        });

        // 코인을 선택했을 때, 해당 코인 심볼로 바뀌는 함수
        listDescrip[i].style.backgroundColor = 'rgb(241, 236, 236)';
        document.querySelector('.tradeName span').innerHTML = coins[i].symbol;
        document.querySelector('.haveCoin .coinUnit').innerHTML = coins[i].symbol;
        document.querySelector('.tradeContent span').innerHTML = coins[i].symbol;
        document.querySelector('.inputMoney span').innerHTML = coins[i].symbol;
        document.querySelector('.out-money span').innerHTML = coins[i].symbol;

    })
})




// 계좌관리 내 입출금 섹터

let chargeTab = document.querySelector('.charge');
let withdrawTab = document.querySelector('.withdraw');
let historyTab = document.querySelector('.history');

let chargeBox = document.querySelector('.charge-tab');
let withdrawBox = document.querySelector('.withdraw-tab');
let historyBox = document.querySelector('.history-tab');

let chargeLabel = document.getElementById('charge');
let withdrawLabel = document.getElementById('withdraw');
let historyLabel = document.getElementById('history');


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
};




// 계좌관리 내 입출금 전역변수

const depositInput = document.querySelector('.inputMoney input');
const withdrawInput = document.querySelector('.out-money-num');
const depositButton = document.querySelector('.applyInput');
const withdrawButton = document.querySelector('.applyout');
const historyList = document.querySelector('.history-tab');




// 입출금 입력창에 숫자만 입력 가능하도록 하는 함수

function nonNum(event) {
    const charCode = event.which;
    const char = String.fromCharCode(charCode);

    if (!/^[0-9.]+$/.test(char) || (char === '.' && event.target.value.indexOf('.') !== -1)) {
        event.preventDefault();
    }
}

depositInput.addEventListener('keypress', nonNum);
withdrawInput.addEventListener('keypress', nonNum);



// 입출금 신청시 입출금 내역에 저장되는 함수
let thisCoinUnit = document.querySelector('.haveNum p');
let thisCoinHave = document.querySelector('.haveCoinUnit strong');

if (loginUser) {
    totalMoney.textContent = loginUser.account || 0;
    myMoney.textContent = loginUser.account || 0;
} else {
    totalMoney.textContent = 0;
    myMoney.textContent = 0;
}

function getCurrentTime() {
    const now = new Date();
    const dateFormatter = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
    return dateFormatter.format(now);
}


function addToHistory(name, money, state, timestamp, saveToLocalStorage = false) {
    const ul = document.createElement('ul');
    const nameList = document.createElement('li');
    const moneyList = document.createElement('li');
    const stateList = document.createElement('li');
    const dateList = document.createElement('li');
    nameList.classList.add('Name');
    moneyList.classList.add('Money');
    stateList.classList.add('state');
    dateList.classList.add('Date');
    nameList.textContent = name;
    moneyList.textContent = money;
    stateList.textContent = state;
    dateList.textContent = timestamp;

    ul.append(nameList, moneyList, stateList, dateList);
    historyList.appendChild(ul);

    // '출금'이라는 텍스트에 빨강색을 입히기 위해 추가한 코드
    if (name === '출금') {
        nameList.classList.add('withdraw-text');
    }
    // window.localStorage.clear();
    if (saveToLocalStorage) {
        const newEntry = { name, money, state, date: getCurrentTime() };
        let history = JSON.parse(localStorage.getItem('history')) || [];
        history.push(newEntry);
        localStorage.setItem('history', JSON.stringify(history));
    }
}


// '입금신청' 버튼 이벤트
depositButton.addEventListener('click', () => {
    const amount = parseFloat(depositInput.value);
    const timestamp = getCurrentTime();
    addToHistory('입금', amount, '입금완료', timestamp, true);

    if (isNaN(amount)) {
        alert('입금 금액을 입력하세요');
        return;
    }

    const currentTotal = parseFloat(totalMoney.textContent);
    const currentMyMoney = parseFloat(myMoney.textContent);
    const userAccount = parseFloat(loginUser.account);
    const updatedTotalMoney = currentTotal + amount;
    const updatedMyMoney = currentMyMoney + amount;

    totalMoney.textContent = updatedTotalMoney;
    myMoney.textContent = updatedMyMoney;

    // Update loginUser object
    // loginUser.totalMoney = updatedTotalMoney;
    loginUser.account = updatedMyMoney;

    localStorage.setItem('nowLogin', JSON.stringify(loginUser));

    // totalMoney.textContent = (currentTotal + userAccount);
    // myMoney.textContent = (currentMyMoney + amount);
    // localStorage.setItem('totalMoney', totalMoney.textContent);
    // localStorage.setItem('myMoney', myMoney.textContent);
});



// '출금신청' 버튼 이벤트
withdrawButton.addEventListener('click', () => {
    const amount = parseFloat(withdrawInput.value);
    const timestamp = getCurrentTime();
    addToHistory('출금', amount, '출금완료', timestamp, true);

    if (isNaN(amount)) {
        alert('출금 금액을 입력하세요');
        return;
    }

    const currentTotal = parseFloat(totalMoney.textContent);
    const currentMyMoney = parseFloat(myMoney.textContent);
    const updatedTotalMoney = currentTotal - amount;
    const updatedMyMoney = currentMyMoney - amount;
    // totalMoney.textContent = (currentTotal - amount);
    // myMoney.textContent = (currentMyMoney - amount);

    totalMoney.textContent = updatedTotalMoney;
    myMoney.textContent = updatedMyMoney;

    loginUser.account = updatedMyMoney;

    localStorage.setItem('nowLogin', JSON.stringify(loginUser));
    // localStorage.setItem('totalMoney', totalMoney.textContent);
    // localStorage.setItem('myMoney', myMoney.textContent);
});


function loadHistory() {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    historyList.innerHTML = '';
    history.forEach((entry) => {
        addToHistory(entry.name, entry.money, entry.state, entry.date);
    });
}

loadHistory();

