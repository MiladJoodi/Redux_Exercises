import React from "react";
import './App.css'
import { useState } from "react";

import store from "./store";

import Counter from "./Counter";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Redux Toolkit</h1>
      <Counter />
    </div>
    </Provider>
  );
}

export default App;


