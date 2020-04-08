import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/navbar";
import Home from "./components/home";
import CompOne from "./components/compOne";
import CompTwo from "./components/compTwo";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/comp-one" component={CompOne} />
            <Route exact path="/comp-two" component={CompTwo} />
            <Route path="/comp-two/:id" component={CompTwo} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
