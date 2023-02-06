import React from "react";
import { Link } from "react-router-dom";
import CarouselPage from "./CarouselPage";
const Navbar = () => {
  return (
    <div>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav py-0">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="courses" className="nav-item nav-link disabled">
                Courses
              </Link>
              <Link to="projects" className="nav-item nav-link disabled">
                Our Projects
              </Link>
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Services
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="services" className="dropdown-item">
                    Services
                  </Link>
                  <Link to="pricing plan" className="dropdown-item  disabled">
                    Pricing Plan
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Blog
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="bloggrid" className="dropdown-item">
                    Blog Grid
                  </Link>
                  <Link to="blogdetail" className="dropdown-item">
                    Blog Detail
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  PyWebino
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="about" className="dropdown-item">
                    About
                  </Link>
                  <Link to="contact" className="dropdown-item">
                    Contact
                  </Link>
                  <Link to="features" className="dropdown-item">
                    Our features
                  </Link>
                  <Link to="team" className="dropdown-item">
                    Team Members
                  </Link>
                </div>
              </div>

              <Link to="profile" className="nav-item nav-link">
                Profile
              </Link>
            </div>
            <button
              type="button"
              className="btn text-primary ms-3"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fa fa-search" style={{ color: "#06A3DA" }}></i>
            </button>
            <Link
              to="signpage"
              className="btn btn-primary py-2 px-4 ms-3"
              style={{ backgroundColor: "#06A3DA" }}
            >
              Sign up / in
            </Link>
          </div>
          <Link to="index.html" className="navbar-brand p-0">
            <h1 className="m-0" style={{ color: "#06A3DA" }}>
              <i className="fa fa-user-tie me-2"></i>PyWebino
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
