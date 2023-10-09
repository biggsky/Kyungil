let init = {
    id : "",
    pw : "",
    isLogin : false
}

function reducer(state = init, action){
    /*
    리듀서 함수는 무조건 반환값이 있어야 한다.
    리듀서 함수에서 반환된 값을 store에 업데이트 최신화 시켜준다.
    값만 변경되면 몰라요. 값이 변경된지 모름 바보임
    주소값을 확인한다. 주소가 변하면 업데이트를 시켜줌
    새로운 주소를 만들어서 반환 해줘야함.
    */
   const {type, payload} = action;

   //paylaod = {id: "", pw : "", isLogin : false}
   /*
   {
        id : "",
        pw : "",
        isLogin : false
        temp : false
    }

    => 

    {
        id : payload.id,
        pw : payload.pw,
        isLogin : true,
        temp : false
    }

    */

   switch (type) {
    case "LOGIN":
        return {...state, id : payload.id, pw : payload.pw, isLogin : true};
    case "LOGOUT":
        return {...state, id: "", pw : "", isLogin : false};
    default:
        return state;
   }

}

export default reducer