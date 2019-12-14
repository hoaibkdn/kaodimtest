export const validate = (validation = [{ condition: '', value: true }], text) => {
  let errMsg = ''
  for (let i = 0; i < validation.length; i++) {
    const itemCondition = validation[i]
    switch (itemCondition.condition) {
      case 'REQUIRED':
        if (!text) errMsg = 'This field is required'
        break;
      case 'MIN_CHAR_LENGTH':
        if (text.length < itemCondition.value) errMsg = `Fills min char length ${itemCondition.value}`
        break
      default:
        break;
    }
    if (errMsg) return errMsg
  }
  return errMsg
}

export const convertCondition = (question = {}) => {
  const validCondtions = []
  if (question.is_required) {
    validCondtions.push({
      condition: 'REQUIRED',
      value: true
    })
  }
  if (question.min_char_length) {
    validCondtions.push({
      condition: 'MIN_CHAR_LENGTH',
      value: question.min_char_length
    })
  }
  return validCondtions
}

export const validateOptions = (answer = {}) => {
  let errMsg = 'Please choose an option'
  if (Object.keys(answer).length === 0 && answer.constructor === Object) {
    return errMsg
  }
  for (let key in answer) {
    if (answer[key].checked && answer[key].value) {
      errMsg = ''
    }
  }
  return errMsg
}
