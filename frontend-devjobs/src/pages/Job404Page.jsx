import React from "react";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../components/contexts/DarkModeContext";

const Job404Page = () => {
  const { isDarkMode } = useDarkModeContext();

  return (
    <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1
            className={`text-4xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Oops! Page not found.
          </h1>
          <p
            className={`text-lg ${isDarkMode ? "text-white" : "text-gray-800"}`}
          >
            The page you are looking for does not exist or might have been
            removed.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className={`px-6 py-3 rounded-md ${
                isDarkMode
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-blue-200 hover:bg-blue-300 text-gray-800"
              }`}
            >
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job404Page;
