import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "Auth.js";
import PrivateRoute from "PrivateRoute.js";
import NavBar from "components/NavBar.js";
import Home from "components/Home.js";
import Login from "components/Login.js";
import SignUp from "components/SignUp.js";
import Private from "components/Private.js";

import { add } from "utils/firestore.js";

import "./styles/tailwind_output.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/private" component={Private} />
          <br />
          <div className="text-center">
            <button
              className="bg-red-600 text-xl rounded-lg px-6 py-3"
              onClick={add}
            >
              Add test doc to firestore
            </button>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
