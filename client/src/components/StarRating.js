import React from "react";
import classnames from "classnames";

const starClass = (n, s) => {
  if (n - s > 0) {
    if (Math.floor(n) - s > 0) {
      return "fas fa-star";
    } else {
      return "fas fa-star-half-alt";
    }
  } else {
    return "far fa-star";
  }
};

const StarRating = ({ number }) => (
  <div className="star-rating">
    <span className="icon has-text-info">
      <i className={starClass(number, 0)} />
    </span>
    <span className="icon has-text-info">
      <i className={starClass(number, 1)} />
    </span>
    <span className="icon has-text-info">
      <i className={starClass(number, 2)} />
    </span>
    <span className="icon has-text-info">
      <i className={starClass(number, 3)} />
    </span>
    <span className="icon has-text-info">
      <i className={starClass(number, 4)} />
    </span>
  </div>
);

export default StarRating;
