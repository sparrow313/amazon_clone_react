import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, image, title, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({
      type: "DELETE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="image__container">
        <img className="checkout__image" src={image} alt="" />
      </div>
      <div className="checkout__details">
        <div className="checkout__title">{title}</div>
        <div className="checkout__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </div>
        <div className="checkout__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>

        <button onClick={removeItem}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
