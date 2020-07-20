import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ShopItem({ product, handleAdd }) {
  return (
    <li>
        <div className="shop-item">
            <div className="item-name">
              <span>{product.name}</span>
              <span>${product.price}</span>
            </div>
            <img src={product.img} alt={product.name}/>
            <button className="add-cart-btn btn" onClick={() => handleAdd(product.id)}>
            <FontAwesomeIcon size="2x" icon="cart-plus" />
            </button>
            <Link to={`/item/${product.id}`}>
              <button className="detail-btn btn"><FontAwesomeIcon size="2x" icon="info-circle"/></button>
            </Link>
            
        </div>
    </li>
  );
}
