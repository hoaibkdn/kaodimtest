import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { BoxWrapper } from './../styles/BoxStyled'

const Box = memo(props => (
  <BoxWrapper {...props}>
    {props.children}
  </BoxWrapper>
))

Box.propTypes = {
  children: PropTypes.node.isRequired
}


export default Box
