import React, { Component } from "react";

import { connect } from "react-redux";

import { setAuthedUser } from "../actions/authenticatedUser";

class Login extends Component {
  state = {
    userID: "",
  };

  handleSignIn = () => {
    // console.log(this.state);
    const { userID } = this.state;
    this.props.dispatch(setAuthedUser(userID));
  };
  render() {
    const { users } = this.props;
    return (
      <div className="log">
        <div className="log-content">
          <span id="log-form">
            <p className="log-heading signin">Sign In</p>
            <p>Choose your username from below</p>
            <select
              name="users"
              id="users"
              value={this.state.value}
              onChange={(e) => this.setState({ userID: e.target.value })}
            >
              {users.map((user) => (
                <option value={user.id}>{user.name}</option>
              ))}
            </select>
            <button id="sign-in" onClick={this.handleSignIn}>
              Sign In
            </button>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users),
  };
};

export default connect(mapStateToProps)(Login);
