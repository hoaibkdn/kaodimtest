export const UPDATE_ANSWER = 'UPDATE_ANSWER'
export const updateAnswer = (id = -1, value = {}, questionType = "") => ({
  type: UPDATE_ANSWER,
  id,
  value,
  questionType
})
