import { Children } from "react";
import { createContext } from "react";

const MiContexto = createContext();
const Provider = MiContexto.Provider;

const MiProvider = ({ children }) => {
  const data = {};

  return <Provider value={data}>{Children}</Provider>;
};
