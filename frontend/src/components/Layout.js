import React from 'react';
import Body from "./Body";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  return (
    <html className="App">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PB-Tech</title>
        {/* Add any additional CSS or external libraries here */}
        <link rel="stylesheet" href="bootstrap/dist/css/bootstrap.min.css" />
      </head>
      {children}
    </html>
  );
};

export default Layout;