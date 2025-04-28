import { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, setState] = useState("");
  const UpdateState = (newValue) => {
    setState(newValue);
  };

  return (
    <StateContext.Provider value={{ state, UpdateState }}>
      {children}
    </StateContext.Provider>
  );
};
