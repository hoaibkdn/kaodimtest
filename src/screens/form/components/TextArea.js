import React, { memo } from 'react'
import './../styles/TextArea.css'

const TextArea = memo(props => {
  const { notice, value, onChange } = props
  return (
    <>
      <textarea
        className="textarea"
        placeholder="Write something"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <p className="notice">{notice}</p>
    </>
  )
})

export default TextArea
