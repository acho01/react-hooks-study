import { useReducer } from "react";

export const useForceRender = () => {
  const [, dispatch] = useReducer((x) => x + 1, 0);
  return dispatch;
};