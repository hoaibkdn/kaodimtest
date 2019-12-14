import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { VerticalTextWrapper, Title, Text } from './../styles/VertialTextStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const VerticalText = memo(({ title, text, hasIcon, children, hasBorder, textRight }) => {
  return (
    <VerticalTextWrapper hasBorder={hasBorder} textRight={textRight}>
      <Title>{hasIcon && <span><FontAwesomeIcon icon={faStar} /></span>} {title}</Title>
      {children ||
        <Text>{text}</Text>
      }
    </VerticalTextWrapper>
  )
})

VerticalText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.bool,
  hasIcon: PropTypes.bool,
  hasBorder: PropTypes.bool,
  textRight: PropTypes.bool
}

VerticalText.defaultProps = {
  title: '',
  text: '',
  hasIcon: false,
  hasBorder: false,
  textRight: false
}

export default VerticalText
