import React, { Component } from "react";

import WouldYouRatherGif from "../assets/images/would-you.gif";

import { connect } from "react-redux";
import { handleQuestionAssignment } from "../actions/questions";

import { withRouter } from "react-router-dom";

class NewQuestionForm extends Component {
  state = {
    q1: "",
    q2: "",
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { q1, q2 } = this.state;
    const { authedUser } = this.props;
    this.props.dispatch(
      handleQuestionAssignment({
        optionOneText: q1,
        optionTwoText: q2,
        author: authedUser,
      })
    );

    this.props.history.push("/poll/unanswered");
  };

  render() {
    return (
      <div className="question new-ques">
        <div className="new-ques-hea">
          <p>New Question</p>
        </div>
        <div className="new-ques-cont">
          <img src={WouldYouRatherGif} alt="wouldYouRather" />
          <form onSubmit={this.handleOnSubmit}>
            <input
              type="text"
              id="q1"
              name="q1"
              value={this.state.q1}
              placeholder="first question"
              onChange={this.handleOnChange}
            />

            <input
              type="text"
              id="q2"
              name="q2"
              value={this.state.q2}
              placeholder="second question"
              onChange={this.handleOnChange}
            />
            <input type="submit" value="Submit" id="submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(withRouter(NewQuestionForm));
