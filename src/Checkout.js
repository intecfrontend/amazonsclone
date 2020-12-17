import React from "react";
import { useStateValue } from "./StateProvider";
import thead from "./imgs/Amazad.png";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={thead} alt="the ad on top" />
        {basket?.length === 0 ? (
          <div className="checkout__container">
            <h2 className="checkout__title">Your Shopping Basket is empty</h2>
          </div>
        ) : (
          <div className="checkout__container">
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map(item => {
              console.log("item : " + item);
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal/>
        </div>
      )}
    </div>
  );
}

export default Checkout;
