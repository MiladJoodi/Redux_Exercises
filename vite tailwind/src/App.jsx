import React from "react";
import './App.css'
import NavBar from "./components/NavBar";
import UserNav from "./components/UserNav";
import Address from "./components/Address";
import Slider from "./components/Slider";
import { MiddleMenu } from "./components/MiddleMenu";
import { AmazingItems } from "./components/AmazingItems";
// https://github.com/CodeFarsi/digi-clone


function App() {
  return (
    <div className="bg-gray-300 w-screen flex flex-col overflow-y-auto" dir="rtl">
      {/* start header */}
      <div className="w-full h-44 bg-white flex flex-col p-4 divide-y-2 divide-gray-100">
        <NavBar />
        <UserNav />
        <Address />
      </div>
      <Slider />
      <MiddleMenu />
      <AmazingItems />

    </div>
  );
}

export default App;


