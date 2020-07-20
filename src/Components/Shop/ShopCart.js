import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {ProductConsumer} from '../context'
import ItemCart from './ItemCart'
import CartTotal from './CartTotal'
import CartIcon from './CartIcon'
export default  class ShopCart extends React.Component {
    state={
        isCartOpen:false,
    }
    openCart= () =>{
        this.setState(prev=>{return {isCartOpen:!prev.isCartOpen}})
    }

    render(){
        const cartClass =  this.state.isCartOpen ?  "cart-item-container" : "cart-item-container cart-close"
        
        return (
        <div className="shop-cart">
        <CartIcon openCart = {this.openCart}/>
        <div className={cartClass}>
        <ProductConsumer >
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
            <CartTotal isCartOpen={this.state.isCartOpen}/>
        </div>
        
        )
    }
}
