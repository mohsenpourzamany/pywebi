import React from "react";
import OwlCarousel from "react-owl-carousel";
const Testimonial = () => {
  return (
    <div className="container-fluid pb-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-4 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
          <h1 className="mb-0">
            What Our Clients Say About Our Digital Services
          </h1>
        </div>
        {/* <OwlCarousel className="owl-theme" loop margin={3} nav> */}
        <OwlCarousel
          className="owl-carousel owl-theme testimonial-carousel wow fadeInUp"
          data-wow-delay="0.6s"
          loop
          margin={10}
          nav
        >
          <div className="testimonial-item bg-light my-4">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img
                className="img-fluid rounded"
                src="src/assets/img/testimonial-1.jpg"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Client Name</h4>
                <small className="text-uppercase">Profession</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </div>
          </div>
          <div className="testimonial-item bg-light my-4 active">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img
                className="img-fluid rounded"
                src="src/assets/img/testimonial-2.jpg"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Client Name</h4>
                <small className="text-uppercase">Profession</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </div>
          </div>
          <div className="testimonial-item bg-light my-4">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img
                className="img-fluid rounded"
                src="src/assets/img/testimonial-3.jpg"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Client Name</h4>
                <small className="text-uppercase">Profession</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </div>
          </div>
          <div className="testimonial-item bg-light my-4">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img
                className="img-fluid rounded"
                src="src/assets/img/testimonial-4.jpg"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Client Name</h4>
                <small className="text-uppercase">Profession</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </div>
          </div>
        </OwlCarousel>
        {/* </OwlCarousel> */}
      </div>
    </div>
  );
};

export default Testimonial;
