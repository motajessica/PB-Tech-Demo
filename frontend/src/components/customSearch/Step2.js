import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";

const Step2 = ({ formState, updateFormState }) => {
  const navigate = useNavigate();

  const laptopBudgetOptions = [
    "Quite Low",
    "Low",
    "Average",
    "Above Average",
    "Expensive",
    "Premium",
  ];
  const laptopFeatureOptions = [
    "HD",
    "4K",
    "FHD",
    "Dedicated GPU",
    "Touchscreen",
    "SSD Storage",
    "Fingerprint Security",
    "Backlit Keyboard",
    "VR ready",
    "IPS display",
    "Refurbished",
  ];
  const cpuOptions = [
    "Low end Processors",
    "Intel Core i3 Processors",
    "Intel Core i5 Processors",
    "Intel Core i7 Processors",
    "Intel Core i9 Processors",
    "AMD Ryzen 3 Processors",
    "AMD Ryzen 5 Processors",
    "AMD Ryzen 7 Processors",
    "AMD Ryzen 9 Processors",
    "Apple M1",
    "Apple M2 Pro",
  ];
  return (
    <div>
      <div className="custom-search-title fw-bold mt-5">
        <h1 className="filter-border"> Find your perfect laptop</h1>
      </div>

      <Formik
        initialValues={{
          laptopBudget: formState.laptopBudget || [],
          laptopFeatures: formState.laptopFeatures || [],
          cpuOptions: formState.cpuOptions || [],
        }}
        onSubmit={(values) => {
          updateFormState({ ...formState, ...values });
          navigate("/Page2");
        }}
      >
        <Form className="form">
          <div className="form-group mb-3">
            <span>What is your budget?</span>
            <div className="form-check">
              {laptopBudgetOptions.map((option) => (
                <div key={option}>
                  <Field
                    type="checkbox"
                    name="laptopBudget"
                    value={option}
                    className="form-check-input"
                  />
                  <label className="form-check-label">{option}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group mb-3">
            <span>Which Features do you want in your Laptop?</span>
            <div className="form-check">
              {laptopFeatureOptions.map((option) => (
                <div key={option}>
                  <Field
                    type="checkbox"
                    name="laptopFeatures"
                    value={option}
                    className="form-check-input"
                  />
                  <label className="form-check-label">{option}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group mb-3">
            <span>What type of processor are you looking for?</span>
            <div className="form-check">
              {cpuOptions.map((option) => (
                <div key={option}>
                  <Field
                    type="checkbox"
                    name="cpuOptions"
                    value={option}
                    className="form-check-input"
                  />
                  <label className="form-check-label">{option}</label>
                </div>
              ))}
            </div>
          </div>
          <button type="submit">Find your perfect Laptop</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Step2;
