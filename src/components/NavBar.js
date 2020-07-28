import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "Auth.js";

const NavBar = () => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  return (
    <section className="bg-blue-800 py-6">
      <div className="container mx-auto flex text-white text-xl justify-start">
        <div className="mr-8">
          <button className="c" onClick={() => history.push("/")}>
            Home
          </button>
        </div>
        <div className="mr-8">
          <button className="c" onClick={() => history.push("/login")}>
            Log In
          </button>
        </div>
        <div className="mr-8">
          <button className="c" onClick={() => history.push("/signup")}>
            Sign Up
          </button>
        </div>
        <div className="mr-8">
          <button className="c" onClick={() => history.push("/private")}>
            Private
          </button>
        </div>
        <div className="mr-8 bg-gray-200 text-gray-800 text-base rounded-lg px-4 pt-1">
          <span>
            You are currently{" "}
            {!!currentUser ? (
              <span className="text-green-700">Logged In</span>
            ) : (
              <span className="text-red-700">Logged Out</span>
            )}
          </span>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
