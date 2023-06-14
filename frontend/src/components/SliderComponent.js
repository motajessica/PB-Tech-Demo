import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const SliderComponent = ({ value, min, max, step, onChange, valueLabelFormat, label }) => {
  return (
    <div className="form-group mb-3">
      <span className="filter-category-title">{label}</span>
      <Slider
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
      <Typography id="non-linear-slider" gutterBottom>
        {label}: {valueLabelFormat(value)}
      </Typography>
    </div>
  );
};

export default SliderComponent;
