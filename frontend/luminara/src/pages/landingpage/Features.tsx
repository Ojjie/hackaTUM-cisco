const Features = () => {
  const featureList = [
    {
      icon: "🌍",
      title: "Sustainable Energy Solutions",
      description:
        "Discover and implement sustainable energy solutions tailored to your needs.",
    },
    {
      icon: "💡",
      title: "Smart Energy Consumption",
      description:
        "Optimize your energy usage with smart devices and real-time monitoring.",
    },
    {
      icon: "🔒",
      title: "Security & Data Privacy",
      description:
        "Priority on the security and privacy of your data with advanced encryption measures.",
    },
    {
      icon: "💰",
      title: "Cost Savings Strategies",
      description:
        "Save money with personalized strategies to reduce energy bills and maximize efficiency.",
    },
    {
      icon: "🌿",
      title: "Accelerate Energy Transition",
      description:
        "Contribute to a sustainable future by actively participating in the global energy transition.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featureList.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
