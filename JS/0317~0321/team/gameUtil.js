// let heroImg = document.querySelector("div .zerohoney-hero-image");
// let villanImg = document.querySelector("div .zerohoney-villan-image");
function reward(params) {
  let getMoney = parseInt(Math.random() * 20);

  return 100 * getMoney;
}
function validateGameOver(heroHp, villanHp) {
  console.log(heroHp, "----", villanHp);
  if (heroHp <= 0) {
    alert("스파이더맨이 주겄서");
    location.reload();
  } else if (villanHp <= 0) {
    stage++;

    let villanImg = document.querySelector("div .zerohoney-villan-image");
    let heroImg = document.querySelector("div .zerohoney-hero-image");
    villanImg.remove();
    heroImg.remove();

    alert("당신은 세계를 구했습니다.");
    switch (stage) {
      case 1:
        mainVillan.who = villans.electro.who;
        mainVillan.info = villans.electro.info;
        mainVillan.normal = villans.electro.normal;
        mainVillan.damaged = villans.electro.damaged;
        mainVillan.attack = villans.electro.attack;
        mainVillan.defense = villans.electro.defense;
        mainVillan.skill = villans.electro.skill;
        break;
      case 2:
        mainVillan.who = villans.venom.who;
        mainVillan.info = villans.venom.info;
        mainVillan.normal = villans.venom.normal;
        mainVillan.damaged = villans.venom.damaged;
        mainVillan.attack = villans.venom.attack;
        mainVillan.defense = villans.venom.defense;
        mainVillan.skill = villans.venom.skill;
        my_money += reward();
        document.querySelector(
          ".game_money"
        ).innerHTML = `<img src="./etherium.png"> ${my_money}`;
        document.querySelector(".main-container2").style.display = "block";
        villanImg.remove();

        init(venomNormal);

        break;
      case 3:
        mainVillan.who = villans.thanos.who;
        mainVillan.info = villans.thanos.info;
        mainVillan.normal = villans.thanos.normal;
        mainVillan.damaged = villans.thanos.damaged;
        mainVillan.attack = villans.thanos.attack;
        mainVillan.defense = villans.thanos.defense;
        mainVillan.skill = villans.thanos.skill;
        my_money += reward();
        document.querySelector(
          ".game_money"
        ).innerHTML = `<img src="./etherium.png"> ${my_money}`;
        document.querySelector(".main-container2").style.display = "block";
        villanImg.remove();

        init(thanosNormal);

        break;
    }
  }
}

// 초기화 함수
function init(villanNormal) {
  setTimeout(() => {
    document.querySelector("div .zerohoney-hero-image");
    document.querySelector("div .zerohoney-villan-image");
  }, 200);
  setTimeout(() => {
    spiderMan.hp = spiderMan.maxHp;
    document.querySelector("#zerohoney-main-stage-third-row-forth").innerHTML =
      villanNormal;
    document.querySelector("#zerohoney-main-stage-first-row-first").innerHTML =
      spiderManNormal;
    zerohoneyBeforeVillanTile = "";
    document.querySelector("#zerohoney-in-hpbar-left-id").style.transform =
      "scaleX(1)";
    document.querySelector("#zerohoney-in-hpbar-right-id").style.transform =
      "scaleX(1)";
  }, 300);
}
