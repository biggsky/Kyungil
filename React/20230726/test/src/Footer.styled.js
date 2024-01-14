import styled from "styled-components";

export const Footerdiv = styled.div`
    width: 100%;
    height: 366px;
    /* background-color: aliceblue; */
    & #svg1{
        width: 30px;
        padding: 3px;
        fill: white;
        background-color: #8358ff;
        border-radius : 50%;
        /* color: skyblue; */
    }
    & #left p{
        margin-top: 0px;
        margin-bottom: 0px;
    }
    & #div{
        width: 100%;
        height: 250px;
    }
    & #div #left{
        float: left;
        width: 50%;
        height: 100%;
        /* background-color: beige; */
    }
    & #div #right{
        float: right;
        width: 50%;
        height: 100%;
        /* background-color: skyblue; */
    }
    & #div #right span, b {
        margin-right: 10px;
    }
    & #left span{
        margin-left: 10px;
        font-size: 40px;
        font-weight: bold;
    }
    & #last{
        width: 100%;
        height: 116px;
        /* background-color: yellow; */
    }
    & #last #svg1{
        margin-right: 30px;
    }
`