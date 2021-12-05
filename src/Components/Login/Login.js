import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Context/useAuth";
import "./Login.css";

const Login = () => {
  const { user, signInUsingGoogle } = useAuth();
  const location = useLocation();
  const redirect_url = location.state?.from || "/shop";
  const history = useHistory();

  const handelGoolgeLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form onSubmit={handelSubmit}>
          <input type="email" name="" id="" placeholder="Enter your Email" />
          <br />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="enter your password"
          />
          <br />
          <br />
          <input type="submit" value="Login" className="btn-regular" />
        </form>
        <p>------------New to ema-jon?-------------</p>
        <Link to="/register">
          <button className="btn-regular">Register</button>
        </Link>
        <button className="btn-regular" onClick={handelGoolgeLogin}>
          Google Signin
        </button>
      </div>
    </div>
  );
};

export default Login;
