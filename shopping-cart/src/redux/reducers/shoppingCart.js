import { ADD_PROD_TO_CART, REDUCE_PROD_FROM_INVENTORY } from "../actions/constants";

const initialState = {
  availableProducts: [],
  cartProducts: [],
};

export const productSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case REDUCE_PROD_FROM_INVENTORY:
      let availableProductsCopy = availableProducts.map((product) =>
        product.id === payload ? { ...product, inventory: product.inventory - 1 } : product
      );
      return { ...state, availableProducts: availableProductsCopy };

    default:
      return state;
  }
};

export const cartSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROD_TO_CART:
      const checkForTheProductInCart = (id) => {
        return cartProducts.find((product) => product.id === id);
      };

      if (checkForTheProductInCart(action.payload.id)) {
        let cartProductsCopy = cartProducts.map((prod) =>
          prod.id === action.payload.id ? { ...prod, purchasedQty: prod.purchasedQty + 1 } : prod
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

    default:
      return state;
  }
};
