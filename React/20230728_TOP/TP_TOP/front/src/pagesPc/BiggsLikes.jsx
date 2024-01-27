import React, { useEffect } from 'react'
import { useState } from 'react';
import { LikeSize3 } from '../componentsPc/boarddetail/boarddetailPc.styled'
import { ipUrl } from '../util/util';
import styled from 'styled-components';

const Btn1 = styled.button`
background-color: transparent;
border: 0px;
`

const BiggsLikes = ({boardIndex, boardLikeArr, loginUserInfo, refetch}) => {
    const [likeState, setLikeState] = useState(false);
    const [isDisabled, setDisabled] = useState(false);
    const [maxClickNumber, setMaxClickNumber] = useState(0);
    let user_id = loginUserInfo.id;

    useEffect(()=>{
        const heartState = async () =>{
            try {
                let heart_state = await ipUrl.post("/post/likeboard",
                    { board_id: boardIndex, user_id: user_id},
                    { withCredentials: true }
                );
                console.log("들어오니..?",heart_state.data);
                if(heart_state.data == "heart_off"){
                    setLikeState(false);
                }else{
                    setLikeState(true);
                }
    
            } catch (error) {
                console.log(error);
            }
        }
        heartState();
    },[]);

    const LikesClick = async () =>{
        console.log("눌린수",maxClickNumber);
        if(maxClickNumber == 5){
            alert("경고");
            setTimeout(() => {
                setDisabled(false); // 해방
            }, 5000);
            return setDisabled(true); // 막음
            
        }
        setTimeout(() => {
            setMaxClickNumber(0);
        }, 5000);
        setDisabled(true); // 막음
        setMaxClickNumber(maxClickNumber+1);
        // console.log(likeState);
        // setLikeState(!likeState);
        // console.log(likeState);
        // console.log('--------');
        // 리액트는 상태변경을 해도 바로 적용이 안됨.

        try {
            if(likeState == false){
                await ipUrl.post(`/post/updateboardlikes/${boardIndex}`,
                {board_id : boardIndex},
                );
                refetch();
            }else{
                await ipUrl.get(`/post/deleltboardlikes/${boardIndex}`, { withCredentials: true });
                refetch();
            }
            
            setLikeState(!likeState);
            // console.log(likeStatex);

            setDisabled(false); // 해방
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <Btn1 disabled={isDisabled}>
            <LikeSize3 onClick={LikesClick} src={likeState == false ? '/imgs/icons/like1.png' : '/imgs/icons/like3.png'} alt="" />
        </Btn1>

        {/* src={  `/imgs/icons/like3.png` : `/imgs/icons/like1.png`} */}
    </div>
  )
}

export default BiggsLikes