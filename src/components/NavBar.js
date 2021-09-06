import React from "react";
import BrandImg from "../Assets/Brand.png";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center ">
        <nav class="navbar navbar-expand-lg text-align-center">
          <div class="container-fluid textDecoration">
            <button
              class="navbar-toggler navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                {" "}
                {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
                <i class="fas fa-bars"></i>
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item mt-2">
                  <Link
                    to="/home"
                    style={{ textDecoration: "none" }}
                    class="nav-link p-3"
                  >
                    <h6 className="text-dark">Home</h6>
                  </Link>
                </li>

                <li class="nav-item mt-2">
                  <Link
                    to="/about"
                    style={{ textDecoration: "none" }}
                    class="nav-link p-3"
                  >
                    <h6 className="text-dark">About</h6>
                  </Link>
                </li>

                <li class="nav-item mt-2">
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none" }}
                    class="nav-link p-3"
                  >
                    <h6 className="text-dark">Contact</h6>
                  </Link>
                </li>
                <li>
                  <Link class="navbar-brand" to="/">
                    <img
                      className="text-alignt-start"
                      src={BrandImg}
                      alt="brand_img"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
