import React from "react";
import { Redirect, Route } from "react-router";

import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, exact, path, logout }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        // this.props.authedUser
        !logout ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    logout: authedUser === null,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
