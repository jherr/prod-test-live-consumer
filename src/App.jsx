import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import DogWidget from "host/DogWidget";

const App = () => (
  <div>
    <h2>Consumer!!!</h2>
    <DogWidget />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
