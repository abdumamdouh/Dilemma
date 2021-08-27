import React from "react";
import { Redirect, Route } from "react-router";

import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, exact, path }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        // this.props.authedUser
        true ? (
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

export default connect()(ProtectedRoute);
