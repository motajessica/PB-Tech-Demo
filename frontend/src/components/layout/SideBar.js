import React from 'react'
import Dropdown from "../Dropdown";

function Sidebar() {
  return(
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
    </div>
  )
}

export default Sidebar;