import React, { useState } from "react";
import { CommentContainer } from "./boarddetailPc.styled";
import { CommentListPc, CommentFormPc } from "./index";
import { CommentMain } from "../../components/boarddetail/boarddetail.styled";
import { CommentMainPc } from "./boarddetailPc.styled";

const CommentPc = ({ comments, setTrigger, loginUserInfo, refetch }) => {
  console.log(comments);

  const CommentSubmit = () => {};

  return (
    <>
      <CommentContainer>
        <CommentMainPc>
          <CommentListPc
            comments={comments}
            loginUserInfo={loginUserInfo}
            refetch={refetch}
            setTrigger={setTrigger}
          />
        </CommentMainPc>

        <CommentFormPc
          onCommentSubmit={CommentSubmit}
          setTrigger={setTrigger}
        />
      </CommentContainer>
    </>
  );
};

export default CommentPc;
