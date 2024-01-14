// 스파이더맨
let spiderManNormal =
  '<img class="zerohoney-hero-image" src="./resource/image/spiderman_normal.png" alt="" />';
let spiderManDamaged =
  '<img class="zerohoney-hero-image" src="./resource/image/spiderman_damaged.png" alt="" />';
let spiderManDefense =
  '<img class="zerohoney-hero-image" src="./resource/image/spiderman_defense.png" alt="" />';
let spiderManAttack =
  '<img class="zerohoney-hero-image" src="./resource/image/spiderman_attack.png" alt="" />';
let spiderManAttack2 =
  '<img class="zerohoney-hero-image" src="./resource/image/spiderman_attac2.png" alt="" />';
let spiderManSkill =
  '<img class="zerohoney-hero-image" src="./resource/image/spiderman_skill.png" alt="" />';

// 일렉트로
let electroNormal =
  '<img class="zerohoney-villan-image" src="./resource/image/electro_normal.png" alt="" />';
let electroDamaged =
  '<img class="zerohoney-villan-image" src="./resource/image/electro_damaged.png" alt="" />';
let electroDefense =
  '<img class="zerohoney-villan-image" src="./resource/image/electro_defense.png" alt="" />';
let electroAttack =
  '<img class="zerohoney-villan-image" src="./resource/image/electro_attack.png" alt="" />';
let electroSkill =
  '<img class="zerohoney-villan-image" src="./resource/image/electro_skill.png" alt="" />';
// 베놈
let venomNormal =
  '<img class="zerohoney-villan-image" src="./resource/image/venom_normal.png" alt="" />';
let venomDamaged =
  '<img class="zerohoney-villan-image" src="./resource/image/venom_damaged.png" alt="" />';
let venomDefense =
  '<img class="zerohoney-villan-image" src="./resource/image/venom_defense.png" alt="" />';
let venomAttack =
  '<img class="zerohoney-villan-image" src="./resource/image/venom_attack.png" alt="" />';
let venomSkill =
  '<img class="zerohoney-villan-image" src="./resource/image/venom_skill.png" alt="" />';
// 타노스
let thanosNormal =
  '<img class="zerohoney-villan-image" src="./resource/image/thanos_normal.png" alt="" />';
let thanosDamaged =
  '<img class="zerohoney-villan-image" src="./resource/image/thanos_dameged.png" alt="" />';
let thanosDefense =
  '<img class="zerohoney-villan-image" src="./resource/image/thanos_defense.png" alt="" />';
let thanosAttack =
  '<img class="zerohoney-villan-image" src="./resource/image/thanos_attack.png" alt="" />';
let thanosSkill =
  '<img class="zerohoney-villan-image" src="./resource/image/thanos_skill.png" alt="" />';

//   전역변수
let zerohoneyTurn = "hero";
// 히어로의 현재 위치
let zerohoneyBeforeHeroTile = "";
// 빌런의 현재 위치
let zerohoneyBeforeVillanTile = "";
let isAuto = true;
// 빌런을 담고 있는 오브젝트
let villans = {
  electro: {
    who: "electro",
    info: electro,
    normal: electroNormal,
    defense: electroDefense,
    damaged: electroDamaged,
    attack: electroAttack,
    skill: electroSkill,
  },
  venom: {
    who: "venom",
    info: venom,
    normal: venomNormal,
    defense: venomDefense,
    damaged: venomDamaged,
    attack: venomAttack,
    skill: venomSkill,
  },
  thanos: {
    who: "thanos",
    info: thanos,
    normal: thanosNormal,
    defense: thanosDefense,
    damaged: thanosDamaged,
    attack: thanosAttack,
    skill: thanosSkill,
  },
};
// 현재 빌런
let mainVillan = {
  who: villans.electro.who,
  info: villans.electro.info,
  normal: villans.electro.normal,
  defense: villans.electro.defense,
  damaged: villans.electro.damaged,
  attack: villans.electro.attack,
  skill: villans.electro.skill,
};
let stage = 1;
let zerohoneyChangeStringNumberToInteger = {
  first: 1,
  second: 2,
  third: 3,
  forth: 4,
};
let zerohoneyChangeStringIntegerToNumber = {
  1: "first",
  2: "second",
  3: "third",
  4: "forth",
};
// 로드시 빌런생성
window.onload = () => {
  document.querySelector("#zerohoney-main-stage-third-row-forth").innerHTML =
    mainVillan.normal;
};
// 이동하기
document
  .querySelector(".zerohoney-main-stage")
  .addEventListener("click", (a) => {
    heroAction(a);
  });
