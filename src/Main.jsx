import React from "react";
import Count from "./Count";
import Search from "./Search";
import Keep from "./Keep";
import Pokemon from "./Pokemon";
import ErrorPage from "./ErrorPage";
import App from "./App";

import { Route, Switch } from "react-router-dom";


const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/count" component={Count} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/keep" component={Keep} />
        <Route exact path="/pokemon/:number" component={Pokemon} />
        <Route component={ErrorPage} />
      </Switch>
    </>
    )
};

export default Main;