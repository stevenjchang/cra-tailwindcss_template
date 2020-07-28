import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import app from "firebase.js";
import { AuthContext } from "Auth.js";

const NavBar = () => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  return (
    <section className="bg-blue-800 py-6">
      <div className="container mx-auto flex text-white text-xl justify-start">
        <div className="mr-8">
          <button className="" onClick={() => history.push("/")}>
            Home
          </button>
        </div>
        <div className="mr-8">
          <button className="" onClick={() => history.push("/private")}>
            Private
          </button>
        </div>
        <div className="mr-8">
          <button className="" onClick={() => history.push("/login")}>
            Log In
          </button>
        </div>
        <div className="mr-8">
          <button className="" onClick={() => history.push("/signup")}>
            Sign Up
          </button>
        </div>
        <div className="mr-8">
          <button className="" onClick={() => app.auth().signOut()}>
            Sign Out
          </button>
        </div>

        <div>
          {!!currentUser ? (
            <p className="bg-green-700 px-8 px-4 text-lg rounded-lg">
              Logged In
            </p>
          ) : (
            <p className="bg-red-700 px-8 px-4 text-lg rounded-lg">
              Logged Out
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NavBar;
