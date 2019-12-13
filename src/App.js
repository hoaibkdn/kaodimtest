import React, { Component } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor, history } from "./store";
import { Provider } from "react-redux";
import { Router, Route } from "react-router";
import Home from "./screens/home/components/Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <Route exact path="/" component={Home} />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
