import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Laptop(props) {
  const { laptop } = props;
  return (
    <div className="row mb-4">
      <div className="col-md-4">
        <Card className="">
          <Card.Img src="path_to_image1.jpg" alt="Card image 1" />
        </Card>
      </div>
      <div className="col-md-8">
        <Card>
          <div className="row g-0">
            <div className="col-md-8">
              <Card.Body>
                <h5 className="card-title">{laptop.title}</h5>
                <p className="card-text">
                  {" "}
                  Better value option for same spec, but longer warranty with
                  better price
                </p>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>CPU family: {laptop.cpuFamily}</td>
                      <td> Memory size: {laptop.memorySize}</td>
                    </tr>
                    <tr>
                      <td>Screen Size: {laptop.screenSize}</td>
                      <td>Screen Resoltion: {laptop.screenReso}</td>
                    </tr>
                    <tr>
                      <td>SSD Capacity: {laptop.ssdCapacity}</td>
                      <td>HD Capacity: {laptop.hdCapacity}</td>
                    </tr>
                    <tr>
                      <td>GPU Model: {laptop.gpuModel}</td>
                      <td>Operating System: {laptop.opSystem}</td>
                    </tr>
                    <tr>
                      <td>More Details</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </Card.Body>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h6 className="text-muted">{laptop.price}</h6>
                <Button variant="warning" className="mt-2">
                  <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Laptop;
