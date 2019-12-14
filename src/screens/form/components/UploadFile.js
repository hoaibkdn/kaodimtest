import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import "./../styles/UploadFile.css"

const UploadFile = forwardRef((props, ref) => {
  const { title, onChange } = props
  return (
    <label htmlFor="files" className="upload-file flex-v-center">
      <span className="doc-icon"></span>
      <div>
        <p>{title}</p>
      </div>
      <input
        id="files"
        type="file"
        multiple
        style={{ visibility: 'hidden' }}
        onChange={(e) => onChange(e)}
        ref={ref}
      />
    </label>
  )
})

UploadFile.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
}

UploadFile.defaultProps = {
  title: '',
  onChange: () => { },
}

export default UploadFile
