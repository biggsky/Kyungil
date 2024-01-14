import React,{useState, useEffect} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from "axios";

const Boardupdate = () => {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [list, setList] = useState([]);
  const location = useLocation();
  const url = location.pathname;
  let hashvalue = url.split("/").pop();
  console.log(hashvalue);

  async function listget(){
    const list = await axios.get(`http://localhost:8000/listget2/${hashvalue}`);
    // console.log("다시 컴백", list.data);
    const alllist = list.data;
    console.log("제목", alllist.title);
    console.log("내용", alllist.content);
    setTitle(alllist.title);
    setContent(alllist.content);
    // setList(alllist);
  }

  useEffect(()=>{
    listget();
  }, []);

  const boardUpdateClick = async(e) =>{
    e.preventDefault();
    console.log(title);
    console.log(content);

    const data = await axios.post(`http://localhost:8000/boardUpdate/${hashvalue}`, {data : { title: title, content: content }}, {withCredentials : true});

    if(data.data == "1"){
      nav("/boardPage");
    }
  }

  const deleteBtn = async() =>{
    const data = await axios.post(`http://localhost:8000/boardDelete/${hashvalue}`, {withCredentials : true});
    if(data.data == "1"){
      nav("/boardPage");
    }

  }
  return (
    <>
      <div id='body'>
        <div id='body_in'>
          <div id='boardpage'>
            <p>게시판 수정하기</p>
            <br />
            <div id='list'>
                <form onSubmit={boardUpdateClick}>
                    <input type="text" name='title' placeholder='제목을 입력하세요.' defaultValue={title} onChange={(e)=> setTitle(e.target.value)} />
                    <br />
                    <textarea name="content" id="" cols="30" defaultValue={content} rows="10" onChange={(e)=>setContent(e.target.value)} placeholder='내용을 입력하세요.'></textarea>
                    <br />
                    <button id='editbtn'>수정하기</button>
                </form>
            </div>
            <br />
            <button onClick={deleteBtn} id='deletebtn'>삭제하기</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Boardupdate