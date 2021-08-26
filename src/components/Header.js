import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="tab-navigation">
        <ul className="tab-menu">
          <li id="logo">
            <img alt="logo" src="/images/logo.png" />
          </li>

          <li id="tab-user">
            Hello, {true ? "Please Login" : ""}
            <img
              alt="avatar"
              src={true ? "/images/avatars/0.png" : `/images/avatars/$.png`}
            />{" "}
            {!true && "▾"}
            <div className={true ? "dropdown-hidden" : "dropdown-content"}>
              <p onClick={this.handleCLick}>Logout</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
