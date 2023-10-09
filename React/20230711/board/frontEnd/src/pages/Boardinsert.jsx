import React, {useState} from "react";
import { WhiteBody, BoardList } from "../components/bulletin.styled";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Boardinsert = () => {
  const nav = useNavigate();
  const [boardtitle, setboardtitle] = useState("");
  const [boardcontent, setboardcontent] = useState("");
  const params = {
    boardtitle : boardtitle,
    boardcontent : boardcontent
  }
  

  const boardinsertClick = async(e) =>{
    e.preventDefault();
    
    try {
      const {data} = await axios.post("http://localhost:8000/boardinsert", {data:{boardtitle: boardtitle,boardcontent:boardcontent }}, {withCredentials : true} );

      if(data == 1){
        nav("/bulletinboard");
      }
      
    } catch (error) {
      console.log(error);
    }
    

    
    // console.log(boardtitle);
    // console.log(boardcontent);
  }
  
  return (
    <>
      <WhiteBody>
        <div id='whitebody_center'>
            <br />
            <form onSubmit={boardinsertClick}>
              <input id="boardtitle" type="text" placeholder="게시판 글 제목" onChange={(e)=>{setboardtitle(e.target.value)}} />
              <br /><br />
              <textarea id="boardcontent" placeholder="게시판 글 내용" onChange={(e)=>{setboardcontent(e.target.value)}}></textarea>
              <br /><br />
              <div id='boardinsertbutton'>
                <button>등록하기</button>
              </div>
            </form>
        </div>
      </WhiteBody>
    </>
  );
};

export default Boardinsert;
