import React from "react";
import './App.css'
import { useState } from "react";

import { Provider } from "react";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      Redux Toolkit
    </div>
    </Provider>
  );
}

export default App;


