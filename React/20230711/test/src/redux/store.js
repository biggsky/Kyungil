import {createStore, applyMiddleware } from "redux";
// 사용할 미들웨어는 thunk
import thunk from "redux-thunk";
import reducer from "./reducer";



// npm i redux-thunk
// 미들웨어 추가
// applyMiddleware 함수로 미들웨어 추가 반환되는 객체로 추가

// 미들웨어로 thunk를 추가 하는 방법은
// applyMiddleware함수의 매개변수로 사용할 미들웨어 전달
// applyMiddleware(thunk)

// 음식점 차렸음 어떤 음식점이지?
export const store = createStore(reducer, applyMiddleware(thunk));
