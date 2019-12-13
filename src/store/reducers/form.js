import { GET_QUESTIONS } from './../actions/form'

const INITIAL_STATE = {
  type: '',
  questions: {}
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
