import React, { Component } from 'react'
import Option from './Option'

class FormOptions extends Component {
  render() {
    return (
      <>
        <Option
          type="checkbox"
          value="Option 1"
        />
        <Option
          type="radio"
          value="Option 2"
        />
        <Option
          type="radio"
          value="Option 2"
          isBox
        />
        <Option
          type="radio"
          value="Option 2"
          isBox
          isChecked
        />
        <Option
          type="radio"
          value="Other"
          isBox
          isChecked
        />
        <Option
          type="checkbox"
          value="Other"
          isBox
        />
      </>
    )
  }
}

export default FormOptions
