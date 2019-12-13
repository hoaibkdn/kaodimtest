import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './styles/Button.css'

const Button = memo((props) => {
  const { title, isDisabled, onClick, type, className } = props
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      className={`btn ${className}`}
    >
      {title}
    </button>
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

export default Button
