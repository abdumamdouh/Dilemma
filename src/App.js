import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";

import { Route, Redirect, Switch } from "react-router";

import Test from "./components/Test";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <>
        <LoadingBar />
        <Header />
        <h1>Hello World</h1>
        <Switch>
          <Route exact name="login" path="/" component={Test} />
          <Route
            exact
            name="Dashboard"
            path="/poll/unanswerd"
            component={Test}
          />
          <Route exact name="newQuestion" path="/add" component={Test} />
          <Route
            exact
            name="Leaderboard"
            path="/leaderboard"
            component={Test}
          />
          <Route exact path="/404" name="PageNotFound" component={Test} />
          <Redirect to="/404" />
        </Switch>

        <Footer />
      </>
    );
  }
}
export default connect()(App);