let webSound = new Audio("./resource/sound/webSound.mp3");
let skillSound = new Audio("./resource/sound/skillSound.mp3");
let electroSound = new Audio("./resource/sound/electricSound.mp3");
let venomSound = new Audio("./resource/sound/venomSound.mp3");
let thanosSound = new Audio("./resource/sound/thanosSound.mp3");

// 공격키
document.querySelector("#zerohoney-attack-id").addEventListener("click", () => {
  heroAttack();
});
// 스킬키
document.querySelector("#zerohoney-skill-id").addEventListener("click", () => {
  skillSound.play();
  heroSkill();
});

function changeIdToHeroLocation() {
  let heroLocation = [
    zerohoneyChangeStringNumberToInteger[
      zerohoneyBeforeHeroTile.id.toString().split("-")[3]
    ],
    zerohoneyChangeStringNumberToInteger[
      zerohoneyBeforeHeroTile.id.toString().split("-")[5]
    ],
  ];
  return heroLocation;
}

function changeIdToVillanLocation() {
  let villanLocation = [
    zerohoneyChangeStringNumberToInteger[
      zerohoneyBeforeVillanTile.id.toString().split("-")[3]
    ],
    zerohoneyChangeStringNumberToInteger[
      zerohoneyBeforeVillanTile.id.toString().split("-")[5]
    ],
  ];
  return villanLocation;
}

// 빌런의 행동을 결정하는 함수(자동이기 때문에 재귀로 돌려도 상관 없음)
function validationVillanMovement(beforeTile) {
  let ran = parseInt(Math.random() * 7 + 1);
  let beforeTileId = beforeTile.id.toString();
  let beforeTileArray = beforeTileId.split("-");
  let row = zerohoneyChangeStringNumberToInteger[beforeTileArray[3]];
  let column = zerohoneyChangeStringNumberToInteger[beforeTileArray[5]];
  if (ran === 1) {
    if (row === 1) {
      row += 2; //2
    }
    return `zerohoney-main-stage-${
      zerohoneyChangeStringIntegerToNumber[row - 1]
    }-row-${zerohoneyChangeStringIntegerToNumber[column]}`;
  } else if (ran === 2) {
    if (row === 3) {
      row -= 2;
    }
    return `zerohoney-main-stage-${
      zerohoneyChangeStringIntegerToNumber[row + 1]
    }-row-${zerohoneyChangeStringIntegerToNumber[column]}`;
  } else if (ran === 3) {
    if (column === 1) {
      column += 2;
    }
    return `zerohoney-main-stage-${
      zerohoneyChangeStringIntegerToNumber[row]
    }-row-${zerohoneyChangeStringIntegerToNumber[column - 1]}`;
  } else if (ran === 4) {
    if (column === 4) {
      column -= 2;
    }
    return `zerohoney-main-stage-${
      zerohoneyChangeStringIntegerToNumber[row]
    }-row-${zerohoneyChangeStringIntegerToNumber[column + 1]}`;
  } else {
    return "villanAttack";
  }
}

// 히어로의 이동 방향을 결정해주는 함수(수동이기 때문에 한번에 끝내야함)
function validationHeroMovement(clickedTile) {
  // 맨처음에는 전 타일이 없으므로
  let beforeTileId = zerohoneyBeforeHeroTile.id.toString();
  let beforeTileArray = beforeTileId.split("-");
  let row = zerohoneyChangeStringNumberToInteger[beforeTileArray[3]];
  let column = zerohoneyChangeStringNumberToInteger[beforeTileArray[5]];

  let clickedTileId = clickedTile.id.toString();
  let clickedTileArray = clickedTileId.split("-");
  let newRow = zerohoneyChangeStringNumberToInteger[clickedTileArray[3]];
  let newColumn = zerohoneyChangeStringNumberToInteger[clickedTileArray[5]];
  // 같은 행의 1칸 앞뒤 확인
  if (row === newRow && Math.abs(newColumn - column) <= 1) {
    return true;
  } else if (Math.abs(newRow - row) <= 1 && newColumn === column) {
    // 다른 행의 같은 열인지 확인
    return true;
  } else {
    return false;
  }
}

