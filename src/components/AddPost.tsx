import React from "react";
import { useAppDispatch, useAppSelector } from "../redux-t/app/Hooks";
import {
  GetPost,
  AddingPost,
} from "../redux-t/features/postblag/PostBlogSlice";

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
    <div>
      {DataPostBlog &&
        DataPostBlog.length !== 0 &&
        DataPostBlog.map((postData) => {
          return (
            <form className="row g-3 addpost">
              <h1 className="h1">Submit Post</h1>
              <div key={postData.id} className="col-md-4">
                <label htmlFor="validationServer01" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control is-valid"
                  id="validationServer01"
                  required
                  value={postData.title}
                />
              </div>
              <div className="col-md-4">
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
              <div className="col-md-4">
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
              <div className="col-md-4">
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
              <div className="col-md-4">
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
              <div className="col-md-8 ">
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
                  <div id="invalidCheck3Feedback" className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleClick}
                >
                  {"items"}
                </button>
              </div>
            </form>
          );
        })}
    </div>
  );
};

export default AddPost;
