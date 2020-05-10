import React, { useState, useEffect } from "react";
import firebase from "../../../lib/firebase";
import { useAuth } from "../../../lib/AuthContext";
import Input from "../../../components/Input";
import Device from "../../../components/Device";

export default function Devices() {
  const auth = useAuth();
  const db = firebase.firestore();
  const [devices, setDevices] = useState([]);
  const [scenes, setScenes] = useState([]);
  const [device, setDevice] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (auth.isAuthReady) {
      db.collection("devices")
        .doc(auth.uid)
        .collection("devices")
        .onSnapshot((querySnapshot) => {
          let arr = [];
          querySnapshot.forEach((snapshot) => {
            const data = snapshot.data();
            const id = snapshot.id;
            arr.push({ id, ...data });
          });
          setDevices(arr);
        });

      db.collection("scenes")
        .doc(auth.uid)
        .collection("scenes")
        .onSnapshot((querySnapshot) => {
          let arr = [];
          querySnapshot.forEach((snapshot) => {
            const data = snapshot.data();
            const id = snapshot.id;
            arr.push({ id, ...data });
          });
          setScenes(arr);
        });
    }
  }, [db, auth]);

  const activateDevice = async () => {
    const deviceRef = db.collection("temp-devices").doc(device);
    const res = await deviceRef.get();
    const data = res.data();
    if (data) {
      setIsValid(true);
      deviceRef.update({ owner: auth.uid });
    }
  };

  const setSceneOnDevice = (device, scene) => {
    db.collection("devices")
      .doc(auth.uid)
      .collection("devices")
      .doc(device)
      .update({ scene });
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
        onClick={activateDevice}
        className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
      >
        Activate Device
      </button>

      <h3>Devices:</h3>
      {[{ id: "asasdasdasdas" }, { id: "kskisss" }].map((device) => (
        <Device
          key={device.id}
          items={scenes}
          device={device}
          title="Scene"
          onClick={setSceneOnDevice}
        />
      ))}
    </div>
  );
}
