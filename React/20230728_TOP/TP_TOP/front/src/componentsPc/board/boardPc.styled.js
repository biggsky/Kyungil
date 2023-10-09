import styled from 'styled-components';

const Main = styled.div`
    display: inline-block;
    max-width: 350px;
    width: calc(50% - 20px);
    height: 270px;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 20px;
    cursor: pointer;
    position: relative;
    margin: 10px;

    &:hover {
        transform: scale(101%);
    }
`
const ImgBox = styled.div`
width: 350px;
display: grid;
gap: 1px;
height: 150px;
border-top-left-radius:10px;
border-top-right-radius:10px;
overflow: hidden;
 /* 나중에 background에 리뷰 사진 올리기 */
/* background: url('https://news.airbnb.com/wp-content/uploads/sites/4/2022/04/VILLA-SANGLUNG.jpeg?fit=1024%2C678') center center / cover; */
`
const Container = styled.div`
    width: 100%; height: 140px;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    font-size: 30px;

    & h3 {
        margin: 0;
    }
    & p {
        font-size: 16px;
        margin: 5px 0 0 0; padding: 0;
    }
`

const TextBox = styled.div`
position: relative;
border-top: none;
width: 350px;
display: grid;
gap: 1px;
height: 120px;
border-bottom-left-radius:10px;
border-bottom-right-radius:10px;

`
const ProflieImg= styled.div`
position: absolute;
    top: 48%;
    left: 8%;
    width: 42px;
    height: 42px;
    border-radius: 100%;
    border: 2px solid white;
    z-index: 10;
    /* 나중에 background에 프로필 사진 올리기 */
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAADACAMAAACKwPcLAAAANlBMVEVmZmb////u8vpwb3D29vbY2NixsbGLi4vi4uKCgoLr6+vPz8+fn594eHjFxcWop6i7u7uVlZUD7tw7AAAEB0lEQVR4nO2ba5ujIAxG2wHBu+3//7MzjnhpV60kr5vBJ+fjri6cQhIE9nZLnC/pDrBRA3nUQB41kEcN5FEDedRAHjWQRw3kUQN51EAeNZBHDeRRA3nUQB41kEcN5FEDedRAHjXYxjxdld17bFa5pzmrnZMMmi6/v5F3zSlNnWJQZ+/dH8jqExo7weBZrve/p3zCm4MbNBu//zQO6LmENujsvsBPXHfYFrEGplp2tXK+6P+08K5ailXQvAQ1MHMCsm3x+ndFO0vkSAWkQTMJWLfSR+PsGQpAg3kEHhsdNI8TFHAGk0Dptx/yJVwBZzAGcbbbNzMm2wrVLsygCz1rPz3YhgdRSRVl0NiDApOCBZU2lEGYHBn62c+ADJ4hiA/FpwnhjFkjgQxCn3ay0BIffCFNYwzqUAeOPh/qAmSxjTEI32KHc7yxuEiAGDTDT+qOv+GGNxDpCGLQRQ7BNAiImgAxyI+WgpmhKOSAxhEGZpgSxecnZ4rhHcDqCGEwFAMb95JFlQSEgaMs1arY4N8CYVBRopKkvQbCIIupxyMeVREQBjY+kMdQjgyeNRAGQ1r5P2/9ixr0qAEPnEHKkZx+NiWV1z9V0dJfVaS/skt/dZ3+F84FvjLT/9JPf7flAjte6e86XmDnN/3d9wucgKR/CnWBk8ALnMamfyK+VEj0VsIFboZc4HbOLf0bUrcL3FL7UWh3BSK3lT6DNvDVXv97yhp7eRZr4D9MoRAJa7mWDNKgONT/Xwfg1VngquLx2svs0fmwvvC+e7zZ4eIBZuCXN33Lx8rXi3cvd7EB23W/oAzcYoq8l+OZxi089xexh8EYmHmOfArTenawkJmE2S/aX9K9MTtAAhphUEwriepQwTXzlAMoAAwmAXt486HIcQp8g/Eb/55HrHhMC1NgG0zfBG1caqlR4cw2GLNQ1N57z6TATKpcg7EQE+rTqMDc+WIaeOoI9NR0+wU8g3EHlCQwK7BCgWcQ5hD5MKkFzCOWQZhD9B3QMZFxUirLIOQhxi56wc9HHIMwjVk7oI4dzByDkjmHekIuYAwCw8AjcuE4kPRIYBjEHmBuMAwC/UyNbhB/iLxOzawJdAOHGYJxEIhFkWPAbHgm/BTU18kGBWBBMBCmY+QdsQmyQccMwAU5K6DIBkMmOnwPYQ/HWhyRDXhD/0IoLMS3qQYFq9U3WL8G1aDmL4tnMk5Zpho4XBiMnxnEUKYakP7XxBYdZ0CpBqR7vluw7v9SDXK8AbG2UA2QqYj3r6kBBgmDv4MayKMG8qiBPGogjxrIowbyqIE8aiCPGsijBvKogTxqII8ayKMG8qiBPGogjxrIowbyqIE8aiCPGsijBvKogTxqII8ayKMG8qiBPGogz9c3668W/KAjNpwAAAAASUVORK5CYII=') center center / cover;
`
const SmallText = styled.div`
position: absolute;
top: 25%;
left: 10%;
font-size: 14px;

`
const SubTitle = styled.div`
position: absolute;
top: 50%;
left: 10%;
font-size: 19px;
font-weight: 600;

`
export {Main,ImgBox,Container,TextBox,ProflieImg,SmallText,SubTitle}

