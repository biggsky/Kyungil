import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { BoardTitle, BoardSubTitle,BoardList } from '../components/board'
import { BottomBox } from '../components/board/board.styled';
import BottomNav from '../components/nav/BottomNav';
const BoardMain =styled.div`
width: 400px;
height: 800px;

`

const Board = () => {

    return (
        <>
            <BoardMain>
                <BoardTitle />
                <BoardList/>
                <BottomBox/>
            </BoardMain>
            
            <BottomNav/>
        </>
    )
}

export default Board