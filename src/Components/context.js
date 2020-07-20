import React, { Component,createContext } from 'react'
import {storeProduct} from './data'
const ProductContext = createContext()

class ProductProvider extends Component {
    state ={
        products:storeProduct,
        cart:[],
        total:0,
        notifies: []
        }
    
    setAmount=(id,amount)=>{
        if(amount<1) amount=1
        const cart = [...this.state.cart]
        const item = this.getItem(id)
        item.amount = amount
        this.setState(()=>{return {cart:[...cart]},this.setTotal()})
    }
    getItem = id =>{
        const products = this.state.products.find(item=>item.id === id)
        return products
    } 
    handleDetail=()=>{
        console.log('hello from detail')
    }
    setTotal = () =>{
        console.log(this.state.cart)
        let total = 0
        this.state.cart.forEach(item=>{
            total += item.price*item.amount
        })
        this.setState({total:total})
    }
    addNotify = item =>{
        this.setState(prev=>{
            return {notifies:[...prev.notifies,item]}
        })

        setTimeout(() => {
            const list = [...this.state.notifies];
            const newList = list.filter(x=>x.id!==item.id)
            this.setState({notifies:[...newList]})
        }, 3000);
    }
    addCart = id =>{
        const cart = [...this.state.cart]
        const  item = cart.find(prod=>prod.id===id);
        if(item !== undefined) {
            item.amount+=1; 
            this.setState({cart:[...cart]},() => {
                this.addNotify(item)
                this.setTotal()})
            }
        else {
        let products = [...this.state.products]
        const index = products.indexOf(this.getItem(id))
        const temp = products[index];
        temp.amount=1;
        this.setState({cart:[...cart,temp]},()=>{
            this.addNotify(temp)
            this.setTotal()})
        }
        
    }
    removeItem = id =>{
        const cart = [...this.state.cart]
        const temp = cart.filter(x=>x.id!==id)
        this.setState({cart:[...temp]},()=>this.setTotal())
    }
    
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addCart,
                removeCart:this.removeItem,
                setAmount:this.setAmount,

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )

    }
}
const ProductConsumer = ProductContext.Consumer

export {ProductProvider,ProductConsumer}