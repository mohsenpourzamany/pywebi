import React from "react";
import CountUp from "react-countup";

const Facts = () => {
  return (
    <div className="container-fluid facts py-5 pt-lg-0">
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
            <div
              className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: 150 }}
            >
              <div
                className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: 60, height: 60 }}
              >
                <i className="fa fa-users text-primary"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-white mb-0">Happy Clients</h5>
                <h1 className="text-white mb-0" data-toggle="counter-up">
                  <CountUp end={2000} duration={30} />
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
            <div
              className="bg-light shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: 150 }}
            >
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: 60, height: 60 }}
              >
                <i className="fa fa-check text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-primary mb-0">Projects Done</h5>
                <h1 className="mb-0" data-toggle="counter-up">
                  <CountUp end={2000} duration={30} />
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
            <div
              className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: 150 }}
            >
              <div
                className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: 60, height: 60 }}
              >
                <i className="fa fa-award text-primary"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-white mb-0">Win Awards</h5>
                <h1 className="text-white mb-0" data-toggle="counter-up">
                  <CountUp end={2000} duration={30} />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
