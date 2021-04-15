import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
function routes() {
  return (
    <div>
      <Route exact path="/" component={App}></Route>
    </div>
  );
}

export default routes;
