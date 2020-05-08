import React, { useState } from "react";
import firebase from "../../../lib/firebase";
import { useAuth } from "../../../lib/AuthContext";
import HintMessage from "../../../components/HintMessage";
import Input from "../../../components/Input";
import Message from "../../../components/Message";

const UpdatePassword = () => {
  const auth = useAuth();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({ message: "" });
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    passwordConfirm: "",
  });

  const updatePassword = async (e) => {
    e.preventDefault();

    const user = firebase.auth().currentUser;

    const credential = firebase.auth.EmailAuthProvider.credential(
      auth.email,
      form.currentPassword
    );

    await user
      .reauthenticateWithCredential(credential)
      .catch(({ code, message }) => setError({ code, message }));

    await user
      .updatePassword(form.newPassword)
      .then(() => setSuccess(true))
      .catch(({ code, message }) => setError({ code, message }));
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const { currentPassword, newPassword, passwordConfirm } = form;

  return (
    <div className="container max-w-full mx-auto md:py-24 px-6">
      <div className="max-w-sm mx-auto px-6">
        <div className="relative flex flex-wrap">
          <div className="w-full relative">
            <div className="md:mt-6">
              {success && (
                <Message type="success" message="Password changed." />
              )}

              {!success && (
                <>
                  <div className="text-center font-semibold text-black">
                    Change Password
                  </div>
                  <form className="mt-8">
                    <div className="mx-auto max-w-lg">
                      <Input
                        field="Current Password"
                        name="currentPassword"
                        onChange={onChange}
                        value={currentPassword}
                        type="password"
                      />
                      <Input
                        field="New Password"
                        name="newPassword"
                        onChange={onChange}
                        value={newPassword}
                        type="password"
                      />
                      <Input
                        field="Confirm Password"
                        name="passwordConfirm"
                        onChange={onChange}
                        value={passwordConfirm}
                        type="password"
                      />

                      <div className="flex justify-start mt-3 ml-4 p-1">
                        <ul>
                          <HintMessage
                            isValid={
                              newPassword === passwordConfirm &&
                              newPassword.length > 0
                            }
                            successMessage="Passwords match"
                            errorMessage="Passwords do not match"
                          />
                          <HintMessage
                            isValid={newPassword.length > 7}
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
                        onClick={updatePassword}
                        className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                      >
                        Change Password
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
