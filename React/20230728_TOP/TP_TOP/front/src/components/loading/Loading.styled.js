import styled from 'styled-components'

export const LoadingBox = styled.div`
    width: 100vw; height: 100vh;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 100;
    position: fixed; top: 0;
`

export const LoadingCircle = styled.div`
    width: 200px; height: 200px;
    border-radius: 100%;
    position: fixed; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 5px 15px 0px #277bc0;
    z-index: 200;

    & img {
        width: 100%;
        border-radius: 100%;
    }
`