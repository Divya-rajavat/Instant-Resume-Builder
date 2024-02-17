import React, { useState } from "react";
import styles from './Login.module.css';

function Login({ onLogin, onShowSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const handleLogin = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;

    if (!username || !password) {
      // Handle empty fields
      alert("Please enter both username and password.");
    } else if (!passwordRegex.test(password)) {
      // Handle invalid password
      alert(
        "Password must be at least 6 characters long, contain one uppercase letter, one special character, and one number."
      );
    } else {
      // Call the onLogin function passed from App.js
      onLogin();
    }
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    if (username && newPassword) {
      // For simplicity, just print a message in the console
      alert("Forgot Password logic goes here");
      console.log("Forgot Password logic goes here");
      console.log("New password updated");
      setForgotPassword(false); // Switch back to the login form after resetting the password
    } 
    else {
      // Handle invalid input
      alert("Please enter both username and new password.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.form}>
          <h2>{forgotPassword ? "Forgot Password" : "Login"}</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {!forgotPassword && (
            <>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          )}

          {forgotPassword && (
            <>
              <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </>
          )}

          <button className={styles.lbutton} onClick={forgotPassword ? handleForgotPassword : handleLogin}>
            {forgotPassword ? "Submit" : "Login"}
          </button>

          {!forgotPassword && (
            <>
              <p>
                <span onClick={() => setForgotPassword(true)} className={styles.link}>
                  Forgot Password?
                </span>
              </p>
              <p>
                Don't have an account?{" "}
                <span onClick={onShowSignup} className={styles.link}>
                  Signup
                </span>
              </p>
            </>
          )}

          {forgotPassword && (
            <p>
              <span onClick={() => setForgotPassword(false)} className={styles.link}>
                Go back to Login
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
