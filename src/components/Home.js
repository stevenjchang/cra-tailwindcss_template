import React, { useContext } from "react";
import app from "firebase.js";
import { AuthContext } from "Auth.js";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <h1>Home</h1>
      <br />
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
