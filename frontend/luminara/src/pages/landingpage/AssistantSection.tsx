import React from "react";
import lulu from "../../assets/lulu.jpeg";

const AssistantSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <div className="flex gap-10 items-center justify-center">
          <div className="avatar">
            <div className="w-44 mask mask-hexagon">
              <img src={lulu} alt="Lulu Assistant" className="mx-auto" />
            </div>
          </div>
          <h2 className="text-3xl font-semibold">
            This is Lulu, Your Sustainable Energy Assistant
          </h2>
        </div>
        <p className="text-gray-600">
          Welcome to Luminara, where your journey to sustainable energy
          excellence is made simple with the help of our friendly assistant,
          Lulu. Lulu is here to guide you every step of the way, offering
          personalized insights, tips, and encouragement to make your transition
          to sustainable energy usage smooth and rewarding.
        </p>

        <p className="mt-6 text-gray-600">
          Lulu is designed to understand your unique needs and preferences,
          providing tailored recommendations to optimize your energy usage.
          Whether you're just starting your journey or looking to fine-tune your
          sustainable practices, Lulu is here to support you. Together, let's
          save money, contribute to a greener planet, and accelerate the energy
          transition.
        </p>
      </div>
    </section>
  );
};

export default AssistantSection;