// 히어로의 행동을 시작하는 함수(클릭했을 때)
function heroAction(clickedTile) {
  // 본 코드는 다음과 같은 규칙을 따른다.
  let selectedTile = document.querySelector(`#${clickedTile.target.id}`);
  let heroImg = document.querySelector("div .zerohoney-hero-image");
  let villanImg = document.querySelector("div .zerohoney-villan-image");
  // 만약 선택한 타일의 아이디에 히어로가 없다면,빌런의 타일과 겹쳐지는걸 방지
  if (selectedTile.tagName !== "IMG") {
    if (zerohoneyBeforeHeroTile === "") {
      zerohoneyBeforeHeroTile = document.querySelector(
        "#zerohoney-main-stage-first-row-first"
      );
    }
    if (
      // 맨 처음 시작이거나 이동방향을 만족 했을 때
      validationHeroMovement(selectedTile)
    ) {
      // 히어로 이미지 제거
      heroImg.remove();
      selectedTile.innerHTML = spiderManNormal;
      zerohoneyBeforeHeroTile = selectedTile;
      villanAction(villanImg);
    }
  }
}

// 히어로 일반공격
function heroAttack() {
  if (zerohoneyBeforeHeroTile !== "" && zerohoneyBeforeVillanTile !== "") {
    let heroLocation = changeIdToHeroLocation(zerohoneyBeforeHeroTile);
    let villanLocation = changeIdToVillanLocation(zerohoneyBeforeVillanTile);
    if (
      Math.abs(villanLocation[0] - heroLocation[0]) <= 1 &&
      Math.abs(villanLocation[1] - heroLocation[1]) <= 1
    ) {
      setTimeout(() => {
        zerohoneyBeforeHeroTile.innerHTML = spiderManNormal;
        zerohoneyBeforeVillanTile.innerHTML = mainVillan.normal;
        calculateDmg(mainVillan.who, spiderMan, mainVillan.info, "hero", false);
      }, 200);
      zerohoneyBeforeHeroTile.innerHTML = spiderManAttack;
      zerohoneyBeforeVillanTile.innerHTML = mainVillan.damaged;
    }
    //   스파이더맨이 공격했다면 빌런이 다음행동을 해야함
    let villanImg = document.querySelector("div .zerohoney-villan-image");
    setTimeout(() => {
      villanAction(villanImg);
    }, 100);
  }
}

function heroSkill() {
  if (zerohoneyBeforeHeroTile !== "" && zerohoneyBeforeVillanTile !== "") {
    let heroLocation = changeIdToHeroLocation(zerohoneyBeforeHeroTile);
    let villanLocation = changeIdToVillanLocation(zerohoneyBeforeVillanTile);
    if (
      (villanLocation[1] - heroLocation[1] === 1 ||
        villanLocation[1] - heroLocation[1] === 0) &&
      (villanLocation[0] - heroLocation[0] === 1 ||
        villanLocation[0] - heroLocation[0] === 0)
    ) {
      setTimeout(() => {
        zerohoneyBeforeHeroTile.innerHTML = spiderManNormal;
        zerohoneyBeforeVillanTile.innerHTML = mainVillan.normal;
        calculateDmg(mainVillan.who, spiderMan, mainVillan.info, "hero", true);
      }, 200);
      zerohoneyBeforeHeroTile.innerHTML = spiderManAttack2;
      zerohoneyBeforeVillanTile.innerHTML = mainVillan.damaged;
    }

    let villanImg = document.querySelector("div .zerohoney-villan-image");
    setTimeout(() => {
      villanAction(villanImg);
    }, 100);
  }
}

