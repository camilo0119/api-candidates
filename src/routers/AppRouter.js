import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen } from "../views/HomeScreen";

export const AppRouter = () => {
  return (
    <Router>
        <Switch>
            <Route path='/' component={HomeScreen}/>
        </Switch>
    </Router>
  );
};
