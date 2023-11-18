import React from "react";

const SavingSection = () => {
    return (
        <section className="py-12">
            <div className="flex justify-center items-center ">
                <div className="text-center">
                    <div className="flex items-center">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title items-center justify-center">Your Savings</h2>
                                <p className="text-primary">$10,000</p>
                            </div>
                        </div>
                        <p className="text-xl text-gray-700 ml-4">
                            Congratulations! You've already saved a significant amount.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SavingSection;
