import React from "react";
import { Link } from "react-router-dom";

const DataGatheringSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Let's Go!</h2>
        <Link
          to="/gather"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Start
        </Link>
      </div>
    </section>
  );
};

export default DataGatheringSection;
