import React, { useState } from "react";

import styles from "./Signup.module.css";

function Signup({ onLogin }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");

  const handleSignup = () => {
    // Email validation criteria
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation criteria
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;

    if (!name || !username || !password || !email || !profession) {
      // Handle empty fields
      alert("Please fill in all the fields.");
    } else if (!emailRegex.test(email)) {
      // Handle invalid email
      alert("Please enter a valid email address.");
    } else if (!passwordRegex.test(password)) {
      // Handle invalid password
      alert(
        "Password must be at least 6 characters long, contain one uppercase letter, one special character, and one number."
      );
    } else {
      // Call the onLogin function with the username after successful signup
      onLogin(username);
    }
  };

  return (
    <div className={`${styles.container} ${styles.signup}`}>
      <div className={styles.form}>
        <h2>Signup</h2>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Profession:
          <input
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;
