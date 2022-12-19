import React from 'react'
import { Link } from 'react-router-dom'
import  '../css/style.css';

const TopMenu = () => {
  return (
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center " style= {{height : 45 }} >
                    <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
                    <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+012 345 6789</small>
                    <small className="text-light"><i className="fa fa-envelope-open me-2"></i>info@example.com</small>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end topMenu">
                <div className="d-inline-flex align-items-center" style={{height: 45}}>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="#"><i className="fab fa-twitter fw-normal"></i></Link>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="#"><i className="fab fa-facebook-f fw-normal"></i></Link>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="#"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="#"><i className="fab fa-instagram fw-normal"></i></Link>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" to=""><i className="fab fa-youtube fw-normal"></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopMenu