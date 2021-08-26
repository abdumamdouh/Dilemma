import React, { Component } from "react";
import LoadingBar from "react-redux-loading-bar";

import { handleInitialData } from "./actions/shared";

import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <>
        <LoadingBar />
        <h1>Hello World</h1>
      </>
    );
  }
}
export default connect()(App);
