import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const element = <FontAwesomeIcon icon={faShoppingCart} />

const Product = (props) => {
    // console.log(props);
    const{img, name, seller, price, stock, star} = props.product
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            
            <div className="product-details">
                <h1>{name}</h1>
                <p><small>by:{seller}</small></p>

                <p>Price:{price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    readonly
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                />
                <br />
                <br />
                <button onClick= {()=>{
                    props.handelAddToCart(props.product)
                }}>{element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;