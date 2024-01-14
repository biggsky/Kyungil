// 회원가입한 사람들
// const u = new Map();
// u.set("이무헌", 27);
// u.set("고연수", 24);
// u.set("정원철", 32);
// u.set("조성현", 29);
// console.log(temp.next().value[0]);
// let [admin, age] = temp.next().value;
// let temp = u.entries();
// console.log(temp);

// ----------------------------------------

// 내 코드
const master = window.localStorage.getItem("admin");
const userDataArray = JSON.parse(
  window.localStorage.getItem("userInformation")
);
// console.log(master); // 무헌이꺼
const master2 = JSON.parse(master);
// console.log(master2);
// console.log(JSON.stringify(master2[0]));
console.log(master2);
//   if (master2[0].name == "토니") {
//     document.querySelector("#c_loginid").innerHTML = master2[0].name;
//   }
let currentPage = 1;
let totalpage;
let perpage = 5;
// 리스트가5개 이상일때
if (master2.length > perpage) {
  if (master2.length % perpage != 0) {
    totalpage = Math.floor(master2.length / perpage) + 1;
    // alert(totalpage);
  } else if (master2.length % perpage == 0) {
    // 딱 나누어 떨어질때 ex)30개
    totalpage = master2.length / perpage;
    // alert(totalpage);
  }
} else {
  // 리스트가 5개 이하일때
  totalpage = 1;
  // alert(totalpage);
}

document.querySelector("#page1").innerHTML = currentPage;
document.querySelector("#page2").innerHTML = currentPage + 1;
document.querySelector("#page3").innerHTML = currentPage + 2;
// alert(master2.length);
for (let i = 0; i < 5; i++) {
  if (master2[i]) {
    document.querySelector("#c_list" + i + " .c_left").innerHTML =
      master2[i].name;
    document.querySelector("#c_list" + i + " .c_lrcenter").innerHTML =
      master2[i].id;
    // document.querySelector("#c_list" + i + " .c_right").innerHTML = `<button onclick='btn(${JSON.stringify(master2[i])})'>수락</button>`;
    document.querySelector(
      "#c_list" + i + " .c_right"
    ).innerHTML = `<button onclick='btn( ${i} )'>수락</button>`;
  }
}
// 수정됨

document.querySelector("#page" + currentPage).classList.add("active");

// 이전
document.querySelector("#pre").addEventListener("click", function () {
  let xx = location.hash;
  let prev1 = xx.replace("#", "");
  if (prev1 == 4 || prev1 == 7 || prev1 == 10) {
    location.href = "admin.html#" + (prev1 - 1);
    document.querySelector("#page1").href = "#" + (prev1 - 3);
    document.querySelector("#page2").href = "#" + (prev1 - 2);
    document.querySelector("#page3").href = "#" + (prev1 - 1);
    document.querySelector("#page1").innerHTML = prev1 - 3;
    document.querySelector("#page2").innerHTML = prev1 - 2;
    document.querySelector("#page3").innerHTML = prev1 - 1;
  } else if (prev1 == 1) {
  } else {
    location.href = "admin.html#" + (prev1 - 1);
  }
});

// 다음
document.querySelector("#next").addEventListener("click", function () {
  let xx = location.hash;
  let prev1 = xx.replace("#", "");
  let prev1Num = parseInt(prev1, 10);
  // console.log(prev1Num);
  // console.log(prev1Num + 1);
  // alert(totalpage);
  if (totalpage > prev1Num) {
    if (prev1Num == 3 || prev1Num == 6 || prev1Num == 9) {
      location.href = "admin.html#" + (prev1Num + 1);
      document.querySelector("#page1").href = "#" + (prev1Num + 1);
      document.querySelector("#page2").href = "#" + (prev1Num + 2);
      document.querySelector("#page3").href = "#" + (prev1Num + 3);
      document.querySelector("#page1").innerHTML = prev1Num + 1;
      document.querySelector("#page2").innerHTML = prev1Num + 2;
      document.querySelector("#page3").innerHTML = prev1Num + 3;
    } else {
      location.href = "admin.html#" + (prev1Num + 1);
    }
  }
});

window.addEventListener("hashchange", function () {
  // console.log(location.hash);
  let xx = location.hash;
  currentPage = xx.replace("#", "");
  if (currentPage > totalpage) {
    location.href = "admin.html#" + totalpage;
  } else {
    if (currentPage == 1 || currentPage == 4 || currentPage == 7) {
      document.querySelector("#page1").classList.add("active");
      document.querySelector("#page2").classList.remove("active");
      document.querySelector("#page3").classList.remove("active");
    } else if (currentPage == 2 || currentPage == 5) {
      document.querySelector("#page2").classList.add("active");
      document.querySelector("#page1").classList.remove("active");
      document.querySelector("#page3").classList.remove("active");
    } else if (currentPage == 3 || currentPage == 6) {
      document.querySelector("#page3").classList.add("active");
      document.querySelector("#page1").classList.remove("active");
      document.querySelector("#page2").classList.remove("active");
    }
    let x = perpage * (currentPage - 1);

    for (let i = 0; i < perpage; i++) {
      if (master2[x] == undefined) {
        document.querySelector("#c_list" + i + " .c_left").innerHTML = "";
        document.querySelector("#c_list" + i + " .c_lrcenter").innerHTML = "";
        document.querySelector("#c_list" + i + " .c_right").innerHTML = "";
      } else {
        document.querySelector("#c_list" + i + " .c_left").innerHTML =
          master2[x].name;
        document.querySelector("#c_list" + i + " .c_lrcenter").innerHTML =
          master2[x].id;
        document.querySelector("#c_list" + i + " .c_right").innerHTML =
          "<button onclick='btn(" + x + ")'>수락</button>";
      }
      x++;
    }
  }
});

function btn(val) {
  const master2 = JSON.parse(master);
  // console.log(master); // 무헌이꺼
  userDataArray.push(master2[val]);
  alert(master2[val].name + "님을 액세스 허용하셨습니다.");
  // alert(val);
  master2.splice(val, 1);
  console.log(userDataArray);
  window.localStorage.setItem("admin", JSON.stringify(master2));
  window.localStorage.setItem("userInformation", JSON.stringify(userDataArray));

  location.reload();

  // let userDataArr = JSON.parse(localStorage.getItem("userInformation"));
  // window.localStorage.setItem("userInformation",JSON.stringify([...userDataArr, val]));

  // window.localStorage.setItem("allow", val);
}

window.onload = function () {
  location.href = "admin.html#1";
};
