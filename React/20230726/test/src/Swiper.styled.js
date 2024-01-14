import styled from "styled-components";

export const Swiperdiv = styled.div`
    width: 100%;
    height: 300px;
    /* #app {
    height: 100%;
    }
    html,
    body {
    position: relative;
    height: 100%;
    } */

    body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
    }

    .swiper {
    width: 100%;
    height: 100%;
    }

    .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

    .swiper {
    margin-left: auto;
    margin-right: auto;
    }

    & .swiperelative{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 270px;
        /* background-color: yellow; */
    }
    & .swiperelative .swiper_in{
        display: inline-block;
        margin-left: 30px;
        margin-right: 30px;
        width: 20%;
        height: 270px;
        /* border: 1px solid black; */
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        overflow: hidden;
        /* background-color: yellow; */
    }
    & #span_div{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    & #span_div span{
        position: absolute;
        left: 10px;
        top: 45%;
        transform: translateY(-45%);
        font-weight: bold;
        font-size: 70px;
        filter: drop-shadow(0 2px 5px rgba(0,0,0,.3));
        color: white;
    }
    & .swiper_in .swiper_in_top{
        width: 100%;
        height: 50%;
        background-color: blueviolet;
    }
    & .swiper_in .swiper_in_top img{
        width: 100%;
    }

    & .swiper_in .swiper_in_bottom{
        position: relative;
        width: 100%;
        height: 50%;
    }

    & .swiper_in_bottom .bottom_left{
        text-align: left;
        margin-left: 10%;
        position: absolute;
        width: 50%;
        height: 100%;
        /* background-color: beige; */
    }
    & .swiper_in_bottom .bottom_right{
        text-align: left;
        position: absolute;
        right: 0;
        width: 50%;
        height: 100%;
        /* background-color: blue; */
    }
    & .span1{
        font-size: 10px;
    }
    
    .bottom_right .span1, .bottom_right .span2{
        margin-left: 10px;
    }

`