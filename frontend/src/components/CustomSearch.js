import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function CustomSearch(pops) {
  // const [brand, setBrand] = useState(null);
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
      {/* Title */}
      <div className="custom-search-title fw-bold mt-5">
        <span className="filter-border"> Find your perfefct laptop</span>
      </div>
      <p>
        With all different specs and extras added to Laptops, it can get
        confusing when trying to decide which fits you best. Get started by
        answering the questions below.
      </p>
      {/* Filters Type */}
      <div className="filter-category-title">
        <div className="mb-4">What Type of Laptop/s are you looking for?</div>
        <div className="d-flex justify-content-between">
          <div className="btn btn-outline-primary border-1 ">
            Business Laptops
          </div>
          <div className="btn btn-outline-primary border-1">
            Home & Study Laptops
          </div>
          <div className="btn btn-outline-primary border-1">Gaming Laptops</div>
        </div>

        <div className="mb-4 mt-4">What screen size do you prefer?</div>

        <div className="mb-4 mt-4">
          What kind of work will you do with this laptop?
        </div>

        <Link
          to="/custom_search_2"
          className="d-flex justify-content-end text-decoration-none"
        >
          <span className="filter-border">
            Next Page
            <FontAwesomeIcon className="ms-2 me-2" icon={faArrowRight} />
          </span>
        </Link>

        {/* <div className="filter-category-title">
          <div>
            <Formik
              initialValues={{
                brands: "",
                screenSize: "",
                cpuFamily: "",
                memorySize: "",
                screenResolution: "",
                opSystem: "",
                price: "",
                gpuModel: "",
              }}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="form-group">
                  <label htmlFor="brand">Brands</label>
                  <Field as="select" id="brand" name="brand" >
                    <option value=""></option>
                    <option value="Apple">Apple</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Field>
                  <ErrorMessage name="mySelectField" component="div" />
                </div>
                <div>
                  <label htmlFor="screenSize">Screen Size</label>
                  <Field type="text" id="screenSize" name="screenSize" />
                </div>
                <div>
                  <label htmlFor="cpuFamily">CPU Family</label>
                  <Field type="text" id="cpuFamily" name="cpuFamily" />
                </div>
                <div>
                  <label htmlFor="memorySize">Memory Size</label>
                  <Field type="text" id="memorySize" name="memorySize" />
                </div>
                <div>
                  <label htmlFor="screenResolution">Screen Resolution</label>
                  <Field
                    type="text"
                    id="screenResolution"
                    name="screenResolution"
                  />
                </div>
                <div>
                  <label htmlFor="opSystem">Operation System</label>
                  <Field type="text" id="opSystem" name="opSystem" />
                </div>
                <div>
                  <label htmlFor="price">Price</label>
                  <Field type="text" id="price" name="price" />
                </div>
                <div>
                  <label htmlFor="gpuModel">GPU Model</label>
                  <Field type="text" id="gpuModel" name="gpuModel" />
                </div>
                <div>
                  <button className="btn btn-lg btn-secondary" type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CustomSearch;