// 빌런의 모든행동이 시작되는 함수
function villanAction(villanImg) {
  // 맨 처음 시작할 때를 위한 조건문
  if (zerohoneyBeforeVillanTile === "") {
    zerohoneyBeforeVillanTile = document.querySelector(
      "#zerohoney-main-stage-third-row-forth"
    );
  }
  let villanOnGoingTileId = validationVillanMovement(zerohoneyBeforeVillanTile);
  // 빌런이 이동했다면 else,아니라면 if
  if (villanOnGoingTileId === "villanAttack") {
    villanAttack(zerohoneyBeforeHeroTile, zerohoneyBeforeVillanTile);
  } else {
    let villanOnGoingTile = document.querySelector(`#${villanOnGoingTileId}`);
    // 만약 빌런이 가야 할 곳에 히어로가 있다면, 이 함수를 다시 실행시킨다(재귀)
    if (villanOnGoingTile.innerHTML !== "") {
      villanAction(villanImg);
    } else {
      let villanImg = document.querySelector("div .zerohoney-villan-image");
      villanImg.remove();
      villanOnGoingTile.innerHTML = mainVillan.normal;

      zerohoneyBeforeVillanTile = villanOnGoingTile;
    }
  }
}

function villanAttack(zerohoneyBeforeHeroTile, zerohoneyBeforeVillanTile) {
  if (zerohoneyBeforeHeroTile !== "" && zerohoneyBeforeVillanTile !== "") {
    let heroLocation = [
      zerohoneyChangeStringNumberToInteger[
        zerohoneyBeforeHeroTile.id.toString().split("-")[3]
      ],
      zerohoneyChangeStringNumberToInteger[
        zerohoneyBeforeHeroTile.id.toString().split("-")[5]
      ],
    ];
    let villanLocation = [
      zerohoneyChangeStringNumberToInteger[
        zerohoneyBeforeVillanTile.id.toString().split("-")[3]
      ],
      zerohoneyChangeStringNumberToInteger[
        zerohoneyBeforeVillanTile.id.toString().split("-")[5]
      ],
    ];
    if (
      Math.abs(villanLocation[0] - heroLocation[0]) <= 1 &&
      Math.abs(villanLocation[1] - heroLocation[1]) <= 1
    ) {
      // 스파이더맨 객체 불러와서 처리하자
      let tempVillanIsSkill = parseInt(Math.random() * 3 + 1);

      if (tempVillanIsSkill === 1 || tempVillanIsSkill === 2) {
        setTimeout(() => {
          switch (mainVillan.who) {
            case "electro":
              electroSound.play();
              break;
            case "venom":
              venomSound.currentTime=1;
              venomSound.play();
              break;
            case "thanos":
              thanosSound.volume=1;
              thanosSound.currentTime=1;
              thanosSound.play();
              break;
            default:
              break;
          }
          zerohoneyBeforeHeroTile.innerHTML = spiderManNormal;
          zerohoneyBeforeVillanTile.innerHTML = mainVillan.normal;
          calculateDmg(
            mainVillan.who,
            spiderMan,
            mainVillan.info,
            "villan",
            false
          );
        }, 150);
        zerohoneyBeforeHeroTile.innerHTML = spiderManDamaged;
        zerohoneyBeforeVillanTile.innerHTML = mainVillan.attack;
      } else {
        setTimeout(() => {
          switch (mainVillan.who) {
            case "electro":
              electroSound.play();
              break;
            case "venom":
              venomSound.currentTime=1;
              venomSound.play();
              break;
            case "thanos":
              thanosSound.volume=1;
              thanosSound.currentTime=1;
              thanosSound.play();
              break;
            default:
              break;
          }
          zerohoneyBeforeHeroTile.innerHTML = spiderManNormal;
          zerohoneyBeforeVillanTile.innerHTML = mainVillan.normal;
          calculateDmg(
            mainVillan.who,
            spiderMan,
            mainVillan.info,
            "villan",
            true
          );
        }, 150);
        zerohoneyBeforeHeroTile.innerHTML = spiderManDamaged;
        zerohoneyBeforeVillanTile.innerHTML = mainVillan.skill;
      }
    }
  }
}

// 연수 -----------------------------------------------------------------------------------------------------------------------
//common,rare,unique,legendary
// 현재 착용중인 장비
let equipment = [];
// 현재 갖고있는 장비
let haveWeapon = [];
let haveArmor = [];
let haveHp = [];

