import React from "react";

export const ErrorMessage = ({ error }) => {
  return (
    <div className="relative bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-4">
      <span className="block sm:inline">{error}</span>
      <button className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick="">
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            fillRule="evenodd"
            d="M14.348 5.652a.5.5 0 10-.708-.708L10 9.293 6.36 5.652a.5.5 0 10-.708.708L9.293 10l-3.64 3.64a.5.5 0 00.708.708L10 10.707l3.64 3.64a.5.5 0 00.708-.708L10.707 10l3.64-3.64z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
