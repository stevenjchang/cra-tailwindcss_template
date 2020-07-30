import React, { useEffect, useState } from "react";
import app from "firebase.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [firebaseKeyMissingMsg, setFirebaseKeyMissingMsg] = useState(false);

  useEffect(() => {
    if (process.env.REACT_APP_FIREBASE_KEY) {
      app.auth().onAuthStateChanged((user) => {
        setCurrentUser(user);
        setPending(false);
      });
    } else {
      setFirebaseKeyMissingMsg(true);
    }
  }, []);

  if (pending && !firebaseKeyMissingMsg) {
    return <>Loading...</>;
  }

  if (firebaseKeyMissingMsg) {
    return <>Firebase KEYs are missing, please add keys to .env</>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
