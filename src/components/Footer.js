import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Dilemma,</p>
        <p>Made by Abdulrahman Mamdouh.</p>
        <a
          href="https://github.com/abdumamdouh"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/images/github.png" alt="github"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/abdumamdouh/"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/images/linkedin.png" alt="linkedin"></img>
        </a>
      </div>
    );
  }
}

export default Footer;
