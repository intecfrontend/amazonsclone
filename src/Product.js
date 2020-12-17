import React from "react";
import "./Product.css";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating, imgSize }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
      // Add item to basket
    });
  };
  return (
    <div id="conty" className={imgSize}>
      <div className="product">
        <div className="product__info">
          <p className="product__title">{title}</p>

          <p className="product__price">
            <small>€</small>
            <strong>{price}</strong>
          </p>

          <div className="product__rating">
            {Array(rating)
              .fill()
              .map(_ => (
                <span className="product__ratingStar">&#11088;</span>
              ))}
          </div>
        </div>
        
        <div className="product__imageWrapper">
          <img className="product__image" src={image} alt={image} />
        </div>

        <div>
          <Button onClick={addToBasket} className="product__button">
            Add to basket
          </Button>
        </div>

      </div>
    </div>
  );
}

export default Product;
