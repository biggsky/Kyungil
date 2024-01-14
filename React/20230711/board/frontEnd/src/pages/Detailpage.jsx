import React, {useState, useEffect} from "react";
import { WhiteBody, BoardList } from "../components/bulletin.styled";
import axios from "axios";
import {useNavigate, useLocation} from "react-router-dom";

const Detailpage = () => {
  const nav = useNavigate();
  const [boardtitle, setboardtitle] = useState("");
  const [boardcontent, setboardcontent] = useState("");
  const [boardvalue, setboardvalue] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const params = {
    boardtitle : boardtitle,
    boardcontent : boardcontent
  }
  const location = useLocation();
  let url = location.pathname;
  let hashvalue = url.split("/").pop();

  useEffect(()=>{
    async function autoplay(){
      const {data} = await axios.get(`http://localhost:8000/detailfind/${hashvalue}`, {withCredentials : true} );    

      setboardvalue(data);
    }
    autoplay();

  }, []);

  const boardinsertClick = async(e) =>{
    e.preventDefault();
    try {
      // console.log(title, content)
      const {data} = await axios.post(`http://localhost:8000/detailedit`,{data:{board_id : hashvalue, board_title: title, board_content:content} }, {withCredentials : true} );
      
      if(data == 1){
        nav("/bulletinboard");
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  const deleteClick = async() =>{
    try {
      const data = await axios.post("http://localhost:8000/detaildelete", {data:{board_id: hashvalue}}, {withCredentials : true} );
      if(data.data == 1){
        nav("/bulletinboard");
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
      <WhiteBody>
        <div id='whitebody_center'>
            <br />
            <form onSubmit={boardinsertClick}>

              <input id="boardtitle" type="text" defaultValue={boardvalue?.hashvalue_id_allvalue?.board_title || ""} onChange={(e) => {
                setTitle(e.target.value);
              } } />
              <br /><br />
              <textarea id="boardcontent" defaultValue={boardvalue?.hashvalue_id_allvalue?.board_content || ""} onChange={(e)=>{setContent(e.target.value)}} ></textarea>
              <br /><br />
              <div id='boardinsertbutton'>
                {boardvalue.editpossible ? <button>수정하기</button> : <div>😎관람중😎</div> }
                
              </div>
            </form>
            <br />
            {boardvalue.editpossible ? 
              <div id='boardinsertbutton'>
                <button onClick={deleteClick}>삭제하기</button>
              </div> : ""}
            
        </div>
      </WhiteBody>
    </>
  );
};

export default Detailpage;
