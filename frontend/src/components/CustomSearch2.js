import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


function customSearch2 () {
  return (
  <div className="container">
    <div className="mt-4">
      <Link to="/custom_search" className="d-flex justify-content-start text-decoration-none">
        <span className="filter-border">
        <FontAwesomeIcon className="ms-2 me-2" icon={faArrowLeft}/>
         Go Back
        </span>
      </Link>
    </div>

    <div className="filter-category-title" >
      <div className="mb-4">
        What is your budget? 
      </div>
      <div className="mb-4">
        Which feature do you want in your laptop? 
      </div>
      <div className="mb-4">
        Which type of processor are you lookinf for? 
      </div>
    </div>

    <div className="mt-4">
      <Link to="/results" className="d-flex justify-content-end text-decoration-none">
        <span className="filter-border-results">

         Find your perfect Laptopt
         <FontAwesomeIcon className="ms-2 me-2" icon={faArrowRight}/>
        </span>
      </Link>
    </div>

  </div>
  )
}


export default customSearch2;