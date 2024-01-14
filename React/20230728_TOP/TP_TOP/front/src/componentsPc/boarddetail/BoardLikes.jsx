import React, { useEffect, useState } from 'react'
import { LikeSize2 } from './boarddetailPc.styled'
import { ipUrl } from '../../util/util';

const BoardLikes = ({board_id}) =>{
    const ImgPath = "/imgs/icons"
    const [boardLikes, setBoardLikes] = useState(false)

    const LikesClick =async()=>{
      try {
        const response = await ipUrl.post(
            // `/post/updateLikes`,{comment_id:commentIndex},{withCredentials:true}
            )
      } catch (error) {
        
      }
      setBoardLikes(!boardLikes);

    }


    // 해당 user_id가 좋아요한 comment_id에 대한 likes 보이기
     const LikesView = async()=>{

     }
     // 좋아요 등록, 해제
     const updateLikes = async()=>{
      
     
     }

  return (
    <div>
        <LikeSize2 onClick={LikesClick}  
        src={boardLikes ? `${ImgPath}/like3.png` : `${ImgPath}/like1.png`}
         alt="" />
    </div>
  )
}

export default BoardLikes