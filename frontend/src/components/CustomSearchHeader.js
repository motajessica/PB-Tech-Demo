import React, { useState } from "react";

function CustomSeachHeader(pops) {
  const [formState, setFormState] = useState({});

  const updateFormState = (newState) => {
    setFormState(newState);
  };
  return (
    <div className="">
      <div className="custom-search-title fw-bold mt-5 text-center">
        <h1 className="filter-border d-inline-block px-5" style={{color: 'orange', border: '2px solid orange'}}>
          Find your perfect laptop
        </h1>
      </div>
    </div>
  );
}

export default CustomSeachHeader;