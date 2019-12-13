import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './../styles/Option.css'

const Option = memo(props => {
  const { type, value, isBox, isChecked } = props
  return (
    <label className={`cursor-pointer`}>
      <div className="custom-checkbox">
        {!isBox && <input type={type} id={value} />}
        <label htmlFor={value}>
          {
            <div className={`option-label b-400 ${isBox ? 'box-border cursor-pointer' : ''} ${isChecked && isBox ? 'box-border-active' : ''}`}>
              {value === 'Other' ?
                <input type="text" className="option-input" disabled={!isChecked} /> :
                value
              }
            </div>
          }
        </label>
      </div>
    </label>
  )
})

Option.propTypes = {
  type: PropTypes.string,
}

Option.defaultProps = {
  type: 'checkbox',
}


export default Option
