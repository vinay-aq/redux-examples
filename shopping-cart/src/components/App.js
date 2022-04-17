import "./App.css";
import ProductSection from "./ProductSection";
import CartSection from "./CartSection";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, reduceProductFromInventory,resetCart } from "../redux";

function App() {

  // let initialCartProducts = [];
  // {"id": 1, "title": "iPad 4 Mini", "price": 500, "purchasedQty": 2},

  let availableProducts = useSelector((state) => state.productSection.availableProducts);
  let cartProducts = useSelector((state)=> state.cartSection.cartProducts)
  const dispatch = useDispatch();

  const handleAddCart = (id) => {
    dispatch(reduceProductFromInventory(id));
    let product = availableProducts.find(prod => prod.id===id);
    dispatch(addProductToCart(product))
  };



  return (
    <div className="App">
      <h1>Shopping Cart Example</h1>
      <hr />
      <ProductSection availableProducts={availableProducts} onClickAddToCart={handleAddCart} />
      <hr />
      <CartSection cartProducts={cartProducts} checkOutCart={()=>dispatch(resetCart())} />
    </div>
  );
}

export default App;
