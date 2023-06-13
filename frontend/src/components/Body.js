import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';
import LaptopTypes from './LaptopTypes';
import LaptopResults from './LaptopResults';
import CustomSearch from './CustomSearch';
import CustomSearchResults from './CustomSearchResults';
import BusinessLaptops from './BusinessLaptops';
import Laptops from "./Laptops";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from './ScrollTop';



function Body() {
  return (
    <body>
      <ScrollToTop/>
      <Routes>
        <Route exact path="/laptops_types" element={<LaptopTypes/>} />
        <Route path="/business_laptops" element={<BusinessLaptops />} />
        <Route path="/all_laptops" element={<Laptops />} />
        <Route path="custom_search/*"  element={<CustomSearch />} />
        <Route path="/page2" element={<CustomSearchResults/>}/>
        <Route path="/laptops_results" element={<LaptopResults />} />
      </Routes>
      <Outlet />
    </body>
  );
}

export default Body;
