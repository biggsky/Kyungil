import React from 'react'

const Block = ({data, name, result}) => {
    let temp = "";
    if(name === "유저"){
        temp = result;
    }else{
        // result == "무승부"면 문제가 없어 얘는 놔둬도 상관 없고
        // result == "이겼다" 면 반대로 졌다를 보여줘야하고
        // result == "졌다" 면 반대로 이겼다를 보여줘야 한다.
        if(result != "")
        temp = result === "무승부" ? "무승부" : result === "Win" ? "Lose" : "Win";

    }
  return (
    <div className='block'>
        <div>{name}</div>
        {/* react에서 이미지 import 해오는 방법 */}
        {/* 리액트에서 가장 많이 사용하는 조건부 렌더링
        값이 있으면 값을 사용해라라는 구문 */}
        {/* 값이 없으면 페이지가 터지기 때문에 */}
        <img src={data && data.img} alt="" />
        <div>{temp}</div>
    </div>
  )
  // data ? data.img : null
}

export default Block