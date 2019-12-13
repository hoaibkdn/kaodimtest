import { GET_QUESTIONS } from './../actions/form'
import data from './../../mockdata/questions.json'

const INITIAL_STATE = {
  type: '',
  assignment: data
}
const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return Object.assign({}, state, {
        type: GET_QUESTIONS
      })

    default:
      return state
  }
}

export default formReducer
