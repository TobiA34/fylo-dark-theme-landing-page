import React from "react";
import collabImg from "../images/icon-collaboration.svg";
import phoneImg from "../images/icon-phone.svg";
import emailImg from "../images/icon-email.svg";
import locationImg from "../images/icon-location.svg";

import Logo from "../images/logo.svg"

function Footer() {
  return (
    <footer class="mt-300 text-light py-5">
      <div class="container mt-150  ">
        <div class="row d-flex gap-2 w-100">
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <img src={Logo} alt="" className="icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="col-12 col-md-6 col-lg-2 mb-4">
            <ul class="list-unstyled">
              <li class="d-flex align-items-center mb-3">
                <i class="fas fa-phone me-2"></i>
                <p class="mb-0">+1-543-123-4567</p>
              </li>
              <li class="d-flex align-items-center">
                <i class="fas fa-envelope me-2"></i>
                <p class="mb-0">example@fylo.com</p>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-6 col-lg-2 mb-4">
            <h5>Support</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="text-light">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" class="text-light">
                  Press
                </a>
              </li>
              <li>
                <a href="#" class="text-light">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-6 col-lg-2 mb-4">
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-light">
                  Terms{" "}
                </a>
              </li>
              <li>
                <a href="#" class="text-light">
                  Privacy{" "}
                </a>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-6 col-lg-2 mb-4">
            <h5>Follow Us</h5>
            <ul class="list-inline">
              <li class="list-inline-item">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </li>
              <li class="list-inline-item">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </li>
              <li class="list-inline-item">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </div>

        <div class="text-center mt-4">
          <p class="mb-0">&copy; 2024 Fylo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
