import React from "react";
import { ProductConsumer } from "../Components/context";
import ItemCart from "../Components/Shop/ItemCart";
import BackBtn from "../Components/BackBtn";
export default function Cart() {
  return (
    <>
      <BackBtn/>
      <h1 className="title-cart">Cart</h1>
      <div className="cart-container">
        <ProductConsumer>
                {
                    value=>{
                        if(value.cart.length > 0)
                    {                  
                            return value.cart.map(product =>{ 
                                    return <ItemCart 
                                    key={product.id} 
                                    product={product} 
                                    handleRemove = {value.removeCart}
                                    setAmount = {value.setAmount} 
                                    />
                            })}
                        else
                            return  <h2 className="title-cart empty-title">Cart is Empty</h2>
                    }
                }
        </ProductConsumer>
      </div>
    </>
  );
}
