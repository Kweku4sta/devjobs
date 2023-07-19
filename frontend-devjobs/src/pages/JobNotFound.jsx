import React from "react";

export const JobNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
      <p className="text-gray-500">
        Sorry, the requested job could not be found.
      </p>
    </div>
  );
};
