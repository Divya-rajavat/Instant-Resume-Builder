// App.js
import React, { useState } from "react";
import Header from "../src/components/header/Header";
import Body from "../src/components/body/Body";
import Login from "./components/Login/Signup/Login";
import Signup from "./components/Login/Signup/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);


  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle successful signup
  const handleSignup = () => {
    // You may perform additional actions after signup if needed
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
    {isLoggedIn ? (
      // Render main content if logged in
      <div>
        <Header onLogout={handleLogout} />
        <Body />
      </div>
    ) : showSignup ? (
      // Render signup page
      <Signup onSignup={handleSignup} />
    ) : (
      // Render login page
      <Login onLogin={handleLogin} onShowSignup={() => setShowSignup(true)} />
    )}
  </div>
  );
}

export default App;
