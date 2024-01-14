import React from "react";
import {WhiteBody,BoardInsert, BoardListCss} from "../components/bulletin.styled";
import BoardList from "../components/BoardList";

import { Link } from "react-router-dom";

const Bulletinboard = () => {
  return (
    <>
      <WhiteBody>
        <div id='whitebody_center'>
          <br />
          <Link to={"/boardinsert"}>
            <BoardInsert> 게시글 작성하기 </BoardInsert>
          </Link>

          <BoardListCss>
            <BoardList />
          </BoardListCss>


        </div>
      </WhiteBody>
    </>
  );
};

export default Bulletinboard;
