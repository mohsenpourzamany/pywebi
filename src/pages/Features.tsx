import React from 'react'

const Features = () => {
  return (
    <div className="container-fluid pb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600}}>
                <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: 60 , height: 60}}>
                                <i className="fa fa-cubes text-white"></i>
                            </div>
                            <h4>Best In Industry</h4>
                            <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: 60 , height: 60}}>
                                <i className="fa fa-award text-white"></i>
                            </div>
                            <h4>Award Winning</h4>
                            <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minHeight: 350}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="src/assets/img/feature.jpg" style={{objectFit: 'cover'}} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: 60 , height: 60}}>
                                <i className="fa fa-users-cog text-white"></i>
                            </div>
                            <h4>Professional Staff</h4>
                            <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: 60 , height: 60}}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <h4>24/7 Support</h4>
                            <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features