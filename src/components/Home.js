import React, { useContext } from "react";
import app from "firebase.js";
import { AuthContext } from "Auth.js";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <h1>Home</h1>
      <br />
      <p>
        You are currently{" "}
        {!!currentUser ? (
          <span className="bg-green-700 text-white">Logged In</span>
        ) : (
          <span className="bg-red-700 text-white">Logged Out</span>
        )}
      </p>
      <br />
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
