// Body.js
import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';

import Page0 from './Page0';
import LaptopResults from './LaptopResults';
import Page2 from './Page2';

function Body() {
  return (
    <div>
      <Routes>
        <Route exact path="/page0" element={<Page0/>} />
        <Route path="/business_laptops" element={<LaptopResults/>} />
        <Route path="/page2" element={<Page2/>} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Body;
