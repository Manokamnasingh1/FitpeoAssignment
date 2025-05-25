// AnatomySection.jsx
import React from "react";

export default function AnatomySection() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Human_anatomy_front_en.svg"
        alt="Anatomy"
        className="w-48 h-auto"
      />
      <div className="mt-4 flex flex-col gap-2">
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Healthy Heart</span>
        <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold">Healthy Leg</span>
      </div>
    </div>
  );
}