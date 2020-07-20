import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconCount from './Shop/IconCount'
const NavWrapper = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 15% 1rem 10%;

.logo {
letter-spacing: 3px;
}
.nav {
display: flex;
justify-content: space-around;
transform: all 0.3s ease 0s;
width: 40%;
}
.navlink {
list-style: none;
margin: 0;
font-size: 1.2em;
}

.navlink a:hover{
    color: rgb(253, 166, 180);
}
.burger {
    display: none;
    cursor:pointer;
}
.burger div{
    width: 35px;
    height: 5px;
    background-color: rgb(24, 24, 24);
    margin: 6px 0;
}
.navlink .cart-counter{
    float:left;
    height:2rem;
    width:2rem;

} 
@media screen and (max-width: 678px) {
    .burger {
    display: block;
    }
    .nav {
    z-index:100;
    transform:${({isOpen})=>isOpen ? 'translateX(0)' :'translateX(100%)'};
    margin: 0;
    background: #e9d564;
    position: fixed;
    right: 0;
    transition:transform 0.3s ease-in-out;
    top: 70px;
    width: 46%;
    height: calc(100% - 70px);
    flex-direction: column;
    padding: 0;
    justify-content: flex-start;
    }
    .navlink {
    text-align: center;
    display: block;
    margin: 4rem 0;
    }
}
`
export default function Navbar() {
    const [isOpen,setOpen] = useState(false);

    return (
        <NavWrapper isOpen={isOpen}>
            <h1 className="logo">{isOpen?'cool':'not'}</h1>
            <ul className="nav">
            <Link to="/"><li className="navlink">Home</li></Link>
            <Link to="/about"><li className="navlink">About</li></Link>
            <Link to="/contact"><li className="navlink">Contact</li></Link>
            <Link to="/cart"><li className="navlink">Cart{"  "}<IconCount/><FontAwesomeIcon icon="shopping-cart"/></li></Link>
            </ul>
            <div className="burger" onClick={()=>{setOpen(prev=> !prev)}}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </NavWrapper>
    )
}
