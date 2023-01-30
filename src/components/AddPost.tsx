import React from "react";
import { useAppDispatch, useAppSelector } from "../redux-t/app/Hooks";
import {
  GetPost,
  AddingPost,
} from "../redux-t/features/postblag/PostBlogSlice";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export const DataPostBlog = [
  {
    id: 1,
    title: "title",
    image: "image",
    author: "author",
    postDate: "postDate",
    title2: "title2",
    describe: "describe",
  },
];

const AddPost = () => {
  const items = useAppSelector((state) => state.PostBlog.items);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(GetPost());
    dispatch(AddingPost());
  };

  return (
    <>
      <div>
        {DataPostBlog &&
          DataPostBlog.length !== 0 &&
          DataPostBlog.map((postData) => {
            return (
              <form className="row g-3 addpost">
                <h1 className="h1">Submit Post</h1>
                <div key={postData.id} className="col-md-6">
                  <label htmlFor="validationServer01" className="form-label">
                    Title
                  </label>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="info"
                      className="dropdown-post"
                      id="dropdown-basic"
                    >
                      Choice your Title
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Python</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">React js</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        React Native
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Web Development
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        App Development
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Artificial Intelegence
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <DropdownButton
                    id="dropdown-basic-button"
                    variant="info"
                    title="title"
                    className="dropdown-post"
                  >
                    <Dropdown.Item href="#/action-1">
                      Web Development
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      App Development
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Artificial Intelegence
                    </Dropdown.Item>
                  </DropdownButton> */}
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationServer01" className="form-label">
                    Author
                  </label>
                  <input
                    type="text"
                    className="form-control is-valid"
                    id="validationServer01"
                    required
                    value={postData.author}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationServer01" className="form-label">
                    Date
                  </label>
                  <input
                    type="text"
                    className="form-control is-valid"
                    id="validationServer01"
                    required
                    value={postData.postDate}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationServer01" className="form-label">
                    Summary of field
                  </label>
                  <input
                    type="text"
                    className="form-control is-valid"
                    id="validationServer01"
                    required
                    value={postData.title2}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationServer01" className="form-label">
                    Describtion
                  </label>
                  <textarea
                    className="form-control is-valid"
                    id="validationServer01"
                    required
                    value={postData.describe}
                  />
                </div>
                <div className="col-md-12 ">
                  <label htmlFor="validationServer01" className="form-label">
                    Photo
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    aria-label="file example"
                    required
                    // value={postData.image}
                    // onChange={photoHandler}
                  />
                  <div className="invalid-feedback">
                    Example invalid form file feedback
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck3"
                      aria-describedby="invalidCheck3Feedback"
                      required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck3">
                      Agree to terms and conditions
                    </label>
                    <div
                      id="invalidCheck3Feedback"
                      className="invalid-feedback"
                    >
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-info submit-post"
                    type="submit"
                    onClick={handleClick}
                  >
                    {"Submit"}
                  </button>
                </div>
              </form>
            );
          })}
      </div>
      <div className="row container-list-post">
        <div className="m-3">
          <h2>Your Post</h2>
        </div>

        <div col-md-6>
          <div className="d-flex rounded overflow-hidden mb-3">
            <img
              className="img-fluid"
              src="src/assets/img/blog-1.jpg"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
              alt=""
            />
            <Link
              to=""
              className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
            >
              Lorem ipsum dolor sit amet adipis elit
            </Link>
          </div>
        </div>
        <div col-md-6>
          <div className="d-flex rounded overflow-hidden mb-3">
            <img
              className="img-fluid"
              src="src/assets/img/blog-1.jpg"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
              alt=""
            />
            <Link
              to=""
              className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
            >
              Lorem ipsum dolor sit amet adipis elit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
