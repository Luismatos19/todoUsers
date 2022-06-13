import React from "react";
import { Route, Switch } from "wouter";
import Header from "./Components/Header";

import GlobalStyle from "./GlobalStyle";
import Home from "./Pages/Home";
import Task from "./Pages/Task";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/user/:id" component={Task} />
      </Switch>
    </>
  );
}

export default App;
