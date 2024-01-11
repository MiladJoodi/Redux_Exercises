import React from "react";
import './App.css'
import { useState } from "react";

function App({counter, onIncrement, onDecrement, onRestart}) {


  return (
    <div class="flex flex-col items-center justify-center mt-44">
      <div className="flex">

        <button id="decrement-btn"
        onClick={onIncrement}
          className="py-2.5 px-2.5 mt-4 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
          </svg>
        </button>

        <span id="counter" class="flex items-center text-4xl font-bold mx-4">{counter}</span>

        <button id="increment-btn"
        onClick={onDecrement}
        className="py-2.5 px-2.5 mt-4 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12M6 12h12"></path>
          </svg>
        </button>

      </div>
      <button type="button" onClick={resetHandler} className="py-2.5 px-5 mt-4 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">ریست</button>

    </div>
  );
}

export default App;


