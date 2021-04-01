import "./App.css";
import React from "react";
import axios from "axios";
import bootstrap from "react-bootstrap";
import Navy from "./Components/NavBar/NavBar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Meme from "./Components/Meme/Meme.jsx";
import Crypto from "./Components/Crypto/Crypto.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navy />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/meme" component={Meme} />
          <Route exact path="/crypto" component={Crypto} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
