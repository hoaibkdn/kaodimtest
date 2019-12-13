import { put, call, takeLatest } from "redux-saga/effects";
import { GET_QUESTIONS, GET_QUESTIONS_SUCCESSED, GET_QUESTIONS_FAILED } from './../actions/form'
import api from "./../../services/api";

const getQuestionsSaga = function* (action) {
  try {
    const response = yield call(() => api.getQuestions("profiles"));
    if (response.status < 400) {
      yield put({
        type: GET_QUESTIONS_SUCCESSED,
        response: response.data.results
      });
    } else {
      yield put({
        type: GET_QUESTIONS_FAILED,
        error: response.originalError
      });
    }
  } catch (error) {
    yield put({
      type: GET_QUESTIONS_FAILED,
      error
    });
  }
};

const watchResource = function* () {
  yield takeLatest(GET_QUESTIONS, getQuestionsSaga);
};

export default watchResource;
