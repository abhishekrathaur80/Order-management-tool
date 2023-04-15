import React, { useState } from "react";
import classes from "./LoginPage.module.css";
const LoginPage = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName === "james" && enteredPassword === "123456789") {
      //if username and email is valid than redirect to orderPage
      window.location.href = "/orders";
    } else {
      setError("Invalid username and password");
    }
    setEnteredName("");
    setEnteredPassword("");
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="username">Username :</label>
        <input
          id="username"
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
          required
        />

        <label htmlFor="password">Password :</label>
        <input
          id="password"
          type="password"
          value={enteredPassword}
          required
          onChange={passwordChangeHandler}
        />

        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
