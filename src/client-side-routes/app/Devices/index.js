import React, { useState } from "react";
import firebase from "../../../lib/firebase";
import { useAuth } from "../../../lib/AuthContext";
import Input from "../../../components/Input";

export default function Devices() {
  const auth = useAuth();
  const db = firebase.firestore();
  const [device, setDevice] = useState("");

  const createDevice = () => {
    const deviceRef = db
      .collection("scenes")
      .doc(auth.uid)
      .collection("scenes")
      .doc();
    deviceRef.set({ device });
    setDevice("");
  };

  return (
    <div className="mx-auto max-w-lg mb-12">
      <Input
        field="Device Id"
        name="deviceId"
        onChange={(e) => setDevice(e.target.value)}
        value={device}
        type="text"
      />
      <button
        type="button"
        onClick={createDevice}
        className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
      >
        Create Device
      </button>
    </div>
  );
}
