// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import InformationGatherPage from "./pages/information_gather/InformationGatherPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
        <Route
          path="/gather"
          element={<InformationGatherPage></InformationGatherPage>}
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
