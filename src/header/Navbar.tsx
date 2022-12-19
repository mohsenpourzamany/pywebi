import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav py-0">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="about" className="nav-item nav-link">About</Link>
                    <Link to="service" className="nav-item nav-link">Services</Link>
                    <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</Link>
                        <div className="dropdown-menu m-0">
                            <Link to="blog.html" className="dropdown-item">Blog Grid</Link>
                            <Link to="detail.html" className="dropdown-item">Blog Detail</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div className="dropdown-menu m-0">
                            <Link to="price.html" className="dropdown-item">Pricing Plan</Link>
                            <Link to="feature.html" className="dropdown-item">Our features</Link>
                            <Link to="team.html" className="dropdown-item">Team Members</Link>
                            <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                            <Link to="quote.html" className="dropdown-item">Free Quote</Link>
                        </div>
                    </div>
                    <Link to="contact.html" className="nav-item nav-link">Contact</Link>
                </div>
                <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                <Link to="https://htmlcodex.com/startup-company-website-template" className="btn btn-primary py-2 px-4 ms-3">Sign up</Link>
            </div>
            <Link to="index.html" className="navbar-brand p-0">
                <h1 className="m-0" style={{color : "#06A3DA"}}><i className="fa fa-user-tie me-2"></i>PyWebino</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
        </nav>
    </div>
    </div>
  )
}

export default Navbar