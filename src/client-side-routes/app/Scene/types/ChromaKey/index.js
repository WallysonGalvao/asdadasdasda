import React, { useState } from "react";
import firebase from "../../../../../lib/firebase";
import Checkbox from "../../../../../components/Checkbox";

export default function ChromaKey({ id, frame, uid, sceneId }) {
  const db = firebase.firestore();
  const [settings, setSettings] = useState({
    color: "green",
    showMarkers: false,
  });

  const onChange = ({ target }) => {
    const { name, value, checked, type } = target;
    const newValue = type === "checkbox" ? checked : value;
    setSettings({ ...settings, [name]: newValue });
  };

  const save = () => {
    const frameRef = db
      .collection("frames")
      .doc(uid)
      .collection(sceneId)
      .doc(id);
    frameRef.update({ settings });
  };

  return (
    <div className="border-solid border-gray-200 border-2 m-8 p-8">
      <h1 className="font-bold">ChromaKey</h1>

      <div className="w-full">
        <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
          <select
            name="color"
            value={settings.color}
            onChange={onChange}
            onBlur={onChange}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          >
            {["Red", "Green", "Blue"].map((value) => (
              <option key={value.toLowerCase()} value={value.toLowerCase()}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Checkbox
        name="showMarkers"
        type="checkbox"
        value={settings.showMarkers}
        checked={settings.showMarkers}
        onChange={onChange}
      >
        Show tracking markers
      </Checkbox>
      <button
        type="button"
        onClick={save}
        className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
      >
        Save
      </button>
    </div>
  );
}
