import React from "react";

function Spinner() {
  return (
    <div className="text-center">
      <div
        className="spinner-border text-light-black utility_height-width_48px"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
