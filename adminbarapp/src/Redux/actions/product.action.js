export const LOAD_PRODUCTS_IN_PROGRESS = 'LOAD_PRODUCTS';
export const loadProductsInProgress = () => ({
  type: LOAD_PRODUCTS_IN_PROGRESS,
});

export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const loadProductsSuccess = (products) => ({
  type: LOAD_PRODUCTS_SUCCESS,
  payload: { products },
});

export const LOAD_PRODUCTS_FAILURE = 'LOAD_PRODUCTS_FAILURE';
export const loadProductsFailure = () => ({
  type: LOAD_PRODUCTS_FAILURE,
});

export const REMOVE_PRODUCT_IN_PROGRESS = 'REMOVE_PRODUCT_IN_PROGRESS';
export const removeProductInProgress = (id) => ({
  type: REMOVE_PRODUCT_IN_PROGRESS,
  payload: { id },
});

export const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';
export const removeProductSuccess = (id) => ({
  type: REMOVE_PRODUCT_SUCCESS,
  payload: { id },
});

export const REMOVE_PRODUCT_FAILURE = 'REMOVE_PRODUCT_FAILURE';
export const removeProductFailure = () => ({
  type: REMOVE_PRODUCT_FAILURE,
});

export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const updateProduct = (product) => ({
  type: UPDATE_PRODUCTS,
  payload: { product },
});

export const ADD_PRODUCT_OPTION = 'ADD_PRODUCT_OPTION';
export const addOption = () => ({
  type: ADD_PRODUCT_OPTION,
});

export const REMOVE_PRODUCT_OPTION = 'REMOVE_PRODUCT_OPTION';
export const removeOption = (index) => ({
  type: REMOVE_PRODUCT_OPTION,
  payload: { index },
});

export const SAVE_PRODUCT_IN_PROGRESS = 'SAVE_PRODUCT_IN_PROGRESS';
export const saveProductInProgress = () => ({
  type: SAVE_PRODUCT_IN_PROGRESS,
});

export const SAVE_PRODUCT_SUCCESS = 'SAVE_PRODUCT_SUCCESS';
export const saveProductSuccess = () => ({
  type: SAVE_PRODUCT_SUCCESS,
});

export const SAVE_PRODUCT_FAILURE = 'SAVE_PRODUCT_FAILURE';
export const saveProductFailure = () => ({
  type: SAVE_PRODUCT_FAILURE,
});

export const SAVE_NEW_PRODUCT_IN_PROGRESS = 'SAVE_NEW_PRODUCT_IN_PROGRESS';
export const saveNewProductInProgress = () => ({
  type: SAVE_NEW_PRODUCT_IN_PROGRESS,
});

export const SAVE_NEW_PRODUCT_SUCCESS = 'SAVE_NEW_PRODUCT_SUCCESS';
export const saveNewProductSuccess = (product) => ({
  type: SAVE_NEW_PRODUCT_SUCCESS,
  payload: { product },
});

export const SAVE_NEW_PRODUCT_FAILURE = 'SAVE_NEW_PRODUCT_FAILURE';
export const saveNewProductFailure = () => ({
  type: SAVE_NEW_PRODUCT_FAILURE,
});
