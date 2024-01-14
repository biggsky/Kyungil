import React from 'react'
import AddPlanBtn from './AddPlanBtnPc'
import { BoardPlanContainer, BoardLine } from './boarddetailPc.styled'

const BoardPlanPc = () => {
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

export default BoardPlanPc