import React, { memo } from 'react'
import { QUESTION_TYPES } from './../../../constants/questionTypes'
import "./../styles/SideBar.css"

const SideBar = memo((props) => {
  const { crrTab, onChangeTab } = props
  const formTypes = [{
    label: 'Text',
    onClick: () => onChangeTab(QUESTION_TYPES.TEXT_QUESTION),
    isActive: crrTab === QUESTION_TYPES.TEXT_QUESTION
  }, {
    label: 'Checkbox',
    onClick: () => onChangeTab(QUESTION_TYPES.CHECKBOX_QUESTION),
    isActive: crrTab === QUESTION_TYPES.CHECKBOX_QUESTION
  }, {
    label: 'Radio button',
    onClick: () => onChangeTab(QUESTION_TYPES.RADIO_QUESTION),
    isActive: crrTab === QUESTION_TYPES.RADIO_QUESTION
  }, {
    label: 'File upload',
    onClick: () => onChangeTab(QUESTION_TYPES.FILE_UPLOAD_QUESTION),
    isActive: crrTab === QUESTION_TYPES.FILE_UPLOAD_QUESTION
  }]

  return (
    <div className="side-bar">
      <ul className="left-nav">
        <li>Form</li>
        {
          formTypes.map(item => (
            <li onClick={item.onClick}>
              <a className={`${item.isActive ? 'highlight' : ''}`}>{item.label}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
})

export default SideBar
