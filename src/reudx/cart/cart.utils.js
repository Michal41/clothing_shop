 export const additemToCart = (cartItems,cartItemToAdd) => {

  const existingCardItem = cartItems.find( item => item.id==cartItemToAdd.id)
  if (existingCardItem){
    return cartItems.map(item => item.id==cartItemToAdd.id ? 
      {...item, quantity:item.quantity+1}: item );
   }

   return [...cartItems, {...cartItemToAdd, quantity:1}];

 }