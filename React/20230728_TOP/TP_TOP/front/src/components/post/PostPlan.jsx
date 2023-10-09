import React from 'react'
import { BoardLine } from '../boarddetail/boarddetail.styled'
import { PostPlanContainer } from './post.style'

const PostPlan = () => {
  return (
    <div>
        <BoardLine/>
        <PostPlanContainer>
            postplan
        </PostPlanContainer>
        <BoardLine/>
        
    </div>
  )
}

export default PostPlan