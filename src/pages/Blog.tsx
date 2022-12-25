import React from 'react'
import { Link } from 'react-router-dom' 
const Blog = () => {
  return (
    <div className="container-fluid pb-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
            <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
            <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
        </div>
        <div className="row g-5">
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                        <img className="img-fluid" src="src/assets/img/blog-1.jpg" alt="" />
                        <Link className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                    </div>
                    <div className="p-4">
                        <div className="d-flex mb-3">
                            <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                            <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                        </div>
                        <h4 className="mb-3">How to build a website</h4>
                        <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                        <Link className="text-uppercase" to="">Read More <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                        <img className="img-fluid" src="src/assets/img/blog-2.jpg" alt="" />
                        <Link className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                    </div>
                    <div className="p-4">
                        <div className="d-flex mb-3">
                            <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                            <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                        </div>
                        <h4 className="mb-3">How to build a website</h4>
                        <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                        <Link className="text-uppercase" to="">Read More <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                        <img className="img-fluid" src="src/assets/img/blog-3.jpg" alt="" />
                        <Link className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                    </div>
                    <div className="p-4">
                        <div className="d-flex mb-3">
                            <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                            <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                        </div>
                        <h4 className="mb-3">How to build a website</h4>
                        <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                        <Link className="text-uppercase" to="">Read More <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Blog