import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("https://localhost:7135/api/login", {
        headers: {
          UserEmail: email,
          Password: password,
          user: "lila",
          pass: "12345",
        },
      });

      console.log("Login successful");
      console.log(response);
      nav("/cv");

      localStorage.setItem("userInfo", JSON.stringify(response.data));

      console.log(response.data);
    } catch (error) {
      // Handle login error (e.g., show error message)
      // console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="form">
        <h1 className="header">Login form</h1>
        <form onSubmit={formSubmitHandler} className="login-form">
          <input
            type="email"
            placeholder="Email"
            name="Email"
            value={email}
            onChange={emailChangeHandler}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={passwordChangeHandler}
          />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
