import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import fb from "./firebase.js";
import { AuthProvider } from "./Auth.js";
import "./styles/tailwind_output.css";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {/* <button onClick={() => fb.auth().signOut()}>Sign out</button> */}
    </>
  );
};
const Login = () => {
  return <></>;
};
const SignUp = () => {
  return <></>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
