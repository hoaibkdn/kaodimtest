import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import SideBar from './SideBar'
import FormOptions from './FormOptions'
import FormTexts from './FormTexts'
import FormUploadFile from './FormUploadFile'
import Header from './../../../common/Header'

import { updateAnswer } from './../../../store/actions/form'

import { QUESTION_TYPES } from './../../../constants/questionTypes'
import { STEP_BUTTON } from './../../../constants/buttonSteps'

import { Layout } from './../../../themes'
import './../styles/FormScreen.css'

class FormScreen extends Component {
  static propTypes = {
    formQuestions: PropTypes.object
  }
  static defaultProps = {
    formQuestions: ''
  }
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
      <>
        <Header />
        <div className="m-t-50">
          <div className="container m-auto">
            <Layout.Flex className="form-screen">
              <div className="flex-1">
                <SideBar
                  onChangeTab={this.onChangeTab}
                  crrTab={crrTab}
                />
              </div>
              <div className="form-content flex-3">
                {this.renderFormByType(crrTab)}
              </div>
            </Layout.Flex>
          </div>
        </div>
      </>
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
