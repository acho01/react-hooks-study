import { useState } from "react";
import { useRef } from "./hooks/useRef";

const RefComponent = () => {
  const [text, setText] = useState("");
  const numRef = useRef(0);

  return (
    <div>
      <div>
        <input
          value={text}
          onChange={(e) => {
            numRef.current++;
            setText(e.target.value);
          }}
        ></input>
        <h1>Type to test my UseRef and count component rerenders...</h1>
        <h1>{numRef.current}</h1>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default RefComponent;
