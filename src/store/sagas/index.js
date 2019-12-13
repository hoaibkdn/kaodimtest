import { all } from "redux-saga/effects";

import watchResource from "./questions";

export default function* rootSaga() {
  yield all([watchResource()]);
}
