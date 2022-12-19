import React, { useState } from "react";

const Qoute = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const validate = () => {
    if (email === "") {
      setErrorMessage("email is empty");
      return false;
    } else if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("email empty");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const textClick = () => {
    const validateResult = validate();
    if (validateResult) {
      setErrorMessage("");
    }
  };

  const nameHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(event.target.value);
  };
  const emailHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };
  const textAreaHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };
  return (
    <div className="container-fluid pb-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">
                Request A Quote
              </h5>
              <h1 className="mb-0">
                Need A Free Quote? Please Feel Free to Contact Us
              </h1>
            </div>
            <div className="row gx-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 className="mb-4">
                  <i className="fa fa-reply text-primary me-3"></i>Reply within
                  24 hours
                </h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 className="mb-4">
                  <i className="fa fa-phone-alt text-primary me-3"></i>24 hrs
                  telephone support
                </h5>
              </div>
            </div>
            <p className="mb-4">
              Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
              ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
              rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
              et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit.
              Sea dolore sanctus sed et. Takimata takimata sanctus sed.
            </p>
            <div
              className="d-flex align-items-center mt-2 wow zoomIn"
              data-wow-delay="0.6s"
            >
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-phone-alt text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Call to ask any question</h5>
                <h4 className="text-primary mb-0">+012 345 6789</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn"
              data-wow-delay="0.9s"
            >
              <form>
                <div className="row g-3">
                  <div className="col-xl-12">
                    <input
                      type="text"
                      value={name}
                      className="form-control bg-light border-0"
                      onChange={nameHandler}
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control bg-light border-0"
                      onChange={emailHandler}
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <select
                      className="form-select bg-light border-0"
                      value={1}
                      style={{ height: "55px" }}
                    >
                      <option>Select A Service</option>
                      <option value="1">Service 1</option>
                      <option value="2">Service 2</option>
                      <option value="3">Service 3</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control bg-light border-0"
                      onChange={textAreaHandler}
                      rows={3}
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-dark w-100 py-3"
                      onClick={textClick}
                      type="submit"
                    >
                      Request A Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qoute;
