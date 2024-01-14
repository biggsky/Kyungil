import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const BoardList = () => {
  const [boardlist, setboardlist] = useState([]);
  // const [id, setid] = useState();

  // const BoardList = async() => {
  // 프로미스를 반환해버리는구나.

  useEffect(() => {
    async function autoplay() {
      const data = await axios.get("http://localhost:8000/boardlist", {});
      setboardlist(data.data);
    }
    autoplay();
  }, []);

  // async function autoplay(){
  //   const data = await axios.get("http://localhost:8000/boardlist", {
  //   });
  //   // console.log(data.data[0]);
  //   // console.log(data.data[1]);

  //   // for(let i=0; i<data.data.length; i++){
  //     // console.log(data.data[i].id);
  //     // setboardlist(data.data);
  //   // }
  //   setboardlist(data.data);
  // }
  // autoplay();


  return (
    <>
    <div id='boardline1'>
      <div id='div1'>번호</div>
      <div id='div2'>제목</div>
      <div id='div3'>작성자</div>
    </div>
    <hr />
      {boardlist.map((item, index) => (
        <Link to={`/detailpage/${item.id}`} key={index}>
          <div id='boardline'>
            <div id='div1'>{index+1}</div>
            <div id='div2'>{item.board_title}</div>
            <div id='div3'>{item.upload_nickname}</div>
          </div>
          <hr />
        </Link>
      ))}
    </>
  );
};

export default BoardList;
