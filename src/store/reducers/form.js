import { UPDATE_ANSWER } from './../actions/form'
import data from './../../mockdata/questions.json'
import { convertQuestions } from './../../helpers/convertRootData'

const INITIAL_STATE = {
  type: '',
  ...convertQuestions(data)
}
const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_ANSWER:
      const { id, value, questionType } = action
      const answer = value[questionType][id]
      let questionsContent = state.questionsContent
      questionsContent[questionType][id] = {
        ...questionsContent[questionType][id],
        answer
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
