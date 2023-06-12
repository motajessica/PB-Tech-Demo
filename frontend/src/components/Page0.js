import React, { useEffect, useState } from "react";
import LaptopType from "./LaptopType";
import '../HomepageApp.css';
import { Link } from "react-router-dom";
import {Breadcrumb, BreadcrumbItem} from "react-bootstrap";


function LaptopTypeResults(props) {

  const [laptopTypes, setLaptopTypes] = useState([]);
 
  let laptopNotSure= {
    id:200,
    lTitle: "Still not quite sure?",
    lDetail: "Try our matchmaking feature! Answer some of our questions and we will recommend a device that fits your needs perfectly!",
    imageSrc: "./images/question_mark.jpg"
};
  useEffect(() => {
    const apiUrl = `http://localhost:9000/laptop_types`;
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setLaptopTypes(jsonData);
      } catch (error) {
        
      }
    };
    
    fetchData();
 
  },[])
  

  return (
    <div>
      <div className="navigationLinks mt-3">
      <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/">Computers & Tablets</BreadcrumbItem>
          <BreadcrumbItem href="/laptop_types" active>Laptop Types</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div id="LaptopsLabel">Laptops</div>
      <div id="recommendedButtons">
      <div id="ShopByLaptopType">Shop by Laptop Type</div> 


      <div className="py-2">
        <Link to="/all_laptops" id="shopAllLaptops" className="btn btn-lg text-white">Shop All Laptops</Link>
        <Link to="/custom_search/step1" id="FindYourPerfectLaptop" className="btn btn-lg text-white">Find your perfect Laptop</Link>
      </div>
  
      </div>
      
      
      <div className="container">
        {laptopTypes.map((laptop, index)=> {
            return <LaptopType laptop={laptop} key={index}/>
        })}
        <a href="/custom_search/step1"><LaptopType laptop={laptopNotSure}/></a>
      </div>
    </div>
  );
}


export default LaptopTypeResults;

