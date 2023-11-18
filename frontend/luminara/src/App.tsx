import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";

function App() {
  document.documentElement.setAttribute("data-theme", "dark");

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl my-10 font-bold">Luminara</h1>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
