import React from "react";
import { Redirect, Route } from "react-router";

import { connect } from "redux";

const ProtectedRoute = ({ component: Component, exact, path }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        this.props.authedUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
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
    authedUser,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
