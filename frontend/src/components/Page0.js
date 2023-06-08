import React from 'react';
import { Link } from 'react-router-dom';

function Page0() {
  return (
    <div className="container ">
      <div>
        <Link to="/laptops">All laptops</Link>
      </div>
      <div>
       <Link to="/business_laptops">Business Laptops</Link>
      </div>
      <div>
        <Link to="/custom_search/step1">Find your perfect laptop</Link>
      </div>
    </div>
  )
}

export default Page0;
