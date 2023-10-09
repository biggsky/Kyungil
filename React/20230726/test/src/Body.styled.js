import styled from "styled-components";

export const Body3div = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: aliceblue; */
    & #Body3Bigdiv{
        width: 90%;
        /* height: 400px; */
        /* background-color: aqua; */
    }
    & #titlename {
        font-size: 30px;
        font-weight: bold;
    }
    & #div1{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 300px;
        /* background-color: yellow; */
    }
    & .four{
        width: 22%;
        box-shadow: 0px 0px 5px 0px skyblue;
        margin-left: 10px;
        margin-right: 10px;
        height: 100%;
        border-radius: 15px;
        overflow: hidden;
    }
    & #four_top{
        width: 100%;
        height: 200px;
        background-color: yellow;
    }
    & #four_top img{
        width: 100%;
        height: 100%;
    }
    & #four_bottom{
        width: 100%;
        height: 100px;
        background-color: white;
    }
    & #four_bottom p, #four_bottom h4{
        margin-left: 20px;
    }
`

export const Body2div = styled.div`
    width: 100%;
    height: 400px;
    /* background-color: lavender; */
    & #title{
        margin-left: 50px;
        font-size: 30px;
        font-weight: bold;
    }
`

export const Bodydiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 500px;
    & #first{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        height: 500px;
        border-radius: 50px;
        background-color: lavender;
    }
    & #first_left{
        display: inline-block;
        width: 40%;
        height: 200px;
        /* background-color: aliceblue; */
    }
    & #first_left #more{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 50px;
        font-weight: bold;
        background-color: #212421;
        border-radius: 10px;
        color: white;
    }
    & #first_left #more:hover{
        cursor: pointer;
        background-color: blue;
    }
    & #first_left p{
        font-size: 15px;
    }
    & #first_left span{
        font-size: 30px;
        font-weight: bold;
    }
    & #first_left #morerelative{
        display: flex;
        /* justify-content: center; */
        width: 100%;
        /* height: 100px; */
    }
    & #first_right{
        display: inline-block;
        width: 40%;
        height: 400px;
        /* background-color: beige; */
    }
    & #first_right img{
        width: 100%;
        border-radius: 20px;
        height: inherit;
    }
`
