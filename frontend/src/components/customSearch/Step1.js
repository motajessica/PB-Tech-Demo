import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Step1 = ({ formState, updateFormState }) => {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    updateFormState({ ...formState, category})
    setCategory(event.target.value);
  };
  
  const laptopTypesOptions = [
    { label: "Traditional Laptop", value: "traditional" },
    { label: "2 in 1 Laptop", value: "two_in_one" },
    { label: "Chromebook", value: "chromebook" }
  ];

  const screenSizeOptions = ['11-12', '13', '14', '15', '16', '17'];
  const [selectedScreenSizeOptions, setSelectedScreeSizeOptions] = useState([])

  const handlescreenSizeChange = (event) => {
    const option = event.target.value;

    if (event.target.checked) {
      setSelectedScreeSizeOptions([...selectedScreenSizeOptions, option]);
    } else {
      setSelectedScreeSizeOptions(selectedScreenSizeOptions.filter((selectedOption) => selectedOption !== option));
    }
    updateFormState({ ...formState, screenSizes: selectedScreenSizeOptions})
  }
  return(
    <div>
      <div className="custom-search-title fw-bold mt-5">
        <h1 className="filter-border"> Find your perfefct laptop</h1>
      </div>
      <p>
        With all different specs and extras added to Laptops, it can get
        confusing when trying to decide which fits you best. Get started by
        answering the questions below.
      </p>
    
      <form className="form">
        <div className="form-group mb-3">
          <span>What type of laptop are you looking for?</span>
          <div>
          {
            laptopTypesOptions.map((option) => (
              <div className="form-check-inline">
                <label className="form-check-label" key={option.value}>
                  <input
                    type="radio"
                    name="option"
                    value={option.value}
                    checked={category === option.value}
                    onChange={handleCategoryChange}
                    className="form-check-input me-1"
                  />
                  {option.label}
                </label>
              </div>
            ))
          }
          </div>
        </div>
        <div className='form-group mb-3'>
          <label>Screen size</label>
           <div className='form-check'>
            {screenSizeOptions.map((option) => {
              return(
                <div>
                  <input
                      type="checkbox"
                      value={option}
                      checked={selectedScreenSizeOptions.includes(option)}
                      onChange={handlescreenSizeChange}
                      className='form-check-input'
                    />
                    <label key={option} className="form-check-label">{option}</label>
                </div>
              )
            })}
          </div>
        </div>
      </form>
      <Link to="/step2">Next</Link>
    </div>
  ) 
};

export default Step1;