function Gauntlet(name, price, atkpoint, grade, realName, type) {
  this.name = name;
  this.price = price;
  this.atkpoint = atkpoint;
  this.grade = grade;
  this.type = type;

  this.realName = realName;
}
let gauntlet1 = new Gauntlet(
  "weapon_norm",
  100,
  10,
  "common",
  "gauntlet1",
  "weapon"
);
let gauntlet2 = new Gauntlet(
  "weapon_rar",
  200,
  15,
  "rare",
  "gauntlet2",
  "weapon"
);
let gauntlet3 = new Gauntlet(
  "weapon_lege",
  300,
  20,
  "unique",
  "gauntlet3",
  "weapon"
);
let gauntlet4 = new Gauntlet(
  "gauntlet4",
  400,
  25,
  "legendary",
  "gauntlet4",
  "weapon"
);

function Shield(name, price, defpoint, grade, realName, type) {
  this.name = name;
  this.price = price;
  this.defpoint = defpoint;
  this.grade = grade;
  this.type = type;
  this.realName = realName;
}
let shield1 = new Shield("armor_norm", 100, 15, "common", "shield1", "shield");
let shield2 = new Shield("armor_rar", 200, 20, "rare", "shield2", "shield");
let shield3 = new Shield("armor_lege", 300, 40, "unique", "shield3", "shield");
let shield4 = new Shield("shield4", 400, 30, "legendary", "shield4", "shield");

function Hp(name, price, hppoint, grade, realName, type) {
  this.name = name;
  this.price = price;
  this.hppoint = hppoint;
  this.grade = grade;
  this.type = type;
  this.realName = realName;
}
let sapphire1 = new Hp("life_norm", 100, 50, "common", "sapphire1", "hp");
let sapphire2 = new Hp("life_rar", 200, 100, "rare", "sapphire2", "hp");
let sapphire3 = new Hp("life_lege", 300, 200, "unique", "sapphire3", "hp");
let sapphire4 = new Hp("sapphire4", 400, 30, "legendary", "sapphire4", "hp");

let allInvenWeapon = document.querySelectorAll(".atk-item");
let allInvenArmor = document.querySelectorAll(".def-item");
let allInvenHp = document.querySelectorAll(".hp-item");
function resetInven() {
  for (let i = 0; i < haveWeapon.length; i++) {
    allInvenWeapon.forEach((a) => {
      if (haveWeapon[i].name === a.id) {
        a.classList.add("have-item");
      }
    });
  }

  for (let i = 0; i < haveArmor.length; i++) {
    allInvenArmor.forEach((a) => {
      if (haveArmor[i].name === a.id) {
        a.classList.add("have-item");
      }
    });
  }

  for (let i = 0; i < haveHp.length; i++) {
    allInvenHp.forEach((a) => {
      if (haveHp[i].name === a.id) {
        a.classList.add("have-item");
      }
    });
  }
}

let selectIndex = 0;
let selectAtkItem = null;
let firstEquip = document.querySelector("#equip-1");
let secondEquip = document.querySelector("#equip-2");
function atkcount1(type) {
  const resultElement = document.getElementById("atkresult");
  if (selectAtkItem != null)
    // 괄호 없으면 바로 밑에 한줄만 영역
    document.querySelectorAll(".atk-item")[selectIndex].innerHTML =
      selectAtkItem;
  selectAtkItem = document.querySelectorAll(".atk-item")[0].innerHTML;
  selectIndex = 0;
  let number = resultElement.innerText;
  if (type === "plus") {
    number = 10;
  }
  equipment.push(gauntlet1);
  if (equipment.length > 2) {
    equipment.shift();
  }
  // 아이템 적용
  if (equipment.length >= 1) {
    switch (equipment[0].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[0].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[0].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[0].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    firstEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[0].realName}.png" alt="">`;
  }
  if (equipment.length === 2) {
    switch (equipment[1].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[1].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[1].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[1].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    secondEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[1].realName}.png" alt="">`;
  }

  document.querySelector("#atkInput1").remove(); // remove 함수 중요! 많이 사용함
  resultElement.innerText = number;
}

function atkcount2(type) {
  const resultElement = document.getElementById("atkresult");
  document.querySelectorAll(".atk-item")[selectIndex].innerHTML = selectAtkItem;
  if (selectAtkItem != null)
    selectAtkItem = document.querySelectorAll(".atk-item")[1].innerHTML;
  selectIndex = 1;

  let number = resultElement.innerText;
  if (type === "plus") {
    number = 15;
  }
  equipment.push(gauntlet2);
  if (equipment.length > 2) {
    equipment.shift();
  }
  // 아이템 적용
  if (equipment.length >= 1) {
    switch (equipment[0].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[0].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[0].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[0].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    firstEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[0].realName}.png" alt="">`;
  }
  if (equipment.length === 2) {
    switch (equipment[1].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[1].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[1].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[1].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    secondEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[1].realName}.png" alt="">`;
  }

  document.querySelector("#atkInput2").remove(); // remove 함수 중요! 많이 사용함
  resultElement.innerText = number;
}

function atkcount3(type) {
  const resultElement = document.getElementById("atkresult");
  if (selectAtkItem != null)
    document.querySelectorAll(".atk-item")[selectIndex].innerHTML =
      selectAtkItem;
  selectAtkItem = document.querySelectorAll(".atk-item")[2].innerHTML;
  selectIndex = 2;

  let number = resultElement.innerText;
  if (type === "plus") {
    number = 20;
  }
  equipment.push(gauntlet3);
  if (equipment.length > 2) {
    equipment.shift();
  }
  // 아이템 적용
  if (equipment.length >= 1) {
    switch (equipment[0].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[0].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[0].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[0].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    firstEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[0].realName}.png" alt="">`;
  }
  if (equipment.length === 2) {
    switch (equipment[1].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[1].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[1].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[1].hppoint;

        break;
    }
    secondEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[1].realName}.png" alt="">`;
  }
  document.querySelector("#atkInput3").remove(); // remove 함수 중요! 많이 사용함
  resultElement.innerText = number;
}

function atkcount4(type) {
  const resultElement = document.getElementById("atkresult");
  if (selectAtkItem != null)
    document.querySelectorAll(".atk-item")[selectIndex].innerHTML =
      selectAtkItem;

  selectAtkItem = document.querySelectorAll(".atk-item")[3].innerHTML;
  selectIndex = 3;

  let number = resultElement.innerText;
  if (type === "plus") {
    number = 25;
  }
  document.querySelector("#atkInput4").remove(); // remove 함수 중요! 많이 사용함
  resultElement.innerText = number;
}

//---------def--------------------------------------------------------------------
let selectIndex1 = 0;
let selectDefItem = null;

function defcount1(type) {
  const resultElement = document.getElementById("defresult");
  if (selectDefItem != null)
    document.querySelectorAll(".def-item")[selectIndex1].innerHTML =
      selectDefItem;
  selectDefItem = document.querySelectorAll(".def-item")[0].innerHTML;
  selectIndex1 = 0;
  let number = resultElement.innerText;

  if (type === "plus") {
    number = 15;
  }
  equipment.push(shield1);

  if (equipment.length > 2) {
    equipment.shift();
  }
  // 아이템 적용
  if (equipment.length >= 1) {
    switch (equipment[0].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[0].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[0].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[0].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    firstEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[0].realName}.png" alt="">`;
  }
  if (equipment.length === 2) {
    switch (equipment[1].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[1].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[1].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[1].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    secondEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[1].realName}.png" alt="">`;
  }
  document.querySelector("#defInput1").remove();
  resultElement.innerText = number;
}
function defcount2(type) {
  const resultElement = document.getElementById("defresult");
  if (selectDefItem != null)
    document.querySelectorAll(".def-item")[selectIndex1].innerHTML =
      selectDefItem;
  selectDefItem = document.querySelectorAll(".def-item")[1].innerHTML;
  selectIndex1 = 1;
  let number = resultElement.innerText;

  if (type === "plus") {
    number = 20;
  }
  equipment.push(shield2);

  if (equipment.length > 2) {
    equipment.shift();
  }
  // 아이템 적용
  if (equipment.length >= 1) {
    switch (equipment[0].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[0].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[0].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[0].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    firstEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[0].realName}.png" alt="">`;
  }
  if (equipment.length === 2) {
    switch (equipment[1].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[1].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[1].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[1].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    secondEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[1].realName}.png" alt="">`;
  }
  document.querySelector("#defInput2").remove();
  resultElement.innerText = number;
}
function defcount3(type) {
  const resultElement = document.getElementById("defresult");
  if (selectDefItem != null)
    document.querySelectorAll(".def-item")[selectIndex1].innerHTML =
      selectDefItem;
  selectDefItem = document.querySelectorAll(".def-item")[2].innerHTML;
  selectIndex1 = 2;
  let number = resultElement.innerText;

  if (type === "plus") {
    number = 25;
  }
  equipment.push(shield3);

  if (equipment.length > 2) {
    equipment.shift();
  }
  // 아이템 적용
  if (equipment.length >= 1) {
    switch (equipment[0].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[0].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[0].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[0].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    firstEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[0].realName}.png" alt="">`;
  }
  if (equipment.length === 2) {
    switch (equipment[1].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[1].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[1].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[1].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    secondEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[1].realName}.png" alt="">`;
  }
  document.querySelector("#defInput3").remove();
  resultElement.innerText = number;
}
function defcount4(type) {
  const resultElement = document.getElementById("defresult");
  if (selectDefItem != null)
    document.querySelectorAll(".def-item")[selectIndex1].innerHTML =
      selectDefItem;
  selectDefItem = document.querySelectorAll(".def-item")[3].innerHTML;
  selectIndex1 = 3;
  let number = resultElement.innerText;

  if (type === "plus") {
    number = 30;
  }
  document.querySelector("#defInput4").remove();
  resultElement.innerText = number;
}
//------------hp-------------------------------------------------------------------------------------------
let selectIndex2 = 0;
let selectHpItem = null;

