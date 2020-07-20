import React from "react";
import Slider from "./Slider/Slider";
import "./Shop/MainShop.css";
import CategoryList from './Shop/CategoryList'
import ShopItem from "./Shop/ShopItem";
import ShopCart from "./Shop/ShopCart";
import { ProductConsumer } from "./context";
import NotiCart from './Shop/NotiCart'
export default function MainShop({match}) {

  return (
    <>
      <NotiCart/>
      <Slider />
      <CategoryList active={match.params.category}/>
      <div className="item-container">
        <ul>
          <ProductConsumer>
            {(value) => {
              if(match.params.category==undefined||match.params.category==""){
                return value.products.map((product) => {
                  return <ShopItem key={product.id} product={product} handleAdd={value.addToCart}/>;
                });
              }else
              return value.products.map((product) => {
                if(product.category==match.params.category.toLowerCase())
                return <ShopItem key={product.id} product={product} handleAdd={value.addToCart}/>;
              });
            }}
          </ProductConsumer>
        </ul>
      </div>
      <ShopCart />
    </>
  );
}
