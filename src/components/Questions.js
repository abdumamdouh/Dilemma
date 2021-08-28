import React, { Component } from "react";
import QuestionItem from "./QuestionItem.js";

class Questions extends Component {
  render() {
    const { questions } = this.props;
    console.log(this.props.questions);

    return (
      <div className="ques-list">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))
        ) : (
          <p id="no-ques">No Questions Here</p>
        )}
      </div>
    );
  }
}

export default Questions;
