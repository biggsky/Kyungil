import styled from "styled-components";
import {road} from "../img"

export const BoardInsert = styled.button`
    /* float: right;
    margin-right: 30px;
    margin-top: 10px;
    width: 200px;
    height: 50px;
    border-radius: 10px; */

    position: relative;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    border: 3px solid aliceblue;
    color: #1e6b7b;

    &:hover{
        color: #1e6b7b;
        background: aliceblue;

        letter-spacing: 2px;
        transform: scale(1.2);
        cursor: pointer;
    }

    &:active{
        transform: scale(1.5);
    }
`

export const WhiteBody = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: aqua;
    background: url(${road});
    background-repeat: no-repeat;
    background-size:cover;
    text-align: center;

    & #whitebody_center{
        /* display: flex; */
        /* justify-content: flex-end; */

        width: 1000px;
        height: 700px;
        border-radius: 50px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        background-color: white;
    }

    & ${BoardInsert}{
        /* background-color: red; */
    }

    /* 게시글 추가 페이지 */
    & #boardtitle{
        border: 1px solid #6527BE;
        width: 500px;
        height: 50px;
    }
    & #boardcontent{
        border: 1px solid #9681EB;
        width: 500px;
        height: 400px;
    }
    & #boardinsertbutton button{
        border: 1px solid #45CFDD;
        background-color: white;
        width: 500px;
        height: 50px;
    }

    & #boardinsertbutton button:hover{
        background-color: azure;
    }

`

export const BoardListCss = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 500px;
    /* background-color: beige; */
    overflow: scroll;

    & hr{
        color: skyblue;
    }

    & #boardline{
        width: 100%;
        height: 50px;
        /* background-color: aquamarine; */
        white-space: nowrap;
    }

    & #boardline1{
        width: 100%;
        height: 50px;
        background-color: skyblue;
        white-space: nowrap;
    }
    & #div1{
        display: inline-block;
        width: 150px;
        height: 50px;
        line-height: 50px;
        /* background-color: mintcream; */
    }
    & #div2{
        display: inline-block;
        width: 600px;
        height: 50px;
        line-height: 50px;
        /* background-color: skyblue; */
    }
    & #div3{
        display: inline-block;
        width: 250px;
        height: 50px;
        line-height: 50px;
        /* background-color: darkcyan; */
    }
`
