export const GET_QUESTIONS = 'GET_QUESTIONS'
export const GET_QUESTIONS_SUCCESSED = 'GET_QUESTIONS_SUCCESSED'
export const GET_QUESTIONS_FAILED = 'GET_QUESTIONS_FAILED'
export const getQuestions = () => ({
  type: GET_QUESTIONS
})
export const getQuestionsSuccessed = () => ({
  type: GET_QUESTIONS_SUCCESSED
})
export const getQuestionsFailed = () => ({
  type: GET_QUESTIONS_FAILED
})
