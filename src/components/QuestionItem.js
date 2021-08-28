import React, { Component } from "react";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class QuestionItem extends Component {
  render() {
    const { user } = this.props;
    const { id, optionOne, type } = this.props.question;
    console.log(this.props.user);
    return (
      <div className="question">
        <div className="question-header">
          <p>{user.name} Asks</p>
        </div>
        <div className="item-cont poll-cont">
          <div className="cont-image">
            <img alt="avatar" src={`/images/avatars/${user.avatarURL}.png`} />
          </div>
          <div className="cont-seperator" />
          <div className="cont-text">
            <p className="w-you">Would You Rather</p>
            <label>{optionOne.text}</label>

            <NavLink to={`/questions/${id}`}>
              <button className="voteB">
                {type === "unanswered" ? "View And Vote" : "View Answer"}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

// select users from state tree and question from component props

const mapStateToProps = ({ users }, { question }) => {
  const user = users[question.author];

  return {
    user,
  };
};

export default connect(mapStateToProps)(QuestionItem);
