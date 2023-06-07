import React from "react";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Laptop(props) {
  const { laptop } = props;
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="row mb-4">
      <Card>
        <div className="row g-0">
          <div className="col-md-3">
            <Card.Img src={`/images/${laptop.laptopType}.jpg`} alt="Laptop image" />
          </div>
          <div className="col-md-6">
            <Card.Body>
            <h5 className="card-title">{laptop.name}</h5>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>Laptop Type: {laptop.laptopType}</td>
                  </tr>
                  <tr>
                    <td>CPU family: {laptop.cpuFamily}</td>
                    <td> Memory size: {laptop.memorySize}</td>

                  </tr>
                  <tr>
                    <td>Memory size:</td>
                    <td>{laptop.memorySize}</td>
                  </tr>
                  <tr>
                    <td>Screen Size:</td>
                    <td>{laptop.screenSize}</td>
                  </tr>
                  <tr>
                    <td>Screen Resolution:</td>
                    <td>{laptop.screenReso}</td>
                  </tr>
                  <tr>
                    <td>GPU Model:</td>
                    <td>{laptop.gpuModel}</td>
                  </tr>
                  {showMore && (
                    <>
                      <tr>
                        <td>SSD Capacity:</td>
                        <td>{laptop.ssdCapacity}</td>
                      </tr>
                      <tr>
                        <td>HDD Capacity:</td>
                        <td>{laptop.hddCapacity}</td>
                      </tr>

                      <tr>
                        <td>Operating System:</td>
                        <td>{laptop.opSystem}</td>
                      </tr>
                    </>
                  )}
                  <tr>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link text-decoration-none"
                        onClick={handleToggle}
                      >
                        {showMore ? "Show Less" : "More Details"}
                      </button>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-center">
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
  );
}

export default Laptop;
