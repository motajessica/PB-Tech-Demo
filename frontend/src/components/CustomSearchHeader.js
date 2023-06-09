import React, { useState } from "react";

function CustomSeachHeader(pops) {
  const [formState, setFormState] = useState({});

  const updateFormState = (newState) => {
    setFormState(newState);
  };
  return (
    <div className="container">
      <div className="custom-search-title fw-bold mt-5 text-center">
        <h1 className="filter-border d-inline-block px-5">
          Find your perfect laptop
        </h1>
      </div>
    </div>
  );
}

export default CustomSeachHeader;