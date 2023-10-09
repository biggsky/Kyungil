// ********************************************************************************************
// *** notice: 본 함수는 프론트와 백엔드를 간단하게 이어주기위한 유틸 js파일 입니다. ***
// ********************************************************************************************

//로컬 스토레이지 get함수 첫번째 변수는 불러올 로컬 스토레이지의 key값이고 두번째 변수는 그 리스트중 가지고 올 정보의 인덱스 값이다.
const getLocalStorage = (localStorageName, index) => {
  try {
    if (localStorage.getItem(localStorageName)) {
      let tempInfo = localStorage.getItem(localStorageName);
      if (index) {
        return JSON.parse(tempInfo)[index];
      }
      return JSON.parse(tempInfo);
    } else {
      throw new Error("로컬 스토레이지가 비었습니다!");
    }
  } catch (error) {
    console.log(error);
  }
};
// 로컬스토레이지 설정함수 첫번째 매개변수는 localstorage의 key값이고, 두번째 매개변수는 넣어줄 데이터이다.
const setLocalStorage = (localStorageName, data) => {
  localStorage.setItem(localStorageName, JSON.stringify(data));
};

const getLoginUser = () => {
  return JSON.parse(localStorage.getItem("nowLogin"));
};

const setLoginUser = (loginUser) => {
  localStorage.setItem("nowLogin", JSON.stringify(loginUser));
};
