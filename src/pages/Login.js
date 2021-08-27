import React, { Component } from "react";

import { withRouter } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="log">
        <div className="log-content">
          <span id="log-form">
            <p className="log-heading signin">Sign In</p>

            <p>Choose your username from below</p>
            <select name="users" id="users"></select>

            <button id="sign-in" onClick={() => console.log("hi")}>
              Sign In
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
