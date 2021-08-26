import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
        <Header />
        <h1>Hello World</h1>
        <Footer />
      </>
    );
  }
}
export default connect()(App);
