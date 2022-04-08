import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shoping Basket</h2>

          {/* {Basket Item} */}
          {/* {Basket Item} */}
          {/* {Basket Item} */}
          {/* {Basket Item} */}
          {/* {Basket Item} */}
        </div>
      </div>
      <div className="checkout__right">
        <h2>The Sub total will go here</h2>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
