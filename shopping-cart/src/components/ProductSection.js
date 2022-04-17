import React from "react";

function ProductSection({ availableProducts, onClickAddToCart }) {


  const showProducts=(product)=> {
    if(product.inventory===0) 
    return <button disabled={true}>Out of Stock</button>
    else 
    return  <button onClick={()=>onClickAddToCart(product.id)}>Add to cart</button>

  }


  return (
    <React.Fragment>
      <h3>Products</h3>
      {availableProducts.map((product) => (
        <div style={{marginBottom:'8px'}}>
          <div style={{marginBottom:'8px'}}>
            {product.title} - {product.price} x {product.inventory}
          </div>

          {showProducts(product)}
        </div>
      ))}
    </React.Fragment>
  );
}

export default ProductSection;
