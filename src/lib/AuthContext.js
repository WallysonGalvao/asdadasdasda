import React, { createContext, useContext, useState, useEffect } from "react";
import firebase from "../lib/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuth: false, isAuthReady: false });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        const { email, displayName, emailVerified, uid } = user;
        setAuth({
          isAuth: true,
          isAuthReady: true,
          name: displayName || email,
          email,
          emailVerified,
          uid,
        });
      } else {
        setAuth({ isAuth: false, isAuthReady: true });
      }
    });
  }, []);

  const resendEmailVerification = async () => {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
  };

  const signOut = () => firebase.auth().signOut;

  return (
    <AuthContext.Provider value={{ ...auth, resendEmailVerification, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
