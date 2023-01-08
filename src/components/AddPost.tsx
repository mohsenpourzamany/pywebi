import React from 'react'

const AddPost = () => {
  return (
    <div>
        <form className="row g-3 addpost">
      <h1 className="h1">Submit Post</h1>
      <div className="col-md-4">
        <label htmlFor="validationServer01" className="form-label">
          title
        </label>
        <input
          type="text"
          className="form-control is-valid"
          id="validationServer01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationServer01" className="form-label">
          author
        </label>
        <input
          type="text"
          className="form-control is-valid"
          id="validationServer01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationServer01" className="form-label">
          date
        </label>
        <input
          type="date"
          className="form-control is-valid"
          id="validationServer01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationServer01" className="form-label">
          title2
        </label>
        <input
          type="text"
          className="form-control is-valid"
          id="validationServer01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationServer01" className="form-label">
          Describe
        </label>
        <textarea
          
          className="form-control is-valid"
          id="validationServer01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
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
        <button className="btn btn-primary" type="submit">
          Submit Post
        </button>
      </div>
    </form>
    </div>
  )
}

export default AddPost