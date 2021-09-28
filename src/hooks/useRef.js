let value = {current: undefined};

export const useRef = (initialValue) => {
  if (value.current === undefined) {
    value.current = initialValue;
  }

  return (value);
};
