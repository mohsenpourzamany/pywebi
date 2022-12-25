import React from 'react'
import { Link } from 'react-router-dom'
const CarouselPage = () => {
  return (
    <div>
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100 imgpage" src="src/assets/img/carousel-3.jpeg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                            <h1 className="display-1 fontcarousel text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                            <Link to="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</Link>
                            <Link to="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100 imgpage"  src="src/assets/img/carousel-2.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: 900}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                            <h1 className="display-1 fontcarousel text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                            <Link to="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</Link>
                            <Link to="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
   
    <div className="modal fade" id="searchModal" tabIndex={-1}>
    <div className="modal-dialog modal-fullscreen">
        <div className="modal-content" style={{backgroundColor: 'black' }}>
            <div className="modal-header border-0">
                <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="input-group" style={{maxWidth: 600}}>
                    <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                    <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default CarouselPage