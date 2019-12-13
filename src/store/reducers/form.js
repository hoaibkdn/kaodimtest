import { UPDATE_ANSWER } from './../actions/form'
import data from './../../mockdata/questions.json'
import { convertQuestions } from './../../helpers/convertRootData'
import { QUESTION_TYPES } from './../../constants/questionTypes'

const INITIAL_STATE = {
  type: '',
  ...convertQuestions(data)
}
const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_ANSWER:
      const { id, value, questionType } = action
      console.log('action ', action)
      const answer = value[id]
      let questionsContent = state.questionsContent
      switch (questionType) {
        case QUESTION_TYPES.TEXT_QUESTION:
          questionsContent[questionType][id] = {
            ...questionsContent[questionType][id],
            answer
          }
          break;
        case QUESTION_TYPES.FILE_UPLOAD_QUESTION:
          questionsContent[questionType] = {
            ...questionsContent[questionType],
            answer: value
          }
          break;
        default:
          const optionsAnswer = questionsContent[questionType].options.map(item => value[item.id] ? ({ ...item, answer: value[item.id].value }) : item)
          questionsContent[questionType] = {
            ...questionsContent[questionType],
            options: optionsAnswer
          }
          break;
      }
      return Object.assign({}, state, {
        type: UPDATE_ANSWER,
        questionsContent
      })

    default:
      return state
  }
}

export default formReducer
