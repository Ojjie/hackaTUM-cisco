import React from "react";

const ProcessTimeline = () => {
  const steps = [
    "Register using your personal ID from the energy provider",
    "Input personal data and energy consumption details",
    "Observe and understand your current energy usage",
    "View forecasting evaluation and identify improvement potential",
    "Actively engage with guided energy usage",
    "Earn rewards for sustainable energy practices",
  ];

  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Process Timeline</h2>
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              {index !== 0 && (
                <div className="mx-4 text-gray-500">&#x2192;</div>
              )}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-4xl mb-2">{index + 1}</div>
                <p>{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
