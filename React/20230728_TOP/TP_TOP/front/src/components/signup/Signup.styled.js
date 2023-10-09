import styled from 'styled-components'

export const SignupTopBox = styled.div`
    width: 100%; height: auto;
    background-color: #277bc0;

    & img {
        width: 100px;
    }
`

export const SignupMidBox = styled.div`
    width: 100%; height: auto;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
`
export const Title = styled.div`
    width: 100%; height: 100px;
    font-size: 40px; font-weight: bold;
    color: #277bc0;
    padding: 20px;
    box-sizing: border-box;
`
export const InputBox = styled.div`
    width: 90%; height: auto;
    position: relative;
`
export const Label = styled.label`
    font-size: 20px;
    display: flex; justify-content: start;
`
export const Input = styled.input`
    width: 100%; height: 30px;
    border: 1px solid silver;
    outline: none;
    box-sizing: border-box;
    margin: 0 0 10px 0;
    padding: 0 60px 0 5px;
`
export const Text = styled.div`
    width: 100%; height: 20px;
    font-size: 12px;
    text-align: end;
    color: ${(props) => props.color || 'silver'};
`
export const ChkBtn = styled.div`
    width: 100px; height: 10px;
    font-size: 12px; font-weight: bold;
    text-align: end;
    color: silver;
    position: absolute; right: 10px; top: 30px;
`
export const TryBtn = styled.div`
    width: 100%; height: 40px;
    background-color: #277bc0;
    color: white;
    font-size: 20px; font-weight: bold;
    border-radius: 25px;
    display: flex; justify-content: center; align-items: center;
    margin: 10px 0 0 0;
`


export const SignupBottomBox = styled.div`
    width: 100%; height: auto;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    padding: 30px 0 0 0;
    box-sizing: border-box;
`
export const MoveText = styled.div`
    width: 90%; height: 30px;
    display: flex; justify-content: center; align-items: center;
`
export const MoveBtn = styled.div`
    width: 90%; height: 30px;
    color: #277bc0;
    text-decoration: underline;
    display: flex; justify-content: center; align-items: center;
`