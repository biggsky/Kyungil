// 상점에서의 아이템 정보
function Item(ATK, DEF, HP, MP) {
  this.ATK = ATK;
  this.DEF = DEF;
  this.HP = HP;
  this.MP = MP;
}


// weapon

let weapon_normal = new Item(10, 0, 0, 0);
let weapon_rare = new Item(30, 0, 0, 0);
let weapon_legend = new Item(50, 0, 0, 0);

let weapon_norm_info = document.querySelector(".weapon_normal .item_info");
console.log(weapon_norm_info)
let weapon_rare_info = document.querySelector(".weapon_rare .item_info");
let weapon_legend_info = document.querySelector(".weapon_legend .item_info");
// 가격
let price = 0;

weapon_norm_info.innerHTML =
  "ATK : " +
  weapon_normal.ATK +
  "&nbsp&nbsp" +
  "DEF : " +
  weapon_normal.DEF +
  "\n" +
  "<br>HP : " +
  weapon_normal.HP +
  "&nbsp&nbsp&nbsp" +
  "MP : " +
  weapon_normal.MP;
weapon_rare_info.innerHTML =
  "ATK : " +
  weapon_rare.ATK +
  "&nbsp&nbsp" +
  "DEF : " +
  weapon_rare.DEF +
  "\n" +
  "<br>HP : " +
  weapon_rare.HP +
  "&nbsp&nbsp&nbsp" +
  "MP : " +
  weapon_rare.MP;
weapon_legend_info.innerHTML =
  "ATK : " +
  weapon_legend.ATK +
  "&nbsp&nbsp" +
  "DEF : " +
  weapon_legend.DEF +
  "\n" +
  "<br>HP : " +
  weapon_legend.HP +
  "&nbsp&nbsp&nbsp" +
  "MP : " +
  weapon_legend.MP;

// armor

let armor_normal = new Item(0, 20, 0, 0);
let armor_rare = new Item(0, 60, 0, 0);
let armor_legend = new Item(0, 100, 0, 0);

let armor_norm_info = document.querySelector(".armor_normal .item_info");
let armor_rare_info = document.querySelector(".armor_rare .item_info");
let armor_legend_info = document.querySelector(".armor_legend .item_info");

armor_norm_info.innerHTML =
  "ATK : " +
  armor_normal.ATK +
  "&nbsp&nbsp" +
  "DEF : " +
  armor_normal.DEF +
  "\n" +
  "<br>HP : " +
  armor_normal.HP +
  "&nbsp&nbsp&nbsp" +
  "MP : " +
  armor_normal.MP;
armor_rare_info.innerHTML =
  "ATK : " +
  armor_rare.ATK +
  "&nbsp&nbsp" +
  "DEF : " +
  armor_rare.DEF +
  "\n" +
  "<br>HP : " +
  armor_rare.HP +
  "&nbsp&nbsp&nbsp" +
  "MP : " +
  armor_rare.MP;
armor_legend_info.innerHTML =
  "ATK : " +
  armor_legend.ATK +
  "&nbsp&nbsp" +
  "DEF : " +
  armor_legend.DEF +
  "\n" +
  "<br>HP : " +
  armor_legend.HP +
  "&nbsp&nbsp&nbsp" +
  "MP : " +
  armor_legend.MP;

// life

let life_normal = new Item(0, 0, 60, 0);
let life_rare = new Item(0, 0, 110, 0);
let life_legend = new Item(0, 0, 170, 0);

let life_norm_info = document.querySelector(".life_normal .item_info");
let life_rare_info = document.querySelector(".life_rare .item_info");
let life_legend_info = document.querySelector(".life_legend .item_info");

life_norm_info.innerHTML =
  "ATK : " +
  life_normal.ATK +
  "&nbsp&nbsp" +
  "DEF : " +
  life_normal.DEF +
  "\n" +
  "<br>HP : " +
  life_normal.HP +
  "&nbsp&nbsp&nbsp" +
  "MP : " +
  life_normal.MP;
life_rare_info.innerHTML =
  "ATK : " +
  life_rare.ATK +
  "&nbsp&nbsp" +
  "DEF : " +
  life_rare.DEF +
  "\n" +
  "<br>HP : " +
  life_rare.HP +
  "&nbsp&nbsp&nbsp" +
  "MP : " +
  life_rare.MP;
life_legend_info.innerHTML =
  "ATK : " +
  life_legend.ATK +
  "&nbsp&nbsp" +
  "DEF : " +
  life_legend.DEF +
  "\n" +
  "<br>HP : " +
  life_legend.HP +
  "&nbsp&nbsp&nbsp" +
  "MP : " +
  life_legend.MP;

// 아이템 구매 클릭 시 발생하는 event

let itemList = document.querySelectorAll(".item_price");
console.log(itemList);

for (let i = 0; i < itemList.length; i++) {
  itemList[i].addEventListener("click", () => {
    price = parseInt(itemList[i].innerText);
  });
}

