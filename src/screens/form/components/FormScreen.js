import React, { Component } from 'react'

import { connect } from "react-redux"
import FormHeader from './FormHeader'
import SideBar from './SideBar'
import Question from './Question'
import TextArea from './TextArea'
import Button from './../../../common/Button'
import FormOptions from './FormOptions'

import { updateAnswer } from './../../../store/actions/form'

import { QUESTION_TYPES } from './../../../constants/questionTypes'
import { STEP_BUTTON } from './../../../constants/buttonSteps'
import './../styles/FormScreen.css'

class FormScreen extends Component {
  state = {
    crrIndexQuestion: 0,
    answer: {
      [QUESTION_TYPES.TEXT_QUESTION]: {}
    },
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

  render() {
    const { questionIds, questionsContent } = this.props.formQuestions
    const { crrIndexQuestion, answer, crrTab } = this.state
    console.log('this.props', this.props)
    return (
      <div className="container m-auto">
        <div className="form-screen">
          <SideBar
            onChangeTab={this.onChangeTab}
            crrTab={crrTab}
          />
          <div className="form-content">
            <FormHeader />
            {
              crrTab === QUESTION_TYPES.TEXT_QUESTION ?
                questionIds.map((id, index) => {
                  return crrIndexQuestion === index ?
                    (
                      <Question
                        question={questionsContent[QUESTION_TYPES.TEXT_QUESTION][id].prompt}
                        crrIndexQuestion={crrIndexQuestion}
                        totalQuestions={this.totalQuestions}
                      >
                        <TextArea
                          value={answer[QUESTION_TYPES.TEXT_QUESTION][crrIndexQuestion]}
                          onChange={this.setText}
                        />
                      </Question>
                    ) : null
                }) :
                <FormOptions />
            }
            <div className="group-btn">
              <Button
                title="Prev"
                isDisabled={crrIndexQuestion === 0}
                onClick={() => this.changeQuestion(STEP_BUTTON.PREV)}
              />
              <Button
                title="Next"
                isDisabled={crrIndexQuestion === this.totalQuestions - 1}
                onClick={() => this.changeQuestion()}
              />
            </div>
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
