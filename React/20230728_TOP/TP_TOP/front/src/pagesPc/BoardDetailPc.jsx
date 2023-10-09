import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";

import { create } from "../redux/features/post";

import TopNav from "../components/nav/TopNav";

// componentsPc/boarddetail
import {
  ImgSlicePc,
  TitlePc,
  SubContentPc,
  DayBtnPc,
  PlanBtnPc,
  DayPopupPc,
  BoardPlanPc,
  CommentPc,
} from "../componentsPc/boarddetail";
import {
  Main,
  HeaderDivPc,
} from "../componentsPc/boarddetail/boarddetailPc.styled";
// components/boarddetail
import { BoardLikes } from "../components/boarddetail";
import {
  BoardLine,
  TitleStyle,
  SubContentStyle,
  ButtonBox,
  ShowButtonBox,
  EditImg,
  HeaderDiv,
  EditBtnStyle,
  DelBtnStyle,
  SubContentSpan,
} from "../components/boarddetail/boarddetail.styled";

import { ipUrl } from "../util/util";

const BoardDetailPc = () => {
  const [trigger, setTrigger] = useState(false);
  const [popup, setPopup] = useState(false);
  const [showBox, setShowBox] = useState(false);

  const [boardLikes, setBoardLikes] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUserInfo = useSelector((state) => state.userInfoHandler);

  const ImgPath = "/imgs/icons";

  const boardEditClick = () => {
    navigate(`/boardedit/${id}`);
  };

  const BoardDetailView = async ({ queryKey }) => {
    try {
      const response = await ipUrl.get(`/post/detail/${queryKey[1]}`);
      // setData(response.data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const { data, isLoading, refetch } = useQuery(
    ["boardDetail", id],
    BoardDetailView
  );

  const boardDelet = async () => {
    try {
      const response = await ipUrl.get(`/post/delete/${id}`);
      const data = response.data;
      if (data === "delete success") {
        navigate("/board");
      }
    } catch (error) {
      console.log("글 삭제 에러");
      console.log(error);
    }
  };
  const handleDeleteCheck = () => {
    const check = window.confirm("게시글을 삭제하시겠습니까?");
    if (check) {
      boardDelet();
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(create(data));
      console.log(data, "xmfn");
    }
    console.log(data);
  }, [data]);

  useEffect(() => {
    refetch();
    console.log("ddd피");
    console.log(trigger);
  }, [trigger]);

  const DayBtnClick = () => {
    setPopup(true);
  };
  const ShowboxClick = () => {
    setShowBox(!showBox);
  };

  useEffect(() => {
    console.log("로그인 유저: ", loginUserInfo);
  }, [loginUserInfo]);

  return (
    <>
      <TopNav />

      {data && (
        <Main>
          <HeaderDivPc>
            {/* 좋아요 */}
            <BoardLikes
              boardIndex={data.data.id}
              boardLikeArr={data.data.LikeBoards}
              loginUserInfo={loginUserInfo}
              refetch={refetch}
            />
            <div className="likesNum">{data.data.LikeBoards.length}</div>
            {/* 수정, 삭제 버튼 */}
            {loginUserInfo.id == data.data.user_id && (
              <EditImg
                src={`${ImgPath}/more.png`}
                alt=""
                srcset=""
                onClick={ShowboxClick}
              />
            )}
            {showBox && (
              <div className="dotBox" onClose={() => setShowBox(false)}>
                <div className="dotBoxBtn editBtn" onClick={boardEditClick}>
                  수정
                </div>
                <div className="dotBoxBtn delBtn" onClick={handleDeleteCheck}>
                  삭제
                </div>
              </div>
            )}
          </HeaderDivPc>

          {/* 게시글 쓴 유저 */}
          <div className="writer-box">
            <div className="profile_img">
              <img src={`/imgs/profiles/${data.writer.profile_img}`}></img>
            </div>
            <div className="nickname">{data.writer.nickname}</div>
          </div>

          {/* 이미지 슬라이드 */}
          <ImgSlicePc images={JSON.parse(data.data.images)} />

          {/* 내용 */}
          <TitlePc title={data.data.title} />
          <SubContentPc detail={data.data.detail} />

          {/* 버튼 */}
          <div className="btnBox">
            <DayBtnPc DayBtnClick={DayBtnClick} />
            <PlanBtnPc />
          </div>
          {popup && <DayPopupPc onClose={() => setPopup(false)} />}

          {/* 댓글 */}
          <CommentPc
            comments={data.commentdata}
            setTrigger={setTrigger}
            loginUserInfo={loginUserInfo}
            refetch={refetch}
          />
        </Main>
      )}
    </>
  );
};

export default BoardDetailPc;
