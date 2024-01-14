import styled from 'styled-components'

export const AdminTopBox = styled.div`
    width: 100%; height: 100px;
    display: flex; justify-content: center; align-items: center;
    font-size: 30px; font-weight: bold;
`

export const AdminMidBox = styled.div`
    width: 100%; height: auto;
    display: flex;

    & .big-box {
        width: 50%;
        margin: 0 20px 0 20px;
    }
`
export const UserBox = styled.div`
    width: 100%; height: calc((100vh - 160px)/2);
    overflow-y: scroll;
`
export const Title = styled.div`
    width: 100%; height: 30px;
    background-color: #d9d9d9;
    display: flex; justify-content: center; align-items: center;
`
export const User = styled.div`
    width: 100%; height: 40px;
    display: flex; align-items: center;

    & .user-index {
        width: 10%; height: 100%;
        display: flex; align-items: center;
        justify-content: center;
    }
    & .user-id {
        width: 60%; height: 100%;
        display: flex; align-items: center;
    }
`

export const BtnBox = styled.div`
    width: 30%; height: 100%;
    display: flex; justify-content: center; align-items: center;
`
export const Btn = styled.div`
    width: 40%; height: 50%;
    background-color: #277bc0;
    margin: 0 5px 0 5px;
    border-radius: 10px;
    font-size: 12px; font-weight: bold;
    color: white;
    display: flex; justify-content: center; align-items: center;
    background-color: ${(props) => props.back};
    cursor: pointer;
`