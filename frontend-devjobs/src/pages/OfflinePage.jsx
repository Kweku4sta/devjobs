import React from "react";

export const OfflinePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-6">You are Offline</h1>
        <p className="text-lg mb-4">
          It seems you are currently offline. Please check your internet
          connection and try again.
        </p>
        <button
          className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};
