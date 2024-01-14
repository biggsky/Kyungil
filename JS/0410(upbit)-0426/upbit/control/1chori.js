
let coins = JSON.parse(localStorage.getItem('coinInformation'));
let priceRange = JSON.parse(localStorage.getItem('priceRangeInfo'));


function YaxisRange(coin) {
    // const currentPrice = parseFloat(coin.currentPrice);
    // 코인 가격 범위
    const min = coin.min; // y축 최솟값
    const max = coin.max; // y축 최댓값
    const lowRateMin = coin.lowRateMin;
    const lowRateMax = coin.lowRateMax;
    let randomPrice = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(min, max, lowRateMin, lowRateMax);

    // 특정 범위의 값 10%확률로 출력
    const tenPercent = Math.random();
    if (tenPercent <= 0.1) { // 10% 확률(필요시 확률 조정할 것)
        const zeroTohundred = Math.random();  // 0에서 1 사이의 랜덤한 확률 값을 생성
        if (Math.random() < zeroTohundred) {
            randomPrice = Math.floor(Math.random() * (lowRateMin - min + 1)) + min; // 특정 범위 이하의 값 생성
        } else { 
            randomPrice = Math.floor(Math.random() * (max - lowRateMax + 1)) + lowRateMax; // 특정 범위 이상의 값 생성
        }
    } else {
        // 90% 확률로 특정 범위 외의 값 생성
        randomPrice = Math.floor(Math.random() * (lowRateMax - lowRateMin + 1)) + lowRateMin;
    }

    return randomPrice;
}

function printRandomValue(startPrice) {
    const interval = 1000; // 1초 간격
    const duration = 5000; // 5초 동안

    let elapsed = 0;
    const randomPrices = [startPrice]; // 시작 가격을 포함하는 randomPrices 배열 생성

    const timer = setInterval(() => {
        const randomPrice = YaxisRange(priceRange[2]);  // YaxisRange 함수를 호출하여 랜덤 가격 생성
        randomPrices.push(randomPrice); // 생성된 랜덤 가격을 배열에 추가
        console.log("Random Price: ", randomPrice);


        elapsed += interval;
        if (elapsed >= duration) {
            clearInterval(timer);  // 경과 시간이 duration에 도달하면 timer를 멈춘다
            const minValue = Math.min(...randomPrices);
            const maxValue = Math.max(...randomPrices);
            const minMaxArray = [minValue, maxValue];
            console.log("All Random Prices: ", randomPrices); // 5초가 지난 후 모든 랜덤 가격 출력
            console.log("Lowest and Highest Prices: ", minMaxArray);
            printRandomValue(randomPrices[randomPrices.length - 1]); // 마지막 랜덤 가격을 시작 가격으로 사용하여 함수를 다시 실행
        }
    }, interval);
}

printRandomValue(parseFloat(coins[2].currentPrice));


