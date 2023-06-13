import React from "react";
import { Formik, Form, Field } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { createSearchParams, useNavigate } from "react-router-dom";
import CustomSearchHeader from "./CustomSearchHeader";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import BreadcrumbItem from "react-bootstrap/BreadcrumbItem";
import Sidebar from "../layout/SideBar";

const Step2 = ({ formState, updateFormState }) => {
  const navigate = useNavigate();

  // const laptopBudgetOptions = [
  //   { label: 'Quite Low', value: '$1725' },
  //   { label: "Low", value:'$1725'},
  //   { label: "Average", value:'$1725'},
  //   { label: "Above Average", value:'$1725'},
  //   { label: "Expensive", value:'$1725'},
  //   { label: "Premium", value: '$1725'},
  // ];

  const laptopBudgetOptions = [
    "$1725",
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
  const gpuOptions = [
    "Low end Processors",
    "Intel Core i3",
    "Intel Core i5",
    "Intel Core i7",
    "Intel Core i9",
    "AMD Ryzen 3",
    "AMD Ryzen 5",
    "AMD Ryzen 7",
    "AMD Ryzen 9",
    "Apple M1",
    "Apple M2 Pro",
  ];
  return (
    <div>
    <div className="p-4">
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/">Computers & Tablets</BreadcrumbItem>
        <BreadcrumbItem href="/laptops_types">Laptops Types</BreadcrumbItem>
        <BreadcrumbItem href="/custom_search/step1" active>Find your Perfect Laptop</BreadcrumbItem>
      </Breadcrumb>
      <div className="row">
        <div className="col-12">
          <CustomSearchHeader/>
        </div>

      <Formik
        initialValues={{
          laptopBudget: formState.laptopBudget || [],
          laptopFeatures: formState.laptopFeatures || [],
          gpuOptions: formState.gpuOptions || [],
        }}

        onSubmit={(values) => {
          updateFormState({ ...formState, ...values });
          const search = `?${createSearchParams({ ...formState, ...values })}`;
          navigate({ pathname: "/page2", search });
        }}
      >
        <Form className="form">
          <div className="form-group mb-3 mt-5">
            <span className="filter-category-title">What is your budget?</span>
            <div className="form-check mt-3">
              {laptopBudgetOptions.map((option) => (
                <div key={option}>
                  <Field
                    type="checkbox"
                    name="price"
                    value={option}
                    className="form-check-input"
                  />
                  <label className="form-check-label mb-3">{option}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group mb-3">
            <span className="filter-category-title">
              Which Features do you want in your Laptop?
            </span>
            <div className="form-check mt-3">
              {laptopFeatureOptions.map((option) => (
                <div key={option}>
                  <Field
                    type="checkbox"
                    name="laptopFeatures"
                    value={option}
                    className="form-check-input"
                  />
                  <label className="form-check-label mb-3">{option}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group mb-3">
            <span className="filter-category-title">
              What type of processor are you looking for?
            </span>
            <div className="form-check mt-3">
              {gpuOptions.map((option) => (
                <div key={option}>
                  <Field
                    type="checkbox"
                    name="gpuModel"
                    value={option}
                    className="form-check-input"
                  />
                  <label className="form-check-label mb-3 ">{option}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <button
              type="submit"
              className="filter-next-back-border px-5 d-flex align-items-center"
            >
              Find your perfect Laptop
              <FontAwesomeIcon className="ms-3" icon={faArrowRight} />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
    </div>
    </div>
  );
};

export default Step2;
