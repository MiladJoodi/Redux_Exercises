import React from "react";
import './App.css'
import { useState } from "react";

import { Provider } from "react";
import store from "./store";

import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      Redux Toolkit
      <Counter />
    </div>
  );
}

export default App;


