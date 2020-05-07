import React from "react";
import { useAuth } from "../../../lib/AuthContext";

const Scenes = () => {
  const auth = useAuth();

  return <pre>{JSON.stringify(auth, null, 2)}</pre>;
};

export default Scenes;
