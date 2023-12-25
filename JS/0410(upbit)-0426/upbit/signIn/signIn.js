
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let userDataArray = JSON.parse(localStorage.getItem("userInformation"));
let userDataAdminArray = JSON.parse(localStorage.getItem("admin"));
localStorage.removeItem("nowLogin");

document.querySelector(".sign-in-button").addEventListener("click", () => {
  console.log(password.value);
  if (validateMember()) {
    alert("로그인 되었습니다.");
    location.href = "../main/main.html";
  } else {
  }
});
const validateMember = () => {
  let loginUserData = userDataArray.find((a) => {
    return a.email == email.value && a.password == password.value;
  });

  if (
    loginUserData !==
    // 회원에 있는 유저인지 판별
    undefined
  ) {
    localStorage.setItem("nowLogin", JSON.stringify(loginUserData));

    return true;
  } else {
    return false;
  }
};
