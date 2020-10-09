import {
  LOAD_PRODUCTS_IN_PROGRESS,
  LOAD_PRODUCTS_FAILURE,
  LOAD_PRODUCTS_SUCCESS,
  REMOVE_PRODUCT_IN_PROGRESS,
  REMOVE_PRODUCT_SUCCESS,
  UPDATE_PRODUCTS,
  SAVE_PRODUCT_IN_PROGRESS,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAILURE,
  SAVE_NEW_PRODUCT_IN_PROGRESS,
  SAVE_NEW_PRODUCT_SUCCESS,
  SAVE_NEW_PRODUCT_FAILURE,
} from '../actions/product.action';

const initalState = {
  isLoading: false,
  productData: [],
};

export default function products(state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PRODUCTS_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_PRODUCTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case LOAD_PRODUCTS_SUCCESS: {
      const { products } = payload;
      return {
        ...state,
        isLoading: false,
        productData: products,
      };
    }
    case REMOVE_PRODUCT_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case REMOVE_PRODUCT_SUCCESS: {
      const { id } = payload;
      return {
        ...state,
        productData: state.productData.filter((product) => product._id !== id),
        isLoading: false,
      };
    }
    case UPDATE_PRODUCTS: {
      const { product: productToUpdate } = payload;
      return {
        ...state,
        productData: state.productData.map((product) => {
          if (product._id === productToUpdate.id) {
            return {
              ...product,
              [productToUpdate.name]: productToUpdate.value,
            };
          }
          return product;
        }),
      };
    }
    case SAVE_PRODUCT_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SAVE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SAVE_PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SAVE_NEW_PRODUCT_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SAVE_NEW_PRODUCT_SUCCESS: {
      const { product } = payload;
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        productData: [...state.productData, product],
      };
    }
    case SAVE_NEW_PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
