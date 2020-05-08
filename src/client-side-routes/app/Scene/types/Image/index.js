import React, { useState } from "react";
import firebase from "../../../../../lib/firebase";

export default function Image({ id, frame, uid, sceneId }) {
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
      <h1 className="font-bold">Image</h1>
      <select
        name="color"
        value={settings.color}
        onChange={onChange}
        onBlur={onChange}
      >
        {["Red", "Green", "Blue"].map((value) => (
          <option key={value.toLowerCase()} value={value.toLowerCase()}>
            {value}
          </option>
        ))}
      </select>
      <label>
        <input
          name="showMarkers"
          type="checkbox"
          value={settings.showMarkers}
          checked={settings.showMarkers}
          onChange={onChange}
        />
        Show tracking markers
      </label>
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
