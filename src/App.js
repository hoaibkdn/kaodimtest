import React, { Component } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor, history } from "./store";
import { Provider } from "react-redux";
import { Router, Route } from "react-router";
import { Home, Form, Profile } from "./screens";

import ReactGA from 'react-ga';

const trackingId = "UA-154814189-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
            <Route path="/profile" component={Profile} />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
