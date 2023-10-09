import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const temp = createAsyncThunk("/signup", async(num)=>{
    const data1 = await axios.post("http://localhost:8000/signUpBtnClick",{ data: { user_id: num.id, user_pw: num.pw, user_nickname: num.name } }, { withCredentials: true });
    return data1.data;
});

export const temp2 = createAsyncThunk("/login", async(num)=>{
    const data2 = await axios.post("http://localhost:8000/loginBtnClick", {data : { user_id: num.id, user_pw: num.pw }}, {withCredentials : true});
    
    return data2.data;
    
});

export const temp3 = createAsyncThunk("/boardinput", async(num)=>{
    const data = await axios.post("http://localhost:8000/boardBtnClick", {data : { title: num.title, content: num.content }}, {withCredentials : true});
    return data.data;
})



export const countSlice = createSlice({
    name : "name1",
    initialState : {value : "회원가입 대기 상태"},
    reducers : {
        signup : (state)=>{
            state.value = "회원가입 대기 상태2";
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(temp.pending, (state, action)=>{
            
            state.value = "로딩중";
        })

        // 로그인 완료
        builder.addCase(temp.fulfilled, (state, action)=>{
            console.log("회원가입완료됐을때", action.payload);
            if(action.payload == "1"){
                state.value = "회원가입 완료";
            }else{
                state.value = "아이디 or 비밀번호 확인하세요!";
            }
        })

        builder.addCase(temp.rejected, (state, action)=>{
            state.value = "비동기 처리 실패";
        })
    }
});

export const countSlice2 = createSlice({
    name : "name2",
    initialState : {value : "로그인 대기 상태"},
    reducers : {
        login : (state)=>{
            state.value = "로그인 대기 상태2";
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(temp2.pending, (state, action)=>{
            
            state.value = "로딩중";
        })

        // 로그인 완료
        builder.addCase(temp2.fulfilled, (state, action)=>{
            console.log("로그인완료됐을때", action.payload);
            if(action.payload == "0"){
                state.value = "아이디 or 비밀번호 확인하세요!";
            }else{
                state.value = "로그인 완료";
            }
        })

        builder.addCase(temp2.rejected, (state, action)=>{
            state.value = "비동기 처리 실패";
        })
    }
});

export const countSlice3 = createSlice({
    name : "name3",
    initialState : {value : "게시판 업로드 대기 상태"},
    reducers : {
        boardinput1 : (state)=>{
            state.value = "게시판 업로드 대기 상태2";
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(temp3.pending, (state, action)=>{
            
            state.value = "로딩중";
        })

        // 로그인 완료
        builder.addCase(temp3.fulfilled, (state, action)=>{
            console.log("게시판작성완료하는 부분", action.payload);
            if(action.payload == "0"){
                state.value = "게시판 작성 실패";
            }else{
                state.value = "게시판 작성 완료";
            }
        })

        builder.addCase(temp3.rejected, (state, action)=>{
            state.value = "비동기 처리 실패";
        })
    }
});

export const {signup} = countSlice.actions;
export const {login} = countSlice2.actions;
export const {boardinput1} = countSlice3.actions;