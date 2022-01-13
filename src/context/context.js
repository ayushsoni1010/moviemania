import React, { useState } from "react";
// import React, { useState, createContext } from "react";

export const Context = React.createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState(undefined);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default UserProvider;

// This is how we set up a global context and a state that we want our application to be able to access globally.