function hpcount1(type) {
  const resultElement = document.getElementById("hpfresult");
  if (selectHpItem != null)
    document.querySelectorAll(".hp-item")[selectIndex2].innerHTML =
      selectHpItem;
  selectHpItem = document.querySelectorAll(".hp-item")[0].innerHTML;
  selectIndex2 = 0;
  let number = resultElement.innerText;

  if (type === "plus") {
    number = 15;
  }
  equipment.push(sapphire1);

  if (equipment.length > 2) {
    equipment.shift();
  }
  // 아이템 적용
  if (equipment.length >= 1) {
    switch (equipment[0].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[0].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[0].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[0].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    firstEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[0].realName}.png" alt="">`;
  }
  if (equipment.length === 2) {
    switch (equipment[1].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[1].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[1].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[1].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    secondEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[1].realName}.png" alt="">`;
  }
  document.querySelector("#hpInput1").remove();
  resultElement.innerText = number;
}
function hpcount2(type) {
  const resultElement = document.getElementById("hpfresult");
  if (selectHpItem != null)
    document.querySelectorAll(".hp-item")[selectIndex2].innerHTML =
      selectHpItem;
  selectHpItem = document.querySelectorAll(".hp-item")[1].innerHTML;
  selectIndex2 = 1;
  let number = resultElement.innerText;

  if (type === "plus") {
    number = 20;
  }
  equipment.push(sapphire2);

  if (equipment.length > 2) {
    equipment.shift();
  }
  // 아이템 적용
  if (equipment.length >= 1) {
    switch (equipment[0].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[0].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[0].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[0].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    firstEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[0].realName}.png" alt="">`;
  }
  if (equipment.length === 2) {
    switch (equipment[1].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[1].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[1].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[1].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    secondEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[1].realName}.png" alt="">`;
  }
  document.querySelector("#hpInput2").remove();
  resultElement.innerText = number;
}
function hpcount3(type) {
  const resultElement = document.getElementById("hpfresult");
  if (selectHpItem != null)
    document.querySelectorAll(".hp-item")[selectIndex2].innerHTML =
      selectHpItem;
  selectHpItem = document.querySelectorAll(".hp-item")[2].innerHTML;
  selectIndex2 = 2;
  let number = resultElement.innerText;

  if (type === "plus") {
    number = 25;
  }

  equipment.push(sapphire3);

  if (equipment.length > 2) {
    equipment.shift();
  }
  // 아이템 적용
  if (equipment.length >= 1) {
    switch (equipment[0].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[0].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[0].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[0].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    firstEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[0].realName}.png" alt="">`;
  }
  if (equipment.length === 2) {
    switch (equipment[1].type) {
      case "weapon":
        spiderMan.atk = 15 + equipment[1].atkpoint;
        break;
      case "shield":
        spiderMan.def = 15 + equipment[1].defpoint;

        break;
      case "hp":
        spiderMan.maxHp += equipment[1].hppoint;
        spiderMan.hp = spiderMan.maxHp;

        break;
    }
    secondEquip.innerHTML = `<img width="65px" height="65px" src="./img/${equipment[1].realName}.png" alt="">`;
  }
  document.querySelector("#hpInput3").remove();
  resultElement.innerText = number;
}
function hpcount4(type) {
  const resultElement = document.getElementById("hpfresult");
  if (selectHpItem != null)
    document.querySelectorAll(".hp-item")[selectIndex2].innerHTML =
      selectHpItem;
  selectHpItem = document.querySelectorAll(".hp-item")[3].innerHTML;
  selectIndex2 = 3;
  let number = resultElement.innerText;

  if (type === "plus") {
    number = 30;
  }
  document.querySelector("#hpInput4").remove();
  resultElement.innerText = number;
}

