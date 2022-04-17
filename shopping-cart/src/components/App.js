import { useState } from "react";
import "./App.css";
import ProductSection from "./ProductSection";
import CartSection from "./CartSection";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, reduceProductFromInventory } from "../redux";

function App() {

  let initialCartProducts = [];
  // {"id": 1, "title": "iPad 4 Mini", "price": 500, "purchasedQty": 2},

  let availableProducts = useSelector((state) => state.productSection.availableProducts);

  const dispatch = useDispatch();
  let [cartProducts, setCartProducts] = useState(initialCartProducts);

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
    dispatch(reduceProductFromInventory(id));
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
