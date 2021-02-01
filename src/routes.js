import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Switch>
        <Route
          exact
          path="/"
          component={lazy(() => import("./Features/Screens/Dashboard"))}
        />
        <Route
          exact
          path="/friendpage/:id"
          component={lazy(() => import("./Features/Screens/FriendPage"))}
        />
      </Switch>
    </Suspense>
  );
}

export default Routes;
