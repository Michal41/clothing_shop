
import React from "react";

import CustomButton from "../../custom-button/custom-button"
import "./cart-dropdown.styles.scss";

import CartItem from "../../cart-item/cart-item.component"

import { connect } from "react-redux";

import {selectCartItems} from "../../../reudx/cart/cart-selector"


const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
    {cartItems.map(item => (<CartItem key={item.id} item={item} />))}
    </div>
    <CustomButton>Go To Checkout</CustomButton>
    
  </div>
)


const mapStateToProps = (state) => ({
  cartItems : selectCartItems(state)
});


export default connect(mapStateToProps)(CartDropdown)