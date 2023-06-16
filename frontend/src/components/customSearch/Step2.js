import React from "react";
import { Formik, Form, Field } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { createSearchParams, useNavigate } from "react-router-dom";
import CustomSearchHeader from "./CustomSearchHeader";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import BreadcrumbItem from "react-bootstrap/BreadcrumbItem";
import Sidebar from "../layout/SideBar";

const Step2 = ({ formState, updateFormState }) => {
  const navigate = useNavigate();

  const laptopBudgetOptions = [
    { label: "up to $999", value: "0-999"},
    { label: "$1000 - $1125", value: "1000-1125"},
    { label: "$1125 - $1250 ", value: "1125-1250"},
    { label: "$1250 - $1725", value: "1251-1725"},
    { label: "$1725 - $1825", value: "1725-1825"},
    { label: "From $1825", value: "1825-10000"},
  ];

  const ssdCapacityOptions = [
    "256GB",
    "500GB",
    "512GB",
    "1T"
  ];
  const cpuFamilyOptions = [
    "Intel Celeron",
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
          <BreadcrumbItem href="/laptops_types">Laptop Types</BreadcrumbItem>
          <BreadcrumbItem href="/custom_search/step1" active>
            Find your Perfect Laptop
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <div className="col-12">
            <CustomSearchHeader />
          </div>
          <div className="d-flex justify-content-start align-items-center">
              <Link
                to="/custom_search/step1"
                className="navigation"
              >
                <FontAwesomeIcon className="me-2" icon={faArrowLeft} />
                Back
              </Link>
         </div>
          <Formik
            initialValues={{
              laptopBudget: formState.laptopBudget || [],
              laptopFeatures: formState.laptopFeatures || [],
              gpuOptions: formState.gpuOptions || [],
            }}
            onSubmit={(values) => {
              updateFormState({ ...formState, ...values });
              const search = `?${createSearchParams({
                ...formState,
                ...values,
              })}`;
              navigate({ pathname: "/page2", search });
            }}
          >
            <Form className="form">
              <div className="form-group mb-3 mt-5">
                <span className="filter-category-title">
                  What is your budget?
                </span>
                <div className="form-check mt-3">
                  {laptopBudgetOptions.map((option, index) => (
                    <div key={index}>
                    <Field
                        type="radio"
                        name="price"
                        value={option.value}
                        className="form-check-input"
                      />
                      <label className="form-check-label mb-3">{option.label}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-group mb-3">
                <span className="filter-category-title">
                  What SSD Capacity do you want in your Laptop?
                </span>
                <div className="form-check mt-3">
                  {ssdCapacityOptions.map((option) => (
                    <div key={option}>
                      <Field
                        type="checkbox"
                        name="ssdCapacity"
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
                  {cpuFamilyOptions.map((option) => (
                    <div key={option}>
                      <Field
                        type="checkbox"
                        name="cpuFamily"
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
                  className="navigation border-0"
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
