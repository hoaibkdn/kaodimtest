import React, { memo } from 'react'

const Question = memo(props => {
  const { children, question, crrIndexQuestion, totalQuestions } = props
  return (
    <div className="question">
      <p className="text-light-grey">Question {crrIndexQuestion + 1} of {totalQuestions}</p>
      <p className="b-600">{question}</p>
      {children}
    </div>
  )
})

export default Question