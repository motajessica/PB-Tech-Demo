// import React, { useEffect, useState } from "react";

// function Index(props) {
//   const [message, setMessage] = useState([]);
//   useEffect(() => {
//     const apiUrl = `http://localhost:9000/?${props}`;
//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);    
//         const jsonData = await response.json();
//         setMessage(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
    
//     fetchData();
 
//   },[])
  
//   return <div><br/><h2>{message.message}</h2></div>;

// }


// export default Index;
