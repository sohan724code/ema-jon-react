import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(()=>{
        fetch("/products.JSON")
        .then(res=> res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)
        })
        
    },[])

    useEffect(()=>{
        const savedCart = getStoredCart()
        const savedProducts= []
        for(const key in savedCart){
           if(products.length){
               const addedProduct = products.find((product)=> product.key === key)
               const quantity = savedCart[key]
               addedProduct.quantity = quantity
            //    console.log(key, addedProduct);
               savedProducts.push(addedProduct)
           }
        }
       setCart(savedProducts);
    },[products])
    
    const handelAddToCart = (product)=>{
        const newCart =[...cart, product]
        setCart(newCart)
        addToDb(product.key)
    }

    const handelSearch = (event)=> {
        const searchedText = event.target.value
        const matchedProducts = products.filter((product) => product.name.toLowerCase().includes(searchedText.toLowerCase()))
        setDisplayProducts(matchedProducts)
        // console.log(matchedProducts);
    }
    
    return (
        <div>
            <div className="search-section">
             <input onChange={handelSearch} type="text" placeholder="Search Products"/>
            </div>
            <div className="shop-section">
            <div className="product-section">
            {
                    displayProducts.map((product) => <Product
                    key ={product.key}
                    product={product}
                    handelAddToCart = {handelAddToCart}
                    ></Product>)
                }
               
            </div>
            <div className="cart-section">
                
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;