import {configureStore} from "@reduxjs/toolkit";
import {countSlice, countSlice2, countSlice3} from "../features/countSlice"

export const store = configureStore({
    reducer : {
        store1 : countSlice.reducer,
        store2 : countSlice2.reducer,
        store3 : countSlice3.reducer,
    }
})