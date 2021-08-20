import React, { useState } from 'react';
import {  } from "./Shop.css";
import fakeData, {  } from "../../fakeData";
import Product from '../Product/Product';
import Cart from '../cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        const added = [...cart, product];
        setCart(added)
    } 

    return (
        <div className ="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product
                        handleAddProduct = {handleAddProduct}
                        product = {pd}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>            
        </div>
    );
};

export default Shop;