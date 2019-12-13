import React, { Component } from 'react'

import { connect } from "react-redux"
import SideBar from './SideBar'
import FormOptions from './FormOptions'
import FormTexts from './FormTexts'
import FormUploadFile from './FormUploadFile'

import { updateAnswer } from './../../../store/actions/form'

import { QUESTION_TYPES } from './../../../constants/questionTypes'
import { STEP_BUTTON } from './../../../constants/buttonSteps'
import './../styles/FormScreen.css'

class FormScreen extends Component {
  state = {
    crrTab: QUESTION_TYPES.TEXT_QUESTION
  }
  totalQuestions = this.props.formQuestions.questionIds.length

  onChangeTab = (tab = "") => {
    this.setState({
      crrTab: tab
    })
  }

  /**
   * Set text for text question
   */
  setText = (value = '') => {
    this.setState(preState => ({
      answer: {
        [QUESTION_TYPES.TEXT_QUESTION]: {
          ...preState.answer[QUESTION_TYPES.TEXT_QUESTION],
          [this.state.crrIndexQuestion]: value
        }
      }
    }))
  }
  /**
   * Change question in list
   * next => value = 1
   * prev => value = -1
   */
  changeQuestion = (value = STEP_BUTTON.NEXT) => {
    this.setState(preState => ({
      crrIndexQuestion: preState.crrIndexQuestion + value
    }))

    // Update answer value
    const { crrIndexQuestion, answer } = this.state
    const { questionIds } = this.props.formQuestions
    this.props.updateAnswer(questionIds[crrIndexQuestion], answer, QUESTION_TYPES.TEXT_QUESTION)
  }

  renderFormByType = (type = '') => {
    switch (type) {
      case QUESTION_TYPES.TEXT_QUESTION:
        return <FormTexts />
      case QUESTION_TYPES.CHECKBOX_QUESTION:
        return <FormOptions type="checkbox" />
      case QUESTION_TYPES.RADIO_QUESTION:
        return <FormOptions type="radio" />
      case QUESTION_TYPES.FILE_UPLOAD_QUESTION:
        return <FormUploadFile />
      default:
        return <FormTexts />
    }
  }

  render() {
    const { crrTab } = this.state
    return (
      <div className="container m-auto">
        <div className="form-screen">
          <SideBar
            onChangeTab={this.onChangeTab}
            crrTab={crrTab}
          />
          <div className="form-content">
            {this.renderFormByType(crrTab)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  formQuestions: state.form
});

const mapDispatchToProps = { updateAnswer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormScreen);
