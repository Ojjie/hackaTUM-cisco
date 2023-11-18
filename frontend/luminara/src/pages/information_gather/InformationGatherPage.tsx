import { useEffect, useState } from "react";
import lulu from "../../assets/lulu.jpeg";
import {
  gatherLulu,
  openai,
  recieveMessage,
  sendMessage,
} from "../../services/OpenAIService";
import { useNavigate } from "react-router-dom";

function InformationGatherPage() {
  const [messageNr, setMessageNr] = useState(0);

  const navigate = useNavigate();

  const messages = [
    {
      message: `We are securely storing your data, and it is only visible for you!`,
      options: [
        "What is your yearly energy consumption in kilowatt-hours (kWh)?",
        "Can you tell me about your yearly heating consumption in kWh?",
      ],
    },
    {
      message: `We need some further information about your Household.`,
      options: [
        "How many people live in your household?",
        "What is the size of your home in square meters (if you're not sure, an estimate is fine)?",
      ],
    },
  ];

  const [inputValues, setInputValues] = useState(
    Array(messages[0].options.length).fill("")
  );

  function nextClick() {
    if (messageNr < messages.length - 1) {
      setMessageNr(messageNr + 1);
      // Clear input values for the next set of questions
      setInputValues(Array(messages[messageNr + 1].options.length).fill(""));
    } else {
      navigate("/dashboard");
    }
  }

  function handleInputChange(index: number, value: any) {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  }

  return (
    <div className="mx-32 my-16">
      <div className="flex gap-10 items-center justify-center">
        <div className="avatar">
          <div className="w-32 mask mask-hexagon">
            <img src={lulu} alt="Lulu Assistant" className="mx-auto" />
          </div>
        </div>
        <h2 className="text-3xl font-semibold">
          Let me ask you some questions to personalize your experience!
        </h2>
      </div>{" "}
      <div className="my-10">{messages[messageNr].message}</div>
      {messages[messageNr].options.map((message, index) => (
        <div className="mt-6" key={index}>
          <label className="label">
            <span className="label-text">{message}</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={inputValues[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </div>
      ))}
      <button className="mt-8 btn btn-primary" onClick={nextClick}>
        {messageNr === messages.length - 1 ? "Next" : "Next"}
      </button>
    </div>
  );
}

export default InformationGatherPage;
