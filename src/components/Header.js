import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
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
            Hello, {true ? "Please Login" : ""}
            <img alt="avatar-img" />{" "}
            <button onClick={() => console.log("hi")}>Logout</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
