const cart = [];


export const addProductToCart = (productId, productQty) => {

    let matchingItem; 
    
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    if (matchingItem) {
      matchingItem.quantity += productQty;
  
    } else {
      cart.push({
        productId,
        quantity: productQty
      });
    }
  
  }

  