import React from "react";
import { useState } from "react";
import { createContext } from "react";

const initialState = {
  name: "",
  lastname: "",
  email: "",
  logUser: () => null,
  logOut: () => null,
};

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    name: "",
    lastname: "",
    email: "",
    isAuthenticated: false,
  });

  const logUser = (user) => {
    setAuth({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      isAuthenticated: true,
    });
  };

  const logOut = () => {
    setAuth({
      name: "",
      lastname: "",
      email: "",
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        name: auth.name,
        lastname: auth.lastname,
        email: auth.email,
        isAuthenticated: auth.isAuthenticated,
        logUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;