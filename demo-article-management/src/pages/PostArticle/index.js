import React, { Component } from "react";

const PostArticle = () => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="title">Article title</label>
          <input
            name="title"
            className="form-control"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            className="form-control"
            placeholder="Description"
            rows="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image Url</label>
          <input
            name="imageUrl"
            className="form-control"
            placeholder="Enter Image URL"
          />
        </div>
        <button type="button" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default PostArticle;
