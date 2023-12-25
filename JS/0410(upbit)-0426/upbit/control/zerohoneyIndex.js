// --------임시 데이터----------------
let tempCurrentPrice = 1000;
let tradingVolume = 8;
//임시 데이터인 이재용을 가져와 nowLogin 변경
setLocalStorage('nowLogin',getLocalStorage('userInformation',21));


// localStorage.setItem(
//   "nowLogin",
//   JSON.stringify(JSON.parse(localStorage.getItem("userInformation"))[21])
// );


// nowLogin을 가져온다. 실제 페이지에선 실제 데이터를 가져오지만, 현재는 임시데이터를 가져오게 된다.
let loginUser = getLocalStorage('nowLogin');

// 유저가 거래했다는 임의의 코인 실제 코인도 이와 똑같은 형식으로 정의돼야 작동된다.
let tradeCoin = new Coin(SZC, 5, loginUser.id);

// --------임시 데이터----------------

// 매수/매도 가격, 이는 현재가의 평균값이면 5초마다 갱신된다. 연수한테 받아 와야함
let averagePrice = 2000;
//현재 로그인한 유저를 가져오는 함수

// 로그인한 유저 확인
function checkLoginUSer() {
  alert("이름은" + loginUser.name + "계좌잔액은" + loginUser.account);
}

// 현재 로그인한 유저의 정보를 구조분해 할당으로 가져옴
function getUserInformation() {
  let name = loginUser.name;
  let account = loginUser.account;
  let coin = loginUser.coin;
  let email = loginUser.email;
  let id = loginUser.id;
  let isAdmin = loginUser.isAdmin;
  let tradeSum = loginUser.tradeSum;
  return { name, account, coin, email, id, isAdmin, tradeSum };
}

// 구조분해 할당으로 변수에 할당

let { name, account, coin, email, id, isAdmin, tradeSum } =
  getUserInformation();

// ********************************************************************************************
// *** WARNING: 아래 함수는 하드코딩된 변수를 사용하였습니다! 동적으로 할당될 시 이 경고 문구는 지워집니다. ***
// ********************************************************************************************

//   매수하는 함수 tradeCoinReal은 실제 코인
const calculateBuy = (userId, userAccount, tradeCoinReal) => {
  if (
    userAccount <
    tradeCoin.quantity * parseInt(tradeCoin.coinObj["currentPrice"])
  ) {
    alert("돈이 부족합니다!");
    return;
  }
  // userInformation에서 가져와 매수를 한 후 return된 전혀 새로운 변수다. 이 변수가 localstorage에 새로 들어가게 된다.
  let newUserData = JSON.parse(localStorage.getItem("userInformation")).map(
    (a) => {
      // 만약 userInformation에서의 한 요소의 id가 현재 user의 id랑 같다면 데이터를 update를 해준다.
      if (a.id === userId) {
        // 계좌 계산
        a.account =
          userAccount -
          tradeCoin.quantity * parseInt(tradeCoin.coinObj["currentPrice"]);
        //   키값을 찾기위한 변수 선언
        let coinName = tradeCoin.coinObj["symbol"];
        // 매수를 하였으므로 해당하는 코인의 volume을 변경해줘야 한다.
        a.coinVolume = {
          ...a.coinVolume,
          [coinName]: a.coinVolume[coinName] + tradeCoin.quantity,
        };
        //   코인 userInformation에 추가
        a.coin = [...a.coin, tradeCoin];
        // 거래 횃수 +1
        a.tradeSum += 1;
      }
      return a;
    }
  );
  //   최종 수정된 newUserData가 들어오게 된다.
  setLocalStorage('userInformation',newUserData);
  // localStorage.setItem("userInformation", JSON.stringify(newUserData));

  console.log(newUserData);
};

// 매도하는 함수
const calculateSell = (userId, userAccount, tradeCoinReal) => {
  let newUserData = JSON.parse(localStorage.getItem("userInformation")).map(
    (a) => {
      // 만약 userInformation에서의 한 요소의 id가 현재 user의 id랑 같다면 데이터를 update를 해준다.
      if (a.id === userId) {
        // 계좌 계산
        a.account =
          userAccount +
          tradeCoin.quantity * parseInt(tradeCoin.coinObj["currentPrice"]);
        //   키값을 찾기위한 변수 선언
        let coinName = tradeCoin.coinObj["symbol"];
        // 매수를 하였으므로 해당하는 코인의 volume을 변경해줘야 한다.

        try {
          // 해당 코인의 개수가 0이 아니라면
          if (a.coinVolume[coinName] >= tradeCoin.quantity) {
            a.coinVolume = {
              ...a.coinVolume,
              [coinName]: a.coinVolume[coinName] - tradeCoin.quantity,
            };
          } else {
            throw new Error("수가 부족합니다!");
          }
        } catch (error) {
          alert(error.message);
        }

        //   코인 userInformation에 추가
        a.coin = [...a.coin, tradeCoin];
        // 거래 횃수 +1
        a.tradeSum += 1;
      }
      return a;
    }
  );
  //   최종 수정된 newUserData가 들어오게 된다.
  setLocalStorage('userInformation',newUserData);
  // localStorage.setItem("userInformation", JSON.stringify(newUserData));

  console.log(newUserData);
};
calculateSell(id, account);
checkLoginUSer()