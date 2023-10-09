import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";

const Mypage = () => {
  const checkedItems = useSelector((state)=>state.checkedItems);
  const dispatch = useDispatch();
  const login = useSelector(store => store.isLogin)

  console.log("lll", login);

  useEffect(()=>{
    console.log(checkedItems);
  }, [checkedItems]);
  // console.log("1단계", {checkedItems});

  if(login == true){
    if(!checkedItems){
      return null;
    }
    return (
      <>
        <div>마이페이지</div>
        <ul>
          {Object.entries(checkedItems).map(([name, checked])=> (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </>
    );

  }

};

export default Mypage