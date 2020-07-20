import React from "react";
import { ProductConsumer } from "../context";
import "./ItemDetailStyle.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackBtn from '../BackBtn'
export default function ItemDetail({ match }) {
  return (
  <>
  <BackBtn/>
  <div className="item-detail-page">
      <ProductConsumer>
        
        {(value) => {
          const item1 = value.products.find(
            (item) => item.id == match.params.id
          );
          return (
            <>
              <img src={"/"+item1.img} alt={item1.name} />
              <div class="float-right-detail">
                <h2 className="item-detail-name">{item1.name}</h2>
                <p className="item-detail-price">
                  USD ${item1.price.toFixed(2)}
                </p>
                <p>
                  <b>Availablility:</b>In stock
                </p>
                <button className="add-to-cart-btn" onClick={()=>{value.addToCart(item1.id)}}>
                  <FontAwesomeIcon icon="shopping-cart" size="1x" />
                  {" "}
                  Add To Cart
                </button>
              </div>
            </>
          );
        }}
      </ProductConsumer>
    </div>
  </>
  
  );
}
