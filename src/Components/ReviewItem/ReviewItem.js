import React from "react";

const ReviewItem = (props) => {
  const { name, seller, price, quantity, key } = props.product;
  const { handelCart } = props;
  return (
    <div className="product">
      <div className="product-details">
        <h1>{name}</h1>
        <p>
          <small>by:{seller}</small>
        </p>
        <p>quantity:{quantity}</p>
        <p>Price:{price}</p>
        <button className="btn-regular" onClick={() => handelCart(key)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
