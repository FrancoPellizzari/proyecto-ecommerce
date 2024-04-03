import React from "react";
import userIcon from "../../icons/userIcon.png"
import likeIcon from "../../icons/likeIcon.png"
import cartIcon from "../../icons/cartIcon.png"
import themeIcon from "../../icons/themeIcon.png"

import "./IconList.css"
import  useCart  from "../../hooks/useCart";
import  useTheme  from "../../hooks/useTheme";

function IconsList( onClickCartIcon ){
    const whiteIconStyle = {filter: "invert(100%)"};
    const {cartItems} = useCart();
    const {toggleTheme} = useTheme();
    const cartIconCount = cartItems.length;

    return(
        <ul className="user-icons">
            <li className="user-icon">
                <img src={userIcon} alt="" style={whiteIconStyle}/>
            </li>
            <li className="user-icon">
                <img src={likeIcon} alt="" style={whiteIconStyle}/>
            </li>
            
            <li className="user-icon" onClick={() => toggleTheme()}>
                <img src={themeIcon} alt="" style={whiteIconStyle}/>
            </li>
            <li className="user-icon" onClick={onClickCartIcon}>
                <img src={cartIcon} alt=""  style={whiteIconStyle}/>
                {cartIconCount > 0 && (
                    <span className="cart-count">{cartIconCount}</span>
                )}
            </li>




        </ul>


    );



}

export default IconsList;