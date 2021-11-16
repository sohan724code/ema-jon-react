import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const cart = props.cart
    // console.log(cart);
    let total= 0;
    let totalQuantity = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1
        }
        total+= product.price * product.quantity
        totalQuantity+= product.quantity
        
        
    }
    const shiping = total>0? 5 : 0;
    const tax = (total+shiping) * .10
    let orderTotal= total+ tax
 
    return (
        <div>
            <h2>Order Summary </h2>
            <h2>Item Orederd: {totalQuantity}</h2>
            <p>Item:{total.toFixed(2)}</p>
            <p>Shiping & Handling: {shiping}</p>
            <p>Total before Tax: {total.toFixed(2)}</p>
            <p>Estimate Tax: {tax.toFixed(2)}</p>
            <h2>Order Total: {orderTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;