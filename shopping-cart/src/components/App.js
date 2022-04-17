import { useState } from "react";
import "./App.css";
import ProductSection from "./ProductSection";
import CartSection from "./CartSection";

function App() {
  let initiallAvailableProducts = [
    { id: 1, title: "iPad 4 Mini", price: 500, inventory: 2 },
    { id: 2, title: "H&M T-Shirt White", price: 10, inventory: 10 },
    { id: 3, title: "Charli XCX - Sucker CD", price: 20, inventory: 5 },
  ];
  let initialCartProducts = [];
  // {"id": 1, "title": "iPad 4 Mini", "price": 500, "purchasedQty": 2},

  let [availableProducts, setAvailableProducts] = useState(initiallAvailableProducts);
  let [cartProducts, setCartProducts] = useState(initialCartProducts);

  const reduceFromInventory = (id) => {
    let availableProductsCopy = availableProducts.map((product) =>
      product.id === id ? { ...product, inventory: product.inventory - 1 } : product
    );
    setAvailableProducts(availableProductsCopy);
  };

  const addToTheCart = (id) => {
    let product = availableProducts.find((prod) => prod.id === id);
    if (checkForTheProductInCart(id)) {
      console.log("Product found");
      let products = cartProducts.map((prod) =>
        prod.id === id ? { ...prod, purchasedQty: prod.purchasedQty + 1 } : prod
      );
      setCartProducts(products);
    } else {
      let productPurchased = { id: product.id, title: product.title, price: product.price, purchasedQty: 1 };
      setCartProducts([...cartProducts, productPurchased]);
    }
  };

  const checkForTheProductInCart = (id) => {
    return cartProducts.find((product) => product.id === id);
  };

  const handleAddCart = (id) => {
    console.log(id);
    reduceFromInventory(id);
    addToTheCart(id);
  };

  const checkOutCart = () => setCartProducts([]);

  return (
    <div className="App">
      <h1>Shopping Cart Example</h1>
      <hr />
      <ProductSection availableProducts={availableProducts} onClickAddToCart={handleAddCart} />
      <hr />
      <CartSection cartProducts={cartProducts} checkOutCart={checkOutCart} />
    </div>
  );
}

export default App;
