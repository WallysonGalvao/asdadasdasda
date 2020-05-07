import React from "react";
import { useAuth } from "../../../lib/AuthContext";

const CreateScene = () => {
  const auth = useAuth();

  return <pre>{JSON.stringify(auth, null, 2)}</pre>;
};

export default CreateScene;
