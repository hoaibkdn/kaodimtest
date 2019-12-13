import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { connectRouter } from "connected-react-router";

// Reducers
import formReducer from "./form";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = history =>
  persistCombineReducers(persistConfig, {
    router: connectRouter(history),
    form: formReducer
  });

export default persistedReducer;
