import React, { Component } from "react";

import { Switch, Route, NavLink } from "react-router-dom";

import Test from "../components/Test";

class Dashboard extends Component {
  render() {
    return (
      <>
        {true !== null ? (
          <div className="poll">
            {/*  */}
            <div className="poll-nav">
              <NavLink to="unanswered">
                <img
                  alt="tab"
                  src="/images/tabs/unanswered.png"
                  height="23px"
                />
                <p>Unanswered Questions</p>
              </NavLink>
              <NavLink to="answered">
                <img alt="tab" src="/images/tabs/answered.png" height="23px" />
                <p>Answered Questions</p>
              </NavLink>
            </div>
            {/*  */}
            <Switch>
              <Route path="/poll/answered">
                <Test questions={this.props.answeredQuestions} />
              </Route>
              <Route path="/poll/unanswered">
                <Test questions={this.props.unAnsweredQuestions} />
              </Route>
            </Switch>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </>
    );
  }
}

// <Test questions={this.props.answeredQuestions} />

export default Dashboard;
