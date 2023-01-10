import React from "react";
import { DataPostBlog } from "../data/DataPostBlog";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container-fluid pb-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
          <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
        </div>
        <div className="row g-5">
          {DataPostBlog &&
            DataPostBlog.length !== 0 &&
            DataPostBlog.map((postData) => {
              return (
                <div
                  key={postData.id}
                  className="col-lg-4 col-md-6 wow slideInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={postData.image} alt="" />
                      <Link
                        className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                        to=""
                      >
                        {postData.title}
                      </Link>
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="far fa-user text-primary me-2"></i>
                          {postData.author}
                        </small>
                        <small>
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          {postData.postDate}
                        </small>
                      </div>
                      <h4 className="mb-3">{postData.title2}</h4>
                      <p>{postData.describ}</p>
                      <Link className="text-uppercase" to="">
                        Read More <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
