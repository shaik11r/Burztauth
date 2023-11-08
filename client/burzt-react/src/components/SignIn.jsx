import React from "react";
import { useContext, useState } from "react";
import { studentsContext } from "../providers/StudentsContextProvider";
const SignIn = () => {
  const { signIn } = useContext(studentsContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <p>signIn</p>
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          signIn(username, password);
        }}>
        Sign In
      </button>
    </>
  );
};

export default SignIn;
