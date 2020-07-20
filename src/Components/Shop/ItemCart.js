import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function ItemCart({product,handleRemove,setAmount}) {
    function handleInput(e){
        setAmount(product.id,e.target.value)
    }
    function handleCal(cal){
        cal ? setAmount(product.id,product.amount+1) : setAmount(product.id,product.amount-1)
    }
        return (
        <div className="item-cart">
            <div className="cart-item-image">
                <img src={product.img} width="70px" alt={product.name}/>
                <span className="tooltiptext">{product.name}</span>
            </div>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <div className="incdec">
                <button className="increment" onClick={()=>{handleCal(true)}}><FontAwesomeIcon size="1x" icon="chevron-up"/></button>
                <input type="number" onChange={handleInput} value={product.amount} min="1"/>
                <button className="decrement" onClick={()=>{handleCal(false)}}><FontAwesomeIcon size="1x" icon="chevron-down"/></button>
            </div>
            <button className="remove-cart-btn" onClick={()=>{handleRemove(product.id)}}><FontAwesomeIcon size="2x" icon="times"/></button>
        </div>
        )
        
    }