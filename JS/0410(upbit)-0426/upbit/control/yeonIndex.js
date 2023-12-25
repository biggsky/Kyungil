//--------------------------------------시가 종가 저가 고가를 return ------------------
// 현재 가격(정적으로 정함)
let currentPrice = 200
//코인의 시,종,고,저-----
function coin(prices){
    let start = prices[0]
    let end = prices[prices.length - 1];
    let max = Math.max(...prices);
    let min = Math.min(...prices);

   
    return{start, end, max, min};
}
//----------------------. obj하나 만들어서 현재코인의 시,종,저,고 data 를 만든다(obj 형식)----------
function currentCoin(){
    // 
    const coinPrice1 = [100,150,170,120]    
    const coinPrice2 = [150,130,150,90]
    const coinPrice3 = [130,100,150,80]
    const coinPrice4 = [100,160,160,110];
    
    return{coinPrice1,coinPrice2,coinPrice3,coinPrice4}

}
function getCurrentCoinData() {
    const coinPrice = currentCoin().coinPrice1;
    // 시가
    const start = coinPrice[0]; 
    // 종가
    const end = coinPrice[coinPrice.length - 1];
    // 고가
    const max = Math.max(...coinPrice);
    // 저가
    const min = Math.min(...coinPrice); 
    const currentCoinData = {
      start,
      end,
      max,
      min
    };
  
    return currentCoinData;
  }
  const CoinData = getCurrentCoinData();
  console.log(CoinData);

//---현재가격 return 하는 함수---
  function currentCoinPrice(){
    return currentPrice;
  }
  let a = currentCoinPrice();
  console.log(a);

//전 가격과 현재 가격의 차이 (정수로)
 function coinPriceDifferent(currentTimePrice,pastTimePrice){
    return currentTimePrice - pastTimePrice
 }
 coinPriceDifferent(23,12)

 //  매수매도 가격 평균값 return

 function getCoinAverage(buyPrice){
 let sum = buyPrice.reduce((sum,add)=>sum+add,0)
 let currentAverage = sum/buyPrice.length;
 console.log(currentAverage)
    return{currentAverage}
}

 getCoinAverage([1,2,3,4,5])

//굳












// function asf(){
//     return 3;
// }  

// let a =asf()
// for (const key in currentCoin()) {
//     function getCurrentCoinData() {
       
//         const coinPrice = currentCoin()[key];
//         const start = coinPrice[0]; 
//         const end = coinPrice[coinPrice.length - 1];
//         const max = Math.max(...coinPrice);
//         const min = Math.min(...coinPrice); 
//         const currentCoinData = {
//           start,
//           end,
//           max,
//           min
//         };
      
//         return currentCoinData;
//       }
//       console.log(getCurrentCoinData())
// }