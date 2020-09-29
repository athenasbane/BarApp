import {
    LOAD_PRODUCTS_IN_PROGRESS,
    LOAD_PRODUCTS_FAILURE,
    LOAD_PRODUCTS_SUCCESS
} from '../actions/product.action';

const initalState = {
    isLoading: false,
    data: [],
};

export const products = (state = initalState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_PRODUCTS_IN_PROGRESS: {
            return {
                ...state,
                isLoading: true
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
                data: products
            };
        }
        default: 
            return state; 
    }
};