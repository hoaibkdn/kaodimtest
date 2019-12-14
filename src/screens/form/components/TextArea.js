import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './../styles/TextArea.css'

const TextArea = memo(props => {
  const { value, onChange } = props
  return (
    <>
      <textarea
        className="textarea"
        placeholder="Write something"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </>
  )
})

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

TextArea.defaultProps = {
  value: '',
  onChange: () => { },
}

export default TextArea
