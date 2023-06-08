import React, { useEffect, useState } from "react";
import Laptop from "./Laptop";

function LaptopResults(props) {
  const [laptops, setLaptops] = useState([]);
  const [searching, setSearching] = useState(true)

  useEffect(() => {
    const queryParams = new URLSearchParams(props.filters).toString();
    console.log(`QUERY PARAMS ${queryParams}`)

    const apiUrl = `http://localhost:9000/laptops?${queryParams}`;
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        console.log("FETCHING API");
        const jsonData = await response.json();
        console.log("RECEIVED RESPONSE FROM  API");
        console.log(jsonData);
        setLaptops(jsonData);
        setSearching(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container pt-4">
      {
        searching 
        ?
         "Spinner"
        :
        <>
          <p><strong>Displaying {laptops.length} results</strong></p>
          {laptops && laptops.map(function (laptop, index) {
            return <Laptop laptop={laptop} key={index} />;
          })}
        </>  
      }
    </div>
  );
}

export default LaptopResults;
