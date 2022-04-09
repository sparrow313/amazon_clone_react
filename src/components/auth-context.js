import { createContext, useReducer } from "react";

const initialState = {
  basket: [],
};

export const authContext = createContext(initialState);

export const authContextProvider = ({ children }) => {};
