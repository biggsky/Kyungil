import styled from "styled-components";

export const Headerdiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 100%;
    height: 80px;
    background-color: white;
    /* background-color: ${({alllight}) => (alllight ? 'white' : 'yellow') }; */

    &.dark-mode{
        width: 100%;
        /* height: 100px; */
        background-color: yellow;
    }

    & #left{
        margin-left: 3%;
        width: 30%;
        height: 80px;
        /* background-color: wheat; */
        white-space: nowrap;
    }
    & #left_dark, #center_dark{
        width: 100%;
        height: 100px;
        background-color: gray;
    }
    & #center{
        display: flex;
        align-items: center;
        width: 40%;
        height: 80px;
        /* background-color: white; */
    }
    & #right{
        display: flex;
        align-items: center;
        width: 30%;
        height: 80px;
        white-space: nowrap;
    }
    & .logo{
        display: inline-block;
    }
    & #svg1{
        width: 30px;
        padding: 3px;
        fill: white;
        background-color: #8358ff;
        border-radius : 50%;
        /* color: skyblue; */
    }
    & b{
        font-size: 40px;
    }
    & #search_div{
        position: relative;
        width: 100%;
    }

    & #search_div input{
        text-indent: 40px;
        width: 100%;
        border: 1px solid lightgray;
        height: 50px;
        border-radius: 10px;
    }
    & #svg2{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 10px;
    }
    & span {
        margin-left: 30px;
    }
    & .circle{
        margin-left: 20px;
        border: 1px solid lightgray;
        border-radius: 50%;
        /* background-color: #8358ff; */
    }
    & .circle svg{
        padding: 5px;
    }
    & .circle button {
        background-color: transparent;
        border: 0px;
    }
`
