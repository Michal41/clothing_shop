import { createSelector } from "reselect";

const selectcUser = state => state.user ;

const selectCart = state => state.cart;

export const selectCartHidden = createSelector([selectCart],(cart => cart.hidden ));

export const selectCurentUser = createSelector([selectcUser], (user) => user.currentUser);

