import React, { memo } from 'react'
import {
  Wrapper,
  WrapperBar,
  FullBar,
  ProgressBar,
  Number
} from './styles/PercentBarStyled'


const PercentBar = memo(({ percent, number, color }) => {
  return (
    <Wrapper>
      <Number>{number}</Number>
      <WrapperBar>
        <FullBar>
          <ProgressBar
            percent={percent}
            color={color}
          />
        </FullBar>
      </WrapperBar>

    </Wrapper>
  )
})

export default PercentBar
