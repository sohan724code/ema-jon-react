import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = getStoredCart();
    const savedProducts = [];
    for (const key in savedCart) {
      if (products.length) {
        const addedProduct = products.find((product) => key === product.key);
        const quantity = savedCart[key];
        addedProduct.quantity = quantity;
        savedProducts.push(addedProduct);
      }
    }
    setCart(savedProducts);
  }, [products]);
  return [cart, setCart];
};
export default useCart;
