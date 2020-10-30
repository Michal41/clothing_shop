import CartActionTypes from "./cart.types"
import { additemToCart, decreaseItemQuantity } from "./cart.utils";


const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden:!state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return{
        ...state,
        cartItems: additemToCart(state.cartItems,action.payload)
      }
    case CartActionTypes.DECREASE_ITEM_QUANTITY:
      return{
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems,action.payload)
      }  
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return{
        ...state,
        cartItems: state.cartItems.filter(item=> item.id!= action.payload.id )
      }
    default:
      return state;
  }
} 


export default CartReducer;