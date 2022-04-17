import { ADD_PROD_TO_CART, REDUCE_PROD_FROM_INVENTORY,RESET_CART } from "../actions/constants";

const initialState1 = {
  availableProducts:  [
    { id: 1, title: "iPad 4 Mini", price: 500, inventory: 2 },
    { id: 2, title: "H&M T-Shirt White", price: 10, inventory: 10 },
    { id: 3, title: "Charli XCX - Sucker CD", price: 20, inventory: 5 },
  ],

};
const initialState2 = {
    cartProducts: [],
}

export const productSectionReducer = (state = initialState1, action) => {
  switch (action.type) {
    case REDUCE_PROD_FROM_INVENTORY:
      let availableProductsCopy = state.availableProducts.map((product) =>
        product.id === action.payload ? { ...product, inventory: product.inventory - 1 } : product
      );
      return { ...state, availableProducts: availableProductsCopy };

    default:
      return state;
  }
};

export const cartSectionReducer = (state = initialState2, action) => {
  switch (action.type) {
    case ADD_PROD_TO_CART:
     let {cartProducts} = state;
      const checkForTheProductInCart = (id) => {
        return cartProducts.find((product) => product.id === id);
      };
 
      if (checkForTheProductInCart(action.payload.id)) {
       
        let cartProductsCopy = cartProducts.map((prod) =>
          prod.id === action.payload.id  ? { ...prod, purchasedQty: prod.purchasedQty + 1 } : prod
        );
        
        return { ...state, cartProducts: cartProductsCopy };
      } else {
   
        let productPurchased = {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          purchasedQty: 1,
        };
        return { ...state, cartProducts: [...state.cartProducts, productPurchased] };
      }

      case RESET_CART:
          return {...state, cartProducts:[]}

    default:
      return state; 
  }
};
