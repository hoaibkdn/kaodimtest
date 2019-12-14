import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  WrapperBar,
  FullBar,
  ProgressBar,
  Number
} from './styles/PercentBarStyled'
import { Colors } from './../../../../themes'

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

PercentBar.propTypes = {
  percent: PropTypes.number, 
  number: PropTypes.number, 
  color: PropTypes.string
}

PercentBar.defaultProps = {
  percent: 0, 
  number: 0, 
  color: Colors.orange
}

export default PercentBar
