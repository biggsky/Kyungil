import { Foodorder } from "../../pages";

let init = {
    isLogin : false
}

function reducer(state = init, action){
    console.log("action", action.payload);
    const obj = action.payload;
    console.log(obj);
    if(typeof obj === "object"){
        const key = Object.keys(obj);
        console.log(key.length);
    }


    switch (action.type) {
        case "LOGIN":
            if(action.payload.user_id == "1" && action.payload.user_pw == "1"){
                return {...state, isLogin : true};
            }else{
                alert("아이디, 비밀번호 확인하세요!");
            }
        
        case "ORDERCLICK":
            return {...state, checkedItems: action.payload};

        default:
            return {...state};
    }
}

export default reducer;