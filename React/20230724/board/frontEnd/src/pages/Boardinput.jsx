import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {temp3, boardinput1} from "../features/countSlice";
import { useNavigate } from 'react-router-dom';

const Boardinput = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const value = useSelector((state)=> state.store3.value);
    console.log("상태", value);

    useEffect(() => {
        if (value === "게시판 작성 완료") {
            dispatch(boardinput1());
            nav("/boardPage");
        }
      }, [value]);

    const boardinputClick = (e) =>{
        e.preventDefault();
        dispatch(temp3({title, content}));
    }
  return (
    <>
      <div id='body'>
        <div id='body_in'>
          <div id='boardpage'>
            <p>게시판 작성하기</p>
            상태 : {value}
            <br />
            <div id='list'>
                <form onSubmit={boardinputClick}>
                    <input type="text" name='title' placeholder='제목을 입력하세요.' onChange={(e)=> setTitle(e.target.value)} />
                    <br />
                    <textarea name="content" id="" cols="30" rows="10" onChange={(e)=>setContent(e.target.value)} placeholder='내용을 입력하세요.'></textarea>
                    <br />
                    <button>작성하기</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Boardinput