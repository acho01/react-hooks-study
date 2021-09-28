import { useState } from "./hooks/useState";

const StateComponent = () => {
  const [isGreen, setIsGreen] = useState(true);
  const [isBlue, setIsBlue] = useState(true);

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        Click me to Test my useState
      </h1>
      <h1
        onClick={() => setIsBlue(!isBlue)}
        style={{ color: isBlue ? "blue" : "magenta" }}
      >
        Click me to Test my useState
      </h1>
    </div>
  );
};

export default StateComponent;
