import {configureStore} from "@reduxjs/toolkit";
import { countSlice,countSlice2 } from "../features/countSlice";

// 저장소 생성
export const store = configureStore(
    {
        reducer : {
            // 가게 만들면서 메뉴판 전달
            // 리듀서를 전달
            count1 : countSlice.reducer,
            count2 : countSlice2.reducer,
            // {...state :id : state.id +1, value : {...state.value}} 이렇게 만들필요없음
        },
    }
)