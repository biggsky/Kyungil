import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import {
  Main,
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
import {
  ImgSlice,
  DayBtn,
  PlanBtn,
  DayPopup,
  BoardPlan,
  Comment,
  BoardLikes,
  Title,
} from "../components/boarddetail";
import BottomNav from "../components/nav/BottomNav";
import { create } from "../redux/features/post";
import { ipUrl } from "../util/util";
import TopNav from "../components/nav/TopNav";
import { ImgSlicePc } from "../componentsPc/boarddetail";

const BoardDetail = () => {
  // const [data, setData] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [popup, setPopup] = useState(false);
  const [showBox, setShowBox] = useState(false);

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
      console.log(queryKey);
      const response = await ipUrl.get(`/post/detail/${queryKey[1]}`);
      // setData(response.data);
      console.log("fffff", response.data);
      const data = response.data;
      console.log("66666666666", data.data);
      return data;
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
    console.log('ddd몹')
  }, [trigger]);

  const DayBtnClick = () => {
    setPopup(true);
  };
  const ShowboxClick = () => {
    setShowBox(!showBox);
  };
  const XClick = () => {
    setShowBox(false);
  };

  return (
    <>
      <TopNav />
      {data && (
        <>
          <Main>
            <HeaderDiv>
              <BoardLikes
                boardIndex={data.data.id}
                boardLikeArr={data.data.LikeBoards}
                loginUserInfo={loginUserInfo}
                refetch={refetch}
              />
              <div className="likesNum">{data.data.LikeBoards.length}</div>

              {loginUserInfo.id === data.data.user_id && (
                <ButtonBox onClick={ShowboxClick}>
                  <EditImg src={`${ImgPath}/more.png`} alt="" srcset="" />
                </ButtonBox>
              )}
              {showBox && (
                <ShowButtonBox onClose={() => setShowBox(false)}>
                  <EditBtnStyle onClick={boardEditClick}>수정</EditBtnStyle>
                  <DelBtnStyle onClick={handleDeleteCheck}>삭제</DelBtnStyle>
                </ShowButtonBox>
              )}
            </HeaderDiv>

            {/* 게시글 쓴 유저 */}
            <div className="writer-box">
              <div className="profile_img">
                <img src={`/imgs/profiles/${data.writer.profile_img}`}></img>
              </div>
              <div className="nickname">{data.writer.nickname}</div>
            </div>

            <ImgSlice images={JSON.parse(data.data.images)} />

            <div className="title">{data.data.title}</div>
            <div className="detail">{data.data.detail}</div>

            <Comment
              comments={data.commentdata}
              setTrigger={setTrigger}
              loginUserInfo={loginUserInfo}
              refetch={refetch}
            />
          </Main>

          <BottomNav />
        </>
      )}
    </>
  );
};

export default BoardDetail;
