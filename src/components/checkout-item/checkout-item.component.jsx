import "./checkout-item.styles.scss"

import React from "react";
import { decreaseItemQuantity,clearItemFromCart } from "../../reudx/cart/cart.actions";
import {connect} from "react-redux";
import {addItem} from "../../reudx/cart/cart.actions";

const ChecoutItem = ({item,clearItem,addItem,clearItemFromCart,decreaseItemQuantity}) =>{
  const {name,imageUrl,price,quantity} = item;
  return(
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => decreaseItemQuantity(item)}>&#10094;</div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => addItem(item)} >&#10095;</div>
    </span>
    <span className="price">{price}</span>
    
    <div className="remove-button" onClick={() => clearItem(item)}>&#10005;</div>
  </div>
)}
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  decreaseItemQuantity: item => dispatch(decreaseItemQuantity(item))
});




export default connect(null,mapDispatchToProps)(ChecoutItem);