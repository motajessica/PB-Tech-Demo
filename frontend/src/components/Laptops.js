import React from "react";
import LaptopResults from './LaptopResults';
import Sidebar from "./layout/SideBar";
import {Breadcrumb, BreadcrumbItem} from "react-bootstrap";

function Laptops() {
  return (
    <>
      <div className="p-4">
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/">Computers & Tablets</BreadcrumbItem>
          <BreadcrumbItem href="/laptops_types">Laptop Types</BreadcrumbItem>
          <BreadcrumbItem href="/all_laptops" active>All Laptops</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <div className="col-3">
            <Sidebar/>
          </div>
          <div className="col-9">
            <div className="filter-category-title fs-5">
              All Laptops
            </div>
            <LaptopResults />
          </div>
        </div>
      </div>
    </>
  );
}

export default Laptops;