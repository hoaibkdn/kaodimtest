import React, { memo } from 'react'
import { BoxWrapper } from './../styles/BoxStyled'

const Box = memo(props => (
  <BoxWrapper>
    {props.children}
  </BoxWrapper>
))

export default Box
