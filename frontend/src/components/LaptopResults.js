import React, { useEffect, useState } from "react";
import Laptop from "./Laptop";

function LaptopResults(props) {

  const [laptops, setLaptops] = useState([]);
 
  useEffect(() => {
    const queryParams = new URLSearchParams(props).toString();

    const apiUrl = `http://localhost:9000/laptops?${queryParams}`;
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        console.log("FETCHING API")
        const jsonData = await response.json();
        console.log("RECEIVED RESPONSE FROM  API")
        console.log(jsonData)

        setLaptops(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[])

  return (
    <div className="container pt-4">
      {laptops && laptops.map(function (laptop, index) {
        return <Laptop laptop={laptop} key={index}/>;
      })}
    </div>
  );
}

export default LaptopResults;