import { 
    loadProductsFailure, 
    loadProductsInProgress, 
    loadProductsSuccess,
    removeProductInProgress,
    removeProductSuccess,
    removeProductFailure, 
    saveProductInProgress, 
    saveProductFailure, 
    saveProductSuccess, 
    saveNewProductInProgress,
    saveNewProductSuccess,
    saveNewProductFailure 
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

export const removeProduct = id => async (dispatch, getState) => {
    dispatch(removeProductInProgress());

    try {

        await fetch(url + `/menu/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${getState().login.token}`
            }
        });

        dispatch(removeProductSuccess(id));
    } catch (e) {
        dispatch(removeProductFailure());
    }
};

export const saveProduct = product => async (dispatch, getState) => {
    dispatch(saveProductInProgress());

    try {
        await fetch(url + `/menu/${product._id}`,
        {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${getState().login.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        dispatch(saveProductSuccess());

    } catch (e) {
        dispatch(saveProductFailure());
    }
};

export const saveNewProduct = product => async (dispatch, getState) => {
    dispatch(saveNewProductInProgress());

    try {
        let response = await fetch(url + '/menu', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${getState().login.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        let data = await response.json();
        dispatch(saveNewProductSuccess(data));
    } catch (e) {
        dispatch(saveNewProductFailure());
    }
}
