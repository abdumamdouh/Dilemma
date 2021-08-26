//const { name, answers, questions, score, avatarURL } = props.player;

import React, { Component } from "react";
class Card extends Component {
  render() {
    return (
      <div className="player">
        <div className="ribbon">
          <img alt="trophy" />
        </div>
        <div className="player-content">
          <div className="player-image">
            <img alt="avatar" src="../assets/images/avatars/1.png" />
          </div>
          <div className="content-text">
            <p className="player-name">name</p>
            <div className="player-stats">
              <p>Number Of Questions:</p>
              <p>length</p>
            </div>
            <div className="player-stats">
              <p>Number Of Answers:</p>
              <p>length</p>
            </div>
          </div>
          <div className="total-score">
            <div className="total-score-header">Score</div>
            <div className="score-circle">score</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
