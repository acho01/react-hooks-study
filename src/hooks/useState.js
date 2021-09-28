import { useForceRender } from "./forceRenderer";

let stateValues = [];
let orderIndex = 0;
export const useState = (initialValue) => {
  const forceRender = useForceRender();

  const rerender = () => {
    forceRender();
    orderIndex = 0;
  };

  const currentIndex = Number(orderIndex);
  if (stateValues[currentIndex] === undefined) {
    stateValues[currentIndex] = initialValue;
  }

  const setValue = (newValue) => {
    stateValues[currentIndex] = newValue;
    rerender();
  };
  orderIndex++;
  return [stateValues[currentIndex], setValue];
};