// 원철이형----------------------------------------------------------------------------
// 상점에서의 아이템 정보
function Item(ATK, DEF, HP, MP) {
  this.ATK = ATK;
  this.DEF = DEF;
  this.HP = HP;
  this.MP = MP;
}

// weapon

let weapon_normal = new Item(10, 0, 0, 0);
let weapon_rare = new Item(15, 0, 0, 0);
let weapon_legend = new Item(20, 0, 0, 0);

let weapon_norm_info = document.querySelector(".weapon_normal .item_info");
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

let armor_normal = new Item(0, 15, 0, 0);
let armor_rare = new Item(0, 20, 0, 0);
let armor_legend = new Item(0, 40, 0, 0);

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

let life_normal = new Item(0, 0, 50, 0);
let life_rare = new Item(0, 0, 100, 0);
let life_legend = new Item(0, 0, 200, 0);

let life_norm_info = document.querySelector(".life_normal .item_info");
let life_rare_info = document.querySelector(".life_rare .item_info");
let life_legend_info = document.querySelector(".life_legend .item_info");
// 인벤토리 클릭
document.querySelector(".go_inventory").addEventListener("click", () => {
  resetInven();

  document.querySelector(".main-container3").style.display = "block";
});
// 인벤토리 닫기
document.querySelector("#close").addEventListener("click", () => {
  document.querySelector(".main-container3").style.display = "none";
});
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

for (let i = 0; i < itemList.length; i++) {
  itemList[i].addEventListener("click", () => {
    price = parseInt(itemList[i].innerText);
    grade = itemList[i].id;
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

let my_money = 500;

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

// 뒤로가기
document.querySelector("#back-to-game").addEventListener("click", () => {
  document.querySelector(".main-container2").style.display = "none";
});

// yes버튼 눌렀을 때 함수

function onclickYes() {
  let popup = document.querySelector(".popup_background");
  let coinDrop = new Audio("./resource/sound/coinDrop.mp3");
  if (my_money >= price) {
    coinDrop.play();
    popup.classList.remove("is_active");
    my_money = my_money - price;
    switch (grade) {
      case "weapon_norm":
        haveWeapon.push(gauntlet1);
        break;
      case "weapon_rar":
        haveWeapon.push(gauntlet2);

        break;
      case "weapon_lege":
        haveWeapon.push(gauntlet3);

        break;
      case "armor_norm":
        haveArmor.push(shield1);

        break;
      case "armor_rar":
        haveArmor.push(shield2);

        break;
      case "armor_lege":
        haveArmor.push(shield3);

        break;
      case "life_norm":
        haveHp.push(sapphire1);

        break;
      case "life_rar":
        haveHp.push(sapphire2);
        break;
      case "life_lege":
        haveHp.push(sapphire3);
        break;
    }

    document.querySelector(
      ".game_money"
    ).innerHTML = `<img src="./etherium.png"> ${my_money}`;
    document.querySelector(`#${grade}`).innerHTML = ``;
    console.log(my_money);
  } else {
    let want = document.querySelector(".wanna_buy");
    want.innerHTML =
      "you don't have enough money!!<button class='ok2'>Okay..</button>";
    let btn = document.querySelector(".ok2");
    btn.onclick = function () {
      want.innerHTML = ` You wanna buy?
      <div class="answer">
        <div class="yes" onclick="onclickYes();">Yep</div>
        <div class="no" onclick="buy();">Nope</div>
      </div>`;
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
