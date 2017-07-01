import React from "react";
import types from "prop-types";
import cx from "classnames";

const BlogItem = ({
  image = "https://source.unsplash.com/random/800x600",
  content,
  title,
  createdAt,
  color,
  view
}) => {
  return (
    <div className={cx({ card: true, "blog-item": true, [color]: !!color })}>
      <div className="card-image">
        <div
          className="image"
          style={{
            backgroundImage: `url("${image}")`
          }}
        />
      </div>
      <div className="card-content flex-cols">
        <div className="media">
          <p className="title is-4 is-bold">{title}</p>
        </div>
        <div className="content grow">
         {content}
        </div>
        <div className="blog-item_footer">
          <small className="date">
            <i className="material-icons">access_time</i>
            <span>
              {createdAt}
            </span>
          </small>
          <small className="views">
            <i className="material-icons">remove_red_eye</i>
            {view}
          </small>
        </div>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  image: types.string.isRequired,
  conent: types.string.isRequired,
  title: types.string.isRequired,
  createdAt: types.string,
  color: types.string,
  view: types.string
};

export default BlogItem;
