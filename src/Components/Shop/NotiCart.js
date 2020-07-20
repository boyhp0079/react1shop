import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductConsumer } from "../context";
export default function NotiCart() {
  return (
    <div className="notify-container">
      <ProductConsumer>
        {(value) => {
          return value.notifies.map((noti) => {
            return (
              <div className="notify-cart">
                <p>Hey You Add {noti.name} to the cart!</p>
                <button className="remove-cart-btn">
                  <FontAwesomeIcon size="2x" icon="times" />
                </button>
              </div>
            );
          });
        }}
      </ProductConsumer>
    </div>
  );
}
