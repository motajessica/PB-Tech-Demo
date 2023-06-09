import React, { useEffect, useState } from "react";
import LaptopCard from "./LaptopCard";
import '../HomepageApp.css';
import { Link } from "react-router-dom";

function LaptopTypeResults(props) {

  const [laptopTypes, setLaptopTypes] = useState([]);
 
  let laptopItem= {
    id:200,
    lTitle: "Still not quite sure?",
    lDetail: "Try our matchmaking feature! Answer some of our questions and we will recommend a device that fits your needs perfectly!",
    imageSrc: "./images/question_mark.jpg"
};
  useEffect(() => {
    const apiUrl = `http://localhost:9000/laptop_types?${props}`;
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        console.log("FETCHING API")
        const jsonData = await response.json();
        console.log("RECEIVED RESPONSE FROM  API");
        console.log(jsonData);


        setLaptopTypes(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
 
  },[])
  // console.log(laptopTypes);

  return (
    <div className="app">
      
      <div className="navigationLinks">
        <div className="bColor">Home <b>&gt;</b> Computers & Tablets <b>&gt;</b>&thinsp;</div>
        <div className="gColor"> Laptops</div>
      </div><br/>
      <div id="LaptopsLabel">Laptops</div>
      <div id="recommendedButtons">
        <div id="ShopByLaptopType">Shop by Laptop Type</div>
        <div id="ShopAllLaptops">Shop All Laptops&rarr;</div>
        <div id="EmptySpace">&thinsp;&thinsp;&thinsp;&thinsp;</div>
        <div id="FindYourPerfectLaptop"><a as={Link} style={{color: 'white'}} href="/custom_search/step1">Find your perfect Laptop&rarr;</a></div>
      </div>
      
      <div className="container">
        {laptopTypes.map((laptop, index)=> {
            return <LaptopCard laptop={laptop} key={index}/>
        })}
        <a href="./page2"><LaptopCard laptop={laptopItem}/></a>
      </div>
    </div>
  );
}


export default LaptopTypeResults;

