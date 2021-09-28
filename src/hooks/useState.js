import { useForceRender } from "./forceRenderer";

let stateValues = [];
let orderIndex = -1;
export const useState = (initialValue) => {
  const forceRender = useForceRender();

  const rerender = () => {
    forceRender();
    orderIndex = -1;
  };

  orderIndex++;
  const currentIndex = Number(orderIndex);
  if (stateValues[currentIndex] === undefined) {
    stateValues[currentIndex] = initialValue;
  }

  const setValue = (newValue) => {
    stateValues[currentIndex] = newValue;
    rerender();
  };
  return [stateValues[currentIndex], setValue];
};
