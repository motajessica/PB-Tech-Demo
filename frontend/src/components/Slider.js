import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';


const Slider = () => {
  const [value, setValue] = useState(100);

  const handleSliderChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div className="container">
    
    <RangeSlider
      value={value}
      min={100}
      max={500}
      onChange={handleSliderChange}
      step={50}
      marks
      aria-label="Price"
      valueLabelDisplay="auto"
    />
    <div className="ms-2">{value}</div>
    
  </div>
  );
};
    
    export default Slider;
