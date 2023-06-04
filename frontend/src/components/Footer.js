import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faLaptop,
  faMicrochip,
  faTv,
  faGamepad,
  faKey,
  faPlus,
  faPrint
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div class="my-5 mb-0">
        <footer class="text-white text-center text-lg-start bg-dark">
          <div class="p-4">
            <div class="row mt-4">
              {/* //part 1 */}
              <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h6 class="text-uppercase mb-4">Shop by DEPARTAMENT</h6>
                <ul class="">

                  <li class="mb-3">
                    <FontAwesomeIcon icon={faLaptop} />
                    <i className="fas fa-laptop"></i>
                    <span class="ms-2">Computer & Tablets</span>
                  </li>

                  <li class="mb-3">
                   <FontAwesomeIcon icon={faMicrochip} />
                    <i className="fas fa-microchip"></i>
                    <span class="ms-2">PC Parts</span>
                  </li>
                  
                  <li class="mb-3">
                    <FontAwesomeIcon icon={faPrint} />
                    <i className="fas fa-print"></i>
                    <span class="ms-2">Printing & Office</span>
                  </li>

                  <li class="mb-3">
                    <FontAwesomeIcon icon={faTv} />
                    <i className="fas fa-tv"></i>
                    <span class="ms-2">TV & AV</span>
                  </li>

                  <li class="mb-3">
                    <FontAwesomeIcon icon={faGamepad} />
                    <i className="fas fa-gamepad"></i>
                    <span class="ms-2">Gaming</span>
                  </li>

                  <li class="mb-3">
                    <FontAwesomeIcon icon={faKey} />
                    <i className="fas fa-key"></i>
                    <span class="ms-2">Smart Home & Security</span>
                  </li>

                  <li class="mb-3">
                    <FontAwesomeIcon icon={faPlus} />
                    <i className="fas fa-plus"></i>
                    <span class="ms-2">More</span>
                  </li>

                  <li class="mb-3">
                    <FontAwesomeIcon icon={faApple} />
                    <i className="fas fa-apple"></i>
                    <span class="ms-2">Apple</span>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-6 mb-4 mb-md-0 mt-5">
                <ul>
                  <li class="mb-3">
                    <span class="ms-2">PC Peripherals & Acessories</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Networking</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Phones & Acessories</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Headphones & Acessories</span>
                  </li>
                  <li class="mb-3">
                    <span class="fa-li">
                      <i class="fas fa-phone"></i>
                    </span>
                    <span class="ms-2">Camera & Drones</span>
                  </li>
                  <li class="mb-3">
                    <span class="fa-li">
                      <i class="fas fa-phone"></i>
                    </span>
                    <span class="ms-2">Toys, Hobbies & STEM</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Gift Ideas</span>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h6 class="text-uppercase mb-4">Company info</h6>

                <ul class="fa-ul">
                  <li class="mb-3">
                    <span class="ms-2">About us</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Business</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Education</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Wholesale</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Governament</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Education</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Health</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Stores</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Careers</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Contact Us</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">News</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Terms & Conditions</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Privary Policy</span>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h6 class="text-uppercase mb-4">Services & Support</h6>
                <ul class="fa-ul">
                  <li class="mb-3">
                    <span class="ms-2">Help</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Returns & Warranty</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Finance</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">IT Services</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Home Services</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Repair Services</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Job Tracker</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Services parts</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">System Builder</span>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h6 class="text-uppercase mb-4">Promotions & Offers</h6>
                <ul class="fa-ul">
                  <li class="mb-3">
                    <span class="ms-2">Promotions</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Clearance</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Hot Deals</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">New Arrivals</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">BYOD</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Tax Free Shopping</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Events</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">PB Insider</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">PB Advisor</span>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4">Opening hours</h5>
                <table class="table text-center text-white">
                  <tbody class="fw-normal">
                    <tr>
                      <td>Mon - Fri:</td>
                      <td>8am - 5.30pm</td>
                    </tr>
                    <tr>
                      <td>Saturday:</td>
                      <td>9am - 5pm</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 5pm</td>
                    </tr>
                  </tbody>
                </table>

                <h5 class="text-uppercase mb-4 pb-1">Contact Us</h5>
                <ul class="fa-ul">
                  <li class="mb-3">
                    <span class="ms-2">Address: Lorem, 00-00, Ipsum</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Email: lorem@ipsum.com</span>
                  </li>
                  <li class="mb-3">
                    <span class="ms-2">Phone: + 11 111 111 11</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="text-center pt-4 border-top">
              © {year} Copyright:
              <a class="text-white " href="https://mdbootstrap.com/">
                {" "}
              </a>
              <div class="">
                {/* <a type="button" class="btn btn-floating btn-light btn-md me-1">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>

                  <a type="button" class="btn btn-floating btn-light btn-md me-1">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>

                  <a type="button" class="btn btn-floating btn-light btn-md me-1">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>

                  <a type="button" class="btn btn-floating btn-light btn-md">
                    <FontAwesomeIcon icon={faTelegram} />
                  </a> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
