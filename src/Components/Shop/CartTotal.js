import React from 'react'
import {ProductConsumer} from '../context'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
export default function CartTotal({isCartOpen}) {
    return (
        <ProductConsumer>
            { 
            value=>{
                return (
                <div className="total-cart" style={{display:isCartOpen ? "": "none"}}>
                    <span className="cart-amount">There are {value.cart.length} items in the cart</span>
                    <span className="cart-price"><strong>Total Price: </strong>{value.total}</span>
                    {value.cart.length > 0 && 
                    <button className="check-out-btn">
                    <Link to="/cart">
                        Check Out{" "}<FontAwesomeIcon icon="arrow-right"/>
                    </Link>
                    </button>
                    }
                </div>)}
            }
        </ProductConsumer>
    )
}
