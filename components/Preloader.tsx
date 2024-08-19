import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-t-transparent border-solid animate-spin rounded-full border-green-500 border-4 h-12 w-12"></div>
    </div>
  );
};

export default Loader;
