import { useState } from "react";
import { useEffect } from "./hooks/useEffect";
const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  return <h1>custom useEffect is in progress ...</h1>;
  //   return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
