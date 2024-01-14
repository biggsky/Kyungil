import React, { useState } from "react";
import { CommentContainer, CommentMain } from "./boarddetail.styled";
import { CommentList, CommentForm } from "./index";

const Comment = ({ comments, setTrigger, loginUserInfo, refetch }) => {
  console.log(comments);

  const CommentSubmit = () => {};
  return (
    <>
      <CommentContainer>
        <CommentMain>
          <CommentList
            comments={comments}
            loginUserInfo={loginUserInfo}
            refetch={refetch}
            setTrigger={setTrigger}
          />
        </CommentMain>
        <CommentForm onCommentSubmit={CommentSubmit} setTrigger={setTrigger} />
      </CommentContainer>
    </>
  );
};

export default Comment;
