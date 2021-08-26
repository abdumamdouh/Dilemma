import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";

import { Route, Redirect, Switch } from "react-router";

import Test from "./components/Test";
import PageNotFound from "./pages/PageNotFound404";
import Login from "./pages/Login";
import NewQuestionForm from "./pages/NewQuestionForm";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <>
        <LoadingBar />
        <Header />
        <Switch>
          <Route exact name="login" path="/" component={Login} />
          <Route
            exact
            name="Dashboard"
            path="/poll/unanswerd"
            component={Test}
          />
          <Route
            exact
            name="newQuestion"
            path="/add"
            component={NewQuestionForm}
          />
          <Route
            exact
            name="Leaderboard"
            path="/leaderboard"
            component={Test}
          />
          <Route
            exact
            path="/404"
            name="PageNotFound"
            component={PageNotFound}
          />
          <Redirect to="/404" />
        </Switch>

        <Footer />
      </>
    );
  }
}
export default connect()(App);
