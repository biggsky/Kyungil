import React, { useEffect, useState } from 'react';
import { LikeSize2 } from './boarddetail.styled';
import { ipUrl } from '../../util/util';

const BoardLikes = ({ boardIndex,boardLikeArr ,loginUserInfo,refetch}) => {
  const ImgPath = "/imgs/icons";
  const [boardLikes, setBoardLikes] = useState(false);
const duplicateLike=()=>{

  if (boardLikeArr.indexOf(loginUserInfo.id) ===-1) {
    console.log(loginUserInfo.id,'참')
    return true
  }else{
    console.log(loginUserInfo.id,'거짓')
    return false
  }

}

useEffect(()=>{
  if (duplicateLike()) {
    setBoardLikes(false)
  }else{
    setBoardLikes(true)

  }

},[boardLikeArr])
  const LikesClick = async () => {
    try {
      if (!boardLikes) {
        await ipUrl.post(
          `/post/updateboardlikes/${boardIndex}`,
          { board_id: boardIndex },
          { withCredentials: true }
        );
        refetch()
       // setBoardLikes(true); // 좋아요 추가 시 상태를 true로 업데이트
      } else {
        await ipUrl.get(`/post/deleltboardlikes/${boardIndex}`, { withCredentials: true });
        refetch()
    //    setBoardLikes(false); // 좋아요 삭제 시 상태를 false로 업데이트
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <LikeSize2
        onClick={LikesClick}
        src={boardLikes ? `${ImgPath}/like3.png` : `${ImgPath}/like1.png`}
        alt=""
      />
    </div>
  );
};

export default BoardLikes;
