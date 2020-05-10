import React, { useState, useEffect } from "react";
import firebase from "../lib/firebase";
import Layout from "../components/Layout";
const db = firebase.firestore();

export default function D() {
  const [isReady, setIsReady] = useState(false);
  const [activated, setActivated] = useState(false);
  const [number, setNumber] = useState(0);
  const [device, setDevice] = useState({});
  const [currentDevice, setCurrentDevice] = useState({});

  // useEffect(() => {}, []);

  useEffect(() => {
    const random = Math.floor(Math.random() * 999999)
      .toString()
      .padStart(6, "0");
    localStorage.setItem("deviceNumber", random);
    setNumber(localStorage.getItem("deviceNumber") || random);
  }, []);

  useEffect(() => {
    const alreadyActivated =
      !!localStorage.getItem("deviceNumber") && !!localStorage.getItem("owner");
    if (alreadyActivated) setActivated(alreadyActivated);
  }, []);

  useEffect(() => {
    if (!activated && number > 0) {
      const lastSeen = firebase.firestore.FieldValue.serverTimestamp();
      db.collection("temp-devices")
        .doc(number)
        .set({ lastSeen })
        .then(() => setIsReady(true));
    }
  }, [activated, number]);

  // Aguardando ativação
  useEffect(() => {
    let unsubscribe = null;
    if (isReady && !activated) {
      unsubscribe = db
        .collection("temp-devices")
        .doc(number)
        .onSnapshot((snapshot) => {
          const deviceData = snapshot.data();
          if (deviceData) setDevice(deviceData);
        });
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [isReady, activated, number]);

  // Ativação
  useEffect(() => {
    if (device && device.owner) {
      db.collection("devices")
        .doc(device.owner)
        .collection("devices")
        .doc(number)
        .set({ ...device, activated: true })
        .then(() => {
          localStorage.setItem("owner", device.owner);
          setActivated(true);
          db.collection("temp-devices")
            .doc(number)
            .delete()
            .then(() => {});
        });
    }
  }, [device, number]);

  useEffect(() => {
    let unsubscribe = null;
    if (activated) {
      unsubscribe = db
        .collection("devices")
        .doc(localStorage.getItem("owner"))
        .collection("devices")
        .doc(localStorage.getItem("deviceNumber"))
        .onSnapshot((snapshot) => setCurrentDevice(snapshot.data()));
    }
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [device, activated]);

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Mostrando Display do tablet</h1>
      {!activated && <h2>{number}</h2>}
      {activated && <h2>Device already activated!</h2>}
      {activated && (
        <div className="absolute bottom-0 right-0 bg-gray-800 text-white p-2 text-xs font-bold">
          Device ID: {device}
        </div>
      )}
    </div>
  );
}
