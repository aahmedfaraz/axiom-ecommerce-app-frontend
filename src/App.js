import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <SignUp />
      <Login />
    </div>
  );
};

export default App;
