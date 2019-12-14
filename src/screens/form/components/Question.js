import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Question = memo(props => {
  const { children, question, crrIndexQuestion, totalQuestions, notice } = props
  return (
    <div className="question">
      {crrIndexQuestion >= 0 ? <p className="text-light-grey">Question {crrIndexQuestion + 1} of {totalQuestions}</p> : null}
      <p className="b-600">{question}</p>
      {children}
      <p className="text-light-grey f-12"><em>{notice}</em></p>
    </div>
  )
})

Question.propTypes = {
  children: PropTypes.node.isRequired,
  question: PropTypes.string, 
  crrIndexQuestion: PropTypes.number, 
  totalQuestions: PropTypes.number, 
  notice: PropTypes.string
}

Question.defaultProps = {
  question: '', 
  crrIndexQuestion: -1, 
  totalQuestions: 0, 
  notice: ''
}

export default Question
