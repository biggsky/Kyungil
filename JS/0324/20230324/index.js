let popupBtn = document.querySelector(".popup-btn");
let popupEvent = document.querySelector('.event-btn');
let popupCookie = getCookie("event-popup");

function popupOpen(){
    let popup = document.querySelector('.popup-wrap');
    if(popup.classList.contains("is-on")){
        popup.classList.remove('is-on');
    }else{
        popup.classList.add('is-on');
    }
}

popupBtn.addEventListener("click",popupOpen);


popupEvent.addEventListener("click",function(){
    console.log('이벤트');
    // 쿠키 추가
    // 하루동안 유지되는 쿠키 생성.
    setCookie("event-popup",true,10);
})

// 문자로 저장되는구나. 쿠키, 로컬스토리지 둘다
// 코딩을하면서 데이터를 저장할때 문자열로 저장한다.
console.log(typeof getCookie("event-popup"))
// 하루동안 팝업 안보이기

// 쿠키값이 없으면 팝업이 작동하게 팝업이 뜨게
// 쿠키값이 없으면 undefined
if(popupCookie == undefined)
{
    popupOpen();
}


function getCookie(c_name)
{
   var i,x,y,ARRcookies=document.cookie.split(";");
   for (i=0;i<ARRcookies.length;i++)
   {
     x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
     y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
     x=x.replace(/^\s+|\s+$/g,"");
     if (x==c_name)
     {
       return unescape(y);
     }
   }
}

function setCookie(c_name,value,time){
    let date = new Date();
    date.setTime(date.getTime() + time * 1000);

    let str = c_name+"="+value+";expires="+date.toUTCString()+";path=/";
    let str2 = getCookieTime(str);
    // 문자열로 데이터를 저장하는데
    // 값이 여러개일경우
    // 배열이라던지 객체를 사용
    // 여러가지의 값을 사용해야하기때문에 객체의 모양으로 문자열을 전달하고
    // 문자열을 받아서 객체로 변환하여 사용하자.
    console.log(getCookieTime(c_name+"="+value+";expires="+date.toUTCString()+";path=/"));
    document.cookie = c_name+"="+`{"value" : "${value}", "time" : "${str2}"}`+";expires="+date.toUTCString()+";path=/"
    let value2 = getCookie("event-popup");
    console.log(JSON.parse(value2));
}

function getCookieTime(cookie){
    // 쿠키 문자열을 받아서 배열로 변환
    let str = cookie.split(';');
    let str2 = str.find(function(i){
        let temp = i.trim();
        return temp.startsWith('expires=');
    })
    if(str2){
        let str3 = str2.trim();
        console.log(str3);
        // 쿠키의 시간을 받아서 시간의 정보들을 다루는 
        // Date객체를 만들어줬다.
        return new Date(str3);
    }else{
        return null;
    }
}

// trim 메소드 : 문자열 양끝의 공백을 제거
let a = "    a b     ";
console.log(a);
console.log(a.trim());

// startsWith 메소드 : 해당 문자로 시작하는지 여부
// 매개변수로 시작하는 문자열 전달해주면 된다.

let b = "abcd";
console.log(b.startsWith("abc"))


// 시간의 차이를 구해서 값을 받아보자
// 밀리초를 받아서 시간이 얼마나 남은건지 확인하는 함수
// 시간계산을 할때 언제 시간이 만료되는지 알고있으면 되는거죠?
// 지금 시간의 정보를 가지고있는 Date객체를 만들어서
// 미래 시간의 밀리초와 지금 만든 Date객체의 밀리초를 빼면
// 차이값이 나오는데 그 차이값(밀리초)를 가지고 날짜와 시간과 분,초 이렇게 나타내주기만 하면 된다.
// times함수로 밀리초를 가지고 날짜 시간 분 초가 얼마나 남은건지.
let dateTemp = 1000;


// 비동기 함수 setTimeout이 함수는 매개변수로 전달한 시간이후에 실행되는 함수.
// setTimeout(() => {
//     // 1초뒤에 실행
// }, 1000);

// 비동기 함수
// 매초마다 동작하는 함수를 만들어보자
// 정한 시간마다 동작하는 함수
// 매개변수로 전달한 시간마다 동작한다.
// let date1 = new Date();
// date1.setTime(date1.getTime() + 100000);
// let time = JSON.parse(popupCookie).time;
// let date = new Date(time);
//console.log(date);
// setInterval 제거 방법
let setTime = setInterval(() => {
    let date2 = new Date();
    // // 값이 들어온것 객체가 아니고
    // let time = date1.getTime() - date2.getTime();
    // // 1초마다 실행
    // times(time);
    let timeTag = document.querySelector('.popup-time');
    if(popupCookie != undefined)
    {
        let time = JSON.parse(popupCookie).time;
        let date = new Date(time);
        console.log(date);
        console.log(date2);
        console.log(popupTime(date,date2));
        timeTag.innerHTML = times(popupTime(date, date2));
    }else{
        timeTag.innerHTML = "시간끝";
    }
}, 1000);

function popupTime(date1,date2) {
    return date1.getTime() - date2.getTime();
}

function times(time){
    // let sec = Math.floor(time / (24*60*60*1000));
    // let min = Math.floor(time / (60*60*1000));
    // console.log(min);
    let day = Math.floor(time / (24 * 60 * 60 * 1000));
    // 받아온 시간에서 날짜가 하루 단위가 있으면 나눠서 값을 넣어주고
    // 일단위를 빼고
    time %= (24 * 60 * 60 *1000);
    let hour = Math.floor(time / (60 * 60 * 1000));
    // 시간단위를 빼고
    time %= (60 * 60 * 1000);
    let min = Math.floor(time /(60 * 1000));
    // 분단위를 다빼고
    time %= (60 * 1000)
    // 남은 초
    let sec = Math.floor(time / 1000);
    console.log(day);
    console.log(hour);
    console.log(min);
    console.log(sec);
    if(time < 0)
    {
        // 지울 Interval 함수 매개변수로 전달하면된다.
        clearInterval(setTime);
        let timeTag = document.querySelector('.popup-time');
        timeTag.innerHTML = "";
    }
    return `${day}일 ${hour}시 ${min}분 ${sec}초`;
}

// 