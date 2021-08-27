import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { logout, users, authedUser } = this.props;
    return (
      <div className="tab-navig">
        <ul className="tab-menu">
          <li id="logo">
            <img alt="logo" src="/images/logo.png" />
          </li>
          <NavLink to="/poll/unanswerd">
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
            <button onClick={() => console.log("hi")}>Logout</button>
          </li>
        </ul>
      </div>
    );
  }
}
//src={`../assets/images/avatars/${users[authedUser].avatarURL}`}
const mapStateToProps = ({ authedUser, users }) => {
  return {
    logout: authedUser === null,
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(Header);
