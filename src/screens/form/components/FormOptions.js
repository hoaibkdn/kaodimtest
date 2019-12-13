import React, { Component } from 'react'
import { connect } from 'react-redux'
import Option from './Option'
import Button from './../../../common/Button'
import Question from './Question'
import FormResult from './FormResult'

import { updateAnswer } from './../../../store/actions/form'
import { QUESTION_TYPES } from './../../../constants/questionTypes'
import { STEP_BUTTON } from './../../../constants/buttonSteps'


class FormOptions extends Component {
  state = {
    stepOption: 0,
    answer: {}
  }
  type = this.props.typeOption === 'checkbox' ? QUESTION_TYPES.CHECKBOX_QUESTION : QUESTION_TYPES.RADIO_QUESTION


  componentDidUpdate(preProps) {
    if (preProps.typeOption !== this.props.typeOption) {
      this.setState({
        stepOption: 0,
        answer: {}
      })
    }
  }

  onChange = (optionId, value) => {
    const { typeOption } = this.props
    let { answer } = this.state
    if (answer[optionId] && typeOption === 'checkbox' && answer[optionId].checked && !value) {
      delete answer[optionId]
    } else {
      typeOption === 'radio' ?
        answer = {
          [optionId]: {
            checked: true,
            value
          }
        } :
        answer = {
          ...answer,
          [optionId]: {
            checked: true,
            value
          }
        }
    }
    this.setState({
      answer
    })
  }


  /**
   * Change question in list
   * next => value = 1
   * prev => value = -1
   */
  changeQuestion = (value = STEP_BUTTON.NEXT) => {
    this.setState(preState => ({
      stepOption: preState.stepOption + value
    }))

    // Update answer value
    const { answer } = this.state
    this.props.updateAnswer(-1, answer, this.type)
  }

  render() {
    const { stepOption, answer } = this.state
    const { formQuestions: { questionsContent }, typeOption } = this.props
    return (
      <>
        {
          stepOption === 2 ?
            <FormResult
              questionType={this.type}
            /> :
            <Question
              crrIndexQuestion={-1}
              question={questionsContent[this.type].prompt}
            >
              {
                questionsContent[this.type].options &&
                questionsContent[this.type].options.map(item => (
                  <Option
                    key={item.id}
                    type={typeOption}
                    value={item.value}
                    isBox={stepOption > 0}
                    isChecked={answer[item.id] && answer[item.id].checked}
                    optionId={item.id}
                    onChange={this.onChange}
                    text={answer[item.id] ? answer[item.id].value : ''}
                  />
                ))
              }
            </Question>
        }
        <div className="group-btn m-t-50">
          <Button
            title="Prev"
            isDisabled={stepOption === 0}
            onClick={() => this.changeQuestion(STEP_BUTTON.PREV)}
          />
          <Button
            title="Next"
            isDisabled={stepOption === 2}
            onClick={() => this.changeQuestion()}
          />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  formQuestions: state.form,
  typeOption: ownProps.type
});

const mapDispatchToProps = { updateAnswer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormOptions);

