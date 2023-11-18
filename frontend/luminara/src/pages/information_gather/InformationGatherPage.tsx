import { useEffect, useState } from "react";
import lulu from "../../assets/lulu.jpeg";
// import { useNavigate } from "react-router-dom";

function InformationGatherPage() {
  // let navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <div className="mx-32 my-16">
      <div className="flex gap-10 items-center justify-center">
        <div className="avatar">
          <div className="w-32 mask mask-hexagon">
            <img src={lulu} alt="Lulu Assistant" className="mx-auto" />
          </div>
        </div>
        <h2 className="text-3xl font-semibold">
          Let me ask you some question to personalize your Experience!
        </h2>
      </div>{" "}
      <div>Tell me something about...</div>
      <input className="input"></input>
      <button>Next</button>
    </div>
  );
}

export default InformationGatherPage;
