import { 
    loadProductsFailure, 
    loadProductsInProgress, 
    loadProductsSuccess,
} from '../actions/product.action';

import { url } from '../../constants'

export const loadProducts = () => async (dispatch, getState) => {
    
    dispatch(loadProductsInProgress());

    try {
        
        let response = await fetch(url + '/menu');
        let data = await response.json();

        dispatch(loadProductsSuccess(data));

    } catch (e) {
        dispatch(loadProductsFailure());
    }

};

