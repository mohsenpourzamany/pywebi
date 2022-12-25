import React from 'react'
import { Link } from 'react-router-dom'
import Blog from '../pages/Blog'
import CarouselPage from '../header/CarouselPage'

const BlogGridPage = () => {
  return (
    <>
    <CarouselPage />
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
            <div className="col-lg-8">
                <Blog />
                </div>
                <div className="col-lg-4">
                    
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div className="input-group">
                            <input type="text" className="form-control p-3" placeholder="Keyword" />
                            <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                    
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="mb-0">Categories</h3>
                        </div>
                        <div className="link-animated d-flex flex-column justify-content-start">
                            <Link className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" to="#"><i className="bi bi-arrow-right me-2"></i>Web Design</Link>
                            <Link className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" to="#"><i className="bi bi-arrow-right me-2"></i>Web Development</Link>
                            <Link className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" to="#"><i className="bi bi-arrow-right me-2"></i>Web Development</Link>
                            <Link className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" to="#"><i className="bi bi-arrow-right me-2"></i>Keyword Research</Link>
                            <Link className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" to="#"><i className="bi bi-arrow-right me-2"></i>Email Marketing</Link>
                        </div>
                    </div>
                    
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="mb-0">Recent Post</h3>
                        </div>
                        <div className="d-flex rounded overflow-hidden mb-3">
                            <img className="img-fluid" src="src/assets/img/blog-1.jpg" style={{width: "100px", height: "100px", objectFit: "cover"}} alt=""/>
                            <Link to="" className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </Link>
                        </div>
                        <div className="d-flex rounded overflow-hidden mb-3">
                            <img className="img-fluid" src="src/assets/img/blog-2.jpg" style={{width: "100px", height: "100px", objectFit: "cover"}} alt=""/>
                            <Link to="" className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </Link>
                        </div>
                        <div className="d-flex rounded overflow-hidden mb-3">
                            <img className="img-fluid" src="src/assets/img/blog-3.jpg" style={{width: "100px", height: "100px", objectFit: "cover"}} alt=""/>
                            <Link to="" className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </Link>
                        </div>
                        <div className="d-flex rounded overflow-hidden mb-3">
                            <img className="img-fluid" src="src/assets/img/blog-1.jpg" style={{width: "100px", height: "100px", objectFit: "cover"}} alt=""/>
                            <Link to="" className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </Link>
                        </div>
                        <div className="d-flex rounded overflow-hidden mb-3">
                            <img className="img-fluid" src="src/assets/img/blog-2.jpg" style={{width: "100px", height: "100px", objectFit: "cover"}} alt=""/>
                            <Link to="" className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </Link>
                        </div>
                        <div className="d-flex rounded overflow-hidden mb-3">
                            <img className="img-fluid" src="src/assets/img/blog-3.jpg" style={{width: "100px", height: "100px", objectFit: "cover"}} alt=""/>
                            <Link to="" className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </Link>
                        </div>
                    </div>
                    
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <img src="img/blog-1.jpg" alt="" className="img-fluid rounded"/>
                    </div>
                    
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="mb-0">Tag Cloud</h3>
                        </div>
                        <div className="d-flex flex-wrap m-n1">
                            <Link to="" className="btn btn-light m-1">Design</Link>
                            <Link to="" className="btn btn-light m-1">Development</Link>
                            <Link to="" className="btn btn-light m-1">Marketing</Link>
                            <Link to="" className="btn btn-light m-1">SEO</Link>
                            <Link to="" className="btn btn-light m-1">Writing</Link>
                            <Link to="" className="btn btn-light m-1">Consulting</Link>
                            <Link to="" className="btn btn-light m-1">Design</Link>
                            <Link to="" className="btn btn-light m-1">Development</Link>
                            <Link to="" className="btn btn-light m-1">Marketing</Link>
                            <Link to="" className="btn btn-light m-1">SEO</Link>
                            <Link to="" className="btn btn-light m-1">Writing</Link>
                            <Link to="" className="btn btn-light m-1">Consulting</Link>
                        </div>
                    </div>
                   
    
                    
                    <div className="wow slideInUp" data-wow-delay="0.1s">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="mb-0">Plain Text</h3>
                        </div>
                        <div className="bg-light text-center" style={{padding: "30px"}}>
                            <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                            <Link to="" className="btn btn-primary py-2 px-4">Read More</Link>
                        </div>
                    </div>
                    
                </div>
                <div className="col-12 wow slideInUp" pt-5 style={{textAlign : 'center'}} data-wow-delay="0.1s">
                            <nav aria-label="Page navigation">
                              <ul className="pagination pagination-lg m-0">
                                <li className="page-item disabled">
                                  <Link className="page-link rounded-0" to="#" aria-label="Previous">
                                    <span aria-hidden="true"><i className="bi bi-arrow-left"></i></span>
                                  </Link>
                                </li>
                                <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item">
                                  <Link className="page-link rounded-0" to="#" aria-label="Next">
                                    <span aria-hidden="true"><i className="bi bi-arrow-right"></i></span>
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                        </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogGridPage