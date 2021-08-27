import React, { Component } from "react";

import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
  state = {
    option: "optionOne",
  };
  calculateVotes = (votes, totalVotes) => {
    return Math.round((votes / totalVotes) * 100);
  };
  handleChange = (e) => {};
  handleSubmit = (e) => {};
  render() {
    return (
      <div className="question color-primary">
        <div className="question-header">
          <Link to={true ? "/poll/answered" : "/poll/unanswered"}>
            <img src="/images/arrow-back.svg" alt="back" />
          </Link>
          <p>{true ? "Asked by " + user.name : user.name + " Asks"}</p>
        </div>
        <div className={`item-content${true ? " answer-content" : ""}`}>
          <div className="cont-image">
            <img alt="avatar" src={`/images/avatars/${user.avatarURL}.png`} />
          </div>
          <div
            className={`cont-seperator${true ? " answer-seperator" : ""}`}
          ></div>
          <div className="cont-text">
            <p className="w-you">{true ? "Would You Rather" : "Results"}</p>
            {true ? (
              <form>
                <div
                  className={`answer-section${
                    question.optionOne.votes.includes(authedUser)
                      ? " chosen-answer"
                      : ""
                  }`}
                >
                  <label>{optionOne.text}</label>
                  <div
                    className="prog"
                    data-label={`${this.calculateVotes(
                      optionOne.votes.length,
                      totalVotes
                    )}% Complete`}
                  >
                    <span
                      className="value"
                      style={{
                        width:
                          this.calculateVotes(
                            optionOne.votes.length,
                            totalVotes
                          ) + "%",
                      }}
                    ></span>
                  </div>
                  <label className="choice-per">{`${optionOne.votes.length} Out Of ${totalVotes}`}</label>
                </div>
                <div
                  className={`answer-section${
                    question.optionTwo.votes.includes(authedUser)
                      ? " chosen-answer"
                      : ""
                  }`}
                >
                  <label>{optionTwo.text}</label>
                  <div
                    className="prog"
                    data-label={`${this.calculateVotes(
                      optionTwo.votes.length,
                      totalVotes
                    )}% Complete`}
                  >
                    <span
                      className="value"
                      style={{
                        width:
                          this.calculateVotes(
                            optionTwo.votes.length,
                            totalVotes
                          ) + "%",
                      }}
                    ></span>
                  </div>
                  <label className="choice-per">{`${optionTwo.votes.length} Out Of ${totalVotes}`}</label>
                </div>
              </form>
            ) : (
              <form onSubmit={this.handleSubmit}>
                <input
                  type="radio"
                  id="optionOne"
                  name="option"
                  value="optionOne"
                  onChange={this.handleChange}
                  defaultChecked
                />
                <label htmlFor="optionOne">{optionOne.text}</label>
                <input
                  type="radio"
                  id="optionTwo"
                  name="option"
                  value="optionTwo"
                  onChange={this.handleChange}
                />
                <label htmlFor="optionTwo">{optionTwo.text}</label>
                <input type="submit" value="Submit Vote" className="voteBtn" />
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(Question));
