import React, { Component } from "react";

import WouldYouRatherGif from "../assets/images/would-you.gif";

class NewQuestionForm extends Component {
  state = {
    questionOne: "",
    questionTwo: "",
  };

  render() {
    return (
      <div className="question new-question">
        <div className="new-question-header">
          <p>New Question</p>
        </div>
        <div className="new-question-content">
          <img src={WouldYouRatherGif} alt="wouldYouRather" />
          <form onSubmit={() => console.log("hi")}>
            <input
              type="text"
              id="q1"
              name="q1"
              placeholder="first question"
              onChange={() => console.log("hi")}
            />

            <input
              type="text"
              id="q2"
              name="q2"
              placeholder="second question"
              onChange={() => console.log("hi")}
            />
            <input type="submit" value="Submit" id="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default NewQuestionForm;
