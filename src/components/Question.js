import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter, Redirect } from "react-router-dom";
import { handleQuestionAnswer } from "../actions/questions";

class Question extends Component {
  state = {
    option: "optionOne",
  };
  calcVotes = (votes, totalVotes) => {
    return Math.round((votes / totalVotes) * 100);
  };
  handChange = (event) => {
    const el = event.target;
    this.setState({ option: el.value });
  };
  handSubmit = (event) => {
    event.preventDefault();
    const { question, authedUser } = this.props;
    this.props.dispatch(
      handleQuestionAnswer({
        authedUser,
        qid: question.id,
        answer: this.state.option,
      })
    );
  };
  render() {
    if (this.props.not_found) {
      return <Redirect to="/not-found" />;
    }
    const { user, answered, authedUser, question } = this.props;
    const { optionOne, optionTwo } = question;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    return (
      <div className="question color-primary">
        <div className="question-header">
          <Link to={answered ? "/poll/answered" : "/poll/unanswered"}>
            <img src="/images/arrow-back.svg" alt="back" />
          </Link>
          <p>{answered ? "Asked by " + user.name : user.name + " Asks"}</p>
        </div>
        <div className={`item-cont${answered ? " answer-content" : ""}`}>
          <div className="cont-image">
            <img alt="avatar" src={`/images/avatars/${user.avatarURL}.png`} />
          </div>
          <div
            className={`cont-seperator${answered ? " answer-seperator" : ""}`}
          ></div>
          <div className="cont-text">
            <p className="w-you">{answered ? "Would You Rather" : "Results"}</p>
            {answered ? (
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
                    data-label={`${this.calcVotes(
                      optionOne.votes.length,
                      totalVotes
                    )}% Complete`}
                  >
                    <span
                      className="value"
                      style={{
                        width:
                          this.calcVotes(optionOne.votes.length, totalVotes) +
                          "%",
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
                    data-label={`${this.calcVotes(
                      optionTwo.votes.length,
                      totalVotes
                    )}% Complete`}
                  >
                    <span
                      className="value"
                      style={{
                        width:
                          this.calcVotes(optionTwo.votes.length, totalVotes) +
                          "%",
                      }}
                    ></span>
                  </div>
                  <label className="choice-per">{`${optionTwo.votes.length} Out Of ${totalVotes}`}</label>
                </div>
              </form>
            ) : (
              <form onSubmit={this.handSubmit}>
                <input
                  type="radio"
                  id="optionOne"
                  name="option"
                  value="optionOne"
                  onChange={this.handChange}
                  defaultChecked
                />
                <label htmlFor="optionOne">{optionOne.text}</label>
                <input
                  type="radio"
                  id="optionTwo"
                  name="option"
                  value="optionTwo"
                  onChange={this.handChange}
                />
                <label htmlFor="optionTwo">{optionTwo.text}</label>
                <input type="submit" value="Submit Vote" className="voteB" />
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { match }) {
  const id = match.params.questiondID;
  const question = questions[id];
  let answered = false;
  const not_found = true;
  if (question === undefined) {
    return {
      not_found,
    };
  } else {
    if (
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    ) {
      answered = true;
    }
  }
  const user = users[question.author];
  return {
    question,
    user,
    answered,
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(Question));
