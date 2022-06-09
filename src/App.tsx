import React from "react";
import { Route, Switch } from "wouter";

import GlobalStyle from "./GlobalStyle";
import Home from "./Pages/Home";
import Task from "./Pages/Task";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/user/:id" component={Task} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
