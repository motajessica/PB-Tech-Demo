import React, { useState } from "react";

function CustomSeachHeader(pops) {
  const [formState, setFormState] = useState({});

  const updateFormState = (newState) => {
    setFormState(newState);
  };
  return (
    <div className="">
      <div className="fw-bold mt-5 text-center">
        <h1 className="cs-header -border px-5">
          Find your perfect laptop
        </h1>
      </div>
    </div>
  );
}

export default CustomSeachHeader;