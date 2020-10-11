import {
  CONFIRM_ORDER_IN_PROCESS,
  CONFIRM_ORDER_SUCCESS,
  CONFIRM_ORDER_FAILURE,
  ADD_PRODUCT_TO_ORDER,
  REMOVE_PRODUCT_FROM_ORDER,
  ACKNOWLEDGE_ORDER,
} from '../actions/order.action';

const initalState = {
  isLoading: false,
  tableNo: 0,
  orderData: [],
  confirmedOrder: '',
};

export const order = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONFIRM_ORDER_IN_PROCESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CONFIRM_ORDER_SUCCESS: {
      return {
        ...state,
        confirmedOrder: ['Success', 'Your order has been accepted!'],
        orderData: [],
        isLoading: false,
      };
    }
    case CONFIRM_ORDER_FAILURE: {
      return {
        ...state,
        confirmedOrder: ['Error', 'Something went wrong with your order, please try again.'],
        isLoading: false,
      };
    }
    case ADD_PRODUCT_TO_ORDER: {
      const { product: productToAdd } = payload;
      const currentData = [...state.orderData];
      const indexOfDup = currentData.findIndex(
        (el) => (el.title && el.subOption) === (productToAdd.title && productToAdd.subOption)
      );
      if (indexOfDup > -1) {
        currentData[indexOfDup].volume = productToAdd.volume + currentData[indexOfDup].volume;
        return {
          ...state,
          orderData: currentData,
        };
      }
      return {
        ...state,
        orderData: [...state.orderData, productToAdd],
      };
    }
    case REMOVE_PRODUCT_FROM_ORDER: {
      const { product: productRemove } = payload;
      return {
        ...state,
        orderData: state.orderData.filter(
          (product) =>
            (product.title && product.subOption) !==
            (productRemove.title && productRemove.subOption)
        ),
      };
    }
    case ACKNOWLEDGE_ORDER: {
      return {
        ...state,
        confirmedOrder: '',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
