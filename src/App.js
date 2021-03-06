import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" exact={true} component={About} />
      </HashRouter>
      <footer></footer>
    </>
  );
}

export default App;
