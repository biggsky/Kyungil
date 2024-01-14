// ES6 문법
// {LoginBtn}
// ./components/LoginBtn 에서
// export {LoginBtn} 이렇게 작성
// import {LoginBtn} from "./components/LoginBtn";

// 가져와서 Login명으로 사용할거임
import Login from "./components/LoginBtn.js"

// 루트 요소 가상 DOM으로 생성
// 루트 설정
console.log("ReactDOM : ", ReactDOM);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Login />);