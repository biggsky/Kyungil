import React from 'react'
import AddPlanBtn from './AddPlanBtn'
import { BoardPlanContainer, BoardLine } from './boarddetail.styled'

const BoardPlan = () => {
  return (
    <div>
      <>
        <BoardLine />
        <BoardPlanContainer>
          BoardPlan
        </BoardPlanContainer>
        <AddPlanBtn />
      </>
    </div>
  )
}

export default BoardPlan