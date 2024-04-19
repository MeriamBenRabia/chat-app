import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
    const [username, setUsername] = useState("");
    const [secret, setSecret] = useState("");
    const [userType, setUserType] = useState("");
    
    const value = {
        username,
        setUsername,
        secret,
        setSecret,
        userType,
        setUserType,
    };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};


