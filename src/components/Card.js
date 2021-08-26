//const { name, answers, questions, score, avatarURL } = props.player;

import React, { Component } from "react";
class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="ribbon">
          <img alt="trophy" />
        </div>
        <div className="card-content">
          <div className="card-image">
            <img alt="avatar" src="../assets/images/avatars/1.png" />
          </div>
          <div className="content-text">
            <p className="card-name">name</p>
            <div className="card-stats">
              <p>Number Of Questions:</p>
              <p>length</p>
            </div>
            <div className="card-stats">
              <p>Number Of Answers:</p>
              <p>length</p>
            </div>
          </div>
          <div className="totalPoints">
            <div className="totalPoints-header">Score</div>
            <div className="scoreCir">score</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
