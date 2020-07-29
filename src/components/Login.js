import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "firebase.js";
import { AuthContext } from "Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1 className="my-12 text-center text-5xl">Login Page</h1>
      <div className="my-12 text-center text-xl">
        <form onSubmit={handleLogin}>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button className="bg-blue-500 px-2 py-1" type="submit">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};

export default withRouter(Login);
