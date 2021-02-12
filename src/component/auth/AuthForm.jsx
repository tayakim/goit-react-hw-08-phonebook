import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpOperation } from "../redux/auth/authOperation";
import { signInOperation } from "../redux/auth/authOperation";
import styles from "./authForm.module.css";

const initialState = {
  email: "",
  password: "",
};
const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [state, setState] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === "/signup") {
      dispatch(signUpOperation(state));
    } else dispatch(signInOperation(state));
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <h3>
        {location.pathname === "/signup"
          ? "Create your account"
          : "Welcome to your account!"}
      </h3>
      <label>
        Email:<span> </span>
        <input
          type="text"
          value={state.email}
          name="email"
          onChange={onHandleChange}
          className={styles.input}
        />
      </label>
      <br></br>
      <label className={styles.label}>
        Password:<span> </span>
        <input
          type="text"
          value={state.password}
          name="password"
          onChange={onHandleChange}
          className={styles.input}
        />
      </label>
      <br></br>
      <button type="submit" className={styles.button}>
        {location.pathname === "/signup" ? "SignUp" : "SignIn"}
      </button>
    </form>
  );
};

export default AuthForm;
