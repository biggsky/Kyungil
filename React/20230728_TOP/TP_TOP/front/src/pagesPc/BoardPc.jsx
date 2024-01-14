import React, { useEffect } from "react";
import styled from "styled-components";
import {
  BoardTitlePc,
  BoardSubTitlePc,
  BoardListPc,
} from "../componentsPc/board";
import BottomNavPc from "../componentsPc/nav/BottomNavPc";
import { useNavigate, Link } from "react-router-dom";


const BoardMain = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    /* background-color: beige; */

    & .moeToCreate {
        position: absolute;
        right: 10%;
        top: 5%;
        color: #277bc0;
        cursor: pointer;
        box-sizing: border-box;
        font-weight: 600;
    }

    & .moeToCreate:hover {
        transform: scale(105%);
    }
`;


const BoardPc = () => {
    return (
        <>
            <BoardMain>
                <BoardTitlePc />
                <Link to={"/boardCreate"}><div className='moeToCreate'>글 작성하기</div></Link>

                <BoardListPc/>     
            </BoardMain>

            <BottomNavPc /> 
            {/* 추가함 */}
        </>
    )
}

export default BoardPc