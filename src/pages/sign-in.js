import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import firebase from "../lib/firebase";
import Layout from "../components/Layout";
import HintMessage from "../components/HintMessage";
import Input from "../components/Input";

const SignIn = () => {
  const [error, setError] = useState({ message: "" });
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const signIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(() => navigate("/app"))
      .catch(({ code, message }) => setError({ code, message }));
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const { email, password } = form;

  return (
    <Layout>
      <div className="container max-w-full mx-auto md:py-24 px-6">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="md:mt-6">
                <div className="text-center font-semibold text-black">
                  Sign In
                </div>
                <div className="text-center font-base text-black">
                You can start using SmartFrame for free.
                </div>
                <form className="mt-8">
                  <div className="mx-auto max-w-lg">
                    <Input
                      field="Email"
                      name="email"
                      onChange={onChange}
                      value={email}
                      type="email"
                    />

                    <Input
                      field="Password"
                      name="password"
                      onChange={onChange}
                      value={password}
                      type="password"
                    />
                    <div className="flex justify-start mt-3 ml-4 p-1">
                      <ul>
                        <HintMessage
                          isValid={password.length > 7}
                          successMessage="The minimum length is reached"
                          errorMessage="At least 8 characters required"
                        />

                        {error.message && (
                          <HintMessage errorMessage={error.message} />
                        )}
                      </ul>
                    </div>

                    <button
                      type="submit"
                      onClick={signIn}
                      className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                    >
                      Sign In
                    </button>
                  </div>
                </form>

                <div className="text-sm font-semibold block  py-6 flex justify-center">
                  <Link
                    to="/create-account"
                    className="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500"
                  >
                    Don't have a account?{" "}
                    <span className="text-black font-semibold">
                      Create one here.
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
