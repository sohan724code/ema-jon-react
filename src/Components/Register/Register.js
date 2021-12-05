import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Context/useAuth";

const Register = () => {
  const { signInUsingGoogle } = useAuth();
  const handelForm = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login-form">
      <div>
        <h2>Register new account</h2>
        <form onSubmit={handelForm}>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" name="" id="name" />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name=""
            id="email"
            placeholder="enter your email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name=""
            id="password"
            placeholder="least 6-character"
          />
          <br />
          <input
            type="password"
            name=""
            id="password"
            placeholder="re-enter password"
          />
          <br />
          <input type="submit" value="Register" className="btn-regular" />
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <div>-----------or------------</div>
        <button className="btn-regular" onClick={signInUsingGoogle}>
          Google Login
        </button>
      </div>
    </div>
  );
};

export default Register;
