export const ADD_PRODUCT_TO_ORDER = 'ADD_PRODUCT_TO_ORDER';
export const addProductToOrder = (product) => ({
  type: ADD_PRODUCT_TO_ORDER,
  payload: { product },
});

export const REMOVE_PRODUCT_FROM_ORDER = 'REMOVE_PRODUCT_FROM_ORDER';
export const removeProductFromOrder = (product) => ({
  type: REMOVE_PRODUCT_FROM_ORDER,
  payload: { product },
});

export const CONFIRM_ORDER_IN_PROCESS = 'CONFIRM_ORDER_IN_PROCESS';
export const confirmOrderInProcess = (order) => ({
  type: CONFIRM_ORDER_IN_PROCESS,
  payload: { order },
});

export const CONFIRM_ORDER_SUCCESS = 'CONFIRM_ORDER_SUCCESS';
export const confirmOrderSuccess = (order) => ({
  type: CONFIRM_ORDER_SUCCESS,
  payload: { order },
});

export const CONFIRM_ORDER_FAILURE = 'CONFIRM_ORDER_FAILURE';
export const confirmOrderFailure = () => ({
  type: CONFIRM_ORDER_FAILURE,
});
