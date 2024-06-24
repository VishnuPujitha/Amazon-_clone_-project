 export const cart = [];//this variable can we used outside of cart
 export function addToCart(productId){
  let matchingItem;
  cart.forEach((cartItem)=>{
    if (productId === cartItem.productId){
      matchingItem =cartItem;

    }
  });
  if (matchingItem){
    matchingItem.quanity+=1;

  }
  else{
    cart.push({
      productId:productId,
      quantity:1
  });

  }

}