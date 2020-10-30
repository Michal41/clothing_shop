
import React from "react";

import CustomButton from "../../custom-button/custom-button"
import "./cart-dropdown.styles.scss";

import CartItem from "../../cart-item/cart-item.component"

import { connect } from "react-redux";

import {selectCartItems} from "../../../reudx/cart/cart-selector"
import {createStructuredSelector} from "reselect";
import { withRouter } from "react-router-dom";
import {toggleCartHidden} from "../../../reudx/cart/cart.actions";

const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
    {cartItems.length==0 ? (
      <span className="empty-message">
        Your cart is empty
      </span>):("")}

    {cartItems.map(item => (<CartItem key={item.id} item={item} />))}
    </div>
    <CustomButton onClick={()=> { history.push("/checkout"); toggleCartHidden(); }} >Go To Checkout</CustomButton>
    
  </div>
)


const mapStateToProps = createStructuredSelector ({
  cartItems : selectCartItems
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: cart => dispatch(toggleCartHidden(cart))
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));