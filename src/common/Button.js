import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { BtnWrapper, BtnLink } from './styles/ButtonStyled'

const Button = memo((props) => {
  const { title, isDisabled, onClick, type, className } = props
  return (
    <BtnWrapper
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      className={`btn ${className}`}
    >
      {title}
    </BtnWrapper>
  )
})

Button.propTypes = {
  title: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
}

Button.defaultProps = {
  title: '',
  isDisabled: false,
  onClick: () => { },
  type: ''
}

const ButtonLink = memo((props) => {
  const { to, title } = props
  return (
    <BtnLink to={to}>{title}</BtnLink>
  )
})

ButtonLink.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
}

ButtonLink.defaultProps = {
  title: '',
  to: '/',
}

export default Button
export { ButtonLink }
