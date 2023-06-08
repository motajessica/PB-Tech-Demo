import React from "react";
import LaptopResults from "./LaptopResults";
import Breadcrumbs from "./Breadcrumbs";
import "../css/page2.css";
import Dropdown from "./Dropdown";
import {useSearchParams} from 'react-router-dom'
function Page2() {
  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams)
  return (
    <>
      <div className="breadcrumbs-container">
        <Breadcrumbs></Breadcrumbs>
      </div>
      <div className="title">
        <span className="filter-category-title ms-5 fs-1">
          Our Recommendations for you:
        </span>
      </div>
      <div className="main-container">
        <div className="filter-container">
          <div className="filter-container-top">
            <h6>Results</h6>
          </div>
          <div className="filter-container-bottom">
            <a href="/">
              {"<"} Go Back
            </a>
          </div>

          <div className="filter-container-top">
            <h6>Your PBtech Store</h6>
          </div>
          <div className="filter-container-bottom2">
            <Dropdown></Dropdown>
          </div>

          <div className="filter-container-top">
            <h6>Filters</h6>
          </div>
          <div className="filter-container-bottom">
            <p>(No Filters Yet)</p>
          </div>
        </div>
        <div className="laptop-cards">
          <LaptopResults filters={searchParams} />
        </div>
      </div>
    </>
  );
}

export default Page2;
