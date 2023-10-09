function searchThings() {
    let search = document.querySelector(".keyword_input"); // 검색 input 창
    let searchSubmit = document.querySelector(".search-icon-btn"); // 돋보기 버튼
    let autocompleteWrap = document.querySelector(".autocomplete_wrap");
    let noImgSearched = document.querySelector(".no_searched");
  
    // 검색 함수
    search.addEventListener("keyup", function () {
      // Enter 누르면 submit 됨
      if (window.event.keyCode === 13) {
        window.event.preventDefault();
        searchSubmit.click();
      }
  
      // autocomplete 비우기
      autocompleteWrap.innerHTML = "";
      let searchInput = search.value.toUpperCase();
  
      // input 창에 입력한 문자로 시작하는 것만 배열로 담음
      let autocomplete = categoryNames.filter(function (e) {
        return e.startsWith(searchInput);
      });
      console.log(autocomplete);
  
      autocomplete.forEach(function (suggested) {
        let div = document.createElement("div");
        div.innerHTML = suggested;
        autocompleteWrap.appendChild(div);
  
        div.onclick = () => {
          searchInput = div.innerHTML;
          autocompleteWrap.innerHTML = "";
          console.log(searchInput);
          moveToCollist(searchInput);
        };
      });
      if (searchInput == "") {
        autocompleteWrap.innerHTML = "";
      }
    });
  
    // 돋보기 버튼 눌렀을 때
    searchSubmit.addEventListener("click", function () {
      let searchInput = search.value.toUpperCase();
      console.log("검색: ", searchInput);
  
      // 찾는 게 있을 경우 & 없을 경우
      let findCategory = [];
      if (!searchInput) {
        noImgSearched.classList.add("is-active");
      } else {
        for (let i = 0; i < categoryNames.length; i++) {
          if (categoryNames[i].startsWith(searchInput)) {
            console.log("검색 성공");
            findCategory.push(categoryNames[i]);
          }
  
          if (findCategory == "") {
            console.log("검색 실패");
            noImgSearched.classList.add("is-active");
          } else {
            noImgSearched.classList.remove("is-active");
          }
        }
        moveToCollist(findCategory[0]);
      }
    });
  
    // 검색 값 받아서 collist로 이동
    function moveToCollist(input) {
      console.log(input);
  
      // input값 받아와서 로컬스토리지 생성
      for (let i = 0; i < colorsName.length; i++) {
        let temp = colorsName[i].name;
        if (input == temp) {
          localStorage.setItem("||", JSON.stringify(colorsName[i]));
        }
      }
      for (let i = 0; i < themesName.length; i++) {
        let temp = themesName[i].name;
        if (input == temp) {
          localStorage.setItem("||", JSON.stringify(themesName[i]));
        }
      }
  
      // collist로 이동
      location.href = "./collist.html";
    }
  
    // 로그인 & 회원가입 팝업 관련 변수
    let topBanner = document.querySelector(".top_banner"); // 최상단 빨간 배너
  
    let loginPopupContent = document.querySelector(".login-popup-content");
    let idLoginBtn = document.querySelector("#id-login-btn");
    let logincloseBtn = document.querySelector("#login-close-btn");
    let signupcloseBtn = document.querySelector("#signup-close-btn");
  
    let loginPopup = document.querySelector(".login_popup"); // 로그인 창
    let signupPopup = document.querySelector(".signup_popup"); // 회원가입 창
    let moveToSignup = document.querySelector(".move_to_signup"); // 회원가입으로 이동
    let moveToLogin = document.querySelector(".move_to_login");
  
    // 로그인 & 회원가입 popup
    idLoginBtn.addEventListener("click", function () {
      // 로그아웃 기능
      if (
        sessionStorage.getItem("LOGIN") ||
        sessionStorage.getItem("ADMINLOGIN")
      ) {
        if (confirm("로그아웃 하시겠습니까?")) {
          sessionStorage.clear();
          location.reload();
        } else {
          return;
        }
      }
      loginPopupContent.classList.add("is-active");
      loginPopup.classList.add("is-active");
    });
    logincloseBtn.addEventListener("click", function () {
      loginPopupContent.classList.remove("is-active");
      loginPopup.classList.remove("is-active");
      signupPopup.classList.remove("is-active");
    });
    signupcloseBtn.addEventListener("click", function () {
      loginPopupContent.classList.remove("is-active");
      loginPopup.classList.remove("is-active");
      signupPopup.classList.remove("is-active");
    });
  
    moveToSignup.addEventListener("click", function () {
      if (!signupPopup.classList.contains("is-active")) {
        signupPopup.classList.add("is-active");
      }
      if (loginPopup.classList.contains("is-active")) {
        loginPopup.classList.remove("is-active");
      }
    });
    moveToLogin.addEventListener("click", function () {
      if (!loginPopup.classList.contains("is-active")) {
        loginPopup.classList.add("is-active");
      }
      if (signupPopup.classList.contains("is-active")) {
        signupPopup.classList.remove("is-active");
      }
    });
    topBanner.addEventListener("click", function () {
      loginPopupContent.classList.add("is-active");
      signupPopup.classList.add("is-active");
    });
}