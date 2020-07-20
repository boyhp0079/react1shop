import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconCount from "./IconCount";
export default function CartIcon({ openCart }) {
  return (
    <div
      className="cart-icon"
      onClick={() => {
        openCart();
      }}
    >
      <IconCount />
      <FontAwesomeIcon icon="shopping-cart" size="2x" />
    </div>
  );
}
