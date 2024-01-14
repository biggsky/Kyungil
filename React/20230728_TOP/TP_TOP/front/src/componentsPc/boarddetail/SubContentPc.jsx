import React from 'react'
import { SubContentStyle } from './boarddetailPc.styled'

const SubContentPc = ({detail}) => {
  return (
    <div>
        <SubContentStyle>{detail}</SubContentStyle>
     </div>
  )
}

export default SubContentPc