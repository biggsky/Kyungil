import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'


const BoardPage = () => {
  const [list, setList] = useState([]);

  async function listget(){
    const list = await axios.get("http://localhost:8000/listget");
    // console.log("다시 컴백", list.data);
    const alllist = list.data;
    console.log(alllist);
    setList(alllist);
  }

  useEffect(()=>{
    listget();
  }, []);

  return (
    <>
      <div id='body'>
        <div id='body_in'>
          <div id='boardpage'>
            <p><Link to={"/boardinput"}>게시판 작성하기</Link></p>
            <br />
            {list.map((item, index)=>{
                return(
                  <div id='pagelist' key={index}>
                  <Link to={`/boardupdate/${item.id}`}>
                      {item.title} | {item.content}
                  </Link>
                  <br /><br />
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardPage