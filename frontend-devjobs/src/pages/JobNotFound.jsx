import React from "react";
import { useDarkModeContext } from "../components/contexts/DarkModeContext";

export const JobNotFound = () => {
  const { isDarkMode } = useDarkModeContext();

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        isDarkMode ? "bg-black-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
      <p className="text-gray-500">
        Sorry, the requested job could not be found.
      </p>
    </div>
  );
};
