import { createSelector } from "reselect";

const selectCart = state => state.cart ;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);


export const selectCartItemsCount = 
  createSelector([selectCartItems],
    (items => items.reduce((acumulator,item) => 
    acumulator + item.quantity, 0)));

export const selectCartTotal = createSelector([selectCartItems],(items)=>
  (items.reduce((acumulator,item)=>
    (acumulator+(item.quantity*item.price)),0)));