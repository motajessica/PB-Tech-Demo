import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const LaptopType = ({ laptop }) => {
  const navigate = useNavigate();
  const queryParams = `?${createSearchParams({laptopType: laptop.laptopType,})}`;

  const handleClick = (event) => {
    navigate({ pathname: `/${laptop.laptopType}_laptops`, queryParams });
  };

  return (
    <div onClick={handleClick} className="laptop">
      <div>
        <img
          className={laptop.id !== 200 ? "lImage" : "QuestionImage"}
          src={laptop.imageSrc}
          alt={laptop.lTitle}
        ></img>
      </div>
      <div>
        <p>{laptop.lTitle}</p>
        <p className="productDetail">{laptop.lDetail}</p>
      </div>
    </div>
  );
};

export default LaptopType;
