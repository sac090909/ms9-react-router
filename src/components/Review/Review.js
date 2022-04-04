import React from "react";

const Review = (props) => {
  const { name, post, rating } = props.review;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Review: {post}</p>
      <p>Rating: {rating}</p>
      <hr />
    </div>
  );
};

export default Review;
