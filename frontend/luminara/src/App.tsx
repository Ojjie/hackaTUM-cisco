import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import InformationGatherPage from "./pages/information_gather/InformationGatherPage";
import LandingPage from "./pages/landingpage/LandingPage";
import AppRouter from "./Router";

function App() {
  document.documentElement.setAttribute("data-theme", "light");
  return <AppRouter></AppRouter>;
}

export default App;
