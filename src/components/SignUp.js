import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "firebase.js";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <>
      <h1 className="my-12 text-center text-5xl">SignUp Page</h1>
      <div className="my-12 text-center text-xl">
        <form onSubmit={handleSignUp}>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button className="bg-blue-500 px-2 py-1" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default withRouter(SignUp);
