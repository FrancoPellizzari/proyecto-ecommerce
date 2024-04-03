import React from "react";
import "./ProductCard.css"
//import  useCart  from "../../hooks/useCart";


const ProductCard =({product}) => {
    const {id, title, price, description, image, rating} = product;
    //const { addToCart } = useCart();

    return(
        <div className="product-card" key={id}>
            <img src={image} alt={title} className="product-image" />
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-description">{description}</p>
                <p className="product-price">{`$${price}`}</p>
            </div>
            <button >
            Agregar al carrito
        </button>
        </div>
        
    );
};


export default ProductCard;

//<button className="product-add-to-cart" onClick={() => addToCart(product)}>


