import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";

import { Route, Redirect, Switch } from "react-router";
import ProtectedRoute from "./ProtectedRoute";

import PageNotFound from "./pages/PageNotFound404";
import Login from "./pages/Login";
import NewQuestionForm from "./pages/NewQuestionForm";
import Leaderboard from "./pages/Leaderboard";
import Dashboard from "./pages/Dashboard";
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

        <Switch>
          <Route exact name="login" path="/" component={Login} />
          <Route
            exact
            path="/poll"
            render={(props) => <Redirect to="poll/unanswered" />}
          />
          <Route path="/questions/:questiondID">
            <Test />
          </Route>
          <ProtectedRoute
            exact
            name="Dashboard"
            path="/poll/unanswered"
            component={Dashboard}
          />
          <ProtectedRoute
            exact
            name="Dashboard"
            path="/poll/answered"
            component={Dashboard}
          />
          <ProtectedRoute
            exact
            name="newQuestion"
            path="/add"
            component={NewQuestionForm}
          />
          <ProtectedRoute
            exact
            name="Leaderboard"
            path="/leaderboard"
            component={Leaderboard}
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
