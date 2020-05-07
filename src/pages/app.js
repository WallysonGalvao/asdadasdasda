import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import { navigate } from "gatsby";
import { useAuth } from "../lib/AuthContext";
import Layout from "../components/Layout";
import CreateScenes from "../client-side-routes/app/CreateScene";
import Scenes from "../client-side-routes/app/Scenes";
import UpdatePassword from "../client-side-routes/app/UpdatePassword";

const ShowEmailNotification = () => {
  const auth = useAuth();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (auth.isAuthReady && !auth.isAuth) navigate("/sign-in");
  }, [auth]);

  const resendEmailVerification = async () => {
    try {
      await auth.resendEmailVerification();
    } catch (error) {
      setError(true);
    }
  };

  if (!auth.emailVerified) {
    return (
      <div className="bg-orange-200 p-4">
        <p className="container mx-auto text-center">
          Please, confirm your email address ({auth.email}). <br />
          <button onClick={resendEmailVerification}>
            Click here to resend email confirmation. <br />
          </button>
          {error ? (
            <span>Error, try again in few minutes.</span>
          ) : (
            <span>
              Verification e-mail sent. Please, check your inbox and follow the
              instructions.
            </span>
          )}
        </p>
      </div>
    );
  }

  return null;
};

const App = () => {
  return (
    <Layout>
      <ShowEmailNotification />
      <Router basepath="/app">
        <CreateScenes path="/create-scenes" />
        <Scenes path="/scenes" />
        <UpdatePassword path="/update-password" />
      </Router>
    </Layout>
  );
};

export default App;