function buy() {
  let popup = document.querySelector(".popup_background");

  if (popup.classList.contains("is_active")) {
    popup.classList.remove("is_active");
  } else {
    popup.classList.add("is_active");
  }
}
// 돈이 부족할 때 발생하는 event

let my_money = 1500;

let weapon_norm = 400;
let weapon_rar = 700;
let weapon_lege = 1100;

let armor_norm = 300;
let armor_rar = 600;
let armor_lege = 1300;

let life_norm = 300;
let life_rar = 700;
let life_lege = 1200;

let weapon;
let armor;
let life;

document.querySelector(
  ".game_money"
).innerHTML = `<img src="./etherium.png"> ${my_money}`;

document.querySelector(
  "#weapon_norm"
).innerHTML = `<img src="./etherium.png">${weapon_norm}`;
document.querySelector(
  "#weapon_rar"
).innerHTML = `<img src="./etherium.png">${weapon_rar}`;
document.querySelector(
  "#weapon_lege"
).innerHTML = `<img src="./etherium.png">${weapon_lege}`;

document.querySelector(
  "#armor_norm"
).innerHTML = `<img src="./etherium.png">${armor_norm}`;
document.querySelector(
  "#armor_rar"
).innerHTML = `<img src="./etherium.png">${armor_rar}`;
document.querySelector(
  "#armor_lege"
).innerHTML = `<img src="./etherium.png">${armor_lege}`;

document.querySelector(
  "#life_norm"
).innerHTML = `<img src="./etherium.png">${life_norm}`;
document.querySelector(
  "#life_rar"
).innerHTML = `<img src="./etherium.png">${life_rar}`;
document.querySelector(
  "#life_lege"
).innerHTML = `<img src="./etherium.png">${life_lege}`;


// yes버튼 눌렀을 때 함수

function onclickYes() {
  let popup = document.querySelector(".popup_background");

  if (my_money >= price) {
    popup.classList.remove("is_active");
    my_money = my_money - price;
    weapon = "normal";
    document.querySelector(
      ".game_money"
    ).innerHTML = `<img src="./etherium.png"> ${my_money}`;
    console.log(my_money);
  } else {
    let want = document.querySelector(".wanna_buy");
    want.innerHTML =
      "you don't have enough money!!<button class='ok2'>Okay..</button>";
    let btn = document.querySelector(".ok2");
    btn.onclick = function () {
      popup.classList.remove("is_active");
    };
  }

  // } else if(my_money - item2 >= 0){
  //     popup.classList.remove('is_active');
  //     my_money = my_money - item2;

  // } else if(my_money - item3 >= 0){
  //     popup.classList.remove('is_active');
  //     my_money = my_money - item3;

  // } else{
  //     let want = document.querySelector('.wanna_buy')
  //     want.innerHTML = "you don't have enough money!!<button class='ok2'>Okay..</button>"
  //     let btn = document.querySelector('.ok2');
  //     btn.onclick = function(){
  //         popup.classList.remove('is_active');
  //     }
  // }
}

function nomalWeapon(params) {
  if (my_money - weapon_norm >= 0) {
    popup.classList.remove("is_active");
    my_money = my_money - weapon_norm;
    weapon = "normal";
    console.log(my_money);
    document.querySelector(
      ".game_money"
    ).innerHTML = `<img src="./etherium.png"> ${my_money}`;
  }
}

console.log(my_money);

//토글 함수
function toggle(a) {
  let weapon = document.querySelector(".weapon_item");
  let armor = document.querySelector(".armor_item");
  let life = document.querySelector(".life_item");
  if (getComputedStyle(weapon).display === "none") {
    weapon.style.display = "block";
    armor.style.display = "none";
    life.style.display = "none";
  } else if (getComputedStyle(armor).display === "none") {
    armor.style.display = "block";
    weapon.style.display = "none";
    life.style.display = "none";
    console.log(weapon.style.display);
    console.log(getComputedStyle(weapon).display);
  } else if (getComputedStyle(life).display === "none") {
    life.style.display = "block";
    weapon.style.display = "none";
    armor.style.display = "none";
    console.log(life.style.display);
    console.log(getComputedStyle(life).display);
  }
}

function temp(params) {
  console.log(params);
}

// function noMoney() {
//     let noPopup = document.querySelector('.noMoney_background');
//     let my_money = parseInt(document.querySelector('.game_money'));
//     let items = parseInt(document.querySelectorAll('.item_price'));

//     console.log(noPopup.className);
//     console.log(noPopup.classList);

//     if (noPopup.classList.contains('is_active') || my_money < items) {  // 팝업 비활성화
//         noPopup.classList.remove('is_active');  // 팝업 활성화
//     } else {
//         noPopup.classList.add('is_active'); // 팝업 비활성화
//     }
// }

// let my_money = document.querySelector('.game_money');
// let items = document.querySelectorAll('.item_price');

// function buy() {
//     if (confirm('구매하시겠습니까?')) {
//         if (my_money >= items) {
//             alert('감사합니다.');
//             my_money = my_money - items;
//         } else {
//             alert('돈이 부족합니다.');
//         }
//     } else {

//     }
// }
