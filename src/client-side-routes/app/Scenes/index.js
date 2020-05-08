import React, { useState, useEffect } from "react";
import firebase from "../../../lib/firebase";
import { useAuth } from "../../../lib/AuthContext";
import Input from "../../../components/Input";
import Card from "../../../components/Card";

const Scenes = () => {
  const auth = useAuth();
  const db = firebase.firestore();
  const [scene, setScene] = useState("");
  const [scenes, setScenes] = useState([]);

  useEffect(() => {
    if (auth.isAuthReady) {
      db.collection("scenes")
        .doc(auth.uid)
        .collection("scenes")
        .onSnapshot((querySnapshot) => {
          let allScenes = [];
          querySnapshot.forEach((snapshot) => {
            const scene = snapshot.data();
            const id = snapshot.id;
            allScenes.push({ id, ...scene });
          });
          setScenes(allScenes);
        });
    }
  }, [db, auth]);

  const createScene = () => {
    const newSceneRef = db
      .collection("scenes")
      .doc(auth.uid)
      .collection("scenes")
      .doc();
    newSceneRef.set({ name: scene });
    setScene("");
  };

  return (
    <>
      <div className="mx-auto max-w-lg mb-12">
        <Input
          field="Scene Name"
          name="scene"
          onChange={(e) => setScene(e.target.value)}
          value={scene}
          type="text"
        />
        <button
          type="button"
          onClick={createScene}
          className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Create Scene
        </button>
      </div>
      <div className="grid grid-cols-3">
        {scenes.map((scene) => (
          <Card key={scene.id} scene={scene} />
        ))}
      </div>
    </>
  );
};

export default Scenes;
