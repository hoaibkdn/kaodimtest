import React, { Component } from 'react'

import { connect } from "react-redux"
import FormHeader from './FormHeader'
import Question from './Question'
import TextArea from './TextArea'
import Button from './../../../common/Button'
import FormResult from './FormResult'

import { updateAnswer } from './../../../store/actions/form'

import { QUESTION_TYPES } from './../../../constants/questionTypes'
import { STEP_BUTTON } from './../../../constants/buttonSteps'

class FormTexts extends Component {
  state = {
    crrIndexQuestion: 0,
    answer: {},
  }
  totalQuestions = this.props.formQuestions.questionIds.length


  /**
   * Set text for text question
   */
  setText = (value = '') => {
    const { questionIds } = this.props.formQuestions
    this.setState(preState => ({
      answer: {
        ...preState.answer,
        [questionIds[preState.crrIndexQuestion]]: value
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
    const { crrIndexQuestion, answer } = this.state
    console.log('props ==> ', this.props)
    return (
      <>
        <FormHeader />
        {
          crrIndexQuestion === this.totalQuestions ?
            <FormResult
              questionType={QUESTION_TYPES.TEXT_QUESTION}
            /> :
            questionIds.map((id, index) => {
              return crrIndexQuestion === index ?
                (
                  <Question
                    key={index}
                    question={questionsContent[QUESTION_TYPES.TEXT_QUESTION][id].prompt}
                    crrIndexQuestion={crrIndexQuestion}
                    totalQuestions={this.totalQuestions}
                  >
                    <TextArea
                      value={answer[id]}
                      onChange={this.setText}
                    />
                  </Question>
                ) : null
            })
        }
        <div className="group-btn">
          <Button
            title="Prev"
            isDisabled={crrIndexQuestion === 0}
            onClick={() => this.changeQuestion(STEP_BUTTON.PREV)}
          />
          <Button
            title="Next"
            isDisabled={crrIndexQuestion === this.totalQuestions}
            onClick={() => this.changeQuestion()}
          />
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
)(FormTexts);
