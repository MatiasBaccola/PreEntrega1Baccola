import { useState } from "react";
import CartIcon from "./CartIcon"
import './CartIcon.css';


function CartWidget() {
    const [cartItems, setCartItems] =
    useState(3);

    return (
        <div className="cart__container">
            <CartIcon ancho={45} alto={45}/>
            <span>{cartItems}</span>
        </div>
    );
}

export default CartWidget;