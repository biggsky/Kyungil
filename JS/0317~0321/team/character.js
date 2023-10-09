function hero(atk, def, hp, maxHp) {
  this.atk = atk;
  this.def = def;
  this.hp = hp;
  this.maxHp=maxHp;
}

function villan(atk, def, hp) {
  this.atk = atk;
  this.def = def;
  this.hp = hp;
}
let firstItem = 1;
let secondItem = 1;

let spiderMan = new hero(15, 15, 150,150);

let electro = new villan(20, 15, 150);
let venom = new villan(30, 20, 250);
let thanos = new villan(40, 25, 350);

function calculateDmg(villan, hero, villanInfo, whoAttack, isSkill) {
  console.log(spiderMan);
  isSkill
    ? skillAttaack(villan, hero, villanInfo, whoAttack)
    : normalAttack(villan, hero, villanInfo, whoAttack);
}

function normalAttack(villan, hero, villanInfo, whoAttack) {
  // 치명타
  let critical = parseInt(Math.random() * 10 + 1);
  if (whoAttack === "hero") {
    if (villan === "electro") {
      critical <= 2
        ? (villanInfo.hp -= hero.atk * 2)
        : (villanInfo.hp -= hero.atk);

      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 150})`;
      validateGameOver(hero.hp, villanInfo.hp);
    } else if (villan === "venom") {
      critical <= 2
        ? (villanInfo.hp -= hero.atk * 2)
        : (villanInfo.hp -= hero.atk);

      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 250})`;

      validateGameOver(hero.hp, villanInfo.hp);
    } else {
      critical <= 2
        ? (villanInfo.hp -= hero.atk * 2)
        : (villanInfo.hp -= hero.atk);

      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 350})`;
      validateGameOver(hero.hp, villanInfo.hp);
    }
    // 스파이더맨의 데미지 로그
    critical <= 2
      ? (document.querySelector(
          ".dmg-log-hero"
        ).innerHTML = `스파이더맨이(가) ${villan}에게 ${
          villanInfo.atk * 2
        }만큼 <span style='color:red'>치명타!!</span>데미지를 입혔습니다!`)
      : (document.querySelector(
          ".dmg-log-hero"
        ).innerHTML = `스파이더맨이(가) ${villan}에게 ${villanInfo.atk}만큼 데미지를 입혔습니다!`);
    // 빌런이 공격할 때
  } else if (whoAttack === "villan") {
    hero.hp -= villanInfo.atk * ((100 - hero.def) / 100);
    document.querySelector(
      "#zerohoney-in-hpbar-left-id"
    ).style.transform = `scaleX(${hero.hp / spiderMan.maxHp})`;
    // 빌런의 데미지 로그
    document.querySelector(
      ".dmg-log-villan"
    ).innerHTML = `${villan}이(가) 스파이더맨에게 ${
      villanInfo.atk * ((100 - hero.def) / 100)
    }만큼 데미지를 입혔습니다!`;
    validateGameOver(hero.hp, villanInfo.hp);
  }
}

function skillAttaack(villan, hero, villanInfo, whoAttack) {
  if (whoAttack === "hero") {
    if (villan === "electro") {
      villanInfo.hp -= hero.atk * 1.5;
      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 150})`;
      validateGameOver(hero.hp, villanInfo.hp);
    } else if (villan === "venom") {
      villanInfo.hp -= hero.atk * 1.5;
      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 250})`;
      validateGameOver(hero.hp, villanInfo.hp);
    } else {
      villanInfo.hp -= hero.atk * 1.5;
      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 350})`;
      validateGameOver(hero.hp, villanInfo.hp);
    }
    document.querySelector(
      ".dmg-log-hero"
    ).innerHTML = `스파이더맨이(가) ${villan}에게 ${
      villanInfo.atk * 1.5
    }만큼 데미지를 입혔습니다!`;
    // 빌런이 공격할 때
  } else if (whoAttack === "villan") {
    hero.hp -= villanInfo.atk * 1.5 * ((100 - hero.def) / 100);

    document.querySelector(
      "#zerohoney-in-hpbar-left-id"
    ).style.transform = `scaleX(${hero.hp / spiderMan.maxHp})`;
    document.querySelector(
      ".dmg-log-villan"
    ).innerHTML = `${villan}이(가) 스파이더맨에게 스킬로 ${
      villanInfo.atk * 1.5 * ((100 - hero.def) / 100)
    }만큼 데미지를 입혔습니다!`;
    validateGameOver(hero.hp, villanInfo.hp);
  }
}
