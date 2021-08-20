import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0)

    let shipping = 0;
    if (total > 15) {
        shipping = 4.99;
    } else if (total > 0) {
        shipping = 0;
    }
    const tax = (total / 20).toFixed(2);
    const finalTotal = Math.round(total + shipping + Number(tax));
    const pro = Math.round(total)
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Shipping : {shipping}</small></p>
            <p><small>Product price: {pro}</small></p>
            <p><small>Tax: {(tax)}</small></p>
            <p> Order Total: {finalTotal}</p>
        </div>
    );
};

export default Cart;