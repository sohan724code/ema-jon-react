import React from "react";
import { useHistory } from "react-router";
import { deleteFromDb, clearTheCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../hooks/useCart";
import useProduct from "../hooks/useProduct";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart] = useCart(products);
  let history = useHistory();
  const handelCart = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    deleteFromDb(key);
    setCart(newCart);
  };

  const handelClick = () => {
    history.push("/successfull");
    setCart([]);
    clearTheCart();
  };

  return (
    <div className="shop-section">
      <div className="product-section">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handelCart={handelCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-section">
        <Cart cart={cart}>
          <button className="btn-regular" onClick={handelClick}>
            place order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
