import React, { Component } from "react";
import Question from "./Question.js";

class Questions extends Component {
  render() {
    const { questions } = this.props;
    return (
      <div className="ques-list">
        {questions.length > 0 ? (
          questions.map((question) => (
            <Question key={question.id} question={question} />
          ))
        ) : (
          <p id="no-ques">No Questions Here</p>
        )}
      </div>
    );
  }
}

export default Questions;
