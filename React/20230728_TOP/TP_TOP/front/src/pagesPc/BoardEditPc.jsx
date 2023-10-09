import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MainPc,
  MoveBoardBtnPc,
} from "../components/boarddetail/boarddetail.styled";
import {
  PostContentPc,
  PostTitlePc,
  PostBtnPc,
} from "../components/post/post.style";
import { PostPlan, ImgUpload } from "../components/post";
import { ipUrl } from "../util/util";
import BottomNavPc from "../componentsPc/nav/BottomNavPc";
import TopNav from "../components/nav/TopNav";

const BoardEditPc = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const navigate = useNavigate();
  let lastNumber;
  const planImgPath = "/imgs/userplanimg";


  const [exist_title, setexist_title] = useState("");
  const [exist_content, setexist_content] = useState("");
  const [exist_images, setexist_images] = useState("");

  const location = useLocation();
  let url = location.pathname;
  const match = url.match(/\/(\d+)$/); // 정규 표현식을 사용하여 URL에서 숫자를 추출

  if (match) {
    lastNumber = match[1];
  }

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (
      uploadedFiles.length === 0 ||
      title.trim() === "" ||
      detail.trim() === ""
    ) {
      alert("이미지or제목or내용을 입력하세요!");
      return;
    }
    const formData = new FormData();

    for (let i = 0; i < uploadedFiles.length; i++) {
      formData.append("uploadedFiles", uploadedFiles[i]);
    }
    formData.append("title", title);
    formData.append("detail", detail);

    try {
      const response = await ipUrl.post(
        `/board/boardEdit/${lastNumber}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": `multipart/form-data`,
          },
        },
      );
      const data = response.data;
      if (data === "create success") {
        navigate("/board");
      }
    } catch (error) {
      console.log("여기 못보내짐 에러");
      console.log(error);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };

  const handleFileUpload = (files) => {
    setUploadedFiles(files);
  };
  const MoveBoardClick = () => {
    navigate("/board");
  };

  const getBoardInfo = async () => {
    try {
      const response2 = await ipUrl.get(`/board/get_board_Info/${lastNumber}`);
      let title = response2.data.title;
      let content = response2.data.detail;
      let images = JSON.parse(response2.data.images)[0];
      
      setexist_title(title);
      setexist_content(content);
      setexist_images(images);

    } catch (error) {
      console.log(error);
    }
  };
  getBoardInfo();

  return (
    <>
      <TopNav />
      <MainPc>
        {/* <img src={planImgPath + "/" + exist_images} alt="" /> */}
        <ImgUpload
          existImage = {exist_images}
          name='images'
          onUpload={handleFileUpload}
          files={uploadedFiles}
          sr
        />
        <PostTitlePc
          type='text'
          name='title'
          defaultValue={exist_title}
          placeholder='제목을 입력하세요'
          onChange={handleTitleChange}
        />
        <PostContentPc
          type='text'
          name='detail'
          defaultValue={exist_content}
          placeholder='내용을 입력하세요'
          onChange={handleDetailChange}
        />
        {/* <PostPlan /> */}
        <br />
        <br />
        <PostBtnPc onClick={handlePostSubmit}>수정하기</PostBtnPc>
      </MainPc>

      <BottomNavPc />
    </>
  );
};

export default BoardEditPc;
