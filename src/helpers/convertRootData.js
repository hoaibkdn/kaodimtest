import { QUESTION_TYPES } from './../constants/questionTypes'

/**
 * The function convert structure of data by question type, and group ids of text question
 * @param {Object} data - The root data from question json file
 * @returns {Object}
 * Ex: {
    title: "",
    questionIds: [],
    questionsContent: {}
  }
 */
export const convertQuestions = (data = { title: '', questions: [] }) => {
  const questionIds = []
  let questionsContent = {}
  data.questions.forEach(item => {
    console.log('item.question_type ', item.question_type)
    item.question_type === QUESTION_TYPES.TEXT_QUESTION && questionIds.push(item.id)
    questionsContent = {
      ...questionsContent,
      [item.question_type]: {
        ...questionsContent[item.question_type],
        [item.id]: item
      }
    }
  });
  console.log('questionIds ', questionIds)
  return {
    title: data.title,
    questionIds,
    questionsContent
  }
}
