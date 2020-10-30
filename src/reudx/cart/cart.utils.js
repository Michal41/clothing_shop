import CartItem from "../../components/cart-item/cart-item.component";

 export const additemToCart = (cartItems,cartItemToAdd) => {

  const existingCardItem = cartItems.find( item => item.id==cartItemToAdd.id)
  if (existingCardItem){
    return cartItems.map(item => item.id==cartItemToAdd.id ? 
      {...item, quantity:item.quantity+1}: item );
   }

   return [...cartItems, {...cartItemToAdd, quantity:1}];

 }



export const decreaseItemQuantity = (cartItems,itemToDecrease) => {
  if(itemToDecrease.quantity==1){
    return cartItems.filter(cartItem => cartItem.id!=itemToDecrease.id)
  }
  
  return cartItems.map(
    cartItem => cartItem.id==itemToDecrease.id ?
    {...cartItem, quantity:cartItem.quantity-1} : cartItem
  )
 }