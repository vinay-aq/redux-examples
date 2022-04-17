import React from "react";

function CartSection({cartProducts, checkOutCart }) {
  let totalCosting = cartProducts.reduce((acc,curr)=> acc + curr.price*curr.purchasedQty ,0);


  
  
  const showCartProducts = ()=> {
    if(cartProducts.length===0) return   <em> Please add some products to cart</em>
    else {
   
      return cartProducts.map(prod => <div style={{marginBottom:'8px'}}>{prod.title} - {prod.price} x {prod.purchasedQty} </div> )
       
    }
  }

  return (
    <div>
      <h3>Your Cart</h3>
     {showCartProducts()}
    <div>Total: {totalCosting}</div>  
      <div>
        <button style={{ margin:'8px 0'}} onClick={checkOutCart}>Checkout</button>
      </div>
    </div>
  );
}

export default CartSection;
