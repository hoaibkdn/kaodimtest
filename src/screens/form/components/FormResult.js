import React, { memo } from 'react'
import { connect } from "react-redux"
import { QUESTION_TYPES } from './../../../constants/questionTypes'

const Answer = ({ question = "", answer, type = "" }) => (
  <div>
    <p className="b-600">{question}</p>
    {type === 'image' ?
      <img
        src={answer}
        alt={question}
        width={200}
        height={200}
        className="f-cover"
      /> :
      <p>{answer}</p>
    }
  </div>
)
const FormResult = memo(props => {
  console.log('props ', props)
  const { questionType, formQuestions: { questionsContent, questionIds } } = props
  const crrQuestions = questionsContent[questionType]
  const renderAnswers = () => {
    switch (questionType) {
      case QUESTION_TYPES.TEXT_QUESTION:
        return (
          <div>
            {
              questionIds.map(id => (
                <Answer
                  question={crrQuestions[id].prompt}
                  answer={crrQuestions[id].answer}
                />
              ))
            }
          </div>
        )
      case QUESTION_TYPES.RADIO_QUESTION:
      case QUESTION_TYPES.CHECKBOX_QUESTION:
        let result = []
        crrQuestions.options.forEach((item, index) => {
          item.answer && result.push(item.answer)
        })
        return (
          <Answer
            question={crrQuestions.prompt}
            answer={result.join(' and ')}
          />
        )

      case QUESTION_TYPES.FILE_UPLOAD_QUESTION:
        return (
          <Answer
            type="image"
            question={crrQuestions.prompt}
            answer={crrQuestions.answer.imagePreviewUrl}
          />
        )

      default:
        break;
    }
  }
  return (
    <div>
      <h4>Success!</h4>
      {
        renderAnswers()
      }
    </div>
  )
})

const mapStateToProps = (state, ownProps) => ({
  formQuestions: state.form,
  questionType: ownProps.questionType
});


export default connect(mapStateToProps)(FormResult);
