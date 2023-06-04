import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Page1() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="path_to_image1.jpg" alt="Card image 1" />
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
                        <td>Row 2, Column 1</td>
                        <td>Row 2, Column 2</td>
                      </tr>
                      <tr>
                        <td>Row 3, Column 1</td>
                        <td>Row 3, Column 2</td>
                      </tr>
                      <tr>
                        <td>Row 4, Column 1</td>
                        <td>Row 4, Column 2</td>
                      </tr>
                      <tr>
                        <td>Row 5, Column 1</td>
                        <td>Row 5, Column 2</td>
                      </tr>
                      <tr>
                        <td>Row 6, Column 1</td>
                        <td>Row 6, Column 2</td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </div>
              <div className="col-md-4 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <h6 className="text-muted">$9.99</h6>
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

      <div className="row mt-4">
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="path_to_image2.jpg" alt="Card image 2" />
          </Card>
        </div>
        <div className="col-md-8">
          <Card>
            <div className="row g-0">
              <div className="col-md-8">
                <Card.Body>
                  <h5 className="card-title">Title 2</h5>
                  <p className="card-text">Small sentence</p>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td>Row 1, Column 1</td>
                        <td>Row 1, Column 2</td>
                      </tr>
                      <tr>
                        <td>Row 2, Column 1</td>
                        <td>Row 2, Column 2</td>
                      </tr>
                      <tr>
                        <td>Row 3, Column 1</td>
                        <td>Row 3, Column 2</td>
                      </tr>
                      <tr>
                        <td>Row 4, Column 1</td>
                        <td>Row 4, Column 2</td>
                      </tr>
                      <tr>
                        <td>Row 5, Column 1</td>
                        <td>Row 5, Column 2</td>
                      </tr>
                      <tr>
                        <td>Row 6, Column 1</td>
                        <td>Row 6, Column 2</td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </div>
              <div className="col-md-4 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <h6 className="text-muted">$14.99</h6>
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
