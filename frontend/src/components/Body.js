import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';

import Page0 from './Page0';
import LaptopResults from './LaptopResults';
import CustomSearch from './CustomSearch';
import Page2 from './Page2';
import BusinessLaptops from './BusinessLaptops';

function Body() {
  return (
    <div>
      <Routes>
        <Route exact path="/page0" element={<Page0/>} />
        <Route path="/business_laptops" element={<BusinessLaptops />} />
        <Route path="/laptops" element={<LaptopResults filters={{}} />} />
        <Route path="custom_search/*"  element={<CustomSearch />} />
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/laptops_results" element={<LaptopResults />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Body;
