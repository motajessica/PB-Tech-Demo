import React from "react";

export default function Breadcrumbs() {
  return (
    <nav
      style={{
        "--bs-breadcrumb-divider": "'>'",
        position: "absolute",
        width: "700px",
        height: "34px",
        left: "40px",
        top: "145px",

      }}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/">Computers & Tablets</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/laptops">Laptops</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/custom_search/step1">Find your Perfect Laptop</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Results
        </li>
      </ol>
    </nav>
  );
}
