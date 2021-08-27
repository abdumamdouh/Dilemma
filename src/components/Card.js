//const { name, answers, questions, score, avatarURL } = props.player;

import React, { Component } from "react";
class Card extends Component {
  render() {
    const { name, avatarURL, answers, questions } = this.props.user;
    const NumberOfQuestions = questions.length;
    const NumberOfAnswers = Object.keys(answers).length;
    return (
      <div className="card">
        <div className="ribbon">
          <img alt="trophy" />
        </div>
        <div className="card-cont">
          <div className="card-image">
            <img alt="avatar" src={`./images/avatars/${avatarURL}.png`} />
          </div>
          <div className="cont-text">
            <p className="c-name">{name}</p>
            <div className="c-stats">
              <p>Number Of Questions:</p>
              <p>{NumberOfQuestions}</p>
            </div>
            <div className="c-stats">
              <p>Number Of Answers:</p>
              <p>{NumberOfAnswers}</p>
            </div>
          </div>
          <div className="totalPoints">
            <div className="totalPoints-header">Score</div>
            <div className="scoreCir">
              {NumberOfQuestions + NumberOfAnswers}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
