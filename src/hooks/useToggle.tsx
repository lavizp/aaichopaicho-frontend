import { useState } from "react";

type States = {
  [key: string]: boolean;
};

type ToggleFn<T extends keyof States> = (key: T) => void;

type UseToggleHook = <T extends States>(
  initialState: T
) => [
  T,
  ToggleFn<Extract<keyof T, string>>,
  ToggleFn<Extract<keyof T, string>>,
  ToggleFn<Extract<keyof T, string>>
];

// Custom hook for managing open and close states
const useToggle: UseToggleHook = (initialState) => {
  const [states, setStates] = useState(initialState);

  const open: ToggleFn<Extract<keyof typeof initialState, string>> = (key) => {
    setStates((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  const close: ToggleFn<Extract<keyof typeof initialState, string>> = (key) => {
    setStates((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  const toggle: ToggleFn<Extract<keyof typeof initialState, string>> = (
    key
  ) => {
    setStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return [states, open, close, toggle];
};
export default useToggle;
