// libs
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers";

// sagas
import rootSaga from "./sagas";

// create saga middleware
const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const middleware = routerMiddleware(history);

// add to middleware list
let middlewares = [sagaMiddleware, middleware];

const store = createStore(rootReducer(history), applyMiddleware(...middlewares));
let persistor = persistStore(store);
export { store, persistor, history };

sagaMiddleware.run(rootSaga);
