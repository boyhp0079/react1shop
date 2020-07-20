import React, { Component } from "react";
import "./App.css";
import './Components/FontAwsome'
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
import About from './Components/About'
import MainShop from './Components/MainShop'
import Nav from "./Components/Navbar"
import ItemDetail from './Components/Shop/ItemDetail'
import SimFooter from "./Components/SimFooter";
import {ProductProvider} from './Components/context'
class App extends Component {
  render() {
    return (
      <ProductProvider> 
      <BrowserRouter>
    <div className="App"> 
        <Nav/> 
        <Switch>
          <Route path="/about"  component={About}/>
          <Route path="/contact"  component={Contact}/>
          <Route path="/cart"  component={Cart}/>
          <Route path="/item/:id"  component={ItemDetail}/>
          <Route path="/:category"  component={MainShop}/>
          <Route path="/"  component={MainShop}/>
         </Switch>
         <SimFooter/>
    </div>
      </BrowserRouter>
      </ProductProvider>
    )
  }
}
export default App;
