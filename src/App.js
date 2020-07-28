import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "Auth.js";
import PrivateRoute from "PrivateRoute.js";
import NavBar from "components/NavBar.js";
import Home from "components/Home.js";
import Login from "components/Login.js";
import SignUp from "components/SignUp.js";
import Private from "components/Private.js";

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
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
