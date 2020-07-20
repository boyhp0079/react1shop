import React from 'react'
import {ProductConsumer} from '../context'

export default function IconCount() {
    return (
    <ProductConsumer>
            {value => {
                const iconcountclass = value.cart.length > 0 ? "cart-counter" : "cart-counter display-none" 
                  const len = value.cart.reduce((p,c)=> p+c.amount,0)
                return <div className={iconcountclass}>{len}</div>

            }
          }
      </ProductConsumer>
    )
}
