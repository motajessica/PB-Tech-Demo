import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Page1() {
  return (
    <div className="container pt-4">

{/* First card */}
      <div className="row">
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
                  <h5 className="card-title">Laptop 1</h5>
                  <p className="card-text"> Better value option for same spec, but longer warranty with better price</p>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td>CPU family: Intel Core i7</td>
                        <td> Memory size: 16GB</td>
                      </tr>
                      <tr>
                        <td>Screen Size: 15.6 inches</td>
                        <td>Screen Rsoltion: 1920x1080 </td>
                      </tr>
                      <tr>
                        <td>SSD Capacity: 512 GB 3</td>
                        <td>HDD Capacity: N/A</td>
                      </tr>
                      <tr>
                        <td>GPU Model: Integrated Graphics</td>
                        <td>Operating System: Windows 10 Pro</td>
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
                  <h6 className="text-muted">$1,725.00</h6>
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

{/* Second card */}
      <div className="row mt-4">
        <div className="col-md-4">
          <Card>
            <Card.Img  src="path_to_image2.jpg" alt="Card image 2" />
          </Card>
        </div>
        <div className="col-md-8">
          <Card>
            <div className="row g-0">
              <div className="col-md-8">
                <Card.Body>
                  <h5 className="card-title">Laptop 2</h5>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td>CPU family: Intel Core i7</td>
                        <td> Memory size: 16GB</td>
                      </tr>
                      <tr>
                        <td>Screen Size: 15.6 inches</td>
                        <td>Screen Rsoltion: 1920x1080 </td>
                      </tr>
                      <tr>
                        <td>SSD Capacity: 512 GB 3</td>
                        <td>HDD Capacity: N/A</td>
                      </tr>
                      <tr>
                        <td>GPU Model: Integrated Graphics</td>
                        <td>Operating System: Windows 10 Pro</td>
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
                  <h6 className="text-muted">$1,476.37</h6>
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


    </div>
  );
}

export default Page1;


