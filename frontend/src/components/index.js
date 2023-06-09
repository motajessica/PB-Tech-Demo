import React, { useEffect, useState } from "react";

function Index(props) {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const apiUrl = `http://localhost:9000/?${props}`;
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        console.log("FETCHING API")
        const jsonData = await response.json();
        console.log("RECEIVED RESPONSE FROM  API");
        console.log(jsonData);


        setMessage(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
 
  },[])
  // console.log(message);
  return <div><br/><h2>{message.message}</h2></div>;
  // return <h2>{message.map(m => (
  //   <div>message: {message.message}</div>
  // ))}</h2>;
}


export default Index;
