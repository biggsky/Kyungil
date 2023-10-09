/* 
    redux 라이브러리에서 제공되는 함수
    리듀서 함수를 합쳐주는 동작을 해준다.

    combineReducers() 함수에 매개변수로 전달해준다.
*/
import { combineReducers } from "redux";
import login from "./login"
import weather from "./weather"

// combineReducers 매개변수로 합쳐줄 리듀서 함수들을 객체로 전달
const rootReducer = combineReducers({login, weather});

export default rootReducer;