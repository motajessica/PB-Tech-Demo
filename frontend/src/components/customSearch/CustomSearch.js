import React, { useState } from "react";
import { Route, Routes} from 'react-router-dom';
import Step1 from './Step1'
import Step2 from './Step2'

function CustomSearch(props) {
  const [formState, setFormState] = useState({});

  const updateFormState = (newState) => {
    setFormState(newState);
  };
  return (
    <div className="container d-block" >
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
      </Routes>
    </div>
  );
}

export default CustomSearch;