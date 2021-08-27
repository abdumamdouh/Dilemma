import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

import { removeAuthedUser } from "../actions/authenticatedUser";

class Header extends Component {
  handleLogOut = () => {
    this.props.dispatch(removeAuthedUser());
  };

  render() {
    const { logout, users, authedUser } = this.props;
    return (
      <div className="tab-navig">
        <ul className="tab-menu">
          <li id="logo">
            <img alt="logo" src="/images/logo.png" />
          </li>
          <NavLink to="/poll/unanswered">
            <img alt="tab-img" src="/images/tabs/home.png" />
            Home
          </NavLink>
          <NavLink to="/add">
            <img alt="tab-img" src="/images/tabs/question.png" />
            New Question
          </NavLink>
          <NavLink to="/leaderboard">
            <img alt="tab-img" src="/images/tabs/leaderboard.png" />
            Leaderboard
          </NavLink>
          <li id="tab-user">
            Hello, {logout ? "Please Login" : users[authedUser].name}{" "}
            <img
              alt="avatar-img"
              src={
                logout
                  ? `./images/avatars/0.png`
                  : `./images/avatars/${users[authedUser].avatarURL}.png`
              }
            />
            <button
              className="logout-button"
              onClick={this.handleLogOut}
              style={{
                padding: "8px",
                marginLeft: "10px",
                background: "#E6E1E6",
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    logout: authedUser === null,
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(Header);
