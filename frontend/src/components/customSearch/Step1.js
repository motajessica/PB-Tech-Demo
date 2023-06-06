import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";

const Step1 = ({ formState, updateFormState }) => {
  const navigate = useNavigate();

  const laptopTypesOptions = [
    { label: "Traditional Laptop", value: "traditional" },
    { label: "2 in 1 Laptop", value: "two_in_one" },
    { label: "Chromebook", value: "chromebook" },
  ];

  const screenSizeOptions = ["11-12", "13", "14", "15", "16", "17"];


  const usageOptions = ["General use", "Home use", "School use", "Office work", "Gamming", "Heavy Work", "Programming" ]

  return (
    <div>
      <div className="custom-search-title fw-bold mt-5">
        <h1 className="filter-border"> Find your perfect laptop</h1>
      </div>
      <p>
        With all different specs and extras added to Laptops, it can get
        confusing when trying to decide which fits you best. Get started by
        answering the questions below.
      </p>

      <Formik
        initialValues={{
          category: formState.category || "",
          screenSizes: formState.screenSizes || [],
          purposes: formState.purposes || [],
        }}
        onSubmit={(values) => {
          updateFormState({ ...formState, ...values });
          navigate("/custom_search/step2");
        }}
      >
        <Form className="form">
          <div className="form-group mb-3">
            <span>What type of laptop are you looking for?</span>
            <div>
              {laptopTypesOptions.map((option) => (
                <div className="form-check-inline" key={option.value}>
                  <label className="form-check-label mt-2">
                    <Field
                      type="radio"
                      name="category"
                      value={option.value}
                      className="form-check-input me-1"
                    />
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group mb-3">
            <label>Screen size</label>
            <div className="form-check">
              {screenSizeOptions.map((option) => (
                <div key={option}>
                  <Field
                    type="checkbox"
                    name="screenSizes"
                    value={option}
                    className="form-check-input"
                  />
                  <label className="form-check-label mb-3 ">{option}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group mb-3">
            <label>What kind of work will you do with this laptop?</label>
            <div className="form-check">
              {usageOptions.map((option) => (
                <div key={option}>
                  <Field
                    type="checkbox"
                    name="screenSizes"
                    value={option}
                    className="form-check-input"
                  />
                  <label className="form-check-label mb-3">{option}</label>
                </div>
              ))}
            </div>
          </div>

          <button type="submit">Next</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Step1;
