import React from "react";
import LaptopResults from './LaptopResults';

function BusinessLaptops() {
  return (
    <div>
      <div className="text-center mt-3">
        <h3>Business Laptops</h3>
      </div>
      
      <LaptopResults filters={{laptopType: 'business'}} />
    </div>
  );
}

export default BusinessLaptops;