 export const cart = [{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2,//saving the data for checkout js
 },{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1
 }];//this variable can we used outside of cart
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