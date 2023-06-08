import React from "react";

export default function Breadcrumbs(props) {
  return (
    <nav
      style={{
        "--bs-breadcrumb-divider": "'>'",
      }}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        {props.children}
      </ol>
    </nav>
  );
}
