import React, { useState, useEffect } from "react";
import firebase from "../../../lib/firebase";
import { useAuth } from "../../../lib/AuthContext";
import ChromaKey from "./types/ChromaKey";
import Image from "./types/Image";

const FRAME_TYPES = {
  chromakey: { key: "chromakey", label: "Add chromakey" },
  image: { key: "image", label: "Add image" },
};

const frameTypes = Object.keys(FRAME_TYPES);

const FrameComponents = {
  [FRAME_TYPES.chromakey.key]: ChromaKey,
  [FRAME_TYPES.image.key]: Image,
};

export default function Scene({ sceneId }) {
  const auth = useAuth();
  const [scene, setScene] = useState({});
  const [frames, setFrames] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    if (auth.isAuthReady) {
      db.collection("scenes")
        .doc(auth.uid)
        .collection("scenes")
        .doc(sceneId)
        .onSnapshot((snapshot) => {
          const scene = snapshot.data();
          const id = snapshot.id;
          setScene({ id, ...scene });
        });
      db.collection("frames")
        .doc(auth.uid)
        .collection(sceneId)
        .onSnapshot((querySnapshot) => {
          let arrFrames = [];
          querySnapshot.forEach((snapshot) => {
            const scene = snapshot.data();
            const id = snapshot.id;
            arrFrames.push({ id, ...scene });
          });

          setFrames(arrFrames);
        });
    }
  }, [db, auth, sceneId]);

  const createFrame = (type) => {
    const frameRef = db
      .collection("frames")
      .doc(auth.uid)
      .collection(sceneId)
      .doc();
    frameRef.set({ type });
  };

  return (
    <div>
      <h1>{scene.name}</h1>
      <div className="grid grid-cols-3 gap-4">
        {frameTypes.map((frameType) => (
          <div
            key={frameType}
            className="text-center p-4 bg-white hover:bg-gray-100 h-32 w-32 shadow-md rounded flex items-end"
          >
            <button onClick={() => createFrame(FRAME_TYPES[frameType].key)}>
              <span>{FRAME_TYPES[frameType].label}</span>
            </button>
          </div>
        ))}
      </div>
      {frames.map((frame) => {
        const CurrentComp = FrameComponents[frame.type];
        return (
          <CurrentComp
            key={frame.id}
            id={frame.id}
            frame={frame}
            uid={auth.uid}
            sceneId={sceneId}
          />
        );
      })}
    </div>
  );
}
