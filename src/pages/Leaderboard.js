import React, { Component } from "react";
import Card from "../components/Card";

import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    console.log(this.props.sortedUsers);
    return (
      <div className="leaderbo">
        <Card />
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const usersArr = Object.values(users);

  const sortedUsers = usersArr.sort((a, b) => {
    const aa = Object.keys(a.answers);
    const bb = Object.keys(b.answers);

    return bb.length + b.questions.length - (aa.length + a.questions.length);
  });

  return {
    sortedUsers,
  };
};

export default connect(mapStateToProps)(Leaderboard);
