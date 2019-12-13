// libs
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers";

// create middleware
const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const store = createStore(rootReducer(history), applyMiddleware(middleware));
let persistor = persistStore(store);
export { store, persistor, history };

