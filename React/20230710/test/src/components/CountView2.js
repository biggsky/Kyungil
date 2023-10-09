import React from 'react'
import { useSelector } from 'react-redux'


const CountView2 = () => {
    // 저장소 값을 가져와 보자
    // react-redux 라이브러리에서 제공 react hook 함수
    // useSelector 전역 상태값을 조회 할때 사용
    // 상태에서 count를 반환
    // count가 변경되었을때 리렌더링 된다.
    // count값을 상태로 보고 있음
    // 부모의 props 값을 받지않고 
    // 전역으로 관리되고 있는 상태의 값을 컴포넌트가 직접 접근해서 가져온다.
    const count = useSelector(state => state.count);
  return (
    <div>
        {count}
    </div>
  )
}

export default CountView2