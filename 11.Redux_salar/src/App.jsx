import React from "react";
import './App.css'
import { useState } from "react";
import Box1 from "./components/Box1";
import DownBox1 from "./components/downBox/DownBox1";
import DownBox3 from "./components/downBox/DownBox3";

function App() {


  return (
    <div>
      <h1>home</h1>

      <Box1 />
      <br />
      <hr />
      <h1>Down</h1>
      <DownBox3 />

    </div>
  );
}

export default App;


