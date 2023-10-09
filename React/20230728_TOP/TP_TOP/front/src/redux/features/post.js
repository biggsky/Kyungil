import { createSlice } from "@reduxjs/toolkit";

export const BoardDetailSlice = createSlice({
    name:"boardHandler",
    initialState: { 
        title: "",
        detail:"",
        nickname: "",
        user_id:"",
        images:[],
    },
    reducers:{
        create:(state,action)=>{
           
            state.title = action.payload.title;
            state.detail = action.payload.detail;
            state.nickname = action.payload.nickname;
            state.images = action.payload.images
            state.user_id = action.payload.user_id
        }
    }
})
export const { create } = BoardDetailSlice.actions;
export default BoardDetailSlice.reducer;