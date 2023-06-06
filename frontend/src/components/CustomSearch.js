import React, { useState } from "react";
import { Route, Routes} from 'react-router-dom';
import Step1 from './customSearch/Step1'
import Step2 from './customSearch/Step2'
import LaptopResults from "./LaptopResults";

function CustomSearch(pops) {
  const [formState, setFormState] = useState({screenSizes: [], category: null});

  const updateFormState = (newState) => {
    setFormState(newState);
  };
 
  // const handleSelectBrand = (event) => {
  //   const selectedBrand = event.CustomSearch;
  //   setBrand(selectedBrand);
  // };

  // const handleSubmit = (events) => {
  //   const queryParams = new URLSearchParams(events).toString();

  //   fetch(`http://localhost:9000/laptops?${queryParams}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="container">
      <Routes>
      <Route
          path="/step1"
          element={
            <Step1 formState={formState} updateFormState={updateFormState} />
          }
        />
        <Route
          path="/step2"
          element={
            <Step2 formState={formState} updateFormState={updateFormState} />
          }
        />
        <Route
          path="/results"
          element={<LaptopResults searchParams={formState} />}
        />
      </Routes>
    </div>
  );
}

export default CustomSearch;