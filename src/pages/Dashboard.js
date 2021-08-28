import React, { Component } from "react";

import { Switch, Route, NavLink } from "react-router-dom";

import Questions from "../components/Questions";

import { connect } from "react-redux";

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
                <Questions questions={this.props.answeredQuestions} />
              </Route>
              <Route path="/poll/unanswered">
                <Questions questions={this.props.unAnsweredQuestions} />
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

const mapStateToProps = ({ authedUser, users, questions }) => {
  //extract all user [authedUser] answered questions ids from users database
  const answeredQuestionsIds = Object.keys(users[authedUser].answers);

  //extract all questions objects from questions database into array
  const questionsArr = Object.values(questions);

  //split questions into two categories: answered and unanswered for the authedUser

  const answeredQuestions = questionsArr
    .filter((question) => answeredQuestionsIds.includes(question.id))
    .map((question) => Object.assign({}, question, { type: "answered" }))
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    });

  const unAnsweredQuestions = questionsArr
    .filter((question) => !answeredQuestionsIds.includes(question.id))
    .map((question) => Object.assign({}, question, { type: "answered" }))
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    });

  return {
    answeredQuestions,
    unAnsweredQuestions,
  };
};

// <Test questions={this.props.answeredQuestions} />

export default connect(mapStateToProps)(Dashboard);
