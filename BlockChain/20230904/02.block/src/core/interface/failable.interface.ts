export interface Result<R>{
    isError : false;
    value : R;
}

export interface Faillure<E>{
    isError : true,
    value : E;
}

export type Failable<R, E> = Result<R> | Faillure<E>;
// R,E는 단순 알파벳 만약 string이거나 number 면 
// Result<string>, Result<number> 이런식이 됨

// Failable<string, number>

// : Result<String>
// {isError : false, value : "원하는 타입을 받을 수 있겠죠"}
// let a = (a,b) =>{
//     console.log(a,b)
// }

// a("asdf")


