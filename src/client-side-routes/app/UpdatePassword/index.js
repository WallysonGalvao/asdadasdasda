import React from "react";
import { useAuth } from "../../../lib/AuthContext";

const UpdatePassword = () => {
  const auth = useAuth();

  return <pre>{JSON.stringify(auth, null, 2)}</pre>;
};

export default UpdatePassword;
