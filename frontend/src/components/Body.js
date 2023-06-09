import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';
import Page0 from './Page0';
import LaptopResults from './LaptopResults';
import CustomSearch from './CustomSearch';
import CustomSearchResults from './CustomSearchResults';
import BusinessLaptops from './BusinessLaptops';
import Laptops from "./Laptops";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from './ScrollTop';

import Index from './index';

function Body() {
  return (
    <body>
      <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<Page0/>} />
        <Route path="/business_laptops" element={<BusinessLaptops />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="custom_search/*"  element={<CustomSearch />} />
        <Route path="/page2" element={<CustomSearchResults/>}/>
        <Route path="/laptops_results" element={<LaptopResults />} />
        
        <Route path="/Index" element={<Index/>} />
        <Route path="/" element={<Index/>} />
      </Routes>
      <Outlet />
    </body>
  );
}

export default Body;
