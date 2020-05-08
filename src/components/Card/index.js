import React from "react";
import { Link } from "gatsby";

export default function Card({ scene }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://source.unsplash.com/random/384x234"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <Link className="hover:underline" to={`/app/scene/${scene.id}`}>
            {scene.name}
          </Link>
        </div>
      </div>
    </div>
  );
}
