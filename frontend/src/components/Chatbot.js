import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div class="my-5 mb-0">
        <footer class="text-white text-center text-lg-start bg-dark">
          <div class="container p-4">
            <div class="row mt-4">
              <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4">About company</h5>

                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>

                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias.
                </p>

                <div class="mt-4">
                  <a type="button" class="btn btn-floating btn-light btn-md me-1">
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
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4 pb-1">Contact Us</h5>

                <ul class="fa-ul">
                  <li class="mb-3">
                    <span class="fa-li">
                      <i class="fas fa-home"></i>
                    </span>
                    <span class="ms-2">Address: Lorem, 00-00, Ipsum</span>
                  </li>
                  <li class="mb-3">
                    <span class="fa-li">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="ms-2">Email: lorem@ipsum.com</span>
                  </li>
                  <li class="mb-3">
                    <span class="fa-li">
                      <i class="fas fa-phone"></i>
                    </span>
                    <span class="ms-2">Phone: + 11 111 111 11</span>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
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
              </div>
            </div>
          </div>

          <div class="text-center p-3 border-top">
            © {year} Copyright:
            <a class="text-white " href="https://mdbootstrap.com/">
              {" "}
              Turners Auction
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;