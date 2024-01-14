// 리듀서 함수
// 메뉴판

// 초기상태가 필요한데
// 카운트 값 하나 초기로 설정
// 시작은 카운트
let init = {
    count : 0,
    isLogin : false,
    userState : {
        userName : "",
        userAge : 1
    },
}

// 주문 받으면 action이 음식 이름
function reducer(state = init, action){
    // 반환값이 무조건 있어야함
    // 음식이 뭔지 조건문
    console.log(action);
    switch (action.type) {
        case "김치볶음밥":
            // 리듀서 함수의 반환값으로 저장소를 최신화 시켜준다.
            // 저장소는 대기하다가 리듀서가 호출되면 값을 반환받아서 최신화 시켜줌
            // 리듀서에서 반환된 값을 비교하는게 아니라 주소를 비교하기 때문에
            // 값이 변해도 모름 주소가 바뀌지 않으면 업데이트가 되지 않는다. 

            // let a =4;
            // a= 3; 이렇게 하면 안된다.
            // let b = a; 이런식이던지 let b = a+1; 이런식으로 해야함
            // 주소는 그대로 값만 변경됨

            return {...state, count : state.count + 1 };

            // return {count : state.count + 1 };
            // 이렇게 하면 안됨

        case "계란볶음밥":
            return {...state, count : state.count - 1 };
        
        case "LOGIN":
            // ...state 초기 객체의 값을 복사
            // count : 0,
            // isLogin : false,
            // userState : {
            //     userName : "",
            //     userAge : 1
            // },

            // + isLogin : true

            // count : 0,
            // isLogin : true,
            // userState : {
            //     userName : "",
            //     userAge : 1
            // },

            // 전역 상태를 개발하면서 브라우저의 개발자 모드로 전역상태가 바뀌는걸 실시간으로 확인 하고 싶음.
            // npm install redux-devtools-extension

            // redux-devtools 확장프로그램 추가!!

            return {...state, isLogin : action.payload};
        
        case "LOGOUT" : 
            return {...state, isLogin : action.payload};

        default:
            return {...state};
    }
}


export default reducer;
