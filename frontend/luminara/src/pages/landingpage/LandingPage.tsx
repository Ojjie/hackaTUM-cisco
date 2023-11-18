import { useEffect, useState } from "react";
import Features from "./Features";
import ProcessTimeline from "./ProcessTimeline";
import AssistantSection from "./AssistantSection";
import DataGatheringSection from "./DataGatheringSection";
// import { useNavigate } from "react-router-dom";

function LandingPage() {
  // let navigate = useNavigate();

  return (
    <div>
      <header className="bg-blue-500 p-4 text-center">
        <h1 className="text-3xl font-semibold">Luminara</h1>
        <p className="mt-2">
          Lightening the Path to Sustainable Energy Excellence
        </p>
      </header>
      <AssistantSection></AssistantSection>
      <DataGatheringSection></DataGatheringSection>
      <ProcessTimeline></ProcessTimeline>
      <Features></Features>
    </div>
  );
}

export default LandingPage;
