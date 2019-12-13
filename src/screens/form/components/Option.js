import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './../styles/Option.css'

const Option = memo(props => {
  const { type, value, isBox, isChecked, onChange, optionId, text = "" } = props
  return (
    <label className={`cursor-pointer`}>
      <div className="custom-checkbox">
        {!isBox &&
          <input
            type={type}
            id={optionId}
            checked={!!isChecked}
            onChange={() => { }}
          />}

        {<label className={!value ? 'm-t-10' : ''} htmlFor={optionId} onClick={() => onChange(optionId)}>
          {
            (value || !isBox) &&
            <div className={`b-400 ${isBox ? 'box-border cursor-pointer' : 'option-label'} ${isChecked && isBox ? 'box-border-active' : ''}`}>
              {value}
            </div>
          }
        </label>}
        {!value &&
          <div className={`b-400 ${isBox ? 'box-border cursor-pointer' : ''} ${isChecked && isBox ? 'box-border-active' : ''}`}>
            <input
              type="text"
              className={`option-input ${isChecked && isBox ? 't-white' : ''}`}
              onChange={(e) => onChange(optionId, e.target.value)}
              onFocus={() => onChange(optionId)}
              value={text}
            />
          </div>
        }
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
