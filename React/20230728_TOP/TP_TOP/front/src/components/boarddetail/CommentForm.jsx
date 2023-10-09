import React, { useState } from "react";
import axios from "axios";
import { CommentFormdiv, CommentInput, CommentBtn } from "./boarddetail.styled";
import { useParams } from "react-router-dom";
import { ipUrl } from "../../util/util";
import { useMutation } from "react-query";

const CommentForm = ({ onCommentSubmit, setTrigger }) => {
  const [inputComment, setInputComment] = useState("");
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputComment === "") {
      return;
    }

    onCommentSubmit(inputComment);
    setInputComment("");

    try {
      const response = await ipUrl.post(
        `/post/createComment`,
        { detail: inputComment, board_id: id },
        { withCredentials: true }
      );
      setTrigger((state) => {
        return !state;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitMutation = useMutation("commentSubmit", handleSubmit);
  return (
    <>
      <CommentFormdiv>
        <span>
          <CommentInput
            type="text"
            value={inputComment}
            onChange={(e) => setInputComment(e.target.value)}
            placeholder="댓글을 입력해주세요"
          />
          <CommentBtn onClick={(e) => handleSubmitMutation.mutate(e)}>
            등록
          </CommentBtn>
        </span>
      </CommentFormdiv>
    </>
  );
};

export default CommentForm;
