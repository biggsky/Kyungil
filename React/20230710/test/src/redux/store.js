// 저장소 만들기

import { createStore } from "redux";
// 메뉴판 가져오자
import reducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension"

// createStore 메서드 반환값 저장소 만듬
// 백반집임 음식점
// 음식점 만들고 메뉴판 전달

// 스토어의 전역상태가 변화하는걸 개발 모드로 확인 가능한 툴
// composeWithDevTools
let store = createStore(reducer, composeWithDevTools());

export default store;
