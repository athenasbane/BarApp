import {
    ADD_PRODUCT_TO_ORDER,
    REMOVE_PRODUCT_FROM_ORDER,
    CONFIRM_ORDER_IN_PROCESS,
    CONFIRM_ORDER_SUCCESS,
    CONFIRM_ORDER_FAILURE
} from '../actions/order.action';

const initalState = {
    isLoading: false,
    tableNo: 0,
    data: []
};

export const order = (state = initalState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_PRODUCT_TO_ORDER:{
            const { product: productToAdd } = payload;
            const currentData = [...state.data]
            const indexOfDup = currentData.findIndex(el => (el.title && el.subOption) === 
                (productToAdd.title && productToAdd.subOption))
            if (indexOfDup > -1) {
                currentData[indexOfDup].volume = 
                    productToAdd.volume + currentData[indexOfDup].volume
                return {
                    ...state,
                    data: currentData
                }
            }
            return {
                ...state,
                data: [ ...state.data, productToAdd ]

            };
        }
        case REMOVE_PRODUCT_FROM_ORDER: {
            const { product: productRemove } = payload;
            return {
                ...state,
                data: state.data.filter(product => (product.title && product.subOption) !== 
                        (productRemove.title && productRemove.subOption))
            };
        } 
        case CONFIRM_ORDER_IN_PROCESS: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case CONFIRM_ORDER_SUCCESS: {
            const { order } = payload;
            return {
                ...state,
                isLoading: false
            };
        }
        case CONFIRM_ORDER_FAILURE: {
            return {
                ...state,
                isLoading: false,
            };
        }
        default:
            return state;
    }
};