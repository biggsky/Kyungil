import React, { useEffect, useState } from 'react'
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import BoardPreviewImg from './BoardPreviewImgPc'
import BoardText from './BoardTextPc';
import BoardProflieImg from './BoardProflieImgPc';
import { Main } from './boardPc.styled';
import {
  ImgBox,
  ShowImg,
  ProflieImg,
  TextBox,
  SmallText,
  SubTitle,
} from "../../components/board/board.styled";

import { styled } from 'styled-components';
import { ipUrl } from '../../util/util';

const Div_one = styled.div`
  width: 100%;
  height: calc(100% - 140px);
  overflow-y: scroll;
  display: flex; flex-wrap: nowrap;
  padding: 0;
  justify-content: center; align-items: start;
`

const TransparentBackground = styled.div`
  background-color: blue;
  /* 다른 스타일 속성들을 여기에 추가할 수 있습니다. */
`;

const Div_two = styled.div`
  width: 65%;
  height: auto;
  /* background-color: yellowgreen; */
  display: flex; flex-wrap: wrap;
  justify-content: start;
  align-items: baseline;
`
// let arr = [["newyork1.jpg", "newyork2.jpg"], ["profile.jpg"], ["유저가 입력한 게시판 내용"], ["게시판 제목"]];
// 이미지, 프로필정보, 내용, 제목

const BoardListPc = () => {
  const nav = useNavigate();
  const planImgPath = "/imgs/userplanimg";
  const profileImgPath = "/imgs/profiles";

  const [load, setLoad] = useState(true)

  const list = async () => {
    try {
      const response = await ipUrl.get("/post/allboard");

      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const { data, isLoading } = useQuery(["testdata"], list, {
    enabled : load
  });

  useEffect(() => {
    if(isLoading == false) {
      setLoad(false)
    }
  }, [isLoading])


  // const [tda, Settda] = useState([]);

  // useEffect(()=>{
  //   const boardData = async ()=>{
  //     try {
  //       const data = await ipUrl.get("/board/boardlist");
  //       // console.log("데이터: ", data.data);
  //       const boardlistdata = data.data;
  //       const list_length = boardlistdata.length;
  //       console.log(boardlistdata);
  //       // console.log(list_length);
  //       let arr_count = 0;
  //       let newArray = [];

  //       for(let i=0; i<list_length;i+=2){
  //         newArray[arr_count] = [];
  //         newArray[arr_count][0] = boardlistdata[i];
  //         newArray[arr_count][1] = boardlistdata[i+1];
  //         arr_count++;
  //       }
  //       console.log("what: ", newArray);
  //       Settda(newArray);

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   boardData();
  // },[]);

  // useEffect(()=>{
  //   console.log("뜸?",tda);
  // }, [tda]);

  // const data = [
  //   [{
  //     BoardTitle: "게시판 제목 1",
  //     UploadUserNickname: "닉네임 1",
  //   },
  //   {
  //     BoardTitle: "게시판 제목 2",
  //     UploadUserNickname: "닉네임 2",
  //   }],
  //   [{
  //     BoardTitle: "게시판 제목 3",
  //     UploadUserNickname: "닉네임 3",
  //   },
  //   {
  //     BoardTitle: "게시판 제목 4",
  //     UploadUserNickname: "닉네임 4",
  //   }]
  // ];



  return (
    <>
    <Div_one>
      <Div_two>
      {data ? (
        data.map((value, index) => {
          const thumbNail = JSON.parse(value.images)[0];
          const handleReviewClick = () => {
            nav(`/boarddetail/${value.id}`);
          };

          let profileImg = value.User;
          if(value.User == null) {
            profileImg = 'default_profile.jpeg'
          }

          const dateTimeString = value.createdAt;
          const datePart = dateTimeString.match(/^\d{4}-\d{2}-\d{2}/)[0];

          return (
            <>
              <Main onClick={handleReviewClick}>
                <ImgBox>
                  <ShowImg src={planImgPath + "/" + thumbNail} alt="" />
                </ImgBox>
                <ProflieImg src={profileImgPath + "/" + profileImg} />
                <TextBox>
                    <SmallText>
                      {/* <span>{nickname}</span>님의 일정 */}
                      <span>{value.nickname}</span>
                    </SmallText>
                  <SubTitle>{value.title}</SubTitle>
                  <div className='create-date'>{datePart}</div>
                </TextBox>
              </Main>
            </>
          )
        })
      ) : (
        <>데이터 받아오는 중</>
      )}
      </Div_two>
    </Div_one>
    </>
    
  );
}

export default BoardListPc