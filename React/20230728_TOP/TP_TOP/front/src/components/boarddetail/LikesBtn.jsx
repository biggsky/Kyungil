import React, { useEffect, useState } from "react";
import { LikeSize } from "./boarddetail.styled";
import { ipUrl } from "../../util/util";

const LikesBtn = ({ commentIndex, comments, loginUserInfo, refetch }) => {
  const ImgPath = "/imgs/icons";
  const [likes, setLikes] = useState();
  useEffect(() => {
    console.log(loginUserInfo, "커멘트2");
  }, [comments]);

  const duplicateommentLike = () => {
    console.log(comments, "커멘트");

    if (comments.LikeComments.indexOf(loginUserInfo.id) !== -1) {
      console.log(loginUserInfo.id, "참");
      return true;
    } else {
      console.log(loginUserInfo.id, "거짓");
      return false;
    }
  };

  useEffect(() => {
    if (duplicateommentLike()) {
      setLikes(true);
    } else {
      setLikes(false);
    }
  }, [comments]);
  const LikesClick = async () => {
    try {
      if (!likes) {
        await ipUrl.post(
          `/post/updatelikes/${commentIndex}`,
          { comment_id: commentIndex },
          { withCredentials: true }
        );
        refetch();
      } else {
        console.log(likes, "라이크 클릭");
        await ipUrl.get(`/post/deleltlikes/${commentIndex}`, {
          withCredentials: true,
        });
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <LikeSize
        onClick={LikesClick}
        src={likes ? `${ImgPath}/like3.png` : `${ImgPath}/like1.png`}
        alt=""
      />
    </div>
  );
};

export default LikesBtn;
