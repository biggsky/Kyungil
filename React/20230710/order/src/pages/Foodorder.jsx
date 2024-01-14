import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router"
import { food1, food2, food3 } from '../img'
import {Link} from "react-router-dom"

const Foodorder = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const dispatch = useDispatch();
  const orderClick = () =>{
    dispatch({type: "ORDERCLICK", payload : checkedItems })
  }
  const login = useSelector(store => store.isLogin)
  const nav = useNavigate();

  const handleCheckboxChange = event => {
    const {name, checked} = event.target;
    setCheckedItems(prevState => ({...prevState, [name]: checked}));
  }



  if(login == true){
    console.log("잘 들어오나", login);
    return (
      <>
        <div>음식 주문 페이지</div>
        <br />
        <div id='left'>
          <div>1</div>
          <img src={food1} alt="" />
          <br />
          <input type="checkbox" name='food_1' onChange = {handleCheckboxChange} />
        </div>
        <div id='center'>
          <div>2</div>
          <img src={food2} alt="" />
          <br />
          <input type="checkbox" name='food_2' onChange = {handleCheckboxChange} />
        </div>
        <div id='right'>
          <div>3</div>
          <img src={food3} alt="" />
          <br />
          <input type="checkbox" name='food_3' onChange = {handleCheckboxChange} />
        </div>
        <br />

        <button onClick={orderClick}>주문하기</button>
        <Link to={"/mypage"}>마이페이지</Link>
      </>
    )
  }else{
    nav("/");
  }
}

export default Foodorder