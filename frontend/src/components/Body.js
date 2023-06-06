import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';

import Page0 from './Page0';
import LaptopResults from './LaptopResults';
import CustomSearch from './CustomSearch';

function Body() {
  return (
    <div>
      <Routes>
        <Route exact path="/page0" element={<Page0/>} />
        <Route path="/business_laptops" element={<LaptopResults />} />
        <Route path="custom_search/*"  element={<CustomSearch />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Body;
